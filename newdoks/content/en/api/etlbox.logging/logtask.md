---
title: "LogTask"
description: "Details for Class LogTask (ETLBox.Logging)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.logging"
weight: 10283
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Logging.LogTask">
  <h1 id="ETLBox_Logging_LogTask" data-uid="ETLBox.Logging.LogTask" class="text-break">Class LogTask
</h1>
  <div class="markdown level0 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">LogTask</span></div>
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
  <h5 id="ETLBox_Logging_LogTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class LogTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Logging_LogTask__ctor_" data-uid="ETLBox.Logging.LogTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_LogTask__ctor" data-uid="ETLBox.Logging.LogTask.#ctor">LogTask()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LogTask()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogTask__ctor_" data-uid="ETLBox.Logging.LogTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_LogTask__ctor_System_String_System_Object___" data-uid="ETLBox.Logging.LogTask.#ctor(System.String,System.Object[])">LogTask(String, Object[])</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LogTask(string message, params object[] args)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask__ctor_" data-uid="ETLBox.Logging.LogTask.#ctor*"></a>
  <h4 id="ETLBox_Logging_LogTask__ctor_System_String_" data-uid="ETLBox.Logging.LogTask.#ctor(System.String)">LogTask(String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LogTask(string message)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_Logging_LogTask__tableName" data-uid="ETLBox.Logging.LogTask._tableName">_tableName</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <a id="ETLBox_Logging_LogTask_Args_" data-uid="ETLBox.Logging.LogTask.Args*"></a>
  <h4 id="ETLBox_Logging_LogTask_Args" data-uid="ETLBox.Logging.LogTask.Args">Args</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object[] Args { get; set; }
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
        <td><span class="xref">System.Object</span>[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_ContainerTypeNames_" data-uid="ETLBox.Logging.LogTask.ContainerTypeNames*"></a>
  <h4 id="ETLBox_Logging_LogTask_ContainerTypeNames" data-uid="ETLBox.Logging.LogTask.ContainerTypeNames">ContainerTypeNames</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string[] ContainerTypeNames { get; set; }
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
        <td><span class="xref">System.String</span>[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Message_" data-uid="ETLBox.Logging.LogTask.Message*"></a>
  <h4 id="ETLBox_Logging_LogTask_Message" data-uid="ETLBox.Logging.LogTask.Message">Message</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Message { get; set; }
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
  <a id="ETLBox_Logging_LogTask_TableName_" data-uid="ETLBox.Logging.LogTask.TableName*"></a>
  <h4 id="ETLBox_Logging_LogTask_TableName" data-uid="ETLBox.Logging.LogTask.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_TaskName_" data-uid="ETLBox.Logging.LogTask.TaskName*"></a>
  <h4 id="ETLBox_Logging_LogTask_TaskName" data-uid="ETLBox.Logging.LogTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
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
  <div><a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Logging_LogTask_ConvertToHierachy_" data-uid="ETLBox.Logging.LogTask.ConvertToHierachy*"></a>
  <h4 id="ETLBox_Logging_LogTask_ConvertToHierachy_System_Collections_Generic_List_ETLBox_Logging_LogEntry__" data-uid="ETLBox.Logging.LogTask.ConvertToHierachy(System.Collections.Generic.List{ETLBox.Logging.LogEntry})">ConvertToHierachy(List&lt;LogEntry&gt;)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LogHierarchyEntry ConvertToHierachy(List<LogEntry> logEntries)
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.logging/logentry">LogEntry</a>&gt;</td>
        <td><span class="parametername">logEntries</span></td>
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
        <td><a class="xref" href="/api/etlbox.logging/loghierarchyentry">LogHierarchyEntry</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_CreateLogTable_" data-uid="ETLBox.Logging.LogTask.CreateLogTable*"></a>
  <h4 id="ETLBox_Logging_LogTask_CreateLogTable" data-uid="ETLBox.Logging.LogTask.CreateLogTable">CreateLogTable()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateLogTable()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogTask_CreateLogTable_" data-uid="ETLBox.Logging.LogTask.CreateLogTable*"></a>
  <h4 id="ETLBox_Logging_LogTask_CreateLogTable_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.Logging.LogTask.CreateLogTable(ETLBox.Connection.IConnectionManager,System.String)">CreateLogTable(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateLogTable(IConnectionManager connectionManager, string logTableName = &quot;etlbox_log&quot;)
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
        <td><span class="parametername">logTableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_CreateLogTable_" data-uid="ETLBox.Logging.LogTask.CreateLogTable*"></a>
  <h4 id="ETLBox_Logging_LogTask_CreateLogTable_System_String_" data-uid="ETLBox.Logging.LogTask.CreateLogTable(System.String)">CreateLogTable(String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateLogTable(string logTableName = &quot;etlbox_log&quot;)
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
        <td><span class="parametername">logTableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Debug_" data-uid="ETLBox.Logging.LogTask.Debug*"></a>
  <h4 id="ETLBox_Logging_LogTask_Debug" data-uid="ETLBox.Logging.LogTask.Debug">Debug()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Debug()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogTask_Debug_" data-uid="ETLBox.Logging.LogTask.Debug*"></a>
  <h4 id="ETLBox_Logging_LogTask_Debug_System_String_System_Object___" data-uid="ETLBox.Logging.LogTask.Debug(System.String,System.Object[])">Debug(String, Object[])</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Debug(string message, params object[] args)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Debug_" data-uid="ETLBox.Logging.LogTask.Debug*"></a>
  <h4 id="ETLBox_Logging_LogTask_Debug_System_String_" data-uid="ETLBox.Logging.LogTask.Debug(System.String)">Debug(String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Debug(string message)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Error_" data-uid="ETLBox.Logging.LogTask.Error*"></a>
  <h4 id="ETLBox_Logging_LogTask_Error" data-uid="ETLBox.Logging.LogTask.Error">Error()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Error()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogTask_Error_" data-uid="ETLBox.Logging.LogTask.Error*"></a>
  <h4 id="ETLBox_Logging_LogTask_Error_System_String_System_Object___" data-uid="ETLBox.Logging.LogTask.Error(System.String,System.Object[])">Error(String, Object[])</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Error(string message, params object[] args)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Error_" data-uid="ETLBox.Logging.LogTask.Error*"></a>
  <h4 id="ETLBox_Logging_LogTask_Error_System_String_" data-uid="ETLBox.Logging.LogTask.Error(System.String)">Error(String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Error(string message)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Fatal_" data-uid="ETLBox.Logging.LogTask.Fatal*"></a>
  <h4 id="ETLBox_Logging_LogTask_Fatal" data-uid="ETLBox.Logging.LogTask.Fatal">Fatal()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Fatal()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogTask_Fatal_" data-uid="ETLBox.Logging.LogTask.Fatal*"></a>
  <h4 id="ETLBox_Logging_LogTask_Fatal_System_String_System_Object___" data-uid="ETLBox.Logging.LogTask.Fatal(System.String,System.Object[])">Fatal(String, Object[])</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Fatal(string message, params object[] args)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Fatal_" data-uid="ETLBox.Logging.LogTask.Fatal*"></a>
  <h4 id="ETLBox_Logging_LogTask_Fatal_System_String_" data-uid="ETLBox.Logging.LogTask.Fatal(System.String)">Fatal(String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Fatal(string message)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Info_" data-uid="ETLBox.Logging.LogTask.Info*"></a>
  <h4 id="ETLBox_Logging_LogTask_Info" data-uid="ETLBox.Logging.LogTask.Info">Info()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Info()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogTask_Info_" data-uid="ETLBox.Logging.LogTask.Info*"></a>
  <h4 id="ETLBox_Logging_LogTask_Info_System_String_System_Object___" data-uid="ETLBox.Logging.LogTask.Info(System.String,System.Object[])">Info(String, Object[])</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Info(string message, params object[] args)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Info_" data-uid="ETLBox.Logging.LogTask.Info*"></a>
  <h4 id="ETLBox_Logging_LogTask_Info_System_String_" data-uid="ETLBox.Logging.LogTask.Info(System.String)">Info(String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Info(string message)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_ReadLogTable_" data-uid="ETLBox.Logging.LogTask.ReadLogTable*"></a>
  <h4 id="ETLBox_Logging_LogTask_ReadLogTable" data-uid="ETLBox.Logging.LogTask.ReadLogTable">ReadLogTable()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<LogEntry> ReadLogTable()
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.logging/logentry">LogEntry</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_ReadLogTable_" data-uid="ETLBox.Logging.LogTask.ReadLogTable*"></a>
  <h4 id="ETLBox_Logging_LogTask_ReadLogTable_ETLBox_Connection_IConnectionManager_System_Int64_" data-uid="ETLBox.Logging.LogTask.ReadLogTable(ETLBox.Connection.IConnectionManager,System.Int64)">ReadLogTable(IConnectionManager, Int64)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<LogEntry> ReadLogTable(IConnectionManager connectionManager, long loadProcessId)
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
        <td><span class="parametername">loadProcessId</span></td>
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.logging/logentry">LogEntry</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_ReadLogTable_" data-uid="ETLBox.Logging.LogTask.ReadLogTable*"></a>
  <h4 id="ETLBox_Logging_LogTask_ReadLogTable_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.Logging.LogTask.ReadLogTable(ETLBox.Connection.IConnectionManager)">ReadLogTable(IConnectionManager)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<LogEntry> ReadLogTable(IConnectionManager connectionManager)
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.logging/logentry">LogEntry</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_ReadLogTable_" data-uid="ETLBox.Logging.LogTask.ReadLogTable*"></a>
  <h4 id="ETLBox_Logging_LogTask_ReadLogTable_System_Int64_" data-uid="ETLBox.Logging.LogTask.ReadLogTable(System.Int64)">ReadLogTable(Int64)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<LogEntry> ReadLogTable(long loadProcessId)
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
        <td><span class="parametername">loadProcessId</span></td>
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.logging/logentry">LogEntry</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_ReadLogTable_" data-uid="ETLBox.Logging.LogTask.ReadLogTable*"></a>
  <h4 id="ETLBox_Logging_LogTask_ReadLogTable_System_Nullable_System_Int64__" data-uid="ETLBox.Logging.LogTask.ReadLogTable(System.Nullable{System.Int64})">ReadLogTable(Nullable&lt;Int64&gt;)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<LogEntry> ReadLogTable(long? loadProcessId = null)
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
        <td><span class="xref">System.Nullable</span>&lt;<span class="xref">System.Int64</span>&gt;</td>
        <td><span class="parametername">loadProcessId</span></td>
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.logging/logentry">LogEntry</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Trace_" data-uid="ETLBox.Logging.LogTask.Trace*"></a>
  <h4 id="ETLBox_Logging_LogTask_Trace" data-uid="ETLBox.Logging.LogTask.Trace">Trace()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Trace()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogTask_Trace_" data-uid="ETLBox.Logging.LogTask.Trace*"></a>
  <h4 id="ETLBox_Logging_LogTask_Trace_System_String_System_Object___" data-uid="ETLBox.Logging.LogTask.Trace(System.String,System.Object[])">Trace(String, Object[])</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Trace(string message, params object[] args)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Trace_" data-uid="ETLBox.Logging.LogTask.Trace*"></a>
  <h4 id="ETLBox_Logging_LogTask_Trace_System_String_" data-uid="ETLBox.Logging.LogTask.Trace(System.String)">Trace(String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Trace(string message)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Warn_" data-uid="ETLBox.Logging.LogTask.Warn*"></a>
  <h4 id="ETLBox_Logging_LogTask_Warn" data-uid="ETLBox.Logging.LogTask.Warn">Warn()</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Warn()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogTask_Warn_" data-uid="ETLBox.Logging.LogTask.Warn*"></a>
  <h4 id="ETLBox_Logging_LogTask_Warn_System_String_System_Object___" data-uid="ETLBox.Logging.LogTask.Warn(System.String,System.Object[])">Warn(String, Object[])</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Warn(string message, params object[] args)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogTask_Warn_" data-uid="ETLBox.Logging.LogTask.Warn*"></a>
  <h4 id="ETLBox_Logging_LogTask_Warn_System_String_" data-uid="ETLBox.Logging.LogTask.Warn(System.String)">Warn(String)</h4>
  <div class="markdown level1 summary"><p>Used this task for custom log messages.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Warn(string message)
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
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
