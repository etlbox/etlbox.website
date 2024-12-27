---
title: "ItemActionOption"
description: "Details for Class ItemActionOption (ETLBox.Azure.CosmosDb)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.azure.cosmosdb"
weight: 10022
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption">
  <h1 id="ETLBox_Azure_CosmosDb_ItemActionOption" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption" class="text-break">Class ItemActionOption</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">ItemActionOption</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Azure.CosmosDb</h6>
  <h6><strong>Assembly</strong>: ETLBox.Azure.CosmosDb.dll</h6>
  <h5 id="ETLBox_Azure_CosmosDb_ItemActionOption_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ItemActionOption
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Azure_CosmosDb_ItemActionOption_Id_" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.Id*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_ItemActionOption_Id" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.Id">Id</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Id { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_ItemActionOption_ItemAction_" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.ItemAction*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_ItemActionOption_ItemAction" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.ItemAction">ItemAction</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ItemAction ItemAction { get; set; }
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
        <td><a class="xref" href="/api/etlbox.azure.cosmosdb/itemaction">ItemAction</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_ItemActionOption_PartitionKey_" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.PartitionKey*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_ItemActionOption_PartitionKey" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.PartitionKey">PartitionKey</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public PartitionKey? PartitionKey { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.azure.cosmos.partitionkey">PartitionKey</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_ItemActionOption_RequestOptions_" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.RequestOptions*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_ItemActionOption_RequestOptions" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.RequestOptions">RequestOptions</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ItemRequestOptions RequestOptions { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.azure.cosmos.itemrequestoptions">ItemRequestOptions</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_ItemActionOption_TransactionalBatchRequestOptions_" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.TransactionalBatchRequestOptions*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_ItemActionOption_TransactionalBatchRequestOptions" data-uid="ETLBox.Azure.CosmosDb.ItemActionOption.TransactionalBatchRequestOptions">TransactionalBatchRequestOptions</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TransactionalBatchItemRequestOptions TransactionalBatchRequestOptions { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.azure.cosmos.transactionalbatchitemrequestoptions">TransactionalBatchItemRequestOptions</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
