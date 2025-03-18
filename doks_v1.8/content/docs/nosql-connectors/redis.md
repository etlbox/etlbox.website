---
title: "Redis"
description: "How to read or write data from Redis"
lead: "Redis is a very popular key/value store. ETLBox can connect to Redis with the RedisSource and RedisDestination."
draft: false
images: []
menu:
  docs:
    parent: "nosql-connectors"
weight: 320
toc: true
---

## RedisSource

The `RedisSource` will use the SCAN command to retrieve values that can be processed in a data flow. If no scan pattern is defined, all data will be retrieved (the scan pattern "*" is used as default).

```C#
ConnectionMultiplexer RedisConnection = ConnectionMultiplexer.Connect("localhost:6379,allowAdmin=true");
var source = new RedisSource<MyRow>();
source.RedisConnection = RedisConnection;
source.ScanPattern = "a*";
source.ScanCountSize = 2;

var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);
```

### Data deserialization

By default, the `RedisSource` assumes your stored value is a json. When retrieving the data, it will to to deserialize the json into your object type using JsonConvert (from the Newtonsoft.Json library. You can define your own `JsonSerializerSettings` which are then used to deserialize your object - assign them to the property `DeserializerSettings` in the `RedisSource`.

### Own deserialization function

If you want to provide your own deserialization function, this is also possible. This is helpful e.g. if your stored value is not formatted as json.

```C#
var source = new RedisSource<MyRow>();
source.DeserializationFunc = s =>
{
    var d = s.Split("|");
    return new MyRow()
    {
        Col1 = int.Parse(d[0]),
        Col2 = d[1]
    };
};
```

### Redis database

Use the `DatabaseNumber` property to specify the Redis database.

```C#
var source = new RedisSource<MyRow>();
source.DatabaseNumber = 3;
```

## RedisDestination

You can use the `RedisDestination` to send data from your flow into a Redis database. As Redis is a key/value store, you need to define a key column property that is used to derive the key value. This property must be either of type string or implement the ToString() method. Only one property can be used as key. You can define the key column by either using the `KeyColumn` or by assigning the name of the property to `KeyColumn`.

Example for using a strongly typed object with the `KeyColumn` attribute
```C#
public class MyRow
{
    [KeyColumn]
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

var dest = new RedisDestination<MyRow>();
```

Example when setting a property name for the `KeyColumn`. This is useful for dynamic object where you can't set attributes.

```C#
var dest = new RedisDestination<MyRow>();
dest.KeyColumn = "Col1";
```

### Data serialization

By default, data that arrives in the `RedisDestination` is converted into Json using the Newtonsoft.Json library. You can define your own JsonSerializerSettings that are then used to serialize your object.

### Own serialization function

If you don't want to store your rows as json, you can define your own serialization function.

```C#
var dest = new RedisDestination<MyRow>();
dest.SerializationFunc = row => $"{row.Col1}|{row.Col2}";
```

## Using dynamic object

Both `RedisSource` and `RedisDestination` support data retrieval with dynamic objects.

```C#
ConnectionMultiplexer RedisConnection = ConnectionMultiplexer.Connect("localhost:6379,allowAdmin=true");
var source = new RedisSource();
source.RedisConnection = RedisConnection;

var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);
```
