---
title: "ClickHouseConnectionManager"
description: "Details for Class ClickHouseConnectionManager (ETLBox.ClickHouse)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.clickhouse"
weight: 10036
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager">
  <h1 id="ETLBox_ClickHouse_ClickHouseConnectionManager" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager" class="text-break">Class ClickHouseConnectionManager</h1>
  <div class="markdown level0 summary"><p>Connection manager of a classic ADO.NET connection to a (Microsoft) Sql Server.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">ClickHouseConnection</span>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.common.dbtransaction">DbTransaction</a>, <span class="xref">ClickHouseDbParameter</span>&gt;</div>
    <div class="level2"><span class="xref">ClickHouseConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">ClickHouseConnection</span>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.common.dbtransaction">DbTransaction</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></div>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable">IDisposable</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionType">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ConnectionType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3__leaveOpen">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;._leaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_State">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Transaction">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_HasTransaction">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.HasTransaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QB">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QE">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PP">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportIndexes">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.SupportIndexes</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ValueToSqlConversionFunc">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseValueToSqlConversionFunc">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.UseValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_ConnectionType_System_String_System_String_System_String_System_Int32_System_Int32_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.OverrideConnectionSpecifics(ConnectionType, string, string, string, int, int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConfigureByConnectionType_ETLBox_ConnectionType_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ConfigureByConnectionType(ConnectionType)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Nullable_System_Threading_CancellationToken__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;, CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Nullable_System_Threading_CancellationToken__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;, CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Nullable_System_Threading_CancellationToken__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, CancellationToken?, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BulkNonQuery(string, IEnumerable&lt;ClickHouseDbParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BulkReader(string, IEnumerable&lt;ClickHouseDbParameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.PrepareBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkInsert_ETLBox_ITableData_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CleanUpBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkDelete_ETLBox_ITableData_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Clone">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CopyBaseAttributes_ETLBox_DbConnectionManager__0__1__2__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Open">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenAsync">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.OpenAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenAsync_System_Nullable_System_Threading_CancellationToken__">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.OpenAsync(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Close">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.Dispose(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateTempTableOnCurrentConnection_ETLBox_ITableData_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CreateTempTableOnCurrentConnection(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ReadSqlOutputIntoTableData_ETLBox_ITableData_System_String_System_Boolean_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.ReadSqlOutputIntoTableData(ITableData, string, bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DropTableOnCurrentConnection_System_String_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.DropTableOnCurrentConnection(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_GetSchemaFromTableName_System_String_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.GetSchemaFromTableName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_GetSchemaFromSql_System_String_">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.GetSchemaFromSql(string)</a>
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
<h6><strong>Namespace</strong>: ETLBox.ClickHouse</h6>
  <h6><strong>Assembly</strong>: ETLBox.ClickHouse.dll</h6>
  <h5 id="ETLBox_ClickHouse_ClickHouseConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ClickHouseConnectionManager : DbConnectionManager<ClickHouseConnection, DbTransaction, ClickHouseDbParameter>, IConnectionManager<ClickHouseConnection, DbTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h5 id="ETLBox_ClickHouse_ClickHouseConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">ControlFlow.DefaultDbConnection = new SqlConnectionManager(new ConnectionString("Data Source=.;"));</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager__ctor_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager__ctor" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.#ctor">ClickHouseConnectionManager()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ClickHouseConnectionManager()
```

{{< rawhtml >}}
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager__ctor_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager__ctor_ETLBox_ClickHouse_ClickHouseConnectionString_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.#ctor(ETLBox.ClickHouse.ClickHouseConnectionString)">ClickHouseConnectionManager(ClickHouseConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ClickHouseConnectionManager(ClickHouseConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.clickhouse/clickhouseconnectionstring">ClickHouseConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager__ctor_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager__ctor_System_String_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.#ctor(System.String)">ClickHouseConnectionManager(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ClickHouseConnectionManager(string connectionString)
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
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_ConnectionType_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.ConnectionType*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_ConnectionType" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.ConnectionType">ConnectionType</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.ConnectionType</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_MaxParameterSizeBulkCopy_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_MaxParameterSizeBulkCopy" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.MaxParameterSizeBulkCopy</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.MaxParameterSizeSql</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_QB_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.QB*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_QB" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.QB">QB</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.QB</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_QE_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.QE*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_QE" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.QE">QE</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.QE</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_SupportIndexes_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.SupportIndexes*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_SupportIndexes" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.SupportIndexes">SupportIndexes</h4>
  <div class="markdown level1 summary"><p>Indicates if database server does support indexes.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool SupportIndexes { get; protected set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.SupportIndexes</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_SupportProcedures_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.SupportProcedures*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_SupportProcedures" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.SupportProcedures">SupportProcedures</h4>
  <div class="markdown level1 summary"><p>Indicates if the database supports procedures</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool SupportProcedures { get; protected set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.SupportProcedures</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_SupportSchemas_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.SupportSchemas*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_SupportSchemas" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.SupportSchemas">SupportSchemas</h4>
  <div class="markdown level1 summary"><p>Indicates if the database supports schemas
In MySql, this is false because the schema here is a database in ETLBox.
Use <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_SupportDatabases">SupportDatabases</a> instead</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool SupportSchemas { get; protected set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.SupportSchemas</span></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_BulkDelete_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_BulkDelete_ETLBox_ITableData_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.BulkDelete(ETLBox.ITableData)">BulkDelete(ITableData)</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.BulkDelete(ETLBox.ITableData)</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_BulkInsert_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_BulkInsert_ETLBox_ITableData_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.BulkInsert(ETLBox.ITableData)">BulkInsert(ITableData)</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.BulkInsert(ETLBox.ITableData)</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_BulkSelect_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.BulkSelect*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.BulkSelect(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Performs a bulk select</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void BulkSelect(ITableData data, ICollection<string> selectColumnNames, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] rowActions)
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
        <td><span class="parametername">rowActions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_BulkUpdate_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.BulkUpdate(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(string)</h4>
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
        <td><span class="parametername">tablename</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.CleanUpBulkInsert(string)</a></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_Clone_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.Clone*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_Clone" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.Clone">Clone()</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.Clone()</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_CreateDbConnection_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.CreateDbConnection*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_CreateDbConnection" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.CreateDbConnection">CreateDbConnection()</h4>
  <div class="markdown level1 summary"><p>By default, a db connection is created with the given connection string value.
Override this method if you want to pass additional properties to the specific Ado.NET db connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void CreateDbConnection()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionManager&lt;ClickHouse.Driver.ADO.ClickHouseConnection, System.Data.Common.DbTransaction, ClickHouse.Driver.ADO.Parameters.ClickHouseDbParameter&gt;.CreateDbConnection()</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(string)</h4>
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
        <td><span class="parametername">tablename</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">DbConnectionManager&lt;ClickHouseConnection, DbTransaction, ClickHouseDbParameter&gt;.PrepareBulkInsert(string)</a></div>
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
