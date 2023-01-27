---
title: "TextSource<TOutput>"
description: "Details for Class TextSource<TOutput> (ETLBox.DataFlow.Connectors)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.connectors"
weight: 10142
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Connectors.TextSource`1">
  <h1 id="ETLBox_DataFlow_Connectors_TextSource_1" data-uid="ETLBox.DataFlow.Connectors.TextSource`1" class="text-break">Class TextSource&lt;TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1">DataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div class="level5"><a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1">DataFlowStreamSource</a>&lt;TOutput&gt;</div>
    <div class="level6"><span class="xref">TextSource&lt;TOutput&gt;</span></div>
      <div class="level7"><a class="xref" href="/api/etlbox.dataflow.connectors/textsource">TextSource</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource-1">IDataFlowStreamSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource">IDataFlowExecutableSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource">IDataFlowStreamSource</a></div>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_Uri">DataFlowStreamSource&lt;TOutput&gt;.Uri</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_UnparsedDataBuilder">DataFlowStreamSource&lt;TOutput&gt;.UnparsedDataBuilder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_PrepareParameter">DataFlowStreamSource&lt;TOutput&gt;.PrepareParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowstreamsource-1#ETLBox_DataFlow_DataFlowStreamSource_1_OnExecutionDoSynchronousWork">DataFlowStreamSource&lt;TOutput&gt;.OnExecutionDoSynchronousWork()</a>
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
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Connectors_TextSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class TextSource<TOutput> : DataFlowStreamSource<TOutput>, IDataFlowLogging, IDataFlowStreamSource<TOutput>, IDataFlowExecutableSource<TOutput>, IDataFlowExecutableSource, IDataFlowStreamSource, ILoggableTask, IDataFlowSource<TOutput>, IDataFlowSource, IDataFlowComponent
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
        <td><p>Type of outgoing data.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Connectors_TextSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1__ctor" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.#ctor">TextSource()</h4>
  <div class="markdown level1 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TextSource()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Connectors_TextSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1__ctor_System_String_System_Func_System_String_System_Int32__0__" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.#ctor(System.String,System.Func{System.String,System.Int32,`0})">TextSource(String, Func&lt;String, Int32, TOutput&gt;)</h4>
  <div class="markdown level1 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TextSource(string uri, Func<string, int, TOutput> parseLineFunc)
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
        <td><span class="parametername">uri</span></td>
        <td><p>The source of the file. This can be a filename or a web url.<span class="xref">System.Uri</span></p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Func</span>&lt;<span class="xref">System.String</span>, <span class="xref">System.Int32</span>, TOutput&gt;</td>
        <td><span class="parametername">parseLineFunc</span></td>
        <td><p><a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_TextSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1__ctor_System_String_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.#ctor(System.String)">TextSource(String)</h4>
  <div class="markdown level1 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TextSource(string uri)
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
        <td><span class="parametername">uri</span></td>
        <td><p>The source of the file. This can be a filename or a web url.<span class="xref">System.Uri</span></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.ParseLineFunc*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.ParseLineFunc">ParseLineFunc</h4>
  <div class="markdown level1 summary"><p>This Function is called for every line in the source document.
The input is the current read line as as string and the current progress count.
The return value is the new row that is send into the connected components.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<string, int, TOutput> ParseLineFunc { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;<span class="xref">System.String</span>, <span class="xref">System.Int32</span>, TOutput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_TextSource_1_TaskName_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1_TaskName" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_Connectors_TextSource_1_CheckParameter_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1_CheckParameter" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamSource&lt;TOutput&gt;.CheckParameter()</span></div>
  <a id="ETLBox_DataFlow_Connectors_TextSource_1_CloseReader_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.CloseReader*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1_CloseReader" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.CloseReader">CloseReader()</h4>
  <div class="markdown level1 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CloseReader()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamSource&lt;TOutput&gt;.CloseReader()</span></div>
  <a id="ETLBox_DataFlow_Connectors_TextSource_1_InitReader_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.InitReader*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1_InitReader" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.InitReader">InitReader()</h4>
  <div class="markdown level1 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitReader()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamSource&lt;TOutput&gt;.InitReader()</span></div>
  <a id="ETLBox_DataFlow_Connectors_TextSource_1_ReadAllRecords_" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.ReadAllRecords*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_TextSource_1_ReadAllRecords" data-uid="ETLBox.DataFlow.Connectors.TextSource`1.ReadAllRecords">ReadAllRecords()</h4>
  <div class="markdown level1 summary"><p>Reads data from a text file.
Each line is read as a string and converted into an object by the <a class="xref" href="/api/etlbox.dataflow.connectors/textsource-1#ETLBox_DataFlow_Connectors_TextSource_1_ParseLineFunc">ParseLineFunc</a>.
A line is defined as a sequence of characters followed by a line feed(&quot;\n&quot;), a carriage return (&quot;\r&quot;),
or a carriage return immediately followed by a line feed(&quot;\r\n&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void ReadAllRecords()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowStreamSource&lt;TOutput&gt;.ReadAllRecords()</span></div>
  <h3 id="implements">Implements</h3>
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
      <a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource">IDataFlowExecutableSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamsource">IDataFlowStreamSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
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

{{< /rawhtml >}}
