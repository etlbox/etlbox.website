---
title: "ParquetColumn"
description: "Details for Class ParquetColumn (ETLBox.Parquet)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.parquet"
weight: 10308
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Parquet.ParquetColumn">
  <h1 id="ETLBox_Parquet_ParquetColumn" data-uid="ETLBox.Parquet.ParquetColumn" class="text-break">Class ParquetColumn
</h1>
  <div class="markdown level0 summary"><p>This attribute defines the mapping between a property name and the name of a column in a parquet file.
When using the ParquetDestination, the WriteOrder defines the order of the columns in the file.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute">Attribute</a></div>
    <div class="level2"><span class="xref">ParquetColumn</span></div>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Parquet</h6>
  <h6><strong>Assembly</strong>: ETLBox.Parquet.dll</h6>
  <h5 id="ETLBox_Parquet_ParquetColumn_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    [AttributeUsage(AttributeTargets.Property)]
public class ParquetColumn : Attribute
```

{{< rawhtml >}}
  <h5 id="ETLBox_Parquet_ParquetColumn_examples"><strong>Examples</strong></h5>
  <p>public class MyPoco
{
[ParquetColumn(&quot;NameInParquet&quot;, WriteOrder: 1)]
public string SomeProperty  { get; set; }
[ParquetColumn(WriterOrder: 2)]
public string AnotherProperty { get; set; }
}</p>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Parquet_ParquetColumn__ctor_" data-uid="ETLBox.Parquet.ParquetColumn.#ctor*"></a>
  <h4 id="ETLBox_Parquet_ParquetColumn__ctor" data-uid="ETLBox.Parquet.ParquetColumn.#ctor">ParquetColumn()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ParquetColumn()
```

{{< rawhtml >}}
  <a id="ETLBox_Parquet_ParquetColumn__ctor_" data-uid="ETLBox.Parquet.ParquetColumn.#ctor*"></a>
  <h4 id="ETLBox_Parquet_ParquetColumn__ctor_System_Int32_" data-uid="ETLBox.Parquet.ParquetColumn.#ctor(System.Int32)">ParquetColumn(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ParquetColumn(int writeOrder)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">writeOrder</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Parquet_ParquetColumn__ctor_" data-uid="ETLBox.Parquet.ParquetColumn.#ctor*"></a>
  <h4 id="ETLBox_Parquet_ParquetColumn__ctor_System_String_" data-uid="ETLBox.Parquet.ParquetColumn.#ctor(System.String)">ParquetColumn(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ParquetColumn(string columnName)
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
    </tbody>
  </table>
  <a id="ETLBox_Parquet_ParquetColumn__ctor_" data-uid="ETLBox.Parquet.ParquetColumn.#ctor*"></a>
  <h4 id="ETLBox_Parquet_ParquetColumn__ctor_System_String_System_Int32_" data-uid="ETLBox.Parquet.ParquetColumn.#ctor(System.String,System.Int32)">ParquetColumn(string, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ParquetColumn(string columnName, int writeOrder)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">writeOrder</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Parquet_ParquetColumn_ColumnName_" data-uid="ETLBox.Parquet.ParquetColumn.ColumnName*"></a>
  <h4 id="ETLBox_Parquet_ParquetColumn_ColumnName" data-uid="ETLBox.Parquet.ParquetColumn.ColumnName">ColumnName</h4>
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
  <a id="ETLBox_Parquet_ParquetColumn_PropertyName_" data-uid="ETLBox.Parquet.ParquetColumn.PropertyName*"></a>
  <h4 id="ETLBox_Parquet_ParquetColumn_PropertyName" data-uid="ETLBox.Parquet.ParquetColumn.PropertyName">PropertyName</h4>
  <div class="markdown level1 summary"></div>
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
  <a id="ETLBox_Parquet_ParquetColumn_WriteOrder_" data-uid="ETLBox.Parquet.ParquetColumn.WriteOrder*"></a>
  <h4 id="ETLBox_Parquet_ParquetColumn_WriteOrder" data-uid="ETLBox.Parquet.ParquetColumn.WriteOrder">WriteOrder</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int WriteOrder { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
