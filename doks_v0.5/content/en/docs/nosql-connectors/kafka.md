---
title: "Apache Kafka"
description: "Details about the Apace Kafka connector"
lead: "The Apache Kafka connector allows to read or write data from the Kafka event queue."
draft: false
images: []
menu:
  docs:
    parent: "nosql-connectors"
weight: 300
toc: true
---

# ETLBox.Apache.Kafka package

In order to use the Apache Kafka connector, you need to add the nuget package {{< link-ext url="https://www.nuget.org/packages/ETLBox.Apache.Kafka" text="ETLBox.Apache.Kafka" >}} to your project. 

## Kafka Source Example

The following examples will produce test in a Kafka queue and then reads the data from queue using the Kafka connector:

```C#
string topicName = "SimpleReadTopic";
ProduceTestDataTyped(topicName, 1);
ProduceTestDataTyped(topicName, 2);
ProduceTestDataTyped(topicName, 0);
ProduceTestDataTyped(topicName, 3);


//Act
var source = new KafkaSource<Row>() {
    ConsumerConfig = new ConsumerConfig() {
        BootstrapServers = fixture.ConnectionString,
        GroupId = fixture.GroupId + Guid.NewGuid().ToString(),
        AutoOffsetReset = AutoOffsetReset.Earliest,
    },
    TopicName = topicName,
};

var dest = new MemoryDestination<Row>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine("Id: " + row.Id + ", Value: " + row.Value);
/* Output: */
/*
Id: 1, Value: Test1
Id: 2, Value: Test2
Id: 3, Value: Test3
*/

public class Row {
    public int Id { get; set; }
    public string Value { get; set; }
}

public class DefaultRowSerializer : Confluent.Kafka.ISerializer<Row> {
    public byte[] Serialize(Row data, SerializationContext context) {
        if (data == null) return null;
        else return Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(data));
    }
}

private void ProduceTestDataTyped(string topicName, int id, string valueSerializer = "default") {
    var config = new ProducerConfig { BootstrapServers = fixture.ConnectionString };
    var builder = new ProducerBuilder<Null, Row>(config);
    builder.SetValueSerializer(new DefaultRowSerializer());

    using (var p = builder.Build()) {
        var rowToSend = new Row() { Id = id, Value = $"Test{id}" };
        p.Produce(topicName, new Message<Null, Row> {
            Value = rowToSend
        });
        p.Flush();
    }
}
```

### Using custom serializer

You can also define your own custom deserializer when extracting data from the Kafka queue. In the following example, we use our own serializer when creating the test data, and then pass a custom deserializer to the `KafkaSource` when reading the data. 

```C#
string topicName = "DifferentSerializerTopic";
ProduceTestDataTyped(topicName, 1, "custom");
ProduceTestDataTyped(topicName, 2, "custom");
ProduceTestDataTyped(topicName, 3, "custom");
ProduceTestDataTyped(topicName, 4, "custom");
ProduceTestDataTyped(topicName, 5, "custom");

var source = new KafkaSource<Row>() {
    ConsumerConfig = new ConsumerConfig() {
        BootstrapServers = fixture.ConnectionString,
        GroupId = fixture.GroupId + Guid.NewGuid().ToString(),
        AutoOffsetReset = AutoOffsetReset.Earliest,
    },
    TopicName = topicName,
    BuilderContext = builder => builder.SetValueDeserializer(new CustomRowDeserializer())
};
source.Limit = 6;

var dest = new MemoryDestination<Row>();
dest.ClearDataOnStart = false;

source.LinkTo(dest);
await Network.ExecuteAsync(source);

//Output
foreach (var row in dest.Data)
    Console.WriteLine("Id: " + row.Id + ", Value: " + row.Value);
/* Output: */
/*
Id: 1, Value: Test1
Id: 2, Value: Test2
Id: 3, Value: Test3
Id: 4, Value: Test4
Id: 5, Value: Test5
*/

public class Row {
    public int Id { get; set; }
    public string Value { get; set; }
}

public class CustomRowSerializer : Confluent.Kafka.ISerializer<Row> {
    public byte[] Serialize(Row data, SerializationContext context) {
        if (data == null) return null;
        return Encoding.UTF8.GetBytes(data.Id + "|" + data.Value);
    }
}

public class CustomNotNullRowSerializer : Confluent.Kafka.ISerializer<Row> {
    public byte[] Serialize(Row data, SerializationContext context) {
        if (data == null) throw new Exception("No null values allowed");
        return Encoding.UTF8.GetBytes(data.Id + "|" + data.Value);
    }
}

public class CustomRowDeserializer : IDeserializer<Row> {
    public Row Deserialize(ReadOnlySpan<byte> data, bool isNull, SerializationContext context) {
        if (isNull) return null;
        var parts = Encoding.UTF8.GetString(data).Split('|');
        return new Row() { Id = int.Parse(parts[0]), Value = parts[1] };
    }
}

private void ProduceTestDataTyped(string topicName, int id, string valueSerializer = "default") {
    var config = new ProducerConfig { BootstrapServers = fixture.ConnectionString };
    var builder = new ProducerBuilder<Null, Row>(config);
    builder.SetValueSerializer(new CustomRowSerializer());

    using (var p = builder.Build()) {
        var rowToSend = new Row() { Id = id, Value = $"Test{id}" };
        p.Produce(topicName, new Message<Null, Row> {
            Value = rowToSend
        });
        p.Flush();
    }
}
```

## Kafka Destination Example

We can use the `KafkaDestination` to write any serializable data as an event into the Kafka event queue. Here is an example to write data from a MemorySource into a Kafka target. By default, data is serialized as the event text as a (formatted) json string. 

```C#
string topicName = "SimpleWriteTopic";

var source= new MemorySource<Row>();
source.DataAsList.Add(new Row() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new Row() { Id = 2, Value = "Test2" });
source.DataAsList.Add(new Row() { Id = 3, Value = "Test3" });

var dest = new KafkaDestination<Row>() {
    ProducerConfig = new ProducerConfig() {
        BootstrapServers = fixture.ConnectionString                    
    },
    TopicName = topicName,
};

source.LinkTo(dest);
Network.Execute(source);

public class Row {
    public int Id { get; set; }
    public string Value { get; set; }
}
```

### Custom serialization and transactions

When writing data into the Kafka event queue, you can also define your own serialization function. If needed, you can insert your data inside a transaction - simply set the `UseTransaction` property to `true`. 

```C#
string topicName = "WithTransactionTopic";
var source = new MemorySource<Row>();
source.DataAsList.Add(new Row() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new Row() { Id = 2, Value = "Test2" });
source.DataAsList.Add(new Row() { Id = 3, Value = "Test3" });

//Act
var dest = new KafkaDestination<Row>() {
    ProducerConfig = new ProducerConfig() {
        BootstrapServers = fixture.ConnectionString
    },
    TopicName = topicName,
    UseTransaction = true,       
    BuilderContext = builder => builder.SetValueSerializer(new CustomRowSerializer())
};

source.LinkTo(dest);
Network.Execute(source);

public class Row {
    public int Id { get; set; }
    public string Value { get; set; }
}

public class CustomRowSerializer : Confluent.Kafka.ISerializer<Row> {
    public byte[] Serialize(Row data, SerializationContext context) {
        if (data == null) return null;
        return Encoding.UTF8.GetBytes(data.Id + "|" + data.Value);
    }
}
```