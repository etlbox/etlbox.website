---
title: "Batch transformation"
description: "Details about the BatchTransformation"
lead: "The BatchTransformation let you transform batches of ingoing data."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 810
toc: true
---

## Overview

The normal `RowTransformation` will execute custom code for every processed row. Sometimes it can be beneficial not only to process every row, but batches of incoming. For this purpose you can use the BatchTransformation.

{{< alert text="If you want to modify <b>all</b> of your input data at once, take a look at the <code>BlockTransformation</code>" >}}

#### Buffer

The `BatchTransformation` has an input buffer and an output buffer. It will block execution until the buffer size is equal the batch size, or the source component has completed.

### Code snippet

```C#
BatchTransformation<MyInputRow,MyOutputRow> batchtrans =
    new BatchTransformation<MyInputRow,MyOutputRow>();
batchtrans.BatchSize = 3;
batchtrans.BatchTransformationFunc =
    batchdata =>
    {
        List<MyOutputRow> result = new List<MyOutputRow>();
        foreach (var row in batchdata)
            result.Add(new MyOutputRow(row));
        return result;
    };
```


