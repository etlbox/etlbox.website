---
title : "ETLBox"
lead: "A lightweight ETL (extract, transform, load) toolbox and data integration library for .NET"
draft: false
images: []
---

 Use a simple syntax to create easy or complex data flows. Works with strongly typed and dynamic objects.

{{< tabs "create-new-site" >}}
{{< tab "Table Copy" >}}

```C#
string mySqlConnString =
  @"Server=localhost;Database=ETLBox;Uid=user;Pwd=password;";
string postgresConnString =
  @"Server=.;Initial Catalog=ETLBox;Trusted_Connection=true;";

var sourceCon = new MySqlConnectionManager(mySqlConnString);
var destCon = new PostgresConnectionManager(postgresConnString);

var source = new DbSource(sourceCon, "SourceTableName");
var dest = new DbDestination(destCon, "DestTableName");
//Use dest.ColumnMapping to change column name mapping

source.LinkTo(dest); //Link the nodes in the network
await Network.ExecuteAsync(source); //Start the flow
```


{{< /tab >}}
{{< tab "Import Csv" >}}

```C#
string connString =
  @"Source=.;Trusted_Connection=true;Initial Catalog=ETLBox;"
var destCon = new SqlConnectionManager(connString);

var source = new CsvSource(sourceCon, "SourceData.csv");
var dest = new DbDestination(destCon, "DestinationTable");

//Default mapping: Csv header and column name match (case-sensitive)
//Override mapping like this:
dest.ColumnMapping = new[] {
    new DbColumnMap() {
      DbColumnName = "Id", PropertyName = "OrderNumber"
    }
};

source.LinkTo(dest); //Link the nodes in the network
await Network.Execute(source); //Start the flow
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

DbSource<MyMergeRow> source = new (connection, "SourceTable");
DbMerge<MyMergeRow> mergeDest = new (connection, "DestinationTable");
merge.MergeMode = MergeMode.Full;
merge.CacheMode = CacheMode.Partial;
source.LinkTo(merge);
Network.Execute(source);
```

{{< /tab >}}
{{< /tabs >}}

