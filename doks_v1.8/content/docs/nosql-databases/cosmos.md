---
title: "Azure Cosmos DB"
description: "Learn how to connect ETLBox with Azure Cosmos DB to read and write JSON documents in your ETL workflows. This guide walks through reading data using queries, writing documents with bulk or transactional operations, and working with both strongly typed and dynamic objects."
lead: "The ETLBox.Azure.CosmosDb connector allows integrating Azure Cosmos DB into your ETL pipelines. It supports both reading and writing operations using typed objects or dynamic structures and is suitable for working with JSON-style documents stored in Cosmos DB containers."
draft: false
images: []
menu:
  docs:
    parent: "nosql-databases"
weight: 420
toc: true
chatgpt-review: true
---

## CosmosSource

The `CosmosSource<T>` component lets you read data from a Cosmos DB container using SQL-like queries. The data is deserialized into strongly typed objects or dynamic types like `ExpandoObject`.

### Reading All Documents

To read all documents from a container, define a SQL query and specify the required connection information:

```csharp
var source = new CosmosSource<Movie>() {
    Sql = "SELECT * FROM Movies",
    ContainerName = "Movies",
    DatabaseName = "etlbox",
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;"
};

var dest = new MemoryDestination<Movie>();
source.LinkTo(dest);
Network.Execute(source);
```

This retrieves every document in the `Movies` container and stores them in memory.

### Reading with Parameters

You can use a parameterized query instead of a raw SQL string. This provides better control and security:

```csharp
var source = new CosmosSource<Movie>() {
    QueryDefinition = new QueryDefinition("SELECT * FROM Movies m WHERE m.id IN (@p1, @p2)")
        .WithParameter("@p1", "1")
        .WithParameter("@p2", "2"),
    ContainerName = "Movies",
    DatabaseName = "etlbox",
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;"
};
```

### Reading into Dynamic Objects

To read documents into dynamic types rather than a predefined class, use `CosmosSource` without a generic parameter:

```csharp
var source = new CosmosSource() {
    Sql = "SELECT * FROM Movies",
    ContainerName = "Movies",
    DatabaseName = "etlbox",
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;"
};
```

Each document will be deserialized into an `ExpandoObject`.

## Shared Configuration

Both the source and destination components share several important configuration options for managing authentication and connectivity.

Here's the updated section with examples for each connection method:

### Connecting to Cosmos DB

You can configure the connection in several ways depending on your deployment scenario:

### Required Identifiers

You always need to specify the `ContainerName` and `DatabaseName`, which point to the specific Cosmos DB resources you want to access. Make sure the database and container exist, or create them before executing the flow.


#### Using a Connection String

The simplest and most common method. Provide your Cosmos DB connection string directly:

```csharp
var source = new CosmosSource<Movie>() {
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;",
    DatabaseName = "etlbox",
    ContainerName = "Movies",
    Sql = "SELECT * FROM Movies"
};
```

#### Using Account Endpoint and Auth Key or Resource Token

If you want to avoid using a full connection string, you can use the account endpoint and a key or token:

```csharp
var source = new CosmosSource<Movie>() {
    AccountEndpoint = "https://<your-account>.documents.azure.com:443/",
    AuthKeyOrResourceToken = "<your-key-or-token>",
    DatabaseName = "etlbox",
    ContainerName = "Movies",
    Sql = "SELECT * FROM Movies"
};
```

In this case, the `ConnectionString` is not required and will be ignored.

#### Using Azure Credentials (AzureKeyCredential or AzureTokenCredential)

If you're working in an environment with Azure-managed identities or using token-based auth, you can provide credentials:

```csharp
var credential = new Azure.Identity.DefaultAzureCredential(); // or use AzureKeyCredential
var source = new CosmosSource<Movie>() {
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;",
    AzureTokenCredential = credential,
    DatabaseName = "etlbox",
    ContainerName = "Movies",
    Sql = "SELECT * FROM Movies"
};
```

These credential-based options require the `ConnectionString` to be set.

## CosmosDestination

The `CosmosDestination<T>` component writes objects into a Cosmos DB container. It supports various write strategies, transactional batching, and dynamic documents.

### Writing Data

By default, the destination performs bulk insert operations. This means each object is added as a new document, using the default Cosmos DB bulk execution model.

```csharp
var dest = new CosmosDestination<Movie>() {
    ContainerName = "Movies",
    DatabaseName = "etlbox",
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;",
};
```

This configuration will insert incoming records in batches, improving performance.

### Controlling Write Behavior Per Record

Sometimes you may want to perform different operations for different records. You can use the `SetItemActionOptions` delegate to define behavior per item. Supported actions include `Create`, `Replace`, `Upsert`, and `Delete`.

```csharp
var dest = new CosmosDestination<Movie>() {
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;",
    DatabaseName = "etlbox",
    ContainerName = "Movies",
};

dest.SetItemActionOptions = (options, item) => {
    if (item.Id == "1")
        options.ItemAction = ItemAction.Replace;
    else if (item.Id == "2")
        options.ItemAction = ItemAction.Delete;
    else if (item.Id == "4")
        options.ItemAction = ItemAction.Upsert;
    else
        options.ItemAction = ItemAction.Create;
    options.Id = item.Id;
    options.PartitionKey = new PartitionKey(item.Block);
};
```

This gives full control over how each record is written or updated.

### Transactional Batching

For scenarios requiring atomicity, you can enable transactional batching with `UseTransactionalBatch = true`. When enabled, records with the same partition key are grouped into a single batch, which is then committed as a single unit.

Keep in mind:

- The batch size cannot exceed 100 items.
- Every record must have a defined `PartitionKey`.
- If one record fails, the whole batch is rolled back.
- You can redirect failed batches using `LinkErrorsTo()`.

```csharp
var dest = new CosmosDestination<Movie>() {
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;",
    DatabaseName = "etlbox",
    ContainerName = "Movies",
    UseTransactionalBatch = true
};
```

This mode is ideal when data consistency is critical, but it comes with reduced performance compared to standard bulk inserts.

### Writing Dynamic Documents

Dynamic support is available by using `CosmosDestination` without a type parameter:

```csharp
var dest = new CosmosDestination() {
    ContainerName = "Movies",
    DatabaseName = "etlbox",
    ConnectionString = "AccountEndpoint=https://<your-account>.documents.azure.com:443/;AccountKey=<your-key>;",
};
```

This allows working with `ExpandoObject`, which is useful when your data structure is not fixed.
