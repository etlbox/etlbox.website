---
title: "ParquetColumn"
description: "Details for Class ParquetColumn (ETLBox.Parquet)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.parquet"
weight: 10249
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
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">System.Attribute</span></div>
    <div class="level2"><span class="xref">ParquetColumn</span></div>
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
  <h5 id="ETLBox_Parquet_ParquetColumn__ctor_examples">Examples</h5>
  <p>public class MyPoco
{
[ParquetColumn(&quot;NameInParquet&quot;, WriteOrder: 1)]
public string SomeProperty  { get; set; }
[ParquetColumn(WriterOrder: 2)]
public string AnotherProperty { get; set; }
}</p>
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">writeOrder</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Parquet_ParquetColumn__ctor_System_Int32__examples">Examples</h5>
  <p>public class MyPoco
{
[ParquetColumn(&quot;NameInParquet&quot;, WriteOrder: 1)]
public string SomeProperty  { get; set; }
[ParquetColumn(WriterOrder: 2)]
public string AnotherProperty { get; set; }
}</p>
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
        <td><span class="parametername">columnName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">writeOrder</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Parquet_ParquetColumn__ctor_System_String_System_Int32__examples">Examples</h5>
  <p>public class MyPoco
{
[ParquetColumn(&quot;NameInParquet&quot;, WriteOrder: 1)]
public string SomeProperty  { get; set; }
[ParquetColumn(WriterOrder: 2)]
public string AnotherProperty { get; set; }
}</p>
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
        <td><span class="parametername">columnName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Parquet_ParquetColumn__ctor_System_String__examples">Examples</h5>
  <p>public class MyPoco
{
[ParquetColumn(&quot;NameInParquet&quot;, WriteOrder: 1)]
public string SomeProperty  { get; set; }
[ParquetColumn(WriterOrder: 2)]
public string AnotherProperty { get; set; }
}</p>
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
  <h5 id="ETLBox_Parquet_ParquetColumn_ColumnName_examples">Examples</h5>
  <p>public class MyPoco
{
[ParquetColumn(&quot;NameInParquet&quot;, WriteOrder: 1)]
public string SomeProperty  { get; set; }
[ParquetColumn(WriterOrder: 2)]
public string AnotherProperty { get; set; }
}</p>
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
  <h5 id="ETLBox_Parquet_ParquetColumn_PropertyName_examples">Examples</h5>
  <p>public class MyPoco
{
[ParquetColumn(&quot;NameInParquet&quot;, WriteOrder: 1)]
public string SomeProperty  { get; set; }
[ParquetColumn(WriterOrder: 2)]
public string AnotherProperty { get; set; }
}</p>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Parquet_ParquetColumn_WriteOrder_examples">Examples</h5>
  <p>public class MyPoco
{
[ParquetColumn(&quot;NameInParquet&quot;, WriteOrder: 1)]
public string SomeProperty  { get; set; }
[ParquetColumn(WriterOrder: 2)]
public string AnotherProperty { get; set; }
}</p>

{{< /rawhtml >}}
