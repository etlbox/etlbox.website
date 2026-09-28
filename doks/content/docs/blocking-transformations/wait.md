---
title: "Wait Transformation"
description: "The WaitTransformation is used to delay the processing of input data until one or more specified conditions are met. It ensures that data only flows through this component once other data flow components or external tasks (represented by TaskCompletionSource) have completed."
lead: "Use the WaitTransformation when you need to synchronize different parts of a data flow or wait for external tasks to complete before continuing processing. It supports both internal data flow dependencies and external triggers via TaskCompletionSource."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 670
toc: true
chatgpt-review: true
---

## Overview

The `WaitTransformation` is used to delay the processing of data in a flow until one or more other components or tasks are completed. It acts as a synchronization point and is particularly useful when data from different paths must be coordinated before continuing.

This component is most commonly used when working with **split paths** in a data flow, such as after a [Multicast](../../transformations/multicast) or condition-based routing via [Predicates](/docs/introduction/linking/). It can also be used to wait on one or more external `TaskCompletionSource` instances.

### When to Use

- **Synchronizing split flows**: Wait for a certain path to finish before processing rows from another path.
- **Coordination between flows**: Ensure one component completes before continuing elsewhere.
- **External control**: Block until an external event signals completion via a task.

### Buffering

The `WaitTransformation` uses internal buffers to control data flow:

- **Input buffer**: Accepts records but holds them until the awaited condition is fulfilled.
- **Output buffer**: Starts forwarding data only after waiting has completed.
- **Blocking behavior**: Processing is paused until:
  - All components in `DataFlowComponents` have completed.
  - All tasks in `TaskCompletionSources` are resolved.

## Wait for Other Data Flow Components

You can pass any other data flow component directly to the `WaitTransformation`:

```csharp
var dest = new DbDestination("TableName");
var wait = new WaitTransformation<MyRow>(dest);
```

You can also pass multiple components:

```csharp
var dest1 = new DbDestination("TableName");
var row = new RowTransformation();
var wait = new WaitTransformation<MyLinkingRow>(row, dest);
```

Or set them programmatically:

```csharp
var wait = new WaitTransformation<MyRow>();
wait.DataFlowComponents = new[] { component1, component2 };
```

### Example: Synchronizing Two Networks

This example demonstrates how to coordinate two independent data flows. The `WaitTransformation` ensures that the second network waits until the first network completes before continuing.

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  subgraph Network1
    source1[Source1]
    dest1[Destination1]
    source1 --> dest1
  end

  subgraph Network2
    source2[Source2]
    wait[WaitTransformation-waits for Destination1]
    row[RowTransformation]
    dest2[Destination2]
    source2 --> wait --> row --> dest2
  end

  dest1 --> completion --> wait
```

```csharp
bool completed = false;
MemorySource<MyLinkingRow> source1 = new MemorySource<MyLinkingRow>();
source1.Data = CreateDemoData(1, 200000);

MemorySource<MyLinkingRow> source2 = new MemorySource<MyLinkingRow>();
source2.Data = CreateDemoData(1, 200000);

var dest1 = new MemoryDestination<MyLinkingRow>();
var dest2 = new MemoryDestination<MyLinkingRow>();
var wait = new WaitTransformation<MyLinkingRow>(dest1);
var row = new RowTransformation<MyLinkingRow>();
row.TransformationFunc = row => {
    if (completed == false) throw new Exception("This won't happen");
    return row;
};
dest2.OnCompletion = () => completed = true;

source1.LinkTo(dest1);
source2.LinkTo(wait).LinkTo(row).LinkTo(dest2);

Task t1 = Network.ExecuteAsync(source2);
Task t2 = Network.ExecuteAsync(source1);

Task.WaitAll(t1, t2);
```

### Example: Waiting Within the Same Flow

This example shows how the `WaitTransformation` can be used to pause one branch of a split data flow until another branch completes, ensuring correct execution order within the same network.

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source1[Source1]
  source2[Source2]
  wait[WaitTransformation - waits for Source2]
  row[RowTransformation]
  dest[Destination]

  source1 --> wait --> row --> dest
  source2 --> row
```

```C#
bool completedSource1 = false;
bool completedSource2 = false;

MemorySource<MyLinkingRow> source1 = new MemorySource<MyLinkingRow>();
source1.Data = CreateDemoData(10001, 11000);

MemorySource<MyLinkingRow> source2 = new MemorySource<MyLinkingRow>();
source2.Data = CreateDemoData(1, 1000);


var row = new RowTransformation<MyLinkingRow>();
var dest = new MemoryDestination<MyLinkingRow>();
var wait = new WaitTransformation<MyLinkingRow>(source2);

row.TransformationFunc = row => {
    if (row.Col1 == 1000)
        completedSource2 = true;
    if (row.Col1 == 11000)
        completedSource1 = true;
    if (!completedSource2 && row.Col1 > 1000)
         throw new Exception("This won't happen");
    return row;
};


//Act
source1.LinkTo(wait).LinkTo(row).LinkTo(dest);
source2.LinkTo(row);

Network.Execute(wait);
```

## Waiting for TaskCompletionSource

You can also wait for one or more external `TaskCompletionSource<bool>` instances.

```csharp
var tcs1 = new TaskCompletionSource<bool>();
var tcs2 = new TaskCompletionSource<bool>();

var wait = new WaitTransformation<MyRow>();
wait.TaskCompletionSources = new[] { tcs1, tcs2 };
```

The transformation will start processing only when both tasks are completed.

## Cancellation Support

### Cancelling Execution

ETLBox supports cancellation of running data flows through the use of `CancellationTokenSource`, which can be passed to `Network.ExecuteAsync`.

```csharp
var cts = new CancellationTokenSource();
var task = Network.ExecuteAsync(waitComponent, cts.Token);

// Cancel after a timeout or custom logic
cts.Cancel();
```

If cancellation is triggered before the awaited components complete, the `WaitTransformation` and other linked components will stop processing and propagate the cancellation through the pipeline.

### Using `Network.Cancel()`

Alternatively, you can cancel execution explicitly using ETLBox’s built-in mechanism:

```csharp
Network.Cancel(wait);
```

This cancels the data flow containing the `WaitTransformation`, and if the wait is still in progress, a `TaskCanceledException` will be thrown.

