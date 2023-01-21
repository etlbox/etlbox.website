---
title: "Csv to Json"
description: "Example code how to transform a Csv to a Json"
lead: "This example shows how to read data from a csv and transform it into a json - one time using strongly typed object and also using the dynamic ExpandoObject."
draft: false
images: []
menu:
  recipes:
    parent: "data-integration"
weight: 2110
toc: true
---

## Transforming csv to json

This example demonstrates how to transform a csv into a json with only  a few lines of code. 

### CsvSource 

Let's start with a simple example how to create a flat file source. In this scenario we are using the CsvSource. 

```C#
CsvSource<CsvType> source = new CsvSource<CsvType>("//share/demo.csv");
```

As for the CsvSource, the `ResourceType` is `ResourceType.File` by default. It will read data from the path `//share/demo.cvs`. 
By default, the CsvSource will try to use the header columns of the file to propagate the data into the right properties of the CsvType object. 

If you need to read a csv file from a webservice, your code would look like this:

```C#
CsvSource<CsvType> source = new CsvSource<CsvType>("http://test.com/csv");
source.ResourceType = ResourceType.Http;
```

{{< alert text="All streaming connectors (Json,Xml,Csv,Text,Excel,..) allow you to either read data from a file <b>or</b> from a web endpoint." >}}

### Reading the csv file data 

Let's assume your csv would look like this:

```csv
Id;Value
1;Test1
2;Test2
```

Then this should be your CsvType class: 

```C#
public class CsvType {
    public int Id { get; set; }
    public int Value { get; set; }
}
```

Now you can use the CsvSource as source for either a transformation or any other destination. If you want to directly convert your data into Json, this would be your working code:

```C#
public class CsvType {
    public int Id { get; set; }
    public int Value { get; set; }
}

public static void Main() {
    CsvSource<CsvType> source = new CsvSource<CsvType>("http://test.com/csv");
    source.ResourceType = ResourceType.Http; //Default is File for CsvSource
    JsonDestination<CsvType> dest = new JsonDestination<CsvType>("test.json");
    dest.ResourceType = ResourceType.File;  //Default is Http for json
    source.LinkTo(dest);
    Network.Execute(source);
}
```

### Using dynamic objects

For such simple flow you don't necessarily have to create an object. You can use the default implementation of CsvSource and JsonSource, which would use an ExpandoObject. As we don't need a strongly typed object here in this example, we could modify our code like this:

```C#
public static void Main() {
    CsvSource source = new CsvSource("http://test.com/csv");
    source.ResourceType = ResourceType.Http; //Default is File for CsvSource
    JsonDestination dest = new JsonDestination<CsvType>("test.json");
    dest.ResourceType = ResourceType.File; //Default is Http for json
    source.LinkTo(dest);
    Network.Execute(source);
}
```