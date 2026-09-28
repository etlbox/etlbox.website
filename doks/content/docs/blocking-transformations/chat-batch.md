---
title: "Chat Batch (AI)"
description: "Use ChatBatchTransformation to send a group of rows to an IChatClient in one request. The client is the same Microsoft.Extensions.AI abstraction as ChatTransformation."
lead: "One chat call per row adds up quickly. <code>ChatBatchTransformation</code> groups rows and sends each group in a single request. It uses the same <code>IChatClient</code> as <a href=\"../../transformations/chat/\">Chat (AI)</a>, so OpenAI, Anthropic, and the other providers stay interchangeable."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
    weight: 680
toc: true
chatgpt-review: true
---

{{< callout context="note" icon="outline/info-circle" >}}
ChatBatchTransformation works like [Chat](/docs/transformations/chat/). Same client, same prompts, same output. The difference is that rows are sent together.

That matters here. A chat call is slow. One request per row holds up every later step in the flow. A batch of 10 or more rows in one request keeps the pipeline moving.
{{< /callout >}}

## Overview

- **Transformation Type**: Partially blocking
- **Execution Mode**: One model call per batch
- **Default batch size**: 10
- **Package**: `ETLBox.AI`

The client is created the same way as for the row transformation. Build the provider client, adapt it to `IChatClient`, and pass it in. The OpenAI example on [Chat (AI)](../../transformations/chat/#choosing-a-chat-client) is the same client this component expects.

The transformation waits until `BatchSize` rows are in, or until the source ends and a shorter tail is left. Five rows with a batch size of 2 become three calls.

## Classifying a batch

Ask the model to return one object per input row, in the same order. The component emits the returned items in that order. It does not match them back by id.

```csharp
public class Review {
    public int Id { get; set; }
    public string Text { get; set; }
}

public class ClassifiedReview {
    public int Id { get; set; }
    public Sentiment Sentiment { get; set; }
    public int Score { get; set; }
}

var source = new MemorySource<Review>();
source.DataAsList.Add(new Review { Id = 1, Text = "I love this product." });
source.DataAsList.Add(new Review { Id = 2, Text = "This is broken and useless." });

var chat = new ChatBatchTransformation<Review, ClassifiedReview>(client, batchSize: 10) {
    SystemPrompt = "You classify product reviews.",
    UserPrompt = "Return one item per input, in the same order. Keep Id. Set Sentiment and a Score from 0 to 100."
};
var dest = new MemoryDestination<ClassifiedReview>();

source.LinkTo<ClassifiedReview>(chat).LinkTo(dest);
Network.Execute(source);
```

`SystemPrompt`, `UserPrompt`, and `ChatOptions` work as they do on `ChatTransformation`. Leave `ResponseFormat` empty and a typed output gets a JSON schema. `ExpandoObject` output uses JSON mode, so a prompt can add properties.

The batch is sent as one JSON object:

```json
{ "Items": [ /* one object per input row */ ] }
```

The response uses the same envelope. `null` items are skipped.

## When the model returns a different number of rows

By default the model may return fewer or more items than the batch contained. A prompt such as "return only the even ids" is valid, and only those items continue.

Set `RequireSameItemCount` when every input row must have a partner. A response with a different length is then an error for that batch.

```csharp
chat.RequireSameItemCount = true;
chat.LinkErrorTo(errorDest);
```

A provider error is handled the same way. With an error link, the whole batch is redirected once and nothing from it appears on the success output.

`ChatBatchTransformation` without type arguments reads and writes `ExpandoObject`. Rows in one batch may have different properties. Each item comes back with its own shape.

More examples are in the [chat batch recipes](/recipes/transformations/chat-batch/).
