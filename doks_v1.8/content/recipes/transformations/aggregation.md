---
title: "Aggregation"
description: "Examples and code recipes for the aggregation"
lead: "This article contains example codes that demonstrate the usage of the Aggregation transformation."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2081
toc: true
---

## AggregateColumn attribute

This example shows how to use the `Aggregate` with the `AggregateColumn` attribute on your object.

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
```

### Aggregation condition

You can use the `AggregationCondition` property to filter our particular rows that you don't want to be part of your aggegration.

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

var source = new MemorySource<MyDetailValue>();
source.DataAsList.Add(new MyDetailValue() { DetailValue = 5 });
source.DataAsList.Add(new MyDetailValue() { DetailValue = 3 });
source.DataAsList.Add(new MyDetailValue() { DetailValue = 2 });
source.DataAsList.Add(new MyDetailValue() { DetailValue = 10 });

var agg = new Aggregation<MyDetailValue, MyAggRow>();
agg.AggregationCondition = (row, aggregationMethod) => {
    if (row.DetailValue == 3 && aggregationMethod.AggregationMethod == AggregationMethod.Sum)
        return false;
    else
        return true;
};

var dest = new MemoryDestination<MyAggRow>();

source.LinkTo<MyAggRow>(agg).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Sum:{row.AggValue}");

//Output
//Sum:17
```

## Attributes on dynamic input

This example shows how to use the `Aggregate` with the dynamic `ExpandoObject` by setting the `AggregateColumns` property.

```C#
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
```

## Custom aggregation function

### Simple calculation

This example shows how to set up your own aggregation function.

```C#
public class MyDetailValue
{
    public int DetailValue { get; set; }
}

public class MyAggRow2
{
    public int AggValue { get; set; }
}

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
```

### Median calculation using custom function

The following example shows how the Median (along with distinct count) could be calculated using the `AggregationAction` of the Aggregation.

```C#
using ETLBox.DataFlow;

var source = new MemorySource<DetailsObject>();
source.DataAsList.Add(new DetailsObject() { DetailValue = 5 });
source.DataAsList.Add(new DetailsObject() { DetailValue = 3 });
source.DataAsList.Add(new DetailsObject() { DetailValue = 2 });
source.DataAsList.Add(new DetailsObject() { DetailValue = 4 });
source.DataAsList.Add(new DetailsObject() { DetailValue = 3 });
source.DataAsList.Add(new DetailsObject() { DetailValue = 6 });

var agg = new Aggregation<DetailsObject, AggregatedObject>();
List<int> numbers = new List<int>();
agg.AggregationAction =
    (detailObject, aggregatedObject) => {
        aggregatedObject.Sum = detailObject.DetailValue + aggregatedObject.Sum;
        aggregatedObject.Count = aggregatedObject.Count + 1;
        if (!numbers.Contains(detailObject.DetailValue))
            aggregatedObject.DistinctCount = aggregatedObject.DistinctCount + 1;
        numbers.Add(detailObject.DetailValue);
        aggregatedObject.Average = (decimal)aggregatedObject.Sum / (decimal)aggregatedObject.Count;
        aggregatedObject.Median = CalculateMedian(numbers);
    };


var dest = new MemoryDestination<AggregatedObject>();

source.LinkTo<AggregatedObject>(agg).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data) {
    Console.WriteLine($"Sum:{row.Sum}");
    Console.WriteLine($"Count:{row.Count}");
    Console.WriteLine($"Distinct Count:{row.DistinctCount}");
    Console.WriteLine($"Average:{row.Average}");
    Console.WriteLine($"Median:{row.Median}");
}

//Output
/*
Sum:23
Count:6
Distinct Count:5
Average:3.8333333333333333333333333333
Median:3.5
*/

static decimal CalculateMedian(List<int> numbers) {
    var ordered = numbers.OrderBy(x => x);
    if (ordered.Count() % 2 == 0)
        return ((decimal)ordered.ElementAt(numbers.Count / 2) +
        (decimal)ordered.ElementAt((numbers.Count / 2) - 1)) / (decimal)2;
    else
        return numbers.OrderBy(x => x).ElementAt(numbers.Count / 2);
}

class DetailsObject {
    public int DetailValue { get; set; }
}

class AggregatedObject {
    public int Sum { get; set; }

    public int Count { get; set; }
    public int DistinctCount { get; set; }
    public decimal Average { get; set; }
    public decimal Median { get; set;}
}
```

## GroupColumn attribute

This example shows how to use the `GroupColumn` attribute.

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
```

## GroupColumn attribute on dynamic input

This example show how to use set up grouping with the dynamic `ExpandoObject`.

```C#
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

```

## Custom grouping function

The code below demonstrate how to set up a your own grouping function.

```C#
public class MyAggRow4
{
    public int AggValue { get; set; }
    public string Group { get; set; }
}

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

```

## Keep values in aggregation with group

The following example was  created to show how to keep a value that is not part of an aggregate or group column.
In this example, we want to calculate the sum of the `Score` property - grouped by `ID_A`. But we also want to keep the `ID_B` for informational purposes.
This example shows how to keep the first encountered value of `ID_B`. If you like to keep the last value instead, you can use the `AggregationMethod.LastValue` instead.
(There are also `FirstNotNullValue` and `LastNotNullValue` as alternatives)

```C#
public class Source
{
    public int ID_A { get; set; }
    public int ID_B { get; set; }
    public int Score { get; set; }
}

public class Result
{
    [GroupColumn("ID_A")]
    public int ID_A { get; set; }
    [AggregateColumn("ID_B", AggregationMethod.FirstValue)]
    public int ID_B { get; set; }
    [AggregateColumn("Score", AggregationMethod.Sum)]
    public int Score { get; set; }
}

var source = new MemorySource<Source>();
source.DataAsList.Add(new Source() { ID_A = 1, ID_B = 1, Score = 10 });
source.DataAsList.Add(new Source() { ID_A = 1, ID_B = 2, Score = 20 });
source.DataAsList.Add(new Source() { ID_A = 1, ID_B = 3, Score = 30 });
source.DataAsList.Add(new Source() { ID_A = 2, ID_B = 4, Score = 20 });
source.DataAsList.Add(new Source() { ID_A = 2, ID_B = 5, Score = 10 });
source.DataAsList.Add(new Source() { ID_A = 2, ID_B = 6, Score = 15 });
source.DataAsList.Add(new Source() { ID_A = 3, ID_B = 7, Score = 10 });

var agg = new Aggregation<Source, Result>();
var dest = new MemoryDestination<Result>();

source.LinkTo<Result>(agg).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine("ID_A:"+ row.ID_A + " - ID_B:" + row.ID_B + " - Score:" + row.Score);

/* Output */
//ID_A:1 ID_B:1 Score:60
//ID_A:2 ID_B:4 Score:45
//ID_A:3 ID_B:7 Score:10
```

### Defining own group key object

This example shows how to create your own group key. It will produce the same result as the previous example, but the main focus is here to demonstrate how grouping can be influence by defining your own key object. This key object is used in the internal dictionary of the Aggregation. Every time the aggregation encounters a new row, it will check if an object with the same key already exists in the internal dictionary - if yes, then the previous aggregated value is retrieved for this group. By overriding the `Equals` and `GetHashCode` methods we define our own matching condition. In this example, a new row matches with a previous row in the dictionary if the `ID_A` of both objects are equal.

```C#
public class Source
{
    public int ID_A { get; set; }
    public int ID_B { get; set; }
    public int Score { get; set; }
}

public class Result
{
    public int ID_A { get; set; }
    public int ID_B { get; set; }
    public int Score { get; set; }
}

public class GroupBy
{
    public override int GetHashCode() => ID_A.GetHashCode();

    public int ID_A { get; set; }
    public int ID_B { get; set; }

    public override bool Equals(object obj) {
        var other = obj as GroupBy;
        if (other == null) return false;
        return ID_A == other.ID_A;
    }
}

public void KeepFirstValueByDefiningOwnGroupingKey() {
    var source = new MemorySource<Source>();
    source.DataAsList.Add(new Source() { ID_A = 1, ID_B = 1, Score = 10 });
    source.DataAsList.Add(new Source() { ID_A = 1, ID_B = 2, Score = 20 });
    source.DataAsList.Add(new Source() { ID_A = 1, ID_B = 3, Score = 30 });
    source.DataAsList.Add(new Source() { ID_A = 2, ID_B = 4, Score = 20 });
    source.DataAsList.Add(new Source() { ID_A = 2, ID_B = 5, Score = 10 });
    source.DataAsList.Add(new Source() { ID_A = 2, ID_B = 6, Score = 15 });
    source.DataAsList.Add(new Source() { ID_A = 3, ID_B = 7, Score = 10 });

    var agg = new Aggregation<Source, Result>();

    agg.AggregationAction =
    (detailValue, aggValue) => {
        //example for Max:
        //aggValue.Score = detailValue.Score > aggValue.Score ? detailValue.Score : aggValue.Score;
        aggValue.Score += detailValue.Score;
        if (aggValue.ID_B == 0)
                aggValue.ID_B = detailValue.ID_B;
    };

    agg.GroupingFunc = detailValue => new GroupBy() { ID_A = detailValue.ID_A, ID_B = detailValue.ID_B };

    agg.StoreKeyAction =
        (groupingObject, aggValue) => {
            var groupBy = (GroupBy)groupingObject;
            aggValue.ID_A = groupBy.ID_A;
            aggValue.ID_B = groupBy.ID_B;
        };

    var dest = new MemoryDestination<Result>();

    source.LinkTo<Result>(agg).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine("ID_A:" + row.ID_A + " - ID_B:" + row.ID_B + " - Score:" + row.Score);

    /* Output */
    //ID_A:1 ID_B:1 Score:60
    //ID_A:2 ID_B:4 Score:45
    //ID_A:3 ID_B:7 Score:10
}
```
