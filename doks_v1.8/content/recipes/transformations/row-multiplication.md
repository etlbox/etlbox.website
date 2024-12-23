---
title: "Row multiplication"
description: "Examples and code recipes for the RowMultiplication component."
lead: "This article contains example code that shows the usage of the RowMultiplication component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
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

## Normalizing document data

Consider the following json document, which contains 2 invoices. The first invoice contains 3 items, the second invoice 2 items. 

```json
{
  "Invoices": [
    {
      "Id": 1,
      "CustomerName": "Peter",
      "Total": 45,
      "Items": [
        {
          "Name": "Clock",
          "Price": 20
        },
        {
          "Name": "Socks",
          "Price": 10
        },
        {
          "Name": "Shirt",
          "Price": 15
        }
      ]
    },
    {
      "Id": 2,
      "CustomerName": "Mary",
      "Total": 100,
      "Items": [
        {
          "Name": "Clock",
          "Price": 29
        },
        {
          "Name": "Dress",
          "Price": 71
        }
      ]
    }
  ]
}
```

If we want to extract the items and the header data for each invoice into separate entities, we can use the `RowMulitplication` to achieve this.

```C#
var source = new JsonSource("res/examples/invoices.json");
var invoiceHeaders = new MemoryDestination();
var invoiceLines = new MemoryDestination();

var duplicate = new Multicast();
var extractHeader = new RowTransformation();
extractHeader.TransformationFunc = (row) => {
    var dict = row as IDictionary<string, object>;
    dict.Remove("Items");
    return row;
};
var extractLines = new RowMultiplication();
extractLines.MultiplicationFunc = (row) => {
    var extractedLines = new List<ExpandoObject>();
    var itemsArray = (row as dynamic).Items as List<object>;
    foreach (dynamic line in itemsArray) {
        line.InvoiceId = (row as dynamic).Id;
        extractedLines.Add(line);
    }
    return extractedLines;
};


source.LinkTo(duplicate);

duplicate.LinkTo(extractHeader);
extractHeader.LinkTo(invoiceHeaders);

duplicate.LinkTo(extractLines);
extractLines.LinkTo(invoiceLines);

Network.Execute(source);

Console.WriteLine("Total invoices: " + invoiceHeaders.Data.Count);
Console.WriteLine("Total lines for all invoices: " + invoiceLines.Data.Count);

//Ouput
/*
Total invoices: 2
Total lines for all invoices: 5
*/
```