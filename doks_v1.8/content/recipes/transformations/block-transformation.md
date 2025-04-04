---
title: "Block Transformation"
description: "Examples and code recipes for the BlockTransformation"
lead: "This article contains example code that shows the usage of the BlockTransformation."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2082
toc: true
---

## Average calculation

This example uses the BlockTransformation to collect all orders from the source and then to calculate the average for each weekday.

```C#
public class Order
{
    public int Price { get; set; }
    public string Day { get; set; }
}

public class AveragePerDay
{
    public int AveragePrice { get; set; }
    public int TotalOrders { get; set; }
    public string Day { get; set; }
}

var source = new MemorySource<Order>();
source.DataAsList.Add(new Order { Price = 10, Day = "Monday" });
source.DataAsList.Add(new Order { Price = 50, Day = "Monday" });
source.DataAsList.Add(new Order { Price = 20, Day = "Tuesday" });
source.DataAsList.Add(new Order { Price = 60, Day = "Tuesday" });
source.DataAsList.Add(new Order { Price = 10, Day = "Wednesday" });

var block = new BlockTransformation<Order, AveragePerDay>();
block.BlockTransformationFunc =
    allOrders => {
        var result = new List<AveragePerDay>();
        foreach (var weekDay in new List<string>() { "Monday", "Tuesday", "Wednesday" }) {
            var weekdayOrder = allOrders.Where(order => order.Day == weekDay);
            var weekDayAverage = new AveragePerDay() {
                Day = weekDay,
                TotalOrders = weekdayOrder.Count(),
                AveragePrice = weekdayOrder
                                .Sum(o => o.Price)
                                /
                                weekdayOrder.Count()
            };

            result.Add(weekDayAverage);
        }
        return result.ToArray();
    };

var dest = new MemoryDestination<AveragePerDay>();

source.LinkTo<AveragePerDay>(block).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Day:{row.Day} Totals:{row.TotalOrders} Average:{row.AveragePrice}");

//Output
//Day:Monday Totals:2 Average: 30
//Day:Tuesday Totals:2 Average: 40
//Day:Wednesday Totals:1 Average: 10
```

## Sorting input data

This example will wait for all input data to arrive, sort it and the return the sorted data into the flow. This example uses the dynamic ExpandoObject approach.

```C#
var source = new MemorySource();
dynamic row1 = new ExpandoObject(); row1.Id = 1; row1.Value = "A"; source.DataAsList.Add(row1);
dynamic row2 = new ExpandoObject(); row2.Id = 3; row2.Value = "C"; source.DataAsList.Add(row2);
dynamic row3 = new ExpandoObject(); row3.Id = 4; row3.Value = "D"; source.DataAsList.Add(row3);
dynamic row4 = new ExpandoObject(); row4.Id = 2; row4.Value = "B"; source.DataAsList.Add(row4);

var block = new BlockTransformation();
block.BlockTransformationFunc =
    allRows => allRows.OrderBy(el => (el as dynamic).Id).ToArray();

var dest = new MemoryDestination();

source.LinkTo(block).LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

//Output
//Id:1 Value:A
//Id:2 Value:B
//Id:3 Value:C
//Id:4 Value:D
```

## Filtering out empty columns

The blocking transformation will wait for all records to arrive, and then will remove all columns that contain no data. A cleaned data set is returned without these columns.

```C#
var source = new MemorySource();
dynamic row1 = new ExpandoObject();
row1.Id = 1; row1.Value1 = "A"; row1.Value2 = null; row1.Value3 = null;
source.DataAsList.Add(row1);
dynamic row2 = new ExpandoObject();
row2.Id = 2; row2.Value1 = "B"; row2.Value2 = null; row2.Value3 = "X";
source.DataAsList.Add(row2);
dynamic row3 = new ExpandoObject();
row3.Id = 3; row3.Value1 = "C"; row3.Value2 = null; row3.Value3 = null;
source.DataAsList.Add(row3);


var block = new BlockTransformation();
block.BlockTransformationFunc =
    allRows => {
        if (allRows.Length == 0) return allRows;
        var dictArray = allRows.Cast<IDictionary<string, object>>();
        var firstCol = dictArray.First();
        List<string> emptyColumnNames = new List<string>();
        foreach (var col in firstCol) {
            if (dictArray.All(r => r[col.Key] == null))
                emptyColumnNames.Add(col.Key);
        }
        var cleanedRows = new List<ExpandoObject>();
        foreach (var row in dictArray) {
            IDictionary<string, object> newEntry = new ExpandoObject();
            foreach (var col in row) {
                if (!emptyColumnNames.Contains(col.Key))
                    newEntry.Add(col.Key, col.Value);
            }
            cleanedRows.Add(newEntry as ExpandoObject);
        }
        return cleanedRows.ToArray();
    };

var dest = new MemoryDestination();

source.LinkTo(block).LinkTo(dest);
Network.Execute(source);

Console.WriteLine("The following column were found:");
foreach (var firstCol in dest.Data.First())
    Console.WriteLine(firstCol.Key);
Console.WriteLine("Records arrived:");
foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Value1:{row.Value1} Value3:{row.Value3}");

//Output
/*
The following column were found:
Id
Value1
Value3
Records arrived:
Id:1 Value1:A Value3:
Id:2 Value1:B Value3:X
Id:3 Value1:C Value3:
*/
```
