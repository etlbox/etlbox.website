---
title: "Database Source"
description: "DbSource provides flexible database access, automatically retrieving metadata and supporting parameterized queries. It allows column mapping, transformations through column converters, and dynamic object usage."
lead: "The DbSource component reads data from a relational database and streams it into an ETL process. It supports reading from tables, executing SQL queries, and calling stored procedures while efficiently handling large datasets."
draft: false
images: []
menu:
  docs:
    parent: "relational-databases"
weight: 140
toc: true
chatgpt-review: true
---

## Creating a DbSource

A `DbSource` requires a connection manager and either a table name or an SQL query.

### Reading from a Table

```csharp
var conn = new SqlConnectionManager("Data Source=.;Initial Catalog=ETL;Integrated Security=SSPI;");
var source = new DbSource<MyRow>() {
  ConnectionManager = conn,
  TableName = "SourceTable"
};
```

For this example, assume the database table has the following definition:

```sql
CREATE TABLE SourceTable (
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

### Using SQL Queries

Instead of specifying a table, `DbSource` can execute a SQL query to retrieve data.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Initial Catalog=ETL;Integrated Security=SSPI;");
var source = new DbSource<MyRow>() {
    ConnectionManager = conn,
    Sql = @"SELECT s.Id, j.JoinedValue as Value
            FROM SourceTable s
            INNER JOIN JoinTable j
            ON s.Id = j.Id"
};
```

#### Query Parameters

Parameterized queries help avoid SQL injection and improve query performance.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Initial Catalog=ETL;Integrated Security=SSPI;");
var source = new DbSource<MyRow>(conn) {
    ConnectionManager = conn,
    Sql = @"SELECT s.Id, j.JoinedValue as Value
            FROM SourceTable s
            INNER JOIN JoinTable j
            ON s.Id = j.Id
            WHERE s.Id > @minId",
    SqlParameter = new[] {
        new QueryParameter("minId", "INT", 10)
    }
};
```

{{< callout context="note" icon="outline/info-circle" >}}
Using `SELECT *` in an SQL query may lead to issues, as column names cannot always be determined automatically. While it might work in some cases, it is recommended to explicitly specify column names (e.g. `SELECT s.Id, j.JoinedValue as Value `) to ensure proper mapping and metadata detection.
{{< /callout >}}

### Using Stored Procedures

`DbSource` supports executing stored procedures.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Initial Catalog=ETL;Integrated Security=SSPI;");
var source = new DbSource<MyRow>() {
    ConnectionManager = conn,
    Sql = "EXEC MyStoredProcedure @param1, @param2",
    TableDefinition = TableDefinition.FromProcedureName(conn, "MyStoredProcedure"),
    SqlParameter = new[] {
        new QueryParameter("param1", "INT", 5),
        new QueryParameter("param2", "VARCHAR(50)", "Test")
    }
};
```

{{< callout context="note" icon="outline/info-circle" >}}
Depending on the database, a `TableDefinition` must be provided when using a stored procedure. This ensures that metadata such as column names and data types are correctly identified.
{{< /callout >}}

### Working with Dynamic Objects

When no strongly-typed object is specified, `DbSource` returns dynamic `ExpandoObject` instances.

```csharp
var source = new DbSource(conn, "SourceTable");
```

which is a short version for

```csharp
var source = new DbSource<ExpandoObject>(conn, "SourceTable");
```

### Streaming and Flow Control

`DbSource` reads data as a stream, processing rows one by one. As long as the connected components can handle incoming data, it continues reading from the database without loading all records into memory. If downstream components slow down, `DbSource` will also reduce its reading speed, ensuring controlled data flow. It never reads more rows than the `MaxBufferSize` of its output buffer, optimizing memory usage and preventing excessive resource consumption.

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  subgraph SourceBuffer["Source & Buffer"]
    source["DbSource (Reads Row-by-Row)"] -- "loads data into" --> buffer("Output Buffer (MaxBufferSize Rows)")
  end
  buffer --> dest["Destination (Slow Processing)"]
  dest -- "Backpressure / slows down reading" --> buffer
  style buffer stroke-dasharray: 5,5
```

## Automatic Metadata Retrieval

When using a table name, `DbSource` automatically retrieves metadata, including column names, data types, primary keys, and identity columns. If using an SQL query, column names are extracted when possible. If metadata cannot be determined, a `TableDefinition` can be provided manually.

```csharp
var source = new DbSource<MyRow>(conn, "SourceTable") {
    TableDefinition = new TableDefinition("SourceTable", new List<TableColumn> {
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value", "VARCHAR(50)", allowNulls: true)
    })
};
```

{{< callout context="tip" icon="outline/rocket" >}}
In most cases, only column names are required in the `TableDefinition`. However, providing full metadata, including data types and constraints, ensures better compatibility and functionality.
{{< /callout >}}

### How Metadata is Retrieved

- When a table name is provided, `DbSource` queries the database system tables to fetch metadata, ensuring column names, types, identity properties, and constraints are accurately detected.
- When an SQL query is used, `DbSource` attempts to parse column names from the query. Explicitly defined column names (`SELECT Id, Value FROM SourceTable`) can be extracted, whereas wildcard selections (`SELECT * FROM SourceTable`) and stored procedures do not provide sufficient metadata.

#### Fallback Mechanisms

If metadata cannot be fully determined, `DbSource` follows these fallback steps:

1. If a `TableDefinition` is explicitly set, it takes precedence over any automatic detection.
2. If a `TableName` is provided, but column names cannot be inferred from the query, `DbSource` retrieves metadata directly from the table.
3. If neither a `TableDefinition` nor a table name is available, `DbSource` checks whether the underlying ADO.NET connector can provide column names.



## Column Mapping

When the database column names differ from the object property names, column mapping is required.

### Column Mapping for POCOs

Use the `DbColumnMap` attribute to define column mappings.

```csharp
public class MyRow {
    [DbColumnMap("DB_Id")]
    public int Id { get; set; }

    [DbColumnMap("DB_Value")]
    public string Value { get; set; }
}
var source = new DbSource<MyRow>(conn, "SourceTable");
```

This ensures that values from the `DB_Id` column in the database are mapped to the `Id` property in the object.

You could also ignore columns using attributes in POCO classes by applying `DbColumnMap` with `IgnoreColumn = true`.

```csharp
[DbColumnMap(IgnoreColumn = true)]
public string Value { get; set; }
```

In this case, `Value` would be ignored when reading from the database.

### Manual Column Mapping

By default, ETLBox automatically matches properties to database columns based on their names. However, if column names differ or explicit control is needed, manual column mapping can be used.  This option is available for both POCOs and `ExpandoObject`, allowing you to override or define mappings as needed.

#### Example: Mapping for POCOs

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}

var source = new DbSource<MyRow>(conn, "SourceTable");
source.ColumnMapping = new[] {
    new DbColumnMap { DbColumnName = "DB_Id", PropertyName = "Id" },
    new DbColumnMap { DbColumnName = "DB_Value", PropertyName = "Value" }
};
```

If `ColumnMapping` is set, it overrides any attribute-based mappings (`DbColumnMap` attributes on the class will be ignored).

Specific columns can be ignored by setting `IgnoreColumn = true`.

```csharp
new DbColumnMap { PropertyName="Value", IgnoreColumn = true }
```

#### Example: Mapping for ExpandoObject

For dynamic objects, mappings must be explicitly provided.

```csharp
var source = new DbSource(conn, "SourceTable");
source.ColumnMapping = new[] {
    new DbColumnMap { DbColumnName = "DB_Id", PropertyName = "Id" },
    new DbColumnMap { DbColumnName = "DB_Value", PropertyName = "Value" }
};
```

## Column Converters

Column converters allow modifying data immediately after reading from the database, ensuring transformations occur within the same task before passing data to downstream components.

#### Example: Removing Characters from a String

```csharp
var source = new DbSource<MyRow>(conn, "SourceTable");
source.ColumnConverters = new[] {
    new ColumnConverter { ColumnName = "Value", ConversionFunc = val => ((string)val).Replace(",", "") }
};
```

In this example, any commas in the `Value` column are removed before the data leaves `DbSource`. This ensures that all modifications are applied immediately, preventing inconsistencies when multiple components process the data concurrently.

## Column Name Resolver

The column resolver modifies column names dynamically before mapping them to object properties. This is useful when dealing with databases that have different naming conventions, such as inconsistent casing or special characters.

Assume the following database table definition:

```sql
CREATE TABLE SourceTable (
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

By default, `DbSource` will try to match column names exactly. However, since the database uses different naming conventions, mapping will fail unless a `ColumnToPropertyNamesResolver` is used.

```csharp
var source = new DbSource<MyRow>(conn, "SourceTable");
source.ColumnToPropertyNamesResolver = columnName => columnName.Replace("col_", "");
```

With this resolver, `col_Id` will map to `Id` and `col_Value` will map to `Value`. This approach avoids the need for manual column mappings when dealing with databases that use prefixes, different casing, or other variations in column naming.

## Bulk Selection

Bulk selection is useful when you need to retrieve specific records from a table based on a set of key values. Unlike using a `WHERE` clause in an SQL query, which is static and predefined, bulk selection allows for dynamic filtering at runtime. This is particularly helpful when working with lists of keys that are not known beforehand or need to be processed in batches.

Assume the following table definition:

```sql
CREATE TABLE SourceTable (
    Id INT NOT NULL PRIMARY KEY,
    Value VARCHAR(100) NOT NULL
);
```

And a corresponding POCO:

```csharp
public class MyRow {
    [IdColumn]
    public int Id { get; set; }
    public string Value { get; set; }
}
```

Instead of retrieving all rows, only records matching the provided key values are fetched.

```csharp
var source = new DbSource<MyRow>(conn, "SourceTable") {
    SelectMode = SelectOperation.BulkSelect,
    FilterRows = new[] {
        new MyRow { Id = 1 },
        new MyRow { Id = 3 }
    }
};
```

This retrieves only the rows where `Id = 1` or `Id = 3`, reducing unnecessary data transfer and memory usage.

{{< callout context="note" icon="outline/info-circle" title="Why Not Just Use a WHERE Clause?" >}}
A `WHERE` clause can be used for filtering, but it requires hardcoding the condition in the SQL query. If the filtering criteria are dynamic, constructing a query string manually with multiple values (`WHERE Id IN (1, 3, 5, ...)`) can be inefficient, especially for large lists. Some databases also impose a limit on the number of values that can be passed in an `IN` clause.
{{< /callout >}}


### Handling Large Key Lists

Bulk selection is optimized for handling large datasets by processing keys in batches. The `BulkSelectBatchSize` property determines how many keys are sent per query.

```csharp
source.BulkSelectBatchSize = 500;
```

This groups queries into batches of 500 keys per request, ensuring efficient execution and avoiding query length limits imposed by some databases.

## Error Handling

If an error occurs while reading a record, `DbSource` automatically redirects the faulty record to an error flow if `LinkErrorTo` is used. Errors do not halt execution unless explicitly configured to do so.

When an error occurs, the record is wrapped inside an `ETLBoxError`. The original data is stored in the `RecordAsJson` property, ensuring that the problematic record is preserved and can be analyzed later.

#### Example: Capturing Errors

```csharp
var source = new DbSource<MyRow>(conn, "SourceTable");
var errorDest = new MemoryDestination<ETLBoxError>();

source.LinkErrorTo(errorDest);
Network.Execute(source);

foreach (var error in errorDest.Data) {
    Console.WriteLine($"Error: {error.ErrorText}");
    Console.WriteLine($"Faulty Record: {error.RecordAsJson}");
}
```

## Example Data Flow

The following example reads data from a database table and loads it into a memory destination. This is useful for debugging, as it allows you to inspect the extracted data before processing it further.

```csharp
var conn = new SqlConnectionManager("Data Source=.;Initial Catalog=ETL;Integrated Security=SSPI;");
var source = new DbSource<MyRow>(conn, "SourceTable") {
    Limit = 3 // Read only the first 3 rows
};
var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

Console.WriteLine($"Loaded {dest.Data.Count} rows!");
```

