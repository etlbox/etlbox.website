---
title: "Row duplication"
description: "Examples and code recipes for the RowDuplication component."
lead: "This article contains example code that shows the usage of the RowDuplication component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2088
toc: true
---

## Duplicating data

This example shows how RowDuplication can be used to duplicate incoming data.  

```C#
public class MyRow
{
    public string Value { get; set; }
}

public void Duplicate() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Value = "A" });
    source.DataAsList.Add(new MyRow() { Value = "B" });

    var duplication = new RowDuplication<MyRow>();
    duplication.NumberOfDuplicates = 2;

    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(duplication).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Value:{row.Value}");

    //Output
    /*  Value:A
        Value:A
        Value:A
        Value:B
        Value:B
        Value:B
    */
}
```

## Duplicating with condition

This example shows how incoming data is only duplicated when a particular condition is met. 

```C#
public class MyRow
{
    public string Value { get; set; }
}

public void DuplicateWithPredicate() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Value = "A" });
    source.DataAsList.Add(new MyRow() { Value = "B" });

    var duplication = new RowDuplication<MyRow>();
    duplication.NumberOfDuplicates = 2;
    duplication.CanDuplicate =
        row => row.Value == "A";

    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(duplication).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Value:{row.Value}");

    //Output
    /*  Value:A
        Value:A
        Value:A
        Value:B
    */
}
```
