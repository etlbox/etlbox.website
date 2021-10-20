---
title: "LoggableTask"
description: "Details for Class LoggableTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10042
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.LoggableTask">
  <h1 id="ETLBox_ControlFlow_LoggableTask" data-uid="ETLBox.ControlFlow.LoggableTask" class="text-break">Class LoggableTask
  </h1>
  <div class="markdown level0 summary"><p>This class contains properties that are needed for logging.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">LoggableTask</span></div>
      <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  <h5 id="ETLBox_ControlFlow_LoggableTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class LoggableTask : ILoggableTask
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_ControlFlow_LoggableTask__ctor_" data-uid="ETLBox.ControlFlow.LoggableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_LoggableTask__ctor" data-uid="ETLBox.ControlFlow.LoggableTask.#ctor">LoggableTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoggableTask()
```

{{< rawhtml >}}
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_LoggableTask_DisableLogging_" data-uid="ETLBox.ControlFlow.LoggableTask.DisableLogging*"></a>
  <h4 id="ETLBox_ControlFlow_LoggableTask_DisableLogging" data-uid="ETLBox.ControlFlow.LoggableTask.DisableLogging">DisableLogging</h4>
  <div class="markdown level1 summary"><p>If set to true, the component or task won't produce any log output.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual bool DisableLogging { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_LoggableTask_TaskHash_" data-uid="ETLBox.ControlFlow.LoggableTask.TaskHash*"></a>
  <h4 id="ETLBox_ControlFlow_LoggableTask_TaskHash" data-uid="ETLBox.ControlFlow.LoggableTask.TaskHash">TaskHash</h4>
  <div class="markdown level1 summary"><p>Creates a unique hash value to identify the task.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string TaskHash { get; set; }
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
  <a id="ETLBox_ControlFlow_LoggableTask_TaskName_" data-uid="ETLBox.ControlFlow.LoggableTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_LoggableTask_TaskName" data-uid="ETLBox.ControlFlow.LoggableTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string TaskName { get; set; }
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
  <a id="ETLBox_ControlFlow_LoggableTask_TaskType_" data-uid="ETLBox.ControlFlow.LoggableTask.TaskType*"></a>
  <h4 id="ETLBox_ControlFlow_LoggableTask_TaskType" data-uid="ETLBox.ControlFlow.LoggableTask.TaskType">TaskType</h4>
  <div class="markdown level1 summary"><p>A type description of the task or component. This is usually the class name.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual string TaskType { get; set; }
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
  <a id="ETLBox_ControlFlow_LoggableTask_CopyLogTaskProperties_" data-uid="ETLBox.ControlFlow.LoggableTask.CopyLogTaskProperties*"></a>
  <h4 id="ETLBox_ControlFlow_LoggableTask_CopyLogTaskProperties_ETLBox_ControlFlow_ILoggableTask_" data-uid="ETLBox.ControlFlow.LoggableTask.CopyLogTaskProperties(ETLBox.ControlFlow.ILoggableTask)">CopyLogTaskProperties(ILoggableTask)</h4>
  <div class="markdown level1 summary"><p>Copies the relevant task properties from the current loggable task
to another loggable task.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CopyLogTaskProperties(ILoggableTask otherTask)
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
        <td><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></td>
        <td><span class="parametername">otherTask</span></td>
        <td><p>The target task that retrieve a copy from the log task properties</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
