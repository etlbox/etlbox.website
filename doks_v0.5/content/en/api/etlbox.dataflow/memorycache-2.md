---
title: "MemoryCache<TInput, TCache>"
description: "Details for Class MemoryCache<TInput, TCache> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10151
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
    <div><a class="xref" href="/api/etlbox/icachemanager-2">ICacheManager</a>&lt;TInput, TCache&gt;</div>
    <div><a class="xref" href="/api/etlbox/ilimitedcache">ILimitedCache</a></div>
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
    public sealed class MemoryCache<TInput, TCache> : ICacheManager<TInput, TCache>, ILimitedCache where TCache : class
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
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_MemoryCache_2__ctor_" data-uid="ETLBox.DataFlow.MemoryCache`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2__ctor" data-uid="ETLBox.DataFlow.MemoryCache`2.#ctor">MemoryCache()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MemoryCache()
```

{{< rawhtml >}}
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
  <a id="ETLBox_DataFlow_MemoryCache_2_CopyIntoCacheFunc_" data-uid="ETLBox.DataFlow.MemoryCache`2.CopyIntoCacheFunc*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_CopyIntoCacheFunc" data-uid="ETLBox.DataFlow.MemoryCache`2.CopyIntoCacheFunc">CopyIntoCacheFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, TCache> CopyIntoCacheFunc { get; set; }
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
  <a id="ETLBox_DataFlow_MemoryCache_2_Dict_" data-uid="ETLBox.DataFlow.MemoryCache`2.Dict*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_Dict" data-uid="ETLBox.DataFlow.MemoryCache`2.Dict">Dict</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IDictionary<object, TCache> Dict { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2">IDictionary</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>, TCache&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_MemoryCache_2_GetCacheUniqueKeyFunc_" data-uid="ETLBox.DataFlow.MemoryCache`2.GetCacheUniqueKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_GetCacheUniqueKeyFunc" data-uid="ETLBox.DataFlow.MemoryCache`2.GetCacheUniqueKeyFunc">GetCacheUniqueKeyFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TCache, object> GetCacheUniqueKeyFunc { get; set; }
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
  <a id="ETLBox_DataFlow_MemoryCache_2_GetInputUniqueKeyFunc_" data-uid="ETLBox.DataFlow.MemoryCache`2.GetInputUniqueKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_GetInputUniqueKeyFunc" data-uid="ETLBox.DataFlow.MemoryCache`2.GetInputUniqueKeyFunc">GetInputUniqueKeyFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, object> GetInputUniqueKeyFunc { get; set; }
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
  <a id="ETLBox_DataFlow_MemoryCache_2_Records_" data-uid="ETLBox.DataFlow.MemoryCache`2.Records*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_Records" data-uid="ETLBox.DataFlow.MemoryCache`2.Records">Records</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IEnumerable<TCache> Records { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;TCache&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_MemoryCache_2_Add_" data-uid="ETLBox.DataFlow.MemoryCache`2.Add*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_Add__0_" data-uid="ETLBox.DataFlow.MemoryCache`2.Add(`0)">Add(TInput)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Add(TInput row)
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
  <a id="ETLBox_DataFlow_MemoryCache_2_Add_" data-uid="ETLBox.DataFlow.MemoryCache`2.Add*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_Add__0___" data-uid="ETLBox.DataFlow.MemoryCache`2.Add(`0[])">Add(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Add(TInput[] batch)
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
  <a id="ETLBox_DataFlow_MemoryCache_2_Contains_" data-uid="ETLBox.DataFlow.MemoryCache`2.Contains*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_Contains__0_" data-uid="ETLBox.DataFlow.MemoryCache`2.Contains(`0)">Contains(TInput)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool Contains(TInput row)
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
  <h5 class="returns">Returns</h5>
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
  <a id="ETLBox_DataFlow_MemoryCache_2_Contains_" data-uid="ETLBox.DataFlow.MemoryCache`2.Contains*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_Contains__0___" data-uid="ETLBox.DataFlow.MemoryCache`2.Contains(`0[])">Contains(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool Contains(TInput[] batch)
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
  <h5 class="returns">Returns</h5>
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
  <a id="ETLBox_DataFlow_MemoryCache_2_Init_" data-uid="ETLBox.DataFlow.MemoryCache`2.Init*"></a>
  <h4 id="ETLBox_DataFlow_MemoryCache_2_Init" data-uid="ETLBox.DataFlow.MemoryCache`2.Init">Init()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Init()
```

{{< rawhtml >}}
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/icachemanager-2">ICacheManager&lt;TInput, TCache&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/ilimitedcache">ILimitedCache</a>
  </div>

{{< /rawhtml >}}
