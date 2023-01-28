---
title: "CsvDestination"
description: "Details for Class CsvDestination (ETLBox.DataFlow.Connectors)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.connectors"
weight: 10097
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Connectors.CsvDestination">
  <h1 id="ETLBox_DataFlow_Connectors_CsvDestination" data-uid="ETLBox.DataFlow.Connectors.CsvDestination" class="text-break">Class CsvDestination
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1">DataFlowDestination</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1">DataFlowStreamDestination</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1">CsvDestination</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div class="level6"><span class="xref">CsvDestination</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination-1">IDataFlowStreamDestination</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination">IDataFlowStreamDestination</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1#ETLBox_DataFlow_Connectors_CsvDestination_1_TaskName">CsvDestination&lt;ExpandoObject&gt;.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1#ETLBox_DataFlow_Connectors_CsvDestination_1_Configuration">CsvDestination&lt;ExpandoObject&gt;.Configuration</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1#ETLBox_DataFlow_Connectors_CsvDestination_1_CsvContext">CsvDestination&lt;ExpandoObject&gt;.CsvContext</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1#ETLBox_DataFlow_Connectors_CsvDestination_1_HttpContentType">CsvDestination&lt;ExpandoObject&gt;.HttpContentType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1#ETLBox_DataFlow_Connectors_CsvDestination_1_CheckParameter">CsvDestination&lt;ExpandoObject&gt;.CheckParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1#ETLBox_DataFlow_Connectors_CsvDestination_1_InitStream">CsvDestination&lt;ExpandoObject&gt;.InitStream()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1#ETLBox_DataFlow_Connectors_CsvDestination_1_WriteIntoStream__0_">CsvDestination&lt;ExpandoObject&gt;.WriteIntoStream(ExpandoObject)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.connectors/csvdestination-1#ETLBox_DataFlow_Connectors_CsvDestination_1_CloseStream">CsvDestination&lt;ExpandoObject&gt;.CloseStream()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Uri">DataFlowStreamDestination&lt;ExpandoObject&gt;.Uri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_GetNextUri">DataFlowStreamDestination&lt;ExpandoObject&gt;.GetNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HasNextUri">DataFlowStreamDestination&lt;ExpandoObject&gt;.HasNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_ResourceType">DataFlowStreamDestination&lt;ExpandoObject&gt;.ResourceType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HttpClient">DataFlowStreamDestination&lt;ExpandoObject&gt;.HttpClient</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HttpRequestMessage">DataFlowStreamDestination&lt;ExpandoObject&gt;.HttpRequestMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_HttpResponseMessage">DataFlowStreamDestination&lt;ExpandoObject&gt;.HttpResponseMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_Encoding">DataFlowStreamDestination&lt;ExpandoObject&gt;.Encoding</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_CreateStreamWriter">DataFlowStreamDestination&lt;ExpandoObject&gt;.CreateStreamWriter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_AzureBlobStorage">DataFlowStreamDestination&lt;ExpandoObject&gt;.AzureBlobStorage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_WriteUri">DataFlowStreamDestination&lt;ExpandoObject&gt;.WriteUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_StreamWriter">DataFlowStreamDestination&lt;ExpandoObject&gt;.StreamWriter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_PrepareParameter">DataFlowStreamDestination&lt;ExpandoObject&gt;.PrepareParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_InitComponent">DataFlowStreamDestination&lt;ExpandoObject&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_CleanUpOnSuccess">DataFlowStreamDestination&lt;ExpandoObject&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_CleanUpOnFaulted_System_Exception_">DataFlowStreamDestination&lt;ExpandoObject&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_NewMetaDataObject">DataFlowStreamDestination&lt;ExpandoObject&gt;.NewMetaDataObject</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_WriteData__0_">DataFlowStreamDestination&lt;ExpandoObject&gt;.WriteData(ExpandoObject)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamdestination-1#ETLBox_DataFlow_DataFlowStreamDestination_1_PrepareStreamForBatchProcessing__0___">DataFlowStreamDestination&lt;ExpandoObject&gt;.PrepareStreamForBatchProcessing(ExpandoObject[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_TargetBlock">DataFlowDestination&lt;ExpandoObject&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_Wait">DataFlowDestination&lt;ExpandoObject&gt;.Wait()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowDestination&lt;ExpandoObject&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_TargetAction">DataFlowDestination&lt;ExpandoObject&gt;.TargetAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_UseBufferBlock">DataFlowDestination&lt;ExpandoObject&gt;.UseBufferBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_Buffer">DataFlowDestination&lt;ExpandoObject&gt;.Buffer</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_BufferTargetAction">DataFlowDestination&lt;ExpandoObject&gt;.BufferTargetAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_InternalBatchSize">DataFlowDestination&lt;ExpandoObject&gt;.InternalBatchSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_WriteBatch__0___">DataFlowDestination&lt;ExpandoObject&gt;.WriteBatch(ExpandoObject[])</a>
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
  <h6><strong>Assembly</strong>: ETLBox.Csv.dll</h6>
  <h5 id="ETLBox_DataFlow_Connectors_CsvDestination_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class CsvDestination : CsvDestination<ExpandoObject>, ILoggableTask, IDataFlowLogging, IDataFlowStreamDestination<ExpandoObject>, IDataFlowDestination<ExpandoObject>, IDataFlowDestination, IDataFlowComponent, IDataFlowStreamDestination
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Connectors_CsvDestination__ctor_" data-uid="ETLBox.DataFlow.Connectors.CsvDestination.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CsvDestination__ctor" data-uid="ETLBox.DataFlow.Connectors.CsvDestination.#ctor">CsvDestination()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CsvDestination()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Connectors_CsvDestination__ctor_" data-uid="ETLBox.DataFlow.Connectors.CsvDestination.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CsvDestination__ctor_System_String_" data-uid="ETLBox.DataFlow.Connectors.CsvDestination.#ctor(System.String)">CsvDestination(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CsvDestination(string fileName)
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
        <td><span class="parametername">fileName</span></td>
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
