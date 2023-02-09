---
title: "DataFlow"
description: "Details for Class DataFlow (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10150
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.DataFlow">
  <h1 id="ETLBox_DataFlow_DataFlow" data-uid="ETLBox.DataFlow.DataFlow" class="text-break">Class DataFlow
</h1>
  <div class="markdown level0 summary"><p>Contains static information which affects all Dataflow tasks in ETLBox.
Here you can set the threshold value when information about processed records should appear.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">DataFlow</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_DataFlow_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class DataFlow
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_DataFlow_DataFlow_DEFAULT_LOG_THRESHOLD" data-uid="ETLBox.DataFlow.DataFlow.DEFAULT_LOG_THRESHOLD">DEFAULT_LOG_THRESHOLD</h4>
  <div class="markdown level1 summary"><p>The default value for <a class="xref" href="/api/etlbox.dataflow/dataflow#ETLBox_DataFlow_DataFlow_LogThreshold">LogThreshold</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public const int DEFAULT_LOG_THRESHOLD = 1000
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h4 id="ETLBox_DataFlow_DataFlow_DEFAULT_MAX_BUFFER_SIZE" data-uid="ETLBox.DataFlow.DataFlow.DEFAULT_MAX_BUFFER_SIZE">DEFAULT_MAX_BUFFER_SIZE</h4>
  <div class="markdown level1 summary"><p>The default value for <a class="xref" href="/api/etlbox.dataflow/dataflow#ETLBox_DataFlow_DataFlow_MaxBufferSize">MaxBufferSize</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public const int DEFAULT_MAX_BUFFER_SIZE = 100000
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_DataFlow_LogThreshold_" data-uid="ETLBox.DataFlow.DataFlow.LogThreshold*"></a>
  <h4 id="ETLBox_DataFlow_DataFlow_LogThreshold" data-uid="ETLBox.DataFlow.DataFlow.LogThreshold">LogThreshold</h4>
  <div class="markdown level1 summary"><p>To avoid getting a log message for every row, by default only a log message each 1000 rows.
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_DataFlow_MaxBufferSize_" data-uid="ETLBox.DataFlow.DataFlow.MaxBufferSize*"></a>
  <h4 id="ETLBox_DataFlow_DataFlow_MaxBufferSize" data-uid="ETLBox.DataFlow.DataFlow.MaxBufferSize">MaxBufferSize</h4>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_DataFlow_ClearSettings_" data-uid="ETLBox.DataFlow.DataFlow.ClearSettings*"></a>
  <h4 id="ETLBox_DataFlow_DataFlow_ClearSettings" data-uid="ETLBox.DataFlow.DataFlow.ClearSettings">ClearSettings()</h4>
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
