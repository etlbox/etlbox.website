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

    public DateTime ChangeDate { get; set; }
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


## Matching and Column Control

Merge operations rely on identifying matching records and determining what needs to be updated. This is controlled through the following columns:

- **`IdColumn`** — Defines which property (or properties) uniquely identify a record in the database. Required for all merge operations.
- **`CompareColumn`** — Indicates which properties should be compared between source and target. If values differ, an update is triggered.
- **`UpdateColumn`** — Restricts updates to the specified properties, even if others differ.

You can configure these columns either through attributes in your class:

```csharp
public class Customer : MergeableRow {
    [IdColumn]
    public int Id { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string City { get; set; }

    public string Name { get; set; }
}
```

...or programmatically in `MergeBulkOptions`:

```csharp
options.IdColumns = new[] {
    new IdColumn("Id")
};
options.CompareColumns = new[] {
    new CompareColumn("City")
};
options.UpdateColumns = new[] {
    new UpdateColumn("City")
};
```

If `CompareColumns` is not specified, all non-ID properties are compared.
If `UpdateColumns` is not specified, all differing non-ID columns will be updated.

## Mergeable POCOs

To support merge tracking and internal bookkeeping, your class must either:

- Implement the `IMergeableRow` interface
**or**
- Inherit from the base class `MergeableRow`

This enables ETLBox to track `ChangeAction` and `ChangeDate`, which are required for correctly identifying inserts, updates, deletes, and existing records.

#### Example using `IMergeableRow`

```csharp
public class Customer : IMergeableRow {
    [IdColumn]
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }

    public ChangeAction? ChangeAction { get; set; }
    public DateTime ChangeDate { get; set; }
}
```

#### Example using `MergeableRow` (recommended for convenience)

```csharp
public class Customer : MergeableRow {
    [IdColumn]
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```

The `MergeableRow` base class provides the required properties (`ChangeAction`, `ChangeDate`) out of the box. Use it unless you need full control over change tracking behavior.

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

### Table Naming Convention

By default, the table name is inferred from the class name. For example:

```csharp
public class Customer { ... }
```

This maps to either Customer or Customers.

You can override the name using `TableName`, or adjust it with `TablePrefix` and `TableSuffix` inside [BulkOptions](/docs/operations/bulk-options).


## Partial Caching

For large destination tables, `BulkMerge` supports partial caching to reduce memory usage. Instead of loading the entire target table into memory, rows are fetched in smaller chunks as needed during processing. This is especially useful for merge operations with millions of records.

### Enabling Partial Cache

To enable partial cache mode:

```csharp
options.CacheMode = CacheMode.Partial;
```

By default, `CacheMode` is set to `Full`, meaning the entire destination table is preloaded into memory.

### Read Connection Required

When `CacheMode.Partial` is used, `BulkMerge` performs read operations during the merge process while also writing to the database. On most databases, you **must provide a separate read connection** to avoid conflicts, especially when working inside transactions.

```csharp
var mainConnection = new SqlConnection("your-connection-string");
var readConnection = new SqlConnection("your-connection-string");

connection.BulkMerge(customers, options => {
    options.CacheMode = CacheMode.Partial;
    options.ReadConnection = readConnection;
});
```

{{< callout context="note" icon="outline/info-circle" >}}
The `ReadConnection` must point to the same database but will only be used for lookups during the merge.
{{< /callout >}}

### Example with Partial Caching

```csharp
var writeConn = new SqlConnection("your-connection-string");
var readConn = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(1000, 5000)
    .Select(i => new Customer {
        Id = i,
        Name = $"Partial Merge {i}",
        City = $"City {i % 100}"
    });

writeConn.BulkMerge(customers, options => {
    options.CacheMode = CacheMode.Partial;
    options.MaxCacheSize = 1000;
    options.ReadConnection = readConn;
    options.MergeMode = MergeMode.Full;
    options.BatchSize = 1000;
    options.EvictionPolicy = CacheEvictionPolicy.LeastRecentlyUsed;
});
```

### Cache Eviction

When using partial caching, ETLBox manages memory with a configurable eviction policy. Available values:

- `FullRefresh` (default)
- `LeastRecentlyUsed`
- `LeastFrequentlyUsed`
- `FirstInFirstOut`
- `LastInFirstOut`

Use `EvictionPolicy` to control how records are removed from the internal cache.

## Example Code on GitHub

You can find examples — basic usage and usage with options — in the official demo project on GitHub:

- {{< link-ext text="BulkInsert example on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/DbExtensions.BulkMerge" >}}

The demo is ready to run and shows how to configure the connection, create the table, and execute bulk operations with real data.
