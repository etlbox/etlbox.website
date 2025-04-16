---
title: "Bulk Merge"
description: ""
lead: "<code>BulkMerge<T>()</code> performs an upsert operation: it inserts new rows, updates existing ones, and optionally deletes missing rows from the target table. It’s the most powerful operation in the ETLBox.DbExtensions toolkit, suitable for full or delta synchronization of datasets."
draft: false
images: []
menu:
  docs:
    parent: "oeprations"
weight: 40
toc: true
---

## Example

```csharp
using System.Data.SqlClient;
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(1, 1_500)
    .Select(i => new Customer { Id = i, Name = $"Update Customer {i}", City = $"City {i % 50}" })
    .Union(
        Enumerable.Range(3_000, 1500)
        .Select(i => new Customer { Id = i, Name = $"New Customer {i}", City = $"City {i % 50}" })
    );

connection.BulkMerge(customers);

public class Customer : IMergeableRow {
    [IdColumn]
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }

    [DbColumnDefinition(Ignore = true)]
    public DateTime ChangeDate { get; set; }
    [DbColumnDefinition(Ignore = true)]
    public ChangeAction? ChangeAction { get; set; }
}
```

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
## Merge Modes

- `Full` (default):
  Inserts new rows, updates existing ones, and deletes records from the target table that are missing in your source data.

- `Delta`:
  Inserts and updates only. Deletes only rows marked with `DeleteColumns`.

- `InsertsAndUpdates`:
   Inserts and updates only. No deletions.

- `InsertsOnly`:
   Will only execute inserts.

- `UpdatesOnly`:
   Will only execute updates.


## Customization Options

You can configure the operation using the optional `BulkOptions<T>` parameter:

```csharp
var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(1, 1_500)
   .Select(i => new Customer { Id = i, Name = $"Options Customer {i}", City = $"New City {i % 50}" })
   .Union(
       Enumerable.Range(5_000, 500)
       .Select(i => new Customer { Id = i, Name = $"New Customer {i}", City = $"New City {i % 50}" })
   );

connection.BulkMerge(customers, options => {
    options.ReadGeneratedValues = true;
    options.CompareColumns = new[] { new CompareColumn() { ComparePropertyName = "City" } };
    options.UpdateColumns = new[] { new UpdateColumn() { UpdatePropertyName = "City" } };
    options.MergeMode = MergeMode.Delta;
});
```

For a complete list of available options, see the [BulkOptions reference](/docs/operations/bulk-options).

## Table Naming Convention

By default, the table name is inferred from the class name. For example:

```csharp
public class Customer { ... }
```

This maps to either Customer or Customers.

You can override the name using `TableName`, or adjust it with `TablePrefix` and `TableSuffix` inside [BulkOptions](/docs/operations/bulk-options).

## Example Code on GitHub

You can find both examples — basic usage and usage with options — in the official demo project on GitHub:

- {{< link-ext text="BulkInsert example on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/DbExtensions.BulkMerge" >}}

The demo is ready to run and shows how to configure the connection, create the table, and execute bulk operations with real data.
