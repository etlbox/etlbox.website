---
title: "In-Memory data"
description: "Details about the MemorySource and MemoryDestination"
lead: "The MemorySource and MemoryDestination allows you to read or write data from/into an IEnumerable - so any list or collection of the .NET ecosystem can be used as source or destination for an ETLBox data flow. The Memory connectors are available in the ETLBox core package."
draft: false
images: []
menu:
  docs:
    parent: "other-connectors"
weight: 520
toc: true
---

The `MemorySource` and `MemoryDestination` are part of the ETLBox core package - you don't need to reference any additional package to use these connectors. 

If you want to start with example code right away, you will find it in the recipes section for the [MemorySource](/recipes/sources/memory-source) and [MemoryDestination](/recipes/destinations/memory-destination). Both components are also used frequently in other examples.  

## MemorySource

A Memory source is a simple source component that accepts a .NET list, collection or simple enumerable. Use this component within your data flow if you already have a collection containing your data available in memory. When you execute the flow, the memory destination will iterate through the list and  asynchronously post record by record into the flow.

### Example 

Here is an example code that uses your own list object to assign source data to the memory source. 

```C#
MemorySource<MyRow> source = new MemorySource<MyRow>();
source.Data = new List<MyRow>()
{
    new MyRow() { Id = 1, Value = "Test1" },
    new MyRow() { Id = 2, Value = "Test2" },
    new MyRow() { Id = 3, Value = "Test3" }
};
```

The `Data` property of the MemorySource will accept any `IEnumerable<T>`. 

### Using the internal list

By default, the `Data` property is always initialized with an empty List<T>, where T is the type of your MemorySource. This list can also be used to add data to it. Because the IEnumerable type of `Data` has some limitations regarding records, you can use the property `Data`DataAsList`. This will try to cast the current list stored in `Data` into an `IList<T>`. If you don't get null, this was successfully, and you can use the methods implement on this interface. This allows you to direct write code like this:

```C#
MemorySource<MyRow> source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });
```

### Using dynamic object

The default implementation of the MemorySource works internally with an ExpandoObject. 

```C#
dynamic row = new ExpandoObject();
row.Id = 1;
row.Value = "Test1";

MemorySource source = new MemorySource();
source.DataAsList.Add(row);            
```

### Using arrays

You can also use the MemorySource with arrays.  

```C#
 MemorySource<string[]> source = new MemorySource<string[]>();
 source.DataAsList = new List<string[]>()
 {
    new string[] { "1", "Test1" },
    new string[] { "2", "Test2" },
    new string[] { "3", "Test3" },
};
```

## MemoryDestination 

A memory destination stores the incoming data within a List. You can access the received data within the `Data` property. Data should be read from this collection when all data has arrived at the destination. If you want to access the data asynchronously while the list is still receiving data from the flow, consider using the `ConcurrentMemoryDestination`. As the `Data` property will internally use an `List<T>`, accessing data in this list while your data flow is still running is not thread safe. See below the details for the ConcurrentMemoryDestination. 

### Example 

```C#
MemoryDestination<MyRow> dest = new MemoryDestination<MyRow>();
// data is accessible in dest.Data 
```

### Using dynamic objects

The default implementation of `MemoryDestination` will use internal the ExpandoObject

```C#
var dest = new MemoryDestination();
```

### Using arrays

You can use the MemoryDestination also with arrays.

```C#
var dest = new MemoryDestination<string[]>();
```

### Concurrent memory destination

The `ConcurrentMemoryDestination` is almost the same as the `MemoryDestination`, but instead of a `ICollection<T>` for incoming data it uses a {{< link-ext url="https://learn.microsoft.com/en-us/dotnet/api/system.collections.concurrent.blockingcollection-1" text="<code>BlockingCollection&lt;T&gt;</code>" >}} to store incoming data. 

### Example

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

runTask.Wait();

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