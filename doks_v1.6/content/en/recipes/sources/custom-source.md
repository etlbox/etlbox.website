---
title: "Custom source"
description: "Examples and code recipes for the CustomSource component."
lead: "This article contains example code that shows the usage of the CustomSource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
weight: 2101
toc: true
---

The custom source can be used to create your input data based on any C# method.  If you need to create your data in batches instead row by row, you can use the [CustomBatchSource](../custom-batchsource).

## Creating strongly typed objects

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

List<string> Data = new List<string>()
{
    "Test1", "Test2", "Test3"
};
var source = new CustomSource<MyRow>();
source.ReadFunc = progressCount => {
    return new MyRow() {
        Id = progressCount + 1,
        Value = Data[progressCount]
    };
};
source.ReadingCompleted = progressCount => progressCount >= Data.Count;

var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);

Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id: {row.Id} Value: {row.Value}");

//Output
/*
    Id: 1 Value: Test1
    Id: 2 Value: Test2
    Id: 3 Value: Test3
*/
```

## Creating dynamic data

```C#
List<string> Data = new List<string>()
{
    "Test1", "Test2", "Test3"
};

var source = new CustomSource();
source.ReadFunc = progressCount => {
    dynamic result = new ExpandoObject();
    result.Id = progressCount + 1;
    result.Value = Data[progressCount];
    return result;
};
source.ReadingCompleted = progressCount => progressCount >= Data.Count;

var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id: {row.Id} Value: {row.Value}");

//Output
/*
    Id: 1 Value: Test1
    Id: 2 Value: Test2
    Id: 3 Value: Test3
*/
```

## Creating string array

```C#
List<string[]> Data = new List<string[]>()
{
    new string[] {  "1", "Test1" },
    new string[] {  "2", "Test2" },
    new string[] {  "3", "Test3" },
};
var source = new CustomSource<string[]>();
source.ReadFunc = progressCount => Data[progressCount];
source.ReadingCompleted = progressCount => progressCount >= Data.Count;

var dest = new MemoryDestination<string[]>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id: {row[0]} Value: {row[1]}");

//Output
/*
    Id: 1 Value: Test1
    Id: 2 Value: Test2
    Id: 3 Value: Test3
*/
```