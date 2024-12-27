---
title: "SqlConnectionString"
description: "Details for Class SqlConnectionString (ETLBox.SqlServer)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.sqlserver"
weight: 10335
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.SqlServer.SqlConnectionString">
  <h1 id="ETLBox_SqlServer_SqlConnectionString" data-uid="ETLBox.SqlServer.SqlConnectionString" class="text-break">Class SqlConnectionString</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a conection string to a sql server in an object.
Internally the SqlConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.sqlserver/sqlconnectionstring">SqlConnectionString</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.data.sqlclient.sqlconnectionstringbuilder">SqlConnectionStringBuilder</a>&gt;</div>
    <div class="level2"><span class="xref">SqlConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Builder">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Value">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ToString">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbName">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_MasterDbName">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Clone">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;SqlConnectionString, SqlConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.SqlServer</h6>
  <h6><strong>Assembly</strong>: ETLBox.SqlServer.dll</h6>
  <h5 id="ETLBox_SqlServer_SqlConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class SqlConnectionString : DbConnectionString<SqlConnectionString, SqlConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_SqlServer_SqlConnectionString__ctor_" data-uid="ETLBox.SqlServer.SqlConnectionString.#ctor*"></a>
  <h4 id="ETLBox_SqlServer_SqlConnectionString__ctor" data-uid="ETLBox.SqlServer.SqlConnectionString.#ctor">SqlConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_SqlServer_SqlConnectionString__ctor_" data-uid="ETLBox.SqlServer.SqlConnectionString.#ctor*"></a>
  <h4 id="ETLBox_SqlServer_SqlConnectionString__ctor_System_String_" data-uid="ETLBox.SqlServer.SqlConnectionString.#ctor(System.String)">SqlConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlConnectionString(string value)
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_SqlServer_SqlConnectionString_DbName_" data-uid="ETLBox.SqlServer.SqlConnectionString.DbName*"></a>
  <h4 id="ETLBox_SqlServer_SqlConnectionString_DbName" data-uid="ETLBox.SqlServer.SqlConnectionString.DbName">DbName</h4>
  <div class="markdown level1 summary"><p>The database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string DbName { get; set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.SqlServer.SqlConnectionString, Microsoft.Data.SqlClient.SqlConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_SqlServer_SqlConnectionString_DbNameKeyword_" data-uid="ETLBox.SqlServer.SqlConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_SqlServer_SqlConnectionString_DbNameKeyword" data-uid="ETLBox.SqlServer.SqlConnectionString.DbNameKeyword">DbNameKeyword</h4>
  <div class="markdown level1 summary"><p>The keyword used in the connection string to identify a database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override string DbNameKeyword { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.SqlServer.SqlConnectionString, Microsoft.Data.SqlClient.SqlConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_SqlServer_SqlConnectionString_MasterDbName_" data-uid="ETLBox.SqlServer.SqlConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_SqlServer_SqlConnectionString_MasterDbName" data-uid="ETLBox.SqlServer.SqlConnectionString.MasterDbName">MasterDbName</h4>
  <div class="markdown level1 summary"><p>The name of the master database (if applicable)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string MasterDbName { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.SqlServer.SqlConnectionString, Microsoft.Data.SqlClient.SqlConnectionStringBuilder&gt;.MasterDbName</span></div>
  <a id="ETLBox_SqlServer_SqlConnectionString_Value_" data-uid="ETLBox.SqlServer.SqlConnectionString.Value*"></a>
  <h4 id="ETLBox_SqlServer_SqlConnectionString_Value" data-uid="ETLBox.SqlServer.SqlConnectionString.Value">Value</h4>
  <div class="markdown level1 summary"><p>The connection string value, e.g. &quot;Server=localhost;Database=etlbox;&quot;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string Value { get; set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.SqlServer.SqlConnectionString, Microsoft.Data.SqlClient.SqlConnectionStringBuilder&gt;.Value</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_SqlServer_SqlConnectionString_op_Implicit_" data-uid="ETLBox.SqlServer.SqlConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_SqlServer_SqlConnectionString_op_Implicit_System_String__ETLBox_SqlServer_SqlConnectionString" data-uid="ETLBox.SqlServer.SqlConnectionString.op_Implicit(System.String)~ETLBox.SqlServer.SqlConnectionString">implicit operator SqlConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator SqlConnectionString(string value)
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
        <td><a class="xref" href="/api/etlbox.sqlserver/sqlconnectionstring">SqlConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
