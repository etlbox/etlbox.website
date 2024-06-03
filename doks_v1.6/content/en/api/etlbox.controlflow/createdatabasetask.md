---
title: "CreateDatabaseTask"
description: "Details for Class CreateDatabaseTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10049
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.CreateDatabaseTask">
  <h1 id="ETLBox_ControlFlow_CreateDatabaseTask" data-uid="ETLBox.ControlFlow.CreateDatabaseTask" class="text-break">Class CreateDatabaseTask
</h1>
  <div class="markdown level0 summary"><p>Will create a database if the database doesn't exists. In MySql or MariaDb, this will create a schema.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CreateDatabaseTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/controlflowtask#ETLBox_ControlFlow_ControlFlowTask_ConnectionManager">ControlFlowTask.ConnectionManager</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/controlflowtask#ETLBox_ControlFlow_ControlFlowTask_ConnectionType">ControlFlowTask.ConnectionType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/controlflowtask#ETLBox_ControlFlow_ControlFlowTask_QB">ControlFlowTask.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/controlflowtask#ETLBox_ControlFlow_ControlFlowTask_QE">ControlFlowTask.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskName">LoggableTask.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogThreshold">LoggableTask.LogThreshold</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInstance">LoggableTask.LogInstance</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_ParentTask">LoggableTask.ParentTask</a>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_CreateDatabaseTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CreateDatabaseTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_CreateDatabaseTask_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">CreateDatabaseTask.Create("DemoDB");</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask__ctor_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask__ctor" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.#ctor">CreateDatabaseTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateDatabaseTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateDatabaseTask__ctor_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.#ctor(System.String)">CreateDatabaseTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateDatabaseTask(string databaseName)
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
        <td><span class="parametername">databaseName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask__ctor_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.#ctor(System.String,System.String)">CreateDatabaseTask(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateDatabaseTask(string databaseName, string collation)
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
        <td><span class="parametername">databaseName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">collation</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_Collation_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Collation*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_Collation" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Collation">Collation</h4>
  <div class="markdown level1 summary"><p>The default collation for the database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Collation { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_ON_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.ON*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_ON" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.ON">ON</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor ON { get; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_ObjectName_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.ObjectName*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_ObjectName" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.ObjectName">ObjectName</h4>
  <div class="markdown level1 summary"><p>The name of the database (In MySql: The schema name)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ObjectName { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_RecoveryModel_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.RecoveryModel*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_RecoveryModel" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.RecoveryModel">RecoveryModel</h4>
  <div class="markdown level1 summary"><p>Sql Server only: The recovery model of the database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RecoveryModel RecoveryModel { get; set; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/recoverymodel">RecoveryModel</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_Sql_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_Sql" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql code that is used to generate the database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Sql { get; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_Create_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_Create" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create">Create()</h4>
  <div class="markdown level1 summary"><p>Runs the sql code to create the database.
Throws an exception if the database already exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Create()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_Create_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_Create_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create(ETLBox.IConnectionManager,System.String)">Create(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Creates a database. In MySql or MariaDb, this will create a schema.
Will throw an exception if the database already exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(IConnectionManager connectionManager, string databaseName)
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td><p>The connection manager of the server you want to connect. Make sure this points to a database
that does exist (e.g. a system database)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">databaseName</span></td>
        <td><p>The name of the database</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_Create_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_Create_ETLBox_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create(ETLBox.IConnectionManager,System.String,System.String)">Create(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"><p>Creates a database. In MySql or MariaDb, this will create a schema.
Will throw an exception if the database already exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(IConnectionManager connectionManager, string databaseName, string collation)
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td><p>The connection manager of the server you want to connect. Make sure this points to a database
that does exist (e.g. a system database)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">databaseName</span></td>
        <td><p>The name of the database</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">collation</span></td>
        <td><p>The default collation of the database.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_Create_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_Create_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create(System.String)">Create(string)</h4>
  <div class="markdown level1 summary"><p>Creates a database. In MySql or MariaDb, this will create a schema.
Will throw an exception if the database already exists.
Make sure that your default connection string points to the server itself and to an existing database (e.g. a system database).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(string databaseName)
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
        <td><span class="parametername">databaseName</span></td>
        <td><p>The name of the database</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_Create_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_Create_System_String_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.Create(System.String,System.String)">Create(string, string)</h4>
  <div class="markdown level1 summary"><p>Creates a database. In MySql or MariaDb, this will create a schema.
Will throw an exception if the database already exists.
Make sure that your default connection string points to the server itself and to an existing database (e.g. a system database).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(string databaseName, string collation)
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
        <td><span class="parametername">databaseName</span></td>
        <td><p>The name of the database</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">collation</span></td>
        <td><p>The default collation of the database.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists">CreateIfNotExists()</h4>
  <div class="markdown level1 summary"><p>Runs the sql code to create the database if the database doesn't exist yet.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateIfNotExists()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists(ETLBox.IConnectionManager,System.String)">CreateIfNotExists(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Creates a database if the database doesn't exists. In MySql or MariaDb, this will create a schema.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(IConnectionManager connectionManager, string databaseName)
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td><p>The connection manager of the server you want to connect. Make sure this points to a database
that does exist (e.g. a system database)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">databaseName</span></td>
        <td><p>The name of the database</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_ETLBox_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists(ETLBox.IConnectionManager,System.String,System.String)">CreateIfNotExists(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"><p>Creates a database if the database doesn't exists. In MySql or MariaDb, this will create a schema.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(IConnectionManager connectionManager, string databaseName, string collation)
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td><p>The connection manager of the server you want to connect. Make sure this points to a database
that does exist (e.g. a system database)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">databaseName</span></td>
        <td><p>The name of the database</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">collation</span></td>
        <td><p>The default collation of the database.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists(System.String)">CreateIfNotExists(string)</h4>
  <div class="markdown level1 summary"><p>Creates a database if the database doesn't exists. In MySql or MariaDb, this will create a schema.
Make sure that your default connection string points to the server itself and to an existing database (e.g. a system database).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(string databaseName)
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
        <td><span class="parametername">databaseName</span></td>
        <td><p>The name of the database</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateDatabaseTask_CreateIfNotExists_System_String_System_String_" data-uid="ETLBox.ControlFlow.CreateDatabaseTask.CreateIfNotExists(System.String,System.String)">CreateIfNotExists(string, string)</h4>
  <div class="markdown level1 summary"><p>Creates a database if the database doesn't exists. In MySql or MariaDb, this will create a schema.
Make sure that your default connection string points to the server itself and to an existing database (e.g. a system database).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(string databaseName, string collation)
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
        <td><span class="parametername">databaseName</span></td>
        <td><p>The name of the database</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">collation</span></td>
        <td><p>The default collation of the database.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
