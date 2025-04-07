---
title: "Bulk Insert"
description: ""
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 30
toc: true
---

# BulkInsert

`BulkInsert<T>()` lets you efficiently insert large amounts of data into your database using native bulk loaders under the hood. It works directly on any `IDbConnection` and supports advanced options such as identity insert, batch size control, and column mapping.

---

## Example

```csharp
using System.Data.SqlClient;
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");

var data = Enumerable.Range(1, 10_000)
    .Select(i => new Customer {
        Id = i,
        Name = $"Customer {i}",
        City = $"City {i % 50}"
    });

connection.BulkInsert(data.ToList());

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```

---

## Method Signatures

```csharp
IDbConnection BulkInsert<T>(
    this IDbConnection connection,
    IEnumerable<T> data
)

IDbConnection BulkInsert<T>(
    this IDbConnection connection,
    IEnumerable<T> data,
    Action<BulkOptions<T>> options
)
```

---

## Customization Options

You can configure the operation using the optional `BulkOptions<T>` parameter:

```csharp
connection.BulkInsert(data.ToList(), opt => {
    opt.BatchSize = 5000;
    opt.AllowIdentityInsert = true;
    opt.TableName = "MyCustomTable";
});
```

Available options include:

- `BatchSize` – Number of rows per batch
- `AllowIdentityInsert` – Enables inserting values into identity/auto-increment columns
- `TableName`, `TablePrefix`, `TableSuffix` – Override or modify table naming
- `ColumnMapping` – Map or ignore specific properties
- `ColumnConverters` – Add custom value conversion
- `OnProgress` – Callback after each batch

---

## Table Naming Convention

By default, the table name is inferred from the class name. For example:

```csharp
public class Customer { ... }
```

...will target a table named `Customer` or `Customers`.

Use `TableName`, `TablePrefix`, or `TableSuffix` in `BulkOptions` to override this behavior.

---

## Requirements

- Your target table must exist in the database
- Column names must match property names (unless mapped explicitly)
- You must reference the correct ETLBox.* database provider for your DBMS

---

## Related Topics

- [BulkUpdate](/docs/bulkupdate)
- [BulkDelete](/docs/bulkdelete)
- [BulkMerge](/docs/bulkmerge)
- [Overview](/docs/overview)
