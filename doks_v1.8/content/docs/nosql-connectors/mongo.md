---
title: "Mongo Db"
description: "MongoSource and MongoDestination in detail"
lead: "A detailed overview of the MongoSource and MongoDestination."
draft: false
images: []
menu:
  docs:
    parent: "nosql-connectors"
weight: 320
toc: true
---

## MongoSource

The `MongoSource` let you read data from MongoDb. Serialization from the json into your data object will use the default deserialization build-in in the MongoDb C# driver (using the `BsonSerializer`).

If you want to change the default deserialization, {{< link-ext text="you can use the static classes provided by the driver" url="https://mongodb.github.io/mongo-csharp-driver/1.11/serialization/" >}}.

### Example

```C#
var source = new MongoDbSource<MyRow>();
source.ConnectionString = ConnectionString;
source.DatabaseName = "etlbox";
source.CollectionName = "simple_source";

var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);

Network.Execute(source);
```

### Filter

You can add a filter to get only particular data. When the filter is applied, the find options are used to add additional limitation, e.g. the batch size for the filtering.

```C#
var source = new MongoDbSource<MyRow>();
FilterDefinition<BsonDocument> filter = Builders<BsonDocument>.Filter.Gt("Col1", 2);
source.Filter = filter;
source.FindOptions = new FindOptions()
{
    BatchSize = 2,
};
```
## MongoDestination

The `MongoDestination` will write your incoming data as json into a collection in MongoDb. The default Bson serializtion from the MongoDb C# driver is used.

```C#
var dest = new MongoDbDestination<MyRow>();
dest.ConnectionString = ConnectionString;
dest.DatabaseName = "etlbox";
dest.CollectionName = "simple_dest";

source.LinkTo(dest);
Network.Execute(source);
```


## Using dynamic objects

The `MonogSource` and `MongoDestination` support both the `ExpandoObject`.

```C#
var source = new MongoDbSource();
source.ConnectionString = ConnectionString;
source.DatabaseName = "etlbox";
source.CollectionName = "simple_dynamic";

var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);
```

## Reuse existing mongo clients

If you provide a connection string (and database name), a new MongoClient is instantiated when executing the data flow. If you want to reuse an existing MongoClient (which is recommended if you already have one "ready"), you can pass this to the DbClient property.

```C#
MongoClient existingClient = new MongoClient("mongodb://localhost:27017")
var source = new MongoDbSource<MyRow>();
source.DbClient = client;
```

The `DbClient` property is available on the `MongoSource` and `MongoDestination`.
