---
title: "CachedBatchTransformation<TInput, TOutput, TCache>"
description: "Details for Class CachedBatchTransformation<TInput, TOutput, TCache> (ETLBox.DataFlow.Transformations)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.transformations"
weight: 10204
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3">
  <h1 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3" class="text-break">Class CachedBatchTransformation&lt;TInput, TOutput, TCache&gt;
  </h1>
  <div class="markdown level0 summary"><p>A batch transformation will transform batches of data. The default batch size are 100000 rows.
The batch transformation function allows you to process and modify each batch of data.
You can use the BatchSize property to choose a smaller batch size. The batch size must always be smaller
than the max buffer size. The default batch size are 1000 rows per batch.
The batch transformation is a partial blocking transformation - it will always need at least enough
memory to store a whole batch.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;TInput, TOutput&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2">BatchTransformation</a>&lt;TInput, TOutput&gt;</div>
    <div class="level6"><span class="xref">CachedBatchTransformation&lt;TInput, TOutput, TCache&gt;</span></div>
      <div class="level7"><a class="xref" href="/api/etlbox.dataflow.transformations/cachedbatchtransformation-1">CachedBatchTransformation&lt;TInput&gt;</a></div>
      <div class="level7"><a class="xref" href="/api/etlbox.dataflow.transformations/cachedbatchtransformation-2">CachedBatchTransformation&lt;TInput, TOutput&gt;</a></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowtransformation-2">IDataFlowTransformation</a>&lt;TInput, TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_TaskName">BatchTransformation&lt;TInput, TOutput&gt;.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_SourceBlock">BatchTransformation&lt;TInput, TOutput&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_TargetBlock">BatchTransformation&lt;TInput, TOutput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_BatchTransformationFunc">BatchTransformation&lt;TInput, TOutput&gt;.BatchTransformationFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_BatchSize">BatchTransformation&lt;TInput, TOutput&gt;.BatchSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_InitAction">BatchTransformation&lt;TInput, TOutput&gt;.InitAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_SuppressNullValueFilter">BatchTransformation&lt;TInput, TOutput&gt;.SuppressNullValueFilter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_CheckParameter">BatchTransformation&lt;TInput, TOutput&gt;.CheckParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_CheckAndAdjustBatchSize">BatchTransformation&lt;TInput, TOutput&gt;.CheckAndAdjustBatchSize()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_InitComponent">BatchTransformation&lt;TInput, TOutput&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_CleanUpOnSuccess">BatchTransformation&lt;TInput, TOutput&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_CleanUpOnFaulted_System_Exception_">BatchTransformation&lt;TInput, TOutput&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_WasInitActionInvoked">BatchTransformation&lt;TInput, TOutput&gt;.WasInitActionInvoked</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_InvokeInitActionOnce">BatchTransformation&lt;TInput, TOutput&gt;.InvokeInitActionOnce()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2#ETLBox_DataFlow_Transformations_BatchTransformation_2_InvokeBatchTransformationFunc__0___">BatchTransformation&lt;TInput, TOutput&gt;.InvokeBatchTransformationFunc(TInput[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2#ETLBox_DataFlow_DataFlowTransformation_2_TargetBlock">DataFlowTransformation&lt;TInput, TOutput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_SourceBlock">DataFlowSource&lt;TOutput&gt;.SourceBlock</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects">DataFlowComponent.InitBufferObjects()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameter">DataFlowComponent.PrepareParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitParameter">DataFlowComponent.InitParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitComponent">DataFlowComponent.InitComponent()</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnSuccess">DataFlowComponent.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnFaulted_System_Exception_">DataFlowComponent.CleanUpOnFaulted(Exception)</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Transformations</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class CachedBatchTransformation<TInput, TOutput, TCache> : BatchTransformation<TInput, TOutput>, ILoggableTask, IDataFlowLogging, IDataFlowTransformation<TInput, TOutput>, IDataFlowSource<TOutput>, IDataFlowSource, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent
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
        <td><p>Type of ingoing data.</p>
</td>
      </tr>
      <tr>
        <td><span class="parametername">TOutput</span></td>
        <td><p>Type of outgoing data.</p>
</td>
      </tr>
      <tr>
        <td><span class="parametername">TCache</span></td>
        <td><p>Type of data in the cache.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3__ctor_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3__ctor" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.#ctor">CachedBatchTransformation()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CachedBatchTransformation()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3__ctor_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3__ctor_System_Int32_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.#ctor(System.Int32)">CachedBatchTransformation(Int32)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CachedBatchTransformation(int batchSize)
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
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">batchSize</span></td>
        <td><p>The size of each batch</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3__ctor_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3__ctor_System_Int32_System_Func__0___System_Collections_Generic_ICollection__2___1____" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.#ctor(System.Int32,System.Func{`0[],System.Collections.Generic.ICollection{`2},`1[]})">CachedBatchTransformation(Int32, Func&lt;TInput[], ICollection&lt;TCache&gt;, TOutput[]&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CachedBatchTransformation(int batchSize, Func<TInput[], ICollection<TCache>, TOutput[]> batchTransformationFunc)
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
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">batchSize</span></td>
        <td><p>The size of each batch</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Func</span>&lt;TInput[], <span class="xref">System.Collections.Generic.ICollection</span>&lt;TCache&gt;, TOutput[]&gt;</td>
        <td><span class="parametername">batchTransformationFunc</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.transformations/cachedbatchtransformation-3#ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_BatchTransformationFunc">BatchTransformationFunc</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_BatchTransformationFunc_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.BatchTransformationFunc*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_BatchTransformationFunc" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.BatchTransformationFunc">BatchTransformationFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput[], ICollection<TCache>, TOutput[]> BatchTransformationFunc { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;TInput[], <span class="xref">System.Collections.Generic.ICollection</span>&lt;TCache&gt;, TOutput[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_CacheManager_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.CacheManager*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_CacheManager" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.CacheManager">CacheManager</h4>
  <div class="markdown level1 summary"><p>The CacheManager to use when caching data</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICacheManager<TInput, TCache> CacheManager { get; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/icachemanager-2">ICacheManager</a>&lt;TInput, TCache&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_FillCacheAfterTranformation_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.FillCacheAfterTranformation*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_FillCacheAfterTranformation" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.FillCacheAfterTranformation">FillCacheAfterTranformation</h4>
  <div class="markdown level1 summary"><p>If set to true, the incoming row will be added to the cache after the
transformation func has been invoked.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool FillCacheAfterTranformation { get; set; }
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
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_MaxCacheSize_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.MaxCacheSize*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_MaxCacheSize" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.MaxCacheSize">MaxCacheSize</h4>
  <div class="markdown level1 summary"><p>The maximum amount of previously records to store</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int MaxCacheSize { get; set; }
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
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_TaskName_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_TaskName" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
  <div><span class="xref">ETLBox.DataFlow.Transformations.BatchTransformation&lt;TInput, TOutput&gt;.TaskName</span></div>
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_CheckParameter_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_CheckParameter" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.Transformations.BatchTransformation&lt;TInput, TOutput&gt;.CheckParameter()</span></div>
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_InvokeBatchTransformationFunc_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.InvokeBatchTransformationFunc*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_InvokeBatchTransformationFunc__0___" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.InvokeBatchTransformationFunc(`0[])">InvokeBatchTransformationFunc(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override TOutput[] InvokeBatchTransformationFunc(TInput[] batch)
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
        <td><span class="parametername">batch</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TOutput[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.Transformations.BatchTransformation&lt;TInput, TOutput&gt;.InvokeBatchTransformationFunc(TInput[])</span></div>
  <a id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_InvokeInitActionOnce_" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.InvokeInitActionOnce*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CachedBatchTransformation_3_InvokeInitActionOnce" data-uid="ETLBox.DataFlow.Transformations.CachedBatchTransformation`3.InvokeInitActionOnce">InvokeInitActionOnce()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InvokeInitActionOnce()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.Transformations.BatchTransformation&lt;TInput, TOutput&gt;.InvokeInitActionOnce()</span></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowtransformation-2">IDataFlowTransformation&lt;TInput, TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a>
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

{{< /rawhtml >}}
