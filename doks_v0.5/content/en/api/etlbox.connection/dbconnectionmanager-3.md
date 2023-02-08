---
title: "DbConnectionManager<TConnection, TTransaction, TParameter>"
description: "Details for Class DbConnectionManager<TConnection, TTransaction, TParameter> (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10008
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.DbConnectionManager`3">
  <h1 id="ETLBox_Connection_DbConnectionManager_3" data-uid="ETLBox.Connection.DbConnectionManager`3" class="text-break">Class DbConnectionManager&lt;TConnection, TTransaction, TParameter&gt;
</h1>
  <div class="markdown level0 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">DbConnectionManager&lt;TConnection, TTransaction, TParameter&gt;</span></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/adomdconnectionmanager">AdomdConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/aseconnectionmanager">AseConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/db2connectionmanager">Db2ConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager">MySqlConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager">OdbcConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/oledbconnectionmanager">OleDbConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/oracleconnectionmanager">OracleConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/postgresconnectionmanager">PostgresConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/sqlconnectionmanager">SqlConnectionManager</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.connection/sqliteconnectionmanager">SQLiteConnectionManager</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager-2">IConnectionManager</a>&lt;TConnection, TTransaction&gt;</div>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Object.Equals(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">System.Object.GetType()</span>
    </div>
    <div>
      <span class="xref">System.Object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">System.Object.ReferenceEquals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Connection</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Connection_DbConnectionManager_3_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class DbConnectionManager<TConnection, TTransaction, TParameter> : IConnectionManager<TConnection, TTransaction>, IConnectionManager, IDisposable where TConnection : class, IDbConnection, new()
    where TTransaction : class, IDbTransaction where TParameter : class, IDbDataParameter, new()
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
  <a id="ETLBox_Connection_DbConnectionManager_3__ctor_" data-uid="ETLBox.Connection.DbConnectionManager`3.#ctor*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3__ctor" data-uid="ETLBox.Connection.DbConnectionManager`3.#ctor">DbConnectionManager()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbConnectionManager()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_DbConnectionManager_3__ctor_" data-uid="ETLBox.Connection.DbConnectionManager`3.#ctor*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3__ctor_ETLBox_Connection_IDbConnectionString_" data-uid="ETLBox.Connection.DbConnectionManager`3.#ctor(ETLBox.Connection.IDbConnectionString)">DbConnectionManager(IDbConnectionString)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbConnectionManager(IDbConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_DbConnectionManager_3_CommandTimeout_" data-uid="ETLBox.Connection.DbConnectionManager`3.CommandTimeout*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_CommandTimeout" data-uid="ETLBox.Connection.DbConnectionManager`3.CommandTimeout">CommandTimeout</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int CommandTimeout { get; set; }
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_Compatibility_" data-uid="ETLBox.Connection.DbConnectionManager`3.Compatibility*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_Compatibility" data-uid="ETLBox.Connection.DbConnectionManager`3.Compatibility">Compatibility</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string Compatibility { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_ConnectionManagerType_" data-uid="ETLBox.Connection.DbConnectionManager`3.ConnectionManagerType*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_ConnectionManagerType" data-uid="ETLBox.Connection.DbConnectionManager`3.ConnectionManagerType">ConnectionManagerType</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract ConnectionManagerType ConnectionManagerType { get; protected set; }
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
        <td><a class="xref" href="/api/etlbox.connection/connectionmanagertype">ConnectionManagerType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_ConnectionString_" data-uid="ETLBox.Connection.DbConnectionManager`3.ConnectionString*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_ConnectionString" data-uid="ETLBox.Connection.DbConnectionManager`3.ConnectionString">ConnectionString</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IDbConnectionString ConnectionString { get; set; }
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
        <td><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_DbConnection_" data-uid="ETLBox.Connection.DbConnectionManager`3.DbConnection*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_DbConnection" data-uid="ETLBox.Connection.DbConnectionManager`3.DbConnection">DbConnection</h4>
  <div class="markdown level1 summary"><p>The underlying ADO.NET connection.
Only read from this object and it's properties - by default, connections are always
acquired from the connection pool. There is no guarantee that
the same connection will be used in ETLBox components.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TConnection DbConnection { get; protected set; }
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
        <td><span class="xref">TConnection</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_IsInBulkInsert_" data-uid="ETLBox.Connection.DbConnectionManager`3.IsInBulkInsert*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_IsInBulkInsert" data-uid="ETLBox.Connection.DbConnectionManager`3.IsInBulkInsert">IsInBulkInsert</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsInBulkInsert { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_IsOdbcOrOleDbConnection_" data-uid="ETLBox.Connection.DbConnectionManager`3.IsOdbcOrOleDbConnection*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_IsOdbcOrOleDbConnection" data-uid="ETLBox.Connection.DbConnectionManager`3.IsOdbcOrOleDbConnection">IsOdbcOrOleDbConnection</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool IsOdbcOrOleDbConnection { get; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_LeaveOpen_" data-uid="ETLBox.Connection.DbConnectionManager`3.LeaveOpen*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_LeaveOpen" data-uid="ETLBox.Connection.DbConnectionManager`3.LeaveOpen">LeaveOpen</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool LeaveOpen { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_MaxLoginAttempts_" data-uid="ETLBox.Connection.DbConnectionManager`3.MaxLoginAttempts*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_MaxLoginAttempts" data-uid="ETLBox.Connection.DbConnectionManager`3.MaxLoginAttempts">MaxLoginAttempts</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int MaxLoginAttempts { get; set; }
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeBulkCopy_" data-uid="ETLBox.Connection.DbConnectionManager`3.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeBulkCopy" data-uid="ETLBox.Connection.DbConnectionManager`3.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual int MaxParameterSizeBulkCopy { get; }
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeSql_" data-uid="ETLBox.Connection.DbConnectionManager`3.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeSql" data-uid="ETLBox.Connection.DbConnectionManager`3.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual int MaxParameterSizeSql { get; }
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_PP_" data-uid="ETLBox.Connection.DbConnectionManager`3.PP*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_PP" data-uid="ETLBox.Connection.DbConnectionManager`3.PP">PP</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string PP { get; protected set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_QB_" data-uid="ETLBox.Connection.DbConnectionManager`3.QB*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_QB" data-uid="ETLBox.Connection.DbConnectionManager`3.QB">QB</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract string QB { get; protected set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_QE_" data-uid="ETLBox.Connection.DbConnectionManager`3.QE*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_QE" data-uid="ETLBox.Connection.DbConnectionManager`3.QE">QE</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract string QE { get; protected set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_State_" data-uid="ETLBox.Connection.DbConnectionManager`3.State*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_State" data-uid="ETLBox.Connection.DbConnectionManager`3.State">State</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConnectionState? State { get; }
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
        <td><span class="xref">System.Nullable</span>&lt;<span class="xref">System.Data.ConnectionState</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_SupportDatabases_" data-uid="ETLBox.Connection.DbConnectionManager`3.SupportDatabases*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_SupportDatabases" data-uid="ETLBox.Connection.DbConnectionManager`3.SupportDatabases">SupportDatabases</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool SupportDatabases { get; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_SupportProcedures_" data-uid="ETLBox.Connection.DbConnectionManager`3.SupportProcedures*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_SupportProcedures" data-uid="ETLBox.Connection.DbConnectionManager`3.SupportProcedures">SupportProcedures</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool SupportProcedures { get; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_SupportSchemas_" data-uid="ETLBox.Connection.DbConnectionManager`3.SupportSchemas*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_SupportSchemas" data-uid="ETLBox.Connection.DbConnectionManager`3.SupportSchemas">SupportSchemas</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool SupportSchemas { get; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_Transaction_" data-uid="ETLBox.Connection.DbConnectionManager`3.Transaction*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_Transaction" data-uid="ETLBox.Connection.DbConnectionManager`3.Transaction">Transaction</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TTransaction Transaction { get; set; }
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
        <td><span class="xref">TTransaction</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_DbConnectionManager_3_BeginTransaction_" data-uid="ETLBox.Connection.DbConnectionManager`3.BeginTransaction*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_BeginTransaction" data-uid="ETLBox.Connection.DbConnectionManager`3.BeginTransaction">BeginTransaction()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BeginTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_DbConnectionManager_3_BeginTransaction_" data-uid="ETLBox.Connection.DbConnectionManager`3.BeginTransaction*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_" data-uid="ETLBox.Connection.DbConnectionManager`3.BeginTransaction(System.Data.IsolationLevel)">BeginTransaction(IsolationLevel)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BeginTransaction(IsolationLevel isolationLevel)
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
        <td><span class="xref">System.Data.IsolationLevel</span></td>
        <td><span class="parametername">isolationLevel</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_BulkDelete_" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkDelete*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_BulkDelete_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkDelete(ETLBox.ControlFlow.ITableData)">BulkDelete(ITableData)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void BulkDelete(ITableData data)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_BulkInsert_" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkInsert*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_BulkInsert_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkInsert(ETLBox.ControlFlow.ITableData)">BulkInsert(ITableData)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void BulkInsert(ITableData data)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_BulkNonQuery_" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkNonQuery*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkNonQuery(System.String,System.Collections.Generic.IEnumerable{`2})">BulkNonQuery(String, IEnumerable&lt;TParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected int BulkNonQuery(string commandText, IEnumerable<TParameter> parameterList)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;TParameter&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_BulkReader_" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkReader*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkReader(System.String,System.Collections.Generic.IEnumerable{`2},System.Action,System.Action,System.Action{System.Object}[])">BulkReader(String, IEnumerable&lt;TParameter&gt;, Action, Action, Action&lt;Object&gt;[])</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void BulkReader(string commandText, IEnumerable<TParameter> parameterList, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] rowActions)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;TParameter&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span>&lt;<span class="xref">System.Object</span>&gt;[]</td>
        <td><span class="parametername">rowActions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_BulkSelect_" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkSelect*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkSelect(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual void BulkSelect(ITableData data, ICollection<string> selectColumnNames, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.String</span>&gt;</td>
        <td><span class="parametername">selectColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span>&lt;<span class="xref">System.Object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_BulkUpdate_" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkUpdate*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.Connection.DbConnectionManager`3.BulkUpdate(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void BulkUpdate(ITableData data, ICollection<string> setColumnNames, ICollection<string> joinColumnNames)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.String</span>&gt;</td>
        <td><span class="parametername">setColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.String</span>&gt;</td>
        <td><span class="parametername">joinColumnNames</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_CleanUpBulkInsert_" data-uid="ETLBox.Connection.DbConnectionManager`3.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_CleanUpBulkInsert_System_String_" data-uid="ETLBox.Connection.DbConnectionManager`3.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(String)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void CleanUpBulkInsert(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_Clone_" data-uid="ETLBox.Connection.DbConnectionManager`3.Clone*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_Clone" data-uid="ETLBox.Connection.DbConnectionManager`3.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract IConnectionManager Clone()
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_CloneIfAllowed_" data-uid="ETLBox.Connection.DbConnectionManager`3.CloneIfAllowed*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_CloneIfAllowed" data-uid="ETLBox.Connection.DbConnectionManager`3.CloneIfAllowed">CloneIfAllowed()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IConnectionManager CloneIfAllowed()
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_Close_" data-uid="ETLBox.Connection.DbConnectionManager`3.Close*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_Close" data-uid="ETLBox.Connection.DbConnectionManager`3.Close">Close()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Close()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_DbConnectionManager_3_CloseIfAllowed_" data-uid="ETLBox.Connection.DbConnectionManager`3.CloseIfAllowed*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_CloseIfAllowed" data-uid="ETLBox.Connection.DbConnectionManager`3.CloseIfAllowed">CloseIfAllowed()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CloseIfAllowed()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_DbConnectionManager_3_CommitTransaction_" data-uid="ETLBox.Connection.DbConnectionManager`3.CommitTransaction*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_CommitTransaction" data-uid="ETLBox.Connection.DbConnectionManager`3.CommitTransaction">CommitTransaction()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CommitTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_DbConnectionManager_3_CopyBaseAttributes_" data-uid="ETLBox.Connection.DbConnectionManager`3.CopyBaseAttributes*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_CopyBaseAttributes_ETLBox_Connection_DbConnectionManager__0__1__2__" data-uid="ETLBox.Connection.DbConnectionManager`3.CopyBaseAttributes(ETLBox.Connection.DbConnectionManager{`0,`1,`2})">CopyBaseAttributes(DbConnectionManager&lt;TConnection, TTransaction, TParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Copeis the connection manager base attribnutes from the current
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
        <td><a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3">DbConnectionManager</a>&lt;TConnection, TTransaction, TParameter&gt;</td>
        <td><span class="parametername">original</span></td>
        <td><p>Target of the copy operation</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_CreateDbConnection_" data-uid="ETLBox.Connection.DbConnectionManager`3.CreateDbConnection*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_CreateDbConnection" data-uid="ETLBox.Connection.DbConnectionManager`3.CreateDbConnection">CreateDbConnection()</h4>
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
  <a id="ETLBox_Connection_DbConnectionManager_3_Dispose_" data-uid="ETLBox.Connection.DbConnectionManager`3.Dispose*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_Dispose" data-uid="ETLBox.Connection.DbConnectionManager`3.Dispose">Dispose()</h4>
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
  <a id="ETLBox_Connection_DbConnectionManager_3_Dispose_" data-uid="ETLBox.Connection.DbConnectionManager`3.Dispose*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_Dispose_System_Boolean_" data-uid="ETLBox.Connection.DbConnectionManager`3.Dispose(System.Boolean)">Dispose(Boolean)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void Dispose(bool disposing)
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
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">disposing</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_ExecuteNonQuery_" data-uid="ETLBox.Connection.DbConnectionManager`3.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.Connection.DbConnectionManager`3.ExecuteNonQuery(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQuery(String, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ExecuteNonQuery(string commandText, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_ExecuteReader_" data-uid="ETLBox.Connection.DbConnectionManager`3.ExecuteReader*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.Connection.DbConnectionManager`3.ExecuteReader(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Int32,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(String, IEnumerable&lt;QueryParameter&gt;, Int32, Action, Action, Action&lt;Object&gt;[])</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void ExecuteReader(string commandText, IEnumerable<QueryParameter> parameterList = null, int limit = 2147483647, Action beforeRowReadAction = null, Action afterRowReadAction = null, params Action<object>[] actions)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">limit</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span>&lt;<span class="xref">System.Object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_ExecuteScalar_" data-uid="ETLBox.Connection.DbConnectionManager`3.ExecuteScalar*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.Connection.DbConnectionManager`3.ExecuteScalar(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalar(String, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object ExecuteScalar(string commandText, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">commandText</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
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
        <td><span class="xref">System.Object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_Open_" data-uid="ETLBox.Connection.DbConnectionManager`3.Open*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_Open" data-uid="ETLBox.Connection.DbConnectionManager`3.Open">Open()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Open()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_DbConnectionManager_3_OverrideConnectionSpecifics_" data-uid="ETLBox.Connection.DbConnectionManager`3.OverrideConnectionSpecifics*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_Connection_ConnectionManagerType_System_String_System_String_System_String_" data-uid="ETLBox.Connection.DbConnectionManager`3.OverrideConnectionSpecifics(ETLBox.Connection.ConnectionManagerType,System.String,System.String,System.String)">OverrideConnectionSpecifics(ConnectionManagerType, String, String, String)</h4>
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
    public void OverrideConnectionSpecifics(ConnectionManagerType connectionManagerType, string QB, string QE, string PP = &quot;@&quot;)
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
        <td><a class="xref" href="/api/etlbox.connection/connectionmanagertype">ConnectionManagerType</a></td>
        <td><span class="parametername">connectionManagerType</span></td>
        <td><p>The new connection type for this connection manager.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">QB</span></td>
        <td><p>Quotation begin (e.g. &quot;`&quot; for MySql or &quot;[&quot; for SqlServer)</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">QE</span></td>
        <td><p>Quotation end (e.g. &quot;`&quot; for MySql or &quot;]&quot; for SqlServer)</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">PP</span></td>
        <td><p>Parameter placeholder (&quot;@&quot; for most databases)</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_PrepareBulkInsert_" data-uid="ETLBox.Connection.DbConnectionManager`3.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_PrepareBulkInsert_System_String_" data-uid="ETLBox.Connection.DbConnectionManager`3.PrepareBulkInsert(System.String)">PrepareBulkInsert(String)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public abstract void PrepareBulkInsert(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_DbConnectionManager_3_RollbackTransaction_" data-uid="ETLBox.Connection.DbConnectionManager`3.RollbackTransaction*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_RollbackTransaction" data-uid="ETLBox.Connection.DbConnectionManager`3.RollbackTransaction">RollbackTransaction()</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void RollbackTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_DbConnectionManager_3_UseExistingDbConnection_" data-uid="ETLBox.Connection.DbConnectionManager`3.UseExistingDbConnection*"></a>
  <h4 id="ETLBox_Connection_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_" data-uid="ETLBox.Connection.DbConnectionManager`3.UseExistingDbConnection(System.Data.IDbConnection)">UseExistingDbConnection(IDbConnection)</h4>
  <div class="markdown level1 summary"><p>The generic implementation on which all connection managers are based on</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void UseExistingDbConnection(IDbConnection adoDbConnection)
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
        <td><span class="xref">System.Data.IDbConnection</span></td>
        <td><span class="parametername">adoDbConnection</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager-2">IConnectionManager&lt;TConnection, TTransaction&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a>
  </div>
  <div>
      <span class="xref">System.IDisposable</span>
  </div>

{{< /rawhtml >}}
