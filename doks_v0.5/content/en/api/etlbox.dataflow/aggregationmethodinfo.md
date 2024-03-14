---
title: "AggregationMethodInfo"
description: "Details for Class AggregationMethodInfo (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10092
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.AggregationMethodInfo">
  <h1 id="ETLBox_DataFlow_AggregationMethodInfo" data-uid="ETLBox.DataFlow.AggregationMethodInfo" class="text-break">Class AggregationMethodInfo
</h1>
  <div class="markdown level0 summary"><p>Used in the <a class="xref" href="/api/etlbox.dataflow/aggregation">Aggregation</a> transformation - contains information about the current aggregation
method and properties when invoking the AggregationCondition.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">AggregationMethodInfo</span></div>
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
  <h5 id="ETLBox_DataFlow_AggregationMethodInfo_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class AggregationMethodInfo
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_AggregationMethodInfo__ctor_" data-uid="ETLBox.DataFlow.AggregationMethodInfo.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_AggregationMethodInfo__ctor_System_String_System_String_ETLBox_AggregationMethod_" data-uid="ETLBox.DataFlow.AggregationMethodInfo.#ctor(System.String,System.String,ETLBox.AggregationMethod)">AggregationMethodInfo(string, string, AggregationMethod)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AggregationMethodInfo(string inputPropertyName, string aggregationPropertyName, AggregationMethod aggregationMethod)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">inputPropertyName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">aggregationPropertyName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox/aggregationmethod">AggregationMethod</a></td>
        <td><span class="parametername">aggregationMethod</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_AggregationMethodInfo_AggregationMethod_" data-uid="ETLBox.DataFlow.AggregationMethodInfo.AggregationMethod*"></a>
  <h4 id="ETLBox_DataFlow_AggregationMethodInfo_AggregationMethod" data-uid="ETLBox.DataFlow.AggregationMethodInfo.AggregationMethod">AggregationMethod</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AggregationMethod AggregationMethod { get; }
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
        <td><a class="xref" href="/api/etlbox/aggregationmethod">AggregationMethod</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_AggregationMethodInfo_AggregationPropertyName_" data-uid="ETLBox.DataFlow.AggregationMethodInfo.AggregationPropertyName*"></a>
  <h4 id="ETLBox_DataFlow_AggregationMethodInfo_AggregationPropertyName" data-uid="ETLBox.DataFlow.AggregationMethodInfo.AggregationPropertyName">AggregationPropertyName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AggregationPropertyName { get; }
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
  <a id="ETLBox_DataFlow_AggregationMethodInfo_InputPropertyName_" data-uid="ETLBox.DataFlow.AggregationMethodInfo.InputPropertyName*"></a>
  <h4 id="ETLBox_DataFlow_AggregationMethodInfo_InputPropertyName" data-uid="ETLBox.DataFlow.AggregationMethodInfo.InputPropertyName">InputPropertyName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string InputPropertyName { get; }
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
