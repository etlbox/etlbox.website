---
title: "IDataFlowBatchDestination<TInput>"
description: "Details for Interface IDataFlowBatchDestination<TInput> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10170
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.IDataFlowBatchDestination`1">
  <h1 id="ETLBox_DataFlow_IDataFlowBatchDestination_1" data-uid="ETLBox.DataFlow.IDataFlowBatchDestination`1" class="text-break">Interface IDataFlowBatchDestination&lt;TInput&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1#ETLBox_DataFlow_IDataFlowDestination_1_TargetBlock">IDataFlowDestination&lt;TInput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowdestination#ETLBox_DataFlow_IDataFlowDestination_Predecessors">IDataFlowDestination.Predecessors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent#ETLBox_DataFlow_IDataFlowComponent_Completion">IDataFlowComponent.Completion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent#ETLBox_DataFlow_IDataFlowComponent_OnCompletion">IDataFlowComponent.OnCompletion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent#ETLBox_DataFlow_IDataFlowComponent_Exception">IDataFlowComponent.Exception</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent#ETLBox_DataFlow_IDataFlowComponent_MaxBufferSize">IDataFlowComponent.MaxBufferSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowbatchdestination#ETLBox_DataFlow_IDataFlowBatchDestination_BatchSize">IDataFlowBatchDestination.BatchSize</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_IDataFlowBatchDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowBatchDestination<TInput> : IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent, IDataFlowBatchDestination
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
        <td><span class="parametername">TInput</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
