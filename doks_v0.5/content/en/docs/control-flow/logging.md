---
title: "Logging"
description: "Details about logging in ETLBox"
lead: "On top of NLog, ETLBox offers you support to create a simple but still powerful database logging, which is simple to set up
and eays to maintain."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 930
toc: true
---

## Logging Extensions

By default, ETLBox uses Microsoft.Extensions.Logging. This allows you to use your logging framework of choice, e.g. {{< link-ext url="https://nlog-project.org/" text="NLog" >}} or {{< link-ext url="https://serilog.net/" text="Serilog" >}}. 

In order to use your preferred logging framework, you need to add it as dependency to your project. 
Make sure that it supports the {{< link-ext url="https://docs.microsoft.com/en-us/dotnet/core/extensions/logging?tabs=command-line" text="Microsoft.Extensions.Logging API" >}}. 

The following chapter will give some example how to use NLog as logging provider. If you are choosing another logging framework, please 

### Structured logging

All logging messages of ETLBox are structured. Depending on your logging framework, you may analyse the messages either as whole or access parts of it. 

Each message has the following values within its scope:

- The name of the component: `taskName`
- The class name of the task or component that produces the log output: `taskType`
- The unique hash value of the specific task or component: `taskHash`

Some messages contain the following items: 
- Action of the message. Action can be 'START' for first log message or 'END' (component finished), other log messages don't have an action: `action`
- Some messages log the current progress and have a progress count value: `progressCount`

## Example logging with NLog

The following chapters will describe an example logging setup using NLog. 

First you need to add {{< link-ext url="https://www.nuget.org/packages/NLog.Extensions.Logging/" text="NLog.Extensions.Logging" >}} as a package reference to your project. 

In order to use logging with Nlog, you have to create a `nlog.config` file (with this exact name) and put it into the root folder 
of your project. Make sure that it is copied into your output directory. 

A simple and very basic nlog.config would look like this

```xml
<?xml version="1.0" encoding="utf-8"?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xsi:schemaLocation="NLog NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <rules>
    <logger name="*" minlevel="Info" writeTo="console" />
  </rules>
  <targets>
    <target name="console" xsi:type="Console" />     
  </targets>
</nlog>
```

Make sure the config file is copied into the output directory where you build executables are dropped. 
Your project configuration file .csproj should contain something like this:

```C#
<Itemgroup>
...
  <None Update="nlog.config">
    <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
  </None>
</Itemgroup>
```

### Create log instance

Now we need to create a logger instance, and then assign it to the static property `Logging.LogInstance`. 

There are two different ways to create a log instance that implements ILogger: Either we can use the `LoggerFactory`, or we use an approach that uses Dependency injection. 

Here is the code to create a NLog instance using the `LoggerFactory`:

```C#
using var loggerFactory = LoggerFactory.Create(builder => {
    builder
        .AddFilter("Microsoft", Microsoft.Extensions.Logging.LogLevel.Warning)
        .AddFilter("System", Microsoft.Extensions.Logging.LogLevel.Warning)
        .SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace)
        .AddNLog("nlog.config");
});
ETLBox.Logging.Logging.LogInstance = loggerFactory.CreateLogger("Default");
```

Depending on your project type, you may already have an instance of an ILogger object injected in your code. Then you simply need to assign this instance to `Logging.LogInstance`, and you are ready to go. 


### Debugging logging issues

NLog normally behaves very "fault-tolerant". By default, if something is not setup properly or does not work
when NLog tries to log, it just "stops" working without throwing an exception or stopping the execution.
This behavior is very desirable in a production environment, but hard to debug. 

If you need to debug Nlog, you can change the nlog root-element of the nlog.config  into:

```xml
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xsi:schemaLocation="NLog NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      throwConfigExceptions="true"
      autoReload="true"
      internalLogFile="console-example-internal.log"
      internalLogLevel="Info">
```

With this configuration it will raise an exception and also log it into a file.


### Logging into files

Nlog can be easily configured to have your logging output stored in files. Here is an example for a simple configuration that will 
create a Log - folder within your application directory and have a file for every error level provided by Nlog.
(NLog does differentiate each log entry by a log level, which are: Trace, Debug, Info, Warn, Error and Fatal.)

```xml
<?xml version="1.0" encoding="utf-8"?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xsi:schemaLocation="NLog NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <targets>
    <target name="file" xsi:type="AsyncWrapper"
            queueLimit="5000"
            overflowAction="Discard">
    <target xsi:type="File" fileName="${basedir}/logs/${level}.txt"
              deleteOldFileOnStartup="true"
              layout="${longdate}|${pad:padding=10:fixedLength=true:inner=${mdlc:item=stage}}|${pad:padding=20:fixedLength=true:inner=${mdlc:item=taskType}}|${pad:padding=5:fixedLength=true:inner=${mdlc:item=action}}|${pad:padding=50:fixedLength=true:inner=${mdlc:item=taskName}}|${message}" />
    </target>
  </targets>
  <rules>
    <logger name="*" minlevel="Debug" writeTo="file" />
  </rules>
</nlog>
```

As you can see, the log output into the file is formatted using a particular NLog notation in the Layout attribute. NLog 
does provide {{< link-ext url="https://github.com/NLog/NLog/wiki/MDLC-Layout-Renderer" text="LayoutRenderer" >}} which allow you to access structured log messages. You can either access the whole message
using `${message}` or access particular items in the log message itself (with `event-properties` ) or items which are in the scope of the message (with `mdlc`). 

The following items are possible values when accessing structured log messages in ETLBox

```C#     
//The complete log message
layout="${message}" 

//The name of the component
layout="${mdlc:item=taskName}"

//The class name of the task or component that produces the log output:
layout="${mdlc:item=taskType}" 

//The unique hash value of the specific task or component
layout="${mdlc:item=taskHash}"

//The string value stored in static property Logging.Stage
layout="${mdlc:item=stage}"

//If a load process was started, the load process id is in here
layout="${mdlc:item=loadProcessId}"

//Actions can be 'START' (first log message) or 'END' (component finished)
//other log messages don't have an action
layout="${event-properties:item=action}"

//Some messages log the current progress and have a progress count value
layout="${event-properties:item=progressCount}"
```

The details for each layout renderer will explained in more details in the following chapters.

### Setting the logging stage

One thing you perhaps want to know in your logging output is the current stage of your data processing. Think you this as a category
for your log output - if things happen during the setup of your database, the Stage could be "SETUP" - if you are currently staging your
data from your sources into your database the stage could be "STAGING".

To set up or modify the current stage, just change the static property `Stage` in the `Logging` class:

```C#
Logging.STAGE = "SETUP"
//some logging
Logging.STAGE = "STAGING"
```

### Disable logging

Perhaps you want some particular tasks or components not to produce any log output, but you don't want to remove the logging completely.
For this case you can use the `DisableLogging` property on every task or component in ETLBox. E.g., if you create a new DbSource, just set 
the property to true:

```C#
DbSource source = new DbSource("TableName") { DisableLogging = true};
```

If you want to disable logging in general for all tasks, you can set the static property `DisableAllLogging` in the ControlFlow class:

```C#
Logging.DisableAllLogging = true;
```

Whenever set to true, no logging output will be produced. When set back to false, logging will be activated again.


## How log output is created

After you added a log table (or all other nlog target like file or console output), 
all log message generated from any control flow task or data flow component will be redirected to this target. 

The following example will create 4 rows in your log table. Every time a tasks or component starts, 
it will create a log entry with an action 'START'. When it's done with its execution, it will create 
another log entry with action type 'END'

```C#
LogSection.Execute("some custom code", () => { 
    SqlTask.ExecuteNonQuery("Select 1 as test");
});
```

If you want to produce your own log output, you can use the `LogTask`. This will create only one row in your log output, with 
the TaskAction "LOG". The message here would be "Some warning!".

```C#
LogTask.Warn("Some warning!");
```

Also you can define the nlog level with the log task. E.g.:

```C#
LogTask.Trace("Some text!");
LogTask.Debug("Some text!");
LogTask.Info("Some text!");
LogTask.Error("Some text!");
LogTask.Fatal("Some text!");
```

## Logging to database with Nlog

Of course logging to console output or to a file is perhaps not sufficient. If you want to have logging tables in your database, 
ETLBox comes with some additions to the default logging mechanism provided by your logging provider. 

### Method 1: Extend the nlog.config

One way to have logging into the database enabled is to extend the nlog configuration and add your database as target.
This way is the most flexible one, but it involves some manual steps: You have to set up the logging table yourself,
and define the database target in your nlog.config file. 

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
        INSERT INTO etllog (LogDate, Level, Stage, Message, TaskType, TaskAction, TaskHash)
        SELECT @LogDate, @Level, @Stage, @Message, @Type, @Action, @Hash
      </commandText>
      <parameter name="@LogDate" layout="${date:format=yyyy-MM-ddTHH\:mm\:ss.fff}" />
      <parameter name="@Level" layout="${level}" />
      <parameter name="@Stage" layout="${mdlc:item=stage}" />
      <parameter name="@Message" layout="${message}" />
      <parameter name="@Type" layout="${mdlc:item=taskType}" />
      <parameter name="@Action" layout="${mdlc:item=action}" />
      <parameter name="@Hash" layout="${mdlc:item=taskHash}" />
    </target>
  </targets>
  <rules>
    <logger name="*" minlevel="Info" writeTo="database" />
  </rules>
</nlog>
```


### Method 2: Add the database target programmatically

Alternatively, you can use some pre-defined C# code to setup the database target programmatically. 

The following code snipped will do this for you:

```C#
var SqlConnectionManager connection = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;Initial Catalog=ETLBox_Logging");
LogTask.CreateLogTable(connection, "etlbox_log");
var newTarget = new CreateDatabaseTarget(connection, "etlbox_log").GetNLogDatabaseTarget();
NLog.Config.SimpleConfigurator.ConfigureForTargetLogging(newTarget, NLog.LogLevel.Info);
```

{{< alert text="The class CreateDatabaseTarget is not part of ETLBox and needs to be added manually to your project (see code at the end of this chapter). This will likely be fixed in the future" >}}

In this example, `LogTable.CreateLogTable` will create a logging table. If no table name is provided, the default table name "etlbox_log" is used. The table structure will look like this:

Column name     |Data type|Remarks|
----------------|---------|-------|
id              |Int64    |Identity
log_date        |DateTime |
level           |String   |
stage           |String   |
message         |String   |
task_type       |String   |
task_action     |String   |
task_hash       |String   |
source          |String   |(can be used for custom values)
load_process_id |Int64    |Id of etlbox_loadprocess table

This will work on all supported databases - the real data type will be reflected by the corresponding database specific type. E.g. Int64 is 
a BIGINT on SqlServer and INTEGER on SqlLite
The id column is an Identity (or auto increment) column, and the only one not nullable.

The `CreateDatabaseTarget` class will add the corresponding nlog database target to the nlog configuration and return the new target configuration.
This happens to the configuration that Nlog keeps after reading the nlog.config file - the file itself will be untouched.

Currently, ETLBox does not provide this helper class. You need to add it manually to your code:

```C#
using ETLBox.Connection;
using ETLBox.Helper;
using NLog.Targets;
using System;

namespace ETLBoxTests.Logging
{
    /// <summary>
    /// Create a database target configuration for NLog, including insert statements.
    /// This target is particular designed for the default etlbox log table.
    /// </summary>
    internal class CreateDatabaseTarget
    {
        internal string CommandText =>
$@"INSERT 
    INTO {TN.QuotatedFullName}   
    ( 
        {QB}log_date{QE}
    ,   {QB}level{QE}
    ,   {QB}stage{QE}
    ,   {QB}message{QE}
    ,   {QB}task_name{QE}
    ,   {QB}task_type{QE}
    ,   {QB}action{QE} 
    ,   {QB}task_hash{QE}
    ,   {QB}source{QE}
    ,   {QB}load_process_id{QE}
    )
    SELECT  {LogDate}
        ,   {PP}LogLevel
        ,   CAST( {PP}Stage as {VARCHAR}(20) )
        ,   CAST( {PP}Message as {VARCHAR}(4000) )
        ,   CAST( {PP}Name as {VARCHAR}(1000) )
        ,   CAST( {PP}Type as {VARCHAR}(200) )
        ,   {PP}Action
        ,   {PP}Hash
        ,   CAST( {PP}Logger as {VARCHAR}(20) )
        ,   CASE 
                WHEN {WHENLOADPROCESS}
                THEN NULL
                ELSE CAST({PP}LoadProcessId AS {INT})
            END 
    {FROMDUAL}";

        ObjectNameDescriptor TN => new ObjectNameDescriptor(LogTableName, ConnectionManager.QB, ConnectionManager.QE);
        string QB => ConnectionManager.QB;
        string QE => ConnectionManager.QE;
        string PP => ConnectionManager.PP;

        string LogDate {
            get {
                if (ConnectionManager.ConnectionType == ConnectionType.SqlServer || ConnectionManager.ConnectionType == ConnectionType.MySql)
                    return $"CAST( {PP}LogDate AS DATETIME )";
                else if (ConnectionManager.ConnectionType == ConnectionType.Postgres)
                    return $"CAST( {PP}LogDate AS TIMESTAMP )";
                else if (ConnectionManager.ConnectionType == ConnectionType.Oracle)
                    return $"TO_TIMESTAMP( {PP}LogDate, 'YYYY-MM-DD HH24:MI:SS.FF' )";
                else
                    return $"{PP}LogDate";
            }
        }

        string VARCHAR {
            get {
                if (ConnectionManager.ConnectionType == ConnectionType.Oracle)
                    return "VARCHAR2";
                else if (this.ConnectionManager.ConnectionType == ConnectionType.MySql)
                    return "CHAR";
                else return "VARCHAR";
            }
        }
        string INT {
            get {
                if (this.ConnectionManager.ConnectionType == ConnectionType.MySql)
                    return "UNSIGNED";
                else if (this.ConnectionManager.ConnectionType == ConnectionType.Db2)
                    return "VARCHAR(20)";
                else
                    return "INT";
            }
        }

        string WHENLOADPROCESS {
            get {
                if (this.ConnectionManager.ConnectionType == ConnectionType.Db2)
                    return $@"{PP}LoadProcessId IS NULL OR CAST({PP}LoadProcessId AS VARCHAR(20))= '' OR CAST({PP}LoadProcessId AS VARCHAR(20)) = '0'";
                else
                    return $@"{PP}LoadProcessId IS NULL OR {PP}LoadProcessId = '' OR {PP}LoadProcessId = '0'";
            }
        }

        string FROMDUAL {
            get {
                if (this.ConnectionManager.ConnectionType == ConnectionType.Oracle)
                    return "FROM DUAL";
                else if (this.ConnectionManager.ConnectionType == ConnectionType.Db2)
                    return "FROM SYSIBM.SYSDUMMY1";
                else
                    return "";
            }
        }

        internal IConnectionManager ConnectionManager { get; set; }
        internal string LogTableName { get; set; }

        internal CreateDatabaseTarget(IConnectionManager connectionManager, string logTableName) {
            this.ConnectionManager = connectionManager;
            this.LogTableName = logTableName;
        }

        internal DatabaseTarget GetNLogDatabaseTarget() {
            DatabaseTarget dbTarget = new DatabaseTarget();
            AddParameter(dbTarget, "LogDate", @"${date:format=yyyy-MM-dd HH\:mm\:ss.fff}");
            AddParameter(dbTarget, "LogLevel", @"${level}");
            AddParameter(dbTarget, "Stage", @"${mdlc:item=stage}");
            AddParameter(dbTarget, "Message", @"${message}");
            AddParameter(dbTarget, "Name", @"${mdlc:item=taskName}");
            AddParameter(dbTarget, "Type", @"${mdlc:item=taskType}");
            AddParameter(dbTarget, "Action", @"${event-properties:item=action}");
            AddParameter(dbTarget, "Hash", @"${mdlc:item=taskHash}");
            AddParameter(dbTarget, "Logger", @"${logger}");
            AddParameter(dbTarget, "LoadProcessId", @"${mdlc:item=loadProcessId}");

            dbTarget.CommandText = new NLog.Layouts.SimpleLayout(CommandText);
            if (ConnectionManager.ConnectionType == ConnectionType.SqlServer)
                dbTarget.DBProvider = "Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient";
            else if (ConnectionManager.ConnectionType == ConnectionType.Postgres)
                dbTarget.DBProvider = "Npgsql.NpgsqlConnection, Npgsql";
            else if (ConnectionManager.ConnectionType == ConnectionType.MySql)
                dbTarget.DBProvider = "MySql.Data.MySqlClient.MySqlConnection, MySql.Data";
            else if (ConnectionManager.ConnectionType == ConnectionType.SQLite)
                dbTarget.DBProvider = "System.Data.SQLite.SQLiteConnection, System.Data.SQLite";
            else if (ConnectionManager.ConnectionType == ConnectionType.Oracle)
                dbTarget.DBProvider = "Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess";
            else if (ConnectionManager.ConnectionType == ConnectionType.Db2)
                dbTarget.DBProvider = "IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core";
            else
                throw new NotSupportedException("ETLBox: The used connection manager can not be used as database target for NLog!");
            dbTarget.ConnectionString = ConnectionManager.ConnectionString.Value;
            return dbTarget;
        }

        private void AddParameter(DatabaseTarget dbTarget, string parameterName, string layout) {
            var par = new DatabaseParameterInfo(parameterName, new NLog.Layouts.SimpleLayout(layout));
            dbTarget.Parameters.Add(par);
        }
    }
}
```

Now, if you call any task or component that creates log output, it will automatically be logged to the newly create database table.

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


