---
title: "SQL Task"
description: "SqlTask is a versatile utility for executing raw SQL commands within ETLBox workflows. It supports non-query execution, scalar results, row-by-row reading, and bulk operations."
lead: "SqlTask is a general-purpose task for executing raw SQL within ETLBox workflows. It supports direct SQL execution, scalar queries, reading result sets, and batch operations such as bulk insert, update, and delete. It’s especially useful when you need full control over the executed SQL while keeping the ADO.NET boilerplate out of your code."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 740
toc: true
chatgpt-review: true
---

## Executing SQL Statements

Use `ExecuteNonQuery` to run SQL statements that don’t return data (e.g., `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`):

```csharp
SqlTask.ExecuteNonQuery("Insert rows", "INSERT INTO Orders (Amount) VALUES (100)");
```

Or with a connection manager:

```csharp
var connectionManager = new SqlConnectionManager("connection string here");
SqlTask.ExecuteNonQuery(connectionManager, "DELETE FROM TempData");
```

With parameters:

```csharp
var parameters = new List<QueryParameter> {
    new QueryParameter("value1", "INT", 123),
    new QueryParameter("value2", "NVARCHAR(50)", "Test")
};

SqlTask.ExecuteNonQuery(connectionManager,
    "INSERT INTO Logs (Id, Message) VALUES (@value1, @value2)",
    parameters);
```

### Scalar Queries

Use `ExecuteScalar` when the SQL returns a single value:

```csharp
object result = SqlTask.ExecuteScalar(connectionManager, "SELECT COUNT(*) FROM Orders");
```

With type conversion:

```csharp
int count = SqlTask.ExecuteScalar<int>(connectionManager, "SELECT COUNT(*) FROM Orders");
```

### Reading Result Sets

`SqlTask.ExecuteReader` allows you to process result sets row by row using delegate actions. This is useful when you want to map query results into objects or handle each row manually.

You provide a series of delegate actions:

- A function that initializes a new object before each row is read.
- An action that runs after each row is read (commonly used to add the object to a list).
- One or more actions to map column values to object properties.

Example usage:

```csharp
List<Order> orders = new List<Order>();
Order current = null;

SqlTask.ExecuteReader(connectionManager,
    "SELECT Id, Amount FROM Orders",
    () => current = new Order(),
    () => orders.Add(current),
    col1 => current.Id = int.Parse(col1.ToString()),
    col2 => current.Amount = decimal.Parse(col2.ToString())
);
```

You must provide exactly one mapper per column in the result set. If more mappers are provided than columns, an exception is thrown.

This pattern ensures clean object mapping without relying on reflection or dynamic typing. It's also database-agnostic and works across all supported platforms.



## Bulk Operations

### BulkInsert

`SqlTask.BulkInsert` allows you to insert multiple rows into a table efficiently using a `TableData` object. It is optimized for performance and works across supported databases.

To use it, create a `TableData` instance and populate it with rows matching the table’s schema:

```csharp
var tableDef = new TableDefinition("Orders", new List<TableColumn> {
    new TableColumn("Id", "INT"),
    new TableColumn("Description", "VARCHAR(100)")
});

var data = new TableData<string[]>(tableDef);
data.Rows.Add(new[] { "1", "Test1" });
data.Rows.Add(new[] { "2", "Test2" });

SqlTask.BulkInsert(connectionManager, data);
```

You can also control how columns are mapped using the `DataIndexForColumn` dictionary if your input arrays don’t match the column order:

```csharp
data.DataIndexForColumn["Description"] = 0;
data.DataIndexForColumn["Id"] = 1;
```

#### Identity Handling

By default, identity columns are skipped during bulk insert. To insert explicit values into identity columns:

```csharp
data.AllowIdentityInsert = true;
data.KeepIdentity = true;
```

This is useful in test scenarios or when importing data with preserved keys.

#### Column Converters

Use `ColumnConverters` to transform input values before they are written:

```csharp
data.ColumnConverters["CreatedDate"] = value =>
    value == null ? DateTime.UtcNow : DateTime.Parse(value.ToString());
```

This allows for input normalization, parsing, or defaulting behavior at the column level.

### BulkUpdate

`SqlTask.BulkUpdate` lets you update multiple rows in a single operation by matching key columns and setting new values for specified fields. It uses a `TableData` object to define both the data and the structure.

To perform a bulk update, define which columns should be used to match existing records (`joinColumnNames`) and which columns should be updated (`setColumnNames`):

```csharp
var data = new TableData(tableDefinition);
data.Rows.Add(new object[] { 1, "UpdatedValue" });  // Example row

SqlTask.BulkUpdate(connectionManager, data,
    setColumnNames: new[] { "Name" },
    joinColumnNames: new[] { "Id" });
```

- `joinColumnNames`: Columns used to locate the target rows in the database.
- `setColumnNames`: Columns whose values should be updated.

This method is efficient and works across most databases by generating a single batch update statement.

#### Handling Nulls

`BulkUpdate` also handles `NULL` values correctly. If a field in the input row is `null`, it will be updated as `NULL` in the database.


### BulkDelete

`SqlTask.BulkDelete` removes multiple rows from a table by matching each row's values to specified columns in the database. Like the other bulk operations, it uses a `TableData` object to define which records should be deleted.

Each row in `TableData.Rows` is treated as a separate condition. The combination of all column values in a row is used to form a `WHERE` clause that uniquely identifies records to delete.

Example:

```csharp
var data = new TableData(new TableDefinition {
    Name = "Orders",
    Columns = new List<TableColumn> {
        new TableColumn("Id"),
        new TableColumn("Status")
    }
});

data.Rows.Add(new object[] { 1, "Cancelled" });
data.Rows.Add(new object[] { 2, "Archived" });

SqlTask.BulkDelete(connectionManager, data);
```

This would result in a single `DELETE` statement that removes any row in `Orders` matching either `(Id = 1 AND Status = 'Cancelled')` or `(Id = 2 AND Status = 'Archived')`.

This approach is helpful for cleaning up test data, synchronizing subsets, or removing known duplicates.

