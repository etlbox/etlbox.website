---
title: "IDataFlowComponent"
description: "Details for Interface IDataFlowComponent (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10185
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowComponent">
  <h1 id="ETLBox_IDataFlowComponent" data-uid="ETLBox.IDataFlowComponent" class="text-break">Interface IDataFlowComponent
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDataFlowComponent_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowComponent
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowComponent_Completion_" data-uid="ETLBox.IDataFlowComponent.Completion*"></a>
  <h4 id="ETLBox_IDataFlowComponent_Completion" data-uid="ETLBox.IDataFlowComponent.Completion">Completion</h4>
  <div class="markdown level1 summary"><p>The completion task of the component. A component is completed when all predecessors (if any) are
completed and the current component has completed its buffer.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Task Completion { get; }
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
        <td><span class="xref">System.Threading.Tasks.Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_ErrorSource_" data-uid="ETLBox.IDataFlowComponent.ErrorSource*"></a>
  <h4 id="ETLBox_IDataFlowComponent_ErrorSource" data-uid="ETLBox.IDataFlowComponent.ErrorSource">ErrorSource</h4>
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
  <a id="ETLBox_IDataFlowComponent_Exception_" data-uid="ETLBox.IDataFlowComponent.Exception*"></a>
  <h4 id="ETLBox_IDataFlowComponent_Exception" data-uid="ETLBox.IDataFlowComponent.Exception">Exception</h4>
  <div class="markdown level1 summary"><p>If a component encountered an exception or entered a fault state because another component
in the data flow faulted, the thrown exception will be stored in this property.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Exception Exception { get; }
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
        <td><span class="xref">System.Exception</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_IsReadyForProcessing_" data-uid="ETLBox.IDataFlowComponent.IsReadyForProcessing*"></a>
  <h4 id="ETLBox_IDataFlowComponent_IsReadyForProcessing" data-uid="ETLBox.IDataFlowComponent.IsReadyForProcessing">IsReadyForProcessing</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool IsReadyForProcessing { get; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_MaxBufferSize_" data-uid="ETLBox.IDataFlowComponent.MaxBufferSize*"></a>
  <h4 id="ETLBox_IDataFlowComponent_MaxBufferSize" data-uid="ETLBox.IDataFlowComponent.MaxBufferSize">MaxBufferSize</h4>
  <div class="markdown level1 summary"><p>Each component can have one or more buffers to improve throughput and allow faster processing of data.
Set this value to restrict the number of rows that can be stored in the buffer.
The default value is -1 (unlimited)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int MaxBufferSize { get; set; }
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_OnCompletion_" data-uid="ETLBox.IDataFlowComponent.OnCompletion*"></a>
  <h4 id="ETLBox_IDataFlowComponent_OnCompletion" data-uid="ETLBox.IDataFlowComponent.OnCompletion">OnCompletion</h4>
  <div class="markdown level1 summary"><p>When a component has completed and processed all rows, the OnCompletion action is executed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Action OnCompletion { get; set; }
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
        <td><span class="xref">System.Action</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_Predecessors_" data-uid="ETLBox.IDataFlowComponent.Predecessors*"></a>
  <h4 id="ETLBox_IDataFlowComponent_Predecessors" data-uid="ETLBox.IDataFlowComponent.Predecessors">Predecessors</h4>
  <div class="markdown level1 summary"><p>All predecessors that are linked to this component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    List<DataFlowComponent> Predecessors { get; }
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
  <a id="ETLBox_IDataFlowComponent_Successors_" data-uid="ETLBox.IDataFlowComponent.Successors*"></a>
  <h4 id="ETLBox_IDataFlowComponent_Successors" data-uid="ETLBox.IDataFlowComponent.Successors">Successors</h4>
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
