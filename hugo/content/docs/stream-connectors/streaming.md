---
title: "Shared functionalities"
description: "Stream connectors allow to read common formats either from a file source or via http."
lead: "Stream connectors allow to read data that is stored in a common format either from a file or via http."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 410
toc: true
---

## Supported types

ETLBox currently supports the following data storage types:

- Csv 
- Json
- Xml
- Excel 
- Text

This article covers functionalities that are shared by all of these data types. 

There is a connector package for each data type that must be included together with the core package to read the data. E.g. for Json you need to add the {{< link-ext url="https://www.nuget.org/packages/ETLBox.Json" text="ETLBox.Json" >}} package.

{{< alert text="If you need to read binary data, take a look at the <code>CustomSource</code> and <code>CustomDestination</code> - these custom connectors allow you to define your own parsing logic."  >}}

All these different storage types can be read either from a flat file (e.g. a .csv file on your local machine or a network share) or via a http web service endpoint. So you could read a csv file from a network storage located at `//Volumes/user/data.csv/`, but you could also read csv files from a REST endpoint on `https://test.com/getcsv/`. 

Also, all these types (except excel) can also be written into a file or send to a http endpoint. E.g. you can write a text file into you local windows folder at `c:/data/text.csv` or send it as a POST into `https://test.com/postcsv`. 

Once the data is read from one of these types into a data flow, all transformation that ETLBox offers can be used to transform the data. So these connectors make it easy to transfer an xml into a database table or to send an excel as json to a web service. 

### Streaming data 

All data that is read or written with these connectors supports streaming. Streaming for a source means that data will be send into a data flow while it is still read from the source. Imagine you receive a json from a webservice that contains a lot of data - ETLBox will start reading the data from the input stream of the web resonponse. Every element of the data that was already received will be send to the connected components immediately. So while the source server is still transferring data, the ETLBox data will already start processing the data received. 

If you source is sending you data faster than your data flow process, each connector will use an internal buffer to store the already received data. The buffer size can be adjusted with the `MaxBufferSize` property available on each connector.

#### Resource Type and Web Requests

All streaming sources and destinations in this article can be set to work either with a file or to use data from a web service. If you want to access a file on your drive or a network share, set the `ResourceType` property to `ResourceType.File`. This is default value for all connectors (Csv, Excel, Text, Xml and Json).

Another option is `ResourceType.Http` - and allows you to read/write data from a http endpoint.Instead of a filename just provide a url. Furthermore, the components also have 
a `HttpClient` and for sources a `HttpRequestMessage` property that can be used to configure the http request, e.g. to add authentication, change the request type from GET to POST or to use https instead. 

The third option is `ResourceType.AzureBlob` if you want to access data from Azure Blob Storage. Use the `AzureBlobStorage` property to define additional connection settings. The simplest way is to set a value for `AzureBlobStorage.ConnectionString` and  `AzureBlobStorage.ContainerName`. But you can also use the different authentication methods, e.g. by providing an existing BlobClient.

{{< alert text="ResourceType is available on all streaming connectors - including text, csv, excel, json, xml, parquet, etc. So you could read or write your csv data not only from a file, but also from a web service or an Azure Blob storage" >}}

#### ResourceType File

The simplest approach is to write your data into a file, either on your local storage or on a network share. 

```C#
XmlSource source = new XmlSource("path/source.xml");
dest.ResourceType = ResourceType.File; //default value
```

```C#
XmlDestination dest = new XmlDestination("path/dest.xml");
```

#### ResourceType Http

If you want to write data into a web service instead of a file, your code for a `JsonDestination` could look like this:

```C#
JsonDestination dest = new JsonDestination(@$"http://localhost/test", ResourceType.Http);
dest.HttpContentType = "text/json";
dest.HttpRequestMessage.Method = HttpMethod.Put;
dest.HttpRequestMessage.Headers.Connection.Add("keep-alive");
```

The other way round, if you want to read data for instance from a rest endpoint, you would define your source like this:
This example will also override the default implementation of the http client to also accept encoded data streams:

```C#
JsonSource source = new JsonSource(@$"http://localhost:{port}/test");
source.ResourceType = ResourceType.Http;
source.HttpClient = new HttpClient(new HttpClientHandler() { AutomaticDecompression = System.Net.DecompressionMethods.All });
source.HttpClient.Timeout = TimeSpan.FromSeconds(60);
source.HttpRequestMessage.Headers.Connection.Add("keep-alive");
source.HttpRequestMessage.Headers.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("*/*"));
source.HttpRequestMessage.Headers.AcceptEncoding.Add(new System.Net.Http.Headers.StringWithQualityHeaderValue("gzip"));
source.HttpRequestMessage.Headers.AcceptEncoding.Add(new System.Net.Http.Headers.StringWithQualityHeaderValue("deflate"));
source.HttpRequestMessage.Headers.AcceptEncoding.Add(new System.Net.Http.Headers.StringWithQualityHeaderValue("br"));
source.HttpRequestMessage.Headers.UserAgent.Add(new System.Net.Http.Headers.ProductInfoHeaderValue("ETLBox", "2.0"));
source.HttpRequestMessage.Headers.CacheControl = new System.Net.Http.Headers.CacheControlHeaderValue() { NoCache = true };
```

#### ResourceType AzureBlob

If your csv data is stored in an Azure Blob storage, you can retrieve it like this:

```C#
var source = new CsvSource("simple.csv");
source.ResourceType = ResourceType.AzureBlob;
source.AzureBlobStorage.ConnectionString =  
  @"Endpoint=https://storageappconfig.azconfig.io;Id=youridhere;Secret=yoursecrethere";
source.AzureBlobStorage.ContainerName = "csv-source";
```

The other way you can write data into Azure Blob storage:

```C#
CsvDestination dest = new CsvDestination("simple.csv");
dest.AzureBlobStorage.ConnectionString = 
  @"Endpoint=https://storageappconfig.azconfig.io;Id=youridhere;Secret=yoursecrethere";
dest.AzureBlobStorage.ContainerName = "csv-destination";
dest.AzureBlobStorage.BlockBlobOpenWriteOptions = new BlockBlobOpenWriteOptions() {
    BufferSize = 1 * 1024 * 1024 //1MB
};
dest.ResourceType = ResourceType.AzureBlob;
```

### Shared properties 

#### Paging

A common scenario is that you need to create multiple calls to a http endpoint in order to receive all data. E.g. your first request to an endpoint will be via a GET request to `http://test.com/data?page=1`. To receive all data, you will need to increase the page number and repeat the request until you don't get any data in the response. 
This can be accomplished in ETLBox with using the `GetNextUri` and `HasNextUri` properties.

```C#
JsonSource<Row> source = new JsonSource<Row>();
int page = 1;
source.GetNextUri = streamMetaData => $"http://test.com/data?page="+page++;
source.HasNextUri = streamMetaData => streamMetaData.ProcessedRows > 0;
```

The `GetNextUri` / `HasNextUri` pattern is also available on destinations. `HasNextUri` will determine if there will be different destination name used for the current data row - if yes, the `GetNextUri` is called to determine the new uri. Both functions give you access to the currently processed row.

```C#
var dest = new CsvDestination<MySimpleRow>();
dest.HasNextUri = (streamMetaData, currentRow) => true;
dest.GetNextUri = (streamMetaData, currentRow) => $"SplitCsv_{streamMetaData.ProgressCount}.csv";
```

#### Skipping rows at beginning

Each streaming source can skip some rows at the beginning of the stream. These rows will be simple ignored and also not counted as Progress. Set the property `SkipRows` to a value greater than 0.

#### Encoding

For sources and destinations that deal with text (so every streaming source except excel) you can define the used Encoding. The default Encoding is UTF-8 - if you need a different encoding, please overwrite the `Encoding` property. 

### Pass existing Stream

By default, all streaming source and destination will create a `StreamReader` or `StreamWriter` based on the existing configuration of the component. E.g. if you pass a filename to a `CsvSource`, the component will create a StreamReader that reads from a newly created FileStream on the file. 

If you already have an existing stream and you want to pass this to the Source or Destination, you can use the `CreateStreamReader` (for sources) or `CreateStreamWriter` (for destinations) function. This function allows you to inject the creation of the StreamReader/StreamWriter in the component. 

```C#
MemoryStream memStream = new MemoryStream(100);
memStream.Write(firstString, 0, firstString.Length);
memStream.Write(secondString, 0, secondString.Length);
memStream.Seek(0, SeekOrigin.Begin);
StreamReader reader = new StreamReader(memStream, Encoding.UTF8);

var source = new CsvSource<MySimpleRow>("memStream");
source.CreateStreamReader = url =>
{
  //url will contain "memStream"
  return reader;
};
```
