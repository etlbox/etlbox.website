---
title: "Bulk Update"
description: ""
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 40
toc: true
---

# BulkUpdate

`BulkUpdate<T>()` updates multiple records in your database in a single, efficient operation. It matches rows based on one or more ID columns and updates the specified fields. Ideal for high-volume updates with minimal database round-trips.

---

## Example

```csharp
using System.Data.SqlClient;
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");

var data = Enumerable.Range(1, 10_000)
    .Select(i => new Customer {
        Id = i,
        Name = $"Updated Customer {i}",
        City = $"Updated City {i % 50}"
    });

connection.BulkUpdate(data.ToList());

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```

---

## Method Signatures

```csharp
IDbConnection BulkUpdate<T>(
    this IDbConnection connection,
    IEnumerable<T> data
)

IDbConnection BulkUpdate<T>(
    this IDbConnection connection,
    IEnumerable<T> data,
    Action<BulkOptions<T>> options
)
```

---

## Customization Options

Configure the operation using `BulkOptions<T>`:

```csharp
connection.BulkUpdate(data.ToList(), opt => {
    opt.IdColumns = new[] { new IdColumn("Id") };
    opt.UpdateColumns = new[] { new UpdateColumn("City") };
    opt.BatchSize = 5000;
});
```

Available options include:

- `IdColumns` – Specify which columns identify a row (default: `Id`)
- `UpdateColumns` – Limit which columns are updated
- `BatchSize` – Control the size of each update batch
- `ColumnMapping` – Rename or ignore properties
- `ColumnConverters` – Modify values before update
- `OnProgress` – Callback after each batch

---

## Table Requirements

- The target table must exist in the database
- The table must have a unique identifier column (e.g., `Id`)
- Column names must match property names unless mapped

---

## Best Practices

- Keep `UpdateColumns` minimal for faster execution
- Use indexing on `IdColumns` for best performance
- Validate mappings when using custom column names

---

## Related Topics

- [BulkInsert](/docs/bulkinsert)
- [BulkDelete](/docs/bulkdelete)
- [BulkMerge](/docs/bulkmerge)
- [Overview](/docs/overview)

