---
title: "MergeableRow"
description: "Details for Class MergeableRow (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10142
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.MergeableRow">
  <h1 id="ETLBox_DataFlow_MergeableRow" data-uid="ETLBox.DataFlow.MergeableRow" class="text-break">Class MergeableRow
</h1>
  <div class="markdown level0 summary"><p>Inherit from this class if you want to use your data object with a DBMerge,
but don't want to implement <a class="xref" href="/api/etlbox/imergeablerow">IMergeableRow</a> yourself.
You still needs that you have flagged the id properties with the IdColumn attribute
and the properties use to identify equal object flagged with the UpdateColumn attribute.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">MergeableRow</span></div>
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
  <h5 id="ETLBox_DataFlow_MergeableRow_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class MergeableRow
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_MergeableRow_ChangeAction_" data-uid="ETLBox.DataFlow.MergeableRow.ChangeAction*"></a>
  <h4 id="ETLBox_DataFlow_MergeableRow_ChangeAction" data-uid="ETLBox.DataFlow.MergeableRow.ChangeAction">ChangeAction</h4>
  <div class="markdown level1 summary"><p>The result of a merge operation - this is either 'I' for Insertion,
'U' for Updates, 'E' for existing records (no change), and 'D' for deleted records.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ChangeAction? ChangeAction { get; set; }
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
        <td><a class="xref" href="/api/etlbox/changeaction">ChangeAction</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MergeableRow_ChangeDate_" data-uid="ETLBox.DataFlow.MergeableRow.ChangeDate*"></a>
  <h4 id="ETLBox_DataFlow_MergeableRow_ChangeDate" data-uid="ETLBox.DataFlow.MergeableRow.ChangeDate">ChangeDate</h4>
  <div class="markdown level1 summary"><p>Date and time when the object was considered for merging.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTime ChangeDate { get; set; }
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
        <td><span class="xref">System.DateTime</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
