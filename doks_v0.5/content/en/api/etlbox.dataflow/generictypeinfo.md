---
title: "GenericTypeInfo"
description: "Details for Class GenericTypeInfo (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10166
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.GenericTypeInfo">
  <h1 id="ETLBox_DataFlow_GenericTypeInfo" data-uid="ETLBox.DataFlow.GenericTypeInfo" class="text-break">Class GenericTypeInfo
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">GenericTypeInfo</span></div>
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
  <h5 id="ETLBox_DataFlow_GenericTypeInfo_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class GenericTypeInfo
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_GenericTypeInfo__ctor_" data-uid="ETLBox.DataFlow.GenericTypeInfo.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo__ctor_System_Type_" data-uid="ETLBox.DataFlow.GenericTypeInfo.#ctor(System.Type)">GenericTypeInfo(Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public GenericTypeInfo(Type type)
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
        <td><span class="xref">System.Type</span></td>
        <td><span class="parametername">type</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_GenericTypeInfo_AggregateColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.AggregateColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_AggregateColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.AggregateColumnAttributes">AggregateColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<AggregateColumn> AggregateColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/aggregatecolumn">AggregateColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_ColumnMapAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.ColumnMapAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_ColumnMapAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.ColumnMapAttributes">ColumnMapAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<ColumnMap> ColumnMapAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/columnmap">ColumnMap</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_CompareColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.CompareColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_CompareColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.CompareColumnAttributes">CompareColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<CompareColumn> CompareColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/comparecolumn">CompareColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_DeleteColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.DeleteColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_DeleteColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.DeleteColumnAttributes">DeleteColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<DeleteColumn> DeleteColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/deletecolumn">DeleteColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_DistinctColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.DistinctColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_DistinctColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.DistinctColumnAttributes">DistinctColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<DistinctColumn> DistinctColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/distinctcolumn">DistinctColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_GroupColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.GroupColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_GroupColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.GroupColumnAttributes">GroupColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<GroupColumn> GroupColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/groupcolumn">GroupColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_IdColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.IdColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_IdColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.IdColumnAttributes">IdColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<IdColumn> IdColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/idcolumn">IdColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_IsArray_" data-uid="ETLBox.DataFlow.GenericTypeInfo.IsArray*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_IsArray" data-uid="ETLBox.DataFlow.GenericTypeInfo.IsArray">IsArray</h4>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_IsDynamic_" data-uid="ETLBox.DataFlow.GenericTypeInfo.IsDynamic*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_IsDynamic" data-uid="ETLBox.DataFlow.GenericTypeInfo.IsDynamic">IsDynamic</h4>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_IsPoco_" data-uid="ETLBox.DataFlow.GenericTypeInfo.IsPoco*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_IsPoco" data-uid="ETLBox.DataFlow.GenericTypeInfo.IsPoco">IsPoco</h4>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_KeyColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.KeyColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_KeyColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.KeyColumnAttributes">KeyColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<KeyColumn> KeyColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/keycolumn">KeyColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_MatchColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.MatchColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_MatchColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.MatchColumnAttributes">MatchColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<MatchColumn> MatchColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/matchcolumn">MatchColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_Properties_" data-uid="ETLBox.DataFlow.GenericTypeInfo.Properties*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_Properties" data-uid="ETLBox.DataFlow.GenericTypeInfo.Properties">Properties</h4>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<span class="xref">System.Reflection.PropertyInfo</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_PropertiesByName_" data-uid="ETLBox.DataFlow.GenericTypeInfo.PropertiesByName*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_PropertiesByName" data-uid="ETLBox.DataFlow.GenericTypeInfo.PropertiesByName">PropertiesByName</h4>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Collections.Generic.Dictionary&lt;TKey, TValue&gt;</span>&lt;<span class="xref">string</span>, <span class="xref">System.Reflection.PropertyInfo</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_PropertyNames_" data-uid="ETLBox.DataFlow.GenericTypeInfo.PropertyNames*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_PropertyNames" data-uid="ETLBox.DataFlow.GenericTypeInfo.PropertyNames">PropertyNames</h4>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_RenameColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.RenameColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_RenameColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.RenameColumnAttributes">RenameColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<RenameColumn> RenameColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/renamecolumn">RenameColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_RetrieveColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.RetrieveColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_RetrieveColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.RetrieveColumnAttributes">RetrieveColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<RetrieveColumn> RetrieveColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/retrievecolumn">RetrieveColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_SelectColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.SelectColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_SelectColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.SelectColumnAttributes">SelectColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<SelectColumn> SelectColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/selectcolumn">SelectColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_UnderlyingPropType_" data-uid="ETLBox.DataFlow.GenericTypeInfo.UnderlyingPropType*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_UnderlyingPropType" data-uid="ETLBox.DataFlow.GenericTypeInfo.UnderlyingPropType">UnderlyingPropType</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Dictionary<PropertyInfo, Type> UnderlyingPropType { get; }
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
        <td><span class="xref">System.Collections.Generic.Dictionary&lt;TKey, TValue&gt;</span>&lt;<span class="xref">System.Reflection.PropertyInfo</span>, <span class="xref">System.Type</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_UpdateColumnAttributes_" data-uid="ETLBox.DataFlow.GenericTypeInfo.UpdateColumnAttributes*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_UpdateColumnAttributes" data-uid="ETLBox.DataFlow.GenericTypeInfo.UpdateColumnAttributes">UpdateColumnAttributes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<UpdateColumn> UpdateColumnAttributes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/updatecolumn">UpdateColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_ValueGeneratedColumns_" data-uid="ETLBox.DataFlow.GenericTypeInfo.ValueGeneratedColumns*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_ValueGeneratedColumns" data-uid="ETLBox.DataFlow.GenericTypeInfo.ValueGeneratedColumns">ValueGeneratedColumns</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<ValueGenerationColumn> ValueGeneratedColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/valuegenerationcolumn">ValueGenerationColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_GenericTypeInfo_GatherTypeInfo_" data-uid="ETLBox.DataFlow.GenericTypeInfo.GatherTypeInfo*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_GatherTypeInfo_ETLBox_DataFlow_AttributeType_" data-uid="ETLBox.DataFlow.GenericTypeInfo.GatherTypeInfo(ETLBox.DataFlow.AttributeType)">GatherTypeInfo(AttributeType)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public GenericTypeInfo GatherTypeInfo(AttributeType propertyAttributes = AttributeType.None)
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
        <td><a class="xref" href="/api/etlbox.dataflow/attributetype">AttributeType</a></td>
        <td><span class="parametername">propertyAttributes</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox.dataflow/generictypeinfo">GenericTypeInfo</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_IsNumericType_" data-uid="ETLBox.DataFlow.GenericTypeInfo.IsNumericType*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_IsNumericType_System_Type_" data-uid="ETLBox.DataFlow.GenericTypeInfo.IsNumericType(System.Type)">IsNumericType(Type)</h4>
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
        <td><span class="xref">System.Type</span></td>
        <td><span class="parametername">type</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_GenericTypeInfo_IsNumericType_System_Type__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p>Boolean is not considered numeric.
<a href="http://stackoverflow.com/a/5182747/172132">http://stackoverflow.com/a/5182747/172132</a></p>
</div>
  <a id="ETLBox_DataFlow_GenericTypeInfo_RetrieveAdditionalTypeInfo_" data-uid="ETLBox.DataFlow.GenericTypeInfo.RetrieveAdditionalTypeInfo*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_RetrieveAdditionalTypeInfo_System_Reflection_PropertyInfo_System_Int32_" data-uid="ETLBox.DataFlow.GenericTypeInfo.RetrieveAdditionalTypeInfo(System.Reflection.PropertyInfo,System.Int32)">RetrieveAdditionalTypeInfo(PropertyInfo, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void RetrieveAdditionalTypeInfo(PropertyInfo propInfo, int currentIndex)
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
        <td><span class="xref">System.Reflection.PropertyInfo</span></td>
        <td><span class="parametername">propInfo</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">currentIndex</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_SetValueOrThrow_" data-uid="ETLBox.DataFlow.GenericTypeInfo.SetValueOrThrow*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_SetValueOrThrow_System_Reflection_PropertyInfo_System_Object_System_Object_" data-uid="ETLBox.DataFlow.GenericTypeInfo.SetValueOrThrow(System.Reflection.PropertyInfo,System.Object,System.Object)">SetValueOrThrow(PropertyInfo, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void SetValueOrThrow(PropertyInfo propInfo, object obj, object value)
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
        <td><span class="xref">System.Reflection.PropertyInfo</span></td>
        <td><span class="parametername">propInfo</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_SetValueOrThrow_" data-uid="ETLBox.DataFlow.GenericTypeInfo.SetValueOrThrow*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_SetValueOrThrow_System_String_System_Object_System_Object_" data-uid="ETLBox.DataFlow.GenericTypeInfo.SetValueOrThrow(System.String,System.Object,System.Object)">SetValueOrThrow(string, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void SetValueOrThrow(string propName, object obj, object value)
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
        <td><span class="parametername">propName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_TrySetValue_" data-uid="ETLBox.DataFlow.GenericTypeInfo.TrySetValue*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_TrySetValue_System_Reflection_PropertyInfo_System_Object_System_Object_" data-uid="ETLBox.DataFlow.GenericTypeInfo.TrySetValue(System.Reflection.PropertyInfo,System.Object,System.Object)">TrySetValue(PropertyInfo, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void TrySetValue(PropertyInfo propInfo, object obj, object value)
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
        <td><span class="xref">System.Reflection.PropertyInfo</span></td>
        <td><span class="parametername">propInfo</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_GenericTypeInfo_TrySetValue_" data-uid="ETLBox.DataFlow.GenericTypeInfo.TrySetValue*"></a>
  <h4 id="ETLBox_DataFlow_GenericTypeInfo_TrySetValue_System_String_System_Object_System_Object_" data-uid="ETLBox.DataFlow.GenericTypeInfo.TrySetValue(System.String,System.Object,System.Object)">TrySetValue(string, object, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void TrySetValue(string propName, object obj, object value)
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
        <td><span class="parametername">propName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
