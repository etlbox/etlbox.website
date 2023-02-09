---
title: "MergeMode"
description: "Details for Enum MergeMode (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10194
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.MergeMode">
  <h1 id="ETLBox_DataFlow_MergeMode" data-uid="ETLBox.DataFlow.MergeMode" class="text-break">Enum MergeMode
</h1>
  <div class="markdown level0 summary"><p>The mode of operation a DbMerge may work in.
Full means that source contains all data, NoDeletions that source contains all data but no deletions are executed,
Delta means that source has only delta information and deletions are deferred from a particular property and
OnlyUpdates means that only updates are applied to the destination.
InsertsOnly will only insert new rows into the destination.</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_MergeMode_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public enum MergeMode
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    <thead>
    <tbody>
      <tr>
        <td id="ETLBox_DataFlow_MergeMode_Delta">Delta</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_MergeMode_Full">Full</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_MergeMode_InsertsAndUpdates">InsertsAndUpdates</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_MergeMode_InsertsOnly">InsertsOnly</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_MergeMode_UpdatesOnly">UpdatesOnly</td>
        <td></td>
      </tr>
    </tbody>
  </thead></thead></table>

{{< /rawhtml >}}
