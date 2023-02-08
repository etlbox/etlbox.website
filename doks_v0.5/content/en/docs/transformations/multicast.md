---
title: "Multicast (broadcast)"
description: "Details about the Multicast"
lead: "The Multicast is a component which basically clones your data and send them to all connected target. It has one input and can have two or more outputs."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 660
toc: true
---

## Overview

The `Multicast` let you send duplicates of your data into each component that you linked to its output. 

{{< alert text="If you want to split instead of code duplication, you can use Predicates which allow you to let only certain rows pass to a linked destination. See below for further details." >}}

#### Buffer 

The Multicast is a non-blocking operation. It has one input buffer for each output. 

### Code snippet 

```C#
Multicast<MyDataRow> multicast = new Multicast<MyDataRow>();
multicast.LinkTo(dest1);
multicast.LinkTo(dest2);
multicast.LinkTo(dest3);
```

## Brodcast example

The following code demonstrate a simple example where data would be duplicated and copied into two destinations - a database table and a Json file. 

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value{ get; set; }
}

public static void Main()
{
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

The multicast will create clones of the objects by creating new instances and copying the properties from the input data. Fields, Static values and non public properties will be ignored. If you want to customize how the clone is created, you can implement `ICloneable` on your object. 

### Splitting data 

The `Multicast` is useful when you want to broadcast your data to all linked target. If you want to split up your data on the connected target, you don't need to use the Multicast. You can simple use predicates for this purpose.  Predicates allow you to let only certain data pass to a target.  This works because you can always link every component to more than one output component. But without Multicast or predicates in place, all message would be send only to the target that was linked first. 

Predicates are conditions that describe to which target the data is send if the condition evaluates to true. Let's modify the example above so that we send the row with the Id 1 or smaller to destination 1 and the row with Id 2 or higher to destination 2.

#### Splitting data example 

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value{ get; set; }
}

public static void Main()
{
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

{{< alert text="Make sure when using predicates that always all rows arrive at any kind of destination. Use a <code>VoidDestination</code> for records that you don't want to keep." >}}

[You can also read more about predicates and linking here.](/docs/getting-started/linking/#predicates)
