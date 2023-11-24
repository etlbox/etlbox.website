---
title: "IDataFlowStreamSource"
description: "Details for Interface IDataFlowStreamSource (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10217
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowStreamSource">
  <h1 id="ETLBox_IDataFlowStreamSource" data-uid="ETLBox.IDataFlowStreamSource" class="text-break">Interface IDataFlowStreamSource
</h1>
  <div class="markdown level0 summary"><p>Implemented by data flow sources that allow reading data from a stream source</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Execute">IDataFlowExecutableSource.Execute()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Execute_System_Threading_CancellationToken_">IDataFlowExecutableSource.Execute(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Post">IDataFlowExecutableSource.Post()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Post_System_Threading_CancellationToken_">IDataFlowExecutableSource.Post(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_ExecuteAsync">IDataFlowExecutableSource.ExecuteAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_ExecuteAsync_System_Threading_CancellationToken_">IDataFlowExecutableSource.ExecuteAsync(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Limit">IDataFlowExecutableSource.Limit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Completion">IDataFlowComponent.Completion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_OnCompletion">IDataFlowComponent.OnCompletion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Exception">IDataFlowComponent.Exception</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_MaxBufferSize">IDataFlowComponent.MaxBufferSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Predecessors">IDataFlowComponent.Predecessors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_ErrorSource">IDataFlowComponent.ErrorSource</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Successors">IDataFlowComponent.Successors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_IsReadyForProcessing">IDataFlowComponent.IsReadyForProcessing</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_TaskName">ILoggableTask.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_TaskType">ILoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_TaskHash">ILoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_DisableLogging">ILoggableTask.DisableLogging</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDataFlowStreamSource_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowStreamSource : IDataFlowExecutableSource, IDataFlowSource, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowStreamSource_AzureBlobStorage_" data-uid="ETLBox.IDataFlowStreamSource.AzureBlobStorage*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_AzureBlobStorage" data-uid="ETLBox.IDataFlowStreamSource.AzureBlobStorage">AzureBlobStorage</h4>
  <div class="markdown level1 summary"><p>Use this to pass your AzureBlobStorage connection information.
There are different methods to connect with Azure Blob Storage:
Option 1: provide an existing BlockBlobClient
Option 2: create BlockBlobClient based on the Uri and optional credential tokens - the <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_Uri">Uri</a> needs to be the blob url
Option 3: create BlockBlobClient with provided ConnectionString and ContainerName, the <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_Uri">Uri</a> is then the name of the blob</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    AzureBlobStorageConfiguration AzureBlobStorage { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
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
  <a id="ETLBox_IDataFlowStreamSource_CollectUnparsedData_" data-uid="ETLBox.IDataFlowStreamSource.CollectUnparsedData*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_CollectUnparsedData" data-uid="ETLBox.IDataFlowStreamSource.CollectUnparsedData">CollectUnparsedData</h4>
  <div class="markdown level1 summary"><p>Indicates if data not parsed should be stored in the <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_UnparsedData">UnparsedData</a> property (also accessable
via the current <a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a> object when using the <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_GetNextUri">GetNextUri</a>/<a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_HasNextUri">HasNextUri</a>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_CreateStreamReader_" data-uid="ETLBox.IDataFlowStreamSource.CreateStreamReader*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_CreateStreamReader" data-uid="ETLBox.IDataFlowStreamSource.CreateStreamReader">CreateStreamReader</h4>
  <div class="markdown level1 summary"><p>By default, stream are created internally based on Uri &amp; ResourceType.
If you already have an existing stream, use this function to returns a StreamReader based on this stream.
You can create a stream reader for each requested URI.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<string, StreamReader> CreateStreamReader { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.streamreader">StreamReader</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_Encoding_" data-uid="ETLBox.IDataFlowStreamSource.Encoding*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_Encoding" data-uid="ETLBox.IDataFlowStreamSource.Encoding">Encoding</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.text.encoding">Encoding</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_GetNextUri_" data-uid="ETLBox.IDataFlowStreamSource.GetNextUri*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_GetNextUri" data-uid="ETLBox.IDataFlowStreamSource.GetNextUri">GetNextUri</h4>
  <div class="markdown level1 summary"><p>This function returns the next url that is used for reading data. It will be called until <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_HasNextUri">HasNextUri</a> returns false.
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="ETLBox.DataFlow.StreamMetaData.html">StreamMetaData</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_HasNextUri_" data-uid="ETLBox.IDataFlowStreamSource.HasNextUri*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_HasNextUri" data-uid="ETLBox.IDataFlowStreamSource.HasNextUri">HasNextUri</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="ETLBox.DataFlow.StreamMetaData.html">StreamMetaData</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_HttpClient_" data-uid="ETLBox.IDataFlowStreamSource.HttpClient*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_HttpClient" data-uid="ETLBox.IDataFlowStreamSource.HttpClient">HttpClient</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.net.http.httpclient">HttpClient</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_HttpRequestMessage_" data-uid="ETLBox.IDataFlowStreamSource.HttpRequestMessage*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_HttpRequestMessage" data-uid="ETLBox.IDataFlowStreamSource.HttpRequestMessage">HttpRequestMessage</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.net.http.httprequestmessage">HttpRequestMessage</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_HttpResponseMessage_" data-uid="ETLBox.IDataFlowStreamSource.HttpResponseMessage*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_HttpResponseMessage" data-uid="ETLBox.IDataFlowStreamSource.HttpResponseMessage">HttpResponseMessage</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage">HttpResponseMessage</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_RequestUri_" data-uid="ETLBox.IDataFlowStreamSource.RequestUri*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_RequestUri" data-uid="ETLBox.IDataFlowStreamSource.RequestUri">RequestUri</h4>
  <div class="markdown level1 summary"><p>The Uri used for the current request - this will only be different to the <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_Uri">Uri</a>
if you use the <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_GetNextUri">GetNextUri</a> and <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_HasNextUri">HasNextUri</a> functions.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string RequestUri { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_ResourceType_" data-uid="ETLBox.IDataFlowStreamSource.ResourceType*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_ResourceType" data-uid="ETLBox.IDataFlowStreamSource.ResourceType">ResourceType</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox/resourcetype">ResourceType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_SkipRows_" data-uid="ETLBox.IDataFlowStreamSource.SkipRows*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_SkipRows" data-uid="ETLBox.IDataFlowStreamSource.SkipRows">SkipRows</h4>
  <div class="markdown level1 summary"><p>Number of rows to skip before starting reading the header and csv data</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int SkipRows { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_StreamReader_" data-uid="ETLBox.IDataFlowStreamSource.StreamReader*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_StreamReader" data-uid="ETLBox.IDataFlowStreamSource.StreamReader">StreamReader</h4>
  <div class="markdown level1 summary"><p>The stream reader used for the current request.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    StreamReader StreamReader { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.streamreader">StreamReader</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_UnparsedData_" data-uid="ETLBox.IDataFlowStreamSource.UnparsedData*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_UnparsedData" data-uid="ETLBox.IDataFlowStreamSource.UnparsedData">UnparsedData</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamSource_Uri_" data-uid="ETLBox.IDataFlowStreamSource.Uri*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_Uri" data-uid="ETLBox.IDataFlowStreamSource.Uri">Uri</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
