---
title: "Bulk Merge"
description: ""
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 60
toc: true
---

# BulkMerge

`BulkMerge<T>()` performs an upsert operation: it inserts new rows, updates existing ones, and optionally deletes missing rows from the target table. It’s the most powerful operation in the ETLBox.DbExtensions toolkit, suitable for full or delta synchronization of datasets.

---

## Example

```csharp
using System.Data.SqlClient;
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");

var data = Enumerable.Range(5_000, 10_000)
    .Select(i => new Customer {
        Id = i,
        Name = $"Customer {i}",
        City = $"City {i % 50}"
    });

connection.BulkMerge(data.ToList());

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```

---

## Method Signatures

```csharp
IDbConnection BulkMerge<T>(
    this IDbConnection connection,
    IEnumerable<T> data
)

IDbConnection BulkMerge<T>(
    this IDbConnection connection,
    IEnumerable<T> data,
    Action<MergeBulkOptions<T>> options
)
```

---

## Merge Modes

- `Full` (default):
  Inserts new rows, updates existing rows, deletes missing rows.

- `Delta`:
  Inserts and updates only. Deletes only rows marked with `DeleteColumns`.

---

## Example with Options

```csharp
connection.BulkMerge(data.ToList(), opt => {
    opt.IdColumns = new[] { new IdColumn("Id") };
    opt.CompareColumns = new[] { new CompareColumn("City") };
    opt.UpdateColumns = new[] { new UpdateColumn("City") };
    opt.MergeMode = MergeMode.Full;
});
```

---

## Available Options

- `IdColumns` – Required to identify records
- `CompareColumns` – Used to decide whether a row should be updated
- `UpdateColumns` – Limit updates to specific fields
- `DeleteColumns` – Used only in `Delta` mode for conditional deletion
- `CompareFunc` – Custom comparison logic
- `MergeMode` – Full or Delta
- `CacheMode` – Full or Partial (controls memory vs performance)
- `MaxCacheSize`, `EvictionPolicy` – Fine-tune merge performance
- `BatchSize`, `AllowIdentityInsert`, `ColumnMapping`, etc. – standard options

---

## When to Use

- Data synchronization from external sources
- Staging-to-final table operations
- Complex upsert scenarios

---

## Related Topics

- [BulkInsert](/docs/bulkinsert)
- [BulkUpdate](/docs/bulkupdate)
- [BulkDelete](/docs/bulkdelete)
- [Overview](/docs/overview)
