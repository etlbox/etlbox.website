---
title: "Mongo DB"
description: "The ETLBox MongoDB connector helps you easily integrate MongoDB into your data workflows. Whether you're working with structured classes or flexible dynamic data, it provides a straightforward way to read from and write to MongoDB collections."
lead: "MongoDB is a popular NoSQL database known for its flexibility and JSON-based document model. The ETLBox MongoDB connector supports both typed and dynamic data, making it a good fit for scenarios where schemas may vary or evolve."
draft: false
images: []
menu:
  docs:
    parent: "nosql-databases"
weight: 420
toc: true
chatgpt-review: true
---

ETLBox provides connectors for reading from and writing to MongoDB collections. These connectors use the official {{< link-ext text="MongoDB C# Driver" url="https://mongodb.github.io/mongo-csharp-driver/" >}} under the hood, relying on the built-in `BsonSerializer` for serialization and deserialization.

## MongoDbSource

`MongoDbSource` reads documents from a MongoDB collection and maps them to strongly typed objects or `ExpandoObject` instances.

### Basic Usage

```csharp
var source = new MongoDbSource<MyRow> {
    ConnectionString = "mongodb://localhost:27017",
    DatabaseName = "etlbox",
    CollectionName = "movies"
};
var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);
```

### Filtering with FilterDefinition

You can restrict results using MongoDB's `FilterDefinition`:

```csharp
var filter = Builders<BsonDocument>.Filter.Gt("Col1", 2);
var source = new MongoDbSource<MyRow> {
    ConnectionString = "<your-connection-string>",
    DatabaseName = "etlbox",
    CollectionName = "movies",
    Filter = filter,
    FindOptions = new FindOptions {
        BatchSize = 2
    }
};
```

The `FindOptions` let you optimize data retrieval:

- `BatchSize` controls how many documents are retrieved per batch.
- Other options like `Limit`, `Skip`, and `Projection` are also supported.

See the {{< link-ext text="MongoDB driver docs on FindOptions" url="https://www.mongodb.com/docs/drivers/csharp/current/fundamentals/crud/read-operations/#findoptions" >}} for full details.

### Using Dynamic Objects

If the structure of your MongoDB documents is not known at compile time, use a dynamic source:

```csharp
var source = new MongoDbSource {
    ConnectionString = "mongodb://localhost:27017",
    DatabaseName = "etlbox",
    CollectionName = "movies"
};
var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data) {
    Console.WriteLine(row.Title);
}
```

## Connection Options

You can configure access to your MongoDB server in two ways:

#### Using a connection string (recommended for most use cases)

```csharp
var source = new MongoDbSource<MyRow> {
    ConnectionString = "mongodb://localhost:27017",
    DatabaseName = "etlbox",
    CollectionName = "movies"
};
```

#### Using an existing MongoClient

Reusing an initialized client gives you better control over client configuration and resource management:
```csharp
var client = new MongoClient("mongodb://localhost:27017");

var source = new MongoDbSource<MyRow> {
    DbClient = client,
    DatabaseName = "etlbox",
    CollectionName = "movies"
};

var dest = new MongoDbDestination<MyRow> {
    DbClient = client,
    DatabaseName = "etlbox",
    CollectionName = "archive"
};
```

You don’t need to dispose of the `MongoClient`. The MongoDB driver manages connections internally.

## MongoDbDestination

`MongoDbDestination` writes objects or dynamic data into a MongoDB collection. It supports batch operations and can work with client-managed sessions.

### Writing POCOs

```csharp
var source = new MemorySource<MyRow>();
source.Data = GetSampleData();

var dest = new MongoDbDestination<MyRow> {
    ConnectionString = "mongodb://localhost:27017",
    DatabaseName = "etlbox",
    CollectionName = "movies"
};

source.LinkTo(dest);
Network.Execute(source);
```

### Writing Dynamic Data

```csharp
var source = new MemorySource();
dynamic row = new ExpandoObject();
row.Title = "Test Movie";
row.Year = 2023;
source.DataAsList.Add(row);

var dest = new MongoDbDestination {
    ConnectionString = "mongodb://localhost:27017",
    DatabaseName = "etlbox",
    CollectionName = "movies"
};

source.LinkTo(dest);
Network.Execute(source);
```

### Using MongoDB Sessions

If you're working with transactions or require finer control over batch execution, you can assign an active session to the destination:

```csharp
var client = new MongoClient("mongodb://localhost:27017");
using var session = client.StartSession();

var dest = new MongoDbDestination<MyRow> {
    DbClient = client,
    Session = session,
    DatabaseName = "etlbox",
    CollectionName = "movies"
};
```

This allows ETLBox operations to participate in a larger transaction or reuse an existing context. Make sure the MongoDB deployment supports transactions (e.g., replica sets or sharded clusters).
