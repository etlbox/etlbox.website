---
title: "Row multiplication"
description: "Examples and code recipes for the RowMultiplication component."
lead: "This article contains example code that shows the usage of the RowMultiplication component."
draft: false
images: []
menu:
  recipes:
    parent: "components"
weight: 2089
toc: true
---

## Generate new output rows from input

This example shows how RowMultiplication can be used to create 3 output records from one incoming record. 

```C#
 public class MyRow
{
    public string Text { get; set; }
    public char Char { get; set; }
}

public void SplittingString() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Text = "ABC" });
    var multi = new RowMultiplication<MyRow>();
    multi.MultiplicationFunc =
        row => {
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

## Generating new output with different data type

This example shows how incoming data is not only used to create 3 output rows, but also to convert the input type into a different output type.  

```C#
 public class MyString
{
    public string Text { get; set; }
}

public class MyChar
{
    public char Char { get; set; }
}

public void SplittingStringDifferentTypes() {
    var source = new MemorySource<MyString>();
    source.DataAsList.Add(new MyString() { Text = "ABC" });
    var multi = new RowMultiplication<MyString, MyChar>();
    multi.MultiplicationFunc =
        row => {
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
