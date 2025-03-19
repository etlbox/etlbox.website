---
title: "Void Destination"
description: "Details about the VoidDestination"
lead: "The Void destination can be used to discard records"
draft: false
images: []
menu:
  docs:
    parent: "specialized-connectors"
weight: 400
toc: true
---

## Void Destination

The `VoidDestination<T>` is a special destination that discards incoming records. It is useful when you need to filter out data in a flow while ensuring that all records are processed correctly. Since every record in a dataflow must reach a destination for execution to complete, the `VoidDestination` helps handle unwanted records without blocking the pipeline.

This component is part of the **ETLBox core package** and does not require additional dependencies.

### Usage

A common use case for `VoidDestination` is filtering records in a dataflow. Any records that do not match a condition can be sent to the `VoidDestination` instead of being stored.

```csharp
public class MyRow
{
    public int Value { get; set; }
}

var source = new CsvSource<MyRow>("test.txt");
var destKeep = new MemoryDestination<MyRow>();
var destVoid = new VoidDestination<MyRow>();

source.LinkTo(destKeep, row => row.Value > 10);
source.LinkTo(destVoid, row => row.Value <= 10);

Network.Execute(source);
```

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
graph LR
  Source["📄 CsvSource (Reads Data) ‎ ‎"] -->|Value > 10 ‎ ‎| Keep["📥 MemoryDestination (Keeps Data) "]
  Source -->|Value <= 10 ‎ ‎| Discard["🗑️ VoidDestination (Discards Data) "]
```


{{< callout context="note" icon="outline/info-circle" >}}
All records must be sent to **at least one destination**; otherwise, the dataflow may never complete. If records are left unprocessed, ETLBox will continue waiting, leading to a hanging execution.
{{< /callout >}}

### Implicit Use

Instead of explicitly defining a `VoidDestination`, you can use the **third parameter** of `LinkTo()` to automatically discard records that do not match a condition.

```csharp
public class MyRow
{
    public int Value { get; set; }
}

var source = new CsvSource<MyRow>("test.txt");
var destKeep = new MemoryDestination<MyRow>();

source.LinkTo(destKeep, row => row.Value > 10, row => row.Value <= 10);

Network.Execute(source);
```

### Automatic Complement Void Links

{{< callout context="caution" icon="alert/triangle" >}}
The `TryAddComplementVoidLinks` option is **disabled by default** and is **not recommended for production use**, as it may hide unintended filtering issues. It is intended for **debugging purposes**, helping to identify if a missing predicate is causing the network to hang by automatically discarding unhandled records.
{{< /callout >}}

If a network contains _predicate-based links_ or _void predicate links_, some data might not be sent to any component. Since ETLBox waits for all records to be processed, an incomplete network can cause execution to hang indefinitely.

To prevent this, setting `TryAddComplementVoidLinks = true` on the network ensures that a complementary void link is automatically added for each predicate link, ensuring that all data flows to a component.

#### Example

```csharp
var source = new MemorySource<MyRow>();
source.DataAsList = new List<MyRow> {
    new MyRow { Value = 5 },
    new MyRow { Value = 15 },
    new MyRow { Value = 25 }
};

var destLow = new MemoryDestination<MyRow>();
var destHigh = new MemoryDestination<MyRow>();

source.LinkTo(destLow, row => row.Value < 10);
source.LinkTo(destHigh, row => row.Value > 20);

var network = Network.Init(source);
network.TryAddComplementVoidLinks = true;
await network.ExecuteAsync();
```

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
graph LR
  Source["📄 MemorySource (Reads Data)  "] -->|Value < 10 ‎ ‎| Low["📥 MemoryDestination (Low Values)  "]
  Source -->|Value > 20 ‎ ‎| High["📥 MemoryDestination (High Values)  "]
  Source -->|Unmatched Values ‎ ‎| Discard["🗑️ VoidDestination (Auto-Added)  "]

  subgraph "With Complement Links"
    Low
    High
    Discard
  end
```

- The first link sends rows with `Value < 10` to `destLow`.
- The second link sends rows with `Value > 20` to `destHigh`.
- The row with `Value = 15` is not covered by any predicate, which would normally cause the network to hang.
- Setting `TryAddComplementVoidLinks = true` **automatically adds a void link** for uncovered records, ensuring the execution completes successfully.

