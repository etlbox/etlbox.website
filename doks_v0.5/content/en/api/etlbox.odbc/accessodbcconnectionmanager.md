---
title: "AccessOdbcConnectionManager"
description: "Details for Class AccessOdbcConnectionManager (ETLBox.Odbc)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.odbc"
weight: 10234
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager">
  <h1 id="ETLBox_Odbc_AccessOdbcConnectionManager" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager" class="text-break">Class AccessOdbcConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Connection manager for an ODBC connection to Access databases.
This connection manager also is based on ADO.NET.
ODBC by default does not support a Bulk Insert - and Access does not support the insert into (...) values (...),(...),(...)
syntax. So the following syntax is used</p>
<pre><code>insert into (Col1, Col2,...)
select * from (
  select &apos;Val1&apos; as Col1 from dummytable
  union all
  select &apos;Val2&apos; as Col2 from dummytable
  ...
) a;</code></pre>
<p>The dummytable is a special helper table containing only one record.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">OdbcConnection</span>, <span class="xref">OdbcTransaction</span>, <span class="xref">OdbcParameter</span>&gt;</div>
    <div class="level2"><a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager">OdbcConnectionManager</a></div>
    <div class="level3"><span class="xref">AccessOdbcConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">OdbcConnection</span>, <span class="xref">OdbcTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
    <div><a class="xref" href="/api/etlbox/iconnectionmanagerdbobjects">IConnectionManagerDbObjects</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_ConnectionType">OdbcConnectionManager.ConnectionType</a>
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
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_BulkDelete_ETLBox_ITableData_">OdbcConnectionManager.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">OdbcConnectionManager.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">OdbcConnectionManager.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a>
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
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkNonQuery(string, IEnumerable&lt;OdbcParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQueryAsync_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkNonQueryAsync(string, IEnumerable&lt;OdbcParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkReader(string, IEnumerable&lt;OdbcParameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReaderAsync_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkReaderAsync(string, IEnumerable&lt;OdbcParameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
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
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenCoreAsync_System_Boolean_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.OpenCoreAsync(bool)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Odbc</h6>
  <h6><strong>Assembly</strong>: ETLBox.Odbc.dll</h6>
  <h5 id="ETLBox_Odbc_AccessOdbcConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class AccessOdbcConnectionManager : OdbcConnectionManager, IConnectionManager<OdbcConnection, OdbcTransaction>, IConnectionManager, IDisposable, IConnectionManagerDbObjects
```

{{< rawhtml >}}
  <h5 id="ETLBox_Odbc_AccessOdbcConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code>ControlFlow.DefaultDbConnection =
  new AccessOdbcConnectionManager(new OdbcConnectionString(
     &quot;Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\DB\Test.mdb&quot;));</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.#ctor">AccessOdbcConnectionManager()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AccessOdbcConnectionManager()
```

{{< rawhtml >}}
  <h5 id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor_examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection =
  new AccessOdbcConnectionManager(new OdbcConnectionString(
     &quot;Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\DB\Test.mdb&quot;));</code></pre>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor_ETLBox_Odbc_OdbcConnectionString_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.#ctor(ETLBox.Odbc.OdbcConnectionString)">AccessOdbcConnectionManager(OdbcConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AccessOdbcConnectionManager(OdbcConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.odbc/odbcconnectionstring">OdbcConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor_ETLBox_Odbc_OdbcConnectionString__examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection =
  new AccessOdbcConnectionManager(new OdbcConnectionString(
     &quot;Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\DB\Test.mdb&quot;));</code></pre>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor_System_String_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.#ctor(System.String)">AccessOdbcConnectionManager(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AccessOdbcConnectionManager(string connectionString)
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
  <h5 id="ETLBox_Odbc_AccessOdbcConnectionManager__ctor_System_String__examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection =
  new AccessOdbcConnectionManager(new OdbcConnectionString(
     &quot;Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\DB\Test.mdb&quot;));</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_DummyTableName_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.DummyTableName*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_DummyTableName" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.DummyTableName">DummyTableName</h4>
  <div class="markdown level1 summary"><p>Helper table that needs to be created in order to simulate bulk inserts.
Contains only 1 record and is only temporarily created.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DummyTableName { get; set; }
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
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_SupportDatabases_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.SupportDatabases*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_SupportDatabases" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.SupportDatabases">SupportDatabases</h4>
  <div class="markdown level1 summary"><p>Indicates if database server does support multiple databases.
A database in ETLBox means a schema in MySql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool SupportDatabases { get; }
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportDatabases</span></div>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_SupportProcedures_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.SupportProcedures*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_SupportProcedures" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.SupportProcedures">SupportProcedures</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportProcedures</span></div>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_SupportSchemas_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.SupportSchemas*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_SupportSchemas" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.SupportSchemas">SupportSchemas</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportSchemas</span></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_BulkInsert_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_BulkInsert_ETLBox_ITableData_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.BulkInsert(ETLBox.ITableData)">BulkInsert(ITableData)</h4>
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
  <div><a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_BulkInsert_ETLBox_ITableData_">OdbcConnectionManager.BulkInsert(ITableData)</a></div>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_CheckIfTableOrViewExists_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.CheckIfTableOrViewExists*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_CheckIfTableOrViewExists_System_String_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.CheckIfTableOrViewExists(System.String)">CheckIfTableOrViewExists(string)</h4>
  <div class="markdown level1 summary"><p>Describes how the connection manager can check if a table or view exists</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool CheckIfTableOrViewExists(string unquotatedFullName)
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
        <td><span class="parametername">unquotatedFullName</span></td>
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
        <td><span class="xref">bool</span></td>
        <td><p>True if the table or view exists</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(string)</h4>
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
  <div><a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_CleanUpBulkInsert_System_String_">OdbcConnectionManager.CleanUpBulkInsert(string)</a></div>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_Clone_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_Clone" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.Clone">Clone()</h4>
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
  <div><a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_Clone">OdbcConnectionManager.Clone()</a></div>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(string)</h4>
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
  <div><a class="xref" href="/api/etlbox.odbc/odbcconnectionmanager#ETLBox_Odbc_OdbcConnectionManager_PrepareBulkInsert_System_String_">OdbcConnectionManager.PrepareBulkInsert(string)</a></div>
  <a id="ETLBox_Odbc_AccessOdbcConnectionManager_ReadTableDefinition_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.ReadTableDefinition*"></a>
  <h4 id="ETLBox_Odbc_AccessOdbcConnectionManager_ReadTableDefinition_ETLBox_ControlFlow_ObjectNameDescriptor_" data-uid="ETLBox.Odbc.AccessOdbcConnectionManager.ReadTableDefinition(ETLBox.ControlFlow.ObjectNameDescriptor)">ReadTableDefinition(ObjectNameDescriptor)</h4>
  <div class="markdown level1 summary"><p>Describe how the table meta data can be read from the database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableDefinition ReadTableDefinition(ObjectNameDescriptor TN)
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
        <td><a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td><span class="parametername">TN</span></td>
        <td><p>The formatted table name</p>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><p>The definition of the table, containing column names, types, etc.</p>
</td>
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
      <span class="xref">System.IDisposable</span>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/iconnectionmanagerdbobjects">IConnectionManagerDbObjects</a>
  </div>

{{< /rawhtml >}}
