---
title: "Xml"
description: "Details about the XmlSource and XmlDestination"
lead: "The XmlSource and XmlDestination allow you to read or write data from/into a xml file or web service."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 320
toc: true
---

#### Xml connector package

If you need to work with xml code, make sure to add the latest {{< link-ext text="ETLBox.Xml" url="https://www.nuget.org/packages/ETLBox.Xml/" >}} package to your project. The xml integration is based on `System.Xml`.

{{< alert text="All streaming connectors share a set of common properties. For example, instead of reading or writing from/into a file you can set ResourceType to ResourceType.Http or ResourceType.AzureBlob in order to read or write into a webpoint or an Azure blob. See <a href=\"../streaming\">Shared Functionalites</a> for a list of all shared properties between all streaming connectors."  >}}

If you want to start with example code right away, you will find it in the recipes section for the [XmlSource](/recipes/sources/xmlsource) and [XmlDestination](/recipes/destinations/xmldestination). The components could also be used in other examples.

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

{{< alert text="Starting with version 2.7.1, attributes will have the prefix <code>at_</code> (instead of <code>@</code>)." >}}

#### Version 2.7.1 and later

Attributes can be accessed via their name and the prefix `at_` (and text data outside of elements via the prefix `tx_`) If you like to have a different prefix, you can adjust the `AttributePrefixForDynamic` and `TextPrefixForDynamic` properties. If you want to have the same behaviour as in previous ETLBox versions, you can set `AttributePrefixForDynamic = "@"` and `TextPrefixForDynamic = "#"`.

Consider the following xml:

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

We can now access the data in our dynamic object:

```C#
XmlSource<MyRow> source = new XmlSource<MyRow>("example.xml", ResourceType.File);
RowTransformation rowTrans = new RowTransformation();
source.LinkTo(rowTrans);
rowTrans.TransformationFunc = row => {
    dynamic r = row as ExpandoObject;
    var id = r.id;
    var categoryTerm = r.category.at_term;
    ...
}
```

#### Prior version 2.7.1

When reading attributes using the dynamic approach and using an ETLBox version prior 2.7.1, the property names of attributes will have an @ sign in front of their names. This makes it difficult to access these properties,e.g. in a RowTransformation when converting the row in a dynamic object. So when we reuse the xml file from above again:

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
    var categoryTerm = r.category.@term //@ is not allowed as a property name!
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

### Changing element names

If some cases, the source file contains elements with different names which contain our data. If you are using the dynamic approach, you can use the `ElementNameRetrievalFunc` to adjust the element name before reading the next element. The provided `StreamMetaData` object will contain the name of the next element inside the `AdditionalData` property.

Here is an example of using this feature:

```C#
string sourceFile = "res/Examples/DifferentElementNames.xml";
PrintFile(sourceFile);

var source = new XmlSource() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
source.ElementNameRetrievalFunc = (smd) => {
    if ((string)smd.AdditonalData == "A") return "A";
    else return "B";
};
source.AttributePrefixForDynamic = "";
var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data) {
    Console.WriteLine($"Received Id: {row.Id}, Value: {row.Value}");
}
/* Output:
Content of file 'DifferentElementNames.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <CreationDate>2022-05-01</CreationDate>
    <A Id="1">
    <Value>Test1</Value>
    </A>
    <B Value="Test2">
    <Id>2</Id>
    </B>
    <Skipped Id="0">X</Skipped>
    <B Value="Test3">
    <Id>3</Id>
    </B>
    <A Id="4">
    <Value>Test4</Value>
    </A>
</Root>
---
Received Id: 1, Value: Test1
Received Id: 2, Value: Test2
Received Id: 3, Value: Test3
Received Id: 4, Value: Test4
*/
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


### Writing Dynamic Objects with Attributes

The **`ShouldConvertDynamicPropToAttribute`** property lets you decide which dynamic object properties should be written as XML attributes instead of elements. By providing a condition in the predicate, you can specify the properties to treat as attributes, while others are written as regular elements. This gives you more control over how your XML output is structured and makes it easier to match specific formatting requirements.

#### Usage

```C#
// Configure XML destination
var dest = new XmlDestination("output.xml");
dest.ShouldConvertDynamicPropToAttribute = el =>
    el.Name == "Id" || el.Name == "Flag";
dest.Encoding = Encoding.UTF8;

// Execute data flow
source.LinkTo(dest);
Network.Execute(source);
```
