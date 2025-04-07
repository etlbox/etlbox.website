---
title: "Bulk Delete"
description: ""
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 50
toc: true
---

# BulkDelete

`BulkDelete<T>()` removes multiple records from your database in a single operation. Rows are matched based on one or more ID columns, making it ideal for batch deletions without writing complex SQL.

---

## Example

```csharp
using System.Data.SqlClient;
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");

var data = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i });

connection.BulkDelete(data.ToList());

public class Customer {
    public int Id { get; set; }
}
```

---

## Method Signatures

```csharp
IDbConnection BulkDelete<T>(
    this IDbConnection connection,
    IEnumerable<T> data
)

IDbConnection BulkDelete<T>(
    this IDbConnection connection,
    IEnumerable<T> data,
    Action<BulkOptions<T>> options
)
```

---

## Customization Options

```csharp
connection.BulkDelete(data.ToList(), opt => {
    opt.IdColumns = new[] { new IdColumn("Id") };
    opt.BatchSize = 5000;
});
```

Available options:

- `IdColumns` – Columns used to match rows for deletion (default: `Id`)
- `BatchSize` – Number of rows per batch
- `ColumnMapping` – Use if property names differ from column names
- `OnProgress` – Callback after each batch
- `RedirectErroneousBatches` – Skip faulty batches and collect errors

---

## Table Requirements

- The target table must exist
- Records must have a unique ID column (or columns) for matching
- Only ID fields are required in your input object

---

## When to Use

- Cleaning up old or processed records
- Removing test data or imports
- Deleting stale entries in bulk

---

## Related Topics

- [BulkInsert](/docs/bulkinsert)
- [BulkUpdate](/docs/bulkupdate)
- [BulkMerge](/docs/bulkmerge)
- [Overview](/docs/overview)
