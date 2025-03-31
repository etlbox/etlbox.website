---
title: "Pivot"
description: "The Pivot transformation reshapes your data by turning row values into column headers. Using [PivotColumn] and [PivotValue], it organizes values horizontally, making it easier to compare or summarize related data side by side."
lead: "The Pivot transformation in ETLBox allows you to reshape row-based data into a columnar format by pivoting values. This is useful for scenarios such as transforming a long list of time-based values into a table format where each time period becomes a column, or summarizing grouped data into matrix-like output."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 660
toc: true
chatgpt-review: true
---

## Overview

The transformation supports strongly-typed input as well as dynamic objects like ExpandoObject. Output is always a dynamic object (of type ExpandoObject), regardless of input type.

You can define:
- **Pivot columns**: Columns that form the headers.
- **Pivot values**: Values inserted under those columns.
- **Pivot rows**: Rows grouped together to produce each output line.

This transformation can optionally perform aggregations (e.g., `Sum`, `Mean`) if multiple input rows correspond to the same pivot cell.

### Output Schema

- The output always consists of ExpandoObject instances.
- Pivot rows (group keys) are preserved as columns.
- Pivot column names are derived dynamically, either automatically or using ColumnNameCombination.
- All pivot values are placed into columns, aggregated as configured.

### Buffering

The Pivot transformation is a blocking transformation:
- **Input Buffer**: Stores all input rows before pivoting.
- **Internal Buffer**: Holds rows grouped by pivot keys until processing.
- **Output Buffer**: Stores generated output rows, subject to MaxBufferSize.

Memory consumption depends on:
- The number of distinct pivot rows (groups).
- The number of distinct pivot columns.
- Whether `AddGrandTotalColumn` or `AddGrandTotalRows` is enabled.
- Whether `KeepEmptyValues` is `true` (results in more uniform, wider rows).

## Simple Pivot Example

This example uses the `[PivotColumn]` and `[PivotValue]` attributes to pivot data from rows to columns. Each unique value from the pivot column becomes a column header, and the corresponding pivot value fills in the data.

**Input Data**:
```csv
Month,MonthValue
Jan,100
Feb,200
Mar,300
```

**Output**:
```csv
Jan,Feb,Mar
100,200,300
```

**Implementation**:
```csharp
public class MyRow {
    [PivotColumn]
    public string Month { get; set; }
    [PivotValue]
    public double MonthValue { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow { Month = "Jan", MonthValue = 100 });
source.DataAsList.Add(new MyRow { Month = "Feb", MonthValue = 200 });
source.DataAsList.Add(new MyRow { Month = "Mar", MonthValue = 300 });

var pivot = new Pivot<MyRow>();
var dest = new MemoryDestination();

source.LinkTo(pivot);
pivot.LinkTo(dest);
Network.Execute(source);
```
## Grouped Pivot Example

This example uses the `[PivotRow]` attribute to group rows by a specific property. Each group becomes a separate row in the output, with pivoted columns representing the unique values from the pivot column.


**Input:**
```csv
Group,Month,MonthValue
A,Jan,100
A,Feb,200
A,Mar,300
B,Jan,400
B,Feb,500
B,Mar,600
```

**Output:**
```csv
Group,Jan,Feb,Mar
A,100,200,300
B,400,500,600
```

**Implementation:**
```csharp
public class MyRow {
    [PivotRow]
    public string Group { get; set; }
    [PivotColumn]
    public string Month { get; set; }
    [PivotValue]
    public double MonthValue { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Group = "A", Month = "Jan", MonthValue = 100 });
source.DataAsList.Add(new MyRow() { Group = "A", Month = "Feb", MonthValue = 200 });
source.DataAsList.Add(new MyRow() { Group = "A", Month = "Mar", MonthValue = 300 });
source.DataAsList.Add(new MyRow() { Group = "B", Month = "Jan", MonthValue = 400 });
source.DataAsList.Add(new MyRow() { Group = "B", Month = "Feb", MonthValue = 500 });
source.DataAsList.Add(new MyRow() { Group = "B", Month = "Mar", MonthValue = 600 });

var pivot = new Pivot<MyRow>();
var dest = new MemoryDestination();

source.LinkTo(pivot);
pivot.LinkTo(dest);

Network.Execute(source);
```

## Dynamic Input Configuration

When using `ExpandoObject`, specify pivot definitions manually:

```csharp
var pivot = new Pivot();
pivot.PivotRows = new[] { new PivotRow { PropertyName = "Group" } };
pivot.PivotColumns = new[] { new PivotColumn { PropertyName = "Month" } };
pivot.PivotValues = new[] { new PivotValue { PropertyName = "MonthValue" } };
```

## Aggregation Support

The pivot transformation aggregates multiple values per pivot cell using:

- Built-in methods: `Sum`, `Min`, `Max`, `Count`, etc. ([see Aggregation Methods](../aggregation/#aggregation-methods))
- `CustomFunction`: For advanced logic
- `CustomValueAggregation`: Global aggregation override

### Built-in Methods Example

Use the `AggregationMethod.Sum` to calculate the sum of all values for a pivot column.

```csharp
public class MyRow {
    [PivotColumn]
    public string Month { get; set; }
    [PivotValue(AggregationMethod = AggregationMethod.Sum)]
    public double MonthValue { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Month = "Jan", MonthValue = 100 });
source.DataAsList.Add(new MyRow() { Month = "Jan", MonthValue = 200 });
source.DataAsList.Add(new MyRow() { Month = "Feb", MonthValue = 300 });

var pivot = new Pivot<MyRow>();
var dest = new MemoryDestination();

source.LinkTo(pivot);
pivot.LinkTo(dest);
Network.Execute(source);

// Output:
// Jan, Feb
// 300, 300
```

### Custom Function Example

When `AggregationMethod.Custom` is used, a CustomFunction can be provided to define the aggregation logic.

```csharp
public class MyRow {
    [PivotColumn]
    public string Month { get; set; }
    [PivotValue(AggregationMethod = AggregationMethod.Custom, CustomFunction = nameof(CustomAggregation))]
    public double MonthValue { get; set; }
}

// Define the custom aggregation logic
public static object CustomAggregation(object previousValue, object newValue) {
    return (double)(previousValue ?? 0) + (double)(newValue ?? 0) * 2; // Add double the new value
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Month = "Jan", MonthValue = 100 });
source.DataAsList.Add(new MyRow() { Month = "Jan", MonthValue = 200 });
source.DataAsList.Add(new MyRow() { Month = "Feb", MonthValue = 300 });

var pivot = new Pivot<MyRow>();
var dest = new MemoryDestination();

source.LinkTo(pivot);
pivot.LinkTo(dest);
Network.Execute(source);

// Output:
// Jan, Feb
// 500, 300
```


### Generic Aggregation

You can define an overall custom aggregation logic by setting the `CustomValueAggregation`. This will overwrite any custom aggregation methods that are
specified on the pivot values.

```csharp
pivot.CustomValueAggregation = duplicateInfo => {
    return (double)(duplicateInfo.PreviousValue ?? 0) + (double)(duplicateInfo.NewValue ?? 0);
};
```

## Grand Totals

To calculate aggregated totals for rows and columns, the `AddGrandTotalColumn` and `AddGrandTotalRows` properties can be used.

**Input:**
```csv
Group,Country,Total
A,DE,100
A,US,400
A,FR,200
B,DE,300
B,US,310
C,FR,500
C,UK,600
```

**Output:**
```csv
Group,DE,US,FR,UK,GrandTotal
A,100,400,200,,700
B,300,310,,,610
C,,,500,600,1100
GrandTotal,400,710,700,600,2410
```

```csharp
var pivot = new Pivot();
pivot.AddGrandTotalColumn = true;
pivot.AddGrandTotalRows = true;
```

This adds an extra row and column that sums up all values.


## Column Name Customization

Use `ColumnNameCombination` to customize how pivot column names are formed. This only applies if there are at least 2 `PivotColumns` defined.
By default, the column names are concatenated.

```csharp
pivot.ColumnNameCombination = dict => $"{dict["Month"]}_{dict["Year"]}";
```


## Flattening Aggregation Results

If multiple `[PivotValue]` exist per pivot cell, the result is a list of `PivotAggregationResult`.

To flatten them:

```csharp
pivot.FlattenAggregationResults = (pivotValues, columnName) =>
{
    return (decimal)pivotValues[0].AggregatedValue + (decimal)pivotValues[1].AggregatedValue;
};
```

**PivotAggregationResult vs. Flattened Output**

If not flattened:

```csharp
Jan2023 -> [{ AggregatedValue: 100, PivotValueColumn: "Value1" }, { AggregatedValue: 1000, PivotValueColumn: "Value2" }]
```

If flattened:
```csharp
Jan2023 -> 1100
```


## Managing Missing Values

The `KeepEmptyValues` property controls whether columns with no data are included in the output. By default, it is set to `true`. This is useful in cases where you want to maintain a consistent set of columns across all rows, even if some rows do not contain values for certain pivoted columns.

Having this flag enable is important when writing dynamic output to a CSV file, as CSV writers require all header rows to be present in the first record. Without these columns, the structure of the CSV file could be inconsistent, leading to errors or missing data in the output file.  If you want to produce a more compact output by avoiding the inclusion of empty or null columns, simply set this property to `false`.

Consider a scenario where you are pivoting sales data for different months, but not all months have data for each group.

**Input:**

| Group | Month | Sales |
|-------|-------|-------|
| A     | Jan   | 100   |
| B     | Jan   | 200   |
| B     | Feb   | 300   |
| C     | Mar   | 400   |

With `KeepEmptyValues = true`, the output will contain all potential months, even though not every group has sales data for every month.

**Output:**

| Group | Jan  | Feb  | Mar  |
|-------|------|------|------|
| A     | 100  | null | null |
| B     | 200  | 300  | null |
| C     | null | null | 400  |


