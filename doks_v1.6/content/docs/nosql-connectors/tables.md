---
title: "Azure Tables"
description: "Details about the Azure Tables connector"
lead: "The Azure Tables is a service that stores non-relational, structured data in a key-value store, with a schemaless design. Access to Table storage data is fast and cost-effective for many types of applications, and is typically lower in cost than traditional SQL for similar volumes of data."
draft: false
images: []
menu:
  docs:
    parent: "nosql-connectors"
weight: 300
toc: true
---

# ETLBox.Azure.Tables package

In order to use the Azure Tables connector, you need to add the nuget package {{< link-ext url="https://www.nuget.org/packages/ETLBox.Azure.Tables" text="ETLBox.Azure.Tables" >}} to your project. 

## Azure Tables Code examples

The following examples will use the Poco `TableEntity`:

```C#
public class TestEntity : ITableEntity
{
    /* ITableEntity interface */
    public ETag ETag { get; set; } = new ETag("*");
    public string PartitionKey { get; set; }
    public string RowKey { get; set; }
    public DateTimeOffset? Timestamp { get; set; }

    /* Test properties, only allowed data types */
    public byte[] ByteData { get; set; }
    public bool BoolData { get; set; }
    public DateTime? DateTimeData { get; set; }
    public DateTimeOffset? DateTimeOffsetData { get; set; }
    public double DoubleData { get; set; }
    public decimal DecimalData { get; set; }
    public float FloatData { get; set; }
    public long LongData { get; set; }
    public int IntData { get; set; }
    public string SomeString { get; set; }
}
```

## Table Source Examples

```C#
string tablename = "simplereadtest";
TableTestHelper.RecreateTable(serviceClient, tablename);
PrefillTable(tablename);

var source = new TableSource<TestEntity>();
source.ConnectionString = connectionString;
source.TableName = tablename;
var dest = new MemoryDestination<TestEntity>();
source.LinkTo(dest);
Network.Execute(source);
```


## Table Destination examples

More information about allowed data types: {{< link-ext url="https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-the-table-service-data-model" text="Understanding the table service data model" >}}

### Bulk insert

```C#
public static IEnumerable<TestEntity> GenerateDefaultTestData() {
    return new List<TestEntity>() {
        new TestEntity() {
            PartitionKey = "1",
            RowKey = "1",           
            SomeString = "Test String 1 (max 64kb!)"
        },
        new TestEntity() {
            PartitionKey = "1",
            RowKey = "2",           
            SomeString = "Test String 2 (max 64kb!)"
        },
        new TestEntity() {
            PartitionKey = "2",
            RowKey = "3",           
            SomeString = "Test String 3 - different partition!!!"
        },
    }
}

string tablename = "writetestinsert";
TableTestHelper.RecreateTable(serviceClient, tablename);

var source = new MemorySource<TestEntity>();
source.Data = TestDataGenerator.GenerateDefaultTestData();

var dest = new TableDestination<TestEntity>();
dest.ConnectionString = connectionString;
dest.TableName = tablename;
source.LinkTo(dest);
Network.Execute(source);
```

### Other bulk operations

The `TableDestination` also allows other operation the inserting data. It support the following bulk actions:
- UpdateReplace
- UpdateMerge
- Delete
- Upsert Merge

Here is an example that shows how data can be updated with the corresponding bulk action:

```C#
string tablename = "writetestmixed";
var source = new MemorySource<TestEntity>();
source.Data = TestDataGenerator.GenerateTestData();
var dest = new TableDestination<TestEntity>();
dest.ConnectionString = connectionString;
dest.TableName = tablename;
dest.SetEntityActionOptions = (options, entity) => {
    if (entity.RowKey == "1")
        options.EntityAction = EntityActionType.UpdateReplace;
    else if (entity.RowKey == "2")
        options.EntityAction = EntityActionType.UpdateMerge;
    else if (entity.RowKey == "3")
        options.EntityAction = EntityActionType.Delete;
    else if (entity.RowKey == "4")
        options.EntityAction = EntityActionType.UpsertMerge;
};

source.LinkTo(dest);
Network.Execute(source);
```

### Using transactional batches

By default, data is inserted without an enclosing transaction. This leads to higher insert/update/delete performance, and also incoming data can be from different partitions. 

The `TableDestination` has a property `UseTransactionalBatch`. If set to true, all records are inserted with an enclosing transaction for each batch. If one of the records in the batch is flawed (e.g. throws an exception or can't be inserted/updated/delete for some reason), the whole batch will not be inserted. 
You can redirect erroneous batches in your data flow using 'LinkErrorsTo()' when linking your components. 

Setting this property to true  will decrease performance. Also, a transactional batch can only be created for the same partition. Before inserted the data, it is grouped by the partition key and then inserted as a transactional batch for each partition key. 

## Dynamic object support

Like all other data flow components, `TableSource` and `TableDestination` support the dynamic `ExpandoObject`.

### Table Source with dynamic

```C#
string tablename = "readdynamictest";
TableTestHelper.RecreateTable(serviceClient, tablename);
PrefillTable(tablename);
var source = new TableSource();
source.ConnectionString = connectionString;
source.TableName = tablename;
var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);
```

### Table destination with dynamic

```C#
string tablename = "writetestinsertdynamic";
TableTestHelper.RecreateTable(serviceClient, tablename);
var source = new MemorySource();
source.Data = TestDataGenerator.GenerateDynamicDefaultTestData();
var dest = new TableDestination();
dest.ConnectionString = connectionString;
dest.TableName = tablename;
source.LinkTo(dest);
Network.Execute(source);
```