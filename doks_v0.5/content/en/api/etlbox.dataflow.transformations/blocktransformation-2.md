---
title: "BlockTransformation<TInput, TOutput>"
description: "Details for Class BlockTransformation<TInput, TOutput> (ETLBox.DataFlow.Transformations)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.transformations"
weight: 10211
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2">
  <h1 id="ETLBox_DataFlow_Transformations_BlockTransformation_2" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2" class="text-break">Class BlockTransformation&lt;TInput, TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>A block transformation will wait for all data from the flow to be loaded into its buffer.
After all data is in the buffer, the transformation function
is executed for the complete data and the result posted into the targets.
The block transformations allows you to access all data in the flow in one generic collection.
But as this block any processing until all data is buffered, it will also need to store the whole data in memory.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;TInput, TOutput&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2">BatchTransformation</a>&lt;TInput, TOutput&gt;</div>
    <div class="level6"><span class="xref">BlockTransformation&lt;TInput, TOutput&gt;</span></div>
      <div class="level7"><a class="xref" href="/api/etlbox.dataflow.transformations/blocktransformation-1">BlockTransformation&lt;TInput&gt;</a></div>
  </div>
  <div class="implements">
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_DataFlow_IDataFlowDestination_System_Object_System_Object_">DataFlowComponent.InternalLinkTo&lt;T&gt;(IDataFlowDestination, object, object)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LinkBuffersRecursively">DataFlowComponent.LinkBuffersRecursively()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameter">DataFlowComponent.PrepareParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CheckParameter">DataFlowComponent.CheckParameter()</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowOrRedirectError_System_Exception_System_String_System_String_">DataFlowComponent.ThrowOrRedirectError(Exception, string, string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowErrorAndFaultNetwork_System_Exception_System_String_">DataFlowComponent.ThrowErrorAndFaultNetwork(Exception, string)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgressBatch_AfterThrowOrRedirectError_System_Int32_">DataFlowComponent.LogProgressBatch_AfterThrowOrRedirectError(int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError_System_Boolean_">DataFlowComponent.LogProgress_AfterThrowOrRedirectError(bool)</a>
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
      <span class="xref">object.Equals(object)</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">object.GetType()</span>
    </div>
    <div>
      <span class="xref">object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">object.ReferenceEquals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Transformations</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Transformations_BlockTransformation_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class BlockTransformation<TInput, TOutput> : BatchTransformation<TInput, TOutput>, ILoggableTask, IDataFlowLogging, IDataFlowTransformation<TInput, TOutput>, IDataFlowSource<TOutput>, IDataFlowSource, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent
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
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Transformations_BlockTransformation_2_examples"><strong>Examples</strong></h5>
  <pre><code>BlockTransformation&lt;InputType> block = new BlockTransformation&lt;InputType>(
    inputData => {
        inputData.RemoveRange(1, 2);
        inputData.Add(new InputType() { Value = 1 });
        return inputData;
});</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Transformations_BlockTransformation_2__ctor_" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_BlockTransformation_2__ctor" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.#ctor">BlockTransformation()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BlockTransformation()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_Transformations_BlockTransformation_2__ctor_examples">Examples</h5>
  <pre><code>BlockTransformation&lt;InputType> block = new BlockTransformation&lt;InputType>(
    inputData => {
        inputData.RemoveRange(1, 2);
        inputData.Add(new InputType() { Value = 1 });
        return inputData;
});</code></pre>
  <a id="ETLBox_DataFlow_Transformations_BlockTransformation_2__ctor_" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_BlockTransformation_2__ctor_System_Func__0____1____" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.#ctor(System.Func{`0[],`1[]})">BlockTransformation(Func&lt;TInput[], TOutput[]&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BlockTransformation(Func<TInput[], TOutput[]> blockTransformationFunc)
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
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;TInput[], TOutput[]&gt;</td>
        <td><span class="parametername">blockTransformationFunc</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.transformations/blocktransformation-2#ETLBox_DataFlow_Transformations_BlockTransformation_2_BlockTransformationFunc">BlockTransformationFunc</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Transformations_BlockTransformation_2_BatchSize_" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.BatchSize*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_BlockTransformation_2_BatchSize" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.BatchSize">BatchSize</h4>
  <div class="markdown level1 summary"><p>The size of each batch that is passed to the <a class="xref" href="/api/etlbox.dataflow.transformations/batchtransformation-2">BatchTransformation&lt;TInput, TOutput&gt;</a>
Default is 1000.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int BatchSize { get; set; }
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.Transformations.BatchTransformation&lt;TInput, TOutput&gt;.BatchSize</span></div>
  <a id="ETLBox_DataFlow_Transformations_BlockTransformation_2_BlockTransformationFunc_" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.BlockTransformationFunc*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_BlockTransformation_2_BlockTransformationFunc" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.BlockTransformationFunc">BlockTransformationFunc</h4>
  <div class="markdown level1 summary"><p>The transformation Func that is executed on the complete input data. It needs
to return an array of output data, which doesn't need have to be the same length
as the input array.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput[], TOutput[]> BlockTransformationFunc { get; set; }
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
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;TInput[], TOutput[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_BlockTransformation_2_MaxBufferSize_" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.MaxBufferSize*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_BlockTransformation_2_MaxBufferSize" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.MaxBufferSize">MaxBufferSize</h4>
  <div class="markdown level1 summary"><p>Each component can have one or more buffers to improve throughput and allow faster processing of data.
Set this value to restrict the number of rows that can be stored in the buffer.
The default value is -1 (unlimited)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int MaxBufferSize { get; set; }
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_MaxBufferSize">DataFlowComponent.MaxBufferSize</a></div>
  <a id="ETLBox_DataFlow_Transformations_BlockTransformation_2_TaskName_" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_BlockTransformation_2_TaskName" data-uid="ETLBox.DataFlow.Transformations.BlockTransformation`2.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.Transformations.BatchTransformation&lt;TInput, TOutput&gt;.TaskName</span></div>
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
