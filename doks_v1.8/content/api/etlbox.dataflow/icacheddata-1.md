---
title: "ICachedData<TCache>"
description: "Details for Interface ICachedData<TCache> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10152
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.ICachedData`1">
  <h1 id="ETLBox_DataFlow_ICachedData_1" data-uid="ETLBox.DataFlow.ICachedData`1" class="text-break">Interface ICachedData&lt;TCache&gt;</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_ICachedData_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface ICachedData<TCache>
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
        <td><span class="parametername">TCache</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_ICachedData_1_ItemCollections_" data-uid="ETLBox.DataFlow.ICachedData`1.ItemCollections*"></a>
  <h4 id="ETLBox_DataFlow_ICachedData_1_ItemCollections" data-uid="ETLBox.DataFlow.ICachedData`1.ItemCollections">ItemCollections</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDictionary<object, IList<TCache>> ItemCollections { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.idictionary-2">IDictionary</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;TCache&gt;&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_ICachedData_1_Items_" data-uid="ETLBox.DataFlow.ICachedData`1.Items*"></a>
  <h4 id="ETLBox_DataFlow_ICachedData_1_Items" data-uid="ETLBox.DataFlow.ICachedData`1.Items">Items</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IDictionary<object, TCache> Items { get; }
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
  <a id="ETLBox_DataFlow_ICachedData_1_List_" data-uid="ETLBox.DataFlow.ICachedData`1.List*"></a>
  <h4 id="ETLBox_DataFlow_ICachedData_1_List" data-uid="ETLBox.DataFlow.ICachedData`1.List">List</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IEnumerable<TCache> List { get; }
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
  <a id="ETLBox_DataFlow_ICachedData_1_UsedMultipleEntriesPerKey_" data-uid="ETLBox.DataFlow.ICachedData`1.UsedMultipleEntriesPerKey*"></a>
  <h4 id="ETLBox_DataFlow_ICachedData_1_UsedMultipleEntriesPerKey" data-uid="ETLBox.DataFlow.ICachedData`1.UsedMultipleEntriesPerKey">UsedMultipleEntriesPerKey</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool UsedMultipleEntriesPerKey { get; }
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

{{< /rawhtml >}}
