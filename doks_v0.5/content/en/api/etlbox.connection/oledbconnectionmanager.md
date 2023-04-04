---
title: "OleDbConnectionManager"
description: "Details for Class OleDbConnectionManager (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10021
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.OleDbConnectionManager">
  <h1 id="ETLBox_Connection_OleDbConnectionManager" data-uid="ETLBox.Connection.OleDbConnectionManager" class="text-break">Class OleDbConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Generic OleDbConnection - try this connection manager if no particular connection manager
for your database exists.
There are some limitations to the ETLBox functionality when you use this connection manager:</p>
<ul>
<li>Most ControlFlow Tasks won't work properly, depending on your database</li>
<li>SqlTask will work</li>
<li>If you use special characters, you need to set the quotation begin / quotation end properties QB and QE that fit
to your database (e.g. &quot;[&quot; and &quot;]&quot; for Sql Server or &quot;`&quot; for MySql)</li>
<li>DbDestination and DbSource will only work if you provide a TableDefinition that
at least define the table and the columns names</li>
</ul>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">OleDbConnection</span>, <span class="xref">OleDbTransaction</span>, <span class="xref">OleDbParameter</span>&gt;</div>
    <div class="level2"><span class="xref">OleDbConnectionManager</span></div>
      <div class="level3"><a class="xref" href="/api/etlbox.connection/sqloledbconnectionmanager">SqlOleDbConnectionManager</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">OleDbConnection</span>, <span class="xref">OleDbTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionManagerType">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ConnectionManagerType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_State">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Transaction">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_HasTransaction">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.HasTransaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QB">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QE">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PP">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ValueToSqlConversionFunc">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_UseValueToSqlConversionFunc">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.UseValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_Connection_ConnectionManagerType_System_String_System_String_System_String_System_Int32_System_Int32_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.OverrideConnectionSpecifics(ConnectionManagerType, string, string, string, int, int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConfigureByConnectionType_ETLBox_Connection_ConnectionManagerType_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ConfigureByConnectionType(ConnectionManagerType)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BulkNonQuery(string, IEnumerable&lt;OleDbParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkNonQueryAsync_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BulkNonQueryAsync(string, IEnumerable&lt;OleDbParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BulkReader(string, IEnumerable&lt;OleDbParameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkReaderAsync_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BulkReaderAsync(string, IEnumerable&lt;OleDbParameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.PrepareBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkInsert_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.CleanUpBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkDelete_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Clone">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CopyBaseAttributes_ETLBox_Connection_DbConnectionManager__0__1__2__">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Open">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_OpenAsync">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.OpenAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_OpenCoreAsync_System_Boolean_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.OpenCoreAsync(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Close">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.Dispose(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;OleDbConnection, OleDbTransaction, OleDbParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Connection</h6>
  <h6><strong>Assembly</strong>: ETLBox.OleDb.dll</h6>
  <h5 id="ETLBox_Connection_OleDbConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class OleDbConnectionManager : DbConnectionManager<OleDbConnection, OleDbTransaction, OleDbParameter>, IConnectionManager<OleDbConnection, OleDbTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_OleDbConnectionManager__ctor_" data-uid="ETLBox.Connection.OleDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager__ctor" data-uid="ETLBox.Connection.OleDbConnectionManager.#ctor">OleDbConnectionManager()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OleDbConnectionManager()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_OleDbConnectionManager__ctor_" data-uid="ETLBox.Connection.OleDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager__ctor_ETLBox_Connection_ConnectionManagerType_ETLBox_Connection_OleDbConnectionString_" data-uid="ETLBox.Connection.OleDbConnectionManager.#ctor(ETLBox.Connection.ConnectionManagerType,ETLBox.Connection.OleDbConnectionString)">OleDbConnectionManager(ConnectionManagerType, OleDbConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OleDbConnectionManager(ConnectionManagerType connectionType, OleDbConnectionString connectionString)
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
        <td><span class="parametername">connectionType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.connection/oledbconnectionstring">OleDbConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_OleDbConnectionManager__ctor_" data-uid="ETLBox.Connection.OleDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager__ctor_ETLBox_Connection_ConnectionManagerType_System_String_" data-uid="ETLBox.Connection.OleDbConnectionManager.#ctor(ETLBox.Connection.ConnectionManagerType,System.String)">OleDbConnectionManager(ConnectionManagerType, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OleDbConnectionManager(ConnectionManagerType connectionType, string connectionString)
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
        <td><span class="parametername">connectionType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_OleDbConnectionManager__ctor_" data-uid="ETLBox.Connection.OleDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager__ctor_ETLBox_Connection_ConnectionManagerType_" data-uid="ETLBox.Connection.OleDbConnectionManager.#ctor(ETLBox.Connection.ConnectionManagerType)">OleDbConnectionManager(ConnectionManagerType)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OleDbConnectionManager(ConnectionManagerType connectionType)
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
        <td><span class="parametername">connectionType</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_OleDbConnectionManager_ConnectionManagerType_" data-uid="ETLBox.Connection.OleDbConnectionManager.ConnectionManagerType*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_ConnectionManagerType" data-uid="ETLBox.Connection.OleDbConnectionManager.ConnectionManagerType">ConnectionManagerType</h4>
  <div class="markdown level1 summary"><p>The database type for the connection manager.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.ConnectionManagerType</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_IsOdbcOrOleDbConnection_" data-uid="ETLBox.Connection.OleDbConnectionManager.IsOdbcOrOleDbConnection*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_IsOdbcOrOleDbConnection" data-uid="ETLBox.Connection.OleDbConnectionManager.IsOdbcOrOleDbConnection">IsOdbcOrOleDbConnection</h4>
  <div class="markdown level1 summary"><p>Indicates if the current connection manager is used as a OleDb or Odbc Connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool IsOdbcOrOleDbConnection { get; }
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.IsOdbcOrOleDbConnection</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_QB_" data-uid="ETLBox.Connection.OleDbConnectionManager.QB*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_QB" data-uid="ETLBox.Connection.OleDbConnectionManager.QB">QB</h4>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.QB</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_QE_" data-uid="ETLBox.Connection.OleDbConnectionManager.QE*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_QE" data-uid="ETLBox.Connection.OleDbConnectionManager.QE">QE</h4>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.QE</span></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_OleDbConnectionManager_BulkDelete_" data-uid="ETLBox.Connection.OleDbConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.OleDbConnectionManager.BulkDelete(ETLBox.ControlFlow.ITableData)">BulkDelete(ITableData)</h4>
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.BulkDelete(ETLBox.ControlFlow.ITableData)</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_BulkInsert_" data-uid="ETLBox.Connection.OleDbConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_BulkInsert_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.OleDbConnectionManager.BulkInsert(ETLBox.ControlFlow.ITableData)">BulkInsert(ITableData)</h4>
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td><p>Batch of data</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.BulkInsert(ETLBox.ControlFlow.ITableData)</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_BulkSelect_" data-uid="ETLBox.Connection.OleDbConnectionManager.BulkSelect*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.Connection.OleDbConnectionManager.BulkSelect(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.BulkSelect(ETLBox.ControlFlow.ITableData, System.Collections.Generic.ICollection&lt;string&gt;, System.Action, System.Action, params System.Action&lt;object&gt;[])</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_BulkUpdate_" data-uid="ETLBox.Connection.OleDbConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.Connection.OleDbConnectionManager.BulkUpdate(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.BulkUpdate(ETLBox.ControlFlow.ITableData, System.Collections.Generic.ICollection&lt;string&gt;, System.Collections.Generic.ICollection&lt;string&gt;)</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.Connection.OleDbConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.Connection.OleDbConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(string)</h4>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.CleanUpBulkInsert(string)</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_Clone_" data-uid="ETLBox.Connection.OleDbConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_Clone" data-uid="ETLBox.Connection.OleDbConnectionManager.Clone">Clone()</h4>
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><p>A instance copy of the current connection manager</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.Clone()</span></div>
  <a id="ETLBox_Connection_OleDbConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.Connection.OleDbConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_Connection_OleDbConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.Connection.OleDbConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(string)</h4>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.OleDb.OleDbConnection, System.Data.OleDb.OleDbTransaction, System.Data.OleDb.OleDbParameter&gt;.PrepareBulkInsert(string)</span></div>
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
