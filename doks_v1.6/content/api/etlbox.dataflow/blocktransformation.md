---
title: "BlockTransformation"
description: "Details for Class BlockTransformation (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10105
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.BlockTransformation">
  <h1 id="ETLBox_DataFlow_BlockTransformation" data-uid="ETLBox.DataFlow.BlockTransformation" class="text-break">Class BlockTransformation
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
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow/batchtransformation-2">BatchTransformation</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div class="level6"><a class="xref" href="/api/etlbox.dataflow/blocktransformation-2">BlockTransformation</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div class="level7"><a class="xref" href="/api/etlbox.dataflow/blocktransformation-1">BlockTransformation</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div class="level8"><span class="xref">BlockTransformation</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idataflowtransformation-2">IDataFlowTransformation</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/blocktransformation-2#ETLBox_DataFlow_BlockTransformation_2_BatchSize">BlockTransformation&lt;ExpandoObject, ExpandoObject&gt;.BatchSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/blocktransformation-2#ETLBox_DataFlow_BlockTransformation_2_MaxBufferSize">BlockTransformation&lt;ExpandoObject, ExpandoObject&gt;.MaxBufferSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/blocktransformation-2#ETLBox_DataFlow_BlockTransformation_2_BlockTransformationFunc">BlockTransformation&lt;ExpandoObject, ExpandoObject&gt;.BlockTransformationFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_SourceBlock">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_TargetBlock">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_BatchTransformationFunc">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.BatchTransformationFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_InitAction">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.InitAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_SuppressNullValueFilter">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.SuppressNullValueFilter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_WasInitActionInvoked">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.WasInitActionInvoked</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_Reset">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.Reset()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_CheckParameter">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.CheckParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_CheckAndAdjustBatchSize">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.CheckAndAdjustBatchSize()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_InitComponent">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_CleanUpOnSuccess">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_CleanUpOnFaulted_System_Exception_">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_InvokeInitActionOnce">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.InvokeInitActionOnce()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/batchtransformation-2#ETLBox_DataFlow_BatchTransformation_2_InvokeBatchTransformationFunc__0___">BatchTransformation&lt;ExpandoObject, ExpandoObject&gt;.InvokeBatchTransformationFunc(ExpandoObject[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_SourceBlock">DataFlowSource&lt;ExpandoObject&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo(IDataFlowDestination&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo(IDataFlowDestination&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo(IDataFlowDestination&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;ExpandoObject&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;, Predicate&lt;ExpandoObject&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_MaxBufferSize">DataFlowComponent.MaxBufferSize</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_BufferCancellationSource">DataFlowComponent.BufferCancellationSource</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_BufferCancellationToken">DataFlowComponent.BufferCancellationToken</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_WasComponentInitialized">DataFlowComponent.WasComponentInitialized</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_IsReadyForProcessing">DataFlowComponent.IsReadyForProcessing</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_SetParentComponent_ETLBox_DataFlow_DataFlowComponent_">DataFlowComponent.SetParentComponent(DataFlowComponent)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DataFlowComponent.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_IDataFlowDestination_System_Object_System_Object_">DataFlowComponent.InternalLinkTo&lt;T&gt;(IDataFlowDestination, object, object)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_AddAutomaticVoidLinkToOtherTargets_ETLBox_DataFlow_DataFlowComponent_ETLBox_IDataFlowDestination_">DataFlowComponent.AddAutomaticVoidLinkToOtherTargets(DataFlowComponent, IDataFlowDestination)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ResetComponent">DataFlowComponent.ResetComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Reset">DataFlowComponent.Reset()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameterForCheck">DataFlowComponent.PrepareParameterForCheck()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CheckParameter">DataFlowComponent.CheckParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitCheckedParameter">DataFlowComponent.InitCheckedParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitComponent">DataFlowComponent.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnInitialization">DataFlowComponent.OnInitialization</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnCompletion">DataFlowComponent.OnCompletion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnException">DataFlowComponent.OnException</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DataFlowComponent.InternalLinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ErrorCount">DataFlowComponent.ErrorCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ProgressCount">DataFlowComponent.ProgressCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnProgress">DataFlowComponent.OnProgress</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ExecutionStartTime">DataFlowComponent.ExecutionStartTime</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ExecutionEndTime">DataFlowComponent.ExecutionEndTime</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Tag">DataFlowComponent.Tag</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError">DataFlowComponent.LogProgress_AfterThrowOrRedirectError()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskName">LoggableTask.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogThreshold">LoggableTask.LogThreshold</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInstance">LoggableTask.LogInstance</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_ParentTask">LoggableTask.ParentTask</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogTrace_System_String_System_Object___">LoggableTask.LogTrace(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogDebug_System_String_System_Object___">LoggableTask.LogDebug(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInfo_System_String_System_Object___">LoggableTask.LogInfo(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInfoOrDebug_System_String_System_Object___">LoggableTask.LogInfoOrDebug(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogWarn_System_String_System_Object___">LoggableTask.LogWarn(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogError_System_String_System_Object___">LoggableTask.LogError(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogFatal_System_String_System_Object___">LoggableTask.LogFatal(string, params object[])</a>
    </div>
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
  <h5 id="ETLBox_DataFlow_BlockTransformation_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class BlockTransformation : BlockTransformation<ExpandoObject>, IDataFlowTransformation<ExpandoObject, ExpandoObject>, IDataFlowSource<ExpandoObject>, IDataFlowSource, IDataFlowDestination<ExpandoObject>, IDataFlowDestination, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_BlockTransformation_examples"><strong>Examples</strong></h5>
  <pre>
  <code class="lang-csharp">BlockTransformation&lt;InputType&gt; block = new BlockTransformation&lt;InputType&gt;(
                                                                                                                                                 inputData =&gt; {
                                                                                                                                                     inputData.RemoveRange(1, 2);
                                                                                                                                                     inputData.Add(new InputType() { Value = 1 });
                                                                                                                                                     return inputData;
                                                                                                                                             });</code>
</pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_BlockTransformation__ctor_" data-uid="ETLBox.DataFlow.BlockTransformation.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_BlockTransformation__ctor" data-uid="ETLBox.DataFlow.BlockTransformation.#ctor">BlockTransformation()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BlockTransformation()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_BlockTransformation__ctor_" data-uid="ETLBox.DataFlow.BlockTransformation.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_BlockTransformation__ctor_System_Func_System_Dynamic_ExpandoObject___System_Dynamic_ExpandoObject____" data-uid="ETLBox.DataFlow.BlockTransformation.#ctor(System.Func{System.Dynamic.ExpandoObject[],System.Dynamic.ExpandoObject[]})">BlockTransformation(Func&lt;ExpandoObject[], ExpandoObject[]&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BlockTransformation(Func<ExpandoObject[], ExpandoObject[]> blockTransformationFunc)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>[], <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>[]&gt;</td>
        <td><span class="parametername">blockTransformationFunc</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idataflowtransformation-2">IDataFlowTransformation&lt;TInput, TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
