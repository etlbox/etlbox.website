---
title: "Filter Transformation"
description: "Details about the FilterTransformation"
lead: "The FilterTransformation filters out row that do not match with a given predicate."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 610
toc: true
chatgpt-review: true
---

## Overview

The `FilterTransformation` filters rows in a data flow based on a specified predicate. A predicate is a function that returns `true` or `false`; if `true`, the row is kept, otherwise, it is discarded.

{{< alert text="The `FilterTransformation` is not the only method to filter values in a data flow. You can also use predicates directly when linking components. See below for details." >}}

### Buffer

The `FilterTransformation` is a non-blocking transformation, meaning it only stores the current row in memory, plus a few additional rows in an input buffer to improve throughput. It has one input buffer and performs the filtering in-memory without blocking the flow of data.

### Example

Here’s how you can filter rows based on the `Id` field using the `FilterTransformation`:

```csharp
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
    source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });

    var filter = new FilterTransformation<MyRow>();
    filter.FilterPredicate = row => row.Id == 2;

    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(filter).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    //Outputs
    //Id:1 Value:Test1
    //Id:3 Value:Test3
}
```

### Using predicates when linking

You can achieve the same filtering behavior without using the `FilterTransformation`, by applying predicates when linking components:

```csharp
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });

var dest = new MemoryDestination<MyRow>();
var voidDest = new VoidDestination<MyRow>();

source.LinkTo(dest, row => row.Id != 2);
source.LinkTo(voidDest, row => row.Id == 2);

Network.Execute(source);
```

Alternatively, you can simplify the code by implicitly discarding unwanted rows:

```csharp
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });

var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest, row => row.Id != 2, row => row.Id == 2);

Network.Execute(source);
```

## Dynamic Objects

The `FilterTransformation` can also work with `ExpandoObject`. Here’s an example that uses dynamic objects:

```csharp
public void ExampleFilterDynamic()
{
    var source = new MemorySource();
    dynamic r1 = new ExpandoObject();
    r1.Id = 1; r1.Value = "Test1";
    source.DataAsList.Add(r1);
    dynamic r2 = new ExpandoObject();
    r2.Id = 2; r2.Value = "Test2";
    source.DataAsList.Add(r2);
    dynamic r3 = new ExpandoObject();
    r3.Id = 3; r3.Value = "Test3";
    source.DataAsList.Add(r3);

    var filter = new FilterTransformation();
    filter.FilterPredicate = row => ((dynamic)row).Id == 2;

    var dest = new MemoryDestination();

    source.LinkTo(filter).LinkTo(dest);
    Network.Execute(source);

    foreach (dynamic row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    //Outputs
    //Id:1 Value:Test1
    //Id:3 Value:Test3
}
```

## Error Handling

`FilterTransformation` catches and forwards exceptions encountered during execution. By default, any exception will fault the entire data flow network. However, you can forward the exceptions to another part of the network using LinkErrorTo(). This behavior is not available when using predicates; in those cases, any uncaught exception will silently discard the record by default.

```csharp
var errorDest = new MemoryDestination<ETLBoxError>();
filter.LinkErrorTo(errorDest);
```


## FilteredCount and PassedCount

The `FilterTransformation` provides two properties to track the number of rows that were processed during execution.

- `FilteredCount` keeps track of the number of rows that were filtered out (i.e., rows that did not pass the predicate).
- `PassedCount` counts the number of rows that passed the predicate and were passed along to the next component in the data flow.

Here’s an example usage:

```csharp
var filter = new FilterTransformation<MyRow>();
filter.FilterPredicate = row => row.Id != 2;

source.LinkTo(filter).LinkTo(dest);
Network.Execute(source);

Console.WriteLine($"Rows Passed: {filter.PassedCount}");
Console.WriteLine($"Rows Filtered: {filter.FilteredCount}");
```

In the above example, after executing the network, the `PassedCount` will reflect the number of rows that passed the filter, while `FilteredCount` shows how many were discarded.
