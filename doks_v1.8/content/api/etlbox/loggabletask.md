---
title: "LoggableTask"
description: "Details for Class LoggableTask (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10261
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.LoggableTask">
  <h1 id="ETLBox_LoggableTask" data-uid="ETLBox.LoggableTask" class="text-break">Class LoggableTask</h1>
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
    public bool? DisableLogging { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_LogInstance_" data-uid="ETLBox.LoggableTask.LogInstance*"></a>
  <h4 id="ETLBox_LoggableTask_LogInstance" data-uid="ETLBox.LoggableTask.LogInstance">LogInstance</h4>
  <div class="markdown level1 summary"><p>The <a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger">ILogger</a> instance that is used for logging.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ILogger LogInstance { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger">ILogger</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_LogThreshold_" data-uid="ETLBox.LoggableTask.LogThreshold*"></a>
  <h4 id="ETLBox_LoggableTask_LogThreshold" data-uid="ETLBox.LoggableTask.LogThreshold">LogThreshold</h4>
  <div class="markdown level1 summary"><p>To avoid getting a log message for every row, by default only a log message is generated for each 1000 rows.
Setting this property to a value greater than 0 will change the default value.
The overall log threshold can be overwritten in the <a class="xref" href="/api/etlbox/settings">Settings</a> class.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int? LogThreshold { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_ParentTask_" data-uid="ETLBox.LoggableTask.ParentTask*"></a>
  <h4 id="ETLBox_LoggableTask_ParentTask" data-uid="ETLBox.LoggableTask.ParentTask">ParentTask</h4>
  <div class="markdown level1 summary"><p>Another loggable that which is the creator of this task.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LoggableTask ParentTask { get; set; }
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
        <td><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></td>
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
    public string TaskHash { get; set; }
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
    public string TaskName { get; set; }
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
    public string TaskType { get; set; }
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
  <a id="ETLBox_LoggableTask_LogDebug_" data-uid="ETLBox.LoggableTask.LogDebug*"></a>
  <h4 id="ETLBox_LoggableTask_LogDebug_System_String_System_Object___" data-uid="ETLBox.LoggableTask.LogDebug(System.String,System.Object[])">LogDebug(string, params object[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogDebug(string message, params object[] args)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_LogError_" data-uid="ETLBox.LoggableTask.LogError*"></a>
  <h4 id="ETLBox_LoggableTask_LogError_System_String_System_Object___" data-uid="ETLBox.LoggableTask.LogError(System.String,System.Object[])">LogError(string, params object[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogError(string message, params object[] args)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_LogFatal_" data-uid="ETLBox.LoggableTask.LogFatal*"></a>
  <h4 id="ETLBox_LoggableTask_LogFatal_System_String_System_Object___" data-uid="ETLBox.LoggableTask.LogFatal(System.String,System.Object[])">LogFatal(string, params object[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogFatal(string message, params object[] args)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_LogInfo_" data-uid="ETLBox.LoggableTask.LogInfo*"></a>
  <h4 id="ETLBox_LoggableTask_LogInfo_System_String_System_Object___" data-uid="ETLBox.LoggableTask.LogInfo(System.String,System.Object[])">LogInfo(string, params object[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogInfo(string message, params object[] args)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_LogInfoOrDebug_" data-uid="ETLBox.LoggableTask.LogInfoOrDebug*"></a>
  <h4 id="ETLBox_LoggableTask_LogInfoOrDebug_System_String_System_Object___" data-uid="ETLBox.LoggableTask.LogInfoOrDebug(System.String,System.Object[])">LogInfoOrDebug(string, params object[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogInfoOrDebug(string message, params object[] args)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_LogTrace_" data-uid="ETLBox.LoggableTask.LogTrace*"></a>
  <h4 id="ETLBox_LoggableTask_LogTrace_System_String_System_Object___" data-uid="ETLBox.LoggableTask.LogTrace(System.String,System.Object[])">LogTrace(string, params object[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogTrace(string message, params object[] args)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_LoggableTask_LogWarn_" data-uid="ETLBox.LoggableTask.LogWarn*"></a>
  <h4 id="ETLBox_LoggableTask_LogWarn_System_String_System_Object___" data-uid="ETLBox.LoggableTask.LogWarn(System.String,System.Object[])">LogWarn(string, params object[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected void LogWarn(string message, params object[] args)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>[]</td>
        <td><span class="parametername">args</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
