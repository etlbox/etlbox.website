---
title: "Filter Transformation"
description: "Explains how to use FilterTransformation to remove rows from a data flow based on a predicate. Includes usage with strongly typed and dynamic objects, alternative predicate-based linking, error handling, and row count tracking."
lead: "The <code>FilterTransformation</code> is used to remove rows from a data flow based on a specified condition. It evaluates each row using a <b>predicate function</b> — if the predicate returns <code>true</code>, the row is kept; otherwise, it is filtered out and not passed on."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 524
toc: true
chatgpt-review: true
---

{{< callout context="tip" icon="outline/rocket" >}}
The `FilterTransformation` is not the only method to apply filtering. You can also use predicates directly when linking components. See the [Using predicates when linking](#using-predicates-when-linking) section for examples.
{{< /callout >}}

- **Type**: Non-blocking transformation
- **Buffering**: One input buffer
- **Execution**: Row-by-row in memory

## Example

The following example demonstrates how to filter rows based on the `Id` property using a `FilterTransformation`.

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}

public static void Main() {
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

## Using Predicates When Linking

Instead of using a dedicated `FilterTransformation`, you can apply filtering directly when linking components:

### Example – Basic Predicate Filtering

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

### Example – Simplified with Fallback Predicate

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

`FilterTransformation` also works with dynamic inputs (`ExpandoObject`). You can use dynamic access within the predicate function:

```csharp
public void ExampleFilterDynamic() {
    var source = new MemorySource();
    dynamic r1 = new ExpandoObject(); r1.Id = 1; r1.Value = "Test1";
    dynamic r2 = new ExpandoObject(); r2.Id = 2; r2.Value = "Test2";
    dynamic r3 = new ExpandoObject(); r3.Id = 3; r3.Value = "Test3";

    source.DataAsList.Add(r1);
    source.DataAsList.Add(r2);
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

`FilterTransformation` supports error redirection using `LinkErrorTo()`. If the predicate throws an exception, it can be caught and routed to another component:

```csharp
var errorDest = new MemoryDestination<ETLBoxError>();
filter.LinkErrorTo(errorDest);
```

{{< callout context="note" icon="outline/info-circle" >}}
This behavior is only available when using the `FilterTransformation`. If you use predicates directly in `LinkTo`, exceptions are silently ignored and the affected row is discarded.
{{< /callout>}}

## FilteredCount and PassedCount

To monitor the result of filtering, `FilterTransformation` exposes the following metrics:

- `FilteredCount`: Number of rows that were removed (predicate returned `false`)
- `PassedCount`: Number of rows passed on (predicate returned `true`)

### Example:

```csharp
var filter = new FilterTransformation<MyRow>();
filter.FilterPredicate = row => row.Id != 2;

source.LinkTo(filter).LinkTo(dest);
Network.Execute(source);

Console.WriteLine($"Rows Passed: {filter.PassedCount}");
Console.WriteLine($"Rows Filtered: {filter.FilteredCount}");
```

These properties are useful for auditing and debugging data flow logic.
