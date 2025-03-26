---
title: "Apache Kafka"
description: "This article explains how to use the ETLBox Kafka connector to send and receive data from Apache Kafka. It covers basic setup, dynamic object handling, custom serialization, and transaction support."
lead: "The ETLBox Kafka connector allows integration with Apache Kafka topics for both producing and consuming messages in your ETL workflows. It supports strongly typed objects, dynamic data, and custom serialization using the Confluent Kafka .NET client. Whether you’re building event-driven pipelines or processing streaming data, the Kafka connector enables reliable message-based integration."
draft: false
images: []
menu:
  docs:
    parent: "messaging"
weight: 480
toc: true
chatgpt-review: true
---

## KafkaSource

The `KafkaSource` reads messages from an Apache Kafka topic and converts them into typed or dynamic objects using the {{< link-ext text="Confluent Kafka .NET client" url="https://docs.confluent.io/platform/current/clients/dotnet.html" >}}. You must specify the Kafka topic and consumer configuration, and optionally define how the data is deserialized.

### Basic Usage

```csharp
var source = new KafkaSource<Row> {
    ConsumerConfig = new ConsumerConfig {
        BootstrapServers = "<your-broker-address>",
        GroupId = "etlbox-group-" + Guid.NewGuid(),
        AutoOffsetReset = AutoOffsetReset.Earliest
    },
    TopicName = "my-topic"
};
var dest = new MemoryDestination<Row>();
source.LinkTo(dest);
Network.Execute(source);
```

Each message will be deserialized into the target type using the default behavior unless a custom deserializer is provided.

### Batch-Oriented Processing and Idempotent Polling

While Kafka is designed for real-time streaming, `KafkaSource` in ETLBox supports batch-style integration. This is particularly useful in ETL scenarios where executions are triggered by schedules, events, or orchestrators.

```csharp
var source = new KafkaSource<MyRow> {
    TopicName = "my-topic",
    ConsumerConfig = new ConsumerConfig {
        BootstrapServers = "<your-broker>",
        GroupId = "etlbox-consumer-group",
        AutoOffsetReset = AutoOffsetReset.Earliest
    },
    Limit = 100
};
```

In this example:

- The `Limit` controls how many records are consumed in one `Network.Execute()` run.
- The `GroupId` ensures Kafka tracks the consumer’s read offset.
- Messages are only polled and processed when explicitly triggered.

#### Integration with Batch Pipelines

ETLBox does **not** continuously poll Kafka. Instead, data is pulled *once per execution*, meaning KafkaSource fits naturally into batch pipelines. You can think of it as taking a snapshot of the next N messages (based on `Limit`), then exiting cleanly.

This avoids resource consumption from long-running consumers and gives you full control over when and how often messages are retrieved.

#### Idempotent Polling with Consumer Groups

Kafka’s consumer group mechanism allows you to implement **idempotent polling**:

- Once a message is consumed and committed by a group, it won’t be delivered again.
- ETLBox relies on Kafka's offset management—ensuring messages are processed once per consumer group.
- If your pipeline fails or is retried, Kafka resumes from the last committed offset, supporting safe reprocessing when paired with transactional sinks or checkpointing logic.

### Custom Deserialization

You can provide your own deserializer by implementing `Confluent.Kafka.IDeserializer<T>`. Use the `BuilderContext` property to assign it during consumer creation.

```csharp
public class CustomRowDeserializer : IDeserializer<Row> {
    public Row Deserialize(ReadOnlySpan<byte> data, bool isNull, SerializationContext context) {
        var parts = Encoding.UTF8.GetString(data).Split('|');
        return new Row { Id = int.Parse(parts[0]), Value = parts[1] };
    }
}

var source = new KafkaSource<Row> {
    ConsumerConfig = new ConsumerConfig {
        BootstrapServers = "<your-broker-address>",
        GroupId = "etlbox-group-" + Guid.NewGuid(),
        AutoOffsetReset = AutoOffsetReset.Earliest
    },
    TopicName = "my-topic",
    BuilderContext = builder => builder.SetValueDeserializer(new CustomRowDeserializer())
};
```

### Using Dynamic Objects

If the message structure is not fixed, you can use dynamic typing with `ExpandoObject`.

```csharp
var source = new KafkaSource {
    ConsumerConfig = new ConsumerConfig {
        BootstrapServers = "<your-broker-address>",
        GroupId = "etlbox-group-" + Guid.NewGuid(),
        AutoOffsetReset = AutoOffsetReset.Earliest
    },
    TopicName = "my-topic"
};
var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine(row.SomeField);
```

## KafkaDestination

The `KafkaDestination` publishes data from the pipeline to a Kafka topic. By default, rows are serialized to JSON. You can customize serialization and enable transactional writes.

### Basic Usage

```csharp
var source = new MemorySource<Row>();
source.DataAsList.Add(new Row { Id = 1, Value = "Test1" });

var dest = new KafkaDestination<Row> {
    ProducerConfig = new ProducerConfig {
        BootstrapServers = "<your-broker-address>"
    },
    TopicName = "my-topic"
};
source.LinkTo(dest);
Network.Execute(source);
```

Each row is serialized to JSON and sent as the Value in the Kafka message. Null rows are ignored.

### Custom Serialization

To change the serialization format, implement `Confluent.Kafka.ISerializer<T>` and set it using `BuilderContext`.

```csharp
public class CustomRowSerializer : ISerializer<Row> {
    public byte[] Serialize(Row data, SerializationContext context) {
        return Encoding.UTF8.GetBytes($"{data.Id}|{data.Value}");
    }
}

var dest = new KafkaDestination<Row> {
    ProducerConfig = new ProducerConfig {
        BootstrapServers = "<your-broker-address>"
    },
    TopicName = "my-topic",
    BuilderContext = builder => builder.SetValueSerializer(new CustomRowSerializer())
};
```

### Transactions

To ensure atomic writes, enable transactions by setting `UseTransaction = true`. The destination will begin and commit a transaction across all records in the batch. If any error occurs, the transaction is aborted.

```csharp
var dest = new KafkaDestination<Row> {
    ProducerConfig = new ProducerConfig {
        BootstrapServers = "<your-broker-address>"
    },
    TopicName = "my-topic",
    UseTransaction = true
};
```
