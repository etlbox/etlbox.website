---
title: "DataTypeConverterConfiguration"
description: "Details for Class DataTypeConverterConfiguration (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10218
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.DataTypeConverterConfiguration">
  <h1 id="ETLBox_Helper_DataTypeConverterConfiguration" data-uid="ETLBox.Helper.DataTypeConverterConfiguration" class="text-break">Class DataTypeConverterConfiguration</h1>
  <div class="markdown level0 summary"><p>Conversion settings for the DataTypeConverter.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">DataTypeConverterConfiguration</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_DataTypeConverterConfiguration_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class DataTypeConverterConfiguration
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Helper_DataTypeConverterConfiguration_DateTimeOffsetHandling_" data-uid="ETLBox.Helper.DataTypeConverterConfiguration.DateTimeOffsetHandling*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverterConfiguration_DateTimeOffsetHandling" data-uid="ETLBox.Helper.DataTypeConverterConfiguration.DateTimeOffsetHandling">DateTimeOffsetHandling</h4>
  <div class="markdown level1 summary"><p>If a DateTimeOffset needs to be converted into a DateTime object,
by default the offset is converted using the ToUtc method.
If you want to convert using the ToLocal method, set this property to ToLocal.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTimeOffsetHandling DateTimeOffsetHandling { get; set; }
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
        <td><a class="xref" href="/api/etlbox.helper/datetimeoffsethandling">DateTimeOffsetHandling</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
