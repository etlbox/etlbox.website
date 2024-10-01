---
title: "IDataFlowExecutableSource"
description: "Details for Interface IDataFlowExecutableSource (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10242
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowExecutableSource">
  <h1 id="ETLBox_IDataFlowExecutableSource" data-uid="ETLBox.IDataFlowExecutableSource" class="text-break">Interface IDataFlowExecutableSource
</h1>
  <div class="markdown level0 summary"><p>Shared methods for sources that can be executed</p>
</div>
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
  <h5 id="ETLBox_IDataFlowExecutableSource_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowExecutableSource : IDataFlowSource, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowExecutableSource_Limit_" data-uid="ETLBox.IDataFlowExecutableSource.Limit*"></a>
  <h4 id="ETLBox_IDataFlowExecutableSource_Limit" data-uid="ETLBox.IDataFlowExecutableSource.Limit">Limit</h4>
  <div class="markdown level1 summary"><p>Reads data from the source until the limit is reached. Default is 0 (=no limit).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int Limit { get; set; }
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
  <a id="ETLBox_IDataFlowExecutableSource_Execute_" data-uid="ETLBox.IDataFlowExecutableSource.Execute*"></a>
  <h4 id="ETLBox_IDataFlowExecutableSource_Execute" data-uid="ETLBox.IDataFlowExecutableSource.Execute">Execute()</h4>
  <div class="markdown level1 summary"><p>Starts the data flow for all connected components (also for other sources in the network).
Waits until all destinations run to completion.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Execute()
```

{{< rawhtml >}}
  <a id="ETLBox_IDataFlowExecutableSource_Execute_" data-uid="ETLBox.IDataFlowExecutableSource.Execute*"></a>
  <h4 id="ETLBox_IDataFlowExecutableSource_Execute_System_Threading_CancellationToken_" data-uid="ETLBox.IDataFlowExecutableSource.Execute(System.Threading.CancellationToken)">Execute(CancellationToken)</h4>
  <div class="markdown level1 summary"><p><a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Execute">Execute()</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Execute(CancellationToken cancellationToken)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token which can be used to cancel the task of component (and all subsequent components in the flow)</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowExecutableSource_ExecuteAsync_" data-uid="ETLBox.IDataFlowExecutableSource.ExecuteAsync*"></a>
  <h4 id="ETLBox_IDataFlowExecutableSource_ExecuteAsync" data-uid="ETLBox.IDataFlowExecutableSource.ExecuteAsync">ExecuteAsync()</h4>
  <div class="markdown level1 summary"><p>Starts the data flow asynchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Task ExecuteAsync()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>Returns an awaitable task that completes or faults when the flow ran to completion.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowExecutableSource_ExecuteAsync_" data-uid="ETLBox.IDataFlowExecutableSource.ExecuteAsync*"></a>
  <h4 id="ETLBox_IDataFlowExecutableSource_ExecuteAsync_System_Threading_CancellationToken_" data-uid="ETLBox.IDataFlowExecutableSource.ExecuteAsync(System.Threading.CancellationToken)">ExecuteAsync(CancellationToken)</h4>
  <div class="markdown level1 summary"><p>Starts the data flow asynchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Task ExecuteAsync(CancellationToken cancellationToken)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token which can be used to cancel the task of component (and all subsequent components in the flow)</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>Returns an awaitable task that completes or faults when the flow ran to completion.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowExecutableSource_StartAsync_" data-uid="ETLBox.IDataFlowExecutableSource.StartAsync*"></a>
  <h4 id="ETLBox_IDataFlowExecutableSource_StartAsync_System_Nullable_System_Threading_CancellationToken__" data-uid="ETLBox.IDataFlowExecutableSource.StartAsync(System.Nullable{System.Threading.CancellationToken})">StartAsync(CancellationToken?)</h4>
  <div class="markdown level1 summary"><p>Starts the source asynchronously. Will return only the task for the source component, which completes when all data was posted
into the data flow.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Task StartAsync(CancellationToken? cancellationToken)
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
        <td><p>A cancellation token which can be used to cancel the task of component (and all subsequent components in the flow)</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>Returns an awaitable task that completes or faults when the source ran to completion.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
