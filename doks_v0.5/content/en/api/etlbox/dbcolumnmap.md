---
title: "DbColumnMap"
description: "Details for Class DbColumnMap (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10152
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbColumnMap">
  <h1 id="ETLBox_DbColumnMap" data-uid="ETLBox.DbColumnMap" class="text-break">Class DbColumnMap
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
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">System.Attribute</span></div>
    <div class="level2"><span class="xref">DbColumnMap</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><span class="xref">System.ICloneable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Attribute.Equals(object)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Assembly, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Module, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Type, bool)</span>
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
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Assembly, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Module, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.Match(object)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.TypeId</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
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
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DbColumnMap_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    [AttributeUsage(AttributeTargets.Property)]
public sealed class DbColumnMap : Attribute, ICloneable
```

{{< rawhtml >}}
  <h5 id="ETLBox_DbColumnMap_examples"><strong>Examples</strong></h5>
  <pre><code> public class MyPoco
{
    [DbColumnMap(&quot;Column1&quot;)]
    public string Prop1 { get; set; }
}</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DbColumnMap__ctor_" data-uid="ETLBox.DbColumnMap.#ctor*"></a>
  <h4 id="ETLBox_DbColumnMap__ctor" data-uid="ETLBox.DbColumnMap.#ctor">DbColumnMap()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbColumnMap()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DbColumnMap__ctor_examples">Examples</h5>
  <pre><code> public class MyPoco
{
    [DbColumnMap(&quot;Column1&quot;)]
    public string Prop1 { get; set; }
}</code></pre>
  <a id="ETLBox_DbColumnMap__ctor_" data-uid="ETLBox.DbColumnMap.#ctor*"></a>
  <h4 id="ETLBox_DbColumnMap__ctor_System_String_" data-uid="ETLBox.DbColumnMap.#ctor(System.String)">DbColumnMap(string)</h4>
  <div class="markdown level1 summary"><p>Creates a mapping between the a property and a database column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbColumnMap(string dbColumnName)
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
        <td><span class="parametername">dbColumnName</span></td>
        <td><p>The name of the column in the database</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DbColumnMap_ArrayIndex_" data-uid="ETLBox.DbColumnMap.ArrayIndex*"></a>
  <h4 id="ETLBox_DbColumnMap_ArrayIndex" data-uid="ETLBox.DbColumnMap.ArrayIndex">ArrayIndex</h4>
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
        <td><span class="xref">int</span>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbColumnMap_DbColumnName_" data-uid="ETLBox.DbColumnMap.DbColumnName*"></a>
  <h4 id="ETLBox_DbColumnMap_DbColumnName" data-uid="ETLBox.DbColumnMap.DbColumnName">DbColumnName</h4>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbColumnMap_IgnoreColumn_" data-uid="ETLBox.DbColumnMap.IgnoreColumn*"></a>
  <h4 id="ETLBox_DbColumnMap_IgnoreColumn" data-uid="ETLBox.DbColumnMap.IgnoreColumn">IgnoreColumn</h4>
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbColumnMap_PropertyName_" data-uid="ETLBox.DbColumnMap.PropertyName*"></a>
  <h4 id="ETLBox_DbColumnMap_PropertyName" data-uid="ETLBox.DbColumnMap.PropertyName">PropertyName</h4>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DbColumnMap_Clone_" data-uid="ETLBox.DbColumnMap.Clone*"></a>
  <h4 id="ETLBox_DbColumnMap_Clone" data-uid="ETLBox.DbColumnMap.Clone">Clone()</h4>
  <div class="markdown level1 summary"></div>
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
        <td><span class="xref">object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DbColumnMap_Clone_examples">Examples</h5>
  <pre><code> public class MyPoco
{
    [DbColumnMap(&quot;Column1&quot;)]
    public string Prop1 { get; set; }
}</code></pre>
  <h3 id="implements">Implements</h3>
  <div>
      <span class="xref">System.ICloneable</span>
  </div>

{{< /rawhtml >}}
