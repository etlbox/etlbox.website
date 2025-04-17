---
title: "Bulk Options"
description: "This article explains all available options for configuring bulk operations in ETLBox.DbExtensions. It covers both the shared settings used in BulkInsert, BulkUpdate, and BulkDelete, as well as the additional options specific to BulkMerge."
lead: "Bulk operations in ETLBox.DbExtensions can be customized using the <code>BulkOptions<T></code> or <code>MergeBulkOptions<T></code> classes. These options allow fine-tuned control over how data is inserted, updated, or deleted during a bulk operation."
draft: false
images: []
menu:
  docs:
    parent: "operations"
weight: 50
toc: true
---

This article describes all available options for `BulkInsert()`, `BulkUpdate()`, and `BulkDelete()` via `BulkOptions<T>`, and explains which options apply specifically to `BulkMerge()` via `MergeBulkOptions<T>`.

## Usage Example

```csharp
connection.BulkInsert(customers, options => {
    options.BatchSize = 1000;
    options.TablePrefix = "dim";
    options.ReadGeneratedValues = true;
    options.AllowIdentityInsert = true;
    options.OnProgress = rows => Console.WriteLine($"Inserted {rows} rows.");
});
```

## Shared Options

These options are available in both `BulkOptions<T>` and `MergeBulkOptions<T>`:

| Property                  | Description |
|---------------------------|-------------|
| `BatchSize`               | Number of records per batch. Default is 0 (auto-tuned). |
| `ReadGeneratedValues`     | If `true`, reads auto-generated values (e.g. identity columns). Only supported on some DBMSs. |
| `AllowIdentityInsert`     | Enables manual values in identity/serial columns. |
| `OnProgress`              | Callback after each batch with number of rows processed. |
| `RedirectErroneousBatches`| If `true`, continues after errors and stores failures in `ErrorData`. |
| `ErrorData`               | Holds information about failed rows when redirection is enabled. |
| `ColumnConverters`        | List of value converters for specific columns. |
| `ColumnMapping`           | Custom mapping of class properties to database columns. |
| `TableName`               | Overrides the target table name entirely. |
| `TablePrefix` / `TableSuffix` | Prefix/suffix added to the default table name. |
| `IgnoreDefaultColumnsOnInsert` | Ignores DB columns with a `DEFAULT` constraint when inserting. |
| `IdColumns`               | Defines primary key columns used for update/delete/merge operations. |

## Additional Options

These apply only to `BulkInsert()`, `BulkUpdate()`, and `BulkDelete()`:

| Property            | Description |
|---------------------|-------------|
| `BeforeBatchWrite`  | Function executed before each batch is written. Can transform the batch. |
| `AfterBatchWrite`   | Action executed after a batch has been written. |
| `UpdateColumns`     | Explicitly specify which columns to update (optional). Applies to update operations only. |


## Additional Options for BulkMerge

These options are available **only for `BulkMerge()`**:

| Property          | Description |
|-------------------|-------------|
| `MergeMode`       | Either `MergeMode.Full` (default), `MergeMode.Delta`, `MergeMode.InsertsOnly`, `MergeMode.UpdatesOnly` or `MergeMode.InsertsAndDeletes`.  Determines deletion behavior. |
| `FindDuplicates`  | Enables duplicate detection in source data. |
| `CompareColumns`  | Columns used to decide if a row needs to be updated. |
| `UpdateColumns`   | Columns to be updated when a match is found. |
| `DeleteColumns`   | Used in `Delta` mode to determine which rows to delete. |
| `CompareFunc`     | Custom comparison function for update detection. |
| `CacheMode`       | `Full` or `Partial`. Controls how much of the target table is cached for comparisons. |
| `MaxCacheSize`    | Limit the number of records held in memory for merge. |
| `EvictionPolicy`  | Controls how cached data is refreshed during a partial merge. |
| `ReadConnection`  | Used only with `CacheMode.Partial`. A separate connection is required to read from the target table while writing. |



