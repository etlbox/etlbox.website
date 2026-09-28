---
title: "Performance"
description: "SQL Server benchmark: Dapper row-by-row Execute vs ETLBox.DbExtensions BulkInsert, BulkUpdate, BulkDelete, and BulkMerge. Method, numbers, and how to rerun."
lead: "DbExtensions is faster than a Dapper loop because it uses the database bulk path instead of one round-trip per row. Here are numbers from a run you can repeat."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 40
toc: true
---

## SQL Server, 5,000 rows

Measured with the {{< link-ext text="DbExtensions.Benchmark" url="https://github.com/etlbox/etlbox.demo/tree/main/DbExtensions.Benchmark" >}} project in `etlbox.demo`. Release build, local SQL Server, catalog `demo`. The Dapper baseline is one `Execute` per row — the pattern you write when Dapper has no bulk API.

| Operation | Method | Seconds | vs Dapper |
| --- | --- | ---: | ---: |
| Insert | Dapper (row by row) | 7.875 | — |
| Insert | SqlBulkCopy | 0.020 | 388× |
| Insert | `BulkInsert` | 0.069 | 114× |
| Update | Dapper (row by row) | 7.735 | — |
| Update | `BulkUpdate` | 0.424 | 18× |
| Delete | Dapper (row by row) | 7.485 | — |
| Delete | `BulkDelete` | 0.271 | 28× |
| Merge | Dapper (select + insert or update) | 11.603 | — |
| Merge | `BulkMerge` | 0.284 | 41× |

Read the table as **order of magnitude**, not a guarantee. Your hardware, indexes, network, and batch size will move the seconds. The shape stays the same: a loop of statements does not compete with a bulk loader.

### What this does *not* claim

- **Not 99% copied from another vendor.** These times are from the script above, on this machine, at 5,000 rows.
- **`BulkInsert` is not faster than raw SqlBulkCopy.** SqlBulkCopy is the SQL Server insert path. DbExtensions wraps it and maps your objects — that costs a few extra milliseconds and buys a one-liner plus update/delete/merge on the same API.
- **The Dapper baseline is intentionally naive.** No explicit transaction, no TVP, no handmade `SqlBulkCopy`. That is what most Dapper code does for writes. If you already wrap a loop in a transaction, the gap shrinks but does not disappear on SQL Server inserts.

## How to rerun

```bash
cd DbExtensions.Benchmark
dotnet run -c Release
dotnet run -c Release -- --rows 5000 --cs "Data Source=localhost;..."
```

Without a license key, keep `--rows` at or below 4999. Drop `etlbox.lic` next to the project to measure larger sets. Connection string: `--cs`, or env `DBEXTENSIONS_BENCHMARK_CS`, or the same localhost default as the other DbExtensions demos.

## Related: EF Core vs EFBox

The same bulk engine is also used from Entity Framework via EFBox. A separate demo, `EF_BenchmarkExample`, compared `SaveChanges` with EFBox on SQL Server (100,000 inserts):

| Method | Seconds |
| --- | ---: |
| EF Core `AddRange` + `SaveChanges` | 31.5 |
| EFBox `BulkInsert` | 7.5 |

That is a different stack (change tracker vs bulk), so it is not comparable 1:1 with the Dapper table. It is included because those were the only published numbers in the demo repo before `DbExtensions.Benchmark` existed.

## Why bulk wins

Each Dapper `Execute` is parse + execute + round-trip. `BulkInsert` on SQL Server streams rows through SqlBulkCopy. `BulkUpdate` / `BulkDelete` / `BulkMerge` batch work instead of issuing one command per object. That is also why [SqlBulkCopy alone is not enough](/docs/getting-started/compared/) if you need updates, deletes, merge, or another database.
