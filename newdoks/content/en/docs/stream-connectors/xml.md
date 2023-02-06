---
title: "Xml"
description: "Details about the XmlSource and XmlDestination"
lead: "The XmlSource and XmlDestination allow you to read or write data from/into a xml file or web service."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 450
toc: true
---

#### Xml connector package

If you need to work with xml code, make sure to add the latest {{< link-ext text="ETLBox.Xml" url="https://www.nuget.org/packages/ETLBox.Xml/" >}} package to your project. The xml integration is based on `System.Xml`.

{{< alert text="All streaming connectors share a set of common properties. For example, instead of reading or writing from/into a file you can set ResourceType to ResourceType.Http or ResourceType.AzureBlob in order to read or write into a webpoint or an Azure blob. See <a href=\"../streaming\">Shared Functionalites</a> for a list of all shared properties between all streaming connectors."  >}}

## XmlSource

The xml source let you read data from a xml source.

Let's assume your xml file looks like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <MySimpleRow Col1="1">
        <Col2>Test1</Col2>
    </MySimpleRow>
    <MySimpleRow Col1="2">
        <Col2>Test2</Col2>
    </MySimpleRow>
</Root>
```

Xml reading is based on the Microsoft XmlSerializer (using System.Xml.Serialization). You can make use of the default xml attribute 
annotations to influence how data is read by the XmlSerializer. For the example xml above, the following code could read the xml file:

```C#
[XmlRoot("MySimpleRow")]
public class MyRow
{
    [XmlAttribute]
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

XmlSource<MyRow> source = new XmlSource<MyRow>("source.xml", ResourceType.File);
```

You can take full advantage of all Microsoft XmlSerializer attributes. Here is another example that utilizes XmlElement to map xml elements with a property in an object, and also an object type to access the attributes. It also show how to set up the namespace.

Consider the following xml file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<root xmlns="http://www.w3.org/2005/Atom">
  <comment>Hello, world!</comment>
  <entry>
    <id>TestId_1</id>
    <category term="TermA" scheme="http://scheme1.test" />
  </entry>
  <entry>
    <id>TestId_2</id>
    <category term="TermB" scheme="http://scheme2.test" />
  </entry>
```

You can read this file using the following code:

```C#
[XmlRoot("entry", Namespace = "http://www.w3.org/2005/Atom")]
public class MyRow
{
    [XmlElement("id")]
    public string Id{ get; set; }
    [XmlElement("category")]
    public Category Category { get; set; }
}

[XmlRoot("category", Namespace = "http://www.w3.org/2005/Atom")]
public class Category
{
    [XmlAttribute("term")]
    public string Term { get; set; }
    [XmlAttribute("scheme")]
    public string Schema { get; set; }
}

XmlSource<MyRow> source = new XmlSource<MyRow>("example.xml", ResourceType.File);
//If necessary, you can change the Xml readder settings 
//source.XmlReaderSettings = new System.Xml.XmlReaderSettings() { }
MemoryDestination <MyRow> destination = new MemoryDestination<MyRow>();

source.LinkTo(destination);
Network.Execute(source);

foreach (var entry in destination.Data) {
    Console.WriteLine($"Id: {entry.Id}, Term: {entry.Category.Term}, Title: {entry.Category.Schema}");
}
```


### Using dynamic objects

XmlSource does also support the dynamic ExpandoObject. If you want to use it, you can define an ElementName that contains the data you actually
want to parse - as you normally are not interested in your root element. ETLBox then will look for this Element and parse every occurrence of
it into an ExpandoObject and send it into the connected components. 

Here is an example. If your xml looks like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <MySimpleRow>
        <Column1>1</Column1>
        <Column2>Test1</Column2>
    </MySimpleRow>
    <MySimpleRow>
        <Column1>2</Column1>
        <Column2>Test2</Column2>
    </MySimpleRow>
<Root>
```

You can parse the two elements <MySimpleRow> with the following code:

```C#
XmlSource source = new XmlSource("demo2.xml", ResourceType.File)
{
    ElementName = "MySimpleRow"
};
```

### Handling attributes with dynamic objects

When reading attributes using the dynamic approach, the property names of attributes will have an @ sign in front of their names. This makes it difficult to access these properties,e.g. in a RowTransformation when converting the row in a dynamic object. So when we reuse the xml file from above again:

```xml
<?xml version="1.0" encoding="utf-8"?>
<root xmlns="http://www.w3.org/2005/Atom">
  <comment>Hello, world!</comment>
  <entry>
    <id>TestId_1</id>
    <category term="TermA" scheme="http://scheme1.test" />
  </entry>
  <entry>
    <id>TestId_2</id>
    <category term="TermB" scheme="http://scheme2.test" />
  </entry>
```

When we try to access the attributes in a RowTransformation, the following code won't work:

```C#
XmlSource<MyRow> source = new XmlSource<MyRow>("example.xml", ResourceType.File);
RowTransformation rowTrans = new RowTransformation();
source.LinkTo(rowTrans);
rowTrans.TransformationFunc = row => {
    dynamic r = row as ExpandoObject;
    r.category.@term //@ is not allowed as a property name!
    ...//won't compile
}
```

Instead, we need to convert the relevant `ExpandoObject` into an `IDictionary<string,object>` first: 

```C#
XmlSource<MyRow> source = new XmlSource<MyRow>("example.xml", ResourceType.File);
RowTransformation rowTrans = new RowTransformation();
source.LinkTo(rowTrans);
rowTrans.TransformationFunc = row => {
    dynamic r = row as ExpandoObject;
    var category = r.category as IDictionary<string,object>;
    var categoryTerm = catgegory["@term"];
    ...
};
```

### Ignoring DTD processing

If you need to process a xml file with a DTD definition, you might want to change the XmlReader settings to ignore parsing of the DTD:

```C#
XmlSource<MySimpleRow> source = new XmlSource<MySimpleRow>("XmlWithDTD.xml", ResourceType.File);
source.XmlReaderSettings.DtdProcessing = System.Xml.DtdProcessing.Ignore;
```

### Unparsed data

If you want to access parts from the xml which are not part of your processed data, you can set the property `CollectUnparsedData` to true. By default, only data that can be written in object which are sent into the dataflow are processed. Activating this feature will also read the rest of the Xml file. You can access the unparsed data in the property `UnparsedData` of the Xml source. If you use the  `GetNextUri`/`HasNextUri` pattern to paginate through your source data, you can access the unparsed data of the current page in the `StreamMetaData.UnparsedData` property.

Here is an example for accessing `UnparsedData` directly in the component:

```C#
XmlSource<MySimpleRow> source = new XmlSource<MySimpleRow>("UnparsedData.xml", ResourceType.File);
source.CollectUnparsedData = true;
source.LinkTo(dest);
Network.Execute(source);
Console.WriteLine(source.UnparsedData);
```

The next example show how to access unparsed data in the `StreamMetaData` object:

```C#
var source = new XmlSource<MySimpleRow>();
source.ResourceType = ResourceType.File;
source.CollectUnparsedData = true;

source.GetNextUri = meta => {
    Console.WriteLine(meta.UnparsedData); 
    return $"res/XmlSource/TodosWithLink_NextPage.xml";
};
source.HasNextUri = meta => {
    Console.WriteLine(meta.UnparsedData); 
    return true;
};
```

## XmlDestination

The xml destination will use the same XmlSerializer to serialize the data and write them into an xml file.

Here is an example how to influence the XmlSerializer using attributes:

```C#
[XmlRoot("MySimpleRow")]
public class MyRow
{
    [XmlAttribute]
    public int Col1 { get; set; }
    [XmlAttribute]
    public string Col2 { get; set; }
}

XmlDestination<MyRow> dest = 
  new XmlDestination<MyRow>("dest.xml", ResourceType.File);
```

Could create an output that looks like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root>
  <MySimpleRow Col1="1" Col2="Test1" />
  <MySimpleRow Col1="2" />
</Root>
```

### XmlDestination with dynamic object

The XmlDestination also supports creating xml output from dynamic objects. 

```C#
var source = new DbSource(SqlConnection, "Table");
var dest = new XmlDestination("XmlDynamicObject.xml", ResourceType.File);
source.LinkTo(dest);
Network.Execute(source);
```

