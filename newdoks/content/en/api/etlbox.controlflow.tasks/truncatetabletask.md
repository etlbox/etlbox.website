---
title: "TruncateTableTask"
description: "Details for Class TruncateTableTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10077
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask">
  <h1 id="ETLBox_ControlFlow_Tasks_TruncateTableTask" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask" class="text-break">Class TruncateTableTask
  </h1>
  <div class="markdown level0 summary"><p>Truncates a table.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">TruncateTableTask</span></div>
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
  <h5 id="ETLBox_ControlFlow_Tasks_TruncateTableTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class TruncateTableTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_TruncateTableTask_examples"><strong>Examples</strong></h5>
  <pre><code>TruncateTableTask.Truncate(&quot;demo.table1&quot;);</code></pre>
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_TruncateTableTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_TruncateTableTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.#ctor">TruncateTableTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TruncateTableTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_TruncateTableTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_TruncateTableTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.#ctor(System.String)">TruncateTableTask(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TruncateTableTask(string tableName)
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
        <td><p>Sets the <a class="xref" href="/api/etlbox.controlflow.tasks/truncatetabletask#ETLBox_ControlFlow_Tasks_TruncateTableTask_TableName">TableName</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_TruncateTableTask_Sql_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_TruncateTableTask_Sql" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>Sql code that is used when the task is executed.</p>
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
  <a id="ETLBox_ControlFlow_Tasks_TruncateTableTask_TableName_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.TableName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_TruncateTableTask_TableName" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>Name of the table that should be truncated</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TableName { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_TruncateTableTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_TruncateTableTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.TaskName">TaskName</h4>
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
  <a id="ETLBox_ControlFlow_Tasks_TruncateTableTask_TN_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.TN*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_TruncateTableTask_TN" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.TN">TN</h4>
  <div class="markdown level1 summary"><p>The formatted table table name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor TN { get; }
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
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_TruncateTableTask_Truncate_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.Truncate*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_TruncateTableTask_Truncate_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.Truncate(ETLBox.Connection.IConnectionManager,System.String)">Truncate(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>Execute a table truncation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Truncate(IConnectionManager connection, string tableName)
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
        <td><span class="parametername">connection</span></td>
        <td><p>Database connection manager to connect with the database</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>Table name that should be truncated</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_TruncateTableTask_Truncate_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.Truncate*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_TruncateTableTask_Truncate_System_String_" data-uid="ETLBox.ControlFlow.Tasks.TruncateTableTask.Truncate(System.String)">Truncate(String)</h4>
  <div class="markdown level1 summary"><p>Execute a table truncation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Truncate(string tableName)
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
        <td><p>Table that should be truncated</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
