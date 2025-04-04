---
title: "Custom Batch Source"
description: "Examples and code recipes for the CustomBatchSource component."
lead: "This article contains example code that shows the usage of the CustomBatchSource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
weight: 45
toc: true
---

If you need to create your source data not as single rows, but rather in batches of data, you can use the CustomBatchSource. For row by row creation use the [CustomSource](../custom-source) instead.

## Example with strongly typed objects

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
    public int BatchCount { get; set; }
}

var dest = new MemoryDestination<MyRow>();

int batchCount = 1;
var batchSource = new CustomBatchSource<MyRow>();

batchSource.ReadBatchFunc =
    pc => {
        var sourceData = new List<MyRow>();
        for (int i = 1; i <= 3; i++)
            sourceData.Add(new MyRow() {
                Id = i,
                Value = "Test" + i,
                BatchCount = batchCount
            });
        batchCount++;
        return sourceData.ToArray();
    };

batchSource.ReadingCompleted = pc => pc >= 7;

batchSource.LinkTo(dest);
Network.Execute(batchSource);

foreach (var row in dest.Data)
    Console.WriteLine("Batchnumber:" + row.BatchCount + " - Id:"+ row.Id+" - Value:" + row.Value + "");

/* Output
Batchnumber:1 - Id:1 - Value:Test1
Batchnumber:1 - Id:2 - Value:Test2
Batchnumber:1 - Id:3 - Value:Test3
Batchnumber:2 - Id:1 - Value:Test1
Batchnumber:2 - Id:2 - Value:Test2
Batchnumber:2 - Id:3 - Value:Test3
Batchnumber:3 - Id:1 - Value:Test1
Batchnumber:3 - Id:2 - Value:Test2
Batchnumber:3 - Id:3 - Value:Test3
*/
```
