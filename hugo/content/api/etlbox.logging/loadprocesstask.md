---
title: "LoadProcessTask"
description: "Details for Class LoadProcessTask (ETLBox.Logging)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.logging"
weight: 10261
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Logging.LoadProcessTask">
  <h1 id="ETLBox_Logging_LoadProcessTask" data-uid="ETLBox.Logging.LoadProcessTask" class="text-break">Class LoadProcessTask
  </h1>
  <div class="markdown level0 summary"><p>Let you manage load process logging.
You can start, stop and abort load processes with this task.
It also allows you to create a the required table in your database.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">LoadProcessTask</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Logging</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Logging_LoadProcessTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class LoadProcessTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_Logging_LoadProcessTask__ctor_" data-uid="ETLBox.Logging.LoadProcessTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask__ctor" data-uid="ETLBox.Logging.LoadProcessTask.#ctor">LoadProcessTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcessTask()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LoadProcessTask__ctor_" data-uid="ETLBox.Logging.LoadProcessTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask__ctor_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.#ctor(System.String)">LoadProcessTask(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcessTask(string processName)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask__ctor_" data-uid="ETLBox.Logging.LoadProcessTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask__ctor_System_String_System_Int64_" data-uid="ETLBox.Logging.LoadProcessTask.#ctor(System.String,System.Int64)">LoadProcessTask(String, Int64)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcessTask(string processName, long sourceId)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Int64</span></td>
        <td><span class="parametername">sourceId</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask__ctor_" data-uid="ETLBox.Logging.LoadProcessTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask__ctor_System_String_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.#ctor(System.String,System.String)">LoadProcessTask(String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcessTask(string processName, string source)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">source</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="fields">Fields
  </h3>
  <h4 id="ETLBox_Logging_LoadProcessTask__tableName" data-uid="ETLBox.Logging.LoadProcessTask._tableName">_tableName</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string _tableName
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
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
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_Logging_LoadProcessTask_Process_" data-uid="ETLBox.Logging.LoadProcessTask.Process*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Process" data-uid="ETLBox.Logging.LoadProcessTask.Process">Process</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcess Process { get; set; }
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_TableName_" data-uid="ETLBox.Logging.LoadProcessTask.TableName*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_TableName" data-uid="ETLBox.Logging.LoadProcessTask.TableName">TableName</h4>
  <div class="markdown level1 summary"></div>
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
  <a id="ETLBox_Logging_LoadProcessTask_TaskName_" data-uid="ETLBox.Logging.LoadProcessTask.TaskName*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_TaskName" data-uid="ETLBox.Logging.LoadProcessTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"></div>
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
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_Logging_LoadProcessTask_Abort_" data-uid="ETLBox.Logging.LoadProcessTask.Abort*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Abort_ETLBox_Connection_IConnectionManager_ETLBox_Logging_LoadProcess_" data-uid="ETLBox.Logging.LoadProcessTask.Abort(ETLBox.Connection.IConnectionManager,ETLBox.Logging.LoadProcess)">Abort(IConnectionManager, LoadProcess)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Abort(IConnectionManager connectionManager, LoadProcess process)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td><span class="parametername">process</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Abort_" data-uid="ETLBox.Logging.LoadProcessTask.Abort*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Abort_ETLBox_Connection_IConnectionManager_ETLBox_Logging_LoadProcess_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.Abort(ETLBox.Connection.IConnectionManager,ETLBox.Logging.LoadProcess,System.String)">Abort(IConnectionManager, LoadProcess, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Abort(IConnectionManager connectionManager, LoadProcess process, string abortMessage)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td><span class="parametername">process</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">abortMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Abort_" data-uid="ETLBox.Logging.LoadProcessTask.Abort*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Abort_ETLBox_Logging_LoadProcess_" data-uid="ETLBox.Logging.LoadProcessTask.Abort(ETLBox.Logging.LoadProcess)">Abort(LoadProcess)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Abort(LoadProcess process)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td><span class="parametername">process</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Abort_" data-uid="ETLBox.Logging.LoadProcessTask.Abort*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Abort_ETLBox_Logging_LoadProcess_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.Abort(ETLBox.Logging.LoadProcess,System.String)">Abort(LoadProcess, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Abort(LoadProcess process, string abortMessage)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td><span class="parametername">process</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">abortMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_AbortProcess_" data-uid="ETLBox.Logging.LoadProcessTask.AbortProcess*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_AbortProcess_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.AbortProcess(System.String)">AbortProcess(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcess AbortProcess(string abortMessage = &quot;&quot;)
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
        <td><span class="parametername">abortMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_CreateTable_" data-uid="ETLBox.Logging.LoadProcessTask.CreateTable*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_CreateTable" data-uid="ETLBox.Logging.LoadProcessTask.CreateTable">CreateTable()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateTable()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LoadProcessTask_CreateTable_" data-uid="ETLBox.Logging.LoadProcessTask.CreateTable*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_CreateTable_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.CreateTable(ETLBox.Connection.IConnectionManager,System.String)">CreateTable(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateTable(IConnectionManager connectionManager, string tableName = &quot;etlbox_loadprocess&quot;)
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
  <a id="ETLBox_Logging_LoadProcessTask_CreateTable_" data-uid="ETLBox.Logging.LoadProcessTask.CreateTable*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_CreateTable_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.CreateTable(System.String)">CreateTable(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateTable(string tableName = &quot;etlbox_loadprocess&quot;)
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
  <a id="ETLBox_Logging_LoadProcessTask_End_" data-uid="ETLBox.Logging.LoadProcessTask.End*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_End_ETLBox_Connection_IConnectionManager_ETLBox_Logging_LoadProcess_" data-uid="ETLBox.Logging.LoadProcessTask.End(ETLBox.Connection.IConnectionManager,ETLBox.Logging.LoadProcess)">End(IConnectionManager, LoadProcess)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess End(IConnectionManager connectionManager, LoadProcess process)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td><span class="parametername">process</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_End_" data-uid="ETLBox.Logging.LoadProcessTask.End*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_End_ETLBox_Connection_IConnectionManager_ETLBox_Logging_LoadProcess_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.End(ETLBox.Connection.IConnectionManager,ETLBox.Logging.LoadProcess,System.String)">End(IConnectionManager, LoadProcess, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess End(IConnectionManager connectionManager, LoadProcess process, string endMessage)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td><span class="parametername">process</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">endMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_End_" data-uid="ETLBox.Logging.LoadProcessTask.End*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_End_ETLBox_Logging_LoadProcess_" data-uid="ETLBox.Logging.LoadProcessTask.End(ETLBox.Logging.LoadProcess)">End(LoadProcess)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess End(LoadProcess process)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td><span class="parametername">process</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_End_" data-uid="ETLBox.Logging.LoadProcessTask.End*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_End_ETLBox_Logging_LoadProcess_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.End(ETLBox.Logging.LoadProcess,System.String)">End(LoadProcess, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess End(LoadProcess process, string endMessage)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td><span class="parametername">process</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">endMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_EndProcess_" data-uid="ETLBox.Logging.LoadProcessTask.EndProcess*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_EndProcess_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.EndProcess(System.String)">EndProcess(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcess EndProcess(string endMessage = &quot;&quot;)
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
        <td><span class="parametername">endMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Read_" data-uid="ETLBox.Logging.LoadProcessTask.Read*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Read_ETLBox_Connection_IConnectionManager_System_Int64_" data-uid="ETLBox.Logging.LoadProcessTask.Read(ETLBox.Connection.IConnectionManager,System.Int64)">Read(IConnectionManager, Int64)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Read(IConnectionManager connectionManager, long processId)
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
        <td><span class="xref">System.Int64</span></td>
        <td><span class="parametername">processId</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Read_" data-uid="ETLBox.Logging.LoadProcessTask.Read*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Read_System_Int64_" data-uid="ETLBox.Logging.LoadProcessTask.Read(System.Int64)">Read(Int64)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Read(long processId)
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
        <td><span class="xref">System.Int64</span></td>
        <td><span class="parametername">processId</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadAll_" data-uid="ETLBox.Logging.LoadProcessTask.ReadAll*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadAll" data-uid="ETLBox.Logging.LoadProcessTask.ReadAll">ReadAll()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<LoadProcess> ReadAll()
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadAll_" data-uid="ETLBox.Logging.LoadProcessTask.ReadAll*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadAll_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.Logging.LoadProcessTask.ReadAll(ETLBox.Connection.IConnectionManager)">ReadAll(IConnectionManager)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<LoadProcess> ReadAll(IConnectionManager connectionManager)
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadLastAborted_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastAborted*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadLastAborted" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastAborted">ReadLastAborted()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess ReadLastAborted()
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadLastAborted_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastAborted*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadLastAborted_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastAborted(ETLBox.Connection.IConnectionManager)">ReadLastAborted(IConnectionManager)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess ReadLastAborted(IConnectionManager connectionManager)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadLastFinished_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastFinished*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadLastFinished" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastFinished">ReadLastFinished()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess ReadLastFinished()
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadLastFinished_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastFinished*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadLastFinished_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastFinished(ETLBox.Connection.IConnectionManager)">ReadLastFinished(IConnectionManager)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess ReadLastFinished(IConnectionManager connectionManager)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadLastSuccessful_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastSuccessful*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadLastSuccessful" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastSuccessful">ReadLastSuccessful()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess ReadLastSuccessful()
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadLastSuccessful_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastSuccessful*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadLastSuccessful_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.Logging.LoadProcessTask.ReadLastSuccessful(ETLBox.Connection.IConnectionManager)">ReadLastSuccessful(IConnectionManager)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess ReadLastSuccessful(IConnectionManager connectionManager)
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_ReadProcess_" data-uid="ETLBox.Logging.LoadProcessTask.ReadProcess*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_ReadProcess_System_Int64_" data-uid="ETLBox.Logging.LoadProcessTask.ReadProcess(System.Int64)">ReadProcess(Int64)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcess ReadProcess(long processId)
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
        <td><span class="xref">System.Int64</span></td>
        <td><span class="parametername">processId</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Start_" data-uid="ETLBox.Logging.LoadProcessTask.Start*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Start_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.Start(ETLBox.Connection.IConnectionManager,System.String)">Start(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Start(IConnectionManager connectionManager, string processName)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Start_" data-uid="ETLBox.Logging.LoadProcessTask.Start*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Start_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.Start(ETLBox.Connection.IConnectionManager,System.String,System.String)">Start(IConnectionManager, String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Start(IConnectionManager connectionManager, string processName, string startMessage)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">startMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Start_" data-uid="ETLBox.Logging.LoadProcessTask.Start*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Start_ETLBox_Connection_IConnectionManager_System_String_System_String_System_Int64_" data-uid="ETLBox.Logging.LoadProcessTask.Start(ETLBox.Connection.IConnectionManager,System.String,System.String,System.Int64)">Start(IConnectionManager, String, String, Int64)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Start(IConnectionManager connectionManager, string processName, string startMessage, long sourceId)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">startMessage</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Int64</span></td>
        <td><span class="parametername">sourceId</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Start_" data-uid="ETLBox.Logging.LoadProcessTask.Start*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Start_ETLBox_Connection_IConnectionManager_System_String_System_String_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.Start(ETLBox.Connection.IConnectionManager,System.String,System.String,System.String)">Start(IConnectionManager, String, String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Start(IConnectionManager connectionManager, string processName, string startMessage, string source)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">startMessage</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">source</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Start_" data-uid="ETLBox.Logging.LoadProcessTask.Start*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Start_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.Start(System.String)">Start(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Start(string processName)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Start_" data-uid="ETLBox.Logging.LoadProcessTask.Start*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Start_System_String_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.Start(System.String,System.String)">Start(String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Start(string processName, string startMessage)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">startMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Start_" data-uid="ETLBox.Logging.LoadProcessTask.Start*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Start_System_String_System_String_System_Int64_" data-uid="ETLBox.Logging.LoadProcessTask.Start(System.String,System.String,System.Int64)">Start(String, String, Int64)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Start(string processName, string startMessage, long sourceId)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">startMessage</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Int64</span></td>
        <td><span class="parametername">sourceId</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_Start_" data-uid="ETLBox.Logging.LoadProcessTask.Start*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_Start_System_String_System_String_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.Start(System.String,System.String,System.String)">Start(String, String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess Start(string processName, string startMessage, string source)
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
        <td><span class="parametername">processName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">startMessage</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">source</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LoadProcessTask_StartProcess_" data-uid="ETLBox.Logging.LoadProcessTask.StartProcess*"></a>
  <h4 id="ETLBox_Logging_LoadProcessTask_StartProcess_System_String_" data-uid="ETLBox.Logging.LoadProcessTask.StartProcess(System.String)">StartProcess(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoadProcess StartProcess(string startMessage = &quot;&quot;)
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
        <td><span class="parametername">startMessage</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
