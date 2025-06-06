---
title: "ForeignKeyConstraint"
description: "Details for Class ForeignKeyConstraint (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10056
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint">
  <h1 id="ETLBox_ControlFlow_ForeignKeyConstraint" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint" class="text-break">Class ForeignKeyConstraint</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/constraint">Constraint</a></div>
    <div class="level2"><span class="xref">ForeignKeyConstraint</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconstraint">IConstraint</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/constraint#ETLBox_ControlFlow_Constraint_ColumnNames">Constraint.ColumnNames</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/constraint#ETLBox_ControlFlow_Constraint_ConstraintName">Constraint.ConstraintName</a>
    </div>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_ForeignKeyConstraint_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class ForeignKeyConstraint : Constraint, IConstraint
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_ForeignKeyConstraint__ctor_" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ForeignKeyConstraint__ctor" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.#ctor">ForeignKeyConstraint()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ForeignKeyConstraint()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_ForeignKeyConstraint__ctor_" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ForeignKeyConstraint__ctor_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_String__System_String_" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.#ctor(System.Collections.Generic.IList{System.String},System.Collections.Generic.IList{System.String},System.String)">ForeignKeyConstraint(IList&lt;string&gt;, IList&lt;string&gt;, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ForeignKeyConstraint(IList<string> columnNames, IList<string> referenceColumnNames, string referenceTableName)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">columnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">referenceColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">referenceTableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ForeignKeyConstraint__ctor_" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ForeignKeyConstraint__ctor_System_String_System_String_System_String_" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.#ctor(System.String,System.String,System.String)">ForeignKeyConstraint(string, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ForeignKeyConstraint(string columnName, string referenceColumnName, string referenceTableName)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">referenceColumnName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">referenceTableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_ForeignKeyConstraint_OnDeleteCascade_" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.OnDeleteCascade*"></a>
  <h4 id="ETLBox_ControlFlow_ForeignKeyConstraint_OnDeleteCascade" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.OnDeleteCascade">OnDeleteCascade</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool OnDeleteCascade { get; set; }
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
  <a id="ETLBox_ControlFlow_ForeignKeyConstraint_ReferenceColumnNames_" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.ReferenceColumnNames*"></a>
  <h4 id="ETLBox_ControlFlow_ForeignKeyConstraint_ReferenceColumnNames" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.ReferenceColumnNames">ReferenceColumnNames</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<string> ReferenceColumnNames { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ForeignKeyConstraint_ReferenceTableName_" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.ReferenceTableName*"></a>
  <h4 id="ETLBox_ControlFlow_ForeignKeyConstraint_ReferenceTableName" data-uid="ETLBox.ControlFlow.ForeignKeyConstraint.ReferenceTableName">ReferenceTableName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ReferenceTableName { get; set; }
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
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iconstraint">IConstraint</a>
  </div>

{{< /rawhtml >}}
