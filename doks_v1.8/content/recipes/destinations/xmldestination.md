---
title: "Xml destination"
description: "Examples and code recipes for the XmlDestination component."
lead: "This article contains example code that shows the usage of the XmlDestination component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
weight: 2102
toc: true
---


The Xml destination converts data from your data flow into corresponding xml code. Internally, it uses the build-in .NET Xml Serializer.

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

## Write xml file - simple start

### With POCO

Let's start with a simple example - we write data into a xml file using two POCOs (Plain old component objects).

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

string destFile = @"res/Examples/SimpleWithPOCO.xml";

var source = new MemorySource<Element>();
source.Data = new List<Element>() {
    new Element() { Id = 1, Inner = new SubElement() {
            Value = "Test1",
            Number = 1.1m
        }
    },
    new Element() { Id = 1, Inner = new SubElement() {
            Number = 1.2m
        }
    },
    new Element() { Id = 1, Inner = new SubElement() {
            Value = "Test<X>3",
            Number = 1.3m
        }
    }
};
var dest = new XmlDestination<Element>();
dest.Uri = destFile;
dest.ResourceType = ResourceType.File;
//Use ResourceType.Http for web endpoints!
dest.Encoding = Encoding.UTF8;

source.LinkTo(dest);
Network.Execute(source);
PrintFile(destFile);

/* Output:
Content of file 'SimpleWithPOCO.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element>
    <Inner>
        <Value>Test1</Value>
        <Number>1.1</Number>
    </Inner>
    <Id>1</Id>
    </Element>
    <Element>
    <Inner>
        <Number>1.2</Number>
    </Inner>
    <Id>1</Id>
    </Element>
    <Element>
    <Inner>
        <Value>Test&lt;X&gt;3</Value>
        <Number>1.3</Number>
    </Inner>
    <Id>1</Id>
    </Element>
</Root>
---
*/
```

### Configure Xml serialization

This example shows how we can use the System.Xml.Serializer attributes to customize our xml output.

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

string destFile = @"res/Examples/POCOWithConfig.xml";

var source = new MemorySource<ElementWA>();
source.Data = new List<ElementWA>() {
    new ElementWA() { IdAttr = 1, InnerElement = new SubElementWA() {
            Value = "Test1",
            Number = 1.1m
        }
    },
    new ElementWA() { IdAttr = 1, InnerElement = new SubElementWA() {
            Number = 1.2m
        }
    },
    new ElementWA() { IdAttr = 1, InnerElement = new SubElementWA() {
            Value = "Test<X>3",
            Number = 1.3m
        }
    }
};
var dest = new XmlDestination<ElementWA>();
dest.Uri = destFile;
dest.ResourceType = ResourceType.File;
//Use ResourceType.Http for web endpoints!

source.LinkTo(dest);
Network.Execute(source);
PrintFile(destFile);

/* Output:
Content of file 'POCOWithConfig.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="1">
    <Inner Number="1.1">
        <Value>Test1</Value>
    </Inner>
    </Element>
    <Element Id="1">
    <Inner Number="1.2" />
    </Element>
    <Element Id="1">
    <Inner Number="1.3">
        <Value>Test&lt;X&gt;3</Value>
    </Inner>
    </Element>
</Root>
---
*/
```

### Dynamic xml file creation

The following example shows how a dynamic ExpandoObject can be used to copy a sql server table into a xml file, without the need to define any strongly typed object first.

```C#
public static SqlConnectionString ConnectionString => Config.SqlConnection.ConnectionString("DataFlow");

private void CreateTable(IConnectionManager connMan, string tableName) {
    DropTableTask.DropIfExists(connMan, tableName);
    TableDefinition td = new TableDefinition(tableName
        , new List<TableColumn>() {
        new TableColumn("Id", "INT", allowNulls: false),
        new TableColumn("Value1", "VARCHAR(100)", allowNulls: true),
        new TableColumn("Value2", "VARCHAR(10)", allowNulls: false)
    });
    CreateTableTask.Create(connMan, td);
    ObjectNameDescriptor TN = new ObjectNameDescriptor(tableName, connMan.QB, connMan.QE);
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(1,'Test1', '1.1')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(2,'Test2', '1.2')");
    SqlTask.ExecuteNonQuery(connMan, $@"INSERT INTO {TN.QuotatedFullName} VALUES(3,'Test3', '1.3')");
}

string destFile = @"res/Examples/TableIntoXml.xml";
var connMan = new SqlConnectionManager(ConnectionString);
CreateTable(connMan, "ExampleTable");
var source = new DbSource() {
    ConnectionManager = connMan,
    TableName = "ExampleTable"
};
var dest = new XmlDestination() {
    Uri = destFile,
    RootElementName = "Root",
    DynamicElementName = "Element"
};

source.LinkTo(dest);
Network.Execute(source);

PrintFile(destFile);

/* Output:
Content of file 'TableIntoXml.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element>
    <Id>1</Id>
    <Value1>Test1</Value1>
    <Value2>1.1</Value2>
    </Element>
    <Element>
    <Id>2</Id>
    <Value1>Test2</Value1>
    <Value2>1.2</Value2>
    </Element>
    <Element>
    <Id>3</Id>
    <Value1>Test3</Value1>
    <Value2>1.3</Value2>
    </Element>
</Root>
---
*/
```

## Writing into multiple files

You can use the `GetNextUri`/`HasNextUri` pattern (provided on all streaming connectors) to create multiple output  files.

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

string filePrefix = @"res/Examples/multiple_files_";

var source = new MemorySource<ElementWA>();
source.Data = new List<ElementWA>();
for (int i = 1; i <= 8; i++)
    source.DataAsList.Add(new ElementWA() {
        IdAttr = i,
        InnerElement = new SubElementWA() {
            Value = "Test" + i,
            Number = i * 0.1m
        }
    });

var dest = new XmlDestination<ElementWA>();
dest.HasNextUri = (smd, _) => smd.ProcessedRows == 3;
dest.GetNextUri = (smd, _) => filePrefix + smd.ProgressCount / 3 + ".xml";
dest.ResourceType = ResourceType.File;
//Use ResourceType.Http for web endpoints!

source.LinkTo(dest);
Network.Execute(source);
PrintFile(filePrefix + "0.xml");
PrintFile(filePrefix + "1.xml");
PrintFile(filePrefix + "2.xml");

/* Output:
Content of file 'multiple_files_0.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="1">
    <Inner Number="0.1">
        <Value>Test1</Value>
    </Inner>
    </Element>
    <Element Id="2">
    <Inner Number="0.2">
        <Value>Test2</Value>
    </Inner>
    </Element>
    <Element Id="3">
    <Inner Number="0.3">
        <Value>Test3</Value>
    </Inner>
    </Element>
</Root>
---
Content of file 'multiple_files_1.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="4">
    <Inner Number="0.4">
        <Value>Test4</Value>
    </Inner>
    </Element>
    <Element Id="5">
    <Inner Number="0.5">
        <Value>Test5</Value>
    </Inner>
    </Element>
    <Element Id="6">
    <Inner Number="0.6">
        <Value>Test6</Value>
    </Inner>
    </Element>
</Root>
---
Content of file 'multiple_files_2.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="7">
    <Inner Number="0.7">
        <Value>Test7</Value>
    </Inner>
    </Element>
    <Element Id="8">
    <Inner Number="0.8">
        <Value>Test8</Value>
    </Inner>
    </Element>
</Root>
---
*/
```

## Resource types

### Writing into Azure blob storage

All streaming connectors support writing data into Azure blob storage.

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

string connectionString = AzureStorageHelper.RetrieveConnectionString();
string containerName = "xml-example";
AzureStorageHelper.DeleteAndCreateContainer(connectionString, containerName);

var source = new MemorySource<ElementWA>();
source.Data = new List<ElementWA>();
for (int i = 1; i <= 4; i++)
    source.DataAsList.Add(new ElementWA() {
        IdAttr = i,
        InnerElement = new SubElementWA() {
            Value = "Test" + i,
            Number = i * 0.1m
        }
    });
var dest = new XmlDestination<ElementWA>("blob.xml");
dest.ResourceType = ResourceType.AzureBlob;
dest.AzureBlobStorage.ConnectionString = connectionString;
dest.AzureBlobStorage.ContainerName = containerName;

source.LinkTo(dest);
Network.Execute(source);

//Download blob again and check content
BlobContainerClient containerClient = new BlobContainerClient(connectionString, containerName);
var content = containerClient.GetBlobClient("blob.xml").DownloadContent().Value.Content;
var file = Encoding.UTF8.GetString(content);
Console.WriteLine(file);

/* Output:
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="1">
    <Inner Number="0.1">
        <Value>Test1</Value>
    </Inner>
    </Element>
    <Element Id="2">
    <Inner Number="0.2">
        <Value>Test2</Value>
    </Inner>
    </Element>
    <Element Id="3">
    <Inner Number="0.3">
        <Value>Test3</Value>
    </Inner>
    </Element>
    <Element Id="4">
    <Inner Number="0.4">
        <Value>Test4</Value>
    </Inner>
    </Element>
</Root>
*/
```

### Write into web endpoint

All streaming connectors allow you to send your data into any web endpoint using the ResourceType http.

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

var server = WireMockServer.Start();
server
    .Given(
    Request.Create()
        .WithPath("/test")
        .UsingPost()
        .WithBody(d => {
            Console.WriteLine("Recived POST request with body:");
            Console.WriteLine(d); return true;
        })
    )
    .RespondWith(
        Response.Create()
            .WithStatusCode(200)
    );

var source = new MemorySource<ElementWA>();
source.Data = new List<ElementWA>();
for (int i = 1; i <= 3; i++)
    source.DataAsList.Add(new ElementWA() {
        IdAttr = i,
        InnerElement = new SubElementWA() {
            Value = "Test" + i,
            Number = i * 0.1m
        }
    });
var dest = new XmlDestination<ElementWA>();
dest.ResourceType = ResourceType.Http;
dest.Uri = @$"http://localhost:{server.Port}/test";
dest.HttpRequestMessage.Method = HttpMethod.Post;
dest.HttpContentType = "application/xml";
dest.HttpClient.DefaultRequestHeaders.Add("User-Agent", "Test 1.0");
dest.HttpRequestMessage.Properties.Add("x:prop", "secret");

source.LinkTo(dest);
Network.Execute(source);

/* Output:
Received POST request with body:
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Element Id="1">
    <Inner Number="0.1">
        <Value>Test1</Value>
    </Inner>
    </Element>
    <Element Id="2">
    <Inner Number="0.2">
        <Value>Test2</Value>
    </Inner>
    </Element>
    <Element Id="3">
    <Inner Number="0.3">
        <Value>Test3</Value>
    </Inner>
    </Element>
</Root>
*/

```

## Utilizing your own stream

All streaming connector support that you provide your own stream. The following example shows how to use your own file stream.

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

string destFile = @"res/Examples/OwnStream.xml";
var source = new MemorySource<ElementWA>();
source.Data = new List<ElementWA>();
for (int i = 1; i <= 3; i++)
    source.DataAsList.Add(new ElementWA() {
        IdAttr = i,
        InnerElement = new SubElementWA() {
            Value = "Test" + i,
            Number = i * 0.1m
        }
    });

FileStream fs = File.Create(destFile);
XmlDestination<ElementWA> dest = new XmlDestination<ElementWA>();
dest.CreateStreamWriter = _ => {
    return new StreamWriter(fs, Encoding.UTF8);
};
source.LinkTo(dest);
Network.Execute(source);

PrintFile(destFile);

/*Output:
Content of file 'OwnStream.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
  <Element Id="1">
    <Inner Number="0.1">
      <Value>Test1</Value>
    </Inner>
  </Element>
  <Element Id="2">
    <Inner Number="0.2">
      <Value>Test2</Value>
    </Inner>
  </Element>
  <Element Id="3">
    <Inner Number="0.3">
      <Value>Test3</Value>
    </Inner>
  </Element>
</Root>
---
*/
```

## Writing Dynamic Objects  with Attributes

This example demonstrates how to write dynamic objects to an XML file, converting specific properties to attributes. The `ShouldConvertDynamicPropToAttribute` predicate is used to determine which properties should be converted to XML attributes.

```C#
string destFile = @"res/Examples/DynamicWithAttributes.xml";

var source = new MemorySource();
source.DataAsList.Add(CreateDynamicObject(1, "Test1"));
source.DataAsList.Add(CreateDynamicObject(2, "Test2"));
source.DataAsList.Add(CreateDynamicObject(3, "Test3"));

var dest = new XmlDestination(destFile);
dest.ShouldConvertDynamicPropToAttribute = el =>
    el.Name == "Id" || el.Name == "Flag";
dest.Encoding = Encoding.UTF8;

source.LinkTo(dest);
Network.Execute(source);
PrintFile(destFile);

/* Output:
Content of file 'DynamicWithAttributes.xml'
---
<?xml version="1.0" encoding="utf-8"?>
<Root>
    <Dynamic Id="1">
    <Value>Test1</Value>
    </Dynamic>
    <Dynamic Id="2">
    <Value />
    <Nested Flag="true">
        <Number>0.2</Number>
    </Nested>
    </Dynamic>
    <Dynamic Id="3">
    <Value>Test3</Value>
    <Nested Flag="true">
        <Number>0.3</Number>
    </Nested>
    </Dynamic>
</Root>
---
*/

private ExpandoObject CreateDynamicObject(int id, string val) {
    dynamic r = new ExpandoObject();
    r.Id = id;
    r.Value = id == 2 ? null : val;
    if (id >= 2) {
        r.Nested = new ExpandoObject();
        r.Nested.Number = id * 0.1m;
        r.Nested.Flag = true;
    }
    return r;
}
```
