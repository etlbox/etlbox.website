---
title: "JSON"
description: "This guide walks you through everything you need to know about working with JSON in ETLBox. You'll learn how to use JsonSource to read JSON, JsonDestination to write it, and how to handle nested structures with JsonPathConverter and ExpandoJsonPathConverter."
lead: "The ETLBox JSON Connector makes it easy to read and write JSON data from files, web services, and cloud storage. Whether you're working with structured objects or dynamic data, it gives you the flexibility to map nested JSON, handle arrays, and customize how your data is processed."
draft: false
images: []
menu:
  docs:
    parent: "streaming-connectors"
weight: 330
toc: true
chatgpt-review: true
---

## Overview

The `ETLBox.Json` package provides `JsonSource` and `JsonDestination` to work with the `JSON` format. Additionally, it includes the `JsonPathConverter` and `ExpandoJsonPathConverter`, which allow mapping nested JSON structures into flat objects using JSONPath expressions.

ETLBox uses {{< link-ext text="Json.NET by Newtonsoft" url="https://www.newtonsoft.com/json" >}}, a powerful library for handling JSON data.

{{< callout context="note" icon="outline/info-circle" title="Shared Features" >}}
Common functionalities such as resource types (files, HTTP, Azure Blob), streaming, and row modifications are shared across all streaming connectors. See [Shared Features](/docs/streaming-connectors/shared) for details.
{{< /callout >}}

For detailed configuration options, refer to:

- {{< link-ext text="Json.NET Documentation" url="https://www.newtonsoft.com/json/help/html/SerializingJSON.htm" >}}

## JsonSource

JsonSource reads JSON data from files, web services (HTTP), or cloud storage and converts it into structured objects or dynamic objects.

### Example: Reading a Simple JSON Response

Assume the following JSON response from `http://test.com`:

```json
[
  {
    "Col1": 1,
    "Col2": "Test1"
  },
  {
    "Col1": 2,
    "Col2": "Test2"
  }
]
```

This ETLBox code reads the JSON and maps it to MySimpleRow objects:

```csharp
public class MyRow {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

JsonSource<MyRow> source = new JsonSource<MyRow>("http://test.com/", ResourceType.Http);
MemoryDestination<MyRow> dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);
```

This reads the JSON array, deserializes each entry into `MyRow`, and sends it into MemoryDestination.

### Reading Nested JSON Arrays

By default, ETLBox starts reading JSON after detecting the first array (`[` symbol). If the array is nested within an object, it is automatically extracted.

Example JSON with a nested array:

```json
{
  "data": {
    "array": [
      {
        "Col1": 1,
        "Col2": "Test1"
      }
    ]
  }
}
```

ETLBox automatically detects the array and reads its content. If multiple arrays exist, you can specify which one to process:

```csharp
JsonSource<MySimpleRow> source = new JsonSource<MySimpleRow>("data.json", ResourceType.File);
source.PropertyNameOfDataArray = "array";
```

This ensures that only the specified array is processed.

### Using JsonPathConverter

Sometimes, JSON contains nested properties, requiring custom mappings. The JsonPathConverter allows mapping nested JSON fields into POCOs using JSONPath expressions.

Example JSON input:

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

POCO class using JsonPathConverter:

```csharp
[JsonConverter(typeof(JsonPathConverter))]
public class MySimpleRow {
    [JsonProperty("Column1")]
    public int Col1 { get; set; }

    [JsonProperty("Column2.Value")]
    public string Col2 { get; set; }
}

JsonSource<MySimpleRow> source = new JsonSource<MySimpleRow>("data.json", ResourceType.File);
```

Here, `"Column2.Value"` is extracted from the JSON and mapped to Col2 in MySimpleRow.


### Working with Dynamic Objects

ETLBox supports dynamic object processing using ExpandoObject.

**Example**: Transforming JSON dynamically into a csv file

```csharp
JsonSource source = new JsonSource() {
  Uri = "source.json",
  ResourceType = ResourceType.File
};

RowTransformation<ExpandoObject> trans = new RowTransformation<ExpandoObject>(
    row => {
        dynamic r = row as ExpandoObject;
        r.Col1 = r.Value1;
        r.Col2 = r.Value2;
        return r;
    }
);

CsvDestination dest = new CsvDestination("converted.csv");

source.LinkTo(trans).LinkTo(dest);
Network.Execute(source);
```

This allows dynamic JSON processing, enabling ETLBox to handle unknown schemas.

### Using ExpandoJsonPathConverter

For dynamic JSON structures, the ExpandoJsonPathConverter allows defining JSONPath expressions for ExpandoObject properties.

Example JSON input:

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

Using ExpandoJsonPathConverter:

```csharp
JsonSource<ExpandoObject> source = new JsonSource<ExpandoObject>("data.json", ResourceType.File");

List<JsonProperty2JsonPath> pathLookups = new List<JsonProperty2JsonPath>() {
    new JsonProperty2JsonPath() {
        SearchPropertyName = "Column2",
        JsonPath = "$.Value",
        OutputPropertyName = "Col2"
    },
    new JsonProperty2JsonPath() {
        SearchPropertyName = "Column2",
        JsonPath = "$['Id']",
        OutputPropertyName = "Id"
    }
};

source.JsonSerializer.Converters.Add(new ExpandoJsonPathConverter(pathLookups));
```

This dynamically extracts `Column2.Value` and `Column2.Id` into Col2 and Id properties.


## JsonDestination

JsonDestination writes data into JSON files or sends JSON to web services.

### Example: Writing Data to JSON

```csharp
public class MySimpleRow {
    public string Col2 { get; set; }
    public int Col1 { get; set; }
}

var source = new MemorySource<MyRow>();
source.Data = new List<MyRow>() {
    new MyRow() { Col1 = 1, Col2="Test1"},
    new MyRow() { Col1 = 2, Col2="Test2"},
    new MyRow() { Col1 = 3, Col2="Test3"},
};
JsonDestination<MySimpleRow> dest = new JsonDestination<MySimpleRow>("test.json", ResourceType.File);
source.LinkTo(dest);
Network.Execute(source);
```

This generates the following JSON output:

```json
[
  {
    "Col1": 1,
    "Col2": "Test1"
  },
  {
    "Col1": 2,
    "Col2": "Test2"
  }
]
```

### Customizing JSON Serialization

Like `JsonSource`, `JsonDestination` exposes the `JsonSerializer`, allowing advanced customization:

```csharp
dest.JsonSerializer.NullValueHandling = NullValueHandling.Ignore;
dest.JsonSerializer.Formatting = Formatting.Indented;
```

This ensures better formatting and excludes null values from the output.

