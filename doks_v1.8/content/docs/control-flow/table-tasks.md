---
title: "Table & View Tasks"
description: "The Table and View Tasks category includes components for defining and manipulating tables or views programmatically. With support for data type conversion, schema introspection, and conditional logic, these tasks help you manage table structures reliably across different databases."
lead: "ETLBox provides several Control Flow Tasks specifically for working with database tables or views. These tasks help you automate table creation, deletion, and inspection with clean, minimal C# code. They're especially helpful in dynamic or test-driven environments where table structures need to be defined or adjusted programmatically."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 720
toc: true
chatgpt-review: true
---

## Table Tasks

### CreateTableTask

`CreateTableTask` allows you to create a table on your database by defining its structure either through a list of `TableColumn` objects or using a `TableDefinition`.

Here’s an example using a list of columns:

```csharp
var columns = new List<TableColumn> {
    new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true, isIdentity: true),
    new TableColumn("OrderDate", "DATE", allowNulls: true),
    new TableColumn("Amount", "DECIMAL(10,2)", allowNulls: false) { DefaultValue = "3.12" },
    new TableColumn("CompValue", "BIGINT",allowNulls:true) { ComputedColumn = "(Amount * Id)" }
};

CreateTableTask.Create("Orders", columns);
```

Alternatively, you can use a `TableDefinition` to encapsulate the table name and columns:

```csharp
var tableDef = new TableDefinition("Customer", new List<TableColumn> {
    new TableColumn("CustomerId", "INT", allowNulls: false, isPrimaryKey: true, isIdentity: true),
    new TableColumn("Name", "NVARCHAR(100)", allowNulls: false)
});

CreateTableTask.Create(tableDef);
```

**Automatic Data Type Conversion**

If you define a column with a common data type like `DATETIME`, ETLBox will attempt to convert it to the appropriate type for your database (e.g., `TIMESTAMP` for PostgreSQL). This lets you use familiar types without worrying about platform differences.

**Custom Data Type Conversion**

If needed, you can override the default conversions by implementing the `IDataTypeConverter` interface:

```csharp
public class MyTypeConverter : IDataTypeConverter {
    public string TryConvertDbDataType(string dbSpecificTypeName, ConnectionType connectionType) {
        if (dbSpecificTypeName == "MYTYPE")
            return "VARCHAR(50)";
        return DataTypeConverter.TryGetDbSpecificType(dbSpecificTypeName, connectionType);
    }
}
```

Then apply it to your task:

```csharp
List<TableColumn> columns = new List<TableColumn>() {
  new TableColumn("somevalue", "MYTYPE"),
  new TableColumn("sometext", "TEXT")
};

var task = new CreateTableTask("CustomTable", columns) {
    DataTypeConverter = new MyTypeConverter()
};
task.Create();
```

### DropTableTask

This task drops a table from the database. Use the `DropIfExists` variant to avoid errors when the table doesn’t exist.

```csharp
DropTableTask.Drop("OldData");
DropTableTask.DropIfExists("TempData");
```

### IfTableOrViewExistsTask

Use this task to check whether a table or view exists before performing operations.

```csharp
bool exists = IfTableOrViewExistsTask.IsExisting("Orders");
```

This is useful when writing conditional logic or guarding setup/teardown code in tests.

### GetTableListTask

Use `GetTableListTask` to retrieve all user-defined tables from the current database. This is especially helpful for schema validation, automated documentation, or cleanup operations.

```csharp
var tables = GetTableListTask.ListAll();
foreach (var table in tables)
{
    Console.WriteLine(table.QuotatedFullName);
}
```

The result is a list of `ObjectNameDescriptor` objects, giving you access to schema and table name components.


## TableDefinition Utility

You can also retrieve table structure information from an existing table using `TableDefinition.FromTableName`. This is useful for introspection or dynamic operations:

```csharp
TableDefinition def = TableDefinition.FromTableName("ExistingTable");
```

Or generate a definition from a C# class type:

```csharp
TableDefinition def = TableDefinition.FromCLRType(ConnectionType.SqlServer, typeof(MyEntity));
```

This automatically maps CLR properties to database columns based on your database  type. For more control, use the `DbColumnDefinition` attribute.


### Using DbColumnDefinition Attribute

The `[DbColumnDefinition]` attribute allows customization of how class properties are translated to table columns:

* `DataType`: Specifies the database column type (e.g., `"BIGINT"`, `"VARCHAR(10)"`).
* `AllowNulls`: Indicates if the column allows null values.
* `IsIdentity`: Marks the column as auto-incrementing.
* `IsPrimaryKey`: Marks the column as a primary key.
* `DefaultValue`: Defines a default value for the column.
* `Name`: Overrides the column name.
* `Ignore`: Excludes the property from the schema.

#### Example

```csharp
public class MyEntity {
    [DbColumnDefinition(DataType = "BIGINT", IsIdentity = true, IsPrimaryKey = true)]
    public int Id { get; set; }

    [DbColumnDefinition(DataType = "VARCHAR(10)", AllowNulls = true, Name = "TestColumn")]
    public string Name { get; set; }

    [DbColumnDefinition(DefaultValue = "42")]
    public int Count { get; set; }

    [DbColumnDefinition(Ignore = true)]
    public string TempData { get; set; }
}

var definition = TableDefinition.FromCLRType(connection, typeof(MyEntity));
CreateTableTask.CreateIfNotExists(connection, definition);
```



## View Tasks

Control Flow View Tasks allow you to automate the creation, replacement, and removal of views in your database, and to check if a view already exists. These tasks help manage logical data layers in a consistent and platform-independent way.

### CreateViewTask

The `CreateViewTask` lets you define a view with a SQL statement. If the view already exists, it will be replaced or altered depending on what's supported by your database.

```csharp
CreateViewTask.CreateOrAlter("RecentOrders", @"
    SELECT Id, CustomerId, OrderDate
    FROM Orders
    WHERE OrderDate >= DATEADD(day, -30, GETDATE())
");
```

This task adapts to your database system, using `CREATE OR REPLACE`, `ALTER`, or `DROP + CREATE` strategies as needed.

#### DropViewTask

Use `DropViewTask` to remove a view from the database. If you want to ensure no error occurs when the view doesn’t exist, use the `DropIfExists` method:

```csharp
DropViewTask.Drop("OldReportView");
DropViewTask.DropIfExists("TempView");
```

This is especially useful in test or migration scripts.

#### GetViewListTask

Use `GetViewListTask` to retrieve a list of all user-defined views in the current database. This can be useful for introspection, validation, or cleanup operations:

```csharp
var views = GetViewListTask.ListAll();
foreach (var view in views)
{
    Console.WriteLine(view.QuotatedFullName);
}
```

The returned list is composed of `ObjectNameDescriptor` objects, providing access to schema and name components of each view.



## RowCountTask

`RowCountTask` lets you count the number of rows in a table. It’s a simple and flexible task that supports standard counts, conditional counts, and performance-optimized modes for large datasets.

### Basic Usage

To count all rows in a table:

```csharp
int count = RowCountTask.Count("Orders");
```

You can also pass a condition to filter the rows:

```csharp
int count = RowCountTask.Count("Orders", "Amount > 100");
```

To use a specific connection manager:

```csharp
int count = RowCountTask.Count(connectionManager, "Orders");
```

### Using Options

You can configure how the count is executed by using the `RowCountOptions` enum:

- `None`: Default `COUNT(*)` query
- `QuickQueryMode`: Uses metadata (only supported on SQL Server) for faster counts
- `DirtyRead`: Allows reading uncommitted rows (if supported)
- `ReadOnlyFirstRow`: Optimized check for existence by limiting to 1 row

Example with quick query mode:

```csharp
var task = new RowCountTask("Orders") {
    Options = RowCountOptions.QuickQueryMode
};
int count = task.Count();
```

### Checking if a Table Has Rows

To check whether a table contains any rows:

```csharp
bool hasRows = RowCountTask.HasRows("Orders");
```

You can combine this with conditions or options:

```csharp
bool hasRows = RowCountTask.HasRows("Orders", "Amount > 100", RowCountOptions.ReadOnlyFirstRow);
```

## TruncateTableTask

`TruncateTableTask` removes all rows from a table efficiently. Depending on the database type, it uses either a `TRUNCATE TABLE` or a `DELETE FROM` statement internally. This task is useful when you want to clear a table quickly without dropping it.

Here’s how to use it:

```csharp
TruncateTableTask.Truncate("StagingData");
```

> **Note:** On some platforms like SQLite or MS Access, `DELETE` will be used instead of `TRUNCATE` due to syntax limitations.
