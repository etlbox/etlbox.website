---
title: "IDataFlowComponent"
description: "Details for Interface IDataFlowComponent (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10245
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowComponent">
  <h1 id="ETLBox_IDataFlowComponent" data-uid="ETLBox.IDataFlowComponent" class="text-break">Interface IDataFlowComponent
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  <h5 id="ETLBox_IDataFlowComponent_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowComponent : ILoggableTask
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
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
  <table class="table table-bordered table-condensed">
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception">Exception</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_ExecutionEndTime_" data-uid="ETLBox.IDataFlowComponent.ExecutionEndTime*"></a>
  <h4 id="ETLBox_IDataFlowComponent_ExecutionEndTime" data-uid="ETLBox.IDataFlowComponent.ExecutionEndTime">ExecutionEndTime</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    DateTimeOffset? ExecutionEndTime { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.datetimeoffset">DateTimeOffset</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_ExecutionStartTime_" data-uid="ETLBox.IDataFlowComponent.ExecutionStartTime*"></a>
  <h4 id="ETLBox_IDataFlowComponent_ExecutionStartTime" data-uid="ETLBox.IDataFlowComponent.ExecutionStartTime">ExecutionStartTime</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    DateTimeOffset? ExecutionStartTime { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.datetimeoffset">DateTimeOffset</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_IsReadyForProcessing_" data-uid="ETLBox.IDataFlowComponent.IsReadyForProcessing*"></a>
  <h4 id="ETLBox_IDataFlowComponent_IsReadyForProcessing" data-uid="ETLBox.IDataFlowComponent.IsReadyForProcessing">IsReadyForProcessing</h4>
  <div class="markdown level1 summary"><p>Indicates if a component was successfully initialized, linked and prepared for execution.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool IsReadyForProcessing { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_LogThreshold_" data-uid="ETLBox.IDataFlowComponent.LogThreshold*"></a>
  <h4 id="ETLBox_IDataFlowComponent_LogThreshold" data-uid="ETLBox.IDataFlowComponent.LogThreshold">LogThreshold</h4>
  <div class="markdown level1 summary"><p>To avoid getting log message for every message, by default only log message are produced when 1000 rows
are processed. Set this property to decrease or increase this value.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int? LogThreshold { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>?</td>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_OnProgress_" data-uid="ETLBox.IDataFlowComponent.OnProgress*"></a>
  <h4 id="ETLBox_IDataFlowComponent_OnProgress" data-uid="ETLBox.IDataFlowComponent.OnProgress">OnProgress</h4>
  <div class="markdown level1 summary"><p>This delegate is invoked each time the progress counter changes</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Action<int> OnProgress { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>&gt;</td>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_ProgressCount_" data-uid="ETLBox.IDataFlowComponent.ProgressCount*"></a>
  <h4 id="ETLBox_IDataFlowComponent_ProgressCount" data-uid="ETLBox.IDataFlowComponent.ProgressCount">ProgressCount</h4>
  <div class="markdown level1 summary"><p>The amount of rows the current component has already processed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int ProgressCount { get; }
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowComponent_Tag_" data-uid="ETLBox.IDataFlowComponent.Tag*"></a>
  <h4 id="ETLBox_IDataFlowComponent_Tag" data-uid="ETLBox.IDataFlowComponent.Tag">Tag</h4>
  <div class="markdown level1 summary"><p>A tag that can be used to store any object in the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    object Tag { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_IDataFlowComponent_LinkErrorTo_" data-uid="ETLBox.IDataFlowComponent.LinkErrorTo*"></a>
  <h4 id="ETLBox_IDataFlowComponent_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__" data-uid="ETLBox.IDataFlowComponent.LinkErrorTo(ETLBox.IDataFlowDestination{ETLBox.ETLBoxError})">LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</h4>
  <div class="markdown level1 summary"><p>If an error occurs in the component, by default the component will throw an exception and stop execution.
If you use the error linking, any erroneous records will be caught and redirected.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDataFlowSource<ETLBoxError> LinkErrorTo(IDataFlowDestination<ETLBoxError> target)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>The target for erroneous rows.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
