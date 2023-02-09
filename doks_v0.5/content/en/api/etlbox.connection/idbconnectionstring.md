---
title: "IDbConnectionString"
description: "Details for Interface IDbConnectionString (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10013
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.IDbConnectionString">
  <h1 id="ETLBox_Connection_IDbConnectionString" data-uid="ETLBox.Connection.IDbConnectionString" class="text-break">Interface IDbConnectionString
</h1>
  <div class="markdown level0 summary"><p>The generic defintion of a connection string</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.Connection</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Connection_IDbConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_IDbConnectionString_DbName_" data-uid="ETLBox.Connection.IDbConnectionString.DbName*"></a>
  <h4 id="ETLBox_Connection_IDbConnectionString_DbName" data-uid="ETLBox.Connection.IDbConnectionString.DbName">DbName</h4>
  <div class="markdown level1 summary"><p>The database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string DbName { get; set; }
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
  <a id="ETLBox_Connection_IDbConnectionString_MasterDbName_" data-uid="ETLBox.Connection.IDbConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_Connection_IDbConnectionString_MasterDbName" data-uid="ETLBox.Connection.IDbConnectionString.MasterDbName">MasterDbName</h4>
  <div class="markdown level1 summary"><p>The name of the master database (if applicable)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string MasterDbName { get; }
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
  <a id="ETLBox_Connection_IDbConnectionString_Value_" data-uid="ETLBox.Connection.IDbConnectionString.Value*"></a>
  <h4 id="ETLBox_Connection_IDbConnectionString_Value" data-uid="ETLBox.Connection.IDbConnectionString.Value">Value</h4>
  <div class="markdown level1 summary"><p>The connection string value, e.g. &quot;Server=localhost;Database=etlbox;&quot;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string Value { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_IDbConnectionString_Clone_" data-uid="ETLBox.Connection.IDbConnectionString.Clone*"></a>
  <h4 id="ETLBox_Connection_IDbConnectionString_Clone" data-uid="ETLBox.Connection.IDbConnectionString.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Creates a copy of the current connection</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDbConnectionString Clone()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></td>
        <td><p>A copy of the connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_IDbConnectionString_CloneWithMasterDbName_" data-uid="ETLBox.Connection.IDbConnectionString.CloneWithMasterDbName*"></a>
  <h4 id="ETLBox_Connection_IDbConnectionString_CloneWithMasterDbName" data-uid="ETLBox.Connection.IDbConnectionString.CloneWithMasterDbName">CloneWithMasterDbName()</h4>
  <div class="markdown level1 summary"><p>Clone the current connection string with the master database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDbConnectionString CloneWithMasterDbName()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></td>
        <td><p>The new connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_IDbConnectionString_CloneWithNewDbName_" data-uid="ETLBox.Connection.IDbConnectionString.CloneWithNewDbName*"></a>
  <h4 id="ETLBox_Connection_IDbConnectionString_CloneWithNewDbName_System_String_" data-uid="ETLBox.Connection.IDbConnectionString.CloneWithNewDbName(System.String)">CloneWithNewDbName(string)</h4>
  <div class="markdown level1 summary"><p>Clone the current connection string with a new database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDbConnectionString CloneWithNewDbName(string value = null)
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
        <td><span class="parametername">value</span></td>
        <td><p>The new database name</p>
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
        <td><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></td>
        <td><p>The new connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_IDbConnectionString_ToString_" data-uid="ETLBox.Connection.IDbConnectionString.ToString*"></a>
  <h4 id="ETLBox_Connection_IDbConnectionString_ToString" data-uid="ETLBox.Connection.IDbConnectionString.ToString">ToString()</h4>
  <div class="markdown level1 summary"><p>Returns the connection string <a class="xref" href="/api/etlbox.connection/idbconnectionstring#ETLBox_Connection_IDbConnectionString_Value">Value</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string ToString()
```

{{< rawhtml >}}
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
        <td><p>The new connection string</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
