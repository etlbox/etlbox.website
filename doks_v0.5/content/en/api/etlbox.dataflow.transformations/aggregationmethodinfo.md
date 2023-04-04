---
title: "AggregationMethodInfo"
description: "Details for Class AggregationMethodInfo (ETLBox.DataFlow.Transformations)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.transformations"
weight: 10206
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo">
  <h1 id="ETLBox_DataFlow_Transformations_AggregationMethodInfo" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo" class="text-break">Class AggregationMethodInfo
</h1>
  <div class="markdown level0 summary"><p>Used in the <a class="xref" href="/api/etlbox.dataflow.transformations/aggregation">Aggregation</a> transformation - contains information about the current aggregation
method and properties when invoking the AggregationCondition.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">AggregationMethodInfo</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">object.Equals(object)</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">object.GetType()</span>
    </div>
    <div>
      <span class="xref">object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">object.ReferenceEquals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Transformations</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Transformations_AggregationMethodInfo_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class AggregationMethodInfo
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Transformations_AggregationMethodInfo__ctor_" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_AggregationMethodInfo__ctor_System_String_System_String_ETLBox_DataFlow_Transformations_AggregationMethod_" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo.#ctor(System.String,System.String,ETLBox.DataFlow.Transformations.AggregationMethod)">AggregationMethodInfo(string, string, AggregationMethod)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AggregationMethodInfo(string inputPropertyName, string aggregationPropertyName, AggregationMethod aggregationMethod)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">inputPropertyName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">aggregationPropertyName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.dataflow.transformations/aggregationmethod">AggregationMethod</a></td>
        <td><span class="parametername">aggregationMethod</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Transformations_AggregationMethodInfo_AggregationMethod_" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo.AggregationMethod*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_AggregationMethodInfo_AggregationMethod" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo.AggregationMethod">AggregationMethod</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AggregationMethod AggregationMethod { get; }
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
        <td><a class="xref" href="/api/etlbox.dataflow.transformations/aggregationmethod">AggregationMethod</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_AggregationMethodInfo_AggregationPropertyName_" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo.AggregationPropertyName*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_AggregationMethodInfo_AggregationPropertyName" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo.AggregationPropertyName">AggregationPropertyName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AggregationPropertyName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_AggregationMethodInfo_InputPropertyName_" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo.InputPropertyName*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_AggregationMethodInfo_InputPropertyName" data-uid="ETLBox.DataFlow.Transformations.AggregationMethodInfo.InputPropertyName">InputPropertyName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string InputPropertyName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
