---
title: "Xml schema validation"
description: "Details about the XmlSchemaValidation"
lead: "This transformation allows you to validate XML code in your incoming data against a XML schema definition."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 710
toc: true
---

## Overview

To use the `XmlSchemaValidation` you need to define how the XML string can be read from your data row and the schema definition used for validation. If the schema is not valid, the complete row will be send to the error output of the transformation. 

{{< alert text="The <code>XmlSchemaValidation</code> is part of the ETLBox.Xml package" >}}

#### Buffer 

The `XmlSchemaValidation` is a non-blocking transformation and has an input buffer. 

## Example

Define the schema in your code: 

```C#
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

Now you can define a POCO use to store your xml (but of course you can also use a dynamic object).

```C#
public class MyXmlRow
{
  public string Xml { get; set; }
}
```

Now we setup some test data:

```C#
string _validXml => $@"<?xml version=""1.0"" encoding=""utf-8""?>
<Root>
  <Child1>Content1</Child1>
  <Child2>Content2</Child2>
</Root>";

string _invalidXml => $@"<?xml version=""1.0"" encoding=""utf-8""?>
<Root>
  <Child1>Content1</Child1>
  <Child3>Content3</Child3>
</Root>";
```

Finally, we can create a flow that validates the incoming xml agains our schema: 

```C#
var source = new MemorySource<MyXmlRow>();
source.DataAsList.Add(new MyXmlRow() { Xml = _validXml });
source.DataAsList.Add(new MyXmlRow() { Xml = _invalidXml });
MemoryDestination<MyXmlRow> dest = new MemoryDestination<MyXmlRow>();
MemoryDestination<ETLBoxError> error = new MemoryDestination<ETLBoxError>();

XmlSchemaValidation<MyXmlRow> schemaValidation = 
  new XmlSchemaValidation<MyXmlRow>();
schemaValidation.XmlSelector = r => r.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);
Network.Execute(source);
```
