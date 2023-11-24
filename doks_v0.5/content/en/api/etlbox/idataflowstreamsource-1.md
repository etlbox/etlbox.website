---
title: "IDataFlowStreamSource<TOutput>"
description: "Details for Interface IDataFlowStreamSource<TOutput> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10216
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowStreamSource`1">
  <h1 id="ETLBox_IDataFlowStreamSource_1" data-uid="ETLBox.IDataFlowStreamSource`1" class="text-break">Interface IDataFlowStreamSource&lt;TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>Implemented by data flow sources that allow reading data from a stream source</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1#ETLBox_IDataFlowSource_1_SourceBlock">IDataFlowSource&lt;TOutput&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1#ETLBox_IDataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1#ETLBox_IDataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1#ETLBox_IDataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1#ETLBox_IDataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1#ETLBox_IDataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1#ETLBox_IDataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1#ETLBox_IDataFlowSource_1_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">IDataFlowSource&lt;TOutput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_Uri">IDataFlowStreamSource.Uri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_GetNextUri">IDataFlowStreamSource.GetNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_HasNextUri">IDataFlowStreamSource.HasNextUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_ResourceType">IDataFlowStreamSource.ResourceType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_HttpClient">IDataFlowStreamSource.HttpClient</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_HttpRequestMessage">IDataFlowStreamSource.HttpRequestMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_HttpResponseMessage">IDataFlowStreamSource.HttpResponseMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_CreateStreamReader">IDataFlowStreamSource.CreateStreamReader</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_Encoding">IDataFlowStreamSource.Encoding</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_UnparsedData">IDataFlowStreamSource.UnparsedData</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_CollectUnparsedData">IDataFlowStreamSource.CollectUnparsedData</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_AzureBlobStorage">IDataFlowStreamSource.AzureBlobStorage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_SkipRows">IDataFlowStreamSource.SkipRows</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_RequestUri">IDataFlowStreamSource.RequestUri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamsource#ETLBox_IDataFlowStreamSource_StreamReader">IDataFlowStreamSource.StreamReader</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Execute">IDataFlowExecutableSource.Execute()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Execute_System_Threading_CancellationToken_">IDataFlowExecutableSource.Execute(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Post">IDataFlowExecutableSource.Post()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Post_System_Threading_CancellationToken_">IDataFlowExecutableSource.Post(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_ExecuteAsync">IDataFlowExecutableSource.ExecuteAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_ExecuteAsync_System_Threading_CancellationToken_">IDataFlowExecutableSource.ExecuteAsync(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Limit">IDataFlowExecutableSource.Limit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Completion">IDataFlowComponent.Completion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_OnCompletion">IDataFlowComponent.OnCompletion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Exception">IDataFlowComponent.Exception</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_MaxBufferSize">IDataFlowComponent.MaxBufferSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Predecessors">IDataFlowComponent.Predecessors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_ErrorSource">IDataFlowComponent.ErrorSource</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Successors">IDataFlowComponent.Successors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_IsReadyForProcessing">IDataFlowComponent.IsReadyForProcessing</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_TaskName">ILoggableTask.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_TaskType">ILoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_TaskHash">ILoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_DisableLogging">ILoggableTask.DisableLogging</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDataFlowStreamSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowStreamSource<TOutput> : IDataFlowExecutableSource<TOutput>, IDataFlowSource<TOutput>, IDataFlowStreamSource, IDataFlowExecutableSource, IDataFlowSource, IDataFlowComponent, ILoggableTask
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowStreamSource_1_RowModificationAction_" data-uid="ETLBox.IDataFlowStreamSource`1.RowModificationAction*"></a>
  <h4 id="ETLBox_IDataFlowStreamSource_1_RowModificationAction" data-uid="ETLBox.IDataFlowStreamSource`1.RowModificationAction">RowModificationAction</h4>
  <div class="markdown level1 summary"><p>Allows you to modify a record directly after it is read from the source and before it is send to the next component.
While processing of data in other components can happen asynchronously, the execution of this action is synchronous
and always occurs after each record was read and before a new record is read.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Action<TOutput, StreamMetaData> RowModificationAction { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-2">Action</a>&lt;TOutput, <a class="xref" href="ETLBox.DataFlow.StreamMetaData.html">StreamMetaData</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
