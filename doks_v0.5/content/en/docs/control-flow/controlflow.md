---
title: "Control flow tasks"
description: "All ControlFlow task in detail"
lead: "ETLBox comes with a fair set of ControlFlow Tasks that allow you to most common task on a relational database. This will give you an overview of these tasks."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 920
toc: true
---

## Create, Drop and IfExists tasks

There are a lot of tasks that can help you to create, drop or check the existence of database objects. 
In the following there will be example how to create tables, views, procedures, indexes or databases, how to drop them and
how to check for their existence.

### Tables

#### CreateTables Task

CreateTableTask will help you to create a table on the database. You can pass either a `TableDefinition` object
or a table name and a list of table columns.

Here is an example with passing the table name and a list of table columns

```C#
List<TableColumn> columns = new List<TableColumn>() {
    new TableColumn("Id", "INT",allowNulls:false,isPrimaryKey:true, isIdentity: true),
    new TableColumn("value2", "DATE", allowNulls:true),
    new TableColumn("value3", "DECIMAL(10,2)",allowNulls:false) { DefaultValue = "3.12" },
    new TableColumn("compValue", "BIGINT",allowNulls:true) { ComputedColumn = "(value1 * value2)" }
};            
           
CreateTableTask.Create(connectionManager, "tablename", columns);
```

A table column describe the column in the database with the most used attributes: Name, Data type (use the data type
which you are most familiar with, there will be an attempt to convert the database type into the right database specific format),
if the column is nullable, if the column is a primary key and if the column is used as identity column. (Serial for Postgres or
auto increment for MySql). Additionally, you could specify if the column is a computed column or if it has a default value. 

Here is an example for creating a `TableDefinition` and pass it to the CreateTableTask:

```C#
TableDefinition CustomerTableDef = new TableDefinition("customer",
    new List<TableColumn>() {
        new TableColumn("CustomerKey", "int",allowNulls: false, isPrimaryKey:true, isIdentity:true),
        new TableColumn("Name","nvarchar(200)", allowNulls: false),
    });
CreateTableTask.Create(connectionManager, CustomerTableDef);
```

*Implicit data type conversions*:

CreateTableTask will automatically try to convert the given data type into a type that your database actually understands. E.g., if you pass "DATETIME" as data type for a column, and you want to create your table on a Postgres connection manager, CreateTableTask will automatically convert "DATETIME" into "TIMESTAMP". 

*Adding your own data type conversion*

If you need to change the default data type conversion, you can overwrite it with your  implementation. To achieve this, you 
need to pass an object that implements IDataTypeConverter. The interface has one method: `TryConvertDbDataType` and 2 parameter. `dbSpecificTypeName` is the name that you define in your TableColumn, and connection type defines the connection manager type (e.g. SqlServer or Oracle).
The return value is the converted data type. 
Here is an example implementation:

```C
public class MyDataTypeConverter : IDataTypeConverter
{
   public string TryConvertDbDataType(string dbSpecificTypeName, ConnectionType connectionType)
  {
     if (dbSpecificTypeName == "ABC")
       return "DATETIME";
     else
       return DataTypeConverter.TryGetDbSpecificType(dbSpecificTypeName, connectionType);
  }
}
List<TableColumn> columns = new List<TableColumn>() {
  new TableColumn("somedate", "ABC"),
  new TableColumn("sometext", "TEXT")
};

var ctt = new CreateTableTask("CreateTableIDataTypeConverter", columns)
{
   ConnectionManager = SqlConnection,
   DataTypeConverter = new MyDataTypeConverter()
};
ctt.Create();
```

#### DropTableTask

This task simple drops a table (and optionally checks if the table exists):
```C#
DropTableTask.Drop(connectionManager, "DropTableTest");
DropTableTask.DropIfExists(connectionManager, "DropTableTest");
```

#### IfExistsTableOrViewTask

This task checks if a table or view exists and returns true or false.

```C#
bool exists = IfTableOrViewExistsTask.IsExisting(connectionManager, "tablename");
```

### Table Definition

If you are interesting in retrieving a TableDefinition object from an existing database table, use can use 
the static method `FromTableName` on the `TableDefinition` class:

```C#
TableDefinition.FromTableName(connectionManager, "demoTable");
```

### Views

#### CreateViewTask

Creates a view on the database. If the view already exists, it will alter (or replace) the existing view.

```C#
 CreateViewTask.CreateOrAlter(connectionManager, "View1", "SELECT 1 AS Test");
```

#### DropViewTask

Drops a view (and optionally checks if the view exists).

```C#
DropViewTask.Drop(connectionManager, "viewname");
DropViewTask.DropIfExists(connectionManager, "viewname");
```

### Indexes

Similar to views and tables, you can (re)create, drop or check the existence as well on indexes.

```C#
//Create an index
CreateIndexTask.CreateOrRecreate(connection, "indexname", "tablename",
    new List<string>() { "index_column_1", "index_column_1" });

//Drop an index
DropIndexTask.DropIfExists(connectionManager, "indexname", "tablename");

//Check if an index exists
bool exists = IfIndexExistsTask.IsExisting(connectionManager, "indexname", "tablename");
```

### Procedures

```C#
//Create a procedure
List<ProcedureParameter> pars = new List<ProcedureParameter>() {
    new ProcedureParameter("Par1", "VARCHAR(10)"),
    new ProcedureParameter("Par2", "INT", "7"),
};
CreateProcedureTask.CreateOrAlter(connectionManager, "ProcedureName", "SELECT 1;", pars);

//Drop a procedure
DropProcedureTask.DropIfExists(connectionManager, "ProcedureName");

//Check if a procedure exists
bool exists = IfProcedureExistsTask.IsExisting(connectionManager, "ProcedureName");
```

### Schema

Schema are only available for Sql Server and Postgres databases. For MySql, use Create/Drop/Exists Database instead. 

```C#
//Create a schema
CreateSchemaTask.CreateOrAlter(connectionManager, "SchemaName");

//Drop a schema
DropSchemaTask.DropIfExists(connectionManager, "SchemaName");

//Check if a schema exists
bool exists = IfSchemaExistsTask.IsExisting(connectionManager, "SchemaName");
```

### Databases

This is not supported with SQLite. 

```C#
//Create a database
CreateDatabaseTask.CreateOrAlter(connectionManager, "DBName");

//Drop a database
DropDatabaseTask.DropIfExists(connectionManager, "DBName");

//Check if a database exists
bool exists = IfDatabaseExistsTask.IsExisting(connectionManager, "DBName");
```

#### Retrieving the connection without catalog or database

In some cases, you might want to get a connection string without a catalog, e.g. because you need to create the database first.
This is where you could use the ConnectionString-Wrapper for you database. E.g., for Postgres you could run the following code:

```C#
PostgresConnectionString conStringWrapper = new PostgresConnectionString("Server=10.37.128.2;Database=ETLBox_DataFlow;User Id=postgres;Password=etlboxpassword;");
PostgresConnectionString connectionWithoutCatalog = conStringWrapper.GetMasterConnection();
PostgresConnectionManager connectionManager = new PostgresConnectionManager(connectionWithoutCatalog);
```

Your connection manager would now connect to the "postgres" database (which would be the "master" database in Sql Server and "mysql" database
in MySql).

## RowCount

You can count rows in a table using the `RowCountTask`. 

Here an example for a simple count:

```C#
SqlConnectionManager connectionManager = new SqlConnectionManager("Data Source=.; Database=Sample; Integrated Security=SSPI"");
int count = RowCountTask.Count(connectionManager, "demotable");
```

You can optionally add a condition for the count: 

```C#
int count = RowCountTask.Count(connectionManager, "demotable", "Co1 >= 3 AND Col2 == 'Test'");
```

## Truncate a table

Truncating a table is as simple as

```C#
TruncateTableTask.Truncate(connectionManager, "demo.table1");
```

## SqlTask

This is the swiss-army knife for running sql on your database. It will use the underlying ADO.NET connection manager, 
which allows you to do almost everything on the database, without the "overhead" and boilerplate code that ADO.NET brings with it. 

SqlTask always expects a descriptive name when you use it - this name is used for logging purposes. 

```C#
SqlTask.ExecuteNonQuery(connectionManager, 
    $@"insert into demo.table1 (value) select * from (values ('Text'), ('More text')) as data(v)");
```

ExecuteNonQuery will just execute the sql code without reading any results from the database. 

### Using parameters

You can pass parameterized sql code to have the database reuse existing plans in the cache. 

```C#
var parameter = new List<QueryParameter>
{
    new QueryParameter("value1", "INT", 1),
    new QueryParameter("value2", "NVARCHAR(100)", "Test1")
};
SqlTask.ExecuteNonQuery(connectionManager, 
    $"INSERT INTO ParameterTest VALUES (@value1, @value2)", parameter);
```

### Reading result sets

#### Scalar values

If you result set contains only one row with one column, you can use the `ExecuteScalar` methods to retrieve that value.

```C#
//without type conversion
object result = SqlTask.ExecuteScalar(connectionManager, 
    $@"SELECT 'Hallo Welt' AS ScalarResult");

//with type conversion
double? result = SqlTask.ExecuteScalar<double>(connectionManager,
    $@"SELECT CAST(1.343 AS NUMERIC(4,3)) AS ScalarResult"));
```

#### Result sets

Use the following code to read a result set from your database and store it in a List object.
The table to read from would have two columns (ColumnA and ColumnB), and the object `MyRow` would have two properties (Col1 and Col2).

```C#
List<MyRow> result = new List<MyRow>();
MyRow CurRow = new MyRow();

SqlTask.ExecuteReader(connectionManager,
    "Test execute reader",
    $"SELECT ColumnA, ColumnB FROM ResultTable"
    , () => CurRow = new MyRow()                    //this is executed before each row
    , () => result.Add(CurRow)                      //this is execute after each row
    , colA => CurRow.Col1 = int.Parse(colA.ToString())
    , colB => CurRow.Col2 = (string)colB
    );
```


### Bulk Inserts

Bulk inserts in ADO.NET normally need an object which implement `IDataReader`. Normally, you use a `DataTable` for this purpose.
But as the implementation of the ADO.NET DataTable has a large overhead and comes with some performance downside, ETLBox
provides it's own object that implements IDataReader: `TableData` can be used to be passed to a bulk insert operation.

Here is an example for a bulk insert:

```C#
TableData<string[]> data = new TableData<string[]>(destTable.TableDefinition);
string[] values = { "1", "Test1" };
data.Rows.Add(values);
string[] values2 = { "2", "Test2" };
data.Rows.Add(values2);
string[] values3 = { "3", "Test3" };
data.Rows.Add(values3);

//Act
SqlTask.BulkInsert(connection, "Bulk insert demo data", data, "TableName");
```

### Bulk deletes

You can use the `BulkDelete` method exposed on the `SqlTask` to perform a batch delete on the database. 
It allows you to delete data from a table by passing a `TableData` object which contains the columns names and the values of each column which you would like to delete.
The `SqlTask` will then exceute a single `DELETE` statement on your database that removes all matching records in one execution.
 
Here is an example:

```Sql
CREATE TABLE BulkDeleteTable(
  Id INT NOT NULL,
  Value1 VARCHAR(100) NULL;
  Value2 VARCHAR(100) NULL
)
INSERT INTO dest (Id,Value1,Value2) VALUES (1, 'A', 'Test1');
INSERT INTO dest (Id,Value1,Value2) VALUES (2, 'B' , 'Test2');
INSERT INTO dest (Id,Value1,Value2) VALUES (3, 'C', 'Test3');
INSERT INTO dest (Id,Value1,Value2) VALUES (4, 'D', 'Test4');
```

```C#
TableData data = new TableData(new TableDefinition() {
    Name = "BulkDeleteTable",
    Columns = new List<TableColumn>() {
                    new TableColumn() { Name = "Id"},
                    new TableColumn() { Name = "Value1"}
    }
});

var row1 = new object[] { 1, "A" };
var row2 = new object[] { 2, "B" };
var row2 = new object[] { 4, "X" }; //no match!
data.Rows.Add(row1);
data.Rows.Add(row2);

SqlTask.BulkDelete(SqlConnection, data);
```

This will delete the first two rows (with Id 1 and 2), because the value in the columns 'Id' and 'Value1' matched with the provided data.