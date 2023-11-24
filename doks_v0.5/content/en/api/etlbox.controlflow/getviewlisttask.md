---
title: "GetViewListTask"
description: "Details for Class GetViewListTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10049
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.GetViewListTask">
  <h1 id="ETLBox_ControlFlow_GetViewListTask" data-uid="ETLBox.ControlFlow.GetViewListTask" class="text-break">Class GetViewListTask
</h1>
  <div class="markdown level0 summary"><p>Returns a list of all tables in the currently connected database.<br>
Make sure to connect with the correct permissions!</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.controlflow/getlisttask">GetListTask</a></div>
    <div class="level4"><span class="xref">GetViewListTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/getlisttask#ETLBox_ControlFlow_GetListTask_ObjectNames">GetListTask.ObjectNames</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/getlisttask#ETLBox_ControlFlow_GetListTask_RetrieveAll">GetListTask.RetrieveAll()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/getlisttask#ETLBox_ControlFlow_GetListTask_Sql">GetListTask.Sql</a>
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
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_CopyLogTaskProperties_ETLBox_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
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
  <h5 id="ETLBox_ControlFlow_GetViewListTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class GetViewListTask : GetListTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_GetViewListTask_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">List&lt;ETLBox.Helper.ObjectNameDescriptor&gt; allviews = GetViewListTask.List();
foreach (var on in allviews) {
    Console.WriteLine("Schema:" + on.UnquotatedSchemaName);
    Console.WriteLine("ViewName:" + on.UnquotatedObjectName);
    Console.WriteLine("Full qualified name:" + on.QuotatedFullName);
}</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_GetViewListTask__ctor_" data-uid="ETLBox.ControlFlow.GetViewListTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_GetViewListTask__ctor" data-uid="ETLBox.ControlFlow.GetViewListTask.#ctor">GetViewListTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public GetViewListTask()
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_GetViewListTask_TaskName_" data-uid="ETLBox.ControlFlow.GetViewListTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_GetViewListTask_TaskName" data-uid="ETLBox.ControlFlow.GetViewListTask.TaskName">TaskName</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.controlflow/getlisttask#ETLBox_ControlFlow_GetListTask_TaskName">GetListTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_GetViewListTask_ListAll_" data-uid="ETLBox.ControlFlow.GetViewListTask.ListAll*"></a>
  <h4 id="ETLBox_ControlFlow_GetViewListTask_ListAll" data-uid="ETLBox.ControlFlow.GetViewListTask.ListAll">ListAll()</h4>
  <div class="markdown level1 summary"><p>Runs sql code to determine all user database names.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<ObjectNameDescriptor> ListAll()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a>&gt;</td>
        <td><p>A list of all user database names</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_GetViewListTask_ListAll_" data-uid="ETLBox.ControlFlow.GetViewListTask.ListAll*"></a>
  <h4 id="ETLBox_ControlFlow_GetViewListTask_ListAll_ETLBox_IConnectionManager_" data-uid="ETLBox.ControlFlow.GetViewListTask.ListAll(ETLBox.IConnectionManager)">ListAll(IConnectionManager)</h4>
  <div class="markdown level1 summary"><p>Runs sql code to determine all user database names.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static List<ObjectNameDescriptor> ListAll(IConnectionManager connectionManager)
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
        <td><p>The connection manager of the server you want to connect</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a>&gt;</td>
        <td><p>A list of all user database names</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
