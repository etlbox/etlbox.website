---
title: "Embedding Transformation"
description: "C# recipes for EmbeddingTransformation in ETLBox. Create a vector for each row and write it back into the same object."
lead: "This article contains example code that shows the usage of the EmbeddingTransformation component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
    weight: 2092
toc: true
---

`EmbeddingTransformation` calls an `IEmbeddingGenerator` once per row and writes the vector into the same object. Point it at the text with `TextSelector` or the `[EmbeddingText]` attribute, and at the vector property with `VectorSetter` or `[EmbeddingVector]`.

## Embed a typed object

This example reads `Text` and stores the returned vector in `Embedding`.

```C#
public class TextRow
{
    public string Text { get; set; }
    public float[] Embedding { get; set; }
}

var source = new MemorySource<TextRow>();
source.DataAsList.Add(new TextRow { Text = "ETLBox moves data." });
source.DataAsList.Add(new TextRow { Text = "Vectors enable semantic search." });
source.DataAsList.Add(new TextRow { Text = "Pipelines run asynchronously." });

var generator = new OpenAIClient(openAIApiKey)
                    .GetEmbeddingClient(openAIEmbeddingModel)
                    .AsIEmbeddingGenerator();

var embed = new EmbeddingTransformation<TextRow>(generator) {
    TextSelector = row => row.Text,
    VectorSetter = (row, vector) => row.Embedding = vector.ToArray()
};
var dest = new MemoryDestination<TextRow>();

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Text:{row.Text} Dimensions:{row.Embedding.Length}");

//Outputs
//Text:ETLBox moves data. Dimensions:1536
//Text:Vectors enable semantic search. Dimensions:1536
//Text:Pipelines run asynchronously. Dimensions:1536
```

## Embed a dynamic object

For `ExpandoObject`, the non-generic `EmbeddingTransformation` reads the property `Text` and writes the vector into `Embedding`.

```C#
var source = new MemorySource();
string[] texts = { "A short note.", "Another short note.", "A completely different topic." };
foreach (var text in texts) {
    dynamic row = new ExpandoObject();
    row.Text = text;
    source.DataAsList.Add(row);
}

var generator = new OpenAIClient(openAIApiKey)
                    .GetEmbeddingClient(openAIEmbeddingModel)
                    .AsIEmbeddingGenerator();

//Reads property "Text" and writes the vector into property "Embedding"
var embed = new EmbeddingTransformation(generator);
var dest = new MemoryDestination();

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);

foreach (dynamic result in dest.Data)
    Console.WriteLine($"Text:{result.Text} Dimensions:{result.Embedding.Length}");

//Outputs
//Text:A short note. Dimensions:1536
//Text:Another short note. Dimensions:1536
//Text:A completely different topic. Dimensions:1536
```

## Embed with attributes

`[EmbeddingText]` and `[EmbeddingVector]` replace `TextSelector` and `VectorSetter`.

```C#
public class Article
{
    public int Id { get; set; }
    [EmbeddingText]
    public string Title { get; set; }
    [EmbeddingVector]
    public float[] TitleVector { get; set; }
}

var source = new MemorySource<Article>();
source.DataAsList.Add(new Article { Id = 1, Title = "How to load CSV files into SQL Server" });
source.DataAsList.Add(new Article { Id = 2, Title = "Merging data with ETLBox" });
source.DataAsList.Add(new Article { Id = 3, Title = "Streaming large JSON files" });

var generator = new OpenAIClient(openAIApiKey)
                    .GetEmbeddingClient(openAIEmbeddingModel)
                    .AsIEmbeddingGenerator();

//No TextSelector or VectorSetter needed - the attributes define text and vector property
var embed = new EmbeddingTransformation<Article>(generator);
var dest = new MemoryDestination<Article>();

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Title:{row.Title} Dimensions:{row.TitleVector.Length}");

//Outputs
//Id:1 Title:How to load CSV files into SQL Server Dimensions:1536
//Id:2 Title:Merging data with ETLBox Dimensions:1536
//Id:3 Title:Streaming large JSON files Dimensions:1536
```
