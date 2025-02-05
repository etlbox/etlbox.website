---
chatgpt-review: true
title: "Distinct"
description: "Guide to Using the Distinct transformation"
lead: "Efficiently filter out duplicate records with the Distinct transformation."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 520
toc: true
---

## Overview

The `Distinct` transformation in ETLBox efficiently filters out duplicate records in your data flow. It operates by generating a unique hash value for each row based on specified properties. These hash values are stored internally; if a record with an identical hash appears, it is considered a duplicate and excluded. By default, the transformation considers all public properties for hash generation. However, you can specify particular properties using the `DistinctColumn` attribute for targeted filtering.

#### Buffer Mechanics

As a non-blocking transformation, `Distinct` processes each row immediately upon hash generation, contributing to a slightly larger memory footprint as it retains a hash value for each incoming row.

### Distinct Attribute Usage

For strongly-typed objects, the `DistinctColumn` attribute allows you to mark specific properties to identify a record as unique. Here's an example of how to set up a class using this attribute:

```C#
 public class MyRow
 {
     [DistinctColumn]
     public int Id { get; set; }
     [DistinctColumn]
     public string Value { get; set; }

     public string TestId { get; set; }
}
```

**Note**: The use of `DistinctColumn` attributes is optional. Without any specified attributes, all public properties are automatically used for distinctness checks.

## Implementing Distinct

To illustrate the Distinct transformation, consider a scenario with the `MyRow` class where `Id` and `Value` are marked as `DistinctColumn`. Records with identical `Id` and `Value` are identified as duplicates, while differing ones are treated as unique. The `TestId` property is disregarded in this distinction.

Consider the following dataset for transformation:

Id|Value|TestId
--|-----|------
1|A|Test1
2|A|Test2
2|B|Test3
1|A|Test4
2|A|Test5
3|B|Test6

With the Distinct transformation applied, we expect to receive distinct rows:

Id|Value|TestId
--|-----|-----
1|A|Test1
2|A|Test2
2|B|Test3
3|B|Test6

Here's the implementation code:

```C#
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

### Handling Duplicates

Distinct can also redirect duplicates to a separate data flow. This is achieved using the `LinkDuplicatesTo` method. To enhance our previous example, we can direct duplicates to another destination:

The Distinct also allows to send the duplicates into another data flow. This can be easily implemented with the `LinkDuplicatesTo` method. We could enhance the example above to redirect the duplicates into another destination. This method's output can be linked to an entirely new data flow. However, for simplicity in this example, we directly route the duplicates to a `MemoryDestination`.

```C#
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "A", TestId = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "A", TestId = "Test2" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "B", TestId = "Test3" });
source.DataAsList.Add(new MyRow() { Id = 1, Value = "A", TestId = "Test4" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "A", TestId = "Test5" });
source.DataAsList.Add(new MyRow() { Id = 3, Value = "B", TestId = "Test6" });

var trans = new Distinct<MyRow>();
var dest = new MemoryDestination<MyRow>();
var duplicateDest = new MemoryDestination<MyRow>();

source.LinkTo(trans);
trans.LinkTo(dest);
trans.LinkDuplicatesTo(duplicateDest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Value:{row.Value} TestId:{row.TestId}");

foreach (var row in duplicateDest.Data)
    Console.WriteLine($"Duplicate - Id:{row.Id} Value:{row.Value} TestId:{row.TestId}");

//Output
/*
Id:1 Value:A TestId:Test1
Id:2 Value:A TestId:Test2
Id:2 Value:B TestId:Test3
Id:3 Value:B TestId:Test6
Duplicate - Id:1 Value:A TestId:Test4
Duplicate - Id:2 Value:A TestId:Test5
*/
```

#### Predicate Use in LinkDuplicatesTo

The `LinkDuplicatesTo` method functions similarly to all `LinkTo` methods, allowing the output to be connected to various components through predicate logic. For illustration, consider the following example:

```C#
trans.LinkDuplicatesTo(destDuplicates1, row => row.Id == 1);
trans.LinkDuplicatesTo(destDuplicates2, row => row.Id >= 2);
```

### Dynamic Object Support

Like all ETLBox components, Distinct also works with `ExpandoObject` for dynamic data handling. Adapting our previous example to dynamic objects:

```C#
var source = new MemorySource();
source.DataAsList.Add(CreateDynamicRow(distinctCol1: 1, distinctCol2: "A", otherValue: "1"));
source.DataAsList.Add(CreateDynamicRow(distinctCol1: 2, distinctCol2: "B", otherValue: "5"));
source.DataAsList.Add(CreateDynamicRow(distinctCol1: 1, distinctCol2: "C", otherValue: "2"));
source.DataAsList.Add(CreateDynamicRow(distinctCol1: 1, distinctCol2: "A", otherValue: "3"));
source.DataAsList.Add(CreateDynamicRow(distinctCol1: 1, distinctCol2: "C", otherValue: "4"));
source.DataAsList.Add(CreateDynamicRow(distinctCol1: 2, distinctCol2: "B", otherValue: "5"));
source.DataAsList.Add(CreateDynamicRow(distinctCol1: 2, distinctCol2: "B", otherValue: "6"));

var trans = new Distinct();
trans.DistinctColumns = new DistinctColumn[]{
    new DistinctColumn() { DistinctPropertyName = "DistinctCol1"},
    new DistinctColumn() { DistinctPropertyName = "DistinctCol2" }
};
var dest = new MemoryDestination();
var destDuplicates1 = new MemoryDestination();
var destDuplicates2 = new MemoryDestination();

source.LinkTo(trans);
trans.LinkTo(dest);
trans.LinkDuplicatesTo(destDuplicates1, row => (row as dynamic).DistinctCol1 == 1);
trans.LinkDuplicatesTo(destDuplicates2, row => (row as dynamic).DistinctCol1 == 2);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"DistinctCol1:{row.DistinctCol1} DistinctCol2:{row.DistinctCol2} OtherValue:{row.OtherValue}");

foreach (dynamic row in destDuplicates1.Data)
    Console.WriteLine($"Duplicate 1 - DistinctCol1:{row.DistinctCol1} DistinctCol2:{row.DistinctCol2} OtherValue:{row.OtherValue}");

foreach (dynamic row in destDuplicates2.Data)
    Console.WriteLine($"Duplicate 2 - DistinctCol1:{row.DistinctCol1} DistinctCol2:{row.DistinctCol2} OtherValue:{row.OtherValue}");

//Output
/*
DistinctCol1:1 DistinctCol2:A OtherValue:1
DistinctCol1:2 DistinctCol2:B OtherValue:5
DistinctCol1:1 DistinctCol2:C OtherValue:2
Duplicate 1 - DistinctCol1:1 DistinctCol2:A OtherValue:3
Duplicate 1 - DistinctCol1:1 DistinctCol2:C OtherValue:4
Duplicate 2 - DistinctCol1:2 DistinctCol2:B OtherValue:5
Duplicate 2 - DistinctCol1:2 DistinctCol2:B OtherValue:6
*/

public ExpandoObject CreateDynamicRow(int distinctCol1, string distinctCol2, string otherValue) {
    dynamic r = new ExpandoObject();
    r.DistinctCol1 = distinctCol1;
    r.DistinctCol2 = distinctCol2;
    r.OtherValue = otherValue;
    return r;
}
```

#### Manual Assignment of DistinctColumns

You can explicitly set `DistinctColumns` when creating the Distinct transformation:

```C#
var trans = new Distinct();
trans.DistinctColumns = new DistinctColumn[]{
    new DistinctColumn() { DistinctPropertyName = "DistinctCol1"},
    new DistinctColumn() { DistinctPropertyName = "DistinctCol2" }
};
```

{{< alert text="If <code>DistinctColumns</code> are set this way, it overrides any class-defined attributes." >}}

### Custom Distinct Function

For more control, you can define a custom function to create a unique key:

```C#
trans.GetUniqueKeyFunc = (row) => row.Value;
```

For instance, you can match records based on the first letter of a property, ignoring case differences:

```C#
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "A", TestId = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 1, Value = "B", TestId = "Test2" });
source.DataAsList.Add(new MyRow() { Id = 1, Value = "A_dupe", TestId = "Test3" });
source.DataAsList.Add(new MyRow() { Id = 1, Value = "b_dupe", TestId = "Test4" });
source.DataAsList.Add(new MyRow() { Id = 1, Value = "c", TestId = "Test5" });
source.DataAsList.Add(new MyRow() { Id = 1, Value = "a", TestId = "Test6" });

var trans = new Distinct<MyRow>();
trans.GetUniqueKeyFunc = (row) => row.Value.Substring(0, 1).ToLower();
var dest = new MemoryDestination<MyRow>();
var destDuplicates = new MemoryDestination<MyRow>();

source.LinkTo(trans);
trans.LinkTo(dest);
trans.LinkDuplicatesTo(destDuplicates);

Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Value:{row.Value} TestId:{row.TestId}");

foreach (var row in destDuplicates.Data)
    Console.WriteLine($"Duplicate - Id:{row.Id} Value:{row.Value} TestId:{row.TestId}");

//Output
/*
Id:1 Value:A TestId:Test1
Id:1 Value:B TestId:Test2
Id:1 Value:c TestId:Test5
Duplicate - Id:1 Value:A_dupe TestId:Test3
Duplicate - Id:1 Value:b_dupe TestId:Test4
Duplicate - Id:1 Value:a TestId:Test6
*/
```


## Conclusion

The `Distinct` transformation in ETLBox is an essential tool for filtering out duplicate records in data flows. It efficiently identifies duplicates using unique hash values, tailored through the `DistinctColumn` attribute for specific filtering needs. Ideal for handling large datasets and ensuring data uniqueness, this transformation significantly enhances data quality and processing efficiency in ETL workflows.

