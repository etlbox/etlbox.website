---
title: "Custom Destination"
description: "Examples and code recipes for the CustomDestination component."
lead: "This article contains example code that shows the usage of the CustomDestination component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
weight: 47
toc: true
---

The custom destination allows you to process your incoming data with any C# method. If you need to process your data in batches, you can use the [CustomBatchDestination](../custom-batchdestination) instead.

## Processing data in strongly typed objects

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}


var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });

List<MyRow> rows = new List<MyRow>();
var dest = new CustomDestination<MyRow>();
dest.WriteAction = (row, progressCount) => rows.Add(row);

source.LinkTo(dest);
Network.Execute(source);

string json = JsonConvert.SerializeObject(rows, Formatting.Indented);

Console.WriteLine(json);

//Output
/*
    [
    {
        "Id": 1,
        "Value": "Test1"
    },
    {
        "Id": 2,
        "Value": "Test2"
    }
]
*/
```

## Processing data in dynamic objects

```C#
var source = new MemorySource();
dynamic r = new ExpandoObject();
r.Id = 1; r.Value = 2;
source.DataAsList.Add(r);

List<ExpandoObject> rows = new List<ExpandoObject>();
var dest = new CustomDestination();
dest.WriteAction = (row, progressCount) => rows.Add(row);

source.LinkTo(dest);
Network.Execute(source);
```

## Processing data in arrays

```C#
var source = new MemorySource<string[]>();
source.DataAsList.Add(new string[] { "1", "Test" });

List<string[]> rows = new List<string[]>();
var dest = new CustomDestination<string[]>();
dest.WriteAction = (row, progressCount) => rows.Add(row);

source.LinkTo(dest);
Network.Execute(source);
```
