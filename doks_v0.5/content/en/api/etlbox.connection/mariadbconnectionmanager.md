---
title: "MariaDbConnectionManager"
description: "Details for Class MariaDbConnectionManager (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10014
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.MariaDbConnectionManager">
  <h1 id="ETLBox_Connection_MariaDbConnectionManager" data-uid="ETLBox.Connection.MariaDbConnectionManager" class="text-break">Class MariaDbConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Connection manager of a ETLBox connection to Maria DB.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">MySql.Data.MySqlClient.MySqlConnection</span>, <span class="xref">MySql.Data.MySqlClient.MySqlTransaction</span>, <span class="xref">MySql.Data.MySqlClient.MySqlParameter</span>&gt;</div>
    <div class="level2"><a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager">MySqlConnectionManager</a></div>
    <div class="level3"><span class="xref">MariaDbConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">MySql.Data.MySqlClient.MySqlConnection</span>, <span class="xref">MySql.Data.MySqlClient.MySqlTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_ConnectionManagerType">MySqlConnectionManager.ConnectionManagerType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_QB">MySqlConnectionManager.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_QE">MySqlConnectionManager.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_SupportSchemas">MySqlConnectionManager.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_NeedsROWKeyword">MySqlConnectionManager.NeedsROWKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_BulkInsert_ETLBox_ControlFlow_ITableData_">MySqlConnectionManager.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_PrepareBulkInsert_System_String_">MySqlConnectionManager.PrepareBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_CleanUpBulkInsert_System_String_">MySqlConnectionManager.CleanUpBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData_">MySqlConnectionManager.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">MySqlConnectionManager.BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">MySqlConnectionManager.BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionManagerType">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ConnectionManagerType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_State">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Transaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QB">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QE">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PP">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_Connection_ConnectionManagerType_System_String_System_String_System_String_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.OverrideConnectionSpecifics(ConnectionManagerType, String, String, String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteNonQuery(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteScalar(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.ExecuteReader(String, IEnumerable&lt;QueryParameter&gt;, Int32, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkNonQuery(String, IEnumerable&lt;MySqlParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkReader(String, IEnumerable&lt;MySqlParameter&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.PrepareBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkInsert_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CleanUpBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkDelete_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Clone">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CopyBaseAttributes_ETLBox_Connection_DbConnectionManager__0__1__2__">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Open">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Close">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Dispose(Boolean)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;MySqlConnection, MySqlTransaction, MySqlParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
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
  <h6><strong>Assembly</strong>: ETLBox.MariaDb.dll</h6>
  <h5 id="ETLBox_Connection_MariaDbConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class MariaDbConnectionManager : MySqlConnectionManager, IConnectionManager<MySqlConnection, MySqlTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h5 id="ETLBox_Connection_MariaDbConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_MariaDbConnectionManager__ctor_" data-uid="ETLBox.Connection.MariaDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionManager__ctor" data-uid="ETLBox.Connection.MariaDbConnectionManager.#ctor">MariaDbConnectionManager()</h4>
  <div class="markdown level1 summary"><p>Connection manager of a ETLBox connection to Maria DB.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MariaDbConnectionManager()
```

{{< rawhtml >}}
  <h5 id="ETLBox_Connection_MariaDbConnectionManager__ctor_examples">Examples</h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <a id="ETLBox_Connection_MariaDbConnectionManager__ctor_" data-uid="ETLBox.Connection.MariaDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionManager__ctor_ETLBox_Connection_MySqlConnectionString_" data-uid="ETLBox.Connection.MariaDbConnectionManager.#ctor(ETLBox.Connection.MySqlConnectionString)">MariaDbConnectionManager(MySqlConnectionString)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a ETLBox connection to Maria DB.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MariaDbConnectionManager(MySqlConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.connection/mysqlconnectionstring">MySqlConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Connection_MariaDbConnectionManager__ctor_ETLBox_Connection_MySqlConnectionString__examples">Examples</h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <a id="ETLBox_Connection_MariaDbConnectionManager__ctor_" data-uid="ETLBox.Connection.MariaDbConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionManager__ctor_System_String_" data-uid="ETLBox.Connection.MariaDbConnectionManager.#ctor(System.String)">MariaDbConnectionManager(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager of a ETLBox connection to Maria DB.</p>
</div>
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Connection_MariaDbConnectionManager__ctor_System_String__examples">Examples</h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_MariaDbConnectionManager_Compatibility_" data-uid="ETLBox.Connection.MariaDbConnectionManager.Compatibility*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionManager_Compatibility" data-uid="ETLBox.Connection.MariaDbConnectionManager.Compatibility">Compatibility</h4>
  <div class="markdown level1 summary"><p>Connection manager of a ETLBox connection to Maria DB.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string Compatibility { get; set; }
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;MySql.Data.MySqlClient.MySqlConnection, MySql.Data.MySqlClient.MySqlTransaction, MySql.Data.MySqlClient.MySqlParameter&gt;.Compatibility</span></div>
  <h5 id="ETLBox_Connection_MariaDbConnectionManager_Compatibility_examples">Examples</h5>
  <pre><code>var mariaDbConnection = new MariaDbConnectionManager(new ConnectionString(&quot;Data Source=.;&quot;));</code></pre>
  <a id="ETLBox_Connection_MariaDbConnectionManager_MaxParameterSizeBulkCopy_" data-uid="ETLBox.Connection.MariaDbConnectionManager.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionManager_MaxParameterSizeBulkCopy" data-uid="ETLBox.Connection.MariaDbConnectionManager.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"><p>Connection manager of a ETLBox connection to Maria DB.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int MaxParameterSizeBulkCopy { get; }
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
  <div><a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_MaxParameterSizeBulkCopy">MySqlConnectionManager.MaxParameterSizeBulkCopy</a></div>
  <a id="ETLBox_Connection_MariaDbConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.Connection.MariaDbConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.Connection.MariaDbConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>Connection manager of a ETLBox connection to Maria DB.</p>
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
  <div><a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_MaxParameterSizeSql">MySqlConnectionManager.MaxParameterSizeSql</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_MariaDbConnectionManager_Clone_" data-uid="ETLBox.Connection.MariaDbConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionManager_Clone" data-uid="ETLBox.Connection.MariaDbConnectionManager.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Connection manager of a ETLBox connection to Maria DB.</p>
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
  <div><a class="xref" href="/api/etlbox.connection/mysqlconnectionmanager#ETLBox_Connection_MySqlConnectionManager_Clone">MySqlConnectionManager.Clone()</a></div>
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
