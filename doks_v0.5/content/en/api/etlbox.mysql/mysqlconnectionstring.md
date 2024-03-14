---
title: "MySqlConnectionString"
description: "Details for Class MySqlConnectionString (ETLBox.MySql)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.mysql"
weight: 10268
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.MySql.MySqlConnectionString">
  <h1 id="ETLBox_MySql_MySqlConnectionString" data-uid="ETLBox.MySql.MySqlConnectionString" class="text-break">Class MySqlConnectionString
</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a conection string to a MySql server in an object.
Internally the MySqlConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.mysql/mysqlconnectionstring">MySqlConnectionString</a>, <span class="xref">MySqlConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><span class="xref">MySqlConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Builder">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Value">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ToString">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_MasterDbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Clone">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
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
<h6><strong>Namespace</strong>: ETLBox.MySql</h6>
  <h6><strong>Assembly</strong>: ETLBox.MySql.dll</h6>
  <h5 id="ETLBox_MySql_MySqlConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class MySqlConnectionString : DbConnectionString<MySqlConnectionString, MySqlConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_MySql_MySqlConnectionString__ctor_" data-uid="ETLBox.MySql.MySqlConnectionString.#ctor*"></a>
  <h4 id="ETLBox_MySql_MySqlConnectionString__ctor" data-uid="ETLBox.MySql.MySqlConnectionString.#ctor">MySqlConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MySqlConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_MySql_MySqlConnectionString__ctor_" data-uid="ETLBox.MySql.MySqlConnectionString.#ctor*"></a>
  <h4 id="ETLBox_MySql_MySqlConnectionString__ctor_System_String_" data-uid="ETLBox.MySql.MySqlConnectionString.#ctor(System.String)">MySqlConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MySqlConnectionString(string value)
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
  <a id="ETLBox_MySql_MySqlConnectionString_DbName_" data-uid="ETLBox.MySql.MySqlConnectionString.DbName*"></a>
  <h4 id="ETLBox_MySql_MySqlConnectionString_DbName" data-uid="ETLBox.MySql.MySqlConnectionString.DbName">DbName</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.MySql.MySqlConnectionString, MySql.Data.MySqlClient.MySqlConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_MySql_MySqlConnectionString_DbNameKeyword_" data-uid="ETLBox.MySql.MySqlConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_MySql_MySqlConnectionString_DbNameKeyword" data-uid="ETLBox.MySql.MySqlConnectionString.DbNameKeyword">DbNameKeyword</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.MySql.MySqlConnectionString, MySql.Data.MySqlClient.MySqlConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_MySql_MySqlConnectionString_MasterDbName_" data-uid="ETLBox.MySql.MySqlConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_MySql_MySqlConnectionString_MasterDbName" data-uid="ETLBox.MySql.MySqlConnectionString.MasterDbName">MasterDbName</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.MySql.MySqlConnectionString, MySql.Data.MySqlClient.MySqlConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_MySql_MySqlConnectionString_op_Implicit_" data-uid="ETLBox.MySql.MySqlConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_MySql_MySqlConnectionString_op_Implicit_System_String__ETLBox_MySql_MySqlConnectionString" data-uid="ETLBox.MySql.MySqlConnectionString.op_Implicit(System.String)~ETLBox.MySql.MySqlConnectionString">implicit operator MySqlConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator MySqlConnectionString(string value)
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
        <td><a class="xref" href="/api/etlbox.mysql/mysqlconnectionstring">MySqlConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
