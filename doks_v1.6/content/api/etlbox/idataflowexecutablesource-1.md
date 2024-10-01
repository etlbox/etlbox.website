---
title: "IDataFlowExecutableSource<TOutput>"
description: "Details for Interface IDataFlowExecutableSource<TOutput> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10241
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowExecutableSource`1">
  <h1 id="ETLBox_IDataFlowExecutableSource_1" data-uid="ETLBox.IDataFlowExecutableSource`1" class="text-break">Interface IDataFlowExecutableSource&lt;TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>Shared methods for sources that can be executed</p>
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
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Execute">IDataFlowExecutableSource.Execute()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Execute_System_Threading_CancellationToken_">IDataFlowExecutableSource.Execute(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_ExecuteAsync">IDataFlowExecutableSource.ExecuteAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_ExecuteAsync_System_Threading_CancellationToken_">IDataFlowExecutableSource.ExecuteAsync(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_StartAsync_System_Nullable_System_Threading_CancellationToken__">IDataFlowExecutableSource.StartAsync(CancellationToken?)</a>
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
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">IDataFlowComponent.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_ProgressCount">IDataFlowComponent.ProgressCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_OnProgress">IDataFlowComponent.OnProgress</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_LogThreshold">IDataFlowComponent.LogThreshold</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_ExecutionStartTime">IDataFlowComponent.ExecutionStartTime</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_ExecutionEndTime">IDataFlowComponent.ExecutionEndTime</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_Tag">IDataFlowComponent.Tag</a>
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
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_ParentTask">ILoggableTask.ParentTask</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_LogInstance">ILoggableTask.LogInstance</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDataFlowExecutableSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowExecutableSource<TOutput> : IDataFlowSource<TOutput>, IDataFlowExecutableSource, IDataFlowSource, IDataFlowComponent, ILoggableTask
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

{{< /rawhtml >}}
