---
title: "Logging Extended"
description: "Details about the logging extensions in ETLBox"
lead: "The nuget package ETLBox.Logging offers additional helpful classes to enrich logging with ETLBox."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 740
toc: true
---

## Logging Extensions

The nuget package `ETLBox.Logging` comes with useful helper classes that can support you in setting up your logging environment.

{{< alert text="Please note that you must add this package before you can use the classes described below." >}}


## Error Table

The `CreateErrorTableTask` will create a table in your database with the following layout:

Column name     |Data type|Allow Nulls|
----------------|---------|-------|
ErrorText       |Text     |False
ExceptionType   |Varchar(1000) |False
RecordAsJson    |Text     |True
ReportTime      |DateTime |False
Source          |Varchar(1000) |True
Context         |Varchar(1000) |True

The column names will match with the property names `ETLBoxError`, which is the output type when redirecting errors using `LinkErrorTo()`.

```C#
CreateErrorTableTask.Create(ConnectionManager, "etlbox_error");
```

## Log Output

### LogSection

The LogSection allows you to wrap custom code with your own logging messages - these messages created by the log output will have the same log items as all other log messages produce by ETLBox.

The following example will create 4 rows in your log output. Every time a tasks or component starts,
it will create a log entry with an action 'START'. When it's done with its execution, it will create
another log entry with action type 'END'

```C#
LogSection.Execute("some custom code", () => {
    SqlTask.ExecuteNonQuery("Select 1 as test");
});
```

### LogTask

If you want to produce only a single log message, you can use the `LogTask`. This will create only one row in your log output, with the event item `action` "LOG". The message here would be "LOG: Some warning!".

```C#
LogTask.Warn("{action}: Some warning!", "LOG");
```

Also you can define the level with the log task. E.g.:

```C#
LogTask.Trace("Some text!");
LogTask.Debug("Some text!");
LogTask.Info("Some text!");
LogTask.Error("Some text!");
LogTask.Fatal("Some text!");
```

## Logging of Load Processes

Additionally to the traditional nlog setup where log information is send to any target by changing the configuration,
ETLBox comes with a set of Tasks to control your ETL processes - so called "Load processes".

The use case for a load process table is simple - if you have one log table, this table will store a log messages for an ETL job.
If the job run again, more or less the same log information is written in the log table - with different timestamps of course. If you
need to identify which log entry relates to which job run, there are some information missing. This is where the load process table comes in.

You can use the task `LoadProcessTask` to create and control a load process table.

```C#
LoadProcessTask.CreateTable(connection,"etlbox_loadprocess");
```

This will create a table "etlbox_loadprocess". This table will look like this:

Column name     |Data type|Remarks|
----------------|---------|-------|
id              |Int64    |Identity
start_date      |DateTime |
end_date        |DateTime |
source          |String   |
source_id       |Int      |
process_name    |String   |
start_message   |String   |
is_running      |Int16    |0 or 1
end_message     |String   |
was_successful  |Int16    |0 or 1
abort_message   |String   |
was_aborted     |Int16    |0 or 1


The table will contain information about the ETL processes that you started in your code with the `Start(..)` method.
To end or abort a process, there is the `End(..)` or `Abort(..)` methods.
Let's look at the following  example for logging into the load process table.

```C#
LoadProcess process = LoadProcessTask.Start("Process 1", "Starting process");

try {
/* ... some tasks or data flow */
   process.End("The process ended successfully");
} catch (Exception e) {
   process.Abort(e.ToString());
}
```

After calling `Start()` a new entry was created in the `etlbox_loadprocess` table. This entry had a start date and contained
the process name "Process 1" and the start message "Starting process". The column `is_running` is 0.
Calling the `End()` will set an end date and change the columns `is_running` to 0 and was_successful to 1. Vice versa will
`Abort())` set `is_running` to 0 and `was_aborted` to 1. The abort message would contain the exception as string.

When the load process entry is added to the table, a new id is created.
All information about the load process (including the id) can be accessed in the current `process` variable.



## Logging to database

Of course logging to console output or to a file is perhaps not sufficient. If you want to have logging tables in your database, you can modify your logging setup to directly write into your database table.

### Creation of log table

First you need to create a database table that is capable of holding the log information that you are interested in
The `LogTask` does come with a `CreateLogTable` method that will create a table with the following structure:

Column name     |Data type|Allow Nulls|
----------------|---------|-------|
id              |Int64    |false(Identity/Serial/Auto increment)
log_date        |DateTime |true
level           |VARCHAR(10) |true
message         |VARCHAR(4000) |true
task_name       |VARCHAR(1000) |true
task_type    |VARCHAR(200)  |true
action   |VARCHAR(5)   |true
task_hash      |CHAR(40)    |true
source     |VARCHAR(20)   |true
load_process_id  |INT64    |true

```C#
LogTask.CreateLogTable(ConnectionManager, "etlbox_log");
```

### Extending NLog

One way to have logging into the database enabled with NLog is to extend the nlog configuration and add your database as target.

The modification to the nlog.config could  like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xsi:schemaLocation="NLog NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <targets>
    <target xsi:type="Database" name="database"
       useTransactions="false" keepConnection="true">
      <commandText>
        INSERT INTO etlbox_log (log_date, level, message, task_name, task_type, action, task_hash, source, load_process_id)
        SELECT @log_date, @level, @message, @task_name, @task_type, @action, @task_hash, 'ETL', @load_process_id
      </commandText>
      <parameter name="@log_date" layout="${date:format=yyyy-MM-ddTHH\:mm\:ss.fff}" />
      <parameter name="@level" layout="${level}" />
      <parameter name="@message" layout="${message}" />
      <parameter name="@task_name" layout="${mdlc:item=taskName}" />
      <parameter name="@task_Type" layout="${mdlc:item=taskType}" />
      <parameter name="@action" layout="${event-properties:item=action}" />
      <parameter name="@task_hash" layout="${mdlc:item=taskHash}" />
      <parameter name="@load_process_id" layout="${mdlc:item=loadProcessId}" />
    </target>
  </targets>
  <rules>
    <logger name="*" minlevel="Debug" writeTo="database" />
  </rules>
</nlog>
```


## Log Settings

The static `LogSettings` class in the namespace `ETLBox.Logging` contains the following variables:

- `LogTable`: Name of the log table created by `LogTask.CreateLogTable`
- `LoadProcessTable`: Name of the load process table created by `LoadProcessTask.CreateTable`
- `CurrentLoadProcess`: Information about the current running load processed initiated by `Start()` on a `LoadProcess`


