---
title: "SqlParser"
description: "Details for Class SqlParser (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10236
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.SqlParser">
  <h1 id="ETLBox_Helper_SqlParser" data-uid="ETLBox.Helper.SqlParser" class="text-break">Class SqlParser</h1>
  <div class="markdown level0 summary"><p>Helper class for parsing sql statements</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">SqlParser</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
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
  <h4 id="ETLBox_Helper_SqlParser_ParseColumnNames_System_String_System_String_System_String_" data-uid="ETLBox.Helper.SqlParser.ParseColumnNames(System.String,System.String,System.String)">ParseColumnNames(string, string, string)</h4>
  <div class="markdown level1 summary"><p>This method attempts to parse column names from any sql statement.
E.g. SELECT 1 AS 'Test', Col2, t2.Col3 FROM table1 t1 INNER JOIN t2 ON t1.Id = t2.Id
will return Test, Col2 and Col3 als column names.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<string> ParseColumnNames(string sql, string QB = &quot;&quot;, string QE = &quot;&quot;)
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
        <td><span class="parametername">sql</span></td>
        <td><p>The sql code from which the column names should be parsed</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">QB</span></td>
        <td><p>Optional: the start character used when quoting names (e.g. [ in SqlServer)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">QE</span></td>
        <td><p>Optional: the end character used when quoting names (e.g. ] in SqlServer)</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><p>The names of the columns in the sql</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_SqlParser_ReplaceMatchWith_" data-uid="ETLBox.Helper.SqlParser.ReplaceMatchWith*"></a>
  <h4 id="ETLBox_Helper_SqlParser_ReplaceMatchWith_System_Text_RegularExpressions_Match_" data-uid="ETLBox.Helper.SqlParser.ReplaceMatchWith(System.Text.RegularExpressions.Match)">ReplaceMatchWith(Match)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string ReplaceMatchWith(Match match)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.text.regularexpressions.match">Match</a></td>
        <td><span class="parametername">match</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
