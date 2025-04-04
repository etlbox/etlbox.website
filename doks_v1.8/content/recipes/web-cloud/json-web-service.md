---
title: "Integrate REST Endpoints"
description: "Example code how to use Json from REST endpoints or other web services"
lead: "This example demonstrates how json data can be received and send between web endpoints. It will read json data from a REST endpoint, rename some properties and send each entry from the source into a different endpoint. "
draft: false
images: []
menu:
  recipes:
    parent: "web-cloud"
weight: 10
toc: true
---

## Purpose

The json source and destination can communicate with any web service that can be reached with a .net HttpClient. For this example, we will read data from our demo endpoint: {{< link-ext text="https://www.etlbox.net/demo/api/orders" url="https://www.etlbox.net/demo/api/orders" >}}.
Then we will rename and remove some columns and send each entry from the source to a local web server.
In this example, we will use {{< link-ext text="WireMock.NET " url="https://github.com/WireMock-Net/WireMock.Net" >}} to mock a lightweight web server in .NET.

## Reading from REST endpoint

You can directly query web services or REST APIs using the `JsonSource`. There are some minor restrictions
1) The http or https service has to send back a Json response
2) The json needs to be an array.

{{< alert text="All other streaming connectors (e.g. XmlSource, CsvSource, TextSource, etc. support reading data from web endpoints. So all common data formats are supported. If none of the existing connectors work for you, you can use the CustomSource (or CustomBatchSource) to write your own connector logic." >}}


We will use the `JsonSource` to read data from the endpoint: {{< link-ext text="https://www.etlbox.net/demo/api/orders" url="https://www.etlbox.net/demo/api/orders" >}}.
It will return this json:

```json
{
    "customerData": [
        {
            "OrderNumber": 10100,
            "CustomerId": 1,
            "Description": "T-Shirts: 7"
        },
        {
            "OrderNumber": 10200,
            "CustomerId": 2,
            "Description": "Jeans: 12"
        },
        ...
    ]
}
```

Please note that the root element is an object - the JsonSource will start reading data from the first array it encounters in the source.

Now we can define a POCO (plain old CLR object) that we can use in our data flow:

```C#
public class Order
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public string Description { get; set; }
}
```

Now we can simply read the data from the service by using the `JsonSource`:

```C#
JsonSource<Order> source = new JsonSource<Order>("https://www.etlbox.net/demo/api/orders", ResourceType.Http);
```

That would already do the trick to read the data. If you want to check how your data looks, you could use the following code snippet to store the retrieved data into a .NET collection:

```C#
JsonSource<Todo> source = new JsonSource<Todo>("https://www.etlbox.net/demo/api/orders", ResourceType.Http);
MemoryDestination<Todo> dest = new MemoryDestination<Todo>();
source.LinkTo(dest);
Network.Execute(source);
//dest.Data will now contain all items from the web service
```

The property `dest.Data` will now contain all items from the web service.

### HttpClient

Depending on your web endpoint, you maybe want to modify your request message. You can achieve this by either overriding the default `HttpClient` used for the communication, or by modifying the `HttpRequestMessage` used as a template for the requests. All streaming connectors (e.g. `JsonSource`, `CsvDestination`, `XmlSource`,...) will support this.

In our example, we want to use a different HttpClient:

```C#
source.HttpClient = CreateDefaultHttpClient();

private static HttpClient CreateDefaultHttpClient()
{
    var httpClient = new HttpClient(new HttpClientHandler()
    {
        AutomaticDecompression = DecompressionMethods.All
    });
    httpClient.Timeout = TimeSpan.FromSeconds(1000);
    httpClient.DefaultRequestHeaders.Connection.Add("keep-alive");
    httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("*/*"));
    httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("gzip"));
    httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("deflate"));
    httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("br"));
    httpClient.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("MyImporter", "1.1"));
    httpClient.DefaultRequestHeaders.CacheControl = new CacheControlHeaderValue() { NoCache = true };
    return httpClient;
}
```

### Authentication

If you want to set your own authorization token, you could simple set the default request message of the http client:

```C#
JsonSource<Order> source = new JsonSource<Order>("https://www.etlbox.net/demo/api/orders", ResourceType.Http);
source.HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "Your Oauth token");
```

### Using JsonProperty

Sometimes, you don't want to create a full C# POCO.  If you leave out some properties in your object definition, you will see that the `JsonSource` just will ignore these properties. Under the hood, the `JsonSource` (and `JsonDestination`) are using the {{< link-ext text="Newtonsof.Json library" url="https://www.newtonsoft.com/json" >}} for serializing and deserializing. You can utilize all feature of this library to modify the behavior of the Json Connector. For example, you can add the `JsonProperty` attribute to have a json property mapped to a different named property in the POCO.

E.g. if you want to have the property `OrderNumber` in the json mapped to the property `Id` in your object definition, you can use the following code:

```C#
public class Order
{
    [JsonProperty("OrderNumber")]
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public string Description { get; set; }
}
```

Deserialization is completely based on The {{< link-ext text="Newtonsoft.Json.JsonSerializer" url="https://www.newtonsoft.com/json/help/html/T_Newtonsoft_Json_JsonSerializer.htm" >}}. There is also a property `JsonSerializer` that can be overwritten with your own JsonSerializer.

## Data Transformation

When data is read from the json source, a stream is opened with the web endpoint and all data is read asynchronously. While the `JsonSource` is reading data, it will continue to post already processed records into connected components. In our example, we will use the `ColumnRename` transformation to do some renaming of the the incoming json properties.

The following snipped would rename the property `Id` to `OrderId`, `CustomerId` to `CId` and remove the property `Description`. As already defined POCO can't be easily changed in .NET, the output of the transformation is an `ExpandoObject` which copies the data from the properties in the POCO into the new dynamic object with the renamed/removed columns.

```C#
ColumnRename<Order> rename = new ColumnRename<Order>();
rename.RenameColumns = new[]
{
    new RenameColumn() { CurrentName = "Id", NewName ="OrderId" },
    new RenameColumn() { CurrentName = "CustomerId", NewName ="CId" },
    new RenameColumn() { CurrentName = "Description", RemoveColumn = true }
};
```

But this is just an example - you could use any other ETLBox transformation to create your own transformation flow.

## Writing into web endpoint

Finally, we want to write our modified data into some kind of web endpoint. In this example, we want to take every record of the source and send it into a different REST endpoint. To verify that our code works, we will use {{< link-ext text="WireMock.NET " url="https://github.com/WireMock-Net/WireMock.Net" >}} to create a mocking web server that accepts our requests. Later on we will check the web server logs to verify if everything worked as expected.

### Creating Mock webserver

Let's create our mock web server, listening on port 61456:

```C#
Server = WireMockServer.Start(61456);
Server
    .Given(Request.Create().WithPath("/post/*").UsingPost())
    .RespondWith(
        Response.Create()
        .WithStatusCode(200)
    );
```

### Using GetNext/HasNextUri pattern

We use the `JsonDestination` to write into our endpoint. We will use the Post http method when sending the data to the endpoint. Also, we will use the same HttpClient as defined previously in this example.

In order to send every row that arrives at the destination into a different Url, we use the `GetNextUri`/`HasNextUri` pattern. The `HasNextUri` is a function that returns true if a new Uri should be used for the next record. The `GetNextUri` describes a function how to retrieve the next Url. Both function have the current processed row as well as some information about the current state of the `JsonDestination` (e.g. the number of processed rows)

```C#
JsonDestination destination = new JsonDestination();
destination.ResourceType = ResourceType.Http;
destination.HttpClient = CreateDefaultHttpClient();
destination.HttpRequestMessage.Method = HttpMethod.Post;
destination.HasNextUri = (streamMetaData, row) => true;
destination.GetNextUri = (streamMetaData, row) =>
{
    streamMetaData.HttpRequestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", "Some token");
    return $"http://localhost:61456/post/{streamMetaData.ProgressCount}";
};
```

### Executing the flow

In the previous steps, we just defined that components of the data flow. Now we can execute the whole data flow:

```C#
source.LinkTo(rename);
rename.LinkTo(destination);
Network.Execute(source);
```

### Checking server logs

Now we can check the server log and see if our data arrived as expected at the wiremock server:

```C#
var requests = Server.FindLogEntries(
    Request.Create().WithPath("/post/*").UsingAnyMethod()
);
foreach (var req in requests)
{
    Console.WriteLine("Url: " + req.RequestMessage.Path);
    foreach (var header in req.RequestMessage.Headers)
        Console.WriteLine("Key:" + header.Key + ", Value:" + header.Value);
    Console.WriteLine(req.RequestMessage.Body);
    Console.WriteLine("------------------------------");
}
```

## Code on Github

Here is the full example code.
{{< link-ext text="The code for this example is also available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/RESTIntegration" >}}

```C#
public class Order
{
    [JsonProperty("OrderNumber")]
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public string Description { get; set; }
}

internal class Program
{
    static WireMockServer Server { get; set; }

    static void Main(string[] args)
    {
        StartWebServer();
        JsonSource<Order> source = new JsonSource<Order>("https://www.etlbox.net/demo/api/orders", ResourceType.Http);
        source.HttpClient = CreateDefaultHttpClient();

        ColumnRename<Order> rename = new ColumnRename<Order>();
        rename.RenameColumns = new[]
        {
            new RenameColumn() { CurrentName = "Id", NewName ="OrderId" },
            new RenameColumn() { CurrentName = "CustomerId", NewName ="CId" },
            new RenameColumn() { CurrentName = "Description", RemoveColumn = true }
        };
        JsonDestination destination = new JsonDestination();
        destination.ResourceType = ResourceType.Http;
        destination.HttpClient = CreateDefaultHttpClient();
        destination.HttpRequestMessage.Method = HttpMethod.Post;
        destination.HasNextUri = (streamMetaData, row) => true;
        destination.GetNextUri = (streamMetaData, row) =>
        {
            streamMetaData.HttpRequestMessage.Headers.Authorization = new AuthenticationHeaderValue("Bearer", "Some token");
            return $"http://localhost:61456/post/{streamMetaData.ProgressCount}";
        };

        source.LinkTo(rename);
        rename.LinkTo(destination);
        Network.Execute(source);

        WriteServerLog();
    }

    static void StartWebServer()
    {
        Server = WireMockServer.Start(61456);
        Server
            .Given(Request.Create().WithPath("/post/*").UsingPost())
            .RespondWith(
                Response.Create()
                .WithStatusCode(200)
            );
    }

    private static HttpClient CreateDefaultHttpClient()
    {
        var httpClient = new HttpClient(new HttpClientHandler()
        {
            AutomaticDecompression = DecompressionMethods.All
        });
        httpClient.Timeout = TimeSpan.FromSeconds(1000);
        httpClient.DefaultRequestHeaders.Connection.Add("keep-alive");
        httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("*/*"));
        httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("gzip"));
        httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("deflate"));
        httpClient.DefaultRequestHeaders.AcceptEncoding.Add(new StringWithQualityHeaderValue("br"));
        httpClient.DefaultRequestHeaders.UserAgent.Add(new ProductInfoHeaderValue("MyImporter", "1.1"));
        httpClient.DefaultRequestHeaders.CacheControl = new CacheControlHeaderValue() { NoCache = true };
        return httpClient;
    }

    private static void WriteServerLog()
    {
        var requests = Server.FindLogEntries(
            Request.Create().WithPath("/post/*").UsingAnyMethod()
        );
        foreach (var req in requests)
        {
            Console.WriteLine("Url: " + req.RequestMessage.Path);
            foreach (var header in req.RequestMessage.Headers)
                Console.WriteLine("Key:" + header.Key + ", Value:" + header.Value);
            Console.WriteLine(req.RequestMessage.Body);
            Console.WriteLine("------------------------------");
        }
    }
}
```



