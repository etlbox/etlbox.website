---
title: "GetDatabaseListTask"
description: "Details for Class GetDatabaseListTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10066
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask">
  <h1 id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask" class="text-break">Class GetDatabaseListTask
</h1>
  <div class="markdown level0 summary"><p>Returns a list of all user databases on the server. Make sure to connect with the correct permissions!
In MySql, this will return a list of all schemas.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/getlisttask">GetListTask</a></div>
    <div class="level4"><span class="xref">GetDatabaseListTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow.tasks/getlisttask#ETLBox_ControlFlow_Tasks_GetListTask_ObjectNames">GetListTask.ObjectNames</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow.tasks/getlisttask#ETLBox_ControlFlow_Tasks_GetListTask_RetrieveAll">GetListTask.RetrieveAll()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow.tasks/getlisttask#ETLBox_ControlFlow_Tasks_GetListTask_Sql">GetListTask.Sql</a>
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
  <h5 id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class GetDatabaseListTask : GetListTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask_examples"><strong>Examples</strong></h5>
  <pre><code>GetDatabaseListTask.List();</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask.#ctor">GetDatabaseListTask()</h4>
  <div class="markdown level1 summary"><p>Returns a list of all user databases on the server. Make sure to connect with the correct permissions!
In MySql, this will return a list of all schemas.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public GetDatabaseListTask()
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask__ctor_examples">Examples</h5>
  <pre><code>GetDatabaseListTask.List();</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>Returns a list of all user databases on the server. Make sure to connect with the correct permissions!
In MySql, this will return a list of all schemas.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <div><a class="xref" href="/api/etlbox.controlflow.tasks/getlisttask#ETLBox_ControlFlow_Tasks_GetListTask_TaskName">GetListTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask_ListAll_" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask.ListAll*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask_ListAll" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask.ListAll">ListAll()</h4>
  <div class="markdown level1 summary"><p>Runs sql code to determine all user database names.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<ObjectNameDescriptor> ListAll()
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.helper/objectnamedescriptor">ObjectNameDescriptor</a>&gt;</td>
        <td><p>A list of all user database names</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask_ListAll_" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask.ListAll*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_GetDatabaseListTask_ListAll_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.ControlFlow.Tasks.GetDatabaseListTask.ListAll(ETLBox.Connection.IConnectionManager)">ListAll(IConnectionManager)</h4>
  <div class="markdown level1 summary"><p>Runs sql code to determine all user database names.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<ObjectNameDescriptor> ListAll(IConnectionManager connectionManager)
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
        <td><p>The connection manager of the server you want to connect</p>
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.helper/objectnamedescriptor">ObjectNameDescriptor</a>&gt;</td>
        <td><p>A list of all user database names</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
