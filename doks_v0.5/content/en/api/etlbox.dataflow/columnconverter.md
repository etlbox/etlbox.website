---
title: "ColumnConverter"
description: "Details for Class ColumnConverter (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10108
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
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">ColumnConverter</span></div>
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
        <td><span class="parametername">columnName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
