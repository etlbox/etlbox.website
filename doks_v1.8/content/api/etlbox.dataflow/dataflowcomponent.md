---
title: "DataFlowComponent"
description: "Details for Class DataFlowComponent (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10129
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.DataFlowComponent">
  <h1 id="ETLBox_DataFlow_DataFlowComponent" data-uid="ETLBox.DataFlow.DataFlowComponent" class="text-break">Class DataFlowComponent</h1>
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
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogThreshold">LoggableTask.LogThreshold</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInstance">LoggableTask.LogInstance</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_ParentTask">LoggableTask.ParentTask</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogTrace_System_String_System_Object___">LoggableTask.LogTrace(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogDebug_System_String_System_Object___">LoggableTask.LogDebug(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInfo_System_String_System_Object___">LoggableTask.LogInfo(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInfoOrDebug_System_String_System_Object___">LoggableTask.LogInfoOrDebug(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogWarn_System_String_System_Object___">LoggableTask.LogWarn(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogError_System_String_System_Object___">LoggableTask.LogError(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogFatal_System_String_System_Object___">LoggableTask.LogFatal(string, params object[])</a>
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
    public abstract class DataFlowComponent : LoggableTask, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_DataFlowComponent_BufferCancellationSource_" data-uid="ETLBox.DataFlow.DataFlowComponent.BufferCancellationSource*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_BufferCancellationSource" data-uid="ETLBox.DataFlow.DataFlowComponent.BufferCancellationSource">BufferCancellationSource</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected CancellationTokenSource BufferCancellationSource { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource">CancellationTokenSource</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_BufferCancellationToken_" data-uid="ETLBox.DataFlow.DataFlowComponent.BufferCancellationToken*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_BufferCancellationToken" data-uid="ETLBox.DataFlow.DataFlowComponent.BufferCancellationToken">BufferCancellationToken</h4>
  <div class="markdown level1 summary"><p>A cancellation token that is linked with the underlying cancellation tokens of each buffers of a component.</p>
</div>
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
  <a id="ETLBox_DataFlow_DataFlowComponent_ErrorCount_" data-uid="ETLBox.DataFlow.DataFlowComponent.ErrorCount*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ErrorCount" data-uid="ETLBox.DataFlow.DataFlowComponent.ErrorCount">ErrorCount</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ErrorCount { get; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_ExecutionEndTime_" data-uid="ETLBox.DataFlow.DataFlowComponent.ExecutionEndTime*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ExecutionEndTime" data-uid="ETLBox.DataFlow.DataFlowComponent.ExecutionEndTime">ExecutionEndTime</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTimeOffset? ExecutionEndTime { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_ExecutionStartTime_" data-uid="ETLBox.DataFlow.DataFlowComponent.ExecutionStartTime*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ExecutionStartTime" data-uid="ETLBox.DataFlow.DataFlowComponent.ExecutionStartTime">ExecutionStartTime</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTimeOffset? ExecutionStartTime { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_IsReadyForProcessing_" data-uid="ETLBox.DataFlow.DataFlowComponent.IsReadyForProcessing*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_IsReadyForProcessing" data-uid="ETLBox.DataFlow.DataFlowComponent.IsReadyForProcessing">IsReadyForProcessing</h4>
  <div class="markdown level1 summary"><p>Indicates if a component was successfully initialized, linked and prepared for execution.</p>
</div>
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
  <a id="ETLBox_DataFlow_DataFlowComponent_OnException_" data-uid="ETLBox.DataFlow.DataFlowComponent.OnException*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_OnException" data-uid="ETLBox.DataFlow.DataFlowComponent.OnException">OnException</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<Exception, string> OnException { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-2">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception">Exception</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlowComponent_OnInitialization_" data-uid="ETLBox.DataFlow.DataFlowComponent.OnInitialization*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_OnInitialization" data-uid="ETLBox.DataFlow.DataFlowComponent.OnInitialization">OnInitialization</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action OnInitialization { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_Tag_" data-uid="ETLBox.DataFlow.DataFlowComponent.Tag*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_Tag" data-uid="ETLBox.DataFlow.DataFlowComponent.Tag">Tag</h4>
  <div class="markdown level1 summary"><p>A tag that can be used to store any object in the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object Tag { get; set; }
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
  <a id="ETLBox_DataFlow_DataFlowComponent_AddComplementVoidLinkToOtherTargets_" data-uid="ETLBox.DataFlow.DataFlowComponent.AddComplementVoidLinkToOtherTargets*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_AddComplementVoidLinkToOtherTargets_System_Func_System_Type_ETLBox_IDataFlowDestination__System_Delegate_" data-uid="ETLBox.DataFlow.DataFlowComponent.AddComplementVoidLinkToOtherTargets(System.Func{System.Type,ETLBox.IDataFlowDestination},System.Delegate)">AddComplementVoidLinkToOtherTargets(Func&lt;Type, IDataFlowDestination&gt;, Delegate)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void AddComplementVoidLinkToOtherTargets(Func<Type, IDataFlowDestination> createAutomaticVoidDestination, Delegate pred)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a>, <a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>&gt;</td>
        <td><span class="parametername">createAutomaticVoidDestination</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.delegate">Delegate</a></td>
        <td><span class="parametername">pred</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
  <a id="ETLBox_DataFlow_DataFlowComponent_InitCheckedParameter_" data-uid="ETLBox.DataFlow.DataFlowComponent.InitCheckedParameter*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_InitCheckedParameter" data-uid="ETLBox.DataFlow.DataFlowComponent.InitCheckedParameter">InitCheckedParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void InitCheckedParameter()
```

{{< rawhtml >}}
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
  <a id="ETLBox_DataFlow_DataFlowComponent_LinkErrorTo_" data-uid="ETLBox.DataFlow.DataFlowComponent.LinkErrorTo*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__" data-uid="ETLBox.DataFlow.DataFlowComponent.LinkErrorTo(ETLBox.IDataFlowDestination{ETLBox.ETLBoxError})">LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</h4>
  <div class="markdown level1 summary"><p>If an error occurs in the component, by default the component will throw an exception and stop execution.
If you use the error linking, any erroneous records will be caught and redirected.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual IDataFlowSource<ETLBoxError> LinkErrorTo(IDataFlowDestination<ETLBoxError> target)
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
  <a id="ETLBox_DataFlow_DataFlowComponent_PrepareParameterForCheck_" data-uid="ETLBox.DataFlow.DataFlowComponent.PrepareParameterForCheck*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_PrepareParameterForCheck" data-uid="ETLBox.DataFlow.DataFlowComponent.PrepareParameterForCheck">PrepareParameterForCheck()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void PrepareParameterForCheck()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_Reset_" data-uid="ETLBox.DataFlow.DataFlowComponent.Reset*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_Reset" data-uid="ETLBox.DataFlow.DataFlowComponent.Reset">Reset()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void Reset()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_ResetComponent_" data-uid="ETLBox.DataFlow.DataFlowComponent.ResetComponent*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_ResetComponent" data-uid="ETLBox.DataFlow.DataFlowComponent.ResetComponent">ResetComponent()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void ResetComponent()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_DataFlowComponent_SetParentComponent_" data-uid="ETLBox.DataFlow.DataFlowComponent.SetParentComponent*"></a>
  <h4 id="ETLBox_DataFlow_DataFlowComponent_SetParentComponent_ETLBox_DataFlow_DataFlowComponent_" data-uid="ETLBox.DataFlow.DataFlowComponent.SetParentComponent(ETLBox.DataFlow.DataFlowComponent)">SetParentComponent(DataFlowComponent)</h4>
  <div class="markdown level1 summary"><p>Will set another component as a parent component - only needed for constructing subflow
inside data flow components.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void SetParentComponent(DataFlowComponent parent)
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

{{< /rawhtml >}}
