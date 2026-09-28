---
title: "Redis"
description: "This article explains how to use the ETLBox Redis connectors to read from and write to Redis databases. You'll learn how to scan keys using patterns, control serialization formats, and configure key handling for inserting data."
lead: "The ETLBox Redis connector integrates Redis into your ETL pipelines, allowing high-speed access to key-value data for both reading and writing. With support for custom serialization and dynamic objects, it offers a flexible way to work with one of the most popular in-memory databases."
draft: false
images: []
menu:
  docs:
    parent: "nosql-databases"
weight: 420
toc: true
chatgpt-review: true
---

Redis is commonly used for high-performance caching and lightweight storage scenarios. ETLBox supports efficient batch writing and flexible key/value serialization.
The connector uses the [StackExchange.Redis](https://stackexchange.github.io/StackExchange.Redis/) client library under the hood.

## RedisSource

The `RedisSource` component scans a Redis database for keys that match a pattern and reads the associated values into your data flow. Values are deserialized from JSON by default, but you can customize the behavior to suit other formats.

### Basic Usage

```csharp
var source = new RedisSource<MyRow> {
    ConnectionString = "localhost:6379",
    ScanPattern = "user:*",
    ScanCountSize = 1000
};
var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);
```

This example connects to Redis and retrieves all keys that match the `user:*` pattern.

### Deserialization

By default, values are assumed to be JSON and are deserialized using `JsonConvert` from the **Newtonsoft.Json** library.

To customize deserialization, you can either:

- Provide custom `JsonSerializerSettings`:

  ```csharp
  var source = new RedisSource<MyRow>();
  source.DeserializerSettings = new JsonSerializerSettings {
      NullValueHandling = NullValueHandling.Ignore
  };
  ```

- Define your own `DeserializationFunc`:

  ```csharp
  var source = new RedisSource<MyRow>();
  source.DeserializationFunc = s => {
      var parts = s.Split("|");
      return new MyRow {
          Col1 = int.Parse(parts[0]),
          Col2 = parts[1]
      };
  };
  ```

This allows you to handle plain text or other serialized formats.

### Selecting Redis Database

Redis supports multiple logical databases (typically 0–15). You can set which database to read from:

```csharp
var source = new RedisSource<MyRow>();
source.DatabaseNumber = 3;
```

### Dynamic Objects

`RedisSource` also supports reading into `ExpandoObject`:

```csharp
var source = new RedisSource {
    ConnectionString = "localhost:6379"
};
var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine(row.SomeProperty);
```

## Connection Options

Redis connections can be configured in two ways:

### Using Connection String

Provide a Redis connection string (e.g., `"localhost:6379"`):

```csharp
source.ConnectionString = "localhost:6379";
```

ETLBox will automatically create and manage the `ConnectionMultiplexer`.

### Reusing an Existing Connection

You can reuse an existing `ConnectionMultiplexer` instance:

```csharp
var redis = ConnectionMultiplexer.Connect("localhost:6379");
var source = new RedisSource<MyRow> {
    RedisConnection = redis
};
```

This can improve performance when running multiple operations.

## RedisDestination

The `RedisDestination` component writes key/value pairs into a Redis database. Each row is serialized and stored using a Redis key derived from a property in the object.

### Basic Usage

```csharp
var source = new MemorySource<MyRow>();
source.Data = GetRows();

var dest = new RedisDestination<MyRow> {
    ConnectionString = "localhost:6379"
};
source.LinkTo(dest);
Network.Execute(source);
```

### Defining the Key

Each row must have a key property. You can define this in one of two ways:

#### KeyColumn Attribute

```csharp
public class MyRow {
    [KeyColumn]
    public string Id { get; set; }
    public string Name { get; set; }
}
```

#### Manual KeyColumn Setting

```csharp
var dest = new RedisDestination<MyRow> ();
dest.KeyColumn = new KeyColumn { KeyPropertyName = "Id" };
```

This is useful for dynamic objects or when the attribute can't be used.

### Serialization

By default, each row is serialized into JSON using `JsonConvert`. You can customize the behavior:

- Use custom settings:

  ```csharp
  var dest = new RedisDestination<MyRow> ();
  dest.SerializerSettings = new JsonSerializerSettings {
      Formatting = Formatting.None
  };
  ```

- Use a custom serialization function:

  ```csharp
  var dest = new RedisDestination<MyRow> ();
  dest.SerializationFunc = row => $"{row.Col1}|{row.Col2}";
  ```

This lets you store compact text, binary formats, or custom encoding.

### Writing to a Specific Database

You can write to a different Redis logical database:

```csharp
var dest = new RedisDestination<MyRow> ();
dest.DatabaseNumber = 1;
```

### Dynamic Objects

You can also use `ExpandoObject` for flexible data structures:

```csharp
var source = new MemorySource();
dynamic row = new ExpandoObject();
row.Id = "user:001";
row.Name = "John Doe";
source.DataAsList.Add(row);

var dest = new RedisDestination {
    ConnectionString = "localhost:6379",
    KeyColumn = new KeyColumn { KeyPropertyName = "Id" }
};
source.LinkTo(dest);
Network.Execute(source);
```

This setup supports flexible schemas while still enforcing key/value consistency.

