---
title: "Integrate REST endpoints"
description: "Example code how to use Json from REST endpoints or other web services"
lead: "This example demonstrates how a web service that returns data in json format can be used in an ETL pipeline. The json data can come from any service that can be requested from a .net HttpClient. "
draft: false
images: []
menu:
  recipes:
    parent: "data-integration"
weight: 2130
toc: true
---

## Purpose

This example demonstrates how a web service that returns data in json format can be used in an ETL pipeline. The json data can come from any service that can be requested from a .net HttpClient. 

## Loading json from a web service

In this example, I will use the JSONPlaceHolder project. It is a fake online REST API for Testing and Prototyping.
See {{< link-ext text="jsonplaceholder.typicode.com" url="https://jsonplaceholder.typicode.com" >}} for more details.

### JsonSource

You can directly query web services or REST APIs using the `JsonSource`. There are some minor restrictions 
1) The http or https service has to send back a Json response
2) The json needs to be an array.

A good example for a valid json response that can be read by the `JsonSource` component is {{< link-ext text="this example web service" url="https://jsonplaceholder.typicode.com/todos/" >}}.

It will return a json in the following format:

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  ...
]
```

Please note that the root element is an array, and it does contain object definitions.

Here is an example how to read data from this web service.

First, you need to define your POCO:

```C#
public class Todo
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string Title { get; set; }
    public bool Completed { get; set; }
}
```

Now, you can simply read the data from the service by using the `JsonSource`:

```C#
JsonSource<Todo> source = new JsonSource<Todo>("https://jsonplaceholder.typicode.com/todos", ResourceType.Http);
```

So a full example where you read data from a webservice e.g. into a memory data table would look like this:

```C#
JsonSource<Todo> source = new JsonSource<Todo>("https://jsonplaceholder.typicode.com/todos", ResourceType.Http);
MemoryDestination<Todo> dest = new MemoryDestination<Todo>();

source.LinkTo(dest);
Network.Execute(source);

//dest.Data will now contain all items from the web service
```

The property `Data` will now contain all items from the web service.

### Authentication

The `JsonSource` gives you access to the `HttpClient` and `HttpRequestMessage` properties which are used to send requests to the endpoint. 

E.g. if you want to set your own authorization token, you could simple set the default request message of the http client:

```C#
JsonSource<Todo> source = new JsonSource<Todo>("https://jsonplaceholder.typicode.com/todos", ResourceType.Http);
source.HttpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "Your Oauth token");
```

## Using JsonProperty

Sometimes, you don't want to create a full C# Poco (Plain old component object).
If you leave out some properties, you will see that the Json Deserializer just will ignore these properties. 

You can even use the JsonProperty attribute to add specific JsonPath expressions that the JsonDeserializer uses 
to map the right json records into the object.

E.g. if you want to have the Id-entry in the json mapped to property `Key` in your object definition, you would do it like this:

```C#
public class Todo
{
    [JsonProperty("Id")]
    public int Key { get; set; }
    public string Title { get; set; }
}
```

Also, this example does not have the properties `Completed` and `UserId` anymore - they will be ignored in the data flow

Deserialization is completely based on The {{< link-ext text="Newtonsoft.Json.JsonSerializer" url="https://www.newtonsoft.com/json/help/html/T_Newtonsoft_Json_JsonSerializer.htm" >}}.

There is also a property `JsonSerializer` that can be overwritten with your own JsonSerializer.

