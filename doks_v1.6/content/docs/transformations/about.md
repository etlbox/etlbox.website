---
title: "About Transformations"
description: "An overview of all transformations in ETLBox"
lead: "This article will give you an overview of all transformations that currently exist in ETLBox. If you already know what kind of transformation you are looking for, you can visit directly the article that goes more into the details."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 610
toc: true
---

## Transformation concepts

Transformations always have at least one input and one output. The purpose of a transformation component is to take the data from its input(s) and post the transformed data to its output(s). Normally this is done on a row-by-row basis for most transformations. As soon as there is any data in the input, the transformation will start and post the result to the output.

### Buffering

Every transformation has at least one input buffer. If the transformation receives more data in its input than it is able to process, the buffer will hold this data until the transformation can continue with the next row. This buffering mechanism improves general throughput. E.g. a data source can read all data as fast as possible, as there will always be an input buffer in the transformation that will accept and buffer the record in memory. Whenever the transformation is ready for the next record there is will always be one record in the buffer waiting for processing.

Sometimes transformations may have more than one input buffer.

#### Restricting buffer size

By default, all buffers of a component don't have a limitation how much rows they allowed to buffer. Though rows are constantly are removed when processing continues, sometimes there can be a bottleneck where a buffer become bigger and bigger because the processing in the flow doesn't continue fast enough. By default, no more than 100000 rows are allowed to be in one buffer. If you want, you can change this limitation by setting the property `MaxBufferSize`. If set to a value greater than 0, e.g. 500, it will only allow up to 500 rows in the buffer(s) of the component.

{{< alert text="You can limit the buffer size not only for transformations, but for all components (including sources and destination). If you want to change the default value, you can set a value in the statich <code>DataFlow</code> class like this: <code>Settings.MaxBufferSize=10000</code>" >}}

### Non-Blocking and blocking transformations

Transformation can be either blocking or non-blocking.

Non-Blocking transformations will start to process data as soon as it finds something in its input buffer. In the moment where it discovers data in there, it will start to process it and send the data to registered output components. Using only non-blocking transformation is the fastest way to get data through the data flow pipeline.

Blocking transformations will stop the data processing for the whole flow - the input buffer will wait until a crucial amount of data has reached the input. This means it will block processing until all components connected to this transformation have send it enough data that it can continue with processing. This will reduce the speed of your flow and consume more memory. The benefit of a blocking transformation is that you will have access to batches of data (or all data) in the memory. Sometimes this is mandatory, e.g. if you want to sort data. The sort will always wait until all data has reached the transformation - only then it is able to sort it and post the sorted data to its output.

But not all blocking transformations will block until all data has arrived in the component like the sort. For example, the `BatchTransformation` will wait until the buffer has reached the defined batched size of the component - then it will process this batch in whole.

## Transformations overview

A quick overview off all ETLBox transformations:

Non-blocking|Blocking|
------------------------|-----------------
CachedRowTransformation|Aggregation
ColumnTransformation|BatchTransformation
Distinct|BlockTransformation
FilterTransformation|CachedBatchTransformation
LookupTransformation|CrossJoin
MergeJoin|Pivot
Multicast|Sort
RowDuplication|WaitTransformation
RowMultiplication|
RowTransformation|
RowValidation|
XmlSchemaValidation|


### Non-Blocking

**CachedRowTransformation**: Work the same way as the row transformations, but stores previously processed row in a cache.

**ColumnTransformation**: Allows you to rename, remove or reorder columns in your data flow - this is mostly relevant when using dynamic objects.

**Distinct**: Eliminates duplicates by returning only the first unique of incoming data and discarding or redirecting duplicates.

**FilterTransformation**: Filters out rows that do not match a predicate expression.

**LookupTransformation**: Allows you to store lookup data in memory and use it for enriching your data in your DataFlow.

**MergeJoin**: Join your incoming data into one. Works best with sorted input. You can either always join two rows from the inputs, or define a match function which determines when the incoming rows are equal and should be joined.

**Multicast**: Broadcast your incoming data into 2 or more targets.

**RowDuplication**: Simple duplicate your input row x times - additionally, you can add your own condition when to duplicate.

**RowMultiplication**: Allow you to create multiple rows based on your incoming rows - based on your own custom C# code.

**RowTransformation**: This transformation let you modifiy each data record with your custom written C# code

**RowValidation**: Validates each rows with a build-in or custom functions, and can redirect invalid rows into a different component.

**XmlSchemaValidation**: Validates a given string that contains xml with a defined Xml schema definition - invalid xml is redirected to
the error output.

### Blocking

**Aggregation**: Aggregate your data on-the-fly based on Grouping and Aggregation functions.

**BatchTransformation**: Execute your custom written C# code on a batch of incoming data.

**BlockTransformation**: Allows you to execute your own custom written C# on your whole set of incoming data.

**CachedBatchTransformation**: Works exactly like the BatchTransformation, but stores previously processed batches in a cache.

**CrossJoin**: Takes two inputs and return one output with each record of both inputs joined with each other.

**Pivot**: Pivots the rows/columns of the input.

**Sort**: Sorts your input data either by your own sort function, or by particular columns.

**WaitTransformation**: Blocks execution until another component (in the same or another Network) is finished.

