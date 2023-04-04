---
title: "CreateErrorTableTask"
description: "Details for Class CreateErrorTableTask (ETLBox.Logging)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.logging"
weight: 10278
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Logging.CreateErrorTableTask">
  <h1 id="ETLBox_Logging_CreateErrorTableTask" data-uid="ETLBox.Logging.CreateErrorTableTask" class="text-break">Class CreateErrorTableTask
</h1>
  <div class="markdown level0 summary"><p>This task will create a table that can store exceptions (and information about the affected records)
that occur during a data flow execution</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CreateErrorTableTask</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Logging</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Logging_CreateErrorTableTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CreateErrorTableTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Logging_CreateErrorTableTask__ctor_" data-uid="ETLBox.Logging.CreateErrorTableTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask__ctor" data-uid="ETLBox.Logging.CreateErrorTableTask.#ctor">CreateErrorTableTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateErrorTableTask()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_CreateErrorTableTask__ctor_" data-uid="ETLBox.Logging.CreateErrorTableTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask__ctor_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.Logging.CreateErrorTableTask.#ctor(ETLBox.Connection.IConnectionManager,System.String)">CreateErrorTableTask(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateErrorTableTask(IConnectionManager connectionManager, string tableName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_CreateErrorTableTask__ctor_" data-uid="ETLBox.Logging.CreateErrorTableTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask__ctor_System_String_" data-uid="ETLBox.Logging.CreateErrorTableTask.#ctor(System.String)">CreateErrorTableTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateErrorTableTask(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Logging_CreateErrorTableTask_DropAndCreateTable_" data-uid="ETLBox.Logging.CreateErrorTableTask.DropAndCreateTable*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask_DropAndCreateTable" data-uid="ETLBox.Logging.CreateErrorTableTask.DropAndCreateTable">DropAndCreateTable</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool DropAndCreateTable { get; set; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_CreateErrorTableTask_TableName_" data-uid="ETLBox.Logging.CreateErrorTableTask.TableName*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask_TableName" data-uid="ETLBox.Logging.CreateErrorTableTask.TableName">TableName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_CreateErrorTableTask_TaskName_" data-uid="ETLBox.Logging.CreateErrorTableTask.TaskName*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask_TaskName" data-uid="ETLBox.Logging.CreateErrorTableTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"></div>
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
  <a id="ETLBox_Logging_CreateErrorTableTask_Create_" data-uid="ETLBox.Logging.CreateErrorTableTask.Create*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask_Create_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.Logging.CreateErrorTableTask.Create(ETLBox.Connection.IConnectionManager,System.String)">Create(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(IConnectionManager connectionManager, string tableName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_CreateErrorTableTask_Create_" data-uid="ETLBox.Logging.CreateErrorTableTask.Create*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask_Create_System_String_" data-uid="ETLBox.Logging.CreateErrorTableTask.Create(System.String)">Create(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_CreateErrorTableTask_DropAndCreate_" data-uid="ETLBox.Logging.CreateErrorTableTask.DropAndCreate*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask_DropAndCreate_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.Logging.CreateErrorTableTask.DropAndCreate(ETLBox.Connection.IConnectionManager,System.String)">DropAndCreate(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropAndCreate(IConnectionManager connectionManager, string tableName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_CreateErrorTableTask_DropAndCreate_" data-uid="ETLBox.Logging.CreateErrorTableTask.DropAndCreate*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask_DropAndCreate_System_String_" data-uid="ETLBox.Logging.CreateErrorTableTask.DropAndCreate(System.String)">DropAndCreate(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void DropAndCreate(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_CreateErrorTableTask_Execute_" data-uid="ETLBox.Logging.CreateErrorTableTask.Execute*"></a>
  <h4 id="ETLBox_Logging_CreateErrorTableTask_Execute" data-uid="ETLBox.Logging.CreateErrorTableTask.Execute">Execute()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Execute()
```

{{< rawhtml >}}
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
