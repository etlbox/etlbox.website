---
title: "SqlParser"
description: "Details for Class SqlParser (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10257
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.SqlParser">
  <h1 id="ETLBox_Helper_SqlParser" data-uid="ETLBox.Helper.SqlParser" class="text-break">Class SqlParser
  </h1>
  <div class="markdown level0 summary"><p>Helper class for parsing sql statements</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">SqlParser</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Object.Equals(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.GetHashCode()</span>
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
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_SqlParser_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class SqlParser
```

{{< rawhtml >}}
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_Helper_SqlParser_ParseColumnNames_" data-uid="ETLBox.Helper.SqlParser.ParseColumnNames*"></a>
  <h4 id="ETLBox_Helper_SqlParser_ParseColumnNames_System_String_" data-uid="ETLBox.Helper.SqlParser.ParseColumnNames(System.String)">ParseColumnNames(String)</h4>
  <div class="markdown level1 summary"><p>This method attempts to parse column names from any sql statement.
E.g. SELECT 1 AS 'Test', Col2, t2.Col3 FROM table1 t1 INNER JOIN t2 ON t1.Id = t2.Id
will return Test, Col2 and Col3 als column names.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<string> ParseColumnNames(string sql)
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
        <td><span class="parametername">sql</span></td>
        <td><p>The sql code from which the column names should be parsed</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<span class="xref">System.String</span>&gt;</td>
        <td><p>The names of the columns in the sql</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
