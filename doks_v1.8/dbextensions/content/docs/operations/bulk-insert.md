---
title: "Bulk Insert"
description: "Learn how to use BulkInsert<T>() to efficiently insert large volumes of data into your database using ETLBox.DbExtensions. This article covers the basic usage, customization options, and table naming behavior."
lead: "<code>BulkInsert<T>()</code> lets you efficiently insert large amounts of data into your database using native bulk loaders under the hood. It works directly on any <code>IDbConnection</code> and supports advanced options such as identity insert, batch size control, and column mapping."
draft: false
images: []
menu:
  docs:
    parent: "operations"
weight: 10
toc: true
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

## Customization Options

You can configure the operation using the optional `BulkOptions<T>` parameter:

```csharp
var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(1, 4_999)
    .Select(i => new Customer { Id = i, Name = $"Customer {i}", City = $"City {i % 50}" });

connection.BulkInsert(customers, options => {
    options.BatchSize = 500;
    options.TablePrefix = "dim";
    options.ReadGeneratedValues = true;
    options.OnProgress = progress => {
        if (progress % 1000 == 0)
            Console.WriteLine($"Inserted {progress} rows.");
    };
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

- {{< link-ext text="BulkInsert example on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/DbExtensions.BulkInsert" >}}

The demo is ready to run and shows how to configure the connection, create the table, and execute bulk operations with real data.
