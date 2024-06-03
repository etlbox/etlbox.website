---
title: "Json source"
description: "Examples and code recipes for the JsonSource component."
lead: "This article contains example code that shows the usage of the JsonSource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
weight: 2101
toc: true
---

The JsonDource let you load data in json format from various sources - either from a file, a web service or from an Azure blob. Internally, it uses the {{< link-ext text="Newtonsoft Json library" url="https://www.newtonsoft.com/json" >}}.  

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

## Read json file

### With POCO

Let's start with reading a simple json file. We can read this into a memory destination using a POCO (Plain old component object).

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
        
string sourceFile = "res/Examples/Records.json";
PrintFile(sourceFile);

var source = new JsonSource<Record>() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
var dest = new MemoryDestination<Record>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

/* Output:
Content of file 'Records.json'
---
{
    "CreationDate": "2022-01-01",
    "Content": [
    {
        "Id": 1,
        "Inner": {
        "Value": "Test1",
        "Number": 1.1
        }
    },
    {
        "Id": 2,
        "Inner": {
        "Number": 1.2
        }
    },
    {
        "Id": 3,
        "Inner": {
        "Value": "Test3",
        "Number": 1.3
        }
    }
    ],
    "Confidential": false
}
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### With json attributes

We can use the Json attributes provided by the  {{< link-ext text="Newtonsoft Json library" url="https://www.newtonsoft.com/json" >}} to control the deserialization of the incoming data into our objects.

```C#
public class RecordC
{
    [JsonProperty("Inner")]
    public SubRecordC InnerElement { get; set; }
    [JsonProperty("Id")]
    public int IdAttr { get; set; }
}

public class SubRecordC
{
    public string Value { get; set; }
    [JsonRequired]
    public decimal Number { get; set; }
}

string sourceFile = "res/Examples/ThreeArrays.json";
PrintFile(sourceFile);

var source = new JsonSource<RecordC>() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
source.PropertyNameOfDataArray = "ContentArray";

var dest = new MemoryDestination<RecordC>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.IdAttr}, Value1: {row.InnerElement.Value}, Value2: {row.InnerElement.Number}");

/* Output:
Content of file 'ThreeArrays.json'
---
{
"CreationDate": "2022-01-01",
"Array1": [ 1, 2, 3 ],
"Array2": [
    {
    "Id": 0,
    "Inner": {
        "Value": "X"
    }
    }
],
"ContentArray": [
    {
    "Id": 1,
    "Inner": {
        "Value": "Test1",
        "Number": 1.1
    }
    },
    {
    "Id": 2,
    "Inner": {
        "Number": 1.2
    }
    },
    {
    "Id": 3,
    "Inner": {
        "Value": "Test3",
        "Number": 1.3
    }
    }
],
"Confidential": false
}
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### JSON Path in json properties

The ETLBox.Json package provide a `JsonPathConverter` which allows to use JSON Path expression in the `JsonProperty` attributes. 

```C#
[JsonConverter(typeof(JsonPathConverter))]
public class RecordFlatten
{
    [JsonProperty("$.Id")]
    public int Id { get; set; }
    [JsonProperty("Inner.Value")]
    public string Value1 { get; set; }
    [JsonProperty("Inner.Number")]
    public decimal Value2 { get; set; }
}

[Fact]
public void UsingJsonPathConverter() {
    string sourceFile = "res/Examples/Records.json";
    PrintFile(sourceFile);

    var source = new JsonSource<RecordFlatten>() {
        ResourceType = ResourceType.File,
        Uri = sourceFile
    };

    var dest = new MemoryDestination<RecordFlatten>();

    source.LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");

    /* Output:
    Content of file 'Records.json'
    ---
    {
        "CreationDate": "2022-01-01",
        "Content": [
        {
            "Id": 1,
            "Inner": {
            "Value": "Test1",
            "Number": 1.1
            }
        },
        {
            "Id": 2,
            "Inner": {
            "Number": 1.2
            }
        },
        {
            "Id": 3,
            "Inner": {
            "Value": "Test3",
            "Number": 1.3
            }
        }
        ],
        "Confidential": false
    }
    ---
    Received Id: 1, Value1: Test1, Value2: 1.1
    Received Id: 2, Value1: , Value2: 1.2
    Received Id: 3, Value1: Test3, Value2: 1.3
    */
}
```

### Reading into dynamic

We can read again the json file in the previous example, this time without using a POCO but a dynamic ExpandoObject. 

```C#
string sourceFile = "res/Examples/Records.json";
PrintFile(sourceFile);

var source = new JsonSource() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
source.RowModificationAction = (row,smd) => {
    var r = (row as dynamic).Inner as IDictionary<string, object>;
    if (!r.ContainsKey("Value"))
        r.Add("Value", "");
};
var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

/* Output:
Content of file 'Records.json'
---
{
    "CreationDate": "2022-01-01",
    "Content": [
    {
        "Id": 1,
        "Inner": {
        "Value": "Test1",
        "Number": 1.1
        }
    },
    {
        "Id": 2,
        "Inner": {
        "Number": 1.2
        }
    },
    {
        "Id": 3,
        "Inner": {
        "Value": "Test3",
        "Number": 1.3
        }
    }
    ],
    "Confidential": false
}
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### JSON Path with dynamic

The JSON Path syntax can also be used in combination with dynamic ExpandoObject. You need to add the `ExpandoJsonPathConverter` to the JsonSerializer converters.  

```C#
string sourceFile = "res/Examples/Records.json";
PrintFile(sourceFile);

var source = new JsonSource() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
var dest = new MemoryDestination();
List<JsonProperty2JsonPath> pathLookups = new List<JsonProperty2JsonPath>()
{
    new JsonProperty2JsonPath()
    {
        SearchPropertyName = "Inner",
        JsonPath = "$.Value",
        OutputPropertyName = "Value1",
        
        },
    new JsonProperty2JsonPath() {
        SearchPropertyName = "Inner",
        JsonPath = "$.Number",
        OutputPropertyName = "Value2"
        }
};
source.JsonSerializer.Converters.Add(new ExpandoJsonPathConverter(pathLookups));
source.RowModificationAction = (row, smd) => {
    var r = (row as dynamic) as IDictionary<string, object>;
    if (!r.ContainsKey("Value1"))
        r.Add("Value1", "");
};

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");

/* Output:
Content of file 'Records.json'
---
{
    "CreationDate": "2022-01-01",
    "Content": [
    {
        "Id": 1,
        "Inner": {
        "Value": "Test1",
        "Number": 1.1
        }
    },
    {
        "Id": 2,
        "Inner": {
        "Number": 1.2
        }
    },
    {
        "Id": 3,
        "Inner": {
        "Value": "Test3",
        "Number": 1.3
        }
    }
    ],
    "Confidential": false
}
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

## Redirecting errors 

We can use the error linking if we want to ignore flawed data in the source.

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

string sourceFile = "res/Examples/RecordsWithErrors.json";
PrintFile(sourceFile);

var source = new JsonSource<Record>() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
var dest = new MemoryDestination<Record>();
var errorDest = new MemoryDestination<ETLBoxError>();

source.LinkTo(dest);
source.LinkErrorTo(errorDest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

foreach (var err in errorDest.Data)
    Console.WriteLine($"Error record: {err.ErrorText} " +
        Environment.NewLine +
        $"{err.RecordAsJson}");

/* Output:
Content of file 'RecordsWithErrors.json'
---
{
    "Content": [
    {
        "Id": 1,
        "Inner": {
        "Value": "ERR",
        "Number": null
        }
    },
    {
        "Id": 2,
        "Inner": {
        "Number": 1.2,
        "Value": "OK"
        }
    },
    {
        "Id": 3,
        "Inner": {
        "Value": "OK",
        "Number": 1.3
        }
    },
    {
        "Id": X,
        "Inner": {
        "Value": "ERR",
        "Number": 1.4
        }
    }
    ]
}
---
Received Id: 2, Value1: OK, Value2: 1.2
Received Id: 3, Value1: OK, Value2: 1.3
Error record: Error converting value {null} to type 'System.Decimal'. Path 'Content[0].Inner.Number', line 7, position 22. 
Error converting value {null} to type 'System.Decimal'. Path 'Content[0].Inner.Number', line 7, position 22.
Error record: Unexpected character encountered while parsing value: X. Path 'Content[3].Id', line 25, position 13. 
Unexpected character encountered while parsing value: X. Path 'Content[3].Id', line 25, position 13.
*/

```

## Reading multiple Uris

You can use the `GetNextUri`/`HasNextUri` pattern (provided on all streaming connectors) to go through a set a files, web service endpoints or blobs.

The following example shows the usage with files - change the `ResourceType` e.g. to Http if you want to read json formatted data from more than one endpoint.  

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

string pattern = @"res/Examples/File";
PrintFile("res/Examples/File1.json");
PrintFile("res/Examples/File2.json");
PrintFile("res/Examples/File3.json");

var source = new JsonSource<Record>();
source.ResourceType = ResourceType.File;
source.GetNextUri = meta => pattern + (meta.RequestCount + 1) + ".json";
source.HasNextUri = meta => meta.RequestCount < 3;
var dest = new MemoryDestination<Record>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}");

/* Output:
Content of file 'File1.json'
---
[
    {
    "Id": 1,
    "Inner": {
        "Value": "Test1",
        "Number": 1.1
    }
    },
    {
    "Inner": {
        "Number": 1.2,
        "Value": "Test2"
    },
    "Id": 2
    }
]
---
Content of file 'File2.json'
---
[
    {
    "Id": 3,
    "Inner": {
        "Value": "Test3",
        "Number": 1.3
    }
    },
    {
    "Id": 4,
    "Inner": {
        "Value": "Test4",
        "Number": 1.4
    }
    }
]
---
Content of file 'File3.json'
---
[
    {
    "Id": 5,
    "Inner": {
        "Value": "Test5",
        "Number": 1.5
    }
    }
]
---
Received Id: 1, Value1: Test1
Received Id: 2, Value1: Test2
Received Id: 3, Value1: Test3
Received Id: 4, Value1: Test4
Received Id: 5, Value1: Test5
*/
```

## Different resource types

### Reading from Azure blob storage

All streaming connectors support reading data from Azure blob storage instead of a file. Here is an example for the JsonSource.

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

//Upload source file into Azure blob container
string sourceFile = @"res/Examples/Records.json";
PrintFile(sourceFile);
string connectionString = AzureStorageHelper.RetrieveConnectionString();
AzureStorageHelper.DeleteAndCreateContainer(connectionString, "json-test");
BlobContainerClient containerClient = new BlobContainerClient(connectionString, "json-test");
using (var reader = new FileStream(sourceFile, FileMode.Open)) {
    var resp = containerClient.GetBlobClient("Records.json").Upload(reader);
}

//Read uploaded file with CsvSource
var source = new JsonSource<Record>("Records.json");
source.ResourceType = ResourceType.AzureBlob;
source.AzureBlobStorage.ConnectionString = connectionString;
source.AzureBlobStorage.ContainerName = "json-test";
var dest = new MemoryDestination<Record>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

/* Output:
Content of file 'Records.json'
---
{
    "CreationDate": "2022-01-01",
    "Content": [
    {
        "Id": 1,
        "Inner": {
        "Value": "Test1",
        "Number": 1.1
        }
    },
    {
        "Id": 2,
        "Inner": {
        "Number": 1.2
        }
    },
    {
        "Id": 3,
        "Inner": {
        "Value": "Test3",
        "Number": 1.3
        }
    }
    ],
    "Confidential": false
}
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### Reading from web service

All streaming connectors support reading data from any http endpoint. Here is an example for reading data from a mocked WebServer using a POST request.

```c#
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

string sourceFile = "res/Examples/Records.json";
PrintFile(sourceFile);
var server = WireMockServer.Start();
server
    .Given(
        Request.Create()
        .WithPath("/test")
        .UsingPost())
    .RespondWith(
        Response.Create()
            .WithStatusCode(200)
            .WithHeader("Content-Type", "text/json")
            .WithBody(File.ReadAllText(sourceFile))
    );

var source = new JsonSource<Record>() {
    ResourceType = ResourceType.Http,
    Uri = @$"http://localhost:{server.Port}/test"
};
source.HttpRequestMessage.Method = HttpMethod.Post;
source.HttpRequestMessage.Headers.AcceptEncoding.Add(
    new System.Net.Http.Headers.StringWithQualityHeaderValue("*"));
source.HttpRequestMessage.Properties.Add("Content-Type", "text/json");
var dest = new MemoryDestination<Record>();

source.LinkTo(dest);
Network.Execute(source);

Console.WriteLine("Request finished with status code:" + source.HttpResponseMessage.StatusCode.ToString());
foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

/* Output:
Content of file 'Records.json'
---
{
    "CreationDate": "2022-01-01",
    "Content": [
    {
        "Id": 1,
        "Inner": {
        "Value": "Test1",
        "Number": 1.1
        }
    },
    {
        "Id": 2,
        "Inner": {
        "Number": 1.2
        }
    },
    {
        "Id": 3,
        "Inner": {
        "Value": "Test3",
        "Number": 1.3
        }
    }
    ],
    "Confidential": false
}
---
Request finished with status code:OK
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```