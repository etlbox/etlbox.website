---
title: "XmlaTask"
description: "Details for Class XmlaTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10080
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask">
  <h1 id="ETLBox_ControlFlow_Tasks_XmlaTask" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask" class="text-break">Class XmlaTask
</h1>
  <div class="markdown level0 summary"><p>This task can exeucte any XMLA.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/dbtask">DbTask</a></div>
    <div class="level4"><span class="xref">XmlaTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_Sql">DbTask.Sql</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_Actions">DbTask.Actions</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_BeforeRowReadAction">DbTask.BeforeRowReadAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_AfterRowReadAction">DbTask.AfterRowReadAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_Limit">DbTask.Limit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_RowsAffected">DbTask.RowsAffected</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_Parameter">DbTask.Parameter</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteNonQuery">DbTask.ExecuteNonQuery()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteNonQueryAsync">DbTask.ExecuteNonQueryAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteScalar">DbTask.ExecuteScalar()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteScalarAsync">DbTask.ExecuteScalarAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteScalar__1">DbTask.ExecuteScalar&lt;T&gt;()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteScalarAsync__1">DbTask.ExecuteScalarAsync&lt;T&gt;()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteScalarAsBool">DbTask.ExecuteScalarAsBool()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteReader">DbTask.ExecuteReader()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteReaderAsync">DbTask.ExecuteReaderAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_BulkInsert_ETLBox_ControlFlow_ITableData_">DbTask.BulkInsert(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_BulkDelete_ETLBox_ControlFlow_ITableData_">DbTask.BulkDelete(ITableData)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__">DbTask.BulkUpdate(ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_BulkSelect_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__">DbTask.BulkSelect(ITableData, ICollection&lt;string&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_LogErrorsAndClose_System_String_System_Action_ETLBox_Connection_IConnectionManager__">DbTask.LogErrorsAndClose(string, Action&lt;IConnectionManager&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_LogErrorsAndCloseAsync_System_String_System_Func_ETLBox_Connection_IConnectionManager_System_Threading_Tasks_Task__">DbTask.LogErrorsAndCloseAsync(string, Func&lt;IConnectionManager, Task&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_LogErrorsAndCloseCoreAsync_System_String_System_Action_ETLBox_Connection_IConnectionManager__System_Func_ETLBox_Connection_IConnectionManager_System_Threading_Tasks_Task__System_Boolean_">DbTask.LogErrorsAndCloseCoreAsync(string, Action&lt;IConnectionManager&gt;, Func&lt;IConnectionManager, Task&gt;, bool)</a>
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
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class XmlaTask : DbTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_examples"><strong>Examples</strong></h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor">XmlaTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public XmlaTask()
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_System_String_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor(System.String,System.Action,System.Action,System.Action{System.Object}[])">XmlaTask(string, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public XmlaTask(string xmla, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">xmla</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_System_String_System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor(System.String,System.Action{System.Object}[])">XmlaTask(string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public XmlaTask(string xmla, params Action<object>[] actions)
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
        <td><span class="parametername">xmla</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor(System.String,System.String)">XmlaTask(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public XmlaTask(string name, string xmla)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">xmla</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_System_String_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.#ctor(System.String)">XmlaTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public XmlaTask(string xmla)
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
        <td><span class="parametername">xmla</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask__ctor_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.TaskName">TaskName</h4>
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
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_TaskName_examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteNonQuery(ETLBox.Connection.IConnectionManager,System.String)">ExecuteNonQuery(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(IConnectionManager connectionManager, string xmla)
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
        <td><span class="parametername">xmla</span></td>
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteNonQuery_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteNonQuery(System.String)">ExecuteNonQuery(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(string xmla)
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
        <td><span class="parametername">xmla</span></td>
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteNonQuery_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteReader(ETLBox.Connection.IConnectionManager,System.String,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(IConnectionManager, string, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(IConnectionManager connectionManager, string xmla, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">xmla</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteReader(ETLBox.Connection.IConnectionManager,System.String,System.Action{System.Object}[])">ExecuteReader(IConnectionManager, string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(IConnectionManager connectionManager, string xmla, params Action<object>[] actions)
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
        <td><span class="parametername">xmla</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_System_String_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteReader(System.String,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(string, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(string xmla, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">xmla</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">beforeRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">afterRowReadAction</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_System_String_System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteReader(System.String,System.Action{System.Object}[])">ExecuteReader(string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(string xmla, params Action<object>[] actions)
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
        <td><span class="parametername">xmla</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteReader_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalar(ETLBox.Connection.IConnectionManager,System.String)">ExecuteScalar(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(IConnectionManager connectionManager, string xmla)
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
        <td><span class="parametername">xmla</span></td>
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
        <td><span class="xref">object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalar(System.String)">ExecuteScalar(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(string xmla)
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
        <td><span class="parametername">xmla</span></td>
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
        <td><span class="xref">object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar__1_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalar``1(ETLBox.Connection.IConnectionManager,System.String)">ExecuteScalar&lt;T&gt;(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T? ExecuteScalar<T>(IConnectionManager connectionManager, string xmla) where T : struct
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
        <td><span class="parametername">xmla</span></td>
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
        <td>T?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar__1_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar__1_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalar``1(System.String)">ExecuteScalar&lt;T&gt;(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T? ExecuteScalar<T>(string xmla) where T : struct
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
        <td><span class="parametername">xmla</span></td>
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
        <td>T?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalar__1_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalarAsBool_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalarAsBool*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalarAsBool_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalarAsBool(ETLBox.Connection.IConnectionManager,System.String)">ExecuteScalarAsBool(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool ExecuteScalarAsBool(IConnectionManager connectionManager, string xmla)
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
        <td><span class="parametername">xmla</span></td>
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalarAsBool_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalarAsBool_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalarAsBool*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalarAsBool_System_String_" data-uid="ETLBox.ControlFlow.Tasks.XmlaTask.ExecuteScalarAsBool(System.String)">ExecuteScalarAsBool(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool ExecuteScalarAsBool(string xmla)
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
        <td><span class="parametername">xmla</span></td>
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_XmlaTask_ExecuteScalarAsBool_System_String__examples">Examples</h5>
  <pre><code>XmlaTask.ExecuteNonQuery(&quot;Log description here&quot;,&quot;Xmla goes here...&quot;)</code></pre>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
