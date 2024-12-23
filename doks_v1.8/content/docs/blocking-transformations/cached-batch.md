---
title: "Caching batches"
description: "Details about the CachedBatchTransformation"
lead: "The CachedBatchTransformation has the same functionality as the BatchTransformation, but offers additionally a cache manager object to access previously processed batches of data."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 810
toc: true
---


### Overview

Additionally to the `BatchTransformation`, the `CacheddBatchTransformation` let you access a cache object which stores the previously processed data.

#### Buffer

The `CachedBatchTransformation` has an input buffer and an output buffer. It will block execution until the buffer size is equal the batch size, or the source component has completed. Additionally to these buffer it will store the cached data in memory.

### Code snippet

```C#
CachedBatchTransformation<MyRow> batchtrans = new CachedBatchTransformation<MyRow>();
batchtrans.MaxCacheSize = 100;
batchtrans.BatchSize = 5;
batchtrans.BatchTransformationFunc =
    (batchdata, cache) =>
    {
        List<MyRow> result = new List<MyRow>();
        foreach (var row in batchdata)
            if (!(cache.Any(cacheRow => cacheRow.Id == row.Id)))
                result.Add(new MyOutputRow(row));
        return result;
    };
```
