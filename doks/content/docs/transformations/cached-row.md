---
title: "Cached Row Transformation"
description: "Explains how to use CachedRowTransformation to process each row with access to a configurable in-memory cache. Covers basic usage, cache configuration, and key-based deduplication using custom cache managers."
lead: "CachedRowTransformation extends RowTransformation by adding an in-memory cache of previously processed rows. This enables row-level logic that depends on historical context, such as deduplication, rolling calculations, or key-based stateful transformations."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 521
toc: true
chatgpt-review: true
---

## Overview

- **Transformation Type**: Non-blocking
- **Execution Mode**: Row-by-row processing with access to a row cache
- **Buffers**: One input buffer
- **Cache Support**: Built-in in-memory cache with customizable key management

Each input row is processed using a user-defined transformation function that also receives a reference to a `CachedData<T>` object. This cache holds the most recent records and allows inspection of previously processed rows.

## Usage

### Basic Example

```csharp
public class MyRow {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

var source = new MemorySource<MyRow>();
for (int i = 0; i < 10; i++)
    source.DataAsList.Add(new MyRow() { Col1 = i, Col2 = $"Test{i}" });

var rowTrans = new CachedRowTransformation<MyRow>();
rowTrans.MaxCacheSize = 3;

rowTrans.TransformationFunc = (row, cache) => {
    // Use cached rows for logic (e.g., cumulative sum)
    return new MyRow() {
        Col1 = cache.List.Sum(r => r.Col1)  // Sum values in the cache
    };
};

var dest = new MemoryDestination<MyRow>();
source.LinkTo(rowTrans).LinkTo(dest);
Network.Execute(source);
```

In this example:
- The last 3 processed rows are stored in the cache.
- For each new row, the transformation calculates the sum of all `Col1` values from the cached rows.

## Configuration Options

### TransformationFunc

The transformation function is mandatory. It processes each input row and receives a second argument—an instance of `CachedData<T>`—which provides access to all currently cached rows.

This allows you to base transformation logic on previously seen rows:

```csharp
rowTrans.TransformationFunc = (row, cache) => {
    // Access the list of previously cached rows
    var total = cache.List.Sum(r => r.Col1);

    // Return a new row or modified input
    return new MyRow {
        Col1 = total,    // Use cache-based calculation
        Col2 = row.Col2
    };
};
```

The `cache.List` gives access to all cached rows. If a key-based cache is configured, `cache.Items` provides indexed access via dictionary lookup.

### MaxCacheSize

Defines the maximum number of rows stored in the cache. Default is `10,000`.

```csharp
var rowTrans = new CachedRowTransformation<MyRow>();
rowTrans.MaxCacheSize = 100;
```

### CacheManager

You can provide a custom cache manager by implementing `ICacheManager<TInput, TCache>`. For example, this enables key-based caching or deduplication.

```csharp
var rowTrans = new CachedRowTransformation<MyRow>();
rowTrans.CacheManager = new MemoryCache<MyRow, MyRow> {
    CacheKeySelector = row => row.Col1,
    InputKeySelector = row => row.Col1
};
```

### FillCacheAfterTransformation

By default, each input row is added to the cache **before** the transformation function is executed. If you want to add it only **after** processing, set:

```csharp
rowTrans.FillCacheAfterTransformation = true;
```

Thank you for the clarification. Here's the **complete and corrected** version of the **deduplication example**, including the key behavior enabled by `CacheKeySelector` and `InputKeySelector`:

## Example: Deduplication Using Key-Based Cache

This example shows how to configure the `CachedRowTransformation` to deduplicate rows based on a specific column using a custom cache manager.

```csharp
public class MyRow {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

var source = new MemorySource<MyRow>();
var row1 = new MyRow() { Col1 = 1, Col2 = "A" };
var row2 = new MyRow() { Col1 = 2, Col2 = "B" };
var row3 = new MyRow() { Col1 = 3, Col2 = "C" };
source.DataAsList.Add(row1);
source.DataAsList.Add(row2);
source.DataAsList.Add(row3);
source.DataAsList.Add(row2); // duplicate
source.DataAsList.Add(row1); // duplicate
source.DataAsList.Add(row3); // duplicate

var rowTrans = new CachedRowTransformation<MyRow>();
rowTrans.MaxCacheSize = 10;
rowTrans.CacheManager = new MemoryCache<MyRow, MyRow> {
    CacheKeySelector = row => row.Col1,   // Key used to store in cache
    InputKeySelector = row => row.Col1    // Key used to check for duplicates
};

rowTrans.TransformationFunc = (row, cache) => {
    // The cache ensures only one row per unique Col1 is kept
    if (cache.Items.ContainsKey(row.Col1)) {
        // Duplicate found, optionally filter or transform
        Console.WriteLine($"Duplicate detected: Col1 = {row.Col1}");
    }
    return row;
};

var dest = new MemoryDestination<MyRow>();
source.LinkTo(rowTrans).LinkTo(dest);
Network.Execute(source);
```

- `CacheKeySelector` defines how each row is stored in the cache.
- `InputKeySelector` defines how incoming rows are compared.
- This ensures only **one row per unique `Col1` value** is retained in the cache at any time.
- You can implement conditional filtering or logging within the transformation function for duplicate handling.


## Integration with ExpandoObject

Like other non-generic transformations, `CachedRowTransformation` defaults to `ExpandoObject` if no type is specified:

```csharp
var trans = new CachedRowTransformation();
trans.TransformationFunc = (row, cache) => {
    dynamic dyn = row;
    dyn.Sum = cache.List.Count;
    return row;
};
```
