---
title: "Json Destination"
description: "Examples and code recipes for the JsonDestination component."
lead: "This article contains example code that shows the usage of the JsonDestination component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
weight: 47
toc: true
---


The Json destination converts data from your data flow into json. Internally, it uses the {{< link-ext text="Newtonsoft Json library" url="https://www.newtonsoft.com/json" >}}.

## Shared code

The following method is used in the subsequent examples, and prints the content of a json file on the console output.

```C#
private void PrintFile(string sourceFile) {
    Console.WriteLine($"Content of file '{Path.GetFileName(sourceFile)}'");
    Console.WriteLine("---");
    Console.WriteLine(File.ReadAllText(sourceFile));
    Console.WriteLine("---");
}
```

## Write json file - simple start

### With POCO

Let's start with a simple example - we write data into a json file using two POCOs (Plain old component objects).

```C#
public class Record
{
    public SubRecord Inner { get; set; }
    public int Id { get; set; }
}

public class SubRecord
{
    public string Value { get; set; }
    public decimal Number { get; set; }
}

string destFile = @"res/Examples/SimpleWithPOCO.json";

var source = new MemorySource<Record>();
source.Data = new List<Record>() {
    new Record() { Id = 1, Inner = new SubRecord() {
            Value = "Test1",
            Number = 1.1m
        }
    },
    new Record() { Id = 1, Inner = new SubRecord() {
            Number = 1.2m
        }
    },
    new Record() { Id = 1, Inner = new SubRecord() {
            Value = "Test<X>3",
            Number = 1.3m
        }
    }
};
var dest = new JsonDestination<Record>();
dest.Uri = destFile;
dest.ResourceType = ResourceType.File;
//Use ResourceType.Http for web endpoints!
dest.Encoding = Encoding.UTF8;

source.LinkTo(dest);
Network.Execute(source);
PrintFile(destFile);

/* Output:
Content of file 'SimpleWithPOCO.json'
---
[
    {
    "Inner": {
        "Value": "Test1",
        "Number": 1.1
    },
    "Id": 1
    },
    {
    "Inner": {
        "Number": 1.2
    },
    "Id": 1
    },
    {
    "Inner": {
        "Value": "Test<X>3",
        "Number": 1.3
    },
    "Id": 1
    }
]
---
*/
```

### Configure Json serialization

This example shows how we can use the Newtonsoft Json attributes to customize our json output.

```C#
public class RecordC
{
    [JsonProperty("Inner", Order =1)]
    public SubRecordC InnerElement { get; set; }
    [JsonProperty(Order =0)]
    public int IdAttr { get; set; }
}

public class SubRecordC
{
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Value { get; set; }
    public decimal Number { get; set; }
}

string destFile = @"res/Examples/POCOWithConfig.json";

var source = new MemorySource<RecordC>();
source.Data = new List<RecordC>() {
    new RecordC() { IdAttr = 1, InnerElement = new SubRecordC() {
            Value = "Test1",
            Number = 1.1m
        }
    },
    new RecordC() { IdAttr = 1, InnerElement = new SubRecordC() {
            Number = 1.2m
        }
    },
    new RecordC() { IdAttr = 1, InnerElement = new SubRecordC() {
            Value = @"Test""X""3",
            Number = 1.3m
        }
    }
};
var dest = new JsonDestination<RecordC>();
dest.Uri = destFile;
dest.ResourceType = ResourceType.File;
//Use ResourceType.Http for web endpoints!

source.LinkTo(dest);
Network.Execute(source);
PrintFile(destFile);

/* Output:
Content of file 'POCOWithConfig.json'
---
[
    {
    "IdAttr": 1,
    "Inner": {
        "Value": "Test1",
        "Number": 1.1
    }
    },
    {
    "IdAttr": 1,
    "Inner": {
        "Number": 1.2
    }
    },
    {
    "IdAttr": 1,
    "Inner": {
        "Value": "Test\"X\"3",
        "Number": 1.3
    }
    }
]
---
*/

```

### Dynamic json file creation

The following example shows how a dynamic ExpandoObject can be used to copy a sql server table into a json file, without the need to define any strongly typed object first.

```C#
public static SqlConnectionString ConnectionString => Config.SqlConnection.ConnectionString("DataFlow");

private void CreateTable(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1', '1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2', '1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3', '1.3')");
}

string destFile = @"res/Examples/TableIntoJson.json";
var connMan = new SqlConnectionManager(ConnectionString);
CreateTable(connMan, "ExampleTable");
var source = new DbSource() {
    ConnectionManager = connMan,
    TableName = "ExampleTable"
};
var dest = new JsonDestination() {
    Uri = destFile,
};

source.LinkTo(dest);
Network.Execute(source);

PrintFile(destFile);

/* Output:
Content of file 'TableIntoJson.json'
---
[
    {
    "Id": 1,
    "Value1": "Test1",
    "Value2": "1.1"
    },
    {
    "Id": 2,
    "Value1": "Test2",
    "Value2": "1.2"
    },
    {
    "Id": 3,
    "Value1": "Test3",
    "Value2": "1.3"
    }
]
---
*/
```

## Writing into multiple files

You can use the `GetNextUri`/`HasNextUri` pattern (provided on all streaming connectors) to create multiple output  files.

```C#
public class RecordC
{
    [JsonProperty("Inner", Order =1)]
    public SubRecordC InnerElement { get; set; }
    [JsonProperty(Order =0)]
    public int IdAttr { get; set; }
}

public class SubRecordC
{
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Value { get; set; }
    public decimal Number { get; set; }
}

string filePrefix = @"res/Examples/multiple_files_";

var source = new MemorySource<RecordC>();
source.Data = new List<RecordC>();
for (int i = 1; i <= 8; i++)
    source.DataAsList.Add(new RecordC() {
        IdAttr = i,
        InnerElement = new SubRecordC() {
            Value = "Test" + i,
            Number = i * 0.1m
        }
    });

var dest = new JsonDestination<RecordC>();
dest.HasNextUri = (smd, _) => smd.ProcessedRows == 3;
dest.GetNextUri = (smd, _) => filePrefix + smd.ProgressCount / 3 + ".json";
dest.ResourceType = ResourceType.File;
//Use ResourceType.Http for web endpoints!

source.LinkTo(dest);
Network.Execute(source);
PrintFile(filePrefix + "0.json");
PrintFile(filePrefix + "1.json");
PrintFile(filePrefix + "2.json");


/* Output:
Content of file 'multiple_files_0.json'
---
[
    {
    "IdAttr": 1,
    "Inner": {
        "Value": "Test1",
        "Number": 0.1
    }
    },
    {
    "IdAttr": 2,
    "Inner": {
        "Value": "Test2",
        "Number": 0.2
    }
    },
    {
    "IdAttr": 3,
    "Inner": {
        "Value": "Test3",
        "Number": 0.3
    }
    }
]
---
Content of file 'multiple_files_1.json'
---
[
    {
    "IdAttr": 4,
    "Inner": {
        "Value": "Test4",
        "Number": 0.4
    }
    },
    {
    "IdAttr": 5,
    "Inner": {
        "Value": "Test5",
        "Number": 0.5
    }
    },
    {
    "IdAttr": 6,
    "Inner": {
        "Value": "Test6",
        "Number": 0.6
    }
    }
]
---
Content of file 'multiple_files_2.json'
---
[
    {
    "IdAttr": 7,
    "Inner": {
        "Value": "Test7",
        "Number": 0.7
    }
    },
    {
    "IdAttr": 8,
    "Inner": {
        "Value": "Test8",
        "Number": 0.8
    }
    }
]
---
*/
```

## Resource types

### Writing into Azure blob storage

All streaming connectors support writing data into Azure blob storage.

```C#
string connectionString = AzureStorageHelper.RetrieveConnectionString();
string containerName = "json-example";
AzureStorageHelper.DeleteAndCreateContainer(connectionString, containerName);

var source = new MemorySource<RecordC>();
source.Data = new List<RecordC>();
for (int i = 1; i <= 4; i++)
    source.DataAsList.Add(new RecordC() {
        IdAttr = i,
        InnerElement = new SubRecordC() {
            Value = "Test" + i,
            Number = i * 0.1m
        }
    });
var dest = new JsonDestination<RecordC>("blob.json");
dest.ResourceType = ResourceType.AzureBlob;
dest.AzureBlobStorage.ConnectionString = connectionString;
dest.AzureBlobStorage.ContainerName = containerName;

source.LinkTo(dest);
Network.Execute(source);

//Download blob again and check content
BlobContainerClient containerClient = new BlobContainerClient(connectionString, containerName);
var content = containerClient.GetBlobClient("blob.json").DownloadContent().Value.Content;
var file = Encoding.UTF8.GetString(content);
Console.WriteLine(file);

/* Output:
[
    {
    "IdAttr": 1,
    "Inner": {
        "Value": "Test1",
        "Number": 0.1
    }
    },
    {
    "IdAttr": 2,
    "Inner": {
        "Value": "Test2",
        "Number": 0.2
    }
    },
    {
    "IdAttr": 3,
    "Inner": {
        "Value": "Test3",
        "Number": 0.3
    }
    },
    {
    "IdAttr": 4,
    "Inner": {
        "Value": "Test4",
        "Number": 0.4
    }
    }
]
*/
```

### Write into web endpoint

All streaming connectors allow you to send your data into any web endpoint using the ResourceType http.

```C#
public class RecordC
{
    [JsonProperty("Inner", Order =1)]
    public SubRecordC InnerElement { get; set; }
    [JsonProperty(Order =0)]
    public int IdAttr { get; set; }
}

public class SubRecordC
{
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Value { get; set; }
    public decimal Number { get; set; }
}

var server = WireMockServer.Start();
server
    .Given(
    Request.Create()
        .WithPath("/test")
        .UsingPost()
        .WithBody(d => {
            Console.WriteLine("Received POST request with body:");
            Console.WriteLine(d); return true;
        })
    )
    .RespondWith(
        Response.Create()
            .WithStatusCode(200)
    );

var source = new MemorySource<RecordC>();
source.Data = new List<RecordC>();
for (int i = 1; i <= 3; i++)
    source.DataAsList.Add(new RecordC() {
        IdAttr = i,
        InnerElement = new SubRecordC() {
            Value = "Test" + i,
            Number = i * 0.1m
        }
    });
var dest = new JsonDestination<RecordC>();
dest.ResourceType = ResourceType.Http;
dest.Uri = @$"http://localhost:{server.Port}/test";
dest.HttpRequestMessage.Method = HttpMethod.Post;
dest.HttpContentType = "text/json";
dest.HttpClient.DefaultRequestHeaders.Add("User-Agent", "Test 1.0");
dest.HttpRequestMessage.Properties.Add("x:prop", "secret");

source.LinkTo(dest);
Network.Execute(source);

/* Output:
Received POST request with body:
[
    {
    "IdAttr": 1,
    "Inner": {
        "Value": "Test1",
        "Number": 0.1
    }
    },
    {
    "IdAttr": 2,
    "Inner": {
        "Value": "Test2",
        "Number": 0.2
    }
    },
    {
    "IdAttr": 3,
    "Inner": {
        "Value": "Test3",
        "Number": 0.3
    }
    }
]
*/
```

## Utilizing your own stream

All streaming connector support that you provide your own stream. The following example shows how to use your own file stream.

```C#
public class RecordC
{
    [JsonProperty("Inner", Order =1)]
    public SubRecordC InnerElement { get; set; }
    [JsonProperty(Order =0)]
    public int IdAttr { get; set; }
}

public class SubRecordC
{
    [JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
    public string Value { get; set; }
    public decimal Number { get; set; }
}

string destFile = @"res/Examples/OwnStream.json";
var source = new MemorySource<RecordC>();
source.Data = new List<RecordC>();
for (int i = 1; i <= 3; i++)
    source.DataAsList.Add(new RecordC() {
        IdAttr = i,
        InnerElement = new SubRecordC() {
            Value = "Test" + i,
            Number = i * 0.1m
        }
    });

FileStream fs = File.Create(destFile);
JsonDestination<RecordC> dest = new JsonDestination<RecordC>();
dest.CreateStreamWriter = _ => {
    return new StreamWriter(fs, Encoding.UTF8);
};
source.LinkTo(dest);
Network.Execute(source);

PrintFile(destFile);

/*Output:
Content of file 'OwnStream.json'
---
[
    {
    "IdAttr": 1,
    "Inner": {
        "Value": "Test1",
        "Number": 0.1
    }
    },
    {
    "IdAttr": 2,
    "Inner": {
        "Value": "Test2",
        "Number": 0.2
    }
    },
    {
    "IdAttr": 3,
    "Inner": {
        "Value": "Test3",
        "Number": 0.3
    }
    }
]
---
*/
```
