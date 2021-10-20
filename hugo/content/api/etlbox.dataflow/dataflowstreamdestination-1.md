---
title: "DataFlowStreamDestination<TInput>"
description: "Details for Class DataFlowStreamDestination<TInput> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10150
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1">
  <h1 id="ETLBox_DataFlow_DataFlowStreamDestination_1" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1" class="text-break">Class DataFlowStreamDestination&lt;TInput&gt;
  </h1>
  <div class="markdown level0 summary"><p>The base implementation for a destination that allows writing of data in a stream.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1">DataFlowDestination</a>&lt;TInput&gt;</div>
    <div class="level4"><span class="xref">DataFlowStreamDestination&lt;TInput&gt;</span></div>
      <div class="level5"><a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1">CsvDestination&lt;TInput&gt;</a></div>
      <div class="level5"><a class="xref" href="/api/etlbox.dataflow.connectors/exceldestination-1">ExcelDestination&lt;TInput&gt;</a></div>
      <div class="level5"><a class="xref" href="/api/etlbox.dataflow.connectors/jsondestination-1">JsonDestination&lt;TInput&gt;</a></div>
      <div class="level5"><a class="xref" href="/api/etlbox.dataflow.connectors/textdestination-1">TextDestination&lt;TInput&gt;</a></div>
      <div class="level5"><a class="xref" href="/api/etlbox.dataflow.connectors/xmldestination-1">XmlDestination&lt;TInput&gt;</a></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination-1">IDataFlowStreamDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination">IDataFlowStreamDestination</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_TargetBlock">DataFlowDestination&lt;TInput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_Wait">DataFlowDestination&lt;TInput&gt;.Wait()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowDestination&lt;TInput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_TargetAction">DataFlowDestination&lt;TInput&gt;.TargetAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_UseBufferBlock">DataFlowDestination&lt;TInput&gt;.UseBufferBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_Buffer">DataFlowDestination&lt;TInput&gt;.Buffer</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_BufferTargetAction">DataFlowDestination&lt;TInput&gt;.BufferTargetAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_InternalBatchSize">DataFlowDestination&lt;TInput&gt;.InternalBatchSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_WriteBatch__0___">DataFlowDestination&lt;TInput&gt;.WriteBatch(TInput[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_MaxBufferSize">DataFlowComponent.MaxBufferSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent__maxBufferSize">DataFlowComponent._maxBufferSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Predecessors">DataFlowComponent.Predecessors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Successors">DataFlowComponent.Successors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Completion">DataFlowComponent.Completion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_WasComponentInitialized">DataFlowComponent.WasComponentInitialized</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ReadyForProcessing">DataFlowComponent.ReadyForProcessing</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_WasLinked">DataFlowComponent.WasLinked</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_SetParent_ETLBox_DataFlow_DataFlowComponent_">DataFlowComponent.SetParent(DataFlowComponent)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_DataFlow_IDataFlowDestination_System_Object_System_Object_">DataFlowComponent.InternalLinkTo&lt;T&gt;(IDataFlowDestination, Object, Object)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LinkBuffersRecursively">DataFlowComponent.LinkBuffersRecursively()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects">DataFlowComponent.InitBufferObjects()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitParameter">DataFlowComponent.InitParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_SetCompletionTask">DataFlowComponent.SetCompletionTask()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_RunErrorSourceInit">DataFlowComponent.RunErrorSourceInit()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnCompletion">DataFlowComponent.OnCompletion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CompleteOrFaultBufferOnPredecessorCompletion_System_Threading_Tasks_Task_">DataFlowComponent.CompleteOrFaultBufferOnPredecessorCompletion(Task)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Exception">DataFlowComponent.Exception</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ErrorSource">DataFlowComponent.ErrorSource</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CancelBufferAndThrowOperationCanceledException">DataFlowComponent.CancelBufferAndThrowOperationCanceledException()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowComponent.InternalLinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowOrRedirectError_System_Exception_System_String_">DataFlowComponent.ThrowOrRedirectError(Exception, String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowErrorAndFaultNetwork_System_Exception_System_String_">DataFlowComponent.ThrowErrorAndFaultNetwork(Exception, String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CancelComponent">DataFlowComponent.CancelComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent__loggingThresholdRows">DataFlowComponent._loggingThresholdRows</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogThreshold">DataFlowComponent.LogThreshold</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ProgressCount">DataFlowComponent.ProgressCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnProgress">DataFlowComponent.OnProgress</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThresholdCount">DataFlowComponent.ThresholdCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LoggingStartOnce">DataFlowComponent.LoggingStartOnce()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LoggingFinishOnce">DataFlowComponent.LoggingFinishOnce()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgressBatch_AfterThrowOrRedirectError_System_Int32_">DataFlowComponent.LogProgressBatch_AfterThrowOrRedirectError(Int32)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError_System_Boolean_">DataFlowComponent.LogProgress_AfterThrowOrRedirectError(Boolean)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_CopyLogTaskProperties_ETLBox_ControlFlow_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">System.Object.GetType()</span>
    </div>
    <div>
      <span class="xref">System.Object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">System.Object.ReferenceEquals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_DataFlowStreamDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class DataFlowStreamDestination<TInput> : DataFlowDestination<TInput>, ILoggableTask, IDataFlowLogging, IDataFlowStreamDestination<TInput>, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent, IDataFlowStreamDestination
```

{{< rawhtml >}}
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">TInput</span></td>
        <td><p>Type of ingoing data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_AzureBlobStorage_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.AzureBlobStorage*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_AzureBlobStorage" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.AzureBlobStorage">AzureBlobStorage</h4>
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
    public AzureBlobStorageConfiguration AzureBlobStorage { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_CreateStreamWriter_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CreateStreamWriter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_CreateStreamWriter" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CreateStreamWriter">CreateStreamWriter</h4>
  <div class="markdown level1 summary"><p>By default, stream are created internally based on Uri &amp; ResourceType.
If you already have an existing stream, use this function to returns a new StreamWriter based on this stream.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<string, StreamWriter> CreateStreamWriter { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_Encoding_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.Encoding*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_Encoding" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.Encoding">Encoding</h4>
  <div class="markdown level1 summary"><p>Encoding used to write data into the source file or web request.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Encoding Encoding { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_GetNextUri_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.GetNextUri*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_GetNextUri" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.GetNextUri">GetNextUri</h4>
  <div class="markdown level1 summary"><p>This function returns the next url that is used for writing data. It will used until <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination-1#ETLBox_DataFlow_IDataFlowStreamDestination_1_HasNextUri">HasNextUri</a> returns false.
The incoming <a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a> holds information about the current progress and currently processed data row.
This property can be used if you want to write into multiple files or send data into different web services.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<StreamMetaData, TInput, string> GetNextUri { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, TInput, <span class="xref">System.String</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_HasNextUri_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.HasNextUri*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_HasNextUri" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.HasNextUri">HasNextUri</h4>
  <div class="markdown level1 summary"><p>This func determines if the next data record should be written into another location.
<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a> has information about the current progress and currently processed data row.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<StreamMetaData, TInput, bool> HasNextUri { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, TInput, <span class="xref">System.Boolean</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_HttpClient_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.HttpClient*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_HttpClient" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.HttpClient">HttpClient</h4>
  <div class="markdown level1 summary"><p>The System.Net.HttpClient used to connect with the destination (only needed when the <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_ResourceType">ResourceType</a> is Http.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public HttpClient HttpClient { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_HttpContentType_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.HttpContentType*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_HttpContentType" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.HttpContentType">HttpContentType</h4>
  <div class="markdown level1 summary"><p>The content type used when sending the http request content.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string HttpContentType { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_HttpRequestMessage_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.HttpRequestMessage*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_HttpRequestMessage" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.HttpRequestMessage">HttpRequestMessage</h4>
  <div class="markdown level1 summary"><p>The System.Net.Http.HttpRequestMessage use for the request from the HttpClient. You can use the
to add additional meta data or to change the request type (default is POST).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public HttpRequestMessage HttpRequestMessage { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_ResourceType_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.ResourceType*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_ResourceType" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.ResourceType">ResourceType</h4>
  <div class="markdown level1 summary"><p>Specifies the resource type.
Use ResourceType.File if you want to write into a file (default)
Use ResourceType.Http to write into a web endpoint.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ResourceType ResourceType { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_StreamWriter_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.StreamWriter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_StreamWriter" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.StreamWriter">StreamWriter</h4>
  <div class="markdown level1 summary"><p>The stream writer used for the current request.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public StreamWriter StreamWriter { get; protected set; }
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
        <td><span class="xref">System.IO.StreamWriter</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_Uri_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.Uri*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_Uri" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.Uri">Uri</h4>
  <div class="markdown level1 summary"><p>The Url of the webservice (e.g. <a href="https://test.com/foo">https://test.com/foo</a>) or the file name (relative or absolute)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Uri { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_WriteUri_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.WriteUri*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_WriteUri" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.WriteUri">WriteUri</h4>
  <div class="markdown level1 summary"><p>The Uri used for the current write operation- this will only be different to the <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Uri">Uri</a>
if you use the <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_GetNextUri">GetNextUri</a> and <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HasNextUri">HasNextUri</a> functions.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string WriteUri { get; protected set; }
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
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_CheckParameter_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_CheckParameter" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CheckParameter">DataFlowComponent.CheckParameter()</a></div>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CleanUpOnFaulted(Exception e)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Exception</span></td>
        <td><span class="parametername">e</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnFaulted_System_Exception_">DataFlowComponent.CleanUpOnFaulted(Exception)</a></div>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CleanUpOnSuccess()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnSuccess">DataFlowComponent.CleanUpOnSuccess()</a></div>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_CloseStream_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CloseStream*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_CloseStream" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.CloseStream">CloseStream()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract void CloseStream()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_InitComponent_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.InitComponent*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_InitComponent" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.InitComponent">InitComponent()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitComponent()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowDestination&lt;TInput&gt;.InitComponent()</span></div>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_InitStream_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.InitStream*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_InitStream" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.InitStream">InitStream()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract void InitStream()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_PrepareParameter_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_PrepareParameter" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.PrepareParameter">PrepareParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameter">DataFlowComponent.PrepareParameter()</a></div>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_PrepareStreamForBatchProcessing_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.PrepareStreamForBatchProcessing*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_PrepareStreamForBatchProcessing__0___" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.PrepareStreamForBatchProcessing(`0[])">PrepareStreamForBatchProcessing(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void PrepareStreamForBatchProcessing(TInput[] data)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TInput[]</td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_WriteData_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.WriteData*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_WriteData__0_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.WriteData(`0)">WriteData(TInput)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void WriteData(TInput data)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">TInput</span></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamDestination_1_WriteIntoStream_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.WriteIntoStream*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamDestination_1_WriteIntoStream__0_" data-uid="ETLBox.DataFlow.DataFlowStreamDestination`1.WriteIntoStream(`0)">WriteIntoStream(TInput)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract void WriteIntoStream(TInput data)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">TInput</span></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination-1">IDataFlowStreamDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination">IDataFlowStreamDestination</a>
  </div>

{{< /rawhtml >}}
