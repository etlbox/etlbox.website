---
title: "Custom batch destination"
description: "Examples and code recipes for the CustomBatchDestination component."
lead: "This article contains example code that shows the usage of the CustomBatchDestination component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
weight: 2102
toc: true
---

The custom batch destination allows you to process batches of your incoming data with any C# method. If you need to process your data row by row, you can use the [CustomDestination](../custom-destination) instead.

## Processing batches of strongly typed objects

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

var source = new MemorySource<MyRow>();
for (int i = 0; i < 10; i++)
    source.DataAsList.Add(new MyRow() { Id = i, Value = "Test" + i });

int batchNumber = 1;
var dataByBatchNumber = new Dictionary<int, List<MyRow>>();
var batchDest = new CustomBatchDestination<MyRow>(100,
    (batch, pg) => {
        dataByBatchNumber.Add(batchNumber, batch.ToList());
        batchNumber++;
    });
batchDest.BatchSize = 3;

source.LinkTo(batchDest);
Network.Execute(source);

foreach (var row in dataByBatchNumber)
    Console.WriteLine("Batchnumber:" + row.Key + " has " + row.Value.Count + " records.");

/* Output
Batchnumber:1 has 3 records.
Batchnumber:2 has 3 records.
Batchnumber:3 has 3 records.
Batchnumber:4 has 1 records.
*/
```
