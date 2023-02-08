---
title: "IConnectionManagerDbObjects"
description: "Details for Interface IConnectionManagerDbObjects (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10012
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.IConnectionManagerDbObjects">
  <h1 id="ETLBox_Connection_IConnectionManagerDbObjects" data-uid="ETLBox.Connection.IConnectionManagerDbObjects" class="text-break">Interface IConnectionManagerDbObjects
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.Connection</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Connection_IConnectionManagerDbObjects_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IConnectionManagerDbObjects
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_IConnectionManagerDbObjects_CheckIfTableOrViewExists_" data-uid="ETLBox.Connection.IConnectionManagerDbObjects.CheckIfTableOrViewExists*"></a>
  <h4 id="ETLBox_Connection_IConnectionManagerDbObjects_CheckIfTableOrViewExists_System_String_" data-uid="ETLBox.Connection.IConnectionManagerDbObjects.CheckIfTableOrViewExists(System.String)">CheckIfTableOrViewExists(String)</h4>
  <div class="markdown level1 summary"><p>Describes how the connection manager can check if a table or view exists</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool CheckIfTableOrViewExists(string objectName)
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
        <td><span class="parametername">objectName</span></td>
        <td><p>The formatted table or view name</p>
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
        <td><span class="xref">System.Boolean</span></td>
        <td><p>True if the table or view exists</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_IConnectionManagerDbObjects_ReadTableDefinition_" data-uid="ETLBox.Connection.IConnectionManagerDbObjects.ReadTableDefinition*"></a>
  <h4 id="ETLBox_Connection_IConnectionManagerDbObjects_ReadTableDefinition_ETLBox_Helper_ObjectNameDescriptor_" data-uid="ETLBox.Connection.IConnectionManagerDbObjects.ReadTableDefinition(ETLBox.Helper.ObjectNameDescriptor)">ReadTableDefinition(ObjectNameDescriptor)</h4>
  <div class="markdown level1 summary"><p>Describe how the table meta data can be read from the database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    TableDefinition ReadTableDefinition(ObjectNameDescriptor TN)
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
        <td><a class="xref" href="/api/etlbox.helper/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td><span class="parametername">TN</span></td>
        <td><p>The formatted table name</p>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><p>The definition of the table, containing column names, types, etc.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
