---
title: "ExcelColumn"
description: "Details for Class ExcelColumn (ETLBox.Excel)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.excel"
weight: 10159
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Excel.ExcelColumn">
  <h1 id="ETLBox_Excel_ExcelColumn" data-uid="ETLBox.Excel.ExcelColumn" class="text-break">Class ExcelColumn
</h1>
  <div class="markdown level0 summary"><p>This attribute defines either which column index is mapped to the property or the
header name that identifies the column
By default, when reading from an excel file, a header column is expected in the first row.
The name of the header is used to match with the property names of the object.
With this attribute, you can define the column index of the excel column for the property or
a different header name for a property.
The index starts at 0.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">System.Attribute</span></div>
    <div class="level2"><span class="xref">ExcelColumn</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Excel</h6>
  <h6><strong>Assembly</strong>: ETLBox.Excel.dll</h6>
  <h5 id="ETLBox_Excel_ExcelColumn_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    [AttributeUsage(AttributeTargets.Property)]
public class ExcelColumn : Attribute
```

{{< rawhtml >}}
  <h5 id="ETLBox_Excel_ExcelColumn_examples"><strong>Examples</strong></h5>
  <p>public class MyPoco
{
[ExcelColumn(&quot;HeaderName&quot;)]
public string ColumnByHeaderName { get; set; }
[ExcelColumn(2)]
public string ThirdColumnInExcel { get; set; }
}</p>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Excel_ExcelColumn__ctor_" data-uid="ETLBox.Excel.ExcelColumn.#ctor*"></a>
  <h4 id="ETLBox_Excel_ExcelColumn__ctor" data-uid="ETLBox.Excel.ExcelColumn.#ctor">ExcelColumn()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelColumn()
```

{{< rawhtml >}}
  <h5 id="ETLBox_Excel_ExcelColumn__ctor_examples">Examples</h5>
  <p>public class MyPoco
{
[ExcelColumn(&quot;HeaderName&quot;)]
public string ColumnByHeaderName { get; set; }
[ExcelColumn(2)]
public string ThirdColumnInExcel { get; set; }
}</p>
  <a id="ETLBox_Excel_ExcelColumn__ctor_" data-uid="ETLBox.Excel.ExcelColumn.#ctor*"></a>
  <h4 id="ETLBox_Excel_ExcelColumn__ctor_System_Int32_System_String_" data-uid="ETLBox.Excel.ExcelColumn.#ctor(System.Int32,System.String)">ExcelColumn(int, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelColumn(int columnIndex, string columnName)
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
        <td><span class="parametername">columnIndex</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">columnName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Excel_ExcelColumn__ctor_System_Int32_System_String__examples">Examples</h5>
  <p>public class MyPoco
{
[ExcelColumn(&quot;HeaderName&quot;)]
public string ColumnByHeaderName { get; set; }
[ExcelColumn(2)]
public string ThirdColumnInExcel { get; set; }
}</p>
  <a id="ETLBox_Excel_ExcelColumn__ctor_" data-uid="ETLBox.Excel.ExcelColumn.#ctor*"></a>
  <h4 id="ETLBox_Excel_ExcelColumn__ctor_System_Int32_" data-uid="ETLBox.Excel.ExcelColumn.#ctor(System.Int32)">ExcelColumn(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelColumn(int columnIndex)
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
        <td><span class="parametername">columnIndex</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Excel_ExcelColumn__ctor_System_Int32__examples">Examples</h5>
  <p>public class MyPoco
{
[ExcelColumn(&quot;HeaderName&quot;)]
public string ColumnByHeaderName { get; set; }
[ExcelColumn(2)]
public string ThirdColumnInExcel { get; set; }
}</p>
  <a id="ETLBox_Excel_ExcelColumn__ctor_" data-uid="ETLBox.Excel.ExcelColumn.#ctor*"></a>
  <h4 id="ETLBox_Excel_ExcelColumn__ctor_System_String_" data-uid="ETLBox.Excel.ExcelColumn.#ctor(System.String)">ExcelColumn(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelColumn(string columnName)
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
  <h5 id="ETLBox_Excel_ExcelColumn__ctor_System_String__examples">Examples</h5>
  <p>public class MyPoco
{
[ExcelColumn(&quot;HeaderName&quot;)]
public string ColumnByHeaderName { get; set; }
[ExcelColumn(2)]
public string ThirdColumnInExcel { get; set; }
}</p>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Excel_ExcelColumn_ColumnIndex_" data-uid="ETLBox.Excel.ExcelColumn.ColumnIndex*"></a>
  <h4 id="ETLBox_Excel_ExcelColumn_ColumnIndex" data-uid="ETLBox.Excel.ExcelColumn.ColumnIndex">ColumnIndex</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ColumnIndex { get; set; }
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
  <h5 id="ETLBox_Excel_ExcelColumn_ColumnIndex_examples">Examples</h5>
  <p>public class MyPoco
{
[ExcelColumn(&quot;HeaderName&quot;)]
public string ColumnByHeaderName { get; set; }
[ExcelColumn(2)]
public string ThirdColumnInExcel { get; set; }
}</p>
  <a id="ETLBox_Excel_ExcelColumn_ColumnName_" data-uid="ETLBox.Excel.ExcelColumn.ColumnName*"></a>
  <h4 id="ETLBox_Excel_ExcelColumn_ColumnName" data-uid="ETLBox.Excel.ExcelColumn.ColumnName">ColumnName</h4>
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
  <h5 id="ETLBox_Excel_ExcelColumn_ColumnName_examples">Examples</h5>
  <p>public class MyPoco
{
[ExcelColumn(&quot;HeaderName&quot;)]
public string ColumnByHeaderName { get; set; }
[ExcelColumn(2)]
public string ThirdColumnInExcel { get; set; }
}</p>
  <a id="ETLBox_Excel_ExcelColumn_PropertyName_" data-uid="ETLBox.Excel.ExcelColumn.PropertyName*"></a>
  <h4 id="ETLBox_Excel_ExcelColumn_PropertyName" data-uid="ETLBox.Excel.ExcelColumn.PropertyName">PropertyName</h4>
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
  <h5 id="ETLBox_Excel_ExcelColumn_PropertyName_examples">Examples</h5>
  <p>public class MyPoco
{
[ExcelColumn(&quot;HeaderName&quot;)]
public string ColumnByHeaderName { get; set; }
[ExcelColumn(2)]
public string ThirdColumnInExcel { get; set; }
}</p>

{{< /rawhtml >}}
