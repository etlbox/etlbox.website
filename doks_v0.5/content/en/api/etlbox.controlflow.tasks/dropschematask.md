---
title: "DropSchemaTask"
description: "Details for Class DropSchemaTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10063
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask">
  <h1 id="ETLBox_ControlFlow_Tasks_DropSchemaTask" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask" class="text-break">Class DropSchemaTask
</h1>
  <div class="markdown level0 summary"><p>Drops a schema. Use DropIfExists to drop a schema only if it exists. For MySql or MariaDb, use the DropDatabase task instead.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/droptask-1">DropTask</a>&lt;<a class="xref" href="/api/etlbox.controlflow.tasks/ifschemaexiststask">IfSchemaExistsTask</a>&gt;</div>
    <div class="level4"><span class="xref">DropSchemaTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_TaskName">DropTask&lt;IfSchemaExistsTask&gt;.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ObjectName">DropTask&lt;IfSchemaExistsTask&gt;.ObjectName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ON">DropTask&lt;IfSchemaExistsTask&gt;.ON</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Sql">DropTask&lt;IfSchemaExistsTask&gt;.Sql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Drop">DropTask&lt;IfSchemaExistsTask&gt;.Drop()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_DropIfExists">DropTask&lt;IfSchemaExistsTask&gt;.DropIfExists()</a>
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
  <h5 id="ETLBox_ControlFlow_Tasks_DropSchemaTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class DropSchemaTask : DropTask<IfSchemaExistsTask>, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Tasks_DropSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropSchemaTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.#ctor">DropSchemaTask()</h4>
  <div class="markdown level1 summary"><p>Drops a schema. Use DropIfExists to drop a schema only if it exists. For MySql or MariaDb, use the DropDatabase task instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropSchemaTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_DropSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropSchemaTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.#ctor(System.String)">DropSchemaTask(String)</h4>
  <div class="markdown level1 summary"><p>Drops a schema. Use DropIfExists to drop a schema only if it exists. For MySql or MariaDb, use the DropDatabase task instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropSchemaTask(string schemaName)
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_Tasks_DropSchemaTask_Drop_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropSchemaTask_Drop_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.Drop(ETLBox.Connection.IConnectionManager,System.String)">Drop(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>Drops a schema. For MySql, use the DropDatabase task instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(IConnectionManager connectionManager, string schemaName)
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
        <td><p>Name of the schema to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropSchemaTask_Drop_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropSchemaTask_Drop_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.Drop(System.String)">Drop(String)</h4>
  <div class="markdown level1 summary"><p>Drops a schema. For MySql, use the DropDatabase task instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(string schemaName)
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
        <td><p>Name of the schema to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropSchemaTask_DropIfExists_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropSchemaTask_DropIfExists_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.DropIfExists(ETLBox.Connection.IConnectionManager,System.String)">DropIfExists(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>Drops a schema if the schema exists. For MySql, use the DropDatabase task instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(IConnectionManager connectionManager, string schemaName)
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
        <td><p>Name of the schema to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropSchemaTask_DropIfExists_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropSchemaTask_DropIfExists_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropSchemaTask.DropIfExists(System.String)">DropIfExists(String)</h4>
  <div class="markdown level1 summary"><p>Drops a schema if the schema exists. For MySql, use the DropDatabase task instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(string schemaName)
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
        <td><p>Name of the schema to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
