---
title: "Row Multiplication"
description: "Explains how to use the RowMultiplication transformation in ETLBox to produce multiple output rows from a single input row. Supports both same-type and cross-type transformations, enabling normalization, data expansion, and complex conversions."
lead: "The <code>RowMultiplication</code> transformation allows you to transform one input row into multiple output rows. It functions similarly to a <code>RowTransformation</code>, but instead of returning a single row, it returns a list or array of rows. This makes it ideal for tasks like expanding, normalizing, or splitting data structures."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 528
toc: true
chatgpt-review: true
---

When input and output types are different, `RowMultiplication` can also be used to cast or convert a single row into multiple rows of a different type, enabling complex type transformations within a data flow.

## Buffering Behavior

- Non-blocking transformation
- Single input buffer
- Processes each input row immediately and emits one or more output rows

## Basic Example

You must define a `MultiplicationFunc` that receives one input record and returns an `IEnumerable` of output records.

```csharp
DbSource<InputRow> source = new DbSource<InputRow>("SourceTable");
RowMultiplication<InputRow, OutputRow> multiplication = new RowMultiplication<InputRow, OutputRow>(
    row => {
        List<OutputRow> result = new List<OutputRow>();
        result.Add(new OutputRow(row.Value1));
        result.Add(new OutputRow(row.Value2));
        return result;
    });

DbDestination<OutputRow> dest = new DbDestination<OutputRow>("DestinationTable");
source.LinkTo(multiplication).LinkTo(dest);
```

## Example: Same Input and Output Types

You can use the simplified `RowMultiplication<T>` when input and output types are the same. If only one generic type is provided, it is used for both input and output.

```csharp
public class MyRow {
    public string Text { get; set; }
    public char Char { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Text = "ABC" });

var multi = new RowMultiplication<MyRow>();
multi.MultiplicationFunc = row => {
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

// Output:
// Char:A
// Char:B
// Char:C
```

## Example: Different Input and Output Types

You can define separate types for input and output if needed.

```csharp
public class MyString {
    public string Text { get; set; }
}

public class MyChar {
    public char Char { get; set; }
}

var source = new MemorySource<MyString>();
source.DataAsList.Add(new MyString() { Text = "ABC" });

var multi = new RowMultiplication<MyString, MyChar>();
multi.MultiplicationFunc = row => {
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

// Output:
// Char:A
// Char:B
// Char:C
```

## Normalizing Document Data

You can use `RowMultiplication` to normalize nested data structures like arrays in JSON documents.

### JSON Input Example

```json
{
  "Invoices": [
    {
      "Id": 1,
      "CustomerName": "Peter",
      "Total": 45,
      "Items": [
        { "Name": "Clock", "Price": 20 },
        { "Name": "Socks", "Price": 10 },
        { "Name": "Shirt", "Price": 15 }
      ]
    },
    {
      "Id": 2,
      "CustomerName": "Mary",
      "Total": 100,
      "Items": [
        { "Name": "Clock", "Price": 29 },
        { "Name": "Dress", "Price": 71 }
      ]
    }
  ]
}
```

### ETL Example Using ExpandoObject

```csharp
var source = new JsonSource("res/examples/invoices.json");
var invoiceHeaders = new MemoryDestination();
var invoiceLines = new MemoryDestination();

var duplicate = new Multicast();

var extractHeader = new RowTransformation();
extractHeader.TransformationFunc = row => {
    var dict = row as IDictionary<string, object>;
    dict.Remove("Items");
    return row;
};

var extractLines = new RowMultiplication();
extractLines.MultiplicationFunc = row => {
    var extractedLines = new List<ExpandoObject>();
    var itemsArray = (row as dynamic).Items as List<object>;
    foreach (dynamic line in itemsArray) {
        line.InvoiceId = (row as dynamic).Id;
        extractedLines.Add(line);
    }
    return extractedLines;
};

source.LinkTo(duplicate);
duplicate.LinkTo(extractHeader).LinkTo(invoiceHeaders);
duplicate.LinkTo(extractLines).LinkTo(invoiceLines);

Network.Execute(source);

Console.WriteLine("Total invoices: " + invoiceHeaders.Data.Count);
Console.WriteLine("Total lines for all invoices: " + invoiceLines.Data.Count);

// Output:
// Total invoices: 2
// Total lines for all invoices: 5
```

This pattern is useful for extracting and flattening nested arrays from hierarchical input documents.
