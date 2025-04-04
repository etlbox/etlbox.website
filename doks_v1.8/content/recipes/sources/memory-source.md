---
title: "Memory Source"
description: "Examples and code recipes for the MemorySource component."
lead: "This article contains example code that shows the usage of the MemorySource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
weight: 45
toc: true
---

The memory source can be used to send data into your data flow which is stored in any of your C# enumerable.

## Using strongly typed objects

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value{ get; set; }
}

MemorySource<MyRow> source = new MemorySource<MyRow>();
var sourceData = new List<MyRow>()
{
    new MyRow() { Id = 1, Value = "Test1" },
    new MyRow() { Id = 2, Value = "Test2" },
    new MyRow() { Id= 3, Value= "Test3" }
};
source.Data = sourceData;

CustomDestination<MyRow> dest = new CustomDestination<MyRow>();
dest.WriteAction =
    (row, _) => {
        Console.WriteLine("Received data with Id " + row.Id + " and Value " + row.Value);
};

source.LinkTo(dest);
Network.Execute(source);

/* Output
    Received data with Id 1 and Value Test1
    Received data with Id 2 and Value Test2
    Received data with Id 3 and Value Test3
*/
```

## Using dynamic objects

```C#
dynamic item1 = new ExpandoObject();
item1.Value = "Test1";
item1.Id = 1;
dynamic item2 = new ExpandoObject();
item2.Value = "Test2";
item2.Id = 2;
dynamic item3 = new ExpandoObject();
item3.Value = "Test3";
item3.Id = 3;
var sourceData = new ExpandoObject[3];
sourceData[0] = item1;
sourceData[1] = item2;
sourceData[2] = item3;

MemorySource source = new MemorySource();
source.Data = sourceData;

CustomDestination dest = new CustomDestination();
dest.WriteAction =
    (row, _) => {
        var r = row as dynamic;
        Console.WriteLine("Received data with Id " + r.Id + " and Value " + r.Value);
    };

source.LinkTo(dest);
Network.Execute(source);

/* Output
    Received data with Id 1 and Value Test1
    Received data with Id 2 and Value Test2
    Received data with Id 3 and Value Test3
*/
```

## Using array as type

```C#
var sourceData = new List<string[]>()
{
    new string[] { "1", "Test1" },
    new string[] { "2", "Test2" },
    new string[] { "3", "Test3" },
};
MemorySource<string[]> source = new MemorySource<string[]>();
source.Data = sourceData;

CustomDestination<string[]> dest = new CustomDestination<string[]>();
dest.WriteAction =
    (row, _) => {
        Console.WriteLine("Received data with Id " + row[0] + " and Value " + row[1]);
    };

source.LinkTo(dest);
Network.Execute(source);

/* Output
Received data with Id 1 and Value Test1
Received data with Id 2 and Value Test2
Received data with Id 3 and Value Test3
*/
```

## Using method to generate data

With the `yield return` statement, you can write a custom method that produces your data. You can use this method also as input source data for a dataflow.

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value{ get; set; }
}

IEnumerable<MyRow> ProduceData(int upto) {
    for (int i = 1; i <= upto; i++) {
        yield return new MyRow() { Id = i, Value = "Test"+i };
    }
}

MemorySource<MyRow> source = new MemorySource<MyRow>();
source.Data = ProduceData(3);

CustomDestination<MyRow> dest = new CustomDestination<MyRow>();
dest.WriteAction =
    (row, _) => {
        Console.WriteLine("Received data with Id " + row.Id + " and Value " + row.Value);
    };

source.LinkTo(dest);
Network.Execute(source);

/* Output
Received data with Id 1 and Value Test1
Received data with Id 2 and Value Test2
Received data with Id 3 and Value Test3
*/
```
