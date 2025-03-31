---
title: "Cross Join"
description: "The CrossJoin works by first loading all rows from one input (the in-memory target) into memory. Then, for each row from the other input (the passing target), it pairs it with every row from the in-memory side using your custom join logic. This produces a full cross-product of the two datasets."
lead: "The <code>CrossJoin</code> transformation combines every row from one input with every row from another. It’s useful when you want to create all possible pairings between two datasets—like matching every product with every customer or every date with every region."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 650
toc: true
chatgpt-review: true
---

## Overview

The `CrossJoin` transformation combines every record from one input (called the **InMemory target**) with every record from another input (called the **Passing target**). This operation is similar to a SQL cross join, where each row from the first table is paired with every row from the second.

This transformation is useful for generating all possible combinations between two datasets. For example, if the left input contains records `1` and `2`, and the right input contains `A`, `B`, and `C`, the resulting output will be: `1-A`, `1-B`, `1-C`, `2-A`, `2-B`, `2-C`.

### Buffering

The `CrossJoin` transformation is a partial blocking transformation. Its buffering behavior depends on how the two input sources are connected:

- **InMemoryTarget**: All incoming rows from this input are fully loaded into memory before any join operation begins. This side should be assigned to the smaller dataset to optimize memory usage.
- **PassingTarget**: Rows from this input are processed one by one, but only after the InMemory side has been completely loaded.
- **Output Buffer**: Like other transformations, `CrossJoin` includes a standard output buffer to hold processed rows.

The `MaxBufferSize` property affects only the output buffer and has no influence on how many rows are stored in memory from the InMemory side. Because of this, careful consideration should be given to which input is assigned to `InMemoryTarget`, especially when working with large datasets.

## Defining the Cross Join

To use the `CrossJoin`, you must define the `CrossJoinFunc`, which describes how two input records are combined into an output record.

```csharp
var join = new CrossJoin<InputType1, InputType2, OutputType>(
    (inMemoryRow, passingRow) => new OutputType {
        Result = inMemoryRow.Value1 + passingRow.Value2
    });
```

Then, link the sources to the `InMemoryTarget` and `PassingTarget` respectively, and the final output to a destination:

```csharp
source1.LinkTo(join.InMemoryTarget);
source2.LinkTo(join.PassingTarget);
join.LinkTo(dest);
Network.Execute(source1, source2);
```

## Example: Joining First and Last Names

In the following example, we combine first names with last names to generate full names using a cross join. The left source provides first names, and the right source provides last names. The result includes every combination of first and last name.

```csharp
public class MyLeftRow {
    public string FirstName { get; set; }
}

public class MyRightRow {
    public string LastName { get; set; }
}

public class MyOutputRow {
    public string FullName { get; set; }
}

var source1 = new MemorySource<MyLeftRow>();
source1.DataAsList.AddRange(new[] {
    new MyLeftRow { FirstName = "Elvis" },
    new MyLeftRow { FirstName = "James" },
    new MyLeftRow { FirstName = "Marilyn" }
});

var source2 = new MemorySource<MyRightRow>();
source2.DataAsList.AddRange(new[] {
    new MyRightRow { LastName = "Presley" },
    new MyRightRow { LastName = "Monroe" }
});

var join = new CrossJoin<MyLeftRow, MyRightRow, MyOutputRow>(
    (left, right) => new MyOutputRow {
        FullName = $"{left.FirstName} {right.LastName}"
    });

var dest = new MemoryDestination<MyOutputRow>();
source1.LinkTo(join.InMemoryTarget);
source2.LinkTo(join.PassingTarget);
join.LinkTo(dest);
Network.Execute(source1, source2);

foreach (var row in dest.Data)
    Console.WriteLine(row.FullName);

// Output:
// Elvis Presley
// James Presley
// Marilyn Presley
// Elvis Monroe
// James Monroe
// Marilyn Monroe
```

{{< callout context="tip" icon="outline/rocket" >}}
Assign the input with fewer rows to the `InMemoryTarget` to minimize memory usage.
{{< /callout >}}

## Dynamic Object Support

The `CrossJoin` transformation supports dynamic types (`ExpandoObject`) through its non-generic `CrossJoin` class. This is useful when working with flexible schemas or integrating data from untyped sources (e.g., JSON, CSV).

Example:

```csharp
MemorySource source1 = new MemorySource();
MemorySource source2 = new MemorySource();

dynamic row1 = new ExpandoObject(); row1.FirstName = "Ada";
dynamic row2 = new ExpandoObject(); row2.LastName = "Lovelace";
source1.DataAsList.Add(row1);
source2.DataAsList.Add(row2);

var join = new CrossJoin(
    (left, right) => {
        dynamic result = new ExpandoObject();
        result.FullName = $"{(left as dynamic).FirstName} {(right as dynamic).LastName}";
        return result;
    });


MemoryDestination dest = new MemoryDestination();
source1.LinkTo(join.InMemoryTarget);
source2.LinkTo(join.PassingTarget);
join.LinkTo(dest);
Network.Execute(source1, source2);

foreach (dynamic row in dest.Data)
    Console.WriteLine(row.FullName);

// Output:
// Ada Lovelace
```

This flexibility makes `CrossJoin` suitable for both strongly typed and dynamic data processing scenarios.
