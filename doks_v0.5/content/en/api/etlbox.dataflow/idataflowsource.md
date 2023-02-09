---
title: "IDataFlowSource"
description: "Details for Interface IDataFlowSource (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10179
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.IDataFlowSource">
  <h1 id="ETLBox_DataFlow_IDataFlowSource" data-uid="ETLBox.DataFlow.IDataFlowSource" class="text-break">Interface IDataFlowSource
</h1>
  <div class="markdown level0 summary"><p>Shared properties of all source components</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_IDataFlowSource_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowSource : IDataFlowComponent
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_IDataFlowSource_ErrorSource_" data-uid="ETLBox.DataFlow.IDataFlowSource.ErrorSource*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowSource_ErrorSource" data-uid="ETLBox.DataFlow.IDataFlowSource.ErrorSource">ErrorSource</h4>
  <div class="markdown level1 summary"><p>The ErrorSource is the source block used for sending errors into the linked error flow.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ErrorSource ErrorSource { get; set; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/errorsource">ErrorSource</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowSource_Successors_" data-uid="ETLBox.DataFlow.IDataFlowSource.Successors*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowSource_Successors" data-uid="ETLBox.DataFlow.IDataFlowSource.Successors">Successors</h4>
  <div class="markdown level1 summary"><p>All successors that this component is linked to.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    List<DataFlowComponent> Successors { get; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
