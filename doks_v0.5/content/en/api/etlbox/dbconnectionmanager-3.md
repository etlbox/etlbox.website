---
title: "DbConnectionManager<TConnection, TTransaction, TParameter>"
description: "Details for Class DbConnectionManager<TConnection, TTransaction, TParameter> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10173
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbConnectionManager`3">
  <h1 id="ETLBox_DbConnectionManager_3" data-uid="ETLBox.DbConnectionManager`3" class="text-break">Class DbConnectionManager&lt;TConnection, TTransaction, TParameter&gt;
</h1>
  <div class="markdown level0 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">DbConnectionManager&lt;TConnection, TTransaction, TParameter&gt;</span></div>
      <div class="level2"><a class="xref" href="/api/etlbox.analysisservices/adomdconnectionmanager">AdomdConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.db2/db2connectionmanager">Db2ConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.mariadb/mariadbconnectionmanager">MariaDbConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.mysql/mysqlconnectionmanager">MySqlConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager">OdbcConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.oledb/oledbconnectionmanager">OleDbConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.oracle/oracleconnectionmanager">OracleConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.postgres/postgresconnectionmanager">PostgresConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.sqlite/sqliteconnectionmanager">SQLiteConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.sap.ase/aseconnectionmanager">AseConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.sap.hana/hanaconnectionmanager">HanaConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.snowflake/snowflakeconnectionmanager">SnowflakeConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.sqlserver/sqlconnectionmanager">SqlConnectionManager</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager</a>&lt;TConnection, TTransaction&gt;</div>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></div>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable">IDisposable</a></div>
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
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DbConnectionManager_3_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class DbConnectionManager<TConnection, TTransaction, TParameter> : IConnectionManager<TConnection, TTransaction>, IConnectionManager, IDisposable where TConnection : class, IDbConnection, new() where TTransaction : class, IDbTransaction where TParameter : class, IDbDataParameter, new()
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
        <td><span class="parametername">TConnection</span></td>
        <td><p>The underlying ADO.NET connection</p>
</td>
      </tr>
      <tr>
        <td><span class="parametername">TTransaction</span></td>
        <td><p>The transaction type used in the ADO.NET connector</p>
</td>
      </tr>
      <tr>
        <td><span class="parametername">TParameter</span></td>
        <td><p>The parameter type used in the ADO.NET connector</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DbConnectionManager_3__ctor_" data-uid="ETLBox.DbConnectionManager`3.#ctor*"></a>
  <h4 id="ETLBox_DbConnectionManager_3__ctor" data-uid="ETLBox.DbConnectionManager`3.#ctor">DbConnectionManager()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbConnectionManager()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3__ctor_" data-uid="ETLBox.DbConnectionManager`3.#ctor*"></a>
  <h4 id="ETLBox_DbConnectionManager_3__ctor_ETLBox_IDbConnectionString_" data-uid="ETLBox.DbConnectionManager`3.#ctor(ETLBox.IDbConnectionString)">DbConnectionManager(IDbConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbConnectionManager(IDbConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_DbConnectionManager_3__leaveOpen" data-uid="ETLBox.DbConnectionManager`3._leaveOpen">_leaveOpen</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected bool _leaveOpen
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DbConnectionManager_3_CommandTimeout_" data-uid="ETLBox.DbConnectionManager`3.CommandTimeout*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_CommandTimeout" data-uid="ETLBox.DbConnectionManager`3.CommandTimeout">CommandTimeout</h4>
  <div class="markdown level1 summary"><p>The timeout used when executing sql commands with this connection manager.
Default is 0 (no timeout)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int CommandTimeout { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_Compatibility_" data-uid="ETLBox.DbConnectionManager`3.Compatibility*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_Compatibility" data-uid="ETLBox.DbConnectionManager`3.Compatibility">Compatibility</h4>
  <div class="markdown level1 summary"><p>Information about compatibility of the current connector</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string Compatibility { get; set; }
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
  <a id="ETLBox_DbConnectionManager_3_ConnectionString_" data-uid="ETLBox.DbConnectionManager`3.ConnectionString*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ConnectionString" data-uid="ETLBox.DbConnectionManager`3.ConnectionString">ConnectionString</h4>
  <div class="markdown level1 summary"><p>The connection string used to establish the connection with the database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IDbConnectionString ConnectionString { get; set; }
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
        <td><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ConnectionType_" data-uid="ETLBox.DbConnectionManager`3.ConnectionType*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ConnectionType" data-uid="ETLBox.DbConnectionManager`3.ConnectionType">ConnectionType</h4>
  <div class="markdown level1 summary"><p>The database type for the connection manager.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract ConnectionType ConnectionType { get; protected set; }
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
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_DbConnection_" data-uid="ETLBox.DbConnectionManager`3.DbConnection*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_DbConnection" data-uid="ETLBox.DbConnectionManager`3.DbConnection">DbConnection</h4>
  <div class="markdown level1 summary"><p>The underlying ADO.NET connection.
Only read from this object and it's properties - by default, connections are always
acquired from the connection pool.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TConnection DbConnection { get; protected set; }
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
        <td><span class="xref">TConnection</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_HasTransaction_" data-uid="ETLBox.DbConnectionManager`3.HasTransaction*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_HasTransaction" data-uid="ETLBox.DbConnectionManager`3.HasTransaction">HasTransaction</h4>
  <div class="markdown level1 summary"><p>Indicates if the current connection has a transaction assigned</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool HasTransaction { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_IsInBulkInsert_" data-uid="ETLBox.DbConnectionManager`3.IsInBulkInsert*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_IsInBulkInsert" data-uid="ETLBox.DbConnectionManager`3.IsInBulkInsert">IsInBulkInsert</h4>
  <div class="markdown level1 summary"><p>Indicates if the current connection is currently used in a bulk insert operation (e.g. performed by a DbDestination)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsInBulkInsert { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_IsOdbcOrOleDbConnection_" data-uid="ETLBox.DbConnectionManager`3.IsOdbcOrOleDbConnection*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_IsOdbcOrOleDbConnection" data-uid="ETLBox.DbConnectionManager`3.IsOdbcOrOleDbConnection">IsOdbcOrOleDbConnection</h4>
  <div class="markdown level1 summary"><p>Indicates if the current connection manager is used as a OleDb or Odbc Connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool IsOdbcOrOleDbConnection { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_LeaveOpen_" data-uid="ETLBox.DbConnectionManager`3.LeaveOpen*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_LeaveOpen" data-uid="ETLBox.DbConnectionManager`3.LeaveOpen">LeaveOpen</h4>
  <div class="markdown level1 summary"><p>By default, after every sql operation the underlying ADO.NET connection is closed and retured to the ADO.NET connection pool.
(This is the recommended behavior)
To keep the connection open and avoid having the connection returned to the pool, set this to true.
A connnection will be left open when a bulk insert operation is executed or a transaction hase been openend and not yet commited or rolled back.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool LeaveOpen { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_MaxLoginAttempts_" data-uid="ETLBox.DbConnectionManager`3.MaxLoginAttempts*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_MaxLoginAttempts" data-uid="ETLBox.DbConnectionManager`3.MaxLoginAttempts">MaxLoginAttempts</h4>
  <div class="markdown level1 summary"><p>Number of attempts that the connection managers tries to connect before it decides that the database is not reachable.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int MaxLoginAttempts { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_MaxParameterSizeBulkCopy_" data-uid="ETLBox.DbConnectionManager`3.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_MaxParameterSizeBulkCopy" data-uid="ETLBox.DbConnectionManager`3.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"><p>Returns the maximum amount of parameters that can be used for bulk inserts.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual int MaxParameterSizeBulkCopy { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_MaxParameterSizeSql_" data-uid="ETLBox.DbConnectionManager`3.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_MaxParameterSizeSql" data-uid="ETLBox.DbConnectionManager`3.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>Returns the maximum amount of parameters that can be passed into a
sql query.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual int MaxParameterSizeSql { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_PP_" data-uid="ETLBox.DbConnectionManager`3.PP*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_PP" data-uid="ETLBox.DbConnectionManager`3.PP">PP</h4>
  <div class="markdown level1 summary"><p>The character that is used in front of parameter names in query to identify the parameter.
Most databases use the '@' character, some use ':'.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string PP { get; protected set; }
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
  <a id="ETLBox_DbConnectionManager_3_QB_" data-uid="ETLBox.DbConnectionManager`3.QB*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_QB" data-uid="ETLBox.DbConnectionManager`3.QB">QB</h4>
  <div class="markdown level1 summary"><p>The quotation begin character that is used in the database.
E.g. SqlServer uses: '[' and Postgres: '&quot;'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract string QB { get; protected set; }
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
  <a id="ETLBox_DbConnectionManager_3_QE_" data-uid="ETLBox.DbConnectionManager`3.QE*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_QE" data-uid="ETLBox.DbConnectionManager`3.QE">QE</h4>
  <div class="markdown level1 summary"><p>The quotation end character that is used in the database.
E.g. SqlServer uses: ']' and Postgres: '&quot;'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract string QE { get; protected set; }
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
  <a id="ETLBox_DbConnectionManager_3_State_" data-uid="ETLBox.DbConnectionManager`3.State*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_State" data-uid="ETLBox.DbConnectionManager`3.State">State</h4>
  <div class="markdown level1 summary"><p>The state of the underlying ADO.NET connection</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConnectionState? State { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.connectionstate">ConnectionState</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_SupportDatabases_" data-uid="ETLBox.DbConnectionManager`3.SupportDatabases*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_SupportDatabases" data-uid="ETLBox.DbConnectionManager`3.SupportDatabases">SupportDatabases</h4>
  <div class="markdown level1 summary"><p>Indicates if database server does support multiple databases.
A database in ETLBox means a schema in MySql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool SupportDatabases { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_SupportIndexes_" data-uid="ETLBox.DbConnectionManager`3.SupportIndexes*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_SupportIndexes" data-uid="ETLBox.DbConnectionManager`3.SupportIndexes">SupportIndexes</h4>
  <div class="markdown level1 summary"><p>Indicates if database server does support indexes.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool SupportIndexes { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_SupportProcedures_" data-uid="ETLBox.DbConnectionManager`3.SupportProcedures*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_SupportProcedures" data-uid="ETLBox.DbConnectionManager`3.SupportProcedures">SupportProcedures</h4>
  <div class="markdown level1 summary"><p>Indicates if the database supports procedures</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool SupportProcedures { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_SupportSchemas_" data-uid="ETLBox.DbConnectionManager`3.SupportSchemas*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_SupportSchemas" data-uid="ETLBox.DbConnectionManager`3.SupportSchemas">SupportSchemas</h4>
  <div class="markdown level1 summary"><p>Indicates if the database supports schemas
In MySql, this is false because the schema here is a database in ETLBox.
Use <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_SupportDatabases">SupportDatabases</a> instead</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool SupportSchemas { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_Transaction_" data-uid="ETLBox.DbConnectionManager`3.Transaction*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_Transaction" data-uid="ETLBox.DbConnectionManager`3.Transaction">Transaction</h4>
  <div class="markdown level1 summary"><p>The current transaction. Use <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_BeginTransaction">BeginTransaction()</a> to start a transaction,
and <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_CommitTransaction">CommitTransaction()</a> or <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_RollbackTransaction">RollbackTransaction()</a> to commit or rollback.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TTransaction Transaction { get; set; }
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
        <td><span class="xref">TTransaction</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_UseValueToSqlConversionFunc_" data-uid="ETLBox.DbConnectionManager`3.UseValueToSqlConversionFunc*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_UseValueToSqlConversionFunc" data-uid="ETLBox.DbConnectionManager`3.UseValueToSqlConversionFunc">UseValueToSqlConversionFunc</h4>
  <div class="markdown level1 summary"><p>Indicates if a value to sql conversion function was set
via <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__">SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool UseValueToSqlConversionFunc { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ValueToSqlConversionFunc_" data-uid="ETLBox.DbConnectionManager`3.ValueToSqlConversionFunc*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ValueToSqlConversionFunc" data-uid="ETLBox.DbConnectionManager`3.ValueToSqlConversionFunc">ValueToSqlConversionFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<ConversionContext, string> ValueToSqlConversionFunc { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="/api/etlbox.helper/conversioncontext">ConversionContext</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DbConnectionManager_3_BeginTransaction_" data-uid="ETLBox.DbConnectionManager`3.BeginTransaction*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BeginTransaction" data-uid="ETLBox.DbConnectionManager`3.BeginTransaction">BeginTransaction()</h4>
  <div class="markdown level1 summary"><p>Will start a transaction with the default isolation level.
This will leave the underlying ADO.NET connection open until the transaction is committed or rolled back.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BeginTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3_BeginTransaction_" data-uid="ETLBox.DbConnectionManager`3.BeginTransaction*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_" data-uid="ETLBox.DbConnectionManager`3.BeginTransaction(System.Data.IsolationLevel)">BeginTransaction(IsolationLevel)</h4>
  <div class="markdown level1 summary"><p>Will start a transaction with the given isolation level (if supported by the target database)
This will leave the underlying ADO.NET connection open until the transaction is committed or rolled back.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BeginTransaction(IsolationLevel isolationLevel)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.isolationlevel">IsolationLevel</a></td>
        <td><span class="parametername">isolationLevel</span></td>
        <td><p>The isolation level for the transaction</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_BulkDelete_" data-uid="ETLBox.DbConnectionManager`3.BulkDelete*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BulkDelete_ETLBox_ITableData_" data-uid="ETLBox.DbConnectionManager`3.BulkDelete(ETLBox.ITableData)">BulkDelete(ITableData)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk delete</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void BulkDelete(ITableData data)
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_BulkInsert_" data-uid="ETLBox.DbConnectionManager`3.BulkInsert*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BulkInsert_ETLBox_ITableData_" data-uid="ETLBox.DbConnectionManager`3.BulkInsert(ETLBox.ITableData)">BulkInsert(ITableData)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk insert</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void BulkInsert(ITableData data)
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_BulkNonQuery_" data-uid="ETLBox.DbConnectionManager`3.BulkNonQuery*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__" data-uid="ETLBox.DbConnectionManager`3.BulkNonQuery(System.String,System.Collections.Generic.IEnumerable{`2})">BulkNonQuery(string, IEnumerable&lt;TParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected int BulkNonQuery(string commandText, IEnumerable<TParameter> parameterList)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;TParameter&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_BulkNonQueryAsync_" data-uid="ETLBox.DbConnectionManager`3.BulkNonQueryAsync*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BulkNonQueryAsync_System_String_System_Collections_Generic_IEnumerable__2__" data-uid="ETLBox.DbConnectionManager`3.BulkNonQueryAsync(System.String,System.Collections.Generic.IEnumerable{`2})">BulkNonQueryAsync(string, IEnumerable&lt;TParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected Task<int> BulkNonQueryAsync(string commandText, IEnumerable<TParameter> parameterList)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;TParameter&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1">Task</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_BulkReader_" data-uid="ETLBox.DbConnectionManager`3.BulkReader*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.DbConnectionManager`3.BulkReader(System.String,System.Collections.Generic.IEnumerable{`2},System.Action,System.Action,System.Action{System.Object}[])">BulkReader(string, IEnumerable&lt;TParameter&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void BulkReader(string commandText, IEnumerable<TParameter> parameterList, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] rowActions)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;TParameter&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;[]</td>
        <td><span class="parametername">rowActions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_BulkReaderAsync_" data-uid="ETLBox.DbConnectionManager`3.BulkReaderAsync*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BulkReaderAsync_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.DbConnectionManager`3.BulkReaderAsync(System.String,System.Collections.Generic.IEnumerable{`2},System.Action,System.Action,System.Action{System.Object}[])">BulkReaderAsync(string, IEnumerable&lt;TParameter&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected Task BulkReaderAsync(string commandText, IEnumerable<TParameter> parameterList, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] rowActions)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;TParameter&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;[]</td>
        <td><span class="parametername">rowActions</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_BulkSelect_" data-uid="ETLBox.DbConnectionManager`3.BulkSelect*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.DbConnectionManager`3.BulkSelect(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Performs a bulk select</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual void BulkSelect(ITableData data, ICollection<string> selectColumnNames, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data needed for the where condition</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">selectColumnNames</span></td>
        <td><p>Column names included in the select</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td><p>Action invoked before any data is read</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td><p>Action invoked after all data is read</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td><p>Pass an action for each column</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_BulkUpdate_" data-uid="ETLBox.DbConnectionManager`3.BulkUpdate*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.DbConnectionManager`3.BulkUpdate(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk update</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void BulkUpdate(ITableData data, ICollection<string> setColumnNames, ICollection<string> joinColumnNames)
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">setColumnNames</span></td>
        <td><p>The column names used in the set part of the update statement</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">joinColumnNames</span></td>
        <td><p>The column names to join for the update</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_CleanUpBulkInsert_" data-uid="ETLBox.DbConnectionManager`3.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_CleanUpBulkInsert_System_String_" data-uid="ETLBox.DbConnectionManager`3.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(string)</h4>
  <div class="markdown level1 summary"><p>Called after the whole bulk insert operation
to change back settings made to improve bulk insert performance</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void CleanUpBulkInsert(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>Destination table name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_Clone_" data-uid="ETLBox.DbConnectionManager`3.Clone*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_Clone" data-uid="ETLBox.DbConnectionManager`3.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Cretes a clone of the current connection manager</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract IConnectionManager Clone()
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><p>A instance copy of the current connection manager</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_CloneIfAllowed_" data-uid="ETLBox.DbConnectionManager`3.CloneIfAllowed*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_CloneIfAllowed" data-uid="ETLBox.DbConnectionManager`3.CloneIfAllowed">CloneIfAllowed()</h4>
  <div class="markdown level1 summary"><p>Try to create a clone of the current connection - only possible if <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_LeaveOpen">LeaveOpen</a> is false.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IConnectionManager CloneIfAllowed()
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><p>The connection that was either cloned or the current connection</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_Close_" data-uid="ETLBox.DbConnectionManager`3.Close*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_Close" data-uid="ETLBox.DbConnectionManager`3.Close">Close()</h4>
  <div class="markdown level1 summary"><p>Closes the connection - this will not automatically disconnect
from the database server, it will only return the connection
to the ADO.NET connection pool for further reuse.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Close()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3_CloseIfAllowed_" data-uid="ETLBox.DbConnectionManager`3.CloseIfAllowed*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_CloseIfAllowed" data-uid="ETLBox.DbConnectionManager`3.CloseIfAllowed">CloseIfAllowed()</h4>
  <div class="markdown level1 summary"><p>Closes the connection only if leave open is set to false and no transaction or bulk insert is in progress.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CloseIfAllowed()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3_CommitTransaction_" data-uid="ETLBox.DbConnectionManager`3.CommitTransaction*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_CommitTransaction" data-uid="ETLBox.DbConnectionManager`3.CommitTransaction">CommitTransaction()</h4>
  <div class="markdown level1 summary"><p>Commits the current tranasction.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CommitTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3_ConfigureByConnectionType_" data-uid="ETLBox.DbConnectionManager`3.ConfigureByConnectionType*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ConfigureByConnectionType_ETLBox_ConnectionType_" data-uid="ETLBox.DbConnectionManager`3.ConfigureByConnectionType(ETLBox.ConnectionType)">ConfigureByConnectionType(ConnectionType)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void ConfigureByConnectionType(ConnectionType connectionType)
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
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_CopyBaseAttributes_" data-uid="ETLBox.DbConnectionManager`3.CopyBaseAttributes*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_CopyBaseAttributes_ETLBox_DbConnectionManager__0__1__2__" data-uid="ETLBox.DbConnectionManager`3.CopyBaseAttributes(ETLBox.DbConnectionManager{`0,`1,`2})">CopyBaseAttributes(DbConnectionManager&lt;TConnection, TTransaction, TParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Copies the connection manager base attribnutes from the current
connection manager to the target connection manager.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CopyBaseAttributes(DbConnectionManager<TConnection, TTransaction, TParameter> original)
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
        <td><a class="xref" href="/api/etlbox/dbconnectionmanager-3">DbConnectionManager</a>&lt;TConnection, TTransaction, TParameter&gt;</td>
        <td><span class="parametername">original</span></td>
        <td><p>Target of the copy operation</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_CreateDbConnection_" data-uid="ETLBox.DbConnectionManager`3.CreateDbConnection*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_CreateDbConnection" data-uid="ETLBox.DbConnectionManager`3.CreateDbConnection">CreateDbConnection()</h4>
  <div class="markdown level1 summary"><p>By default, a db connection is created with the given connection string value.
Override this method if you want to pass additional properties to the specific Ado.NET db connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual void CreateDbConnection()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3_CreateTempTableOnCurrentConnection_" data-uid="ETLBox.DbConnectionManager`3.CreateTempTableOnCurrentConnection*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_CreateTempTableOnCurrentConnection_ETLBox_ITableData_" data-uid="ETLBox.DbConnectionManager`3.CreateTempTableOnCurrentConnection(ETLBox.ITableData)">CreateTempTableOnCurrentConnection(ITableData)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected string CreateTempTableOnCurrentConnection(ITableData data)
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
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
  <a id="ETLBox_DbConnectionManager_3_Dispose_" data-uid="ETLBox.DbConnectionManager`3.Dispose*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_Dispose" data-uid="ETLBox.DbConnectionManager`3.Dispose">Dispose()</h4>
  <div class="markdown level1 summary"><p>Closes the connection - this will not automatically disconnect
from the database server, it will only return the connection
to the ADO.NET connection pool for further reuse.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Dispose()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3_Dispose_" data-uid="ETLBox.DbConnectionManager`3.Dispose*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_Dispose_System_Boolean_" data-uid="ETLBox.DbConnectionManager`3.Dispose(System.Boolean)">Dispose(bool)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void Dispose(bool disposing)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">disposing</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_DropTableOnCurrentConnection_" data-uid="ETLBox.DbConnectionManager`3.DropTableOnCurrentConnection*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_DropTableOnCurrentConnection_System_String_" data-uid="ETLBox.DbConnectionManager`3.DropTableOnCurrentConnection(System.String)">DropTableOnCurrentConnection(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void DropTableOnCurrentConnection(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ExecuteNonQuery_" data-uid="ETLBox.DbConnectionManager`3.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.DbConnectionManager`3.ExecuteNonQuery(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Executes a query against the database that doesn't return any data.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ExecuteNonQuery(string commandText, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of parameters</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><p>Number of affected rows.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ExecuteNonQueryAsync_" data-uid="ETLBox.DbConnectionManager`3.ExecuteNonQueryAsync*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.DbConnectionManager`3.ExecuteNonQueryAsync(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Executes a query asynchronously against the database that doesn't return any data.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Task<int> ExecuteNonQueryAsync(string commandText, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of parameters</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1">Task</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>&gt;</td>
        <td><p>Number of affected rows.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ExecuteReader_" data-uid="ETLBox.DbConnectionManager`3.ExecuteReader*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.DbConnectionManager`3.ExecuteReader(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Int32,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Executes a query against the database that does return multiple rows in multiple columns.
Define a read action for each columns of your result set.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void ExecuteReader(string commandText, IEnumerable<QueryParameter> parameterList = null, int limit = 2147483647, Action beforeRowReadAction = null, Action afterRowReadAction = null, params Action<object>[] actions)
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
        <td><span class="parametername">commandText</span></td>
        <td><p>The sql command</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of query parameters</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">limit</span></td>
        <td><p>Maximum number of rows to read</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td><p>This action is executed before reading the next row</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td><p>This action is executed after reading a row</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td><p>Every column in the result set will call an action with the value of the current row.
The order of the columns corresponds with the order of the passed actions.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ExecuteReaderAsync_" data-uid="ETLBox.DbConnectionManager`3.ExecuteReaderAsync*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.DbConnectionManager`3.ExecuteReaderAsync(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Int32,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Executes a query asynchronously against the database that does return multiple rows in multiple columns.
Define a read action for each columns of your result set.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Task ExecuteReaderAsync(string commandText, IEnumerable<QueryParameter> parameterList = null, int limit = 2147483647, Action beforeRowReadAction = null, Action afterRowReadAction = null, params Action<object>[] actions)
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
        <td><span class="parametername">commandText</span></td>
        <td><p>The sql command</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of query parameters</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">limit</span></td>
        <td><p>Maximum number of rows to read</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td><p>This action is executed before reading the next row</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td><p>This action is executed after reading a row</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td><p>Every column in the result set will call an action with the value of the current row.
The order of the columns corresponds with the order of the passed actions.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>A data reader to iterate through the result set</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ExecuteScalar_" data-uid="ETLBox.DbConnectionManager`3.ExecuteScalar*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.DbConnectionManager`3.ExecuteScalar(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Executes a query against the database that returns a single row in a single column.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object ExecuteScalar(string commandText, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of parameters</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><p>The result</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ExecuteScalarAsync_" data-uid="ETLBox.DbConnectionManager`3.ExecuteScalarAsync*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.DbConnectionManager`3.ExecuteScalarAsync(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Executes a query asynchronously against the database that returns a single row in a single column.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Task<object> ExecuteScalarAsync(string commandText, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of parameters</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1">Task</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
        <td><p>The result</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_Open_" data-uid="ETLBox.DbConnectionManager`3.Open*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_Open" data-uid="ETLBox.DbConnectionManager`3.Open">Open()</h4>
  <div class="markdown level1 summary"><p>Opens the connection to the database. Normally you don't have to do this on your own,
as all tasks and components will try to open a connection if no open connection is found.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Open()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3_OpenAsync_" data-uid="ETLBox.DbConnectionManager`3.OpenAsync*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_OpenAsync" data-uid="ETLBox.DbConnectionManager`3.OpenAsync">OpenAsync()</h4>
  <div class="markdown level1 summary"><p>Opens the connection to the database asynchrously. Normally you don't have to do this on your own,
as all tasks and components will try to open a connection if no open connection is found.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Task OpenAsync()
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_OpenCoreAsync_" data-uid="ETLBox.DbConnectionManager`3.OpenCoreAsync*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_OpenCoreAsync_System_Boolean_" data-uid="ETLBox.DbConnectionManager`3.OpenCoreAsync(System.Boolean)">OpenCoreAsync(bool)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Task OpenCoreAsync(bool sync = false)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">sync</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_OverrideConnectionSpecifics_" data-uid="ETLBox.DbConnectionManager`3.OverrideConnectionSpecifics*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_ConnectionType_System_String_System_String_System_String_System_Int32_System_Int32_" data-uid="ETLBox.DbConnectionManager`3.OverrideConnectionSpecifics(ETLBox.ConnectionType,System.String,System.String,System.String,System.Int32,System.Int32)">OverrideConnectionSpecifics(ConnectionType, string, string, string, int, int)</h4>
  <div class="markdown level1 summary"><p>Changes the connection manager type for the generic connector, so that
you can try to use it with not supported setups.
If you are looking for supported Odbc connection managers, try to use the specific
connection managers (e.g. MySqlOdbcConnectionManager for MySql or
PostgresOdbcConnectionManager for Postgres)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void OverrideConnectionSpecifics(ConnectionType connectionManagerType, string QB, string QE, string PP = &quot;@&quot;, int maxParameterSizeBulkCopy = 2147483647, int maxParameterSizeSql = 2147483647)
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
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td><span class="parametername">connectionManagerType</span></td>
        <td><p>The new connection type for this connection manager.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">QB</span></td>
        <td><p>Quotation begin (e.g. &quot;`&quot; for MySql or &quot;[&quot; for SqlServer)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">QE</span></td>
        <td><p>Quotation end (e.g. &quot;`&quot; for MySql or &quot;]&quot; for SqlServer)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">PP</span></td>
        <td><p>Parameter placeholder (&quot;@&quot; for most databases)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">maxParameterSizeBulkCopy</span></td>
        <td><p>Number of parameters allowed when running a bulk insert (columns*row per batch = number of parameters)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">maxParameterSizeSql</span></td>
        <td><p>Number of parameters allowed for sql or non insert bulk operations (columns*row per batch = number of parameters)</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_PrepareBulkInsert_" data-uid="ETLBox.DbConnectionManager`3.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_PrepareBulkInsert_System_String_" data-uid="ETLBox.DbConnectionManager`3.PrepareBulkInsert(System.String)">PrepareBulkInsert(string)</h4>
  <div class="markdown level1 summary"><p>Performs preparations needed to improved
performance of a bulk insert operation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void PrepareBulkInsert(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>Destination table name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_ReadSqlOutputIntoTableData_" data-uid="ETLBox.DbConnectionManager`3.ReadSqlOutputIntoTableData*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_ReadSqlOutputIntoTableData_ETLBox_ITableData_System_String_System_Boolean_" data-uid="ETLBox.DbConnectionManager`3.ReadSqlOutputIntoTableData(ETLBox.ITableData,System.String,System.Boolean)">ReadSqlOutputIntoTableData(ITableData, string, bool)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void ReadSqlOutputIntoTableData(ITableData data, string sql, bool hasSequenceColumn = true)
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">hasSequenceColumn</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_RollbackTransaction_" data-uid="ETLBox.DbConnectionManager`3.RollbackTransaction*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_RollbackTransaction" data-uid="ETLBox.DbConnectionManager`3.RollbackTransaction">RollbackTransaction()</h4>
  <div class="markdown level1 summary"><p>Rolls the current transaction back.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void RollbackTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_DbConnectionManager_3_SetValueToSqlConversionFunc_" data-uid="ETLBox.DbConnectionManager`3.SetValueToSqlConversionFunc*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__" data-uid="ETLBox.DbConnectionManager`3.SetValueToSqlConversionFunc(System.Func{ETLBox.Helper.ConversionContext,System.String})">SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</h4>
  <div class="markdown level1 summary"><p>If sql is used to insert/update/delete data into the destination tables, the values are injected into the sql
via parameters. If a value to sql conversion func is set, the parameters are bypassed and the
sql can be influenced directly with this function.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual void SetValueToSqlConversionFunc(Func<ConversionContext, string> valueToSqlConversionFunc)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="/api/etlbox.helper/conversioncontext">ConversionContext</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">valueToSqlConversionFunc</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbConnectionManager_3_UseExistingDbConnection_" data-uid="ETLBox.DbConnectionManager`3.UseExistingDbConnection*"></a>
  <h4 id="ETLBox_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_" data-uid="ETLBox.DbConnectionManager`3.UseExistingDbConnection(System.Data.IDbConnection)">UseExistingDbConnection(IDbConnection)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void UseExistingDbConnection(IDbConnection adoDbConnection)
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
        <td><span class="parametername">adoDbConnection</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager&lt;TConnection, TTransaction&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a>
  </div>
  <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable">IDisposable</a>
  </div>

{{< /rawhtml >}}
