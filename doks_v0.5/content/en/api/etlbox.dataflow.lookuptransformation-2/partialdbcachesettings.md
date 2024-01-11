---
title: "LookupTransformation<TInput, TSource>.PartialDbCacheSettings"
description: "Details for Class LookupTransformation<TInput, TSource>.PartialDbCacheSettings (ETLBox.DataFlow.LookupTransformation`2)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.lookuptransformation`2"
weight: 10144
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings">
  <h1 id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings" class="text-break">Class LookupTransformation&lt;TInput, TSource&gt;.PartialDbCacheSettings
</h1>
  <div class="markdown level0 summary"><p>Defines properties to configure a partial cache in a Lookup.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">LookupTransformation&lt;TInput, TSource&gt;.PartialDbCacheSettings</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.LookupTransformation`2</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class LookupTransformation<TInput, TSource>.PartialDbCacheSettings
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_ClearCache_" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings.ClearCache*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_ClearCache" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings.ClearCache">ClearCache</h4>
  <div class="markdown level1 summary"><p>Default is true. The lookup cache is cleared after every batch
of incoming data.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool ClearCache { get; set; }
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_LoadBatchSize_" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings.LoadBatchSize*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_LoadBatchSize" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings.LoadBatchSize">LoadBatchSize</h4>
  <div class="markdown level1 summary"><p>The cache is filled not for every row, but for a batch of rows to improve throughput.
Define here the number of rows for every batch.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int LoadBatchSize { get; set; }
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_LoadCacheSql_" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings.LoadCacheSql*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_LoadCacheSql" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings.LoadCacheSql">LoadCacheSql</h4>
  <div class="markdown level1 summary"><p>A custom sql to load data from the lookup source based on the input batch.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput[], string> LoadCacheSql { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;TInput[], <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_SqlParameter_" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings.SqlParameter*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_PartialDbCacheSettings_SqlParameter" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialDbCacheSettings.SqlParameter">SqlParameter</h4>
  <div class="markdown level1 summary"><p>List of query parameters that are used to replace values in <a class="xref" href="/api/etlbox.dataflow.lookuptransformation-2/partialdbcachesettings">LoadCacheSql</a>
For every parameter provided, your sql statement should contain a placeholder.
E.g.: 'SELECT col1 FROM table WHERE col2 &gt; @parameter1'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput[], QueryParameter[]> SqlParameter { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;TInput[], <a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
