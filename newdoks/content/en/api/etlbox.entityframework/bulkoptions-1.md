---
title: "BulkOptions<T>"
description: "Details for Class BulkOptions<T> (ETLBox.EntityFramework)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.entityframework"
weight: 10257
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.EntityFramework.BulkOptions`1">
  <h1 id="ETLBox_EntityFramework_BulkOptions_1" data-uid="ETLBox.EntityFramework.BulkOptions`1" class="text-break">Class BulkOptions&lt;T&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">BulkOptions&lt;T&gt;</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.EntityFramework</h6>
  <h6><strong>Assembly</strong>: ETLBox.EntityFramework.dll</h6>
  <h5 id="ETLBox_EntityFramework_BulkOptions_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class BulkOptions<T>
```

{{< rawhtml >}}
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_EntityFramework_BulkOptions_1_AfterBatchWrite_" data-uid="ETLBox.EntityFramework.BulkOptions`1.AfterBatchWrite*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_AfterBatchWrite" data-uid="ETLBox.EntityFramework.BulkOptions`1.AfterBatchWrite">AfterBatchWrite</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<T[]> AfterBatchWrite { get; set; }
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
        <td><span class="xref">System.Action</span>&lt;T[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOptions_1_AllowIdentityInsert_" data-uid="ETLBox.EntityFramework.BulkOptions`1.AllowIdentityInsert*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_AllowIdentityInsert" data-uid="ETLBox.EntityFramework.BulkOptions`1.AllowIdentityInsert">AllowIdentityInsert</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool AllowIdentityInsert { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOptions_1_BatchSize_" data-uid="ETLBox.EntityFramework.BulkOptions`1.BatchSize*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_BatchSize" data-uid="ETLBox.EntityFramework.BulkOptions`1.BatchSize">BatchSize</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int BatchSize { get; set; }
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
  <a id="ETLBox_EntityFramework_BulkOptions_1_BeforeBatchWrite_" data-uid="ETLBox.EntityFramework.BulkOptions`1.BeforeBatchWrite*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_BeforeBatchWrite" data-uid="ETLBox.EntityFramework.BulkOptions`1.BeforeBatchWrite">BeforeBatchWrite</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<T[], T[]> BeforeBatchWrite { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;T[], T[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOptions_1_ColumnConverters_" data-uid="ETLBox.EntityFramework.BulkOptions`1.ColumnConverters*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_ColumnConverters" data-uid="ETLBox.EntityFramework.BulkOptions`1.ColumnConverters">ColumnConverters</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ColumnConverter> ColumnConverters { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow.connectors/columnconverter">ColumnConverter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOptions_1_ErrorData_" data-uid="ETLBox.EntityFramework.BulkOptions`1.ErrorData*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_ErrorData" data-uid="ETLBox.EntityFramework.BulkOptions`1.ErrorData">ErrorData</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ETLBoxError> ErrorData { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow/etlboxerror">ETLBoxError</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOptions_1_MergeMode_" data-uid="ETLBox.EntityFramework.BulkOptions`1.MergeMode*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_MergeMode" data-uid="ETLBox.EntityFramework.BulkOptions`1.MergeMode">MergeMode</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MergeMode MergeMode { get; set; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/mergemode">MergeMode</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOptions_1_OnProgress_" data-uid="ETLBox.EntityFramework.BulkOptions`1.OnProgress*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_OnProgress" data-uid="ETLBox.EntityFramework.BulkOptions`1.OnProgress">OnProgress</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<int> OnProgress { get; set; }
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
        <td><span class="xref">System.Action</span>&lt;<span class="xref">System.Int32</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOptions_1_ReadGeneratedValues_" data-uid="ETLBox.EntityFramework.BulkOptions`1.ReadGeneratedValues*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_ReadGeneratedValues" data-uid="ETLBox.EntityFramework.BulkOptions`1.ReadGeneratedValues">ReadGeneratedValues</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool ReadGeneratedValues { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOptions_1_RedirectErroneousBatches_" data-uid="ETLBox.EntityFramework.BulkOptions`1.RedirectErroneousBatches*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOptions_1_RedirectErroneousBatches" data-uid="ETLBox.EntityFramework.BulkOptions`1.RedirectErroneousBatches">RedirectErroneousBatches</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool RedirectErroneousBatches { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
