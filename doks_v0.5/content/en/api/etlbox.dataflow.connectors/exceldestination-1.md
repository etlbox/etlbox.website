---
title: "ExcelDestination<TInput>"
description: "Details for Class ExcelDestination<TInput> (ETLBox.DataFlow.Connectors)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.connectors"
weight: 10114
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1">
  <h1 id="ETLBox_DataFlow_Connectors_ExcelDestination_1" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1" class="text-break">Class ExcelDestination&lt;TInput&gt;
</h1>
  <div class="markdown level0 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1">DataFlowDestination</a>&lt;TInput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1">DataFlowStreamDestination</a>&lt;TInput&gt;</div>
    <div class="level5"><span class="xref">ExcelDestination&lt;TInput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/exceldestination">ExcelDestination</a></div>
  </div>
  <div class="implements">
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Uri">DataFlowStreamDestination&lt;TInput&gt;.Uri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_GetNextUri">DataFlowStreamDestination&lt;TInput&gt;.GetNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HasNextUri">DataFlowStreamDestination&lt;TInput&gt;.HasNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_ResourceType">DataFlowStreamDestination&lt;TInput&gt;.ResourceType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HttpClient">DataFlowStreamDestination&lt;TInput&gt;.HttpClient</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HttpRequestMessage">DataFlowStreamDestination&lt;TInput&gt;.HttpRequestMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HttpResponseMessage">DataFlowStreamDestination&lt;TInput&gt;.HttpResponseMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Encoding">DataFlowStreamDestination&lt;TInput&gt;.Encoding</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_CreateStreamWriter">DataFlowStreamDestination&lt;TInput&gt;.CreateStreamWriter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_AzureBlobStorage">DataFlowStreamDestination&lt;TInput&gt;.AzureBlobStorage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_WriteUri">DataFlowStreamDestination&lt;TInput&gt;.WriteUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_StreamWriter">DataFlowStreamDestination&lt;TInput&gt;.StreamWriter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_InitComponent">DataFlowStreamDestination&lt;TInput&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_CleanUpOnSuccess">DataFlowStreamDestination&lt;TInput&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_CleanUpOnFaulted_System_Exception_">DataFlowStreamDestination&lt;TInput&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_NewMetaDataObject">DataFlowStreamDestination&lt;TInput&gt;.NewMetaDataObject</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_WriteData__0_">DataFlowStreamDestination&lt;TInput&gt;.WriteData(TInput)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_PrepareStreamForBatchProcessing__0___">DataFlowStreamDestination&lt;TInput&gt;.PrepareStreamForBatchProcessing(TInput[])</a>
    </div>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(Nullable&lt;CancellationToken&gt;)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowOrRedirectError_System_Exception_System_String_System_String_">DataFlowComponent.ThrowOrRedirectError(Exception, String, String)</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Connectors</h6>
  <h6><strong>Assembly</strong>: ETLBox.Excel.dll</h6>
  <h5 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ExcelDestination<TInput> : DataFlowStreamDestination<TInput>, ILoggableTask, IDataFlowLogging, IDataFlowStreamDestination<TInput>, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent, IDataFlowStreamDestination
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
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1__ctor" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.#ctor">ExcelDestination()</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelDestination()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1__ctor_System_String_ETLBox_DataFlow_ResourceType_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.#ctor(System.String,ETLBox.DataFlow.ResourceType)">ExcelDestination(String, ResourceType)</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelDestination(string uri, ResourceType resourceType)
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">uri</span></td>
        <td><p>The destination excel file name or uri</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.dataflow/resourcetype">ResourceType</a></td>
        <td><span class="parametername">resourceType</span></td>
        <td><p>Specifies if data is loaded from a file, a web endpoint or other storage types (e.g. Azure Blob Storage)</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1__ctor_System_String_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.#ctor(System.String)">ExcelDestination(String)</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelDestination(string uri)
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">uri</span></td>
        <td><p>The destination excel file name or uri</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_ExcelColumns_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.ExcelColumns*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_ExcelColumns" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.ExcelColumns">ExcelColumns</h4>
  <div class="markdown level1 summary"><p>List of ExcelColumn attributes to map the properties with the right excel column.
If you are providing a mapping, all properties that you want to include in the output file need to be specified, and all
specified columns require a ColumnIndex.
If left empty, the order of the output columns is equal to the order of the properties in the object definition.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ExcelColumn> ExcelColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow/excelcolumn">ExcelColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_HttpContentType_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.HttpContentType*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_HttpContentType" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.HttpContentType">HttpContentType</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string HttpContentType { get; set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamDestination&lt;TInput&gt;.HttpContentType</span></div>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_SheetName_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.SheetName*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_SheetName" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.SheetName">SheetName</h4>
  <div class="markdown level1 summary"><p>The sheet name that contains the data</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string SheetName { get; set; }
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
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_SuppressHeader_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.SuppressHeader*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_SuppressHeader" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.SuppressHeader">SuppressHeader</h4>
  <div class="markdown level1 summary"><p>If set to true, no header row is written into the output</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool SuppressHeader { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_TaskName_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_TaskName" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string TaskName { get; set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_CheckParameter_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_CheckParameter" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamDestination&lt;TInput&gt;.CheckParameter()</span></div>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_CloseStream_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.CloseStream*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_CloseStream" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.CloseStream">CloseStream()</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CloseStream()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamDestination&lt;TInput&gt;.CloseStream()</span></div>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_InitStream_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.InitStream*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_InitStream" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.InitStream">InitStream()</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitStream()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamDestination&lt;TInput&gt;.InitStream()</span></div>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_PrepareParameter_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_PrepareParameter" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.PrepareParameter">PrepareParameter()</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamDestination&lt;TInput&gt;.PrepareParameter()</span></div>
  <a id="ETLBox_DataFlow_Connectors_ExcelDestination_1_WriteIntoStream_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.WriteIntoStream*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_ExcelDestination_1_WriteIntoStream__0_" data-uid="ETLBox.DataFlow.Connectors.ExcelDestination`1.WriteIntoStream(`0)">WriteIntoStream(TInput)</h4>
  <div class="markdown level1 summary"><p>A Excel destination creates an excel files with formatted data. The output will look similar to a csv file.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void WriteIntoStream(TInput data)
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamDestination&lt;TInput&gt;.WriteIntoStream(TInput)</span></div>
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