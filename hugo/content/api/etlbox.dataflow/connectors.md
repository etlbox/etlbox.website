---
title: "Namespace ETLBox.DataFlow.Connectors"
description: "Details for Namespace ETLBox.DataFlow.Connectors (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10115
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Connectors">
  <h1 id="ETLBox_DataFlow_Connectors" data-uid="ETLBox.DataFlow.Connectors" class="text-break">Namespace ETLBox.DataFlow.Connectors
  </h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="markdown level0 remarks"></div>
    <h3 id="classes">Classes
  </h3>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/columnconverter">ColumnConverter</a></h4>
      <section></section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/concurrentmemorydestination">ConcurrentMemoryDestination</a></h4>
      <section><p>A destination in memory - it will store all data in a BlockingCollection&lt;T&gt;
The BlockingCollection&lt;T&gt; allows you to access the data concurrently while rows are still written into the target.
If you don't need to work with your data before the flow finishes, you can use
the <a class="xref" href="/api/etlbox.dataflow.connectors/memorydestination">MemoryDestination</a> which uses a regular List&lt;T&gt;.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/concurrentmemorydestination-1">ConcurrentMemoryDestination&lt;TInput&gt;</a></h4>
      <section><p>A destination in memory - it will store all data in a BlockingCollection&lt;T&gt;
The BlockingCollection&lt;T&gt; allows you to access the data concurrently while rows are still written into the target.
If you don't need to work with your data before the flow finishes, you can use
the <a class="xref" href="/api/etlbox.dataflow.connectors/memorydestination">MemoryDestination</a> which uses a regular List&lt;T&gt;.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/couchbasedestination">CouchbaseDestination</a></h4>
      <section><p>A data flow destination for inserting data into a couchbase bucket.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/couchbasedestination-1">CouchbaseDestination&lt;TInput&gt;</a></h4>
      <section><p>A data flow destination for inserting data into a couchbase bucket.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/couchbasesource">CouchbaseSource</a></h4>
      <section><p>A data flow source for Couchbase</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/couchbasesource-1">CouchbaseSource&lt;TOutput&gt;</a></h4>
      <section><p>A data flow source for Couchbase</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination">CsvDestination</a></h4>
      <section><p>A Csv destination defines a csv file where data from the flow is inserted.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1">CsvDestination&lt;TInput&gt;</a></h4>
      <section><p>A Csv destination defines a csv file where data from the flow is inserted.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/csvsource">CsvSource</a></h4>
      <section><p>Reads data from a csv source. While reading the data from the file, data is also asnychronously posted into the targets.
Data is read a as string from the source and dynamically converted into the corresponding data format.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/csvsource-1">CsvSource&lt;TOutput&gt;</a></h4>
      <section><p>Reads data from a csv source. While reading the data from the file, data is also asnychronously posted into the targets.
Data is read a as string from the source and dynamically converted into the corresponding data format.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/custombatchdestination">CustomBatchDestination</a></h4>
      <section><p>Define your own batch destination block.
This block accepts all data from the flow and will create batches of incoming data
which can be processed with the WriteBatchAction.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/custombatchdestination-1">CustomBatchDestination&lt;TInput&gt;</a></h4>
      <section><p>Define your own batch destination block.
This block accepts all data from the flow and will create batches of incoming data
which can be processed with the WriteBatchAction.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/custombatchsource">CustomBatchSource</a></h4>
      <section><p>Define your own source block. This block allows you to read batches of data from your own custom written functions,
which are then send subsequently into your data flow.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/custombatchsource-1">CustomBatchSource&lt;TOutput&gt;</a></h4>
      <section><p>Define your own source block. This block allows you to read batches of data from your own custom written functions,
which are then send subsequently into your data flow.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/customdestination">CustomDestination</a></h4>
      <section><p>Define your own destination block. This block accepts all data from the flow and sends each incoming row to your custom Action, along with a count of processed rows.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/customdestination-1">CustomDestination&lt;TInput&gt;</a></h4>
      <section><p>Define your own destination block. This block accepts all data from the flow and sends each incoming row to your custom Action, along with a count of processed rows.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/customsource">CustomSource</a></h4>
      <section><p>Define your own source block. This block generates data from a your own custom written functions.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/customsource-1">CustomSource&lt;TOutput&gt;</a></h4>
      <section><p>Define your own source block. This block generates data from a your own custom written functions.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/dbdestination">DbDestination</a></h4>
      <section><p>A DbDestination represents a database table where ingoing data from the flow is written into.
Inserts are done in batches (using Bulk insert or an equivalent INSERT statement).</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/dbdestination-1">DbDestination&lt;TInput&gt;</a></h4>
      <section><p>A DbDestination represents a database table where ingoing data from the flow is written into.
Inserts are done in batches (using Bulk insert or an equivalent INSERT statement).</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/dbmerge">DbMerge</a></h4>
      <section></section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/dbmerge-1">DbMerge&lt;TInput&gt;</a></h4>
      <section><p>Inserts, updates and (optionally) deletes data in database target.
Before the Merge is executed, all data from the destination is read into memory.
A delta table is generated that stores information if a records was inserted, updated, deleted or hasn't been touched (existed).</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/dbsource">DbSource</a></h4>
      <section><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1">DbSource&lt;TOutput&gt;</a></h4>
      <section><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/exceldestination">ExcelDestination</a></h4>
      <section><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/exceldestination-1">ExcelDestination&lt;TInput&gt;</a></h4>
      <section><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/excelsource">ExcelSource</a></h4>
      <section><p>Reads data from a excel source. While reading the data from the file, data is also asnychronously posted into the targets.
You can define a sheet name and a range - only the data in the specified sheet and range is read. Otherwise, all data
in all sheets will be processed.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/excelsource-1">ExcelSource&lt;TOutput&gt;</a></h4>
      <section><p>Reads data from a excel source. While reading the data from the file, data is also asnychronously posted into the targets.
You can define a sheet name and a range - only the data in the specified sheet and range is read. Otherwise, all data
in all sheets will be processed.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/jsondestination">JsonDestination</a></h4>
      <section><p>A Json destination defines a json file where data from the flow is inserted.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/jsondestination-1">JsonDestination&lt;TInput&gt;</a></h4>
      <section><p>A Json destination defines a json file where data from the flow is inserted.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/jsonsource">JsonSource</a></h4>
      <section><p>Reads data from a json source. This can be any http resource or a file.
By default, data is pulled via httpclient. Use the ResourceType property to read data from a file.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/jsonsource-1">JsonSource&lt;TOutput&gt;</a></h4>
      <section><p>Reads data from a json source. This can be any http resource or a file.
By default, data is pulled via httpclient. Use the ResourceType property to read data from a file.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/memorydestination">MemoryDestination</a></h4>
      <section><p>A destination in memory - it will store all data in a collection
that you assign to the Data property. By default, a List is used to store th data.
If you need to access the data concurrently while rows are still written into the target,
see the <a class="xref" href="/api/etlbox.dataflow.connectors/concurrentmemorydestination">ConcurrentMemoryDestination</a>.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/memorydestination-1">MemoryDestination&lt;TInput&gt;</a></h4>
      <section><p>A destination in memory - it will store all data in a collection
that you assign to the Data property. By default, a List is used to store th data.
If you need to access the data concurrently while rows are still written into the target,
see the <a class="xref" href="/api/etlbox.dataflow.connectors/concurrentmemorydestination">ConcurrentMemoryDestination</a>.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/memorysource">MemorySource</a></h4>
      <section><p>Define a source based on a generic .NET collection. This could be a List&lt;T&gt; or any other IEnumerable&lt;T&gt;.
By default, an empty List&lt;T&gt; is created which can be filled with data.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/memorysource-1">MemorySource&lt;TOutput&gt;</a></h4>
      <section><p>Define a source based on a generic .NET collection. This could be a List&lt;T&gt; or any other IEnumerable&lt;T&gt;.
By default, an empty List&lt;T&gt; is created which can be filled with data.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/mongodbdestination">MongoDbDestination</a></h4>
      <section><p>A data flow destination for MongoDb.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/mongodbdestination-1">MongoDbDestination&lt;TInput&gt;</a></h4>
      <section><p>A data flow destination for MongoDb.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/mongodbsource">MongoDbSource</a></h4>
      <section><p>A data flow source for MonogDb.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/mongodbsource-1">MongoDbSource&lt;TOutput&gt;</a></h4>
      <section><p>A data flow source for MonogDb.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/redisdestination">RedisDestination</a></h4>
      <section><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/redisdestination-1">RedisDestination&lt;TInput&gt;</a></h4>
      <section><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
</section>
      <h4><a class="xref" href="ETLBox.DataFlow.Connectors.RedisDestination-1.RedisSetParameter.html">RedisDestination&lt;TInput&gt;.RedisSetParameter</a></h4>
      <section><p>Additional redis parameter that are used when setting the key/value pairs in redis.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/redissource">RedisSource</a></h4>
      <section><p>A data flow source for Redis. Redis is a key/value store.<br>
You can define a different scan pattern to describe which keys should be retrieved. (Default pattern
is * which retrieves all key).
By default, the stored values will be deserialized using Newtonsoft.Json and JsonConvert. This
works only if your values contain json - for other values you can define your own serialization function.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/redissource-1">RedisSource&lt;TOutput&gt;</a></h4>
      <section><p>A data flow source for Redis. Redis is a key/value store.<br>
You can define a different scan pattern to describe which keys should be retrieved. (Default pattern
is * which retrieves all key).
By default, the stored values will be deserialized using Newtonsoft.Json and JsonConvert. This
works only if your values contain json - for other values you can define your own serialization function.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/textdestination">TextDestination</a></h4>
      <section><p>Writes data into a text file. Each line in the output is created by calling the
<a class="xref" href="/api/etlbox.dataflow.connectors/textdestination-1#ETLBox_DataFlow_Connectors_TextDestination_1_WriteLineFunc">WriteLineFunc</a> or by invoking ToString() on the object.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/textdestination-1">TextDestination&lt;TInput&gt;</a></h4>
      <section><p>Writes data into a text file. Each line in the output is created by calling the
<a class="xref" href="/api/etlbox.dataflow.connectors/textdestination-1#ETLBox_DataFlow_Connectors_TextDestination_1_WriteLineFunc">WriteLineFunc</a> or by invoking ToString() on the object.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/textsource">TextSource</a></h4>
      <section><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1">TextSource&lt;TOutput&gt;</a></h4>
      <section><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/voiddestination">VoidDestination</a></h4>
      <section><p>This destination serves as a recycle bin for data that is not supposed to go into any other destination.
Every records in the dataflow needs to enter any kind of destination in order to have a dataflow completed.
Use this target for data that you don't want to use in a destination, but you still want your dataflow to complete property.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/voiddestination-1">VoidDestination&lt;TInput&gt;</a></h4>
      <section><p>This destination serves as a recycle bin for data that is not supposed to go into any other destination.
Every records in the dataflow needs to enter any kind of destination in order to have a dataflow completed.
Use this target for data that you don't want to use in a destination, but you still want your dataflow to complete property.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/xmldestination">XmlDestination</a></h4>
      <section><p>A Xml destination defines a xml file where data from the flow is inserted.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/xmldestination-1">XmlDestination&lt;TInput&gt;</a></h4>
      <section><p>A Xml destination defines a xml file where data from the flow is inserted.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/xmlsource">XmlSource</a></h4>
      <section><p>Reads data from a xml source. This can be any http resource or a file.
By default, data is pulled via httpclient. Use the ResourceType property to read data from a file.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.dataflow.connectors/xmlsource-1">XmlSource&lt;TOutput&gt;</a></h4>
      <section><p>Reads data from a xml source. This can be any http resource or a file.
By default, data is pulled via httpclient. Use the ResourceType property to read data from a file.</p>
</section>

{{< /rawhtml >}}
