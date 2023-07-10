---
title: "Database destination"
description: "Examples and code recipes for the DbDestination component."
lead: "This article contains example code that shows the usage of the DbDestination component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
weight: 2102
toc: true
---

## Setup 

### Using a different database

The following examples are using SqlServer as destination database. In order to use SQLServer, we use the `SqlConnectionManager` in combination with a connection string for SQLServer. If you prefer to use a different database, simple replace the connection manager (and the connection string) with your database of choice. E.g. if you want to use Postgres, you can simply use the `PostgresConnectionManager` instead. 

### Shared method

Throughout the following, all code examples will use a method `PrintTable(..)` which prints the content of a table onto the console output. 

```C#
private void PrintTable(IConnectionManager connMan, string tableName) {
    var dest = new MemoryDestination();
    var source = new DbSource(connMan, tableName);
    source.LinkTo(dest);
    Network.Execute(source);
    foreach (IDictionary<string, object> row in dest.Data) {
        List<string> columns = new List<string>();
        foreach (var kvp in row)
            columns.Add(kvp.Key + ":" + kvp.Value);
        Console.WriteLine(string.Join(", ", columns));
    }
}
```

## Example with strongly typed objects

The following example shows a basic insert of strongly typed objects into a database table. The matching between column names and properties is based on name comparison - if both name match, the `DbInsert` will try to write the value into the column. 

The DbInsert will start inserted data as soon as all data has arrived or more data arrived than the defined `BatchSize`. It will then insert the batch using a bulk insert. 

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
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 3, Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyRow() { Id = 4, Value1 = "Test2", Value2 = 1.2 });
source.DataAsList.Add(new MyRow() { Id = 5, Value1 = "Test3", Value2 = 1.3 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleInsert");
var dest = new DbDestination<MyRow>(connMan, "ExampleInsert");

source.LinkTo(dest);
Network.Execute(source);

PrintTable(connMan, "ExampleInsert");
/* Output
Id:3, Value1:Test1, Value2:1.1
Id:4, Value1:Test2, Value2:1.2
Id:5, Value1:Test3, Value2:1.3
*/
```

### Insert with DbColumnMap

If the column names in your destination differ from your property names, you can use the `DbColumnMap` attribute to match them. Alternatively, if you don't want to use attribute, you can pass a collection of `DbColumnMap` objects to the `ColumnMapping` property of the `DbDestination`. 

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
        new TableColumn("idcol", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("valuecol1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: true)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource<MyRowWithCM>();
source.DataAsList.Add(new MyRowWithCM() { Id = 1, Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyRowWithCM() { Id = 2, Value1 = "Test2", Value2 = 1.2 });
source.DataAsList.Add(new MyRowWithCM() { Id = 3, Value1 = "Test3", Value2 = 1.3 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableDifferentColNames(connMan, "ExampleInsertColumnMap");
var dest = new DbDestination<MyRowWithCM>(connMan, "ExampleInsertColumnMap");

source.LinkTo(dest);
Network.Execute(source);

PrintTable(connMan, "ExampleInsertColumnMap");
/* Output
idcol:1, valuecol1:Test1, Value2:
idcol:2, valuecol1:Test2, Value2:
idcol:3, valuecol1:Test3, Value2:
*/
```

## Identity columns

{{< alert text="Not all databases support creating Identity columns, or overwriting them. Sometimes database name them differently, e.g. AUTO INCREMENT in MySql and SERIAL in Postgres.">}}

### Ignoring Identity column

If the destination table has an Identity column (or Auto-Increment for MySql or Serial in Postgres), you normally want to have your database generate the id column. If your input data has a property with the same name, the value in your property will be ignored. 

```C#
public class MyRowNoId
{
    public string Value1 { get; set; }
    public double Value2 { get; set; }
}

private void CreateTableWithIdentity(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls:false,
            isPrimaryKey:true, isIdentity:true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource<MyRowNoId>();
source.DataAsList.Add(new MyRowNoId() { Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyRowNoId() { Value1 = "Test2", Value2 = 1.2 });
source.DataAsList.Add(new MyRowNoId() { Value1 = "Test3", Value2 = 1.3 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableWithIdentity(connMan, "ExampleInsertIdentity");
var dest = new DbDestination<MyRowNoId>(connMan, "ExampleInsertIdentity");

source.LinkTo(dest);
Network.Execute(source);

PrintTable(connMan, "ExampleInsertIdentity");
/* Output
Id:1, Value1:Test1, Value2:1.1
Id:2, Value1:Test2, Value2:1.2
Id:3, Value1:Test3, Value2:1.3
*/
```

### Overwriting Identity column

Sometimes you might want to override the values in an Identity (Auto-Increment in MySql or Serial in Postgres) column with existing values. You can allow this behaviour by setting `AllowIdentityInsert = true`.

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public double Value2 { get; set; }
    public int Id { get; set; }
}

private void CreateTableWithIdentity(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls:false,
            isPrimaryKey:true, isIdentity:true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 2, Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyRow() { Id = 4, Value1 = "Test2", Value2 = 1.2 });
source.DataAsList.Add(new MyRow() { Id = 6, Value1 = "Test3", Value2 = 1.3 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableWithIdentity(connMan, "ExampleInsertOwnIdentity");
var dest = new DbDestination<MyRow>(connMan, "ExampleInsertOwnIdentity");
dest.AllowIdentityInsert = true;

source.LinkTo(dest);
Network.Execute(source);

PrintTable(connMan, "ExampleInsertOwnIdentity");
/* Output
Id:2, Value1:Test1, Value2:1.1
Id:4, Value1:Test2, Value2:1.2
Id:6, Value1:Test3, Value2:1.3
*/
```

## Using dynamic objects

Instead of strongly typed objects, you can also send a list of dynamic objects (`ExpandoObject`) to the `DbDestination`.

```C#
public dynamic CreateDynamicRow(int id, string value1, double value2) {
    dynamic result = new ExpandoObject();
    result.Id = id;
    result.Value1 = value1;
    result.Value2 = value2;
    return result;
}

private void CreateTableSameColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource();
source.DataAsList.Add(CreateDynamicRow(3, "Test1", 1.1));
source.DataAsList.Add(CreateDynamicRow(4, "Test2", 1.2));
source.DataAsList.Add(CreateDynamicRow(5, "Test3", 1.3));

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleInsertDynamic");
var dest = new DbDestination(connMan, "ExampleInsertDynamic");

source.LinkTo(dest);
Network.Execute(source);

PrintTable(connMan, "ExampleInsertDynamic");
/* Output
Id:3, Value1:Test1, Value2:1.1
Id:4, Value1:Test2, Value2:1.2
Id:5, Value1:Test3, Value2:1.3
*/
```

## Creating an enclosing transaction

Every connection managers supports to begin, end/commit or rollback a transaction. Even though the `DbDestination` will insert your data in batches, where each batch is either inserted completely or rejected, you can also create an enclosing transaction around your database insert. 

```C#
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 3, Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyRow() { Id = 4, Value1 = "Test2", Value2 = 1.2 });
source.DataAsList.Add(new MyRow() { Id = 5, Value1 = "Test3", Value2 = 1.3 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleInsertTransaction");

connMan.BeginTransaction();
var dest = new DbDestination<MyRow>(connMan, "ExampleInsertTransaction");
dest.BatchSize = 2;
source.LinkTo(dest);
Network.Execute(source);
connMan.RollbackTransaction();

int rows = RowCountTask.Count(connMan, "ExampleInsertTransaction");
Console.WriteLine($"Table contains {rows} records.");

/* Output
Table contains 0 records.
*/
```

## Redirect flawed batches

Sometimes, you don't want your data flow to fail because a single records is flawed. ETLBox allows you to redirect flawed rows or batches into a different part of your data flow. For the `DbDestination` you can use the `LinkErrorTo` method to redirect a batch which could not be inserted due to an error in the data of that batch. Unfortunately, this will not insert the whole batch - you still need to determine which record cause the issue (by examining the `RecordsAsJson` property). Alternatively, you can reduce your used BatchSize to a smaller number, but this will have a great impact on your performance. 

```C#
public class MyErrorRow
{
    public string Value1 { get; set; }
    public double Value2 { get; set; }
    public string Id { get; set; }
}

private void CreateTableSameColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
}        

var source = new MemorySource<MyErrorRow>();
source.DataAsList.Add(new MyErrorRow() { Id = "3", Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyErrorRow() { Id = "X", Value1 = "Test2", Value2 = 1.2 });
source.DataAsList.Add(new MyErrorRow() { Id = "5", Value1 = "Test3", Value2 = 1.3 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleInsertError");

var dest = new DbDestination<MyErrorRow>(connMan, "ExampleInsertError");
dest.BatchSize = 2;
var errorDest = new MemoryDestination<ETLBoxError>();

source.LinkTo(dest);
dest.LinkErrorTo(errorDest);
Network.Execute(source);

PrintTable(connMan, "ExampleInsertError");
foreach (var error in errorDest.Data)
    Console.WriteLine($"Error record found:" + error.ErrorText);

/* Output
Id:5, Value1:Test3, Value2:1.3
Error record found:The given value 'X' of type String from the data source 
cannot be converted to type int for Column 0 [Id].
*/
```

## Transforming data within the component

### Using column converters before inserting data

When using data flow transformations in a data flow, these transformation will run in a separate asynchronous task that might execute at the wrong point in time. If you want to transform data right before your write it into the database (and on the same task as the BulkInsert), you can use `ColumnConverters` for an arbitrary set of columns.

```C#
public dynamic CreateDynamicRow(int id, string value1, double value2) {
    dynamic result = new ExpandoObject();
    result.Id = id;
    result.Value1 = value1;
    result.Value2 = value2;
    return result;
}

private void CreateTableDifferentColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("idcol", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("valuecol1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: true)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource();
source.DataAsList.Add(CreateDynamicRow(1, "Test1", 1.1));
source.DataAsList.Add(CreateDynamicRow(2, "Test2", 1.2));
source.DataAsList.Add(CreateDynamicRow(3, "Test3", 1.3));

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableDifferentColNames(connMan, "ExampleInsertColumnConverters");
var dest = new DbDestination(connMan, "ExampleInsertColumnConverters");
dest.ColumnMapping = new[] {
    new DbColumnMap() { DbColumnName = "idcol", PropertyName ="Id"},
    new DbColumnMap() { DbColumnName = "valuecol1", PropertyName ="Value1"}
};
dest.ColumnConverters = new[] {
    new ColumnConverter() {
        ColumnName = "valuecol1",
        ConversionFunc = (colData) => "X" + (string)colData
    },
    new ColumnConverter() {
        ColumnName = "Value2",
        ConversionFunc = (colData) => Convert.ToDecimal(colData) * 3
    }
};
source.LinkTo(dest);
Network.Execute(source);

PrintTable(connMan, "ExampleInsertColumnConverters");
/* Output
idcol:1, valuecol1:XTest1, Value2:3.3
idcol:2, valuecol1:XTest2, Value2:3.6
idcol:3, valuecol1:XTest3, Value2:3.9
*/
```

### Before and after batch write

The `DbDestination` offer the `BeforeBatchWrite` and `AfterBatchWrite` functions to modify a batch right before or after insertion. 

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
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 3, Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyRow() { Id = 4, Value1 = "Test2", Value2 = 1.2 });
source.DataAsList.Add(new MyRow() { Id = 5, Value1 = "Test3", Value2 = 1.3 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleInsertAfterBatch");
var dest = new DbDestination<MyRow>(connMan, "ExampleInsertAfterBatch");
dest.BeforeBatchWrite =
    batch => {
        foreach (var row in batch)
            row.Value1 = "X" + row.Value1;
        var newBatch = batch.ToList();
        newBatch.RemoveAt(1);
        return newBatch.ToArray(); ;
    };
dest.AfterBatchWrite =
    batch => Console.WriteLine("Elements in batch:" + batch.Count());
source.LinkTo(dest);
Network.Execute(source);

PrintTable(connMan, "ExampleInsertAfterBatch");
/* Output
Elements in batch:2
Id:3, Value1:XTest1, Value2:1.1
Id:5, Value1:XTest3, Value2:1.3
*/
```

## Bulk operations

### Bulk update

The `DbDestination` by default only inserts data into the destination. But you can also set the operation mode to `BulkUpdate`. Now you need to define an `IdColumn` (either as attribute or by passing a collection to the `IdColumns` property) which tells the DbDestination which properties and matching columns to use to identify the records that qualify for an update. The `UpdateColumn` attribute (or a collection passed into the `UpdateColumns` property) defines which columns should be updated. 

The final update operation will then be executed as a batch, which will significantly improve your performance compared to single updates. 

```C#
public class MyBulkUpdateRow
{
    [UpdateColumn]
    public string Value1 { get; set; }
    [UpdateColumn]
    public double Value2 { get; set; }
    [IdColumn]
    public int Id { get; set; }
}

private void CreateTableSameColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource<MyBulkUpdateRow>();
source.DataAsList.Add(new MyBulkUpdateRow() { Id = 3, Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyBulkUpdateRow() { Id = 4, Value1 = "Test2", Value2 = 1.2 });
source.DataAsList.Add(new MyBulkUpdateRow() { Id = 5, Value1 = "Test3", Value2 = 1.3 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleBulkUpdate");

SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkUpdate VALUES(3, 'X', '')");
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkUpdate VALUES(4, NULL, '0')");
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkUpdate VALUES(5, 'Test3', '1.3')");

Console.WriteLine("Table content before bulk update:");
PrintTable(connMan, "ExampleBulkUpdate");

DbDestination<MyBulkUpdateRow> dest = new DbDestination<MyBulkUpdateRow>(connMan, "ExampleBulkUpdate");
dest.BulkOperation = BulkOperation.Update;

source.LinkTo(dest);
Network.Execute(source);

Console.WriteLine("Table content after bulk update:");
PrintTable(connMan, "ExampleBulkUpdate");

/* Output
Table content before bulk update:
Id:3, Value1:X, Value2:
Id:4, Value1:, Value2:0
Id:5, Value1:Test3, Value2:1.3
Table content after bulk update:
Id:3, Value1:Test1, Value2:1.1
Id:4, Value1:Test2, Value2:1.2
Id:5, Value1:Test3, Value2:1.3
*/
```

### Bulk delete

The `DbDestination`  also offers the operation mode `BulkDelete`. If you define an `IdColumn` (either as attribute or by passing a collection to the `IdColumns` property), the `DbDestination` will bulk delete all records which matches with the id of the incoming data. No insert operation is performed then.

```C#
public class MyBulkDeleteRow
{
    public string Value1 { get; set; }
    public double Value2 { get; set; }
    [IdColumn]
    public int Id { get; set; }
}

private void CreateTableSameColNames(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
}

var source = new MemorySource<MyBulkDeleteRow>();
source.DataAsList.Add(new MyBulkDeleteRow() { Id = 3, Value1 = "Test1", Value2 = 1.1 });
source.DataAsList.Add(new MyBulkDeleteRow() { Id = 4, Value1 = "Test2", Value2 = 1.2 });

var connMan = new SqlConnectionManager(ConnectionString);
CreateTableSameColNames(connMan, "ExampleBulkDelete");

SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkDelete VALUES(1, 'A', '1')");
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkDelete VALUES(2, 'B', '2')");
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkDelete VALUES(3, 'X', '3')");
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkDelete VALUES(4, NULL, '4')");
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkDelete VALUES(5, 'C', '5')");

Console.WriteLine("Table content before bulk delete:");
PrintTable(connMan, "ExampleBulkDelete");

DbDestination<MyBulkDeleteRow> dest = new DbDestination<MyBulkDeleteRow>(connMan, "ExampleBulkDelete");
dest.BulkOperation = BulkOperation.Delete;

source.LinkTo(dest);
Network.Execute(source);

Console.WriteLine("Table content after bulk delete:");
PrintTable(connMan, "ExampleBulkDelete");

/* Output
Table content before bulk delete:
Id:1, Value1:A, Value2:1
Id:2, Value1:B, Value2:2
Id:3, Value1:X, Value2:3
Id:4, Value1:, Value2:4
Id:5, Value1:C, Value2:5
Table content after bulk delete:
Id:1, Value1:A, Value2:1
Id:2, Value1:B, Value2:2
Id:5, Value1:C, Value2:5
*/
```