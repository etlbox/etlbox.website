---
title: "LoggableTask"
description: "Details for Class LoggableTask (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10235
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.LoggableTask">
  <h1 id="ETLBox_LoggableTask" data-uid="ETLBox.LoggableTask" class="text-break">Class LoggableTask
</h1>
  <div class="markdown level0 summary"><p>This class contains properties that are needed for logging.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">LoggableTask</span></div>
      <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_LoggableTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class LoggableTask : ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_LoggableTask__ctor_" data-uid="ETLBox.LoggableTask.#ctor*"></a>
  <h4 id="ETLBox_LoggableTask__ctor" data-uid="ETLBox.LoggableTask.#ctor">LoggableTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoggableTask()
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_LoggableTask_DisableLogging_" data-uid="ETLBox.LoggableTask.DisableLogging*"></a>
  <h4 id="ETLBox_LoggableTask_DisableLogging" data-uid="ETLBox.LoggableTask.DisableLogging">DisableLogging</h4>
  <div class="markdown level1 summary"><p>If set to true, the component or task won't produce any log output.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool DisableLogging { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_TaskHash_" data-uid="ETLBox.LoggableTask.TaskHash*"></a>
  <h4 id="ETLBox_LoggableTask_TaskHash" data-uid="ETLBox.LoggableTask.TaskHash">TaskHash</h4>
  <div class="markdown level1 summary"><p>Creates a unique hash value to identify the task or component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string TaskHash { get; set; }
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
  <a id="ETLBox_LoggableTask_TaskName_" data-uid="ETLBox.LoggableTask.TaskName*"></a>
  <h4 id="ETLBox_LoggableTask_TaskName" data-uid="ETLBox.LoggableTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string TaskName { get; set; }
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
  <a id="ETLBox_LoggableTask_TaskType_" data-uid="ETLBox.LoggableTask.TaskType*"></a>
  <h4 id="ETLBox_LoggableTask_TaskType" data-uid="ETLBox.LoggableTask.TaskType">TaskType</h4>
  <div class="markdown level1 summary"><p>A type description of the task or component. This is usually the class name.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string TaskType { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_LoggableTask_CopyLogTaskProperties_" data-uid="ETLBox.LoggableTask.CopyLogTaskProperties*"></a>
  <h4 id="ETLBox_LoggableTask_CopyLogTaskProperties_ETLBox_ILoggableTask_" data-uid="ETLBox.LoggableTask.CopyLogTaskProperties(ETLBox.ILoggableTask)">CopyLogTaskProperties(ILoggableTask)</h4>
  <div class="markdown level1 summary"><p>Copies the relevant task properties from the current loggable task
to another loggable task.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CopyLogTaskProperties(ILoggableTask otherTask)
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
        <td><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></td>
        <td><span class="parametername">otherTask</span></td>
        <td><p>The target task that retrieve a copy from the log task properties</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
