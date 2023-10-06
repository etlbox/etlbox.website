---
title: "ColumnConverter"
description: "Details for Class ColumnConverter (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10096
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.ColumnConverter">
  <h1 id="ETLBox_DataFlow_ColumnConverter" data-uid="ETLBox.DataFlow.ColumnConverter" class="text-break">Class ColumnConverter
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">ColumnConverter</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_ColumnConverter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ColumnConverter
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_ColumnConverter__ctor_" data-uid="ETLBox.DataFlow.ColumnConverter.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_ColumnConverter__ctor" data-uid="ETLBox.DataFlow.ColumnConverter.#ctor">ColumnConverter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ColumnConverter()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_ColumnConverter__ctor_" data-uid="ETLBox.DataFlow.ColumnConverter.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_ColumnConverter__ctor_System_String_System_Func_System_Object_System_Object__" data-uid="ETLBox.DataFlow.ColumnConverter.#ctor(System.String,System.Func{System.Object,System.Object})">ColumnConverter(string, Func&lt;object, object&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ColumnConverter(string columnName, Func<object, object> conversionFunc)
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
        <td><span class="parametername">columnName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;<span class="xref">object</span>, <span class="xref">object</span>&gt;</td>
        <td><span class="parametername">conversionFunc</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_ColumnConverter_ColumnName_" data-uid="ETLBox.DataFlow.ColumnConverter.ColumnName*"></a>
  <h4 id="ETLBox_DataFlow_ColumnConverter_ColumnName" data-uid="ETLBox.DataFlow.ColumnConverter.ColumnName">ColumnName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ColumnName { get; set; }
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
  <a id="ETLBox_DataFlow_ColumnConverter_ConversionFunc_" data-uid="ETLBox.DataFlow.ColumnConverter.ConversionFunc*"></a>
  <h4 id="ETLBox_DataFlow_ColumnConverter_ConversionFunc" data-uid="ETLBox.DataFlow.ColumnConverter.ConversionFunc">ConversionFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<object, object> ConversionFunc { get; set; }
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
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;<span class="xref">object</span>, <span class="xref">object</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
