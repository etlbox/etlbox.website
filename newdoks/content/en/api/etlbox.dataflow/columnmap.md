---
title: "ColumnMap"
description: "Details for Class ColumnMap (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10086
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.ColumnMap">
  <h1 id="ETLBox_DataFlow_ColumnMap" data-uid="ETLBox.DataFlow.ColumnMap" class="text-break">Class ColumnMap
</h1>
  <div class="markdown level0 summary"><p>This attribute defines the mapping between property names in the objects and column names
in the database.
By default, when reading or writing data from/into a database, properties in your objects
are mapped to database columns with the same name (case-sensitive). Using this attribute, you can
add your own mapping. (E.g. a property &quot;Prop1&quot; is mapped by default to the database column &quot;Prop1&quot;.
Create a column mapping to change the mapping to &quot;Column1&quot;)</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">System.Attribute</span></div>
    <div class="level2"><span class="xref">ColumnMap</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><span class="xref">System.ICloneable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Attribute.Equals(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Assembly, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Module, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefaultAttribute()</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Assembly, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Module, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.Match(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.TypeId</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.GetType()</span>
    </div>
    <div>
      <span class="xref">System.Object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">System.Object.ReferenceEquals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_ColumnMap_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    [AttributeUsage(AttributeTargets.Property)]
public sealed class ColumnMap : Attribute, ICloneable
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_ColumnMap_examples"><strong>Examples</strong></h5>
  <pre><code> public class MyPoco
{
    [ColumnMap(&quot;Column1&quot;)]
    public string Prop1 { get; set; }
}</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_ColumnMap__ctor_" data-uid="ETLBox.DataFlow.ColumnMap.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_ColumnMap__ctor" data-uid="ETLBox.DataFlow.ColumnMap.#ctor">ColumnMap()</h4>
  <div class="markdown level1 summary"><p>This attribute defines the mapping between property names in the objects and column names
in the database.
By default, when reading or writing data from/into a database, properties in your objects
are mapped to database columns with the same name (case-sensitive). Using this attribute, you can
add your own mapping. (E.g. a property &quot;Prop1&quot; is mapped by default to the database column &quot;Prop1&quot;.
Create a column mapping to change the mapping to &quot;Column1&quot;)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ColumnMap()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_ColumnMap__ctor_examples">Examples</h5>
  <pre><code> public class MyPoco
{
    [ColumnMap(&quot;Column1&quot;)]
    public string Prop1 { get; set; }
}</code></pre>
  <a id="ETLBox_DataFlow_ColumnMap__ctor_" data-uid="ETLBox.DataFlow.ColumnMap.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_ColumnMap__ctor_System_String_" data-uid="ETLBox.DataFlow.ColumnMap.#ctor(System.String)">ColumnMap(String)</h4>
  <div class="markdown level1 summary"><p>Creates a mapping between the a property and a database column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ColumnMap(string dbColumnName)
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">dbColumnName</span></td>
        <td><p>The name of the column in the database</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_ColumnMap_ArrayIndex_" data-uid="ETLBox.DataFlow.ColumnMap.ArrayIndex*"></a>
  <h4 id="ETLBox_DataFlow_ColumnMap_ArrayIndex" data-uid="ETLBox.DataFlow.ColumnMap.ArrayIndex">ArrayIndex</h4>
  <div class="markdown level1 summary"><p>Index of the element in the array, only necessary if you use arrays
as data type</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int? ArrayIndex { get; set; }
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
        <td><span class="xref">System.Nullable</span>&lt;<span class="xref">System.Int32</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_ColumnMap_DbColumnName_" data-uid="ETLBox.DataFlow.ColumnMap.DbColumnName*"></a>
  <h4 id="ETLBox_DataFlow_ColumnMap_DbColumnName" data-uid="ETLBox.DataFlow.ColumnMap.DbColumnName">DbColumnName</h4>
  <div class="markdown level1 summary"><p>Name of the database column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DbColumnName { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_ColumnMap_IgnoreColumn_" data-uid="ETLBox.DataFlow.ColumnMap.IgnoreColumn*"></a>
  <h4 id="ETLBox_DataFlow_ColumnMap_IgnoreColumn" data-uid="ETLBox.DataFlow.ColumnMap.IgnoreColumn">IgnoreColumn</h4>
  <div class="markdown level1 summary"><p>If set to true, this property will be ignored and not mapped to any column.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IgnoreColumn { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_ColumnMap_PropertyName_" data-uid="ETLBox.DataFlow.ColumnMap.PropertyName*"></a>
  <h4 id="ETLBox_DataFlow_ColumnMap_PropertyName" data-uid="ETLBox.DataFlow.ColumnMap.PropertyName">PropertyName</h4>
  <div class="markdown level1 summary"><p>Name of the property that should be mapped to a database column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string PropertyName { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_ColumnMap_Clone_" data-uid="ETLBox.DataFlow.ColumnMap.Clone*"></a>
  <h4 id="ETLBox_DataFlow_ColumnMap_Clone" data-uid="ETLBox.DataFlow.ColumnMap.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>This attribute defines the mapping between property names in the objects and column names
in the database.
By default, when reading or writing data from/into a database, properties in your objects
are mapped to database columns with the same name (case-sensitive). Using this attribute, you can
add your own mapping. (E.g. a property &quot;Prop1&quot; is mapped by default to the database column &quot;Prop1&quot;.
Create a column mapping to change the mapping to &quot;Column1&quot;)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object Clone()
```

{{< rawhtml >}}
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
        <td><span class="xref">System.Object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_ColumnMap_Clone_examples">Examples</h5>
  <pre><code> public class MyPoco
{
    [ColumnMap(&quot;Column1&quot;)]
    public string Prop1 { get; set; }
}</code></pre>
  <h3 id="implements">Implements</h3>
  <div>
      <span class="xref">System.ICloneable</span>
  </div>

{{< /rawhtml >}}
