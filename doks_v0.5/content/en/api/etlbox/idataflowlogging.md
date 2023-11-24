---
title: "IDataFlowLogging"
description: "Details for Interface IDataFlowLogging (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10211
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IDataFlowLogging">
  <h1 id="ETLBox_IDataFlowLogging" data-uid="ETLBox.IDataFlowLogging" class="text-break">Interface IDataFlowLogging
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IDataFlowLogging_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowLogging
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IDataFlowLogging_LogThreshold_" data-uid="ETLBox.IDataFlowLogging.LogThreshold*"></a>
  <h4 id="ETLBox_IDataFlowLogging_LogThreshold" data-uid="ETLBox.IDataFlowLogging.LogThreshold">LogThreshold</h4>
  <div class="markdown level1 summary"><p>To avoid getting log message for every message, by default only log message are produced when 1000 rows
are processed. Set this property to decrease or increase this value.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int? LogThreshold { get; set; }
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
  <a id="ETLBox_IDataFlowLogging_OnProgress_" data-uid="ETLBox.IDataFlowLogging.OnProgress*"></a>
  <h4 id="ETLBox_IDataFlowLogging_OnProgress" data-uid="ETLBox.IDataFlowLogging.OnProgress">OnProgress</h4>
  <div class="markdown level1 summary"><p>This delegate is invoked each time the progress counter changes</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Action<int> OnProgress { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IDataFlowLogging_ProgressCount_" data-uid="ETLBox.IDataFlowLogging.ProgressCount*"></a>
  <h4 id="ETLBox_IDataFlowLogging_ProgressCount" data-uid="ETLBox.IDataFlowLogging.ProgressCount">ProgressCount</h4>
  <div class="markdown level1 summary"><p>The amount of rows the current component has already processed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int ProgressCount { get; }
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

{{< /rawhtml >}}
