---
title: "Xml Schema Validation"
description: "The XmlSchemaValidation transformation checks whether an XML string from each input row conforms to a specified XSD schema. If the XML is valid, the row proceeds in the data flow; otherwise, it is redirected to an error output."
lead: "The <code>XmlSchemaValidation</code> transformation allows you to validate an XML string within each row against a provided XSD schema definition. If the XML does not conform to the schema, the entire row is forwarded to the error output."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 530
toc: true
chatgpt-review: true
---

{{< callout context="caution" icon="outline/info-circle" >}}
The `XmlSchemaValidation` transformation is part of the **ETLBox.Xml** package.
{{< /callout >}}

## Buffer Behavior

- Non-blocking transformation
- Single input buffer
- Invalid rows are redirected via `LinkErrorTo`

## Example

Start by defining the XML schema (XSD) as a string:

```csharp
string xsdMarkup = @"<xsd:schema xmlns:xsd='http://www.w3.org/2001/XMLSchema'>
   <xsd:element name='Root'>
      <xsd:complexType>
         <xsd:sequence>
            <xsd:element name='Child1' minOccurs='1' maxOccurs='1'/>
            <xsd:element name='Child2' minOccurs='1' maxOccurs='1'/>
         </xsd:sequence>
     </xsd:complexType>
   </xsd:element>
</xsd:schema>";
```

Define a POCO that holds the XML data. You can also use a dynamic object if preferred:

```csharp
public class MyXmlRow
{
    public string Xml { get; set; }
}
```

Create some test data for validation:

```csharp
string _validXml = @"<?xml version=""1.0"" encoding=""utf-8""?>
<Root>
  <Child1>Content1</Child1>
  <Child2>Content2</Child2>
</Root>";

string _invalidXml = @"<?xml version=""1.0"" encoding=""utf-8""?>
<Root>
  <Child1>Content1</Child1>
  <Child3>Content3</Child3>
</Root>";
```

Set up the validation flow:

```csharp
var source = new MemorySource<MyXmlRow>();
source.DataAsList.Add(new MyXmlRow() { Xml = _validXml });
source.DataAsList.Add(new MyXmlRow() { Xml = _invalidXml });

var dest = new MemoryDestination<MyXmlRow>();
var error = new MemoryDestination<ETLBoxError>();

var schemaValidation = new XmlSchemaValidation<MyXmlRow>();
schemaValidation.XmlSelector = r => r.Xml;
schemaValidation.XmlSchema = xsdMarkup;

source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);
Network.Execute(source);
```

#### Behavior

- The first XML is valid and will be forwarded to `dest`.
- The second XML is invalid (unexpected `Child3` element) and will be routed to `error`.

This setup ensures schema compliance for incoming XML data and cleanly separates valid and invalid entries.


## Dynamic Object Support

The `XmlSchemaValidation` transformation also supports dynamic objects, such as `ExpandoObject`.

To use a dynamic object, assign the `XmlSelector` to extract the XML string from a property in the dynamic row. The transformation logic is otherwise identical to typed input.

### Example: Using Dynamic Input

```csharp
var source = new MemorySource();
dynamic row1 = new ExpandoObject();
row1.Xml = _validXml;
dynamic row2 = new ExpandoObject();
row2.Xml = _invalidXml;
source.DataAsList.Add(row1);
source.DataAsList.Add(row2);

var schemaValidation = new XmlSchemaValidation();
schemaValidation.XmlSelector = row => ((dynamic)row).Xml;
schemaValidation.XmlSchema = xsdMarkup;

var dest = new MemoryDestination();
var error = new MemoryDestination<ETLBoxError>();

source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);
Network.Execute(source);
```

In this example, valid XML rows will be routed to the main destination, while any XML that fails schema validation will be redirected to the error output.
