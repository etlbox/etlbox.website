---
chatgpt-review: true
title: "Database Type Check"
description: "Ensuring Type Consistency in Incoming Rows"
lead: "The DbTypeCheck is a component designed to check the type consistency of all properties of incoming records against their corresponding columns in an existing database table. This ensures that data being processed matches the expected types in the database, helping maintain data integrity and prevent errors during data flow operations."
draft: false
images: []
menu:
  docs:
    parent: "db-connectors"
weight: 360
toc: true
---


## Features

DbTypeCheck will check incoming rows to ensure their compatibility with the data types of corresponding columns in a designated table.  By supplying a `TableName` and a `ConnectionManager`, the component automatically retrieves a `TableDefinition` from the source. Additionally, `ColumnMapping`, akin to that used in `DbDestination`, can be provided. DbTypeCheck verifies if each property's data type and value in the incoming row match the mapped column. 

Designed as a transformation component, DbTypeCheck has two outputs. The primary output, utilized through `LinkTo`, redirects all rows that pass the type check. Flawed rows are redirected to other components using the `LinkFlawedTo` method. The type check's behavior can be tailored through various properties of the component.

### Usage Example

```C#
public class MyDataTypeRow
{
    [DbColumnMap("IntCol")]
    public Int32? SomeInt { get; set; }

    [DbColumnMap("StringCol")]
    public string SomeString { get; set; }
}

DbTypeCheck<MyDataTypeRow> check = new DbTypeCheck<MyDataTypeRow>();
check.ConnectionManager = SqlConnection;
check.TableName = "destination_table";
DbDestination<MyDataTypeRow> dest = new DbDestination<MyDataTypeRow>(connection, tableName);
MemoryDestination<MyDataTypeRow> flawedRowsDest = new MemoryDestination<MyDataTypeRow>();

source.LinkTo(check);
check.LinkTo(dest);
check.LinkFlawedTo(flawedRowsDest);
```

### Provide Your Own Table Definition

By default, DbTypeCheck retrieves the table definition from the database using the specified `TableName` and `ConnectionManager`. However, you can specify your own table definition, particularly useful when only specific columns need validation. For instance, you might use `TableDefinition.FromTableName` to obtain the complete table definition from an existing table and then modify it as required.

### Flawed Record Handling

Records that align with the table's schema are redirected using the standard `LinkTo(..)` method. Flawed records can be rerouted using the `LinkFlawedTo(IDataFlowDestination<TInput>)` method. Omitting `LinkFlawedTo(..)` causes flawed records to throw an exception, potentially halting the data flow upon encountering a flawed record. Alternatively, using the default `LinkErrorTo(..)` method allows records that trigger exceptions to be rerouted as `ETLBoxError` into an error data flow.

### Column Mapping

Column mapping in DbTypeCheck mirrors the approach used in `DbDestination`. It is advisable to use the same column mapping for DbTypeCheck as in your `DbDestination`. The mapping can be defined either through attributes on a POCO (as in the earlier example) or by passing an array to the `ColumnMapping` attribute for dynamic objects.

```C#
var check = new DbTypeCheck(SqlConnection, tableName);
var dest = new DbDestination(SqlConnection, tableName);
var colMap = new[] {
    new DbColumnMap() { DbColumnName = "IntCol", PropertyName ="SomeInt"},
    new DbColumnMap() { DbColumnName = "StringCol", PropertyName ="SomeString"},
};
dest.ColumnMapping = colMap;
check.ColumnMapping = dest.ColumnMapping;
```

## Additional Configuration

### Include Identity Columns

If you aim to overwrite existing identity columns (a.k.a auto-increment or serial columns) in your target table, DbTypeCheck allows you to include identity columns in your type check.

```C#
var check = new DbTypeCheck<MyRow>(SqlConnection, tableName);
check.IncludeIdentityColumn = true;
var dest = new DbDestination<MyRow>(SqlConnection, tableName);
dest.AllowIdentityInsert = true;
```

### AllPropertiesMustMatch

When set to true, this option marks a row as flawed if any property in the record does not correspond to a table column.

### CustomCheck

After the default type checks, you can define your custom criteria. For example, a record could be flagged as flawed if its Id value is 0 or negative.

```C#
var check = new DbTypeCheck<MyRow>(SqlConnection, tableName);
check.CustomCheck = row => row.Id > 0;
```

### IncludeCharLength and IncludeBinaryLength

These checks apply to CHAR/VARCHAR and BINARY/VARBINARY columns, respectively. By default, if a value's length exceeds the maximum length of the corresponding column, the record is identified as flawed.

## Example

```C#
public class MyDataTypeRow
{
    public int Id { get;set;}

    [DbColumnMap("IntCol")]
    public Int32? SomeInt { get; set; }

    [DbColumnMap("StringCol")]
    public string SomeString { get; set; }
}

//Creating a demo tables with 3 columns:
string tableName = "dbtypecheck_example";
var tableCols = new List<TableColumn> {
    new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true, isIdentity:true),
    new TableColumn("IntCol", "INT", allowNulls: false),
    new TableColumn("StringCol", "VARCHAR(5)", allowNulls: true),    
};
DropTableTask.DropIfExists(connection, tableName);
CreateTableTask.CreateIfNotExists(connection, tableName, tableCols);

//Defining demo data
var source = new MemorySource<MyDataTypeRow>(
    new List<MyDataTypeRow>() {
            //Record will pass
            new MyDataTypeRow() {
                SomeInt = 1,
                SomeString = "OK",
            },
            //Will fail, StringCol exceed max length of VARCHAR(5)
            new MyDataTypeRow() {
                SomeInt = 2,
                SomeString = "TO_LONG",
            },
            //Will fail, IntCol does not allow null 
            new MyDataTypeRow() {
                SomeInt = null, 
                SomeString = "X",
            },
            //Will fail, CustomCheck requires SomeInt to be greater than 0
            new MyDataTypeRow() {
                SomeInt = -1, 
                SomeString = "X",
            }
    });

//Create the components
DbTypeCheck<MyDataTypeRow> check = new DbTypeCheck<MyDataTypeRow>(SqlConnection, tableName);
check.CustomCheck = row => row.SomeInt > 0;
DbDestination<MyDataTypeRow> dest = new DbDestination<MyDataTypeRow>(connection, tableName);
MemoryDestination<MyDataTypeRow> flawedRowsDest = new MemoryDestination<MyDataTypeRow>();

//Initializing the network
source.LinkTo(check);
check.LinkTo(dest);
check.LinkFlawedTo(flawedRowsDest);

//Running the network
Network.Execute(source);
```

### Dynamic Object Support

DbTypeCheck, like all ETLBox components, supports both strongly-typed objects (e.g., `DbTypeCheck<MyRow>`) and dynamic `ExpandoObject` (either `DbTypeCheck<ExpandoObject>` or `DbTypeCheck`).
