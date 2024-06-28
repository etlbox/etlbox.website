---
title: "Xml source"
description: "Examples and code recipes for the XmlSource component."
lead: "This article contains example code that shows the usage of the XmlSource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
weight: 2101
toc: true
---

The Xml source let you load data in xml format from various sources - either from a file, a web service or from an Azure blob.

## Shared code

The following method is used in the subsequent examples, and prints the content of a xml file on the console output.

```C#
private void PrintFile(string sourceFile) {
    Console.WriteLine($"Content of file '{Path.GetFileName(sourceFile)}'");
    Console.WriteLine("---");
    Console.WriteLine(File.ReadAllText(sourceFile));
    Console.WriteLine("---");
}
```

## Read xml file

### With POCO, only Elements

Let's start with an xml file that contains only elements. We can read this into a memory destination using a POCO (Plain old component object).

```C#
public class Element
{
    public SubElement Inner { get; set; }
    public int Id { get; set; }
}

public class SubElement
{
    public string Value { get; set; }
    public decimal Number { get; set; }
}

string sourceFile = "res/Examples/Elements.xml";
PrintFile(sourceFile);

var source = new XmlSource<Element>() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
var dest = new MemoryDestination<Element>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

/* Output:
Content of file 'Elements.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <CreationDate>2022-05-01</CreationDate>
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
    <Element>
    <Id>3</Id>
    <Inner>
        <Value>Test3</Value>
        <Number>1.3</Number>
    </Inner>
    </Element>
    <Confidential>false</Confidential>
</Root>
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### Elements and attributes mixed

If attributes and elements are mixed in your source xml, you can use the Xml attributes provided by the {{< link-ext url="https://learn.microsoft.com/en-us/dotnet/api/system.xml.serialization" text="System.Xml.Serialization" >}} namespace.

```C#
[XmlRoot("Element")]
public class ElementWA
{
    [XmlElement("Inner")]
    public SubElementWA InnerElement { get; set; }
    [XmlAttribute("Id")]
    public int IdAttr { get; set; }
}

public class SubElementWA
{
    public string Value { get; set; }
    [XmlAttribute("Number")]
    public decimal Number { get; set; }
}

string sourceFile = "res/Examples/ElementsAndAttributes.xml";
PrintFile(sourceFile);

var source = new XmlSource<ElementWA>() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
var dest = new MemoryDestination<ElementWA>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.IdAttr}, Value1: {row.InnerElement.Value}, Value2: {row.InnerElement.Number}");

/* Output:
Content of file 'ElementsAndAttributes.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <CreationDate>2022-05-01</CreationDate>
    <Element Id="1">
    <Inner Number="1.1">
        <Value>Test1</Value>
    </Inner>
    </Element>
    <Element Id="2">
    <Inner Number="1.2">
        <Value></Value>
    </Inner>
    </Element>
    <Element Id="3">
    <Inner Number="1.3">
        <Value>Test3</Value>
    </Inner>
    </Element>
    <Confidential>false</Confidential>
</Root>
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### Reading into dynamic

We can read again the xml file in the previous example, this time without using a POCO but a dynamic ExpandoObject.

```C#
string sourceFile = "res/Examples/ElementsAndAttributes.xml";
PrintFile(sourceFile);

var source = new XmlSource() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
source.ElementName = "Element";
source.AttributePrefixForDynamic = "at_";

var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received Id: {row.at_Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.at_Number}");

/* Output:
Content of file 'ElementsAndAttributes.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <CreationDate>2022-05-01</CreationDate>
    <Element Id="1">
    <Inner Number="1.1">
        <Value>Test1</Value>
    </Inner>
    </Element>
    <Element Id="2">
    <Inner Number="1.2">
        <Value></Value>
    </Inner>
    </Element>
    <Element Id="3">
    <Inner Number="1.3">
        <Value>Test3</Value>
    </Inner>
    </Element>
    <Confidential>false</Confidential>
</Root>
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### Different element names

If our source contains not the same element name for our data, but has changing names, we can use the `ElementNameRetrievalFunc` to adjust the element before reading the next element.

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

## Redirecting errors

We can use the error linking if we want to ignore flawed data in the source.

```C#
public class Element
{
    public SubElement Inner { get; set; }
    public int Id { get; set; }
}

public class SubElement
{
    public string Value { get; set; }
    public decimal Number { get; set; }
}

string sourceFile = "res/Examples/ElementsWithErrors.xml";
PrintFile(sourceFile);

var source = new XmlSource<Element>() {
    ResourceType = ResourceType.File,
    Uri = sourceFile
};
var dest = new MemoryDestination<Element>();
var errorDest = new MemoryDestination<ETLBoxError>();

source.LinkTo(dest);
source.LinkErrorTo(errorDest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

foreach (var err in errorDest.Data)
    Console.WriteLine($"Error record: {err.ErrorText} " +
        Environment.NewLine +
        $"{err.RecordAsJson}");

/* Output:
Content of file 'ElementsWithErrors.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <CreationDate>2022-05-01</CreationDate>
    <Element>
    <Id>1</Id>
    <Inner>
        <Value>OK</Value>
        <Number>1.1</Number>
    </Inner>
    </Element>
    <Element>
    <Id>2</Id>
    <Inner>
        <Value>ERR</Value>
        <Number></Number>
    </Inner>
    </Element>
    <Element>
    <Id>3</Id>
    <Inner>
        <Value>OK</Value>
        <Number>1.3</Number>
    </Inner>
    </Element>
    <Element>
    <Id>X</Id>
    <Inner>
        <Value>ERR</Value>
        <Number>1.4</Number>
    </Inner>
    </Element>
    <Confidential>false</Confidential>
</Root>
---
Received Id: 1, Value1: OK, Value2: 1.1
Received Id: 3, Value1: OK, Value2: 1.3
Error record: There is an error in XML document (0, 0).
<Element>
    <Id>2</Id>
    <Inner>
        <Value>ERR</Value>
        <Number></Number>
    </Inner>
    </Element>
Error record: There is an error in XML document (0, 0).
<Element>
    <Id>X</Id>
    <Inner>
        <Value>ERR</Value>
        <Number>1.4</Number>
    </Inner>
    </Element>
*/
```

## Reading multiple Uris

You can use the `GetNextUri`/`HasNextUri` pattern (provided on all streaming connectors) to go through a set a files, web service endpoints or blobs.

The following example shows the usage with files - change the `ResourceType` e.g. to Http if you want to read xml formatted data from more than one endpoint.

```C#
[XmlRoot("Element")]
public class MyRow
{
    [XmlAttribute("Id")]
    public int Id { get; set; }
    public string Value { get; set; }
}

string pattern = @"res/Examples/File";
PrintFile("res/Examples/File1.xml");
PrintFile("res/Examples/File2.xml");
PrintFile("res/Examples/File3.xml");

var source = new XmlSource<MyRow>();
source.ResourceType = ResourceType.File;
source.GetNextUri = meta => pattern + (meta.RequestCount + 1) + ".xml";
source.HasNextUri = meta => meta.RequestCount < 3;
var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value}");

/* Output:
Content of file 'File1.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="1">
    <Value>Test1</Value>
    </Element>
    <Element Id="2">
    <Value>Test2</Value>
    </Element>
</Root>
---
Content of file 'File2.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="3">
    <Value>Test3</Value>
    </Element>
    <Element Id="4">
    <Value>Test4</Value>
    </Element>
</Root>
---
Content of file 'File3.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="5">
    <Value>Test5</Value>
    </Element>
</Root>
---
Received Id: 1, Value1: Test1
Received Id: 2, Value1: Test2
Received Id: 3, Value1: Test3
Received Id: 4, Value1: Test4
Received Id: 5, Value1: Test5
*/
```

## Different resource types

### Reading from Azure blob storage

All streaming connectors support reading data from Azure blob storage instead of a file. Here is an example for the XmlSource.

```C#
public class Element
{
    public SubElement Inner { get; set; }
    public int Id { get; set; }
}

public class SubElement
{
    public string Value { get; set; }
    public decimal Number { get; set; }
}

//Upload source file into Azure blob container
string sourceFile = @"res/Examples/Elements.xml";
PrintFile(sourceFile);
string connectionString = AzureStorageHelper.RetrieveConnectionString();
AzureStorageHelper.DeleteAndCreateContainer(connectionString, "xml-test");
BlobContainerClient containerClient = new BlobContainerClient(connectionString, "xml-test");
using (var reader = new FileStream(sourceFile, FileMode.Open)) {
    var resp = containerClient.GetBlobClient("Elements.xml").Upload(reader);
}

//Read uploaded file with CsvSource
var source = new XmlSource<Element>("Elements.xml");
source.ResourceType = ResourceType.AzureBlob;
source.AzureBlobStorage.ConnectionString = connectionString;
source.AzureBlobStorage.ContainerName = "xml-test";
var dest = new MemoryDestination<Element>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

/* Output:
Content of file 'Elements.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <CreationDate>2022-05-01</CreationDate>
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
    <Element>
    <Id>3</Id>
    <Inner>
        <Value>Test3</Value>
        <Number>1.3</Number>
    </Inner>
    </Element>
    <Confidential>false</Confidential>
</Root>
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### Reading from web service

All streaming connectors support reading data from any http endpoint. Here is an example for reading data from a mocked WebServer using a POST request.

```c#
public class Element
{
    public SubElement Inner { get; set; }
    public int Id { get; set; }
}

public class SubElement
{
    public string Value { get; set; }
    public decimal Number { get; set; }
}

string sourceFile = "res/Examples/Elements.xml";
var server = WireMockServer.Start();
server
    .Given(
        Request.Create()
        .WithPath("/test")
        .UsingPost())
    .RespondWith(
        Response.Create()
            .WithStatusCode(200)
            .WithHeader("Content-Type", "text/xml")
            .WithBody(File.ReadAllText(sourceFile))
    );

var source = new XmlSource<Element>() {
    ResourceType = ResourceType.Http,
    Uri = @$"http://localhost:{server.Port}/test"
};
source.HttpRequestMessage.Method = HttpMethod.Post;
source.HttpRequestMessage.Headers.AcceptEncoding.Add(
    new System.Net.Http.Headers.StringWithQualityHeaderValue("*"));
source.HttpRequestMessage.Properties.Add("Content-Type", "application/xml");
var dest = new MemoryDestination<Element>();

source.LinkTo(dest);
Network.Execute(source);

Console.WriteLine("Request finished with status code:" + source.HttpResponseMessage.StatusCode.ToString());
foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Inner.Value}, Value2: {row.Inner.Number}");

/* Output:
Content of file 'Elements.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
  <CreationDate>2022-05-01</CreationDate>
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
  <Element>
    <Id>3</Id>
    <Inner>
      <Value>Test3</Value>
      <Number>1.3</Number>
    </Inner>
  </Element>
  <Confidential>false</Confidential>
</Root>
---
Request finished with status code:OK
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: , Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

## Reading with Namespaces

This example shows how different namespaces in an Xml file can be addressed.

```C#
XmlSource<FTableRow> source = new XmlSource<FTableRow>("res/Examples/namespaces.xml", ResourceType.File);
var dest = new MemoryDestination<FTableRow>();
source.LinkTo(dest);
Network.Execute(source);

PrintFile("res/Examples/namespaces.xml");
foreach (var row in dest.Data)
    Console.WriteLine($"Received: {row.Name} - {row.Width}x{row.Length}x{row.Height}");

//Output
/*
Content of file 'namespaces.xml'
---
<?xml version="1.0" encoding="utf-8" ?>
<root>
<h:table xmlns:h="http://www.w3.org/TR/html4/">
<h:tr>
<h:td class="green">Apples</h:td>
<h:td class="yellow">Bananas</h:td>
</h:tr>
</h:table>
<f:table xmlns:f="https://www.w3schools.com/furniture" name="Coffee table">
<f:width>80</f:width>
<f:length>120</f:length>
</f:table>
<h:table xmlns:h="http://www.w3.org/TR/html4/">
<h:tr>
<h:td class="yellow">Lemons</h:td>
<h:td>Oranges</h:td>
</h:tr>
</h:table>
<h:table xmlns:h="http://www.w3.org/TR/html4/">
<h:tr>
<h:td class="green">Kiwis</h:td>
<h:td class="black">Grapes</h:td>
</h:tr>
</h:table>
<f:table xmlns:f="https://www.w3schools.com/furniture" name="Dining table">
<f:width>100</f:width>
<f:length>200</f:length>
</f:table>
<f:table xmlns:f="https://www.w3schools.com/furniture" name="Sofa">
<f:width>400</f:width>
<f:height>50</f:height>
</f:table>
</root>
---
Received: Coffee table - 80x120x
Received: Dining table - 100x200x
Received: Sofa - 400xx50
*/
```

### Adding new column during Extraction

This example shows how a new column can be added to the extracted xml data. This example will also read only data on a particular namespace.

```C#
[XmlRoot(ElementName = "Main", Namespace = "urn:com.emp/empqueue")]
public class XmlDataAddCol {
    public int EmpID { get; set; }
    [XmlElement("Emp_Name")]
    public string Name { get; set; }
    [XmlElement("Emp_Address")]
    public string Address { get; set; }

    //This is the new column that we want to add,
    //which doesn't exists in the source xml file
    public string NewColumn { get; set; }
}

PrintFile("res/Examples/input.xml");
var source = new XmlSource<XmlDataAddCol>("res/Examples/input.xml", ETLBox.ResourceType.File);
source.ElementName = "ag:Main";
var rowTrans = new RowTransformation<XmlDataAddCol>();
rowTrans.TransformationFunc = row => {
    row.NewColumn = "Additional data for id " + row.EmpID;
    return row;
};
var dest = new DataFrameDestination<XmlDataAddCol>();

source.LinkTo(rowTrans);
rowTrans.LinkTo(dest);
Network.Execute(source);

Console.WriteLine(dest.DataFrame.ToString());

/* Output

Content of file 'input.xml'
---
<?xml version="1.0" encoding="UTF-8"?>
<ag:Emp_queue xmlns:ag="urn:com.emp/empqueue" xmlns:xsi="http://www.w3.org/2001/xmlschema-instance">
    <ag:Main>
        <ag:EmpID>1002</ag:EmpID>
        <ag:Emp_Name>Peter</ag:Emp_Name>
        <ag:Emp_Address>III</ag:Emp_Address>
    </ag:Main>

    <ag:Employee>
        <ag:Name>SS2</ag:Name>
        <ag:JoinDate>2021-10-12</ag:JoinDate>
        <ag:Position>JJ2</ag:Position>
    </ag:Employee>

    <ag:Employee>
        <ag:Name>SS12</ag:Name>
        <ag:JoinDate>2020-10-12</ag:JoinDate>
        <ag:Position>JJX</ag:Position>
    </ag:Employee>

    <ag:Main>
        <ag:EmpID>1003</ag:EmpID>
        <ag:Emp_Name>Fritz</ag:Emp_Name>
        <ag:Emp_Address>IV</ag:Emp_Address>
    </ag:Main>

    <ag:Employee>
        <ag:Name>SS13</ag:Name>
        <ag:JoinDate>2020</ag:JoinDate>
        <ag:Position>JJX</ag:Position>
    </ag:Employee>

</ag:Emp_queue>

---

EmpID     Name      Address   NewColumn
1002      Peter     III       Additional data for id 1002
1003      Fritz     IV        Additional data for id 1003
*/
```
