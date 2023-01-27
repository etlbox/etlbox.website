---
title: "IConnectionManager<TConnection, TTransaction>"
description: "Details for Interface IConnectionManager<TConnection, TTransaction> (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10010
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.IConnectionManager`2">
  <h1 id="ETLBox_Connection_IConnectionManager_2" data-uid="ETLBox.Connection.IConnectionManager`2" class="text-break">Interface IConnectionManager&lt;TConnection, TTransaction&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_ConnectionManagerType">IConnectionManager.ConnectionManagerType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_MaxLoginAttempts">IConnectionManager.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_CommandTimeout">IConnectionManager.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_LeaveOpen">IConnectionManager.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_ConnectionString">IConnectionManager.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_State">IConnectionManager.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_QB">IConnectionManager.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_QE">IConnectionManager.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_PP">IConnectionManager.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_SupportDatabases">IConnectionManager.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_SupportProcedures">IConnectionManager.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_SupportSchemas">IConnectionManager.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_IsOdbcOrOleDbConnection">IConnectionManager.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_MaxParameterSizeSql">IConnectionManager.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_MaxParameterSizeBulkCopy">IConnectionManager.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_Compatibility">IConnectionManager.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">IConnectionManager.ExecuteNonQuery(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">IConnectionManager.ExecuteScalar(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">IConnectionManager.ExecuteReader(String, IEnumerable&lt;QueryParameter&gt;, Int32, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_BeginTransaction_System_Data_IsolationLevel_">IConnectionManager.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_BeginTransaction">IConnectionManager.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_CommitTransaction">IConnectionManager.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_RollbackTransaction">IConnectionManager.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_CloneIfAllowed">IConnectionManager.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_Clone">IConnectionManager.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_Open">IConnectionManager.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_Close">IConnectionManager.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_CloseIfAllowed">IConnectionManager.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_IsInBulkInsert">IConnectionManager.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_PrepareBulkInsert_System_String_">IConnectionManager.PrepareBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_BulkInsert_ETLBox_ControlFlow_ITableData_">IConnectionManager.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_CleanUpBulkInsert_System_String_">IConnectionManager.CleanUpBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData_">IConnectionManager.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">IConnectionManager.BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">IConnectionManager.BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <span class="xref">System.IDisposable.Dispose()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Connection</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Connection_IConnectionManager_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IConnectionManager<TConnection, TTransaction> : IConnectionManager, IDisposable where TConnection : class, IDbConnection, new()
    where TTransaction : class, IDbTransaction
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
        <td></td>
      </tr>
      <tr>
        <td><span class="parametername">TTransaction</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_IConnectionManager_2_DbConnection_" data-uid="ETLBox.Connection.IConnectionManager`2.DbConnection*"></a>
  <h4 id="ETLBox_Connection_IConnectionManager_2_DbConnection" data-uid="ETLBox.Connection.IConnectionManager`2.DbConnection">DbConnection</h4>
  <div class="markdown level1 summary"><p>The underlying ADO.NET connection</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    TConnection DbConnection { get; }
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
  <a id="ETLBox_Connection_IConnectionManager_2_Transaction_" data-uid="ETLBox.Connection.IConnectionManager`2.Transaction*"></a>
  <h4 id="ETLBox_Connection_IConnectionManager_2_Transaction" data-uid="ETLBox.Connection.IConnectionManager`2.Transaction">Transaction</h4>
  <div class="markdown level1 summary"><p>The current transaction. Use <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_BeginTransaction">BeginTransaction()</a> to start a transaction,
and <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_CommitTransaction">CommitTransaction()</a> or <a class="xref" href="/api/etlbox.connection/iconnectionmanager#ETLBox_Connection_IConnectionManager_RollbackTransaction">RollbackTransaction()</a> to commit or rollback.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    TTransaction Transaction { get; }
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

{{< /rawhtml >}}
