---
title: "ExcelSource"
description: "Details for Class ExcelSource (ETLBox.Excel)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.excel"
weight: 10164
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Excel.ExcelSource">
  <h1 id="ETLBox_Excel_ExcelSource" data-uid="ETLBox.Excel.ExcelSource" class="text-break">Class ExcelSource
</h1>
  <div class="markdown level0 summary"><p>Reads data from a excel source. While reading the data from the file, data is also asnychronously posted into the targets.
You can define a sheet name and a range - only the data in the specified sheet and range is read. Otherwise, all data
in all sheets will be processed.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;<span class="xref">ExpandoObject</span>&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1">DataFlowExecutableSource</a>&lt;<span class="xref">ExpandoObject</span>&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1">DataFlowStreamSource</a>&lt;<span class="xref">ExpandoObject</span>&gt;</div>
    <div class="level6"><a class="xref" href="/api/etlbox.excel/excelsource-1">ExcelSource</a>&lt;<span class="xref">ExpandoObject</span>&gt;</div>
    <div class="level7"><span class="xref">ExcelSource</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowstreamsource-1">IDataFlowStreamSource</a>&lt;<span class="xref">ExpandoObject</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;<span class="xref">ExpandoObject</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;<span class="xref">ExpandoObject</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowstreamsource">IDataFlowStreamSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_TaskName">ExcelSource&lt;ExpandoObject&gt;.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_ExcelFilePassword">ExcelSource&lt;ExpandoObject&gt;.ExcelFilePassword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_Range">ExcelSource&lt;ExpandoObject&gt;.Range</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_SheetName">ExcelSource&lt;ExpandoObject&gt;.SheetName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_IsCaseSensitiveSheetName">ExcelSource&lt;ExpandoObject&gt;.IsCaseSensitiveSheetName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_SheetNumber">ExcelSource&lt;ExpandoObject&gt;.SheetNumber</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_IgnoreBlankRows">ExcelSource&lt;ExpandoObject&gt;.IgnoreBlankRows</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_HasNoHeader">ExcelSource&lt;ExpandoObject&gt;.HasNoHeader</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_ExcelColumns">ExcelSource&lt;ExpandoObject&gt;.ExcelColumns</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_FieldHeaders">ExcelSource&lt;ExpandoObject&gt;.FieldHeaders</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_PrepareParameter">ExcelSource&lt;ExpandoObject&gt;.PrepareParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_CheckParameter">ExcelSource&lt;ExpandoObject&gt;.CheckParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_ReadAllRecords">ExcelSource&lt;ExpandoObject&gt;.ReadAllRecords()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_InitReader">ExcelSource&lt;ExpandoObject&gt;.InitReader()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_CloseReader">ExcelSource&lt;ExpandoObject&gt;.CloseReader()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.excel/excelsource-1#ETLBox_Excel_ExcelSource_1_ReadFieldHeaders_System_String_">ExcelSource&lt;ExpandoObject&gt;.ReadFieldHeaders(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_Uri">DataFlowStreamSource&lt;ExpandoObject&gt;.Uri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_GetNextUri">DataFlowStreamSource&lt;ExpandoObject&gt;.GetNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HasNextUri">DataFlowStreamSource&lt;ExpandoObject&gt;.HasNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_ResourceType">DataFlowStreamSource&lt;ExpandoObject&gt;.ResourceType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HttpClient">DataFlowStreamSource&lt;ExpandoObject&gt;.HttpClient</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HttpRequestMessage">DataFlowStreamSource&lt;ExpandoObject&gt;.HttpRequestMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_HttpResponseMessage">DataFlowStreamSource&lt;ExpandoObject&gt;.HttpResponseMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_Encoding">DataFlowStreamSource&lt;ExpandoObject&gt;.Encoding</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedData">DataFlowStreamSource&lt;ExpandoObject&gt;.UnparsedData</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CollectUnparsedData">DataFlowStreamSource&lt;ExpandoObject&gt;.CollectUnparsedData</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CreateStreamReader">DataFlowStreamSource&lt;ExpandoObject&gt;.CreateStreamReader</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_AzureBlobStorage">DataFlowStreamSource&lt;ExpandoObject&gt;.AzureBlobStorage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_SkipRows">DataFlowStreamSource&lt;ExpandoObject&gt;.SkipRows</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_RequestUri">DataFlowStreamSource&lt;ExpandoObject&gt;.RequestUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_StreamReader">DataFlowStreamSource&lt;ExpandoObject&gt;.StreamReader</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_RowModificationAction">DataFlowStreamSource&lt;ExpandoObject&gt;.RowModificationAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedDataBuilder">DataFlowStreamSource&lt;ExpandoObject&gt;.UnparsedDataBuilder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_OnExecutionDoSynchronousWork">DataFlowStreamSource&lt;ExpandoObject&gt;.OnExecutionDoSynchronousWork()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_OnExecutionDoAsyncWork">DataFlowStreamSource&lt;ExpandoObject&gt;.OnExecutionDoAsyncWork()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CleanUpOnSuccess">DataFlowStreamSource&lt;ExpandoObject&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_CleanUpOnFaulted_System_Exception_">DataFlowStreamSource&lt;ExpandoObject&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_NewMetaDataObject">DataFlowStreamSource&lt;ExpandoObject&gt;.NewMetaDataObject</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Limit">DataFlowExecutableSource&lt;ExpandoObject&gt;.Limit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ProgressCountIsInLimit">DataFlowExecutableSource&lt;ExpandoObject&gt;.ProgressCountIsInLimit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ProgressCountIsExceedingLimit">DataFlowExecutableSource&lt;ExpandoObject&gt;.ProgressCountIsExceedingLimit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_SourceBlock">DataFlowExecutableSource&lt;ExpandoObject&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Buffer">DataFlowExecutableSource&lt;ExpandoObject&gt;.Buffer</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_SourceTask">DataFlowExecutableSource&lt;ExpandoObject&gt;.SourceTask</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_CompleteManually">DataFlowExecutableSource&lt;ExpandoObject&gt;.CompleteManually</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_InitComponent">DataFlowExecutableSource&lt;ExpandoObject&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Execute">DataFlowExecutableSource&lt;ExpandoObject&gt;.Execute()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Execute_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;ExpandoObject&gt;.Execute(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Post">DataFlowExecutableSource&lt;ExpandoObject&gt;.Post()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Post_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;ExpandoObject&gt;.Post(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_InternalPost_System_Nullable_System_Threading_CancellationToken__">DataFlowExecutableSource&lt;ExpandoObject&gt;.InternalPost(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync">DataFlowExecutableSource&lt;ExpandoObject&gt;.ExecuteAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;ExpandoObject&gt;.ExecuteAsync(CancellationToken)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DataFlowSource&lt;ExpandoObject&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_BufferCancellationToken">DataFlowComponent.BufferCancellationToken</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_IsReadyForProcessing">DataFlowComponent.IsReadyForProcessing</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_SetParent_ETLBox_DataFlow_DataFlowComponent_">DataFlowComponent.SetParent(DataFlowComponent)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_IDataFlowDestination_System_Object_System_Object_">DataFlowComponent.InternalLinkTo&lt;T&gt;(IDataFlowDestination, object, object)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LinkBuffersRecursively">DataFlowComponent.LinkBuffersRecursively()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(CancellationToken?)</a>
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
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_CopyLogTaskProperties_ETLBox_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Excel</h6>
  <h6><strong>Assembly</strong>: ETLBox.Excel.dll</h6>
  <h5 id="ETLBox_Excel_ExcelSource_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ExcelSource : ExcelSource<ExpandoObject>, ILoggableTask, IDataFlowLogging, IDataFlowStreamSource<ExpandoObject>, IDataFlowExecutableSource<ExpandoObject>, IDataFlowSource<ExpandoObject>, IDataFlowStreamSource, IDataFlowExecutableSource, IDataFlowSource, IDataFlowComponent
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Excel_ExcelSource__ctor_" data-uid="ETLBox.Excel.ExcelSource.#ctor*"></a>
  <h4 id="ETLBox_Excel_ExcelSource__ctor" data-uid="ETLBox.Excel.ExcelSource.#ctor">ExcelSource()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelSource()
```

{{< rawhtml >}}
  <a id="ETLBox_Excel_ExcelSource__ctor_" data-uid="ETLBox.Excel.ExcelSource.#ctor*"></a>
  <h4 id="ETLBox_Excel_ExcelSource__ctor_System_String_" data-uid="ETLBox.Excel.ExcelSource.#ctor(System.String)">ExcelSource(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelSource(string uri)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">uri</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a>
  </div>
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

{{< /rawhtml >}}