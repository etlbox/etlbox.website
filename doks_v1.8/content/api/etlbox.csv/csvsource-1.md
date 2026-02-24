---
title: "CsvSource<TOutput>"
description: "Details for Class CsvSource<TOutput> (ETLBox.Csv)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.csv"
weight: 10086
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Csv.CsvSource`1">
  <h1 id="ETLBox_Csv_CsvSource_1" data-uid="ETLBox.Csv.CsvSource`1" class="text-break">Class CsvSource&lt;TOutput&gt;</h1>
  <div class="markdown level0 summary"><p>Reads data from a csv source. While reading the data from the file, data is also asnychronously posted into the targets.
Data is read a as string from the source and dynamically converted into the corresponding data format.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1">DataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1">DataFlowStreamSource</a>&lt;TOutput&gt;</div>
    <div class="level6"><span class="xref">CsvSource&lt;TOutput&gt;</span></div>
      <div class="level7"><a class="xref" href="/api/etlbox.csv/csvsource">CsvSource</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idataflowstreamsource-1">IDataFlowStreamSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowstreamsource">IDataFlowStreamSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_Uri">DataFlowStreamSource&lt;TOutput&gt;.Uri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_Folder">DataFlowStreamSource&lt;TOutput&gt;.Folder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_GetNextUri">DataFlowStreamSource&lt;TOutput&gt;.GetNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HasNextUri">DataFlowStreamSource&lt;TOutput&gt;.HasNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_ResourceType">DataFlowStreamSource&lt;TOutput&gt;.ResourceType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HttpClient">DataFlowStreamSource&lt;TOutput&gt;.HttpClient</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HttpRequestMessage">DataFlowStreamSource&lt;TOutput&gt;.HttpRequestMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HttpResponseMessage">DataFlowStreamSource&lt;TOutput&gt;.HttpResponseMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_Encoding">DataFlowStreamSource&lt;TOutput&gt;.Encoding</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedData">DataFlowStreamSource&lt;TOutput&gt;.UnparsedData</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CollectUnparsedData">DataFlowStreamSource&lt;TOutput&gt;.CollectUnparsedData</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CreateStreamReader">DataFlowStreamSource&lt;TOutput&gt;.CreateStreamReader</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_AzureBlobStorage">DataFlowStreamSource&lt;TOutput&gt;.AzureBlobStorage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_SkipRows">DataFlowStreamSource&lt;TOutput&gt;.SkipRows</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_RequestUri">DataFlowStreamSource&lt;TOutput&gt;.RequestUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_StreamReader">DataFlowStreamSource&lt;TOutput&gt;.StreamReader</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_RowModificationAction">DataFlowStreamSource&lt;TOutput&gt;.RowModificationAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_UseMulitpartContent">DataFlowStreamSource&lt;TOutput&gt;.UseMulitpartContent</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedDataBuilder">DataFlowStreamSource&lt;TOutput&gt;.UnparsedDataBuilder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_PrepareParameterForCheck">DataFlowStreamSource&lt;TOutput&gt;.PrepareParameterForCheck()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_OnExecutionDoAsyncWork">DataFlowStreamSource&lt;TOutput&gt;.OnExecutionDoAsyncWork()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CleanUpOnSuccess">DataFlowStreamSource&lt;TOutput&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CleanUpOnFaulted_System_Exception_">DataFlowStreamSource&lt;TOutput&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_NewMetaDataObject">DataFlowStreamSource&lt;TOutput&gt;.NewMetaDataObject</a>
    </div>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync">DataFlowExecutableSource&lt;TOutput&gt;.ExecuteAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;TOutput&gt;.ExecuteAsync(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_StartAsync_System_Nullable_System_Threading_CancellationToken__">DataFlowExecutableSource&lt;TOutput&gt;.StartAsync(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_AddComplementVoidLinkToOtherTargets_System_Func_System_Type_ETLBox_IDataFlowDestination__System_Delegate_">DataFlowComponent.AddComplementVoidLinkToOtherTargets(Func&lt;Type, IDataFlowDestination&gt;, Delegate)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Csv</h6>
  <h6><strong>Assembly</strong>: ETLBox.Csv.dll</h6>
  <h5 id="ETLBox_Csv_CsvSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class CsvSource<TOutput> : DataFlowStreamSource<TOutput>, IDataFlowStreamSource<TOutput>, IDataFlowExecutableSource<TOutput>, IDataFlowSource<TOutput>, IDataFlowStreamSource, IDataFlowExecutableSource, IDataFlowSource, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">TOutput</span></td>
        <td><p>Type of outgoing data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Csv_CsvSource_1_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">CsvSource&lt;CSVData&gt; source = new CsvSource&lt;CSVData&gt;("Demo.csv");
source.Configuration.Delimiter = ";";</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Csv_CsvSource_1__ctor_" data-uid="ETLBox.Csv.CsvSource`1.#ctor*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1__ctor" data-uid="ETLBox.Csv.CsvSource`1.#ctor">CsvSource()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CsvSource()
```

{{< rawhtml >}}
  <a id="ETLBox_Csv_CsvSource_1__ctor_" data-uid="ETLBox.Csv.CsvSource`1.#ctor*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1__ctor_System_String_" data-uid="ETLBox.Csv.CsvSource`1.#ctor(System.String)">CsvSource(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CsvSource(string uri)
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
        <td><span class="parametername">uri</span></td>
        <td><p>The source csv file name or uri</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Csv_CsvSource_1__ctor_" data-uid="ETLBox.Csv.CsvSource`1.#ctor*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1__ctor_System_String_ETLBox_ResourceType_" data-uid="ETLBox.Csv.CsvSource`1.#ctor(System.String,ETLBox.ResourceType)">CsvSource(string, ResourceType)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CsvSource(string uri, ResourceType resourceType)
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
        <td><span class="parametername">uri</span></td>
        <td><p>The source csv file name or uri</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox/resourcetype">ResourceType</a></td>
        <td><span class="parametername">resourceType</span></td>
        <td><p>Specifies if data is loaded from a file, a web endpoint or other storage types (e.g. Azure Blob Storage)</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Csv_CsvSource_1_BadDataException_" data-uid="ETLBox.Csv.CsvSource`1.BadDataException*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_BadDataException" data-uid="ETLBox.Csv.CsvSource`1.BadDataException">BadDataException</h4>
  <div class="markdown level1 summary"><p>If the current processed row contains bad data, this exception will be set with details about the bad data.
If the <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_RowModificationAction">RowModificationAction</a> sets this exception to null,
then the bad data exception will be ignore and the data will be processed as usual.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ETLBoxException BadDataException { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox/etlboxexception">ETLBoxException</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Csv_CsvSource_1_Configuration_" data-uid="ETLBox.Csv.CsvSource`1.Configuration*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_Configuration" data-uid="ETLBox.Csv.CsvSource`1.Configuration">Configuration</h4>
  <div class="markdown level1 summary"><p>The CsvHelper Configuration.
E.g. you can change the delimiter or the escape character here.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CsvConfiguration Configuration { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">CsvConfiguration</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Csv_CsvSource_1_CsvContext_" data-uid="ETLBox.Csv.CsvSource`1.CsvContext*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_CsvContext" data-uid="ETLBox.Csv.CsvSource`1.CsvContext">CsvContext</h4>
  <div class="markdown level1 summary"><p>Gives you access to the CsvHelper CsvContext.
You can modify the context before data is read.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<CsvContext> CsvContext { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<span class="xref">CsvContext</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Csv_CsvSource_1_FieldHeaders_" data-uid="ETLBox.Csv.CsvSource`1.FieldHeaders*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_FieldHeaders" data-uid="ETLBox.Csv.CsvSource`1.FieldHeaders">FieldHeaders</h4>
  <div class="markdown level1 summary"><p>The parsed header names from the csv</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string[] FieldHeaders { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Csv_CsvSource_1_CheckParameter_" data-uid="ETLBox.Csv.CsvSource`1.CheckParameter*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_CheckParameter" data-uid="ETLBox.Csv.CsvSource`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CheckParameter">DataFlowStreamSource&lt;TOutput&gt;.CheckParameter()</a></div>
  <a id="ETLBox_Csv_CsvSource_1_CloseReader_" data-uid="ETLBox.Csv.CsvSource`1.CloseReader*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_CloseReader" data-uid="ETLBox.Csv.CsvSource`1.CloseReader">CloseReader()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CloseReader()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CloseReader">DataFlowStreamSource&lt;TOutput&gt;.CloseReader()</a></div>
  <a id="ETLBox_Csv_CsvSource_1_InitReader_" data-uid="ETLBox.Csv.CsvSource`1.InitReader*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_InitReader" data-uid="ETLBox.Csv.CsvSource`1.InitReader">InitReader()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitReader()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_InitReader">DataFlowStreamSource&lt;TOutput&gt;.InitReader()</a></div>
  <a id="ETLBox_Csv_CsvSource_1_ReadAllRecords_" data-uid="ETLBox.Csv.CsvSource`1.ReadAllRecords*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_ReadAllRecords" data-uid="ETLBox.Csv.CsvSource`1.ReadAllRecords">ReadAllRecords()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void ReadAllRecords()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_ReadAllRecords">DataFlowStreamSource&lt;TOutput&gt;.ReadAllRecords()</a></div>
  <a id="ETLBox_Csv_CsvSource_1_ReadFieldHeaders_" data-uid="ETLBox.Csv.CsvSource`1.ReadFieldHeaders*"></a>
  <h4 id="ETLBox_Csv_CsvSource_1_ReadFieldHeaders_System_String_" data-uid="ETLBox.Csv.CsvSource`1.ReadFieldHeaders(System.String)">ReadFieldHeaders(string)</h4>
  <div class="markdown level1 summary"><p>Reads the header names using the current configuration.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string[] ReadFieldHeaders(string uri = null)
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
        <td><span class="parametername">uri</span></td>
        <td><p>Optionally you can override the current configured Uri</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>[]</td>
        <td><p>An array with the header names</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource-1">IDataFlowStreamSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource">IDataFlowStreamSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
