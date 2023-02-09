---
title: "IDataFlowStreamSource"
description: "Details for Interface IDataFlowStreamSource (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10183
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.IDataFlowStreamSource">
  <h1 id="ETLBox_DataFlow_IDataFlowStreamSource" data-uid="ETLBox.DataFlow.IDataFlowStreamSource" class="text-break">Interface IDataFlowStreamSource
</h1>
  <div class="markdown level0 summary"><p>Implemented by data flow sources that allow reading data from a stream source</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_IDataFlowStreamSource_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowStreamSource
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_AzureBlobStorage_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.AzureBlobStorage*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_AzureBlobStorage" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.AzureBlobStorage">AzureBlobStorage</h4>
  <div class="markdown level1 summary"><p>Use this to pass your AzureBlobStorage connection information.
There are different methods to connect with Azure Blob Storage:
Option 1: provide an existing BlockBlobClient
Option 2: create BlockBlobClient based on the Uri and optional credential tokens - the <a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource#ETLBox_DataFlow_IDataFlowStreamSource_Uri">Uri</a> needs to be the blob url
Option 3: create BlockBlobClient with provided ConnectionString and ContainerName, the <a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource#ETLBox_DataFlow_IDataFlowStreamSource_Uri">Uri</a> is then the name of the blob</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    AzureBlobStorageConfiguration AzureBlobStorage { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox.dataflow/azureblobstorageconfiguration">AzureBlobStorageConfiguration</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_CollectUnparsedData_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.CollectUnparsedData*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_CollectUnparsedData" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.CollectUnparsedData">CollectUnparsedData</h4>
  <div class="markdown level1 summary"><p>Indicates if data not parsed should be stored in the <a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource#ETLBox_DataFlow_IDataFlowStreamSource_UnparsedData">UnparsedData</a> property (also accessable
via the current <a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a> object when using the <a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource#ETLBox_DataFlow_IDataFlowStreamSource_GetNextUri">GetNextUri</a>/<a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource#ETLBox_DataFlow_IDataFlowStreamSource_HasNextUri">HasNextUri</a>
pattern).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool CollectUnparsedData { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_CreateStreamReader_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.CreateStreamReader*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_CreateStreamReader" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.CreateStreamReader">CreateStreamReader</h4>
  <div class="markdown level1 summary"><p>By default, stream are created internally based on Uri &amp; ResourceType.
If you already have an existing stream, use this function to returns a StreamReader based on this stream.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<string, StreamReader> CreateStreamReader { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;<span class="xref">string</span>, <span class="xref">System.IO.StreamReader</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_Encoding_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.Encoding*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_Encoding" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.Encoding">Encoding</h4>
  <div class="markdown level1 summary"><p>Encoding used to read data from the source file or web request.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Encoding Encoding { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Text.Encoding</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_GetNextUri_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.GetNextUri*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_GetNextUri" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.GetNextUri">GetNextUri</h4>
  <div class="markdown level1 summary"><p>This function returns the next url that is used for reading data. It will be called until <a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource#ETLBox_DataFlow_IDataFlowStreamSource_HasNextUri">HasNextUri</a> returns false.
The incoming <a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a> holds information about the current progress and other meta data from the response, like unparsed
json data that contains references to the next page of the response.
This property can be used if you want to read multiple files or if you want to paginate through web responses.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<StreamMetaData, string> GetNextUri { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, <span class="xref">string</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_HasNextUri_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.HasNextUri*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_HasNextUri" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.HasNextUri">HasNextUri</h4>
  <div class="markdown level1 summary"><p>This func determines if another request is started to read additional data from the next uri.
<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a> has information about the current progress and other meta data from the response.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<StreamMetaData, bool> HasNextUri { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, <span class="xref">bool</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_HttpClient_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.HttpClient*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_HttpClient" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.HttpClient">HttpClient</h4>
  <div class="markdown level1 summary"><p>The System.Net.Http.HttpClient uses for the request. Use this client if you want to
add or change the http request data, e.g. you can add your authorization information here.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    HttpClient HttpClient { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Net.Http.HttpClient</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_HttpRequestMessage_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.HttpRequestMessage*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_HttpRequestMessage" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.HttpRequestMessage">HttpRequestMessage</h4>
  <div class="markdown level1 summary"><p>The System.Net.Http.HttpRequestMessage used for the request in the HttpClient. Use this property
to add additional header data type or to change the http method (e.g. for POST requests).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    HttpRequestMessage HttpRequestMessage { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Net.Http.HttpRequestMessage</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_HttpResponseMessage_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.HttpResponseMessage*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_HttpResponseMessage" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.HttpResponseMessage">HttpResponseMessage</h4>
  <div class="markdown level1 summary"><p>The System.Net.HttpResponseMessage returned from the current request.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    HttpResponseMessage HttpResponseMessage { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Net.Http.HttpResponseMessage</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_ResourceType_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.ResourceType*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_ResourceType" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.ResourceType">ResourceType</h4>
  <div class="markdown level1 summary"><p>Specifies the resource type. By default requests are made with HttpClient.
Specify ResourceType.File if you want to read from a json file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ResourceType ResourceType { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox.dataflow/resourcetype">ResourceType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_UnparsedData_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.UnparsedData*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_UnparsedData" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.UnparsedData">UnparsedData</h4>
  <div class="markdown level1 summary"><p>Contains all data from the stream that couldn't be processed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string UnparsedData { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamSource_Uri_" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.Uri*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamSource_Uri" data-uid="ETLBox.DataFlow.IDataFlowStreamSource.Uri">Uri</h4>
  <div class="markdown level1 summary"><p>The Url of the webservice (e.g. <a href="https://test.com/foo">https://test.com/foo</a>) or the file name (relative or absolute).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string Uri { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
