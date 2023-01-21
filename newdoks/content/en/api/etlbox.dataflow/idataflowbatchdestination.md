---
title: "IDataFlowBatchDestination"
description: "Details for Interface IDataFlowBatchDestination (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10163
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.IDataFlowBatchDestination">
  <h1 id="ETLBox_DataFlow_IDataFlowBatchDestination" data-uid="ETLBox.DataFlow.IDataFlowBatchDestination" class="text-break">Interface IDataFlowBatchDestination
  </h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_IDataFlowBatchDestination_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IDataFlowBatchDestination
```

{{< rawhtml >}}
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_DataFlow_IDataFlowBatchDestination_BatchSize_" data-uid="ETLBox.DataFlow.IDataFlowBatchDestination.BatchSize*"></a>
  <h4 id="ETLBox_DataFlow_IDataFlowBatchDestination_BatchSize" data-uid="ETLBox.DataFlow.IDataFlowBatchDestination.BatchSize">BatchSize</h4>
  <div class="markdown level1 summary"><p>Batch size that is used when inserted data in batches</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int BatchSize { get; set; }
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
