---
title: "Merge Destination"
description: "Examples and code recipes for the DbMerge component."
lead: "This article contains example code that shows the usage of the DbMerge component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
weight: 47
toc: true
---

## Setup

### Using a different database

The following examples are using SqlServer as destination database. In order to use SQLServer, we use the `SqlConnectionManager` in combination with a connection string for SQLServer. If you prefer to use a different database, simple replace the connection manager (and the connection string) with your database of choice. E.g. if you want to use Postgres, you can simply use the `PostgresConnectionManager` instead.

### Shared method

Throughout the following, all code examples will use the methods `PrintTable(..)` which prints the content of a table onto the console output, as well as the `PrintDeltaTable(..)` which shows the content of a list produced by the DbMerge which contains information about the executed operations on the database.

```C#
private void PrintTable(IConnectionManager connMan, string tableName) {
    Console.WriteLine("Database table:");
    var dest = new DataFrameDestination();
    var source = new DbSource(connMan, tableName);
    source.LinkTo(dest);
    Network.Execute(source);
    Console.WriteLine(dest.DataFrame.ToString());
}

private void PrintDeltaTable(DataFrame dataFrame) {
    Console.WriteLine("Calculated delta:");
    dataFrame.Columns.Remove("ChangeDate");
    dataFrame.Columns.Remove("ChangeAction");
    Console.WriteLine(dataFrame.ToString());
}
```

## Basic Merge

The following example shows the basic merge oeprations using strongly typed objects. The matching between column names and properties in the object is based on name comparison. The `DbColumnMap` attribute can be used to map the property to a different column.

### Full Merge Mode

The following examples show the basic merge operations (Insert, Update, Delete and Exists) using `MergeMode.Full`. We are using attributes to define which column are used as id, for comparison and for updates.

```C#
private void CreateTableTwoPrimaryKeys(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id1", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Id2", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "INT", allowNulls: false),
        new TableColumn("Value3", "VARCHAR(100)", allowNulls: true),
    });
    CreateTableTask.Create(connMan, td);
}

public class MyRow : MergeableRow {

    [IdColumn]
    public int Id1 { get; set; }
    [IdColumn]
    [DbColumnMap("Id2")]
    public int OtherId { get; set; }
    [CompareColumn]
    [UpdateColumn]
    public string Value1 { get; set; }
    [CompareColumn]
    public int Value2 { get; set; }
    [UpdateColumn]
    public string Value3 { get; set; }

    public string ChangeText => ChangeAction?.ToString();
}

var connMan = new SqlConnectionManager(ConnectionString);

string tableName = "BasicMerge";
CreateTableTwoPrimaryKeys(connMan, tableName);
SqlTask.ExecuteNonQuery(connMan, $@"
INSERT INTO {tableName} (Id1, Id2, Value1, Value2, Value3)
VALUES (1,1, 'Exists', 1, 'NoChange'),
(2,2, 'Update', 0, null),
(3,3, 'Delete', 0, 'XX')
");


var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id1 = 1, OtherId = 1, Value1 = "Exists", Value2 = 1, Value3 = "X" });
source.DataAsList.Add(new MyRow() { Id1 = 2, OtherId = 2, Value1 = "Update", Value2 = 2, Value3 = "Y" });
source.DataAsList.Add(new MyRow() { Id1 = 3, OtherId = 1, Value1 = "Insert", Value2 = 3, Value3 = "Z" });

var dest = new DbMerge<MyRow>(connMan, tableName);
dest.MergeMode = MergeMode.Full;
var delta = new DataFrameDestination<MyRow>();

source.LinkTo(dest);
dest.LinkTo(delta);
Network.Execute(source);

PrintTable(connMan, tableName);
PrintDeltaTable(delta.DataFrame);

//Output
/*
Database table:
Id1       Id2       Value1    Value2    Value3
1         1         Exists    1         NoChange
2         2         Update    0         Y
3         1         Insert    3         Z

Calculated delta:
Id1        OtherId    Value1     Value2     Value3     ChangeText
1          1          Exists     1          X          Exists
3          1          Insert     3          Z          Insert
2          2          Update     2          Y          Update
3          3          Delete     0          XX         Delete
*/
```

{{< callout context="tip" title="Compare/Update Columns" icon="outline/rocket">}}
Only the IdColumns are mandatory. Defining the Compare/Update (and Delete) columns is optional. If no compare or udpate columns are set, all other properties that match with a database column will automatically used as an compare and/or update column.
{{< /callout >}}

### Delta Merge Mode

When using the delta mode, Delete are not detected automatically. A delete operation is triggered by a record that has a `DeleteColumn` defined - if the property value is equal to the defined target value in the DeleteColumn, the record is then delete from the target table.

```csharp
public class MyDeltaRow : MergeableRow {

    [IdColumn]
    public int Id1 { get; set; }
    [IdColumn]
    [DbColumnMap("Id2")]
    public int OtherId { get; set; }
    [CompareColumn]
    [UpdateColumn]
    public string Value1 { get; set; }
    [CompareColumn]
    public int Value2 { get; set; }
    [UpdateColumn]
    public string Value3 { get; set; }

    [DeleteColumn(true)]
    public bool Delete { get; set; }

    public string ChangeText => ChangeAction?.ToString();
}

var connMan = new SqlConnectionManager(ConnectionString);

string tableName = "BasicMerge";
CreateTableTwoPrimaryKeys(connMan, tableName);
SqlTask.ExecuteNonQuery(connMan, $@"
INSERT INTO {tableName} (Id1, Id2, Value1, Value2, Value3)
VALUES (1,1, 'Exists', 1, 'NoChange'),
(2,2, 'Update', 0, null),
(3,3, 'Delete', 0, 'XX')
");


var source = new MemorySource<MyDeltaRow>();
source.DataAsList.Add(new MyDeltaRow() { Id1 = 1, OtherId = 1, Value1 = "Exists", Value2 = 1, Value3 = "X" });
source.DataAsList.Add(new MyDeltaRow() { Id1 = 2, OtherId = 2, Value1 = "Update", Value2 = 2, Value3 = "Y" });
source.DataAsList.Add(new MyDeltaRow() { Id1 = 3, OtherId = 1, Value1 = "Insert", Value2 = 3, Value3 = "Z" });
source.DataAsList.Add(new MyDeltaRow() { Id1 = 3, OtherId = 3 ,Delete = true  });

var dest = new DbMerge<MyDeltaRow>(connMan, tableName);
dest.MergeMode = MergeMode.Delta;
var delta = new DataFrameDestination<MyDeltaRow>();

source.LinkTo(dest);
dest.LinkTo(delta);
Network.Execute(source);

PrintTable(connMan, tableName);
PrintDeltaTable(delta.DataFrame);

//Output
/*
Database table:
Id1       Id2       Value1    Value2    Value3
1         1         Exists    1         NoChange
2         2         Update    0         Y
3         1         Insert    3         Z

Calculated delta:
Id1        OtherId    Value1     Value2     Value3     Delete     ChangeText
1          1          Exists     1          X          False      Exists
3          3          null       0          null       True       Delete
2          2          Update     2          Y          False      Update
3          1          Insert     3          Z          False      Insert

*/
```

{{< callout context="tip" title="Performance considerations" icon="outline/rocket">}}
The Delta mode is the default merge mode for the `DbMerge` due to performance reason. When using `MergeMode.Full`,  the DbMerge needs to compare all id values of the target with the id values of all processed records to determine which records can be deleted. This is a time-consuming operation, that will also need enough memory for big amounts of data.
{{< /callout >}}

## Inserting with Identity values

The `DbMerge` will also work if the identity column is auto generated.

```C#
private void CreateTableWithIdentity(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("AutoId", "INT", allowNulls: false, isPrimaryKey: true, isIdentity:true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "INT", allowNulls: false),
        new TableColumn("Value3", "VARCHAR(100)", allowNulls: true)
    });
    CreateTableTask.Create(connMan, td);
}


public class MyAutoIdRow : MergeableRow {
    private string combined;
    [DbColumnMap("Value3")]

    public string Combined {
        get => combined ?? Value1 + "_" + Value2;
        set => combined = value;
    }

    public string Value1 { get; set; }
    public int Value2 { get; set; }
    [IdColumn]
    public int AutoId { get; set; }

    public string ChangeText => ChangeAction?.ToString();
}

var connMan = new SqlConnectionManager(ConnectionString);

string tableName = "AutoIdColumn";
CreateTableWithIdentity(connMan, tableName);
SqlTask.ExecuteNonQuery(connMan, $@"
INSERT INTO {tableName} (Value1, Value2, Value3)
VALUES ('Exists', 1, 'Exists_1'),
('WillUpdate', 2, null),
('Delete', 3, 'XX')
");


var source = new MemorySource<MyAutoIdRow>();
source.DataAsList.Add(new MyAutoIdRow() { AutoId = 1, Value1 = "Exists", Value2 = 1 });
source.DataAsList.Add(new MyAutoIdRow() { AutoId = 2, Value1 = "Update", Value2 = 2 });
source.DataAsList.Add(new MyAutoIdRow() { AutoId = 4, Value1 = "New", Value2 = 4 });
source.DataAsList.Add(new MyAutoIdRow() { AutoId = 100, Value1 = "AlsoNew", Value2 = 100 });
var dest = new DbMerge<MyAutoIdRow>(connMan, tableName);
dest.MergeMode = MergeMode.Full;
var delta = new DataFrameDestination<MyAutoIdRow>();

source.LinkTo(dest);
dest.LinkTo(delta);
Network.Execute(source);

PrintTable(connMan, tableName);
PrintDeltaTable(delta.DataFrame);

//Output
/*
Database table:
AutoId Value1    Value2 Value3
1         Exists    1         Exists_1
2         Update    2         Update_2
4         New       4         New_4
5         AlsoNew   100       AlsoNew_100

Calculated delta:
Combined   Value1     Value2     AutoId     ChangeText
Exists_1   Exists     1          1          Exists
New_4      New        4          4          Insert
AlsoNew_100AlsoNew    100        100        Insert
Update_2   Update     2          2          Update
XX         Delete     3          3          Delete
*/
```

## Partial Cache and Eviction Policies

When using the DbMerge, internally a `LookupTransformation` is used to retrieve the data from the destination table. By default, the `CacheMode.Full` in the Lookup - this means that all data from the target table is loaded into memory before any recors are processed.
So when the first record arrives at the `DbMerge`, the component will load all rows from the database table into memory, in order to determine the corresponding merge operations. This step can be very time and memory-consuming for large destination tables.

Using the `CacheMode.Partial` will only load records into memory when they are needed. This may reduce memory consumption a lot, but will also slow down the DbMerge, as there will me many subsequent (batch) reads on the target table. It is recommended to use id columns that are part of an index.

In order to reduce the amount of rows to be read from the source, you can use different eviction policies. A [full overview of all policies are found in the documentation for the `LookupTransformation`](/docs/transformations/lookup/#cache-eviction-policies).

The configuration of the partial cache mode is very simple:

```C#
var dest = new DbMerge<MyDeltaRow>(connMan, tableName);
dest.MergeMode = MergeMode.Delta;
dest.CacheMode = CacheMode.Partial;
dest.EvictionPolicy = CacheEvictionPolicy.LeastFrequentlyUsed;
dest.MaxCacheSize = 5000;
```

If you want to measure the performance of the `DbMerge` in your environment, [have a look at the DbMerge Performance Recipe](/recipes/other/dbmerge-performance/).

## DbMerge With Dynamic Object

The DbMerge also supports the dynamic ExpandoObject. You can assign the id, update, compare and delete columns using the `IdColumns`, `UpdateColumns`, `CompareColumns` and `DeleteColumns` properties.

```C#
private void CreateTableSinglePrimaryKey(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "INT", allowNulls: false),
    });
    CreateTableTask.Create(connMan, td);
}

public dynamic CreateDynamicRow(int id, string value1, int value2) {
    dynamic result = new ExpandoObject();
    result.Id = id;
    result.Value1 = value1;
    result.Value2 = value2;
    return result;
}

var connMan = new SqlConnectionManager(ConnectionString);

string tableName = "WithDynamic";
CreateTableSinglePrimaryKey(connMan, tableName);
SqlTask.ExecuteNonQuery(connMan, $@"
INSERT INTO {tableName} (Id, Value1, Value2)
VALUES (1, 'Exists', 1),
(2,'WillUpdate', 0),
(3, 'WillDelete', -1)
");


var source = new MemorySource();
source.DataAsList.Add(CreateDynamicRow(1, "Exists",1));
source.DataAsList.Add(CreateDynamicRow(2, "Update", 2));
source.DataAsList.Add(CreateDynamicRow(3, "Delete", -1));
source.DataAsList.Add(CreateDynamicRow(4, "Insert", 4));

var dest = new DbMerge(connMan, tableName);
dest.MergeMode = MergeMode.Delta;
dest.IdColumns = new [] {
    new IdColumn() { IdPropertyName = "Id" }
};
dest.CompareColumns = new[] {
    new CompareColumn() { ComparePropertyName = "Value1" },
    new CompareColumn() { ComparePropertyName = "Value2" },
};
dest.UpdateColumns = new[] {
    new UpdateColumn() { UpdatePropertyName = "Value1" },
    new UpdateColumn() { UpdatePropertyName= "Value2" },
};
dest.DeleteColumns = new[] {
    new DeleteColumn() { DeleteOnMatchValue = -1, DeletePropertyName = "Value2" }
};
var changeAction = new RowTransformation();
changeAction.TransformationFunc = row => {
    dynamic r = row;
    r.ChangeActionText = ((ChangeAction)r.ChangeAction).ToString();
    return row;
};
var delta = new DataFrameDestination();

source.LinkTo(dest);
dest.LinkTo(changeAction).LinkTo(delta);
Network.Execute(source);

PrintTable(connMan, tableName);
PrintDeltaTable(delta.DataFrame);

//Output
/*
Database table:
Id        Value1    Value2
1         Exists    1
2         Update    2
4         Insert    4

Calculated delta:
Id               Value1           Value2           ChangeActionText
1                Exists           1                Exists
4                Insert           4                Insert
3                Delete           -1               Delete
2                Update           2                Update
*/
```

## Automatic Duplicate Detection

If the property `FindDuplicates` is set to `true`, all rows which id columns where already processed previously are automatically filtered out.

```C#
public class MyDuplicateRow : MergeableRow {
    public int Id1 { get; set; }
    public int? Id2 { get; set; }
    public string CompareUpdateValue { get; set; }
    public string ChangeText => ChangeAction?.ToString();
}

var connMan = new SqlConnectionManager(ConnectionString);
string tableName = "FindDuplicates";
var source = new MemorySource<MyDuplicateRow>();
source.DataAsList.Add(new MyDuplicateRow() { Id1 = 1, Id2 = 1, CompareUpdateValue = "Exists" });
source.DataAsList.Add(new MyDuplicateRow() { Id1 = 2, Id2 = 2, CompareUpdateValue = "Test2_Update1" });
source.DataAsList.Add(new MyDuplicateRow() { Id1 = 1, Id2 = 1, CompareUpdateValue = "Exists" });
source.DataAsList.Add(new MyDuplicateRow() { Id1 = 3, Id2 = 3, CompareUpdateValue = "Test3_Insert1" });
source.DataAsList.Add(new MyDuplicateRow() { Id1 = 2, Id2 = 2, CompareUpdateValue = "Test2_Update2" });
source.DataAsList.Add(new MyDuplicateRow() { Id1 = 3, Id2 = 3, CompareUpdateValue = "Test3_Insert2" });


DropTableTask.DropIfExists(connMan, tableName);
CreateTableTask.CreateIfNotExists(connMan, tableName,
    new List<TableColumn>()
    {
        new TableColumn("Id1","INT",allowNulls:false,isPrimaryKey:true),
        new TableColumn("Id2","INT",allowNulls:false,isPrimaryKey:true),
        new TableColumn("CompareUpdateValue","VARCHAR(100)",true)
    });

SqlTask.ExecuteNonQuery(connMan,
    $"INSERT INTO {tableName} VALUES(1,1,'Exists')");
SqlTask.ExecuteNonQuery(connMan,
    $"INSERT INTO {tableName} VALUES(2,2,'Update')");
SqlTask.ExecuteNonQuery(connMan,
    $"INSERT INTO {tableName} VALUES(4,4,'Delete')");

var dest = new DbMerge<MyDuplicateRow>(connMan, tableName);
dest.MergeMode = MergeMode.Full;
dest.FindDuplicates = true;

dest.IdColumns = new[] {
    new IdColumn() { IdPropertyName = "Id1" },
    new IdColumn() { IdPropertyName = "Id2"
    }
};

var delta = new DataFrameDestination<MyDuplicateRow>();
source.LinkTo(dest).LinkTo(delta);

Network.Execute(source);

PrintTable(connMan, tableName);
PrintDeltaTable(delta.DataFrame);

/* Output
Database table:
Id1                Id2                CompareUpdateValue
1                  1                  Exists
2                  2                  Test2_Update1
3                  3                  Test3_Insert1

Calculated delta:
Id1                Id2                CompareUpdateValue ChangeText
1                  1                  Exists             Exists
1                  1                  Exists             Duplicate
2                  2                  Test2_Update2      Duplicate
3                  3                  Test3_Insert2      Duplicate
3                  3                  Test3_Insert1      Insert
2                  2                  Test2_Update1      Update
4                  4                  Delete             Delete
*/
```

## Value Generated Columns

The `DbMerge` is also able to retrieve existing data from so called value generated columns, e.g. a computed column or a column with a default value if no value is provided.

```C#
public class RowWithGenerated : MergeableRow {
    public string Computed { get; set; }
    public int? Id { get; set; }
    public string DefString { get; set; }
    public int? DefInt { get; set; }
    public string Value { get; set; }
}

private static void CreateTableWithDefaultAndComputed(IConnectionManager conn, string tableName) {
    DropTableTask.DropIfExists(conn, tableName);
    var columns = new List<TableColumn>()
    {
        new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey:true, isIdentity: true),
        new TableColumn("DefString", "VARCHAR(100)", allowNulls: false) { DefaultValue = "'A'"},
        new TableColumn("DefInt", "INT", allowNulls: true) {DefaultValue="3"},
        new TableColumn("Computed", "VARCHAR(100)", allowNulls: false) { ComputedColumn = $"{conn.QB}DefString{conn.QE}"},
        new TableColumn("Value", "VARCHAR(100)", allowNulls: true)
    };
    TableDefinition def = new TableDefinition(tableName, columns);
    def.CreateTable(conn);
}

private static void InsertDestinationData(IConnectionManager conn, string tableName) {
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, conn.QB, conn.QE);
    SqlTask.ExecuteNonQuery(conn,
       $"INSERT INTO {tableName} " +
       $"(DefString,DefInt,Value) " +
       $"VALUES('DefString1',3,'Test1')");
    SqlTask.ExecuteNonQuery(conn,
       $"INSERT INTO {tableName} " +
       $"(DefInt, Value) " +
       $"VALUES(10,'ToUpdate')");
    SqlTask.ExecuteNonQuery(conn,
       $"INSERT INTO {tableName} " +
       $"(DefInt, Value) " +
       $"VALUES(10,'ToUpdate2')");
    SqlTask.ExecuteNonQuery(conn,
      $"INSERT INTO {tableName} " +
      $"(Value) " +
      $"VALUES('ToDelete')");
}

var connMan = new SqlConnectionManager(ConnectionString);
string tableName = "ValueGeneratedColumns";

var source = new MemorySource<RowWithGenerated>();
source.DataAsList.Add(new RowWithGenerated() { Id = 1, DefInt = 3, Computed = "DefString1", Value = "Test1" });
source.DataAsList.Add(new RowWithGenerated() { Id = 2, DefString = "DefString2", Value = "Test2" });
source.DataAsList.Add(new RowWithGenerated() { Id = 3, DefInt = 2, Value = null });
source.DataAsList.Add(new RowWithGenerated() { Id = null, Value = "A" });

CreateTableWithDefaultAndComputed(connMan, tableName);
InsertDestinationData(connMan, tableName);

var dest = new DbMerge<RowWithGenerated>(connMan, tableName);
dest.MergeMode = MergeMode.Full;

dest.ValueGeneratedColumns = new List<ValueGenerationColumn>() {
    new ValueGenerationColumn(ValueGenerationEvent.OnAddOrUpdate) { ValueGenerationPropertyName = "Id"},
    new ValueGenerationColumn(ValueGenerationEvent.OnAddOrUpdate) { ValueGenerationPropertyName = "DefString"},
    new ValueGenerationColumn(ValueGenerationEvent.OnAddOrUpdate) { ValueGenerationPropertyName = "DefInt"},
    new ValueGenerationColumn(ValueGenerationEvent.OnAddOrUpdate) { ValueGenerationPropertyName = "Computed"},
};
dest.ColumnMapping = new List<DbColumnMap>() {
    new DbColumnMap() { PropertyName="DefString", IgnoreColumn =true},
};
dest.IdColumns = new List<IdColumn>() {
    new IdColumn() { IdPropertyName = "Id"}
};

var delta = new DataFrameDestination<RowWithGenerated>();
source.LinkTo(dest).LinkTo(delta);

Network.Execute(source);

PrintTable(connMan, tableName);
PrintDeltaTable(delta.DataFrame);

/* Output:
Database table:
Id        DefString DefInt    Computed  Value
1         DefString13         DefString1Test1
2         A         null      A         Test2
3         A         2         A         null
5         A         null      A         A

Calculated delta:
Computed  Id        DefString DefInt    Value
DefString11         null      3         Test1
A         2         A         null      Test2
A         3         A         2         null
A         5         A         null      A
A         4         null      3         ToDelete
*/
```
