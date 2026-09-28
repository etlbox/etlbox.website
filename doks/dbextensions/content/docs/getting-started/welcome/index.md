---
title: "Welcome to DbExtensions"
description: "Add bulk insert, update, delete, and merge to IDbConnection and Dapper. ETLBox.DbExtensions replaces row-by-row Execute with one-line native bulk operations."
lead: "<b>ETLBox.DbExtensions</b> adds the missing bulk writes to ADO.NET. Keep Dapper for queries. Replace <code>foreach</code> + <code>Execute</code> with one method call that is also much faster."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 10
toc: true
---

## Why ETLBox.DbExtensions?

Dapper is excellent at reading data. It is not a bulk writer. The usual workaround — a loop of `INSERT`/`UPDATE`/`DELETE` — is not only verbose. It costs one round-trip per row and gets slow as soon as the set grows.

DbExtensions extends the same `IDbConnection` you already use:

- **Bulk operations for ADO.NET**: insert, update, delete, or merge thousands of records in one call.
- **Built for Dapper**: query with Dapper, write with `BulkInsert` / `BulkUpdate` / `BulkDelete` / `BulkMerge`.
- **Minimal setup**: install the NuGet package and the matching ETLBox database provider.

On a local SQL Server, 5,000 inserts took **8 seconds** with a Dapper loop and **70 ms** with `BulkInsert()` — not just less code, about **110×** faster. [How we measured that](/docs/getting-started/performance/).

## Supported Operations

`BulkInsert<T>()`: Insert large sets using the database-native bulk loader (SqlBulkCopy on SQL Server, and the equivalent path on other providers).

`BulkUpdate<T>()`: Update many rows by matching on key columns — without a statement per row.

`BulkDelete<T>()`: Delete many rows by ID column(s) in one operation.

`BulkMerge<T>()`: Insert, update, and optionally delete in one step (upsert / table sync).

## Works with All Major Databases

Any ADO.NET connection backed by an ETLBox database provider, including:

- SQL Server
- PostgreSQL
- MySQL
- MariaDB
- SQLite
- Oracle
- IBM DB2
- Snowflake
- SAP ASE (Sybase)
- SAP HANA

## How It Works

The package extends `IDbConnection`. Internally it maps the ADO.NET connection to an ETLBox `IConnectionManager` and runs the ETLBox bulk engine.

```csharp
var connection = new SqlConnection("your-connection-string");

connection.BulkInsert(dataToInsert);
connection.BulkUpdate(dataToUpdate);
connection.BulkDelete(dataToDelete);
connection.BulkMerge(dataToMerge);
```

## What’s Next?

- [Installation](/docs/getting-started/installation/) — packages, provider, first insert.
- [Performance](/docs/getting-started/performance/) — Dapper loop vs DbExtensions vs SqlBulkCopy.
- [Compared to](/docs/getting-started/compared/) — Dapper, SqlBulkCopy, and Dapper Plus.
- Then each bulk operation, with options and examples.
