---
title: "Sort"
description: "As a blocking transformation, Sort requires all input data to be loaded before any output is produced. You define the sorting logic using a comparison function or by specifying SortColumn definitions. "
lead: "The Sort transformation arranges incoming rows based on a specified sorting rule. It ensures a consistent and defined row order for downstream processing."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 670
toc: true
chatgpt-review: true
---

## Overview

The `Sort` transformation reorders rows by applying a specified sort condition. It waits for all incoming data before producing any output, making it a **blocking transformation**. This ensures complete and accurate sorting, but it requires memory to hold all input records.

You can define sorting in two ways:

- By providing a custom `Comparison<T>` function.
- By setting one or more `SortColumn` definitions, which can use attributes or be defined programmatically.

{{< callout context="tip" icon="outline/rocket" >}}
If your data originates from a source that supports sorting — such as a SQL database — it is recommended to apply sorting there (e.g., using an <code>ORDER BY</code> clause). Sorting directly in the data source is typically much more efficient than using the <code>Sort</code> transformation, which requires loading all data into memory.
{{< /callout >}}

## Buffering

The `Sort` transformation buffers all incoming data before processing:

- **Blocking behavior**: All input data is stored in memory before sorting.
- **Memory use**: Memory usage scales with input size since all records are kept.
- **Input buffer**: Present but unbounded; it collects all input rows.
- **Output buffer**: Configurable using `MaxBufferSize`, controlling how many sorted rows are held before downstream components pull them.

## Sorting with a Comparison Function

You can sort rows by passing a `Comparison<T>` that defines how any two rows are ordered.

### Example

```csharp
public class MyRow {
    public int Number { get; set; }
    public string Value { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Number = 2, Value = "A" });
source.DataAsList.Add(new MyRow() { Number = 5, Value = "B" });
source.DataAsList.Add(new MyRow() { Number = 1, Value = "Y" });
// ... add more rows

var sort = new Sort<MyRow>((x, y) => y.Number.CompareTo(x.Number)); // Descending by Number

var dest = new MemoryDestination<MyRow>();
source.LinkTo(sort).LinkTo(dest);
Network.Execute(source);

// Output rows in descending order by Number
foreach (var row in dest.Data)
    Console.WriteLine($"Number {row.Number} - Value {row.Value}");

/* Output:
Number 5 - Value B
Number 2 - Value A
Number 1 - Value Y
*/
```

In this example, the rows are sorted in descending order based on the `Number` field.

## Sorting with SortColumn Definitions

As an alternative to using a `Comparison`, you can sort using one or more `SortColumn` definitions:

- Use `[SortColumn(Order = SortOrder.Descending, Priority = 1)]` on properties (attribute-based).
- Or set the `SortColumns` property programmatically (dynamic or schema-free).

This method is especially useful when dealing with dynamic data or when column-based sorting logic is easier to manage declaratively.

### Sorting with SortColumns

For dynamic or schema-free input, use the `SortColumns` property to define sort order without a custom function:

```csharp
var sort = new Sort<MyRow>();
sort.SortColumns = new List<SortColumn>()
{
    new SortColumn() { PropertyName = "Id", SortOrder = SortOrder.Descending, Priority = 1 },
    new SortColumn() { PropertyName = "Name", SortOrder = SortOrder.Ascending, Priority = 2 }
};
```

### Example: Sorting with `SortColumn` Attributes

```csharp
public class MyRow {
    [SortColumn(SortOrder = SortOrder.Descending, Priority = 1)]
    public int Number { get; set; }

    [SortColumn(SortOrder = SortOrder.Ascending, Priority = 2)]
    public string Category { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Number = 2, Category = "B" });
source.DataAsList.Add(new MyRow() { Number = 2, Category = "A" });
source.DataAsList.Add(new MyRow() { Number = 3, Category = "C" });

var sort = new Sort<MyRow>(); // Uses attribute-based sorting

var dest = new MemoryDestination<MyRow>();
source.LinkTo(sort).LinkTo(dest);
Network.Execute(source);

// Output: sorted by Number descending, then Category ascending
foreach (var row in dest.Data)
    Console.WriteLine($"{row.Number}, {row.Category}");

/* Output:
   3, C
   2, A
   2, B
*/
```

## Example: Sorting Dynamic Objects

You can also sort `ExpandoObject` data dynamically using the `SortColumns` property:

```csharp
var source = new MemorySource();

dynamic row1 = new ExpandoObject(); row1.Number = 2; row1.Category = "B";
dynamic row2 = new ExpandoObject(); row2.Number = 2; row2.Category = "A";
dynamic row3 = new ExpandoObject(); row3.Number = 3; row3.Category = "C";
source.DataAsList.Add(row1);
source.DataAsList.Add(row2);
source.DataAsList.Add(row3);

var sort = new Sort();
sort.SortColumns = new List<SortColumn> {
    new SortColumn { PropertyName= "Number", SortOrder = SortOrder.Descending, Priority = 1 },
    new SortColumn { PropertyName= "Category", SortOrder = SortOrder.Ascending, Priority = 2 }
};

var dest = new MemoryDestination();
source.LinkTo(sort).LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"{row.Number}, {row.Category}");

/* Output:
   3, C
   2, A
   2, B
*/
```

These examples demonstrate both static and dynamic sorting options using `SortColumn` definitions.
