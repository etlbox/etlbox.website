---
title: "GetListTask"
description: "Details for Class GetListTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10029
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.GetListTask">
  <h1 id="ETLBox_ControlFlow_GetListTask" data-uid="ETLBox.ControlFlow.GetListTask" class="text-break">Class GetListTask
</h1>
  <div class="markdown level0 summary"><p>Returns a list of all user databases on the server. Make sure to connect with the correct permissions!
In MySql, this will return a list of all schemas.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">GetListTask</span></div>
      <div class="level4"><a class="xref" href="/api/etlbox.controlflow/getdatabaselisttask">GetDatabaseListTask</a></div>
      <div class="level4"><a class="xref" href="/api/etlbox.controlflow/gettablelisttask">GetTableListTask</a></div>
      <div class="level4"><a class="xref" href="/api/etlbox.controlflow/getviewlisttask">GetViewListTask</a></div>
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
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_CopyLogTaskProperties_ETLBox_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_GetListTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class GetListTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_GetListTask_examples"><strong>Examples</strong></h5>
  <pre><code>GetDatabaseListTask.List();</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_GetListTask__ctor_" data-uid="ETLBox.ControlFlow.GetListTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_GetListTask__ctor" data-uid="ETLBox.ControlFlow.GetListTask.#ctor">GetListTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public GetListTask()
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_GetListTask__ctor_examples">Examples</h5>
  <pre><code>GetDatabaseListTask.List();</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_GetListTask_ObjectNames_" data-uid="ETLBox.ControlFlow.GetListTask.ObjectNames*"></a>
  <h4 id="ETLBox_ControlFlow_GetListTask_ObjectNames" data-uid="ETLBox.ControlFlow.GetListTask.ObjectNames">ObjectNames</h4>
  <div class="markdown level1 summary"><p>A list containing all databases after executing.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<ObjectNameDescriptor> ObjectNames { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_GetListTask_Sql_" data-uid="ETLBox.ControlFlow.GetListTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_GetListTask_Sql" data-uid="ETLBox.ControlFlow.GetListTask.Sql">Sql</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Sql { get; }
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
  <h5 id="ETLBox_ControlFlow_GetListTask_Sql_examples">Examples</h5>
  <pre><code>GetDatabaseListTask.List();</code></pre>
  <a id="ETLBox_ControlFlow_GetListTask_TaskName_" data-uid="ETLBox.ControlFlow.GetListTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_GetListTask_TaskName" data-uid="ETLBox.ControlFlow.GetListTask.TaskName">TaskName</h4>
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
  <div><a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h5 id="ETLBox_ControlFlow_GetListTask_TaskName_examples">Examples</h5>
  <pre><code>GetDatabaseListTask.List();</code></pre>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_GetListTask_RetrieveAll_" data-uid="ETLBox.ControlFlow.GetListTask.RetrieveAll*"></a>
  <h4 id="ETLBox_ControlFlow_GetListTask_RetrieveAll" data-uid="ETLBox.ControlFlow.GetListTask.RetrieveAll">RetrieveAll()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public GetListTask RetrieveAll()
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
        <td><a class="xref" href="/api/etlbox.controlflow/getlisttask">GetListTask</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_GetListTask_RetrieveAll_examples">Examples</h5>
  <pre><code>GetDatabaseListTask.List();</code></pre>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}