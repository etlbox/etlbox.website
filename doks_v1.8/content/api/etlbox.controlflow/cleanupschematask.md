---
title: "CleanUpSchemaTask"
description: "Details for Class CleanUpSchemaTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10039
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask">
  <h1 id="ETLBox_ControlFlow_CleanUpSchemaTask" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask" class="text-break">Class CleanUpSchemaTask</h1>
  <div class="markdown level0 summary"><p>Tries to remove all database objects from the given schema(s).
Currently only SqlServer and Oracle support this task.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CleanUpSchemaTask</span></div>
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
  <h5 id="ETLBox_ControlFlow_CleanUpSchemaTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CleanUpSchemaTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_CleanUpSchemaTask_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">CleanUpSchemaTask.CleanUp("demo");</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_CleanUpSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CleanUpSchemaTask__ctor" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.#ctor">CleanUpSchemaTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CleanUpSchemaTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CleanUpSchemaTask__ctor_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CleanUpSchemaTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.#ctor(System.String)">CleanUpSchemaTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CleanUpSchemaTask(string schemaName)
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
        <td><span class="parametername">schemaName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_CleanUpSchemaTask_SchemaName_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.SchemaName*"></a>
  <h4 id="ETLBox_ControlFlow_CleanUpSchemaTask_SchemaName" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.SchemaName">SchemaName</h4>
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
  <a id="ETLBox_ControlFlow_CleanUpSchemaTask_Sql_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_CleanUpSchemaTask_Sql" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.Sql">Sql</h4>
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
  <a id="ETLBox_ControlFlow_CleanUpSchemaTask_CleanUp_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.CleanUp*"></a>
  <h4 id="ETLBox_ControlFlow_CleanUpSchemaTask_CleanUp" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.CleanUp">CleanUp()</h4>
  <div class="markdown level1 summary"><p>Runs the sql to clean up the user schema. (Oracle only)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CleanUp()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CleanUpSchemaTask_CleanUp_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.CleanUp*"></a>
  <h4 id="ETLBox_ControlFlow_CleanUpSchemaTask_CleanUp_ETLBox_IConnectionManager_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.CleanUp(ETLBox.IConnectionManager)">CleanUp(IConnectionManager)</h4>
  <div class="markdown level1 summary"><p>Runs the sql to clean up the user schema.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CleanUp(IConnectionManager connectionManager)
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
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CleanUpSchemaTask_CleanUp_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.CleanUp*"></a>
  <h4 id="ETLBox_ControlFlow_CleanUpSchemaTask_CleanUp_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.CleanUp(ETLBox.IConnectionManager,System.String)">CleanUp(IConnectionManager, string)</h4>
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
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CleanUpSchemaTask_CleanUp_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.CleanUp*"></a>
  <h4 id="ETLBox_ControlFlow_CleanUpSchemaTask_CleanUp_System_String_" data-uid="ETLBox.ControlFlow.CleanUpSchemaTask.CleanUp(System.String)">CleanUp(string)</h4>
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
        <td><span class="parametername">schemaName</span></td>
        <td><p>The name of the schema</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
