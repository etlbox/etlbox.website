---
title: "SqlTask"
description: "Details for Class SqlTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10078
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.SqlTask">
  <h1 id="ETLBox_ControlFlow_Tasks_SqlTask" data-uid="ETLBox.ControlFlow.Tasks.SqlTask" class="text-break">Class SqlTask
</h1>
  <div class="markdown level0 summary"><p>Executes any sql on the database. Use ExecuteNonQuery for SQL statements returning no data,
ExecuteScalar for statements that return only one row and one column or
ExecuteReader for SQL that returns multiple rows or columns</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/dbtask">DbTask</a></div>
    <div class="level4"><span class="xref">SqlTask</span></div>
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
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteScalar">DbTask.ExecuteScalar()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteScalar__1">DbTask.ExecuteScalar&lt;T&gt;()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteScalarAsBool">DbTask.ExecuteScalarAsBool()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_ExecuteReader">DbTask.ExecuteReader()</a>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class SqlTask : DbTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_examples"><strong>Examples</strong></h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor">SqlTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlTask()
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor(System.String,System.Action,System.Action,System.Action{System.Object}[])">SqlTask(string, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlTask(string sql, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor(System.String,System.Action{System.Object}[])">SqlTask(string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlTask(string sql, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action,System.Action,System.Action{System.Object}[])">SqlTask(string, IEnumerable&lt;QueryParameter&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlTask(string sql, IEnumerable<QueryParameter> parameter, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameter</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action{System.Object}[])">SqlTask(string, IEnumerable&lt;QueryParameter&gt;, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlTask(string sql, IEnumerable<QueryParameter> parameter, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameter</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">SqlTask(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlTask(string sql, IEnumerable<QueryParameter> parameter)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameter</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor(System.String,System.String)">SqlTask(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlTask(string name, string sql)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.#ctor(System.String)">SqlTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SqlTask(string sql)
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
        <td><span class="parametername">sql</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.controlflow/dbtask#ETLBox_ControlFlow_DbTask_Sql">Sql</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.TaskName">TaskName</h4>
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
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_BulkDelete_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkDelete*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkDelete_ETLBox_Connection_IConnectionManager_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkDelete(ETLBox.Connection.IConnectionManager,ETLBox.ControlFlow.ITableData)">BulkDelete(IConnectionManager, ITableData)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkDelete(IConnectionManager connectionManager, ITableData data)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkDelete_ETLBox_Connection_IConnectionManager_ETLBox_ControlFlow_ITableData__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_BulkDelete_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkDelete*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkDelete_System_String_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkDelete(System.String,ETLBox.ControlFlow.ITableData)">BulkDelete(string, ITableData)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkDelete(string name, ITableData data)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkDelete_System_String_ETLBox_ControlFlow_ITableData__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_BulkInsert_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkInsert*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkInsert_ETLBox_Connection_IConnectionManager_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkInsert(ETLBox.Connection.IConnectionManager,ETLBox.ControlFlow.ITableData)">BulkInsert(IConnectionManager, ITableData)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkInsert(IConnectionManager connectionManager, ITableData data)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkInsert_ETLBox_Connection_IConnectionManager_ETLBox_ControlFlow_ITableData__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_BulkInsert_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkInsert*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkInsert_System_String_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkInsert(System.String,ETLBox.ControlFlow.ITableData)">BulkInsert(string, ITableData)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkInsert(string name, ITableData data)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkInsert_System_String_ETLBox_ControlFlow_ITableData__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_BulkUpdate_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkUpdate*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkUpdate_ETLBox_Connection_IConnectionManager_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkUpdate(ETLBox.Connection.IConnectionManager,ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(IConnectionManager, ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkUpdate(IConnectionManager connectionManager, ITableData data, ICollection<string> setColumnNames, ICollection<string> joinColumnNames)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">setColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">joinColumnNames</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkUpdate_ETLBox_Connection_IConnectionManager_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_BulkUpdate_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkUpdate*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkUpdate_System_String_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.BulkUpdate(System.String,ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(string, ITableData, ICollection&lt;string&gt;, ICollection&lt;string&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkUpdate(string name, ITableData data, ICollection<string> setColumnNames, ICollection<string> joinColumnNames)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">setColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td><span class="parametername">joinColumnNames</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_BulkUpdate_System_String_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery(ETLBox.Connection.IConnectionManager,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQuery(IConnectionManager, string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(IConnectionManager connectionManager, string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery(ETLBox.Connection.IConnectionManager,System.String,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQuery(IConnectionManager, string, string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(IConnectionManager connectionManager, string name, string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery(ETLBox.Connection.IConnectionManager,System.String,System.String)">ExecuteNonQuery(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(IConnectionManager connectionManager, string name, string sql)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery(ETLBox.Connection.IConnectionManager,System.String)">ExecuteNonQuery(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(IConnectionManager connectionManager, string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQuery(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_System_String_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery(System.String,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteNonQuery(string, string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(string name, string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_System_String_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery(System.String,System.String)">ExecuteNonQuery(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(string name, string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteNonQuery(System.String)">ExecuteNonQuery(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int ExecuteNonQuery(string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteNonQuery_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(ETLBox.Connection.IConnectionManager,System.String,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(IConnectionManager, string, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(IConnectionManager connectionManager, string sql, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(ETLBox.Connection.IConnectionManager,System.String,System.Action{System.Object}[])">ExecuteReader(IConnectionManager, string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(IConnectionManager connectionManager, string sql, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(ETLBox.Connection.IConnectionManager,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(IConnectionManager, string, IEnumerable&lt;QueryParameter&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(IConnectionManager connectionManager, string sql, IEnumerable<QueryParameter> parameterList, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(ETLBox.Connection.IConnectionManager,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action{System.Object}[])">ExecuteReader(IConnectionManager, string, IEnumerable&lt;QueryParameter&gt;, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(IConnectionManager connectionManager, string sql, IEnumerable<QueryParameter> parameterList, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(ETLBox.Connection.IConnectionManager,System.String,System.String,System.Action{System.Object}[])">ExecuteReader(IConnectionManager, string, string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(IConnectionManager connectionManager, string name, string sql, params Action<object>[] actions)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_ETLBox_Connection_IConnectionManager_System_String_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(System.String,System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(string, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(string sql, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(System.String,System.Action{System.Object}[])">ExecuteReader(string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(string sql, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action,System.Action,System.Action{System.Object}[])">ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(string sql, IEnumerable<QueryParameter> parameterList, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action{System.Object}[])">ExecuteReader(string, IEnumerable&lt;QueryParameter&gt;, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(string sql, IEnumerable<QueryParameter> parameterList, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReader(System.String,System.String,System.Action{System.Object}[])">ExecuteReader(string, string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReader(string name, string sql, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReader_System_String_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine(ETLBox.Connection.IConnectionManager,System.String,System.Action{System.Object}[])">ExecuteReaderSingleLine(IConnectionManager, string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReaderSingleLine(IConnectionManager connectionManager, string sql, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_ETLBox_Connection_IConnectionManager_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine(ETLBox.Connection.IConnectionManager,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action,System.Action,System.Action{System.Object}[])">ExecuteReaderSingleLine(IConnectionManager, string, IEnumerable&lt;QueryParameter&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReaderSingleLine(IConnectionManager connectionManager, string sql, IEnumerable<QueryParameter> parameterList, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine(ETLBox.Connection.IConnectionManager,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action{System.Object}[])">ExecuteReaderSingleLine(IConnectionManager, string, IEnumerable&lt;QueryParameter&gt;, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReaderSingleLine(IConnectionManager connectionManager, string sql, IEnumerable<QueryParameter> parameterList, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine(System.String,System.Action{System.Object}[])">ExecuteReaderSingleLine(string, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReaderSingleLine(string sql, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_System_String_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action,System.Action,System.Action{System.Object}[])">ExecuteReaderSingleLine(string, IEnumerable&lt;QueryParameter&gt;, Action, Action, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReaderSingleLine(string sql, IEnumerable<QueryParameter> parameterList, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Action_System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object____" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteReaderSingleLine(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter},System.Action{System.Object}[])">ExecuteReaderSingleLine(string, IEnumerable&lt;QueryParameter&gt;, params Action&lt;object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ExecuteReaderSingleLine(string sql, IEnumerable<QueryParameter> parameterList, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteReaderSingleLine_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__System_Action_System_Object_____examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar(ETLBox.Connection.IConnectionManager,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalar(IConnectionManager, string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(IConnectionManager connectionManager, string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar(ETLBox.Connection.IConnectionManager,System.String,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalar(IConnectionManager, string, string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(IConnectionManager connectionManager, string name, string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar(ETLBox.Connection.IConnectionManager,System.String,System.String)">ExecuteScalar(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(IConnectionManager connectionManager, string name, string sql)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar(ETLBox.Connection.IConnectionManager,System.String)">ExecuteScalar(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(IConnectionManager connectionManager, string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalar(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_System_String_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar(System.String,System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalar(string, string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(string name, string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_System_String_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar(System.String,System.String)">ExecuteScalar(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(string name, string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar(System.String)">ExecuteScalar(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ExecuteScalar(string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar``1(ETLBox.Connection.IConnectionManager,System.String,System.String)">ExecuteScalar&lt;T&gt;(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T ExecuteScalar<T>(IConnectionManager connectionManager, string name, string sql)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sql</span></td>
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
        <td><span class="xref">T</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_ETLBox_Connection_IConnectionManager_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar``1(ETLBox.Connection.IConnectionManager,System.String)">ExecuteScalar&lt;T&gt;(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T ExecuteScalar<T>(IConnectionManager connectionManager, string sql)
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
        <td><span class="parametername">sql</span></td>
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
        <td><span class="xref">T</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar``1(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalar&lt;T&gt;(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T ExecuteScalar<T>(string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
        <td><span class="xref">T</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar``1(System.String,System.String)">ExecuteScalar&lt;T&gt;(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T ExecuteScalar<T>(string name, string sql)
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
        <td><span class="parametername">sql</span></td>
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
        <td><span class="xref">T</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalar``1(System.String)">ExecuteScalar&lt;T&gt;(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T ExecuteScalar<T>(string sql)
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
        <td><span class="parametername">sql</span></td>
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
        <td><span class="xref">T</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalar__1_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool(ETLBox.Connection.IConnectionManager,System.String,System.String)">ExecuteScalarAsBool(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static bool ExecuteScalarAsBool(IConnectionManager connectionManager, string name, string sql)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_ETLBox_Connection_IConnectionManager_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool(ETLBox.Connection.IConnectionManager,System.String)">ExecuteScalarAsBool(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static bool ExecuteScalarAsBool(IConnectionManager connectionManager, string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter__" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool(System.String,System.Collections.Generic.IEnumerable{ETLBox.ControlFlow.QueryParameter})">ExecuteScalarAsBool(string, IEnumerable&lt;QueryParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static bool ExecuteScalarAsBool(string sql, IEnumerable<QueryParameter> parameterList)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td><span class="parametername">parameterList</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_System_String_System_Collections_Generic_IEnumerable_ETLBox_ControlFlow_QueryParameter___examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool(System.String,System.String)">ExecuteScalarAsBool(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static bool ExecuteScalarAsBool(string name, string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_System_String_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_System_String_" data-uid="ETLBox.ControlFlow.Tasks.SqlTask.ExecuteScalarAsBool(System.String)">ExecuteScalarAsBool(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static bool ExecuteScalarAsBool(string sql)
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
        <td><span class="parametername">sql</span></td>
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
  <h5 id="ETLBox_ControlFlow_Tasks_SqlTask_ExecuteScalarAsBool_System_String__examples">Examples</h5>
  <pre><code>SqlTask.ExecuteNonQuery(&quot;Description&quot;,&quot;insert into demo.table1 select * from demo.table2&quot;);</code></pre>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
