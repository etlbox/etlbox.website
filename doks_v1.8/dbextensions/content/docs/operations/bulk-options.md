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
| `BatchSize`               | Number of records per batch. Default is 1000. |
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

## Options for Insert/Update/Delete

These apply only to `BulkInsert()`, `BulkUpdate()`, and `BulkDelete()`:

| Property            | Description |
|---------------------|-------------|
| `BeforeBatchWrite`  | Function executed before each batch is written. Can transform the batch. |
| `AfterBatchWrite`   | Action executed after a batch has been written. |
| `UpdateColumns`     | Explicitly specify which columns to update (optional). Applies to update operations only. |

## Examples for Bulk Options

The following examples apply to `BulkInsert`, `BulkUpdate`, and `BulkDelete`.
Examples for `BulkMerge` options are provided in the section below.

### OnProgress

```csharp
connection.BulkInsert(data, options => {
    options.OnProgress = count => {
        Console.WriteLine($"{count} rows processed.");
    };
});
```

### RedirectErroneousBatches / ErrorData

Skip failed batches and collect errors for inspection:

```csharp
var errorList = new List<ETLBoxError>();

connection.BulkInsert(data, options => {
    options.RedirectErroneousBatches = true;
    options.ErrorData = errorList;
});

// Handle/log errors
foreach (var error in errorList)
    Console.WriteLine($"Error: {error.ErrorText}, Failing Data: {error.RecordAsJson}");
```

### ColumnConverters

Transform values before writing them to the database:

```csharp
connection.BulkInsert(data, options => {
    options.ColumnConverters = new[] {
        new ColumnConverter("Url", val => "PRE_" + val?.ToString())
    };
});
```

### ColumnMapping

Map property names to different database column names, or ignore properties:

```csharp
connection.BulkInsert(data, options => {
    options.ColumnMapping = new[] {
        new DbColumnMap { PropertyName = "InternalName", DbColumnName = "DisplayName" },
        new DbColumnMap { PropertyName = "TempFlag", IgnoreColumn = true }
    };
});
```

### BeforeBatchWrite / AfterBatchWrite

Use these callbacks to run custom logic before and after each batch is processed.

```csharp
connection.BulkUpdate(data, options => {
    options.BatchSize = 100;

    options.BeforeBatchWrite = batch => {
        Console.WriteLine($"Preparing batch of {batch.Length} records...");
        return batch;
    };

    options.AfterBatchWrite = batch => {
        Console.WriteLine($"Finished batch of {batch.Length} records.");
    };
});
```

### UpdateColumns

Specify exactly which properties should be updated when a matching row is found.

```csharp
connection.BulkUpdate(data, options => {
    options.IdColumns = new[] { new IdColumn("Id") };
    options.UpdateColumns = new[] {
        new UpdateColumn("City"),
        new UpdateColumn("Name")
    };
});
```

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


## Additional Examples for BulkMerge

### FindDuplicates

Enable this option to automatically detect and skip duplicate records in the source data based on the ID columns.

```csharp
connection.BulkMerge(data, options => {
    options.MergeMode = MergeMode.Full;
    options.FindDuplicates = true;
});
```

### CompareFunc

Use `CompareFunc` to override comparison logic — for example, always force an update if a matching row exists.

```csharp
connection.BulkMerge(data, options => {
    options.MergeMode = MergeMode.InsertsAndUpdates;
    options.IdColumns = new[] {
        new IdColumn("Id1"),
        new IdColumn("OtherId")
    };
    options.CompareFunc = (source, target) => {
        // Always update if the record exists
        return false;
    };
});
```

Let me know if you want a version that conditionally compares values (e.g., only update if one column differs).
