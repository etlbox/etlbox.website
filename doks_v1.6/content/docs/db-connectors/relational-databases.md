---
title: "Relational databases"
description: "Accessing relation databases with the DbSource and DbDestination"
lead: "A detailed overview of the DbSource and DbDestination connector."
draft: false
images: []
menu:
  docs:
    parent: "db-connectors"
weight: 320
toc: true
---

If you want to start with example code right away, you will find it in the recipes section for the [DbSource](/recipes/sources/dbsource) and [DbDestination](/recipes/destinations/dbdestination). The components are also used frequently in other examples.

## DbSource

The DbSource give you access to any database table or with your database. Or you can directly pass an sql statement that is used as source.
The use of the DbSource is very straight forward. You simple pass a connection manager (the right one for your database) and a table name.

Let's assume that SouceTable has two columns and is defined like this:

```sql
CREATE TABLE SourceTable (
    Id INT NOT NULL,
    Value VARCHAR(50) NULL
)
```

Now we can create our strongly typed object (POCO) to match with this definition:


Let's assume we create a POCO (Plain old component object) `MySimpleRow` that looks like this:

```C#
public class MyRow {
    public int Id { get; set;}
    public string Value { get; set;}
}
```


Now we can setup our data flow like this:

```C#
SqlConnectionManager connMan = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;Initial Catalog=ETLBox;");
DbSource<MyRow> source = new DbSource<MyRow>(connMan, "SourceTable");
```


ETLBox will automatically extract missing meta information during runtime from the source table and the involved types. In our example, the source table has
columns with exact same name as the object - ETLBox will check this and write data from the Id column into the Id property, and data from the column Value into the Value property.
Each record in the source will be a new object that is created and then passed to the connected components.

In case you want to test yourdata flow, you could connect your database source to a memory destination and check the data that you retrieved:

```C#
MemoryDestination dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);
Console.WriteLine("Loaded "+dest.Data+" rows!");
```



### Working with Sql statements

For the `DbSource`, you can also specify some Sql code to retrieve your data:

```C#
DbSource<MyRow> source = new DbSource<MyRow>() {
    ConnectionManager = connMan,
    Sql = "SELECT Id, Value FROM SourceTable"
};
```

Please note that providing a `TableName` is not necessary when you use a Sql statement.
There is no particular limitation if you are using custom sql code to retrieve data. E.g., you could use a complex query like this:

```C#
DbSource source = new DbSource() {
    Sql = $@"
SELECT CAST(1 as int)                                  as Id
, CAST((CASE 345 WHEN 345 THEN -1 ELSE 11 END) as int) as Id2
, 'Some value'                                         as [Id 3.2]
, 'Some more values'                                   as 'different'
, 'X'                                                  [a'b'']
, 'More'                                               'a.''b'
, 1                                                    ab
, CAST(CAST(CAST(3 AS INT) AS INT)AS INT)              'x y z'
FROM (SELECT 1 as dm1) as Dummy
INNER JOIN (SELECT 1 as dm2) as Dummy2
        ON Dummy.dm1 = Dummy2.dm2
",
    ConnectionManager = SqlConnection
};
```

You could also call a CTE or a stored procedure / function in your Sql.

```C#
DbSource source = new DbSource() {
    Sql = $@"EXEC [TestProcedureWithParameter] @MaxRecordsSet1=@max1, @MaxRecordsSet2=@max2",
    TableDefinition = TableDefinition.FromProcedureName(SqlConnection, "TestProcedureWithParameter");
    ConnectionManager = SqlConnection,
    SqlParameter  = new[] {
        new QueryParameter("max1", "INT", 4),
        new QueryParameter("max2", "INT", 6)
    }
};
```

{{< alert text="It is recommended that all the columns in your sql statement have a column name. E.g. a <code>SELECT * FROM table</code> could lead to problems, as there are no column names in the Sql that ETLBox could use to map with a property in your object. It is recommended to change this <code>SELECT Id, Value FROM table</code> or to provide a <code>TableDefinition</code> object containing the meta data." >}}

#### Query parameters in sql statements

Instead of providing a static string, you can also pass a parameterized query. A parameterized query contains  variable placeholder that normally start with `@` (exception: Oracle uses the `:`). Any occurrence of each parameter is then replaced with the actual provided value in a parameter list.

Here is an example:

```C#
DbSource source = new DbSource() {
        Sql = $@"SELECT Col1, Col2 FROM {s2c.QB}Table{s2c.QE}
        WHERE Col1 > @par1
        AND Col2 = @par2",
        ConnectionManager = SqlConnection,
        SqlParameter = new[] {
            new QueryParameter("par1","INT",0),
            new QueryParameter("par2","VARCHAR(10)","Test1"),
        }
    };
```

 Using query parameters can be beneficial for your improved performance (e.g. your database can reuse an already calculated plan when running the statement again with different parameters). Also, this reduces the risk of sql injections - any special characters in your parameter are escaped before they are inserted in the sql string.

### Using dynamic object

The default implementation of DbSource will use an ExpandoObject. This dynamic object will then properties with the same names as the columns in your source.

```C#
DbSource source = new DbSource(connMan, "SourceTable");
```

No object is needed when using this. Make sure that all other components also either use the default implementation, or alternatively you cast the ExpandoObject into an object or array of your choice. This can be done e.g. with a RowTransformation

### Using string arrays

Also you can use the DbSource to read your data directly into an array. This could be a string array. The order of the columns of your table or you sql code is then equals the order in your array. Also, you don't need any other object definition then.

```C#
DbSource<string[]> source = new DbSource<string[]>(connMan, "SourceTable");
```



### Automatic meta data retrieval

ETLBox will try to automatically collect the correct meta data information from the provided information.

If you are passing a table name, a Sql query is send to the database that checks if the table exists and then retrieves additional information about the table (including column names, data types, identity columns and keys, default and computed values).
This will happen when reading from a table, and also before writing into a table.

In the simple case where you provide the `TableName` property, this table is queried for the meta data information.
If you are providing a Sql statement, ETLBox will try to parse the provided Sql statement to parse the column names from the query. This will only works if you are explicitly define the column names in a query. Whenever there are columns names in the query, e.g. `SELECT a.Col1, CAST(b.Test2 AS INT) AS Col2) ...`, the corresponding column names `Test2` and `Col2` can be extracted from the sql. Unfortunately, this won't work for Stored Procedure or the * operation: `EXEC TestProcedure` or `SELECT * FROM table` does not provide any information about the column names.

Nevertheless, ETLBox has 3 fallback mechanism in this case:
- If a `TableDefinition` is provided, this information will be used instead. Please note that if you provide your own `TableDefinition`, this will always be used primarily.
- If the `TableName` was set, ETLBox will read and use the meta data of this table instead.
- The underlying ADO.NET connector may also have information about the column names, which is then used.


## DbDestination

The DbDestination will write that data from your flow into the a table. Like the DbSource, you need to pass a connection manager and the destination table name. For any property in your object, the data will be written into the table if the column names match with the property name.

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}
SqlConnectionManager connMan =
    new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
DbDestination<MyRow> dest = new DbDestination<MyRow>(connMan, "DestinationTable");
```

If your table has the columns Id and/or Value, the data of your flow will be written into this columns.


### Using dynamic objects

Of course you can also use the default implementation of the DbDestination to write data into a table.

```C#
SqlConnectionManager connMan =
    new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
DbDestination dest = new DbDestination(connMan, "DestinationTable");
```

Like with an object, the properties of the ExpandoObject are used to map the values to the right columns. Only if the ExpandoObject object has a property with the same name as the column in the destination table, data is written into this column.
Unfortunately, the Column mapping attributes are not working here.

### Using arrays

You can also use the DbDestination with array.

```C#
SqlConnectionManager connMan =
    new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
DbDestination<string[]> dest = new DbDestination<string[]>(connMan, "DestinationTable");
```

The data is written into the columns in the same order as they are stored in the array. E.g., if your string array has three values, these values are stored into the first, second and third column of your destination table. If your destination table has more columns, these will be ignored. Identity columns (or auto increment / serial values) are ignored.

### Batch Size

By default, the DbDestination will create batches of data that then are inserted in whole into the database. This is faster than creating a single insert for each incoming row. So the DbDestination is a little bit different from the other destinations: It will always wait until it has received the full amount of rows needed for a batch, and then do the insert. The default batch size is 1000.
You can play around with the batch size to gain higher performance. 1000 rows per batch is a solid value for most operations.
If you encounter the issue that inserted the data into the destinations takes to long, try to reduce the batch size significantly.

```C#
var dest = new DbDestination<MyRow>(connMan, "DestinationTable");
dest.BatchSize = 10000;
```

#### BatchSize in Odbc & OleDb

If you leave the default value for batch size set, it will be changed to 100 rows for Odbc and OleDb connections. As the connection here is much slower than "native" connections, and bulk inserts need to be translated into "INSERT INTO" statements, 100 rows per batch leads to a much better performance than 1000 rows.

### Allowing identity inserts

By default, identity columns (also called auto increment or serial columns) are left untouched when writing into a  destination table. Even if you have a property with the same name or a column mapping set up for an identity column, by default no value is written from your data into the column - the identity column will auto generate a unique (and ascending) key.

Sometimes you want to overwrite the auto generated generated values with the values that you provide with your data. To force the DbDestination to insert values for an identity column, you can set the property `AllowIdentityInserts` to true. If set to true, the DbDestination will try to overwrite the identity column with the provided value in your data. (Make sure there is a corresponding property in your data object mapped to the identity column.

```C#
var dest = new DbDestination<MyRow>(connMan, "DestinationTable");
dest.AllowIdentityInsert = true;
```

## Column Mapping

Of course the property names in the object and the column names can differ - ETLBox will only load columns from a source where it can find a matching property with the same name.
If the data type is different, ETLBox will try to automatically convert the data. If the names are different, you can use the attribute DbColumnMap to define the matching columns name for a property.

Let's reconsider our example at the beginning.  We create a table like this:

```sql
CREATE TABLE SourceTable (
    Id INT NOT NULL,
    Value VARCHAR(50) NULL
)
```

Now we could define our POCO using the `DbColumnMap` attribute. In this example, we replace the property Id with the property Key. In order to still be able to read data from the Id column, we add the DbColumnMap attribute above it. Please note that the data type was changed to string as well - ETLBox will automatically try to convert the integer values into a string if data types are not matching.

```C#
public class MyRow {
    [DbColumnMap("Id")]
    public string Number { get; set;}
    public string Value { get; set;}
}
```

The setup of our data flow would be left untouched:

```C#
SqlConnectionManager connMan =
    new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;");
DbSource<MyRow> source = new DbSource<MyRow>(connMan, "SourceTable");
```

### Column Mapping with ExpandoObject

If you use the default implementation of DbSource/DbDestination, then the ExpanoObject will be used internally. This dynamic object doesn't allow you to set attributes as decorators for property. Instead you can pass the attributes manually to the `ColumnMapping` property.

```C#
var source = new DbSource(connectionManager, "TableName");
source.ColumnMapping = new[]
{
    new DbColumnMap() { DbColumnName = "Id", PropertyName = "Number"},
    new DbColumnMap() { DbColumnName = "Col2", PropertyName = "Text"}
};
```

## Column Converters

Both DbSource and DbDestination allows the use of column converters.
These are special converter function that are executed for every record in a particular column.
The idea of this converters is to do special data conversion directly in the source/destination which are not supported
by ETLBox. E.g. for SqlServer, it is quite common to use a date format like "20200101". This date format is not supported by
the C# DateTime object, so you need to define your own column conversion function if you want to write this date format directly from a string value into a DbDestination.

Here is an example how to write the string value "20200101" into a database column "DateCol".

```C#
/*
  CREATE TABLE TestTable (
      DateCol DATETIME NULL
  )
*/

public class MyRow
{
    public string DateCol { get; set; } = "20200101";
}

DbDestination<MyRow> dest = new DbDestination<MyRow>(conn, "TestTable");

dest.ColumnConverters = new[] {
    new ColumnConverter("DateCol", dateCol => {
        if (dateCol == null)
            return new DateTime(1990, 1, 1);
        else
            return DateTime.ParseExact((string)dateCol,
                    "yyyyMMdd", CultureInfo.InvariantCulture);
    })
};
```


## Table Definitions

If you pass a table name to a `DBsource` or `DbDestination` or a Sql statement to a `DbSource`, the meta data
of the table is automatically derived from that table or sql statement by ETLBox. For table or views this is done via a Sql statement that queries
system information, and for the Sql statement this is done via parsing the statement.
If you don't want ETLBox to read this information, or if you want to provide your own meta information,
you can pass a `TableDefinition` instead.

This could look like this:

```C#
var TableDefinition = new TableDefinition("tableName"
    , new List<TableColumn>() {
    new TableColumn("Id", "BIGINT", allowNulls:false,
                     isPrimaryKey: true, isIdentity:true)),
    new TableColumn("OtherCol", "NVARCHAR(100)", allowNulls: true)
});

var DbSource<type> = new DbSource<type>() {
  TableDefinition = TableDefinition
}
```

ETLBox will use this meta data instead to get the right column names.

## Bulk operations

The `DbSource` by default will read data from a table or database query result without filtering or modifying the query, and the `DbDestination` by default will simply insert the arriving data into the table. But the `DbSource` also offers a `BulkSelect` operation mode, and the `DbDestination` offers a `BulkUpdate` and `BulkDelete`. They were introduced mainly for supporting the `DbMerge`, but can also be used standalone.

### BulkSelect

The BulkSelect requires an `IdColumn` (set either as attribute or passed into the `IdColumns` property of the `DbSource`) to identify the rows by which the source data is filtered. The `SelectColumn`  (can also be passed to the `SelectColumns` property) defines the properties in which data should be read - all other properties will be ignored.

The BulkSelect will only work with a TableNam, and not with custom sql code. Most of the times it will be easier if you pass your own custom sql with a WHERE clause, but sometimes this way of querying your database table may be handy.

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

var connMan = new SqlConnectionManager(ConnectionString);
TableDefinition td = new TableDefinition("ExampleBulkSelect"
    , new List<TableColumn>() {
    new TableColumn("Id", "INT", allowNulls: false),
    new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
    new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
});
CreateTableTask.Create(connMan, td);
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkSelect VALUES(1,'Test1', '1.1')");
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkSelect VALUES(2,'Test2', '1.2')");
SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO ExampleBulkSelect VALUES(3,'Test3', '1.3')");

var source = new DbSource<MyBulkSelectRow>(connMan, "ExampleBulkSelect");
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

