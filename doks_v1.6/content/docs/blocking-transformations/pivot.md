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

The Pivot transformation in ETLBox allows you to turn a vertical set of rows into a horizontal table, essentially converting rows into columns. This is  useful when dealing with structured data that you want to summarize or reshape, such as turning a list of monthly values into a single row where each column represents a month.

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

The transformation involves specifying which columns should be pivoted (i.e., which columns will become the headers) and which columns will provide the values under those headers.

```csharp
public class MyRow {
    [PivotColumn]
    public string Month { get; set; }
    [PivotValueColumn]
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

The `Month` property is marked with the `PivotColumn` attribute, indicating that it should be used as a header. The `MonthValue` property is marked with the `PivotValueColumn` attribute, meaning its values will appear under the corresponding months.

{{< alert text="The Pivot will always generate a (dynamic) ExpandoObject as output object." >}}

### PivotColumns and PivotValueColumns

You can define the columns to be pivoted either using attributes on a class (as shown in the previous example) or by directly assigning the `PivotColumns` and `PivotValueColumns` properties when using dynamic objects like `ExpandoObject`. This flexibility allows you to handle both predefined and dynamic data structures.

For example, if you are working with dynamic data (like `ExpandoObject`), you can specify the pivot columns and value columns directly:

```csharp
var pivot = new Pivot();
pivot.PivotColumns = new[] { new PivotColumn() { PropertyName = "Month" } };
pivot.PivotValueColumns = new[] { new PivotValueColumn() { PropertyName = "MonthValue" } };
```

This way, you can dynamically decide which columns to pivot and which to use for the values.

### Aggregating Values

In cases where you have multiple values to aggregate, ETLBox provides the `ValueAggregationFunc`, which allows you to define how these values should be combined. This function accepts a dictionary of the values from the pivoted columns and returns the aggregated result.

For instance, if you have two columns containing values (`Value1` and `Value2`) and you want to sum them together during the pivot operation, you can define the `ValueAggregationFunc` like this:

```csharp
pivot.ValueAggregationFunc = dict => {
    double sum = 0;
    foreach (var entry in dict) {
        sum += double.Parse(entry.Value.ToString());
    }
    return sum;
};
```

This function will sum all the values in the dictionary and return the total as the aggregated value for each pivoted column.

#### Example: Using ValueAggregationFunc

Let’s look at an example where we have two values (`Value1` and `Value2`) for each month, and we want to sum these values together for each pivoted column.

```csv
Month,Value1,Value2
Jan,100,1000
Feb,200,2000
Mar,300,3000
```

The goal is to sum `Value1` and `Value2` for each month and display the result under the respective month. The output will look like this:

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
pivot.PivotValueColumns = new[] { new PivotValueColumn() { PropertyName = "Value1" }, new PivotValueColumn() { PropertyName = "Value2" } };

pivot.ValueAggregationFunc = dict => {
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

private ExpandoObject CreateExampleEntry(string month, string year, object val1, object val2) {
    dynamic result = new ExpandoObject();
    result.Month = month;
    result.Year = year;
    result.Value1 = val1;
    result.Value2 = val2;
    return result;
}
```

In this example, we define the `PivotColumns` as the `Month` column, and the `PivotValueColumns` as both `Value1` and `Value2`. The `ValueAggregationFunc` is used to sum the values from these two columns for each month, producing a single result for each pivoted column in the output.

## Pivot With Groups

Pivoting with groups allows you to pivot within subsets of the data defined by one or more group columns. For instance, suppose you have sales data for different groups and months. The input might look like this:

```csv
Group,Month,MonthValue
A,Jan,100
A,Feb,200
A,Mar,300
B,Jan,400
B,Feb,500
B,Mar,600
```

In this scenario, the output would pivot the `Month` column within each `Group`, resulting in the following:

```csv
Group,Jan,Feb,Mar
A,100,200,300
B,400,500,600
```

Here’s the code to achieve this:

```csharp
public class MyRow {
    public string Group { get; set; }
    [PivotColumn]
    public string Month { get; set; }
    [PivotValueColumn]
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

As you can see, all properties in your data object that are not defined as either `PivotColumn` or `PivotValueColumn` are automatically used as columns for grouping.
You can have as many group columns as you like. Depending on your desired output, you might want to remove some columns before using the Pivot.

### Using Pivot with Dynamic Objects

In some cases, the data structure may not be known at compile time, or you may want more flexibility in how the pivot is performed. In these situations, you can use `ExpandoObject` instead of a predefined class, and configure the `PivotColumns` and `PivotValueColumns` properties directly.

Consider the following example where the input data is dynamically generated:

```csv
Month,Year,Value1,Value2
Jan,2023,100,1000
Feb,2023,200,2000
Mar,2023,300,3000
```

You can pivot on both the `Month` and `Year` columns while aggregating `Value1` and `Value2`. Here’s how the output might look:

```csv
Jan2023,Feb2023,Mar2023
1100,2200,3300
```

The following code demonstrates how to configure the pivot using `ExpandoObject`:

```csharp
var source = new MemorySource();
source.DataAsList.Add(CreateExampleEntry("Jan", "2023", 100, 1000));
source.DataAsList.Add(CreateExampleEntry("Feb", "2023", 200, 2000));
source.DataAsList.Add(CreateExampleEntry("Mar", "2023", 300, 3000));

var pivot = new Pivot();
pivot.PivotColumns = new[] {
    new PivotColumn() { PropertyName = "Month" },
    new PivotColumn() { PropertyName = "Year" }
};
pivot.PivotValueColumns = new[] {
    new PivotValueColumn() { PropertyName = "Value1" },
    new PivotValueColumn() { PropertyName = "Value2" }
};

pivot.ValueAggregationFunc = dict => {
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
```

In this case, the `PivotColumns` and `PivotValueColumns` are set directly on the `Pivot` object, and the `ValueAggregationFunc` is used to sum the values from `Value1` and `Value2`. This approach gives you the flexibility to handle data dynamically without relying on predefined attributes.

