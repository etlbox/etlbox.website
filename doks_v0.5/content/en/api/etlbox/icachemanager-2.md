---
title: "ICacheManager<TInput, TCache>"
description: "Details for Interface ICacheManager<TInput, TCache> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10224
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ICacheManager`2">
  <h1 id="ETLBox_ICacheManager_2" data-uid="ETLBox.ICacheManager`2" class="text-break">Interface ICacheManager&lt;TInput, TCache&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ICacheManager_2_syntax">Syntax</h5>
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
  <a id="ETLBox_ICacheManager_2_Dict_" data-uid="ETLBox.ICacheManager`2.Dict*"></a>
  <h4 id="ETLBox_ICacheManager_2_Dict" data-uid="ETLBox.ICacheManager`2.Dict">Dict</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDictionary<object, TCache> Dict { get; }
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
  <a id="ETLBox_ICacheManager_2_GetCacheUniqueKeyFunc_" data-uid="ETLBox.ICacheManager`2.GetCacheUniqueKeyFunc*"></a>
  <h4 id="ETLBox_ICacheManager_2_GetCacheUniqueKeyFunc" data-uid="ETLBox.ICacheManager`2.GetCacheUniqueKeyFunc">GetCacheUniqueKeyFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<TCache, object> GetCacheUniqueKeyFunc { get; set; }
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
  <a id="ETLBox_ICacheManager_2_GetInputUniqueKeyFunc_" data-uid="ETLBox.ICacheManager`2.GetInputUniqueKeyFunc*"></a>
  <h4 id="ETLBox_ICacheManager_2_GetInputUniqueKeyFunc" data-uid="ETLBox.ICacheManager`2.GetInputUniqueKeyFunc">GetInputUniqueKeyFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Func<TInput, object> GetInputUniqueKeyFunc { get; set; }
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
  <a id="ETLBox_ICacheManager_2_Records_" data-uid="ETLBox.ICacheManager`2.Records*"></a>
  <h4 id="ETLBox_ICacheManager_2_Records" data-uid="ETLBox.ICacheManager`2.Records">Records</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IEnumerable<TCache> Records { get; }
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
  <a id="ETLBox_ICacheManager_2_Add_" data-uid="ETLBox.ICacheManager`2.Add*"></a>
  <h4 id="ETLBox_ICacheManager_2_Add__0_" data-uid="ETLBox.ICacheManager`2.Add(`0)">Add(TInput)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Add(TInput row)
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
  <a id="ETLBox_ICacheManager_2_Add_" data-uid="ETLBox.ICacheManager`2.Add*"></a>
  <h4 id="ETLBox_ICacheManager_2_Add__0___" data-uid="ETLBox.ICacheManager`2.Add(`0[])">Add(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Add(TInput[] batch)
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
  <a id="ETLBox_ICacheManager_2_Contains_" data-uid="ETLBox.ICacheManager`2.Contains*"></a>
  <h4 id="ETLBox_ICacheManager_2_Contains__0_" data-uid="ETLBox.ICacheManager`2.Contains(`0)">Contains(TInput)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool Contains(TInput row)
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
  <a id="ETLBox_ICacheManager_2_Contains_" data-uid="ETLBox.ICacheManager`2.Contains*"></a>
  <h4 id="ETLBox_ICacheManager_2_Contains__0___" data-uid="ETLBox.ICacheManager`2.Contains(`0[])">Contains(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool Contains(TInput[] batch)
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
  <a id="ETLBox_ICacheManager_2_Init_" data-uid="ETLBox.ICacheManager`2.Init*"></a>
  <h4 id="ETLBox_ICacheManager_2_Init" data-uid="ETLBox.ICacheManager`2.Init">Init()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void Init()
```

{{< rawhtml >}}

{{< /rawhtml >}}
