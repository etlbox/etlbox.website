---
title: "RowCountOptions"
description: "Details for Enum RowCountOptions (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10062
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.RowCountOptions">
  <h1 id="ETLBox_ControlFlow_RowCountOptions" data-uid="ETLBox.ControlFlow.RowCountOptions" class="text-break">Enum RowCountOptions
</h1>
  <div class="markdown level0 summary"><p>Used in the RowCountTask. None forces the RowCountTask to do a normal COUNT(<em>) and works on all databases.
QuickQueryMode only works on SqlServer and uses the partition table which can be much faster on tables with a big amount of data.
DirtyRead does a normal COUNT(</em>) but also reading uncommitted reads.</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_RowCountOptions_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public enum RowCountOptions
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    <thead>
    <tbody>
      <tr>
        <td id="ETLBox_ControlFlow_RowCountOptions_DirtyRead">DirtyRead</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_ControlFlow_RowCountOptions_None">None</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_ControlFlow_RowCountOptions_QuickQueryMode">QuickQueryMode</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_ControlFlow_RowCountOptions_ReadOnlyFirstRow">ReadOnlyFirstRow</td>
        <td></td>
      </tr>
    </tbody>
  </thead></thead></table>

{{< /rawhtml >}}
