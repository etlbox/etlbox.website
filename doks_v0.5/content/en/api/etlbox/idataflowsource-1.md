---
title: "IDataFlowSource<TOutput>"
description: "Details for Interface IDataFlowSource<TOutput> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10212
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowSource`1">
  <h1 id="ETLBox_IDataFlowSource_1" data-uid="ETLBox.IDataFlowSource`1" class="text-break">Interface IDataFlowSource&lt;TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>Shared methods for linking of source components</p>
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
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDataFlowSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowSource<TOutput> : IDataFlowSource, IDataFlowComponent, ILoggableTask
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
        <td><span class="parametername">TOutput</span></td>
        <td><p>Type of outgoing data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowSource_1_SourceBlock_" data-uid="ETLBox.IDataFlowSource`1.SourceBlock*"></a>
  <h4 id="ETLBox_IDataFlowSource_1_SourceBlock" data-uid="ETLBox.IDataFlowSource`1.SourceBlock">SourceBlock</h4>
  <div class="markdown level1 summary"><p>SourceBlock from the underlying TPL.Dataflow which is used as output buffer for the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ISourceBlock<TOutput> SourceBlock { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.dataflow.isourceblock-1">ISourceBlock</a>&lt;TOutput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_IDataFlowSource_1_LinkErrorTo_" data-uid="ETLBox.IDataFlowSource`1.LinkErrorTo*"></a>
  <h4 id="ETLBox_IDataFlowSource_1_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__" data-uid="ETLBox.IDataFlowSource`1.LinkErrorTo(ETLBox.IDataFlowDestination{ETLBox.ETLBoxError})">LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</h4>
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
  <a id="ETLBox_IDataFlowSource_1_LinkTo_" data-uid="ETLBox.IDataFlowSource`1.LinkTo*"></a>
  <h4 id="ETLBox_IDataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__" data-uid="ETLBox.IDataFlowSource`1.LinkTo(ETLBox.IDataFlowDestination{`0})">LinkTo(IDataFlowDestination&lt;TOutput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination.
Every component should be linked to only one component without predicates
If you want to link multiple targets, either use predicates or a <a class="xref" href="/api/etlbox.dataflow/multicast">Multicast</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDataFlowSource<TOutput> LinkTo(IDataFlowDestination<TOutput> target)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowSource_1_LinkTo_" data-uid="ETLBox.IDataFlowSource`1.LinkTo*"></a>
  <h4 id="ETLBox_IDataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__" data-uid="ETLBox.IDataFlowSource`1.LinkTo(ETLBox.IDataFlowDestination{`0},System.Predicate{`0})">LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination with a predicate.
Every component can be linked to one or more component. If you link multiple components,
provide a <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate&lt;T&gt;</a> that describe which row is send to which target.
Make sure that all rows will be send to a target - use the <a class="xref" href="/api/etlbox.dataflow/voiddestination">VoidDestination</a>
if you want to discarded rows.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDataFlowSource<TOutput> LinkTo(IDataFlowDestination<TOutput> target, Predicate<TOutput> rowsToKeep)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">rowsToKeep</span></td>
        <td><p>Only rows that evaluate to true are send to the connected target</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowSource_1_LinkTo_" data-uid="ETLBox.IDataFlowSource`1.LinkTo*"></a>
  <h4 id="ETLBox_IDataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__" data-uid="ETLBox.IDataFlowSource`1.LinkTo(ETLBox.IDataFlowDestination{`0},System.Predicate{`0},System.Predicate{`0})">LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination with a predicate for rows that you want to keep
and a second predicate for rows you want to discard.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDataFlowSource<TOutput> LinkTo(IDataFlowDestination<TOutput> target, Predicate<TOutput> rowsToKeep, Predicate<TOutput> rowsIntoVoid)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">rowsToKeep</span></td>
        <td><p>Only rows that evaluate to true are send to the connected target</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">rowsIntoVoid</span></td>
        <td><p>Rows that are evaluate to true will be discarded</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowSource_1_LinkTo_" data-uid="ETLBox.IDataFlowSource`1.LinkTo*"></a>
  <h4 id="ETLBox_IDataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__" data-uid="ETLBox.IDataFlowSource`1.LinkTo``1(ETLBox.IDataFlowDestination{`0})">LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination.
Every component should be linked to only one component without predicates
If you want to link multiple targets, either use predicates or a <a class="xref" href="/api/etlbox.dataflow/multicast">Multicast</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDataFlowSource<TConvert> LinkTo<TConvert>(IDataFlowDestination<TOutput> target)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TConvert&gt;</td>
        <td><p>The linked component.</p>
</td>
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
        <td><span class="parametername">TConvert</span></td>
        <td><p>Will convert the output type of the linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowSource_1_LinkTo_" data-uid="ETLBox.IDataFlowSource`1.LinkTo*"></a>
  <h4 id="ETLBox_IDataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__" data-uid="ETLBox.IDataFlowSource`1.LinkTo``1(ETLBox.IDataFlowDestination{`0},System.Predicate{`0})">LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination with a predicate.
Every component can be linked to one or more component. If you link multiple components,
provide a <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate&lt;T&gt;</a> that describe which row is send to which target.
Make sure that all rows will be send to a target - use the <a class="xref" href="/api/etlbox.dataflow/voiddestination">VoidDestination</a>
if you want to discarded rows.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDataFlowSource<TConvert> LinkTo<TConvert>(IDataFlowDestination<TOutput> target, Predicate<TOutput> rowsToKeep)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">rowsToKeep</span></td>
        <td><p>Predicate - only rows that evaluate to true are send to the connected target</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TConvert&gt;</td>
        <td><p>The linked component.</p>
</td>
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
        <td><span class="parametername">TConvert</span></td>
        <td><p>Will convert the output type of the linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowSource_1_LinkTo_" data-uid="ETLBox.IDataFlowSource`1.LinkTo*"></a>
  <h4 id="ETLBox_IDataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__" data-uid="ETLBox.IDataFlowSource`1.LinkTo``1(ETLBox.IDataFlowDestination{`0},System.Predicate{`0},System.Predicate{`0})">LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination with a predicate for rows that you want to keep
and a second predicate for rows you want to discard.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDataFlowSource<TConvert> LinkTo<TConvert>(IDataFlowDestination<TOutput> target, Predicate<TOutput> rowsToKeep, Predicate<TOutput> rowsIntoVoid)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">rowsToKeep</span></td>
        <td><p>Only rows that evaluate to true are send to the connected target</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TOutput&gt;</td>
        <td><span class="parametername">rowsIntoVoid</span></td>
        <td><p>Rows that are evaluate to true will be discarded</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TConvert&gt;</td>
        <td><p>The linked component.</p>
</td>
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
        <td><span class="parametername">TConvert</span></td>
        <td><p>Will convert the output type of the linked component.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
