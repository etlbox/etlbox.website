---
title: "ChangeAction"
description: "Details for Enum ChangeAction (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10085
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.ChangeAction">
  <h1 id="ETLBox_DataFlow_ChangeAction" data-uid="ETLBox.DataFlow.ChangeAction" class="text-break">Enum ChangeAction
</h1>
  <div class="markdown level0 summary"><p>The result of a merge operation - after the merge this reflects the operations applied to the record.
Exists: A record with the same id was found, but both records were equal
Insert: A record with the id didn't exist, so this records was inserted
Update: A record with the same id was found, and the record was updated
Delete: A record was identifed as an deletion, and this record was deleted.
Duplicate: A record with the same id was alread used in a previous insert/update operation
NotFound: A record from the source was flagged as a deletion, but was not found in the destination</p>
</div>
  <div class="markdown level0 conceptual"></div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_ChangeAction_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public enum ChangeAction
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
        <td id="ETLBox_DataFlow_ChangeAction_Delete">Delete</td>
        <td><p>The result of a merge operation - after the merge this reflects the operations applied to the record.
Exists: A record with the same id was found, but both records were equal
Insert: A record with the id didn't exist, so this records was inserted
Update: A record with the same id was found, and the record was updated
Delete: A record was identifed as an deletion, and this record was deleted.
Duplicate: A record with the same id was alread used in a previous insert/update operation
NotFound: A record from the source was flagged as a deletion, but was not found in the destination</p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_ChangeAction_Duplicate">Duplicate</td>
        <td><p>The result of a merge operation - after the merge this reflects the operations applied to the record.
Exists: A record with the same id was found, but both records were equal
Insert: A record with the id didn't exist, so this records was inserted
Update: A record with the same id was found, and the record was updated
Delete: A record was identifed as an deletion, and this record was deleted.
Duplicate: A record with the same id was alread used in a previous insert/update operation
NotFound: A record from the source was flagged as a deletion, but was not found in the destination</p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_ChangeAction_Exists">Exists</td>
        <td><p>The result of a merge operation - after the merge this reflects the operations applied to the record.
Exists: A record with the same id was found, but both records were equal
Insert: A record with the id didn't exist, so this records was inserted
Update: A record with the same id was found, and the record was updated
Delete: A record was identifed as an deletion, and this record was deleted.
Duplicate: A record with the same id was alread used in a previous insert/update operation
NotFound: A record from the source was flagged as a deletion, but was not found in the destination</p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_ChangeAction_Insert">Insert</td>
        <td><p>The result of a merge operation - after the merge this reflects the operations applied to the record.
Exists: A record with the same id was found, but both records were equal
Insert: A record with the id didn't exist, so this records was inserted
Update: A record with the same id was found, and the record was updated
Delete: A record was identifed as an deletion, and this record was deleted.
Duplicate: A record with the same id was alread used in a previous insert/update operation
NotFound: A record from the source was flagged as a deletion, but was not found in the destination</p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_ChangeAction_NotFound">NotFound</td>
        <td><p>The result of a merge operation - after the merge this reflects the operations applied to the record.
Exists: A record with the same id was found, but both records were equal
Insert: A record with the id didn't exist, so this records was inserted
Update: A record with the same id was found, and the record was updated
Delete: A record was identifed as an deletion, and this record was deleted.
Duplicate: A record with the same id was alread used in a previous insert/update operation
NotFound: A record from the source was flagged as a deletion, but was not found in the destination</p>
</td>
      </tr>
      <tr>
        <td id="ETLBox_DataFlow_ChangeAction_Update">Update</td>
        <td><p>The result of a merge operation - after the merge this reflects the operations applied to the record.
Exists: A record with the same id was found, but both records were equal
Insert: A record with the id didn't exist, so this records was inserted
Update: A record with the same id was found, and the record was updated
Delete: A record was identifed as an deletion, and this record was deleted.
Duplicate: A record with the same id was alread used in a previous insert/update operation
NotFound: A record from the source was flagged as a deletion, but was not found in the destination</p>
</td>
      </tr>
    </tbody>
  </thead></thead></table>

{{< /rawhtml >}}