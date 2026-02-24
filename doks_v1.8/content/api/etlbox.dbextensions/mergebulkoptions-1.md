---
title: "MergeBulkOptions<T>"
description: "Details for Class MergeBulkOptions<T> (ETLBox.DbExtensions)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dbextensions"
weight: 10208
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1">
  <h1 id="ETLBox_DbExtensions_MergeBulkOptions_1" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1" class="text-break">Class MergeBulkOptions&lt;T&gt;</h1>
  <div class="markdown level0 summary"><p>Options used for BulkMerge operations.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1">BulkOptionsShared</a>&lt;T&gt;</div>
    <div class="level2"><span class="xref">MergeBulkOptions&lt;T&gt;</span></div>
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
  <h5 id="ETLBox_DbExtensions_MergeBulkOptions_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class MergeBulkOptions<T> : BulkOptionsShared<T>
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
        <td><p>Type of data used for operation</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_CacheMode_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.CacheMode*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_CacheMode" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.CacheMode">CacheMode</h4>
  <div class="markdown level1 summary"><p>Determines the cache mode. Default is <a class="xref" href="/api/etlbox/cachemode#ETLBox_CacheMode_Full">Full</a>.
If set to <a class="xref" href="/api/etlbox/cachemode#ETLBox_CacheMode_Partial">Partial</a>, only data that is needed to process the current batch
is loaded from the destination table. This will slow down execution performance,
but memory consumption may decrease.
If <a class="xref" href="/api/etlbox.dbextensions/mergebulkoptions-1#ETLBox_DbExtensions_MergeBulkOptions_1_MergeMode">MergeMode</a> is set to <a class="xref" href="/api/etlbox/mergemode#ETLBox_MergeMode_Full">Full</a>, this setting is ignored
(<a class="xref" href="/api/etlbox/cachemode#ETLBox_CacheMode_Full">Full</a> is used)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CacheMode CacheMode { get; set; }
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
        <td><a class="xref" href="/api/etlbox/cachemode">CacheMode</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_CompareColumns_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.CompareColumns*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_CompareColumns" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.CompareColumns">CompareColumns</h4>
  <div class="markdown level1 summary"><p>Define properties to check for equality during merge to decide
if an update is needed.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<CompareColumn> CompareColumns { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/comparecolumn">CompareColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_CompareFunc_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.CompareFunc*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_CompareFunc" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.CompareFunc">CompareFunc</h4>
  <div class="markdown level1 summary"><p>By default, the CompareColumns are used to determine if a row needs to be updated.
You can override the matching behavior using your own compare function which takes the current row and the
row from the destination table as input and returns true if the row needs to be updated, and false if not.
You still need to define the CompareColumns to specify which columns should be retrieved from the destination table.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<object, object, bool> CompareFunc { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-3">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_DeleteColumns_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.DeleteColumns*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_DeleteColumns" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.DeleteColumns">DeleteColumns</h4>
  <div class="markdown level1 summary"><p>List property names along with a specific value indicating if a row is eligible for deletion during the merge operation.
This option provides a way to mark rows for deletion based on certain criteria.
Only applies if <a class="xref" href="/api/etlbox.dbextensions/mergebulkoptions-1#ETLBox_DbExtensions_MergeBulkOptions_1_MergeMode">MergeMode</a> is set to <a class="xref" href="/api/etlbox/mergemode#ETLBox_MergeMode_Delta">Delta</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<DeleteColumn> DeleteColumns { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/deletecolumn">DeleteColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_EvictionPolicy_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.EvictionPolicy*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_EvictionPolicy" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.EvictionPolicy">EvictionPolicy</h4>
  <div class="markdown level1 summary"><p>The eviction policy for the cache.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CacheEvictionPolicy EvictionPolicy { get; set; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/cacheevictionpolicy">CacheEvictionPolicy</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_FindDuplicates_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.FindDuplicates*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_FindDuplicates" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.FindDuplicates">FindDuplicates</h4>
  <div class="markdown level1 summary"><p>Indicates whether to look for duplicate records</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool FindDuplicates { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_MaxCacheSize_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.MaxCacheSize*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_MaxCacheSize" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.MaxCacheSize">MaxCacheSize</h4>
  <div class="markdown level1 summary"><p>The maximum number of records to cache in memory.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int MaxCacheSize { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_MergeMode_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.MergeMode*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_MergeMode" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.MergeMode">MergeMode</h4>
  <div class="markdown level1 summary"><p>Specifies the merge mode. Default is <a class="xref" href="/api/etlbox/mergemode#ETLBox_MergeMode_Full">Full</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MergeMode MergeMode { get; set; }
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
        <td><a class="xref" href="/api/etlbox/mergemode">MergeMode</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_ReadConnection_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.ReadConnection*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_ReadConnection" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.ReadConnection">ReadConnection</h4>
  <div class="markdown level1 summary"><p>Only applies if <a class="xref" href="/api/etlbox.dbextensions/mergebulkoptions-1#ETLBox_DbExtensions_MergeBulkOptions_1_CacheMode">CacheMode</a> is set to <a class="xref" href="/api/etlbox/cachemode#ETLBox_CacheMode_Partial">Partial</a>.
Another connection is needed to read from the destination table while the merge operation is running.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IDbConnection ReadConnection { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_MergeBulkOptions_1_UpdateColumns_" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.UpdateColumns*"></a>
  <h4 id="ETLBox_DbExtensions_MergeBulkOptions_1_UpdateColumns" data-uid="ETLBox.DbExtensions.MergeBulkOptions`1.UpdateColumns">UpdateColumns</h4>
  <div class="markdown level1 summary"><p>Specify properties to be updated when a row needs updating,
by default all non-ID columns are updated.</p>
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
