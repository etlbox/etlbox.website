---
title: "Cached Batch Transformation"
description: "The CachedBatchTransformation is a blocking transformation that processes incoming rows in configurable batches while maintaining a memory-based cache of previously processed rows. "
lead: "The <code>CachedBatchTransformation</code> is a specialized transformation that allows batch-wise processing of rows with access to previously seen records via a memory cache. It extends the <code>BatchTransformation</code> and adds the ability to reference earlier input rows, which is especially useful for identifying duplicates, detecting patterns, or comparing the current batch with past entries."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 640
toc: true
chatgpt-review: true
---

## Overview

Use the `CachedBatchTransformation` when your batch-processing logic requires access to previously seen records. It extends the capabilities of BatchTransformation by introducing an in-memory cache, allowing you to perform operations like deduplication, temporal checks, or incremental comparisons efficiently—without loading the entire dataset. The component processes data in batches and supports cache size limits and custom matching strategies.

### Buffering

`CachedBatchTransformation` is a **blocking transformation**. It has:

- An **input buffer**, storing incoming rows until a batch is full.
- An **output buffer**, storing processed output rows before sending them downstream.
- An **internal cache**, holding previously seen rows up to a configurable size.

It starts processing only after either:
- The number of input rows reaches the specified `BatchSize`, or
- The upstream source completes execution.

The `MaxCacheSize` property controls how many previously processed rows are retained in memory. The cache is updated and evicted automatically as new rows are processed.

## Example: Avoiding Duplicate Rows Using a Cache

Here’s an example that filters out previously processed records based on the `Id` property:

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}

var source = new MemorySource<MyRow>();
(source.DataAsList as List<MyRow>).AddRange(new[] {
    new MyRow() { Id = 1, Value = "A" },
    new MyRow() { Id = 2, Value = "B" },
    new MyRow() { Id = 1, Value = "A" }, // Duplicate
    new MyRow() { Id = 3, Value = "C" }
});

var batch = new CachedBatchTransformation<MyRow>();
batch.BatchSize = 2;
batch.MaxCacheSize = 10;
batch.BatchTransformationFunc = (rows, cache) => {
    return rows
        .Where(row => !cache.List.Any(cached => cached.Id == row.Id))
        .ToArray();
};

var dest = new MemoryDestination<MyRow>();

source.LinkTo(batch).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"{row.Id} - {row.Value}");

// Output:
// 1 - A
// 2 - B
// 3 - C
```

### Cache Behavior

You can explicitly configure how rows are identified in the cache by setting a `CacheManager`. The default is a `MemoryCache` with a key selector that uses the object reference.

To compare rows by property (e.g., `Id`), configure the `CacheManager`:

```csharp
batch.CacheManager = new MemoryCache<MyRow, MyRow>();
batch.CacheManager.CacheKeySelector = row => row.Id;
batch.CacheManager.InputKeySelector = row => row.Id;
```

This ensures cache lookups are based on the `Id` value rather than object identity.

## Dynamic Object Support

`CachedBatchTransformation` also supports dynamic rows such as `ExpandoObject`. This is especially useful when processing data from loosely structured sources like JSON, CSV, or APIs.

Example:

```csharp
var source = new MemorySource();
dynamic row1 = new ExpandoObject(); row1.Id = 1; row1.Value = "X";
dynamic row2 = new ExpandoObject(); row2.Id = 2; row2.Value = "Y";
dynamic row3 = new ExpandoObject(); row3.Id = 1; row3.Value = "X"; // Duplicate
source.DataAsList.Add(row1);
source.DataAsList.Add(row2);
source.DataAsList.Add(row3);

var batch = new CachedBatchTransformation();
batch.BatchSize = 2;
batch.MaxCacheSize = 5;
batch.BatchTransformationFunc = (rows, cache) =>
{
    return rows
        .Where(r => !cache.List.Any(c => ((dynamic)c).Id == ((dynamic)r).Id))
        .ToArray();
};

var dest = new MemoryDestination();
source.LinkTo(batch).LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"{row.Id} - {row.Value}");

// Output:
// 1 - X
// 2 - Y
```

The cache handles `ExpandoObject` instances like any other class, provided you use appropriate dynamic access in your logic.
