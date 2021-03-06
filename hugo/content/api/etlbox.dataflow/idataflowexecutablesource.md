---
title: "IDataFlowExecutableSource"
description: "Details for Interface IDataFlowExecutableSource (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10168
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource">
  <h1 id="ETLBox_DataFlow_IDataFlowExecutableSource" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource" class="text-break">Interface IDataFlowExecutableSource
  </h1>
  <div class="markdown level0 summary"><p>Shared methods for sources that can be executed</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_IDataFlowExecutableSource_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowExecutableSource
```

{{< rawhtml >}}
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_DataFlow_IDataFlowExecutableSource_Execute_" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource.Execute*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowExecutableSource_Execute" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource.Execute">Execute()</h4>
  <div class="markdown level1 summary"><p>Starts the data flow for all connected components (also for other sources in the network).
Waits until all destinations run to completion.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Execute()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_IDataFlowExecutableSource_ExecuteAsync_" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource.ExecuteAsync*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowExecutableSource_ExecuteAsync" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource.ExecuteAsync">ExecuteAsync()</h4>
  <div class="markdown level1 summary"><p>Starts the data flow asynchronously. This method will return an awaitable task that completes or faults when the flow ran to completion.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowExecutableSource_Post_" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource.Post*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowExecutableSource_Post" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource.Post">Post()</h4>
  <div class="markdown level1 summary"><p>Starts the data flow synchronously. This method will return when all data was posted into the flow</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Post()
```

{{< rawhtml >}}

{{< /rawhtml >}}
