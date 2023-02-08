---
title: "SqlConnectionManager"
description: "Details for Class SqlConnectionManager (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10029
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.SqlConnectionManager">
  <h1 id="ETLBox_Connection_SqlConnectionManager" data-uid="ETLBox.Connection.SqlConnectionManager" class="text-break">Class SqlConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">Microsoft.Data.SqlClient.SqlConnection</span>, <span class="xref">Microsoft.Data.SqlClient.SqlTransaction</span>, <span class="xref">Microsoft.Data.SqlClient.SqlParameter</span>&gt;</div>
    <div class="level2"><span class="xref">SqlConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">Microsoft.Data.SqlClient.SqlConnection</span>, <span class="xref">Microsoft.Data.SqlClient.SqlTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionManagerType">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.ConnectionManagerType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_State">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Transaction">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QB">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QE">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PP">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_Connection_ConnectionManagerType_System_String_System_String_System_String_">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.OverrideConnectionSpecifics(ConnectionManagerType, String, String, String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.ExecuteNonQuery(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.ExecuteScalar(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.ExecuteReader(String, IEnumerable&lt;QueryParameter&gt;, Int32, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.BulkNonQuery(String, IEnumerable&lt;SqlParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.BulkReader(String, IEnumerable&lt;SqlParameter&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.PrepareBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkInsert_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.CleanUpBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkDelete_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Clone">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CopyBaseAttributes_ETLBox_Connection_DbConnectionManager__0__1__2__">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Open">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Close">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.Dispose(Boolean)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;SqlConnection, SqlTransaction, SqlParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
    </div>
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
  <h6><strong>Assembly</strong>: ETLBox.SqlServer.dll</h6>
  <h5 id="ETLBox_Connection_SqlConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class SqlConnectionManager : DbConnectionManager<SqlConnection, SqlTransaction, SqlParameter>, IConnectionManager<SqlConnection, SqlTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h5 id="ETLBox_Connection_SqlConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code>ControlFlow.DefaultDbConnection = new SqlConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_SqlConnectionManager__ctor_" data-uid="ETLBox.Connection.SqlConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager__ctor" data-uid="ETLBox.Connection.SqlConnectionManager.#ctor">SqlConnectionManager()</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlConnectionManager()
```

{{< rawhtml >}}
  <h5 id="ETLBox_Connection_SqlConnectionManager__ctor_examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection = new SqlConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <a id="ETLBox_Connection_SqlConnectionManager__ctor_" data-uid="ETLBox.Connection.SqlConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager__ctor_ETLBox_Connection_SqlConnectionString_" data-uid="ETLBox.Connection.SqlConnectionManager.#ctor(ETLBox.Connection.SqlConnectionString)">SqlConnectionManager(SqlConnectionString)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlConnectionManager(SqlConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.connection/sqlconnectionstring">SqlConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Connection_SqlConnectionManager__ctor_ETLBox_Connection_SqlConnectionString__examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection = new SqlConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <a id="ETLBox_Connection_SqlConnectionManager__ctor_" data-uid="ETLBox.Connection.SqlConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager__ctor_System_String_" data-uid="ETLBox.Connection.SqlConnectionManager.#ctor(System.String)">SqlConnectionManager(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlConnectionManager(string connectionString)
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
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Connection_SqlConnectionManager__ctor_System_String__examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection = new SqlConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_SqlConnectionManager_AccessToken_" data-uid="ETLBox.Connection.SqlConnectionManager.AccessToken*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_AccessToken" data-uid="ETLBox.Connection.SqlConnectionManager.AccessToken">AccessToken</h4>
  <div class="markdown level1 summary"><p>If you provide an access token here, this token will be used for
authentication with Sql Server</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AccessToken { get; set; }
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
  <a id="ETLBox_Connection_SqlConnectionManager_ConnectionManagerType_" data-uid="ETLBox.Connection.SqlConnectionManager.ConnectionManagerType*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_ConnectionManagerType" data-uid="ETLBox.Connection.SqlConnectionManager.ConnectionManagerType">ConnectionManagerType</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override ConnectionManagerType ConnectionManagerType { get; protected set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.ConnectionManagerType</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_DisableCheckConstraints_" data-uid="ETLBox.Connection.SqlConnectionManager.DisableCheckConstraints*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_DisableCheckConstraints" data-uid="ETLBox.Connection.SqlConnectionManager.DisableCheckConstraints">DisableCheckConstraints</h4>
  <div class="markdown level1 summary"><p>If set to true, foreign key constraints will ot be checked when doing the bulk insert.
By default, foreign key constraints are checked.
To improve bulk insert performance, you can disable foreign key constrain checks.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public bool DisableCheckConstraints { get; set; }
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
  <a id="ETLBox_Connection_SqlConnectionManager_DisableTriggers_" data-uid="ETLBox.Connection.SqlConnectionManager.DisableTriggers*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_DisableTriggers" data-uid="ETLBox.Connection.SqlConnectionManager.DisableTriggers">DisableTriggers</h4>
  <div class="markdown level1 summary"><p>If set to true, triggers will not be fired when doing the bulk insert.
By default, all triggers are fired in bulk insert operations.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public bool DisableTriggers { get; set; }
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
  <a id="ETLBox_Connection_SqlConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.Connection.SqlConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.Connection.SqlConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int MaxParameterSizeSql { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.MaxParameterSizeSql</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_ModifyDBSettings_" data-uid="ETLBox.Connection.SqlConnectionManager.ModifyDBSettings*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_ModifyDBSettings" data-uid="ETLBox.Connection.SqlConnectionManager.ModifyDBSettings">ModifyDBSettings</h4>
  <div class="markdown level1 summary"><p>Will set the database settings SET PAGE_VERIFY NONE and SET RECOVERY BULK_LOGGED
Settings will be reverted after the bulk insert operation.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool ModifyDBSettings { get; set; }
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
  <a id="ETLBox_Connection_SqlConnectionManager_QB_" data-uid="ETLBox.Connection.SqlConnectionManager.QB*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_QB" data-uid="ETLBox.Connection.SqlConnectionManager.QB">QB</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string QB { get; protected set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.QB</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_QE_" data-uid="ETLBox.Connection.SqlConnectionManager.QE*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_QE" data-uid="ETLBox.Connection.SqlConnectionManager.QE">QE</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string QE { get; protected set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.QE</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_UseRowLocks_" data-uid="ETLBox.Connection.SqlConnectionManager.UseRowLocks*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_UseRowLocks" data-uid="ETLBox.Connection.SqlConnectionManager.UseRowLocks">UseRowLocks</h4>
  <div class="markdown level1 summary"><p>By default, a  table lock (for all bulk operations) is aquired when data is inserted.
(This table lock will also allow concurrent bulk inserts. Only non bulk write operations are not allowed)
If you want to use normal inserts/updates while inserted data in bulk, set this value to true to use row locks instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public bool UseRowLocks { get; set; }
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
  <a id="ETLBox_Connection_SqlConnectionManager_UseSqlBulkOperations_" data-uid="ETLBox.Connection.SqlConnectionManager.UseSqlBulkOperations*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_UseSqlBulkOperations" data-uid="ETLBox.Connection.SqlConnectionManager.UseSqlBulkOperations">UseSqlBulkOperations</h4>
  <div class="markdown level1 summary"><p>By default bulk operations are done creating a temporary table first, and then
inserting/updating/deleting data either using a MERGE or DELETE FROM statement.
Though this provides better performance, for compatibility purposes you can set this
property to true. All bulk operations are then executed as &quot;SQL only&quot; statements.
Reading ValueGeneratedColumns is not supported then.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool UseSqlBulkOperations { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_SqlConnectionManager_BulkDelete_" data-uid="ETLBox.Connection.SqlConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.SqlConnectionManager.BulkDelete(ETLBox.ControlFlow.ITableData)">BulkDelete(ITableData)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void BulkDelete(ITableData data)
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.BulkDelete(ETLBox.ControlFlow.ITableData)</span></div>
  <h5 id="ETLBox_Connection_SqlConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData__examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection = new SqlConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <a id="ETLBox_Connection_SqlConnectionManager_BulkInsert_" data-uid="ETLBox.Connection.SqlConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_BulkInsert_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.SqlConnectionManager.BulkInsert(ETLBox.ControlFlow.ITableData)">BulkInsert(ITableData)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void BulkInsert(ITableData data)
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.BulkInsert(ETLBox.ControlFlow.ITableData)</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_BulkSelect_" data-uid="ETLBox.Connection.SqlConnectionManager.BulkSelect*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.Connection.SqlConnectionManager.BulkSelect(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void BulkSelect(ITableData data, ICollection<string> selectColumnNames, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] rowActions)
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
        <td><span class="parametername">rowActions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.BulkSelect(ETLBox.ControlFlow.ITableData, System.Collections.Generic.ICollection&lt;System.String&gt;, System.Action, System.Action, System.Action&lt;System.Object&gt;[])</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_BulkUpdate_" data-uid="ETLBox.Connection.SqlConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.Connection.SqlConnectionManager.BulkUpdate(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void BulkUpdate(ITableData data, ICollection<string> setColumnNames, ICollection<string> joinColumnNames)
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.BulkUpdate(ETLBox.ControlFlow.ITableData, System.Collections.Generic.ICollection&lt;System.String&gt;, System.Collections.Generic.ICollection&lt;System.String&gt;)</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.Connection.SqlConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.Connection.SqlConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void CleanUpBulkInsert(string tablename)
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
        <td><span class="parametername">tablename</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.CleanUpBulkInsert(System.String)</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_Clone_" data-uid="ETLBox.Connection.SqlConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_Clone" data-uid="ETLBox.Connection.SqlConnectionManager.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IConnectionManager Clone()
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.Clone()</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_CreateDbConnection_" data-uid="ETLBox.Connection.SqlConnectionManager.CreateDbConnection*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_CreateDbConnection" data-uid="ETLBox.Connection.SqlConnectionManager.CreateDbConnection">CreateDbConnection()</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void CreateDbConnection()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.CreateDbConnection()</span></div>
  <a id="ETLBox_Connection_SqlConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.Connection.SqlConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_Connection_SqlConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.Connection.SqlConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void PrepareBulkInsert(string tablename)
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
        <td><span class="parametername">tablename</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Microsoft.Data.SqlClient.SqlConnection, Microsoft.Data.SqlClient.SqlTransaction, Microsoft.Data.SqlClient.SqlParameter&gt;.PrepareBulkInsert(System.String)</span></div>
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
