---
title: "Wait Transformation"
description: "Details about the WaitTransformation"
lead: "The WaitTransformation blocks execution until another component in the network has completed processing all records."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 610
toc: true
---


## Overview

The purpose of the WaitTransformation is to block execution of a path in your Network until another component (or multiple other components) has completed processing. The other dataflow compoment can be either a component from the same network, or a component of a different data flow.

When waiting for a component in the same data flow, the WaitTransformation is mostly used in conjunction with a [Multicast](../../transformations/multicast) or [Predicates](/docs/introduction/linking/), which split up the network in different paths.

Additionally, the WaitTransformation also accepts a `TaskCompletionSource` - so basically it can be used to wait for any Task.

#### Buffer

The WaitTransformation has an input and output buffer. It won't accept any records until the component(s) in the network which are awaited are completed - once the other components are completed, the WaitTransformation will start to process all records without any delay.

## Usage

### With other data flow components

You can simply pass an instance of any other data flow component to the WaitTransformation.

```C#
var dest = new DbDestination("TableName");
var wait = new WaitTransformation<MyLinkingRow>(dest);
```

```C#
var dest1 = new DbDestination("TableName");
var row = new RowTransformation();
var wait = new WaitTransformation<MyLinkingRow>(row, dest);
```

Alternatively, you can pass the other component instances to the property `DataFlowComponents`.

#### Example 2 networks

```C#
/*
* Two data flows:
*  Source1 --> Destination1 (onCompletion: set value)
*  Source2 --> WaitTask --> RowTransformation -> Destination2 (started first)
*/

//Arrange
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
source2.LinkTo(wait).LinkTo(dest2);

Task t1 = Network.ExecuteAsync(source2);
Task t2 = Network.ExecuteAsync(source1);

Task.WaitAll(t1, t2);
```

#### Example same network

```C#
/*
*  Source1 --> WaitTask --> RowTransformation -> Destination
                              |
*  Source2 -------------------|
*/

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

### Waiting for TaskCompletionSource

The WaitTransformation can also be used to wait for any kind of `TaskCompletionSource`. You can pass one or multiple task completion sources to the property `TaskCompletionSources`.

{{< link-ext url="https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.taskcompletionsource-1?view=net-7.0" text="Read more about creating a TaskCompletionSource" >}}.
