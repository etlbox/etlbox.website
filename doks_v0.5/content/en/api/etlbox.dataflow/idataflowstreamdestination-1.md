---
title: "IDataFlowStreamDestination<TInput>"
description: "Details for Interface IDataFlowStreamDestination<TInput> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10180
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination`1">
  <h1 id="ETLBox_DataFlow_IDataFlowStreamDestination_1" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination`1" class="text-break">Interface IDataFlowStreamDestination&lt;TInput&gt;
</h1>
  <div class="markdown level0 summary"><p>Implemented by data flow destinations that allow writing data in a stream</p>
</div>
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
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_Uri">IDataFlowStreamDestination.Uri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_ResourceType">IDataFlowStreamDestination.ResourceType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_HttpClient">IDataFlowStreamDestination.HttpClient</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_HttpRequestMessage">IDataFlowStreamDestination.HttpRequestMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_HttpResponseMessage">IDataFlowStreamDestination.HttpResponseMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_Encoding">IDataFlowStreamDestination.Encoding</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_CreateStreamWriter">IDataFlowStreamDestination.CreateStreamWriter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination#ETLBox_DataFlow_IDataFlowStreamDestination_AzureBlobStorage">IDataFlowStreamDestination.AzureBlobStorage</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_IDataFlowStreamDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowStreamDestination<TInput> : IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent, IDataFlowStreamDestination
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
        <td><p>Type of ingoing data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_1_GetNextUri_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination`1.GetNextUri*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_1_GetNextUri" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination`1.GetNextUri">GetNextUri</h4>
  <div class="markdown level1 summary"><p>This function returns the next url that is used for writing data. It will used until <a class="xref" href="/api/etlbox.dataflow/idataflowstreamdestination-1#ETLBox_DataFlow_IDataFlowStreamDestination_1_HasNextUri">HasNextUri</a> returns false.
The incoming <a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a> holds information about the current progress and currently processed data row.
This property can be used if you want to write into multiple files or send data into different web services.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<StreamMetaData, TInput, string> GetNextUri { get; set; }
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
        <td><span class="xref">System.Func&lt;T1, T2, TResult&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, TInput, <span class="xref">string</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_IDataFlowStreamDestination_1_HasNextUri_" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination`1.HasNextUri*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowStreamDestination_1_HasNextUri" data-uid="ETLBox.DataFlow.IDataFlowStreamDestination`1.HasNextUri">HasNextUri</h4>
  <div class="markdown level1 summary"><p>This func determines if the next data record should be written into another location.
<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a> has information about the current progress and currently processed data row.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<StreamMetaData, TInput, bool> HasNextUri { get; set; }
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
        <td><span class="xref">System.Func&lt;T1, T2, TResult&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, TInput, <span class="xref">bool</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
