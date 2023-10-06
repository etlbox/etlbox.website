---
title: "ExpandObjectTableEntity"
description: "Details for Class ExpandObjectTableEntity (ETLBox.Azure.Tables)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.azure.tables"
weight: 10018
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity">
  <h1 id="ETLBox_Azure_Tables_ExpandObjectTableEntity" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity" class="text-break">Class ExpandObjectTableEntity
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">System.Dynamic.DynamicObject</span></div>
    <div class="level2"><span class="xref">ExpandObjectTableEntity</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><span class="xref">System.Dynamic.IDynamicMetaObjectProvider</span></div>
    <div><span class="xref">ITableEntity</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.GetDynamicMemberNames()</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.GetMetaObject(System.Linq.Expressions.Expression)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryBinaryOperation(System.Dynamic.BinaryOperationBinder, object, out object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryConvert(System.Dynamic.ConvertBinder, out object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryCreateInstance(System.Dynamic.CreateInstanceBinder, object[], out object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryDeleteIndex(System.Dynamic.DeleteIndexBinder, object[])</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryDeleteMember(System.Dynamic.DeleteMemberBinder)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryGetIndex(System.Dynamic.GetIndexBinder, object[], out object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryGetMember(System.Dynamic.GetMemberBinder, out object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryInvoke(System.Dynamic.InvokeBinder, object[], out object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryInvokeMember(System.Dynamic.InvokeMemberBinder, object[], out object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TrySetIndex(System.Dynamic.SetIndexBinder, object[], object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TrySetMember(System.Dynamic.SetMemberBinder, object)</span>
    </div>
    <div>
      <span class="xref">System.Dynamic.DynamicObject.TryUnaryOperation(System.Dynamic.UnaryOperationBinder, out object)</span>
    </div>
    <div>
      <span class="xref">object.Equals(object)</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">object.GetType()</span>
    </div>
    <div>
      <span class="xref">object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">object.ReferenceEquals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.ToString()</span>
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
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ETag ETag { get; set; }
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
        <td><span class="xref">ETag</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_Tables_ExpandObjectTableEntity_PartitionKey_" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.PartitionKey*"></a>
  <h4 id="ETLBox_Azure_Tables_ExpandObjectTableEntity_PartitionKey" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.PartitionKey">PartitionKey</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string PartitionKey { get; set; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_Tables_ExpandObjectTableEntity_RowKey_" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.RowKey*"></a>
  <h4 id="ETLBox_Azure_Tables_ExpandObjectTableEntity_RowKey" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.RowKey">RowKey</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string RowKey { get; set; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_Tables_ExpandObjectTableEntity_Timestamp_" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.Timestamp*"></a>
  <h4 id="ETLBox_Azure_Tables_ExpandObjectTableEntity_Timestamp" data-uid="ETLBox.Azure.Tables.ExpandObjectTableEntity.Timestamp">Timestamp</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTimeOffset? Timestamp { get; set; }
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
        <td><span class="xref">DateTimeOffset</span>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <span class="xref">System.Dynamic.IDynamicMetaObjectProvider</span>
  </div>
  <div>
      <span class="xref">ITableEntity</span>
  </div>

{{< /rawhtml >}}
