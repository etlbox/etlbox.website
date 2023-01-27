---
title: "AccessOdbcConnectionManager"
description: "Details for Class AccessOdbcConnectionManager (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10000
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.AccessOdbcConnectionManager">
  <h1 id="ETLBox_Connection_AccessOdbcConnectionManager" data-uid="ETLBox.Connection.AccessOdbcConnectionManager" class="text-break">Class AccessOdbcConnectionManager
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
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionmanager-3">DbConnectionManager</a>&lt;<span class="xref">System.Data.Odbc.OdbcConnection</span>, <span class="xref">System.Data.Odbc.OdbcTransaction</span>, <span class="xref">System.Data.Odbc.OdbcParameter</span>&gt;</div>
    <div class="level2"><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager">OdbcConnectionManager</a></div>
    <div class="level3"><span class="xref">AccessOdbcConnectionManager</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager-2">IConnectionManager</a>&lt;<span class="xref">System.Data.Odbc.OdbcConnection</span>, <span class="xref">System.Data.Odbc.OdbcTransaction</span>&gt;</div>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></div>
    <div><span class="xref">System.IDisposable</span></div>
    <div><a class="xref" href="/api/etlbox.connection/iconnectionmanagerdbobjects">IConnectionManagerDbObjects</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_IsOdbcOrOleDbConnection">OdbcConnectionManager.IsOdbcOrOleDbConnection</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____">OdbcConnectionManager.BulkSelect(ITableData, ICollection&lt;String&gt;, Action, Action, Action&lt;Object&gt;[])</a>
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
  <h5 id="ETLBox_Connection_AccessOdbcConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class AccessOdbcConnectionManager : OdbcConnectionManager, IConnectionManager<OdbcConnection, OdbcTransaction>, IConnectionManager, IDisposable, IConnectionManagerDbObjects
```

{{< rawhtml >}}
  <h5 id="ETLBox_Connection_AccessOdbcConnectionManager_examples"><strong>Examples</strong></h5>
  <pre><code>ControlFlow.DefaultDbConnection =
  new AccessOdbcConnectionManager(new OdbcConnectionString(
     &quot;Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\DB\Test.mdb&quot;));</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager__ctor_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager__ctor" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.#ctor">AccessOdbcConnectionManager()</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AccessOdbcConnectionManager()
```

{{< rawhtml >}}
  <h5 id="ETLBox_Connection_AccessOdbcConnectionManager__ctor_examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection =
  new AccessOdbcConnectionManager(new OdbcConnectionString(
     &quot;Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\DB\Test.mdb&quot;));</code></pre>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager__ctor_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager__ctor_ETLBox_Connection_OdbcConnectionString_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.#ctor(ETLBox.Connection.OdbcConnectionString)">AccessOdbcConnectionManager(OdbcConnectionString)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
        <td><a class="xref" href="/api/etlbox.connection/odbcconnectionstring">OdbcConnectionString</a></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Connection_AccessOdbcConnectionManager__ctor_ETLBox_Connection_OdbcConnectionString__examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection =
  new AccessOdbcConnectionManager(new OdbcConnectionString(
     &quot;Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\DB\Test.mdb&quot;));</code></pre>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager__ctor_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.#ctor*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager__ctor_System_String_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.#ctor(System.String)">AccessOdbcConnectionManager(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Connection_AccessOdbcConnectionManager__ctor_System_String__examples">Examples</h5>
  <pre><code>ControlFlow.DefaultDbConnection =
  new AccessOdbcConnectionManager(new OdbcConnectionString(
     &quot;Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\DB\Test.mdb&quot;));</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_ConnectionManagerType_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.ConnectionManagerType*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_ConnectionManagerType" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.ConnectionManagerType">ConnectionManagerType</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_DummyTableName_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.DummyTableName*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_DummyTableName" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.DummyTableName">DummyTableName</h4>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_MaxParameterSizeBulkCopy_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_MaxParameterSizeBulkCopy" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.Odbc.OdbcConnection, System.Data.Odbc.OdbcTransaction, System.Data.Odbc.OdbcParameter&gt;.MaxParameterSizeBulkCopy</span></div>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_QB_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.QB*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_QB" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.QB">QB</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_QE_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.QE*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_QE" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.QE">QE</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_SupportDatabases_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.SupportDatabases*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_SupportDatabases" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.SupportDatabases">SupportDatabases</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.Odbc.OdbcConnection, System.Data.Odbc.OdbcTransaction, System.Data.Odbc.OdbcParameter&gt;.SupportDatabases</span></div>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_SupportProcedures_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.SupportProcedures*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_SupportProcedures" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.SupportProcedures">SupportProcedures</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.Odbc.OdbcConnection, System.Data.Odbc.OdbcTransaction, System.Data.Odbc.OdbcParameter&gt;.SupportProcedures</span></div>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_SupportSchemas_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.SupportSchemas*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_SupportSchemas" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.SupportSchemas">SupportSchemas</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div><span class="xref">ETLBox.Connection.DbConnectionManager&lt;System.Data.Odbc.OdbcConnection, System.Data.Odbc.OdbcTransaction, System.Data.Odbc.OdbcParameter&gt;.SupportSchemas</span></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_BulkDelete_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.BulkDelete(ETLBox.ControlFlow.ITableData)">BulkDelete(ITableData)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_BulkDelete_ETLBox_ControlFlow_ITableData_">OdbcConnectionManager.BulkDelete(ITableData)</a></div>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_BulkInsert_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_BulkInsert_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.BulkInsert(ETLBox.ControlFlow.ITableData)">BulkInsert(ITableData)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_BulkInsert_ETLBox_ControlFlow_ITableData_">OdbcConnectionManager.BulkInsert(ITableData)</a></div>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_BulkUpdate_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.BulkUpdate(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">OdbcConnectionManager.BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</a></div>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_CheckIfTableOrViewExists_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.CheckIfTableOrViewExists*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_CheckIfTableOrViewExists_System_String_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.CheckIfTableOrViewExists(System.String)">CheckIfTableOrViewExists(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
        <td><span class="xref">System.String</span></td>
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_CleanUpBulkInsert_System_String_">OdbcConnectionManager.CleanUpBulkInsert(String)</a></div>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_Clone_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.Clone*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_Clone" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(String)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
  <div><a class="xref" href="/api/etlbox.connection/odbcconnectionmanager#ETLBox_Connection_OdbcConnectionManager_PrepareBulkInsert_System_String_">OdbcConnectionManager.PrepareBulkInsert(String)</a></div>
  <a id="ETLBox_Connection_AccessOdbcConnectionManager_ReadTableDefinition_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.ReadTableDefinition*"></a>
  <h4 id="ETLBox_Connection_AccessOdbcConnectionManager_ReadTableDefinition_ETLBox_Helper_ObjectNameDescriptor_" data-uid="ETLBox.Connection.AccessOdbcConnectionManager.ReadTableDefinition(ETLBox.Helper.ObjectNameDescriptor)">ReadTableDefinition(ObjectNameDescriptor)</h4>
  <div class="markdown level1 summary"><p>Connection manager for an ODBC connection to Access databases.
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
        <td><a class="xref" href="/api/etlbox.helper/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td><span class="parametername">TN</span></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
  <div>
      <a class="xref" href="/api/etlbox.connection/iconnectionmanagerdbobjects">IConnectionManagerDbObjects</a>
  </div>

{{< /rawhtml >}}
