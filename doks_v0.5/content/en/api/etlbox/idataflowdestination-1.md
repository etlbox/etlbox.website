---
title: "IDataFlowDestination<TInput>"
description: "Details for Interface IDataFlowDestination<TInput> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10215
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowDestination`1">
  <h1 id="ETLBox_IDataFlowDestination_1" data-uid="ETLBox.IDataFlowDestination`1" class="text-break">Interface IDataFlowDestination&lt;TInput&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_ParentTask">ILoggableTask.ParentTask</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/iloggabletask#ETLBox_ILoggableTask_LogInstance">ILoggableTask.LogInstance</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDataFlowDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowDestination<TInput> : IDataFlowDestination, IDataFlowComponent, ILoggableTask
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowDestination_1_TargetBlock_" data-uid="ETLBox.IDataFlowDestination`1.TargetBlock*"></a>
  <h4 id="ETLBox_IDataFlowDestination_1_TargetBlock" data-uid="ETLBox.IDataFlowDestination`1.TargetBlock">TargetBlock</h4>
  <div class="markdown level1 summary"><p>TargetBlock from the underlying TPL.Dataflow which is used as output buffer for the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ITargetBlock<TInput> TargetBlock { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.dataflow.itargetblock-1">ITargetBlock</a>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
