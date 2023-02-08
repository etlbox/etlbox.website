---
title: "Row multiplication"
description: "Details about the RowMultiplication"
lead: "The RowMultiplication allows to create multiple records out of one input record. It works like a RowTransformation - so it accepts an input and an output type - but instead of just modifying one records it can return an array of records (when you return an empty list, it will even remove the incoming row)."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 630
toc: true
---

## Overview

### Description 

The RowMultiplication component is a variant of the `RowTransformation`. Like the `RowTransformation`, it accepts an input and an output type, and a transformation function (called MultiplicationFunc). The difference to the `RowTransformation` is that the `RowMultiplication` returns an array or list as return type. So from one input record you are able to create a transformation that returns one or more output records.

#### Buffer 

The RowMultiplication is a non blocking transformation and has one input buffer.

### Code snippet

```C#
DbSource<InputRow> source = new DbSource<InputRow>("SourceTable");
RowMultiplication<InputRow, OutputRow> multiplication = new RowMultiplication<InputRow, OutputRow>(
    row =>
    {
        List<OutputRow> result = new List<OutputRow>();
        result.Add(new OutputRow(row.Value1));
        result.Add(new OutputRow(row.Value2));
        return result;
    });
DbDestination<OutputRow> dest = new DbDestination<OutputRow>("DestinationTable");
source.LinkTo(multiplication);
multiplication.LinkTo(dest);
```

## Example

Let's start with an example where input and output type are the same - we can use the simplified `RowMultiplication<TInput>` for this. In this example, we use one input record that contains a string ("ABC") and split it into three output records for each character. 

```C#
 public class MyRow
{
    public string Text { get; set; }
    public char Char { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Text = "ABC" });
    var multi = new RowMultiplication<MyRow>();
    multi.MultiplicationFunc =
        row =>
        {
            var result = new List<MyRow>();
            foreach (char c in row.Text)
                result.Add(new MyRow() { Char = c });
            return result;
        };

    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(multi).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Char:{row.Char}");

    //Output
    /*  Char:A
        Char:B
        Char:C
    */
}
```

{{< alert text="If there is only one type defined for the <code>RowDuplication</code>, this type is used for input <b>and</b> output" >}}

### Converting data types

Instead of using the same object type for input and output, we could modify the example that we use two different types:

```C#
 public class MyString
{
    public string Text { get; set; }            
}

public class MyChar
{
    public char Char { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyString>();
    source.DataAsList.Add(new MyString() { Text = "ABC" });
    var multi = new RowMultiplication<MyString, MyChar>();
    multi.MultiplicationFunc =
        row =>
        {
            var result = new List<MyChar>();
            foreach (char c in row.Text)
                result.Add(new MyChar() { Char = c });
            return result;
        };

    var dest = new MemoryDestination<MyChar>();

    source.LinkTo<MyChar>(multi).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Char:{row.Char}");

    //Output
    /*  Char:A
        Char:B
        Char:C
    */
}
```