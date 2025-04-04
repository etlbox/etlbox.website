---
title: "Memory Destination"
description: "Examples and code recipes for the MemoryDestination component."
lead: "This article contains example code that shows the usage of the MemoryDestination component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
weight: 47
toc: true
---

The memory source stores any received data in any .NET generic
{{< link-ext url="https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.icollection-1" text="<code>ICollection&lt;T&gt;</code>" >}}. type. The default type for storing data is a generic `List<T>`, but any collection that implements `ICollection<T>` will also work.

## Example with strongly typed objects

### Using default list

By default, your incoming data is stored in a `List<T>` object.
```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

CustomSource<MyRow> source = new CustomSource<MyRow>();
source.ReadFunc = pc => new MyRow { Id = pc+1, Value = "Test" + (pc+1) };
source.ReadingCompleted = pc => pc == 3;

MemoryDestination<MyRow> dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine("Received row with Id "+ row.Id + " and Value " + row.Value);

/*
Received row with Id 1 and Value Test1
Received row with Id 2 and Value Test2
Received row with Id 3 and Value Test3
*/
```

### Using own collection

This example shows how to use a SortedSet as storage for your incoming data.

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

public class ByIdDesc : IComparer<MyRow>
{
    public int Compare(MyRow x, MyRow y) => y.Id - x.Id;
}

CustomSource<MyRow> source = new CustomSource<MyRow>();
source.ReadFunc = pc => new MyRow { Id = pc + 1, Value = "Test" + (pc + 1) };
source.ReadingCompleted = pc => pc == 3;

MemoryDestination<MyRow> dest = new MemoryDestination<MyRow>();
dest.Data = new SortedSet<MyRow>(new ByIdDesc());
source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine("Received row with Id " + row.Id + " and Value " + row.Value);

/*
Received row with Id 3 and Value Test3
Received row with Id 2 and Value Test2
Received row with Id 1 and Value Test1
*/
```

## Example with dynamic objects

```C#
CustomSource source = new CustomSource();
source.ReadFunc = pc => {
    dynamic row = new ExpandoObject();
    row.Id = pc + 1;
    row.Value = "Test" + (pc + 1);
    return row;
};
source.ReadingCompleted = pc => pc == 3;

MemoryDestination dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine("Received row with Id " + row.Id + " and Value " + row.Value);

/*
Received row with Id 1 and Value Test1
Received row with Id 2 and Value Test2
Received row with Id 3 and Value Test3
*/
```

## Example with array

```C#
CustomSource<string[]> source = new CustomSource<string[]>();
source.ReadFunc = pc => new string[] {
    (pc + 1).ToString(),
    "Test" + (pc + 1)
};
source.ReadingCompleted = pc => pc == 3;

MemoryDestination<string[]> dest = new MemoryDestination<string[]>();
source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine("Received row with Id " + row[0] + " and Value " + row[1]);

/*
Received row with Id 1 and Value Test1
Received row with Id 2 and Value Test2
Received row with Id 3 and Value Test3
*/
```

## Concurrent memory destination

The `ConcurrentMemoryDestination` is almost the same as the `MemoryDestination`, but instead of a `ICollection<T>` for incoming data it uses a {{< link-ext url="https://learn.microsoft.com/en-us/dotnet/api/system.collections.concurrent.blockingcollection-1" text="<code>BlockingCollection&lt;T&gt;</code>" >}} to store incoming data.

```C#
var source = new MemorySource<MyRow>();
for (int i = 0; i < 1000000; i++)
    source.DataAsList.Add(new MyRow() { Id = i, Value = "Test" + i });
var dest = new ConcurrentMemoryDestination<MyRow>();

source.LinkTo(dest);
var runTask = Network.ExecuteAsync(source);

Console.WriteLine("Adding completed?" + dest.Data.IsAddingCompleted);
dest.Data.TryTake(out MyRow firstTry);
Console.WriteLine("Data found?" + (firstTry != null));

await runTask;

dest.Data.TryTake(out MyRow secondTry);
Console.WriteLine("Adding completed?" + dest.Data.IsAddingCompleted);
Console.WriteLine("Data found?" + (secondTry != null));

/* Ouput:
Adding completed?False
Data found?False
Adding completed?True
Data found?True
*/
```
