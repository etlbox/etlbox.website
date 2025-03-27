---
title: "Non-Blocking Transformation"
description: "Provides an overview of non-blocking transformations in ETLBox. Describes their execution model, buffer behavior, and functional characteristics, with a detailed comparison to blocking transformations and a categorized summary of all non-blocking components."
lead: "Non-blocking transformations in ETLBox process data <b>row by row</b> as it becomes available in the input buffer. These transformations are optimized for performance and minimal memory usage, making them well-suited for high-throughput batch processing scenarios."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 510
toc: true
chatgpt-review: true
---

## Transformation Execution Behavior

### Row-by-Row Processing

Most ETLBox transformations operate in a row-by-row fashion. As soon as a row enters a transformation’s input buffer, it is processed and the result is passed to the output. This streaming behavior allows for high-performance data flows and efficient memory usage within batch execution pipelines.

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source[Source] --> buffer

  subgraph Transformation Component
    direction TB
    buffer[Input Buffer - Preserves Row Order] --> processing
    subgraph processing[Row-by-Row Processing]
      direction TB
      process1[Process Row 1]
      process2[Process Row 2]
      process3[Process Row 3]
    end
  end

  process3 --> destination[Destination]


```

## Non-Blocking vs Blocking

Transformations are categorized based on how they handle input data:

- **Non-blocking** transformations process rows immediately as they arrive, requiring minimal memory.

- **Blocking transformations** wait until all data (or a defined batch) has been received before producing output. These transformations are necessary for operations like sorting, aggregation, or complex joins.

This article provides details about non-blocking transformations. For information on blocking transformations, see [Blocking Transformations Overview](../blocking-transformations/overview).

## Input and Output Buffers

Each transformation has at least one input buffer. Buffers temporarily store rows during processing and ensure smooth data flow between components.

If a transformation receives data faster than it can process, the input buffer absorbs the excess. By default, each buffer allows up to **100,000 rows**.

However, if a buffer fills up and data cannot be processed quickly enough, memory consumption can increase significantly. To avoid high memory usage, it is recommended to lower the buffer size if needed:

```csharp
transformation.MaxBufferSize = 50000; // Per component
Settings.MaxBufferSize = 10000; // Global default
```

## Summary of Non-Blocking Transformations

| Transformation            | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| [RowTransformation](../row)         | Applies custom logic to each row                                            |
| [CachedRowTransformation](../cached-row)   | Like RowTransformation, but caches previously processed rows               |
| [ColumnTransformation](../column)      | Renames, reorders, or removes columns; outputs dynamic ExpandoObject        |
| [Distinct](../distinct)                  | Removes duplicate rows                                                      |
| [FilterTransformation](../filter)      | Filters rows based on a predicate                                           |
| [LookupTransformation](../lookup)      | Enriches rows using an in-memory lookup                                    |
| [MergeJoin](../merge-join)                 | Joins two input streams using a match function                             |
| [Multicast](../multicast)                 | Forwards each row to multiple outputs                                       |
| [RowDuplication](../row-duplication)            | Duplicates rows a specified number of times                                 |
| [RowMultiplication](../row-multiplication)         | Splits one row into multiple output rows                                    |
| [RowValidation](../row-validation)             | Validates rows and separates valid/invalid rows                             |
| [XmlSchemaValidation](../xml-schema)       | Validates XML strings against an XSD schema                                 |

## Descriptions

**RowTransformation**: Applies custom C# logic to transform each row. Can also convert input to a different output type.

**CachedRowTransformation**: Similar to RowTransformation, with access to a cache of previously processed rows for comparison or deduplication logic.

**ColumnTransformation**: Changes the structure of the row by renaming, reordering, or removing properties. Always returns a dynamic object.

**FilterTransformation**: Excludes rows that do not satisfy a specified condition.

**Distinct**: Removes duplicate rows by comparing content and allowing only the first occurrence.

**LookupTransformation**: Adds fields to each row by matching values from a preloaded lookup dataset.

**MergeJoin**: Combines rows from two sources using a custom equality function. Works best with pre-sorted inputs.

**Multicast**: Sends identical copies of each row to multiple downstream components.

**RowDuplication**: Creates multiple instances of each row. Can be made conditional using a predicate.

**RowMultiplication**: Converts one input row into multiple output rows using a custom function.

**RowValidation**: Checks rows against defined validation rules and routes valid and invalid rows separately.

**XmlSchemaValidation**: Validates the contents of an XML string field in a row against a given XML Schema Definition (XSD).

