---
title: "Welcome to ETLBox"
description: ""
lead: "<b>ETLBox.DbExtensions</b> adds the missing bulk operations to your ADO.NET stack. Built on top of the ETLBox framework, it enables high-performance data operations with a clean and simple API."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 10
toc: true
---

Whether you're working with raw `IDbConnection` or using Dapper, you can now perform bulk inserts, updates, deletes, and merges with just one line of code.

## Why ETLBox.DbExtensions?

- **Bulk operations for ADO.NET**
  Insert, update, delete, or merge thousands of records with a single method call.

- **Built for Dapper**
  Designed to integrate naturally into your existing Dapper setup.

- **Minimal setup**
  No configuration. Just install the NuGet package and start coding.

---

## Supported Operations

- `BulkInsert<T>()`
  Insert large sets of data efficiently using database-native bulk loaders.

- `BulkUpdate<T>()`
  Update multiple records at once by matching on key columns.

- `BulkDelete<T>()`
  Delete multiple rows in a single operation based on ID column(s).

- `BulkMerge<T>()`
  Perform insert, update, or delete in one step—also known as "upsert."

---

## Works with All Major Databases

ETLBox.DbExtensions supports any ADO.NET connection backed by an ETLBox database provider, including:

- SQL Server
- PostgreSQL
- MySQL / MariaDB
- SQLite
- Oracle
- DB2
- Snowflake
- SAP HANA / ASE

---

## How It Works

The package extends `IDbConnection` with bulk operation methods. Internally, it converts the ADO.NET connection to an ETLBox `IConnectionManager` and uses the ETLBox data flow engine for optimized performance.

```csharp
var data = Enumerable.Range(1, 10000)
    .Select(i => new Customer { Id = i, Name = $"Customer {i}" });
connection.BulkInsert(data.ToList());
```

---

## Prerequisites

- .NET 6 or higher (works with .NET Framework 4.8 via ETLBox compatibility)
- At least one ETLBox database provider package installed (e.g. `ETLBox.SqlServer`, `ETLBox.Postgres`, etc.)

---

## Installation

Install via NuGet:

```
dotnet add package ETLBox.DbExtensions
```

Make sure to also install the appropriate ETLBox.* database provider for your target DBMS.

---

## Learn More

- [BulkInsert documentation](/docs/bulkinsert)
- [BulkUpdate documentation](/docs/bulkupdate)
- [BulkDelete documentation](/docs/bulkdelete)
- [BulkMerge documentation](/docs/bulkmerge)
