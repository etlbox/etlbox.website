---
title: "LookupTransformation"
description: "Details for Class LookupTransformation (ETLBox.DataFlow.Transformations)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.transformations"
weight: 10224
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation">
  <h1 id="ETLBox_DataFlow_Transformations_LookupTransformation" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation" class="text-break">Class LookupTransformation
  </h1>
  <div class="markdown level0 summary"><p>The lookup transformation enriches the incoming data with data from the lookup source.
Data from the lookup source is read into memory when the first record arrives.
For each incoming row, the lookup tries to find a matching record in the
loaded source data and uses this record to enrich the ingoing data.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>, <span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2">LookupTransformation</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>, <span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div class="level6"><span class="xref">LookupTransformation</span></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowtransformation-2">IDataFlowTransformation</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>, <span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_TaskName">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceRecords">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.SourceRecords</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceRecordsByKey">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.SourceRecordsByKey</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceBlock">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_TargetBlock">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_Source">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.Source</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrievalFunc">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.RetrievalFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrievalByKeyFunc">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.RetrievalByKeyFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_GetSourceRecordKeyFunc">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.GetSourceRecordKeyFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_GetInputRecordKeyFunc">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.GetInputRecordKeyFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_IgnoreDataTypes">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.IgnoreDataTypes</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_MatchColumns">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.MatchColumns</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrieveColumns">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.RetrieveColumns</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_CacheMode">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.CacheMode</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_PartialCacheSettings">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.PartialCacheSettings</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_ProgressCount">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.ProgressCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_PrepareParameter">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.PrepareParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_CheckParameter">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.CheckParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_InitComponent">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_CleanUpOnSuccess">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_CleanUpOnFaulted_System_Exception_">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">LookupTransformation&lt;ExpandoObject, ExpandoObject&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_SourceBlock">DataFlowSource&lt;ExpandoObject&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo(IDataFlowDestination&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo(IDataFlowDestination&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo(IDataFlowDestination&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowSource&lt;ExpandoObject&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Transformations</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Transformations_LookupTransformation_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class LookupTransformation : LookupTransformation<ExpandoObject, ExpandoObject>, ILoggableTask, IDataFlowLogging, IDataFlowTransformation<ExpandoObject, ExpandoObject>, IDataFlowSource<ExpandoObject>, IDataFlowSource, IDataFlowDestination<ExpandoObject>, IDataFlowDestination, IDataFlowComponent
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation__ctor_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation__ctor" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation.#ctor">LookupTransformation()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation__ctor_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation__ctor_ETLBox_DataFlow_IDataFlowExecutableSource_System_Dynamic_ExpandoObject__" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation.#ctor(ETLBox.DataFlow.IDataFlowExecutableSource{System.Dynamic.ExpandoObject})">LookupTransformation(IDataFlowExecutableSource&lt;ExpandoObject&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation(IDataFlowExecutableSource<ExpandoObject> source)
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
        <td><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</td>
        <td><span class="parametername">source</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation__ctor_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation__ctor_ETLBox_DataFlow_IDataFlowExecutableSource_System_Dynamic_ExpandoObject__System_Func_System_Dynamic_ExpandoObject_System_Collections_Generic_ICollection_System_Dynamic_ExpandoObject__System_Dynamic_ExpandoObject__" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation.#ctor(ETLBox.DataFlow.IDataFlowExecutableSource{System.Dynamic.ExpandoObject},System.Func{System.Dynamic.ExpandoObject,System.Collections.Generic.ICollection{System.Dynamic.ExpandoObject},System.Dynamic.ExpandoObject})">LookupTransformation(IDataFlowExecutableSource&lt;ExpandoObject&gt;, Func&lt;ExpandoObject, ICollection&lt;ExpandoObject&gt;, ExpandoObject&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation(IDataFlowExecutableSource<ExpandoObject> source, Func<ExpandoObject, ICollection<ExpandoObject>, ExpandoObject> retrievalFunc)
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
        <td><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;</td>
        <td><span class="parametername">source</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Func</span>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>, <span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.Dynamic.ExpandoObject</span>&gt;, <span class="xref">System.Dynamic.ExpandoObject</span>&gt;</td>
        <td><span class="parametername">retrievalFunc</span></td>
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
