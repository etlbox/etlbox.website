---
title: "Block Transformation"
description: "BlockTransformation is a blocking component that collects all input rows before executing a user-defined function on the entire dataset. The function receives the complete list of input records and can return any number of output records, even with a different data type."
lead: "The <code>BlockTransformation</code> component collects <b>all incoming rows</b> before processing begins. Once the source component has completed, it passes the <b>entire dataset as a list</b> to a transformation function. This enables logic that depends on access to the full dataset—such as sorting, reshaping, or batch calculations that require global visibility."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 630
toc: true
chatgpt-review: true
---

## Overview

It is ideal for scenarios where access to the complete input is required before transformation logic can be applied.

This transformation could be used in scenarios where:
- You need to sort or filter the full dataset.
- The output depends on data relationships across multiple rows.
- The logic can't be implemented row-by-row or in fixed-size batches.

However, because it buffers the complete input in memory, it is **not suitable for very large datasets** unless sufficient memory is available.

### Buffering

The `BlockTransformation` is a **blocking transformation** with an input and output buffer. It stores all incoming records internally before any transformation is applied. The output buffer size can be controlled via the `MaxBufferSize` property, but the input buffer size is **not configurable**, as it must contain the full dataset to execute the block function.

This component always waits for the input to complete before invoking its logic.

### Usage Scenarios

- Performing full-table calculations (e.g. averages, ranking).
- Sorting the full dataset by one or more fields.
- Converting a full list into a new shape or structure.
- Filtering rows based on global characteristics.

### Code Snippet

```csharp
BlockTransformation<InputType> block = new BlockTransformation<InputType>(
    inputData => {
        inputData.RemoveRange(1, 2);
        inputData.Add(new InputType() { Value = 1 });
        return inputData;
    });
```

## Examples

### Average Calculation by Group

This example shows how to calculate the average price and order count per weekday.

```csharp
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
                    AveragePrice = weekdayOrder.Sum(o => o.Price) / weekdayOrder.Count()
                };
                result.Add(weekDayAverage);
            }
            return result;
        };

    var dest = new MemoryDestination<AveragePerDay>();
    source.LinkTo(block).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Day:{row.Day} Totals:{row.TotalOrders} Average:{row.AveragePrice}");

    // Output:
    // Day:Monday Totals:2 Average:30
    // Day:Tuesday Totals:2 Average:40
    // Day:Wednesday Totals:1 Average:10
}
```

### Sorting Dynamic Input

This example demonstrates how to sort an unsorted list of dynamic objects.

```csharp
public static void SortDynamicInput()
{
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

    // Output:
    // Id:1 Value:A
    // Id:2 Value:B
    // Id:3 Value:C
    // Id:4 Value:D
}
```

This approach is useful when your rows are dynamically constructed (e.g., from JSON or flexible input schemas), and you still need to apply operations that depend on the full dataset.

## Remarks

- `BlockTransformationFunc` is mandatory and must return an `IEnumerable<TOutput>`.
- If input and output types are the same, use `BlockTransformation<T>`.
- Avoid this transformation with very large inputs unless you are confident the dataset fits into memory.
- For logic that can work on each row or on smaller chunks, consider using [`RowTransformation`](../row) or [`BatchTransformation`](../batch).

