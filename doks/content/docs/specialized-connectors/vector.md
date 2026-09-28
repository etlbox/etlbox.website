---
title: "Vector Store (AI)"
description: "VectorStoreSource and VectorStoreDestination read and write any Microsoft.Extensions.VectorData collection from an ETLBox data flow. A VECTOR column in a relational database stays on the normal database connectors."
lead: "Read and write a vector store from the same data flow you already use for files and databases. <code>VectorStoreSource</code> runs a similarity search or a filtered read. <code>VectorStoreDestination</code> upserts records in batches. Both talk to <code>VectorStoreCollection</code> from Microsoft.Extensions.VectorData, so any store that implements that abstraction can be plugged in. Embeddings are created by a separate transformation, not by the destination."
draft: false
images: []
menu:
  docs:
    parent: "specialized-connectors"
    weight: 330
toc: true
chatgpt-review: true
---

## Overview

Both components talk to a `VectorStoreCollection<TKey, TRecord>` from `Microsoft.Extensions.VectorData`. You create the store and the collection yourself and pass the collection into the component. ETLBox does not open a connection and does not pick a provider.

That keeps the pipeline independent of the store. A `VECTOR` column in SQL Server, Postgres, or another relational database is a different case. Read and write that column with the [relational database connectors](../../relational-databases/overview/). `DbSource` and `DbDestination` already move the value with the rest of the row. The components on this page are for a vector store, not for a vector column inside a table.

| Component | Direction | What it does |
|-----------|-----------|--------------|
| **VectorStoreSource** | Read | Similarity search, or a filtered read when no search vector is set. |
| **VectorStoreDestination** | Write | Ensures the collection exists, then upserts records in batches. |

- Part of the **ETLBox.AI** package
- Works with POCOs that carry the vector-store attributes (`VectorStoreKey`, `VectorStoreData`, `VectorStoreVector`)
- A non-generic `VectorStoreSource` / `VectorStoreDestination` uses `string` keys and `ExpandoObject` records
- The destination does not call an embedding model. Put an [Embedding (AI)](../../transformations/embedding/) or [Embedding Batch (AI)](../../blocking-transformations/embedding-batch/) transformation in front of it when the vector still has to be created

## Defining the record

The record type is the same type the vector-store provider expects. Mark the key, the payload fields, and the vector:

```csharp
public class Document
{
    [VectorStoreKey]
    public string Key { get; set; }

    [VectorStoreData]
    public string Text { get; set; }

    [VectorStoreVector(3)]
    public ReadOnlyMemory<float> Embedding { get; set; }
}
```

`VectorStoreVector` takes the number of dimensions the collection stores. A filterable field, such as a category or a price used in `Filter`, is marked with `VectorStoreData(IsIndexed = true)`.

Create the collection from the store, then hand it to the source or destination:

```csharp
var store = new InMemoryVectorStore();
VectorStoreCollection<string, Document> collection =
    store.GetCollection<string, Document>("documents");
```

## Vector Store Source

`VectorStoreSource<TKey, TRecord>` is a streaming source. It reads the collection once and sends each record downstream. A vector-store collection cannot be enumerated without a key, so every run needs either a search vector or a filter.

```csharp
var source = new VectorStoreSource<string, Document>(collection) {
    SearchVector = new[] { 1f, 0f, 0f },
    Top = 2
};
var dest = new MemoryDestination<Document>();
source.LinkTo(dest);
await Network.ExecuteAsync(source);
```

With the three documents Alpha `(1, 0, 0)`, Beta `(0, 1, 0)`, and Gamma `(0.9, 0.1, 0)`, a search for `(1, 0, 0)` with `Top = 2` returns Alpha and Gamma.

### Similarity search

When `SearchVector` is set, the source calls `Collection.SearchAsync`. `Filter` is optional and is passed through as the search filter. `Top` is the maximum number of hits. The default is 10.

```csharp
var source = new VectorStoreSource<string, Product>(collection) {
    SearchVector = new[] { 1f, 0.1f, 0.1f },
    Filter = p => p.Price < 100,
    Top = 5
};
```

Only the record is forwarded. The similarity score from `VectorSearchResult` is not part of the output row.

### Filtered read

Leave `SearchVector` empty and set `Filter`. The source then calls `Collection.GetAsync` with that expression and `Top`. A source that has neither a search vector nor a filter throws before the network starts. `Top` must be greater than 0.

### IncludeVectors

Vectors are omitted from the outgoing records unless you set `IncludeVectors = true`. Leave it `false` when the next step only needs the payload, for example a recommendation that keeps the name and the price.

### Limits

`ProgressCountIsInLimit` stops the read early, the same way it does on other ETLBox sources. Rows are sent through the source buffer one by one.

## Vector Store Destination

`VectorStoreDestination<TKey, TRecord>` is a batch destination. Before the first write it calls `EnsureCollectionExistsAsync`. Each full batch, and the remainder when the source completes, is written with `UpsertAsync`. Existing keys are updated.

```csharp
var dest = new VectorStoreDestination<string, Document>(collection);
source.LinkTo(dest);
Network.Execute(source);
```

The destination does not generate embeddings. A record that reaches it without a vector is stored as it is. Create the vector earlier in the flow:

```csharp
var embed = new EmbeddingTransformation<EmbeddedDocument>(generator) {
    TextSelector = row => row.Text,
    VectorSetter = (row, vector) => row.Embedding = vector
};
var dest = new VectorStoreDestination<string, EmbeddedDocument>(collection);

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);
```

The embedding transformation writes into the same object instance, so the destination receives the row already filled in.

### Batch size

The default batch size is 1000, inherited from `DataFlowBatchDestination`. Pass a smaller size when the store prefers smaller upserts:

```csharp
var dest = new VectorStoreDestination<string, Document>(collection, batchSize: 100);
```

`BeforeBatchWrite` runs on each batch before the upsert and can still change the records. `AfterBatchWrite` runs after a batch was stored and receives a copy of that batch.

`BatchSize` must be greater than 0 and must not exceed `MaxBufferSize`.

### What the destination does not do

- It does not delete the collection. If you need an empty index, call `EnsureCollectionDeletedAsync` yourself before the flow starts.
- It does not wait for a search index to become queryable. Azure AI Search indexes new documents asynchronously. A search that runs immediately after the write can miss rows that were just upserted.
- It does not read the records back. `ProgressCount` is the number of rows accepted for write.

## Providers

ETLBox only sees `VectorStoreCollection`. Any store with an implementation of that abstraction works: in-memory, Azure AI Search, Azure Cosmos DB, Qdrant, Pinecone, Redis, Postgres with pgvector, and others published for `Microsoft.Extensions.VectorData`. You create the collection with that provider's package and pass it in. Nothing in the data flow changes when you switch stores.

The recipes use three of them.

**In-memory.** `InMemoryVectorStore` keeps the collection in the process. Useful for tests and for a small catalog that does not need a server.

**Azure AI Search.** `AzureAISearchVectorStore` takes a `SearchIndexClient`. Mark fields you filter on with `IsIndexed = true`.

**Azure Cosmos DB.** `CosmosVectorStore` takes a Cosmos `Database`. The database itself has to exist before the flow starts. The destination creates the collection.

More copyable setups are in the [vector store source recipes](/recipes/sources/vectorsource/) and the [vector store destination recipes](/recipes/destinations/vectordestination/).
