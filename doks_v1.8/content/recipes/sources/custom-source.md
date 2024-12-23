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

## Sending Stream Data into Pipeline

```C#
var source = new CustomSource();
Console.WriteLine($"Data in input file:");
Console.WriteLine(File.ReadAllText("res/examples/InputData.csv"));

StreamReader stream = null;
source.OnInitialization = () => {
    stream = new StreamReader("res/examples/InputData.csv");
};
source.ReadFunc = _ => {
    var line = stream.ReadLine();
    var data = line.Split(',');
    dynamic result = new ExpandoObject();
    result.Id = data[0];
    result.Value = data[1] + data[2];
    return result;
};
source.ReadingCompleted = _ => stream.EndOfStream;

var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);

Console.WriteLine("");
Console.WriteLine($"Data processed by ETL pipeline:");
foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id: {row.Id} Value: {row.Value}");

//Output
/*
Data in input file:
Id,Value1,Value2
1,Test1,A
2,Test2,B
3,Test3,C
4,Test4,D

Data processed by ETL pipeline:
Id: Id Value: Value1Value2
Id: 1 Value: Test1A
Id: 2 Value: Test2B
Id: 3 Value: Test3C
Id: 4 Value: Test4D
*/
```
