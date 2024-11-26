---
title: "Pivot"
description: "The Pivot transformation in ETLBox reshapes data by turning rows into columns."
lead: "The ETLBox Pivot transformation offers a simple way to reorganize your data by converting vertical lists into horizontal tables. This transformation can be helpful for summarizing data, allowing you to pivot one or more columns and aggregate their values"
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 810
toc: true
---

## Introduction

The Pivot transformation in ETLBox allows you to turn a vertical set of rows into a horizontal table, essentially converting rows into columns. This is useful when dealing with structured data that you want to summarize or reshape, such as turning a list of monthly values into a single row where each column represents a month.

### PivotValue and PivotColumns

For example, given the following input data:

```csv
Month,MonthValue
Jan,100
Feb,200
Mar,300
```

The Pivot transformation will rearrange it into a horizontal format like this:

```csv
Jan,Feb,Mar
100,200,300
```

The transformation involves specifying which columns should be pivoted (i.e., which columns will become the headers), which columns provide the values under those headers, and which columns group the rows to be pivoted.

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

The `Month` property is marked with the `PivotColumn` attribute, and the `MonthValue` property is marked with the `PivotValue` attribute. Any properties not marked with these attributes (and not marked as `PivotRow`) will be ignored in the output.

{{< alert text="The Pivot transformation will always generate a (dynamic) ExpandoObject as the output object." >}}

### Grouped Data with PivotRow

When pivoting data, you might want to group your ouptut. This can be done using the `PivotRow` attribute (or the `PivotRows` property). For example, consider sales data grouped by `Group` and `Month`:

```csv
Group,Month,MonthValue
A,Jan,100
A,Feb,200
A,Mar,300
B,Jan,400
B,Feb,500
B,Mar,600
```

The desired output might look like this:

```csv
Group,Jan,Feb,Mar
A,100,200,300
B,400,500,600
```

Here’s how to implement this:

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

This approach provides greater flexibility for handling dynamic data structures without predefined class definitions.


## Handling Non-Aggregated Data with ValueAggregation

In many cases, you may encounter input data where multiple values exist for the same pivoted column. By default, the `Pivot` transformation only retains the last value for each pivoted column when duplicates are present. However, if you want to control how these duplicate values are handled, you can use the `ValueAggregation` property. This property provides a function that defines how to aggregate the old and new values whenever duplicates are detected.

For example, consider the following input data:

```csv
Month,MonthValue
Jan,100
Feb,200
Jan,1000
Mar,300
Mar,3000
Jan,10000
```

Without any aggregation logic, the output will retain only the last value for each pivoted column, resulting in:

```csv
Jan,Feb,Mar
10000,200,3000
```

If you want to aggregate the duplicate values instead of overwriting them, you can define a custom aggregation function using the `ValueAggregation` property. For instance, if you want to sum all duplicate values, you can configure the `Pivot` transformation like this:

```csharp
var pivot = new Pivot<NoGroupRow>();
pivot.ValueAggregation = duplicateInfo => {
    return (double)duplicateInfo.PreviousValue + (double)duplicateInfo.NewValue;
};
```

This function takes a `PivotDuplicate` object as input, which contains information about the column name, the old value, and the new value. By summing the old and new values, the transformation ensures that all duplicate values contribute to the final result. With this configuration, the output for the above data will look like this:

```csv
Jan,Feb,Mar
11100,200,3300
```

## Combining Values with ValueCombination

In cases where multiple values exist for the same pivoted column, ETLBox provides the `ValueCombination` function. This function allows you to define how to combine the values, such as summing them, averaging them, or concatenating strings.

Here’s an example of summing multiple values during the pivot operation:

```csharp
pivot.ValueCombination = dict => {
    double sum = 0;
    foreach (var entry in dict) {
        sum += double.Parse(entry.Value.ToString());
    }
    return sum;
};
```

### Example: Using ValueCombination

Consider input data like this:

```csv
Month,Value1,Value2
Jan,100,1000
Feb,200,2000
Mar,300,3000
```

The goal is to sum `Value1` and `Value2` for each month. The output will look like this:

```csv
Jan,Feb,Mar
1100,2200,3300
```

Here’s the code that performs this transformation:

```csharp
var source = new MemorySource();
source.DataAsList.Add(CreateExampleEntry("Jan", 100, 1000));
source.DataAsList.Add(CreateExampleEntry("Feb", 200, 2000));
source.DataAsList.Add(CreateExampleEntry("Mar", 300, 3000));

var pivot = new Pivot();
pivot.PivotColumns = new[] { new PivotColumn() { PropertyName = "Month" } };
pivot.PivotValues = new[] {
    new PivotValue() { PropertyName = "Value1" },
    new PivotValue() { PropertyName = "Value2" }
};

pivot.ValueCombination = dict => {
    double sum = 0;
    foreach (var entry in dict) {
        sum += double.Parse(entry.Value.ToString());
    }
    return sum;
};

var dest = new MemoryDestination();
source.LinkTo(pivot);
pivot.LinkTo(dest);

Network.Execute(source);

private ExpandoObject CreateExampleEntry(string month, object val1, object val2) {
    dynamic result = new ExpandoObject();
    result.Month = month;
    result.Value1 = val1;
    result.Value2 = val2;
    return result;
}
```

This code sums `Value1` and `Value2` for each pivoted column (month).

### Difference between ValueAggregation and ValueCombination

The `ValueAggregation` property is particularly useful when you need precise control over how duplicates are processed and aggregated.

In contrast, the `ValueCombination` property serves a different purpose. It is used when there are multiple `PivotValue`  columns, and you need to combine their values into a single result. For example, if you are pivoting `Value1` and `Value2` columns for each month and want to sum their values into one combined result, you would use `ValueCombination`:

```csharp
pivot.ValueCombination = dict => {
    double sum = 0;
    foreach (var entry in dict) {
        sum += double.Parse(entry.Value.ToString());
    }
    return sum;
};
```

While `ValueCombination` works at the level of multiple value columns during the initial pivoting process, `ValueAggregation` focuses on aggregating data inside the current group defined by the pivot rows. Both properties can be used independently or together.


## Omit empty values

The `KeepEmptyValues` property in the  Pivot transformation controls whether missing pivoted columns (i.e., columns that do not have any data in certain rows) are retained in the output. This property is set to `true` by default, which means that empty/null values are kept in every output row. This is useful in cases where you want to maintain a consistent set of columns across all rows, even if some rows do not contain values for certain pivoted columns.

Having this flag enable is important when writing dynamic output to a CSV file, as CSV writers require all header rows to be present in the first record. Without these columns, the structure of the CSV file could be inconsistent, leading to errors or missing data in the output file.

{{< alert text="By default, the KeepEmptyValues property is turned on, meaning that all columns in the rows will be included in the output. This default behavior is intended to maximize support e.g. for CsvDestinations.  If you want to produce a more compact output by avoiding the inclusion of empty or null columns, simply set this property to <code>false</code>." >}}

### Example using KeepEmptyValues

You can enable or disable the inclusion of empty columns by setting the `KeepEmptyValues` property in your Pivot transformation:

```csharp
var pivot = new Pivot<MyRow>();
pivot.KeepEmptyValues = false;  // Remove columns with null values for each row
```

Consider a scenario where you are pivoting sales data for different months, but not all months have data for each group.

**Input:**

| Group | Month | Sales |
|-------|-------|-------|
| A     | Jan   | 100   |
| A     | Feb   | 200   |
| B     | Jan   | 300   |
| B     | Mar   | 400   |

With `KeepEmptyValues = true`, the output will contain all potential months, even though not every group has sales data for every month.

**Output:**

| Group | Jan | Feb | Mar |
|-------|-----|-----|-----|
| A     | 100 | 200 | null |
| B     | 300 | null | 400 |

In this example, the "Feb" column for group B and the "Mar" column for group A are created, but their values are set to `null`.

If `KeepEmptyValues` is set to `false`, the pivot transformation only includes columns for which data exists. Any missing columns for a specific row will not be included.

**Output:**

| Group | Jan | Feb | Mar |
|-------|-----|-----|-----|
| A     | 100 | 200 |     |
| B     | 300 |     | 400 |

Notice that the columns where no data exists (e.g., "Feb" for group B and "Mar" for group A) are not included in the output at all, making the dataset sparser.
