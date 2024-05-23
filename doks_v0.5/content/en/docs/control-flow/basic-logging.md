---
title: "Logging Fundamentals"
description: "Logging basics in ETLBox"
lead: "ETLBox can work with the Microsoft.Extensions.Logging.ILogger interface for logging. This article will show you how to connect ETLBox logging with an existing ILogger instance."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 930
toc: true
---

## Microsoft Logging Extensions

ETLBox uses `Microsoft.Extensions.Logging` by default. This means you can use any logging framework that works with it, like {{< link-ext url="https://nlog-project.org/" text="NLog" >}} or {{< link-ext url="https://serilog.net/" text="Serilog" >}}.

To use your favorite logging framework, add it as a dependency to your project. Make sure it supports the Microsoft.Extensions.Logging API.

### Structured logging

All logging messages of ETLBox are structured. Depending on your logging framework, you may analyse the messages either as whole or access parts of it. 

Each message has the following values within its scope:

- The name of the component: `taskName`
- The class name of the task or component that produces the log output: `taskType`
- The unique hash value of the specific task or component: `taskHash`

Some components in ETLBox may utilize other ETLBox components during execution. E.g. the DbMerge will use an internal network, which contains a LookupTransformation, and multiple DbDestinations. These components will produce the log output for the DbMerge. 

To identify the parent to which the component belongs, the scope is extended with:
- The name of the Root/Parent component: `rootTaskName`
- The task type of the Root/Parent: `rootTaskType`
- The unique hash value of the Root/Parent: `rootTaskHash`

Some messages contain the following even items: 
- Action of the message. Action can be 'START' for first log message or 'END' (component finished), other log messages don't have an action: `action`
- Some messages log the current progress and have a progress count value: `progressCount`


#### Extending the scope

You can extend the scope with custom parameter by adding values to `Settings.AdditionalScope`.
```C#
Settings.AdditionalScope = new Dictionary<string, object> {
    { "env", "test" }
};
```

If you are using the (optional) nuget package `ETLBox.Logging`, you can set up information about the current load process when using the  `LoadProcess` class. If you use this class to start/end/abort load process, the `AdditionalScope` dictionaly will be automatically extended with the `loadProcessId` of the current load process.

## Disable logging

Perhaps you want some particular tasks or components not to produce any log output, but you don't want to remove the logging completely.
For this case you can use the `DisableLogging` property on every task or component in ETLBox. E.g., if you create a new DbSource, just set the property to true:

```C#
DbSource source = new DbSource("TableName") { DisableLogging = true};
```

If you want to disable logging in general for all tasks, you can set the static property `DisableAllLogging` in the ControlFlow class:

```C#
Logging.DisableAllLogging = true;
```

Whenever set to true, no logging output will be produced. When set back to false, logging will be activated again.


## Example logging with NLog

The following chapters will describe an example logging setup using NLog. 

To get started with nlog, you  need to add {{< link-ext url="https://www.nuget.org/packages/NLog.Extensions.Logging/" text="NLog.Extensions.Logging" >}} as a package reference to your project. 

We recommend to read the {{< link-ext url="https://github.com/NLog/NLog/wiki/Getting-started-with-.NET-Core-2---Console-application" text="introduction into logging with NLog" >}}.

In order to use logging with Nlog, you have to create a `nlog.config` file (with this exact name) and put it into the root folder 
of your project. Make sure that it is copied into your output directory. 

### Create log instance

Now we need to create a logger instance, and then assign it to the static property `Settings.LogInstance`. 

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
ETLBox.Settings.LogInstance = loggerFactory.CreateLogger("Default");
```

Depending on your project type, you may already have an instance of an ILogger object injected in your code. Then you simply need to assign this instance to `Settings.LogInstance`, and you are ready to go. 


### Logging into files

NLog can be easily configured to have your logging output stored in files, or to other logger targets like the console output. Here is an example for a simple configuration that will 
create a log file in your application directory, and display a formatted log output in your console window.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<!-- XSD manual extracted from package NLog.Schema: https://www.nuget.org/packages/NLog.Schema-->
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd" xsi:schemaLocation="NLog NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      autoReload="true"
      internalLogFile="console-example-internal.log"
      internalLogLevel="Info" >

    <!-- the targets to write to -->
    <targets>
        <target name="logfile" xsi:type="AsyncWrapper"
                queueLimit="5000"
                overflowAction="Discard">
            <target xsi:type="File" fileName="log.txt"
                      deleteOldFileOnStartup="true"
                      layout="${longdate}|${level}|${mdlc:item=taskType}|${event-properties:item=action}|${mdlc:item=taskHash}|${mdlc:item=taskName}|${event-properties:item=progressCount}|${message}" />
        </target>
        <target xsi:type="Console" name="logconsole"                      
                       layout="${longdate}|${level}|${pad:padding=20:fixedLength=true:inner=${mdlc:item=taskType}}|${pad:padding=5:fixedLength=true:inner=${event-properties:item=action}}|${pad:padding=5:fixedLength=true:inner=${mdlc:item=taskHash}}|${pad:padding=20:fixedLength=true:inner=${mdlc:item=taskName}}|${message}"  />
    </targets>

    <!-- rules to map from logger name to target -->
    <rules>
        <logger name="*" minlevel="Debug" writeTo="logfile,logconsole" />
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

//The name of the parent component, if applicable
layout="${mdlc:item=rootTaskName}"

//The class name of the parent task or component, if applicable
layout="${mdlc:item=rootTaskType}" 

//The unique hash value of the parent task or component, if applicable
layout="${mdlc:item=rootTaskHash}"

//Actions can be 'START' (first log message) or 'END' (component finished)
//other log messages don't have an action
layout="${event-properties:item=action}"

//Some messages log the current progress and have a progress count value
layout="${event-properties:item=progressCount}"
```

When using `ETLBox.Logging` and the `LoadProcess` task, the `AdditionalScope` dictionary is extended with this item:

```C#
//If a load process was started, the load process id is in here
layout="${mdlc:item=loadProcessId}"
```

### Debugging logging issues

NLog normally behaves very "fault-tolerant". By default, if something is not setup properly or does not work
when NLog tries to log, it just "stops" working without throwing an exception or stopping the execution.
This behaviour is very desirable in a production environment, but hard to debug. 

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