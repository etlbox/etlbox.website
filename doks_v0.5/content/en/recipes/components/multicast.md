---
title: "Multicast"
description: "Examples and code recipes for the Multicast component."
lead: "This article contains example code that shows the usage of the Multicast component."
draft: false
images: []
menu:
  recipes:
    parent: "components"
weight: 2088
toc: true
---

## Broadcast data

This example shows how a Multicast can be used to broadcast data into multiple outputs.  

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

public void SimpleMulticast() {
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

    Console.WriteLine($"Destination 1");
    foreach (var row in dest1.Data)
        Console.WriteLine($"{row.Id}{row.Value}");

    Console.WriteLine($"Destination 2");
    foreach (var row in dest2.Data)
        Console.WriteLine($"{row.Id}{row.Value}");

    //Outputs
    //Destination 1
    //1A
    //2B
    //Destination 2
    //1A
    //2B
}
```

## Splitting data without Multicast

The following example shows how data can be split up in dataflow. There is no need to use a Multicast when send rows into different parts of a dataflow. 

{{< alert text="Make sure when using predicates that always all rows arrive at any kind of destination. Use a <code>VoidDestination</code> for records that you don't want to keep, or use the third parameter of the <code>LinkTo</code> method." >}}

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

public void SplittingData() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "B" });

    var dest1 = new MemoryDestination<MyRow>();
    var dest2 = new MemoryDestination<MyRow>();

    source.LinkTo(dest1, row => row.Id <= 1);
    source.LinkTo(dest2, row => row.Id >= 2);

    Network.Execute(source);

    Console.WriteLine($"Destination 1");
    foreach (var row in dest1.Data)
        Console.WriteLine($"{row.Id}{row.Value}");

    Console.WriteLine($"Destination 2");
    foreach (var row in dest2.Data)
        Console.WriteLine($"{row.Id}{row.Value}");

    //Outputs
    //Destination 1
    //1A
    //Destination 2
    //2B
}
```
