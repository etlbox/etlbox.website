---
title: "Structured Logging"
description: "ETLBox logging captures structured execution details for all tasks and components."
lead: "Logging in ETLBox provides insight into task execution, performance, and errors across your data workflows. Built on top of Microsoft’s logging extensions, it supports structured log output, flexible integration with logging frameworks like NLog and Serilog, and detailed context for each task. Whether you're running pipelines in production or debugging locally, ETLBox logging helps you track exactly what happened, when, and why."
draft: false
images: []
menu:
  docs:
    parent: "logging"
weight: 650
toc: true
chatgpt-review: true
---

## Microsoft Logging Extensions

ETLBox integrates with `Microsoft.Extensions.Logging`, which allows you to connect it to any compatible logging provider such as {{< link-ext text="NLog" url="https://nlog-project.org/" >}} or {{< link-ext text="Serilog" url="https://serilog.net/" >}}. This makes it easy to capture and route structured log messages from ETLBox tasks and components into log files, monitoring systems, or consoles.

### Structured Logging

All ETLBox log output is structured. Each log entry includes metadata that provides context about the component generating the message. These metadata values are available via structured log scopes and include:

- `taskName`: The name of the component (default is the class name; can be overridden via `TaskName`)
- `taskType`: The class name of the component (e.g., `DbSource`, `CsvSource`)
- `taskHash`: A unique hash representing the component instance

If the component is part of a parent task (e.g., a `LookupTransformation` within a `DbMerge`), ETLBox also includes:

- `rootTaskName`, `rootTaskType`, `rootTaskHash`: Metadata from the top-level component

In addition, some log entries contain event-specific information:

- `action`: Indicates phase such as `START` or `END`
- `progressCount`: A counter for tracking progress in batch or row-based operations

You can enrich the logging scope with your own custom metadata:

```csharp
Settings.AdditionalScope = new Dictionary<string, object> {
    { "env", "test" },
    { "runId", "2024-04-01_01" }
};
```

If you use the optional `ETLBox.Logging` package, and manage your ETL using `LoadProcess`, the `loadProcessId` will also be added to the scope automatically.

### Configuring Log Output

To control the level of detail in your logs, use the `LogThreshold` property on individual tasks or the global `Settings.LogThreshold`. This determines how frequently progress log messages are emitted.

- `1`: Log every row or batch
- `n`: Log after every *n* rows or batches

Example:

```csharp
DbSource source = new DbSource("InputTable") {
    LogThreshold = 100
};
```

This logs progress every 100 records processed.

### Disabling Logging

You can selectively disable logging:

- **For a specific task or component** using `DisableLogging = true`:

```csharp
DbDestination dest = new DbDestination("TargetTable") {
    DisableLogging = true
};
```

- **Globally for all components**:

```csharp
Logging.DisableAllLogging = true;
```

Logging can be re-enabled at any time by resetting these flags.


Understood. Here's the refined and streamlined **Serilog** section for your documentation. This version improves clarity, aligns with .NET logging best practices, and stays focused on ETLBox integration.

## Serilog Integration

ETLBox integrates seamlessly with {{< link-ext text="Serilog" url="https://serilog.net/" >}} through `Microsoft.Extensions.Logging`. This allows you to route ETLBox log messages into any Serilog sink (e.g., console, file, Elasticsearch).

To use Serilog, install the following NuGet packages:
- `Serilog.Extensions.Logging`
- `Serilog.Extensions.Hosting`
- Any additional sink you want to use (e.g., `Serilog.Sinks.Console`, `Serilog.Sinks.File`)

### Configuration Example (Console Application)

```csharp
var serilogLogger = new LoggerConfiguration()
    .Enrich.FromLogContext()
    .MinimumLevel.Debug()
    .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level:u3} {taskName}] {Message:lj}{NewLine}")
    .CreateLogger();

Settings.LogInstance = new SerilogLoggerFactory(serilogLogger).CreateLogger("Default");
```

This assigns the Serilog logger to ETLBox via `Settings.LogInstance`. Log entries will now flow through Serilog’s pipeline.

### Structured Output

ETLBox provides structured logging fields that Serilog can access in the output template:

- `{taskName}`
- `{taskType}`
- `{taskHash}`
- `{rootTaskName}`
- `{rootTaskType}`
- `{rootTaskHash}`
- `{action}`
- `{progressCount}`

These values can be used directly in Serilog's output templates or routed to sinks that support structured logging (e.g., JSON sinks).

> **Note:** Make sure to call `.Enrich.FromLogContext()` in your configuration to enable scope-based property tracking from ETLBox.


## NLog Integration

ETLBox supports logging via `NLog` using the `Microsoft.Extensions.Logging` interface. This lets you route ETLBox log output to files, the console, or any other NLog-supported target.

Refer to the official {{< link-ext text="NLog setup guide for .NET" url="https://nlog-project.org/" >}} for more context.

Create a `nlog.config` file and place it in the root of your project. Ensure its **Copy to Output Directory** property is set to `Copy if newer` or `Always`.

### Assigning the Logger

Use `LoggerFactory` to configure NLog and assign it to ETLBox:

```csharp
using var loggerFactory = LoggerFactory.Create(builder => {
    builder
        .AddFilter("Microsoft", LogLevel.Warning)
        .AddFilter("System", LogLevel.Warning)
        .SetMinimumLevel(LogLevel.Trace)
        .AddNLog("nlog.config");
});

Settings.LogInstance = loggerFactory.CreateLogger("Default");
```

Once assigned to `Settings.LogInstance`, ETLBox components will begin emitting structured log messages through NLog.

### Sample nlog.config

This configuration logs messages to both the console and a file. It uses NLog’s layout renderers to format structured data from ETLBox.

```xml
<?xml version="1.0" encoding="utf-8" ?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      autoReload="true"
      internalLogFile="internal-nlog.log"
      internalLogLevel="Info">

  <targets>
    <target name="logfile" xsi:type="File" fileName="etlbox-log.txt"
            deleteOldFileOnStartup="true"
            layout="${longdate}|${level}|${mdlc:item=taskType}|${event-properties:item=action}|${mdlc:item=taskHash}|${mdlc:item=taskName}|${message}" />

    <target name="logconsole" xsi:type="Console"
            layout="${longdate}|${level}|${pad:padding=20:inner=${mdlc:item=taskType}}|${pad:padding=5:inner=${event-properties:item=action}}|${pad:padding=20:inner=${mdlc:item=taskName}}|${message}" />
  </targets>

  <rules>
    <logger name="*" minlevel="Debug" writeTo="logfile,logconsole" />
  </rules>
</nlog>
```

### Available Log Properties

The following log properties from ETLBox can be accessed in NLog layouts:

| Property | Renderer Example |
|----------|------------------|
| Task name | `${mdlc:item=taskName}` |
| Task type | `${mdlc:item=taskType}` |
| Task hash | `${mdlc:item=taskHash}` |
| Root task name | `${mdlc:item=rootTaskName}` |
| Root task type | `${mdlc:item=rootTaskType}` |
| Root task hash | `${mdlc:item=rootTaskHash}` |
| Action (START/END) | `${event-properties:item=action}` |
| Progress count | `${event-properties:item=progressCount}` |
| Load process ID (if using `LoadProcess`) | `${mdlc:item=loadProcessId}` |

### Debugging NLog Setup

NLog fails silently by default if the configuration is incorrect. To make NLog throw configuration errors and generate internal diagnostics:

```xml
<nlog throwConfigExceptions="true"
      internalLogFile="nlog-internal.log"
      internalLogLevel="Info"
      ... >
```

This will help you troubleshoot missing targets, layout errors, or invalid rules.

## Logging in Unit Tests

When testing ETLBox components, it’s often useful to verify log output or capture logs for debugging. ETLBox uses `Microsoft.Extensions.Logging`, which allows you to plug in mock loggers or custom implementations to suit your test framework.

### Using a Custom Logger for xUnit

In xUnit, you can integrate ETLBox logging with the test output by assigning a custom `ILogger` implementation to `Settings.LogInstance`. The example below shows a simple logger that captures log messages and optionally forwards them to xUnit’s `ITestOutputHelper`.

#### Custom `XunitLogger`

```csharp
public class XunitLogger : ILogger
{
    private readonly ITestOutputHelper _output;
    private readonly StringBuilder _messages = new();

    public string AllMessages => _messages.ToString();

    public XunitLogger(ITestOutputHelper output) => _output = output;

    public XunitLogger() { }

    public void Log<TState>(LogLevel logLevel, EventId eventId,
        TState state, Exception exception, Func<TState, Exception, string> formatter)
    {
        var message = formatter(state, exception);
        _messages.AppendLine(message);
        _output?.WriteLine(message);
    }

    public bool IsEnabled(LogLevel logLevel) => true;

    public IDisposable BeginScope<TState>(TState state) => NullScope.Instance;

    private class NullScope : IDisposable
    {
        public static NullScope Instance { get; } = new();
        public void Dispose() { }
    }
}
```

#### Example Usage in a Test

```csharp
public class LoggingTests
{
    private readonly ITestOutputHelper _output;

    public LoggingTests(ITestOutputHelper output)
    {
        _output = output;
    }

    [Fact]
    public void LogOutputIsCaptured()
    {
        var logger = new XunitLogger(_output);
        Settings.LogInstance = logger;

        var task = new SqlTask("LogTest", "SELECT 1");
        task.ExecuteNonQuery();

        Assert.Contains("LogTest", logger.AllMessages);
    }
}
```

### Avoiding Moq for High-Volume Logs

While you can mock `ILogger` with Moq for simple tests, it’s not recommended for scenarios with high-frequency logging (e.g., row-level log messages). Moq tracks every interaction, which may lead to memory overhead and slow execution.

{{< callout context="tip" icon="outline/rocket" >}}
For performance and stability, use lightweight custom loggers (like the `XunitLogger`) in high-volume tests.
{{< /callout >}}


