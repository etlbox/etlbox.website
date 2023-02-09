---
title: "CleanUpSchemaTask"
description: "Details for Class CleanUpSchemaTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10053
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask">
  <h1 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask" class="text-break">Class CleanUpSchemaTask
</h1>
  <div class="markdown level0 summary"><p>Tries to remove all database objects from the given schema(s).
Currently only SqlServer and Oracle support this task.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CleanUpSchemaTask</span></div>
  </div>
  <div class="implements">
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
      <span class="xref">object.Equals(object)</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">object.GetType()</span>
    </div>
    <div>
      <span class="xref">object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">object.ReferenceEquals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.ControlFlow.Tasks</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CleanUpSchemaTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_examples"><strong>Examples</strong></h5>
  <pre><code>CleanUpSchemaTask.CleanUp(&quot;demo&quot;);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.#ctor">CleanUpSchemaTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CleanUpSchemaTask()
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask__ctor_examples">Examples</h5>
  <pre><code>CleanUpSchemaTask.CleanUp(&quot;demo&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.#ctor(System.String)">CleanUpSchemaTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CleanUpSchemaTask(string schemaName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">schemaName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask__ctor_System_String__examples">Examples</h5>
  <pre><code>CleanUpSchemaTask.CleanUp(&quot;demo&quot;);</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_SchemaName_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.SchemaName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_SchemaName" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.SchemaName">SchemaName</h4>
  <div class="markdown level1 summary"><p>The name of the schema</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_Sql_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_Sql" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql code that is used to clean up the schema.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_CleanUp_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.CleanUp*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_CleanUp" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.CleanUp">CleanUp()</h4>
  <div class="markdown level1 summary"><p>Runs the sql to clean up the user schema. (Oracle only)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CleanUp()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_CleanUp_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.CleanUp*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_CleanUp_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.CleanUp(ETLBox.Connection.IConnectionManager,System.String)">CleanUp(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Runs the sql to clean up a schema.(Oracle and SqlServer only)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CleanUp(IConnectionManager connectionManager, string schemaName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_CleanUp_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.CleanUp*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_CleanUp_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.CleanUp(ETLBox.Connection.IConnectionManager)">CleanUp(IConnectionManager)</h4>
  <div class="markdown level1 summary"><p>Runs the sql to clean up the user schema. (Oracle only)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CleanUp(IConnectionManager connectionManager)
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
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_CleanUp_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.CleanUp*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CleanUpSchemaTask_CleanUp_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CleanUpSchemaTask.CleanUp(System.String)">CleanUp(string)</h4>
  <div class="markdown level1 summary"><p>Runs the sql to clean up a schema. (Oracle and SqlServer only)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CleanUp(string schemaName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
