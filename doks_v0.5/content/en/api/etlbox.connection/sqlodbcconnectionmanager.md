---
title: "SqlOdbcConnectionManager"
description: "Details for Class SqlOdbcConnectionManager (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10033
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.SqlOdbcConnectionManager">
  <h1 id="ETLBox_Connection_SqlOdbcConnectionManager" data-uid="ETLBox.Connection.SqlOdbcConnectionManager" class="text-break">Class SqlOdbcConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">System.Data.Odbc.OdbcConnection</span>, <span class="xref">System.Data.Odbc.OdbcTransaction</span>, <span class="xref">System.Data.Odbc.OdbcParameter</span>&gt;</div>
    <div class="level2"><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager">OdbcConnectionManager</a></div>
    <div class="level3"><span class="xref">SqlOdbcConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">System.Data.Odbc.OdbcConnection</span>, <span class="xref">System.Data.Odbc.OdbcTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_IsOdbcOrOleDbConnection">OdbcConnectionManager.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_BulkInsert_ETLBox_ControlFlow_ITableData_">OdbcConnectionManager.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData_">OdbcConnectionManager.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">OdbcConnectionManager.BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">OdbcConnectionManager.BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_PrepareBulkInsert_System_String_">OdbcConnectionManager.PrepareBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_CleanUpBulkInsert_System_String_">OdbcConnectionManager.CleanUpBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionManagerType">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ConnectionManagerType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_State">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Transaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QB">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QE">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PP">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_Connection_ConnectionManagerType_System_String_System_String_System_String_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.OverrideConnectionSpecifics(ConnectionManagerType, String, String, String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteNonQuery(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteScalar(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.ExecuteReader(String, IEnumerable&lt;QueryParameter&gt;, Int32, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkNonQuery(String, IEnumerable&lt;OdbcParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkReader(String, IEnumerable&lt;OdbcParameter&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.PrepareBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkInsert_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CleanUpBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkDelete_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Clone">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CopyBaseAttributes_ETLBox_Connection_DbConnectionManager__0__1__2__">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Open">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Close">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Dispose(Boolean)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;OdbcConnection, OdbcTransaction, OdbcParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
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
  <h6><strong>Assembly</strong>: ETLBox.Odbc.dll</h6>
  <h5 id="ETLBox_Connection_SqlOdbcConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class SqlOdbcConnectionManager : OdbcConnectionManager, IConnectionManager<OdbcConnection, OdbcTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_SqlOdbcConnectionManager__ctor_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_SqlOdbcConnectionManager__ctor" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.#ctor">SqlOdbcConnectionManager()</h4>
  <div class="markdown level1 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlOdbcConnectionManager()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_SqlOdbcConnectionManager__ctor_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_SqlOdbcConnectionManager__ctor_ETLBox_Connection_OdbcConnectionString_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.#ctor(ETLBox.Connection.OdbcConnectionString)">SqlOdbcConnectionManager(OdbcConnectionString)</h4>
  <div class="markdown level1 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlOdbcConnectionManager(OdbcConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.connection/odbcconnectionstring">OdbcConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_SqlOdbcConnectionManager__ctor_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_SqlOdbcConnectionManager__ctor_System_String_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.#ctor(System.String)">SqlOdbcConnectionManager(String)</h4>
  <div class="markdown level1 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlOdbcConnectionManager(string connectionString)
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_SqlOdbcConnectionManager_ConnectionManagerType_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.ConnectionManagerType*"></a>
  <h4 id="ETLBox_Connection_SqlOdbcConnectionManager_ConnectionManagerType" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.ConnectionManagerType">ConnectionManagerType</h4>
  <div class="markdown level1 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_ConnectionManagerType">OdbcConnectionManager.ConnectionManagerType</a></div>
  <a id="ETLBox_Connection_SqlOdbcConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_Connection_SqlOdbcConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.Odbc.OdbcConnection, System.Data.Odbc.OdbcTransaction, System.Data.Odbc.OdbcParameter&gt;.MaxParameterSizeSql</span></div>
  <a id="ETLBox_Connection_SqlOdbcConnectionManager_QB_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.QB*"></a>
  <h4 id="ETLBox_Connection_SqlOdbcConnectionManager_QB" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.QB">QB</h4>
  <div class="markdown level1 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_QB">OdbcConnectionManager.QB</a></div>
  <a id="ETLBox_Connection_SqlOdbcConnectionManager_QE_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.QE*"></a>
  <h4 id="ETLBox_Connection_SqlOdbcConnectionManager_QE" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.QE">QE</h4>
  <div class="markdown level1 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_QE">OdbcConnectionManager.QE</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_SqlOdbcConnectionManager_Clone_" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Connection_SqlOdbcConnectionManager_Clone" data-uid="ETLBox.Connection.SqlOdbcConnectionManager.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Sql Server Connection manager for an ODBC connection based on ADO.NET to Sql Server.
ODBC by default does not support a Bulk Insert - inserting big amounts of data is translated into a</p>
<pre><code>insert into (...) values (..),(..),(..) statements.</code></pre>
<p>This means that inserting big amounts of data in a database via Odbc can be much slower
than using the native connector.
Also be careful with the batch size - some databases have limitations regarding the length of sql statements.
Reduce the batch size if you encounter issues here.</p>
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_Clone">OdbcConnectionManager.Clone()</a></div>
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
