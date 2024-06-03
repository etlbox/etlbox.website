---
title: "DbConnectionString<T, TBuilder>"
description: "Details for Class DbConnectionString<T, TBuilder> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10200
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbConnectionString`2">
  <h1 id="ETLBox_DbConnectionString_2" data-uid="ETLBox.DbConnectionString`2" class="text-break">Class DbConnectionString&lt;T, TBuilder&gt;
</h1>
  <div class="markdown level0 summary"><p><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a> base</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">DbConnectionString&lt;T, TBuilder&gt;</span></div>
      <div class="level2"><a class="xref" href="/api/etlbox/aseconnectionstring">AseConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.db2/db2connectionstring">Db2ConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.mariadb/mariadbconnectionstring">MariaDbConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.mysql/mysqlconnectionstring">MySqlConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.odbc/odbcconnectionstring">OdbcConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.oledb/oledbconnectionstring">OleDbConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.oracle/oracleconnectionstring">OracleConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.postgres/postgresconnectionstring">PostgresConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.sqlite/sqliteconnectionstring">SQLiteConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.sap.hana/hanaconnectionstring">HanaConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.snowflake/snowflakeconnectionstring">SnowflakeConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.sqlserver/sqlconnectionstring">SqlConnectionString</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></div>
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
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DbConnectionString_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class DbConnectionString<T, TBuilder> : IDbConnectionString where T : DbConnectionString<T, TBuilder>, new() where TBuilder : DbConnectionStringBuilder, new()
```

{{< rawhtml >}}
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">T</span></td>
        <td><p>Derived type</p>
</td>
      </tr>
      <tr>
        <td><span class="parametername">TBuilder</span></td>
        <td><p>The underlying ADO.NET connection string builder</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DbConnectionString_2__ctor_" data-uid="ETLBox.DbConnectionString`2.#ctor*"></a>
  <h4 id="ETLBox_DbConnectionString_2__ctor" data-uid="ETLBox.DbConnectionString`2.#ctor">DbConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionString_2__ctor_" data-uid="ETLBox.DbConnectionString`2.#ctor*"></a>
  <h4 id="ETLBox_DbConnectionString_2__ctor_System_String_" data-uid="ETLBox.DbConnectionString`2.#ctor(System.String)">DbConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected DbConnectionString(string value)
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
  <a id="ETLBox_DbConnectionString_2_Builder_" data-uid="ETLBox.DbConnectionString`2.Builder*"></a>
  <h4 id="ETLBox_DbConnectionString_2_Builder" data-uid="ETLBox.DbConnectionString`2.Builder">Builder</h4>
  <div class="markdown level1 summary"><p>The underlying ADO.NET ConnectionStringBuilder</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TBuilder Builder { get; }
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
        <td><span class="xref">TBuilder</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionString_2_DbName_" data-uid="ETLBox.DbConnectionString`2.DbName*"></a>
  <h4 id="ETLBox_DbConnectionString_2_DbName" data-uid="ETLBox.DbConnectionString`2.DbName">DbName</h4>
  <div class="markdown level1 summary"><p>The database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract string DbName { get; set; }
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
  <a id="ETLBox_DbConnectionString_2_DbNameKeyword_" data-uid="ETLBox.DbConnectionString`2.DbNameKeyword*"></a>
  <h4 id="ETLBox_DbConnectionString_2_DbNameKeyword" data-uid="ETLBox.DbConnectionString`2.DbNameKeyword">DbNameKeyword</h4>
  <div class="markdown level1 summary"><p>The keyword used in the connection string to identify a database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected abstract string DbNameKeyword { get; }
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
  <a id="ETLBox_DbConnectionString_2_MasterDbName_" data-uid="ETLBox.DbConnectionString`2.MasterDbName*"></a>
  <h4 id="ETLBox_DbConnectionString_2_MasterDbName" data-uid="ETLBox.DbConnectionString`2.MasterDbName">MasterDbName</h4>
  <div class="markdown level1 summary"><p>The name of the master database (if applicable)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract string MasterDbName { get; }
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
  <a id="ETLBox_DbConnectionString_2_Value_" data-uid="ETLBox.DbConnectionString`2.Value*"></a>
  <h4 id="ETLBox_DbConnectionString_2_Value" data-uid="ETLBox.DbConnectionString`2.Value">Value</h4>
  <div class="markdown level1 summary"><p>The connection string value, e.g. &quot;Server=localhost;Database=etlbox;&quot;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string Value { get; set; }
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
  <a id="ETLBox_DbConnectionString_2_Clone_" data-uid="ETLBox.DbConnectionString`2.Clone*"></a>
  <h4 id="ETLBox_DbConnectionString_2_Clone" data-uid="ETLBox.DbConnectionString`2.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Clones the current connection string</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual T Clone()
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
        <td><span class="xref">T</span></td>
        <td><p>A copy of the current connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionString_2_CloneWithMasterDbName_" data-uid="ETLBox.DbConnectionString`2.CloneWithMasterDbName*"></a>
  <h4 id="ETLBox_DbConnectionString_2_CloneWithMasterDbName" data-uid="ETLBox.DbConnectionString`2.CloneWithMasterDbName">CloneWithMasterDbName()</h4>
  <div class="markdown level1 summary"><p>Clones the current connection string with the master database name (if applicable)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual T CloneWithMasterDbName()
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
        <td><span class="xref">T</span></td>
        <td><p>The new connection string with master database name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionString_2_CloneWithNewDbName_" data-uid="ETLBox.DbConnectionString`2.CloneWithNewDbName*"></a>
  <h4 id="ETLBox_DbConnectionString_2_CloneWithNewDbName_System_String_" data-uid="ETLBox.DbConnectionString`2.CloneWithNewDbName(System.String)">CloneWithNewDbName(string)</h4>
  <div class="markdown level1 summary"><p>Clone the current connection string with a new database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual T CloneWithNewDbName(string value)
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
        <td><span class="xref">T</span></td>
        <td><p>The new connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionString_2_CloneWithoutDbName_" data-uid="ETLBox.DbConnectionString`2.CloneWithoutDbName*"></a>
  <h4 id="ETLBox_DbConnectionString_2_CloneWithoutDbName" data-uid="ETLBox.DbConnectionString`2.CloneWithoutDbName">CloneWithoutDbName()</h4>
  <div class="markdown level1 summary"><p>Clones the current connection string with removing the database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual T CloneWithoutDbName()
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
        <td><span class="xref">T</span></td>
        <td><p>The new connection string without database name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionString_2_ToString_" data-uid="ETLBox.DbConnectionString`2.ToString*"></a>
  <h4 id="ETLBox_DbConnectionString_2_ToString" data-uid="ETLBox.DbConnectionString`2.ToString">ToString()</h4>
  <div class="markdown level1 summary"><p>Returns the connection string <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Value">Value</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string ToString()
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
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
