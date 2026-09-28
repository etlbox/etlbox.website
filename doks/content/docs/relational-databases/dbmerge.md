---
title: "Database Merge"
description: "DbSource provides flexible database access, automatically retrieving metadata and supporting parameterized queries. It allows column mapping, transformations through column converters, and dynamic object usage."
lead: "DbMerge is a destination component in ETLBox that merges data from a source into a destination table. It inserts new records, updates existing ones, and optionally deletes obsolete records. This ensures source and destination tables remain synchronized, making it useful for incremental data loads, data migrations, and data integration.
"
draft: false
images: []
menu:
  docs:
    parent: "relational-databases"
weight: 170
toc: true
chatgpt-review: true
---

## When use DbMerge?

DbMerge is typically used at the end of an ETL pipeline, ensuring that only relevant changes are applied to the destination table. Instead of reloading entire datasets, DbMerge identifies and processes only inserts, updates, and deletions, reducing the load on the database and improving performance.

Merging data efficiently reduces unnecessary updates, minimizes data transfer, and improves performance. Instead of replacing entire tables, DbMerge processes only the changes, making it a good solution for keeping databases in sync.

### How DbMerge works

1. Reads source data from a table, file, or transformation.
2. Looks up destination records using an internal lookup.
3. Compares records based on IdColumns and CompareColumns.
4. Executes batch operations: inserts, updates, and optional deletions.
5. Outputs delta information (optional) for further processing.

DbMerge works with most databases supported by ETLBox, provided they have bulk update and bulk delete implementations.

### Example: Merging Data into a Table

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<MyMergeRow>(new List<MyMergeRow> {
    new MyMergeRow { Key = 1, Value = "Test - Insert" },
    new MyMergeRow { Key = 2, Value = "Test - Update" },
    new MyMergeRow { Key = 3, Value = "Test - Exists" }
});
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    ConnectionManager = conn,
    TableName = "DestinationTable",
    MergeMode = MergeMode.Full
};

source.LinkTo(merge);
Network.Execute(source);
```

For this example, assume the destination table contains existing data:

```sql
CREATE TABLE DestinationTable (
    Key INT NOT NULL PRIMARY KEY,
    Value VARCHAR(50) NULL
);

INSERT INTO DestinationTable (Key, Value) VALUES
(2, 'XXX'),
(3, 'Test - Exists'),
(4, 'Test - Deleted');
```

And a matching **POCO**:

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }
}
```

{{< callout context="note" icon="outline/info-circle" >}}
`DbMerge` requires tracking changes to determine whether a record should be inserted, updated, deleted, or ignored. The easiest way to enable this functionality is by inheriting from `MergeableRow`, which provides built-in support for ChangeDate, ChangeAction, and UniqueId.

As an alternative, you can implement `IMergeableRow` yourself if you need more control over how records are identified and compared.
{{< /callout >}}

#### Output after execution

| Key | Value         | ChangeAction |
|-----|-------------|--------------|
| 1   | Test - Insert | Insert      |
| 2   | Test - Update | Update      |
| 3   | Test - Exists | Exists      |

- The row with `Key = 1` is inserted.
- The row with `Key = 2` is updated.
- The row with `Key = 3` remains unchanged.
- The row with `Key = 4` is deleted.


### Using IMergeableRow

Instead of inheriting from `MergeableRow`, you can implement the `IMergeableRow` interface to have full control over how `DbMerge` tracks and processes changes. This is useful when you need custom logic for tracking insert, update, delete, or existing records.

#### Example: Implementing IMergeableRow

```csharp
public class MyMergeRow : IMergeableRow {
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }

    public ChangeAction? ChangeAction { get; set; } // Required for tracking changes
    public DateTime? ChangeDate { get; set; } // Optional, used for auditing
}
```

## Merge Modes in DbMerge

DbMerge supports different merge modes to control how changes are applied to the destination table:

- **Full** – Inserts, updates, and deletes records missing from the source.
- **Delta** – Inserts and updates records; deletions require an explicit delete flag.
- **InsertsAndUpdatesOnly** – Processes only inserts and updates, leaving existing records untouched.
- **UpdatesOnly** – Updates existing records without inserting new ones or deleting any records.

### Full vs. Delta Merge

**Full Merge**

In a full merge, the source provides a complete dataset, meaning that any records missing from the source are considered deleted in the destination. The destination table is fully synchronized to match the source. This approach is useful when the source does not track changes and always provides a full snapshot of the data.

The previous example already demonstrated a full merge, where DbMerge automatically identified and removed missing records.

**Delta Merge**

In a delta merge, the source provides only new, updated, or deleted records. This typically relies on change tracking mechanisms such as timestamps or Change Data Capture (CDC).

- **Inserts and updates** are processed as usual.
- **Deletions require an explicit delete flag**, as missing records in the source are not automatically removed.

### Example: Delta Merge with Delete Flag

To enable deletions in a delta merge, a column must explicitly mark records for deletion.

**POCO Definition**

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }

    [DeleteColumn("DELETE")]
    public string DeleteFlag { get; set; }
}
```

**Data Flow Configuration**

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<MyMergeRow>(new List<MyMergeRow> {
    new MyMergeRow { Key = 1, Value = "Updated Value" },
    new MyMergeRow { Key = 4, Value = "Deleted Row", DeleteFlag = "DELETE" }
});

var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Delta
};

source.LinkTo(merge);
Network.Execute(source);
```

**Destination Table Before Merge**

| Key | Value         |
|-----|-------------|
| 1   | Old Value   |
| 2   | XXX        |
| 3   | Test - Exists |
| 4   | Test - Deleted |

**Output After Execution**

| Key | Value          | ChangeAction |
|-----|--------------|--------------|
| 1   | Updated Value  | Update      |
| 2   | XXX           | Exists      |
| 3   | Test - Exists | Exists      |
| 4   | - (Deleted)  | Delete      |

- `Key = 1` exists in both source and destination, so its `Value` is **updated**.
- `Key = 4` exists in the destination but is **deleted** because `DeleteFlag = "DELETE"`.
- `Key = 2` and `Key = 3` remain **unchanged** since they were not part of the incoming data.


## Using POCOs and Dynamic Objects

DbMerge supports both strongly typed POCOs and dynamic objects (`ExpandoObject`).

- POCOs use attributes (`IdColumn`, `CompareColumn`, `UpdateColumn`) to define merge behavior.
- ExpandoObject requires manual mapping since attributes cannot be applied dynamically.
- POCOs can also use manual mapping instead of attributes by configuring `IdColumns`, `CompareColumns`, and `UpdateColumns` explicitly.

### Example: POCO-based Merge with Attributes

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    public int Key { get; set; }
    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }
}
```

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
```

### Example: POCO-based Merge with Manual Mapping

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
merge.IdColumns = new[] {
    new IdColumn() { IdPropertyName = "Key" }
};
merge.CompareColumns = new[] {
    new CompareColumn() { ComparePropertyName = "Value" }
};
merge.UpdateColumns = new[] {
    new UpdateColumn() { UpdatePropertyName = "Value" }
};
```

### Example: Dynamic Merge with ExpandoObject

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<ExpandoObject>();

dynamic row1 = new ExpandoObject();
row1.Key = 1;
row1.Value = "Updated Value";

source.DataAsList.Add(row1);

var merge = new DbMerge(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
merge.IdColumns = new[] {
    new IdColumn() { IdPropertyName = "Key" }
};
merge.CompareColumns = new[] {
    new CompareColumn() { ComparePropertyName = "Value" }
};
source.LinkTo(merge);
Network.Execute(source);
```

When using `ExpandoObject`, column mappings must be defined manually using `IdColumns`, `CompareColumns`, and `UpdateColumns`. POCOs can use either approach, depending on preference and flexibility requirements.

## Configuring DbMerge

DbMerge provides several configuration options to control how data is processed. Required properties define the basic setup, while optional properties allow fine-tuning for performance, column mapping, and deletion handling.

### Required Properties

- **ConnectionManager** – Defines the database connection. If left empty, `ETLBox.Settings.DefaultDbConnection` is used.
- **TableName** or **TableDefinition** – Specifies the target table, either by name or with a custom schema definition.
- **MergeMode** – Determines how changes are applied. Default is `MergeMode.Delta`.
- **IdColumns** – Identifies the key columns used for matching records.

### Optional Properties

- **CompareColumns** / **CompareFunc** – Defines which columns determine if a record has changed. Use either a list of column names or a custom comparison function.
- **UpdateColumns** – Specifies which columns should be updated. If empty, all non-IdColumns are updated.
- **InsertColumns** – Specifies which columns should be inserted when new records are added. If empty and `UseUpdateColumnsForInserts` is `true`, the `UpdateColumns` are used for inserts. Otherwise, all columns (except identity columns) are inserted, unless they are explicitly ignored via `DbColumnMap` with `IgnoreColumn = true`.
- **UseUpdateColumnsForInserts** – If set to `true`, `UpdateColumns` will be used also for inserts when no `InsertColumns` are explicitly specified. Default is `false`.
- **DeleteColumns** – Identifies records to be deleted in Delta mode.
- **BatchSize** – Defines the number of records processed per batch.
- **CacheMode**, **MaxCacheSize**, **EvictionPolicy**, **ReadConnectionManager** – Controls how destination data is cached and read. `ReadConnectionManager` is required when using partial caching with a transactional or persistent connection.
- **ColumnMapping** – Maps object properties to different database column names.
- **MatchCaseInsensitive** – When set to `true`, `DbMerge` automatically creates column mappings for properties whose names match destination columns in a case-insensitive manner (for example, property `Key` matches column `KEY`). This is useful on databases that normalize identifiers to upper-case or lower-case. You cannot combine this option with a manually configured `ColumnMapping` – if you need custom mappings, you must handle case differences yourself.
- **IgnoreDefaultColumnsOnInsert** – Prevents default column values from being explicitly inserted.
- **UseTruncateMethod** – Truncates the destination table before merging instead of performing deletes.
- **FindDuplicates** – Detects duplicate records in the input and prevents multiple operations on the same key within a batch.
- **ValueGeneratedColumns** – Allows reading back auto-generated values after insert/update operations.
- **ColumnConverters** – Transforms column values before writing them to the destination.
- **AllowIdentityInsert** – Enables inserting explicit values into identity (auto-increment) columns.

## Configuring Matching, Comparison, and Updates

DbMerge allows fine-grained control over how records are matched, compared, updated, and deleted. These configurations can be applied in two ways:

1. **Using Attributes** (for POCOs) – Recommended when working with strongly typed objects.
2. **Using Properties** (for both POCOs and `ExpandoObject`) – Allows dynamic configuration at runtime.

The following examples show how to configure IdColumns, CompareColumns, UpdateColumns, and DeleteColumns using both approaches.

### Example: Configuring IdColumns and CompareColumns

**Using Attributes (POCOs Only)**

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    public string Value { get; set; }
}
```

**Using Properties (POCOs & ExpandoObject)**

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
merge.IdColumns = new[] {
    new IdColumn() { IdPropertyName = "Key" }
};
merge.CompareColumns = new[] {
    new CompareColumn() { ComparePropertyName = "Value" }
};
```

This ensures that `Key` is used to match records, and `Value` is checked to detect updates.

### Example: Using UpdateColumns

By default, all non-ID columns are updated when a change is detected. To restrict updates to specific fields, define `UpdateColumns`.

**Using Attributes (POCOs Only)**

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }
}
```

**Using Properties (POCOs & ExpandoObject)**

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};

merge.UpdateColumns = new[] {
    new UpdateColumn() { UpdatePropertyName = "Value" }
};
```

This ensures that only the `Value` column is updated, even if other fields have changed.

### Example: Using InsertColumns

By default, all columns (except identity columns) are inserted when new records are added. If you want to use the same columns for inserts as for updates, you can set `UseUpdateColumnsForInserts = true`, which will automatically use `UpdateColumns` for inserts as well.

If you want different columns for inserts than for updates, you can explicitly set `InsertColumns`.

**Using Properties (POCOs & ExpandoObject)**

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};

merge.InsertColumns = new[] {
    new InsertColumn() { InsertPropertyName = "Value" }
};
```

This ensures that only the `Value` column is inserted.

### Example: Using DeleteColumns for Delta Mode

When using Delta mode, deletions must be explicitly marked with a DeleteColumn.

**Using Attributes (POCOs Only)**

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    public string Value { get; set; }

    [DeleteColumn("DELETE")]
    public string DeleteFlag { get; set; }
}
```

**Using Properties (POCOs & ExpandoObject)**

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Delta
};
merge.DeleteColumns = new[] {
    new DeleteColumn() { DeletePropertyName = "DeleteFlag", DeleteOnMatchValue = "DELETE" }
};
```

Records with `DeleteFlag = "DELETE"` will be removed from the destination table, while other changes are processed normally.


### Using CompareFunc for Custom Comparison

`CompareFunc` provides a **flexible alternative** to `CompareColumns`, allowing custom logic to determine if a record has changed. This is useful for case-insensitive comparisons, ignoring whitespace, or applying business rules.

#### Example: Using CompareFunc

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    CompareFunc = (source, dest) => source.Value.Trim().ToLower() == dest.Value.Trim().ToLower()
};
```

This prevents updates when differences are only in case or whitespace.

#### Example: CompareFunc with Multiple Conditions

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    CompareFunc = (source, dest) =>
        source.Value.Trim() == dest.Value.Trim() &&
        Math.Abs(source.Amount - dest.Amount) < 0.01
};
```

This ensures updates only if both conditions are met—ignoring extra spaces in `Value` and allowing minor rounding differences in `Amount`.


## Using TableDefinition

By default, `DbMerge` retrieves metadata from the database to determine the table structure. In cases where metadata cannot be automatically retrieved or when working with dynamically created tables, a `TableDefinition` can be used to explicitly define the schema.

### Example: Defining a Table Structure

```csharp
var tableDef = new TableDefinition("DestinationTable", new List<TableColumn> {
    new TableColumn("Key", "INT", allowNulls: false, isPrimaryKey: true),
    new TableColumn("Value", "VARCHAR(100)", allowNulls: true)
});

var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    TableDefinition = tableDef,
    MergeMode = MergeMode.Full
};
```

When a `TableDefinition` is provided, `DbMerge` uses this schema instead of querying the database for metadata. This is particularly useful in environments where database access is restricted or when working with temporary tables.

## Composite Keys

DbMerge supports composite keys by marking multiple properties with `[IdColumn]`.

### Example: Using Composite Keys

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    public int KeyPart1 { get; set; }

    [IdColumn]
    public int KeyPart2 { get; set; }

    [CompareColumn]
    public string Value { get; set; }
}
```

Internally, DbMerge concatenates these columns to determine uniqueness.

## Column Mapping

If column names differ between the source and destination, mappings can be applied. DbMerge supports both attribute-based mapping (for POCOs) and manual mapping (for POCOs and ExpandoObjects).

### Attribute-Based Mapping for POCOs

Use `DbColumnMap` to specify column names when using POCOs.

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    [DbColumnMap("DB_Key")]
    public int Key { get; set; }

    [CompareColumn]
    [DbColumnMap("DB_Value")]
    public string Value { get; set; }
}
```

You can also ignore columns using attributes in POCO classes by applying `DbColumnMap` with `IgnoreColumn = true`.

```csharp
[DbColumnMap(IgnoreColumn = true)]
public string TemporaryField { get; set; }
```

### Manual Column Mapping

For both POCOs and `ExpandoObject`, column mappings can be manually defined using `ColumnMapping`.

```csharp
var merge = new DbMerge(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};

merge.IdColumns = new[] {
    new IdColumn() { IdPropertyName = "Key" }
};
merge.CompareColumns = new[] {
    new CompareColumn() { ComparePropertyName = "Value" }
};
merge.ColumnMapping = new[] {
    new DbColumnMap { DbColumnName = "DB_Key", PropertyName = "Key" }
};
merge.ColumnMapping = new[] {
    new DbColumnMap { DbColumnName = "DB_Value", PropertyName = "Value" }
};
```

Specific columns can be ignored by setting `IgnoreColumn = true`. This ensures that the corresponding property is excluded from the database operation.

```csharp
  new DbColumnMap { PropertyName = "TemporaryField", IgnoreColumn = true }
```

## Tracking Changes with the Delta Table

DbMerge can provide detailed tracking of applied changes using the Delta Table feature. This allows monitoring which records were inserted, updated, deleted, or remained unchanged.

### Enabling the Delta Table

When linked to another destination, DbMerge outputs change tracking information that can be stored in a Delta Table.

#### Example: Writing Changes to a Delta Table

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new DbSource<MyMergeRow>(conn, "SourceTable");
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
var deltaTable = new DbDestination<MyMergeRow>(conn, "DeltaTable");

source.LinkTo(merge);
merge.LinkTo(deltaTable); // Captures changes into DeltaTable
Network.Execute(source);
```

All row that in your delta output will have the **ChangeAction** and the **ChangeDate** set to the corresponding chage. The `ChangeAction` is one of the following operations (`Insert`, `Update`, `Delete`, `Exists`, `Duplicate`, `NotFound`). The `ChangeDate` is the timestampt when this operation was detected.

### Using Delta Data for Further Processing

The Delta Table can be linked to transformations, logs, or notifications.

#### Example: Logging Changes

```csharp
var logFile = new CsvDestination<MyMergeRow>("delta_log.csv");

merge.LinkTo(logFile); // Writes changes to a CSV file
Network.Execute(source);
```

## Error Handling

By default, if a single record in a batch causes an error, the **entire data flow stops**. To avoid this, errors can be redirected to an error destination.

### Redirecting Errors Instead of Stopping Execution

If an error occurs within a batch, the **entire batch is considered flawed** and is redirected using `LinkErrorTo()`. This prevents the flow from stopping and allows further processing of valid data.

#### Example: Redirecting Errors

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new DbSource<MyMergeRow>(conn, "SourceTable");
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    BatchSize = 1000
};
var errorDest = new MemoryDestination<ETLBoxError>();

merge.LinkErrorTo(errorDest);
source.LinkTo(merge);
Network.Execute(source);

foreach (var error in errorDest.Data) {
    Console.WriteLine($"Error: {error.ErrorText}");
    Console.WriteLine($"Faulty Batch: {error.RecordAsJson}");
}
```

### Using DbTypeCheck to Detect Issues Early

To prevent faulty records from reaching DbMerge, [DbTypeCheck](../db-type-check) can be used before merging. It detects invalid data and redirects flawed records to a separate output, reducing batch failures.


### Avoiding Duplicates

By default, DbMerge does not check for duplicate records in the source data. If the same `IdColumn` appears multiple times within a batch, the database may reject the operation due to primary key violations.

To prevent this, enable duplicate detection, which ensures that only the first occurrence of each `IdColumn` is processed.

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    FindDuplicates = true
};
```

With this setting enabled, only the first occurrence of a duplicate record is processed, while subsequent duplicates are ignored.



## Column Converters

Column converters allow modifying data before it is compared or written to the destination. They can be used to apply transformations such as formatting values, normalizing data, or adjusting case sensitivity.

Column converters work for both POCOs and `ExpandoObject` and can be defined manually using the `ColumnConverters` property.

### Example: Formatting Dates

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
merge.ColumnConverters = new[] {
    new ColumnConverter {
        ColumnName = "Value",
        ConversionFunc = val => ((DateTime)val).ToString("yyyyMMdd")
    }
};
```

In this example, the `Value` column is transformed into a specific date format before the merge operation.

Column converters are applied before the data is processed, ensuring that the transformed values are used for comparisons and updates.

## Value-Generated Columns

Some database columns are automatically populated by the database, such as identity columns, computed columns, or columns with default values.  `DbMerge` can retrieve these values after inserting or updating records, ensuring that in-memory objects are updated with the generated values.

Value-generated columns apply to both POCOs and `ExpandoObject` and can be configured using the `ValueGeneratedColumns` property.

### Reading Back Auto-Generated Values

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
merge.ValueGeneratedColumns = new[] {
    new ValueGenerationColumn(ValueGenerationEvent.OnAddOrUpdate) {
        ValueGenerationPropertyName = "Id"
    }
};
```

In this example, the `Id` column is populated by the database during insertion, and `DbMerge` retrieves the assigned values after the operation. This ensures that identity, computed, or default values are available in memory after the merge process completes.


### Overwriting Identity Columns

By default, DbMerge does not insert values into identity (auto-increment) columns. However, if needed, identity insertion can be enabled for databases that support it.

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    AllowIdentityInsert = true
};
```

This setting ensures that values for identity columns are explicitly inserted rather than being automatically generated by the database.

### Ignoring Default Columns on Insert

By default, `DbMerge` includes all columns in insert operations. However, some columns may have database-defined default values that should not be explicitly inserted. The `IgnoreDefaultColumnsOnInsert` option prevents these columns from being included in insert statements, allowing the database to assign default values instead.

#### Example: Ignoring Default Columns

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    IgnoreDefaultColumnsOnInsert = true
};
```


## Performance Considerations

DbMerge is optimized for handling large data volumes efficiently. However, performance can be improved further through proper configuration of batch sizes, caching strategies, and database-specific optimizations.

### Batch Size

By default, DbMerge processes records in batches to improve database throughput. The default batch size is 1000 but can be adjusted for better performance.

#### Example: Adjusting Batch Size

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    BatchSize = 5000 // Increases batch size to 5000
};
```

Larger batch sizes reduce the number of database operations but require more memory. If the database struggles with large batches, lowering the batch size may improve stability.

### Cache Mode

DbMerge loads destination records into memory for comparison. By default, all records are cached, but for large tables, a **partial cache** mode can be used to limit memory usage.

#### Example: Using Partial Cache Mode

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    CacheMode = CacheMode.Partial
};
```

### Partial Cache with Transactions

When `CacheMode` is set to `Partial`, DbMerge reads individual records from the destination table on demand. This requires an active connection that is not blocked by ongoing write operations.

If you are using a transaction or have set `LeaveOpen = true`, the same connection is reused throughout the flow. In this case, DbMerge cannot use the main connection for both reading and writing, especially on databases that don't support multiple active readers. To avoid this limitation, you must provide a second connection via `ReadConnectionManager`.

This additional connection is only used for reading from the destination table and should not be enlisted in a transaction.

```C#
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
conn.BeginTransaction();

var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    CacheMode = CacheMode.Partial,
    ReadConnectionManager = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;")
};
```

{{< callout context="tip" icon="outline/rocket" >}}
For SQL Server, enabling **Multiple Active Result Sets (MARS)** may also allow using a single connection with partial caching, but this is not supported by all databases and may have limitations in transactional scenarios.
{{< /callout >}}

### Eviction Policies

When using partial cache mode, eviction policies determine how records are removed from memory:

- **Least Recently Used (LRU)**: Removes the least recently accessed records.
- **Least Frequently Used (LFU)**: Removes the least accessed records over time.
- **First In, First Out (FIFO)**: Removes the oldest records first.
- **Last In, First Out (LIFO)**: Removes the most recently added records first.

#### Example: Configuring Cache Eviction

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    CacheMode = CacheMode.Partial,
    EvictionPolicy = CacheEvictionPolicy.LeastRecentlyUsed
};
```

### Using Truncate Instead of Delete

For large datasets with frequent deletions, bulk delete operations can be slow. DbMerge provides an option to truncate the destination table instead before running the merge operation, ensuring a faster operation.

#### Example: Enabling Truncate Mode

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    UseTruncateMethod = true
};
```

{{< callout context="caution" icon="outline/alert-triangle" >}}
This method is only applicable in full merge mode and requires reloading all records into memory first before writing into the destination. Make sure that your source data and the data in your destination table will fit into memory before activating this.
{{< /callout >}}

### Index and Constraint Management

Indexes and constraints improve query performance but can slow down bulk operations. Consider temporarily disabling indexes before a large merge and rebuilding them afterward.

#### Example: Dropping and Rebuilding an Index

```csharp
SqlTask.ExecuteNonQuery(conn, "DROP INDEX IX_MyIndex ON DestinationTable");
// Run DbMerge operation
SqlTask.ExecuteNonQuery(conn, "CREATE INDEX IX_MyIndex ON DestinationTable(Key)");
```
