---
title: "IDataFlowStreamDestination"
description: "Details for Interface IDataFlowStreamDestination (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10173
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination">
  <h1 id="ETLBox_DataFlow_IDataFlowStreamDestination" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination" class="text-break">Interface IDataFlowStreamDestination
  </h1>
  <div class="markdown level0 summary"><p>Implemented by data flow destinations that allow writing data in a stream</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_IDataFlowStreamDestination_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowStreamDestination
```

{{< rawhtml >}}
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_AzureBlobStorage_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.AzureBlobStorage*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_AzureBlobStorage" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.AzureBlobStorage">AzureBlobStorage</h4>
  <div class="markdown level1 summary"><p>Use this to pass your AzureBlobStorage connection information.
There are different methods to connect with Azure Blob Storage:
Option 1: provide an existing BlockBlobClient
Option 2: create BlockBlobClient based on the Uri and optional credential tokens - the <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_Uri">Uri</a> needs to be the blob url
Option 3: create BlobkBlobClient with provided ConnectionString and ContainerName, the <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_Uri">Uri</a> is then the name of the blob</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_CreateStreamWriter_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.CreateStreamWriter*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_CreateStreamWriter" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.CreateStreamWriter">CreateStreamWriter</h4>
  <div class="markdown level1 summary"><p>By default, stream are created internally based on Uri &amp; ResourceType.
If you already have an existing stream, use this function to returns a new StreamWriter based on this stream.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<string, StreamWriter> CreateStreamWriter { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;<span class="xref">System.String</span>, <span class="xref">System.IO.StreamWriter</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_Encoding_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.Encoding*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_Encoding" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.Encoding">Encoding</h4>
  <div class="markdown level1 summary"><p>Encoding used to write data into the source file or web request.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_HttpClient_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.HttpClient*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_HttpClient" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.HttpClient">HttpClient</h4>
  <div class="markdown level1 summary"><p>The System.Net.HttpClient used to connect with the destination (only needed when the <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_ResourceType">ResourceType</a> is Http.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_HttpRequestMessage_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.HttpRequestMessage*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_HttpRequestMessage" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.HttpRequestMessage">HttpRequestMessage</h4>
  <div class="markdown level1 summary"><p>The System.Net.Http.HttpRequestMessage use for the request from the HttpClient. You can use the
to add additional meta data or to change the request type (default is POST).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_ResourceType_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.ResourceType*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_ResourceType" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.ResourceType">ResourceType</h4>
  <div class="markdown level1 summary"><p>Specifies the resource type.
Use ResourceType.File if you want to write into a file (default)
Use ResourceType.Http to write into a web endpoint.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_Uri_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.Uri*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_Uri" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination.Uri">Uri</h4>
  <div class="markdown level1 summary"><p>The Url of the webservice (e.g. <a href="https://test.com/foo">https://test.com/foo</a>) or the file name (relative or absolute)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
