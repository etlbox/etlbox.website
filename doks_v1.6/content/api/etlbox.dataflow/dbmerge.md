---
title: "DbMerge"
description: "Details for Class DbMerge (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10148
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.DbMerge">
  <h1 id="ETLBox_DataFlow_DbMerge" data-uid="ETLBox.DataFlow.DbMerge" class="text-break">Class DbMerge
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow/dbmerge-1">DbMerge</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div class="level6"><span class="xref">DbMerge</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idataflowtransformation-2">IDataFlowTransformation</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowbatchdestination-1">IDataFlowBatchDestination</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowbatchdestination">IDataFlowBatchDestination</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_SourceBlock">DbMerge&lt;ExpandoObject&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_TargetBlock">DbMerge&lt;ExpandoObject&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_MergeMode">DbMerge&lt;ExpandoObject&gt;.MergeMode</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_DestinationTableDefinition">DbMerge&lt;ExpandoObject&gt;.DestinationTableDefinition</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_ColumnMapping">DbMerge&lt;ExpandoObject&gt;.ColumnMapping</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_IgnoreDefaultColumnsOnInsert">DbMerge&lt;ExpandoObject&gt;.IgnoreDefaultColumnsOnInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_TableName">DbMerge&lt;ExpandoObject&gt;.TableName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_IdColumns">DbMerge&lt;ExpandoObject&gt;.IdColumns</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_CompareColumns">DbMerge&lt;ExpandoObject&gt;.CompareColumns</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_CompareFunc">DbMerge&lt;ExpandoObject&gt;.CompareFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_UpdateColumns">DbMerge&lt;ExpandoObject&gt;.UpdateColumns</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_DeleteColumns">DbMerge&lt;ExpandoObject&gt;.DeleteColumns</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_UseTruncateMethod">DbMerge&lt;ExpandoObject&gt;.UseTruncateMethod</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_BatchSize">DbMerge&lt;ExpandoObject&gt;.BatchSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_CacheMode">DbMerge&lt;ExpandoObject&gt;.CacheMode</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_MaxCacheSize">DbMerge&lt;ExpandoObject&gt;.MaxCacheSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_EvictionPolicy">DbMerge&lt;ExpandoObject&gt;.EvictionPolicy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_FindDuplicates">DbMerge&lt;ExpandoObject&gt;.FindDuplicates</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_ValueGeneratedColumns">DbMerge&lt;ExpandoObject&gt;.ValueGeneratedColumns</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_ColumnConverters">DbMerge&lt;ExpandoObject&gt;.ColumnConverters</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_AllowIdentityInsert">DbMerge&lt;ExpandoObject&gt;.AllowIdentityInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_ConnectionManager">DbMerge&lt;ExpandoObject&gt;.ConnectionManager</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_Reset">DbMerge&lt;ExpandoObject&gt;.Reset()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_PrepareParameterForCheck">DbMerge&lt;ExpandoObject&gt;.PrepareParameterForCheck()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_CheckParameter">DbMerge&lt;ExpandoObject&gt;.CheckParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_InitComponent">DbMerge&lt;ExpandoObject&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_CheckParameterAfterInternalFlowCreation">DbMerge&lt;ExpandoObject&gt;.CheckParameterAfterInternalFlowCreation()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_CleanUpOnSuccess">DbMerge&lt;ExpandoObject&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_CleanUpOnFaulted_System_Exception_">DbMerge&lt;ExpandoObject&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dbmerge-1#ETLBox_DataFlow_DbMerge_1_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DbMerge&lt;ExpandoObject&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2#ETLBox_DataFlow_DataFlowTransformation_2_TargetBlock">DataFlowTransformation&lt;ExpandoObject, ExpandoObject&gt;.TargetBlock</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitCheckedParameter">DataFlowComponent.InitCheckedParameter()</a>
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
  <h5 id="ETLBox_DataFlow_DbMerge_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class DbMerge : DbMerge<ExpandoObject>, IDataFlowTransformation<ExpandoObject, ExpandoObject>, IDataFlowSource<ExpandoObject>, IDataFlowSource, IDataFlowBatchDestination<ExpandoObject>, IDataFlowDestination<ExpandoObject>, IDataFlowBatchDestination, IDataFlowDestination, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_DbMerge__ctor_" data-uid="ETLBox.DataFlow.DbMerge.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_DbMerge__ctor" data-uid="ETLBox.DataFlow.DbMerge.#ctor">DbMerge()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbMerge()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DbMerge__ctor_" data-uid="ETLBox.DataFlow.DbMerge.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_DbMerge__ctor_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.DataFlow.DbMerge.#ctor(ETLBox.IConnectionManager,System.String)">DbMerge(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbMerge(IConnectionManager connectionManager, string tableName)
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DbMerge__ctor_" data-uid="ETLBox.DataFlow.DbMerge.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_DbMerge__ctor_ETLBox_IConnectionManager_System_String_System_Int32_" data-uid="ETLBox.DataFlow.DbMerge.#ctor(ETLBox.IConnectionManager,System.String,System.Int32)">DbMerge(IConnectionManager, string, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbMerge(IConnectionManager connectionManager, string tableName, int batchSize)
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">batchSize</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DbMerge__ctor_" data-uid="ETLBox.DataFlow.DbMerge.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_DbMerge__ctor_System_String_" data-uid="ETLBox.DataFlow.DbMerge.#ctor(System.String)">DbMerge(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbMerge(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DbMerge__ctor_" data-uid="ETLBox.DataFlow.DbMerge.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_DbMerge__ctor_System_String_System_Int32_" data-uid="ETLBox.DataFlow.DbMerge.#ctor(System.String,System.Int32)">DbMerge(string, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbMerge(string tableName, int batchSize)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">batchSize</span></td>
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
      <a class="xref" href="/api/etlbox/idataflowbatchdestination-1">IDataFlowBatchDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowbatchdestination">IDataFlowBatchDestination</a>
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
