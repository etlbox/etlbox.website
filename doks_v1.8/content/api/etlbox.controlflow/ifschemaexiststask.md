---
title: "IfSchemaExistsTask"
description: "Details for Class IfSchemaExistsTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10065
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask">
  <h1 id="ETLBox_ControlFlow_IfSchemaExistsTask" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask" class="text-break">Class IfSchemaExistsTask</h1>
  <div class="markdown level0 summary"><p>Checks if a schema exists. In MySql or MariaDb, use the IfDatabaseExistsTask instead.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/ifexiststask">IfExistsTask</a></div>
    <div class="level4"><span class="xref">IfSchemaExistsTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_HasSchema">IfExistsTask.HasSchema()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_ObjectName">IfExistsTask.ObjectName</a>
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
  <h5 id="ETLBox_ControlFlow_IfSchemaExistsTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class IfSchemaExistsTask : IfExistsTask, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_IfSchemaExistsTask__ctor_" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_IfSchemaExistsTask__ctor" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.#ctor">IfSchemaExistsTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IfSchemaExistsTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_IfSchemaExistsTask__ctor_" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_IfSchemaExistsTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.#ctor(System.String)">IfSchemaExistsTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IfSchemaExistsTask(string schemaName)
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
  <a id="ETLBox_ControlFlow_IfSchemaExistsTask_ON_" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.ON*"></a>
  <h4 id="ETLBox_ControlFlow_IfSchemaExistsTask_ON" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.ON">ON</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override ObjectNameDescriptor ON { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.controlflow/ifexiststask#ETLBox_ControlFlow_IfExistsTask_ON">IfExistsTask.ON</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_IfSchemaExistsTask_IsExisting_" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.IsExisting*"></a>
  <h4 id="ETLBox_ControlFlow_IfSchemaExistsTask_IsExisting_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.IsExisting(ETLBox.IConnectionManager,System.String)">IsExisting(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"><p>Ćhecks if the schema exists</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool IsExisting(IConnectionManager connectionManager, string schemaName)
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
        <td><p>The schema name that you want to check for existence</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><p>True if the schema exists</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_IfSchemaExistsTask_IsExisting_" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.IsExisting*"></a>
  <h4 id="ETLBox_ControlFlow_IfSchemaExistsTask_IsExisting_System_String_" data-uid="ETLBox.ControlFlow.IfSchemaExistsTask.IsExisting(System.String)">IsExisting(string)</h4>
  <div class="markdown level1 summary"><p>Ćhecks if the schema exists</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool IsExisting(string schemaName)
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
        <td><p>The schema name that you want to check for existence</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><p>True if the schema exists</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
