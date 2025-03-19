---
title: "In-Memory Data"
description: "The MemorySource and MemoryDestination connectors make it easy to read and write data directly from .NET collections like lists and arrays. MemorySource streams data from in-memory collections, while MemoryDestination collects incoming records. If you need to access data while it’s still being processed, ConcurrentMemoryDestination offers a thread-safe solution."
lead: "Easily work with in-memory data using ETLBox’s In-Memory Data Connectors. Whether you need to pull data from a list, store results in memory, or handle concurrent access, these connectors provide a simple and efficient way to manage your data flow."
draft: false
images: []
menu:
  docs:
    parent: "specialized-connectors"
weight: 320
toc: true
---

## In-Memory Data Connectors

The **MemorySource** and **MemoryDestination** are in-memory components for reading and writing data in ETLBox. They enable handling data from .NET collections efficiently and are useful when working with in-memory datasets.

For concurrent scenarios, **ConcurrentMemoryDestination** provides thread-safe storage using `BlockingCollection<T>`.

### Overview

- Part of the ETLBox Core Package – no additional dependencies required
- Works with lists, collections, arrays, and dynamic objects (`ExpandoObject`)
- Supports asynchronous execution in ETL workflows
- `MemoryDestination` stores results, while `MemorySource` provides an in-memory data source
- `ConcurrentMemoryDestination` enables thread-safe data handling

## Memory Source

The `MemorySource<T>` acts as an in-memory data provider. It reads from a .NET collection (`IEnumerable<T>`) and sends records to the next component in the ETL pipeline. It is ideal when your data is already in memory and does not require external storage or retrieval.

By default, it initializes an empty `List<T>`, which can be modified dynamically. You can assign an existing collection or use the built-in list to add records as needed.

### Using an Array (POCOs)

```csharp
MemorySource<MyRow> source = new MemorySource<MyRow>();
source.Data = new
[
    new MyRow() { Id = 1, Value = "Test1" },
    new MyRow() { Id = 2, Value = "Test2" },
    new MyRow() { Id = 3, Value = "Test3" }
];
```

This approach allows you to assign a predefined list of objects (MyRow) directly to the source. The data is then available for processing in your ETL pipeline.

### Using the Internal List

```csharp
MemorySource<MyRow> source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });
```

`DataAsList` returns the current `Data` property cast to `List<T>`. If casting is not possible (e.g., because `Data` is assigned an `IEnumerable<T>` that does not implement `IList<T>`), it will return `null`.

### Using Dynamic Objects

```csharp
dynamic row = new ExpandoObject();
row.Id = 1;
row.Value = "Test1";

MemorySource source = new MemorySource();
source.Data = new List<ExpandoObject> { row };
```

If your data structure is not predefined, you can use `ExpandoObject` to create a flexible, dynamic data source. This is helpful when working with variable or loosely structured data.

## Memory Destination

The `MemoryDestination<T>` is an in-memory storage that collects incoming records into a .NET List<T>. It provides an easy way to capture and inspect data at any stage of an ETLBox pipeline.

By default, `MemoryDestination` initializes an internal `List<T>` to store incoming data. However, it can be reassigned to other collection types such as `SortedSet<T>`, arrays, or any other `ICollection<T>`, depending on the required data structure and retrieval behavior.

### Basic Usage (POCOs)

```csharp
MemoryDestination<MyRow> dest = new MemoryDestination<MyRow>();
// Incoming Data is stored in dest.Data
foreach (var row in dest.Data)
    Console.WriteLine($"Id: {row.Id}, Value: {row.Value}");
```

This creates a `MemoryDestination` that stores records in an internal list. Data can be accessed from `Data` property once the pipeline execution is complete.

### Using Dynamic Objects

```csharp
var dest = new MemoryDestination();
// Incoming Data is stored in dest.Data
foreach (dynamic row in dest.Data)
    Console.WriteLine($"Dynamic property 1: {row.Prop1}, Dynamic property 2: {row.Prop2}");
```

By default, `MemoryDestination` can store dynamic objects (ExpandoObject), making it flexible when working with non-fixed schemas.

### Using a Custom Collection

```csharp
var dest = new MemoryDestination<MyRow>();
dest.Data = new SortedSet<MyRow>(new MyRowComparer());
```

Assigning a custom collection such as `SortedSet<T>`  allows records to be stored in a specific order based on a comparison rule.


## Example: Processing In-Memory Data

```csharp
MemorySource<MyRow> source = new MemorySource<MyRow>();
source.Data = new List<MyRow>
{
    new MyRow { Id = 1, Value = "Test" },
    new MyRow { Id = 2, Value = "Test" }
};
var trans = new RowTransformation<MyRow>();
trans.TransformationFunc = row => {
    row.Value += row.Id;
    return row;
};
var dest = new MemoryDestination<MyRow>();
source.LinkTo(trans);
trans.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id: {row.Id}, Value: {row.Value}");
```

This example demonstrates how in-memory data can be transformed using an ETLBox pipeline before being stored in a `MemoryDestination`.

This approach enables a true ETL pipeline for in-memory data, making it easier to extend the process with additional steps like error handling, filtering, merging, or multicasting. Instead of manually iterating over a collection with a `foreach` loop, the pipeline ensures that transformations, validations, and data flow control are handled in a structured and scalable way.

## Concurrent Memory Destination

The `ConcurrentMemoryDestination<T>` is a thread-safe alternative to `MemoryDestination<T>`.

- Uses a `BlockingCollection<T>` instead of `List<T>`
- Supports concurrent reading and writing while data is still arriving

```csharp
var dest = new ConcurrentMemoryDestination<MyRow>();
// Data is stored in a thread-safe BlockingCollection<T>
foreach (var row in dest.Data)
    Console.WriteLine($"Id: {row.Id}, Value: {row.Value}");
```

### Example: Concurrent Processing

```csharp
var source = new MemorySource<MyRow>();
for (int i = 0; i < 1000000; i++)
    source.DataAsList.Add(new MyRow() { Id = i, Value = "Test" + i });

var dest = new ConcurrentMemoryDestination<MyRow>();
source.LinkTo(dest);
var runTask = Network.ExecuteAsync(source);

Console.WriteLine("Adding completed? " + dest.Data.IsAddingCompleted);
dest.Data.TryTake(out MyRow firstTry);
Console.WriteLine("Data found? " + (firstTry != null));

await runTask;

dest.Data.TryTake(out MyRow secondTry);
Console.WriteLine("Adding completed? " + dest.Data.IsAddingCompleted);
Console.WriteLine("Data found? " + (secondTry != null));

/* Ouput:
Adding completed?False
Data found?False
Adding completed?True
Data found?True
*/
```

