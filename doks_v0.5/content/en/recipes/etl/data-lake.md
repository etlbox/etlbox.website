---
title: "Data lake"
description: "Example: Copy data from Sql Server into Azure blob storage"
lead: "This example shows how data from SqlServer are transferred into Azure blob storage. It shows how to setup an Azure function that runs periodically to move freshly created data rows from the database into a blob container."
draft: false
images: []
menu:
  recipes:
    parent: "etl"
weight: 2230
toc: true
---

## Preqrequisites

This example requires are SqlServer database and either the Azure Storage Simulator or an Azure Storage account. We recommend Visual Studio to open this example. 

## Demo setup

Let's assume we have a table called `orders` in our database. Here is an example how this table looks like: 

Id|Number|Details|Date
--|------|-------|----
1|OD1|T-Shirt|2022-01-01 12:13:00
2|OD2|Jeans|2022-01-01 16:35:00
3|OD3|Socks|2022-01-02 15:01:00
4|OD4|Bag|2022-01-02 13:23:00
5|OD4|Jeans|2022-01-03 10:07:00

The table contains 5 rows, and each row should represent an order. The goal is to transfer this data into an Azure Blob container, and store the data in json format. Because our table can become bigger, we want to split up our data into multiple files - in our demo, we would partition it by each day. 

So for the present data rows, we would like to have 3 json files create in our blob container. E.g.
``` 
BlobContainer
 - OrderData_2022-01-01.json
 - OrderData_2022-01-02.json
 - OrderData_2022-01-03.json
```

The first file (`OrderData_2022-01-01.json`) should contain the first two entries as json, like this:

```json 
[
  {
    "Id": 1,
    "Number": "OD1",
    "Details": "T-Shirt",
    "Date": "2022-01-01T12:13:00"
  },
  {
    "Id": 2,
    "Number": "OD2",
    "Details": "Jeans",
    "Date": "2022-01-01T16:35:00"
  }
]
```

Additionally, we would like to deploy everything as an Azure Function. The function should run periodically (e.g. every night) and only transfer newly created records from the order table. 

### Azure Function

Azure Functions are a great way to deploy functionality in the cloud at comparable low costs. In our demo, we are going to use an Azure Functions that is triggered by a timer every minute. Visual studio has great templates to create a timer triggered Azure Function by scratch. 

{{< alert text="Starting with <code>Microsoft.NET.Sdk.Functions versions 3.0.4</code> and above, a new feature was introduced that cleans the compiled output from unnecessary dlls in order to trim down the assemblies. This feature cleans the output too aggressively and will result in exceptions when referencing and using ETLBox packages. You need to either downgrade to <code>Microsoft.NET.Sdk.Functions 3.0.3</code> or to add <code>&lt;_FunctionsSkipCleanOutput&gt;true&lt;/_FunctionsSkipCleanOutput&gt;</code> to your project file" >}}


#### Initalization

First of all we can connect the ETLBox ILogger to the Azure log.

```C#
public static async Task Run(
    [TimerTrigger("0 */1 * * * *")]TimerInfo myTimer, ILogger log) 
{
    Logging.LogInstance = log;        
}
```

Next we set up our database connection. In Azure we can access the Configuration parameter via the environment variables. Also, we will need an SqlConnectionManager to connect with our local Sql Server. 

```C#
string sqlConnectionString = Environment.GetEnvironmentVariable
    ("SqlServerConnectionString", EnvironmentVariableTarget.Process);
string storageConnString = Environment.GetEnvironmentVariable
    ("AzureWebJobsStorage", EnvironmentVariableTarget.Process);
SqlConnectionManager conn = new SqlConnectionManager(sqlConnectionString);
```

For your local development, there should be a `local.settings.json` file which contains the environment setting when debugging and testing locally.

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet",
    "SqlServerConnectionString": "Data Source=localhost;Initial Catalog=demo;Integrated Security=false;User=sa;password=YourStrong@Passw0rd;"
  }
}
```

#### Delta load

Before we can start to transfer the data, we need to identify all records that we haven't transferred yet. An easy solution is to simple memorize the highest value of the `Id` value that we transferred into the blob storage, assuming that the id number are always incremented.`
For the purpose of the demonstration, we can create a small data flow that reads the highest id value from our database, and also to store the value in a local json file. 

```C#
public class SyncData
{    
    public int SyncId { get; set; }
}

private static void StoreLastSyncKey(SyncData syncData) {
    var memsource = new MemorySource<SyncData>();
    memsource.DisableLogging = true;
    memsource.DataAsList.Add(syncData);
    var syncdest = new JsonDestination<SyncData>("LastSyncId.json");
    syncdest.DisableLogging = true;
    memsource.LinkTo(syncdest);
    Network.Execute(memsource);
}

private static SyncData ReadLastSyncKey() {
    try {
        var syncsource = new JsonSource<SyncData>("LastSyncId.json");
        syncsource.DisableLogging = true;
        var memdest = new MemoryDestination<SyncData>();
        memdest.DisableLogging = true;
        syncsource.LinkTo(memdest);
        Network.Execute(syncsource);
        return memdest.Data.First();
    } catch {

    }
    return new SyncData() {
        SyncId = -1
    };
}
```

{{< alert text="When you deploy an Azure Function using the zip (or package) deploy method, accessing the file system will result in an exception. Use the file deployment method instead." >}}


### Setting up the data flow

Now we can set up a simple data flow that reads the last used id value from the file, and then transfer the not synced data to Azure. 

```C# 
SyncData syncDataLastRun = ReadLastSyncKey();

var parameter = new[] { new QueryParameter() 
    { Name = "syncId", Value = syncDataLastRun.SyncId } };
var dbSource = new DbSource<Order>() {
    ConnectionManager = conn,
    Sql = $@"SELECT Id, Number, Details, Date 
                FROM Orders WHERE Id > @syncId ORDER BY Date",
    SqlParameter = parameter
};

var jsonDest = new JsonDestination<Order>();
jsonDest.ResourceType = ResourceType.AzureBlob;
jsonDest.AzureBlobStorage.ConnectionString = storageConnString;
jsonDest.AzureBlobStorage.ContainerName = containerName;

var currentDate = new DateTime(1900, 1, 1);
jsonDest.HasNextUri = (_, order) => {
    if (order.Date.Date > currentDate.Date) {
        currentDate = order.Date;
        return true;
    }
    return false;
};
jsonDest.GetNextUri = (_, order) => 
    "OrderData_" + order.Date.ToString("yyyy-MM-dd") + ".json";
```

In order to store our data in an object, we also need to create a strong typed object.

```C#
public class Order
{
    public int Id { get; set; }
    public string Number { get; set; }
    public string Details { get; set; }
    public DateTime Date { get; set; }
}
```

#### Using Aggregation to get Max(Id)

That data flow configuration is already sufficient to do an initial load. But after we have transferred that records into the Azure blob, how can we retrieve the highest id value? One solution would be to some `RowTransformation` that always checks the id value of the current row and compares it with a current value stored in a variable. Or we can use the `Aggregation` which behaves similar. So we can split our data flow before we insert the data, and retrieve the max value of the id from the aggregation output. 

```C#
var multicast = new Multicast<Order>();
var aggregation = new Aggregation<Order, SyncData>();
aggregation.AggregateColumns = new[] {
    new AggregateColumn() {
        InputValuePropName = "Id",
        AggregatedValuePropName = "SyncId",
        AggregationMethod = AggregationMethod.Max
    }
};
var syncMemoryDest = new MemoryDestination<SyncData>();
```

Now we can link the components and execute the network. After this, we need to store the max id value from our input data in our file, so that the next run can read the highest id value and continue to transfer only new data. 

```C#
/*
    *                  |---> jsonDest 
    *                  |
    *  dbSource --> multicast
    *                  |
    *                  |---> aggregation --> syncMemoryDest 
    */
dbSource.LinkTo(multicast);
multicast.LinkTo(jsonDest);
multicast.LinkTo(aggregation);
aggregation.LinkTo(syncMemoryDest);

Network.Execute(dbSource);

if (syncMemoryDest.Data.Count > 0) {
    SyncData syncDataThisRun = syncMemoryDest.Data.First();
    StoreLastSyncKey(syncDataThisRun);
}
```


## Code on Github

You can find this demo in GitHub. The example here will contain additional code, which helps to create the demo data. Also, you'll find a small helper task that creates new data and inserts it into the database. 

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/DataLake" >}}

