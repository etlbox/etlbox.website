---
title: "IDataFlowExecutableSource<TOutput>"
description: "Details for Interface IDataFlowExecutableSource<TOutput> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10167
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource`1">
  <h1 id="ETLBox_DataFlow_IDataFlowExecutableSource_1" data-uid="ETLBox.DataFlow.IDataFlowExecutableSource`1" class="text-break">Interface IDataFlowExecutableSource&lt;TOutput&gt;
  </h1>
  <div class="markdown level0 summary"><p>Shared methods for sources that can be executed</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1#ETLBox_DataFlow_IDataFlowSource_1_SourceBlock">IDataFlowSource&lt;TOutput&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1#ETLBox_DataFlow_IDataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1#ETLBox_DataFlow_IDataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1#ETLBox_DataFlow_IDataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1#ETLBox_DataFlow_IDataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1#ETLBox_DataFlow_IDataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1#ETLBox_DataFlow_IDataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">IDataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1#ETLBox_DataFlow_IDataFlowSource_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">IDataFlowSource&lt;TOutput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource#ETLBox_DataFlow_IDataFlowSource_ErrorSource">IDataFlowSource.ErrorSource</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource#ETLBox_DataFlow_IDataFlowSource_Successors">IDataFlowSource.Successors</a>
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
      <a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource#ETLBox_DataFlow_IDataFlowExecutableSource_Execute">IDataFlowExecutableSource.Execute()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource#ETLBox_DataFlow_IDataFlowExecutableSource_Post">IDataFlowExecutableSource.Post()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource#ETLBox_DataFlow_IDataFlowExecutableSource_ExecuteAsync">IDataFlowExecutableSource.ExecuteAsync()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_IDataFlowExecutableSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowExecutableSource<TOutput> : IDataFlowSource<TOutput>, IDataFlowSource, IDataFlowComponent, IDataFlowExecutableSource
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
        <td><span class="parametername">TOutput</span></td>
        <td><p>Type of outgoing data</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
