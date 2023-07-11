---
title: "Constraint"
description: "Details for Class Constraint (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10011
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Constraint">
  <h1 id="ETLBox_ControlFlow_Constraint" data-uid="ETLBox.ControlFlow.Constraint" class="text-break">Class Constraint
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">Constraint</span></div>
      <div class="level2"><a class="xref" href="/api/etlbox.controlflow/foreignkeyconstraint">ForeignKeyConstraint</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.controlflow/primarykeyconstraint">PrimaryKeyConstraint</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.controlflow/uniquekeyconstraint">UniqueKeyConstraint</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconstraint">IConstraint</a></div>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_Constraint_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class Constraint : IConstraint
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Constraint__ctor_" data-uid="ETLBox.ControlFlow.Constraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Constraint__ctor" data-uid="ETLBox.ControlFlow.Constraint.#ctor">Constraint()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Constraint()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Constraint__ctor_" data-uid="ETLBox.ControlFlow.Constraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Constraint__ctor_System_Collections_Generic_IList_System_String__" data-uid="ETLBox.ControlFlow.Constraint.#ctor(System.Collections.Generic.IList{System.String})">Constraint(IList&lt;string&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Constraint(IList<string> columnNames)
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
        <td><span class="xref">System.Collections.Generic.IList&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">columnNames</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Constraint__ctor_" data-uid="ETLBox.ControlFlow.Constraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Constraint__ctor_System_String_" data-uid="ETLBox.ControlFlow.Constraint.#ctor(System.String)">Constraint(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Constraint(string columnName)
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_Constraint_ColumnNames_" data-uid="ETLBox.ControlFlow.Constraint.ColumnNames*"></a>
  <h4 id="ETLBox_ControlFlow_Constraint_ColumnNames" data-uid="ETLBox.ControlFlow.Constraint.ColumnNames">ColumnNames</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IList<string> ColumnNames { get; set; }
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
        <td><span class="xref">System.Collections.Generic.IList&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Constraint_ConstraintName_" data-uid="ETLBox.ControlFlow.Constraint.ConstraintName*"></a>
  <h4 id="ETLBox_ControlFlow_Constraint_ConstraintName" data-uid="ETLBox.ControlFlow.Constraint.ConstraintName">ConstraintName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ConstraintName { get; set; }
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
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iconstraint">IConstraint</a>
  </div>

{{< /rawhtml >}}
