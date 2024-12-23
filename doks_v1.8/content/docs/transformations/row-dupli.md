---
title: "Row Duplication"
description: "Details about the RowDuplication"
lead: "The RowDuplication simply creates duplicates of the incoming rows. You can specify how many copies you want or if you want to create a copy only if a predicate evaluates to true."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 610
toc: true
---


## Overview

Sometimes you want to duplicate the rows of your input data. This can be easily done with the `RowDuplication` transformation - it will give you one or more duplicates of your data. If you want only to duplicate particular rows, you can pass a Predicate expression that define which rows can be clones and which not.

#### Buffer

The `RowDuplication` is a non blocking transformation. It has one input buffer.

### Code snippet

Here a simple example for creating three duplicates of each row:

```C#
var source = new DbSource<InputType>("SourceTable");
RowDuplication<InputType> duplication = new RowDuplication<InputType>(3);
var dest = new CsvDestination<InputType>("output.csv");
source.LinkTo(duplication).LinkTo(dest);
```

## Example

Let's have a look at an example for data duplication:

```C#
public class MyRow
{
    public string Value { get; set; }
}

public static void Main()
{
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

The default value for the `RowDuplication` is one, which means that every row creates one copy.

You can set up a predicate that only creates a copy of the row if it evaluates to true. If we set the CanDuplicate property
in the example above:

```C#
    var duplication = new RowDuplication<MyRow>();
    duplication.NumberOfDuplicates = 2;
    duplication.CanDuplicate = row => row.Value == "A";
);
```

This would change the output to this:

```C#
    //Output
    /*  Value:A
        Value:A
        Value:A
        Value:B
    */
```
