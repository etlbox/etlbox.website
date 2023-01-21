---
title: "CreateSchemaTask"
description: "Details for Class CreateSchemaTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10054
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask">
  <h1 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask" class="text-break">Class CreateSchemaTask
  </h1>
  <div class="markdown level0 summary"><p>Creates a schema. For MySql or MariaDb, use the CreateDatabaseTask instead.
The Create method will throw an exception if the schema already exists.
CreateIfNotExists will only create a schema if it doesn't exists.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CreateSchemaTask</span></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
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
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_CopyLogTaskProperties_ETLBox_ControlFlow_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow.Tasks</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CreateSchemaTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_examples"><strong>Examples</strong></h5>
  <pre><code>CreateSchemaTask.Create(&quot;demo&quot;);
CreateSchemaTask.CreateIfNotExists(&quot;demo2&quot;);</code></pre>
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.#ctor">CreateSchemaTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateSchemaTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.#ctor(System.String)">CreateSchemaTask(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateSchemaTask(string schemaName)
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
        <td><span class="parametername">schemaName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.#ctor(System.String,System.String)">CreateSchemaTask(String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateSchemaTask(string schemaName, string authorizationUser)
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
        <td><span class="parametername">schemaName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">authorizationUser</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_AuthorizationUser_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.AuthorizationUser*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_AuthorizationUser" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.AuthorizationUser">AuthorizationUser</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AuthorizationUser { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_ON_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.ON*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_ON" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.ON">ON</h4>
  <div class="markdown level1 summary"><p>The formatted schema name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor ON { get; }
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
        <td><a class="xref" href="/api/etlbox.helper/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_SchemaName_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.SchemaName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_SchemaName" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.SchemaName">SchemaName</h4>
  <div class="markdown level1 summary"><p>The name of the schema</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string SchemaName { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Sql_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Sql" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql that is used to create the schema.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Sql { get; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string TaskName { get; set; }
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
  <div><a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create">Create()</h4>
  <div class="markdown level1 summary"><p>Runs the sql that creates the schema. If the schema already exists, an Exception is thrown.
Works only if the database does support schema (for MySql, use the CreateDatabaseTask instead)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Create()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create(ETLBox.Connection.IConnectionManager,System.String)">Create(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>Creates a schema. Throws an exception if the schema already exists. For MySql, use the CreateDatabaseTask instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(IConnectionManager connectionManager, string schemaName)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create(ETLBox.Connection.IConnectionManager,System.String,System.String)">Create(IConnectionManager, String, String)</h4>
  <div class="markdown level1 summary"><p>Creates a schema. Throws an exception if the schema already exists. For MySql, use the CreateDatabaseTask instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(IConnectionManager connectionManager, string schemaName, string authorizationUser)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">authorizationUser</span></td>
        <td><p>Database user which is authorized for the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create(System.String)">Create(String)</h4>
  <div class="markdown level1 summary"><p>Creates a schema. Throws an exception if the schema already exists. For MySql, use the CreateDatabaseTask instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(string schemaName)
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
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_Create_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.Create(System.String,System.String)">Create(String, String)</h4>
  <div class="markdown level1 summary"><p>Creates a schema. Throws an exception if the schema already exists. For MySql, use the CreateDatabaseTask instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(string schemaName, string authorizationUser)
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
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">authorizationUser</span></td>
        <td><p>Database user which is authorized for the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists">CreateIfNotExists()</h4>
  <div class="markdown level1 summary"><p>Runs the sql that creates the schema. Schema is only created if the schema doesn't exists.
Works only if the database does support schema (for MySql, use the CreateDatabaseTask instead)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateIfNotExists()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists(ETLBox.Connection.IConnectionManager,System.String)">CreateIfNotExists(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>Creates a schema if the schema doesn't exists. For MySql, use the CreateDatabaseTask instead</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(IConnectionManager connectionManager, string schemaName)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists(ETLBox.Connection.IConnectionManager,System.String,System.String)">CreateIfNotExists(IConnectionManager, String, String)</h4>
  <div class="markdown level1 summary"><p>Creates a schema if the schema doesn't exists. For MySql, use the CreateDatabaseTask instead</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(IConnectionManager connectionManager, string schemaName, string authorizationUser)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">authorizationUser</span></td>
        <td><p>Database user which is authorized for the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists(System.String)">CreateIfNotExists(String)</h4>
  <div class="markdown level1 summary"><p>Creates a schema if the schema doesn't exists. For MySql, use the CreateDatabaseTask instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(string schemaName)
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
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateSchemaTask_CreateIfNotExists_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateSchemaTask.CreateIfNotExists(System.String,System.String)">CreateIfNotExists(String, String)</h4>
  <div class="markdown level1 summary"><p>Creates a schema if the schema doesn't exists. For MySql, use the CreateDatabaseTask instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(string schemaName, string authorizationUser)
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
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">authorizationUser</span></td>
        <td><p>Database user which is authorized for the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
