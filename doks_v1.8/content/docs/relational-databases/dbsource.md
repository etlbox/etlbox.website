---
title: "Database Source"
description: ""
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "relational-databases"
weight: 140
toc: true
chatgpt-review: true
---

## Reading Data with DbSource

`DbSource` reads data from a relational database and streams it into the ETL pipeline. It processes data row by row, reducing memory usage and allowing efficient handling of large datasets.

### Key Features
- Reads from tables or custom SQL queries
- Streams data instead of loading everything into memory
- Supports both strongly-typed objects and dynamic `ExpandoObject`
- Works with all supported databases via connection managers
- Allows column mapping, query parameters, and stored procedure execution

### Example: Reading from a Table

```csharp
var conn = new PostgresConnectionManager("Host=localhost;Database=demo;Username=postgres;Password=etlboxpassword;");
var source = new DbSource<OrderData>(conn, "orders");
```

### Example: Reading with a SQL Query

```csharp
var conn = new SqlConnectionManager("Server=localhost;Database=demo;User Id=sa;Password=yourpassword;");
var source = new DbSource<OrderData>(conn, "SELECT OrderId, CustomerName FROM orders WHERE OrderAmount > 100");
```

If the column structure is unknown, `ExpandoObject` can be used:

```csharp
var source = new DbSource(conn, "orders"); // Uses dynamic object by default
```

### Using Query Parameters

Parameterized queries prevent SQL injection and improve query execution:

```csharp
var source = new DbSource() {
    Sql = "SELECT OrderId, CustomerName FROM orders WHERE OrderAmount > @amount",
    ConnectionManager = conn,
    SqlParameter = new[] { new QueryParameter("amount", "DECIMAL", 100) }
};
```

### Executing Stored Procedures

DbSource can execute stored procedures while retrieving table definitions dynamically:

```csharp
var source = new DbSource() {
    Sql = "EXEC GetOrdersByAmount @amount",
    ConnectionManager = conn,
    SqlParameter = new[] { new QueryParameter("amount", "DECIMAL", 100) },
    TableDefinition = TableDefinition.FromProcedureName(conn, "GetOrdersByAmount")
};
```

### Column Mapping

If property names differ from database column names, `DbColumnMap` attributes ensure correct mapping:

```csharp
public class OrderData
{
    [DbColumnMap("OrderId")]
    public int Id { get; set; }

    [DbColumnMap("CustomerName")]
    public string Name { get; set; }

    [DbColumnMap("OrderAmount")]
    public decimal Amount { get; set; }
}
```

### Handling Metadata Automatically

ETLBox retrieves metadata (column names, data types, primary keys) automatically. However, when using stored procedures or `SELECT * FROM table`, metadata may not be available. In such cases:
- Provide a `TableDefinition` manually
- Use explicit column selection in SQL queries

### Bulk Read Mode

By default, `DbSource` streams data continuously instead of reading in batches. This ensures optimal performance. However, for advanced scenarios, `BulkSelect` can filter rows efficiently based on predefined keys:

```csharp
var source = new DbSource<MyRow>(conn, "orders");
source.SelectMode = SelectOperation.BulkSelect;
source.FilterRows = new[] { new MyRow { Id = 2 }, new MyRow { Id = 3 } };
```

### Connecting to Different Databases

DbSource works with all database connection managers, including ODBC and OleDb:

```csharp
var source = new DbSource<OrderData>(new MySqlConnectionManager("Server=localhost;Database=demo;User=root;Password=yourpassword;"), "orders");
```

