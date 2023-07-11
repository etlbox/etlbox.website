---
title: "LogSection"
description: "Details for Class LogSection (ETLBox.Logging)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.logging"
weight: 10221
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Logging.LogSection">
  <h1 id="ETLBox_Logging_LogSection" data-uid="ETLBox.Logging.LogSection" class="text-break">Class LogSection
</h1>
  <div class="markdown level0 summary"><p>A log section will execute your code block, wrapping the action with log messages indicating start and end.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">LogSection</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Logging</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Logging_LogSection_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class LogSection : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Logging_LogSection__ctor_" data-uid="ETLBox.Logging.LogSection.#ctor*"></a>
  <h4 id="ETLBox_Logging_LogSection__ctor_System_String_" data-uid="ETLBox.Logging.LogSection.#ctor(System.String)">LogSection(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LogSection(string name)
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
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Logging_LogSection_TaskName_" data-uid="ETLBox.Logging.LogSection.TaskName*"></a>
  <h4 id="ETLBox_Logging_LogSection_TaskName" data-uid="ETLBox.Logging.LogSection.TaskName">TaskName</h4>
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
  <div><a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Logging_LogSection_Execute_" data-uid="ETLBox.Logging.LogSection.Execute*"></a>
  <h4 id="ETLBox_Logging_LogSection_Execute_System_Action_" data-uid="ETLBox.Logging.LogSection.Execute(System.Action)">Execute(Action)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Execute(Action task)
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
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogSection_Execute_" data-uid="ETLBox.Logging.LogSection.Execute*"></a>
  <h4 id="ETLBox_Logging_LogSection_Execute_System_String_System_Action_" data-uid="ETLBox.Logging.LogSection.Execute(System.String,System.Action)">Execute(string, Action)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Execute(string name, Action task)
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
        <td><span class="xref">System.Action</span></td>
        <td><span class="parametername">task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogSection_Execute_" data-uid="ETLBox.Logging.LogSection.Execute*"></a>
  <h4 id="ETLBox_Logging_LogSection_Execute__1_System_Action___0____0_" data-uid="ETLBox.Logging.LogSection.Execute``1(System.Action{``0},``0)">Execute&lt;t1&gt;(Action&lt;t1&gt;, t1)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Execute<t1>(Action<t1> task, t1 param1)
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
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;t1&gt;</td>
        <td><span class="parametername">task</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">t1</span></td>
        <td><span class="parametername">param1</span></td>
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
        <td><span class="parametername">t1</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogSection_Execute_" data-uid="ETLBox.Logging.LogSection.Execute*"></a>
  <h4 id="ETLBox_Logging_LogSection_Execute__1_System_String_System_Action___0____0_" data-uid="ETLBox.Logging.LogSection.Execute``1(System.String,System.Action{``0},``0)">Execute&lt;t1&gt;(string, Action&lt;t1&gt;, t1)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Execute<t1>(string name, Action<t1> task, t1 param1)
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
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;t1&gt;</td>
        <td><span class="parametername">task</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">t1</span></td>
        <td><span class="parametername">param1</span></td>
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
        <td><span class="parametername">t1</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogSection_Execute_" data-uid="ETLBox.Logging.LogSection.Execute*"></a>
  <h4 id="ETLBox_Logging_LogSection_Execute__2_System_Action___0___1____0___1_" data-uid="ETLBox.Logging.LogSection.Execute``2(System.Action{``0,``1},``0,``1)">Execute&lt;t1, t2&gt;(Action&lt;t1, t2&gt;, t1, t2)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Execute<t1, t2>(Action<t1, t2> task, t1 param1, t2 param2)
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
        <td><span class="xref">System.Action&lt;T1, T2&gt;</span>&lt;t1, t2&gt;</td>
        <td><span class="parametername">task</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">t1</span></td>
        <td><span class="parametername">param1</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">t2</span></td>
        <td><span class="parametername">param2</span></td>
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
        <td><span class="parametername">t1</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="parametername">t2</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogSection_Execute_" data-uid="ETLBox.Logging.LogSection.Execute*"></a>
  <h4 id="ETLBox_Logging_LogSection_Execute__2_System_String_System_Action___0___1____0___1_" data-uid="ETLBox.Logging.LogSection.Execute``2(System.String,System.Action{``0,``1},``0,``1)">Execute&lt;t1, t2&gt;(string, Action&lt;t1, t2&gt;, t1, t2)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Execute<t1, t2>(string name, Action<t1, t2> task, t1 param1, t2 param2)
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
        <td><span class="xref">System.Action&lt;T1, T2&gt;</span>&lt;t1, t2&gt;</td>
        <td><span class="parametername">task</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">t1</span></td>
        <td><span class="parametername">param1</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">t2</span></td>
        <td><span class="parametername">param2</span></td>
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
        <td><span class="parametername">t1</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="parametername">t2</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
