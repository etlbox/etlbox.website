---
title: "ExpandObjectTableEntity"
description: "Details for Class ExpandObjectTableEntity (ETLBox.Azure.Tables)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.azure.tables"
weight: 10029
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity">
  <h1 id="ETLBox_Azure_Tables_ExpandObjectTableEntity" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity" class="text-break">Class ExpandObjectTableEntity</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject">DynamicObject</a></div>
    <div class="level2"><span class="xref">ExpandObjectTableEntity</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.idynamicmetaobjectprovider">IDynamicMetaObjectProvider</a></div>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.itableentity">ITableEntity</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.getdynamicmembernames">DynamicObject.GetDynamicMemberNames()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.getmetaobject">DynamicObject.GetMetaObject(Expression)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.trybinaryoperation">DynamicObject.TryBinaryOperation(BinaryOperationBinder, object, out object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.tryconvert">DynamicObject.TryConvert(ConvertBinder, out object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.trycreateinstance">DynamicObject.TryCreateInstance(CreateInstanceBinder, object[], out object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.trydeleteindex">DynamicObject.TryDeleteIndex(DeleteIndexBinder, object[])</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.trydeletemember">DynamicObject.TryDeleteMember(DeleteMemberBinder)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.trygetindex">DynamicObject.TryGetIndex(GetIndexBinder, object[], out object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.trygetmember">DynamicObject.TryGetMember(GetMemberBinder, out object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.tryinvoke">DynamicObject.TryInvoke(InvokeBinder, object[], out object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.tryinvokemember">DynamicObject.TryInvokeMember(InvokeMemberBinder, object[], out object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.trysetindex">DynamicObject.TrySetIndex(SetIndexBinder, object[], object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.trysetmember">DynamicObject.TrySetMember(SetMemberBinder, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.dynamicobject.tryunaryoperation">DynamicObject.TryUnaryOperation(UnaryOperationBinder, out object)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Azure.Tables</h6>
  <h6><strong>Assembly</strong>: ETLBox.Azure.Tables.dll</h6>
  <h5 id="ETLBox_Azure_Tables_ExpandObjectTableEntity_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ExpandObjectTableEntity : DynamicObject, IDynamicMetaObjectProvider, ITableEntity
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Azure_Tables_ExpandObjectTableEntity_ETag_" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.ETag*"></a>
  <h4 id="ETLBox_Azure_Tables_ExpandObjectTableEntity_ETag" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.ETag">ETag</h4>
  <div class="markdown level1 summary"><p>Gets or sets the entity's ETag.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ETag ETag { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.etag">ETag</a></td>
        <td><p>A string containing the ETag value for the entity.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_Tables_ExpandObjectTableEntity_PartitionKey_" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.PartitionKey*"></a>
  <h4 id="ETLBox_Azure_Tables_ExpandObjectTableEntity_PartitionKey" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.PartitionKey">PartitionKey</h4>
  <div class="markdown level1 summary"><p>The partition key is a unique identifier for the partition within a given table and forms the first part of an entity's primary key.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string PartitionKey { get; set; }
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
        <td><p>A string containing the partition key for the entity.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_Tables_ExpandObjectTableEntity_RowKey_" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.RowKey*"></a>
  <h4 id="ETLBox_Azure_Tables_ExpandObjectTableEntity_RowKey" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.RowKey">RowKey</h4>
  <div class="markdown level1 summary"><p>The row key is a unique identifier for an entity within a given partition. Together the <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.itableentity.partitionkey">PartitionKey</a> and RowKey uniquely identify every entity within a table.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string RowKey { get; set; }
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
        <td><p>A string containing the row key for the entity.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_Tables_ExpandObjectTableEntity_Timestamp_" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.Timestamp*"></a>
  <h4 id="ETLBox_Azure_Tables_ExpandObjectTableEntity_Timestamp" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.Timestamp">Timestamp</h4>
  <div class="markdown level1 summary"><p>The Timestamp property is a DateTime value that is maintained on the server side to record the time an entity was last modified.
The Table service uses the Timestamp property internally to provide optimistic concurrency. The value of Timestamp is a monotonically increasing value,
meaning that each time the entity is modified, the value of Timestamp increases for that entity.
This property should not be set on insert or update operations (the value will be ignored).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTimeOffset? Timestamp { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.datetimeoffset">DateTimeOffset</a>?</td>
        <td><p>A <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.datetimeoffset">DateTimeOffset</a> containing the timestamp of the entity.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.idynamicmetaobjectprovider">IDynamicMetaObjectProvider</a>
  </div>
  <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.itableentity">ITableEntity</a>
  </div>

{{< /rawhtml >}}
