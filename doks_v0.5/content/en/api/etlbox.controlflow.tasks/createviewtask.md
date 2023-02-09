---
title: "CreateViewTask"
description: "Details for Class CreateViewTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10059
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask">
  <h1 id="ETLBox_ControlFlow_Tasks_CreateViewTask" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask" class="text-break">Class CreateViewTask
</h1>
  <div class="markdown level0 summary"><p>Creates or alters a view.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CreateViewTask</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow.Tasks</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_Tasks_CreateViewTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CreateViewTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_CreateViewTask_examples"><strong>Examples</strong></h5>
  <pre><code>CreateViewTask.CreateOrAlter(&quot;viewname&quot;,&quot;SELECT value FROM table&quot;);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.#ctor">CreateViewTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateViewTask()
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_CreateViewTask__ctor_examples">Examples</h5>
  <pre><code>CreateViewTask.CreateOrAlter(&quot;viewname&quot;,&quot;SELECT value FROM table&quot;);</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.#ctor(System.String,System.String)">CreateViewTask(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateViewTask(string viewName, string definition)
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
        <td><span class="parametername">viewName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_CreateViewTask__ctor_System_String_System_String__examples">Examples</h5>
  <pre><code>CreateViewTask.CreateOrAlter(&quot;viewname&quot;,&quot;SELECT value FROM table&quot;);</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask_Definition_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.Definition*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask_Definition" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.Definition">Definition</h4>
  <div class="markdown level1 summary"><p>The view definition.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Definition { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask_Sql_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask_Sql" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql that is generated to create the view</p>
</div>
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
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.TaskName">TaskName</h4>
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
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask_ViewAttributes_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.ViewAttributes*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask_ViewAttributes" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.ViewAttributes">ViewAttributes</h4>
  <div class="markdown level1 summary"><p>Optional, will set the view attributes, e.g. &quot;WITH SCHEMABINDING&quot;.
This part is put after the CREATE VIEW [viewname] statement
and before the AS statement.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ViewAttributes { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask_ViewName_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.ViewName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask_ViewName" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.ViewName">ViewName</h4>
  <div class="markdown level1 summary"><p>The name of the view</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ViewName { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask_VN_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.VN*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask_VN" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.VN">VN</h4>
  <div class="markdown level1 summary"><p>The formatted name of the view</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor VN { get; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask_CreateOrAlter_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.CreateOrAlter(ETLBox.Connection.IConnectionManager,System.String,System.String)">CreateOrAlter(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"><p>Creates or alter a view.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, string viewName, string definition)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">viewName</span></td>
        <td><p>The name of the view</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">definition</span></td>
        <td><p>The view definition</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateViewTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateViewTask_CreateOrAlter_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateViewTask.CreateOrAlter(System.String,System.String)">CreateOrAlter(string, string)</h4>
  <div class="markdown level1 summary"><p>Creates or alter a view.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(string viewName, string definition)
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
        <td><span class="parametername">viewName</span></td>
        <td><p>The name of the view</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">definition</span></td>
        <td><p>The view definition</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
