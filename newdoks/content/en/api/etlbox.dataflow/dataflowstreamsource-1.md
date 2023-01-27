---
title: "DataFlowStreamSource<TOutput>"
description: "Details for Class DataFlowStreamSource<TOutput> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10158
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1">
  <h1 id="ETLBox_DataFlow_DataFlowStreamSource_1" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1" class="text-break">Class DataFlowStreamSource&lt;TOutput&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1">DataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div class="level5"><span class="xref">DataFlowStreamSource&lt;TOutput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/csvsource-1">CsvSource&lt;TOutput&gt;</a></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/excelsource-1">ExcelSource&lt;TOutput&gt;</a></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/jsonsource-1">JsonSource&lt;TOutput&gt;</a></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/parquetsource-1">ParquetSource&lt;TOutput&gt;</a></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1">TextSource&lt;TOutput&gt;</a></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/xmlsource-1">XmlSource&lt;TOutput&gt;</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource-1">IDataFlowStreamSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource">IDataFlowExecutableSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource">IDataFlowStreamSource</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Limit">DataFlowExecutableSource&lt;TOutput&gt;.Limit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ProgressCountIsInLimit">DataFlowExecutableSource&lt;TOutput&gt;.ProgressCountIsInLimit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ProgressCountIsExceedingLimit">DataFlowExecutableSource&lt;TOutput&gt;.ProgressCountIsExceedingLimit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_SourceBlock">DataFlowExecutableSource&lt;TOutput&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Buffer">DataFlowExecutableSource&lt;TOutput&gt;.Buffer</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_SourceTask">DataFlowExecutableSource&lt;TOutput&gt;.SourceTask</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_CompleteManually">DataFlowExecutableSource&lt;TOutput&gt;.CompleteManually</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_InitComponent">DataFlowExecutableSource&lt;TOutput&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Execute">DataFlowExecutableSource&lt;TOutput&gt;.Execute()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Execute_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;TOutput&gt;.Execute(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Post">DataFlowExecutableSource&lt;TOutput&gt;.Post()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Post_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;TOutput&gt;.Post(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_InternalPost_System_Nullable_System_Threading_CancellationToken__">DataFlowExecutableSource&lt;TOutput&gt;.InternalPost(Nullable&lt;CancellationToken&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync">DataFlowExecutableSource&lt;TOutput&gt;.ExecuteAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;TOutput&gt;.ExecuteAsync(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowSource&lt;TOutput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
  <h5 id="ETLBox_DataFlow_DataFlowStreamSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class DataFlowStreamSource<TOutput> : DataFlowExecutableSource<TOutput>, ILoggableTask, IDataFlowLogging, IDataFlowStreamSource<TOutput>, IDataFlowExecutableSource<TOutput>, IDataFlowSource<TOutput>, IDataFlowSource, IDataFlowComponent, IDataFlowExecutableSource, IDataFlowStreamSource
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
        <td><span class="parametername">TOutput</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_AzureBlobStorage_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.AzureBlobStorage*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_AzureBlobStorage" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.AzureBlobStorage">AzureBlobStorage</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_CollectUnparsedData_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CollectUnparsedData*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_CollectUnparsedData" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CollectUnparsedData">CollectUnparsedData</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool CollectUnparsedData { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_CreateStreamReader_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CreateStreamReader*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_CreateStreamReader" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CreateStreamReader">CreateStreamReader</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<string, StreamReader> CreateStreamReader { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;<span class="xref">System.String</span>, <span class="xref">System.IO.StreamReader</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_Encoding_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.Encoding*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_Encoding" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.Encoding">Encoding</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_GetNextUri_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.GetNextUri*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_GetNextUri" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.GetNextUri">GetNextUri</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<StreamMetaData, string> GetNextUri { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, <span class="xref">System.String</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_HasNextUri_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.HasNextUri*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_HasNextUri" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.HasNextUri">HasNextUri</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<StreamMetaData, bool> HasNextUri { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, <span class="xref">System.Boolean</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_HttpClient_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.HttpClient*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_HttpClient" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.HttpClient">HttpClient</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_HttpRequestMessage_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.HttpRequestMessage*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_HttpRequestMessage" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.HttpRequestMessage">HttpRequestMessage</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_HttpResponseMessage_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.HttpResponseMessage*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_HttpResponseMessage" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.HttpResponseMessage">HttpResponseMessage</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public HttpResponseMessage HttpResponseMessage { get; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_NewMetaDataObject_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.NewMetaDataObject*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_NewMetaDataObject" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.NewMetaDataObject">NewMetaDataObject</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected StreamMetaData NewMetaDataObject { get; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_RequestUri_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.RequestUri*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_RequestUri" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.RequestUri">RequestUri</h4>
  <div class="markdown level1 summary"><p>The Uri used for the current request - this will only be different to the <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_Uri">Uri</a>
if you use the <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_GetNextUri">GetNextUri</a> and <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HasNextUri">HasNextUri</a> functions.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string RequestUri { get; protected set; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_ResourceType_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.ResourceType*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_ResourceType" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.ResourceType">ResourceType</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_RowModificationAction_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.RowModificationAction*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_RowModificationAction" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.RowModificationAction">RowModificationAction</h4>
  <div class="markdown level1 summary"><p>Allows you to modify a record directly after it is read from the source and before it is send to the next component.
While processing of data in other components can happen asynchronously, the execution of this action is synchronous
and always occurs after each record was read and before a new record is read.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<TOutput, StreamMetaData> RowModificationAction { get; set; }
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
        <td><span class="xref">System.Action</span>&lt;TOutput, <a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_SkipRows_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.SkipRows*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_SkipRows" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.SkipRows">SkipRows</h4>
  <div class="markdown level1 summary"><p>Number of rows to skip before starting reading the header and csv data</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int SkipRows { get; set; }
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_StreamReader_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.StreamReader*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_StreamReader" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.StreamReader">StreamReader</h4>
  <div class="markdown level1 summary"><p>The stream reader used for the current request.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public StreamReader StreamReader { get; protected set; }
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
        <td><span class="xref">System.IO.StreamReader</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedData_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.UnparsedData*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedData" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.UnparsedData">UnparsedData</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string UnparsedData { get; }
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedDataBuilder_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.UnparsedDataBuilder*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedDataBuilder" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.UnparsedDataBuilder">UnparsedDataBuilder</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected StringBuilder UnparsedDataBuilder { get; set; }
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
        <td><span class="xref">System.Text.StringBuilder</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_Uri_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.Uri*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_Uri" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.Uri">Uri</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_CheckParameter_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_CheckParameter" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CheckParameter">DataFlowComponent.CheckParameter()</a></div>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CleanUpOnSuccess()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnSuccess">DataFlowComponent.CleanUpOnSuccess()</a></div>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_CloseReader_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CloseReader*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_CloseReader" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.CloseReader">CloseReader()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract void CloseReader()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_InitReader_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.InitReader*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_InitReader" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.InitReader">InitReader()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract void InitReader()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_OnExecutionDoAsyncWork_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.OnExecutionDoAsyncWork*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_OnExecutionDoAsyncWork" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.OnExecutionDoAsyncWork">OnExecutionDoAsyncWork()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void OnExecutionDoAsyncWork()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowExecutableSource&lt;TOutput&gt;.OnExecutionDoAsyncWork()</span></div>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_OnExecutionDoSynchronousWork_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.OnExecutionDoSynchronousWork*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_OnExecutionDoSynchronousWork" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.OnExecutionDoSynchronousWork">OnExecutionDoSynchronousWork()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void OnExecutionDoSynchronousWork()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowExecutableSource&lt;TOutput&gt;.OnExecutionDoSynchronousWork()</span></div>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_PrepareParameter_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_PrepareParameter" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.PrepareParameter">PrepareParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameter">DataFlowComponent.PrepareParameter()</a></div>
  <a id="ETLBox_DataFlow_DataFlowStreamSource_1_ReadAllRecords_" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.ReadAllRecords*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowStreamSource_1_ReadAllRecords" data-uid="ETLBox.DataFlow.DataFlowStreamSource`1.ReadAllRecords">ReadAllRecords()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract void ReadAllRecords()
```

{{< rawhtml >}}
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource-1">IDataFlowStreamSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource">IDataFlowExecutableSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource">IDataFlowStreamSource</a>
  </div>

{{< /rawhtml >}}
