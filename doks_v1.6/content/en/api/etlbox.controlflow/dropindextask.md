---
title: "DropIndexTask"
description: "Details for Class DropIndexTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10057
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.DropIndexTask">
  <h1 id="ETLBox_ControlFlow_DropIndexTask" data-uid="ETLBox.ControlFlow.DropIndexTask" class="text-break">Class DropIndexTask
</h1>
  <div class="markdown level0 summary"><p>Drops an index. Use DropIfExists to drop an index only if it exists.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/droptask-1">DropTask</a>&lt;<a class="xref" href="/api/etlbox.controlflow/ifindexexiststask">IfIndexExistsTask</a>&gt;</div>
    <div class="level4"><span class="xref">DropIndexTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ObjectName">DropTask&lt;IfIndexExistsTask&gt;.ObjectName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_ON">DropTask&lt;IfIndexExistsTask&gt;.ON</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Sql">DropTask&lt;IfIndexExistsTask&gt;.Sql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_Drop">DropTask&lt;IfIndexExistsTask&gt;.Drop()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_DropIfExists">DropTask&lt;IfIndexExistsTask&gt;.DropIfExists()</a>
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
  <h5 id="ETLBox_ControlFlow_DropIndexTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class DropIndexTask : DropTask<IfIndexExistsTask>, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_DropIndexTask__ctor_" data-uid="ETLBox.ControlFlow.DropIndexTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DropIndexTask__ctor" data-uid="ETLBox.ControlFlow.DropIndexTask.#ctor">DropIndexTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropIndexTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_DropIndexTask__ctor_" data-uid="ETLBox.ControlFlow.DropIndexTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DropIndexTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.DropIndexTask.#ctor(System.String,System.String)">DropIndexTask(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropIndexTask(string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_DropIndexTask_TN_" data-uid="ETLBox.ControlFlow.DropIndexTask.TN*"></a>
  <h4 id="ETLBox_ControlFlow_DropIndexTask_TN" data-uid="ETLBox.ControlFlow.DropIndexTask.TN">TN</h4>
  <div class="markdown level1 summary"><p>The formatted table name on which the index is based on.</p>
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
  <a id="ETLBox_ControlFlow_DropIndexTask_TableName_" data-uid="ETLBox.ControlFlow.DropIndexTask.TableName*"></a>
  <h4 id="ETLBox_ControlFlow_DropIndexTask_TableName" data-uid="ETLBox.ControlFlow.DropIndexTask.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>The table name on which the index is based on.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TableName { get; }
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
  <a id="ETLBox_ControlFlow_DropIndexTask_Drop_" data-uid="ETLBox.ControlFlow.DropIndexTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_DropIndexTask_Drop_ETLBox_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.DropIndexTask.Drop(ETLBox.IConnectionManager,System.String,System.String)">Drop(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"><p>Drops an index.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(IConnectionManager connectionManager, string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The index name to drop.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The table name the index is based on.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropIndexTask_Drop_" data-uid="ETLBox.ControlFlow.DropIndexTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_DropIndexTask_Drop_System_String_System_String_" data-uid="ETLBox.ControlFlow.DropIndexTask.Drop(System.String,System.String)">Drop(string, string)</h4>
  <div class="markdown level1 summary"><p>Drops an index.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The index name to drop.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The table name the index is based on.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropIndexTask_DropIfExists_" data-uid="ETLBox.ControlFlow.DropIndexTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_DropIndexTask_DropIfExists_ETLBox_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.DropIndexTask.DropIfExists(ETLBox.IConnectionManager,System.String,System.String)">DropIfExists(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"><p>Drops an index if the index exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(IConnectionManager connectionManager, string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The index name to drop.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The table name the index is based on.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DropIndexTask_DropIfExists_" data-uid="ETLBox.ControlFlow.DropIndexTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_DropIndexTask_DropIfExists_System_String_System_String_" data-uid="ETLBox.ControlFlow.DropIndexTask.DropIfExists(System.String,System.String)">DropIfExists(string, string)</h4>
  <div class="markdown level1 summary"><p>Drops an index if the index exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The index name to drop.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The table name the index is based on.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
