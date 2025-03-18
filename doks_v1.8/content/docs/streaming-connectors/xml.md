---
title: "XML"
description: "This guide walks you through how to use the ETLBox XML Connector, including reading XML with XmlSource and writing structured data with XmlDestination."
lead: "The ETLBox XML Connector makes it easy to work with XML data in your ETL pipelines. Whether you're reading from files, web services, or cloud storage, it supports both strongly typed object mapping and flexible dynamic processing. You can handle namespaces, attributes, and even validate XML against schemas before processing."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 330
toc: true
chatgpt-review: true
---

## Overview

The [ETLBox.Xml](https://www.nuget.org/packages/ETLBox.Xml/) package provides the `XmlSource` and `XmlDestination` classes. These components allow reading data from XML files or web endpoints and writing structured data into XML format. The XML integration is based on `System.Xml`.

{{< callout context="note" icon="outline/info-circle" title="Shared Features" >}}
Common functionalities such as resource types (files, HTTP, Azure Blob), streaming, and row modifications are shared across all streaming connectors. See [Shared Features](/docs/streaming-connectors/shared) for details.
{{< /callout >}}

## XmlSource

The `XmlSource` component reads XML data and transforms it into structured objects or dynamic elements. It supports multiple XML serialization configurations, namespaces, and attribute handling.

### Reading XML as POCO

You can deserialize XML elements into strongly-typed objects using `XmlSource`. The `XmlSerializer` from `System.Xml.Serialization` is used for mapping.

Given the following XML file `start.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root>
  <Element>
    <Id>1</Id>
    <Inner>
      <Value>Test1</Value>
      <Number>1.1</Number>
    </Inner>
  </Element>
  <Element>
    <Id>2</Id>
    <Inner>
      <Value></Value>
      <Number>1.2</Number>
    </Inner>
  </Element>
</Root>
```

You can define a matching POCO class and read the data:

```c#
public class Element {
    public SubElement Inner { get; set; }
    public int Id { get; set; }
}

public class SubElement {
    public string Value { get; set; }
    public decimal Number { get; set; }
}

var source = new XmlSource<Element>() {
    ResourceType = ResourceType.File,
    Uri = "start.xml"
};
```

### Using XML Attributes

You can configure elements, attributes, and namespaces in your POCO classes using C# attributes to ensure correct XML mapping.

Example XML Input `demo.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<ns:Root xmlns:ns="http://foo.com">
    <CreationDate>2022-05-01</CreationDate>
    <ns:Element Id="1">
        <ns:Inner Number="1.1">
            <ns:Value>Test1</ns:Value>
        </ns:Inner>
    </ns:Element>
    <ns:Element Id="2">
        <ns:Inner Number="1.2">
            <ns:Value></ns:Value>
        </ns:Inner>
    </ns:Element>
</ns:Root>
```

You can define the corresponding classes:

```c#
[XmlRoot("Element", Namespace = "http://foo.com")]
public class ElementWA {
    [XmlElement("Inner")]
    public SubElementWA InnerElement { get; set; }
    [XmlAttribute("Id")]
    public int IdAttr { get; set; }
}

public class SubElementWA {
    public string Value { get; set; }
    [XmlAttribute("Number")]
    public decimal Number { get; set; }
}
```

You can read the XML with `XmlSource`:

```csharp
var source = new XmlSource<ElementWA>() {
    ResourceType = ResourceType.File,
    Uri = "demo.xml"
};
MemoryDestination <MyRow> destination = new MemoryDestination<MyRow>();
var dest = new MemoryDestination<ElementWA>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.IdAttr}, Value1: {row.InnerElement.Value}, Value2: {row.InnerElement.Number}");
```

- The `XmlRoot` attribute on ElementData ensures that elements in the namespace `http://foo.com` are correctly identified.
- `XmlElement` attributes define which elements map to which properties.
- `XmlAttribute` is used to extract XML attributes (Id, Number) into object properties.

### Using Dynamic Objects

Instead of mapping XML to POCOs, you can use `ExpandoObject` for flexible XML parsing. This is especially useful when the structure of the XML is not well-defined or changes frequently.

Since `ExpandoObject` does not support attribute-based mapping, you need to manually specify:

- **`Namespace`** – The XML namespace if elements are namespaced (optional, if left empty namespaces are ignored).
- **`ElementName`** – The name of the XML element that contains the relevant data.

The following code reads the previously defined XML file (`demo.xml`) without using POCOs:

```csharp
XmlSource source = new XmlSource(e)
{
    ResourceType = ResourceType.File,
    Uri = "demo.xml",
    ElementName = "MySimpleRow",
    Namespace="http://foo.com"
};
```

{{< callout context="note" icon="outline/info-circle" >}}
If the Namespace property is left empty, `XmlSource` will match elements by name only, regardless of their namespace. This means that even if an element is defined in a different namespace, it will still be processed as long as the element name matches.
{{< /callout >}}

### Handling Attributes in Dynamic XML Parsing

When working with dynamic XML parsing in `XmlSource`, attributes in the XML file are prefixed to differentiate them from element names. By default:

- **Attributes** are prefixed with `at_` (e.g., `at_term`)
- **Text values outside of elements** are prefixed with `tx_`

If needed, you can customize these prefixes using the properties:

- `AttributePrefixForDynamic` – Changes the prefix for attributes
- `TextPrefixForDynamic` – Changes the prefix for text content

To change this bevaviour (or to behave the same as  earlier ETLBox versions), set e.g.:

```csharp
var source = new XmlSource("input.xml", ResourceType.File);
source.AttributePrefixForDynamic = "@";
source.TextPrefixForDynamic = "#";
```

{{< callout context="tip" icon="outline/rocket" >}}
The TextPrefixForDynamic feature works best if whitespace nodes are preserved in the XML. You can configure the XmlReaderSettings to prevent ignoring whitespace:

```csharp
var source = new XmlSource("input.xml", ResourceType.File);
source.TextPrefixForDynamic = "txt_";
source.XmlReaderSettings = new System.Xml.XmlReaderSettings()
{
    IgnoreWhitespace = false
};
```
{{< /callout >}}

#### Example: Parsing XML Attributes in Dynamic Objects

Given the following XML file `example.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<root>
  <comment>Hello, world!</comment>
  <entry>
    <id>TestId_1</id>
    <category term="TermA" />
  </entry>
  <entry>
    <id>TestId_2</id>
    <category term="TermB" />
  </entry>
</root>
```

You can access attributes dynamically using `at_` as the default prefix:

```csharp
XmlSource<MyRow> source = new XmlSource<MyRow>("example.xml", ResourceType.File);
source.ElementName = "entry"
RowTransformation rowTrans = new RowTransformation();
rowTrans.TransformationFunc = row =>
{
    dynamic r = row as ExpandoObject;
    var id = r.id;
    var categoryTerm = r.category.at_term; // Accessing the "term" attribute
    ...
};
```

### Changing Element Names Dynamically

In some cases, the XML source file may contain different element names for the same type of data. If you are using the dynamic approach, you can use the `RetrieveElementFunc` property to dynamically adjust element names before reading them.

The `StreamMetaData` object provides access to the name of the next element inside the `AdditionalData` property, allowing you to determine how to process each entry.

#### Example: Handling Different Element Names

Given the following XML source file `DifferentElementNames.xml`:

```xml
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
```

Both **`A`** and **`B`** elements contain relevant data but use different structures. We want to extract only these elements while skipping others.

ETLBox Code to Handle Different Element Names:

```csharp
var source = new XmlSource()
{
    ResourceType = ResourceType.File,
    Uri = "DifferentElementNames.xml"
};

source.RetrieveElementFunc = (smd) =>
{
    if ((string)smd.AdditionalData == "A") return "A";
    else return "B";
};

source.AttributePrefixForDynamic = ""; // Remove prefix for better readability
var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);

// Print extracted data
foreach (dynamic row in dest.Data)
{
    Console.WriteLine($"Received Id: {row.Id}, Value: {row.Value}");
}
```

Expected Console Output:

```
Received Id: 1, Value: Test1
Received Id: 2, Value: Test2
Received Id: 3, Value: Test3
Received Id: 4, Value: Test4
```

**How It Works**

- `RetrieveElementFunc` dynamically determines the element type (`A` or `B`) before processing it.
- The `AdditionalData` property inside `StreamMetaData` holds the current element name, which is used to filter and rename elements before parsing.
- Only elements matching "A" or "B" are processed, while others (like `Skipped`) are ignored.

## Skipping DTD Processing

If your XML file includes a DTD, you can configure the `XmlReaderSettings` to ignore it:

```c#
XmlSource<MyRow> source = new XmlSource<MyRow>("XmlWithDTD.xml", ResourceType.File);
source.XmlReaderSettings = new System.Xml.XmlReaderSettings() {
    DtdProcessing = System.Xml.DtdProcessing.Ignore
};
```

This prevents parsing errors when processing XML with external DTD references.

For more details, refer to the {{< link-ext text="official Microsoft documentation on XmlReaderSettings" url="https://learn.microsoft.com/en-us/dotnet/api/system.xml.xmlreadersettings.dtdprocessing" >}}.

## XML Schema Validation

ETLBox provides the `XmlSchemaValidation` transformation, allowing XML validation against an XSD schema before processing.

```c#
XmlSchemaValidation<MyRow> schemaValidation = new XmlSchemaValidation<MyRow>();
schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = "<xsd:schema>...</xsd:schema>";

XmlSource<MyRow> source = new XmlSource<MyRow>("source.xml", ResourceType.File);
source.LinkTo(schemaValidation);
```

Invalid XML records are redirected to an error output. See the [Xml Schema Validation](/docs/transformations/xml-schema/) article for more details about this transformation.


## XmlDestination

The `XmlDestination` component writes structured data to XML files or web endpoints. It supports custom root element names, dynamic object serialization, and attribute conversion.

### Writing POCO Data

When writing XML data using `XmlDestination`, you can customize the root element name, namespace, and prefix using the following properties:

- **`RootElementName`** – Defines the name of the root element (default: `"Root"`).
- **`RootElementNamespace`** – Specifies a namespace for the root element.
- **`RootElementPrefix`** – Defines a prefix for the root element when a namespace is used.
- **`DynamicElementName`** – Sets the element name for `ExpandoObject` data (default: `<Dynamic>`).

Given the following class:

```c#
[XmlRoot("MySimpleRow")]
public class MyRow
{
    [XmlAttribute]
    public int Col1 { get; set; }
    [XmlAttribute]
    public string Col2 { get; set; }
}

XmlDestination<MyRow> dest = new XmlDestination<MyRow>("dest.xml", ResourceType.File);
```

The resulting XML will be:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root>
  <MySimpleRow Col1="1" Col2="Test1" />
  <MySimpleRow Col1="2" />
</Root>
```

To modify the element name for `<Root>`, you can adjust the `RootElementName` property:

```csharp
XmlDestination<MyRow> dest = new XmlDestination<MyRow>("dest.xml", ResourceType.File);
dest.RootElementName = "Container";
```

This would change the output to:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Container>
  <MySimpleRow Col1="1" Col2="Test1" />
  <MySimpleRow Col1="2" />
</Container>
```

### Serialization with Namespaces

When writing XML with `XmlDestination`, you can control how namespaces are applied at different levels:

- **Default Namespace per Element** – Each element has its own namespace.
- **Root-Level Namespace** – The entire XML document shares a common namespace.
- **Custom Namespace Prefixes** – Assign prefixes to namespaces for more control.

#### Writing XML with a Default Namespace per Element

By default, each XML element carries its own namespace.

**Example: Writing XML with a Namespace for Each Element**

```csharp
[XmlRoot("table", Namespace = "https://www.w3schools.com/furniture")]
public class FurnitureTable
{
    [XmlAttribute("name")]
    public string Name { get; set; }

    [XmlElement("width")]
    public int Width { get; set; }

    [XmlElement("length")]
    public int? Length { get; set; }

    [XmlElement("height")]
    public int? Height { get; set; }

    public bool ShouldSerializeLength() => Length.HasValue;
    public bool ShouldSerializeHeight() => Height.HasValue;
}

var source = new MemorySource<FurnitureTable>();
source.DataAsList = new List<FurnitureTable>()
{
    new FurnitureTable { Name = "Coffee table", Width = 80, Length = 120 },
    new FurnitureTable { Name = "Dining table", Width = 100, Length = 200 },
    new FurnitureTable { Name = "Sofa", Width = 400, Height = 50 }
};

var dest = new XmlDestination<FurnitureTable>("FurnitureTableDefaultNS.xml", ResourceType.File);
source.LinkTo(dest);
source.Execute();
```

**Generated XML Output (Namespace on Each Element)**

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root>
  <table name="Coffee table" xmlns="https://www.w3schools.com/furniture">
    <width>80</width>
    <length>120</length>
  </table>
  <table name="Dining table" xmlns="https://www.w3schools.com/furniture">
    <width>100</width>
    <length>200</length>
  </table>
  <table name="Sofa" xmlns="https://www.w3schools.com/furniture">
    <width>400</width>
    <height>50</height>
  </table>
</Root>
```

Each `<table>` element includes the **namespace declaration** individually.

#### Writing XML with a Root-Level Namespace

Instead of defining the namespace on each element, you can apply a **global namespace** at the root level.

**Example: Writing XML with a Single Root Namespace**

```csharp
var dest = new XmlDestination<FurnitureTable>("FurnitureTableDefaultNS_root.xml", ResourceType.File);
dest.RootElementNamespace = "https://www.w3schools.com/furniture";

source.LinkTo(dest);
source.Execute();
```

**Generated XML Output (Namespace on Root Only)**

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root xmlns="https://www.w3schools.com/furniture">
  <table name="Coffee table">
    <width>80</width>
    <length>120</length>
  </table>
  <table name="Dining table">
    <width>100</width>
    <length>200</length>
  </table>
  <table name="Sofa">
    <width>400</width>
    <height>50</height>
  </table>
</Root>
```

All elements **inherit the namespace** from the root, making the XML more compact.

#### Writing XML with Custom Namespace Prefixes

If multiple namespaces are used, you can assign **prefixes** to make them explicit.

**Example: Writing XML with a Custom Namespace Prefix**

```csharp
var dest = new XmlDestination<FurnitureTable>("FurnitureTableWithNS.xml", ResourceType.File);
dest.NS.Add("f", "https://www.w3schools.com/furniture");
dest.RootElementNamespace = "https://www.w3schools.com/furniture";
dest.RootElementPrefix = "f";

source.LinkTo(dest);
source.Execute();
```

#### **Generated XML Output (With Namespace Prefixes)**

```xml
<?xml version="1.0" encoding="utf-8"?>
<f:Root xmlns:f="https://www.w3schools.com/furniture">
  <f:table name="Coffee table">
    <f:width>80</f:width>
    <f:length>120</f:length>
  </f:table>
  <f:table name="Dining table">
    <f:width>100</f:width>
    <f:length>200</f:length>
  </f:table>
  <f:table name="Sofa">
    <f:width>400</f:width>
    <f:height>50</f:height>
  </f:table>
</f:Root>
```

Here, all elements are explicitly qualified with the `f:` prefix.

### Customizing Serialization

#### Changing XmlWriterSettings

By default, `XmlDestination` uses standard XML writer settings. However, you can override them to customize formatting and serialization behavior:

```csharp
var dest = new XmlDestination<FurnitureTable>("output.xml", ResourceType.File);
// Define custom XML writer settings
dest.XmlWriterSettings = new System.Xml.XmlWriterSettings()
{
    Indent = true,  // Enables indentation for readability
    Encoding = Encoding.UTF8,  // Specifies UTF-8 encoding
    OmitXmlDeclaration = false,  // Ensures XML declaration is included
    NewLineChars = "\n",  // Sets newline character
    IndentChars = "  "  // Uses two spaces for indentation
};
```

For a complete list of available options, see the {{< link-ext text="official Microsoft documentation on XmlWriterSettings" url="https://learn.microsoft.com/en-us/dotnet/api/system.xml.xmlwritersettings" >}}.

#### Example: Custom XML Serialization

When serializing XML, you can convert object types, suppress empty elements, and control serialization behavior using `ShouldSerialize` methods.

The following example demonstrates how to:

- Convert a string attribute to an integer using `typeof(int)`.
- Use `typeof(int?)` for optional elements, which are omitted if `null`.
- Implement `ShouldSerialize` methods to suppress elements when they are `null` or `0`.

```csharp
[XmlRoot("table", Namespace = "https://www.w3schools.com/furniture")]
public class FurnitureTable
{
    [XmlAttribute("name", Type = typeof(int))] // Converts string to int
    public string Name { get; set; }

    [XmlElement("width", Type = typeof(int?))]
    public int? Width { get; set; }

    [XmlElement("length", Type = typeof(int?))]
    public int? Length { get; set; }

    [XmlElement("height", Type = typeof(int?))]
    public int? Height { get; set; }

    public bool ShouldSerializeLength() => Length.HasValue && Length.Value != 0;
    public bool ShouldSerializeHeight() => Height.HasValue && Height.Value != 0;
}
```

For more details on XML serialization, refer to the {{< link-ext text="official Microsoft documentation" url="https://learn.microsoft.com/en-us/dotnet/api/system.xml.serialization" >}}.

### Writing Dynamic Objects

You can write data using a dynamic approach, where XML elements are created from object properties.

```c#
var source = new MemorySource();
dynamic el1 = new ExpandoObject();
el1.Id = 1;
el1.Value = "Test1";
source.DataAsList.Add(el1);
dynamic el2 = new ExpandoObject();
el2.Id = 2;
el2.Value = "Test2";
source.DataAsList.Add(el2);

var dest = new XmlDestination() {
    Uri = "dynamic.xml",
    ResourceType = ResourceType.File,
    DynamicElementName = "MyRow",
    RootElementName="AllRows"
}
source.LinkTo(dest);
Network.Execute(source);
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<AllRows>
    <MyRow>
        <Id>1</Id>
        <Value>Test1</Value>
    </MyRow>
    <MyRow>
        <Id>2</Id>
        <Value>Test2</Value>
    </MyRow>
</AllRows>
```

### Attribute Conversion for Dynamic Objects

If you want certain properties to be written as attributes instead of elements, use the `ShouldConvertDynamicPropToAttribute` property.

```c#
var dest = new XmlDestination("dynamic.xml", ResourceType.File);
dest.ShouldConvertDynamicPropToAttribute = el => el.Name == "Id" || el.Name == "Value";
```

For the above example data, the following xml is generated:

```xml
<?xml version="1.0" encoding="utf-8"?>
<AllRows>
    <MyRow Id="1" Value="Test1" />
    <MyRow Id="2" Value="Test2" />
</AllRows>
```

This converts the specified properties into XML attributes while keeping others as elements.

### Configuring Root Namespace for Dynamic Objects

To define a namespace for the root element, set `RootElementNamespace` :

```csharp
var dest = new XmlDestination("dynamic.xml", ResourceType.File);
dest.RootElementName = "RootElement";
dest.RootElementNamespace = "http://example.com/schema";
```

**Generated XML Output with Namespace and Prefix:**

```xml
<?xml version="1.0" encoding="utf-8"?>
<RootElement xmlns="http://example.com/schema">
    <Id>1</Id>
    <Value>Test1</Value>
</RootElement>
```

### Setting the Dynamic Element Name

When writing ExpandoObjects, `XmlDestination` wraps them in a `<Dynamic>` element by default. You can change this using `DynamicElementName`:

```csharp
var dest = new XmlDestination("dynamic.xml", ResourceType.File);
dest.DynamicElementName = "CustomDynamic";
```

**Generated XML Output with Custom Dynamic Element Name:**

```xml
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <CustomDynamic>
        <Id>1</Id>
        <Value>Test1</Value>
    </CustomDynamic>
</Root>
```
