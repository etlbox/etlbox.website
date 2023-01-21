---
title: "ControlFlow"
description: "Details for Class ControlFlow (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10033
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.ControlFlow">
  <h1 id="ETLBox_ControlFlow_ControlFlow" data-uid="ETLBox.ControlFlow.ControlFlow" class="text-break">Class ControlFlow
  </h1>
  <div class="markdown level0 summary"><p>Contains static information which affects all ETLBox tasks and general logging behavior for all components.
Here you can set default connections string, disbale the logging for all processes or set the current stage used in your logging configuration.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">ControlFlow</span></div>
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
  <h5 id="ETLBox_ControlFlow_ControlFlow_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class ControlFlow
```

{{< rawhtml >}}
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_ControlFlow_DefaultDbConnection_" data-uid="ETLBox.ControlFlow.ControlFlow.DefaultDbConnection*"></a>
  <h4 id="ETLBox_ControlFlow_ControlFlow_DefaultDbConnection" data-uid="ETLBox.ControlFlow.ControlFlow.DefaultDbConnection">DefaultDbConnection</h4>
  <div class="markdown level1 summary"><p>You can store your general database connection string here. This connection will then used by all Tasks where no DB connection is excplicitly set.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IConnectionManager DefaultDbConnection { get; set; }
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_ControlFlow_ControlFlow_ClearSettings_" data-uid="ETLBox.ControlFlow.ControlFlow.ClearSettings*"></a>
  <h4 id="ETLBox_ControlFlow_ControlFlow_ClearSettings" data-uid="ETLBox.ControlFlow.ControlFlow.ClearSettings">ClearSettings()</h4>
  <div class="markdown level1 summary"><p>Set all settings back to default (which is null or false)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void ClearSettings()
```

{{< rawhtml >}}

{{< /rawhtml >}}
