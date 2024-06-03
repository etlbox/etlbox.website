---
title: "Filter transformation"
description: "Details about the FilterTransformation"
lead: "The FilterTransformation filters out row that do not match with a given predicate."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 675
toc: true
---

## Overview

The `FilterTransformation` is a simple transformation that filter out rows which do not match with a given Predicate. (A predicate is a function that either returns true or false - if the result is true, the row is kept, otherwise the row is discarded.

{{< alert text="The filter transformation is not the only option to filter values in a data flow. You can use predicates expression when linking components in a data flow as well. See below for more details." >}}

#### Buffer 

The `FilterTransformation` is a non blocking transformation, so it will only store the current row in memory (plus some additional rows in the input buffer to improve throughput). It has one input buffer.

## Example 

The following example shows how we filter out a row with a particular Id value from the incoming data. 

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
    source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });

    var filter = new FilterTransformation<MyRow>();
    filter.FilterPredicate = row =>
    {
        return row.Id == 2;
    };

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

### Using predicates when linking

Instead of using a `FilterTransformation`, the same output can be produced by using predicates when linking objects. The below code would do the same thing:

```C#
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

The VoidDestination is a destination that can be used to discard records that you want to ignore. This code can be even simplified more:

```C#
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });

var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest, row => row.Id != 2, row => row.Id == 2); //Implicit use of void destination

Network.Execute(source);
```

By providing a second and third parameter when linking components, you can define which rows you want to keep and which rows you want to discard. 

## Using dynamic objects

The default implementation of the `FilterTransformation` also works with an ExpandoObject. The code above could be modified like below to achieve the same result with a dynamic object. 

```C#
public void ExampleFilterDynamic()
{
    var source = new MemorySource();
    dynamic r1 = new ExpandoObject();
    r1.Id = 1; r1.Value = "Test1";
    source.DataAsList.Add(r1);
    dynamic r2 = new ExpandoObject();
    r2.Id = 2; r2.Value = "Test2";
    source.DataAsList.Add(r2);
    dynamic r3 = new ExpandoObject();
    r3.Id = 3; r3.Value = "Test3";
    source.DataAsList.Add(r3);

    var filter = new FilterTransformation();
    filter.FilterPredicate = row =>
    {
        dynamic r = row;
        return r.Id == 2;
    };

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


