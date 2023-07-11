---
title: "ICacheManagerMultipleRows<TInput, TCache>"
description: "Details for Interface ICacheManagerMultipleRows<TInput, TCache> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10178
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ICacheManagerMultipleRows`2">
  <h1 id="ETLBox_ICacheManagerMultipleRows_2" data-uid="ETLBox.ICacheManagerMultipleRows`2" class="text-break">Interface ICacheManagerMultipleRows&lt;TInput, TCache&gt;
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_Records">ICacheManager&lt;TInput, TCache&gt;.Records</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_Contains__0_">ICacheManager&lt;TInput, TCache&gt;.Contains(TInput)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_Add__0_">ICacheManager&lt;TInput, TCache&gt;.Add(TInput)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_Contains__0___">ICacheManager&lt;TInput, TCache&gt;.Contains(TInput[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_Add__0___">ICacheManager&lt;TInput, TCache&gt;.Add(TInput[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_Init">ICacheManager&lt;TInput, TCache&gt;.Init()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_GetCacheUniqueKeyFunc">ICacheManager&lt;TInput, TCache&gt;.GetCacheUniqueKeyFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_GetInputUniqueKeyFunc">ICacheManager&lt;TInput, TCache&gt;.GetInputUniqueKeyFunc</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/icachemanager-2#ETLBox_ICacheManager_2_Dict">ICacheManager&lt;TInput, TCache&gt;.Dict</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ICacheManagerMultipleRows_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface ICacheManagerMultipleRows<TInput, TCache> : ICacheManager<TInput, TCache>
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
  <a id="ETLBox_ICacheManagerMultipleRows_2_AllowMultipleRows_" data-uid="ETLBox.ICacheManagerMultipleRows`2.AllowMultipleRows*"></a>
  <h4 id="ETLBox_ICacheManagerMultipleRows_2_AllowMultipleRows" data-uid="ETLBox.ICacheManagerMultipleRows`2.AllowMultipleRows">AllowMultipleRows</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool AllowMultipleRows { get; set; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ICacheManagerMultipleRows_2_DictMultipleRows_" data-uid="ETLBox.ICacheManagerMultipleRows`2.DictMultipleRows*"></a>
  <h4 id="ETLBox_ICacheManagerMultipleRows_2_DictMultipleRows" data-uid="ETLBox.ICacheManagerMultipleRows`2.DictMultipleRows">DictMultipleRows</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDictionary<object, IList<TCache>> DictMultipleRows { get; }
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
        <td><span class="xref">System.Collections.Generic.IDictionary&lt;TKey, TValue&gt;</span>&lt;<span class="xref">object</span>, <span class="xref">System.Collections.Generic.IList&lt;T&gt;</span>&lt;TCache&gt;&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
