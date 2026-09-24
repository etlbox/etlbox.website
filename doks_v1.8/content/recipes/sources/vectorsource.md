---
title: "Vector Store Source"
description: "C# recipes for VectorStoreSource in ETLBox. Run a similarity search or a filtered read against a vector store and stream the hits into a data flow."
lead: "This article contains example code that shows the usage of the VectorStoreSource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
    weight: 45
toc: true
---

`VectorStoreSource` reads records from a `VectorStoreCollection`. Set `SearchVector` for a similarity search, or `Filter` for a filtered read. The collection comes from any Microsoft.Extensions.VectorData store, for example an in-memory store or Azure AI Search.

## Search an in-memory store

This example loads three documents into an in-memory vector store and returns the two records closest to a search vector.

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
await collection.EnsureCollectionExistsAsync();
await collection.UpsertAsync(new[] {
    new Document { Key = "1", Text = "Alpha", Embedding = new[] { 1f, 0f, 0f } },
    new Document { Key = "2", Text = "Beta", Embedding = new[] { 0f, 1f, 0f } },
    new Document { Key = "3", Text = "Gamma", Embedding = new[] { 0.9f, 0.1f, 0f } }
});

var source = new VectorStoreSource<string, Document>(collection) {
    SearchVector = new[] { 1f, 0f, 0f },
    Top = 2
};
var dest = new MemoryDestination<Document>();
source.LinkTo(dest);
await Network.ExecuteAsync(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Key:{row.Key} Text:{row.Text}");

//Outputs
//Key:1 Text:Alpha
//Key:3 Text:Gamma
```

## Search products in Azure AI Search

This example writes a small product catalog into Azure AI Search, then searches for the cheaper products closest to an outdoor interest.

```C#
public class Product
{
    [VectorStoreKey]
    public string Id { get; set; }

    [VectorStoreData]
    public string Name { get; set; }

    [VectorStoreData(IsIndexed = true)]
    public string Category { get; set; }

    [VectorStoreData(IsIndexed = true)]
    public double Price { get; set; }

    [VectorStoreVector(3)]
    public ReadOnlyMemory<float> Embedding { get; set; }
}

public class ProductRecommendation
{
    public string Name { get; set; }
    public string Category { get; set; }
    public double Price { get; set; }
}

var indexClient = new SearchIndexClient(
    new Uri(DefaultConfigReader.CustomValue("AzureAISearch", "Endpoint")),
    new AzureKeyCredential(DefaultConfigReader.CustomValue("AzureAISearch", "ApiKey")));
var store = new AzureAISearchVectorStore(indexClient);
var collection = store.GetCollection<string, Product>("etlbox-products");
await collection.EnsureCollectionDeletedAsync();
await collection.EnsureCollectionExistsAsync();

//Load a product catalog: each category has its own region in the vector space
string[] categories = { "Outdoor", "Kitchen", "Office" };
var random = new Random(1);
var catalog = new MemorySource<Product>();
for (int i = 1; i <= 300; i++) {
    int c = i % categories.Length;
    var vector = new float[3];
    vector[c] = 1f;
    for (int d = 0; d < 3; d++)
        vector[d] += (float)(random.NextDouble() * 0.3);
    catalog.DataAsList.Add(new Product {
        Id = i.ToString(),
        Name = $"{categories[c]} product {i}",
        Category = categories[c],
        Price = Math.Round(5 + random.NextDouble() * 195, 2),
        Embedding = vector
    });
}
catalog.LinkTo(new VectorStoreDestination<string, Product>(collection, 100));
await Network.ExecuteAsync(catalog);
await Task.Delay(2000); //Azure AI Search indexes new documents asynchronously

//Find the cheaper products closest to a customer's interest in outdoor articles
var source = new VectorStoreSource<string, Product>(collection) {
    SearchVector = new[] { 1f, 0.1f, 0.1f },
    Filter = p => p.Price < 100,
    Top = 5
};
var toRecommendation = new RowTransformation<Product, ProductRecommendation>(p =>
    new ProductRecommendation { Name = p.Name, Category = p.Category, Price = p.Price });
var dest = new MemoryDestination<ProductRecommendation>();

source.LinkTo<ProductRecommendation>(toRecommendation).LinkTo(dest);
await Network.ExecuteAsync(source);

foreach (var row in dest.Data)
    Console.WriteLine($"{row.Name} ({row.Category}) {row.Price}");

//Outputs (similar to)
//Outdoor product 114(Outdoor) 68,82
//Outdoor product 282(Outdoor) 49,98
//Outdoor product 51(Outdoor) 35,34
//Outdoor product 168(Outdoor) 61,84
//Outdoor product 150(Outdoor) 10,38
```
