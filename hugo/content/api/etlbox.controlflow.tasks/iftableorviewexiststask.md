---
title: "IfTableOrViewExistsTask"
description: "Details for Class IfTableOrViewExistsTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10072
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask">
  <h1 id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask" class="text-break">Class IfTableOrViewExistsTask
  </h1>
  <div class="markdown level0 summary"><p>Checks if a table exists.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/ifexiststask">IfExistsTask</a></div>
    <div class="level4"><span class="xref">IfTableOrViewExistsTask</span></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_TaskName">IfExistsTask.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_ObjectName">IfExistsTask.ObjectName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_ON">IfExistsTask.ON</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_OON">IfExistsTask.OON</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_DoesExist">IfExistsTask.DoesExist</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_Sql">IfExistsTask.Sql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_Exists">IfExistsTask.Exists()</a>
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
  <h5 id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class IfTableOrViewExistsTask : IfExistsTask, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.#ctor">IfTableOrViewExistsTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IfTableOrViewExistsTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask__ctor_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.#ctor(ETLBox.Connection.IConnectionManager,System.String)">IfTableOrViewExistsTask(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IfTableOrViewExistsTask(IConnectionManager connectionManager, string tableName)
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
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.#ctor(System.String)">IfTableOrViewExistsTask(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IfTableOrViewExistsTask(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask_IsExisting_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.IsExisting*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask_IsExisting_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.IsExisting(ETLBox.Connection.IConnectionManager,System.String)">IsExisting(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>??hecks if the table or view exists</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool IsExisting(IConnectionManager connectionManager, string objectName)
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
        <td><span class="parametername">objectName</span></td>
        <td><p>The table or view name that you want to check for existence</p>
</td>
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
        <td><p>True if the table or view exists</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask_IsExisting_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.IsExisting*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_IfTableOrViewExistsTask_IsExisting_System_String_" data-uid="ETLBox.ControlFlow.Tasks.IfTableOrViewExistsTask.IsExisting(System.String)">IsExisting(String)</h4>
  <div class="markdown level1 summary"><p>??hecks if the table or view exists</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool IsExisting(string objectName)
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
        <td><span class="parametername">objectName</span></td>
        <td><p>The table or view name that you want to check for existence</p>
</td>
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
        <td><p>True if the table or view exists</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
