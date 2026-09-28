---
title: "Chat (AI)"
description: "Use ChatTransformation to send each row to any IChatClient and write the model's object back into the data flow. The client comes from Microsoft.Extensions.AI, so OpenAI, Anthropic, and other providers all plug in the same way."
lead: "A chat model can classify, extract, or rewrite a row while it moves through the pipeline. <code>ChatTransformation</code> sends the row as JSON and writes the object that comes back. The client is an <code>IChatClient</code> from Microsoft.Extensions.AI, so the same transformation works with OpenAI, Anthropic, Azure OpenAI, or any other provider that exposes that interface."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
    weight: 531
toc: true
chatgpt-review: true
---

{{< callout context="note" icon="outline/info-circle" >}}
ChatTransformation calls the model once per row. A chat request is slow, so this can hold up the whole data flow. [Chat Batch](/docs/blocking-transformations/chat-batch/) works the same way, but sends many rows in one request and is the better choice for more than a few records.
{{< /callout >}}

## Overview

- **Transformation Type**: Non-blocking
- **Execution Mode**: One model call per row
- **Package**: `ETLBox.AI`

ETLBox does not ship a model and does not pick a vendor. You create an `IChatClient` with the provider's own SDK and pass that client in. For many rows in one call, use [Chat Batch (AI)](../../blocking-transformations/chat-batch/).

## Choosing a chat client

`Microsoft.Extensions.AI` is the common abstraction. Each provider package offers a way to turn its client into an `IChatClient`. After that, the transformation no longer knows whether the call goes to OpenAI, Anthropic, or somewhere else.

This is the OpenAI client:

```csharp
var client = new OpenAIClient(apiKey)
    .GetChatClient("gpt-4o-mini")
    .AsIChatClient();
```

Anthropic, Azure OpenAI, and other SDKs follow the same idea: build their client, adapt it to `IChatClient`, and hand it to `ChatTransformation`.

## Classifying a row

A typical use is a review that should leave the flow with a sentiment and a score. The prompt says what to keep and what to add. The output type is the shape you want back.

```csharp
public class Review {
    public int Id { get; set; }
    public string Text { get; set; }
}

public class ReviewLabel {
    public int Id { get; set; }
    public string Text { get; set; }
    public Sentiment Sentiment { get; set; }
    public int Score { get; set; }
}

var source = new MemorySource<Review>();
source.DataAsList.Add(new Review { Id = 1, Text = "I love this product." });

var chat = new ChatTransformation<Review, ReviewLabel>(client) {
    SystemPrompt = "You classify product reviews.",
    UserPrompt = "Keep Id and Text unchanged. Set Sentiment to Positive or Negative and Score from 0 to 100."
};
var dest = new MemoryDestination<ReviewLabel>();

source.LinkTo<ReviewLabel>(chat).LinkTo(dest);
Network.Execute(source);
```

`SystemPrompt` is the standing instruction. `UserPrompt` is sent in front of the row. The row itself is appended as JSON, so the model sees the property names of your class. Enums are sent as their names (`"Positive"`), not as numbers.

If you leave `ResponseFormat` empty, a typed output asks the model for JSON that matches the output class. That is enough for classification, extraction, and small rewrites. You do not have to describe the JSON shape again in the prompt.

## Keeping or changing the type

`ChatTransformation<Review>` uses the same type on the way in and out. Use that when the model should fill properties that are already on the row.

`ChatTransformation<Review, ReviewLabel>` is the form from the example above: the row goes in as one type and comes out as another. Anything you still need downstream has to exist on the output type, and the prompt should say to keep it.

## Using dynamic objects

Without a class, the non-generic `ChatTransformation` reads and writes `ExpandoObject`. The model is asked for JSON, but not for a fixed schema, so the prompt can add properties that were not on the input.

```csharp
var source = new MemorySource();
dynamic review = new ExpandoObject();
review.Id = 1;
review.Text = "I love this product.";
source.DataAsList.Add(review);

var chat = new ChatTransformation(client) {
    SystemPrompt = "You classify product reviews.",
    UserPrompt = "Keep Id and Text. Add Sentiment (Positive or Negative) and Score (0-100)."
};

source.LinkTo(chat).LinkTo(new MemoryDestination());
Network.Execute(source);
```

You can also cross the two shapes in one flow: a POCO into an `ExpandoObject`, or a dynamic row back into a class.

## Chat options

`ChatOptions` is how you pass provider settings through, for example a token limit. Assign the object you already use with `Microsoft.Extensions.AI`. ETLBox does not change that instance.

Leave `ResponseFormat` empty and ETLBox selects one for you: a JSON schema for a typed output, JSON mode for `ExpandoObject`. Set `ResponseFormat` yourself when you want a different format, and that choice is sent as it is.

```csharp
chat.ChatOptions = new ChatOptions { MaxOutputTokens = 200 };
```

## When a call fails

An empty response, a provider error, or JSON that does not match the output type follows the normal ETLBox error path. Link an error destination if that row should be kept aside and the flow should continue:

```csharp
chat.LinkErrorTo(errorDest);
```
