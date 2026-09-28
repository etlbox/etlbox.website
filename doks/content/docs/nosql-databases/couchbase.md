---
title: "Couchbase"
description: "This article explains how to use the ETLBox Couchbase connector to read and write JSON documents using N1QL queries and the Couchbase .NET SDK."
lead: "The ETLBox Couchbase connector lets you read and write JSON documents to and from Couchbase buckets using N1QL and the official Couchbase .NET SDK. It supports both strongly typed POCOs and dynamic objects."
draft: false
images: []
menu:
  docs:
    parent: "nosql-databases"
weight: 420
toc: true
chatgpt-review: true
---

This connector is ideal for document-oriented use cases where flexible schema handling and direct access to Couchbase buckets are required. ETLBox uses the official {{< link-ext text="Couchbase .NET SDK" url="https://docs.couchbase.com/dotnet-sdk/current/hello-world/start-using-sdk.html" >}} under the hood and integrates its query and cluster connection model seamlessly into data flows.

## CouchbaseSource

`CouchbaseSource` allows reading from a Couchbase bucket using a N1QL query. The query result can be mapped into strongly typed POCOs or dynamic objects.

### Basic Usage

```csharp
var source = new CouchbaseSource<MyRow> {
    ConnectionString = "<your-connection-string>",
    ClusterOptions = new ClusterOptions {
        UserName = "<username>",
        Password = "<password>"
    },
    N1QLStatement = "SELECT Col1, Col2 FROM `my_bucket` ORDER BY Col1",
    Options = new QueryOptions().ScanConsistency(QueryScanConsistency.RequestPlus)
};

var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);
```

This will execute the N1QL query and deserialize the result into `MyRow` objects.

### Custom Query Options

You can adjust query behavior using `QueryOptions`. For instance, you can enforce consistency or limit the number of returned rows.

```csharp
source.Options = source.Options.ScanConsistency(QueryScanConsistency.RequestPlus);
```

Refer to the {{< link-ext text="Couchbase .NET SDK query options documentation" url="https://docs.couchbase.com/dotnet-sdk/current/howtos/n1ql-queries-with-sdk.html" >}} for a complete list.

### Dynamic Object Support

If you're working with flexible document structures, you can use `ExpandoObject`:

```csharp
var source = new CouchbaseSource {
    ConnectionString = "<your-connection-string>",
    ClusterOptions = new ClusterOptions {
        UserName = "<username>",
        Password = "<password>"
    },
    N1QLStatement = "SELECT Col1, Col2 FROM `my_bucket` ORDER BY Col1",
    Options = new QueryOptions().ScanConsistency(QueryScanConsistency.RequestPlus)
};

var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic doc in dest.Data) {
    Console.WriteLine($"{doc.Col1}: {doc.Col2}");
}
```

## Authentication & Cluster Setup

You can connect to Couchbase in two ways:

### Using a Connection String

This is the most common method. You must provide:

- `ConnectionString` (e.g., `"couchbase://localhost"`)
- `ClusterOptions` (with `UserName` and `Password`)

```csharp
var source = new CouchbaseSource<MyRow> {
    ConnectionString = "couchbase://localhost",
    ClusterOptions = new ClusterOptions {
        UserName = "admin",
        Password = "password"
    },
    N1QLStatement = "SELECT * FROM `my_bucket`"
};
```

### Reusing an Existing CouchbaseCluster

If your application already initializes a shared `ICluster` instance, you can inject it directly using the `CouchbaseCluster` property (available on both source and destination):

```csharp
var cluster = await Cluster.ConnectAsync("couchbase://localhost", new ClusterOptions {
    UserName = "admin",
    Password = "password"
});

var source = new CouchbaseSource<MyRow> {
    CouchbaseCluster = cluster,
    N1QLStatement = "SELECT * FROM `my_bucket`"
};
```

This allows better resource management and reuse of credentials.

## CouchbaseDestination

`CouchbaseDestination` stores objects into a Couchbase bucket. The records are serialized to JSON and inserted using the SDK’s document API.

### Basic Usage

```csharp
var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow { Col1 = 1, Col2 = "Test1" });

var dest = new CouchbaseDestination<MyRow> {
    ConnectionString = "<your-connection-string>",
    ClusterOptions = new ClusterOptions {
        UserName = "user",
        Password = "pass"
    },
    BucketName = "my_bucket"
};

source.LinkTo(dest);
Network.Execute(source);
```

### Defining Document Keys

By default, Couchbase will generate document keys. You can customize the key per record using either:

#### KeyColumn Attribute

Mark a property in your POCO class:

```csharp
public class MyRow {
    public int Col1 { get; set; }

    [KeyColumn]
    public string MyKey { get; set; }
}
```

This tells ETLBox to use `MyKey` as the document key.

#### Manual Key Column (Dynamic or POCO)

If working with dynamic data or if you want to set the key explicitly:

```csharp
var dest = new CouchbaseDestination {
    KeyColumn = new KeyColumn() { KeyPropertyName = "MyKey" }
};
```

### Dynamic Object Support

You can also insert dynamic objects:

```csharp
var source = new MemorySource();
dynamic row = new ExpandoObject();
row.Col1 = 42;
row.Col2 = "Dynamic Insert";
row.KeyCol = "custom_key";
source.DataAsList.Add(row);

var dest = new CouchbaseDestination {
    ConnectionString = "<your-connection-string>",
    ClusterOptions = new ClusterOptions {
        UserName = "user",
        Password = "pass"
    },
    BucketName = "my_bucket",
    KeyColumn = new KeyColumn { KeyPropertyName = "KeyCol" }
};

source.LinkTo(dest);
Network.Execute(source);
```

In this case, the dynamic property `KeyCol` is used as the document key.

