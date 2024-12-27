---
title: "IDbConnectionString"
description: "Details for Interface IDbConnectionString (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10247
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDbConnectionString">
  <h1 id="ETLBox_IDbConnectionString" data-uid="ETLBox.IDbConnectionString" class="text-break">Interface IDbConnectionString</h1>
  <div class="markdown level0 summary"><p>The generic defintion of a connection string</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDbConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDbConnectionString_DbName_" data-uid="ETLBox.IDbConnectionString.DbName*"></a>
  <h4 id="ETLBox_IDbConnectionString_DbName" data-uid="ETLBox.IDbConnectionString.DbName">DbName</h4>
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
  <a id="ETLBox_IDbConnectionString_MasterDbName_" data-uid="ETLBox.IDbConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_IDbConnectionString_MasterDbName" data-uid="ETLBox.IDbConnectionString.MasterDbName">MasterDbName</h4>
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
  <a id="ETLBox_IDbConnectionString_Value_" data-uid="ETLBox.IDbConnectionString.Value*"></a>
  <h4 id="ETLBox_IDbConnectionString_Value" data-uid="ETLBox.IDbConnectionString.Value">Value</h4>
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_IDbConnectionString_Clone_" data-uid="ETLBox.IDbConnectionString.Clone*"></a>
  <h4 id="ETLBox_IDbConnectionString_Clone" data-uid="ETLBox.IDbConnectionString.Clone">Clone()</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></td>
        <td><p>A copy of the connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDbConnectionString_CloneWithMasterDbName_" data-uid="ETLBox.IDbConnectionString.CloneWithMasterDbName*"></a>
  <h4 id="ETLBox_IDbConnectionString_CloneWithMasterDbName" data-uid="ETLBox.IDbConnectionString.CloneWithMasterDbName">CloneWithMasterDbName()</h4>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></td>
        <td><p>The new connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDbConnectionString_CloneWithNewDbName_" data-uid="ETLBox.IDbConnectionString.CloneWithNewDbName*"></a>
  <h4 id="ETLBox_IDbConnectionString_CloneWithNewDbName_System_String_" data-uid="ETLBox.IDbConnectionString.CloneWithNewDbName(System.String)">CloneWithNewDbName(string)</h4>
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
        <td><span class="parametername">value</span></td>
        <td><p>The new database name</p>
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
        <td><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></td>
        <td><p>The new connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDbConnectionString_ToString_" data-uid="ETLBox.IDbConnectionString.ToString*"></a>
  <h4 id="ETLBox_IDbConnectionString_ToString" data-uid="ETLBox.IDbConnectionString.ToString">ToString()</h4>
  <div class="markdown level1 summary"><p>Returns the connection string <a class="xref" href="/api/etlbox/idbconnectionstring#ETLBox_IDbConnectionString_Value">Value</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string ToString()
```

{{< rawhtml >}}
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
        <td><p>The new connection string</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
