---
title: "GenericTypeInfo"
description: "Details for Class GenericTypeInfo (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10193
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.GenericTypeInfo">
  <h1 id="ETLBox_GenericTypeInfo" data-uid="ETLBox.GenericTypeInfo" class="text-break">Class GenericTypeInfo
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">GenericTypeInfo</span></div>
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
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_GenericTypeInfo_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class GenericTypeInfo
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_GenericTypeInfo__ctor_" data-uid="ETLBox.GenericTypeInfo.#ctor*"></a>
  <h4 id="ETLBox_GenericTypeInfo__ctor_System_Type_" data-uid="ETLBox.GenericTypeInfo.#ctor(System.Type)">GenericTypeInfo(Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public GenericTypeInfo(Type type)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">type</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_GenericTypeInfo_AggregateColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.AggregateColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_AggregateColumnAttributes" data-uid="ETLBox.GenericTypeInfo.AggregateColumnAttributes">AggregateColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<AggregateColumn> AggregateColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/aggregatecolumn">AggregateColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_ColumnMapAttributes_" data-uid="ETLBox.GenericTypeInfo.ColumnMapAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_ColumnMapAttributes" data-uid="ETLBox.GenericTypeInfo.ColumnMapAttributes">ColumnMapAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<DbColumnMap> ColumnMapAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/dbcolumnmap">DbColumnMap</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_CompareColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.CompareColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_CompareColumnAttributes" data-uid="ETLBox.GenericTypeInfo.CompareColumnAttributes">CompareColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<CompareColumn> CompareColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/comparecolumn">CompareColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_DeleteColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.DeleteColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_DeleteColumnAttributes" data-uid="ETLBox.GenericTypeInfo.DeleteColumnAttributes">DeleteColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<DeleteColumn> DeleteColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/deletecolumn">DeleteColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_DistinctColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.DistinctColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_DistinctColumnAttributes" data-uid="ETLBox.GenericTypeInfo.DistinctColumnAttributes">DistinctColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<DistinctColumn> DistinctColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/distinctcolumn">DistinctColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_GroupColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.GroupColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_GroupColumnAttributes" data-uid="ETLBox.GenericTypeInfo.GroupColumnAttributes">GroupColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<GroupColumn> GroupColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/groupcolumn">GroupColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_IdColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.IdColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_IdColumnAttributes" data-uid="ETLBox.GenericTypeInfo.IdColumnAttributes">IdColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<IdColumn> IdColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/idcolumn">IdColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_IsArray_" data-uid="ETLBox.GenericTypeInfo.IsArray*"></a>
  <h4 id="ETLBox_GenericTypeInfo_IsArray" data-uid="ETLBox.GenericTypeInfo.IsArray">IsArray</h4>
  <div class="markdown level1 summary"><p>Indicates if the type is an array (e.g. string[])</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsArray { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_IsDynamic_" data-uid="ETLBox.GenericTypeInfo.IsDynamic*"></a>
  <h4 id="ETLBox_GenericTypeInfo_IsDynamic" data-uid="ETLBox.GenericTypeInfo.IsDynamic">IsDynamic</h4>
  <div class="markdown level1 summary"><p>Indicates if the type is an ExpandoObject</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsDynamic { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_IsPoco_" data-uid="ETLBox.GenericTypeInfo.IsPoco*"></a>
  <h4 id="ETLBox_GenericTypeInfo_IsPoco" data-uid="ETLBox.GenericTypeInfo.IsPoco">IsPoco</h4>
  <div class="markdown level1 summary"><p>Indicates if the type is an strong type object (Plain old CLR object)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsPoco { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_KeyColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.KeyColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_KeyColumnAttributes" data-uid="ETLBox.GenericTypeInfo.KeyColumnAttributes">KeyColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<KeyColumn> KeyColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/keycolumn">KeyColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_MatchColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.MatchColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_MatchColumnAttributes" data-uid="ETLBox.GenericTypeInfo.MatchColumnAttributes">MatchColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<MatchColumn> MatchColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/matchcolumn">MatchColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_Properties_" data-uid="ETLBox.GenericTypeInfo.Properties*"></a>
  <h4 id="ETLBox_GenericTypeInfo_Properties" data-uid="ETLBox.GenericTypeInfo.Properties">Properties</h4>
  <div class="markdown level1 summary"><p>Property info of the type</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<PropertyInfo> Properties { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo">PropertyInfo</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_PropertiesByName_" data-uid="ETLBox.GenericTypeInfo.PropertiesByName*"></a>
  <h4 id="ETLBox_GenericTypeInfo_PropertiesByName" data-uid="ETLBox.GenericTypeInfo.PropertiesByName">PropertiesByName</h4>
  <div class="markdown level1 summary"><p>Property info of the type by property name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Dictionary<string, PropertyInfo> PropertiesByName { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2">Dictionary</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo">PropertyInfo</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_PropertyNames_" data-uid="ETLBox.GenericTypeInfo.PropertyNames*"></a>
  <h4 id="ETLBox_GenericTypeInfo_PropertyNames" data-uid="ETLBox.GenericTypeInfo.PropertyNames">PropertyNames</h4>
  <div class="markdown level1 summary"><p>Property names of the type</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<string> PropertyNames { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_RenameColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.RenameColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_RenameColumnAttributes" data-uid="ETLBox.GenericTypeInfo.RenameColumnAttributes">RenameColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<RenameColumn> RenameColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/renamecolumn">RenameColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_RetrieveColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.RetrieveColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_RetrieveColumnAttributes" data-uid="ETLBox.GenericTypeInfo.RetrieveColumnAttributes">RetrieveColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<RetrieveColumn> RetrieveColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/retrievecolumn">RetrieveColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_SelectColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.SelectColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_SelectColumnAttributes" data-uid="ETLBox.GenericTypeInfo.SelectColumnAttributes">SelectColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<SelectColumn> SelectColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/selectcolumn">SelectColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_UnderlyingPropType_" data-uid="ETLBox.GenericTypeInfo.UnderlyingPropType*"></a>
  <h4 id="ETLBox_GenericTypeInfo_UnderlyingPropType" data-uid="ETLBox.GenericTypeInfo.UnderlyingPropType">UnderlyingPropType</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Dictionary<PropertyInfo, Type> UnderlyingPropType { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2">Dictionary</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo">PropertyInfo</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_UpdateColumnAttributes_" data-uid="ETLBox.GenericTypeInfo.UpdateColumnAttributes*"></a>
  <h4 id="ETLBox_GenericTypeInfo_UpdateColumnAttributes" data-uid="ETLBox.GenericTypeInfo.UpdateColumnAttributes">UpdateColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<UpdateColumn> UpdateColumnAttributes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/updatecolumn">UpdateColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_ValueGeneratedColumns_" data-uid="ETLBox.GenericTypeInfo.ValueGeneratedColumns*"></a>
  <h4 id="ETLBox_GenericTypeInfo_ValueGeneratedColumns" data-uid="ETLBox.GenericTypeInfo.ValueGeneratedColumns">ValueGeneratedColumns</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<ValueGenerationColumn> ValueGeneratedColumns { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox/valuegenerationcolumn">ValueGenerationColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_GenericTypeInfo_GatherTypeInfo_" data-uid="ETLBox.GenericTypeInfo.GatherTypeInfo*"></a>
  <h4 id="ETLBox_GenericTypeInfo_GatherTypeInfo_ETLBox_AttributeType_" data-uid="ETLBox.GenericTypeInfo.GatherTypeInfo(ETLBox.AttributeType)">GatherTypeInfo(AttributeType)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public GenericTypeInfo GatherTypeInfo(AttributeType propertyAttributes = AttributeType.None)
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
        <td><a class="xref" href="/api/etlbox/attributetype">AttributeType</a></td>
        <td><span class="parametername">propertyAttributes</span></td>
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
        <td><a class="xref" href="/api/etlbox/generictypeinfo">GenericTypeInfo</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_IsNumericType_" data-uid="ETLBox.GenericTypeInfo.IsNumericType*"></a>
  <h4 id="ETLBox_GenericTypeInfo_IsNumericType_System_Type_" data-uid="ETLBox.GenericTypeInfo.IsNumericType(System.Type)">IsNumericType(Type)</h4>
  <div class="markdown level1 summary"><p>Determines if a type is numeric.  Nullable numeric types are considered numeric.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool IsNumericType(Type type)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">type</span></td>
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
  <h5 id="ETLBox_GenericTypeInfo_IsNumericType_System_Type__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p>Boolean is not considered numeric.
<a href="http://stackoverflow.com/a/5182747/172132">http://stackoverflow.com/a/5182747/172132</a></p>
</div>
  <a id="ETLBox_GenericTypeInfo_RetrieveAdditionalTypeInfo_" data-uid="ETLBox.GenericTypeInfo.RetrieveAdditionalTypeInfo*"></a>
  <h4 id="ETLBox_GenericTypeInfo_RetrieveAdditionalTypeInfo_System_Reflection_PropertyInfo_System_Int32_" data-uid="ETLBox.GenericTypeInfo.RetrieveAdditionalTypeInfo(System.Reflection.PropertyInfo,System.Int32)">RetrieveAdditionalTypeInfo(PropertyInfo, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void RetrieveAdditionalTypeInfo(PropertyInfo propInfo, int currentIndex)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo">PropertyInfo</a></td>
        <td><span class="parametername">propInfo</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">currentIndex</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_SetValueOrThrow_" data-uid="ETLBox.GenericTypeInfo.SetValueOrThrow*"></a>
  <h4 id="ETLBox_GenericTypeInfo_SetValueOrThrow_System_Reflection_PropertyInfo_System_Object_System_Object_" data-uid="ETLBox.GenericTypeInfo.SetValueOrThrow(System.Reflection.PropertyInfo,System.Object,System.Object)">SetValueOrThrow(PropertyInfo, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void SetValueOrThrow(PropertyInfo propInfo, object obj, object value)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo">PropertyInfo</a></td>
        <td><span class="parametername">propInfo</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_SetValueOrThrow_" data-uid="ETLBox.GenericTypeInfo.SetValueOrThrow*"></a>
  <h4 id="ETLBox_GenericTypeInfo_SetValueOrThrow_System_String_System_Object_System_Object_" data-uid="ETLBox.GenericTypeInfo.SetValueOrThrow(System.String,System.Object,System.Object)">SetValueOrThrow(string, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void SetValueOrThrow(string propName, object obj, object value)
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
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_TrySetValue_" data-uid="ETLBox.GenericTypeInfo.TrySetValue*"></a>
  <h4 id="ETLBox_GenericTypeInfo_TrySetValue_System_Reflection_PropertyInfo_System_Object_System_Object_" data-uid="ETLBox.GenericTypeInfo.TrySetValue(System.Reflection.PropertyInfo,System.Object,System.Object)">TrySetValue(PropertyInfo, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void TrySetValue(PropertyInfo propInfo, object obj, object value)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.reflection.propertyinfo">PropertyInfo</a></td>
        <td><span class="parametername">propInfo</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_GenericTypeInfo_TrySetValue_" data-uid="ETLBox.GenericTypeInfo.TrySetValue*"></a>
  <h4 id="ETLBox_GenericTypeInfo_TrySetValue_System_String_System_Object_System_Object_" data-uid="ETLBox.GenericTypeInfo.TrySetValue(System.String,System.Object,System.Object)">TrySetValue(string, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void TrySetValue(string propName, object obj, object value)
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
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
