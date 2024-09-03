---
title: "IDataFlowBatchDestination"
description: "Details for Interface IDataFlowBatchDestination (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10235
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowBatchDestination">
  <h1 id="ETLBox_IDataFlowBatchDestination" data-uid="ETLBox.IDataFlowBatchDestination" class="text-break">Interface IDataFlowBatchDestination
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
      <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">IDataFlowComponent.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
  <h5 id="ETLBox_IDataFlowBatchDestination_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowBatchDestination : IDataFlowDestination, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowBatchDestination_BatchSize_" data-uid="ETLBox.IDataFlowBatchDestination.BatchSize*"></a>
  <h4 id="ETLBox_IDataFlowBatchDestination_BatchSize" data-uid="ETLBox.IDataFlowBatchDestination.BatchSize">BatchSize</h4>
  <div class="markdown level1 summary"><p>The batch size defines how many records needs to be in the Input buffer before data is written into the destination.
The default batch size is 1000.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int BatchSize { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
