---
title: "DB Structure Tasks"
description: "This section covers Control Flow Tasks that create, drop, or check for the existence of databases, schemas, indexes, and procedures. These are useful when setting up environments, applying schema changes, or writing integration tests."
lead: "Beyond tables and views, ETLBox gives you tools to manage broader database structures—like schemas, indexes, stored procedures, and entire databases—using the same consistent task-based approach. These tasks help automate setup, teardown, and validation across different database systems."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 730
toc: true
chatgpt-review: true
---

## Database Tasks

You can use Control Flow Tasks to manage entire databases. These tasks are helpful when your ETL workflow includes provisioning or cleaning up database instances.

### CreateDatabaseTask

Creates a new database or alters it if supported.

```csharp
CreateDatabaseTask.CreateOrAlter("AnalyticsDB");
```

### DropDatabaseTask

Drops a database if it exists.

```csharp
DropDatabaseTask.DropIfExists("AnalyticsDB");
```

### IfDatabaseExistsTask

Checks if a database exists on the server.

```csharp
bool exists = IfDatabaseExistsTask.IsExisting("AnalyticsDB");
```

> **Note:** When creating or checking a database, ensure your connection points to a master or system database, not the one you want to create.

### Connecting Without a Catalog

When creating a database, you often need to connect to the server without referencing the target database—because it doesn't exist yet. ETLBox provides connection string wrappers that help you get a suitable "master" connection for this scenario.

For example, in PostgreSQL:

```csharp
var conStringWrapper = new PostgresConnectionString("Server=10.37.128.2;Database=ETLBox_DataFlow;User Id=postgres;Password=etlboxpassword;");
var connectionWithoutCatalog = conStringWrapper.GetMasterConnection();
var connectionManager = new PostgresConnectionManager(connectionWithoutCatalog);
```

This will connect to the default `postgres` database instead of `ETLBox_DataFlow`.

Equivalent behavior applies for:
- SQL Server → connects to `master`
- MySQL/MariaDB → connects to `mysql`

Use this pattern whenever you need to create a new database or check its existence.

## Schema Tasks

{{< callout context="caution" outline="icon/alert-triangle" >}}
Schemas are supported for databases like SQL Server and PostgreSQL. For MySQL or MariaDB, use the database tasks instead.
{{< /callout >}}

### CreateSchemaTask

Creates or replaces a schema.

```csharp
CreateSchemaTask.CreateOrAlter("reporting");
```

### DropSchemaTask

Drops a schema if it exists.

```csharp
DropSchemaTask.DropIfExists("reporting");
```

### IfSchemaExistsTask

Checks if a schema exists.

```csharp
bool exists = IfSchemaExistsTask.IsExisting("reporting");
```

## Index Tasks

Index tasks are used to manage general-purpose indexes for performance optimization.


{{< callout context="note" icon="outline/info-circle" >}}
General indexes cannot be created as part of `CreateTableTask`. Only the following constraints are supported within table creation:
- Primary Keys
- Unique Constraints
- Foreign Keys

For all other indexes, use `CreateIndexTask` after the table is created.
{{< /callout >}}

### CreateIndexTask

Creates or recreates an index on an existing table.

```csharp
CreateIndexTask.CreateOrRecreate(
    connection: SqlConnection,
    indexName: "ix_customer_name",
    tableName: "Customer",
    indexColumns: new List<string> { "Name" },
    includeColumns: new List<string> { "Address", "Email" }, // optional
    isUnique: false, // optional
    isClustered: false // optional, SQL Server only
);
```

### DropIndexTask

Drops an index if it exists.

```csharp
DropIndexTask.DropIfExists(SqlConnection, "ix_customer_name", "Customer");
```

### IfIndexExistsTask

Checks if an index exists on a table.

```csharp
bool exists = IfIndexExistsTask.IsExisting(SqlConnection, "ix_customer_name", "Customer");
```

### Example

```csharp
CreateTableTask.CreateIfNotExists(SqlConnection, "dbo.IndexCreation3", new List<TableColumn> {
    new TableColumn("Key1", "INT", allowNulls: false),
    new TableColumn("Key2", "CHAR(2)", allowNulls: true),
    new TableColumn("Value1", "NVARCHAR(10)", allowNulls: true),
    new TableColumn("Value2", "DECIMAL(10,2)", allowNulls: false),
});

CreateIndexTask.CreateOrRecreate(
    SqlConnection,
    indexName: "ix_IndexTest3",
    tableName: "dbo.IndexCreation3",
    indexColumns: new List<string> { "Key1", "Key2" },
    includeColumns: new List<string> { "Value1", "Value2" }
);
```


## Procedure Tasks

Use these tasks to define and manage stored procedures programmatically.

### CreateProcedureTask

Creates or alters a stored procedure.

```csharp
var parameters = new List<ProcedureParameter> {
    new ProcedureParameter("Par1", "VARCHAR(50)"),
    new ProcedureParameter("Par2", "INT", "0")
};

CreateProcedureTask.CreateOrAlter("MyProcedure", "SELECT 1;", parameters);
```

### DropProcedureTask

Drops a procedure if it exists.

```csharp
DropProcedureTask.DropIfExists("MyProcedure");
```

### IfProcedureExistsTask

Checks if a procedure exists.

```csharp
bool exists = IfProcedureExistsTask.IsExisting("MyProcedure");
```

