---
title: "Embedding (AI)"
description: "Use EmbeddingTransformation to turn one text field of each row into a vector. The generator is an IEmbeddingGenerator from Microsoft.Extensions.AI, so any embedding provider can be plugged in."
lead: "An embedding is a numeric vector for a piece of text. Similar texts end up close together, which is what vector search later uses. <code>EmbeddingTransformation</code> creates that vector for each row and stores it on the same object. The generator is an <code>IEmbeddingGenerator</code> from Microsoft.Extensions.AI, so OpenAI, Azure OpenAI, and other embedding providers all connect the same way."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
    weight: 532
toc: true
chatgpt-review: true
---

{{< callout context="note" icon="outline/info-circle" >}}
EmbeddingTransformation calls the model once per row. That is fine for a few records. [Embedding Batch](/docs/blocking-transformations/embedding-batch/) works the same way, but sends many texts in one request and is faster on a larger flow.
{{< /callout >}}

## Overview

- **Transformation Type**: Non-blocking
- **Execution Mode**: One embedding call per row
- **Package**: `ETLBox.AI`

The row is not replaced. The vector is written onto the object that arrived, and that same object continues. For many texts in one call, use [Embedding Batch (AI)](../../blocking-transformations/embedding-batch/).

## Choosing an embedding generator

As with chat, ETLBox sits on the Microsoft abstraction. You build the provider client and adapt it to `IEmbeddingGenerator<string, Embedding<float>>`.

OpenAI looks like this:

```csharp
var generator = new OpenAIClient(apiKey)
    .GetEmbeddingClient("text-embedding-3-small")
    .AsIEmbeddingGenerator();
```

Any other provider that can produce an `IEmbeddingGenerator` is used the same way. The transformation does not contain provider-specific code.

## Adding a vector to a row

Point the transformation at the text and at the property that should receive the vector.

```csharp
public class TextRow {
    public string Text { get; set; }
    public float[] Embedding { get; set; }
}

var source = new MemorySource<TextRow>();
source.DataAsList.Add(new TextRow { Text = "ETLBox moves data." });

var embed = new EmbeddingTransformation<TextRow>(generator) {
    TextSelector = row => row.Text,
    VectorSetter = (row, vector) => row.Embedding = vector.ToArray()
};
var dest = new MemoryDestination<TextRow>();

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);
```

The vector arrives as `ReadOnlyMemory<float>`. `ToArray()` stores it in a `float[]`. A `ReadOnlyMemory<float>` property can take the value directly. The length depends on the model. A missing text is sent as an empty string.

## Marking the text and the vector

When the class itself should say which property is embedded, use the attributes and skip the two delegates.

```csharp
public class Article {
    public int Id { get; set; }

    [EmbeddingText]
    public string Title { get; set; }

    [EmbeddingVector]
    public float[] TitleVector { get; set; }
}

var embed = new EmbeddingTransformation<Article>(generator);
```

`[EmbeddingText]` belongs on one `string`. `[EmbeddingVector]` belongs on one `float[]` or `ReadOnlyMemory<float>`. If you set a delegate as well, the delegate is used.

## Using dynamic objects

The non-generic `EmbeddingTransformation` reads `Text` and writes `Embedding` on an `ExpandoObject`. Rename those with `TextPropertyName` and `VectorPropertyName` when your row uses different names.

```csharp
var source = new MemorySource();
dynamic row = new ExpandoObject();
row.Text = "A short note.";
source.DataAsList.Add(row);

var embed = new EmbeddingTransformation(generator);
source.LinkTo(embed).LinkTo(new MemoryDestination());
Network.Execute(source);
```

## Asking for a shorter vector

Some models can return a smaller vector. Pass that through `EmbeddingGenerationOptions`. The options object is forwarded as you set it.

```csharp
embed.EmbeddingGenerationOptions = new EmbeddingGenerationOptions { Dimensions = 256 };
```

## Storing the vector

The usual next step is a [Vector Store (AI)](../../specialized-connectors/vector/) destination. The destination only upserts. It does not call a model, because the vector is already on the row.

```csharp
source.LinkTo(embed).LinkTo(vectorDestination);
Network.Execute(source);
```

A vector that lives in a relational `VECTOR` column does not need this path. Read and write it with the [database connectors](../../relational-databases/overview/).

Further examples are in the [embedding recipes](/recipes/transformations/embedding/).
