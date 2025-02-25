---
title: "Connection Manager"
description: "This article explains how ETLBox connection managers handle database communication, ensuring compatibility across different database systems. It covers supported connection managers, configuration examples, transaction management and more."
lead: "ETLBox provides connection managers to facilitate interaction with different relational databases. These managers handle connection setup and support features like transactions and connection pooling. Depending on the database, ETLBox offers native connection managers and ODBC/OleDb alternatives for broader compatibility."
draft: false
images: []
menu:
  docs:
    parent: "relational-databases"
weight: 120
toc: true
chatgpt-review: true
---

## Selecting the Right Connection Manager

Each database type requires a corresponding connection manager in ETLBox. For example, `SqlConnectionManager` is used for SQL Server, while `PostgresConnectionManager` is used for PostgreSQL. Choosing the right manager ensures optimal performance and compatibility with database-specific features.

**Example: Creating a Connection Manager**

```csharp
var sqlConn = new SqlConnectionManager("Data Source=myServer;Database=myDB;User ID=myUser;Password=myPass;");
var postgresConn = new PostgresConnectionManager("Host=myServer;Database=myDB;Username=myUser;Password=myPass;");
```

Once created, the connection manager can be passed to ETLBox components like `DbSource`, `DbDestination`, and `DbMerge`, or control flow tasks like `SqlTask` or `CreateTableTask`.

### Default Connection Manager

A global default connection manager can be set to avoid passing it explicitly:

```csharp
Settings.DefaultDbConnection = new SqlConnectionManager("Data Source=myServer;Database=myDB;User ID=myUser;Password=myPass;");
// No need to pass the connection explicitly
var source = new DbSource("SourceTable");
```

## Connection Strings

A **connection string** is required to connect to a database, containing details such as the server address, credentials, and settings. The syntax varies by provider. If unsure, refer to [ConnectionStrings.com](https://www.connectionstrings.com) for examples.

### Connection String Wrapper

Instead of passing a raw connection string, you can use a `ConnectionString` object, which wraps the string using the appropriate `ConnectionStringBuilder` and provides additional functionality, such as retrieving system database connections.

```csharp
SqlConnectionString etlboxConnString = new SqlConnectionString("Data Source=.;Integrated Security=SSPI;Initial Catalog=ETLBox;");
SqlConnectionString masterConnString = etlboxConnString.GetMasterConnection();

// masterConnString is "Data Source=.;Integrated Security=SSPI;"
SqlConnectionManager connectionToMaster = new SqlConnectionManager(masterConnString);
```

## Available Connection Managers

Below is a list of all available native, ODBC, and OleDb connection managers.

### Native

- **SQL Server**: `new SqlConnectionManager("Data Source=myServer;Initial Catalog=myDB;User ID=myUser;Password=myPass;");`
- **PostgreSQL**: `new PostgresConnectionManager("Host=myServer;Database=myDB;Username=myUser;Password=myPass;");`
- **SQLite**: `new SQLiteConnectionManager("Data Source=mydatabase.db;");`
- **Oracle**: `new OracleConnectionManager("User Id=myUser;Password=myPass;Data Source=myOracleDB;");`
- **MySQL**: `new MySqlConnectionManager("Server=myServer;Database=myDB;User=myUser;Password=myPass;");`
- **MariaDB**: `new MariaDbConnectionManager("Server=myServer;Database=myDB;User=myUser;Password=myPass;");`
- **IBM Db2**: `new Db2ConnectionManager("Server=myServer;Database=myDB;UID=myUser;PWD=myPass;");`
- **SAP ASE (Sybase)**: `new AseConnectionManager("Server=myServer;Database=myDB;User=myUser;Password=myPass;");`
- **SAP HANA**: `new HanaConnectionManager("Server=myServer;Database=myDB;User=myUser;Password=myPass;");`
- **Snowflake**: `new SnowflakeConnectionManager("Account=myAccount;User=myUser;Password=myPass;Database=myDB;Schema=mySchema;");`

### ODBC

These managers use ODBC drivers to connect to databases. The correct driver must be installed.

- **Generic ODBC**: `new OdbcConnectionManager("DSN=myDSN;Uid=myUser;Pwd=myPass;");`
- **SQL Server ODBC**: `new SqlOdbcConnectionManager("Driver={SQL Server};Server=myServer;Database=myDB;Uid=myUser;Pwd=myPass;");`
- **PostgreSQL ODBC**: `new PostgresOdbcConnectionManager("Driver={PostgreSQL ANSI};Server=myServer;Database=myDB;Uid=myUser;Pwd=myPass;");`
- **MySQL ODBC**: `new MySqlOdbcConnectionManager("Driver={MySQL ODBC 8.0 Driver};Server=myServer;Database=myDB;Uid=myUser;Pwd=myPass;");`
- **MariaDB ODBC**: `new MariaDbOdbcConnectionManager("Driver={MariaDB ODBC 3.1 Driver};Server=myServer;Database=myDB;Uid=myUser;Pwd=myPass;");`
- **Oracle ODBC**: `new OracleOdbcConnectionManager("Driver={Oracle in OraDB};Dbq=mydb;Uid=myuser;Pwd=mypassword;");`
- **Snowflake ODBC**: `new SnowflakeOdbcConnectionManager("Driver={SnowflakeDSIIDriver};Account=myaccount;User=myuser;Password=mypassword;Database=mydb;");`
- **Apache Spark ODBC**: `new SparkOdbcConnectionManager("Driver={Simba Spark ODBC Driver};Host=spark.server.com;Port=10000;Schema=default;");`
- **Microsoft Access ODBC**: `new AccessOdbcConnectionManager("Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=myDatabase.accdb;");`

### OleDb

OleDb can be used as an alternative to ODBC, particularly for SQL Server.

- **SQL Server OleDb**: `new SqlOleDbConnectionManager("Provider=MSOLEDBSQL;Server=myServer;Database=myDB;User Id=myUser;Password=myPass;");`
- **Generic OleDb**: `new OleDbConnectionManager("Provider=MSDASQL;Data Source=myDSN;Uid=myUser;Pwd=myPass;");`


## Using Generic ODBC and OleDb Connections

If a database is not fully supported by ETLBox, you can use the generic ODBC or OleDb connection manager to establish a connection. These connectors provide flexibility but come with some limitations compared to native database-specific connection managers.

### Limitations

- **Schema detection is not automatic** – `DbSource` and `DbDestination` require a manually defined `TableDefinition` because column names and types cannot be inferred.
- **ControlFlow components may not work** – Tasks like `IfTableExistsTask` might not function properly. However, `SqlTask` is likely to work.
- **Quoting rules must be set manually** – If your database uses special characters in table or column names, configure the quotation begin (`QB`) and quotation end (`QE`) properties. (E.g. for SQL Server: `conn.QB = "["; conn.QE = "]";` )
- **Bulk inserts may not work** - ETLBox will try to insert data in a `DbDestination` using a generic `INSERT INTO (..) VALUES (..),(..),(..)` SQL statement, but this may not be support by all databases.

### Examples

**Example**: Using a Generic OleDb Connection

This example demonstrates how to connect to SQL Server via a generic Odbc connection and execute a SQL statement.

```csharp
var connString = @"Driver={SQL Server};Server=myServer;Database=myDB;Uid=myUser;Pwd=myPass;";
OdbcConnectionManager conn = new OdbcConnectionManager(connString);
conn.QB = "["; conn.QE = "]";  // Only needed if table or column names contain special characters or spaces
SqlTask.ExecuteNonQuery(conn, "INSERT INTO MyTable (Col1, Col2) VALUES (1, 'Test')");
```

**Example**: Using Generic ODBC with DbSource

To read from an ODBC connection, define the table schema manually.

```csharp
var conn = new OdbcConnectionManager(ConnectionType.Unknown, "DSN=MyDatabase;Uid=myUser;Pwd=myPass;");

var tableDef = new TableDefinition("MyTable", new List<TableColumn> {
    new TableColumn("Id", "INT", allowNulls: false),
    new TableColumn("Name", "VARCHAR(100)", allowNulls: true)
});

var source = new DbSource<MyData>(conn) {
    TableDefinition = tableDef
};
```

## Connection Pooling

ETLBox connection managers use ADO.NET connection pooling to optimize performance. Connections are automatically managed—when a component needs access to the database, ETLBox opens a connection, and once the operation is complete, the connection is returned to the pool for reuse. This minimizes the number of active connections and improves efficiency.

For more details, refer to Microsoft's documentation on [SQL Server Connection Pooling](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql-server-connection-pooling).

### Reusing Connection Managers

Connection managers can be reused across multiple components. ETLBox clones the provided connection manager, and ADO.NET decides whether to reuse an existing connection or create a new one.

To keep a connection open instead of returning it to the pool, use the `LeaveOpen` property:

```csharp
var sqlServerConn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
sqlServerConn.LeaveOpen = true;
```

This prevents the connection from being closed after each operation, which can be useful when running sequential queries without interruptions, or might improve performance when inserting data.

## Transactions

Transactions ensure atomicity when executing multiple operations. A connection manager can start a transaction and commit or roll it back as needed:

```csharp
var sqlServerConn = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");

try {
    sqlServerConn.BeginTransaction();
    // Execute operations within the transaction,e.g. running the ETL: Network.Execute(source);
    sqlServerConn.CommitTransaction();
} catch {
    sqlServerConn.RollbackTransaction();
}
```

If a transaction is active, the connection remains open and cannot be returned to the pool until the transaction is completed.

{{< callout context="caution" icon="outline/alert-triangle" >}}
Using the same connection manager within an active transaction or write operation can cause deadlocks. Use a separate connection manager for concurrent operations.
{{< /callout >}}

### Avoiding Conflicts in Transactions

Transactions use a single connection, so concurrent read and write operations on the same database require separate connection managers:

```csharp
var sqlConnSource = new SqlConnectionManager("...");
var sqlConnDest = new SqlConnectionManager("...");

try {
    sqlConnDest.BeginTransaction();
    var source = new DbSource(sqlConnSource, "Table1");
    var dest = new DbDestination(sqlConnDest, "Table1Copy");
    source.LinkTo(dest);
    Network.Execute(source);
    sqlConnDest.CommitTransaction();
} catch {
    sqlConnDest.RollbackTransaction();
}
```

### Using Multiple Active Result Sets

Some databases might support **Multiple Active Result Sets (MARS)**, which allows simultaneous read and write operations on the same connection:

```csharp
var sqlConnectionManager = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;MultipleActiveResultSets=True;");
```

For databases that do not support MARS, separate connections are required to avoid transaction conflicts.
