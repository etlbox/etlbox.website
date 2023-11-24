---
title: "IDataFlowStreamDestination"
description: "Details for Interface IDataFlowStreamDestination (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10215
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowStreamDestination">
  <h1 id="ETLBox_IDataFlowStreamDestination" data-uid="ETLBox.IDataFlowStreamDestination" class="text-break">Interface IDataFlowStreamDestination
</h1>
  <div class="markdown level0 summary"><p>Implemented by data flow destinations that allow writing data in a stream</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  <h5 id="ETLBox_IDataFlowStreamDestination_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowStreamDestination : IDataFlowDestination, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowStreamDestination_AzureBlobStorage_" data-uid="ETLBox.IDataFlowStreamDestination.AzureBlobStorage*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_AzureBlobStorage" data-uid="ETLBox.IDataFlowStreamDestination.AzureBlobStorage">AzureBlobStorage</h4>
  <div class="markdown level1 summary"><p>Use this to pass your AzureBlobStorage connection information.
There are different methods to connect with Azure Blob Storage:
Option 1: provide an existing BlockBlobClient
Option 2: create BlockBlobClient based on the Uri and optional credential tokens - the <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_Uri">Uri</a> needs to be the blob url
Option 3: create BlobkBlobClient with provided ConnectionString and ContainerName, the <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_Uri">Uri</a> is then the name of the blob</p>
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
  <a id="ETLBox_IDataFlowStreamDestination_CreateStreamWriter_" data-uid="ETLBox.IDataFlowStreamDestination.CreateStreamWriter*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_CreateStreamWriter" data-uid="ETLBox.IDataFlowStreamDestination.CreateStreamWriter">CreateStreamWriter</h4>
  <div class="markdown level1 summary"><p>By default, stream are created internally based on Uri &amp; ResourceType.
If you already have an existing stream, use this function to returns a new StreamWriter based on this stream.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<string, StreamWriter> CreateStreamWriter { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.streamwriter">StreamWriter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamDestination_Encoding_" data-uid="ETLBox.IDataFlowStreamDestination.Encoding*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_Encoding" data-uid="ETLBox.IDataFlowStreamDestination.Encoding">Encoding</h4>
  <div class="markdown level1 summary"><p>Encoding used to write data into the source file or web request.</p>
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
  <a id="ETLBox_IDataFlowStreamDestination_HttpClient_" data-uid="ETLBox.IDataFlowStreamDestination.HttpClient*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_HttpClient" data-uid="ETLBox.IDataFlowStreamDestination.HttpClient">HttpClient</h4>
  <div class="markdown level1 summary"><p>The System.Net.HttpClient used to connect with the destination (only needed when the <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_ResourceType">ResourceType</a> is Http.</p>
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
  <a id="ETLBox_IDataFlowStreamDestination_HttpContentType_" data-uid="ETLBox.IDataFlowStreamDestination.HttpContentType*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_HttpContentType" data-uid="ETLBox.IDataFlowStreamDestination.HttpContentType">HttpContentType</h4>
  <div class="markdown level1 summary"><p>The content type used when sending the http request content.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string HttpContentType { get; set; }
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
  <a id="ETLBox_IDataFlowStreamDestination_HttpRequestMessage_" data-uid="ETLBox.IDataFlowStreamDestination.HttpRequestMessage*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_HttpRequestMessage" data-uid="ETLBox.IDataFlowStreamDestination.HttpRequestMessage">HttpRequestMessage</h4>
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
  <a id="ETLBox_IDataFlowStreamDestination_HttpResponseMessage_" data-uid="ETLBox.IDataFlowStreamDestination.HttpResponseMessage*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_HttpResponseMessage" data-uid="ETLBox.IDataFlowStreamDestination.HttpResponseMessage">HttpResponseMessage</h4>
  <div class="markdown level1 summary"><p>The System.Net.HttpResponseMessage returned from the current request. The response message is avaiable
after all data rows were sent to the destination.</p>
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
  <a id="ETLBox_IDataFlowStreamDestination_ResourceType_" data-uid="ETLBox.IDataFlowStreamDestination.ResourceType*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_ResourceType" data-uid="ETLBox.IDataFlowStreamDestination.ResourceType">ResourceType</h4>
  <div class="markdown level1 summary"><p>Specifies the resource type.
Use ResourceType.File if you want to write into a file (default)
Use ResourceType.Http to write into a web endpoint.</p>
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
  <a id="ETLBox_IDataFlowStreamDestination_StreamWriter_" data-uid="ETLBox.IDataFlowStreamDestination.StreamWriter*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_StreamWriter" data-uid="ETLBox.IDataFlowStreamDestination.StreamWriter">StreamWriter</h4>
  <div class="markdown level1 summary"><p>The stream writer used for the current request.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    StreamWriter StreamWriter { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.streamwriter">StreamWriter</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamDestination_Uri_" data-uid="ETLBox.IDataFlowStreamDestination.Uri*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_Uri" data-uid="ETLBox.IDataFlowStreamDestination.Uri">Uri</h4>
  <div class="markdown level1 summary"><p>The Url of the webservice (e.g. <a href="https://test.com/foo">https://test.com/foo</a>) or the file name (relative or absolute)</p>
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
