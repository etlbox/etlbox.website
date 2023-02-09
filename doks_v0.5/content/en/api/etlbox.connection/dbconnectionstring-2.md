---
title: "DbConnectionString<T, TBuilder>"
description: "Details for Class DbConnectionString<T, TBuilder> (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10009
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.DbConnectionString`2">
  <h1 id="ETLBox_Connection_DbConnectionString_2" data-uid="ETLBox.Connection.DbConnectionString`2" class="text-break">Class DbConnectionString&lt;T, TBuilder&gt;
</h1>
  <div class="markdown level0 summary"><p><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a> base</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">DbConnectionString&lt;T, TBuilder&gt;</span></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/aseconnectionstring">AseConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/db2connectionstring">Db2ConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/mysqlconnectionstring">MySqlConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/odbcconnectionstring">OdbcConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/oledbconnectionstring">OleDbConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/oracleconnectionstring">OracleConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/postgresconnectionstring">PostgresConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/sqlconnectionstring">SqlConnectionString</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/sqliteconnectionstring">SQLiteConnectionString</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">object.Equals(object)</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">object.GetType()</span>
    </div>
    <div>
      <span class="xref">object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">object.ReferenceEquals(object, object)</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Connection</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Connection_DbConnectionString_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class DbConnectionString<T, TBuilder> : IDbConnectionString where T : DbConnectionString<T, TBuilder>, new() where TBuilder : DbConnectionStringBuilder, new()
```

{{< rawhtml >}}
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_Connection_DbConnectionString_2__ctor_" data-uid="ETLBox.Connection.DbConnectionString`2.#ctor*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2__ctor" data-uid="ETLBox.Connection.DbConnectionString`2.#ctor">DbConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_DbConnectionString_2__ctor_" data-uid="ETLBox.Connection.DbConnectionString`2.#ctor*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2__ctor_System_String_" data-uid="ETLBox.Connection.DbConnectionString`2.#ctor(System.String)">DbConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected DbConnectionString(string value)
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_DbConnectionString_2_Builder_" data-uid="ETLBox.Connection.DbConnectionString`2.Builder*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_Builder" data-uid="ETLBox.Connection.DbConnectionString`2.Builder">Builder</h4>
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
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_Connection_DbConnectionString_2_DbName_" data-uid="ETLBox.Connection.DbConnectionString`2.DbName*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_DbName" data-uid="ETLBox.Connection.DbConnectionString`2.DbName">DbName</h4>
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
  <a id="ETLBox_Connection_DbConnectionString_2_DbNameKeyword_" data-uid="ETLBox.Connection.DbConnectionString`2.DbNameKeyword*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_DbNameKeyword" data-uid="ETLBox.Connection.DbConnectionString`2.DbNameKeyword">DbNameKeyword</h4>
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
  <a id="ETLBox_Connection_DbConnectionString_2_MasterDbName_" data-uid="ETLBox.Connection.DbConnectionString`2.MasterDbName*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_MasterDbName" data-uid="ETLBox.Connection.DbConnectionString`2.MasterDbName">MasterDbName</h4>
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
  <a id="ETLBox_Connection_DbConnectionString_2_Value_" data-uid="ETLBox.Connection.DbConnectionString`2.Value*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_Value" data-uid="ETLBox.Connection.DbConnectionString`2.Value">Value</h4>
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
  <a id="ETLBox_Connection_DbConnectionString_2_Clone_" data-uid="ETLBox.Connection.DbConnectionString`2.Clone*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_Clone" data-uid="ETLBox.Connection.DbConnectionString`2.Clone">Clone()</h4>
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
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_Connection_DbConnectionString_2_CloneWithMasterDbName_" data-uid="ETLBox.Connection.DbConnectionString`2.CloneWithMasterDbName*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_CloneWithMasterDbName" data-uid="ETLBox.Connection.DbConnectionString`2.CloneWithMasterDbName">CloneWithMasterDbName()</h4>
  <div class="markdown level1 summary"><p>Clones the current connection string with the master database name (if applicable)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public T CloneWithMasterDbName()
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
        <td><span class="xref">T</span></td>
        <td><p>The new connection string with master database name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionString_2_CloneWithNewDbName_" data-uid="ETLBox.Connection.DbConnectionString`2.CloneWithNewDbName*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_CloneWithNewDbName_System_String_" data-uid="ETLBox.Connection.DbConnectionString`2.CloneWithNewDbName(System.String)">CloneWithNewDbName(string)</h4>
  <div class="markdown level1 summary"><p>Clone the current connection string with a new database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public T CloneWithNewDbName(string value)
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
        <td><span class="xref">T</span></td>
        <td><p>The new connection string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionString_2_CloneWithoutDbName_" data-uid="ETLBox.Connection.DbConnectionString`2.CloneWithoutDbName*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_CloneWithoutDbName" data-uid="ETLBox.Connection.DbConnectionString`2.CloneWithoutDbName">CloneWithoutDbName()</h4>
  <div class="markdown level1 summary"><p>Clones the current connection string with removing the database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public T CloneWithoutDbName()
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
        <td><span class="xref">T</span></td>
        <td><p>The new connection string without database name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionString_2_ToString_" data-uid="ETLBox.Connection.DbConnectionString`2.ToString*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_ToString" data-uid="ETLBox.Connection.DbConnectionString`2.ToString">ToString()</h4>
  <div class="markdown level1 summary"><p>Returns the connection string <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Value">Value</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string ToString()
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">object.ToString()</span></div>
  <h3 id="eii">Explicit Interface Implementations
</h3>
  <a id="ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_Clone_" data-uid="ETLBox.Connection.DbConnectionString`2.ETLBox#Connection#IDbConnectionString#Clone*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_Clone" data-uid="ETLBox.Connection.DbConnectionString`2.ETLBox#Connection#IDbConnectionString#Clone">IDbConnectionString.Clone()</h4>
  <div class="markdown level1 summary"><p>Creates a copy of the current connection</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDbConnectionString IDbConnectionString.Clone()
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
  <a id="ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithMasterDbName_" data-uid="ETLBox.Connection.DbConnectionString`2.ETLBox#Connection#IDbConnectionString#CloneWithMasterDbName*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithMasterDbName" data-uid="ETLBox.Connection.DbConnectionString`2.ETLBox#Connection#IDbConnectionString#CloneWithMasterDbName">IDbConnectionString.CloneWithMasterDbName()</h4>
  <div class="markdown level1 summary"><p>Clone the current connection string with the master database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDbConnectionString IDbConnectionString.CloneWithMasterDbName()
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
  <a id="ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithNewDbName_" data-uid="ETLBox.Connection.DbConnectionString`2.ETLBox#Connection#IDbConnectionString#CloneWithNewDbName*"></a>
  <h4 id="ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithNewDbName_System_String_" data-uid="ETLBox.Connection.DbConnectionString`2.ETLBox#Connection#IDbConnectionString#CloneWithNewDbName(System.String)">IDbConnectionString.CloneWithNewDbName(string)</h4>
  <div class="markdown level1 summary"><p>Clone the current connection string with a new database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDbConnectionString IDbConnectionString.CloneWithNewDbName(string value)
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
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
