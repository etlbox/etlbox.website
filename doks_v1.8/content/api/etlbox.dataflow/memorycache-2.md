---
title: "MemoryCache<TInput, TCache>"
description: "Details for Class MemoryCache<TInput, TCache> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10165
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.MemoryCache`2">
  <h1 id="ETLBox_DataFlow_MemoryCache_2" data-uid="ETLBox.DataFlow.MemoryCache`2" class="text-break">Class MemoryCache&lt;TInput, TCache&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">MemoryCache&lt;TInput, TCache&gt;</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.dataflow/icachemanager-2">ICacheManager</a>&lt;TInput, TCache&gt;</div>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_MemoryCache_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class MemoryCache<TInput, TCache> : ICacheManager<TInput, TCache> where TCache : class
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
        <td><span class="parametername">TInput</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="parametername">TCache</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="fields">Fields
</h3>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_DEFAULT_MAX_CACHE_SIZE" data-uid="ETLBox.DataFlow.MemoryCache`2.DEFAULT_MAX_CACHE_SIZE">DEFAULT_MAX_CACHE_SIZE</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public const int DEFAULT_MAX_CACHE_SIZE = 10000
```

{{< rawhtml >}}
  <h5 class="fieldValue">Field Value</h5>
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_MemoryCache_2_CacheKeySelector_" data-uid="ETLBox.DataFlow.MemoryCache`2.CacheKeySelector*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_CacheKeySelector" data-uid="ETLBox.DataFlow.MemoryCache`2.CacheKeySelector">CacheKeySelector</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TCache, object> CacheKeySelector { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;TCache, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MemoryCache_2_CachedData_" data-uid="ETLBox.DataFlow.MemoryCache`2.CachedData*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_CachedData" data-uid="ETLBox.DataFlow.MemoryCache`2.CachedData">CachedData</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CachedData<TCache> CachedData { get; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/cacheddata-1">CachedData</a>&lt;TCache&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MemoryCache_2_InputIntoCacheConversion_" data-uid="ETLBox.DataFlow.MemoryCache`2.InputIntoCacheConversion*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_InputIntoCacheConversion" data-uid="ETLBox.DataFlow.MemoryCache`2.InputIntoCacheConversion">InputIntoCacheConversion</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, TCache> InputIntoCacheConversion { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;TInput, TCache&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MemoryCache_2_InputKeySelector_" data-uid="ETLBox.DataFlow.MemoryCache`2.InputKeySelector*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_InputKeySelector" data-uid="ETLBox.DataFlow.MemoryCache`2.InputKeySelector">InputKeySelector</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, object> InputKeySelector { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;TInput, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MemoryCache_2_MaxCacheSize_" data-uid="ETLBox.DataFlow.MemoryCache`2.MaxCacheSize*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_MaxCacheSize" data-uid="ETLBox.DataFlow.MemoryCache`2.MaxCacheSize">MaxCacheSize</h4>
  <div class="markdown level1 summary"></div>
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
  <a id="ETLBox_DataFlow_MemoryCache_2_PermitMultipleEntriesPerKey_" data-uid="ETLBox.DataFlow.MemoryCache`2.PermitMultipleEntriesPerKey*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_PermitMultipleEntriesPerKey" data-uid="ETLBox.DataFlow.MemoryCache`2.PermitMultipleEntriesPerKey">PermitMultipleEntriesPerKey</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool PermitMultipleEntriesPerKey { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_MemoryCache_2_EnsureAdded_" data-uid="ETLBox.DataFlow.MemoryCache`2.EnsureAdded*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_EnsureAdded__0_" data-uid="ETLBox.DataFlow.MemoryCache`2.EnsureAdded(`0)">EnsureAdded(TInput)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void EnsureAdded(TInput row)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">TInput</span></td>
        <td><span class="parametername">row</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MemoryCache_2_EnsureAdded_" data-uid="ETLBox.DataFlow.MemoryCache`2.EnsureAdded*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_EnsureAdded__0___" data-uid="ETLBox.DataFlow.MemoryCache`2.EnsureAdded(`0[])">EnsureAdded(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void EnsureAdded(TInput[] batch)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>TInput[]</td>
        <td><span class="parametername">batch</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MemoryCache_2_Evict_" data-uid="ETLBox.DataFlow.MemoryCache`2.Evict*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_Evict" data-uid="ETLBox.DataFlow.MemoryCache`2.Evict">Evict()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Evict()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_MemoryCache_2_InitialLoad_" data-uid="ETLBox.DataFlow.MemoryCache`2.InitialLoad*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_InitialLoad" data-uid="ETLBox.DataFlow.MemoryCache`2.InitialLoad">InitialLoad()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void InitialLoad()
```

{{< rawhtml >}}
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/icachemanager-2">ICacheManager&lt;TInput, TCache&gt;</a>
  </div>

{{< /rawhtml >}}
