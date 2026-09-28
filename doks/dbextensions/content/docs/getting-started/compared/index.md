---
title: "Compared to"
description: "When to use ETLBox.DbExtensions instead of a Dapper Execute loop, SqlBulkCopy, or Dapper Plus for bulk writes."
lead: "DbExtensions does not replace Dapper, and it does not pretend SqlBulkCopy is slow. It covers the write operations Dapper never added — on more than SQL Server."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 50
toc: true
---

## Dapper

Use Dapper for queries. Use DbExtensions when the next step is writing many rows.

```csharp
using var connection = new SqlConnection(connectionString);

var customers = connection
    .Query<Customer>("SELECT * FROM Customer WHERE Active = 1")
    .ToList();

connection.BulkUpdate(customers);
```

A `foreach` + `Execute` is fine for a handful of rows. At thousands of rows it is the [slow path we measured](/docs/getting-started/performance/): one round-trip each. DbExtensions keeps your POCOs and the same connection.

## SqlBulkCopy

On SQL Server, `BulkInsert` uses SqlBulkCopy. If you only ever insert into SQL Server and you already maintain `DataTable` + column mappings, SqlBulkCopy stays a valid choice — and in our benchmark it was a few milliseconds faster than `BulkInsert` because there is no object mapping.

Reach for DbExtensions when you also need:

- **Update, delete, or merge** (SqlBulkCopy is insert-only)
- **POCOs instead of `DataTable`**
- **PostgreSQL, MySQL, Oracle, Db2, SQLite, …** with the same method names

## Dapper Plus

[Dapper Plus](https://dapper-plus.net/) is a commercial bulk library aimed at Dapper users. The problem it solves is the same: Dapper has no bulk writes.

DbExtensions is the ETLBox answer to that gap:

| | Dapper Plus | ETLBox.DbExtensions |
| --- | --- | --- |
| Host | Extension methods on the connection | Extension methods on `IDbConnection` |
| Operations | Bulk insert / update / delete / merge | Bulk insert / update / delete / merge |
| Engine | Dapper Plus | ETLBox bulk connectors |
| Databases | Multiple ADO.NET providers | ETLBox providers (SQL Server, Postgres, MySQL, Oracle, Db2, SQLite, Snowflake, HANA, …) |
| Fits if | You want that vendor’s API | You already use ETLBox, or want the same bulk engine as EFBox / ETLBox data flows |

We do **not** publish a head-to-head speed contest against Dapper Plus. Different machines and scripts are not comparable. Run both against your tables if that decision matters.
