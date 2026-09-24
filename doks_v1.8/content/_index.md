---
title : "ETLBox"
description: "Build production-ready data pipelines in .NET. Extract, transform and load data directly in C# — without introducing another ETL platform."
lead: "Extract, transform and load data directly in C# — without introducing another ETL platform."
draft: false
images: []
---

 Create simple or complex data flows with ease. Supports both strongly typed and dynamic objects.

{{< tabs "create-new-site" >}}
{{< tab "Table Copy" >}}

```C#
string mySqlConnString =
  @"Server=localhost;Database=ETLBox;Uid=user;Pwd=password;";
string postgresConnString =
  @"Server=.;Initial Catalog=ETLBox;Trusted_Connection=true;";
var sourceCon = new MySqlConnectionManager(mySqlConnString);
var destCon = new PostgresConnectionManager(postgresConnString);

//Create the dataflow components
var source = new DbSource(sourceCon, "SourceTableName");
var dest = new DbDestination(destCon, "DestTableName");

//Link the source and destination, run the dataflow
source.LinkTo(dest);
await Network.ExecuteAsync(source);
```


{{< /tab >}}
{{< tab "Import Csv" >}}

```C#
string connString =
  @"Source=.;Trusted_Connection=true;Initial Catalog=ETLBox;"
var destCon = new SqlConnectionManager(connString);

//Create the dataflow components
var source = new CsvSource(sourceCon, "SourceData.csv");
var dest = new DbDestination(destCon, "DestinationTable");

//Default mapping: Csv header and column name match (case-sensitive)
//Override mapping like this:
dest.ColumnMapping = new[] {
    new DbColumnMap() {
      DbColumnName = "Id", PropertyName = "OrderNumber"
    }
};

//Link the source and destination, run the dataflow
source.LinkTo(dest);
await Network.ExecuteAsync(source);
```

{{< /tab >}}
{{< tab "Database Merge" >}}

```C#
public class MyMergeRow : MergeableRow
{
    [IdColumn]
    public long Key { get; set; }
    [CompareColumn]
    [UpdateColumn]
    public string Value { get; set; }
    [DeleteColumn(true)]
    public bool DeleteThisRow { get; set; }
}

//Create the dataflow components
DbSource<MyMergeRow> source = new (connection, "SourceTable");
DbMerge<MyMergeRow> mergeDest = new (connection, "DestinationTable");
merge.MergeMode = MergeMode.Full;
merge.CacheMode = CacheMode.Partial;

//Link the source and destination, run the dataflow
source.LinkTo(merge);
Network.Execute(source);
```

{{< /tab >}}
{{< tab "Classify with AI" >}}

```C#
var client = new OpenAIClient(apiKey)
    .GetChatClient("gpt-4o-mini").AsIChatClient();
var source = new MemorySource<Review>();
source.DataAsList.Add(new Review { Id = 1, Text = "I love this." });
source.DataAsList.Add(new Review { Id = 2, Text = "I hate this." });

var chat = new ChatBatchTransformation<Review, Label>(client, 10) {
    SystemPrompt = "You classify product reviews.",
    UserPrompt = "Keep Id. Set Sentiment and Score from 0 to 100."
};
var dest = new MemoryDestination<Label>();
source.LinkTo<Label>(chat).LinkTo(dest);
Network.Execute(source);
```

{{< /tab >}}
{{< /tabs >}}

