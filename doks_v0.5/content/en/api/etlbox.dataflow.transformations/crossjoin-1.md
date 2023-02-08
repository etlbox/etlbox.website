---
title: "CrossJoin<TInput>"
description: "Details for Class CrossJoin<TInput> (ETLBox.DataFlow.Transformations)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.transformations"
weight: 10223
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Transformations.CrossJoin`1">
  <h1 id="ETLBox_DataFlow_Transformations_CrossJoin_1" data-uid="ETLBox.DataFlow.Transformations.CrossJoin`1" class="text-break">Class CrossJoin&lt;TInput&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TInput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3">CrossJoin</a>&lt;TInput, TInput, TInput&gt;</div>
    <div class="level5"><span class="xref">CrossJoin&lt;TInput&gt;</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowtransformation-1">IDataFlowTransformation</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_TaskName">CrossJoin&lt;TInput, TInput, TInput&gt;.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_InMemoryTarget">CrossJoin&lt;TInput, TInput, TInput&gt;.InMemoryTarget</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_PassingTarget">CrossJoin&lt;TInput, TInput, TInput&gt;.PassingTarget</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_CrossJoinFunc">CrossJoin&lt;TInput, TInput, TInput&gt;.CrossJoinFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_SourceBlock">CrossJoin&lt;TInput, TInput, TInput&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_CheckParameter">CrossJoin&lt;TInput, TInput, TInput&gt;.CheckParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_InitComponent">CrossJoin&lt;TInput, TInput, TInput&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_CleanUpOnSuccess">CrossJoin&lt;TInput, TInput, TInput&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_CleanUpOnFaulted_System_Exception_">CrossJoin&lt;TInput, TInput, TInput&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/crossjoin-3#ETLBox_DataFlow_Transformations_CrossJoin_3_Buffer">CrossJoin&lt;TInput, TInput, TInput&gt;.Buffer</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_SourceBlock">DataFlowSource&lt;TInput&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowSource&lt;TInput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Transformations</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Transformations_CrossJoin_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class CrossJoin<TInput> : CrossJoin<TInput, TInput, TInput>, ILoggableTask, IDataFlowLogging, IDataFlowTransformation<TInput>, IDataFlowSource<TInput>, IDataFlowSource, IDataFlowDestination, IDataFlowComponent
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Transformations_CrossJoin_1__ctor_" data-uid="ETLBox.DataFlow.Transformations.CrossJoin`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CrossJoin_1__ctor" data-uid="ETLBox.DataFlow.Transformations.CrossJoin`1.#ctor">CrossJoin()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CrossJoin()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Transformations_CrossJoin_1__ctor_" data-uid="ETLBox.DataFlow.Transformations.CrossJoin`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_CrossJoin_1__ctor_System_Func__0__0__0__" data-uid="ETLBox.DataFlow.Transformations.CrossJoin`1.#ctor(System.Func{`0,`0,`0})">CrossJoin(Func&lt;TInput, TInput, TInput&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CrossJoin(Func<TInput, TInput, TInput> crossJoinFunc)
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
        <td><span class="xref">System.Func</span>&lt;TInput, TInput, TInput&gt;</td>
        <td><span class="parametername">crossJoinFunc</span></td>
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
      <a class="xref" href="/api/etlbox.dataflow/idataflowtransformation-1">IDataFlowTransformation&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a>
  </div>

{{< /rawhtml >}}
