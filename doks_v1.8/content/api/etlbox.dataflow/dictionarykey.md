---
title: "DictionaryKey"
description: "Details for Class DictionaryKey (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10145
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.DictionaryKey">
  <h1 id="ETLBox_DataFlow_DictionaryKey" data-uid="ETLBox.DataFlow.DictionaryKey" class="text-break">Class DictionaryKey</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">DictionaryKey</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)">object.Equals(object, object)</a>
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
  <h5 id="ETLBox_DataFlow_DictionaryKey_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class DictionaryKey
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_DictionaryKey_KeyValuesByName_" data-uid="ETLBox.DataFlow.DictionaryKey.KeyValuesByName*"></a>
  <h4 id="ETLBox_DataFlow_DictionaryKey_KeyValuesByName" data-uid="ETLBox.DataFlow.DictionaryKey.KeyValuesByName">KeyValuesByName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Dictionary<string, object> KeyValuesByName { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_DictionaryKey_Add_" data-uid="ETLBox.DataFlow.DictionaryKey.Add*"></a>
  <h4 id="ETLBox_DataFlow_DictionaryKey_Add_System_String_System_Object_System_Boolean_" data-uid="ETLBox.DataFlow.DictionaryKey.Add(System.String,System.Object,System.Boolean)">Add(string, object, bool)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Add(string propName, object value, bool convertNumericIntoString = false)
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
        <td><span class="parametername">propName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">convertNumericIntoString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DictionaryKey_Create_" data-uid="ETLBox.DataFlow.DictionaryKey.Create*"></a>
  <h4 id="ETLBox_DataFlow_DictionaryKey_Create_System_Boolean_System_Collections_Generic_KeyValuePair_System_String_System_Object____" data-uid="ETLBox.DataFlow.DictionaryKey.Create(System.Boolean,System.Collections.Generic.KeyValuePair{System.String,System.Object}[])">Create(bool, params KeyValuePair&lt;string, object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static DictionaryKey Create(bool convertNumericIntoString = false, params KeyValuePair<string, object>[] keyValuesByName)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">convertNumericIntoString</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2">KeyValuePair</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;[]</td>
        <td><span class="parametername">keyValuesByName</span></td>
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
        <td><a class="xref" href="/api/etlbox.dataflow/dictionarykey">DictionaryKey</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DictionaryKey_Equals_" data-uid="ETLBox.DataFlow.DictionaryKey.Equals*"></a>
  <h4 id="ETLBox_DataFlow_DictionaryKey_Equals_System_Object_" data-uid="ETLBox.DataFlow.DictionaryKey.Equals(System.Object)">Equals(object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool Equals(object obj)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">obj</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)">object.Equals(object)</a></div>
  <a id="ETLBox_DataFlow_DictionaryKey_GetHashCode_" data-uid="ETLBox.DataFlow.DictionaryKey.GetHashCode*"></a>
  <h4 id="ETLBox_DataFlow_DictionaryKey_GetHashCode" data-uid="ETLBox.DataFlow.DictionaryKey.GetHashCode">GetHashCode()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int GetHashCode()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode">object.GetHashCode()</a></div>
  <a id="ETLBox_DataFlow_DictionaryKey_KeysAsString_" data-uid="ETLBox.DataFlow.DictionaryKey.KeysAsString*"></a>
  <h4 id="ETLBox_DataFlow_DictionaryKey_KeysAsString" data-uid="ETLBox.DataFlow.DictionaryKey.KeysAsString">KeysAsString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string KeysAsString()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
