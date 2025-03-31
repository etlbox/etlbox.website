---
title: "Aggregation"
description: "The Aggregation component in ETLBox is a blocking transformation used to compute aggregate values over data streams. It supports built-in functions like sum, count, min, max, and more, and enables custom logic through aggregation actions or functions."
lead: "The <code>Aggregation</code> transformation allows you to compute aggregated values such as sums, counts, minimums, maximums, or any custom aggregation on a data stream. It supports both global aggregation and grouping similar to SQL's <code>GROUP BY</code>. You can use predefined aggregation methods or implement custom logic for complete flexibility."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 610
toc: true
chatgpt-review: true
---

## Overview

Whether aggregating over the entire dataset or applying group-based calculations, this component offers both flexibility and performance. Built-in methods and custom aggregation logic are supported, including use with dynamic or strongly typed objects.

This component is particularly memory-efficient because it stores only the intermediate results for each group (if any), not the full input. This makes it suitable for large-scale datasets.

### Buffering

The `Aggregation` is a **blocking transformation** that processes rows in a buffered manner. All incoming records are received and aggregated internally before any output is sent. The internal buffer stores one aggregated object per group (or one if no grouping is applied). This means memory usage depends on the number of unique groups.

Unlike transformations such as `Sort`, which store all records, the `Aggregation` stores only intermediate results, leading to a smaller memory footprint. The `MaxBufferSize` property controls the size of the output buffer but does not limit the internal aggregation buffer.

### Aggregation Methods

You can use any of the following predefined aggregation methods:

- `Sum` – Adds all numeric values together.
- `Min` – Finds the smallest value in the group.
- `Max` – Finds the largest value in the group.
- `Count` – Counts the total number of rows.
- `FirstNotNullValue` – Returns the first non-null value encountered.
- `LastNotNullValue` – Returns the last non-null value encountered.
- `FirstValue` – Returns the first value, including nulls.
- `LastValue` – Returns the last value, including nulls.
- `Mean` – Calculates the average (sum divided by count).
- `Median` – Returns the median value (middle value in a sorted list).
- `Mode` – Returns the most frequently occurring value.
- `Concatenate` – Concatenates all values into a single string
- `CountDistinct` – Counts the number of distinct (unique) values.
- `CountDistinctNotNull` – Counts distinct values, excluding nulls.
- `Variance` – Calculates the population variance.
- `VarianceSample` – Calculates the sample variance.
- `StandardDeviation` – Calculates the population standard deviation.
- `StandardDeviationSample` – Calculates the sample standard deviation.
- `Custom` – Allows definition of a custom aggregation function.

If needed, custom aggregation logic can be implemented using the `AggregationAction` property or by defining `CustomFunction` and `Predicate` within `AggregateColumn`.

## Aggregation Columns

### Using AggregateColumn Attribute

The easiest way to define aggregation behavior is by using the `[AggregateColumn]` attribute. This allows you to annotate properties in your aggregation result class to define how input values are processed.

If you only want to aggregate all incoming rows without grouping, you simply define which column should be aggregated and which method to apply.

```csharp
public class MyDetailValue
{
    public int DetailValue { get; set; }
}

public class MyAggRow
{
    [AggregateColumn(nameof(MyDetailValue.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyDetailValue>();
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 5 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 3 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 2 });

    var agg = new Aggregation<MyDetailValue, MyAggRow>();
    var dest = new MemoryDestination<MyAggRow>();

    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum: {row.AggValue}");

    // Output:
    // Sum: 10
}
```

### Define Aggregation Columns Programmatically

If you are working with dynamic data or prefer to define aggregation logic in code instead of using attributes, you can use the `AggregateColumns` property. This allows you to configure aggregation rules manually.

```csharp
var source = new MemorySource();

dynamic row1 = new ExpandoObject(); row1.DetailValue = 5;
dynamic row2 = new ExpandoObject(); row2.DetailValue = 3;
dynamic row3 = new ExpandoObject(); row3.DetailValue = 2;
source.DataAsList.AddRange(new[] { row1, row2, row3 });

var agg = new Aggregation();
agg.AggregateColumns = new List<AggregateColumn>
{
    new AggregateColumn
    {
        InputValuePropName = "DetailValue",
        AggregatedValuePropName = "AggValue",
        AggregationMethod = AggregationMethod.Sum
    }
};

var dest = new MemoryDestination();
source.LinkTo(agg).LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Sum: {row.AggValue}");

// Output:
// Sum: 10
```

This approach is especially useful for dynamic scenarios, such as processing rows from JSON or CSV without predefined schemas.

## Using Aggregation Action

Instead of using predefined aggregation methods, you can define custom aggregation logic using the `AggregationAction` property. This action is executed for each input row and updates the aggregated result accordingly.

```csharp
public class MyDetailValue
{
    public int DetailValue { get; set; }
}

public class MyAggRow
{
    public int AggValue { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyDetailValue>();
    source.DataAsList.Add(new MyDetailValue { DetailValue = 5 });
    source.DataAsList.Add(new MyDetailValue { DetailValue = 3 });
    source.DataAsList.Add(new MyDetailValue { DetailValue = 2 });

    var agg = new Aggregation<MyDetailValue, MyAggRow>();
    agg.AggregationAction = (input, output) =>
    {
        output.AggValue += input.DetailValue;
    };

    var dest = new MemoryDestination<MyAggRow>();
    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum: {row.AggValue}");

    // Output:
    // Sum: 10
}
```

This method is useful when default methods like `Sum` or `Count` don't match your specific needs, or when calculations involve multiple input fields or transformations.

### Aggregation with Condition

In some cases, you may want to include only specific rows in the aggregation. The `AggregationCondition` property allows you to define a predicate that filters records before they are aggregated.

```csharp
public class MyDetailValue
{
    public int DetailValue { get; set; }
}

public class MyAggRow
{
    public int AggValue { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyDetailValue>();
    source.DataAsList.Add(new MyDetailValue { DetailValue = 5 });
    source.DataAsList.Add(new MyDetailValue { DetailValue = 3 });
    source.DataAsList.Add(new MyDetailValue { DetailValue = 2 });

    var agg = new Aggregation<MyDetailValue, MyAggRow>();
    agg.AggregationAction = (input, output) =>
    {
        output.AggValue += input.DetailValue;
    };
    agg.AggregationCondition = (input, method) => input.DetailValue != 3;

    var dest = new MemoryDestination<MyAggRow>();
    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Conditional Sum: {row.AggValue}");

    // Output:
    // Conditional Sum: 7
}
```

In this example, the value `3` is skipped due to the condition, resulting in a total of `7`.

### Weighted Aggregation Example

To perform calculations such as weighted sums, you can combine multiple fields within your custom aggregation action:

```csharp
public class MyDetailValue
{
    public int DetailValue { get; set; }
    public int Weight { get; set; }
}

public class MyAggRow
{
    public int WeightedSum { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyDetailValue>();
    source.DataAsList.Add(new MyDetailValue { DetailValue = 5, Weight = 2 });
    source.DataAsList.Add(new MyDetailValue { DetailValue = 3, Weight = 1 });
    source.DataAsList.Add(new MyDetailValue { DetailValue = 2, Weight = 3 });

    var agg = new Aggregation<MyDetailValue, MyAggRow>();
    agg.AggregationAction = (input, output) =>
    {
        output.WeightedSum += input.DetailValue * input.Weight;
    };

    var dest = new MemoryDestination<MyAggRow>();
    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Weighted Sum: {row.WeightedSum}");

    // Output:
    // Weighted Sum: 19
}
```

This allows precise control over how your data is calculated when simple arithmetic operations are not enough.


## Aggregation with Grouping

### Using GroupColumn Attribute

Aggregating all rows together is not always sufficient. Often, you will want to group your data based on one or more properties and perform aggregation within each group. This works similarly to SQL's `GROUP BY`.

Let’s consider this dataset:
`"A":3`, `"A":7`, `"B":4`, `"B":6`.
Without grouping, the result is a single sum of `20`.
With grouping by the string key, the results are:
- `"A"` → `10`
- `"B"` → `10`

This grouping can be expressed declaratively with attributes:

```csharp
public class DetailWithGroup
{
    public int DetailValue { get; set; }
    public string Group { get; set; }
}

public class MyAggRow
{
    [AggregateColumn(nameof(DetailWithGroup.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }

    [GroupColumn(nameof(DetailWithGroup.Group))]
    public string Group { get; set; }
}

public static void Main()
{
    var source = new MemorySource<DetailWithGroup>();
    source.DataAsList.Add(new DetailWithGroup { Group = "A", DetailValue = 3 });
    source.DataAsList.Add(new DetailWithGroup { Group = "A", DetailValue = 7 });
    source.DataAsList.Add(new DetailWithGroup { Group = "B", DetailValue = 4 });
    source.DataAsList.Add(new DetailWithGroup { Group = "B", DetailValue = 6 });

    var agg = new Aggregation<DetailWithGroup, MyAggRow>();
    var dest = new MemoryDestination<MyAggRow>();

    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum for {row.Group}: {row.AggValue}");

    // Output:
    // Sum for A: 10
    // Sum for B: 10
}
```


### Grouping with Dynamic Objects

If you're working with `ExpandoObject`, grouping can still be applied using `GroupColumns` directly:

```csharp
public static void Main()
{
    var source = new MemorySource();

    dynamic row1 = new ExpandoObject();
    row1.Group = "A";
    row1.DetailValue = 3;
    source.DataAsList.Add(row1);

    dynamic row2 = new ExpandoObject();
    row2.Group = "A";
    row2.DetailValue = 7;
    source.DataAsList.Add(row2);

    dynamic row3 = new ExpandoObject();
    row3.Group = "B";
    row3.DetailValue = 4;
    source.DataAsList.Add(row3);

    dynamic row4 = new ExpandoObject();
    row4.Group = "B";
    row4.DetailValue = 6;
    source.DataAsList.Add(row4);

    var agg = new Aggregation();
    agg.AggregateColumns = new List<AggregateColumn>
    {
        new AggregateColumn
        {
            InputValuePropName = "DetailValue",
            AggregatedValuePropName = "AggValue",
            AggregationMethod = AggregationMethod.Sum
        }
    };
    agg.GroupColumns = new List<GroupColumn>
    {
        new GroupColumn
        {
            GroupPropNameInInput = "Group",
            GroupPropNameInOutput = "Group"
        }
    };

    var dest = new MemoryDestination();
    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (dynamic row in dest.Data)
        Console.WriteLine($"Sum for {row.Group}: {row.AggValue}");

    // Output:
    // Sum for A: 10
    // Sum for B: 10
}
```

This approach allows full flexibility when schema information isn't available at compile time.


### Using Grouping Function

If your grouping logic cannot be expressed via attributes or simple property mappings, you can use the `GroupingFunc` and `StoreKeyAction` delegates to define custom behavior.

- **`GroupingFunc`** defines how to extract the key used for grouping.
- **`StoreKeyAction`** specifies how to write the grouping key back into the aggregated output.

This provides complete flexibility and is especially useful for complex group keys or composite identifiers.

#### Example: Custom Grouping Function

```csharp
public class DetailWithGroup
{
    public int DetailValue { get; set; }
    public string Group { get; set; }
}

public class MyAggRow
{
    public int AggValue { get; set; }
    public string Group { get; set; }
}

public static void Main()
{
    var source = new MemorySource<DetailWithGroup>();
    source.DataAsList.Add(new DetailWithGroup { Group = "A", DetailValue = 3 });
    source.DataAsList.Add(new DetailWithGroup { Group = "A", DetailValue = 7 });
    source.DataAsList.Add(new DetailWithGroup { Group = "B", DetailValue = 4 });
    source.DataAsList.Add(new DetailWithGroup { Group = "B", DetailValue = 6 });

    var agg = new Aggregation<DetailWithGroup, MyAggRow>();

    agg.AggregationAction = (detail, result) =>
        result.AggValue = result.AggValue + detail.DetailValue;

    agg.GroupingFunc = detail => detail.Group;

    agg.StoreKeyAction = (groupKey, result) =>
        result.Group = (string)groupKey;

    var dest = new MemoryDestination<MyAggRow>();
    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum for {row.Group}: {row.AggValue}");

    // Output:
    // Sum for A: 10
    // Sum for B: 10
}
```

This approach allows you to fully control how groups are created and how the resulting key is stored in the output. The grouping object can be any type (e.g., string, int, tuple), as long as it can be used as a dictionary key.

## Custom Configuration with Attributes

### Multiple Attributes

The `Aggregation` transformation supports using multiple `[AggregateColumn]` and `[GroupColumn]` attributes on the output object. This allows you to:

- Apply multiple aggregation operations at once (e.g., sum and count).
- Use multiple properties for grouping (like a composite key).

This behavior is similar to performing grouped aggregations in SQL using `GROUP BY` on multiple columns, combined with different aggregation functions for each column.

#### Example: Multiple Aggregates and Grouping Keys

```csharp
public class MyAggRow
{
    [AggregateColumn("Price", AggregationMethod.Sum)]
    public int AggPrice { get; set; }

    [AggregateColumn("OrderNumber", AggregationMethod.Count)]
    public int CountOrders { get; set; }

    [GroupColumn("OrderNumber")]
    public string OrderNumberGroupKey { get; set; }

    [GroupColumn("OrderDate")]
    public string OrderDateGroupKey { get; set; }

    public decimal AveragePrice => CountOrders == 0 ? 0 : AggPrice / CountOrders;
}
```

In this configuration:
- The property `AggPrice` sums the `Price` values.
- `CountOrders` counts how many rows are in each group based on `OrderNumber` and `OrderDate`.
- The computed property `AveragePrice` demonstrates how derived fields can be calculated from the aggregated values.

You can use this setup with an input class like the following:

```csharp
public class MyDetailRow
{
    public string OrderNumber { get; set; }
    public string OrderDate { get; set; }
    public int Price { get; set; }
}
```

To use the aggregation, just link the source to the `Aggregation<MyDetailRow, MyAggRow>` component as before. The results will be grouped by `OrderNumber` and `OrderDate`, with aggregation applied as configured.



### Writing Custom AggregationMethod

In addition to using predefined aggregation methods (like `Sum`, `Count`, `Min`, etc.), you can define custom aggregation logic by setting the `AggregationMethod` to `Custom` and specifying a custom aggregation function via the `CustomFunction` property. You can also apply a `Predicate` to control which rows are included in the aggregation.

This is useful for specialized scenarios like conditional counting, weighted sums, or other non-standard calculations.

#### Example: Count Only Positive Values + Custom Sum

```csharp
public class MyRow {
    public int Id { get; set; }
    public double DetailValue { get; set; }
}

public class MyAggRow {
    public int CountIfValue { get; set; }
    public double CustomSum { get; set; }
}

public static void Main()
{
    MemorySource<MyRow> source = new MemorySource<MyRow>();
    source.DataAsList = new List<MyRow>() {
        new MyRow { Id = 1,  DetailValue = -5 },
        new MyRow { Id = 2,  DetailValue = 0 },
        new MyRow { Id = 3,  DetailValue = 5 },
        new MyRow { Id = 4,  DetailValue = 10 },
        new MyRow { Id = 5,  DetailValue = 20 },
        new MyRow { Id = 6,  DetailValue = 3 },
    };

    Aggregation<MyRow, MyAggRow> agg = new Aggregation<MyRow, MyAggRow>();

    agg.AggregateColumns = new[] {
        new AggregateColumn() {
            InputValuePropName = "DetailValue",
            AggregatedValuePropName = "CountIfValue",
            Predicate = dv => (double)dv > 0,
            CustomFunction = (inputValue, aggValue) => (int)aggValue + 1
        },
        new AggregateColumn() {
            InputValuePropName = "DetailValue",
            AggregatedValuePropName = "CustomSum",
            AggregationMethod = AggregationMethod.Custom,
            CustomFunction = (inputValue, aggValue) => (double)inputValue + (double)aggValue
        }
    };

    MemoryDestination<MyAggRow> dest = new MemoryDestination<MyAggRow>();

    source.LinkTo(agg);
    agg.LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"CountIfValue: {row.CountIfValue}, CustomSum: {row.CustomSum}");

    //Output:
    //CountIfValue: 4, CustomSum: 33
}
```

Explanation:
- `CountIfValue` only includes rows where `DetailValue > 0`.
- `CustomSum` manually adds each value (replacing built-in `Sum`).


### Custom Aggregation with Dynamic Objects

When working with dynamic objects (e.g., `ExpandoObject`), you can combine grouping with custom aggregation logic. The following example groups rows by the `Group` property and calculates a custom sum from the `DetailValue`.

```csharp
MemorySource source = new MemorySource();
source.DataAsList = new List<ExpandoObject>() {
    CreateDetailExpandoWithGroup(20, "A"),
    CreateDetailExpandoWithGroup(10, "A"),
    CreateDetailExpandoWithGroup(5, "B"),
    CreateDetailExpandoWithGroup(8, "B")
};

Aggregation agg = new Aggregation();
agg.AggregateColumns = new[] {
    new AggregateColumn() {
        InputValuePropName = "DetailValue",
        AggregatedValuePropName = "CustomSum",
        AggregationMethod = AggregationMethod.Custom,
        CustomFunction = (inputValue, aggValue) => (double)inputValue + (double)aggValue
    }
};

agg.GroupColumns = new[] {
    new GroupColumn() {
        GroupPropNameInInput = "Group",
        GroupPropNameInOutput = "Group"
    }
};

MemoryDestination dest = new MemoryDestination();

source.LinkTo(agg);
agg.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Group: {row.Group}, CustomSum: {row.CustomSum}");

// Output:
// Group: A, CustomSum: 30
// Group: B, CustomSum: 13

ExpandoObject CreateDetailExpandoWithGroup(double value, string group)
{
    dynamic obj = new ExpandoObject();
    obj.DetailValue = value;
    obj.Group = group;
    return obj;
}
```

This example demonstrates how to dynamically generate input data, group by a property in the input and calculate a custom aggregation using a lambda function.
