---
title: "Distinct"
description: "Explains how to use the Distinct transformation in ETLBox to remove duplicate rows based on selected properties or custom logic. Covers attribute-based configuration, dynamic object support, duplicate redirection, and runtime metrics for tracking distinct and duplicate rows."
lead: "The <code>Distinct</code> transformation in ETLBox filters out duplicate records in a data flow by evaluating each row for uniqueness. It uses a hash-based mechanism to compare values and retain only the first occurrence of each unique row. All other duplicates are discarded or optionally redirected to a separate destination."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 523
toc: true
chatgpt-review: true
---

## Overview

- **Type**: Non-blocking transformation
- **Execution**: Row-by-row with in-memory hash tracking
- **Buffers**: One input buffer (keeps track of hashes)

By default, `Distinct` uses **all public properties** to compute a row's uniqueness. However, you can narrow this down using the `[DistinctColumn]` attribute or the `DistinctColumns` property to focus only on selected fields.

### Buffer Mechanics

`Distinct` processes rows as they arrive and computes a hash to identify duplicates. These hash values are stored in memory, which can grow in size depending on the dataset and distinct criteria.

## Using Attributes for Uniqueness

If using POCOs, you can mark specific fields with `[DistinctColumn]` to define uniqueness.

```csharp
public class MyRow {
    [DistinctColumn]
    public int Id { get; set; }

    [DistinctColumn]
    public string Value { get; set; }

    public string TestId { get; set; } // Not considered for distinct comparison
}
```

### Example: Basic Deduplication

This example uses the above `MyRow` class. Rows with the same `Id` and `Value` are treated as duplicates.

**Input Data:**

| Id | Value | TestId |
|----|-------|--------|
| 1  | A     | Test1  |
| 2  | A     | Test2  |
| 2  | B     | Test3  |
| 1  | A     | Test4  |
| 2  | A     | Test5  |
| 3  | B     | Test6  |

**Output:**

| Id | Value | TestId |
|----|-------|--------|
| 1  | A     | Test1  |
| 2  | A     | Test2  |
| 2  | B     | Test3  |
| 3  | B     | Test6  |

```csharp
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "A", TestId = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "A", TestId = "Test2" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "B", TestId = "Test3" });
source.DataAsList.Add(new MyRow() { Id = 1, Value = "A", TestId = "Test4" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "A", TestId = "Test5" });
source.DataAsList.Add(new MyRow() { Id = 3, Value = "B", TestId = "Test6" });

var trans = new Distinct<MyRow>();
var dest = new MemoryDestination<MyRow>();

source.LinkTo(trans);
trans.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Value:{row.Value} TestId:{row.TestId}");

//Output
/*
Id:1 Value:A TestId:Test1
Id:2 Value:A TestId:Test2
Id:2 Value:B TestId:Test3
Id:3 Value:B TestId:Test6
*/
```

## Redirecting Duplicates

Duplicates can be routed to another data flow using `LinkDuplicatesTo`. This enables advanced handling such as logging, enrichment, or rerouting for further validation. For example, duplicates could be sent to a transformation chain that logs issues, stores them in a separate error table, or applies a different transformation logic depending on your data requirements.

```csharp
var duplicateDest = new MemoryDestination<MyRow>();
trans.LinkDuplicatesTo(duplicateDest);
```

**Output:**
```
Duplicate - Id:1 Value:A TestId:Test4
Duplicate - Id:2 Value:A TestId:Test5
```

You can also apply **predicates** when redirecting duplicates:

```csharp
trans.LinkDuplicatesTo(destDuplicates1, row => row.Id == 1);
trans.LinkDuplicatesTo(destDuplicates2, row => row.Id >= 2);
```


## Dynamic Object Support

`Distinct` works with `ExpandoObject`. Use `DistinctColumns` to define which fields determine uniqueness.

```csharp
var trans = new Distinct();
trans.DistinctColumns = new[] {
    new DistinctColumn() { DistinctPropertyName = "DistinctCol1" },
    new DistinctColumn() { DistinctPropertyName = "DistinctCol2" }
};
```

```csharp
dynamic row = new ExpandoObject();
row.DistinctCol1 = 1;
row.DistinctCol2 = "A";
row.OtherValue = "Example";
```

You can still use `LinkDuplicatesTo()` with dynamic objects, including filtering by `ExpandoObject` properties.

## Custom Uniqueness Logic

You can define a custom function to control how uniqueness is evaluated. This overrides attribute- or column-based logic.

```csharp
trans.GetUniqueKeyFunc = row => row.Value.Substring(0, 1).ToLower();
```

This allows advanced matching (e.g., case-insensitive, substring-based, etc.).

## Manual DistinctColumn Setup

Instead of using attributes, you can set `DistinctColumns` programmatically:

```csharp
trans.DistinctColumns = new[] {
    new DistinctColumn() { DistinctPropertyName = "Col1" },
    new DistinctColumn() { DistinctPropertyName = "Col2" }
};
```

{{< callout context="note" icon="outline/info-circle" >}}
Setting `DistinctColumns` programmatically overrides any `[DistinctColumn]` attributes defined on your class.
{{< /callout >}}


## Monitoring Metrics

The `Distinct` transformation provides the following runtime metrics to help track processing results:

- **`DistinctCount`**
  The number of rows that were identified as distinct and passed to the output.

- **`DuplicateCount`**
  The number of rows detected as duplicates and either discarded or redirected via `LinkDuplicatesTo`.

These counters are automatically reset on each execution and are useful for validation, logging, or audit purposes.

#### Example:

```csharp
Console.WriteLine($"Distinct Rows: {trans.DistinctCount}");
Console.WriteLine($"Duplicate Rows: {trans.DuplicateCount}");
```


