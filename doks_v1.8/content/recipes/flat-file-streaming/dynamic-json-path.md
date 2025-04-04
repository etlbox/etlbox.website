---
title: "Json Path in Dynamic Object"
description: "Example: Using json path with dynamic objects"
lead: "This purpose of this example is demonstrate how json path can be used to simplify navigation in dynamic objects."
draft: false
images: []
menu:
  recipes:
    parent: "flat-file-streaming"
weight: 20
toc: true
---

## Setup

This example demonstrate how data from an xml file is read using the dynamic object approach, and we use json path expression to access this data during the data flow.

Here is our input data xml file:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
  <entry>
    <set size="2">
      <element>
        <node name="A">Node 1</node>
        <value>Value 1</value>
      </element>
      <element>
        <node name="A">Node 2</node>
        <value>Value 2</value>
      </element>
    </set>
  </entry>
  <entry>
    <set size="3">
      <element>
        <node name="B">Node 3</node>
        <value>Value 3</value>
      </element>
      <element>
        <node name="B">Node 4</node>
        <value>Value 4</value>
      </element>
      <element>
        <node name="B">Node 5</node>
        <value>Value 5</value>
      </element>
    </set>
  </entry>
</root>
```

### Using JsonPath
When transforming the data from the source, we want to process the two elements `<entry>`. For each record we want only to read particular data within the record. To retrieve this data from a record, we use a json path expression.

```C#
XmlSource source = new XmlSource("demo.xml", ResourceType.File);
source.XmlReaderSettings.DtdProcessing = System.Xml.DtdProcessing.Ignore;
source.ElementName = "entry";

RowTransformation row = new RowTransformation();
row.TransformationFunc = row => {
    dynamic newRow = new ExpandoObject();
    var json = JsonConvert.SerializeObject(row);
    var jobj = JObject.Parse(json);
    JToken nameToken = jobj.SelectToken("$.set.element[1].node.@name");
    JToken nodeToken = jobj.SelectToken("$.set.element[1].node.#text");
    newRow.Name = nameToken.Value<string>();
    newRow.NodeValue = nodeToken.Value<string>();
    return newRow;

};

MemoryDestination dest = new MemoryDestination();

source.LinkTo(row);
row.LinkTo(dest);

Network.Execute(source);

/* Display data */
foreach (dynamic record in dest.Data)
    Console.WriteLine($"Name: {record.Name}, Value: {record.NodeValue}");
```

## Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/JsonPathInExpandoObject" >}}

