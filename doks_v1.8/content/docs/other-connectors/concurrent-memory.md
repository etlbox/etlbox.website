---
title: "Concurrent In-Memory"
description: "Details about the ConcurrentMemoryDestination"
lead: "The ConcurrentMemoryDestination is very similar to the MemoryDestination, but uses a thread safe collection for storing data."
draft: false
images: []
menu:
  docs:
    parent: "other-connectors"
weight: 500
toc: true
---

#### Core package

The `ConcurrentMemoryDestination` is part of the ETLBox core package - so you don't need to add an extra package to your package references to use this destination component. 

### ConcurrentMemoryDestination

The concurrent memory destination has the same properties and behavior like the `[MemoryDestination](./memory.md)`. The difference between both is that the `ConcurrentMemoryDestination` stores the incoming data in a {{< link-ext text="BlockingCollection" url="https://docs.microsoft.com/de-de/dotnet/api/system.collections.concurrent.blockingcollection-1?view=netframework-4.8" >}} instead a normal `List<T>`. You can access the received data within the `Data` property. The BlockingCollection is designed to be thread-safe. 
Data can be read from this collection as soon as it arrives, and you don't have to wait for you data flow to finish. 

### Example

```C#
ConcurrentMemoryDestination<MySimpleRow> dest = 
    new ConcurrentMemoryDestination<MySimpleRow>();
// data is accessible in dest.Data 
```

The default implementation of `ConcurrentMemoryDestination` will use internal the ExpandoObject

```C#
var dest = new ConcurrentMemoryDestination();
```

You can use the `ConcurrentMemoryDestination` also with arrays.

```C#
var dest = new ConcurrentMemoryDestination<string[]>();
```


