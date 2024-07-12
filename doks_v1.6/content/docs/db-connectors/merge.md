---
title: "Merging & Syncing Tables"
description: "Details about the DbMerge connector"
lead: "The following article describes how you can use the data from your data flow to insert new data in a destination table, update existing or delete removed records."
draft: false
images: []
menu:
  docs:
    parent: "db-connectors"
weight: 330
toc: true
---

If you want to start with example code right away, you will find it in the recipes section for the [DbMerge](/recipes/destinations/mergedestination).
There is also an [article available that compares an ETLBox approach with the existing database approaches](/recipes/data-integration/merge-overview). This blog article is also an easy-to-read introduction into the DbMerge destination.

# Syncing tables with Merge

ETLBox can be used to integrate data from different source and write them into different destinations.
Most of the time you will use tables in a database as target.
A very common use case here is to keep a source and destination tables "in sync".


Please note that for the sake of simplification we use a Database table as source which we want to
sync with a destination Database table. But of course the source doesn’t necessarily needs to be a table -
every data that comes from any source or transformation in your data flow can be used as source for syncing.

## Full or Delta

First, let's differentiate 2 scenarios.

Scenario "Delta": The source table has information about its changes.
This can be e.g. a timestamp indicating when the record was inserted or updated. The source contains information
about it's changes, which is called "delta". Getting delta information from the source (e.g. via Change Data Capture) can make data loads significantly faster.

Scenario "Full": The source table does not have any information about its changes.
So no delta information is provided by the source. The source is delivering data always in "full".

Scenario "Delta" is a little bit more tricky when it comes to deletions. In scenario "Full" we always know which objects are currently
existing and what data they have. Objects which are not delivered from the source don't exist anymore. In the Delta scenario the handling of deletions is more problematic - there is
no straight-forward solution how to manage deleted records here. A common approach would be a delta record which has a delete flag that indicates that this record is deleted.
Or it could be that deletions are not transferred at all, and from time to time the a full load is needed to synchronize deletions.

### DBMerge

Both scenarios are supported with ETLBox. The `DBMerge` component can be used to tackle this problem.
The `DBMerge` is a destination component and is created on a destination table in your data flow.
It will wait for all data from the flow to arrive, and then either insert,
update or delete the data in the destination table.
Deletion is optional, and can be be turned on or off by setting the proper MergeMode.

The following MergeModes are supported:
- `Delta`: does inserts & updates, deletions only with flag
- `Full`: does inserts, updates & deletions (deletions if record is missing)
- `InsertsAndUpdatesOnly`: does inserts & updates only)
- `UpdatesOnly`: only updates, no inserts nor deletions

## Example

### Data and object definition

To implement an example sync between two tables, we will  need a `DbSource` pointing to our source table.
 In our case we just pass a table name for the source table, but you could also define a sql query
 (e.g. which gives you only the delta records). Also, any other data flow component can be used as source - either other sources
  or the transformations.

The source is then connected to the DBMerge, and data from the source will then be inserted,
updated or deleted in the destination.

The DbMerge itself is a non generic class - but it does inherit from DBMerge<TInput>. If you don't use the generic class with a type,
the default is DbMerge<ExpandoObject> - the ExpandoObject is a dynamic object which can have properties added during runtime.
If you decide to use your own Plain old component object (POCO) with the DbMerge, it will expect it that it implements the interface `IMergeableRow`.
This interface needs to have a ChangeDate and ChangeAction defines on your object, as well a UniqueId property
to describe how objects are compared.

The easiest (and recommended) way to implement the interface on a POCO is to inherit from the class `MergeableRow`.
You will automatically have all the necessary implementation details to pass the object to a `DbMerge`.
Only three things are left to do here:
1. You need to flag the properties that identify the unique Id columns with the attribute `IdColumn`
2. Optional: You can flag the properties used when comparing the values of a record to decide if it really needs to be updated
with the attribute `CompareColumn`. Otherwise all non-id columns are used for comparison.
3. Optional: You can flag the properties that you want to have updated in the target with the `UpdateColumn` attribute. If this is omitted,
all non-Id columns are updated.

If you use an ExpandoObject, you can't use attributes. Instead you can set the `IdColumns`, `CompareColumns` and optionally the `UpdateColumns` directly.

Let's start with a simple object, that has a property that should contain the key column (the id) and one property
for holding a value:


```C#
public class MyMergeRow : MergeableRow
{
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }
}
```

{{< alert text="You only need to provide the IdColumn. Update or Compare columns are optional. If no Compare columns are defined, automatically all non id columns will be used for comparison. Vice versa for the Update columns." >}}

In our scenario we have a source table that would look like this:

Key |Value        |
----|--------------
1   |Test - Insert
2   |Test - Update
3   |Test - Exists

And the destination table would like this:

Key |Value         |
----|---------------
2   |XXX
3   |Test - Exists
4   |Test - Deleted

{{< alert text="All compare columns must be writable, so make sure they have a setter assigned." >}}

### Setting up the data flow

No we can already set up a data flow. It would look like this:

```C#
DbSource<MyMergeRow> source = new DbSource<MyMergeRow>(connection, "SourceTable");
DbMerge<MyMergeRow> merge = new DbMerge<MyMergeRow>(connection, "DestinationTable");
merge.MergeMode = MergeMode.Full
source.LinkTo(merge);
Network.Execute(source);
```

In this example, we will start the scenario "Full". That means that we will load all data from the source, and expect
the merge to delete records that aren't delivered.

Now what happens if we let this flow run? First, all records will be loaded from the destination
into a memory object and compared with the source data.
Within the memory object, the DBMerge
will identify:

- which records need to inserted (ChangeAction: Insert)
- which records need to be updated (ChangeAction: Update)
- which records exists and doesn't need to be updated (ChangeAction: Exists)
- which record needs to be deleted (ChangeAction: Delete), if deletions are allowed

To identify these different options, the `IdColumn` is used. In our example the id column is a unique primary key,
and it is recommended to only use unique columns for that.

As you can see, there is a difference between an update and an existing records that doesn't need to be updated.
All records where the IdColumns match will be examined based on their value. All properties
marked with the `CompareColumn` attribute are compared.
If one property/columns differs, the record will be marked to be updated. If they are all equal, the record
won't be touched on the database and marked as Existing.

After this comparison is done, it will start to write the changes into the databases (in batches)
First, it will update records flagged as Update in the destination table.. This will be performed batch wise in a bulk operation.
Then it will delete all records which are flagged as Deletion in the destination table. This will also be performed in batches.
Finally, the new records are written (in batches) into the destination table.
 Records that doesn't need to be updated are left untouched in the destination.

In our example after doing the `DBMerge`, our destination table now looks like this:

|Key |Value         |
-----|---------------
1    |Test - Insert
2    |Test - Update
3    |Test - Exists

Please note that the record with Id 4 is now deleted. If the MergeMode would have been MergeMode.Delta (which is the default), this entry would still be in the target table.

#### Delete Column

Let's assume for our example above the we used the MergeMode Delta. Now we would still end up with the record #4:

|Key |Value         |
-----|---------------
4    |Test - Deleted

How can we do deletions in a delta scenario?
If you want to also have deletions executed when loading delta from the source, you can use the deletion attribute in your object.

E.g. consider we would add the following property to `MyMergeRow`

```C#
    [DeleteColumn("YES")]
    public string DoDelete { get; set; }
```

When executing the deletions, the DbMerge will check the value of the property `DoDelete`. If there is a matching entry in the target table (which is identified by the IdColumn attribute), then it will first check the value of the property and compare it to the expected value (which is "YES" in our example). If `DoDelete` does hold the value "YES", then it will delete the record in the target. If `DoDelete` is null or holds any other string value, then no deletion would be executed.

Of course this will also work with boolean values or any other object types.
Here is another example:

```C#
public class MyMergeRow : MergeableRow
{
    [IdColumn]
    public long Key { get; set; }
    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }
    [DeleteColumn(true)]
    public bool DeleteThisRow { get; set; }
}
```

In this example object, if the property DeleteThisRow is set to true, the record in the destination will be deleted if there is a already matching record in the destination table.


### Cache Mode

By default, the DbMerge will always load all data from the destination into memory first. If you want to avoid this,
e.g. because your target table is quite big, consider to set the CacheMode to `CacheMode.Partial`.

```C#
DbMerge<MyMergeRow> merge = new DbMerge<MyMergeRow>(connection, "DestinationTable");
merge.CacheMode = CacheMode.Partial;
```

Now data from the destination is only loaded into memory for the records that are currently processed.

#### Eviction policies

When using the partial cache mode, you can also choose from different eviction policies. The `DbMerge` uses the `LookupTransformation` internally, which provides several eviction policies to control how data is removed from the cache when it reaches its maximum size:

- **Least Recently Used (LRU)**: Evicts the least recently accessed items from the cache.
- **Least Frequently Used (LFU)**: Evicts the least frequently accessed items from the cache.
- **First In First Out (FIFO)**: Evicts the oldest items in the cache first.
- **Last In First Out (LIFO)**: Evicts the most recently added items first.

Set the eviction policy using the `EvictionPolicy` property:

```csharp
DbMerge<MyMergeRow> merge = new DbMerge<MyMergeRow>(connection, "DestinationTable");
merge.CacheMode = CacheMode.Partial;
merge.EvictionPolicy = CacheEvictionPolicy.LeastRecentlyUsed;
```

### Delta table

The DBMerge has a property `DeltaTable` which is a List containing additionally information what records
where updated, existing,  inserted or deleted. The operation and change-date is stored in the corresponding
`ChangeDate`/ `ChangeAction` properties.

This delta table can be accessed if the DbMerge is not treated as as source, but like a transformation. If the DbMerge is linked to other components,
it will write the delta records into it's output.

In our example, it would contain the information, that 1 row was inserted (Key: 1)
, 1 was updated (Key: 2), one column wasn't changed (Key:3) and one column was deleted (Key: 4).

This information can be used as a source for further processing in the data flow,
simple by connecting the DBMerge to a transformation or another Destination. So our complete flow could look like this:

```C#
DbSource<MyMergeRow> source = new DbSource<MyMergeRow>(connection, "SourceTable");
DBMerge<MyMergeRow> merge = new DBMerge<MyMergeRow>(connection, "DestinationTable");
DbDestination<MyMergeRow> delta = new DbDestination<MyMergeRow>(connection, "DeltaTable");
source.LinkTo(merge);
merge.LinkTo(delta);
Network.Execute(source);
```

The DeltaTable now will look like this:

|Key |ChangeDate         |ChangeAction|
-----|-------------------|-------------
1    |2019-01-01 12:00:01|Insert (1)
2    |2019-01-01 12:00:02|Update (2)
3    |2019-01-01 12:00:02|Exists (0)
4    |2019-01-01 12:00:03|Delete (3)

## Additional configurations

### Overwriting Identity columns

If your destination table contains an Identity column (or auto increment in MySql or Serial column in Postgres), the DbMerge by default will ignore this column when inserting data. Even though it can be defined as an IdColumn an used to determine if a record needs to be inserted, updated or deleted, it will still not write data into this column. An inserts will then have the auto generated value created by the datbase.
Some databases (e.g. SqlServer) allow you to explicitly overwrite identity columns. In this case, you can set the propert `AllowIdentityInsert` to `true`. Now all inserts in your database will disable the auto generation and use the data in your object.

```C#
public class MyMergeRow : MergeableRow
{
    [IdColumn]
    public int Key { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }
}

var tableCols = new List<TableColumn>()
{
    new TableColumn("Key", "INT", allowNulls:false, isPrimaryKey: true, isIdentity:true),
    new TableColumn("Value", "VARCHAR(100)", allowNulls:false),
};
CreateTableTask.CreateIfNotExists(Connection, "IdentityTable", tableCols);

//...

DBMerge<MyMergeRow> merge = new DBMerge<MyMergeRow>(connection, "IdentityTable");
merge.AllowIdentityInsert = true;
```


### Truncate instead delete

Because the DBMerge does delete records that need to be deleted or updated using a bulk delete sql statement,
this method can sometimes be a performance bottleneck if you expect a lot of deletions  to happen. The
`DbMerge` does support a Truncate-approach by setting the property `UseTruncateMethod` to true.
It will then read all existing data from the destination into the memory, identify the changes,
truncate the destination table and then write all changes back into the database. This approach can be much faster
if you expect a lot of deletions, but you will always need to read all data from the destination table and write it back.
The CacheMode Partial won't work if you use the truncate method.
Also, the Truncate method is only allowed for MergeMode "Full".

```C#
DbMerge<MyMergeRow> merge = new DbMerge<MyMergeRow>(connection, "DestinationTable");
merge.UseTruncateMethod = true;
```

### DbColumnMap attribute

If the columns have different names than our property, we need to add the `DbColumnMap` attribute to have them
mapped correctly. If the columns would be named Col1 for the Key and Col2 for the Value, our object would look like this:

```C#
public class MyMergeRow : MergeableRow
{
    [IdColumn]
    [DbColumnMap("Col1")]
    public int Key { get; set; }

    [CompareColumn]
    [DbColumnMap("Col1")]
    public string Value { get; set; }
}
```

For dynamic objects, you can define your column mappings via the `ColumnMapping` property.

### Composite Keys

Composite keys are supported: just flag all the columns that you want to use as composite unique key with the
`IdColumn` attribute. Internally, all properties are concatenated to a string by using the ToString() method of the properties.
This concatenated string is then used as identifier for each record.

```C#
public class MyMergeRow : MergeableRow
{
    [IdColumn]
    public long ColKey1 { get; set; }

    [IdColumn]
    public string ColKey2 { get; set; }

    [CompareColumn]
    public string ColValue1 { get; set; }

    [CompareColumn]
    public string ColValue2 { get; set; }
}
```

As you can see, you can also use the `CompareColumn` attribute on each property that you want to use for identifying
existing records.

### Using the IMergableRow interface

Sometimes, you want do the implementation of the IMergeableRow interface yourself. Here is an example implementation:

```C#
public class MySimpleRow : IMergeableRow
{
    [IdColumn]
    public long Key { get; set; }
    public string Value { get; set; }
    public DateTime ChangeDate { get; set; }
    public ChangeAction? ChangeAction { get; set; }
    public string UniqueId => Key.ToString();
}
```

Overwriting the Equals method and using the IdColumn attribute is optional. If no IdColumn
is passed, then you would need to use the `UseTruncateMethod`.

If you use the ExpandoObject, the properties ChangeDate and ChangeAction are appended automatically.
You will need to pass at least one IdColumn to the `IdColumns` when using the dynamic approach.

### Duplicate detection

The `DbMerge` has the flag `FindDuplicate` which by default is set to false. If set to true, the DbMerge will store
already processed input data additionally in an internal lookup table. If another records with the same id arrives in this component,
this record is then identified as a duplicate and will be treated as update instead (the default is that the DbMerge would try to insert both records, which likely results in an exception.

Please note that this will heavenly increase memory consumption as all of your input data is additionally stored in a dictionary before it is inserted into the destination.

```C#
DbMerge<MyMergeRow> merge = new DbMerge<MyMergeRow>(connection, "DestinationTable");
merge.FilterDuplicates = true;
```

## Dynamic objects

The above examples for the `DbMerge` make use of strongly typed objects (POCOs). The DbMerge also supports the usage of the dynamic `ExpandoObject`.
When using the `ExandoObject`, the properties `ChangeAction` and `ChangeDate` are added automatically to the object.

You can set the corresponding column types using the `IdColumns`, `ComareColumns` and `UpdateColumns` properties.

```C#
DbMerge dest = new DbMerge(SqlConnection, "DBMergeDynamicDeltaDestination") {
    MergeMode = MergeMode.Delta
};
dest.IdColumns.Add(new IdColumn() { IdPropertyName = "Id" });
dest.CompareColumns.Add(new CompareColumn() { ComparePropertyName = "CompareCol" });
dest.DeleteColumns.Add(new DeleteColumn() { DeletePropertyName = "DeleteCol", DeleteOnMatchValue = true });
```

## Performance considerations

The concept of DbMerge is to convert a source table into batches of insert/update and delete statements on the destination table. The MergeMode can be set to Delta or Full, with Delta performing a lookup before every operation and Full reading the entire destination table into memory. Inserts are generally faster than updates or deletes, and selecting data from the source table can also be slow depending on the destination table size,  indexes and constraints. The Truncate approach involves loading the destination table into memory first and then inserting new data, resulting in one big select and many inserts. The execution speed of the merge operation may vary depending on setup. If you're using the Full MergeMode, it's important to ensure that you have enough available RAM to load the id and compare columns into memory prior to execution.

Connection pooling is used by default in ETLBox, which relies on the ADO.NET connection pool to get and return database connections for each operation. The pool decides when to close a connection and when to open a new one. ETLBox makes extensive use of connection pooling to improve performance and throughput. The LeaveOpen property on the connection manager can be set to true to keep a connection open, but this can reduce performance when many parallel operations are happening. But if you want to explicitly reuse the existing connection for all your operations, you can set LeaveOpen to true. A connection is automatically left open and never put back to the pool if a transaction was started. (A transaction can be started with `BeginTransaction` on the corresponding ConnectionManager).

### Insertion speed

To test performance, it is recommended to start by inserting data into an empty staging table and measuring the insertion speed. The maximum time it takes to insert data into an empty table is the benchmark for the operation. LeaveOpen on the connection manager can be set to true or false, but it is not guaranteed that this will make a significant difference in performance. Destination tables used for inserts should not have indexes or foreign key constraints except for a primary key. If you need other indexes or constraints , you can remove them before your insert operation, and the recreate them after the insert has finished.

Different batch sizes  can lead to faster inserts (e.g. 10000 is much faster for SQL Server). ODBC and OleDb are generally much slower than the native connection managers.

So for testing performance, you can start with a data flow like this:

```C#
var oracleConnMan = new OracleConnectionManager("..);
var connMan = new SqlConnectionManager("...");
connMan.LeaveOpen = true; //default is false

CreateTable.Create() //Create an empty dest table
var source = new DbSource(oracleConnMan, "sourceTable");
//or use: source.Sql = "SELECT * FORM sourceTable LIMIT 100000"
var dest = new DbDestination(connMan, "destTable");
dest.BatchSize = 10000; //Higher (or lower) batch sizes can be faster, default is 1000 (Odbc/OleDb: 100)

source.LinkTo(dest);
Network.Execute(source);
```

To improve insertion speeds, you can attempt to parallelize the insertions into multiple threads or tasks. Essentially, you can run the code above in several tasks, ensuring that each task has its object creation and connection manager components to avoid shared resources. However, the resulting insert speed will depend on the remaining I/O "capacity" of your database. If you have one task only, I would expect the database to use up all available I/O, but that may not always be the case. On the other hand, you should also consider how to logically split up your source data (for instance, by selecting different id ranges in your select statement). Ensure that your source database is fast enough to read the data and that it doesn't become the bottleneck for your data flow.

### Merge speed

Once all data has been inserted into the staging table, you can use the `DbMerge` to sync data with your final table. If you are working with a database that offers a MERGE statement (e.g. SqlServer), you can also try out the performance of using the MERGE statement instead. Any merge method (either the `DbMerge` or a MERGE statement) should be slower than inserting data into an empty table (with only a primary key). So if your source table has *a lot* of changes between each sync (e.g. if millions of rows are changed during a day), then it could be faster to delete the destination table and then simply copy the source table again. If you have only a few changes, or need to explicitly determine the changes, the DbMerge should be the faster approach.

If you database offers some kind of CDC (Change Data Capture), which will reflect the changes on your source table, you can use this delta output as input for your merge dataflow instead of the original source. This should also increase performance.
