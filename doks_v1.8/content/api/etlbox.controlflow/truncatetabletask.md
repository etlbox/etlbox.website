---
title: "TruncateTableTask"
description: "Details for Class TruncateTableTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10079
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.TruncateTableTask">
  <h1 id="ETLBox_ControlFlow_TruncateTableTask" data-uid="ETLBox.ControlFlow.TruncateTableTask" class="text-break">Class TruncateTableTask</h1>
  <div class="markdown level0 summary"><p>Truncates a table.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">TruncateTableTask</span></div>
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
  <h5 id="ETLBox_ControlFlow_TruncateTableTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class TruncateTableTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_TruncateTableTask_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">TruncateTableTask.Truncate("demo.table1");</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_TruncateTableTask__ctor_" data-uid="ETLBox.ControlFlow.TruncateTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TruncateTableTask__ctor" data-uid="ETLBox.ControlFlow.TruncateTableTask.#ctor">TruncateTableTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TruncateTableTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_TruncateTableTask__ctor_" data-uid="ETLBox.ControlFlow.TruncateTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TruncateTableTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.TruncateTableTask.#ctor(System.String)">TruncateTableTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TruncateTableTask(string tableName)
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
        <td><p>Sets the <a class="xref" href="/api/etlbox.controlflow/truncatetabletask#ETLBox_ControlFlow_TruncateTableTask_TableName">TableName</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_TruncateTableTask_Sql_" data-uid="ETLBox.ControlFlow.TruncateTableTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_TruncateTableTask_Sql" data-uid="ETLBox.ControlFlow.TruncateTableTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>Sql code that is used when the task is executed.</p>
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
  <a id="ETLBox_ControlFlow_TruncateTableTask_TN_" data-uid="ETLBox.ControlFlow.TruncateTableTask.TN*"></a>
  <h4 id="ETLBox_ControlFlow_TruncateTableTask_TN" data-uid="ETLBox.ControlFlow.TruncateTableTask.TN">TN</h4>
  <div class="markdown level1 summary"><p>The formatted table table name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor TN { get; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TruncateTableTask_TableName_" data-uid="ETLBox.ControlFlow.TruncateTableTask.TableName*"></a>
  <h4 id="ETLBox_ControlFlow_TruncateTableTask_TableName" data-uid="ETLBox.ControlFlow.TruncateTableTask.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>Name of the table that should be truncated</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TableName { get; set; }
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
  <a id="ETLBox_ControlFlow_TruncateTableTask_Truncate_" data-uid="ETLBox.ControlFlow.TruncateTableTask.Truncate*"></a>
  <h4 id="ETLBox_ControlFlow_TruncateTableTask_Truncate_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.TruncateTableTask.Truncate(ETLBox.IConnectionManager,System.String)">Truncate(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Execute a table truncation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Truncate(IConnectionManager connection, string tableName)
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
        <td><span class="parametername">connection</span></td>
        <td><p>Database connection manager to connect with the database</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>Table name that should be truncated</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TruncateTableTask_Truncate_" data-uid="ETLBox.ControlFlow.TruncateTableTask.Truncate*"></a>
  <h4 id="ETLBox_ControlFlow_TruncateTableTask_Truncate_System_String_" data-uid="ETLBox.ControlFlow.TruncateTableTask.Truncate(System.String)">Truncate(string)</h4>
  <div class="markdown level1 summary"><p>Execute a table truncation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Truncate(string tableName)
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
        <td><p>Table that should be truncated</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TruncateTableTask_TruncateAsync_" data-uid="ETLBox.ControlFlow.TruncateTableTask.TruncateAsync*"></a>
  <h4 id="ETLBox_ControlFlow_TruncateTableTask_TruncateAsync_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.TruncateTableTask.TruncateAsync(ETLBox.IConnectionManager,System.String)">TruncateAsync(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void TruncateAsync(IConnectionManager connection, string tableName)
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
        <td><span class="parametername">connection</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
