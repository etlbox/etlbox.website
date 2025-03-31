---
title: "Batch Transformation"
description: "The BatchTransformation lets you process and transform your data in fixed-size chunks (batches) instead of row-by-row. This is useful when your logic depends on comparing or combining multiple rows at once."
lead: "The <code>BatchTransformation</code> component is a partially blocking transformation that processes rows in batches rather than one-by-one. Instead of executing logic for each individual row, this transformation collects incoming records into arrays (batches) and applies the <code>BatchTransformationFunc</code> to each batch."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 620
toc: true
chatgpt-review: true
---

## Overview

The `BatchTransformation` is particularly useful when operations are more efficient when run over a group of rows at once (e.g., sorting, bulk calculation, or database interaction). It provides a middle ground between the [`RowTransformation`](../../transformations/row), which processes records individually, and the [`BlockTransformation`](../block), which processes the entire dataset at once.

### Buffering

The `BatchTransformation` has both an input buffer and an output buffer. Internally, it uses a batch buffer to group incoming rows. It only forwards rows after a complete batch is formed, or when the input has finished and a partial batch remains.

- The size of each batch is controlled via the `BatchSize` property (default: 1000).
- `MaxBufferSize` controls the maximum number of records allowed in the input and output buffers.
- Each batch must fully fit into the internal buffer, meaning `BatchSize` must be less than or equal to `MaxBufferSize`.

### Initialization Behavior

An optional `InitAction` can be defined. This is executed once, right before the first batch is processed.

### Null Handling

By default, `null` values returned in the batch output are ignored. To include them, set `SuppressNullValueFilter = true`.


## Code Snippet

Here's a basic example that processes a batch of rows and modifies each item in the batch:

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}

var source = new MemorySource<MyRow>();
for (int i = 1; i <= 7; i++)
    source.DataAsList.Add(new MyRow() { Id = i, Value = "T" });

var dest = new MemoryDestination<MyRow>();

var batch = new BatchTransformation<MyRow, MyRow>();
batch.BatchSize = 3;
batch.BatchTransformationFunc = batchdata => {
    foreach (var row in batchdata)
        row.Value += batch.ProgressCount;
    return batchdata;
};

source.LinkTo(batch).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id}, Value:{row.Value}");

// Output:
// Id:1, Value:T0
// Id:2, Value:T0
// Id:3, Value:T0
// Id:4, Value:T3
// Id:5, Value:T3
// Id:6, Value:T3
// Id:7, Value:T6
```

In this example:
- Rows are processed in groups of 3.
- The `ProgressCount` is used to modify the `Value` property per batch.
- The last batch contains a single row, which is processed after the source completes.

## Transforming to a Different Output Type

You can transform batches to a different output type. The size of the output batch may be different from the input.

```csharp
public class MyInput {
    public int Id { get; set; }
}

public class MyOutput {
    public int Id2 { get; set; }
    public string Value2 { get; set; }
}

var source = new MemorySource<MyInput>();
for (int i = 1; i <= 4; i++)
    source.DataAsList.Add(new MyInput() { Id = i });

var dest = new MemoryDestination<MyOutput>();

var batch = new BatchTransformation<MyInput, MyOutput>();
batch.BatchSize = 2;
batch.BatchTransformationFunc = batchdata =>
    batchdata.Select(row => new MyOutput { Id2 = row.Id, Value2 = "Test" + row.Id }).ToArray();

source.LinkTo(batch);
batch.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id2:{row.Id2}, Value2:{row.Value2}");

// Output:
// Id2:1, Value2:Test1
// Id2:2, Value2:Test2
// Id2:3, Value2:Test3
// Id2:4, Value2:Test4
```


## Working with Dynamic Objects

The `BatchTransformation` also supports dynamic objects such as `ExpandoObject`. This is particularly useful when dealing with loosely structured data, such as records from JSON or CSV sources where the schema is not known at compile time.

When using dynamic rows, you can manipulate the input objects directly within the batch function, modify their properties, or create new rows.

#### Example: Modifying and Extending Dynamic Rows

```csharp
var source = new MemorySource();

dynamic r1 = new ExpandoObject(); r1.Id = 1; r1.Value = "X";
dynamic r2 = new ExpandoObject(); r2.Id = 2; r2.Value = "Y";
dynamic r3 = new ExpandoObject(); r3.Id = 3; r3.Value = "Z";
source.DataAsList.Add(r1);
source.DataAsList.Add(r2);
source.DataAsList.Add(r3);

var batch = new BatchTransformation();
batch.BatchSize = 2;
batch.BatchTransformationFunc = batchData => {
    List<ExpandoObject> result = new List<ExpandoObject>();
    foreach (dynamic row in batchData)
        row.Value = "Test" + row.Id; // Modify existing row
    result.AddRange(batchData);

    dynamic rNew = new ExpandoObject(); // Add additional row
    rNew.Id = 0; rNew.Value = "FILL";
    result.Add(rNew);

    return result.ToArray();
};

var dest = new MemoryDestination();
source.LinkTo(batch).LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id: {row.Id}, Value: {row.Value}");
```

**Output:**
```
Id: 1, Value: Test1
Id: 2, Value: Test2
Id: 0, Value: FILL
Id: 3, Value: Test3
Id: 0, Value: FILL
```

In this example, each batch is processed with a size of 2. The batch function updates the `Value` field and appends a new filler row. This demonstrates how flexible batch processing can be when working with dynamic structures.
