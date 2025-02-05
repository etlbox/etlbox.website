---
title: "Json"
description: "Details about the JsonSource and JsonDestination"
lead: "The JsonSource and JsonDestination allows you to read or write data from/into a json format, either into a file or a webservice."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 320
toc: true
---

#### Json connector package

The {{< link-ext url="https://nuget.org/packages/ETLBox.Json" text="ETLBox.Json" >}} package include the `JsonSource` and `JsonDestination` classes, along with a `JsonPathConverter` and an `ExpandoJsonPathConverter`. The json source can send json received from a file or from a web endpoint into a dataflow. The json destination can either create a json file or send the json into any kind of web service. This class is ideal if you need to establish connections with web services, e.g. an REST API endpoint or the result of a GraphQL query.

The json connector package is based on {{< link-ext text="Json.NET by Newtonsoft" url="https://www.newtonsoft.com/json" >}}.

{{< alert text="All streaming connectors share a set of common properties. For example, instead of reading or writing from/into a file you can set ResourceType to ResourceType.Http or ResourceType.AzureBlob in order to read or write into a webpoint or an Azure blob. See <a href=\"../streaming\">Shared Functionalites</a> for a list of all shared properties between all streaming connectors."  >}}

If you want to start with example code right away, you will find it in the recipes section for the [JsonSource](/recipes/sources/jsonsource) and [JsonDestination](/recipes/destinations/jsondestination). The components could also be used in other examples.

## JsonSource

Json Source let you read a json.

Here an example for a response from a json web service request when sending a GET to the url *http://test.com*

```json
[
  {
    "Col1": 1,
    "Col2": "Test1"
  },
  {
    "Col1": 2,
    "Col2": "Test2"
  },
  {
    "Col1": 3,
    "Col2": "Test3"
  }
]
```

Here is some code that would read this json response, and deserialize the json into the object `MySimpleRow`.

```C#
public class MySimpleRow
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

JsonSource<MySimpleRow> source = new JsonSource<MySimpleRow>("http://test.com/", ResourceType.Http);
MemoryDestination<MySimpleRow> dest = new MemoryDestination<MySimpleRow>();

source.LinkTo(dest); //Link the components
Network.Execute(source); //Run the data flow
```

This code would then read the three entries from the source and post it into the MemoryDestination.

### Nested arrays

The array doesn't need to be the top node of your json - it could be nested in your json file.
Like this:
```C#
{
    "data": {
        "array": [
            {
                "Col1": 1,
                "Col2": "Test1"
            },
            ...
        ]
    }
}
```

ETLBox automatically scans the incoming json file and starts reading (and deserializing) after the
first occurrence of the begin of an array (which is the "[" symbol).

### Working with JsonSerializer

Sometimes you have a more complex json structure. Here an example:

```json
[
    {
        "Column1": 1,
        "Column2": {
            "Id": "A",
            "Value": "Test1"
        }
    },
    ...
]
```

In order to read map this json with an object, you would need to create two object which are associated with each other:

```C#
public class MyRow
{
    public int Column1 { get; set; }
    public MyIdValueObject Column2 { get; set; }
}

public class MyIdValueObject
{
    public string Id { get; set; }
    public string Value { get; set; }
}
```

#### JsonConverter

Sometimes you don't want to specify all objects that would map your json structure. To get around this the underlying JsonSerializer object that is used for deserialization is exposed by the JsonSource. See also the {{< link-ext text="JsonSerializer docs from Newtonsoft.Json" url="https://www.newtonsoft.com/json/help/html/SerializingJSON.htm" >}} for more details. Now you could add your own JsonConverter so that you could use JsonPath within your JsonProperty attributes. To make your programmer's live even easier, you can use the `JsonPathConverter` class which is part of the ETLBox.Json package. Here is an example how to use it:

```C#
[JsonConverter(typeof(JsonPathConverter))]
public class MySimpleRow
{
    [JsonProperty("Column1")]
    public int Col1 { get; set; }
    [JsonProperty("Column2.Value")]
    public string Col2 { get; set; }
}

JsonSource<MySimpleRow> source = new JsonSource<MySimpleRow>("res/JsonSource/NestedData.json", ResourceType.File);
```

The JsonProperty attribute does accept a json path expression which is resolved to read the values from the json. This will also work for nested arrays and the * operator.

#### JsonConverter with ExpandoObject

When you are working with dynamic object, it can be quite tricky to write a converter class for this. The ETLBox.Json comes with the class `ExpandoJsonPathConverter` which helps you to deserialize json into a dynamic objects using json path expressions.

Consider this your input data:

```json
[
    {
        "Column1": 1,
        "Column2": {
            "Id": "A",
            "Value": "Test1"
        }
    }
]
```

You can parse this data by declaring your `JsonSource` and `xpandoJsonPathConverter` like this:

```C#
JsonSource<ExpandoObject> source =
  new JsonSource<ExpandoObject>("http://test.com", ResourceType.Http);
List<JsonProperty2JsonPath> pathLookups =
new List<JsonProperty2JsonPath>()
  {
      new JsonProperty2JsonPath()
      {
          SearchPropertyName = "Column2",
          JsonPath = "$.Value",
          OutputPropertyName = "Value"
        },
      new JsonProperty2JsonPath() {
          SearchPropertyName = "Column2",
          JsonPath = "$['Id']",
          OutputPropertyName = "Id"
        }
  };
source.JsonSerializer.Converters.Add(new ExpandoJsonPathConverter(pathLookups));
```

## JsonDestination

The result of your pipeline can be written as json using a JsonDestination.

The following code:

```C#
 public class MySimpleRow
{
    public string Col2 { get; set; }
    public int Col1 { get; set; }
}

JsonDestination<MySimpleRow> dest =
  new JsonDestination<MySimpleRow>("test.json", ResourceType.File);
```

would result in the following json:

```
[
  {
    "Col1": 1,
    "Col2": "Test1"
  },
  {
    "Col1": 2,
    "Col2": "Test2"
  },
  {
    "Col1": 3,
    "Col2": "Test3"
  }
]
```

Like the JsonSource you can modify the exposed `JsonSerializer` to modify the serializing behavior.
See the {{< link-ext text="`JsonSerializer` docs in Newtonsoft.Json" url="https://www.newtonsoft.com/json/help/html/SerializingJSON.htm" >}} for more details.

## Using Json with arrays

If you don't want to use objects, you can use arrays with your  `JsonSource` or `JsonDestination`. To use the source with a string array, your code would look like this:

```C#
JsonSource<string[]> source = new JsonSource<string[]>("https://test.com", ResourceType.Http);
```

Now you either have to override the `JsonSerializer` yourself in order to properly convert the json into a string[].
Or your incoming Json has to be in following format:

```json
[
    [
        "1",
        "Test1"
    ],
    //etc.
]
```

When using the `JsonDestination` with a string array, the serialized data would look like the json above.

## Working with dynamic objects

JsonSource and destination support the usage of dynamic object. This allows you to use a dynamic ExpandoObject instead of a POCO. Here is an example for the source:

```C#
JsonSource<ExpandoObject> source =
  new JsonSource<ExpandoObject>("source.json", ResourceType.File);

RowTransformation<ExpandoObject> trans =
  new RowTransformation<ExpandoObject>(
    row =>
    {
        dynamic r = row as ExpandoObject;
        r.Col1 = r.Value1;
        r.Col2 = r.Value2;
        return r;
    });
DbDestination<ExpandoObject> dest =
  new DbDestination<ExpandoObject>(Connection, "DynamicJson");

source.LinkTo(trans).LinkTo(dest);
Network.Execute(source);
```
