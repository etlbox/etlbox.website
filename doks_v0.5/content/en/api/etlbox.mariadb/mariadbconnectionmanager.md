---
title: "MariaDbConnectionManager"
description: "Details for Class MariaDbConnectionManager (ETLBox.MariaDb)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.mariadb"
weight: 10242
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.MariaDb.MariaDbConnectionManager">
  <h1 id="ETLBox_MariaDb_MariaDbConnectionManager" data-uid="ETLBox.MariaDb.MariaDbConnectionManager" class="text-break">Class MariaDbConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Connection manager of a ETLBox connection to a MariaDb Server.
Uses the MySqlConnector package which is an ADO.NET driver for .NET and offers full support for MariaDb.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">MySqlConnection</span>, <span class="xref">MySqlTransaction</span>, <span class="xref">MySqlParameter</span>&gt;</div>
    <div class="level2"><span class="xref">MariaDbConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">MySqlConnection</span>, <span class="xref">MySqlTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionType">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ConnectionType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3__leaveOpen">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;._leaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_State">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Transaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_HasTransaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.HasTransaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QB">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QE">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PP">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportIndexes">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SupportIndexes</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ValueToSqlConversionFunc">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseValueToSqlConversionFunc">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.UseValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_ConnectionType_System_String_System_String_System_String_System_Int32_System_Int32_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.OverrideConnectionSpecifics(ConnectionType, string, string, string, int, int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConfigureByConnectionType_ETLBox_ConnectionType_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ConfigureByConnectionType(ConnectionType)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkNonQuery(string, IEnumerable&lt;MySqlParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQueryAsync_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkNonQueryAsync(string, IEnumerable&lt;MySqlParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkReader(string, IEnumerable&lt;MySqlParameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReaderAsync_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkReaderAsync(string, IEnumerable&lt;MySqlParameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.PrepareBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkInsert_ETLBox_ITableData_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CleanUpBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkDelete_ETLBox_ITableData_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Clone">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CopyBaseAttributes_ETLBox_DbConnectionManager__0__1__2__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Open">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenAsync">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.OpenAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenCoreAsync_System_Boolean_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.OpenCoreAsync(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Close">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Dispose(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateTempTableOnCurrentConnection_ETLBox_ITableData_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CreateTempTableOnCurrentConnection(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ReadSqlOutputIntoTableData_ETLBox_ITableData_System_String_System_Boolean_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ReadSqlOutputIntoTableData(ITableData, string, bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DropTableOnCurrentConnection_System_String_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.DropTableOnCurrentConnection(string)</a>
    </div>
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
    <div>
      <span class="xref">object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.MariaDb</h6>
  <h6><strong>Assembly</strong>: ETLBox.MariaDb.dll</h6>
  <h5 id="ETLBox_MariaDb_MariaDbConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class MariaDbConnectionManager : DbConnectionManager<MySqlConnection, MySqlTransaction, MySqlParameter>, IConnectionManager<MySqlConnection, MySqlTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h5 id="ETLBox_MariaDb_MariaDbConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(&quot;Data Source=.;&quot;);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager__ctor_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager__ctor" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.#ctor">MariaDbConnectionManager()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MariaDbConnectionManager()
```

{{< rawhtml >}}
  <h5 id="ETLBox_MariaDb_MariaDbConnectionManager__ctor_examples">Examples</h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(&quot;Data Source=.;&quot;);</code></pre>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager__ctor_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager__ctor_ETLBox_MariaDb_MariaDbConnectionString_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.#ctor(ETLBox.MariaDb.MariaDbConnectionString)">MariaDbConnectionManager(MariaDbConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MariaDbConnectionManager(MariaDbConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.mariadb/mariadbconnectionstring">MariaDbConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_MariaDb_MariaDbConnectionManager__ctor_ETLBox_MariaDb_MariaDbConnectionString__examples">Examples</h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(&quot;Data Source=.;&quot;);</code></pre>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager__ctor_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager__ctor_System_String_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.#ctor(System.String)">MariaDbConnectionManager(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MariaDbConnectionManager(string connectionString)
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
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_MariaDb_MariaDbConnectionManager__ctor_System_String__examples">Examples</h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(&quot;Data Source=.;&quot;);</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_ConnectionType_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.ConnectionType*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_ConnectionType" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.ConnectionType">ConnectionType</h4>
  <div class="markdown level1 summary"><p>The database type for the connection manager.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override ConnectionType ConnectionType { get; protected set; }
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
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ConnectionType</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_MaxParameterSizeBulkCopy_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_MaxParameterSizeBulkCopy" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"><p>Returns the maximum amount of parameters that can be used for bulk inserts.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int MaxParameterSizeBulkCopy { get; set; }
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.MaxParameterSizeBulkCopy</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>Returns the maximum amount of parameters that can be passed into a
sql query.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int MaxParameterSizeSql { get; set; }
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.MaxParameterSizeSql</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_QB_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.QB*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_QB" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.QB">QB</h4>
  <div class="markdown level1 summary"><p>The quotation begin character that is used in the database.
E.g. SqlServer uses: '[' and Postgres: '&quot;'</p>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.QB</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_QE_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.QE*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_QE" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.QE">QE</h4>
  <div class="markdown level1 summary"><p>The quotation end character that is used in the database.
E.g. SqlServer uses: ']' and Postgres: '&quot;'</p>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.QE</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_SupportSchemas_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.SupportSchemas*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_SupportSchemas" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.SupportSchemas">SupportSchemas</h4>
  <div class="markdown level1 summary"><p>Indicates if the database supports schemas
In MySql, this is false because the schema here is a database in ETLBox.
Use <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_SupportDatabases">SupportDatabases</a> instead</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool SupportSchemas { get; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SupportSchemas</span></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_BulkDelete_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_BulkDelete_ETLBox_ITableData_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.BulkDelete(ETLBox.ITableData)">BulkDelete(ITableData)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk delete</p>
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkDelete(ETLBox.ITableData)</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_BulkInsert_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_BulkInsert_ETLBox_ITableData_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.BulkInsert(ETLBox.ITableData)">BulkInsert(ITableData)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk insert</p>
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkInsert(ETLBox.ITableData)</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_BulkSelect_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.BulkSelect*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.BulkSelect(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
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
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">rowActions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkSelect(ETLBox.ITableData, System.Collections.Generic.ICollection&lt;string&gt;, System.Action, System.Action, params System.Action&lt;object&gt;[])</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_BulkUpdate_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.BulkUpdate(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk update</p>
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">setColumnNames</span></td>
        <td><p>The column names used in the set part of the update statement</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">joinColumnNames</span></td>
        <td><p>The column names to join for the update</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkUpdate(ETLBox.ITableData, System.Collections.Generic.ICollection&lt;string&gt;, System.Collections.Generic.ICollection&lt;string&gt;)</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(string)</h4>
  <div class="markdown level1 summary"><p>Called after the whole bulk insert operation
to change back settings made to improve bulk insert performance</p>
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tablename</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CleanUpBulkInsert(string)</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_Clone_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.Clone*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_Clone" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Cretes a clone of the current connection manager</p>
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><p>A instance copy of the current connection manager</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Clone()</span></div>
  <a id="ETLBox_MariaDb_MariaDbConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_MariaDb_MariaDbConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.MariaDb.MariaDbConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(string)</h4>
  <div class="markdown level1 summary"><p>Performs preparations needed to improved
performance of a bulk insert operation</p>
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tablename</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.PrepareBulkInsert(string)</span></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager&lt;TConnection, TTransaction&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a>
  </div>
  <div>
      <span class="xref">System.IDisposable</span>
  </div>

{{< /rawhtml >}}
