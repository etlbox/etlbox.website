---
title: "Bulk Update"
description: "Learn how to update thousands of rows efficiently using `BulkUpdate<T>()` with ETLBox.DbExtensions. This article covers basic usage and customization options."
lead: "<code>BulkUpdate<T>()</code> updates multiple records in your database in a single, efficient operation. It matches rows based on one or more ID columns and updates the specified fields. Ideal for high-volume updates with minimal database round-trips."
draft: false
images: []
menu:
  docs:
    parent: "operations"
weight: 20
toc: true
---

## Example

```csharp
using System.Data.SqlClient;
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(1, 2_500)
    .Select(i => new Customer {
        Id = i,
        Name = $"Updated {i}",
        City = $"City {i % 25}"
    });

connection.BulkUpdate(customers);

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```

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

## Customization Options

You can configure the operation using the optional `BulkOptions<T>` parameter:

```csharp
var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(2_000, 4_500)
    .Select(i => new Customer { Id = i, Name = $"Options update {i}", City = $"My City {i % 25}" });

connection.BulkUpdate(customers, options => {
    options.BatchSize = 500;
    options.UpdateColumns = new[] { new UpdateColumn() { UpdatePropertyName = "Name" } };
    options.BeforeBatchWrite = (batch) => {
        Console.WriteLine($"Before batch with {batch.Length} rows.");
        return batch;
    };
});
```

For a complete list of available options, see the [BulkOptions reference](/docs/operations/bulk-options).

### Table Naming Convention

By default, the table name is inferred from the class name. For example:

```csharp
public class Customer { ... }
```

This maps to either Customer or Customers.

You can override the name using `TableName`, or adjust it with `TablePrefix` and `TableSuffix` inside [BulkOptions](/docs/operations/bulk-options).

## Example Code on GitHub

You can find both examples — basic usage and usage with options — in the official demo project on GitHub:

- {{< link-ext text="BulkInsert example on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/DbExtensions.BulkUpdate" >}}

The demo is ready to run and shows how to configure the connection, create the table, and execute bulk operations with real data.


