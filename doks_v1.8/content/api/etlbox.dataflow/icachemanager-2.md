---
title: "ICacheManager<TInput, TCache>"
description: "Details for Interface ICacheManager<TInput, TCache> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10153
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.ICacheManager`2">
  <h1 id="ETLBox_DataFlow_ICacheManager_2" data-uid="ETLBox.DataFlow.ICacheManager`2" class="text-break">Interface ICacheManager&lt;TInput, TCache&gt;</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_ICacheManager_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface ICacheManager<TInput, TCache>
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_ICacheManager_2_CacheKeySelector_" data-uid="ETLBox.DataFlow.ICacheManager`2.CacheKeySelector*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_CacheKeySelector" data-uid="ETLBox.DataFlow.ICacheManager`2.CacheKeySelector">CacheKeySelector</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<TCache, object> CacheKeySelector { get; set; }
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
  <a id="ETLBox_DataFlow_ICacheManager_2_CachedData_" data-uid="ETLBox.DataFlow.ICacheManager`2.CachedData*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_CachedData" data-uid="ETLBox.DataFlow.ICacheManager`2.CachedData">CachedData</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    CachedData<TCache> CachedData { get; }
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
  <a id="ETLBox_DataFlow_ICacheManager_2_InputKeySelector_" data-uid="ETLBox.DataFlow.ICacheManager`2.InputKeySelector*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_InputKeySelector" data-uid="ETLBox.DataFlow.ICacheManager`2.InputKeySelector">InputKeySelector</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<TInput, object> InputKeySelector { get; set; }
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
  <a id="ETLBox_DataFlow_ICacheManager_2_MaxCacheSize_" data-uid="ETLBox.DataFlow.ICacheManager`2.MaxCacheSize*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_MaxCacheSize" data-uid="ETLBox.DataFlow.ICacheManager`2.MaxCacheSize">MaxCacheSize</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int MaxCacheSize { get; set; }
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
  <a id="ETLBox_DataFlow_ICacheManager_2_PermitMultipleEntriesPerKey_" data-uid="ETLBox.DataFlow.ICacheManager`2.PermitMultipleEntriesPerKey*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_PermitMultipleEntriesPerKey" data-uid="ETLBox.DataFlow.ICacheManager`2.PermitMultipleEntriesPerKey">PermitMultipleEntriesPerKey</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool PermitMultipleEntriesPerKey { get; set; }
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
  <a id="ETLBox_DataFlow_ICacheManager_2_EnsureAdded_" data-uid="ETLBox.DataFlow.ICacheManager`2.EnsureAdded*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_EnsureAdded__0_" data-uid="ETLBox.DataFlow.ICacheManager`2.EnsureAdded(`0)">EnsureAdded(TInput)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void EnsureAdded(TInput row)
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
  <a id="ETLBox_DataFlow_ICacheManager_2_EnsureAdded_" data-uid="ETLBox.DataFlow.ICacheManager`2.EnsureAdded*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_EnsureAdded__0___" data-uid="ETLBox.DataFlow.ICacheManager`2.EnsureAdded(`0[])">EnsureAdded(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void EnsureAdded(TInput[] batch)
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
  <a id="ETLBox_DataFlow_ICacheManager_2_Evict_" data-uid="ETLBox.DataFlow.ICacheManager`2.Evict*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_Evict" data-uid="ETLBox.DataFlow.ICacheManager`2.Evict">Evict()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Evict()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_ICacheManager_2_InitialLoad_" data-uid="ETLBox.DataFlow.ICacheManager`2.InitialLoad*"></a>
  <h4 id="ETLBox_DataFlow_ICacheManager_2_InitialLoad" data-uid="ETLBox.DataFlow.ICacheManager`2.InitialLoad">InitialLoad()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void InitialLoad()
```

{{< rawhtml >}}

{{< /rawhtml >}}
