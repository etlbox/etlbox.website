---
title: "MergeProperties"
description: "Details for Class MergeProperties (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10195
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.MergeProperties">
  <h1 id="ETLBox_DataFlow_MergeProperties" data-uid="ETLBox.DataFlow.MergeProperties" class="text-break">Class MergeProperties
</h1>
  <div class="markdown level0 summary"><p>A list of properties that describe on which the DbMerge can perform which merge operation.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">MergeProperties</span></div>
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
  <h5 id="ETLBox_DataFlow_MergeProperties_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class MergeProperties
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_MergeProperties_CompareColumns_" data-uid="ETLBox.DataFlow.MergeProperties.CompareColumns*"></a>
  <h4 id="ETLBox_DataFlow_MergeProperties_CompareColumns" data-uid="ETLBox.DataFlow.MergeProperties.CompareColumns">CompareColumns</h4>
  <div class="markdown level1 summary"><p>Property names that should be use to compare if the values of a column are equal, so that
the DbMerge can decide if the column needs to be updated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<CompareColumn> CompareColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/comparecolumn">CompareColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MergeProperties_DeleteColumns_" data-uid="ETLBox.DataFlow.MergeProperties.DeleteColumns*"></a>
  <h4 id="ETLBox_DataFlow_MergeProperties_DeleteColumns" data-uid="ETLBox.DataFlow.MergeProperties.DeleteColumns">DeleteColumns</h4>
  <div class="markdown level1 summary"><p>List of property names and a to-be value that tells the DbMerge if this row can be deleted.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<DeleteColumn> DeleteColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/deletecolumn">DeleteColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MergeProperties_IdColumns_" data-uid="ETLBox.DataFlow.MergeProperties.IdColumns*"></a>
  <h4 id="ETLBox_DataFlow_MergeProperties_IdColumns" data-uid="ETLBox.DataFlow.MergeProperties.IdColumns">IdColumns</h4>
  <div class="markdown level1 summary"><p>Property names that are used to check if the columns match (id values are equal).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<IdColumn> IdColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/idcolumn">IdColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MergeProperties_UpdateColumns_" data-uid="ETLBox.DataFlow.MergeProperties.UpdateColumns*"></a>
  <h4 id="ETLBox_DataFlow_MergeProperties_UpdateColumns" data-uid="ETLBox.DataFlow.MergeProperties.UpdateColumns">UpdateColumns</h4>
  <div class="markdown level1 summary"><p>Property names that describe which columns are actually updated (if an update of the row is necessary).
Can be left empty, then all non id columns will be updated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<UpdateColumn> UpdateColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/updatecolumn">UpdateColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
