---
title: "ConnectionManagerCreator"
description: "Details for Class ConnectionManagerCreator (ETLBox.DbExtensions)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dbextensions"
weight: 10207
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbExtensions.ConnectionManagerCreator">
  <h1 id="ETLBox_DbExtensions_ConnectionManagerCreator" data-uid="ETLBox.DbExtensions.ConnectionManagerCreator" class="text-break">Class ConnectionManagerCreator</h1>
  <div class="markdown level0 summary"><p>Creates an ETLBox IConnectionManager object based on the type of the IDbConnection.
This connects the classic ADO.NET connection with the ETLBox connection manager approach.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">ConnectionManagerCreator</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.DbExtensions</h6>
  <h6><strong>Assembly</strong>: ETLBox.DbExtensions.dll</h6>
  <h5 id="ETLBox_DbExtensions_ConnectionManagerCreator_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class ConnectionManagerCreator
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DbExtensions_ConnectionManagerCreator_ConnectionManagerMappings_" data-uid="ETLBox.DbExtensions.ConnectionManagerCreator.ConnectionManagerMappings*"></a>
  <h4 id="ETLBox_DbExtensions_ConnectionManagerCreator_ConnectionManagerMappings" data-uid="ETLBox.DbExtensions.ConnectionManagerCreator.ConnectionManagerMappings">ConnectionManagerMappings</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Dictionary<string, string> ConnectionManagerMappings { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2">Dictionary</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DbExtensions_ConnectionManagerCreator_CreateFromIDbConnection_" data-uid="ETLBox.DbExtensions.ConnectionManagerCreator.CreateFromIDbConnection*"></a>
  <h4 id="ETLBox_DbExtensions_ConnectionManagerCreator_CreateFromIDbConnection_System_Data_IDbConnection_" data-uid="ETLBox.DbExtensions.ConnectionManagerCreator.CreateFromIDbConnection(System.Data.IDbConnection)">CreateFromIDbConnection(IDbConnection)</h4>
  <div class="markdown level1 summary"><p>Creates an ETLBox connection manager instance from the given IDbConnection.
Make sure you have the appropiate ETLBox extension (e.g., ETLBox.MySql) referenced
that matches with your used ADO.NET connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IConnectionManager CreateFromIDbConnection(IDbConnection connection)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The ADO.NET connection instance</p>
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><p>An ETLBox Connection Manager</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox/etlboxexception">ETLBoxException</a></td>
        <td><p>Thrown if no ETLBox connection was found, or if
the corresponding ETLBox Connection package was not referenced</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
