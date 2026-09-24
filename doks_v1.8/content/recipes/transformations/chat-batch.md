---
title: "Chat Batch Transformation"
description: "C# recipes for ChatBatchTransformation in ETLBox. Send a batch of rows to a chat client in one request and emit the returned items."
lead: "This article contains example code that shows the usage of the ChatBatchTransformation component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
    weight: 2093
toc: true
---

`ChatBatchTransformation` sends each batch as one chat request. The payload is `{"Items":[...]}`, and the response is expected in the same envelope. The default batch size is 10.

## Classify a batch

Five reviews with a batch size of 2 produce three requests. Each response item keeps `Id` and adds `Sentiment` and `Score`.

```C#
public enum Sentiment { Negative, Neutral, Positive }

public class Review
{
    public int Id { get; set; }
    public string Text { get; set; }
}

public class ClassifiedReview
{
    public int Id { get; set; }
    public Sentiment Sentiment { get; set; }
    public int Score { get; set; }
}

var source = new MemorySource<Review>();
source.DataAsList.Add(new Review { Id = 1, Text = "I love this product." });
source.DataAsList.Add(new Review { Id = 2, Text = "This is broken and useless." });
source.DataAsList.Add(new Review { Id = 3, Text = "Some parts are good, some are bad. Overall average, neither good nor bad." });
source.DataAsList.Add(new Review { Id = 4, Text = "Fast delivery, great quality." });
source.DataAsList.Add(new Review { Id = 5, Text = "Never again." });

var client = new OpenAIClient(openAIApiKey)
                .GetChatClient(openAIModel)
                .AsIChatClient();

//5 rows with a batch size of 2 result in 3 requests
var chat = new ChatBatchTransformation<Review, ClassifiedReview>(client, batchSize: 2) {
    SystemPrompt = "You classify product reviews.",
    UserPrompt = "Return one item per input, in the same order. Keep Id. Set Sentiment and a Score from 0 (very bad) to 100 (very good)."
};
var dest = new MemoryDestination<ClassifiedReview>();

source.LinkTo<ClassifiedReview>(chat).LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Sentiment:{row.Sentiment} Score:{row.Score}");

//Outputs (scores may vary)
//Id:1 Sentiment:Positive Score:95
//Id:2 Sentiment:Negative Score:5
//Id:3 Sentiment:Neutral Score:55
//Id:4 Sentiment:Positive Score:92
//Id:5 Sentiment:Negative Score:10
```

## Classify a dynamic batch

Dynamic rows can gain new properties, including an array, in the same request.

```C#
var source = new MemorySource();
string[] texts = { "I love this product.", "This is broken and useless.", "Great value for money." };
for (int i = 0; i < texts.Length; i++) {
    dynamic row = new ExpandoObject();
    row.Id = i + 1;
    row.Text = texts[i];
    source.DataAsList.Add(row);
}

var client = new OpenAIClient(openAIApiKey)
                .GetChatClient(openAIModel)
                .AsIChatClient();

var chat = new ChatBatchTransformation(client, batchSize: 10) {
    SystemPrompt = "You classify product reviews.",
    UserPrompt = "Return one item per input, in the same order. Keep Id and Text. Add Sentiment (Positive or Negative) and Keywords (array of up to 2 words)."
};
var dest = new MemoryDestination();

source.LinkTo(chat).LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Sentiment:{row.Sentiment} Keywords:{string.Join(",", row.Keywords)}");

//Outputs (keywords may vary)
//Id:1 Sentiment:Positive Keywords:love,product
//Id:2 Sentiment:Negative Keywords:broken,useless
//Id:3 Sentiment:Positive Keywords:value,money
```
