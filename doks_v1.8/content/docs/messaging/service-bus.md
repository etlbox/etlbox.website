---
title: "Azure Service Bus"
description: "Azure Service Bus is a fully managed enterprise message broker. With ETLBox, you can integrate Service Bus messaging into your ETL flows, enabling reliable, decoupled communication between services and pipelines. This connector supports flexible serialization options, filtering, message batching, and reuse of ServiceBusClient instances for performance optimization."
lead: "The ETLBox Azure Service Bus connector allows you to read messages from queues or topics and write events into them using ServiceBusSource and ServiceBusDestination. It supports both typed and dynamic data, batching, custom serialization, and integration with existing Service Bus clients or session management."
draft: false
images: []
menu:
  docs:
    parent: "messaging"
weight: 480
toc: true
chatgpt-review: true
---

## ServiceBusSource

`ServiceBusSource` retrieves messages from an Azure Service Bus **queue** or **topic subscription**. Messages are received using the Azure SDK and are automatically deserialized into POCOs or dynamic objects using JSON.

### Basic Usage

```csharp
var source = new ServiceBusSource<MyRow> {
    ConnectionString = "<your-connection-string>",
    QueueOrTopicName = "etl-queue"
};
var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);
```

### Subscription Support

To read from a topic with subscriptions, specify the subscription name:

```csharp
var source = new ServiceBusSource<MyRow> {
    ConnectionString = "<your-connection-string>",
    QueueOrTopicName = "etl-topic",
    SubscriptionName = "etl-subscription"
};
```

### Receiving Messages in Micro-Batches

When a `ServiceBusSource` is used inside an ETLBox data flow, it operates in a **micro-batch mode**. A trigger (e.g. a scheduler or job) starts the execution via `Network.Execute` or `Network.ExecuteAsync`. This opens a message receiver and pulls available messages from the queue/topic in a single receive operation (or several consecutive ones), depending on these properties:

- `MaxMessages`: Maximum number of messages fetched in one call to the queue or topic. Default is 10.
- `MaxWaitTime`: How long the receiver will wait if no messages are immediately available. If `null`, waits indefinitely.
- `ContinueReceiving`: Function that determines whether additional receive cycles should happen based on the last message batch.

Example:

```csharp
var source = new ServiceBusSource<MyRow> {
    ConnectionString = "<your-connection-string>",
    QueueOrTopicName = "etl-topic",
    SubscriptionName = "etl-subscription"
};
source.MaxMessages = 5;
source.MaxWaitTime = TimeSpan.FromSeconds(10);
source.ContinueReceiving = lastMessages => lastMessages?.Count > 0;
```

This mechanism ensures a controlled and efficient batch-oriented processing even in event-driven or scheduled jobs.

### Receiver Options

You can pass `ReceiverOptions` to configure how the receiver behaves (e.g., receive mode):

```csharp
var source = new ServiceBusSource<MyRow>();
source.ReceiverOptions = new ServiceBusReceiverOptions {
    ReceiveMode = ServiceBusReceiveMode.PeekLock
};
```

Refer to {{< link-ext text="Azure Service Bus .NET SDK documentation" url="https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus" >}} for more configuration options.

### Using Dynamic Objects

You can use `ExpandoObject` when the message schema is unknown:

```csharp
var source = new ServiceBusSource {
    ConnectionString = "<your-connection-string>",
    QueueOrTopicName = "etl-queue"
};
var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic msg in dest.Data) {
    Console.WriteLine(msg.Col1);
}
```

## Shared Configuration

Both `ServiceBusSource` and `ServiceBusDestination` support shared authentication and connection management.

### Connection via Connection String

Use a connection string to auto-create a `ServiceBusClient`:

```csharp
source.ConnectionString = "<service-bus-connection-string>";
```

### Reusing ServiceBusClient

To share a `ServiceBusClient` across multiple components or flows:

```csharp
var client = new ServiceBusClient("<service-bus-connection-string>");
var source = new ServiceBusSource<MyRow> {
    Client = client,
    QueueOrTopicName = "etl-queue"
};

var dest = new ServiceBusDestination<MyRow> {
    Client = client,
    QueueOrTopicName = "etl-queue"
};
```

This avoids re-instantiation and is useful in long-running or parallel scenarios.

### Custom Client Options

You can fine-tune the connection using `ServiceBusClientOptions`:

```csharp
source.ClientOptions = new ServiceBusClientOptions {
    TransportType = ServiceBusTransportType.AmqpWebSockets
};
```

## ServiceBusDestination

`ServiceBusDestination` sends data from the data flow into a queue or topic on Azure Service Bus. Each object is serialized into a `ServiceBusMessage` using JSON by default.

### Basic Usage

```csharp
var source = new MemorySource<MyRow>();
source.Data = new[] {
    new MyRow { Col1 = 1, Col2 = "Test1" },
    new MyRow { Col1 = 2, Col2 = "Test2" }
};

var dest = new ServiceBusDestination<MyRow> {
    ConnectionString = "<your-connection-string>",
    QueueOrTopicName = "etl-queue"
};

source.LinkTo(dest);
Network.Execute(source);
```

### Custom Message Creation

To fully control the message structure, define the `MessageCreation` function:

```csharp
dest.MessageCreation = row => {
    var message = new ServiceBusMessage(JsonConvert.SerializeObject(row));
    message.Subject = "etl-message";
    return message;
};
```

This allows setting custom headers, content type, and message properties.

### Configuring Sender Options

You can customize how messages are sent to Azure Service Bus using the `SenderOptions` property. This allows you to fine-tune aspects such as identifier settings or enabling message partitioning.

```csharp
var dest = new ServiceBusDestination<MyRow> {
    ConnectionString = "<your-connection-string>",
    QueueOrTopicName = "myqueue",
    SenderOptions = new ServiceBusSenderOptions {
        Identifier = "etlbox-sender"
    }
};
```

The `SenderOptions` are passed to the `CreateSender` method when the internal `ServiceBusSender` is initialized. For a full list of settings, see the {{< link-ext text="official documentation for ServiceBusSenderOptions" url="https://learn.microsoft.com/en-us/dotnet/api/azure.messaging.servicebus.servicebussenderoptions" >}}.

### Dynamic Objects

You can send dynamic data by using `ExpandoObject`:

```csharp
var source = new MemorySource();
dynamic row = new ExpandoObject();
row.Col1 = 42;
row.Col2 = "Dynamic row";
source.DataAsList.Add(row);

var dest = new ServiceBusDestination {
    ConnectionString = "<your-connection-string>",
    QueueOrTopicName = "etl-queue"
};

source.LinkTo(dest);
Network.Execute(source);
```
