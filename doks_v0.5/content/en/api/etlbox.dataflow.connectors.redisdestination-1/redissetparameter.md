---
title: "RedisDestination<TInput>.RedisSetParameter"
description: "Details for Class RedisDestination<TInput>.RedisSetParameter (ETLBox.DataFlow.Connectors.RedisDestination`1)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.connectors.redisdestination`1"
weight: 10135
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.RedisSetParameter">
  <h1 id="ETLBox_DataFlow_Connectors_RedisDestination_1_RedisSetParameter" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.RedisSetParameter" class="text-break">Class RedisDestination&lt;TInput&gt;.RedisSetParameter
</h1>
  <div class="markdown level0 summary"><p>Additional redis parameter that are used when setting the key/value pairs in redis.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">RedisDestination&lt;TInput&gt;.RedisSetParameter</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Connectors.RedisDestination`1</h6>
  <h6><strong>Assembly</strong>: ETLBox.Redis.dll</h6>
  <h5 id="ETLBox_DataFlow_Connectors_RedisDestination_1_RedisSetParameter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class RedisDestination<TInput>.RedisSetParameter
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_RedisSetParameter_CommandFlags_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.RedisSetParameter.CommandFlags*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_RedisSetParameter_CommandFlags" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.RedisSetParameter.CommandFlags">CommandFlags</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CommandFlags CommandFlags { get; set; }
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
        <td><span class="xref">StackExchange.Redis.CommandFlags</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_RedisSetParameter_When_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.RedisSetParameter.When*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_RedisSetParameter_When" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.RedisSetParameter.When">When</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public When When { get; set; }
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
        <td><span class="xref">StackExchange.Redis.When</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
