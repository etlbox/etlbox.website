---
title: "Bulk Delete"
description: "Use `BulkDelete<T>()` to efficiently remove multiple records from your database in a single call. This article explains how to configure delete operations and customize behavior with options."
lead: "<code>BulkDelete<T>()</code> removes multiple records from your database in a single operation. Rows are matched based on one or more ID columns, making it ideal for batch deletions without writing complex SQL."
draft: false
images: []
menu:
  docs:
    parent: "operations"
weight: 50
toc: true
---

## Example

```csharp
using System.Data.SqlClient;
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(1000, 1000)
    .Select(i => new Customer { Id = i })
    .Union(
        Enumerable.Range(3000, 1500)
        .Select(i => new Customer { Id = i })
    );

connection.BulkDelete(customers);

public class Customer {
    [IdColumn]
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```

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

## Customization Options

You can configure the operation using the optional `BulkOptions<T>` parameter:

```csharp
var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(2_000, 500)
    .Select(i => new Customer { Name = $"Customer {i}" });

connection.BulkDelete(customers, options => {
    options.BatchSize = 50;
    options.IdColumns = new[] { new IdColumn() { IdPropertyName = "Name" } };
    options.BeforeBatchWrite = (batch) => {
        Console.WriteLine($"Before batch with {batch.Length} rows.");
        return batch;
    };
});
```

For a complete list of available options, see the [BulkOptions reference](/docs/operations/bulk-options).

### IdColumns

Bulk delete operations require a way to uniquely identify which rows to remove.
By default, ETLBox uses any property marked with `[IdColumn]`. You can also define `IdColumns` manually in `BulkOptions`.

```csharp
connection.BulkDelete(customers, options => {
    options.IdColumns = new[] {
        new IdColumn("Id")
    };
});
```

If no `IdColumns` are set and no `[IdColumn]` attribute is present, an exception will be thrown.

### Table Naming Convention

By default, the table name is inferred from the class name. For example:

```csharp
public class Customer { ... }
```

This maps to either Customer or Customers.

You can override the name using `TableName`, or adjust it with `TablePrefix` and `TableSuffix` inside [BulkOptions](/docs/operations/bulk-options).

## Example Code on GitHub

You can find both examples — basic usage and usage with options — in the official demo project on GitHub:

- {{< link-ext text="Bulk Operations Example on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/DbExtensions.BulkDelete" >}}

The demo is ready to run and shows how to configure the connection, create the table, and execute bulk operations with real data.
