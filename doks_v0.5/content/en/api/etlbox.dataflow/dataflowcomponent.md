---
title: "DataFlowComponent"
description: "Details for Class DataFlowComponent (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10114
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.DataFlowComponent">
  <h1 id="ETLBox_DataFlow_DataFlowComponent" data-uid="ETLBox.DataFlow.DataFlowComponent" class="text-break">Class DataFlowComponent
</h1>
  <div class="markdown level0 summary"><p>A base class for data flow components</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><span class="xref">DataFlowComponent</span></div>
      <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1">DataFlowDestination&lt;TInput&gt;</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowjointarget-1">DataFlowJoinTarget&lt;TInput&gt;</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource&lt;TOutput&gt;</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskName">LoggableTask.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_CopyLogTaskProperties_ETLBox_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)">object.Equals(object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)">object.Equals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode">object.GetHashCode()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gettype">object.GetType()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_DataFlowComponent_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class DataFlowComponent : LoggableTask, IDataFlowComponent, ILoggableTask, IDataFlowLogging
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ReadyForProcessing" data-uid="ETLBox.DataFlow.DataFlowComponent.ReadyForProcessing">ReadyForProcessing</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected bool ReadyForProcessing
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
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
  <h4 id="ETLBox_DataFlow_DataFlowComponent_WasComponentInitialized" data-uid="ETLBox.DataFlow.DataFlowComponent.WasComponentInitialized">WasComponentInitialized</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected bool WasComponentInitialized
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
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
  <h4 id="ETLBox_DataFlow_DataFlowComponent_WasLinked" data-uid="ETLBox.DataFlow.DataFlowComponent.WasLinked">WasLinked</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected Dictionary<DataFlowComponent, bool> WasLinked
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2">Dictionary</a>&lt;<a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h4 id="ETLBox_DataFlow_DataFlowComponent__loggingThresholdRows" data-uid="ETLBox.DataFlow.DataFlowComponent._loggingThresholdRows">_loggingThresholdRows</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected int? _loggingThresholdRows
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
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
  <h4 id="ETLBox_DataFlow_DataFlowComponent__maxBufferSize" data-uid="ETLBox.DataFlow.DataFlowComponent._maxBufferSize">_maxBufferSize</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected int? _maxBufferSize
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_DataFlowComponent_BufferCancellationToken_" data-uid="ETLBox.DataFlow.DataFlowComponent.BufferCancellationToken*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_BufferCancellationToken" data-uid="ETLBox.DataFlow.DataFlowComponent.BufferCancellationToken">BufferCancellationToken</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CancellationToken BufferCancellationToken { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_Completion_" data-uid="ETLBox.DataFlow.DataFlowComponent.Completion*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_Completion" data-uid="ETLBox.DataFlow.DataFlowComponent.Completion">Completion</h4>
  <div class="markdown level1 summary"><p>The completion task of the component. A component is completed when all predecessors (if any) are
completed and the current component has completed its buffer.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Task Completion { get; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_ErrorSource_" data-uid="ETLBox.DataFlow.DataFlowComponent.ErrorSource*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ErrorSource" data-uid="ETLBox.DataFlow.DataFlowComponent.ErrorSource">ErrorSource</h4>
  <div class="markdown level1 summary"><p>The ErrorSource is the source block used for sending errors into the linked error flow.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ErrorSource ErrorSource { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_Exception_" data-uid="ETLBox.DataFlow.DataFlowComponent.Exception*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_Exception" data-uid="ETLBox.DataFlow.DataFlowComponent.Exception">Exception</h4>
  <div class="markdown level1 summary"><p>If a component encountered an exception or entered a fault state because another component
in the data flow faulted, the thrown exception will be stored in this property.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Exception Exception { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_IsReadyForProcessing_" data-uid="ETLBox.DataFlow.DataFlowComponent.IsReadyForProcessing*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_IsReadyForProcessing" data-uid="ETLBox.DataFlow.DataFlowComponent.IsReadyForProcessing">IsReadyForProcessing</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsReadyForProcessing { get; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_LogThreshold_" data-uid="ETLBox.DataFlow.DataFlowComponent.LogThreshold*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_LogThreshold" data-uid="ETLBox.DataFlow.DataFlowComponent.LogThreshold">LogThreshold</h4>
  <div class="markdown level1 summary"><p>To avoid getting log message for every message, by default only log message are produced when 1000 rows
are processed. Set this property to decrease or increase this value.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual int? LogThreshold { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_MaxBufferSize_" data-uid="ETLBox.DataFlow.DataFlowComponent.MaxBufferSize*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_MaxBufferSize" data-uid="ETLBox.DataFlow.DataFlowComponent.MaxBufferSize">MaxBufferSize</h4>
  <div class="markdown level1 summary"><p>Each component can have one or more buffers to improve throughput and allow faster processing of data.
Set this value to restrict the number of rows that can be stored in the buffer.
The default value is -1 (unlimited)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual int MaxBufferSize { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_OnCompletion_" data-uid="ETLBox.DataFlow.DataFlowComponent.OnCompletion*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_OnCompletion" data-uid="ETLBox.DataFlow.DataFlowComponent.OnCompletion">OnCompletion</h4>
  <div class="markdown level1 summary"><p>When a component has completed and processed all rows, the OnCompletion action is executed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action OnCompletion { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_OnProgress_" data-uid="ETLBox.DataFlow.DataFlowComponent.OnProgress*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_OnProgress" data-uid="ETLBox.DataFlow.DataFlowComponent.OnProgress">OnProgress</h4>
  <div class="markdown level1 summary"><p>This delegate is invoked each time the progress counter changes</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<int> OnProgress { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_Predecessors_" data-uid="ETLBox.DataFlow.DataFlowComponent.Predecessors*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_Predecessors" data-uid="ETLBox.DataFlow.DataFlowComponent.Predecessors">Predecessors</h4>
  <div class="markdown level1 summary"><p>All predecessors that are linked to this component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<DataFlowComponent> Predecessors { get; protected set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_ProgressCount_" data-uid="ETLBox.DataFlow.DataFlowComponent.ProgressCount*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ProgressCount" data-uid="ETLBox.DataFlow.DataFlowComponent.ProgressCount">ProgressCount</h4>
  <div class="markdown level1 summary"><p>The amount of rows the current component has already processed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ProgressCount { get; protected set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_Successors_" data-uid="ETLBox.DataFlow.DataFlowComponent.Successors*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_Successors" data-uid="ETLBox.DataFlow.DataFlowComponent.Successors">Successors</h4>
  <div class="markdown level1 summary"><p>All successors that this component is linked to.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<DataFlowComponent> Successors { get; protected set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_ThresholdCount_" data-uid="ETLBox.DataFlow.DataFlowComponent.ThresholdCount*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ThresholdCount" data-uid="ETLBox.DataFlow.DataFlowComponent.ThresholdCount">ThresholdCount</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected int ThresholdCount { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_DataFlowComponent_CancelBufferAndThrowOperationCanceledException_" data-uid="ETLBox.DataFlow.DataFlowComponent.CancelBufferAndThrowOperationCanceledException*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_CancelBufferAndThrowOperationCanceledException" data-uid="ETLBox.DataFlow.DataFlowComponent.CancelBufferAndThrowOperationCanceledException">CancelBufferAndThrowOperationCanceledException()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void CancelBufferAndThrowOperationCanceledException()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_CancelComponent_" data-uid="ETLBox.DataFlow.DataFlowComponent.CancelComponent*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_CancelComponent" data-uid="ETLBox.DataFlow.DataFlowComponent.CancelComponent">CancelComponent()</h4>
  <div class="markdown level1 summary"><p>Will cancel completion task for this component only.
If you want to cancel the whole network, use Network.Cancel(..) instead</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CancelComponent()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_CheckParameter_" data-uid="ETLBox.DataFlow.DataFlowComponent.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_CheckParameter" data-uid="ETLBox.DataFlow.DataFlowComponent.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract void CheckParameter()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.DataFlowComponent.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.DataFlowComponent.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void CleanUpOnFaulted(Exception e = null)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception">Exception</a></td>
        <td><span class="parametername">e</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.DataFlowComponent.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.DataFlowComponent.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void CleanUpOnSuccess()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_CompleteOrFaultBufferOnPredecessorCompletion_" data-uid="ETLBox.DataFlow.DataFlowComponent.CompleteOrFaultBufferOnPredecessorCompletion*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_CompleteOrFaultBufferOnPredecessorCompletion_System_Threading_Tasks_Task_" data-uid="ETLBox.DataFlow.DataFlowComponent.CompleteOrFaultBufferOnPredecessorCompletion(System.Threading.Tasks.Task)">CompleteOrFaultBufferOnPredecessorCompletion(Task)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void CompleteOrFaultBufferOnPredecessorCompletion(Task WhenAllPredecessorCompletionTasks)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><span class="parametername">WhenAllPredecessorCompletionTasks</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_" data-uid="ETLBox.DataFlow.DataFlowComponent.InitBufferObjects*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__" data-uid="ETLBox.DataFlow.DataFlowComponent.InitBufferObjects(System.Nullable{System.Threading.CancellationToken})">InitBufferObjects(CancellationToken?)</h4>
  <div class="markdown level1 summary"><p>Inits the underlying TPL.Dataflow buffer objects. After this, the component is ready for linking
its source or target blocks. The initialization is done automatically when
a network is executed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void InitBufferObjects(CancellationToken? cancellationToken = null)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a>?</td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token that is linked with the cancellation token
of each buffer</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_InitComponent_" data-uid="ETLBox.DataFlow.DataFlowComponent.InitComponent*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_InitComponent" data-uid="ETLBox.DataFlow.DataFlowComponent.InitComponent">InitComponent()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract void InitComponent()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_InitParameter_" data-uid="ETLBox.DataFlow.DataFlowComponent.InitParameter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_InitParameter" data-uid="ETLBox.DataFlow.DataFlowComponent.InitParameter">InitParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void InitParameter()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_InternalLinkErrorTo_" data-uid="ETLBox.DataFlow.DataFlowComponent.InternalLinkErrorTo*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_InternalLinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__" data-uid="ETLBox.DataFlow.DataFlowComponent.InternalLinkErrorTo(ETLBox.IDataFlowDestination{ETLBox.ETLBoxError})">InternalLinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected IDataFlowSource<ETLBoxError> InternalLinkErrorTo(IDataFlowDestination<ETLBoxError> target)
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
        <td></td>
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_InternalLinkTo_" data-uid="ETLBox.DataFlow.DataFlowComponent.InternalLinkTo*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_IDataFlowDestination_System_Object_System_Object_" data-uid="ETLBox.DataFlow.DataFlowComponent.InternalLinkTo``1(ETLBox.IDataFlowDestination,System.Object,System.Object)">InternalLinkTo&lt;T&gt;(IDataFlowDestination, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected IDataFlowSource<T> InternalLinkTo<T>(IDataFlowDestination target, object predicate = null, object voidPredicate = null)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a></td>
        <td><span class="parametername">target</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">predicate</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">voidPredicate</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;T&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="parametername">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_LinkBuffersRecursively_" data-uid="ETLBox.DataFlow.DataFlowComponent.LinkBuffersRecursively*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_LinkBuffersRecursively" data-uid="ETLBox.DataFlow.DataFlowComponent.LinkBuffersRecursively">LinkBuffersRecursively()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LinkBuffersRecursively()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_LogProgressBatch_AfterThrowOrRedirectError_" data-uid="ETLBox.DataFlow.DataFlowComponent.LogProgressBatch_AfterThrowOrRedirectError*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_LogProgressBatch_AfterThrowOrRedirectError_System_Int32_" data-uid="ETLBox.DataFlow.DataFlowComponent.LogProgressBatch_AfterThrowOrRedirectError(System.Int32)">LogProgressBatch_AfterThrowOrRedirectError(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogProgressBatch_AfterThrowOrRedirectError(int rowsProcessed)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">rowsProcessed</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError_" data-uid="ETLBox.DataFlow.DataFlowComponent.LogProgress_AfterThrowOrRedirectError*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError" data-uid="ETLBox.DataFlow.DataFlowComponent.LogProgress_AfterThrowOrRedirectError">LogProgress_AfterThrowOrRedirectError()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogProgress_AfterThrowOrRedirectError()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_LoggingFinishOnce_" data-uid="ETLBox.DataFlow.DataFlowComponent.LoggingFinishOnce*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_LoggingFinishOnce" data-uid="ETLBox.DataFlow.DataFlowComponent.LoggingFinishOnce">LoggingFinishOnce()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LoggingFinishOnce()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_LoggingStartOnce_" data-uid="ETLBox.DataFlow.DataFlowComponent.LoggingStartOnce*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_LoggingStartOnce" data-uid="ETLBox.DataFlow.DataFlowComponent.LoggingStartOnce">LoggingStartOnce()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LoggingStartOnce()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_PrepareParameter_" data-uid="ETLBox.DataFlow.DataFlowComponent.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_PrepareParameter" data-uid="ETLBox.DataFlow.DataFlowComponent.PrepareParameter">PrepareParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void PrepareParameter()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_RunErrorSourceInit_" data-uid="ETLBox.DataFlow.DataFlowComponent.RunErrorSourceInit*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_RunErrorSourceInit" data-uid="ETLBox.DataFlow.DataFlowComponent.RunErrorSourceInit">RunErrorSourceInit()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void RunErrorSourceInit()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_SetCompletionTask_" data-uid="ETLBox.DataFlow.DataFlowComponent.SetCompletionTask*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_SetCompletionTask" data-uid="ETLBox.DataFlow.DataFlowComponent.SetCompletionTask">SetCompletionTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void SetCompletionTask()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_SetParent_" data-uid="ETLBox.DataFlow.DataFlowComponent.SetParent*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_SetParent_ETLBox_DataFlow_DataFlowComponent_" data-uid="ETLBox.DataFlow.DataFlowComponent.SetParent(ETLBox.DataFlow.DataFlowComponent)">SetParent(DataFlowComponent)</h4>
  <div class="markdown level1 summary"><p>Will set another component as a parent component - only needed for constructing subflow
inside data flow components.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void SetParent(DataFlowComponent parent)
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
        <td><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></td>
        <td><span class="parametername">parent</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_ThrowErrorAndFaultNetwork_" data-uid="ETLBox.DataFlow.DataFlowComponent.ThrowErrorAndFaultNetwork*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ThrowErrorAndFaultNetwork_System_Exception_System_String_" data-uid="ETLBox.DataFlow.DataFlowComponent.ThrowErrorAndFaultNetwork(System.Exception,System.String)">ThrowErrorAndFaultNetwork(Exception, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void ThrowErrorAndFaultNetwork(Exception e, string erroneousData)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception">Exception</a></td>
        <td><span class="parametername">e</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">erroneousData</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_ThrowOrRedirectError_" data-uid="ETLBox.DataFlow.DataFlowComponent.ThrowOrRedirectError*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ThrowOrRedirectError_System_Exception_System_String_System_String_" data-uid="ETLBox.DataFlow.DataFlowComponent.ThrowOrRedirectError(System.Exception,System.String,System.String)">ThrowOrRedirectError(Exception, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void ThrowOrRedirectError(Exception e, string erroneousData, string errorContext = null)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception">Exception</a></td>
        <td><span class="parametername">e</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">erroneousData</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">errorContext</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a>
  </div>

{{< /rawhtml >}}
