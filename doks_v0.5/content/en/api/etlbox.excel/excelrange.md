---
title: "ExcelRange"
description: "Details for Class ExcelRange (ETLBox.Excel)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.excel"
weight: 10180
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Excel.ExcelRange">
  <h1 id="ETLBox_Excel_ExcelRange" data-uid="ETLBox.Excel.ExcelRange" class="text-break">Class ExcelRange
</h1>
  <div class="markdown level0 summary"><p>Defines a range in an excel file where the data is located.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">ExcelRange</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Excel</h6>
  <h6><strong>Assembly</strong>: ETLBox.Excel.dll</h6>
  <h5 id="ETLBox_Excel_ExcelRange_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ExcelRange
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Excel_ExcelRange__ctor_" data-uid="ETLBox.Excel.ExcelRange.#ctor*"></a>
  <h4 id="ETLBox_Excel_ExcelRange__ctor_System_Int32_System_Int32_System_Int32_System_Int32_" data-uid="ETLBox.Excel.ExcelRange.#ctor(System.Int32,System.Int32,System.Int32,System.Int32)">ExcelRange(int, int, int, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelRange(int startColumn, int startRow, int endColumn, int endRow)
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
        <td><span class="parametername">startColumn</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">startRow</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">endColumn</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">endRow</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Excel_ExcelRange__ctor_" data-uid="ETLBox.Excel.ExcelRange.#ctor*"></a>
  <h4 id="ETLBox_Excel_ExcelRange__ctor_System_Int32_System_Int32_" data-uid="ETLBox.Excel.ExcelRange.#ctor(System.Int32,System.Int32)">ExcelRange(int, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExcelRange(int startColumn, int startRow)
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
        <td><span class="parametername">startColumn</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">startRow</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Excel_ExcelRange_EndColumn_" data-uid="ETLBox.Excel.ExcelRange.EndColumn*"></a>
  <h4 id="ETLBox_Excel_ExcelRange_EndColumn" data-uid="ETLBox.Excel.ExcelRange.EndColumn">EndColumn</h4>
  <div class="markdown level1 summary"><p>The end column, column counts starts with 1.
This is optional - if left empty, data will be read until the first blank row is found.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int? EndColumn { get; set; }
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
  <a id="ETLBox_Excel_ExcelRange_EndRow_" data-uid="ETLBox.Excel.ExcelRange.EndRow*"></a>
  <h4 id="ETLBox_Excel_ExcelRange_EndRow" data-uid="ETLBox.Excel.ExcelRange.EndRow">EndRow</h4>
  <div class="markdown level1 summary"><p>The end row - row count starts with 1.
This is optional - if left empty, data will be read until the first blank row is found.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int? EndRow { get; set; }
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
  <a id="ETLBox_Excel_ExcelRange_StartColumn_" data-uid="ETLBox.Excel.ExcelRange.StartColumn*"></a>
  <h4 id="ETLBox_Excel_ExcelRange_StartColumn" data-uid="ETLBox.Excel.ExcelRange.StartColumn">StartColumn</h4>
  <div class="markdown level1 summary"><p>The start column, column count starts with 1</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int StartColumn { get; set; }
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
  <a id="ETLBox_Excel_ExcelRange_StartRow_" data-uid="ETLBox.Excel.ExcelRange.StartRow*"></a>
  <h4 id="ETLBox_Excel_ExcelRange_StartRow" data-uid="ETLBox.Excel.ExcelRange.StartRow">StartRow</h4>
  <div class="markdown level1 summary"><p>The start row, row count starts with 1</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int StartRow { get; set; }
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

{{< /rawhtml >}}
