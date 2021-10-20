---
title: "Namespace ETLBox.DataFlow.Transformations"
description: "Details for Namespace ETLBox.DataFlow.Transformations (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10221
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Transformations">
  <h1 id="ETLBox_DataFlow_Transformations" data-uid="ETLBox.DataFlow.Transformations" class="text-break">Namespace ETLBox.DataFlow.Transformations
  </h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="markdown level0 remarks"></div>
    <h3 id="classes">Classes
  </h3>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/aggregation">Aggregation</a></h4>
      <section><p>Aggregates data by the given aggregation methods.
The aggregate is a partial-blocking transformation - only the aggregation values are stored in separate memory objects.
When all rows have been processed by the aggregation, the aggregated values are written into the output.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/aggregation-2">Aggregation&lt;TInput, TOutput&gt;</a></h4>
      <section><p>Aggregates data by the given aggregation methods.
The aggregate is a partial-blocking transformation - only the aggregation values are stored in separate memory objects.
When all rows have been processed by the aggregation, the aggregated values are written into the output.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation">BatchTransformation</a></h4>
      <section><p>A batch transformation will transform batches of data. The default batch size are 100000 rows.
The batch transformation function allows you to process and modify each batch of data.
You can use the BatchSize property to choose a smaller batch size. The batch size must always be smaller
than the max buffer size. The default batch size are 1000 rows per batch.
The batch transformation is a partial blocking transformation - it will always need at least enough
memory to store a whole batch.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-1">BatchTransformation&lt;TInput&gt;</a></h4>
      <section><p>A batch transformation will transform batches of data. The default batch size are 100000 rows.
The batch transformation function allows you to process and modify each batch of data.
You can use the BatchSize property to choose a smaller batch size. The batch size must always be smaller
than the max buffer size. The default batch size are 1000 rows per batch.
The batch transformation is a partial blocking transformation - it will always need at least enough
memory to store a whole batch.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2">BatchTransformation&lt;TInput, TOutput&gt;</a></h4>
      <section><p>A batch transformation will transform batches of data. The default batch size are 100000 rows.
The batch transformation function allows you to process and modify each batch of data.
You can use the BatchSize property to choose a smaller batch size. The batch size must always be smaller
than the max buffer size. The default batch size are 1000 rows per batch.
The batch transformation is a partial blocking transformation - it will always need at least enough
memory to store a whole batch.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/blocktransformation">BlockTransformation</a></h4>
      <section><p>A block transformation will wait for all data from the flow to be loaded into its buffer.
After all data is in the buffer, the transformation function
is executed for the complete data and the result posted into the targets.
The block transformations allows you to access all data in the flow in one generic collection.
But as this block any processing until all data is buffered, it will also need to store the whole data in memory.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/blocktransformation-1">BlockTransformation&lt;TInput&gt;</a></h4>
      <section><p>A block transformation will wait for all data from the flow to be loaded into its buffer.
After all data is in the buffer, the transformation function
is executed for the complete data and the result posted into the targets.
The block transformations allows you to access all data in the flow in one generic collection.
But as this block any processing until all data is buffered, it will also need to store the whole data in memory.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/blocktransformation-2">BlockTransformation&lt;TInput, TOutput&gt;</a></h4>
      <section><p>A block transformation will wait for all data from the flow to be loaded into its buffer.
After all data is in the buffer, the transformation function
is executed for the complete data and the result posted into the targets.
The block transformations allows you to access all data in the flow in one generic collection.
But as this block any processing until all data is buffered, it will also need to store the whole data in memory.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachedbatchtransformation">CachedBatchTransformation</a></h4>
      <section></section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachedbatchtransformation-1">CachedBatchTransformation&lt;TInput&gt;</a></h4>
      <section><p>A batch transformation will transform batches of data. The default batch size are 100000 rows.
The batch transformation function allows you to process and modify each batch of data.
You can use the BatchSize property to choose a smaller batch size. The batch size must always be smaller
than the max buffer size. The default batch size are 1000 rows per batch.
The batch transformation is a partial blocking transformation - it will always need at least enough
memory to store a whole batch.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachedbatchtransformation-2">CachedBatchTransformation&lt;TInput, TOutput&gt;</a></h4>
      <section><p>A batch transformation will transform batches of data. The default batch size are 100000 rows.
The batch transformation function allows you to process and modify each batch of data.
You can use the BatchSize property to choose a smaller batch size. The batch size must always be smaller
than the max buffer size. The default batch size are 1000 rows per batch.
The batch transformation is a partial blocking transformation - it will always need at least enough
memory to store a whole batch.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachedbatchtransformation-3">CachedBatchTransformation&lt;TInput, TOutput, TCache&gt;</a></h4>
      <section><p>A batch transformation will transform batches of data. The default batch size are 100000 rows.
The batch transformation function allows you to process and modify each batch of data.
You can use the BatchSize property to choose a smaller batch size. The batch size must always be smaller
than the max buffer size. The default batch size are 1000 rows per batch.
The batch transformation is a partial blocking transformation - it will always need at least enough
memory to store a whole batch.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachedrowtransformation">CachedRowTransformation</a></h4>
      <section><p>Implemented by transformations that have one or more inputs of the same type and one or more outputs of the same type</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachedrowtransformation-1">CachedRowTransformation&lt;TInput&gt;</a></h4>
      <section><p>Implemented by transformations that have one or more inputs of the same type and one or more outputs of the same type</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachedrowtransformation-2">CachedRowTransformation&lt;TInput, TOutput&gt;</a></h4>
      <section><p>Implemented by transformations that have one or more inputs of the same type and one or more outputs of the same type</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachedrowtransformation-3">CachedRowTransformation&lt;TInput, TOutput, TCache&gt;</a></h4>
      <section></section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/columnrename">ColumnRename</a></h4>
      <section><p>ColumnRename allows you to rename the column or properties names of your ingoing data.
This transformation works with objects, ExpandoObjects and arrays as input data type.<br>
ColumnRename will always convert the input type into a (dynamic) ExpandoObject.
Provide a column mapping with the old and the new name. The mapping can also be automatically retrieved from
existing ColumnMap attributes. For arrays provide the array index and the new name.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/columnrename-1">ColumnRename&lt;TInput&gt;</a></h4>
      <section><p>ColumnRename allows you to rename the column or properties names of your ingoing data.
This transformation works with objects, ExpandoObjects and arrays as input data type.<br>
ColumnRename will always convert the input type into a (dynamic) ExpandoObject.
Provide a column mapping with the old and the new name. The mapping can also be automatically retrieved from
existing ColumnMap attributes. For arrays provide the array index and the new name.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin">CrossJoin</a></h4>
      <section><p>The CrossJoin allows you to combine every record from one input with every record from the other input.
The input for the first table will be loaded into memory before join starts.
Then every incoming row will be joined with every row of the InMemory-Table using the CrossJoinFunc function.
The InMemory target should always be the target of the smaller amount of data to reduce memory consumption and processing time.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-1">CrossJoin&lt;TInput&gt;</a></h4>
      <section><p>The CrossJoin allows you to combine every record from one input with every record from the other input.
The input for the first table will be loaded into memory before join starts.
Then every incoming row will be joined with every row of the InMemory-Table using the CrossJoinFunc function.
The InMemory target should always be the target of the smaller amount of data to reduce memory consumption and processing time.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3">CrossJoin&lt;TInput1, TInput2, TOutput&gt;</a></h4>
      <section><p>The CrossJoin allows you to combine every record from one input with every record from the other input.
The input for the first table will be loaded into memory before join starts.
Then every incoming row will be joined with every row of the InMemory-Table using the CrossJoinFunc function.
The InMemory target should always be the target of the smaller amount of data to reduce memory consumption and processing time.</p>
</section>
      <h4><a class="xref" href="ETLBox.DataFlow.Transformations.CrossJoin-3.InMemoryDestination-1.html">CrossJoin&lt;TInput1, TInput2, TOutput&gt;.InMemoryDestination&lt;TInput&gt;</a></h4>
      <section></section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/distinct">Distinct</a></h4>
      <section></section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/distinct-1">Distinct&lt;TInput&gt;</a></h4>
      <section></section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/filtertransformation">FilterTransformation</a></h4>
      <section><p>The FilterTransformation allows you to filter out rows that evaluate to a given predicate.
By default the filter transformation will filter out null values.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/filtertransformation-1">FilterTransformation&lt;TInput&gt;</a></h4>
      <section><p>The FilterTransformation allows you to filter out rows that evaluate to a given predicate.
By default the filter transformation will filter out null values.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation">LookupTransformation</a></h4>
      <section><p>The lookup transformation enriches the incoming data with data from the lookup source.
Data from the lookup source is read into memory when the first record arrives.
For each incoming row, the lookup tries to find a matching record in the
loaded source data and uses this record to enrich the ingoing data.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2">LookupTransformation&lt;TInput, TSource&gt;</a></h4>
      <section><p>The lookup transformation enriches the incoming data with data from the lookup source.
Data from the lookup source is read into memory when the first record arrives.
For each incoming row, the lookup tries to find a matching record in the
loaded source data and uses this record to enrich the ingoing data.</p>
</section>
      <h4><a class="xref" href="ETLBox.DataFlow.Transformations.LookupTransformation-2.PartialDbCacheSettings.html">LookupTransformation&lt;TInput, TSource&gt;.PartialDbCacheSettings</a></h4>
      <section><p>Defines properties to configure a partial cache in a Lookup.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/mergejoin">MergeJoin</a></h4>
      <section><p>Will join data from the two inputs into one output. Make sure both inputs are sorted or in the right order.
Each row from the left join target will be merged with a row from the right join target.
If the amount of ingoing data is unevenly distributed, the last rows will be joined with null values.</p>
<p>You can define a match condition that let you only merge matching records. This will change the
match behavior a little bit.
By assuming that the input is sorted, not matching records will be joined with null then. This
can be compared with a left or right join.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/mergejoin-1">MergeJoin&lt;TInput&gt;</a></h4>
      <section><p>Will join data from the two inputs into one output. Make sure both inputs are sorted or in the right order.
Each row from the left join target will be merged with a row from the right join target.
If the amount of ingoing data is unevenly distributed, the last rows will be joined with null values.</p>
<p>You can define a match condition that let you only merge matching records. This will change the
match behavior a little bit.
By assuming that the input is sorted, not matching records will be joined with null then. This
can be compared with a left or right join.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/mergejoin-3">MergeJoin&lt;TInput1, TInput2, TOutput&gt;</a></h4>
      <section><p>Will join data from the two inputs into one output. Make sure both inputs are sorted or in the right order.
Each row from the left join target will be merged with a row from the right join target.
If the amount of ingoing data is unevenly distributed, the last rows will be joined with null values.</p>
<p>You can define a match condition that let you only merge matching records. This will change the
match behavior a little bit.
By assuming that the input is sorted, not matching records will be joined with null then. This
can be compared with a left or right join.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/multicast">Multicast</a></h4>
      <section><p>A multicast broadcast data from the input into two or more outputs.
Every linked component will receive a copy of the rows that the Multicast receives.
There is no limit how many target the Multicast can be linked to.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/multicast-1">Multicast&lt;TInput&gt;</a></h4>
      <section><p>A multicast broadcast data from the input into two or more outputs.
Every linked component will receive a copy of the rows that the Multicast receives.
There is no limit how many target the Multicast can be linked to.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/rowduplication">RowDuplication</a></h4>
      <section><p>Creates one or more duplicates of your incoming row. Use the CanDuplicate
property if you want to duplicate only particular rows.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/rowduplication-1">RowDuplication&lt;TInput&gt;</a></h4>
      <section><p>Creates one or more duplicates of your incoming row. Use the CanDuplicate
property if you want to duplicate only particular rows.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/rowmultiplication">RowMultiplication</a></h4>
      <section><p>This transformation allow you to transform one row of your input data into multiple rows.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/rowmultiplication-1">RowMultiplication&lt;TInput&gt;</a></h4>
      <section><p>This transformation allow you to transform one row of your input data into multiple rows.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/rowmultiplication-2">RowMultiplication&lt;TInput, TOutput&gt;</a></h4>
      <section><p>This transformation allow you to transform one row of your input data into multiple rows.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/rowtransformation">RowTransformation</a></h4>
      <section><p>The RowTransformation will apply the transformation function to each row of data.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/rowtransformation-1">RowTransformation&lt;TInput&gt;</a></h4>
      <section><p>The RowTransformation will apply the transformation function to each row of data.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/rowtransformation-2">RowTransformation&lt;TInput, TOutput&gt;</a></h4>
      <section><p>The RowTransformation will apply the transformation function to each row of data.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/sort">Sort</a></h4>
      <section><p>Sorts the incoming data with by the given comparison function.
This is a blocking transformation - no output will be produced until all input data has arrived in the transformation.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/sort-1">Sort&lt;TInput&gt;</a></h4>
      <section><p>Sorts the incoming data with by the given comparison function.
This is a blocking transformation - no output will be produced until all input data has arrived in the transformation.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/xmlschemavalidation">XmlSchemaValidation</a></h4>
      <section><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/xmlschemavalidation-1">XmlSchemaValidation&lt;TInput&gt;</a></h4>
      <section><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
</section>
    <h3 id="enums">Enums
  </h3>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/aggregationmethod">AggregationMethod</a></h4>
      <section></section>
      <h4><a class="xref" href="/api/etlbox.dataflow.transformations/cachemode">CacheMode</a></h4>
      <section></section>

{{< /rawhtml >}}
