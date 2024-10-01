---
title: "Db2ConnectionManager"
description: "Details for Class Db2ConnectionManager (ETLBox.Db2)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.db2"
weight: 10197
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Db2.Db2ConnectionManager">
  <h1 id="ETLBox_Db2_Db2ConnectionManager" data-uid="ETLBox.Db2.Db2ConnectionManager" class="text-break">Class Db2ConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Connection manager of a ETLBox connection to a Db2 Server.
Uses the official Db2 ADO.NET driver for .NET Core.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">DB2Connection</span>, <span class="xref">DB2Transaction</span>, <span class="xref">DB2Parameter</span>&gt;</div>
    <div class="level2"><span class="xref">Db2ConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">DB2Connection</span>, <span class="xref">DB2Transaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></div>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable">IDisposable</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionType">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ConnectionType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3__leaveOpen">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;._leaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_State">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Transaction">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_HasTransaction">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.HasTransaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QB">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_QE">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PP">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SupportIndexes">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.SupportIndexes</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ValueToSqlConversionFunc">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseValueToSqlConversionFunc">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.UseValueToSqlConversionFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_ConnectionType_System_String_System_String_System_String_System_Int32_System_Int32_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.OverrideConnectionSpecifics(ConnectionType, string, string, string, int, int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ConfigureByConnectionType_ETLBox_ConnectionType_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ConfigureByConnectionType(ConnectionType)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkNonQuery(string, IEnumerable&lt;DB2Parameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkNonQueryAsync_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkNonQueryAsync(string, IEnumerable&lt;DB2Parameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkReader(string, IEnumerable&lt;DB2Parameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkReaderAsync_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkReaderAsync(string, IEnumerable&lt;DB2Parameter&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.PrepareBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkInsert_ETLBox_ITableData_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CleanUpBulkInsert(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkDelete_ETLBox_ITableData_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Clone">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CopyBaseAttributes_ETLBox_DbConnectionManager__0__1__2__">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Open">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenAsync">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.OpenAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_OpenCoreAsync_System_Boolean_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.OpenCoreAsync(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Close">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.Dispose(bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_Dispose">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.UseExistingDbConnection(IDbConnection)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_CreateTempTableOnCurrentConnection_ETLBox_ITableData_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CreateTempTableOnCurrentConnection(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_ReadSqlOutputIntoTableData_ETLBox_ITableData_System_String_System_Boolean_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.ReadSqlOutputIntoTableData(ITableData, string, bool)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_DropTableOnCurrentConnection_System_String_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.DropTableOnCurrentConnection(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionmanager-3#ETLBox_DbConnectionManager_3_GetSchema_System_String_">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.GetSchema(string)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Db2</h6>
  <h6><strong>Assembly</strong>: ETLBox.Db2.dll</h6>
  <h5 id="ETLBox_Db2_Db2ConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class Db2ConnectionManager : DbConnectionManager<DB2Connection, DB2Transaction, DB2Parameter>, IConnectionManager<DB2Connection, DB2Transaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h5 id="ETLBox_Db2_Db2ConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">var db2Connection = new Db2ConnectionManager("Data Source=.;");</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Db2_Db2ConnectionManager__ctor_" data-uid="ETLBox.Db2.Db2ConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager__ctor" data-uid="ETLBox.Db2.Db2ConnectionManager.#ctor">Db2ConnectionManager()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Db2ConnectionManager()
```

{{< rawhtml >}}
  <a id="ETLBox_Db2_Db2ConnectionManager__ctor_" data-uid="ETLBox.Db2.Db2ConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager__ctor_ETLBox_Db2_Db2ConnectionString_" data-uid="ETLBox.Db2.Db2ConnectionManager.#ctor(ETLBox.Db2.Db2ConnectionString)">Db2ConnectionManager(Db2ConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Db2ConnectionManager(Db2ConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.db2/db2connectionstring">Db2ConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Db2_Db2ConnectionManager__ctor_" data-uid="ETLBox.Db2.Db2ConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager__ctor_System_String_" data-uid="ETLBox.Db2.Db2ConnectionManager.#ctor(System.String)">Db2ConnectionManager(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Db2ConnectionManager(string connectionString)
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
  <a id="ETLBox_Db2_Db2ConnectionManager_ConnectionType_" data-uid="ETLBox.Db2.Db2ConnectionManager.ConnectionType*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_ConnectionType" data-uid="ETLBox.Db2.Db2ConnectionManager.ConnectionType">ConnectionType</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.ConnectionType</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_MaxParameterSizeBulkCopy_" data-uid="ETLBox.Db2.Db2ConnectionManager.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_MaxParameterSizeBulkCopy" data-uid="ETLBox.Db2.Db2ConnectionManager.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"><p>Returns the maximum amount of parameters that can be used for bulk inserts.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int MaxParameterSizeBulkCopy { get; }
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.MaxParameterSizeBulkCopy</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.Db2.Db2ConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.Db2.Db2ConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.MaxParameterSizeSql</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_QB_" data-uid="ETLBox.Db2.Db2ConnectionManager.QB*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_QB" data-uid="ETLBox.Db2.Db2ConnectionManager.QB">QB</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.QB</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_QE_" data-uid="ETLBox.Db2.Db2ConnectionManager.QE*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_QE" data-uid="ETLBox.Db2.Db2ConnectionManager.QE">QE</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.QE</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_SupportDatabases_" data-uid="ETLBox.Db2.Db2ConnectionManager.SupportDatabases*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_SupportDatabases" data-uid="ETLBox.Db2.Db2ConnectionManager.SupportDatabases">SupportDatabases</h4>
  <div class="markdown level1 summary"><p>Indicates if database server does support multiple databases.
A database in ETLBox means a schema in MySql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool SupportDatabases { get; protected set; }
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.SupportDatabases</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_SupportProcedures_" data-uid="ETLBox.Db2.Db2ConnectionManager.SupportProcedures*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_SupportProcedures" data-uid="ETLBox.Db2.Db2ConnectionManager.SupportProcedures">SupportProcedures</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.SupportProcedures</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_UseSqlBulkOperations_" data-uid="ETLBox.Db2.Db2ConnectionManager.UseSqlBulkOperations*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_UseSqlBulkOperations" data-uid="ETLBox.Db2.Db2ConnectionManager.UseSqlBulkOperations">UseSqlBulkOperations</h4>
  <div class="markdown level1 summary"><p>By default bulk inserts are done using the DB2BulkCopy.
This provides better performance, but it won't support Transactions and foreign key constraints.
If you need support for transactions or constraints, set this flag to true.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool UseSqlBulkOperations { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Db2_Db2ConnectionManager_BulkDelete_" data-uid="ETLBox.Db2.Db2ConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_BulkDelete_ETLBox_ITableData_" data-uid="ETLBox.Db2.Db2ConnectionManager.BulkDelete(ETLBox.ITableData)">BulkDelete(ITableData)</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.BulkDelete(ETLBox.ITableData)</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_BulkInsert_" data-uid="ETLBox.Db2.Db2ConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_BulkInsert_ETLBox_ITableData_" data-uid="ETLBox.Db2.Db2ConnectionManager.BulkInsert(ETLBox.ITableData)">BulkInsert(ITableData)</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.BulkInsert(ETLBox.ITableData)</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_BulkSelect_" data-uid="ETLBox.Db2.Db2ConnectionManager.BulkSelect*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.Db2.Db2ConnectionManager.BulkSelect(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
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
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</a></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_BulkUpdate_" data-uid="ETLBox.Db2.Db2ConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.Db2.Db2ConnectionManager.BulkUpdate(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
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
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.Db2.Db2ConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.Db2.Db2ConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(string)</h4>
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
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.CleanUpBulkInsert(string)</a></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_Clone_" data-uid="ETLBox.Db2.Db2ConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_Clone" data-uid="ETLBox.Db2.Db2ConnectionManager.Clone">Clone()</h4>
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
  <div><span class="xref">ETLBox.DbConnectionManager&lt;IBM.Data.DB2.Core.DB2Connection, IBM.Data.DB2.Core.DB2Transaction, IBM.Data.DB2.Core.DB2Parameter&gt;.Clone()</span></div>
  <a id="ETLBox_Db2_Db2ConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.Db2.Db2ConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_Db2_Db2ConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.Db2.Db2ConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(string)</h4>
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
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">DbConnectionManager&lt;DB2Connection, DB2Transaction, DB2Parameter&gt;.PrepareBulkInsert(string)</a></div>
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
