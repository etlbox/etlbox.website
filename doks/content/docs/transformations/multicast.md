---
title: "Multicast"
description: "Explains how to use the MergeJoin transformation in ETLBox to combine rows from two input sources. Covers always-join and comparison-based join modes, buffering behavior, sorting requirements, support for typed and dynamic data, and how unmatched records are handled."
lead: "The <code>Multicast</code> transformation is used to <b>broadcast</b> every incoming record to multiple downstream targets. It creates clones of each record, ensuring that each linked output receives an independent copy. <br /><br /> This is especially useful when you want to write the same data to multiple destinations, such as a database, a file, and an in-memory store simultaneously."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 526
toc: true
chatgpt-review: true
---

## Buffering Behavior

- **Non-blocking transformation**
- One **input buffer**
- One **output buffer per target**
- Each downstream target receives a **separate clone** of the input row
- Supports linking to **any number** of outputs

{{< callout context="note" icon="outline/info-circle" >}}
If you need to **split** data conditionally (e.g., based on filters), consider [using predicates](#splitting-data-with-predicates) instead of `Multicast`.
{{< /callout>}}

By default, cloning uses a specialized mechanism that copies all public properties and fields. Non-public members are not included.  For custom cloning logic, implement `ICloneable` or use the `CustomCloningStrategy` property.

## Basic Example: Broadcasting

This example shows how a row is duplicated and sent to two different memory destinations:

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}

public static void Main() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "B" });

    var dest1 = new MemoryDestination<MyRow>();
    var dest2 = new MemoryDestination<MyRow>();

    var multicast = new Multicast<MyRow>();
    source.LinkTo(multicast);
    multicast.LinkTo(dest1);
    multicast.LinkTo(dest2);

    Network.Execute(source);

    Console.WriteLine("Destination 1");
    foreach (var row in dest1.Data)
        Console.WriteLine($"{row.Id}{row.Value}");

    Console.WriteLine("Destination 2");
    foreach (var row in dest2.Data)
        Console.WriteLine($"{row.Id}{row.Value}");

    // Outputs:
    // Destination 1
    // 1A
    // 2B
    // Destination 2
    // 1A
    // 2B
}
```

## Custom Cloning Strategy

If the default cloning behavior is not sufficient, you can define a custom clone function:

```csharp
var multicast = new Multicast<MyRow>();
multicast.CustomCloningStrategy = input => new MyRow {
    Id = input.Id,
    Value = string.Copy(input.Value)
};
```

You can also implement `ICloneable` on your class to take full control of cloning logic.

## Dynamic Object Support

The `Multicast` transformation also supports `ExpandoObject`. This allows broadcasting rows with dynamic structures:

```csharp
dynamic row1 = new ExpandoObject();
row1.Id = 1;
row1.Value = "DynamicA";

dynamic row2 = new ExpandoObject();
row2.Id = 2;
row2.Value = "DynamicB";

var source = new MemorySource();
source.DataAsList.Add(row1);
source.DataAsList.Add(row2);

var multicast = new Multicast(); // default: ExpandoObject
var dest1 = new MemoryDestination();
var dest2 = new MemoryDestination();

source.LinkTo(multicast);
multicast.LinkTo(dest1);
multicast.LinkTo(dest2);

Network.Execute(source);

// Each destination will receive the full row data independently
```

## Splitting Data with Predicates

If you want to conditionally route data to different targets (i.e., not every row to every target), use predicates with the `LinkTo` method instead of `Multicast`.

### Example: Conditional Routing (Split)

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}

public static void Main() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "B" });

    var dest1 = new MemoryDestination<MyRow>();
    var dest2 = new MemoryDestination<MyRow>();

    source.LinkTo(dest1, row => row.Id <= 1);
    source.LinkTo(dest2, row => row.Id >= 2);

    Network.Execute(source);

    Console.WriteLine("Destination 1");
    foreach (var row in dest1.Data)
        Console.WriteLine($"{row.Id}{row.Value}");

    Console.WriteLine("Destination 2");
    foreach (var row in dest2.Data)
        Console.WriteLine($"{row.Id}{row.Value}");

    // Outputs:
    // Destination 1
    // 1A
    // Destination 2
    // 2B
}
```

{{< callout context="caution" icon="outline/alert-triangle" >}}
Make sure all rows are consumed — either by linking to a destination or by using a `VoidDestination` for rows you wish to discard.
{{< /callout >}}
