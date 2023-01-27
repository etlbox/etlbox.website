---
title: "DropProcedureTask"
description: "Details for Class DropProcedureTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10062
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask">
  <h1 id="ETLBox_ControlFlow_Tasks_DropProcedureTask" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask" class="text-break">Class DropProcedureTask
</h1>
  <div class="markdown level0 summary"><p>Drops a procedure. Use DropIfExists to drop a procedure only if it exists.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/droptask-1">DropTask</a>&lt;<a class="xref" href="/api/etlbox.controlflow.tasks/ifprocedureexiststask">IfProcedureExistsTask</a>&gt;</div>
    <div class="level4"><span class="xref">DropProcedureTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_TaskName">DropTask&lt;IfProcedureExistsTask&gt;.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ObjectName">DropTask&lt;IfProcedureExistsTask&gt;.ObjectName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ON">DropTask&lt;IfProcedureExistsTask&gt;.ON</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Sql">DropTask&lt;IfProcedureExistsTask&gt;.Sql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Drop">DropTask&lt;IfProcedureExistsTask&gt;.Drop()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_DropIfExists">DropTask&lt;IfProcedureExistsTask&gt;.DropIfExists()</a>
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
  <h5 id="ETLBox_ControlFlow_Tasks_DropProcedureTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class DropProcedureTask : DropTask<IfProcedureExistsTask>, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Tasks_DropProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropProcedureTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.#ctor">DropProcedureTask()</h4>
  <div class="markdown level1 summary"><p>Drops a procedure. Use DropIfExists to drop a procedure only if it exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropProcedureTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_DropProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropProcedureTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.#ctor(System.String)">DropProcedureTask(String)</h4>
  <div class="markdown level1 summary"><p>Drops a procedure. Use DropIfExists to drop a procedure only if it exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropProcedureTask(string procedureName)
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
        <td><span class="parametername">procedureName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_Tasks_DropProcedureTask_Drop_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropProcedureTask_Drop_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.Drop(ETLBox.Connection.IConnectionManager,System.String)">Drop(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>Drops a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(IConnectionManager connectionManager, string procedureName)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>Name of the procedure to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropProcedureTask_Drop_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropProcedureTask_Drop_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.Drop(System.String)">Drop(String)</h4>
  <div class="markdown level1 summary"><p>Drops a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(string procedureName)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>Name of the procedure to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropProcedureTask_DropIfExists_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropProcedureTask_DropIfExists_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.DropIfExists(ETLBox.Connection.IConnectionManager,System.String)">DropIfExists(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>Drops a procedure if the procedure exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(IConnectionManager connectionManager, string procedureName)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>Name of the procedure to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropProcedureTask_DropIfExists_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropProcedureTask_DropIfExists_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropProcedureTask.DropIfExists(System.String)">DropIfExists(String)</h4>
  <div class="markdown level1 summary"><p>Drops a procedure if the procedure exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(string procedureName)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>Name of the procedure to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
