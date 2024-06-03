---
title: "Settings"
description: "Details for Class Settings (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10324
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Settings">
  <h1 id="ETLBox_Settings" data-uid="ETLBox.Settings" class="text-break">Class Settings
</h1>
  <div class="markdown level0 summary"><p>Contains static information which affects all Dataflow tasks in ETLBox.
Here you can set the threshold value when information about processed records should appear.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">Settings</span></div>
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
  <h5 id="ETLBox_Settings_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class Settings
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_Settings_DEFAULT_LOG_THRESHOLD" data-uid="ETLBox.Settings.DEFAULT_LOG_THRESHOLD">DEFAULT_LOG_THRESHOLD</h4>
  <div class="markdown level1 summary"><p>The default value for <a class="xref" href="/api/etlbox/settings#ETLBox_Settings_LogThreshold">LogThreshold</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public const int DEFAULT_LOG_THRESHOLD = 1000
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h4 id="ETLBox_Settings_DEFAULT_MAX_BUFFER_SIZE" data-uid="ETLBox.Settings.DEFAULT_MAX_BUFFER_SIZE">DEFAULT_MAX_BUFFER_SIZE</h4>
  <div class="markdown level1 summary"><p>The default value for <a class="xref" href="/api/etlbox/settings#ETLBox_Settings_MaxBufferSize">MaxBufferSize</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public const int DEFAULT_MAX_BUFFER_SIZE = 100000
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Settings_AdditionalScope_" data-uid="ETLBox.Settings.AdditionalScope*"></a>
  <h4 id="ETLBox_Settings_AdditionalScope" data-uid="ETLBox.Settings.AdditionalScope">AdditionalScope</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Dictionary<string, object> AdditionalScope { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2">Dictionary</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Settings_AllowMultipleExecutions_" data-uid="ETLBox.Settings.AllowMultipleExecutions*"></a>
  <h4 id="ETLBox_Settings_AllowMultipleExecutions" data-uid="ETLBox.Settings.AllowMultipleExecutions">AllowMultipleExecutions</h4>
  <div class="markdown level1 summary"><p>If set to false, components in a network can only be executed once.
The recommendation is to set this property to false, as reusing components
in the same or different networks may lead to unexpected results (and possible side effects
to existing data).
But to avoid unexpected behavior, this property is set to true by default.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool AllowMultipleExecutions { get; set; }
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
  <a id="ETLBox_Settings_DefaultDbConnection_" data-uid="ETLBox.Settings.DefaultDbConnection*"></a>
  <h4 id="ETLBox_Settings_DefaultDbConnection" data-uid="ETLBox.Settings.DefaultDbConnection">DefaultDbConnection</h4>
  <div class="markdown level1 summary"><p>You can store your general database connection string here. This connection will then used by all Tasks where no DB connection is excplicitly set.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IConnectionManager DefaultDbConnection { get; set; }
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Settings_DisableAllLogging_" data-uid="ETLBox.Settings.DisableAllLogging*"></a>
  <h4 id="ETLBox_Settings_DisableAllLogging" data-uid="ETLBox.Settings.DisableAllLogging">DisableAllLogging</h4>
  <div class="markdown level1 summary"><p>If set to true, no log messages will be produced for all components.
Logging can be enabled/disabled for all components individually using the DisableLogging property on each component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool DisableAllLogging { get; set; }
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
  <a id="ETLBox_Settings_LogInstance_" data-uid="ETLBox.Settings.LogInstance*"></a>
  <h4 id="ETLBox_Settings_LogInstance" data-uid="ETLBox.Settings.LogInstance">LogInstance</h4>
  <div class="markdown level1 summary"><p>An ILogger instance which is used by all components, unless there is a specific logger
instance set for a component individually. If the component has no logger instance set,
and the <a class="xref" href="/api/etlbox/settings#ETLBox_Settings_LogInstance">LogInstance</a> is null, no logging will be performed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static ILogger LogInstance { get; set; }
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
  <a id="ETLBox_Settings_LogThreshold_" data-uid="ETLBox.Settings.LogThreshold*"></a>
  <h4 id="ETLBox_Settings_LogThreshold" data-uid="ETLBox.Settings.LogThreshold">LogThreshold</h4>
  <div class="markdown level1 summary"><p>To avoid getting a log message for every row, by default only a log message is generated every 1000 rows.
Setting this property will decrease or increase this default value for all dataflow components.
The individual log threshold can be overwritten in each component separately.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int? LogThreshold { get; set; }
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
  <a id="ETLBox_Settings_MaxBufferSize_" data-uid="ETLBox.Settings.MaxBufferSize*"></a>
  <h4 id="ETLBox_Settings_MaxBufferSize" data-uid="ETLBox.Settings.MaxBufferSize">MaxBufferSize</h4>
  <div class="markdown level1 summary"><p>The default maximum size for all buffers in the dataflow.
This is the default value. Each maximum buffer size value can overwritten in a dataflow component seperately.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int MaxBufferSize { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Settings_ClearSettings_" data-uid="ETLBox.Settings.ClearSettings*"></a>
  <h4 id="ETLBox_Settings_ClearSettings" data-uid="ETLBox.Settings.ClearSettings">ClearSettings()</h4>
  <div class="markdown level1 summary"><p>Set all settings back to default values.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ClearSettings()
```

{{< rawhtml >}}

{{< /rawhtml >}}
