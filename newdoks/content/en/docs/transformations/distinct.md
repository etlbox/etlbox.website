---
title: "Distinct"
description: "Details about the Distinct transformation"
lead: "The Distinct transformation will filter out duplicate records."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 690
toc: true
---

## Overview

The `Distinct` transformation will filter out duplicate records. For each incoming row, the distinct will create a hash value based on the values in the properties. This hash value will be stored in an internal list. If another record with the same hash values arrives, this record will be filtered out as it is a duplicate. By default, all public properties are used for the hash value generation. You can use the attribute `DistinctColumn` to specify particular properties.

#### Buffer

The `Distinct` is a non blocking transformation - every row is send to the next component after the hash values was generated. The component has a slight bigger memory footprint as it stores a hash value for each incoming row in a memory table. 

### Code snippet 

```C#
public class MyRow
{
    [DistinctColumn]
    public int DistinctId { get; set; }

    public string OtherValue { get; set; } 
}

Distinct<MyRow> trans = new Distinct<MyRow>();
```

## Example

We can define a simple object with two properties: Id and Value. Now we set the `DistinctColumn` attribute for each property. 

Now we send the following example data through the `Distinct` transformation:
Id|Value
--|-----
1|A
2|A
2|B
1|A
2|A

We would expect that we receive only three rows from the output of the Distinct: 

Id|Value
--|-----
1|A
2|A
2|B

Here is the code to prove this:

```C#
public class MyRow
{
    [DistinctColumn]
    public int Id { get; set; }
    [DistinctColumn]
    public string Value { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "B" });
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "A" });

    var trans = new Distinct<MyRow>();
    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(trans);
    trans.LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    //Output
    //Id:1 Value:A
    //Id:2 Value:A
    //Id:2 Value:B
}
```

### Processing the duplicates

The Distinct also allows to send the duplicates into another data flow. This can be easily implemented with the `LinkDuplicatesTo` method. We could enhance the example above to redirect the duplicates into another destination. Of course we could also use another more complex data flow to process the duplicates. 

```C#
public class MyRow
{
    [DistinctColumn]
    public int Id { get; set; }
    [DistinctColumn]
    public string Value { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "B" });
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "A" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "A" });

    var trans = new Distinct<MyRow>();
    var dest = new MemoryDestination<MyRow>();
    var duplicateDest = new MemoryDestination<MyRow>();

    source.LinkTo(trans);
    trans.LinkTo(dest);
    trans.LinkDuplicatesTo(duplicateDest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    foreach (var row in duplicateDest.Data)
        Console.WriteLine($"Duplicate - Id:{row.Id} Value:{row.Value}");

    //Output
    //Id:1 Value:A
    //Id:2 Value:A
    //Id:2 Value:B
    //Duplicate - Id:1 Value: A
    //Duplicate - Id:2 Value: A
}
```