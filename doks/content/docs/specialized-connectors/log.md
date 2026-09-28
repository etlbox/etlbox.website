---
title: "Log Destination"
description: "The LogDestination writes each incoming record into a log output using a Microsoft ILogger. Records are serialized as json and logged with a configurable log level and message template. It can also be linked directly to the error output of any component to log erroneous records."
lead: "The LogDestination sends every incoming record into your logging framework. Use it to inspect data while developing, to trace records in production, or to log the error output of any component with meaningful error details."
draft: false
images: []
menu:
  docs:
    parent: "specialized-connectors"
weight: 320
toc: true
chatgpt-review: true
---

## Log Destination

The `LogDestination<T>` is a destination component that writes each incoming record into a log output using a Microsoft `ILogger`. Every record is serialized (by default into json) and logged with a configurable log level and message template.

This component is part of the **ETLBox core package** and does not require additional dependencies.

### Overview

- Part of the ETLBox Core Package – no additional dependencies required
- Works with POCOs and dynamic objects (`ExpandoObject`)
- Logs each record using a Microsoft `ILogger` – compatible with any logging framework that supports `Microsoft.Extensions.Logging` (e.g. Serilog, NLog, log4net)
- Configurable log level, message template and record serialization
- Can be linked directly to the error output of any component to log `ETLBoxError` records with a specialized error message template

### Basic Usage

The `LogDestination` acts like any other destination in a dataflow. Each incoming record is serialized as json and written to the log output with log level `Information`.

```csharp
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });

var dest = new LogDestination<MyRow>(myLogger);

source.LinkTo(dest);
Network.Execute(source);

/* Log output:
Record number 1 at 01/01/2026 12:00:00: '{"Id":1,"Value":"Test1"}'.
Record number 2 at 01/01/2026 12:00:00: '{"Id":2,"Value":"Test2"}'.
*/
```

{{< callout context="note" icon="outline/info-circle" >}}
If no logger is passed to the `LogDestination`, the component falls back to its `LogInstance` property, which defaults to the globally defined `Settings.LogInstance`.
{{< /callout >}}

### Configuration

The `LogDestination` offers the following properties to customize the log output:

| Property           | Description |
|--------------------|-------------|
| **Logger**           | The `ILogger` instance used for writing the log output. If not set, the `LogInstance` of the component is used (which defaults to `Settings.LogInstance`). |
| **LogLevel**         | The log level used when writing a record. Default is `Information`, or `Error` if the incoming record is an `ETLBoxError`. |
| **MessageTemplate**  | The structured message template used for logging each record. |
| **RecordSerializer** | A function that serializes the incoming record into a string. By default, the same json serialization is used that serializes erroneous records for the error output. |

#### Custom Log Level and Message Template

The message template is a structured logging template that receives three arguments: the current record number (`{progressCount}`), the current time (`{time}`) and the serialized record (`{recordAsJson}`).

```csharp
var dest = new LogDestination<MyRow>(myLogger)
{
    LogLevel = LogLevel.Warning,
    MessageTemplate = "Row {progressCount} at {time}: {recordAsJson}"
};

/* Log output:
Row 1 at 01/01/2026 12:00:00: {"Id":1,"Value":"Test1"}
Row 2 at 01/01/2026 12:00:00: {"Id":2,"Value":"Test2"}
*/
```

If no message template is set, the default template is used:

```text
Record number {progressCount} at {time}: '{recordAsJson}'.
```

#### Custom Record Serialization

By default, each record is serialized as json. If you want a different representation of your records in the log output, you can provide your own serialization function using the `RecordSerializer` property.

```csharp
var dest = new LogDestination<MyRow>(myLogger)
{
    RecordSerializer = row => $"{row.Id}-{row.Value}"
};

/* Log output:
Record number 1 at 01/01/2026 12:00:00: '1-Test1'.
Record number 2 at 01/01/2026 12:00:00: '2-Test2'.
*/
```

### Using Dynamic Objects

If your data structure is not predefined, the non-generic `LogDestination` works with `ExpandoObject`.

```csharp
var source = new MemorySource();
dynamic row1 = new ExpandoObject();
row1.Id = 1;
row1.Value = "Test1";
source.DataAsList.Add(row1);

var dest = new LogDestination(myLogger);

source.LinkTo(dest);
Network.Execute(source);

/* Log output:
Record number 1 at 01/01/2026 12:00:00: '{"Id":1,"Value":"Test1"}'.
*/
```

### Logging the Error Output

The `LogDestination<ETLBoxError>` can be linked directly to the error output of any component. Erroneous records are then logged with log level `Error` and a specialized error message template that includes the error details.

```csharp
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "ErrorRecord" });

var dest = new CustomDestination<MyRow>(
    (row, progressCount) => {
        if (row.Value == "ErrorRecord")
            throw new Exception("Error record!");
    }
);
var errorDest = new LogDestination<ETLBoxError>(myLogger);

source.LinkTo(dest);
dest.LinkErrorTo(errorDest);
Network.Execute(source);

/* Log output:
Exception in record number 1 at 01/01/2026 12:00:00: '{"Id":2,"Value":"ErrorRecord"}' - Error details: 'Error record!' (...)
*/
```

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
graph LR
  Source["📄 MemorySource (Reads Data)"] -->Dest["📥 CustomDestination (Writes Data) "]
  Dest -->|Error output|Log["📝 LogDestination (Logs Errors)"]
```

For records of type `ETLBoxError`, the message template receives four additional arguments: `{errorText}`, `{context}`, `{source}` and `{exceptionType}`. The `{time}` argument contains the report time of the error. The default error message template is:

```text
Exception in record number {progressCount} at {time}: '{recordAsJson}' - Error details: '{errorText}' (Context: {context}, Source: {source}, Type: {exceptionType})
```

Of course, the log level and message template can also be customized when logging errors:

```csharp
var errorDest = new LogDestination<ETLBoxError>(myLogger)
{
    LogLevel = LogLevel.Warning,
    MessageTemplate = "Error in record {progressCount} at {time}: {recordAsJson}"
};
```

{{< callout context="tip" icon="outline/rocket" >}}
Linking the error output into a `LogDestination` is a simple way to make a dataflow resilient: instead of stopping the whole network when a record fails, the erroneous record is redirected and logged, while all other records continue to be processed.
{{< /callout >}}
