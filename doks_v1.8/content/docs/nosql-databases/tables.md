---
title: "Azure Tables"
description: "This guide shows how to use ETLBox with Azure Table Storage. You'll learn how to configure connections, read data into your dataflows, and write updates using various bulk operations. The connector supports both strongly typed entities and dynamic objects, and can be used with or without transactional batching."
lead: "The Azure Tables connector in ETLBox lets you efficiently interact with Azure Table Storage — a easy-to-use and highly scalable NoSQL key-value store. Designed for structured but flexible data, Azure Tables are ideal for storing large volumes of semi-structured data."
draft: false
images: []
menu:
  docs:
    parent: "nosql-databases"
weight: 420
toc: true
chatgpt-review: true
---

This connector supports reading and writing entities with dynamic or strongly typed models, full batching support, and custom update operations.". ETLBox translates each row into a supported Azure Table entity format and uses the {{< link-ext text="Azure.Data.Tables" url="https://learn.microsoft.com/en-us/dotnet/api/overview/azure/data.tables-readme" >}} SDK under the hood.

## Connecting to Azure Table Storage

There are several ways to configure your connection to Azure Tables. The examples below will use a `TableSource`, but the same properties also exist on the `TableDestination`.

**Using a connection string**

The simplest way is to set the `ConnectionString` property.

```csharp
var source = new TableSource<TestEntity> {
    ConnectionString = "DefaultEndpointsProtocol=https;AccountName=account;AccountKey=key;EndpointSuffix=core.windows.net";
    TableName = "Movies"
};
```

**Using an endpoint and credentials**

If you need more control or use Azure Identity, you can provide the `Endpoint` along with either a `TableSharedKeyCredential` or a `TokenCredential`.

```csharp
var source = new TableSource<TestEntity> {
    Endpoint = new Uri("https://account.table.core.windows.net");
    TableSharedKeyCredential = new TableSharedKeyCredential("account", "key");
}
```

**Using an existing TableClient**

You may also pass an initialized `TableClient` to reuse a configured client instance.

```csharp
using Azure.Data.Tables;

var client = new TableClient("<your-connection-string>", "mytable");
var source = new TableSource<TestEntity> {
    TableClient = client
};
```

## TableSource

`TableSource` reads records from an Azure Table and converts each row into a POCO or dynamic object. The table must already exist and contain supported data types. Azure Tables restrict columns to a {{< link-ext text="specific set of data types" url="https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-the-table-service-data-model" >}}.

```csharp
var source = new TableSource<TestEntity> {
    ConnectionString = "<your-connection-string>",
    TableName = "Movies"
};
var dest = new MemoryDestination<TestEntity>();
source.LinkTo(dest);
Network.Execute(source);
```

### Filtering and Column Selection

You can narrow down the data using a filter expression and select specific columns:

```csharp
var source = new TableSource<TestEntity> {
    ConnectionString = "<your-connection-string>",
    TableName = "Movies",
    Filter = "PartitionKey eq '1'",
    Select = new[] { "PartitionKey", "RowKey", "SomeString" }
};
```

- `Filter` uses the {{< link-ext text="OData syntax for querying tables" url="https://learn.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities" >}}.
- `Select` defines which properties to return.

### Using Dynamic Objects

If you use a dynamic object as the target type, every returned column will be accessible as a property in the `ExpandoObject`.

```csharp
var source = new TableSource {
    ConnectionString = "<your-connection-string>",
    TableName = "Movies"
};
var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data) {
    Console.WriteLine($"PartitionKey: {row.PartitionKey}, RowKey: {row.RowKey}, SomeString: {row.SomeString}");
}
```

This is useful when the structure of the data is not known at compile time.

## TableDestination

`TableDestination` is used to insert, update, delete, or upsert entities into an Azure Table. The table must already exist.

```csharp
var source = new MemorySource<TestEntity>();
source.Data = GenerateDefaultTestData();

var dest = new TableDestination<TestEntity> {
    ConnectionString = "<your-connection-string>",
    TableName = "Movies"
};
source.LinkTo(dest);
Network.Execute(source);
```

Each row must implement the `ITableEntity` interface, including `PartitionKey` and `RowKey`. Properties must use {{< link-ext text="supported Azure Table data types" url="https://learn.microsoft.com/en-us/rest/api/storageservices/understanding-the-table-service-data-model" >}}.

### Custom Entity Actions

By default, rows are inserted. You can customize the operation for each record using `SetEntityActionOptions` and assign an `EntityActionType`, such as:

- `Add`
- `UpdateMerge`
- `UpdateReplace`
- `UpsertMerge`
- `UpsertReplace`
- `Delete`

```csharp
var dest = new TableDestination<TestEntity> {
    ConnectionString = "<your-connection-string>",
    TableName = "Movies",
};
dest.SetEntityActionOptions = (options, entity) => {
    if (entity.RowKey == "1")
        options.EntityAction = EntityActionType.UpdateMerge;
    else if (entity.RowKey == "2")
        options.EntityAction = EntityActionType.Delete;
    else
        options.EntityAction = EntityActionType.Add;
};
```

### Transactional Batches

Enable transactional grouping by setting `UseTransactionalBatch = true`. Records will be grouped by `PartitionKey` and written atomically.

```csharp
var dest = new TableDestination<TestEntity> {
    ConnectionString = "<your-connection-string>",
    TableName = "Movies",
    UseTransactionalBatch = true;
};
```

{{< callout context="note" icon="outline/info-circle" >}}
All entities in a transactional batch must share the same `PartitionKey`. If any record fails, the entire batch is rolled back. This improves data integrity but may reduce throughput for diverse partitions.
{{< /callout >}}

### Writing Dynamic Objects

`TableDestination` also supports writing `ExpandoObject` instances. Each dynamic row must include at least `PartitionKey` and `RowKey`.

```csharp
var source = new MemorySource();
dynamic row = new ExpandoObject();
row.PartitionKey = "1";
row.RowKey = "001";
row.SomeString = "Dynamic Row";
source.DataAsList.Add(row);

var dest = new TableDestination {
    ConnectionString = "<your-connection-string>",
    TableName = "Movies"
};
source.LinkTo(dest);
Network.Execute(source);
```

This is helpful for scenarios where the structure of incoming data is not fixed.
