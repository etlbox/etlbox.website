---
title: "DropIndexTask"
description: "Details for Class DropIndexTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10058
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask">
  <h1 id="ETLBox_ControlFlow_Tasks_DropIndexTask" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask" class="text-break">Class DropIndexTask
  </h1>
  <div class="markdown level0 summary"><p>Drops an index. Use DropIfExists to drop an index only if it exists.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/droptask-1">DropTask</a>&lt;<a class="xref" href="/api/etlbox.controlflow.tasks/ifindexexiststask">IfIndexExistsTask</a>&gt;</div>
    <div class="level4"><span class="xref">DropIndexTask</span></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/droptask-1#ETLBox_ControlFlow_DropTask_1_TaskName">DropTask&lt;IfIndexExistsTask&gt;.TaskName</a>
    </div>
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
  <h5 id="ETLBox_ControlFlow_Tasks_DropIndexTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class DropIndexTask : DropTask<IfIndexExistsTask>, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_DropIndexTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropIndexTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.#ctor">DropIndexTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropIndexTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_DropIndexTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropIndexTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.#ctor(System.String,System.String)">DropIndexTask(String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DropIndexTask(string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_DropIndexTask_TableName_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.TableName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropIndexTask_TableName" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>The table name on which the index is based on.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TableName { get; }
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
  <a id="ETLBox_ControlFlow_Tasks_DropIndexTask_TN_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.TN*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropIndexTask_TN" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.TN">TN</h4>
  <div class="markdown level1 summary"><p>The formatted table name on which the index is based on.</p>
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
  <a id="ETLBox_ControlFlow_Tasks_DropIndexTask_Drop_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropIndexTask_Drop_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.Drop(ETLBox.Connection.IConnectionManager,System.String,System.String)">Drop(IConnectionManager, String, String)</h4>
  <div class="markdown level1 summary"><p>Drops an index.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(IConnectionManager connectionManager, string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The index name to drop.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The table name the index is based on.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropIndexTask_Drop_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.Drop*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropIndexTask_Drop_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.Drop(System.String,System.String)">Drop(String, String)</h4>
  <div class="markdown level1 summary"><p>Drops an index.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Drop(string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The index name to drop.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The table name the index is based on.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropIndexTask_DropIfExists_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropIndexTask_DropIfExists_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.DropIfExists(ETLBox.Connection.IConnectionManager,System.String,System.String)">DropIfExists(IConnectionManager, String, String)</h4>
  <div class="markdown level1 summary"><p>Drops an index if the index exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(IConnectionManager connectionManager, string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The index name to drop.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The table name the index is based on.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_DropIndexTask_DropIfExists_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.DropIfExists*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_DropIndexTask_DropIfExists_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.DropIndexTask.DropIfExists(System.String,System.String)">DropIfExists(String, String)</h4>
  <div class="markdown level1 summary"><p>Drops an index if the index exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropIfExists(string indexName, string tableName)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The index name to drop.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The table name the index is based on.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
