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

The `Aggregation` allows you to aggregate data in your flow. You can either define your own aggregation function or use one of the default functions. The default aggregation functions are Sum, Min, Max, Count, FirstValue and LastValue. The aggregation does not necessarily to be calculated on your whole data. You can specify that your data is grouped (similar to a group BY). 

Default functions are currently sum, min, max and count. The number of calculation is restricted because the calculation of the aggregated value is performed every time a record arrives at the destination, by using the current aggregated value and the new record. The reason for this limitation is the reduced memory consumption - only the aggregated value for each group us stored in memory, not the detail values. 
This approach works very well if you want to calculate a sum, min or max value or simply want to count your data. This sounds very basic, but these base values will also allow you to perform more calculation (e.g. the average a sum divided by the count.)

Here's an example how the calculation of the sum is done:
Our input data values would be 5, 3 and 2. First, the 5 would arrive. The aggregated value is 0 (default) + 5, so a 5 is stored. When the 3 arrives, the aggregated value is updated to 8. Now the 2 comes in, we store the 10, which is the result of the aggregation. The 10 is then passed to the output of the Aggregation. 

The aggregation also allows you to create your own aggregation function - with the same limitation: you only have access to the current aggregated value and the last record. If you need to perform a calculation on your whole data set, see below at the BlockTransformation. 

### Aggregation methods

The aggregation column currently offers the following aggregation methods:

- Count
- Sum
- Min
- Max
- FirstValue (including nulls)
- LastValue (including nulls)
- FirstNotNullValue
- LastNotNullValue

Together with the option to group (or classify) data, these basic aggregation methods can already be useful in most situations. If these methods are not sufficient for your need, you can write your own aggregation action

#### Buffer 

The `Aggregation` is basically a blocking transformation, but with a lower memory consumption. It will only store aggregated values in memory, not the detail rows itself. The calculation of the aggregated values is updated every time a record arrives at the Aggregation. This is why there is limitation of what kind of calculation can be performed. 

The `Aggregation` has an input buffer and an output buffer. 

### Code snippet

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
    
var source = new DbSource<MyDetailValue>("DetailValues");
var agg = new Aggregation<MyDetailValue, MyAggRow>();
var dest = new MemoryDestination<MyAggRow>();
source.LinkTo<MyAggRow>(agg).LinkTo(dest);
```

## Example aggregation

### Using AggregateColumn attribute

There are two ways to use the Aggregation. The easier way is to make use of the attributes `AggregateColumn` and `GroupColumn` and using the default aggregation functions. Here is an example for an aggregation using only the `AggregateColumn`. If no `GroupColumn` is defined, the calculation is always done on all incoming data records. 

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

### Define AggregationColumns without attributes

If you are working with dynamic columns, you don't have the options to add attributes to these kind of options. In this case, you can pass a list of `AggregateColumn` into the Aggregation, which basically defines the property names of the detail value, the aggregation value as well as the aggregation method.
Of course you can do this also with normal objects. This is alternative to the attribute usage. 

```C#
public static void Main()
{
    var source = new MemorySource();
    dynamic val1 = new ExpandoObject(); val1.DetailValue = 5; source.DataAsList.Add(val1);
    dynamic val2 = new ExpandoObject(); val2.DetailValue = 3; source.DataAsList.Add(val2);
    dynamic val3 = new ExpandoObject(); val3.DetailValue = 2; source.DataAsList.Add(val3);

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

### Using aggregation action

You can achieve the same behavior as above with your own aggregation function. To do so you define an action how the aggregated value is updated when a new values arrives in the property AggregationAction. 

As a sum is easy to implement, your code would look like this: 

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

## Example aggregation with grouping

### Using GroupingColumn

Having the aggregation on all your data records is probably most of the time not what you need. Often you would have to classify your data based on particular properties, and then have aggregation build for each class. This is called grouping and works similar like the GROUP BY clause in sql - you define which properties are used for grouping, and the calculations is done separately for each group. 

Let's define a basic example: 
Our input data is "A":3, "A":7, "B":4 and "B":6. We are interest in the sum of the numbers. If we would do a normal aggregation without the number, the overall result would 20. Now we want to group our data by the letter. Then the result for group "A" would be 10 and for group "B" also 10. 

Code wise this would look like this, when we use the GroupColumn attribute

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

Please note that the GroupColumn is also used as attribute on the aggregated value - it needs to name of the property in the details object on which the grouping is based on. 

### Using dynamic objects

Like the AggregateColumn, if you are using the dynamic ExpandoObject of the default implementation you can also pass a list of GroupColumns to the Aggregation. You need to give a GroupColumn the property name in your input object and the property name in your output object. 

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

### Using grouping function

Of course you can also create your own grouping function. If you want to do this, you actually need two functions: 
- A GroupingFunc that defines an object that is used for grouping. You can define an object here, thought we recommend to use or create a unique string or number that is used for comparison. 
- A StoreKeyAction that describe how the object used for grouping is stored in your aggregation object. 

Here is an example that uses a custom aggregation action as well as custom functions for grouping.

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

## Additional configuration 

### Multiple attributes

The AggregateColumn and GroupColumn can be applied to as many properties as needed. You can use different aggregation function for each AggregateColumn. If there are multiple grouping columns, the combination of all columns is used to create the grouping key (which means that if all columns match they are in the same group).

Here is an example for an object used as output for an aggregation with multiple attributes

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

Instead of using attributes, you can also pass multiple aggregation or group columns to the `AggregateColumns` and `GroupColumns` properties.

### Aggregation condition 

You can define an aggregation condition, which is evaluated for each incoming record before it is aggregated. If the condition return false, the record is ignored. 

```C#
var agg = new Aggregation<MyDetailValue, MyAggRow>();
agg.AggregationCondition = (row, aggregationMethod) => {
    if (row.DetailValue == 3 && aggregationMethod.AggregationMethod == AggregationMethod.Sum)
        return false;
    else
        return true;
};
```

### Support for arrays

The Aggregation won't work with arrays. You could use the `ColumnRename` transformation to convert your array into an ExpandoObject, or the RowTransformation to convert an array into an object. 


