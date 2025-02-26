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


# 2. Understanding Syncing Approaches

DbMerge synchronizes a destination table with a source, depending on whether the source provides full or delta data.

## Full vs. Delta Merge

### Full Merge
The source provides the entire dataset. Any records missing from the source are considered deleted. The destination table is fully synchronized to match the source. This approach is useful when the source does not track changes.

### Delta Merge
The source provides only new, updated, or deleted records. This is typically based on change tracking mechanisms such as timestamps or Change Data Capture (CDC). Delta merging reduces the amount of processed data but requires explicit handling of deletions.

### Merge Modes in DbMerge

DbMerge supports different merge modes to control how changes are applied:

- **Full**: Inserts, updates, and deletes missing records.
- **Delta**: Inserts and updates; deletions require a delete flag.
- **InsertsAndUpdatesOnly**: Processes only inserts and updates, no deletions.
- **UpdatesOnly**: Updates existing records without inserting new ones or deleting records.

## Example: Delta Merge with Delete Flag

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

### Destination Table Before Merge

| Key | Value         |
|-----|-------------|
| 1   | Old Value   |
| 2   | XXX        |
| 3   | Test - Exists |
| 4   | Test - Deleted |

### Output After Execution

| Key | Value          | ChangeAction |
|-----|--------------|--------------|
| 1   | Updated Value  | Update      |
| 2   | XXX           | Exists      |
| 3   | Test - Exists | Exists      |
| 4   | - (Deleted)  | Delete      |

- If `Key = 1` exists, its `Value` is updated.
- If `Key = 4` exists, it is deleted because `DeleteFlag = "DELETE"`.
- Other records remain unchanged.

## Choosing the Right Approach
- Use **full merge** if the source does not track changes or deletions must be inferred.
- Use **delta merge** if the source provides change tracking and you want to optimize performance.

This ensures that only relevant changes are applied, reducing unnecessary database operations and improving efficiency.


# 3. DbMerge Component & Configuration

DbMerge is a destination component that applies inserts, updates, and optional deletions based on incoming data. It requires a destination table and can be configured using various properties.

## Basic Usage

A DbMerge instance is created by specifying a connection and a destination table.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
```

To merge data, a source component provides the input records:

```csharp
var source = new MemorySource<MyMergeRow>(new List<MyMergeRow> {
    new MyMergeRow { Key = 1, Value = "Insert this" },
    new MyMergeRow { Key = 2, Value = "Update this" }
});

source.LinkTo(merge);
Network.Execute(source);
```

This reads the source data, compares it with the destination table, and applies the necessary changes.

## Required and Optional Properties

### Required Properties

- **ConnectionManager**: Defines the database connection.
- **TableName**: Specifies the target table.
- **MergeMode**: Determines how changes are applied.
- **IdColumns**: Specifies the primary key(s) used for matching records.

### Optional Properties

- **CompareColumns**: Defines which columns determine if a record has changed.
- **UpdateColumns**: Specifies which columns should be updated.
- **DeleteColumns**: Identifies records to be deleted in delta mode.
- **BatchSize**: Defines the number of records processed per batch.
- **CacheMode**: Controls how destination data is loaded into memory.

## Example: Configuring IdColumns and CompareColumns

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    IdColumns = { new IdColumn("Key") },
    CompareColumns = { new CompareColumn("Value") }
};
```

This ensures that `Key` is used to match records, and `Value` is checked for updates.

## Example: Using UpdateColumns

By default, all non-ID columns are updated. To restrict updates to specific fields, define `UpdateColumns`:

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    UpdateColumns = { new UpdateColumn("Value") }
};
```

This updates only the `Value` column, even if other fields have changed.

DbMerge provides flexibility in configuring how records are merged, ensuring efficient and controlled data updates.


# 4. Working with Data Structures

DbMerge can process both strongly typed objects (POCOs) and dynamic objects (`ExpandoObject`). The way data is handled depends on the chosen approach.

## Using POCOs with DbMerge

A POCO (Plain Old CLR Object) defines a structured data model. DbMerge relies on attributes to determine how records are merged.

### Example: Defining a POCO for Merging

```csharp
public class MyMergeRow : MergeableRow {
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }
}
```

### How Attributes Work

- **IdColumn**: Identifies unique records in the destination.
- **CompareColumn**: Determines if a record has changed.
- **UpdateColumn**: Specifies which columns should be updated.

If no `CompareColumn` is set, all non-ID columns are compared. If no `UpdateColumn` is set, all non-ID columns are updated.

### Example: Merging Data Using a POCO

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<MyMergeRow>(new List<MyMergeRow> {
    new MyMergeRow { Key = 1, Value = "Updated Value" },
    new MyMergeRow { Key = 2, Value = "New Entry" }
});
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};

source.LinkTo(merge);
Network.Execute(source);
```

## Using Dynamic Objects (`ExpandoObject`)

Instead of strongly typed objects, DbMerge also supports `ExpandoObject`, which allows defining data dynamically at runtime.

### Example: Merging Data Using Dynamic Objects

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<ExpandoObject>();

dynamic row1 = new ExpandoObject();
row1.Key = 1;
row1.Value = "Updated Value";

dynamic row2 = new ExpandoObject();
row2.Key = 2;
row2.Value = "New Entry";

source.DataAsList.Add(row1);
source.DataAsList.Add(row2);

var merge = new DbMerge(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};
merge.IdColumns.Add(new IdColumn() { IdPropertyName = "Key" });
merge.CompareColumns.Add(new CompareColumn() { ComparePropertyName = "Value" });

source.LinkTo(merge);
Network.Execute(source);
```

When using `ExpandoObject`, attributes cannot be applied. Instead, properties are defined dynamically, and `IdColumns`, `CompareColumns`, and `UpdateColumns` must be set manually.

DbMerge supports both structured POCOs and flexible dynamic objects, allowing users to choose the best approach for their data integration needs.

# 5. Handling Special Cases

DbMerge provides additional configurations for managing deletions, identity columns, composite keys, and column mapping. These options allow greater control over how data is merged.

## Deleting Records with Delete Columns

In **full merge mode**, records missing from the source are automatically deleted. In **delta merge mode**, deletions require an explicit delete flag in the source data.

### Example: Using a Delete Column

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

```csharp
var source = new MemorySource<MyMergeRow>(new List<MyMergeRow> {
    new MyMergeRow { Key = 4, Value = "Obsolete", DeleteFlag = "DELETE" }
});
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Delta
};

source.LinkTo(merge);
Network.Execute(source);
```

If `DeleteFlag = "DELETE"`, the matching record in the destination is removed.

## Working with Identity Columns

By default, DbMerge does not insert values into identity (auto-increment) columns. However, some databases allow overriding this behavior.

### Example: Enabling Identity Inserts

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    AllowIdentityInsert = true
};
```

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

If column names differ between the source and destination, mappings can be applied. DbMerge supports both **attribute-based mapping** (for POCOs) and **manual mapping** (for POCOs and ExpandoObjects).

### Attribute-Based Mapping for POCOs

Use `[DbColumnMap]` to specify column names when using POCOs.

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

### Manual Column Mapping

For both POCOs and `ExpandoObject`, column mappings can be manually defined using `ColumnMapping`.

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};

merge.ColumnMapping.Add(new DbColumnMap { DbColumnName = "DB_Key", PropertyName = "Key" });
merge.ColumnMapping.Add(new DbColumnMap { DbColumnName = "DB_Value", PropertyName = "Value" });
```

When using `ExpandoObject`, mappings must be set manually:

```csharp
var merge = new DbMerge(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};

merge.IdColumns.Add(new IdColumn { IdPropertyName = "Key" });
merge.CompareColumns.Add(new CompareColumn { ComparePropertyName = "Value" });

merge.ColumnMapping.Add(new DbColumnMap { DbColumnName = "DB_Key", PropertyName = "Key" });
merge.ColumnMapping.Add(new DbColumnMap { DbColumnName = "DB_Value", PropertyName = "Value" });
```

Manual column mapping provides more flexibility, allowing POCOs and dynamic objects to be mapped to destination tables with different naming conventions.


# 6. Performance Considerations

DbMerge is optimized for handling large data volumes efficiently. However, performance can be improved further through proper configuration of batch sizes, caching strategies, and database-specific optimizations.

## Batch Size

By default, DbMerge processes records in batches to improve database throughput. The default batch size is **1000** but can be adjusted for better performance.

### Example: Adjusting Batch Size

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    BatchSize = 5000 // Increases batch size to 5000
};
```

Larger batch sizes reduce the number of database operations but require more memory. If the database struggles with large batches, lowering the batch size may improve stability.

## Cache Mode

DbMerge loads destination records into memory for comparison. By default, all records are cached, but for large tables, a **partial cache** mode can be used to limit memory usage.

### Example: Using Partial Cache Mode

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    CacheMode = CacheMode.Partial
};
```

### Eviction Policies

When using **partial cache mode**, eviction policies determine how records are removed from memory:

- **Least Recently Used (LRU)**: Removes the least recently accessed records.
- **Least Frequently Used (LFU)**: Removes the least accessed records over time.
- **First In, First Out (FIFO)**: Removes the oldest records first.
- **Last In, First Out (LIFO)**: Removes the most recently added records first.

### Example: Configuring Cache Eviction

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    CacheMode = CacheMode.Partial,
    EvictionPolicy = CacheEvictionPolicy.LeastRecentlyUsed
};
```

## Using Truncate Instead of Delete

For large datasets with frequent deletions, bulk delete operations can be slow. DbMerge provides an option to **truncate** the destination table instead, ensuring a faster operation.

### Example: Enabling Truncate Mode

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    UseTruncateMethod = true
};
```

**Note:** This method is only applicable in **full merge mode** and requires reloading all records into the destination.

## Index and Constraint Management

Indexes and constraints improve query performance but can slow down bulk operations. Consider temporarily **disabling indexes** before a large merge and **rebuilding them afterward**.

### Example: Dropping and Rebuilding an Index

```csharp
SqlTask.ExecuteNonQuery(conn, "DROP INDEX IX_MyIndex ON DestinationTable");
// Run DbMerge operation
SqlTask.ExecuteNonQuery(conn, "CREATE INDEX IX_MyIndex ON DestinationTable(Key)");
```

## Parallel Processing

For very large datasets, running multiple **DbMerge** instances in parallel can improve performance by distributing the workload.

### Example: Merging Data in Parallel

```csharp
Parallel.ForEach(new[] { "Partition1", "Partition2" }, partition => {
    var source = new DbSource<MyMergeRow>(conn, partition);
    var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
        MergeMode = MergeMode.Full
    };

    source.LinkTo(merge);
    Network.Execute(source);
});
```

Partitioning data across multiple merge operations reduces contention and speeds up processing.

DbMerge is designed for high-performance data integration, and optimizing batch sizes, caching strategies, and database configurations ensures efficient execution even with large datasets.

# 7. Tracking Changes with the Delta Table

DbMerge can provide detailed tracking of applied changes using the **Delta Table** feature. This allows monitoring which records were inserted, updated, deleted, or remained unchanged.

## Enabling the Delta Table

When linked to another destination, DbMerge outputs change tracking information that can be stored in a **Delta Table**.

### Example: Writing Changes to a Delta Table

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

## Structure of the Delta Table

A Delta Table typically includes:

- **IdColumns** (Primary Key) – Identifies affected records.
- **ChangeAction** – Specifies the operation (`Insert`, `Update`, `Delete`, `Exists`).
- **ChangeDate** – Records when the change occurred.

### Example: Delta Table Output

| Key | ChangeAction | ChangeDate          |
|-----|-------------|---------------------|
| 1   | Insert      | 2024-02-26 10:00:01 |
| 2   | Update      | 2024-02-26 10:00:02 |
| 3   | Exists      | 2024-02-26 10:00:03 |
| 4   | Delete      | 2024-02-26 10:00:04 |

## Using Delta Data for Further Processing

The Delta Table can be linked to transformations, logs, or notifications.

### Example: Logging Changes

```csharp
var logFile = new CsvDestination<MyMergeRow>("delta_log.csv");

merge.LinkTo(logFile); // Writes changes to a CSV file
Network.Execute(source);
```

By leveraging the **Delta Table**, DbMerge allows tracking modifications efficiently, supporting auditing, monitoring, and downstream processing.


# 8. Error Handling

DbMerge follows **batch-based error handling**, meaning that if an error occurs within a batch, the **entire batch is considered flawed** and redirected to an error destination. This prevents partial data corruption but may cause valid records to be temporarily rejected due to issues with other records in the batch.

To prevent batch failures, **DbTypeCheck** can be used to detect data issues before merging.

## Redirecting Errors to an Error Destination

When a batch fails, DbMerge forwards the affected records to an **error destination** for further analysis.

### Example: Capturing Errors in a Memory Destination

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

### Understanding Batch Errors

Since database operations are executed in batches, an error in a single record can cause the **entire batch** to be redirected.

**Example scenario:**
- A batch of **1000 records** is processed.
- One record has an invalid value (e.g., `NULL` in a non-nullable column).
- The entire **1000-record batch** fails and is redirected to the error flow.

## Using DbTypeCheck to Prevent Batch Failures

To prevent batch-wide failures, use **DbTypeCheck** before merging. This validates records against the database schema, ensuring that only valid records proceed to DbMerge.

### Example: Pre-Validating Data with DbTypeCheck

```csharp
var typeCheck = new DbTypeCheck<MyMergeRow>(conn, "DestinationTable");
var typeErrorDest = new MemoryDestination<MyMergeRow>();

source.LinkTo(typeCheck);
typeCheck.LinkFlawedTo(typeErrorDest);
typeCheck.LinkTo(merge);

Network.Execute(source);
```

### How It Works
- **Valid records** continue to DbMerge and are processed normally.
- **Invalid records** (e.g., wrong data types, constraint violations) are redirected to `typeErrorDest`, preventing batch failures.

## Example: Error Output

When using **DbMerge without DbTypeCheck**, the entire batch fails:

```json
{
    "ErrorText": "Cannot insert NULL into column 'Value'.",
    "RecordAsJson": "[{\"Key\": 1, \"Value\": null}, {\"Key\": 2, \"Value\": \"Valid\"}...]"
}
```

When using **DbTypeCheck**, only flawed records are isolated:

```json
{
    "ErrorText": "Cannot insert NULL into column 'Value'.",
    "RecordAsJson": "{\"Key\": 1, \"Value\": null}"
}
```

By combining **DbMerge** with **DbTypeCheck**, data integrity is preserved while avoiding unnecessary batch failures.


# 9. Advanced Configurations

DbMerge offers additional configuration options to enhance flexibility and optimize performance. These settings allow customization of caching behavior, duplicate detection, and identity column handling.

## Using Cache Mode

DbMerge loads destination records into memory for efficient lookups. By default, it **caches all records**, but for large tables, **partial caching** can be enabled to limit memory usage.

### Example: Using Partial Cache Mode

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    CacheMode = CacheMode.Partial
};
```

### Eviction Policies

When using **partial cache mode**, eviction policies determine how records are removed from memory:

- **Least Recently Used (LRU)** – Removes the least accessed records first.
- **Least Frequently Used (LFU)** – Removes records used the least over time.
- **First In, First Out (FIFO)** – Removes the oldest cached records first.
- **Last In, First Out (LIFO)** – Removes the most recently added records first.

### Example: Configuring Cache Eviction

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    CacheMode = CacheMode.Partial,
    EvictionPolicy = CacheEvictionPolicy.LeastRecentlyUsed
};
```

## Avoiding Duplicates

By default, DbMerge does not check for duplicate records in the source data. If the same `IdColumn` appears multiple times within a batch, the database may reject the operation due to primary key violations.

To prevent this, enable **duplicate detection**, which ensures that only the first occurrence of each `IdColumn` is processed.

### Example: Filtering Duplicate Records

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    FilterDuplicates = true
};
```

With this setting enabled, **only the first occurrence of a duplicate record is processed**, while subsequent duplicates are ignored.

## Handling Identity Columns

By default, DbMerge does not insert values into identity (auto-increment) columns. However, if needed, identity insertion can be enabled for databases that support it.

### Example: Enabling Identity Inserts

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    AllowIdentityInsert = true
};
```

This setting ensures that values for identity columns are explicitly inserted rather than being automatically generated by the database.

## Using Truncate Instead of Delete

For large datasets with frequent deletions, bulk delete operations can be slow. DbMerge provides an option to **truncate** the destination table instead, ensuring a faster operation.

### Example: Enabling Truncate Mode

```csharp
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full,
    UseTruncateMethod = true
};
```

**Note:** This method is only applicable in **full merge mode** and requires reloading all records into the destination.

By leveraging **advanced configurations**, DbMerge can be fine-tuned to handle large datasets efficiently while ensuring data consistency.

# 10. Example Data Flows

DbMerge is often part of a larger ETL (Extract, Transform, Load) pipeline. The following examples show different ways to integrate DbMerge into data flows, including combining it with transformations and error handling.

## Basic Data Flow: Merging Data from a Source Table

This example reads data from a source table and merges it into a destination table using **full merge mode**.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new DbSource<MyMergeRow>(conn, "SourceTable");
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Full
};

source.LinkTo(merge);
Network.Execute(source);
```

## Adding Error Handling

To prevent batch failures, **DbTypeCheck** is used before merging. Faulty records are redirected to an error destination, while valid records continue to DbMerge.

```csharp
var typeCheck = new DbTypeCheck<MyMergeRow>(conn, "DestinationTable");
var typeErrorDest = new MemoryDestination<MyMergeRow>();

source.LinkTo(typeCheck);
typeCheck.LinkFlawedTo(typeErrorDest);
typeCheck.LinkTo(merge);

Network.Execute(source);
```

## Using a Delta Table for Change Tracking

To log inserts, updates, and deletions, the **Delta Table** feature is used.

```csharp
var deltaLog = new DbDestination<MyMergeRow>(conn, "DeltaTable");

source.LinkTo(merge);
merge.LinkTo(deltaLog);

Network.Execute(source);
```

### Example: Delta Table Output

| Key | ChangeAction | ChangeDate          |
|-----|-------------|---------------------|
| 1   | Insert      | 2024-02-26 10:00:01 |
| 2   | Update      | 2024-02-26 10:00:02 |
| 3   | Exists      | 2024-02-26 10:00:03 |
| 4   | Delete      | 2024-02-26 10:00:04 |

## Merging Data from a CSV File

DbMerge can merge data from any source, such as a CSV file, into a database table.

```csharp
var source = new CsvSource<MyMergeRow>("data.csv");
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    MergeMode = MergeMode.Delta
};

source.LinkTo(merge);
Network.Execute(source);
```

## Using DbMerge with Transformations

Before merging, transformations can be applied to clean or modify data.

```csharp
var transform = new RowTransformation<MyMergeRow, MyMergeRow>(row => {
    row.Value = row.Value.Trim().ToUpper();
    return row;
});

source.LinkTo(transform);
transform.LinkTo(merge);
Network.Execute(source);
```
