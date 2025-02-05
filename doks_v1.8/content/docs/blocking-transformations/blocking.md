---
title: "Block Transformation"
description: "Details about the BlockTransformation"
lead: "The BlockTransformation is a real blocking transformation. It will block processing until all records arrived, and use up as much memory as needed to store the incoming rows. After this, all rows are written into the output. "
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 610
toc: true
---


## Overview

A BlockTransformation waits until all data is received at the BlockTranformation - then it will be available in a List object and you can do modifications or calculations on your whole data set. Keep in mind that this transformation will need as much memory as the amount of data you loaded.

Input and output type doesn't have to be the same. If you use the BlockTransformation with only one type, output type will be the same as the input type. If you define both types, you will have access to a list of all data of your InputType, and you are expected to return a list of your new data of your output type. The BlockTransformation does not care how many records are going in or out - both sets can be totally different.

#### Buffer

The BlockTransformation has an input and output buffer. You can't restrict the number of rows stored in the input buffer, as it will always store all incoming data. But you can restrict the amount of records in the output buffer using the `MaxBufferSize` property on the component.

### Code snippet

```C#
BlockTransformation<InputType> block = new BlockTransformation<InputType>(
    inputData => {
        inputData.RemoveRange(1, 2);
        inputData.Add(new InputType() { Value = 1 });
        return inputData;
    });
```

## Examples

### Average calculation

This example will calculate the average price per weekday using a `BlockingTransformation`. Have a look at the [Aggregation](/docs/blocking-transformations/aggregation/) if you are in need of calculating values on your aggregated data.

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

public static void Main()
{
    var source = new MemorySource<Order>();
    source.DataAsList.Add(new Order { Price = 10, Day = "Monday" });
    source.DataAsList.Add(new Order { Price = 50, Day = "Monday" });
    source.DataAsList.Add(new Order { Price = 20, Day = "Tuesday" });
    source.DataAsList.Add(new Order { Price = 60, Day = "Tuesday" });
    source.DataAsList.Add(new Order { Price = 10, Day = "Wednesday" });

    var block = new BlockTransformation<Order, AveragePerDay>();
    block.BlockTransformationFunc =
        allOrders =>
        {
            var result = new List<AveragePerDay>();
            foreach (var weekDay in new List<string>() { "Monday", "Tuesday", "Wednesday" })
            {
                var weekdayOrder = allOrders.Where(order => order.Day == weekDay);
                var weekDayAverage = new AveragePerDay()
                {
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
}
```

### Sorting input

Sorting data is a very common case for a blocking transformation. A sort can only run when all data is available in the component. For this purpose, you can either use the [Sort transformation](../sort). Or you can use the `BlockTransformation` to implement your own sorting algorithm. Here is an example, using the dynamic `ExpandoObject` approach.

```C#
public void SortDynamicInput() {
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
}
```

