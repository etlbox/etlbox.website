---
title: "Logging"
description: "Details for Class Logging (ETLBox.Logging)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.logging"
weight: 10280
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Logging.Logging">
  <h1 id="ETLBox_Logging_Logging" data-uid="ETLBox.Logging.Logging" class="text-break">Class Logging
</h1>
  <div class="markdown level0 summary"><p>Contains static information which affects all ETLBox tasks and general logging behavior for all components.
Here you can set default connections string, disable the logging for all processes or set the current stage used in your logging configuration.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">Logging</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  <h5 id="ETLBox_Logging_Logging_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class Logging
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_Logging_Logging_DEFAULTLOADPROCESSTABLENAME" data-uid="ETLBox.Logging.Logging.DEFAULTLOADPROCESSTABLENAME">DEFAULTLOADPROCESSTABLENAME</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public const string DEFAULTLOADPROCESSTABLENAME = &quot;etlbox_loadprocess&quot;
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
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
  <h4 id="ETLBox_Logging_Logging_DEFAULTLOGTABLENAME" data-uid="ETLBox.Logging.Logging.DEFAULTLOGTABLENAME">DEFAULTLOGTABLENAME</h4>
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Logging_Logging_CurrentLoadProcess_" data-uid="ETLBox.Logging.Logging.CurrentLoadProcess*"></a>
  <h4 id="ETLBox_Logging_Logging_CurrentLoadProcess" data-uid="ETLBox.Logging.Logging.CurrentLoadProcess">CurrentLoadProcess</h4>
  <div class="markdown level1 summary"><p>If you used the logging task StartLoadProces (and created the corresponding load process table before)
then this Property will hold the current load process information.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static LoadProcess CurrentLoadProcess { get; }
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
        <td><a class="xref" href="/api/etlbox.logging/loadprocess">LoadProcess</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_Logging_DisableAllLogging_" data-uid="ETLBox.Logging.Logging.DisableAllLogging*"></a>
  <h4 id="ETLBox_Logging_Logging_DisableAllLogging" data-uid="ETLBox.Logging.Logging.DisableAllLogging">DisableAllLogging</h4>
  <div class="markdown level1 summary"><p>This is the default value for all control and dataflow components. If set to true, no log messages will be produced.
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_Logging_LoadProcessTable_" data-uid="ETLBox.Logging.Logging.LoadProcessTable*"></a>
  <h4 id="ETLBox_Logging_Logging_LoadProcessTable" data-uid="ETLBox.Logging.Logging.LoadProcessTable">LoadProcessTable</h4>
  <div class="markdown level1 summary"><p>TableName of the current load process logging table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static string LoadProcessTable { get; set; }
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
  <a id="ETLBox_Logging_Logging_LogInstance_" data-uid="ETLBox.Logging.Logging.LogInstance*"></a>
  <h4 id="ETLBox_Logging_Logging_LogInstance" data-uid="ETLBox.Logging.Logging.LogInstance">LogInstance</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static ILogger LogInstance { get; set; }
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
        <td><span class="xref">Microsoft.Extensions.Logging.ILogger</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_Logging_LogTable_" data-uid="ETLBox.Logging.Logging.LogTable*"></a>
  <h4 id="ETLBox_Logging_Logging_LogTable" data-uid="ETLBox.Logging.Logging.LogTable">LogTable</h4>
  <div class="markdown level1 summary"><p>TableName of the current log process logging table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static string LogTable { get; set; }
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
  <a id="ETLBox_Logging_Logging_STAGE_" data-uid="ETLBox.Logging.Logging.STAGE*"></a>
  <h4 id="ETLBox_Logging_Logging_STAGE" data-uid="ETLBox.Logging.Logging.STAGE">STAGE</h4>
  <div class="markdown level1 summary"><p>For logging purposes only. If the stage is set, you can access the stage value in the logging configuration.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [Obsolete]
public static string STAGE { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Logging_Logging_ClearSettings_" data-uid="ETLBox.Logging.Logging.ClearSettings*"></a>
  <h4 id="ETLBox_Logging_Logging_ClearSettings" data-uid="ETLBox.Logging.Logging.ClearSettings">ClearSettings()</h4>
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
