---
title: "LogSettings"
description: "Details for Class LogSettings (ETLBox.Logging)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.logging"
weight: 10269
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Logging.LogSettings">
  <h1 id="ETLBox_Logging_LogSettings" data-uid="ETLBox.Logging.LogSettings" class="text-break">Class LogSettings
</h1>
  <div class="markdown level0 summary"><p>Contains static information which affects all ETLBox tasks and general logging behavior for all components.
Here you can set default connections string, disable the logging for all processes or set the current stage used in your logging configuration.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">LogSettings</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Logging</h6>
  <h6><strong>Assembly</strong>: ETLBox.Logging.dll</h6>
  <h5 id="ETLBox_Logging_LogSettings_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class LogSettings
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_Logging_LogSettings_DEFAULTLOADPROCESSTABLENAME" data-uid="ETLBox.Logging.LogSettings.DEFAULTLOADPROCESSTABLENAME">DEFAULTLOADPROCESSTABLENAME</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public const string DEFAULTLOADPROCESSTABLENAME = &quot;etlbox_loadprocess&quot;
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h4 id="ETLBox_Logging_LogSettings_DEFAULTLOGTABLENAME" data-uid="ETLBox.Logging.LogSettings.DEFAULTLOGTABLENAME">DEFAULTLOGTABLENAME</h4>
  <div class="markdown level1 summary"><p>The default log table name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public const string DEFAULTLOGTABLENAME = &quot;etlbox_log&quot;
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Logging_LogSettings_CurrentLoadProcess_" data-uid="ETLBox.Logging.LogSettings.CurrentLoadProcess*"></a>
  <h4 id="ETLBox_Logging_LogSettings_CurrentLoadProcess" data-uid="ETLBox.Logging.LogSettings.CurrentLoadProcess">CurrentLoadProcess</h4>
  <div class="markdown level1 summary"><p>If you used the logging task StartLoadProces (and created the corresponding load process table before)
then this Property will hold the current load process information.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static LoadProcess CurrentLoadProcess { get; }
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogSettings_LoadProcessTable_" data-uid="ETLBox.Logging.LogSettings.LoadProcessTable*"></a>
  <h4 id="ETLBox_Logging_LogSettings_LoadProcessTable" data-uid="ETLBox.Logging.LogSettings.LoadProcessTable">LoadProcessTable</h4>
  <div class="markdown level1 summary"><p>TableName of the current load process logging table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string LoadProcessTable { get; set; }
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
  <a id="ETLBox_Logging_LogSettings_LogTable_" data-uid="ETLBox.Logging.LogSettings.LogTable*"></a>
  <h4 id="ETLBox_Logging_LogSettings_LogTable" data-uid="ETLBox.Logging.LogSettings.LogTable">LogTable</h4>
  <div class="markdown level1 summary"><p>TableName of the current log process logging table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string LogTable { get; set; }
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
  <a id="ETLBox_Logging_LogSettings_ClearSettings_" data-uid="ETLBox.Logging.LogSettings.ClearSettings*"></a>
  <h4 id="ETLBox_Logging_LogSettings_ClearSettings" data-uid="ETLBox.Logging.LogSettings.ClearSettings">ClearSettings()</h4>
  <div class="markdown level1 summary"><p>Set all settings back to default (which is null or false)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ClearSettings()
```

{{< rawhtml >}}

{{< /rawhtml >}}
