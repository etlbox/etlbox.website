---
title: "IDataFlowBatchDestination<TInput>"
description: "Details for Interface IDataFlowBatchDestination<TInput> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10232
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowBatchDestination`1">
  <h1 id="ETLBox_IDataFlowBatchDestination_1" data-uid="ETLBox.IDataFlowBatchDestination`1" class="text-break">Interface IDataFlowBatchDestination&lt;TInput&gt;</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/idataflowdestination-1#ETLBox_IDataFlowDestination_1_TargetBlock">IDataFlowDestination&lt;TInput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowbatchdestination#ETLBox_IDataFlowBatchDestination_BatchSize">IDataFlowBatchDestination.BatchSize</a>
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
  <h5 id="ETLBox_IDataFlowBatchDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowBatchDestination<TInput> : IDataFlowDestination<TInput>, IDataFlowBatchDestination, IDataFlowDestination, IDataFlowComponent, ILoggableTask
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
        <td><span class="parametername">TInput</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
