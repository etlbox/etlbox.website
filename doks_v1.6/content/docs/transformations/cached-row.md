---
title: "Caching rows"
description: "Details about the CachedRowTransformation"
lead: "The CachedRowTransformation does basically the same as the RowTransformation, but has a cache to access previously processed  data rows."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 700
toc: true
---

## Overview

The `CachedRowTransformation` has the same functionality as the `RowTransformation`, but offers additionally a cache manager object to access previously processed  data rows.

#### Cache Manager

The CachedRowTransformation comes with a default CacheManager which stores already processed rows in memory. 

#### Buffer 

The `CachedRowTransformation` is a non-blocking transformation and has one input buffer. Additionally, the memory consumption will depend on the cache size.

### Code snippet 

The following example will check for an incoming row if a record with the same id was already processed within the previous 10 records. If so, it will return null, other wise the record. A predicate expression the LinkTo method will send null values into a void destination. 

```C#
CachedRowTransformation<MyRow> cachedRowTrans = 
    new CachedRowTransformation<MyRow>();
cachedRowTrans.MaxCacheSize = 10;
rowTrans.TransformationFunc =
    (row, cachedRows) =>
    {
        foreach (var prevRow in cachedRows)
            if (prevRow.Id == row.Id)
                return null;
        return row;
    };
cachedRowTrans.LinkTo(dest, row => row != null, row => row == null);
```

## Example 

The following example will write the content of the cached records into the Console output. The MaxCacheSize of the cache manager is set to 10, so you will never get more than 10 lines of output written here. 

```C#
CachedRowTransformation<MyRow> cachedRowTrans = 
    new CachedRowTransformation<MyRow>();
cachedRowTrans.MaxCacheSize = 10;
rowTrans.TransformationFunc =
    (row, cachedRows) =>
    {
        foreach (var prevRow in cachedRows)
            Console.WriteLine("Already processed row: " + prevRow.Id);
        return row;
    };
```