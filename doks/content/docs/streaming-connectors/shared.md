---
title: "Shared Features"
description: "This article covers the common functionalities of all ETLBox Streaming Connectors, including resource types (files, HTTP, Azure Blob), streaming behavior, paging, buffering, encoding, dynamic object support, and advanced configurations."
lead: "ETLBox Streaming Connectors provide a unified approach to reading, transforming, and writing data from various sources such as files, web services (HTTP), and Azure Blob Storage. While each format (CSV, JSON, XML, Excel, Text, Parquet) has specific features, all connectors share a common set of functionalities that make them highly flexible and configurable. <br /><br/>This article covers the shared properties and behaviors of all streaming connectors."
draft: false
images: []
menu:
  docs:
    parent: "streaming-connectors"
weight: 220
toc: true
chatgpt-review: true
---

## Supported Resource Types

Each connector can read from or write to different resource types, allowing integration with files, APIs, and cloud storage. The following resource types are supported:

- **File-Based Processing** – Local files and network shares
- **HTTP-Based Processing** – REST APIs and web services
- **Azure Blob Storage** – Cloud-based storage integration

### File-Based Processing

By default, all connectors read from and write to local files or network shares.

```csharp
CsvSource source = new CsvSource("C:/data/input.csv");
source.ResourceType = ResourceType.File; // Default setting
```

```csharp
CsvDestination dest = new CsvDestination("C:/data/output.csv");
```

#### Reading whole Folder

The `Folder` property is a shortcut to use all the files inside a folder as an input. When set, this will iterate through the folder and process these files.

```csharp
CsvSource source = new CsvSource();
source.Folder = "C:/data";
```

### HTTP-Based Processing (REST APIs, Web Services)

Streaming connectors support REST API and Web Services integration by changing the `ResourceType` to `Http`.

```csharp
JsonSource source = new JsonSource("https://api.example.com/data");
source.ResourceType = ResourceType.Http;
```

```csharp
JsonDestination dest = new JsonDestination("https://api.example.com/submit");
dest.ResourceType = ResourceType.Http;
dest.HttpContentType = "application/json";
dest.HttpRequestMessage.Method = HttpMethod.Post;
dest.HttpRequestMessage.Headers.Connection.Add("keep-alive");
```

Connectors allow custom HTTP configurations, including headers, authentication, timeouts, and compression. In this example we override the default implementation of `HttpClient`to accept encoded stream, and we configure some common http headers for our request message.

```csharp
JsonSource source = new JsonSource("https://api.example.com/data");
source.ResourceType = ResourceType.Http;
source.HttpClient = new HttpClient(new HttpClientHandler() {
    AutomaticDecompression = System.Net.DecompressionMethods.All
});
source.HttpClient.Timeout = TimeSpan.FromSeconds(60);
source.HttpRequestMessage.Headers.Connection.Add("keep-alive");
source.HttpRequestMessage.Headers.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("*/*"));
source.HttpRequestMessage.Headers.AcceptEncoding.Add(new System.Net.Http.Headers.StringWithQualityHeaderValue("gzip"));
source.HttpRequestMessage.Headers.AcceptEncoding.Add(new System.Net.Http.Headers.StringWithQualityHeaderValue("deflate"));
source.HttpRequestMessage.Headers.AcceptEncoding.Add(new System.Net.Http.Headers.StringWithQualityHeaderValue("br"));
source.HttpRequestMessage.Headers.UserAgent.Add(new System.Net.Http.Headers.ProductInfoHeaderValue("ETLBox", "2.0"));
source.HttpRequestMessage.Headers.CacheControl = new System.Net.Http.Headers.CacheControlHeaderValue() {
  NoCache = true
};
```

### Azure Blob Storage Integration

For cloud-based storage, `ResourceType.AzureBlob` is used.

```csharp
CsvSource source = new CsvSource("dataset.csv");
source.ResourceType = ResourceType.AzureBlob;
source.AzureBlobStorage.ConnectionString = "<your_connection_string>";
source.AzureBlobStorage.ContainerName = "data-container";
```

```csharp
CsvDestination dest = new CsvDestination("output.csv");
dest.ResourceType = ResourceType.AzureBlob;
dest.AzureBlobStorage.ConnectionString = "<your_connection_string>";
dest.AzureBlobStorage.ContainerName = "processed-data";
dest.AzureBlobStorage.BlockBlobOpenWriteOptions = new BlockBlobOpenWriteOptions() {
    BufferSize = 1 * 1024 * 1024 // 1MB
};
```

## Streaming and Buffering

Streaming means data flows into ETLBox while it is being read. E.g. if processing a large JSON file from a web service, ETLBox starts sending data into the pipeline before the file is fully downloaded.

If the source sends data faster than it is processed, ETLBox stores incoming data in an internal buffern.

```csharp
source.MaxBufferSize = 10000; // Change buffer size if needed
```

## Working with Dynamic Objects

ETLBox supports ExpandoObject for flexible, schema-free processing.

```csharp
CsvSource source = new CsvSource("data.csv");
source.RowModificationAction = (row, meta) => {
    dynamic r = row;
    Console.WriteLine($"Dynamic ID: {r.Id}, Name: {r.Name}");
};
```

## Handling Large Data Sets with Paging

When working with paginated REST APIs, ETLBox automates multiple API requests until all data is retrieved.

```csharp
JsonSource<MyRow> source = new JsonSource<MyRow>();
int page = 1;
source.GetNextUri = streamMetaData => $"https://api.example.com/data?page={page++}";
source.HasNextUri = streamMetaData => streamMetaData.ProcessedRows > 0;
```

The same pattern is used for splitting large output files.

```csharp
var dest = new CsvDestination<MyRow>();
dest.HasNextUri = (streamMetaData, currentRow) => true;
dest.GetNextUri = (streamMetaData, currentRow) => $"SplitFile_{streamMetaData.ProgressCount}.csv";
```

## Handling Multipart HTTP Responses

If an API returns multiple content types in a single response, ETLBox can filter and extract only the relevant part.

From the following response we can extract only the relevant csv data:

```text
Content-Type: multipart/mixed; boundary=boundary
--boundary
Content-Type: text/plain

Ignore this
--boundary
Content-Type: text/csv

Header1,Header2
1,Test1
2,Test2
3,Test3

--boundary
Content-Type: text/plain

    Ignore this also
--boundary--
```

```csharp
CsvSource source = new CsvSource("https://api.example.com/multipart");
source.UseMulitpartContent = content => content.Headers.ContentType.MediaType == "text/csv";
```

## Skipping Initial Rows in Streaming Sources

Some sources include headers, metadata, or garbage rows at the beginning. ETLBox allows skipping them.

```csharp
source.SkipRows = 2; // Ignore the first 2 rows
```

## Encoding Support

All text-based connectors (CSV, JSON, XML, Text) support custom encoding.

```csharp
source.Encoding = Encoding.ASCII;
```

## Using an Existing Stream

By default, all streaming sources and destinations in ETLBox create a `StreamReader` or `StreamWriter` based on their configuration. E.g. if a file path is provided, the component automatically creates a new `FileStream` to read or write data.

However, in scenarios where an existing stream needs to be used — such as reading from an in-memory stream or a custom data source — ETLBox allows injecting a custom stream using:

- **`CreateStreamReader`** for sources
- **`CreateStreamWriter`** for destinations

### Example: Using an Existing Stream in a Source

```csharp
MemoryStream memStream = new MemoryStream();
StreamWriter writer = new StreamWriter(memStream);
writer.WriteLine("ID,Name");
writer.WriteLine("1,John");
writer.WriteLine("2,Jane");
writer.Flush();
memStream.Seek(0, SeekOrigin.Begin);

StreamReader reader = new StreamReader(memStream, Encoding.UTF8);

CsvSource<MyRow> source = new CsvSource<MyRow>("memoryStream");
source.CreateStreamReader = url => reader;
```

### Example: Using an Existing Stream in a Destination

```csharp
MemoryStream outputStream = new MemoryStream();
StreamWriter streamWriter = new StreamWriter(outputStream, Encoding.UTF8);

CsvDestination<MyRow> dest = new CsvDestination<MyRow>("memoryStream");
dest.CreateStreamWriter = url => streamWriter;
```

## Row-Level Data Modification

Each streaming source offers the `RowModificationAction` property, which allows modifying a record immediately after it is read from the source and before it enters the data flow pipeline.

This action is defined as:  `Action<TOutput, StreamMetaData>`

Unlike transformations that occur asynchronously in the data flow, `RowModificationAction` is executed synchronously within the source component itself. This means:

- Each record is modified immediately after being read before any other component processes it.
- The action is performed in the same thread as the source reading process.
- Data transformations using this method do not introduce concurrency issues since they occur before the data reaches the main ETL pipeline.

### Example: Adding a Timestamp to Each Row

```csharp
CsvSource<MyRow> source = new CsvSource<MyRow>("data.csv");
source.RowModificationAction = (row, meta) => {
    row.ProcessedAt = DateTime.UtcNow;
};
```

### Example: Tracking the Request URI for API Data

For HTTP-based sources, `RowModificationAction` can be used to store metadata about the request that retrieved the row.

```csharp
JsonSource<MyRow> source = new JsonSource<MyRow>("https://api.example.com/data?page=1");
source.GetNextUri = meta => $"https://api.example.com/data?page={meta.RequestCount + 1}";
source.HasNextUri = meta => meta.ProcessedRows > 0;

source.RowModificationAction = (row, meta) => {
    row.SourceUri = meta.RequestUri;
    row.ProcessingBatch = meta.RequestCount;
};
```



## Accessing Unparsed Data

Each streaming source in ETLBox automatically collects unparsed data while reading from a file, web service, or cloud storage. This data is stored in the `UnparsedData` property and includes any skipped rows, metadata, or unread portions of the source.

By default, unparsed data collection is enabled for most sources, but it can be turned off by setting `CollectUnparsedData = false`. (For the `XmlSource` this setting is set to `false` by default)

### Example: Accessing Unparsed Data

```csharp
CsvSource<MyRow> source = new CsvSource<MyRow>("data.csv");
source.CollectUnparsedData = true;

source.SkipRows = 2; // Skip the first two rows

source.RowModificationAction = (row, meta) => {
    Console.WriteLine($"Processing Row: {row}");
    Console.WriteLine($"Unparsed Data: {source.UnparsedData}");
};
```

If unparsed data is not needed, disabling it can reduce memory usage.

### Unparsed Data in Multi-Page Requests

For paginated HTTP responses or multiple file reads, unparsed data is collected for each request. The `StreamMetaData` object stores the unparsed portion of the current page:

```csharp
JsonSource<MyRow> source = new JsonSource<MyRow>();
source.GetNextUri = meta => $"https://api.example.com/data?page={meta.RequestCount + 1}";
source.HasNextUri = meta => meta.ProcessedRows > 0;
source.CollectUnparsedData = true;

source.RowModificationAction = (row, meta) => {
    Console.WriteLine($"Current Page: {meta.RequestCount}");
    Console.WriteLine($"Unparsed Data: {meta.UnparsedData}");
};
```

This allows tracking any unused or ignored data during multi-page API requests.

