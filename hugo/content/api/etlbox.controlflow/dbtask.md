---
title: "DbTask"
description: "Details for Class DbTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10035
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.DbTask">
  <h1 id="ETLBox_ControlFlow_DbTask" data-uid="ETLBox.ControlFlow.DbTask" class="text-break">Class DbTask
  </h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">DbTask</span></div>
      <div class="level4"><a class="xref" href="/api/etlbox.controlflow.tasks/sqltask">SqlTask</a></div>
      <div class="level4"><a class="xref" href="/api/etlbox.controlflow.tasks/xmlatask">XmlaTask</a></div>
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
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_DbTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class DbTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_ControlFlow_DbTask__ctor_" data-uid="ETLBox.ControlFlow.DbTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask__ctor" data-uid="ETLBox.ControlFlow.DbTask.#ctor">DbTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_DbTask__ctor_" data-uid="ETLBox.ControlFlow.DbTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask__ctor_ETLBox_ControlFlow_ControlFlowTask_System_String_" data-uid="ETLBox.ControlFlow.DbTask.#ctor(ETLBox.ControlFlow.ControlFlowTask,System.String)">DbTask(ControlFlowTask, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbTask(ControlFlowTask callingTask, string sql)
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
        <td><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></td>
        <td><span class="parametername">callingTask</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask__ctor_" data-uid="ETLBox.ControlFlow.DbTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.DbTask.#ctor(System.String)">DbTask(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbTask(string sql)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask__ctor_" data-uid="ETLBox.ControlFlow.DbTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask__ctor_System_String_System_Action_System_Action_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.DbTask.#ctor(System.String,System.Action,System.Action,System.Action{System.Object}[])">DbTask(String, Action, Action, Action&lt;Object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbTask(string sql, Action beforeRowReadAction, Action afterRowReadAction, params Action<object>[] actions)
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
        <td><span class="xref">System.Action</span>&lt;<span class="xref">System.Object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask__ctor_" data-uid="ETLBox.ControlFlow.DbTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask__ctor_System_String_System_Action_System_Object____" data-uid="ETLBox.ControlFlow.DbTask.#ctor(System.String,System.Action{System.Object}[])">DbTask(String, Action&lt;Object&gt;[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbTask(string sql, params Action<object>[] actions)
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
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action</span>&lt;<span class="xref">System.Object</span>&gt;[]</td>
        <td><span class="parametername">actions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask__ctor_" data-uid="ETLBox.ControlFlow.DbTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.DbTask.#ctor(System.String,System.String)">DbTask(String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbTask(string name, string sql)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_DbTask_Actions_" data-uid="ETLBox.ControlFlow.DbTask.Actions*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_Actions" data-uid="ETLBox.ControlFlow.DbTask.Actions">Actions</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<Action<object>> Actions { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<span class="xref">System.Action</span>&lt;<span class="xref">System.Object</span>&gt;&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_AfterRowReadAction_" data-uid="ETLBox.ControlFlow.DbTask.AfterRowReadAction*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_AfterRowReadAction" data-uid="ETLBox.ControlFlow.DbTask.AfterRowReadAction">AfterRowReadAction</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action AfterRowReadAction { get; set; }
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
        <td><span class="xref">System.Action</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_BeforeRowReadAction_" data-uid="ETLBox.ControlFlow.DbTask.BeforeRowReadAction*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_BeforeRowReadAction" data-uid="ETLBox.ControlFlow.DbTask.BeforeRowReadAction">BeforeRowReadAction</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action BeforeRowReadAction { get; set; }
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
        <td><span class="xref">System.Action</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_Limit_" data-uid="ETLBox.ControlFlow.DbTask.Limit*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_Limit" data-uid="ETLBox.ControlFlow.DbTask.Limit">Limit</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int Limit { get; set; }
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_Parameter_" data-uid="ETLBox.ControlFlow.DbTask.Parameter*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_Parameter" data-uid="ETLBox.ControlFlow.DbTask.Parameter">Parameter</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IEnumerable<QueryParameter> Parameter { get; set; }
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
        <td><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_RowsAffected_" data-uid="ETLBox.ControlFlow.DbTask.RowsAffected*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_RowsAffected" data-uid="ETLBox.ControlFlow.DbTask.RowsAffected">RowsAffected</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int? RowsAffected { get; }
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
        <td><span class="xref">System.Nullable</span>&lt;<span class="xref">System.Int32</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_Sql_" data-uid="ETLBox.ControlFlow.DbTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_Sql" data-uid="ETLBox.ControlFlow.DbTask.Sql">Sql</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Sql { get; set; }
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
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_ControlFlow_DbTask_BulkDelete_" data-uid="ETLBox.ControlFlow.DbTask.BulkDelete*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_BulkDelete_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.ControlFlow.DbTask.BulkDelete(ETLBox.ControlFlow.ITableData)">BulkDelete(ITableData)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkDelete(ITableData data)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_BulkInsert_" data-uid="ETLBox.ControlFlow.DbTask.BulkInsert*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_BulkInsert_ETLBox_ControlFlow_ITableData_" data-uid="ETLBox.ControlFlow.DbTask.BulkInsert(ETLBox.ControlFlow.ITableData)">BulkInsert(ITableData)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkInsert(ITableData data)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_BulkUpdate_" data-uid="ETLBox.ControlFlow.DbTask.BulkUpdate*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_BulkUpdate_ETLBox_ControlFlow_ITableData_System_Collections_Generic_ICollection_System_String__System_Collections_Generic_ICollection_System_String__" data-uid="ETLBox.ControlFlow.DbTask.BulkUpdate(ETLBox.ControlFlow.ITableData,System.Collections.Generic.ICollection{System.String},System.Collections.Generic.ICollection{System.String})">BulkUpdate(ITableData, ICollection&lt;String&gt;, ICollection&lt;String&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkUpdate(ITableData data, ICollection<string> setColumnNames, ICollection<string> joinColumnNames)
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
        <td><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.String</span>&gt;</td>
        <td><span class="parametername">setColumnNames</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<span class="xref">System.String</span>&gt;</td>
        <td><span class="parametername">joinColumnNames</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_ExecuteNonQuery_" data-uid="ETLBox.ControlFlow.DbTask.ExecuteNonQuery*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_ExecuteNonQuery" data-uid="ETLBox.ControlFlow.DbTask.ExecuteNonQuery">ExecuteNonQuery()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ExecuteNonQuery()
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_ExecuteReader_" data-uid="ETLBox.ControlFlow.DbTask.ExecuteReader*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_ExecuteReader" data-uid="ETLBox.ControlFlow.DbTask.ExecuteReader">ExecuteReader()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void ExecuteReader()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_DbTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.DbTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_ExecuteScalar" data-uid="ETLBox.ControlFlow.DbTask.ExecuteScalar">ExecuteScalar()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object ExecuteScalar()
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
        <td><span class="xref">System.Object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_DbTask_ExecuteScalar_" data-uid="ETLBox.ControlFlow.DbTask.ExecuteScalar*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_ExecuteScalar__1" data-uid="ETLBox.ControlFlow.DbTask.ExecuteScalar``1">ExecuteScalar&lt;T&gt;()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public T? ExecuteScalar<T>()
    where T : struct
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
        <td><span class="xref">System.Nullable</span>&lt;T&gt;</td>
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
  <a id="ETLBox_ControlFlow_DbTask_ExecuteScalarAsBool_" data-uid="ETLBox.ControlFlow.DbTask.ExecuteScalarAsBool*"></a>
  <h4 id="ETLBox_ControlFlow_DbTask_ExecuteScalarAsBool" data-uid="ETLBox.ControlFlow.DbTask.ExecuteScalarAsBool">ExecuteScalarAsBool()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool ExecuteScalarAsBool()
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
