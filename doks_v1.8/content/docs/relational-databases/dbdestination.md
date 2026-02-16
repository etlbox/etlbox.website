---
title: "Database Destination"
description: "DbDestination is an optimized component for efficiently writing data into relational databases. It supports bulk inserts, updates, and deletes, allowing high-performance data loading while maintaining flexibility through column mapping, transformations, and error handling."
lead: "DbDestination is the most efficient way to load data into a database, using bulk inserts to maximize performance. It processes data in batches, significantly speeding up large data transfers. With support for batch inserts, bulk updates, and deletes, it ensures efficient database operations while offering flexibility through column mapping, transformations, and error handling."
draft: false
images: []
menu:
  docs:
    parent: "relational-databases"
weight: 150
toc: true
chatgpt-review: true
---

## Creating a DbDestination

A `DbDestination` instance is created by specifying a connection manager and a table name. It automatically maps object properties to table columns.

### Writing to a Table

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var dest = new DbDestination<MyRow>() {
  ConnectionManager = conn,
  TableName = "DestinationTable"
};
```

For this example, assume the database table has the following definition:

```sql
CREATE TABLE DestinationTable (
    Id INT NOT NULL,
    Value VARCHAR(50) NULL
);
```

And a matching POCO:

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}
```

### Using Dynamic Objects

Instead of strongly-typed objects, `DbDestination` also works with `ExpandoObject`. Column names must match dynamically assigned properties.

```csharp
var source = new MemorySource();
dynamic r = new ExpandoObject();
r.Id = 1;
r.Value = "Test";
source.DataAsList.Add(r);

var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var dest = new DbDestination() {
  ConnectionManager = conn,
  TableName = "DestinationTable"
};
Network.InitAndStartWith(source).LinkTo(dest).Execute();
```

### Example Data Flow

The following example loads data from memory into a database.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<MyRow>(new List<MyRow> {
    new MyRow { Id = 1, Value = "A" },
    new MyRow { Id = 2, Value = "B" }
});
var dest = new DbDestination<MyRow>(conn, "DestinationTable");

source.LinkTo(dest);
Network.Execute(source);
```

## Column Mapping

When the database column names differ from the object property names, column mapping is required.

### Column Mapping for POCOs

You can use the `DbColumnMap` attribute to define column mappings.

```csharp
public class MyRow {
    [DbColumnMap("Id")]
    public int Prop1 { get; set; }
    [DbColumnMap("Value")]
    public string Prop2 { get; set; }
}
var dest = new DbDestination<MyRow>(conn, "DestinationTable");
```

This ensures that property `Prop1` is mapped to the `Id` column and property `Prop2` mapped to the `Value` column in the `DestinationTable`.

You can also ignore columns using attributes in POCO classes by applying `DbColumnMap` with `IgnoreColumn = true`.

```csharp
[DbColumnMap(IgnoreColumn = true)]
public string TemporaryField { get; set; }
```

In this example, `TemporaryField` will be ignored when writing to the database.

### Manual Column Mapping

By default, ETLBox automatically matches properties to database columns based on their names. However, if column names differ or explicit control is needed, manual column mapping can be used. This option is available for both POCOs and `ExpandoObject`, allowing you to override or define mappings as needed.

#### Example: Mapping for POCOs

```csharp
public class MyRow {
    public int Prop1 { get; set; }
    public string Prop2 { get; set; }
}

var dest = new DbDestination<MyRow>(conn, "DestinationTable");
dest.ColumnMapping = new[] {
    new DbColumnMap { DbColumnName = "Id", PropertyName = "Prop2" },
    new DbColumnMap { DbColumnName = "Value", PropertyName = "Prop2" }
};
```

If `ColumnMapping` is set, it overrides any attribute-based mappings (`DbColumnMap` attributes on the class will be ignored).

Specific columns can be ignored by setting `IgnoreColumn = true`. This ensures that the corresponding property is excluded from the database operation.

```csharp
  new DbColumnMap { PropertyName = "TemporaryField", IgnoreColumn = true }
```

#### Example: Mapping for ExpandoObject

For dynamic objects, mappings must be explicitly provided.

```csharp
var source = new MemorySource();
dynamic r = new ExpandoObject();
r.Prop1 = 1;
r.Prop2 = "Test";
source.DataAsList.Add(r);
var dest = new DbDestination(conn, "DestinationTable");
dest.ColumnMapping = new[] {
    new DbColumnMap { DbColumnName = "Id", PropertyName = "Prop1" },
    new DbColumnMap { DbColumnName = "Value", PropertyName = "Prop2" }
};
```

## Column Converters

Column converters allow modifying data immediately before writing it to the database, ensuring transformations occur within the same task before inserting the data.

### Example: Formatting Dates

```csharp
var source = new MemorySource();
dynamic r = new ExpandoObject();
r.Id = 1;
r.Value = new DateTime(2022,12,12);
source.DataAsList.Add(r);
var dest = new DbDestination<MyRow>(conn, "DestinationTable");
dest.ColumnConverters = new[] {
    new ColumnConverter { ColumnName = "Value", ConversionFunc = val => ((DateTime)val).ToString("yyyyMMdd") }
};
```

In this example, the DateTime values in the `Value` column are converted into a specific date format before writing into the database table.

## Column Name Resolver

The column resolver modifies property names dynamically before mapping them to database columns. This is useful when dealing with databases that have different naming conventions, such as inconsistent casing or special characters.

Assume the following database table definition:

```sql
CREATE TABLE DestinationTable (
    "col_Id" INT NOT NULL,
    "col_Value" VARCHAR(100) NOT NULL
);
```

And a matching POCO:

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}
```

By default, `DbDestination` will try to match column names exactly. However, since the database uses different naming conventions, mapping will fail unless a `PropertyToColumnNamesResolver` is used.

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable");
dest.PropertyToColumnNamesResolver = propName => $"col_{propName}";
```

With this resolver, `Id` will map to `col_Id` and `Value` will map to `col_Value`.

## Configuring Inserts

### Batch Size

By default, `DbDestination` performs batch inserts for efficiency. The default batch size is 1000 rows. Adjusting this can optimize performance.

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    BatchSize = 500
};
```

{{< callout context="note" icon="outline/info-circle" >}}
For ODBC and OLEDB connections, the default batch size is 100 due to driver limitations.
{{< /callout >}}

### Inserting Identity Columns

Identity (auto-increment) columns are ignored by default. To allow inserting values into identity columns, enable `AllowIdentityInsert`.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var dest = new DbDestination<MyRow>() {
    ConnectionManager = conn,
    TableName = "DestinationTable",
    AllowIdentityInsert = true
};
```

Make sure the database allows identity inserts.

### Specifying Insert Columns

By default, `DbDestination` inserts all columns except identity columns. However, you can explicitly specify which columns should be inserted using the `InsertColumns` property. This is useful when you want to exclude certain columns.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var dest = new DbDestination<MyRow>() {
    ConnectionManager = conn,
    TableName = "DestinationTable",
    InsertColumns = new[] {
        new InsertColumn() { InsertPropertyName = "Id" },
        new InsertColumn() { InsertPropertyName = "Value" }
    }
};
```

In this example, only the `Value`, and `CreatedDate` columns will be included in the insert statements, even if the source object contains additional properties.

{{< callout context="note" icon="outline/info-circle" >}}
Alternatively, you can also exlucde columns from insert operations when using the `DbColumnMap` with `IgnoreColumn = true`.
{{< /callout >}}

### BeforeBatchWrite and AfterBatchWrite

`DbDestination` provides two hooks, `BeforeBatchWrite` and `AfterBatchWrite`, which allow executing custom logic before and after each batch insert operation. These hooks can be useful for logging, data transformations, or triggering external processes.

#### BeforeBatchWrite

The `BeforeBatchWrite` action is triggered before a batch of records is inserted into the database.

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    BeforeBatchWrite = batch => Console.WriteLine($"Inserting batch with {batch.Count} records.")
};
```

In `BeforeBatchWrite`, the data can be modified before it is written to the database, allowing for last-minute transformations or adjustments within the batch.

#### AfterBatchWrite

The `AfterBatchWrite` action is called after a batch has been successfully written to the database.

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    AfterBatchWrite = batch => Console.WriteLine($"Successfully inserted batch with {batch.Count} records.")
};
```

These hooks operate at the batch level, meaning they are executed once per batch, not for individual records.


## Auto Mapping and Table Definition

`DbDestination` automatically maps object properties to matching database table columns by retrieving metadata from the database. Most of the time, the schema can be determined through ADO.NET, and no further configuration is necessary. However, in rare cases where metadata cannot be retrieved, a `TableDefinition` can be provided to manually specify the structure of the table.

### Providing a Table Definition

A `TableDefinition` ensures that `DbDestination` correctly recognizes column names and data types when metadata cannot be retrieved automatically. While only column names and data types are usually required, providing additional details such as primary keys and constraints improves performance and prevents errors.

```csharp
var tableDef = new TableDefinition("DestinationTable", new List<TableColumn> {
    new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
    new TableColumn("Value", "VARCHAR(100)", allowNulls: true)
});

var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    TableDefinition = tableDef
};
```

#### Metadata Retrieval Priority

ETLBox determines table metadata in the following order:

1. **Explicit TableDefinition**: If a `TableDefinition` is provided, it takes priority over all other metadata sources.
2. **SQL-Based Metadata Retrieval**: If no `TableDefinition` is given, ETLBox queries the database system tables to gather schema details.
3. **ADO.NET Schema Retrieval**: If SQL-based retrieval fails, ETLBox attempts to read metadata from the underlying ADO.NET connection.


## Bulk Update and Bulk Delete

Bulk operations allow modifying or removing existing records efficiently by specifying key columns for matching. Unlike standard insert operations, these methods work directly on existing records without requiring a separate query.

### Bulk Update Example

Assume the following initial state of the database table:

```sql
CREATE TABLE DestinationTable (
    Id INT NOT NULL PRIMARY KEY,
    Value VARCHAR(50) NULL
);

INSERT INTO DestinationTable (Id, Value) VALUES
(1, 'OldValue1'),
(2, 'OldValue2'),
(3, 'OldValue3');
```

The goal is to update the `Value` column where `Id` matches incoming records.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<MyRow>(new List<MyRow> {
    new MyRow { Id = 1, Value = "NewValue1" },
    new MyRow { Id = 3, Value = "NewValue3" }
});

var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    BulkOperation = BulkOperation.Update,
    IdColumns = new[] { new IdColumn() { IdPropertyName = "Id" } },
    UpdateColumns = new[] { new UpdateColumn() { UpdatePropertyName = "Value" } }
};

source.LinkTo(dest);
Network.Execute(source);
```

**Result after execution:**

```sql
SELECT * FROM DestinationTable;

Id | Value
---+-----------
1  | NewValue1
2  | OldValue2
3  | NewValue3
```

Rows with `Id = 1` and `Id = 3` are updated, while `Id = 2` remains unchanged.

### Bulk Delete Example

BulkDelete removes records matching the provided `IdColumns`.

**Initial state:**

```sql
CREATE TABLE DestinationTable (
    Id INT NOT NULL PRIMARY KEY,
    Value VARCHAR(50) NULL
);

INSERT INTO DestinationTable (Id, Value) VALUES
(1, 'Value1'),
(2, 'Value2'),
(3, 'Value3');
```

To delete records with `Id = 1` and `Id = 3`:

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<MyRow>(new List<MyRow> {
    new MyRow { Id = 1 },
    new MyRow { Id = 3 }
});

var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    BulkOperation = BulkOperation.Delete,
    IdColumns = new[] { new IdColumn() { IdPropertyName = "Id" } }
};

source.LinkTo(dest);
Network.Execute(source);
```

**Result after execution:**

```sql
SELECT * FROM DestinationTable;

Id | Value
---+-----------
2  | Value2
```

Records with `Id = 1` and `Id = 3` are removed, while `Id = 2` remains in the table.

## Error Handling

If an error occurs while writing data, `DbDestination` automatically redirects faulty records to an error flow when `LinkErrorTo` is used. In this case, errors are only redirected and do not halt execution.

When performing a bulk operation, databases enforce an "all-or-nothing" rule, meaning that if any record in the batch fails, the entire batch is rejected. As a result, `DbDestination` redirects the whole batch as a single flawed record. The `RecordAsJson` property will contain an array of records instead of a single row.

The batch size influences how many records are redirected in case of failure. If `BatchSize = 1000`, an error in any row will cause all 1000 rows to be sent to the error destination.

#### Example: Capturing Errors

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable");
var errorDest = new MemoryDestination<ETLBoxError>();

dest.LinkErrorTo(errorDest);
Network.Execute(dest);

foreach (var error in errorDest.Data) {
    Console.WriteLine($"Error: {error.ErrorText}");
    Console.WriteLine($"Faulty Records: {error.RecordAsJson}");
}
```

### Avoiding Insert Failures

To detect and prevent errors before insertion, use `DbTypeCheck` to validate data types and constraints before attempting to write into the database.

[Learn more about DbTypeCheck and how to validate records before insertion.](../db-type-check)

## Value-Generated Columns

Some database columns are automatically populated by the database, such as identity columns, computed columns, or columns with default values. `DbDestination` can retrieve these values after inserting or updating records, ensuring that in-memory objects are updated with the generated values.

### Reading Value-Generated Columns

Assume the following table structure:

```sql
CREATE TABLE DestinationTable (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Value VARCHAR(100) NULL,
    CreatedDate DATETIME DEFAULT GETDATE()
);
```

And a corresponding POCO:

```C#
public class MyRow {
    public int? Id { get; set; } // Nullable to allow reading back generated value
    public string Value { get; set; }
    public DateTime? CreatedAt { get; set; } // Nullable for default value handling
}
```

The `Id` column is an identity column that increments automatically, and `CreatedDate` is populated with the current timestamp when a record is inserted.

To correctly retrieve these values after insertion, configure `DbDestination` as follows:

```csharp
var conn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
var source = new MemorySource<MyRow>();

var row1 = new MyRow { Id = 0, Value = "Test1", CreatedDate = null };
var row2 = new MyRow { Id = 0, Value = "Test2", CreatedDate = null };

source.DataAsList.Add(row1);
source.DataAsList.Add(row2);

var dest = new DbDestination<MyRow>(conn, "DestinationTable");
dest.ValueGeneratedColumns = new List<ValueGenerationColumn>() {
    new ValueGenerationColumn(ValueGenerationEvent.OnAddOrUpdate) { ValueGenerationPropertyName = "Id" },
    new ValueGenerationColumn(ValueGenerationEvent.OnAddOrUpdate) { ValueGenerationPropertyName = "CreatedDate" }
};

source.LinkTo(dest);
Network.Execute(source);

// Now row1 and row2 contain the generated values
Console.WriteLine($"Row1: Id={row1.Id}, Value={row1.Value}, CreatedDate={row1.CreatedDate}");
Console.WriteLine($"Row2: Id={row2.Id}, Value={row2.Value}, CreatedDate={row2.CreatedDate}");
```

In this example, `Id` is auto-generated (identity), and after insertion, `DbDestination` retrieves the assigned values.
`CreatedDate` is set by the database when a row is inserted, and its value is also retrieved after the operation.

#### Expected Output

After execution, `row1` and `row2` will contain the database-generated values:

```
Row1: Id=1, Value=Test1, CreatedDate=2024-02-25 12:34:56
Row2: Id=2, Value=Test2, CreatedDate=2024-02-25 12:34:56
```

### Ignoring Default Columns on Insert

By default, `DbDestination` includes all columns in insert operations. However, some columns may have database-defined default values that should not be explicitly inserted. The `IgnoreDefaultColumnsOnInsert` option prevents these columns from being included in insert statements, allowing the database to assign default values instead.

#### Example: Ignoring Default Columns

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    IgnoreDefaultColumnsOnInsert = true
};
```

With this setting enabled, columns with default values in the database schema are omitted from insert statements, ensuring that the database-generated values are used.
