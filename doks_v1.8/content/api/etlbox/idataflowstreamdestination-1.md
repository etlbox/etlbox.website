---
title: "IDataFlowStreamDestination<TInput>"
description: "Details for Interface IDataFlowStreamDestination<TInput> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10249
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowStreamDestination`1">
  <h1 id="ETLBox_IDataFlowStreamDestination_1" data-uid="ETLBox.IDataFlowStreamDestination`1" class="text-break">Interface IDataFlowStreamDestination&lt;TInput&gt;</h1>
  <div class="markdown level0 summary"><p>Implemented by data flow destinations that allow writing data in a stream</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/idataflowdestination-1#ETLBox_IDataFlowDestination_1_TargetBlock">IDataFlowDestination&lt;TInput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_Uri">IDataFlowStreamDestination.Uri</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_ResourceType">IDataFlowStreamDestination.ResourceType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_HttpClient">IDataFlowStreamDestination.HttpClient</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_HttpRequestMessage">IDataFlowStreamDestination.HttpRequestMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_HttpResponseMessage">IDataFlowStreamDestination.HttpResponseMessage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_Encoding">IDataFlowStreamDestination.Encoding</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_CreateStreamWriter">IDataFlowStreamDestination.CreateStreamWriter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_AzureBlobStorage">IDataFlowStreamDestination.AzureBlobStorage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_StreamWriter">IDataFlowStreamDestination.StreamWriter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/idataflowstreamdestination#ETLBox_IDataFlowStreamDestination_HttpContentType">IDataFlowStreamDestination.HttpContentType</a>
    </div>
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
  <h5 id="ETLBox_IDataFlowStreamDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowStreamDestination<TInput> : IDataFlowDestination<TInput>, IDataFlowStreamDestination, IDataFlowDestination, IDataFlowComponent, ILoggableTask
```

{{< rawhtml >}}
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
        <td><span class="parametername">TInput</span></td>
        <td><p>Type of ingoing data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowStreamDestination_1_GetNextUri_" data-uid="ETLBox.IDataFlowStreamDestination`1.GetNextUri*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_1_GetNextUri" data-uid="ETLBox.IDataFlowStreamDestination`1.GetNextUri">GetNextUri</h4>
  <div class="markdown level1 summary"><p>This function returns the next url that is used for writing data. It will used until <a class="xref" href="/api/etlbox/idataflowstreamdestination-1#ETLBox_IDataFlowStreamDestination_1_HasNextUri">HasNextUri</a> returns false.
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-3">Func</a>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, TInput, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamDestination_1_HasNextUri_" data-uid="ETLBox.IDataFlowStreamDestination`1.HasNextUri*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_1_HasNextUri" data-uid="ETLBox.IDataFlowStreamDestination`1.HasNextUri">HasNextUri</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-3">Func</a>&lt;<a class="xref" href="/api/etlbox.dataflow/streammetadata">StreamMetaData</a>, TInput, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowStreamDestination_1_WriteUri_" data-uid="ETLBox.IDataFlowStreamDestination`1.WriteUri*"></a>
  <h4 id="ETLBox_IDataFlowStreamDestination_1_WriteUri" data-uid="ETLBox.IDataFlowStreamDestination`1.WriteUri">WriteUri</h4>
  <div class="markdown level1 summary"><p>The Uri used for the current write operation- this will only be different to the <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.uri">Uri</a>
if you use the <a class="xref" href="/api/etlbox/idataflowstreamdestination-1#ETLBox_IDataFlowStreamDestination_1_GetNextUri">GetNextUri</a> and <a class="xref" href="/api/etlbox/idataflowstreamdestination-1#ETLBox_IDataFlowStreamDestination_1_HasNextUri">HasNextUri</a> functions.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string WriteUri { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
