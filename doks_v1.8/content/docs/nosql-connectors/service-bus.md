---
title: "Azure Service Bus"
description: "Details about the Azure Service Bus connector"
lead: "The Azure Service Bus is an enterprise message bus, which can also be connected to an ETLBox data flow. This article will give you an overview how to use the connector."
draft: false
images: []
menu:
  docs:
    parent: "nosql-connectors"
weight: 220
toc: true
---

# ETLBox.Azure.ServiceBus package

In order to use the Azure Service Bus connector, you need to add the nuget {{< link-ext url="https://www.nuget.org/packages/ETLBox.Azure.ServiceBus" text="ETLBox.Azure.ServiceBus" >}} to your project.

## Service Bus Source example

The `ServiceBusSource` allows you to read events from a queue or topic. Here is an example snippet:

```C#
public class MyRow
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

string queueOrTopicName = "testqueue";
await ServiceBusTestHelper.RecreateQueue(ConnectionString, queueOrTopicName);
await ServiceBusTestHelper.CreateMessageInQueue(ConnectionString, queueOrTopicName,
    $@"{{""Col1"":1,""Col2"":""Test1""}}");
await ServiceBusTestHelper.CreateMessageInQueue(ConnectionString, queueOrTopicName,
    $@"{{""Col1"":2,""Col2"":""Test2""}}");
await ServiceBusTestHelper.CreateMessageInQueue(ConnectionString, queueOrTopicName,
    $@"{{""Col1"":3}}");

var dest = new MemoryDestination<MyRow>();
var source = new ServiceBusSource<MyRow>();
source.ConnectionString = ConnectionString;
source.QueueOrTopicName = queueOrTopicName;

source.LinkTo(dest);
await Network.ExecuteAsync(source);
```


## Service Bus Destination example

```C#
public class MyRow
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Col1 = 1, Col2 = "Test1" });
source.DataAsList.Add(new MyRow() { Col1 = 2, Col2 = "Test2" });
source.DataAsList.Add(new MyRow() { Col1 = 3, Col2 = "Test3" });

var dest = new ServiceBusDestination<MyRow>();
source.LinkTo(dest);

string queueOrTopicName = "testqueue";
await ServiceBusTestHelper.RecreateQueue(ConnectionString, queueOrTopicName);

dest.ConnectionString = ConnectionString;
dest.QueueOrTopicName = queueOrTopicName;
dest.ClientOptions = new Azure.Messaging.ServiceBus.ServiceBusClientOptions() {
    TransportType = Azure.Messaging.ServiceBus.ServiceBusTransportType.AmqpWebSockets
};
Network.Execute(source);
```

## Shared Configuration

The `ServiceBusSource` and `ServiceBusDestination` expose properties that can be used to configure the components:

- `ConnectionString`: The connection string used to establish the connection to the Azure Service Bus.
- `QueueOrTopicName`: The name of the queue or topic where you want to read from or write into.
- `Client`: The `ServiceBusClient` that owns the connection and can be used to create senders and receivers. Automatically created if you provide a `ConnectionString`, unless you provide your own instance here.
- `ClientOptions`: The client options used when instantiating a new client.

### Source only properties

The following properties are only available in the Azure Service Bus Source:
- `ReceiverOptions`: The receiver options used when instantiating a receiver.
- `SubscriptionName`: Optional: The name of the subscription for a topic
- `MaxMessages`: The maximum number of messages that will be received per request
- `ContinueReceiving`: Function that determines if the next message should be retrieved,based on the last retrieved message. Default is true, so all available messages will be retrieved.
- `MaxWaitTime`:  The maximum wait time for the next message. Set this to null if you want to wait indefinitely. If the wait time is has been reached, the Service Bus Source will send the already received messages into the data flow.

### Destination only properties

- `SenderOptions`: The sender options used when instantiating a new sender.
- `MessageCreation`: By default, your object is serialized into json and send as a ServiceBusMessage without additional parameters. Define your own serialization function here.


## Dynamic object support

Like all other data flow components, Service bus source and destination support the dynamic `ExpandoObject`. Simple use either `ServiceBusSource` or `ServiceBusSource<ExpandoObject>` instead of `ServiceBusSource<T>`.
