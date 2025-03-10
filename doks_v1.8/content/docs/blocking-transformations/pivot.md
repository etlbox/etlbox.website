---
title: "Pivot"
description: "The Pivot transformation in ETLBox reshapes data by turning rows into columns."
lead: "The ETLBox Pivot transformation offers a simple way to reorganize your data by converting vertical lists into horizontal tables. This transformation can be helpful for summarizing data, allowing you to pivot one or more columns and aggregate their values"
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 610
toc: true
---

## Introduction

The `Pivot` transformation in ETLBox allows you to reshape data by converting rows into columns, effectively pivoting vertical data into a horizontal format. This is ideal for summarizing or restructuring data, such as turning a list of monthly values into a single row where each column represents a month.

### PivotValue and PivotColumns

For example, given the following input data:

```csv
Month,MonthValue
Jan,100
Feb,200
Mar,300
```

The `Pivot` transformation will rearrange it into a horizontal format:

```csv
Jan,Feb,Mar
100,200,300
```

This transformation involves specifying:
- **Pivot columns** (headers in the resulting table),
- **Pivot values** (values under those headers), and
- **Pivot rows** (rows to be grouped together).

Here’s how it’s implemented:

```csharp
public class MyRow {
    [PivotColumn]
    public string Month { get; set; }
    [PivotValue]
    public double MonthValue { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Month = "Jan", MonthValue = 100 });
source.DataAsList.Add(new MyRow() { Month = "Feb", MonthValue = 200 });
source.DataAsList.Add(new MyRow() { Month = "Mar", MonthValue = 300 });

var pivot = new Pivot<MyRow>();
var dest = new MemoryDestination();

source.LinkTo(pivot);
pivot.LinkTo(dest);

Network.Execute(source);
```

The `Month` property is marked with the `PivotColumn` attribute, and the `MonthValue` property is marked with the `PivotValue` attribute.

{{< alert text="The Pivot transformation will always generate a (dynamic) ExpandoObject as the output object." >}}

### Grouped Data with PivotRow

When grouping data, the `PivotRow` attribute can be used to group rows by a specific property:

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

### PivotColumn, PivotValue, and PivotRow

You can define pivot columns, pivot values, and rows either by using attributes on a class (as shown above) or by directly setting the `PivotColumns`, `PivotValues`, and `PivotRows` properties when using dynamic objects like `ExpandoObject`. This flexibility allows you to handle both predefined and dynamic data structures.

For example, if working with dynamic data, you can specify these properties directly:

```csharp
var pivot = new Pivot();
pivot.PivotRows = new[] { new PivotRow() { PropertyName = "Group" } };
pivot.PivotColumns = new[] { new PivotColumn() { PropertyName = "Month" } };
pivot.PivotValues = new[] { new PivotValue() { PropertyName = "MonthValue" } };
```

This approach will also work with the dynamic ExpandoObjects.

## Aggregating Pivot Values with Built-in and Custom Methods

The `PivotValue` attribute allows you to aggregate values using built-in methods like `Sum` or with a custom function by specifying `AggregationMethod.Custom` and a `CustomFunction`.

### Built-in Aggregation

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

The Pivot provides the same aggregtion methods as the [Aggregation](/docs/blocking-transformations/aggregation/#aggregation-methods).

### Custom Aggregation

When `AggregationMethod.Custom` is used, a `CustomFunction` can be provided to define the aggregation logic.

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

## Grand Totals for Rows and Columns

To calculate aggregated totals for rows and columns, the `AddGrandTotalColumn` and `AddGrandTotalRows` properties can be used.

**Example with Grand Totals:**

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

## Advanced Features

### Custom Column Naming

Use `ColumnNameCombination` to customize how pivot column names are formed. This only applies if there are at least 2 `PivotColumns` defined.
By default, the column names are concatenated.

```csharp
pivot.ColumnNameCombination = dict => $"{dict["Month"]}_{dict["Year"]}";
```

### Generic Aggregation

You can define an overall custom aggregation logic by setting the `CustomValueAggregation`. This will overwrite any custom aggregation methods that are
specified on the pivot values.

```csharp
pivot.CustomValueAggregation = duplicateInfo => {
    return (double)(duplicateInfo.PreviousValue ?? 0) + (double)(duplicateInfo.NewValue ?? 0);
};
```

### Flatten Aggregation Results

This only applies if you have 2 or more `PivotValues`,  the output will contain an object of type `PivotAggregationResult`. This type will contain a separated result for each defined pivot value. If you want to combine or "flatten" these two values into one (e.g. to extract the data into a csv file) , you can do this by defining the `FlattenAggregationResults` method.

```csharp
pivot.FlattenAggregationResults = (pivotValues, columnName) => {
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

### Managing Missing Values

The `KeepEmptyValues` property controls whether columns with no data are included in the output. By default, it is set to `true`. This is useful in cases where you want to maintain a consistent set of columns across all rows, even if some rows do not contain values for certain pivoted columns.

{{< alert text="By default, the KeepEmptyValues property is turned on, meaning that all columns in the rows will be included in the output. " >}}

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


