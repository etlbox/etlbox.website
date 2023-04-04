---
title: "IDataTypeConverter"
description: "Details for Interface IDataTypeConverter (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10269
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.IDataTypeConverter">
  <h1 id="ETLBox_Helper_IDataTypeConverter" data-uid="ETLBox.Helper.IDataTypeConverter" class="text-break">Interface IDataTypeConverter
</h1>
  <div class="markdown level0 summary"><p>Describe methods that allows to intercept the CREATE TABLE sql generation in a CreateTableTask.
It will convert the data type that is defined in a TableColumn into a custom database specific type.</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_IDataTypeConverter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataTypeConverter
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_IDataTypeConverter_TryConvertDbDataType_" data-uid="ETLBox.Helper.IDataTypeConverter.TryConvertDbDataType*"></a>
  <h4 id="ETLBox_Helper_IDataTypeConverter_TryConvertDbDataType_System_String_ETLBox_Connection_ConnectionManagerType_" data-uid="ETLBox.Helper.IDataTypeConverter.TryConvertDbDataType(System.String,ETLBox.Connection.ConnectionManagerType)">TryConvertDbDataType(string, ConnectionManagerType)</h4>
  <div class="markdown level1 summary"><p>Tries to convert the data type from the TableColumn into a database specific type.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string TryConvertDbDataType(string dataTypeName, ConnectionManagerType connectionType)
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
        <td><span class="parametername">dataTypeName</span></td>
        <td><p>The specific type name from a table column</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.connection/connectionmanagertype">ConnectionManagerType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>The database connection type</p>
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
        <td><span class="xref">string</span></td>
        <td><p>The type used in the CREATE TABLE statement</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
