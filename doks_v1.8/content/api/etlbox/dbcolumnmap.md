---
title: "DbColumnMap"
description: "Details for Class DbColumnMap (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10199
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbColumnMap">
  <h1 id="ETLBox_DbColumnMap" data-uid="ETLBox.DbColumnMap" class="text-break">Class DbColumnMap</h1>
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
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute">Attribute</a></div>
    <div class="level2"><span class="xref">DbColumnMap</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.icloneable">ICloneable</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.equals">Attribute.Equals(object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type)">Attribute.GetCustomAttribute(Assembly, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type-system-boolean)">Attribute.GetCustomAttribute(Assembly, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type)">Attribute.GetCustomAttribute(MemberInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type-system-boolean)">Attribute.GetCustomAttribute(MemberInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type)">Attribute.GetCustomAttribute(Module, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type-system-boolean)">Attribute.GetCustomAttribute(Module, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type)">Attribute.GetCustomAttribute(ParameterInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type-system-boolean)">Attribute.GetCustomAttribute(ParameterInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly)">Attribute.GetCustomAttributes(Assembly)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-boolean)">Attribute.GetCustomAttributes(Assembly, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type)">Attribute.GetCustomAttributes(Assembly, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type-system-boolean)">Attribute.GetCustomAttributes(Assembly, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo)">Attribute.GetCustomAttributes(MemberInfo)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-boolean)">Attribute.GetCustomAttributes(MemberInfo, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type)">Attribute.GetCustomAttributes(MemberInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type-system-boolean)">Attribute.GetCustomAttributes(MemberInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module)">Attribute.GetCustomAttributes(Module)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-boolean)">Attribute.GetCustomAttributes(Module, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type)">Attribute.GetCustomAttributes(Module, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type-system-boolean)">Attribute.GetCustomAttributes(Module, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo)">Attribute.GetCustomAttributes(ParameterInfo)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-boolean)">Attribute.GetCustomAttributes(ParameterInfo, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type)">Attribute.GetCustomAttributes(ParameterInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type-system-boolean)">Attribute.GetCustomAttributes(ParameterInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode">Attribute.GetHashCode()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute">Attribute.IsDefaultAttribute()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type)">Attribute.IsDefined(Assembly, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type-system-boolean)">Attribute.IsDefined(Assembly, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type)">Attribute.IsDefined(MemberInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type-system-boolean)">Attribute.IsDefined(MemberInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type)">Attribute.IsDefined(Module, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type-system-boolean)">Attribute.IsDefined(Module, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type)">Attribute.IsDefined(ParameterInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type-system-boolean)">Attribute.IsDefined(ParameterInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.match">Attribute.Match(object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.typeid">Attribute.TypeId</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)">object.Equals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gettype">object.GetType()</a>
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
  <h5 id="ETLBox_DbColumnMap_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    [AttributeUsage(AttributeTargets.Property)]
public sealed class DbColumnMap : Attribute, ICloneable
```

{{< rawhtml >}}
  <h5 id="ETLBox_DbColumnMap_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp"> public class MyPoco
{
    [DbColumnMap("Column1")]
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>?</td>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.icloneable">ICloneable</a>
  </div>

{{< /rawhtml >}}
