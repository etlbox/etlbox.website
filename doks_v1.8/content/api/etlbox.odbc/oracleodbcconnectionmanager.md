---
title: "OracleOdbcConnectionManager"
description: "Details for Class OracleOdbcConnectionManager (ETLBox.Odbc)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.odbc"
weight: 10301
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager">
  <h1 id="ETLBox_Odbc_OracleOdbcConnectionManager" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager" class="text-break">Class OracleOdbcConnectionManager</h1>
  <div class="markdown level0 summary"><p>Oracle Connection manager for an ODBC connection.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code class="lang-csharp">insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionmanager-3">DbConnectionManager</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.odbc.odbcconnection">OdbcConnection</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.odbc.odbctransaction">OdbcTransaction</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.odbc.odbcparameter">OdbcParameter</a>&gt;</div>
    <div class="level2"><a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager">OdbcConnectionManager</a></div>
    <div class="level3"><span class="xref">OracleOdbcConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.odbc.odbcconnection">OdbcConnection</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.odbc.odbctransaction">OdbcTransaction</a>&gt;</div>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></div>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable">IDisposable</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_ConnectionType">OdbcConnectionManager.ConnectionType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_ConnectionTimeout">OdbcConnectionManager.ConnectionTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_QB">OdbcConnectionManager.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_QE">OdbcConnectionManager.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_IsOdbcOrOleDbConnection">OdbcConnectionManager.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_BulkInsert_ETLBox_ITableData_">OdbcConnectionManager.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_BulkDelete_ETLBox_ITableData_">OdbcConnectionManager.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">OdbcConnectionManager.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">OdbcConnectionManager.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_PrepareBulkInsert_System_String_">OdbcConnectionManager.PrepareBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_CleanUpBulkInsert_System_String_">OdbcConnectionManager.CleanUpBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_CreateDbConnection">OdbcConnectionManager.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionType">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ConnectionType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3__leaveOpen">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;._leaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_State">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Transaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_HasTransaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.HasTransaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QB">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QE">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PP">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportIndexes">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportIndexes</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ValueToSqlConversionFunc">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseValueToSqlConversionFunc">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.UseValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_ConnectionType_System_String_System_String_System_String_System_Int32_System_Int32_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.OverrideConnectionSpecifics(ConnectionType, string, string, string, int, int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConfigureByConnectionType_ETLBox_ConnectionType_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ConfigureByConnectionType(ConnectionType)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Nullable_System_Threading_CancellationToken__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;, CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Nullable_System_Threading_CancellationToken__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;, CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Nullable_System_Threading_CancellationToken__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, CancellationToken?, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkNonQuery(string, IEnumerable&lt;OdbcParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkReader(string, IEnumerable&lt;OdbcParameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.PrepareBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkInsert_ETLBox_ITableData_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CleanUpBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkDelete_ETLBox_ITableData_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Clone">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CopyBaseAttributes_ETLBox_DbConnectionManager__0__1__2__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Open">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenAsync">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.OpenAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenAsync_System_Nullable_System_Threading_CancellationToken__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.OpenAsync(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Close">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Dispose(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateTempTableOnCurrentConnection_ETLBox_ITableData_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CreateTempTableOnCurrentConnection(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ReadSqlOutputIntoTableData_ETLBox_ITableData_System_String_System_Boolean_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ReadSqlOutputIntoTableData(ITableData, string, bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DropTableOnCurrentConnection_System_String_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.DropTableOnCurrentConnection(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_GetSchema_System_String_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.GetSchema(string)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Odbc</h6>
  <h6><strong>Assembly</strong>: ETLBox.Odbc.dll</h6>
  <h5 id="ETLBox_Odbc_OracleOdbcConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class OracleOdbcConnectionManager : OdbcConnectionManager, IConnectionManager<OdbcConnection, OdbcTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Odbc_OracleOdbcConnectionManager__ctor_" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Odbc_OracleOdbcConnectionManager__ctor" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager.#ctor">OracleOdbcConnectionManager()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OracleOdbcConnectionManager()
```

{{< rawhtml >}}
  <a id="ETLBox_Odbc_OracleOdbcConnectionManager__ctor_" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Odbc_OracleOdbcConnectionManager__ctor_ETLBox_Odbc_OdbcConnectionString_" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager.#ctor(ETLBox.Odbc.OdbcConnectionString)">OracleOdbcConnectionManager(OdbcConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OracleOdbcConnectionManager(OdbcConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.odbc/odbcconnectionstring">OdbcConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Odbc_OracleOdbcConnectionManager__ctor_" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Odbc_OracleOdbcConnectionManager__ctor_System_String_" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager.#ctor(System.String)">OracleOdbcConnectionManager(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OracleOdbcConnectionManager(string connectionString)
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Odbc_OracleOdbcConnectionManager_Clone_" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Odbc_OracleOdbcConnectionManager_Clone" data-uid="ETLBox.Odbc.OracleOdbcConnectionManager.Clone">Clone()</h4>
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
  <div><a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_Clone">OdbcConnectionManager.Clone()</a></div>
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
