---
title: "ILoggableTask"
description: "Details for Interface ILoggableTask (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10262
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ILoggableTask">
  <h1 id="ETLBox_ILoggableTask" data-uid="ETLBox.ILoggableTask" class="text-break">Interface ILoggableTask
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ILoggableTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface ILoggableTask
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ILoggableTask_DisableLogging_" data-uid="ETLBox.ILoggableTask.DisableLogging*"></a>
  <h4 id="ETLBox_ILoggableTask_DisableLogging" data-uid="ETLBox.ILoggableTask.DisableLogging">DisableLogging</h4>
  <div class="markdown level1 summary"><p>If set to true, the component or task won't produce any log output.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool? DisableLogging { get; set; }
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
  <a id="ETLBox_ILoggableTask_LogInstance_" data-uid="ETLBox.ILoggableTask.LogInstance*"></a>
  <h4 id="ETLBox_ILoggableTask_LogInstance" data-uid="ETLBox.ILoggableTask.LogInstance">LogInstance</h4>
  <div class="markdown level1 summary"><p>The <a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger">ILogger</a> instance that is used for logging.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ILogger LogInstance { get; set; }
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
  <a id="ETLBox_ILoggableTask_ParentTask_" data-uid="ETLBox.ILoggableTask.ParentTask*"></a>
  <h4 id="ETLBox_ILoggableTask_ParentTask" data-uid="ETLBox.ILoggableTask.ParentTask">ParentTask</h4>
  <div class="markdown level1 summary"><p>Another loggable that which is the creator of this task.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    LoggableTask ParentTask { get; set; }
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
  <a id="ETLBox_ILoggableTask_TaskHash_" data-uid="ETLBox.ILoggableTask.TaskHash*"></a>
  <h4 id="ETLBox_ILoggableTask_TaskHash" data-uid="ETLBox.ILoggableTask.TaskHash">TaskHash</h4>
  <div class="markdown level1 summary"><p>Creates a unique hash value to identify the task or component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string TaskHash { get; set; }
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
  <a id="ETLBox_ILoggableTask_TaskName_" data-uid="ETLBox.ILoggableTask.TaskName*"></a>
  <h4 id="ETLBox_ILoggableTask_TaskName" data-uid="ETLBox.ILoggableTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string TaskName { get; set; }
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
  <a id="ETLBox_ILoggableTask_TaskType_" data-uid="ETLBox.ILoggableTask.TaskType*"></a>
  <h4 id="ETLBox_ILoggableTask_TaskType" data-uid="ETLBox.ILoggableTask.TaskType">TaskType</h4>
  <div class="markdown level1 summary"><p>A type description of the task or component. This is usually the class name.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string TaskType { get; set; }
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

{{< /rawhtml >}}
