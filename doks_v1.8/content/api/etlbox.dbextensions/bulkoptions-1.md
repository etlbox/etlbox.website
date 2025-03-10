---
title: "BulkOptions<T>"
description: "Details for Class BulkOptions<T> (ETLBox.DbExtensions)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dbextensions"
weight: 10205
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbExtensions.BulkOptions`1">
  <h1 id="ETLBox_DbExtensions_BulkOptions_1" data-uid="ETLBox.DbExtensions.BulkOptions`1" class="text-break">Class BulkOptions&lt;T&gt;</h1>
  <div class="markdown level0 summary"><p>Options used for BulkInsert/BulkUpdate/BulkDelete operations.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1">BulkOptionsShared</a>&lt;T&gt;</div>
    <div class="level2"><span class="xref">BulkOptions&lt;T&gt;</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_BatchSize">BulkOptionsShared&lt;T&gt;.BatchSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_ReadGeneratedValues">BulkOptionsShared&lt;T&gt;.ReadGeneratedValues</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_ColumnConverters">BulkOptionsShared&lt;T&gt;.ColumnConverters</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_AllowIdentityInsert">BulkOptionsShared&lt;T&gt;.AllowIdentityInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_OnProgress">BulkOptionsShared&lt;T&gt;.OnProgress</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_ErrorData">BulkOptionsShared&lt;T&gt;.ErrorData</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_RedirectErroneousBatches">BulkOptionsShared&lt;T&gt;.RedirectErroneousBatches</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_TableName">BulkOptionsShared&lt;T&gt;.TableName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_TablePrefix">BulkOptionsShared&lt;T&gt;.TablePrefix</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_TableSuffix">BulkOptionsShared&lt;T&gt;.TableSuffix</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_IgnoreDefaultColumnsOnInsert">BulkOptionsShared&lt;T&gt;.IgnoreDefaultColumnsOnInsert</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_ColumnMapping">BulkOptionsShared&lt;T&gt;.ColumnMapping</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_IdColumns">BulkOptionsShared&lt;T&gt;.IdColumns</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)">object.Equals(object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)">object.Equals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode">object.GetHashCode()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gettype">object.GetType()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DbExtensions</h6>
  <h6><strong>Assembly</strong>: ETLBox.DbExtensions.dll</h6>
  <h5 id="ETLBox_DbExtensions_BulkOptions_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class BulkOptions<T> : BulkOptionsShared<T>
```

{{< rawhtml >}}
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">T</span></td>
        <td><p>Type of data used for the operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DbExtensions_BulkOptions_1_AfterBatchWrite_" data-uid="ETLBox.DbExtensions.BulkOptions`1.AfterBatchWrite*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptions_1_AfterBatchWrite" data-uid="ETLBox.DbExtensions.BulkOptions`1.AfterBatchWrite">AfterBatchWrite</h4>
  <div class="markdown level1 summary"><p>Action to perform tasks after batch write.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<T[]> AfterBatchWrite { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;T[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptions_1_BeforeBatchWrite_" data-uid="ETLBox.DbExtensions.BulkOptions`1.BeforeBatchWrite*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptions_1_BeforeBatchWrite" data-uid="ETLBox.DbExtensions.BulkOptions`1.BeforeBatchWrite">BeforeBatchWrite</h4>
  <div class="markdown level1 summary"><p>Function to modify data before batch write.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<T[], T[]> BeforeBatchWrite { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;T[], T[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptions_1_UpdateColumns_" data-uid="ETLBox.DbExtensions.BulkOptions`1.UpdateColumns*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptions_1_UpdateColumns" data-uid="ETLBox.DbExtensions.BulkOptions`1.UpdateColumns">UpdateColumns</h4>
  <div class="markdown level1 summary"><p>Specify the property names for update operations. If left empty, all non-ID columns are updated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<UpdateColumn> UpdateColumns { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/updatecolumn">UpdateColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
