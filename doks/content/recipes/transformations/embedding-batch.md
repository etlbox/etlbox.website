---
title: "Embedding Batch Transformation"
description: "C# recipes for EmbeddingBatchTransformation in ETLBox. Create embeddings for a batch of rows with one generator call."
lead: "This article contains example code that shows the usage of the EmbeddingBatchTransformation component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
    weight: 2094
toc: true
---

`EmbeddingBatchTransformation` sends the texts of one batch in a single generator call and writes each vector back into the matching row. The default batch size is 64.

## Embed a batch

Five rows with a batch size of 2 produce three requests. The existing row is extended with the vector.

```C#
public class Review
{
    public int Id { get; set; }
    public string Text { get; set; }
    public float[] Embedding { get; set; }
}

var source = new MemorySource<Review>();
source.DataAsList.Add(new Review { Id = 1, Text = "Great product, fast delivery." });
source.DataAsList.Add(new Review { Id = 2, Text = "Broken after two days." });
source.DataAsList.Add(new Review { Id = 3, Text = "Good value for the price." });
source.DataAsList.Add(new Review { Id = 4, Text = "Customer service was very helpful." });
source.DataAsList.Add(new Review { Id = 5, Text = "Packaging was damaged." });

var generator = new OpenAIClient(openAIApiKey)
                    .GetEmbeddingClient(openAIEmbeddingModel)
                    .AsIEmbeddingGenerator();

//The existing row is extended with the vector
//5 rows with a batch size of 2 result in 3 requests (2 + 2 + 1)
var embed = new EmbeddingBatchTransformation<Review>(generator, batchSize: 2) {
    TextSelector = row => row.Text,
    VectorSetter = (row, vector) => row.Embedding = vector.ToArray()
};
var dest = new MemoryDestination<Review>();

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Text:{row.Text} Dimensions:{row.Embedding.Length}");

//Outputs
//Id:1 Text:Great product, fast delivery. Dimensions:1536
//Id:2 Text:Broken after two days. Dimensions:1536
//Id:3 Text:Good value for the price. Dimensions:1536
//Id:4 Text:Customer service was very helpful. Dimensions:1536
//Id:5 Text:Packaging was damaged. Dimensions:1536
```

## Attributes and a shorter vector

The attributes define the text and the vector property. `EmbeddingGenerationOptions.Dimensions` asks the generator for a 256-dimensional vector.

```C#
public class Document
{
    public int Id { get; set; }
    [EmbeddingText]
    public string Content { get; set; }
    [EmbeddingVector]
    public ReadOnlyMemory<float> ContentVector { get; set; }
}

var source = new MemorySource<Document>();
source.DataAsList.Add(new Document { Id = 1, Content = "Invoices are due within 30 days." });
source.DataAsList.Add(new Document { Id = 2, Content = "Returns are accepted within 14 days." });
source.DataAsList.Add(new Document { Id = 3, Content = "Shipping is free above 50 EUR." });
source.DataAsList.Add(new Document { Id = 4, Content = "Support is available 24/7." });
source.DataAsList.Add(new Document { Id = 5, Content = "Payment by credit card or invoice." });

var generator = new OpenAIClient(openAIApiKey)
                    .GetEmbeddingClient(openAIEmbeddingModel)
                    .AsIEmbeddingGenerator();

//Attributes define text and vector; the options reduce the vector size to 256 dimensions
var embed = new EmbeddingBatchTransformation<Document>(generator, batchSize: 2) {
    EmbeddingGenerationOptions = new EmbeddingGenerationOptions { Dimensions = 256 },
    RequireSameItemCount = true
};
var dest = new MemoryDestination<Document>();

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Content:{row.Content} Dimensions:{row.ContentVector.Length}");

//Outputs
//Id:1 Content:Invoices are due within 30 days. Dimensions:256
//Id:2 Content:Returns are accepted within 14 days. Dimensions:256
//Id:3 Content:Shipping is free above 50 EUR. Dimensions:256
//Id:4 Content:Support is available 24/7. Dimensions:256
//Id:5 Content:Payment by credit card or invoice. Dimensions:256
```

## Embed a dynamic batch

`TextPropertyName` and `VectorPropertyName` select the dynamic properties. The defaults are `Text` and `Embedding`.

```C#
var source = new MemorySource();
string[] notes = { "Call the customer back.", "Order more paper.", "Prepare the quarterly report.", "Book a meeting room." };
foreach (var note in notes) {
    dynamic row = new ExpandoObject();
    row.Note = note;
    source.DataAsList.Add(row);
}

var generator = new OpenAIClient(openAIApiKey)
                    .GetEmbeddingClient(openAIEmbeddingModel)
                    .AsIEmbeddingGenerator();

var embed = new EmbeddingBatchTransformation(generator, batchSize: 2) {
    TextPropertyName = "Note",
    VectorPropertyName = "NoteVector"
};
var dest = new MemoryDestination();

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);

foreach (dynamic result in dest.Data)
    Console.WriteLine($"Note:{result.Note} Dimensions:{result.NoteVector.Length}");

//Outputs
//Note:Call the customer back. Dimensions:1536
//Note:Order more paper. Dimensions:1536
//Note:Prepare the quarterly report. Dimensions:1536
//Note:Book a meeting room. Dimensions:1536
```
