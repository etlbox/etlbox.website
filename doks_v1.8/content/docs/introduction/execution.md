---
title: "Executing a Network"
description: "Learn how to execute ETLBox data flow networks synchronously or asynchronously. This guide covers different execution methods, handling unlinked nodes, monitoring progress, error handling, and canceling running networks."
lead: "ETLBox networks can be executed synchronously or asynchronously, allowing flexible control over data processing. This article explains various execution methods, how to monitor progress, handle errors, and cancel a running network when needed."
draft: false
images: []
menu:
  docs:
    parent: "introduction"
weight: 40
toc: true
chatgpt-review: true
---

## Creating a Network

A `Network` object represents the entire data flow and provides methods for execution, monitoring, and structural analysis. There are two ways to create a network:

**Using `Network.Init()`**

The preferred way to initialize a network is with `Network.Init()`:

```csharp
var network = Network.Init(source1);
```

This is particularly useful in combination with other network methods and allows for a simple and fluent notation when constructing networks.

**Using `new Network()`**

Alternatively, a network can be created explicitly by passing components to the constructor:

```csharp
var network = new Network(source1, rowTrans, dest1);
```

Both approaches ensure that the network is aware of all connected components and can be used for execution, error handling, and monitoring.

Once created, the `Network` object provides additional functionality beyond execution, such as retrieving the structure as JSON:

```csharp
string jsonStructure = network.PrintAsJson();
Console.WriteLine(jsonStructure);
```

After creation, the network can be executed synchronously or asynchronously.



## Synchronous Execution

A data flow can be executed synchronously, meaning the program waits until all data has been processed. This simplifies debugging since no asynchronous handling is required.

{{< callout context="tip" icon="outline/rocket" >}}
Internally, the data flow is always executed asynchronously. The synchronous `Execute` method waits for the completion of the network tasks before proceeding.
{{< /callout >}}

Example for a synchronous network execution:

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source1[DbSource: SourceTable1] --> rowTrans[RowTransformation]
  source2[DbSource: SourceTable2] --> rowTrans
  rowTrans -->|Value < 10| dest1[DbDestination: DestTable]
  rowTrans -->|Value >= 10| dest2[DbDestination: DestTable]
```

```csharp
// Prepare the flow
DbSource source1 = new DbSource("SourceTable1");
DbSource source2 = new DbSource("SourceTable2");
RowTransformation rowTrans = new RowTransformation(row => row);
DbDestination dest1 = new DbDestination("DestTable");
DbDestination dest2 = new DbDestination("DestTable");

// Link the flow
source1.LinkTo(rowTrans);
source2.LinkTo(rowTrans);
rowTrans.LinkTo(dest1, row => row.Value < 10);
rowTrans.LinkTo(dest2, row => row.Value >= 10);

// Execute the network
Network.Execute(source1, source2);
```

It is not necessary to pass all components to `Network.Execute()`. Providing at least one node within the network is sufficient:

```csharp
Network.Execute(source1);
Network.Execute(rowTrans);
Network.Execute(source1, source2, dest1, dest2);
```

### Using the `Execute()` Shortcut

Each data flow source has an `Execute()` method, which internally calls `Network.Execute()`.

```csharp
source1.Execute();
```

{{< callout context="caution" icon="outline/alert-triangle" >}}
Starting execution on multiple sources manually is not recommended. Use `Network.Execute(...)` or `Network.ExecuteAsync(...)` instead.
{{< /callout >}}

## Asynchronous Execution

Asynchronous execution allows processing to continue while the network runs in the background. For the previous example, we can start the execution asynchrounous like this:

```csharp
await Network.ExecuteAsync(source1, source2);
```

Multiple networks can run in parallel:

```csharp
Task t1 = Network.ExecuteAsync(source1);
Task t2 = Network.ExecuteAsync(source2);
await Task.WhenAll(t1, t2);
```

If you are not familiar with using the `async`/`await` pattern, {{< link-ext text="there is a good article on Microsoft Docs." url="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/" >}}


## Canceling a Network

A running network can be canceled at any time:

```csharp
Network.Cancel(source1);
```

Alternatively, a cancellation token can be passed to `ExecuteAsync()` for finer control:

```csharp
CancellationTokenSource cts = new CancellationTokenSource();
Task networkTask = Network.ExecuteAsync(cts.Token, source1);

// Cancel execution when needed
cts.Cancel();
```

This allows external conditions to trigger cancellation while keeping task execution under control.

## Extending a Network

By default, data flows follow explicitly defined `LinkTo()` and `LinkErrorTo()` connections. However, the `Network` object allows applying additional behavior to the entire network without modifying individual components.

### Adding Global Error Handling

Instead of linking errors for each component manually, `LinkAllErrorTo()` ensures all unhandled errors in the network are redirected to a common destination:

```csharp
var errorDest = new MemoryDestination<ETLBoxError>();
var network = Network.Init(source1);
network.LinkAllErrorTo(errorDest);
await network.ExecuteAsync();
```

This complements existing `LinkErrorTo()` connections without overriding them.

### Applying Actions to All Components

With `ApplyToAllNodes()`, a function can be applied to every component in the network:

```csharp
var network = Network.Init(source);
network.ApplyToAllNodes(n => n.DisableLogging = true);
await network.ExecuteAsync();
```

This ensures that all nodes in the network have logging disabled without modifying them individually.

### Automatic Complement Void Links

If a network contains **predicate-based links** or **void predicate links**, some data might not be sent to any component. Since ETLBox waits for all records to be processed, an incomplete network can cause execution to hang indefinitely.

To prevent this, setting `TryAddComplementVoidLinks = true` ensures that a complementary void link is automatically added for each predicate link, ensuring that all data flows to a component.

#### Example

```csharp
// Define source and destinations
var source = new MemorySource<MyRow>();
source.DataAsList = new List<MyRow> {
    new MyRow { Value = 5 },
    new MyRow { Value = 15 },
    new MyRow { Value = 25 }
};

// Define destinations
var destLow = new MemoryDestination<MyRow>();
var destHigh = new MemoryDestination<MyRow>();

// Apply predicate-based linking
source.LinkTo(destLow, row => row.Value < 10);
source.LinkTo(destHigh, row => row.Value > 20);

// Create a network and ensure all records are processed
var network = Network.Init(source);
network.TryAddComplementVoidLinks = true;
await network.ExecuteAsync();
```

- The first link sends rows with `Value < 10` to `destLow`.
- The second link sends rows with `Value > 20` to `destHigh`.
- The row with `Value = 15` is not covered by any predicate, which would cause the network to hang.
- `TryAddComplementVoidLinks = true` automatically adds a void link for uncovered records, ensuring the execution completes successfully.

This guarantees that all records are processed and prevents execution from stalling due to unhandled data.


## Fluent Notation

The `Network` class provides a fluent way to define and execute data flows:

```csharp
await Network.InitAndStartWith(source1)
    .LinkTo(rowTrans)
    .LinkTo(dest1)
    .AddComplementVoidLinks()
    .ApplyToAllNodes(n => n.DisableLogging = true)
    .ExecuteAsync();
```

This eliminates the need for separate linking, configuration and execution steps.

{{< callout context="caution" icon="outline/alert-triangle" >}}
When using linking in the fluent notation, all linked components must have compatible data types. For example, if `source1` outputs `MyRow`, `rowTrans` must accept `MyRow` as input, and `dest1` must store `MyRow` as well.
{{< /callout >}}


## Advanced Network Features

### Handling Unlinked Nodes

By default, all nodes in the network must be connected. If a node is unlinked, network creation or execution will fail. To allow unlinked nodes:

```csharp
var network = Network.Init(source1);
network.IgnoreUnlinkedNodes = true;
await network.ExecuteAsync();
```

### Completion Task on Components

Each component exposes a `Completion` property, which returns a task that completes when the component finishes processing.

```csharp
Task sourceTask1 = source1.ExecuteAsync();
Task sourceTask2 = source2.ExecuteAsync();
Task rowTask = rowTrans.Completion;
Task destTask1 = dest1.Completion;
Task destTask2 = dest2.Completion;

await Task.WhenAll(destTask1, destTask2, sourceTask1, sourceTask2, rowTask);
```

It is not necessary to wait for every task. Waiting for the destination tasks is often sufficient:

```csharp
await Task.WhenAll(destTask1, destTask2);
```

{{< callout context="note" icon="outline/info-circle" >}}
In most cases, manually handling completion tasks is unnecessary because the Network object itself provides control over execution and tracking.
{{< /callout >}}


### Monitoring Execution

The `Network` class allows tracking execution progress:

```csharp
var network = Network.Init(source1);
network.OnInitialization = () => Console.WriteLine("Started");
network.OnCompletion = () => Console.WriteLine("Completed");
network.OnException = (ex, msg) => Console.WriteLine($"Error: {msg}");
await network.ExecuteAsync();
```

### Executing Multiple Networks in Parallel

With `ParallelExecute()`, multiple networks can run concurrently, improving performance for independent data flows.

**Example**

```csharp
// Define first network
var source1 = new MemorySource<MyRow>();
var transform1 = new RowTransformation<MyRow>(row => { row.Value *= 2; return row; });
var dest1 = new MemoryDestination<MyRow>();
source1.LinkTo(transform1).LinkTo(dest1);

// Define second network
var source2 = new MemorySource<MyRow>();
var transform2 = new RowTransformation<MyRow>(row => { row.Value += 10; return row; });
var dest2 = new MemoryDestination<MyRow>();
source2.LinkTo(transform2).LinkTo(dest2);

// Execute both networks in parallel
await Network.ParallelExecute(
    Network.Init(source1),
    Network.Init(source2)
);
```

Both networks are executed simultaneously, allowing independent data flows to run in parallel.


### Using a Log Instance for Network Execution

A `LogInstance` can be assigned to a network to collect and manage log output during execution. By default, ETLBox uses the logger set in `Settings.LogInstance`, which applies to all networks. However, individual networks can override this setting with a custom logger.

**Example**

```csharp
// Configure Serilog and convert it to an ILogger
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();
ILogger logger = new SerilogLoggerFactory(Log.Logger).CreateLogger("ETLBox");

// Set the logger only for a particular network
var network = Network.Init(source1);
network.SetLogInstance(logger);
await network.ExecuteAsync();

// Alternative: Set the default logger for all networks
// Settings.LogInstance = logger;
```

### Retrieving Network Structure

ETLBox allows you to inspect the structure of a network by printing it as JSON or as a list of nodes. This is useful for debugging, logging, or visualizing the data flow.

#### Printing as JSON

`PrintAsJson()` returns the entire network structure in JSON format, making it easy to store or analyze.

```csharp
var network = Network.Init(source1);
string jsonStructure = network.PrintAsJson();
Console.WriteLine(jsonStructure);
```

#### Printing as Nodes

`PrintAsNodes()` provides a structured list of all components in the network, showing how they are linked.

```csharp
var network = Network.Init(source1);
var nodes = network.PrintAsNodes();
foreach (var node in nodes)
    Console.WriteLine(node);
```

These methods help visualize how data flows through the network without executing it.
