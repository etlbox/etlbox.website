---
title: "Database Type Check"
description: "DbTypeCheck validates incoming data against database column types, ensuring consistency before insertion. Invalid records can be redirected, preventing errors in the data flow."
lead: "The DbTypeCheck is a component designed to check the type consistency of all properties of incoming records against their corresponding columns in an existing database table. This ensures that data being processed matches the expected types in the database, helping maintain data integrity and prevent errors during data flow operations."
draft: false
images: []
menu:
  docs:
    parent: "relational-databases"
weight: 160
toc: true
chatgpt-review: true
---

## Features

`DbTypeCheck` ensures that incoming rows match the data types of the corresponding columns in a specified database table. By providing a `TableName` and a `ConnectionManager`, it retrieves the `TableDefinition` automatically. Optionally, `ColumnMapping` (similar to `DbDestination`) can be applied. The component verifies that each property's data type and value align with the mapped column.

As a transformation component, `DbTypeCheck` has two outputs:
- **Valid rows** are passed through `LinkTo`.
- **Invalid rows** can be redirected using `LinkFlawedTo`. If no `LinkFlawedTo` is defined, an exception is thrown when encountering flawed records.

### Usage Example

```csharp
public class MyDataTypeRow
{
    [DbColumnMap("IntCol")]
    public int? SomeInt { get; set; }

    [DbColumnMap("StringCol")]
    public string SomeString { get; set; }
}

var check = new DbTypeCheck<MyDataTypeRow>(SqlConnection, "destination_table");
var dest = new DbDestination<MyDataTypeRow>(SqlConnection, "destination_table");
var flawedRowsDest = new MemoryDestination<MyDataTypeRow>();

source.LinkTo(check);
check.LinkTo(dest);
check.LinkFlawedTo(flawedRowsDest);
```

## Customizing Type Checks

### Provide a Custom Table Definition

By default, `DbTypeCheck` retrieves the full table definition from the database. However, a custom `TableDefinition` can be provided when only specific columns should be validated.

```csharp
var tableDef = TableDefinition.FromTableName(SqlConnection, "destination_table");
tableDef.Columns = tableDef.Columns.Where(col => col.Name != "IgnoredColumn").ToList();

var check = new DbTypeCheck<MyDataTypeRow>(SqlConnection, "destination_table");
check.TableDefinition = tableDef;
```

### Handling Invalid Records

Records that match the schema are passed via `LinkTo`. Invalid records can be redirected using `LinkFlawedTo`. If `LinkFlawedTo` is omitted, an exception is thrown upon encountering an invalid row. Alternatively, `LinkErrorTo` can be used to capture errors as `ETLBoxError` objects.

## Column Mapping

Column mapping works the same way as in `DbDestination`. Using the same mapping in both components ensures consistency. Mapping can be done via attributes or by explicitly defining a mapping array.

```csharp
var check = new DbTypeCheck(SqlConnection, "destination_table");
var dest = new DbDestination(SqlConnection, "destination_table");

var colMap = new[]
{
    new DbColumnMap() { DbColumnName = "IntCol", PropertyName = "SomeInt" },
    new DbColumnMap() { DbColumnName = "StringCol", PropertyName = "SomeString" }
};

dest.ColumnMapping = colMap;
check.ColumnMapping = dest.ColumnMapping;
```

## Additional Configuration

### Include Identity Columns

If identity (auto-increment) columns need to be included in validation, enable `IncludeIdentityColumn`. This is useful when explicitly inserting values into an identity column.

```csharp
var check = new DbTypeCheck<MyRow>(SqlConnection, "destination_table");
check.IncludeIdentityColumn = true;

var dest = new DbDestination<MyRow>(SqlConnection, "destination_table");
dest.AllowIdentityInsert = true;
```

### AllPropertiesMustMatch

If `true`, any extra properties in the input data that do not exist in the table schema cause the row to be marked as invalid.

### CustomCheck

A user-defined validation rule can be applied after type checks. For example, rejecting negative `Id` values:

```csharp
var check = new DbTypeCheck<MyRow>(SqlConnection, "destination_table");
check.CustomCheck = row => row.Id > 0;
```

### IncludeCharLength / IncludeBinaryLength

These options validate the length of `CHAR`/`VARCHAR` and `BINARY`/`VARBINARY` columns. If a value exceeds the allowed length, the row is flagged as invalid.

## Example

```csharp
public class MyDataTypeRow
{
    public int Id { get; set; }

    [DbColumnMap("IntCol")]
    public int? SomeInt { get; set; }

    [DbColumnMap("StringCol")]
    public string SomeString { get; set; }
}

// Create demo table
string tableName = "dbtypecheck_example";
var tableCols = new List<TableColumn>
{
    new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true, isIdentity: true),
    new TableColumn("IntCol", "INT", allowNulls: false),
    new TableColumn("StringCol", "VARCHAR(5)", allowNulls: true),
};
DropTableTask.DropIfExists(SqlConnection, tableName);
CreateTableTask.CreateIfNotExists(SqlConnection, tableName, tableCols);

// Define test data
var source = new MemorySource<MyDataTypeRow>(
    new List<MyDataTypeRow>()
    {
        new MyDataTypeRow() { SomeInt = 1, SomeString = "OK" },       // Pass
        new MyDataTypeRow() { SomeInt = 2, SomeString = "TOO_LONG" }, // Exceeds VARCHAR(5)
        new MyDataTypeRow() { SomeInt = null, SomeString = "X" },     // Null in non-nullable column
        new MyDataTypeRow() { SomeInt = -1, SomeString = "X" }        // Fails CustomCheck
    });

// Configure DbTypeCheck
var check = new DbTypeCheck<MyDataTypeRow>(SqlConnection, tableName);
check.CustomCheck = row => row.SomeInt > 0;

// Define destinations
var dest = new DbDestination<MyDataTypeRow>(SqlConnection, tableName);
var flawedRowsDest = new MemoryDestination<MyDataTypeRow>();

// Link components
source.LinkTo(check);
check.LinkTo(dest);
check.LinkFlawedTo(flawedRowsDest);

// Execute network
Network.Execute(source);
```

## Dynamic Object Support

Like all ETLBox components, `DbTypeCheck` supports both strongly-typed objects (`DbTypeCheck<MyRow>`) and dynamic `ExpandoObject` (`DbTypeCheck<ExpandoObject>` or `DbTypeCheck`).

## Handling Conversion Errors

`DbTypeCheck` captures detailed information about failed type checks in the `ConversionError` property. This helps in diagnosing data issues by providing explicit error messages for each flawed record.

### ConversionError Class

- **PropertyName**: The column causing the error
- **Reason**: Why the conversion failed
- **Value**: The rejected value

### Example with POCO

```csharp
public class MyDataTypeRow
{
    [DbColumnMap("IntCol")]
    public int? SomeInt { get; set; }

    [DbColumnMap("StringCol")]
    public string SomeString { get; set; }

    public ConversionError ConversionError { get; set; }
}

var check = new DbTypeCheck<MyDataTypeRow>(SqlConnection, "destination_table");
check.IncludeCharLength = true;

var source = new MemorySource<MyDataTypeRow>(
    new List<MyDataTypeRow>
    {
        new MyDataTypeRow { SomeInt = null, SomeString = "Test" }, // Fails
        new MyDataTypeRow { SomeInt = 1, SomeString = "Valid" }
    });

var flawedRowsDest = new MemoryDestination<MyDataTypeRow>();

source.LinkTo(check);
check.LinkTo(new DbDestination<MyDataTypeRow>(SqlConnection, "destination_table"));
check.LinkFlawedTo(flawedRowsDest);

Network.Execute(source);

foreach (var row in flawedRowsDest.Data)
{
    Console.WriteLine($"Error in property {row.ConversionError.PropertyName}: {row.ConversionError.Reason}");
}
```

### Example with Dynamic Object

```csharp
dynamic CreateExpandoObject(int? someInt, string someString)
{
    dynamic expando = new ExpandoObject();
    expando.SomeInt = someInt;
    expando.SomeString = someString;
    return expando;
}

var source = new MemorySource<ExpandoObject>(
    new List<ExpandoObject>
    {
        CreateExpandoObject(null, "Test"), // Fails
        CreateExpandoObject(1, "Valid")
    });

var check = new DbTypeCheck<ExpandoObject>(SqlConnection, "destination_table");

var flawedRowsDest = new MemoryDestination<ExpandoObject>();

source.LinkTo(check);
check.LinkTo(new DbDestination<ExpandoObject>(SqlConnection, "destination_table"));
check.LinkFlawedTo(flawedRowsDest);

Network.Execute(source);

foreach (dynamic row in flawedRowsDest.Data)
{
    Console.WriteLine($"Error in property {row.ConversionError.PropertyName}: {row.ConversionError.Reason}");
}
```
