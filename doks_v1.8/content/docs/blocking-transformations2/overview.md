---
title: "Blocking Transformations"
description: "This article provides an overview of blocking transformations in ETLBox. Blocking transformations differ from non-blocking ones by buffering data internally before processing begins. Depending on the transformation, buffering can range from accumulating all records to handling fixed-size batches or maintaining partial aggregation state."
lead: "Blocking transformations accumulate input before producing output. They are essential for operations that require access to full datasets or grouped subsets, such as sorting, aggregation, or batching."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 600
toc: true
chatgpt-review: true
---

## Batch-Oriented and Buffered Processing

Blocking transformations accumulate input before generating output. Unlike non-blocking transformations, which stream rows immediately, blocking components require a certain amount of buffered data depending on their function:

- Some wait for **all** rows (e.g., Sort).
- Some process **batches** of rows (e.g., BatchTransformation).
- Some only buffer **partial aggregates** (e.g., Aggregation).

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source[Source] --> inputBuffer[Input Buffer]

  subgraph Blocking Transformation
    direction TB
    inputBuffer --> internalBuffer[Internal Buffer - Collecting All or Batch of Data]
    internalBuffer --> processing[Processing / Output Buffer]
  end

  processing --> destination[Destination]
```

## Buffering

All blocking transformations include an **input buffer** and an **internal buffer** to temporarily hold data. The internal buffer size and structure depend on the transformation:

- A **Sort** may hold all rows in memory.
- An **Aggregation** may store only grouped values.
- A **BatchTransformation** manages rows in fixed-size batches.

Some transformations may also include an **output buffer**, though this varies by component.

The `MaxBufferSize` setting allows configuration of buffer limits, but its effect depends on the transformation:

- May be ignored (e.g., Sort).
- May affect only the output buffer (e.g., Aggregation).
- May apply to all buffers (e.g., BatchTransformation).

```csharp
transformation.MaxBufferSize = 50000; // Component-specific
Settings.MaxBufferSize = 10000;       // Global default
```

## Non-Blocking vs Blocking

ETLBox distinguishes between:

- **Non-blocking transformations**: Stream and process rows immediately.
- **Blocking transformations**: Accumulate data before producing output.

Blocking is required for transformations like sorting, aggregating, or merging across full datasets.

See also: [Non-Blocking Transformations Overview](../../transformations/overview)

## Summary of Blocking Transformations

| Transformation                      | Description                                                             |
|-------------------------------------|-------------------------------------------------------------------------|
| [Aggregation](../aggregation)       | Groups and aggregates rows based on keys                               |
| [BatchTransformation](../batch)     | Processes rows in complete batches                                      |
| [CachedBatchTransformation](../cached-batch) | Batch transform with access to cached data                         |
| [CrossJoin](../cross-join)          | Performs a Cartesian join between two input streams                     |
| [Pivot](../pivot)                   | Transforms row-level data into column-oriented output                   |
| [Sort](../sort)                     | Sorts all rows using a comparison function                              |
| [WaitTransformation](../wait)       | Holds execution until one or more sources complete                      |

## Descriptions

**Aggregation**: Groups rows by a key and aggregates their values. Buffers only aggregation state, using minimal memory.

**BatchTransformation**: Collects input rows into batches and processes them as a group.

**CachedBatchTransformation**: Extends batch processing by using cached data for enrichment or merging logic.

**CrossJoin**: Joins every row from one input with every row from the other. Buffers one side of the join entirely.

**Pivot**: Converts grouped rows into columns. Requires buffering of grouped input.

**Sort**: Buffers all input rows and produces sorted output when all data is received.

**WaitTransformation**: Pauses execution until one or more input components complete. Useful for orchestration.
