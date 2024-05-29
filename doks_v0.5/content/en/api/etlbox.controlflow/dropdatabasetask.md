---
title: "DropDatabaseTask"
description: "Details for Class DropDatabaseTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10056
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.DropDatabaseTask">
  <h1 id="ETLBox_ControlFlow_DropDatabaseTask" data-uid="ETLBox.ControlFlow.DropDatabaseTask" class="text-break">Class DropDatabaseTask
</h1>
  <div class="markdown level0 summary"><p>Drops a database. Use DropIfExists to drop a database only if it exists. In MySql, this will drop a schema.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/droptask-1">DropTask</a>&lt;<a class="xref" href="/api/etlbox.controlflow/ifdatabaseexiststask">IfDatabaseExistsTask</a>&gt;</div>
    <div class="level4"><span class="xref">DropDatabaseTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ObjectName">DropTask&lt;IfDatabaseExistsTask&gt;.ObjectName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ON">DropTask&lt;IfDatabaseExistsTask&gt;.ON</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Sql">DropTask&lt;IfDatabaseExistsTask&gt;.Sql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Drop">DropTask&lt;IfDatabaseExistsTask&gt;.Drop()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_DropIfExists">DropTask&lt;IfDatabaseExistsTask&gt;.DropIfExists()</a>
    </div>
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
  <h5 id="ETLBox_ControlFlow_DropDatabaseTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class DropDatabaseTask : DropTask<IfDatabaseExistsTask>, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_DropDatabaseTask_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">DropDatabaseTask.Delete("DemoDB");</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_DropDatabaseTask__ctor_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DropDatabaseTask__ctor" data-uid="ETLBox.ControlFlow.DropDatabaseTask.#ctor">DropDatabaseTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropDatabaseTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_DropDatabaseTask__ctor_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DropDatabaseTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.#ctor(System.String)">DropDatabaseTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropDatabaseTask(string databaseName)
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_DropDatabaseTask_Drop_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_DropDatabaseTask_Drop_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.Drop(ETLBox.IConnectionManager,System.String)">Drop(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Drops a database. In MySql, this will drop a schema.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(IConnectionManager connectionManager, string databaseName)
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
        <td><p>Name of the database (MySql: schema) to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropDatabaseTask_Drop_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_DropDatabaseTask_Drop_System_String_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.Drop(System.String)">Drop(string)</h4>
  <div class="markdown level1 summary"><p>Drops a database. In MySql, this will drop a schema.
Make sure that your default connection string points to the server itself and to an existing database (e.g. a system database).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(string databaseName)
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
        <td><p>Name of the database (MySql: schema) to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropDatabaseTask_DropIfExists_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_DropDatabaseTask_DropIfExists_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.DropIfExists(ETLBox.IConnectionManager,System.String)">DropIfExists(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Drops a database if the database exists. In MySql, this will drop a schema.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(IConnectionManager connectionManager, string databaseName)
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
        <td><p>Name of the database (MySql: schema) to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropDatabaseTask_DropIfExists_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_DropDatabaseTask_DropIfExists_System_String_" data-uid="ETLBox.ControlFlow.DropDatabaseTask.DropIfExists(System.String)">DropIfExists(string)</h4>
  <div class="markdown level1 summary"><p>Drops a database if the database exists. In MySql, this will drop a schema.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(string databaseName)
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
        <td><p>Name of the database (MySql: schema) to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
