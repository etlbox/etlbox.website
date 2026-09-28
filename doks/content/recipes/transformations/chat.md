---
title: "Chat Transformation"
description: "C# recipes for ChatTransformation in ETLBox. Send each row to a chat client and write the returned object back into the data flow."
lead: "This article contains example code that shows the usage of the ChatTransformation component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
    weight: 2091
toc: true
---

`ChatTransformation` sends each row as JSON to an `IChatClient` and writes the returned object downstream. A typed output uses a JSON schema derived from the output type. `ExpandoObject` output uses JSON mode.

## Classify a typed object

This example classifies product reviews. `Id`, `Text`, and `CustomerCode` stay on the row. The model adds `Sentiment` and `Score`.

```C#
public enum Sentiment
{
    Negative,
    Positive
}

public class Review
{
    public int Id { get; set; }
    public string Text { get; set; }
    public string CustomerCode { get; set; }
}

public class ReviewLabel
{
    public int Id { get; set; }
    public string Text { get; set; }
    public string CustomerCode { get; set; }
    public Sentiment Sentiment { get; set; }
    public int Score { get; set; }
}

var source = new MemorySource<Review>();
source.DataAsList.Add(new Review { Id = 1, Text = "I love this product.", CustomerCode = "C-100" });
source.DataAsList.Add(new Review { Id = 2, Text = "This is broken and useless.", CustomerCode = "C-200" });
source.DataAsList.Add(new Review { Id = 3, Text = "Great quality and fast delivery.", CustomerCode = "C-300" });
source.DataAsList.Add(new Review { Id = 4, Text = "Poor quality, I want my money back.", CustomerCode = "C-400" });

var client = new OpenAIClient(openAIApiKey)
                .GetChatClient(openAIModel)
                .AsIChatClient();

var chat = new ChatTransformation<Review, ReviewLabel>(client) {
    SystemPrompt = "You classify product reviews.",
    UserPrompt = "Keep Id, Text, and CustomerCode unchanged. Set Sentiment to Positive or Negative and add Score as an integer from 0 to 100."
};
var dest = new MemoryDestination<ReviewLabel>();

source.LinkTo<ReviewLabel>(chat).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} CustomerCode:{row.CustomerCode} Sentiment:{row.Sentiment} Score:{row.Score}");

//Outputs (might vary!)
//Id:1 CustomerCode:C-100 Sentiment:Positive Score:95
//Id:2 CustomerCode:C-200 Sentiment:Negative Score:10
//Id:3 CustomerCode:C-300 Sentiment:Positive Score:95
//Id:4 CustomerCode:C-400 Sentiment:Negative Score:20
```

## Classify a dynamic object

The same classification works with `ExpandoObject`. The non-generic `ChatTransformation` reads and writes dynamic rows.

```C#
var source = new MemorySource();
string[] texts = {
    "I love this product.",
    "This is broken and useless.",
    "Great quality and fast delivery.",
    "Poor quality, I want my money back."
};
for (int i = 0; i < texts.Length; i++) {
    dynamic review = new ExpandoObject();
    review.Id = i + 1;
    review.Text = texts[i];
    source.DataAsList.Add(review);
}

var client = new OpenAIClient(openAIApiKey)
                .GetChatClient(openAIModel)
                .AsIChatClient();

var chat = new ChatTransformation(client) {
    SystemPrompt = "You classify product reviews.",
    UserPrompt = "Keep Id and Text unchanged. Add Sentiment set to exactly Positive or Negative and Score as an integer from 0 to 100."
};
var dest = new MemoryDestination();

source.LinkTo(chat).LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Text:{row.Text} Sentiment:{row.Sentiment} Score:{row.Score}");

//Outputs
//Id:1 Text:I love this product. Sentiment:Positive Score:95
//Id:2 Text:This is broken and useless. Sentiment:Negative Score:5
//Id:3 Text:Great quality and fast delivery. Sentiment:Positive Score:90
//Id:4 Text:Poor quality, I want my money back. Sentiment:Negative Score:10
```
