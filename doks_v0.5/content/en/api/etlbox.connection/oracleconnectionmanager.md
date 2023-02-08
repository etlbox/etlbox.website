---
title: "OracleConnectionManager"
description: "Details for Class OracleConnectionManager (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10023
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.OracleConnectionManager">
  <h1 id="ETLBox_Connection_OracleConnectionManager" data-uid="ETLBox.Connection.OracleConnectionManager" class="text-break">Class OracleConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">Oracle.ManagedDataAccess.Client.OracleConnection</span>, <span class="xref">Oracle.ManagedDataAccess.Client.OracleTransaction</span>, <span class="xref">Oracle.ManagedDataAccess.Client.OracleParameter</span>&gt;</div>
    <div class="level2"><span class="xref">OracleConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">Oracle.ManagedDataAccess.Client.OracleConnection</span>, <span class="xref">Oracle.ManagedDataAccess.Client.OracleTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_DbConnection">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.DbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionManagerType">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.ConnectionManagerType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxLoginAttempts">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.MaxLoginAttempts</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_LeaveOpen">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.LeaveOpen</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ConnectionString">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.ConnectionString</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_State">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.State</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Transaction">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.Transaction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsInBulkInsert">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.IsInBulkInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommandTimeout">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.CommandTimeout</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QB">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_QE">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PP">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.PP</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportDatabases">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.SupportDatabases</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportProcedures">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.SupportProcedures</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_SupportSchemas">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.SupportSchemas</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_IsOdbcOrOleDbConnection">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeSql">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.MaxParameterSizeSql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_MaxParameterSizeBulkCopy">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.MaxParameterSizeBulkCopy</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Compatibility">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.Compatibility</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_OverrideConnectionSpecifics_ETLBox_Connection_ConnectionManagerType_System_String_System_String_System_String_">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.OverrideConnectionSpecifics(ConnectionManagerType, String, String, String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.ExecuteNonQuery(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.ExecuteScalar(String, IEnumerable&lt;QueryParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.ExecuteReader(String, IEnumerable&lt;QueryParameter&gt;, Int32, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkNonQuery_System_String_System_Collections_Generic_IEnumerable__2__">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.BulkNonQuery(String, IEnumerable&lt;OracleParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkReader_System_String_System_Collections_Generic_IEnumerable__2__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.BulkReader(String, IEnumerable&lt;OracleParameter&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction_System_Data_IsolationLevel_">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.BeginTransaction(IsolationLevel)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BeginTransaction">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.BeginTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CommitTransaction">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.CommitTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_RollbackTransaction">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.RollbackTransaction()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_PrepareBulkInsert_System_String_">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.PrepareBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkInsert_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CleanUpBulkInsert_System_String_">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.CleanUpBulkInsert(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkDelete_ETLBox_ControlFlow_ITableData_">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloneIfAllowed">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.CloneIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Clone">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CopyBaseAttributes_ETLBox_Connection_DbConnectionManager__0__1__2__">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.CopyBaseAttributes(DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Open">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.Open()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CreateDbConnection">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.CreateDbConnection()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Close">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.Close()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_CloseIfAllowed">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.CloseIfAllowed()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose_System_Boolean_">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.Dispose(Boolean)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_Dispose">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3#ETLBox_Connection_DbConnectionManager_3_UseExistingDbConnection_System_Data_IDbConnection_">DbConnectionManager&lt;OracleConnection, OracleTransaction, OracleParameter&gt;.UseExistingDbConnection(IDbConnection)</a>
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
  <h6><strong>Assembly</strong>: ETLBox.Oracle.dll</h6>
  <h5 id="ETLBox_Connection_OracleConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class OracleConnectionManager : DbConnectionManager<OracleConnection, OracleTransaction, OracleParameter>, IConnectionManager<OracleConnection, OracleTransaction>, IConnectionManager, IDisposable
```

{{< rawhtml >}}
  <h5 id="ETLBox_Connection_OracleConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code>var oracleConnection = new OracleConnectionManager(&quot;Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521)))(CONNECT_DATA=(SID=ORCLCDB)));User ID=etlbox;Password=password;&quot;);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_OracleConnectionManager__ctor_" data-uid="ETLBox.Connection.OracleConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager__ctor" data-uid="ETLBox.Connection.OracleConnectionManager.#ctor">OracleConnectionManager()</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OracleConnectionManager()
```

{{< rawhtml >}}
  <h5 id="ETLBox_Connection_OracleConnectionManager__ctor_examples">Examples</h5>
  <pre><code>var oracleConnection = new OracleConnectionManager(&quot;Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521)))(CONNECT_DATA=(SID=ORCLCDB)));User ID=etlbox;Password=password;&quot;);</code></pre>
  <a id="ETLBox_Connection_OracleConnectionManager__ctor_" data-uid="ETLBox.Connection.OracleConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager__ctor_ETLBox_Connection_OracleConnectionString_" data-uid="ETLBox.Connection.OracleConnectionManager.#ctor(ETLBox.Connection.OracleConnectionString)">OracleConnectionManager(OracleConnectionString)</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OracleConnectionManager(OracleConnectionString connectionString)
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
        <td><a class="xref" href="/api/etlbox.connection/oracleconnectionstring">OracleConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Connection_OracleConnectionManager__ctor_ETLBox_Connection_OracleConnectionString__examples">Examples</h5>
  <pre><code>var oracleConnection = new OracleConnectionManager(&quot;Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521)))(CONNECT_DATA=(SID=ORCLCDB)));User ID=etlbox;Password=password;&quot;);</code></pre>
  <a id="ETLBox_Connection_OracleConnectionManager__ctor_" data-uid="ETLBox.Connection.OracleConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager__ctor_System_String_" data-uid="ETLBox.Connection.OracleConnectionManager.#ctor(System.String)">OracleConnectionManager(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OracleConnectionManager(string connectionString)
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
  <h5 id="ETLBox_Connection_OracleConnectionManager__ctor_System_String__examples">Examples</h5>
  <pre><code>var oracleConnection = new OracleConnectionManager(&quot;Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521)))(CONNECT_DATA=(SID=ORCLCDB)));User ID=etlbox;Password=password;&quot;);</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_OracleConnectionManager_ConnectionManagerType_" data-uid="ETLBox.Connection.OracleConnectionManager.ConnectionManagerType*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_ConnectionManagerType" data-uid="ETLBox.Connection.OracleConnectionManager.ConnectionManagerType">ConnectionManagerType</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.ConnectionManagerType</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_MaxParameterSizeBulkCopy_" data-uid="ETLBox.Connection.OracleConnectionManager.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_MaxParameterSizeBulkCopy" data-uid="ETLBox.Connection.OracleConnectionManager.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.MaxParameterSizeBulkCopy</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.Connection.OracleConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.Connection.OracleConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.MaxParameterSizeSql</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_PP_" data-uid="ETLBox.Connection.OracleConnectionManager.PP*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_PP" data-uid="ETLBox.Connection.OracleConnectionManager.PP">PP</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.PP</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_QB_" data-uid="ETLBox.Connection.OracleConnectionManager.QB*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_QB" data-uid="ETLBox.Connection.OracleConnectionManager.QB">QB</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.QB</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_QE_" data-uid="ETLBox.Connection.OracleConnectionManager.QE*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_QE" data-uid="ETLBox.Connection.OracleConnectionManager.QE">QE</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.QE</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_SupportDatabases_" data-uid="ETLBox.Connection.OracleConnectionManager.SupportDatabases*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_SupportDatabases" data-uid="ETLBox.Connection.OracleConnectionManager.SupportDatabases">SupportDatabases</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.SupportDatabases</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_SupportSchemas_" data-uid="ETLBox.Connection.OracleConnectionManager.SupportSchemas*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_SupportSchemas" data-uid="ETLBox.Connection.OracleConnectionManager.SupportSchemas">SupportSchemas</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.SupportSchemas</span></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_OracleConnectionManager_BulkDelete_" data-uid="ETLBox.Connection.OracleConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.OracleConnectionManager.BulkDelete(ETLBox.ControlFlow.ITableData)">BulkDelete(ITableData)</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.BulkDelete(ETLBox.ControlFlow.ITableData)</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_BulkInsert_" data-uid="ETLBox.Connection.OracleConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_BulkInsert_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.OracleConnectionManager.BulkInsert(ETLBox.ControlFlow.ITableData)">BulkInsert(ITableData)</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.BulkInsert(ETLBox.ControlFlow.ITableData)</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_BulkSelect_" data-uid="ETLBox.Connection.OracleConnectionManager.BulkSelect*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.Connection.OracleConnectionManager.BulkSelect(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
</div>
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.String</span>&gt;</td>
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
        <td><span class="xref">System.Action</span>&lt;<span class="xref">System.Object</span>&gt;[]</td>
        <td><span class="parametername">rowActions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.BulkSelect(ETLBox.ControlFlow.ITableData, System.Collections.Generic.ICollection&lt;System.String&gt;, System.Action, System.Action, System.Action&lt;System.Object&gt;[])</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_BulkUpdate_" data-uid="ETLBox.Connection.OracleConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.Connection.OracleConnectionManager.BulkUpdate(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.String</span>&gt;</td>
        <td><span class="parametername">setColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.String</span>&gt;</td>
        <td><span class="parametername">joinColumnNames</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.BulkUpdate(ETLBox.ControlFlow.ITableData, System.Collections.Generic.ICollection&lt;System.String&gt;, System.Collections.Generic.ICollection&lt;System.String&gt;)</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.Connection.OracleConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.Connection.OracleConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tablename</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.CleanUpBulkInsert(System.String)</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_Clone_" data-uid="ETLBox.Connection.OracleConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_Clone" data-uid="ETLBox.Connection.OracleConnectionManager.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.Clone()</span></div>
  <a id="ETLBox_Connection_OracleConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.Connection.OracleConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_Connection_OracleConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.Connection.OracleConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager of an ETLBox connection to an Oracle database.
Usess the official Oracle ADO.NET driver for .NET core.</p>
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tablename</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;Oracle.ManagedDataAccess.Client.OracleConnection, Oracle.ManagedDataAccess.Client.OracleTransaction, Oracle.ManagedDataAccess.Client.OracleParameter&gt;.PrepareBulkInsert(System.String)</span></div>
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
