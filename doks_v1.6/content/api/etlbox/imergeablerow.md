---
title: "IMergeableRow"
description: "Details for Interface IMergeableRow (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10263
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.IMergeableRow">
  <h1 id="ETLBox_IMergeableRow" data-uid="ETLBox.IMergeableRow" class="text-break">Interface IMergeableRow
</h1>
  <div class="markdown level0 summary"><p>Represents table row in destination database when inserting data using <a class="xref" href="/api/etlbox.dataflow/dbmerge-1">DbMerge&lt;TInput&gt;</a></p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_IMergeableRow_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface IMergeableRow
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_IMergeableRow_ChangeAction_" data-uid="ETLBox.IMergeableRow.ChangeAction*"></a>
  <h4 id="ETLBox_IMergeableRow_ChangeAction" data-uid="ETLBox.IMergeableRow.ChangeAction">ChangeAction</h4>
  <div class="markdown level1 summary"><p>The result of a merge operation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ChangeAction? ChangeAction { get; set; }
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
        <td><a class="xref" href="/api/etlbox/changeaction">ChangeAction</a>?</td>
        <td><p>null means not determined yet</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_IMergeableRow_ChangeDate_" data-uid="ETLBox.IMergeableRow.ChangeDate*"></a>
  <h4 id="ETLBox_IMergeableRow_ChangeDate" data-uid="ETLBox.IMergeableRow.ChangeDate">ChangeDate</h4>
  <div class="markdown level1 summary"><p>Time when the object was considered for merging</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    DateTime ChangeDate { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.datetime">DateTime</a></td>
        <td><p>null means not determined yet</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_IMergeableRow_ChangeDate_remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p>When <a class="xref" href="/api/etlbox/imergeablerow#ETLBox_IMergeableRow_ChangeAction">ChangeAction</a> is set, this value is set to <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.datetime.now">Now</a></p>
</div>

{{< /rawhtml >}}
