---
chatgpt-review: true
title: "Distinct"
description: "Examples and Code Recipes for the Distinct Component."
lead: "This article contains example code snippets that show how to use the Distinct component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2085
toc: true
chatgpt-reviewed: true
---

## Filtering Duplicates with `DistinctColumn`

This example demonstrates using the `Distinct` component to eliminate duplicate records in a data flow. The `DistinctColumn` attribute specifies which properties to use for identifying duplicates.

```C#
public class MyRow
{
    [DistinctColumn]
    public int Id { get; set; }
    [DistinctColumn]
    public string Value { get; set; }

    public string TestId { get; set; }
}

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

## Redirecting Duplicates to an Alternate Flow

This example illustrates how to use the `LinkDuplicatesTo` method to send duplicates to a different data flow.

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

## Using Distinct with Dynamic Objects

Like all ETLBox data flow components, the Distinct component also facilitates the use of dynamic `ExpandoObject`.

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

## Custom Unique Key Function

Use the `GetUniqueKeyFunc` property to define a custom logic for creating a unique key for each row.

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