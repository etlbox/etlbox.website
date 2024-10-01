---
title: "DataTypeTester"
description: "Details for Class DataTypeTester (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10220
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.DataTypeTester">
  <h1 id="ETLBox_Helper_DataTypeTester" data-uid="ETLBox.Helper.DataTypeTester" class="text-break">Class DataTypeTester
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">DataTypeTester</span></div>
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
  <h5 id="ETLBox_Helper_DataTypeTester_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class DataTypeTester
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_Helper_DataTypeTester_IgnorePropNames" data-uid="ETLBox.Helper.DataTypeTester.IgnorePropNames">IgnorePropNames</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<string> IgnorePropNames
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Helper_DataTypeTester_ConvertibleTypes_" data-uid="ETLBox.Helper.DataTypeTester.ConvertibleTypes*"></a>
  <h4 id="ETLBox_Helper_DataTypeTester_ConvertibleTypes" data-uid="ETLBox.Helper.DataTypeTester.ConvertibleTypes">ConvertibleTypes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConvertibleTestDefinition[] ConvertibleTypes { get; set; }
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
        <td><a class="xref" href="/api/etlbox.helper/convertibletestdefinition">ConvertibleTestDefinition</a>[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeTester_DateTimeStyles_" data-uid="ETLBox.Helper.DataTypeTester.DateTimeStyles*"></a>
  <h4 id="ETLBox_Helper_DataTypeTester_DateTimeStyles" data-uid="ETLBox.Helper.DataTypeTester.DateTimeStyles">DateTimeStyles</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTimeStyles DateTimeStyles { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.globalization.datetimestyles">DateTimeStyles</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeTester_DefaultConvertibleTypes_" data-uid="ETLBox.Helper.DataTypeTester.DefaultConvertibleTypes*"></a>
  <h4 id="ETLBox_Helper_DataTypeTester_DefaultConvertibleTypes" data-uid="ETLBox.Helper.DataTypeTester.DefaultConvertibleTypes">DefaultConvertibleTypes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConvertibleTestDefinition[] DefaultConvertibleTypes { get; }
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
        <td><a class="xref" href="/api/etlbox.helper/convertibletestdefinition">ConvertibleTestDefinition</a>[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeTester_FormatProvider_" data-uid="ETLBox.Helper.DataTypeTester.FormatProvider*"></a>
  <h4 id="ETLBox_Helper_DataTypeTester_FormatProvider" data-uid="ETLBox.Helper.DataTypeTester.FormatProvider">FormatProvider</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IFormatProvider FormatProvider { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iformatprovider">IFormatProvider</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeTester_NumberStyles_" data-uid="ETLBox.Helper.DataTypeTester.NumberStyles*"></a>
  <h4 id="ETLBox_Helper_DataTypeTester_NumberStyles" data-uid="ETLBox.Helper.DataTypeTester.NumberStyles">NumberStyles</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public NumberStyles NumberStyles { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.globalization.numberstyles">NumberStyles</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_DataTypeTester_Convert_" data-uid="ETLBox.Helper.DataTypeTester.Convert*"></a>
  <h4 id="ETLBox_Helper_DataTypeTester_Convert_System_Object_" data-uid="ETLBox.Helper.DataTypeTester.Convert(System.Object)">Convert(dynamic)</h4>
  <div class="markdown level1 summary"><p>Tries to convert all properties that are currently strings to the best fitting type.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public dynamic Convert(dynamic dynamicObject)
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
        <td><span class="xref">dynamic</span></td>
        <td><span class="parametername">dynamicObject</span></td>
        <td></td>
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
        <td><span class="xref">dynamic</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeTester_ConvertDynamic_" data-uid="ETLBox.Helper.DataTypeTester.ConvertDynamic*"></a>
  <h4 id="ETLBox_Helper_DataTypeTester_ConvertDynamic_System_Object_" data-uid="ETLBox.Helper.DataTypeTester.ConvertDynamic(System.Object)">ConvertDynamic(dynamic)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static dynamic ConvertDynamic(dynamic dynamicObject)
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
        <td><span class="xref">dynamic</span></td>
        <td><span class="parametername">dynamicObject</span></td>
        <td></td>
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
        <td><span class="xref">dynamic</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeTester_ConvertDynamic_" data-uid="ETLBox.Helper.DataTypeTester.ConvertDynamic*"></a>
  <h4 id="ETLBox_Helper_DataTypeTester_ConvertDynamic_System_Object_System_IFormatProvider_" data-uid="ETLBox.Helper.DataTypeTester.ConvertDynamic(System.Object,System.IFormatProvider)">ConvertDynamic(dynamic, IFormatProvider)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static dynamic ConvertDynamic(dynamic dynamicObject, IFormatProvider formatProvider)
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
        <td><span class="xref">dynamic</span></td>
        <td><span class="parametername">dynamicObject</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iformatprovider">IFormatProvider</a></td>
        <td><span class="parametername">formatProvider</span></td>
        <td></td>
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
        <td><span class="xref">dynamic</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
