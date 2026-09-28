---
title: "Vector Store Destination"
description: "C# recipes for VectorStoreDestination in ETLBox. Upsert pipeline rows into a vector store collection, including rows that were embedded in the same flow."
lead: "This article contains example code that shows the usage of the VectorStoreDestination component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
    weight: 47
toc: true
---

`VectorStoreDestination` upserts incoming records into a `VectorStoreCollection`. It does not create embeddings. When a row still needs a vector, run an `EmbeddingTransformation` in front of the destination.

## Write vectors

This example writes two records that already contain a vector into an in-memory store.

```C#
public class Document
{
    [VectorStoreKey]
    public string Key { get; set; }

    [VectorStoreData]
    public string Text { get; set; }

    [VectorStoreVector(3)]
    public ReadOnlyMemory<float> Embedding { get; set; }
}

var store = new InMemoryVectorStore();
var collection = store.GetCollection<string, Document>("documents");

var source = new MemorySource<Document>();
source.DataAsList.Add(new Document { Key = "1", Text = "Alpha", Embedding = new[] { 1f, 0f, 0f } });
source.DataAsList.Add(new Document { Key = "2", Text = "Beta", Embedding = new[] { 0f, 1f, 0f } });

var dest = new VectorStoreDestination<string, Document>(collection);
source.LinkTo(dest);
Network.Execute(source);

foreach (var row in source.DataAsList)
    Console.WriteLine($"Key:{row.Key} Text:{row.Text}");

//Outputs
//Key:1 Text:Alpha
//Key:2 Text:Beta
```

## Embed, then store

This example creates the embedding inside the flow and writes the same row into the vector store.

```C#
public class EmbeddedDocument
{
    [VectorStoreKey]
    public string Key { get; set; }

    [VectorStoreData]
    public string Text { get; set; }

    [VectorStoreVector(1536)]
    public ReadOnlyMemory<float> Embedding { get; set; }
}

var store = new InMemoryVectorStore();
var collection = store.GetCollection<string, EmbeddedDocument>("reviews");

var source = new MemorySource<EmbeddedDocument>();
source.DataAsList.Add(new EmbeddedDocument { Key = "1", Text = "ETLBox moves data." });

var embed = new EmbeddingTransformation<EmbeddedDocument>(AiClients.OpenAiEmbeddings()) {
    TextSelector = row => row.Text,
    VectorSetter = (row, vector) => row.Embedding = vector
};
var dest = new VectorStoreDestination<string, EmbeddedDocument>(collection);

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);

EmbeddedDocument stored = collection.GetAsync("1").GetAwaiter().GetResult();
Console.WriteLine($"Key:{stored.Key} Dimensions:{stored.Embedding.Length}");

//Outputs
//Key:1 Dimensions:1536
```

## Write to Azure AI Search

This example embeds 30 documents and upserts them into an Azure AI Search index in batches of 10.

```C#
public class EmbeddedDocument
{
    [VectorStoreKey]
    public string Key { get; set; }

    [VectorStoreData]
    public string Text { get; set; }

    [VectorStoreVector(1536)]
    public ReadOnlyMemory<float> Embedding { get; set; }
}

var indexClient = new SearchIndexClient(
    new Uri(DefaultConfigReader.CustomValue("AzureAISearch", "Endpoint")),
    new AzureKeyCredential(DefaultConfigReader.CustomValue("AzureAISearch", "ApiKey")));
var store = new AzureAISearchVectorStore(indexClient);
var collection = store.GetCollection<string, EmbeddedDocument>("etlbox-documents");
await collection.EnsureCollectionDeletedAsync();
await collection.EnsureCollectionExistsAsync();

var source = new MemorySource<EmbeddedDocument>();
string[] topics = { "ETL pipelines move data between systems.", "Vector search finds similar documents.", "Embeddings turn text into numbers." };
for (int i = 1; i <= 30; i++)
    source.DataAsList.Add(new EmbeddedDocument { Key = i.ToString(), Text = $"{topics[i % topics.Length]} Document {i}." });

var embed = new EmbeddingTransformation<EmbeddedDocument>(AiClients.OpenAiEmbeddings()) {
    TextSelector = row => row.Text,
    VectorSetter = (row, vector) => row.Embedding = vector
};
var dest = new VectorStoreDestination<string, EmbeddedDocument>(collection, 10);
source.LinkTo(embed).LinkTo(dest);
await Network.ExecuteAsync(source);

var stored = await collection
    .GetAsync(Enumerable.Range(1, 5).Select(i => i.ToString()), new RecordRetrievalOptions { IncludeVectors = true })
    .ToListAsync();
foreach (var row in stored.OrderBy(r => int.Parse(r.Key)))
    Console.WriteLine($"Key:{row.Key} Text:{row.Text} Dimensions:{row.Embedding.Length}");
Console.WriteLine($"... {dest.ProgressCount} documents stored in index '{collection.Name}'");

//Outputs
//Key:1 Text:Vector search finds similar documents. Document 1. Dimensions:1536
//...
//... 30 documents stored in index 'etlbox-documents'
```

## Write to Azure Cosmos DB

This example embeds the same documents and upserts them into an Azure Cosmos DB vector container.

```C#
public class EmbeddedDocument
{
    [VectorStoreKey]
    public string Key { get; set; }

    [VectorStoreData]
    public string Text { get; set; }

    [VectorStoreVector(1536)]
    public ReadOnlyMemory<float> Embedding { get; set; }
}

var client = new Microsoft.Azure.Cosmos.CosmosClient(
    DefaultConfigReader.CustomValue("AzureCosmosDB", "ConnectionString"),
    new Microsoft.Azure.Cosmos.CosmosClientOptions {
        UseSystemTextJsonSerializerWithOptions = new System.Text.Json.JsonSerializerOptions()
    });
await client.CreateDatabaseIfNotExistsAsync("etlbox-vectors");
var database = client.GetDatabase("etlbox-vectors");
var store = new CosmosVectorStore(database);
var collection = store.GetCollection<string, EmbeddedDocument>("documents");
await collection.EnsureCollectionDeletedAsync();
await collection.EnsureCollectionExistsAsync();

var source = new MemorySource<EmbeddedDocument>();
string[] topics = { "ETL pipelines move data between systems.", "Vector search finds similar documents.", "Embeddings turn text into numbers." };
for (int i = 1; i <= 30; i++)
    source.DataAsList.Add(new EmbeddedDocument { Key = i.ToString(), Text = $"{topics[i % topics.Length]} Document {i}." });

var embed = new EmbeddingTransformation<EmbeddedDocument>(AiClients.OpenAiEmbeddings()) {
    TextSelector = row => row.Text,
    VectorSetter = (row, vector) => row.Embedding = vector
};
var dest = new VectorStoreDestination<string, EmbeddedDocument>(collection, 10);
source.LinkTo(embed).LinkTo(dest);
await Network.ExecuteAsync(source);

EmbeddedDocument stored = await collection.GetAsync("5", new RecordRetrievalOptions { IncludeVectors = true });
Console.WriteLine($"Key:{stored.Key} Text:{stored.Text} Dimensions:{stored.Embedding.Length}");
Console.WriteLine($"... {dest.ProgressCount} documents stored in container '{collection.Name}'");

//Outputs
//Key:5 Text:Vector search finds similar documents. Document 5. Dimensions:1536
//... 30 documents stored in container 'documents'
```
