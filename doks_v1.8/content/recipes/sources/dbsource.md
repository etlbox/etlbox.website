---
title: "Database Source"
description: "Examples and code recipes for the DbSource component."
lead: "This article contains example code that shows the usage of the DbSource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
weight: 45
toc: true
---

The database source can be used to read data from a table, view, function or stored procedure from supported databases and post it into your data flow.

The following examples are using SqlServer as destination database. In order to use SQLServer, we use the `SqlConnectionManager` in combination with a connection string for SQLServer. If you prefer to use a different database, simple replace the connection manager (and the connection string) with your database of choice. E.g. if you want to use Postgres, you can simply use the `PostgresConnectionManager` instead.

## From table with typed object

This basic examples shows how to read all data from a table or view with a typed object.

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public double Value2 { get; set; }
    public int Id { get; set; }
}

private void CreateTableSameColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1', '1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2', '1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3', '1.3')");
}

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleRead");
var source = new DbSource<MyRow>();
source.ConnectionManager = connMan;
source.TableName = "ExampleRead";
var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received - Id {row.Id} (Value1: {row.Value1} Value2: {row.Value2})");

/* Output
Received - Id 1 (Value1: Test1 Value2: 1.1)
Received - Id 2 (Value1: Test2 Value2: 1.2)
Received - Id 3 (Value1: Test3 Value2: 1.3)
  */
```

### Using DbColumnMap attributes

The following example demonstrates how the `DbColumnMap` attribute can be used to map database column with different name to properties.

```C#
public class MyRowWithCM
{
    [DbColumnMap("valuecol1")]
    public string Value1 { get; set; }
    [DbColumnMap(IgnoreColumn = true)]
    public double? Value2 { get; set; }
    [DbColumnMap("idcol")]
    public int Id { get; set; }
}

private void CreateTableDifferentColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("idcol", "INT", allowNulls: false),
        new TableColumn("valuecol1", "VARCHAR(100)", allowNulls: true),
          new TableColumn("Value2", "VARCHAR(10)", allowNulls: true)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1','1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2','1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3','1.3')");
}

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableDifferentColNames(connMan, "ExampleReadCM");
var source = new DbSource<MyRowWithCM>(connMan, "ExampleReadCM");
var dest = new MemoryDestination<MyRowWithCM>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received - Id {row.Id} (Value1: {row.Value1} Value2: {row.Value2} )");

/* Output
Received - Id 1 (Value1: Test1 Value2: )
Received - Id 2 (Value1: Test2 Value2: )
Received - Id 3 (Value1: Test3 Value2: )
  */
```

## From table into dynamic object

This example shows how to use the dynamic `ExpandoObject` when reading from a database table or view.

```C#
private void CreateTableDifferentColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("idcol", "INT", allowNulls: false),
        new TableColumn("valuecol1", "VARCHAR(100)", allowNulls: true),
          new TableColumn("Value2", "VARCHAR(10)", allowNulls: true)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1','1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2','1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3','1.3')");
}

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableDifferentColNames(connMan, "ExampleReadDynamic");
var source = new DbSource(connMan, "ExampleReadDynamic");
var dest = new MemoryDestination();

source.ColumnMapping = new[] {
    new DbColumnMap(){ PropertyName = "Id", DbColumnName = "idcol"},
    new DbColumnMap(){ PropertyName = "valuecol1", IgnoreColumn = true},
};

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received - Id {row.Id} (Value2: {row.Value2})");

/* Output
Received - Id 1 (Value2: 1.1)
Received - Id 2 (Value2: 1.2)
Received - Id 3 (Value2: 1.3)
  */
```

## Using custom sql

This example show how to read from a table using custom sql - this could be everything that return a result set.
This will work with either a typed or a dynamic object.

```C#
private void CreateTableSameColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1', '1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2', '1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3', '1.3')");
}

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleReadSql");
var source = new DbSource(connMan, "ExampleReadSql");
var dest = new MemoryDestination();

source.SqlParameter = new[] {
    new QueryParameter() { Name ="par", Value=3}
};
source.Sql = @"
    SELECT 'C' AS Fixed,
    Value1 AS Val1,
    CONVERT(DECIMAL(12,2), Value2) * @par AS Calc
    FROM ExampleReadSql";

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received: {row.Fixed} - {row.Val1} - {row.Calc}");

/* Output
Received: C - Test1 - 3.30
Received: C - Test2 - 3.60
Received: C - Test3 - 3.90
  */
```

### Providing TableDefinition

By default, the `DbSource` tries to auto detect the columns name of a table or query. Sometimes, this mechanism is not sufficient (e.g. when using the * without providing a table name or when joining tables)
In this cases, you can provide your own `TableDefinition` which is used to determine the names and data types of the returned columns of the query.

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public double Value2 { get; set; }
    public int Id { get; set; }
}

private void CreateTableDifferentColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("idcol", "INT", allowNulls: false),
        new TableColumn("valuecol1", "VARCHAR(100)", allowNulls: true),
          new TableColumn("Value2", "VARCHAR(10)", allowNulls: true)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1','1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2','1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3','1.3')");
}

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableDifferentColNames(connMan, "ExampleReadTableDef");
var source = new DbSource<MyRow>(connMan);

//When providing your own TableDefinition, the provided column names (in the exact same order)
//and their derived .NET datatype will always be used, regardless of the columns in the actual table
source.TableDefinition = new TableDefinition("ExampleReadTableDef",
    new List<TableColumn>() {
        new TableColumn() { Name = "Id", DataType ="BIGINT"},
        new TableColumn() { Name = "Value1", DataType ="VARCHAR(200)"},
        new TableColumn() { Name = "Value2", DataType ="VARCHAR(200)"}
    });
//We can now do a SELECT * , as we provided the table definition above
source.Sql = "SELECT * FROM ExampleReadTableDef";
var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received - Id {row.Id} (Value1: {row.Value1} Value2: {row.Value2} )");

/* Output
Received - Id 1 (Value1: Test1 Value2: 1.1 )
Received - Id 2 (Value1: Test2 Value2: 1.2 )
Received - Id 3 (Value1: Test3 Value2: 1.3 )
  */
```

### Reading from a Stored Procedure

This example code does the following:
- It creates a demo table containing 10 records
- It creates a procedure, that accepts two parameter and returns 2 result sets. The parameter define how many rows are returned for each result set (should be less than 10 to have an effect)
- Now we can use the Sql property in the DbSource to run the Store Procedure - in this example, we also use Sql parameters to set the parameters of the SP
- Unfortunately, ETLBox can't retrieve the column names automatically from the source table. There are two options here: Either provide the TableDefinition manuelly (by creating a new TableDefinition object) or by using the TableDefinition.FromProcedureName method (will work only on SqlServer)
- The network is now executed
- The first result set of the SP is processed - other result sets will be ignored

```C#
var SqlConnection = new SqlConnectionManager(ConnectionString);
//Create a demo table containing 10 records
string tableName = "ProcSourceTable";
DropTableTask.DropIfExists(SqlConnection, tableName);
var td = new TableDefinition(tableName
    , new List<TableColumn>() {
        new TableColumn("Col1", "INT", allowNulls: false),
        new TableColumn("Col2", "VARCHAR(100)", allowNulls: true)
});
td.CreateTable(SqlConnection);
for (int i = 1; i <= 10; i++) {
    SqlTask.ExecuteNonQuery(SqlConnection, $"INSERT INTO {tableName} VALUES({i},'Test{i}')");
}

//Now we create a procudure, that accepts two parameter and returns 2 result sets.
//The parameter define how many rows are returned for each result set (should be less than 10 to have an effect)
var proc = new ProcedureDefinition() {
    Name = "TestProcedureWithParameter",
    Parameter = new[] {
        new ProcedureParameter("MaxRecordsSet1", "INT"),
        new ProcedureParameter("MaxRecordsSet2", "INT"),
    },
    Definition = @$"
SELECT Col1, Col2 FROM [ProcSourceTable] WHERE Col1 <= @MaxRecordsSet1;
SELECT Col1+100, Col2+'_2' FROM [ProcSourceTable] WHERE Col1 <= @MaxRecordsSet2;
"
};
CreateProcedureTask.CreateOrAlter(SqlConnection, proc);

//Now we can use the Sql property in the DbSource to run the Store Procedure
//In this example, we also use Sql parameters to set the parameters of the SP
string sql = $@"EXEC [TestProcedureWithParameter] @MaxRecordsSet1=@max1, @MaxRecordsSet2=@max2";
DbSource source = new DbSource() {
    Sql = sql,
    ConnectionManager = SqlConnection,
    SqlParameter = new[] {
            new QueryParameter("max1", "INT", 4),
            new QueryParameter("max2", "INT", 6)
        }
};
//Unfortunately, ETLBox can't retrieve the column names automatically from the source table.
//There are two options here: Either provide the TableDefinition manuelly (by creating a new TableDefinition object)
//or by using the `TableDefinition.FromProcedureName` method (will work only on SqlServer)
bool readTableDefinitionWithSql = true; //=false;
if (readTableDefinitionWithSql)
    source.TableDefinition = TableDefinition.FromProcedureName(SqlConnection, "TestProcedureWithParameter");
else {
    source.TableDefinition = new TableDefinition() {
        Columns = new[] {
new TableColumn() { Name ="Col1", DataType = "INT"},
new TableColumn() { Name ="Col2", DataType = "VARCHAR(100)"},
}
    };
}
var dest = new MemoryDestination();

//Now we can run the network
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received - Col1: {row.Col1}, Col2: {row.Col2}");

//Output
/*
Received - Col1: 1, Col2: Test1
Received - Col1: 2, Col2: Test2
Received - Col1: 3, Col2: Test3
Received - Col1: 4, Col2: Test4
*/
```

## Synchronous transformation with ColumnConverters

When using data flow transformations in a data flow, these transformation will run in a separate asynchronous task that might execute at the wrong point in time. If you want to transform data that you read from your table right after reading and in the same task, you can use `ColumnConverters` for particular columns.

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public double Value2 { get; set; }
    public int Id { get; set; }
}

private void CreateTableSameColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1', '1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2', '1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3', '1.3')");
}

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleReadColumnConverter");
var source = new DbSource<MyRow>(connMan, "ExampleReadColumnConverter");

source.ColumnConverters = new[] {
    new ColumnConverter() {
        ColumnName = "Value1",
        ConversionFunc = (colData) => "X" + (string)colData
    },
    new ColumnConverter() {
        ColumnName = "Value2",
        ConversionFunc = (colData) => Convert.ToDecimal(colData) * 3
    }
};

var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received - Id {row.Id} (Value1: {row.Value1} Value2: {row.Value2} )");

/* Output
Received - Id 1 (Value1: XTest1 Value2: 3.3 )
Received - Id 2 (Value1: XTest2 Value2: 3.6 )
Received - Id 3 (Value1: XTest3 Value2: 3.9 )
```

## Filtering with BulkSelect

The `DbSource` offers an object oriented way to filter a database table by  particular properties of an object.
The bulk select mode requires you to define at least one id column (`IdColumn`), one or more select columns (`SelectColumn`) and rows that define the values for filtering (`FilterRows`).
Most of the times you will achieve a simpler solution by using custom sql with a where clause or joins, but in some scenarios this approach has some advantages.

```C#
public class MyBulkSelectRow
{
    [IdColumn]
    [SelectColumn]
    public int Id { get; set; }
    [SelectColumn]
    public string Value1 { get; set; }

    public string Value2 { get; set; }
}

private void CreateTableSameColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1', '1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2', '1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3', '1.3')");
}

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleReadColumnConverter");
var source = new DbSource<MyBulkSelectRow>(connMan, "ExampleReadColumnConverter");
source.SelectMode = SelectOperation.BulkSelect;
source.BulkSelectBatchSize = 2;
source.FilterRows = new[] {
    new MyBulkSelectRow { Id = 2},
    new MyBulkSelectRow { Id = 3}
};

var dest = new MemoryDestination<MyBulkSelectRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received - Id {row.Id} (Value1: {row.Value1} Value2: {row.Value2} )");

/* Output
Received - Id 2 (Value1: Test2 Value2:  )
Received - Id 3 (Value1: Test3 Value2:  )
*/
```
