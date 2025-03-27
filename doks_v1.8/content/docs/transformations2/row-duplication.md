---
title: "Row Duplication"
description: "Describes how to use the RowDuplication transformation in ETLBox to create multiple copies of input rows. Covers configuration via duplication count and conditional duplication using predicates. Includes support for strongly typed and dynamic data, and explains customization of cloning behavior."
lead: "The <code>RowDuplication</code> transformation is used to <b>create duplicates</b> of incoming rows in your data flow. It allows you to define how many copies of a row should be made and provides an optional predicate to control which rows are duplicated."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 526
toc: true
chatgpt-review: true
---

## Buffering Behavior

- Non-blocking transformation
- One input buffer
- Output includes the original row plus duplicates

By default, cloning uses a specialized mechanism that copies all public properties and fields. Non-public members are not included.  For custom cloning logic, implement `ICloneable` or use the `CustomCloningStrategy` property.

## Basic Usage

You can create a `RowDuplication` and specify the number of duplicates either via the constructor or the `NumberOfDuplicates` property.

```csharp
var source = new DbSource<InputType>("SourceTable");
var duplication = new RowDuplication<InputType>(3);
var dest = new CsvDestination<InputType>("output.csv");

source.LinkTo(duplication).LinkTo(dest);
```

This creates 3 duplicates of every row, resulting in 4 total outputs per input row (original + 3 copies).

## Example: Duplicate All Rows

```csharp
public class MyRow {
    public string Value { get; set; }
}

public static void Main() {
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

    // Output:
    // Value:A
    // Value:A
    // Value:A
    // Value:B
    // Value:B
    // Value:B
}
```

The default `NumberOfDuplicates` is `1`, meaning the original row plus one copy (total of two).

## Conditional Duplication with Predicate

You can control which rows are duplicated using the `CanDuplicate` predicate. If this predicate evaluates to `false`, no duplicates are created (only the original row is passed through).

### Example: Duplicate Only Selected Rows

```csharp
var duplication = new RowDuplication<MyRow>();
duplication.NumberOfDuplicates = 2;
duplication.CanDuplicate = row => row.Value == "A";
```

This will result in:

```txt
Value:A
Value:A
Value:A
Value:B
```

## Dynamic Object Support

The `RowDuplication` transformation also supports `ExpandoObject`. This allows working with dynamic data where schema is not fixed at compile time.

```csharp
var source = new MemorySource();
dynamic r1 = new ExpandoObject();
r1.Value = "X";
source.DataAsList.Add(r1);

var duplication = new RowDuplication();
duplication.NumberOfDuplicates = 2;

var dest = new MemoryDestination();

source.LinkTo(duplication).LinkTo(dest);
Network.Execute(source);

// Output will include the original plus two duplicates of the dynamic object
```

