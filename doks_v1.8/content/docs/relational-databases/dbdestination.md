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
For ODBC and OleDb connections, the default batch size is 100 due to driver limitations.
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

## Bulk Operations

`DbDestination` supports BulkInsert, BulkUpdate, and BulkDelete. BulkInsert is the default mode of operation.

### Bulk Update

Instead of inserting new rows, `BulkUpdate` modifies existing records. The `IdColumns` define matching criteria, and `UpdateColumns` specify which fields to update.

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    BulkOperation = BulkOperation.Update,
    IdColumns = new[] { new IdColumn("Id") },
    UpdateColumns = new[] { new UpdateColumn("Value") }
};
```

### Bulk Delete

To delete records based on matching criteria, use `BulkDelete`.

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable") {
    BulkOperation = BulkOperation.Delete,
    IdColumns = new[] { new IdColumn("Id") }
};
```

This removes all records with matching `Id`.

## Error Handling

If an error occurs while writing a record, `DbDestination` automatically redirects the faulty record to an error flow if `LinkErrorTo` is used. Errors do not halt execution unless explicitly configured to do so.

When an error occurs, the record is wrapped inside an `ETLBoxException`. The original data is stored in the `RecordAsJson` property, ensuring that the problematic record is preserved and can be analyzed later.

### Example: Capturing Errors

```csharp
var dest = new DbDestination<MyRow>(conn, "DestinationTable");
var errorDest = new MemoryDestination<ETLBoxException>();

dest.LinkErrorTo(errorDest);
Network.Execute(dest);

foreach (var error in errorDest.Data) {
    Console.WriteLine($"Error: {error.Message}");
    Console.WriteLine($"Faulty Record: {error.RecordAsJson}");
}
```

## Example Data Flow

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

This simple flow is useful for debugging ETL processes.
