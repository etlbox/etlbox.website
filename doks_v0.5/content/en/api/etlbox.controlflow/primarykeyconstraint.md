---
title: "PrimaryKeyConstraint"
description: "Details for Class PrimaryKeyConstraint (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10046
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.PrimaryKeyConstraint">
  <h1 id="ETLBox_ControlFlow_PrimaryKeyConstraint" data-uid="ETLBox.ControlFlow.PrimaryKeyConstraint" class="text-break">Class PrimaryKeyConstraint
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/constraint">Constraint</a></div>
    <div class="level2"><span class="xref">PrimaryKeyConstraint</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iconstraint">IConstraint</a></div>
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
  <h5 id="ETLBox_ControlFlow_PrimaryKeyConstraint_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class PrimaryKeyConstraint : Constraint, IConstraint
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_PrimaryKeyConstraint__ctor_" data-uid="ETLBox.ControlFlow.PrimaryKeyConstraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_PrimaryKeyConstraint__ctor" data-uid="ETLBox.ControlFlow.PrimaryKeyConstraint.#ctor">PrimaryKeyConstraint()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public PrimaryKeyConstraint()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_PrimaryKeyConstraint__ctor_" data-uid="ETLBox.ControlFlow.PrimaryKeyConstraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_PrimaryKeyConstraint__ctor_System_Collections_Generic_IList_System_String__" data-uid="ETLBox.ControlFlow.PrimaryKeyConstraint.#ctor(System.Collections.Generic.IList{System.String})">PrimaryKeyConstraint(IList&lt;string&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public PrimaryKeyConstraint(IList<string> columnNames)
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
  <a id="ETLBox_ControlFlow_PrimaryKeyConstraint__ctor_" data-uid="ETLBox.ControlFlow.PrimaryKeyConstraint.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_PrimaryKeyConstraint__ctor_System_String_" data-uid="ETLBox.ControlFlow.PrimaryKeyConstraint.#ctor(System.String)">PrimaryKeyConstraint(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public PrimaryKeyConstraint(string columnName)
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
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iconstraint">IConstraint</a>
  </div>

{{< /rawhtml >}}
