---
title: "Couchbase"
description: "Details about the Couchbase connector"
lead: "Couchbase can be used a document storage and key/value storage. This article will give you an overview of the Couchbase connectors for ETLBox."
draft: false
images: []
menu:
  docs:
    parent: "nosql-connectors"
weight: 420
toc: true
---

## CouchbaseSource

The `CouchbaseSource` will send data retrieved from a N1QL query into the data flow.

```C#
var source = new CouchbaseSource<MyRow>();
var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);

//Act
source.ConnectionString = ConnectionString;
source.ClusterOptions = new ClusterOptions()
{
    UserName = Username,
    Password = Password
};
source.N1QLStatement = $"SELECT Col1, Col2 FROM `{tablename}` ORDER BY Col1";
source.Options = source.Options.ScanConsistency(QueryScanConsistency.RequestPlus);

Network.Execute(source);
```

### QueryOptions

When retrieving data from the bucket, you can pass along some QueryOptions.

```C#
var source = new CouchbaseSource<MyRow>();
source.Options = source.Options.ScanConsistency(QueryScanConsistency.RequestPlus);
```

## CouchbaseDestination

The `CouchbaseDestinatinon` will store the retrieved data into a couchbase bucket (serialized as json)

```C#
var dest = new CouchbaseDestination<MyRow>();
dest.ConnectionString = ConnectionString;
dest.ClusterOptions = new ClusterOptions()
{
    UserName = Username,
    Password = Password
};
dest.BucketName = tablename;

var source = new MemorySource<MyRow>();
source.LinkTo(dest);
Network.Execute(source);
```

#### InsertOptions

You can specify Couchbase `InsertOptions` that are used when inserting data by setting a value for the property `Options`.

### Key Columns

By default, Couchbase will generate a key when inserting data. You can define your key for each record.

#### KeyColumn Attribute

One way to define the key column is to use `KeyColumn` attribute on the property in your strongly typed object that holds the key value.

```C#
 public class MyRowWithKeyAttr
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }

    [KeyColumn]
    public string KeyCol { get; set; }
}
```

When inserting data of the type `MyRowWithKeyAttr`, each inserted record will get the key value that is stored in the `KeyCol` property of the record.

#### KeyColumn for dynamic objects

If you are using dynamic objects or if you want to specify your key column manually, you can define the key column by passing the property name as string to the `KeyColumn`.

```C#
var dest = new CouchbaseDestination();
dest.KeyColumn = new KeyColumn() { KeyPropertyName = "KeyCol" };
```

## Reuse existing cluster instances

If you already have an instance of a Couchbase cluster object, you can pass this directly to the CouchbaseSource

```C#
ICluster cluster = Cluster.ConnectAsync("couchbase://localhost").Result;
var source = new CouchbaseSource<MyRow>();
source.CouchbaseCluster = cluster;
```

## Using dynamic objects

The `CouchbaseSource` and `CouchbaseDestination` support both the data retrieval with dynamic object.

```C#
var source = new CouchbaseSource();
source.ConnectionString = ConnectionString;
source.ClusterOptions = new ClusterOptions()
{
    UserName = Username,
    Password = Password
};
source.N1QLStatement = $"SELECT Col1, Col2 FROM `{tablename}` ORDER BY Col1";
source.Options = source.Options.ScanConsistency(QueryScanConsistency.RequestPlus);

var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);
```
