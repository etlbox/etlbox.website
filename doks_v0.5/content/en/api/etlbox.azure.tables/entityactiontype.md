---
title: "EntityActionType"
description: "Details for Enum EntityActionType (ETLBox.Azure.Tables)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.azure.tables"
weight: 10017
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Azure.Tables.EntityActionType">
  <h1 id="ETLBox_Azure_Tables_EntityActionType" data-uid="ETLBox.Azure.Tables.EntityActionType" class="text-break">Enum EntityActionType
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.Azure.Tables</h6>
  <h6><strong>Assembly</strong>: ETLBox.Azure.Tables.dll</h6>
  <h5 id="ETLBox_Azure_Tables_EntityActionType_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public enum EntityActionType
```

{{< rawhtml >}}
  <h3 id="fields">Fields
</h3>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    <thead>
    <tbody>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_Add">Add</td>
        <td><p>Add the entity to the table. This is equivalent to <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableclient.addentity">AddEntity&lt;T&gt;(T, CancellationToken)</a>.</p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_Delete">Delete</td>
        <td><p>Delete the entity. This is equivalent to <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableclient.deleteentity">DeleteEntity(string, string, ETag, CancellationToken)</a></p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_None">None</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_UpdateMerge">UpdateMerge</td>
        <td><p>Update the entity in <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableupdatemode#azure-data-tables-tableupdatemode-merge">Merge</a> mode. This is equivalent to <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableclient.updateentity">UpdateEntity&lt;T&gt;(T, ETag, TableUpdateMode, CancellationToken)</a></p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_UpdateReplace">UpdateReplace</td>
        <td><p>Update the entity in <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableupdatemode#azure-data-tables-tableupdatemode-replace">Replace</a> mode. This is equivalent to <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableclient.updateentity">UpdateEntity&lt;T&gt;(T, ETag, TableUpdateMode, CancellationToken)</a></p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_UpsertMerge">UpsertMerge</td>
        <td><p>Upsert the entity in <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableupdatemode#azure-data-tables-tableupdatemode-merge">Merge</a> mode. This is equivalent to <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableclient.upsertentity">UpsertEntity&lt;T&gt;(T, TableUpdateMode, CancellationToken)</a></p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_UpsertReplace">UpsertReplace</td>
        <td><p>Upsert the entity in <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableupdatemode#azure-data-tables-tableupdatemode-replace">Replace</a> mode. This is equivalent to <a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.data.tables.tableclient.upsertentity">UpsertEntity&lt;T&gt;(T, TableUpdateMode, CancellationToken)</a></p>
</td>
      </tr>
    </tbody>
  </thead></thead></table>

{{< /rawhtml >}}
