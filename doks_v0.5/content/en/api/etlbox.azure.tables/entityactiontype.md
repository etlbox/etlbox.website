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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    <thead>
    <tbody>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_Add">Add</td>
        <td><p>Add the entity to the table. This is equivalent to <see cref="!:TableClient.AddEntity&lt;T>"></see>.</p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_Delete">Delete</td>
        <td><p>Delete the entity. This is equivalent to <see cref="!:TableClient.DeleteEntity"></see></p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_None">None</td>
        <td></td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_UpdateMerge">UpdateMerge</td>
        <td><p>Update the entity in <see cref="!:TableUpdateMode.Merge"></see> mode. This is equivalent to <see cref="!:TableClient.UpdateEntity&lt;T>"></see></p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_UpdateReplace">UpdateReplace</td>
        <td><p>Update the entity in <see cref="!:TableUpdateMode.Replace"></see> mode. This is equivalent to <see cref="!:TableClient.UpdateEntity&lt;T>"></see></p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_UpsertMerge">UpsertMerge</td>
        <td><p>Upsert the entity in <see cref="!:TableUpdateMode.Merge"></see> mode. This is equivalent to <see cref="!:TableClient.UpsertEntity&lt;T>"></see></p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_Azure_Tables_EntityActionType_UpsertReplace">UpsertReplace</td>
        <td><p>Upsert the entity in <see cref="!:TableUpdateMode.Replace"></see> mode. This is equivalent to <see cref="!:TableClient.UpsertEntity&lt;T>"></see></p>
</td>
      </tr>
    </tbody>
  </thead></thead></table>

{{< /rawhtml >}}
