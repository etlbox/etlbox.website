---
title: "AzureBlobStorageConfiguration"
description: "Details for Class AzureBlobStorageConfiguration (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10099
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration">
  <h1 id="ETLBox_DataFlow_AzureBlobStorageConfiguration" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration" class="text-break">Class AzureBlobStorageConfiguration
</h1>
  <div class="markdown level0 summary"><p>Contains configuration details to connect with an Azure Blob Storage</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">AzureBlobStorageConfiguration</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)">object.Equals(object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)">object.Equals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode">object.GetHashCode()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gettype">object.GetType()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class AzureBlobStorageConfiguration
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration__ctor_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration__ctor" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.#ctor">AzureBlobStorageConfiguration()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AzureBlobStorageConfiguration()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration__ctor_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration__ctor_System_String_System_String_Azure_Storage_Blobs_BlobClientOptions_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.#ctor(System.String,System.String,Azure.Storage.Blobs.BlobClientOptions)">AzureBlobStorageConfiguration(string, string, BlobClientOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AzureBlobStorageConfiguration(string connectionString, string containerName, BlobClientOptions options = null)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">containerName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.storage.blobs.blobclientoptions">BlobClientOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_AzureSasCredential_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.AzureSasCredential*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_AzureSasCredential" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.AzureSasCredential">AzureSasCredential</h4>
  <div class="markdown level1 summary"><p>Credentials to authenticate when connecting to the blob Url provided in the <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Uri">Uri</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AzureSasCredential AzureSasCredential { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.azuresascredential">AzureSasCredential</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_BlobClientOptions_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.BlobClientOptions*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_BlobClientOptions" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.BlobClientOptions">BlobClientOptions</h4>
  <div class="markdown level1 summary"><p>Optional: Additional options when connecting with the <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.storage.blobs.specialized.blockblobclient">BlockBlobClient</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BlobClientOptions BlobClientOptions { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.storage.blobs.blobclientoptions">BlobClientOptions</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_BlobOpenReadOptions_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.BlobOpenReadOptions*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_BlobOpenReadOptions" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.BlobOpenReadOptions">BlobOpenReadOptions</h4>
  <div class="markdown level1 summary"><p>Optional: Additional options when opening the stream for reading</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BlobOpenReadOptions BlobOpenReadOptions { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.storage.blobs.models.blobopenreadoptions">BlobOpenReadOptions</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_BlobServiceEndpoint_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.BlobServiceEndpoint*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_BlobServiceEndpoint" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.BlobServiceEndpoint">BlobServiceEndpoint</h4>
  <div class="markdown level1 summary"><p>The endpoint to which blob is created. Only used if the <a class="xref" href="/api/etlbox.dataflow/azureblobstorageconfiguration#ETLBox_DataFlow_AzureBlobStorageConfiguration_ConnectionString">ConnectionString</a> is not provided,
but other means of credentials are provided. The uri for the connection will then be constructed
from &quot;{<a class="xref" href="/api/etlbox.dataflow/azureblobstorageconfiguration#ETLBox_DataFlow_AzureBlobStorageConfiguration_BlobServiceEndpoint">BlobServiceEndpoint</a>}/{<a class="xref" href="/api/etlbox.dataflow/azureblobstorageconfiguration#ETLBox_DataFlow_AzureBlobStorageConfiguration_ContainerName">ContainerName</a>}/{<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.uri">Uri</a>}&quot;/&gt;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string BlobServiceEndpoint { get; set; }
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
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_BlockBlobOpenWriteOptions_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.BlockBlobOpenWriteOptions*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_BlockBlobOpenWriteOptions" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.BlockBlobOpenWriteOptions">BlockBlobOpenWriteOptions</h4>
  <div class="markdown level1 summary"><p>Optional: Additional options when opening the stream for writing</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BlockBlobOpenWriteOptions BlockBlobOpenWriteOptions { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.storage.blobs.models.blockblobopenwriteoptions">BlockBlobOpenWriteOptions</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_ConnectionString_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.ConnectionString*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_ConnectionString" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.ConnectionString">ConnectionString</h4>
  <div class="markdown level1 summary"><p>Provide a connection string to the Azure Blob Storage. The <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Uri">Uri</a> needs to be the blob name,
and <a class="xref" href="/api/etlbox.dataflow/azureblobstorageconfiguration#ETLBox_DataFlow_AzureBlobStorageConfiguration_ContainerName">ContainerName</a> needs to have a value.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ConnectionString { get; set; }
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
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_ContainerName_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.ContainerName*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_ContainerName" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.ContainerName">ContainerName</h4>
  <div class="markdown level1 summary"><p>The container name in which the blob is created. The <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Uri">Uri</a> needs to be the blob name,
and <a class="xref" href="/api/etlbox.dataflow/azureblobstorageconfiguration#ETLBox_DataFlow_AzureBlobStorageConfiguration_ConnectionString">ConnectionString</a> needs to have a value.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ContainerName { get; set; }
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
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_CreateBlockBlobClient_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.CreateBlockBlobClient*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_CreateBlockBlobClient" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.CreateBlockBlobClient">CreateBlockBlobClient</h4>
  <div class="markdown level1 summary"><p>Provide an existing BlockBlobClient to connect with Azure Blob Storage</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<string, BlockBlobClient> CreateBlockBlobClient { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.storage.blobs.specialized.blockblobclient">BlockBlobClient</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_StorageSharedKeyCredential_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.StorageSharedKeyCredential*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_StorageSharedKeyCredential" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.StorageSharedKeyCredential">StorageSharedKeyCredential</h4>
  <div class="markdown level1 summary"><p>Token to authenticate when connecting to the blob Url provided in the <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Uri">Uri</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public StorageSharedKeyCredential StorageSharedKeyCredential { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.storage.storagesharedkeycredential">StorageSharedKeyCredential</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_AzureBlobStorageConfiguration_TokenCredential_" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.TokenCredential*"></a>
  <h4 id="ETLBox_DataFlow_AzureBlobStorageConfiguration_TokenCredential" data-uid="ETLBox.DataFlow.AzureBlobStorageConfiguration.TokenCredential">TokenCredential</h4>
  <div class="markdown level1 summary"><p>Token credential to authenticate when connecting to the blob Url provided in the <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Uri">Uri</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TokenCredential TokenCredential { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.core.tokencredential">TokenCredential</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
