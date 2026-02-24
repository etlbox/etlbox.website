---
title: "NetworkNode"
description: "Details for Class NetworkNode (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10167
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.NetworkNode">
  <h1 id="ETLBox_DataFlow_NetworkNode" data-uid="ETLBox.DataFlow.NetworkNode" class="text-break">Class NetworkNode</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">NetworkNode</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  <h5 id="ETLBox_DataFlow_NetworkNode_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class NetworkNode
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_NetworkNode__ctor_" data-uid="ETLBox.DataFlow.NetworkNode.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_NetworkNode__ctor" data-uid="ETLBox.DataFlow.NetworkNode.#ctor">NetworkNode()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public NetworkNode()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_NetworkNode__ctor_" data-uid="ETLBox.DataFlow.NetworkNode.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_NetworkNode__ctor_ETLBox_DataFlow_DataFlowComponent_" data-uid="ETLBox.DataFlow.NetworkNode.#ctor(ETLBox.DataFlow.DataFlowComponent)">NetworkNode(DataFlowComponent)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public NetworkNode(DataFlowComponent comp)
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
        <td><span class="parametername">comp</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkNode__ctor_" data-uid="ETLBox.DataFlow.NetworkNode.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_NetworkNode__ctor_ETLBox_DataFlow_DataFlowComponent_System_Func_ETLBox_DataFlow_DataFlowComponent_System_Collections_Generic_Dictionary_System_String_System_Object___" data-uid="ETLBox.DataFlow.NetworkNode.#ctor(ETLBox.DataFlow.DataFlowComponent,System.Func{ETLBox.DataFlow.DataFlowComponent,System.Collections.Generic.Dictionary{System.String,System.Object}})">NetworkNode(DataFlowComponent, Func&lt;DataFlowComponent, Dictionary&lt;string, object&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public NetworkNode(DataFlowComponent comp, Func<DataFlowComponent, Dictionary<string, object>> extractComponentPropsFunc)
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
        <td><span class="parametername">comp</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2">Dictionary</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;&gt;</td>
        <td><span class="parametername">extractComponentPropsFunc</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_NetworkNode_Component_" data-uid="ETLBox.DataFlow.NetworkNode.Component*"></a>
  <h4 id="ETLBox_DataFlow_NetworkNode_Component" data-uid="ETLBox.DataFlow.NetworkNode.Component">Component</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Dictionary<string, object> Component { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2">Dictionary</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkNode_Hash_" data-uid="ETLBox.DataFlow.NetworkNode.Hash*"></a>
  <h4 id="ETLBox_DataFlow_NetworkNode_Hash" data-uid="ETLBox.DataFlow.NetworkNode.Hash">Hash</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Hash { get; }
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
  <a id="ETLBox_DataFlow_NetworkNode_Name_" data-uid="ETLBox.DataFlow.NetworkNode.Name*"></a>
  <h4 id="ETLBox_DataFlow_NetworkNode_Name" data-uid="ETLBox.DataFlow.NetworkNode.Name">Name</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Name { get; }
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
  <a id="ETLBox_DataFlow_NetworkNode_Successors_" data-uid="ETLBox.DataFlow.NetworkNode.Successors*"></a>
  <h4 id="ETLBox_DataFlow_NetworkNode_Successors" data-uid="ETLBox.DataFlow.NetworkNode.Successors">Successors</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public NetworkNode[] Successors { get; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/networknode">NetworkNode</a>[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
