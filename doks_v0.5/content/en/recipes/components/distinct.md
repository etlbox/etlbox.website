---
title: "Distinct"
description: "Examples and code recipes for the Distinct component."
lead: "This article contains example code that shows the usage of the Distinct component."
draft: false
images: []
menu:
  recipes:
    parent: "components"
weight: 2085
toc: true
---

## Cross joining names

This example shows how to the distinct can be used to filter out duplicates in a data flow using the `DistinctColumn` attribute. 


```C#
public class MyRow
{
    [DistinctColumn]
    public int Id { get; set; }
    [DistinctColumn]
    public string Value { get; set; }
}

public void DistinctForAllProperties() {
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

## Link duplicates to different flow

This examples shows how the identified duplicates can be forwarded into another data flow using the `LinkDuplicatesTo` method. 

```C#
public void DistinctForAllPropertiesWithDuplicateLinking() {
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
