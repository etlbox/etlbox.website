---
title: "Embedding Batch (AI)"
description: "Use EmbeddingBatchTransformation to embed a group of rows with one generator call. The generator is the same IEmbeddingGenerator abstraction as EmbeddingTransformation."
lead: "Embedding models accept many texts in one call. <code>EmbeddingBatchTransformation</code> collects a batch, sends those texts together, and writes each vector back onto its row. The generator is the same <code>IEmbeddingGenerator</code> as on <a href=\"../../transformations/embedding/\">Embedding (AI)</a>."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
    weight: 681
toc: true
chatgpt-review: true
---

{{< callout context="note" icon="outline/info-circle" >}}
EmbeddingBatchTransformation works like [Embedding](/docs/transformations/embedding/). Same generator, same text and vector settings. The difference is that many texts go out in one call, which is faster than one request per row.
{{< /callout >}}

## Overview

- **Transformation Type**: Partially blocking
- **Execution Mode**: One generator call per batch
- **Default batch size**: 64
- **Package**: `ETLBox.AI`

Create the generator the same way as for a single row. The OpenAI example on [Embedding (AI)](../../transformations/embedding/#choosing-an-embedding-generator) is the client this component expects. Any other provider that exposes `IEmbeddingGenerator` works as well.

The transformation waits for `BatchSize` rows, or for the remainder when the source completes. Five rows with a batch size of 2 produce three calls. Vector number `i` is written onto row number `i` of that batch. The same object continues downstream.

## Embedding a batch

`TextSelector` and `VectorSetter` point at the text and the vector, exactly as on the row transformation.

```csharp
public class Review {
    public int Id { get; set; }
    public string Text { get; set; }
    public float[] Embedding { get; set; }
}

var source = new MemorySource<Review>();
source.DataAsList.Add(new Review { Id = 1, Text = "Great product, fast delivery." });
source.DataAsList.Add(new Review { Id = 2, Text = "Broken after two days." });

var embed = new EmbeddingBatchTransformation<Review>(generator, batchSize: 64) {
    TextSelector = row => row.Text,
    VectorSetter = (row, vector) => row.Embedding = vector.ToArray()
};
var dest = new MemoryDestination<Review>();

source.LinkTo(embed).LinkTo(dest);
Network.Execute(source);
```

`[EmbeddingText]` and `[EmbeddingVector]` replace the delegates when you would rather mark the class. On an `ExpandoObject`, `TextPropertyName` and `VectorPropertyName` select the properties. The defaults are `Text` and `Embedding`.

## Asking for a shorter vector

`EmbeddingGenerationOptions` is forwarded on every batch. Use `Dimensions` when the model can return a smaller vector.

```csharp
embed.EmbeddingGenerationOptions = new EmbeddingGenerationOptions { Dimensions = 256 };
```

## When the generator returns fewer vectors

By default, only the rows that received a vector continue. Set `RequireSameItemCount` when a short response should fail the batch instead. With `LinkErrorTo`, that batch is redirected once and does not appear on the success output.

The rows are ready for a [Vector Store (AI)](../../specialized-connectors/vector/) destination. A relational `VECTOR` column is still a normal database column. Use the database connectors for that, not the vector store components.

More examples are in the [embedding batch recipes](/recipes/transformations/embedding-batch/).
