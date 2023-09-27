---
title: "IDataFlowExecutableSource"
description: "Details for Interface IDataFlowExecutableSource (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10190
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
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDataFlowExecutableSource_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowExecutableSource : IDataFlowSource, IDataFlowComponent
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Threading.CancellationToken</span></td>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Threading.CancellationToken</span></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token which can be used to cancel the task of component (and all subsequent components in the flow)</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
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
        <td><p>Returns an awaitable task that completes or faults when the flow ran to completion.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowExecutableSource_Post_" data-uid="ETLBox.IDataFlowExecutableSource.Post*"></a>
  <h4 id="ETLBox_IDataFlowExecutableSource_Post" data-uid="ETLBox.IDataFlowExecutableSource.Post">Post()</h4>
  <div class="markdown level1 summary"><p>Starts the data flow partly synchronously. This method will return when all data was posted into the flow.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Post()
```

{{< rawhtml >}}
  <a id="ETLBox_IDataFlowExecutableSource_Post_" data-uid="ETLBox.IDataFlowExecutableSource.Post*"></a>
  <h4 id="ETLBox_IDataFlowExecutableSource_Post_System_Threading_CancellationToken_" data-uid="ETLBox.IDataFlowExecutableSource.Post(System.Threading.CancellationToken)">Post(CancellationToken)</h4>
  <div class="markdown level1 summary"><p><a class="xref" href="/api/etlbox/idataflowexecutablesource#ETLBox_IDataFlowExecutableSource_Post">Post()</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Post(CancellationToken cancellationToken)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Threading.CancellationToken</span></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token which can be used to cancel the task of component (and all subsequent components in the flow)</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
