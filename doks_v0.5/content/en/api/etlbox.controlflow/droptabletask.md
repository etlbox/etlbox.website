---
title: "DropTableTask"
description: "Details for Class DropTableTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10042
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.DropTableTask">
  <h1 id="ETLBox_ControlFlow_DropTableTask" data-uid="ETLBox.ControlFlow.DropTableTask" class="text-break">Class DropTableTask
</h1>
  <div class="markdown level0 summary"><p>Drops a table. Use DropIfExists to drop a table only if it exists.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/droptask-1">DropTask</a>&lt;<a class="xref" href="/api/etlbox.controlflow/iftableorviewexiststask">IfTableOrViewExistsTask</a>&gt;</div>
    <div class="level4"><span class="xref">DropTableTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_TaskName">DropTask&lt;IfTableOrViewExistsTask&gt;.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ObjectName">DropTask&lt;IfTableOrViewExistsTask&gt;.ObjectName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ON">DropTask&lt;IfTableOrViewExistsTask&gt;.ON</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Sql">DropTask&lt;IfTableOrViewExistsTask&gt;.Sql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Drop">DropTask&lt;IfTableOrViewExistsTask&gt;.Drop()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_DropIfExists">DropTask&lt;IfTableOrViewExistsTask&gt;.DropIfExists()</a>
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
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_CopyLogTaskProperties_ETLBox_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
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
  <h5 id="ETLBox_ControlFlow_DropTableTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class DropTableTask : DropTask<IfTableOrViewExistsTask>, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_DropTableTask__ctor_" data-uid="ETLBox.ControlFlow.DropTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DropTableTask__ctor" data-uid="ETLBox.ControlFlow.DropTableTask.#ctor">DropTableTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropTableTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_DropTableTask__ctor_" data-uid="ETLBox.ControlFlow.DropTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DropTableTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.DropTableTask.#ctor(System.String)">DropTableTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropTableTask(string tableName)
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_DropTableTask_Drop_" data-uid="ETLBox.ControlFlow.DropTableTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_DropTableTask_Drop_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.DropTableTask.Drop(ETLBox.IConnectionManager,System.String)">Drop(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Drops a table.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(IConnectionManager connectionManager, string tableName)
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
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>Name of the table to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropTableTask_Drop_" data-uid="ETLBox.ControlFlow.DropTableTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_DropTableTask_Drop_System_String_" data-uid="ETLBox.ControlFlow.DropTableTask.Drop(System.String)">Drop(string)</h4>
  <div class="markdown level1 summary"><p>Drops a table.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(string tableName)
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
        <td><p>Name of the table to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropTableTask_DropIfExists_" data-uid="ETLBox.ControlFlow.DropTableTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_DropTableTask_DropIfExists_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.DropTableTask.DropIfExists(ETLBox.IConnectionManager,System.String)">DropIfExists(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Drops a table if the table exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(IConnectionManager connectionManager, string tableName)
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
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>Name of the table to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropTableTask_DropIfExists_" data-uid="ETLBox.ControlFlow.DropTableTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_DropTableTask_DropIfExists_System_String_" data-uid="ETLBox.ControlFlow.DropTableTask.DropIfExists(System.String)">DropIfExists(string)</h4>
  <div class="markdown level1 summary"><p>Drops a table if the table exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(string tableName)
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
        <td><p>Name of the table to drop</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
