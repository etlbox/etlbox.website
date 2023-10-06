---
title: "SnowflakeConnectionManager"
description: "Details for Class SnowflakeConnectionManager (ETLBox.Snowflake)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.snowflake"
weight: 10289
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager">
  <h1 id="ETLBox_Snowflake_SnowflakeConnectionManager" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager" class="text-break">Class SnowflakeConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Connection manager that describes an ETLBox connection to a Snowflake Server.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">SnowflakeDbConnection</span>, <span class="xref">SnowflakeDbTransaction</span>, <span class="xref">SnowflakeDbParameter</span>&gt;</div>
    <div class="level2"><span class="xref">SnowflakeConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">SnowflakeDbConnection</span>, <span class="xref">SnowflakeDbTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionType">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ConnectionType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3__leaveOpen">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;._leaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_State">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Transaction">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_HasTransaction">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.HasTransaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QB">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QE">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PP">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportIndexes">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.SupportIndexes</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ValueToSqlConversionFunc">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseValueToSqlConversionFunc">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.UseValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_ConnectionType_System_String_System_String_System_String_System_Int32_System_Int32_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.OverrideConnectionSpecifics(ConnectionType, string, string, string, int, int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConfigureByConnectionType_ETLBox_ConnectionType_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ConfigureByConnectionType(ConnectionType)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkNonQuery(string, IEnumerable&lt;SnowflakeDbParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQueryAsync_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkNonQueryAsync(string, IEnumerable&lt;SnowflakeDbParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkReader(string, IEnumerable&lt;SnowflakeDbParameter&gt;, Action, Action, params Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReaderAsync_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkReaderAsync(string, IEnumerable&lt;SnowflakeDbParameter&gt;, Action, Action, params Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.PrepareBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkInsert_ETLBox_ITableData_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CleanUpBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkDelete_ETLBox_ITableData_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Clone">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CopyBaseAttributes_ETLBox_DbConnectionManager__0__1__2__">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Open">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenAsync">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.OpenAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenCoreAsync_System_Boolean_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.OpenCoreAsync(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Close">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.Dispose(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateTempTableOnCurrentConnection_ETLBox_ITableData_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CreateTempTableOnCurrentConnection(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ReadSqlOutputIntoTableData_ETLBox_ITableData_System_String_System_Boolean_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ReadSqlOutputIntoTableData(ITableData, string, bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DropTableOnCurrentConnection_System_String_">DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.DropTableOnCurrentConnection(string)</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Snowflake</h6>
  <h6><strong>Assembly</strong>: ETLBox.Snowflake.dll</h6>
  <h5 id="ETLBox_Snowflake_SnowflakeConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class SnowflakeConnectionManager : DbConnectionManager<SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter>, IConnectionManager<SnowflakeDbConnection, SnowflakeDbTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h5 id="ETLBox_Snowflake_SnowflakeConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code>var snowflakeConnection = new SnowflakeConnectionManager(&quot;Server=localhost;Database=ETLBox_Logging;User Id=postgres;Password=etlboxpassword;&quot;);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.#ctor">SnowflakeConnectionManager()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SnowflakeConnectionManager()
```

{{< rawhtml >}}
  <h5 id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor_examples">Examples</h5>
  <pre><code>var snowflakeConnection = new SnowflakeConnectionManager(&quot;Server=localhost;Database=ETLBox_Logging;User Id=postgres;Password=etlboxpassword;&quot;);</code></pre>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor_ETLBox_Snowflake_SnowflakeConnectionString_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.#ctor(ETLBox.Snowflake.SnowflakeConnectionString)">SnowflakeConnectionManager(SnowflakeConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SnowflakeConnectionManager(SnowflakeConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.snowflake/snowflakeconnectionstring">SnowflakeConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor_ETLBox_Snowflake_SnowflakeConnectionString__examples">Examples</h5>
  <pre><code>var snowflakeConnection = new SnowflakeConnectionManager(&quot;Server=localhost;Database=ETLBox_Logging;User Id=postgres;Password=etlboxpassword;&quot;);</code></pre>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor_System_String_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.#ctor(System.String)">SnowflakeConnectionManager(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SnowflakeConnectionManager(string connectionString)
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
  <h5 id="ETLBox_Snowflake_SnowflakeConnectionManager__ctor_System_String__examples">Examples</h5>
  <pre><code>var snowflakeConnection = new SnowflakeConnectionManager(&quot;Server=localhost;Database=ETLBox_Logging;User Id=postgres;Password=etlboxpassword;&quot;);</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_ConnectionType_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.ConnectionType*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_ConnectionType" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.ConnectionType">ConnectionType</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.ConnectionType</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_MaxParameterSizeBulkCopy_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_MaxParameterSizeBulkCopy" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"></div>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.MaxParameterSizeBulkCopy</span></div>
  <h5 id="ETLBox_Snowflake_SnowflakeConnectionManager_MaxParameterSizeBulkCopy_examples">Examples</h5>
  <pre><code>var snowflakeConnection = new SnowflakeConnectionManager(&quot;Server=localhost;Database=ETLBox_Logging;User Id=postgres;Password=etlboxpassword;&quot;);</code></pre>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.MaxParameterSizeSql</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_PP_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.PP*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_PP" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.PP">PP</h4>
  <div class="markdown level1 summary"><p>The character that is used in front of parameter names in query to identify the parameter.
Most databases use the '@' character, some use ':'.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string PP { get; protected set; }
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.PP</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_QB_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.QB*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_QB" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.QB">QB</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.QB</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_QE_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.QE*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_QE" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.QE">QE</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.QE</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_SupportIndexes_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.SupportIndexes*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_SupportIndexes" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.SupportIndexes">SupportIndexes</h4>
  <div class="markdown level1 summary"><p>Indicates if database server does support indexes.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool SupportIndexes { get; }
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.SupportIndexes</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_SupportProcedures_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.SupportProcedures*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_SupportProcedures" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.SupportProcedures">SupportProcedures</h4>
  <div class="markdown level1 summary"><p>Indicates if the database supports procedures</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool SupportProcedures { get; }
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.SupportProcedures</span></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_BulkDelete_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_BulkDelete_ETLBox_ITableData_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.BulkDelete(ETLBox.ITableData)">BulkDelete(ITableData)</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkDelete(ETLBox.ITableData)</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_BulkInsert_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_BulkInsert_ETLBox_ITableData_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.BulkInsert(ETLBox.ITableData)">BulkInsert(ITableData)</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.BulkInsert(ETLBox.ITableData)</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_BulkSelect_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.BulkSelect*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_BulkSelect_ETLBox_ITableData_ICollection_System_String__Action_Action_Action_System_Object____" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.BulkSelect(ETLBox.ITableData,ICollection{System.String},Action,Action,Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
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
        <td><span class="xref">ICollection&lt;&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">selectColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">Action</span></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">Action</span></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">Action</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">rowActions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_BulkUpdate_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_BulkUpdate_ETLBox_ITableData_ICollection_System_String__ICollection_System_String__" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.BulkUpdate(ETLBox.ITableData,ICollection{System.String},ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
  <div class="markdown level1 summary"></div>
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
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">ICollection&lt;&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">setColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">ICollection&lt;&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">joinColumnNames</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(string)</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.CleanUpBulkInsert(string)</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_Clone_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_Clone" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.Clone">Clone()</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.Clone()</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.Snowflake.SnowflakeConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(string)</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;SnowflakeDbConnection, SnowflakeDbTransaction, SnowflakeDbParameter&gt;.PrepareBulkInsert(string)</span></div>
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
