---
title: "IConnectionManager"
description: "Details for Interface IConnectionManager (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10209
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IConnectionManager">
  <h1 id="ETLBox_IConnectionManager" data-uid="ETLBox.IConnectionManager" class="text-break">Interface IConnectionManager
</h1>
  <div class="markdown level0 summary"><p>Common properties and methods for all database connection managers</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose">IDisposable.Dispose()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IConnectionManager_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IConnectionManager : IDisposable
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IConnectionManager_CommandTimeout_" data-uid="ETLBox.IConnectionManager.CommandTimeout*"></a>
  <h4 id="ETLBox_IConnectionManager_CommandTimeout" data-uid="ETLBox.IConnectionManager.CommandTimeout">CommandTimeout</h4>
  <div class="markdown level1 summary"><p>The timeout used when executing sql commands with this connection manager.
Default is 0 (no timeout)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int CommandTimeout { get; set; }
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
  <a id="ETLBox_IConnectionManager_Compatibility_" data-uid="ETLBox.IConnectionManager.Compatibility*"></a>
  <h4 id="ETLBox_IConnectionManager_Compatibility" data-uid="ETLBox.IConnectionManager.Compatibility">Compatibility</h4>
  <div class="markdown level1 summary"><p>Information about compatibility of the current connector</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string Compatibility { get; }
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
  <a id="ETLBox_IConnectionManager_ConnectionString_" data-uid="ETLBox.IConnectionManager.ConnectionString*"></a>
  <h4 id="ETLBox_IConnectionManager_ConnectionString" data-uid="ETLBox.IConnectionManager.ConnectionString">ConnectionString</h4>
  <div class="markdown level1 summary"><p>The connection string used to establish the connection with the database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDbConnectionString ConnectionString { get; set; }
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
        <td><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_ConnectionType_" data-uid="ETLBox.IConnectionManager.ConnectionType*"></a>
  <h4 id="ETLBox_IConnectionManager_ConnectionType" data-uid="ETLBox.IConnectionManager.ConnectionType">ConnectionType</h4>
  <div class="markdown level1 summary"><p>The database type for the connection manager.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ConnectionType ConnectionType { get; }
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
  <a id="ETLBox_IConnectionManager_HasTransaction_" data-uid="ETLBox.IConnectionManager.HasTransaction*"></a>
  <h4 id="ETLBox_IConnectionManager_HasTransaction" data-uid="ETLBox.IConnectionManager.HasTransaction">HasTransaction</h4>
  <div class="markdown level1 summary"><p>Indicates if the current connection has a transaction assigned</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool HasTransaction { get; }
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
  <a id="ETLBox_IConnectionManager_IsInBulkInsert_" data-uid="ETLBox.IConnectionManager.IsInBulkInsert*"></a>
  <h4 id="ETLBox_IConnectionManager_IsInBulkInsert" data-uid="ETLBox.IConnectionManager.IsInBulkInsert">IsInBulkInsert</h4>
  <div class="markdown level1 summary"><p>Indicates if the current connection is currently used in a bulk insert operation (e.g. performed by a DbDestination)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool IsInBulkInsert { get; set; }
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
  <a id="ETLBox_IConnectionManager_IsOdbcOrOleDbConnection_" data-uid="ETLBox.IConnectionManager.IsOdbcOrOleDbConnection*"></a>
  <h4 id="ETLBox_IConnectionManager_IsOdbcOrOleDbConnection" data-uid="ETLBox.IConnectionManager.IsOdbcOrOleDbConnection">IsOdbcOrOleDbConnection</h4>
  <div class="markdown level1 summary"><p>Indicates if the current connection manager is used as a OleDb or Odbc Connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool IsOdbcOrOleDbConnection { get; }
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
  <a id="ETLBox_IConnectionManager_LeaveOpen_" data-uid="ETLBox.IConnectionManager.LeaveOpen*"></a>
  <h4 id="ETLBox_IConnectionManager_LeaveOpen" data-uid="ETLBox.IConnectionManager.LeaveOpen">LeaveOpen</h4>
  <div class="markdown level1 summary"><p>By default, after every sql operation the underlying ADO.NET connection is closed and retured to the ADO.NET connection pool.
(This is the recommended behavior)
To keep the connection open and avoid having the connection returned to the pool, set this to true.
A connnection will be left open when a bulk insert operation is executed or a transaction hase been openend and not yet commited or rolled back.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool LeaveOpen { get; set; }
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
  <a id="ETLBox_IConnectionManager_MaxLoginAttempts_" data-uid="ETLBox.IConnectionManager.MaxLoginAttempts*"></a>
  <h4 id="ETLBox_IConnectionManager_MaxLoginAttempts" data-uid="ETLBox.IConnectionManager.MaxLoginAttempts">MaxLoginAttempts</h4>
  <div class="markdown level1 summary"><p>Number of attempts that the connection managers tries to connect before it decides that the database is not reachable.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int MaxLoginAttempts { get; set; }
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
  <a id="ETLBox_IConnectionManager_MaxParameterSizeBulkCopy_" data-uid="ETLBox.IConnectionManager.MaxParameterSizeBulkCopy*"></a>
  <h4 id="ETLBox_IConnectionManager_MaxParameterSizeBulkCopy" data-uid="ETLBox.IConnectionManager.MaxParameterSizeBulkCopy">MaxParameterSizeBulkCopy</h4>
  <div class="markdown level1 summary"><p>Returns the maximum amount of parameters that can be used for bulk inserts.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int MaxParameterSizeBulkCopy { get; }
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
  <a id="ETLBox_IConnectionManager_MaxParameterSizeSql_" data-uid="ETLBox.IConnectionManager.MaxParameterSizeSql*"></a>
  <h4 id="ETLBox_IConnectionManager_MaxParameterSizeSql" data-uid="ETLBox.IConnectionManager.MaxParameterSizeSql">MaxParameterSizeSql</h4>
  <div class="markdown level1 summary"><p>Returns the maximum amount of parameters that can be passed into a
sql query.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int MaxParameterSizeSql { get; }
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
  <a id="ETLBox_IConnectionManager_PP_" data-uid="ETLBox.IConnectionManager.PP*"></a>
  <h4 id="ETLBox_IConnectionManager_PP" data-uid="ETLBox.IConnectionManager.PP">PP</h4>
  <div class="markdown level1 summary"><p>The character that is used in front of parameter names in query to identify the parameter.
Most databases use the '@' character, some use ':'.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string PP { get; }
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
  <a id="ETLBox_IConnectionManager_QB_" data-uid="ETLBox.IConnectionManager.QB*"></a>
  <h4 id="ETLBox_IConnectionManager_QB" data-uid="ETLBox.IConnectionManager.QB">QB</h4>
  <div class="markdown level1 summary"><p>The quotation begin character that is used in the database.
E.g. SqlServer uses: '[' and Postgres: '&quot;'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string QB { get; }
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
  <a id="ETLBox_IConnectionManager_QE_" data-uid="ETLBox.IConnectionManager.QE*"></a>
  <h4 id="ETLBox_IConnectionManager_QE" data-uid="ETLBox.IConnectionManager.QE">QE</h4>
  <div class="markdown level1 summary"><p>The quotation end character that is used in the database.
E.g. SqlServer uses: ']' and Postgres: '&quot;'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string QE { get; }
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
  <a id="ETLBox_IConnectionManager_State_" data-uid="ETLBox.IConnectionManager.State*"></a>
  <h4 id="ETLBox_IConnectionManager_State" data-uid="ETLBox.IConnectionManager.State">State</h4>
  <div class="markdown level1 summary"><p>The state of the underlying ADO.NET connection</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ConnectionState? State { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.connectionstate">ConnectionState</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_SupportDatabases_" data-uid="ETLBox.IConnectionManager.SupportDatabases*"></a>
  <h4 id="ETLBox_IConnectionManager_SupportDatabases" data-uid="ETLBox.IConnectionManager.SupportDatabases">SupportDatabases</h4>
  <div class="markdown level1 summary"><p>Indicates if database server does support multiple databases.
A database in ETLBox means a schema in MySql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool SupportDatabases { get; }
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
  <a id="ETLBox_IConnectionManager_SupportIndexes_" data-uid="ETLBox.IConnectionManager.SupportIndexes*"></a>
  <h4 id="ETLBox_IConnectionManager_SupportIndexes" data-uid="ETLBox.IConnectionManager.SupportIndexes">SupportIndexes</h4>
  <div class="markdown level1 summary"><p>Indicates if database server does support indexes.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool SupportIndexes { get; }
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
  <a id="ETLBox_IConnectionManager_SupportProcedures_" data-uid="ETLBox.IConnectionManager.SupportProcedures*"></a>
  <h4 id="ETLBox_IConnectionManager_SupportProcedures" data-uid="ETLBox.IConnectionManager.SupportProcedures">SupportProcedures</h4>
  <div class="markdown level1 summary"><p>Indicates if the database supports procedures</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool SupportProcedures { get; }
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
  <a id="ETLBox_IConnectionManager_SupportSchemas_" data-uid="ETLBox.IConnectionManager.SupportSchemas*"></a>
  <h4 id="ETLBox_IConnectionManager_SupportSchemas" data-uid="ETLBox.IConnectionManager.SupportSchemas">SupportSchemas</h4>
  <div class="markdown level1 summary"><p>Indicates if the database supports schemas
In MySql, this is false because the schema here is a database in ETLBox.
Use <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_SupportDatabases">SupportDatabases</a> instead</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool SupportSchemas { get; }
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
  <a id="ETLBox_IConnectionManager_UseValueToSqlConversionFunc_" data-uid="ETLBox.IConnectionManager.UseValueToSqlConversionFunc*"></a>
  <h4 id="ETLBox_IConnectionManager_UseValueToSqlConversionFunc" data-uid="ETLBox.IConnectionManager.UseValueToSqlConversionFunc">UseValueToSqlConversionFunc</h4>
  <div class="markdown level1 summary"><p>Indicates if a value to sql conversion function was set
via <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__">SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool UseValueToSqlConversionFunc { get; }
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
  <a id="ETLBox_IConnectionManager_BeginTransaction_" data-uid="ETLBox.IConnectionManager.BeginTransaction*"></a>
  <h4 id="ETLBox_IConnectionManager_BeginTransaction" data-uid="ETLBox.IConnectionManager.BeginTransaction">BeginTransaction()</h4>
  <div class="markdown level1 summary"><p>Will start a transaction with the default isolation level.
This will leave the underlying ADO.NET connection open until the transaction is committed or rolled back.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void BeginTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_IConnectionManager_BeginTransaction_" data-uid="ETLBox.IConnectionManager.BeginTransaction*"></a>
  <h4 id="ETLBox_IConnectionManager_BeginTransaction_System_Data_IsolationLevel_" data-uid="ETLBox.IConnectionManager.BeginTransaction(System.Data.IsolationLevel)">BeginTransaction(IsolationLevel)</h4>
  <div class="markdown level1 summary"><p>Will start a transaction with the given isolation level (if supported by the target database)
This will leave the underlying ADO.NET connection open until the transaction is committed or rolled back.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void BeginTransaction(IsolationLevel isolationLevel)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.isolationlevel">IsolationLevel</a></td>
        <td><span class="parametername">isolationLevel</span></td>
        <td><p>The isolation level for the transaction</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_BulkDelete_" data-uid="ETLBox.IConnectionManager.BulkDelete*"></a>
  <h4 id="ETLBox_IConnectionManager_BulkDelete_ETLBox_ITableData_" data-uid="ETLBox.IConnectionManager.BulkDelete(ETLBox.ITableData)">BulkDelete(ITableData)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk delete</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void BulkDelete(ITableData data)
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
  <a id="ETLBox_IConnectionManager_BulkInsert_" data-uid="ETLBox.IConnectionManager.BulkInsert*"></a>
  <h4 id="ETLBox_IConnectionManager_BulkInsert_ETLBox_ITableData_" data-uid="ETLBox.IConnectionManager.BulkInsert(ETLBox.ITableData)">BulkInsert(ITableData)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk insert</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void BulkInsert(ITableData data)
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
  <a id="ETLBox_IConnectionManager_BulkSelect_" data-uid="ETLBox.IConnectionManager.BulkSelect*"></a>
  <h4 id="ETLBox_IConnectionManager_BulkSelect_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.IConnectionManager.BulkSelect(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Action,System.Action,System.Action{System.Object}[])">BulkSelect(ITableData, ICollection&lt;string&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Performs a bulk select</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void BulkSelect(ITableData data, ICollection<string> selectColumnNames, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">actions</span></td>
        <td><p>Pass an action for each column</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_BulkUpdate_" data-uid="ETLBox.IConnectionManager.BulkUpdate*"></a>
  <h4 id="ETLBox_IConnectionManager_BulkUpdate_ETLBox_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.IConnectionManager.BulkUpdate(ETLBox.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk update</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void BulkUpdate(ITableData data, ICollection<string> setColumnNames, ICollection<string> joinColumnNames)
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
  <a id="ETLBox_IConnectionManager_CleanUpBulkInsert_" data-uid="ETLBox.IConnectionManager.CleanUpBulkInsert*"></a>
  <h4 id="ETLBox_IConnectionManager_CleanUpBulkInsert_System_String_" data-uid="ETLBox.IConnectionManager.CleanUpBulkInsert(System.String)">CleanUpBulkInsert(string)</h4>
  <div class="markdown level1 summary"><p>Called after the whole bulk insert operation
to change back settings made to improve bulk insert performance</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void CleanUpBulkInsert(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>Destination table name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_Clone_" data-uid="ETLBox.IConnectionManager.Clone*"></a>
  <h4 id="ETLBox_IConnectionManager_Clone" data-uid="ETLBox.IConnectionManager.Clone">Clone()</h4>
  <div class="markdown level1 summary"><p>Cretes a clone of the current connection manager</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IConnectionManager Clone()
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
  <a id="ETLBox_IConnectionManager_CloneIfAllowed_" data-uid="ETLBox.IConnectionManager.CloneIfAllowed*"></a>
  <h4 id="ETLBox_IConnectionManager_CloneIfAllowed" data-uid="ETLBox.IConnectionManager.CloneIfAllowed">CloneIfAllowed()</h4>
  <div class="markdown level1 summary"><p>Try to create a clone of the current connection - only possible if <a class="xref" href="/api/etlbox/iconnectionmanager#ETLBox_IConnectionManager_LeaveOpen">LeaveOpen</a> is false.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IConnectionManager CloneIfAllowed()
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
        <td><p>The connection that was either cloned or the current connection</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_Close_" data-uid="ETLBox.IConnectionManager.Close*"></a>
  <h4 id="ETLBox_IConnectionManager_Close" data-uid="ETLBox.IConnectionManager.Close">Close()</h4>
  <div class="markdown level1 summary"><p>Closes the connection - this will not automatically disconnect
from the database server, it will only return the connection
to the ADO.NET connection pool for further reuse.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Close()
```

{{< rawhtml >}}
  <a id="ETLBox_IConnectionManager_CloseIfAllowed_" data-uid="ETLBox.IConnectionManager.CloseIfAllowed*"></a>
  <h4 id="ETLBox_IConnectionManager_CloseIfAllowed" data-uid="ETLBox.IConnectionManager.CloseIfAllowed">CloseIfAllowed()</h4>
  <div class="markdown level1 summary"><p>Closes the connection only if leave open is set to false and no transaction or bulk insert is in progress.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void CloseIfAllowed()
```

{{< rawhtml >}}
  <a id="ETLBox_IConnectionManager_CommitTransaction_" data-uid="ETLBox.IConnectionManager.CommitTransaction*"></a>
  <h4 id="ETLBox_IConnectionManager_CommitTransaction" data-uid="ETLBox.IConnectionManager.CommitTransaction">CommitTransaction()</h4>
  <div class="markdown level1 summary"><p>Commits the current tranasction.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void CommitTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_IConnectionManager_ExecuteNonQuery_" data-uid="ETLBox.IConnectionManager.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_IConnectionManager_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.IConnectionManager.ExecuteNonQuery(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Executes a query against the database that doesn't return any data.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int ExecuteNonQuery(string command, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">command</span></td>
        <td><p>The sql command</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of parameters</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><p>Number of affected rows.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_ExecuteNonQueryAsync_" data-uid="ETLBox.IConnectionManager.ExecuteNonQueryAsync*"></a>
  <h4 id="ETLBox_IConnectionManager_ExecuteNonQueryAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.IConnectionManager.ExecuteNonQueryAsync(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQueryAsync(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Executes a query asynchronously against the database that doesn't return any data.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Task<int> ExecuteNonQueryAsync(string command, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">command</span></td>
        <td><p>The sql command</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of parameters</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1">Task</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>&gt;</td>
        <td><p>Number of affected rows.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_ExecuteReader_" data-uid="ETLBox.IConnectionManager.ExecuteReader*"></a>
  <h4 id="ETLBox_IConnectionManager_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.IConnectionManager.ExecuteReader(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Int32,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Executes a query against the database that does return multiple rows in multiple columns.
Define a read action for each columns of your result set.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void ExecuteReader(string commandText, IEnumerable<QueryParameter> parameterList = null, int limit = 2147483647, Action beforeRowReadAction = null, Action afterRowReadAction = null, params Action<object>[] actions)
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
        <td><span class="parametername">commandText</span></td>
        <td><p>The sql command</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of query parameters</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">limit</span></td>
        <td><p>Maximum number of rows to read</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td><p>This action is executed before reading the next row</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td><p>This action is executed after reading a row</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td><p>Every column in the result set will call an action with the value of the current row.
The order of the columns corresponds with the order of the passed actions.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_ExecuteReaderAsync_" data-uid="ETLBox.IConnectionManager.ExecuteReaderAsync*"></a>
  <h4 id="ETLBox_IConnectionManager_ExecuteReaderAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Int32_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.IConnectionManager.ExecuteReaderAsync(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Int32,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReaderAsync(string, IEnumerable&lt;QueryParameter&gt;, int, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"><p>Executes a query asynchronously against the database that does return multiple rows in multiple columns.
Define a read action for each columns of your result set.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Task ExecuteReaderAsync(string commandText, IEnumerable<QueryParameter> parameterList = null, int limit = 2147483647, Action beforeRowReadAction = null, Action afterRowReadAction = null, params Action<object>[] actions)
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
        <td><span class="parametername">commandText</span></td>
        <td><p>The sql command</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of query parameters</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">limit</span></td>
        <td><p>Maximum number of rows to read</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td><p>This action is executed before reading the next row</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action">Action</a></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td><p>This action is executed after reading a row</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td><p>Every column in the result set will call an action with the value of the current row.
The order of the columns corresponds with the order of the passed actions.</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>A data reader to iterate through the result set</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_ExecuteScalar_" data-uid="ETLBox.IConnectionManager.ExecuteScalar*"></a>
  <h4 id="ETLBox_IConnectionManager_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.IConnectionManager.ExecuteScalar(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Executes a query against the database that returns a single row in a single column.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    object ExecuteScalar(string command, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">command</span></td>
        <td><p>The sql command</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of parameters</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><p>The result</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_ExecuteScalarAsync_" data-uid="ETLBox.IConnectionManager.ExecuteScalarAsync*"></a>
  <h4 id="ETLBox_IConnectionManager_ExecuteScalarAsync_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.IConnectionManager.ExecuteScalarAsync(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalarAsync(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Executes a query asynchronously against the database that returns a single row in a single column.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Task<object> ExecuteScalarAsync(string command, IEnumerable<QueryParameter> parameterList = null)
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
        <td><span class="parametername">command</span></td>
        <td><p>The sql command</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td><p>The optional list of parameters</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1">Task</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
        <td><p>The result</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_Open_" data-uid="ETLBox.IConnectionManager.Open*"></a>
  <h4 id="ETLBox_IConnectionManager_Open" data-uid="ETLBox.IConnectionManager.Open">Open()</h4>
  <div class="markdown level1 summary"><p>Opens the connection to the database. Normally you don't have to do this on your own,
as all tasks and components will try to open a connection if no open connection is found.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Open()
```

{{< rawhtml >}}
  <a id="ETLBox_IConnectionManager_OpenAsync_" data-uid="ETLBox.IConnectionManager.OpenAsync*"></a>
  <h4 id="ETLBox_IConnectionManager_OpenAsync" data-uid="ETLBox.IConnectionManager.OpenAsync">OpenAsync()</h4>
  <div class="markdown level1 summary"><p>Opens the connection to the database asynchrously. Normally you don't have to do this on your own,
as all tasks and components will try to open a connection if no open connection is found.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Task OpenAsync()
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_PrepareBulkInsert_" data-uid="ETLBox.IConnectionManager.PrepareBulkInsert*"></a>
  <h4 id="ETLBox_IConnectionManager_PrepareBulkInsert_System_String_" data-uid="ETLBox.IConnectionManager.PrepareBulkInsert(System.String)">PrepareBulkInsert(string)</h4>
  <div class="markdown level1 summary"><p>Performs preparations needed to improved
performance of a bulk insert operation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void PrepareBulkInsert(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>Destination table name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IConnectionManager_RollbackTransaction_" data-uid="ETLBox.IConnectionManager.RollbackTransaction*"></a>
  <h4 id="ETLBox_IConnectionManager_RollbackTransaction" data-uid="ETLBox.IConnectionManager.RollbackTransaction">RollbackTransaction()</h4>
  <div class="markdown level1 summary"><p>Rolls the current transaction back.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void RollbackTransaction()
```

{{< rawhtml >}}
  <a id="ETLBox_IConnectionManager_SetValueToSqlConversionFunc_" data-uid="ETLBox.IConnectionManager.SetValueToSqlConversionFunc*"></a>
  <h4 id="ETLBox_IConnectionManager_SetValueToSqlConversionFunc_System_Func_ETLBox_Helper_ConversionContext_System_String__" data-uid="ETLBox.IConnectionManager.SetValueToSqlConversionFunc(System.Func{ETLBox.Helper.ConversionContext,System.String})">SetValueToSqlConversionFunc(Func&lt;ConversionContext, string&gt;)</h4>
  <div class="markdown level1 summary"><p>If sql is used to insert/update/delete data into the destination tables, the values are injected into the sql
via parameters. If a value to sql conversion func is set, the parameters are bypassed and the
sql can be influenced directly with this function.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void SetValueToSqlConversionFunc(Func<ConversionContext, string> valueToSqlConversionFunc)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="/api/etlbox.helper/conversioncontext">ConversionContext</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">valueToSqlConversionFunc</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
