---
title: "Connection Managers"
description: "An overview of existing database connectors in ETLBox and their concepts."
lead: "There a numerous database connector packages that come with ETLBox. Add the connector package for the database that you want to connect with. So if you want to connect with a SqlServer, add the ETLBox.SqlServer pacakge to your project. For MySql, use ETLBox.MySql. "
draft: false
images: []
menu:
  docs:
    parent: "db-connectors"
weight: 310
toc: true
---

## Database integration

Relational databases can be accessed with the DbSource and DbDestination. How to use the connectors will be explained in the next chapter [Relational databases](/docs/db-connectors/relational-databases). But before you can use them, you need the right connection manager for you database. For Sql Server you would the SqlConnectionManager, for Postgres the PostgresConnectionManager, for MySql the MySqlConnectionManager, and so on. You get the idea. 

NoSql databases are also supported. As they are based on different concepts than relation databases (e.g. document storage, key-value store or graph database) the connection and features to interact with NoSql databases can totally different to other databases. 

### Supported relational databases

These relational database are currently **fully** supported with ETLBox:

Database  | Native support | Odbc support | OleDb support
----------|:--------------:|:------------:|:-------------:
Sql Server| <i class="bi-check"></i> | <i class="bi-check"></i> | <i class="bi-check"></i>
Postgres  | <i class="bi-check"></i> | <i class="bi-check"></i> | <i class="bi-x"></i>
SQLite    | <i class="bi-check"></i> | <i class="bi-check"></i> | <i class="bi-x"></i>
Oracle    | <i class="bi-check"></i> | <i class="bi-check"></i> | <i class="bi-x"></i>
MySql     | <i class="bi-check"></i> | <i class="bi-check"></i> | <i class="bi-x"></i>
Maria     | <i class="bi-check"></i> | <i class="bi-check"></i> | <i class="bi-x"></i>
Db2       | <i class="bi-check"></i> | <i class="bi-x"></i> | <i class="bi-x"></i>
Sap ASE (Sybase) | <i class="bi-check"></i> | <i class="bi-check"></i> | <i class="bi-x"></i>
Microsoft Access| <i class="bi-x"></i> | <i class="bi-check"></i> | <i class="bi-x"></i>
Other databases | <i class="bi-x"></i> | * | *

*: There is a limited support for other databases as well - you can use the generic Odbc or OleDb connection manager to access these databases. Please note that using these connections comes with some major limitations. 

### Supported NoSql databases

There are source and destinations components available for the following NoSql databases.

Database | Type   | Source  | Destination | Other components
---------|------  |:-----------------:|:--------------------:|:-------:
MongoDb  |Document|<i class="bi-check"></i>|<i class="bi-check"></i>|<i class="bi-x"></i>
Couchbase|Document|<i class="bi-check"></i>|<i class="bi-check"></i>|<i class="bi-x"></i>
Redis    |Key-Value|<i class="bi-check"></i>|<i class="bi-check"></i>|<i class="bi-x"></i>

## Connection manager

### Connection strings

To connect to your database of choice, you will need a string that contains all information needed to connect
to your database (e.g., the network address of the database, user name and password). The specific connection string syntax for each provider is defined by the ADO.NET framework. If you need assistance to create such a connection string, {{< link-ext url="https://www.connectionstrings.com" text="have a look at connectionstrings.com" >}} that provide example strings for almost every database</a>.

### Choosing the right manager

Some components (e.g. the `DbSource` or the `SqlTask`) can be used to connect via ADO.NET to a database server. They will need a `ConnectionManager` class to connect with the right database. The easiest way to create a connection manager is to create a new instance while providing the connection string for your database. 

Here is an example creating a connection manager for Sql Server:

```C#
SqlConnectionManager sqlConn = 
    new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;Initial Catalog=ETL;");
```

For other databases the code looks very similar. Please be aware that the connection string might look different. Here are some more examples:

```C#
MySqlConnectionManager mySqlConn
    = new MySqlConnectionManager("Server=10.37.128.2;Database=ETL;Uid=eb;Pwd=123;");
PostgresConnectionManager postgresConn
    = new PostgresConnectionManager("Server=localhost;Database=ETL;User Id=eb;Password=123;");
PostgresOdbcConnectionManager oracleOdbc = 
    new PostgresOdbcConnectionManager("Driver={PostgreSQL UNICODE};Server=localhost;Port=5432;Database=ETL;Uid=eb;Pwd=123;");
```


### Default ConnectionManager

Every component or task related to a database operation needs to have a connection managers set in order
to connect to the right database. Sometimes it can be cumbersome to pass the same connection manager over and over
again. To avoid this, there is a static `ControlFlow` class that contains the property `DefaultDbConnection`.
If you define a connection manager here, this will always be used as a fallback value if no other connection manager property was defined.

```
ControlFlow.DefaultDbConnection = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;Initial Catalog=ETLBox;");
//Now you can just create a DbSource like this
var source = new DbSource("SourceTable");
```

## Connection string wrapper

When you create a new connection manager, you have the choice to either pass the connection string directly or you
 create an adequate ConnectionString object from the connection string before you pass it to the connection manager.
 The ConnectionString object does exist for every database type (e.g. for MySql it is `MySqlConnectionString`). The ConnectionString
 wraps the raw database connection string into the appropriate ConnectionStringBuilder object and also offers some more
 functionalities, e.g. like getting a connection string for the database storing system information. 

```C#
SqlConnectionString etlboxConnString = new SqlConnectionString("Data Source=.;Integrated Security=SSPI;Initial Catalog=ETLBox;");
SqlConnectionString masterConnString = etlboxConnString.GetMasterConnection();

//masterConnString is equal to "Data Source=.;Integrated Security=SSPI;"
SqlConnectionManager conectionToMaster = new SqlConnectionManager(masterConnString); 
```

## Odbc & OleDb Connections

The `DbSource` and `DbDestination` also work with Odbc connection. If you want to connect via Odbc or OleDb, you need to have a proper driver installed on the machine where ETLBox is executing. There is a difference between the "generic" Odbc/OleDb driver and the specialised Odbc driver. In short: if you want to connect to a database that is fully supported by ETLBox, use the Odbc/OleDb driver that has the database name in it. 

Here is an example  how you can connect to Postgres via ODBC:
  
```C#
PostgresOdbcConnectionManager postgresOdbc = 
    new PostgresOdbcConnectionManager("Driver={PostgreSQL UNICODE};Server=localhost;Port=5432;Database=ETL;Uid=eb;Pwd=123;");
DbSource source = DbSource (postgresOdbc, "SourceTable");
```

*Warning*: ODBC does not support bulk inserts like in "native" connections.
The `DbDestination` will do a bulk insert by creating a sql insert statement that
has multiple values: INSERT INTO (..) VALUES (..),(..),(..)

### Generic Odbc and OleDb conenctions

As ETLBox has some database specific code in different components, you normally would choose an Odbc or OleDb connector that fits to your database. But if your database is not fully supported yet, you can try to use the generic Odbc or OleDb connection manager. 
Make sure you reference the Odbc or OleDb connector package. 

Unfortunately, this connector will have some limitations.

- if you use DbDestination or DbSource with this connector, you would need to pass a TableDefinition object. This object basically holds the table name and column names, because they can't be automatically extracted from the database.
- most ControlFlow components won't work (e.g. IfTableExistsTask). But SqlTask will be likely to work with the generic connection manager
- if you use special characters in your table or columns names, you need to set the quotation begin / quotation end properties QB & QE that fit to your database (e.g. "[" and "]" for Sql Server or "`" for MySql)

E.g. you can use the generic OleDb connection manager to connect with Sql Server via OleDb

You will need an OleDb connection string,. 
```C#
var connString = @"Provider=MSOLEDBSQL;Server=10.211.55.2;Database=ETLBox_DataFlow;UID=sa;PWD=YourStrong@Passw0rd;"
OleDbConnectionManager conn = new OleDbConnectionManager(connString);
conn.QB = "["; conn.QE = "["; //not always needed, only for special characters
SqlTask.ExecuteNonQuery(conn, , "INSERT INTO...");
```

You can also use this connection manager with the DbSource or the DbDestination component. But please note that this will only work if you pass the TableDefinition manually, like this:

```C#
var cols = new List<TableColumn>() {
                new TableColumn("Col1", "INT", allowNulls: false),
                new TableColumn("Col2", "VARCHAR(100)", allowNulls: true)
};
_sourcedef = new TableDefinition("TestTable", cols);
DbSource<MySimpleRow> source = new DbSource<MySimpleRow>(conn)
 {
     SourceTableDefinition = _sourcedef
};
```

Same for DbDestination - the property name is `DestinationTableDefinition` there. 


## Connection management

### Connection pooling

The implementation of all connection managers is based on Microsoft ADO.NET and makes use of the underlying 
connection pooling. [Please see here for more details of connection pooling.](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/sql-server-connection-pooling)
This means that this actually can increase your performance, and in most scenarios you never have more 
connections open that you actually need for your application.

You don't need to explicitly open a connection. ETLBox will call the `Open()` method on a connection manager whenever
needed - where it relies on the underlying ADO.NET connection pooling that either creates a new connection 
or re-uses an existing one. Whenever the work of a component or task is done, the connection manager will return the connection back to 
the pool so that it can be reused by other components or tasks when needed.

Please note that the connection pooling only works for the same connection strings. For every connection string that differs there
is going to be a separate pool 

### Reusing connection managers 

By default, you can always reuse a connection manager as often as you like. ETLBox will always create a clone of the provided connection manager object, and in combination with the ADO.NET connection pooling it will be automatically decided if a new connection needs to be created or if an existing connection can be reused. 
You can modify this behaviour either by setting the `LeaveOpen` property to true or by starting a transaction. 

### LeaveOpen 

This behaviour - returning connections back to the pool when the work is done - does work very well in a scenario 
with concurrent tasks. There may be a use-case where you don't won't to query your database in parallel and you 
want to leave the connection open, avoiding the pooling.

For this scenario you can use the `LeaveOpen` property on the connection managers.

```C#
var sqlServerConn = 
    new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
sqlServerConn.LeaveOpen = true;
```

### Transactions 

Each connection manager allows you to begin, commit or rollback a transaction. Usage is quite simple 

```C#
SqlConnectionManager sqlServerConn = 
    new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");

sqlServerConn.BeginTransaction();
//Run some sql or start a data flow 
if (success)
  sqlServerConn.CommitTransaction();
else 
  sqlServerConn.RollbackTransaction();
```

`BeginTransaction` let you optionally define the isolation level of the transaction. Most databases are using an isolation level comparable to `Serializable` or `Snapshot` as the default level. If you define a different transaction level for a transaction, make sure that your database does support this level. 

If you are starting a transaction, the connection will stay open and connected with your database during the lifetime of the transaction.
When starting a Transaction, the property `LeaveOpen` will be set implicitly to true, indicating that a transaction has been started and the connection needs to stay alive until the connection is either commit or rolled back. When using a transaction, the connection can't be returned to the connection pool while the transaction is still alive. 

{{< alert text="If you are using the same connection manager for other operations, make sure that you want to have this operations part of your transaction. Keep in mind that components in a data flow are executed asynchronously, so you might need more than one connection manager for simultaneous database operations using transactions." >}}

#### Avoiding conflicts when using transactions

Here is a simple example where you want to use 2 connection managers: If you have a database table where you want to insert data within a transaction scope, while you want to read data from the same database, you will need two connection managers to avoid conflicts:

```C#
var sqlConnSource = new SqlConnectionManager("...");
var sqlConnDest = new SqlConnectionManager("...");

sqlConnDest.BeginTransaction();
var source = new DbSource(sqlConnSource,"Table1");
var dest = new DbDestination(sqlConnDest, "Table1Copy");
source.LinkTo(dest);
Network.Execute(source);
sqlConnDest.Commit();
```




