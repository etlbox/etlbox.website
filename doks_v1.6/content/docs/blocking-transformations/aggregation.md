---
title: "Aggregation"
description: "Details about the Aggregation"
lead: "The aggregation class let you aggregate your data by with either your own aggregation function or a default function. This can be done on your whole data or on particular groups of your data (similar to a GROUP BY in sql)."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 830
toc: true
---

## Overview

The `Aggregation` class provides the ability to aggregate data as it flows through your system. You can either use predefined aggregation functions or define custom ones based on your needs. The default aggregation functions include **Sum**, **Min**, **Max**, **Count**,  and many more. You can also use your own logic.

You have the flexibility to apply these functions across your entire dataset or to specific groups, much like using a `GROUP BY` clause in SQL. Grouping allows for targeted aggregation within subsets of data rather than aggregating the entire dataset.

The aggregation process is optimized for memory efficiency. Only the current aggregated value for each group is stored, rather than every individual record. Each time a new record is processed, the current aggregated value is updated in real time. This design is ideal for basic calculations such as sums, minimums, maximums, and counts, and enables further calculations, like averages (which can be derived by dividing the sum by the count).

For example, consider aggregating the sum of the values 5, 3, and 2:
- First, the value 5 arrives, and the aggregated value starts at 0 (the default). The aggregation updates to 5.
- When the value 3 arrives, it adds to the previous result, updating the total to 8.
- Finally, the value 2 arrives, bringing the aggregated total to 10. This final result is then output.

If none of the built-in aggregation functions meet your requirements, you can implement a custom aggregation function. Custom functions have the same memory-efficient limitation: they only have access to the current aggregated value and the incoming record. For more complex needs, where you must process the entire dataset at once, refer to the **BlockTransformation** section.

### Aggregation Methods

The `Aggregation` class offers several built-in aggregation methods:

- **Count**
- **Sum**
- **Min**
- **Max**
- **FirstValue** (including nulls)
- **LastValue** (including nulls)
- **FirstNotNullValue**
- **LastNotNullValue**
- **Median**
- **Mean**
- **Variance**
- **StandardDeviation**

These methods, combined with the ability to group or classify data, cover most common aggregation needs. If these default methods do not meet your requirements, you have the option to write your own custom aggregation function.

#### Memory Footprint

The `Aggregation` is essentially a blocking transformation, but with significantly lower memory consumption. Unlike `BlockTransformation`, which stores all incoming rows in memory before processing them, `Aggregation` operates row by row. This means that only the aggregated values are stored in memory, rather than the entire set of detail rows.

Each time a record arrives, the calculation of the aggregated values is updated in real time, which explains the limitations on the types of calculations that can be performed. This approach is particularly efficient for operations like **Min**, **Max**, **Count**, **Sum**, **First**, and **Last**, where the result for each group is updated as new rows are processed.

For certain operations, like **Mean**, `Aggregation` may store additional information (such as the sum and count of rows), but even in these cases, the memory footprint remains  smaller compared to `BlockTransformation`.

In summary, `Aggregation` uses less memory because it only stores the results of the aggregation, not the input data. This makes it ideal when dealing with large numbers of rows and fewer groups or aggregation columns, significantly reducing memory usage compared to `BlockTransformation`.

## Example Aggregation

### Using `AggregateColumn` Attribute

There are two ways to use the `Aggregation` class. The simpler approach is to utilize the `AggregateColumn` and `GroupColumn` attributes alongside the default aggregation functions. When using the `AggregateColumn` attribute, if no `GroupColumn` is defined, the aggregation is performed on all incoming data records.

Here’s an example of how to use the `AggregateColumn` attribute for summing values:

```C#
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

    source.LinkTo<MyAggRow>(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum:{row.AggValue}");

    //Output
    //Sum:10
}
```

In this example, the `AggregateColumn` attribute is used to sum up the values of the `DetailValue` property from the incoming data. If no grouping is specified, the aggregation will apply to all records as a whole.

### Define `AggregationColumns` Without Attributes

When working with dynamic columns, it’s not possible to use attributes like `AggregateColumn` directly. In such cases, you can pass a list of `AggregateColumn` objects into the `Aggregation` class. This approach allows you to specify the property names for both the detail values and the aggregated values, as well as the aggregation method. This method can be used with both dynamic and normal objects and serves as an alternative to using attributes.

Here’s an example of how to define aggregation columns without using attributes:

```C#
public static void Main()
{
    var source = new MemorySource();

    dynamic val1 = new ExpandoObject();
    val1.DetailValue = 5;
    source.DataAsList.Add(val1);

    dynamic val2 = new ExpandoObject();
    val2.DetailValue = 3;
    source.DataAsList.Add(val2);

    dynamic val3 = new ExpandoObject();
    val3.DetailValue = 2;
    source.DataAsList.Add(val3);

    var agg = new Aggregation();
    agg.AggregateColumns = new List<AggregateColumn>()
    {
        new AggregateColumn() {
            InputValuePropName = "DetailValue",
            AggregatedValuePropName = "AggValue",
            AggregationMethod = AggregationMethod.Sum
        }
    };

    var dest = new MemoryDestination();

    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (dynamic row in dest.Data)
        Console.WriteLine($"Sum:{row.AggValue}");

    //Output
    //Sum:10
}
```

This approach is useful when working with dynamic objects like `ExpandoObject`.

### Using Aggregation Action

You can achieve the same behavior as with predefined methods by defining your own aggregation function. To do this, you specify an action that determines how the aggregated value is updated when a new value arrives, using the `AggregationAction` property.

Here’s an example of how to implement a custom sum using an aggregation action:

```C#
public class MyDetailValue
{
    public int DetailValue { get; set; }
}

public class MyAggRow2
{
    public int AggValue { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyDetailValue>();
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 5 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 3 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 2 });

    var agg = new Aggregation<MyDetailValue, MyAggRow2>();
    agg.AggregationAction =
        (detailValue, aggValue) =>
            aggValue.AggValue = detailValue.DetailValue + aggValue.AggValue;

    var dest = new MemoryDestination<MyAggRow2>();

    source.LinkTo<MyAggRow2>(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum:{row.AggValue}");

    //Output
    //Sum:10
}
```

In this example, the custom aggregation function is defined using an action that specifies how the sum is updated each time a new record arrives. This method allows for complete flexibility in how the aggregation is performed, enabling custom calculations beyond the default methods.

### Using Condition and Custom Aggregation Method

In addition to defining custom aggregation actions, you can also use a predicate to filter records before they are included in the aggregation process. A predicate is a condition that determines whether a particular record should be included in the aggregation. This adds flexibility in scenarios where you need to apply aggregation only to a subset of your data.

You can also define a custom aggregation method, allowing you to calculate values in ways that go beyond the default functions like sum, min, or max. Both predicates and custom aggregation methods provide powerful ways to customize the aggregation process.

#### Example: Using a Predicate

In this example, we'll aggregate values only if they meet a specified condition using a predicate. Here, we'll skip aggregating values where `DetailValue` is equal to 3.

```C#
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
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 5 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 3 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 2 });

    var agg = new Aggregation<MyDetailValue, MyAggRow>();

    agg.AggregationAction =
        (detailValue, aggValue) =>
            aggValue.AggValue = detailValue.DetailValue + aggValue.AggValue;

    // Adding a predicate to skip aggregation when DetailValue is 3
    agg.AggregationCondition = (detailValue, aggregationMethod) =>
    {
        return detailValue.DetailValue != 3;
    };

    var dest = new MemoryDestination<MyAggRow>();

    source.LinkTo<MyAggRow>(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum:{row.AggValue}");

    //Output
    //Sum:7 (since the value 3 is skipped)
}
```

In this example, the aggregation skips any record where `DetailValue` is 3, resulting in a sum of 7 instead of 10.

#### Example: Custom Aggregation Method

You can also define a completely custom aggregation method. For example, you might want to calculate a weighted sum, where each value is multiplied by a weight before being added to the aggregation.

```C#
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
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 5, Weight = 2 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 3, Weight = 1 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 2, Weight = 3 });

    var agg = new Aggregation<MyDetailValue, MyAggRow>();

    agg.AggregationAction = (detailValue, aggValue) =>
    {
        aggValue.WeightedSum = detailValue.DetailValue * detailValue.Weight + aggValue.WeightedSum;
    };

    var dest = new MemoryDestination<MyAggRow>();

    source.LinkTo<MyAggRow>(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Weighted Sum: {row.WeightedSum}");

    //Output
    //Weighted Sum: 22 ((5*2) + (3*1) + (2*3) = 10 + 3 + 6 = 19)
}
```

In this example, the custom aggregation method calculates the weighted sum of `DetailValue` based on the `Weight` property. The result is 19, which is the sum of each value multiplied by its respective weight.

### Combining Predicate with Custom Aggregation

You can also combine both a predicate and a custom aggregation method to apply more advanced filtering and calculations.

```C#
public static void Main()
{
    var source = new MemorySource<MyDetailValue>();
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 5, Weight = 2 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 3, Weight = 1 });
    source.DataAsList.Add(new MyDetailValue() { DetailValue = 2, Weight = 3 });

    var agg = new Aggregation<MyDetailValue, MyAggRow>();

    // Define custom aggregation method (weighted sum)
    agg.AggregationAction = (detailValue, aggValue) =>
    {
        aggValue.WeightedSum = detailValue.DetailValue * detailValue.Weight + aggValue.WeightedSum;
    };

    // Predicate to filter out records where Weight is less than 2
    agg.AggregationCondition = (detailValue, aggregationMethod) =>
    {
        return detailValue.Weight >= 2;
    };

    var dest = new MemoryDestination<MyAggRow>();

    source.LinkTo<MyAggRow>(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Filtered Weighted Sum: {row.WeightedSum}");

    //Output
    //Filtered Weighted Sum: 16 ((5*2) + (2*3) = 10 + 6 = 16)
}
```

In this case, the predicate filters out records where the `Weight` is less than 2. The remaining records are then aggregated using the custom weighted sum calculation, resulting in a final value of 16.


## Example Aggregation with Grouping

### Using `GroupingColumn`

Aggregating all records together might not always be what you need. Often, you will want to classify your data based on certain properties and perform aggregation for each class separately. This process is called grouping, and it works similarly to the `GROUP BY` clause in SQL. You specify which properties are used for grouping, and the calculations are done for each group independently.

Let’s illustrate this with a basic example:

Our input data consists of the following records: "A":3, "A":7, "B":4, and "B":6. If we aggregate all records without grouping, the sum will be 20. However, if we group the data by the letter, we would get a sum of 10 for group "A" and a sum of 10 for group "B".

Here’s how this looks in code when using the `GroupColumn` attribute:

```C#
public class DetailWithGroup
{
    public int DetailValue { get; set; }
    public string Group { get; set; }
}

public class MyAggRow3
{
    [AggregateColumn(nameof(DetailWithGroup.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }

    [GroupColumn(nameof(DetailWithGroup.Group))]
    public string Group { get; set; }
}

public static void Main()
{
    var source = new MemorySource<DetailWithGroup>();
    source.DataAsList.Add(new DetailWithGroup() { Group = "A", DetailValue = 3 });
    source.DataAsList.Add(new DetailWithGroup() { Group = "A", DetailValue = 7 });
    source.DataAsList.Add(new DetailWithGroup() { Group = "B", DetailValue = 4 });
    source.DataAsList.Add(new DetailWithGroup() { Group = "B", DetailValue = 6 });

    var agg = new Aggregation<DetailWithGroup, MyAggRow3>();

    var dest = new MemoryDestination<MyAggRow3>();

    source.LinkTo<MyAggRow3>(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum for {row.Group}:{row.AggValue}");

    //Output
    //Sum for A:10
    //Sum for B:10
}
```

In this example, we use the `GroupColumn` attribute to group the data by the `Group` property, and we use the `AggregateColumn` attribute to sum the `DetailValue` for each group. The result is a separate sum for group "A" and group "B".

Please note that the `GroupColumn` must specify the property name in the details object that the grouping is based on. This ensures the grouping is performed correctly for each distinct value of the specified property.

### Grouping with Dynamic Objects

Similar to the use of `AggregateColumn`, when working with dynamic objects such as `ExpandoObject`, you can also pass a list of `GroupColumns` to the `Aggregation`. In this case, you specify the property name in the input object that will be used for grouping, as well as the corresponding property name in the output object. This approach allows you to perform group-based aggregation on dynamic objects, without needing to define attributes.

```C#
public static void Main()
{
    var source = new MemorySource();
    dynamic val1 = new ExpandoObject();
    val1.Group = "A"; val1.DetailValue = 3;
    source.DataAsList.Add(val1);
    dynamic val2 = new ExpandoObject();
    val2.Group = "A"; val2.DetailValue = 7;
    source.DataAsList.Add(val2);
    dynamic val3 = new ExpandoObject();
    val3.Group = "B"; val3.DetailValue = 4;
    source.DataAsList.Add(val3);
    dynamic val4 = new ExpandoObject();
    val4.Group = "B"; val4.DetailValue = 6;
    source.DataAsList.Add(val4);

    var agg = new Aggregation();
    agg.AggregateColumns = new List<AggregateColumn>()
    {
        new AggregateColumn()
        {
            InputValuePropName = "DetailValue",
            AggregatedValuePropName = "AggValue",
            AggregationMethod = AggregationMethod.Sum
        }
    };
    agg.GroupColumns = new List<GroupColumn>()
    {
        new GroupColumn()
        {
            GroupPropNameInInput = "Group",
            GroupPropNameInOutput = "Group"
        }
    };

    var dest = new MemoryDestination();

    source.LinkTo(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (dynamic row in dest.Data)
        Console.WriteLine($"Sum for {row.Group}:{row.AggValue}");

    //Output
    //Sum for A:10
    //Sum for B:10
}
```

### Using Grouping Function

You can also create your own grouping function to have full control over how data is grouped. To do this, you need to define two functions:

- **GroupingFunc**: This function defines the object used for grouping. While you can use any object, it’s recommended to create a unique string or number to use for comparison when grouping data.
- **StoreKeyAction**: This function describes how the grouping object is stored in the aggregation output. It ensures that the grouped key is properly associated with each aggregated result.

By using these custom functions, you can implement more complex grouping logic and tailor the grouping behavior according to your specific requirements. This approach is especially useful when default grouping methods or attributes don’t meet your needs.

```C#
 public class MyAggRow4
{
    public int AggValue { get; set; }
    public string Group { get; set; }
}

public static void Main()
{
    var source = new MemorySource<DetailWithGroup>();
    source.DataAsList.Add(new DetailWithGroup() { Group = "A", DetailValue = 3 });
    source.DataAsList.Add(new DetailWithGroup() { Group = "A", DetailValue = 7 });
    source.DataAsList.Add(new DetailWithGroup() { Group = "B", DetailValue = 4 });
    source.DataAsList.Add(new DetailWithGroup() { Group = "B", DetailValue = 6 });

    var agg = new Aggregation<DetailWithGroup, MyAggRow4>();

    agg.AggregationAction =
        (detailValue, aggValue) =>
            aggValue.AggValue = detailValue.DetailValue + aggValue.AggValue;

    agg.GroupingFunc =
        detailValue => detailValue.Group;

    agg.StoreKeyAction =
        (groupingObject, aggValue) => aggValue.Group = (string)groupingObject;

    var dest = new MemoryDestination<MyAggRow4>();

    source.LinkTo<MyAggRow4>(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Sum for {row.Group}:{row.AggValue}");

    //Output
    //Sum for A:10
    //Sum for B:10
}
```

## Custom Configuration with Attributes

### Multiple Attributes

Both `AggregateColumn` and `GroupColumn` attributes can be applied to as many properties as necessary. This allows for flexible and complex aggregation configurations. You can assign a different aggregation function to each `AggregateColumn`. When using multiple grouping columns, the combination of all grouping columns is used to generate the grouping key. This means that only records with matching values for all grouping columns will be aggregated together into the same group.

Here is an example of an object used as output for an aggregation with multiple attributes:

```C#
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

    public decimal AveragePrices => AggPrice / CountOrders;
}
```

In this example:
- The `Price` column is aggregated using the `Sum` method.
- The `OrderNumber` column is counted to track the number of orders.
- Two group keys (`OrderNumber` and `OrderDate`) are used to group the data.

Instead of using attributes, you can also achieve this by passing multiple aggregation and group columns programmatically to the `AggregateColumns` and `GroupColumns` properties. This gives you the flexibility to define dynamic columns when attributes are not practical.

### Using Predicate and Custom Code with `AggregationMethod.Custom`

When working with `AggregationMethod.Custom`, you can define custom logic for your aggregation, allowing for calculations and processes beyond the default methods. Additionally, you can use a predicate to filter records before they are processed, ensuring only those that meet your conditions are included in the aggregation.

The **predicate** allows you to define conditions for including records, while the **custom aggregation function** defines how the aggregated value is calculated.

#### Example 1: Custom Aggregation Method with Predicate

This example demonstrates the use of a predicate to filter values and a custom function for counting only positive values. Additionally, it shows a custom summing function.

```C#
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
            Predicate = dv => (double)dv > 0, // Count only positive values
            CustomFunction = (inputValue, aggValue) => (int)aggValue + 1 // Custom count function
        },
        new AggregateColumn() {
            InputValuePropName = "DetailValue",
            AggregatedValuePropName = "CustomSum",
            AggregationMethod = AggregationMethod.Custom,
            CustomFunction = (inputValue, aggValue) => (double)inputValue + (double)aggValue // Custom summing function
        }
    };

    MemoryDestination<MyAggRow> dest = new MemoryDestination<MyAggRow>();

    // Link and execute
    source.LinkTo(agg);
    agg.LinkTo(dest);
    source.Execute();

    foreach (var row in dest.Data)
        Console.WriteLine($"CountIfValue: {row.CountIfValue}, CustomSum: {row.CustomSum}");

    //Output:
    //CountIfValue: 4, CustomSum: 33
}
```

**Explanation:**
1. **Predicate for Counting**: The `Predicate` checks whether `DetailValue` is greater than 0. If the condition is true, the custom function increments the `CountIfValue`.
2. **Custom Summing**: The `CustomFunction` for summing adds the current `DetailValue` to the existing aggregated sum, allowing for custom behavior when calculating the sum.

#### Example 2: Custom Aggregation with Grouping and Dynamic Objects

In this example, we use both a predicate and a custom aggregation function while grouping the data by a dynamic property.

```C#
MemorySource source = new MemorySource();
source.DataAsList = new List<ExpandoObject>() {
    CreateDetailExpandoWithGroup(20,"A"),
    CreateDetailExpandoWithGroup(10,"A"),
    CreateDetailExpandoWithGroup(5,"B"),
    CreateDetailExpandoWithGroup(8,"B")
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
    new GroupColumn() { GroupPropNameInInput = "Group", GroupPropNameInOutput = "Group" }
};

MemoryDestination dest = new MemoryDestination();

source.LinkTo(agg);
agg.LinkTo(dest);
source.Execute();

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Group: {row.Group}, CustomSum: {row.CustomSum}");

//Output:
//Group: A, CustomSum: 30
//Group: B, CustomSum: 13
```

**Explanation:**
1. **Grouping**: The data is grouped by the dynamic `Group` property.
2. **Custom Function**: For each group, a custom sum is calculated based on the `DetailValue` using the custom aggregation function.

