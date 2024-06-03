---
title: "Csv destination"
description: "Examples and code recipes for the CsvDestination component."
lead: "This article contains example code that shows the usage of the CsvDestination component."
draft: false
images: []
menu:
  recipes:
    parent: "Destinations"
weight: 2102
toc: true
---


The Csv destination is your best choice if you want to create data file that are {{< link-ext url="https://www.rfc-editor.org/rfc/rfc4180" text="RFC-4180 compliant" >}}. The CsvDestination (as well as the CsvSource) relies on the 3rd party library {{< link-ext url="https://joshclose.github.io/CsvHelper/" text="CsvHelper by Josh Close" >}}. Some of the Configuration properties from this library are directly exposed. 

## Shared code

The following method is used in the subsequent examples, and prints the content of a csv file on the console output.

```C#
private void PrintOutputFile(string sourceFile) {
    Console.WriteLine($"Content of file '{Path.GetFileName(sourceFile)}'");
    Console.WriteLine("---");
    Console.WriteLine(File.ReadAllText(sourceFile));
    Console.WriteLine("---");
}
```

## Write csv file - simple start

### With POCO

Let's start with a simple example - we write data into a csv file using a POCO (Plain old component object).

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public decimal Value2 { get; set; }
    public int Id { get; set; }
}

string destFile = @"res/Examples/SimpleWithPOC.csv";
var source = new MemorySource<MyRow>();
source.Data = new List<MyRow>() {
    new MyRow() { Id = 1, Value1="Test1", Value2 = 1.1m},
    new MyRow() { Id = 2, Value2 = 1.2m},
    new MyRow() { Id = 3, Value1="Test,#3", Value2 = 1.3m},
};
var dest = new CsvDestination<MyRow>(destFile);
dest.ResourceType = ResourceType.File;

source.LinkTo(dest);
Network.Execute(source);
PrintOutputFile(destFile);

/* Output:
Content of file 'SimpleWithPOC.csv'
---
Value1,Value2,Id
Test1,1.1,1
,1.2,2
"Test,#3",1.3,3

---
*/
```

### Configure underlying CsvWriter

This example shows how we can use the {{< link-ext url="https://joshclose.github.io/CsvHelper/" text="CsvHelper" >}} `Configuration` to provide a different order of the header columns. Also, we can use the exposed configuration property to set up various other parameters, e.g. writing with a different delimiter or enabling quotes for strings. 

{{< alert text="To use a different encoding, you need to use the <code>Encoding</code> property on the <code>CsvSource</code> directly. Do not use the Encoding property on the CsvHelper Configuration object." >}}


```C#
public class MyRowWithConfig
{
    [CsvHelper.Configuration.Attributes.Index(1)]
    public string Value1 { get; set; }
    [CsvHelper.Configuration.Attributes.Index(2)]
    public decimal Value2 { get; set; }
    [CsvHelper.Configuration.Attributes.Index(0)]
    public int Id { get; set; }
}

string destFile = @"res/Examples/DifferentConfig.csv";

var source = new MemorySource<MyRowWithConfig>();
source.Data = new List<MyRowWithConfig>() {
    new MyRowWithConfig() { Id = 1, Value1="Test1", Value2 = 1.1m},
    new MyRowWithConfig() { Id = 2, Value2 = 1.2m},
    new MyRowWithConfig() { Id = 3, Value1="Test,#3", Value2 = 1.3m},
};
var dest = new CsvDestination<MyRowWithConfig>(destFile);
dest.ResourceType = ResourceType.File;
dest.Configuration =
    new CsvHelper.Configuration.CsvConfiguration(CultureInfo.InvariantCulture) {
        Delimiter = ";",
        ShouldQuote = rec => rec.FieldType == typeof(string),
        Quote = '"'
        //See also https://joshclose.github.io/CsvHelper/
    };
dest.Encoding = Encoding.UTF8;

source.LinkTo(dest);
Network.Execute(source);
PrintOutputFile(destFile);


/* Output:
Content of file 'DifferentConfig.csv'
---
"Id";"Value1";"Value2"
1;"Test1";1.1
2;"";1.2
3;"Test,#3";1.3

---
*/
```

### Map header names to properties with class maps

If you are not allowed to add attributes to your object, you can use the class mapping to change the header names or the order in your csv file (and many more different options are available here). 

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public decimal Value2 { get; set; }
    public int Id { get; set; }
}

public class ModelClassMap : ClassMap<MyRow>
{
    public ModelClassMap() {
        Map(m => m.Id).Name("RowNr").Index(0);
        Map(m => m.Value1).Name("Col1").Index(1);
        Map(m => m.Value2).Name("Col2").Index(2);
    }
}

string destFile = @"res/Examples/WithClassMap.csv";

var source = new MemorySource<MyRow>();
source.Data = new List<MyRow>() {
    new MyRow() { Id = 1, Value1="Test1", Value2 = 1.1m},
    new MyRow() { Id = 2, Value2 = 1.2m},
    new MyRow() { Id = 3, Value1="Test,#3", Value2 = 1.3m},
};
var dest = new CsvDestination<MyRow>(destFile);
dest.CsvContext = context => context.RegisterClassMap<ModelClassMap>();

source.LinkTo(dest);
Network.Execute(source);
PrintOutputFile(destFile);


/* Output:
Content of file 'WithClassMap.csv'
---
RowNr,Col1,Col2
1,Test1,1.1
2,,1.2
3,"Test,#3",1.3

---
*/
```

## Writing into multiple files

You can use the `GetNextUri`/`HasNextUri` pattern (provided on all streaming connectors) to create multiple output  files. 

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public decimal Value2 { get; set; }
    public int Id { get; set; }
}
string filePrefix = @"res/Examples/multiple_files_";

var source = new MemorySource<MyRow>();
source.Data = new List<MyRow>();
for (int i = 1; i <= 8; i++)
    source.DataAsList.Add(new MyRow() { Id = i, Value1 = "Test" + i, Value2 = i * 0.1m });

var dest = new CsvDestination<MyRow>();
dest.HasNextUri = (smd, _) => smd.ProcessedRows == 3;
dest.GetNextUri = (smd, _) => filePrefix + smd.ProgressCount / 3 + ".csv";
dest.ResourceType = ResourceType.File;

source.LinkTo(dest);
Network.Execute(source);
PrintOutputFile(filePrefix + "0.csv");
PrintOutputFile(filePrefix + "1.csv");
PrintOutputFile(filePrefix + "2.csv");


/* Output:
Content of file 'multiple_files_0.csv'
---
Value1,Value2,Id
Test1,0.1,1
Test2,0.2,2
Test3,0.3,3

---
Content of file 'multiple_files_1.csv'
---
Value1,Value2,Id
Test4,0.4,4
Test5,0.5,5
Test6,0.6,6

---
Content of file 'multiple_files_2.csv'
---
Value1,Value2,Id
Test7,0.7,7
Test8,0.8,8

---
*/
```

## Dynamic csv file creation

The following example shows how a dynamic ExpandoObject can be used to copy a sql server table into a csv file, without the need to define any strongly typed object first. 

```C#
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

string destFile = @"res/Examples/TableIntoCsv.csv";
var connMan = new SqlConnectionManager(ConnectionString);
CreateTable(connMan, "ExampleTable");
var source = new DbSource() {
    ConnectionManager = connMan,
    TableName = "ExampleTable"
};
var dest = new CsvDestination() {
    Uri = destFile
};

source.LinkTo(dest);
Network.Execute(source);

PrintOutputFile(destFile);

/* Output:
Content of file 'TableIntoCsv.csv'
---
Id,Value1,Value2
1,Test1,1.1
2,Test2,1.2
3,Test3,1.3

---
*/
```

## Writing into Azure blob storage

All streaming connectors support writing data into Azure blob storage.

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public decimal Value2 { get; set; }
    public int Id { get; set; }
}

string connectionString = AzureStorageHelper.RetrieveConnectionString();
string containerName = "csv-example";
AzureStorageHelper.DeleteAndCreateContainer(connectionString, containerName);

var source = new MemorySource<MyRow>();
source.Data = new List<MyRow>();
for (int i = 1; i <= 8; i++)
    source.DataAsList.Add(new MyRow() { Id = i, Value1 = "Test" + i, Value2 = i * 0.1m });

var dest = new CsvDestination<MyRow>("blob.csv");
dest.ResourceType = ResourceType.AzureBlob;
dest.AzureBlobStorage.ConnectionString = connectionString;
dest.AzureBlobStorage.ContainerName = containerName;

source.LinkTo(dest);
Network.Execute(source);

//Download blob again and check content
BlobContainerClient containerClient = new BlobContainerClient(connectionString, containerName);
var content =  containerClient.GetBlobClient("blob.csv").DownloadContent().Value.Content;
var file = Encoding.UTF8.GetString(content);
Console.WriteLine(file);

/* Output:
Value1,Value2,Id
Test1,0.1,1
Test2,0.2,2
Test3,0.3,3
Test4,0.4,4
Test5,0.5,5
Test6,0.6,6
Test7,0.7,7
Test8,0.8,8
*/
```

## Utilizing your own stream

All streaming connector support that you provide your own stream. The following example shows how to use your own file stream to append data to an existing csv file.

```C#
public class MyRowWithConfig
{
    [CsvHelper.Configuration.Attributes.Index(1)]
    public string Value1 { get; set; }
    [CsvHelper.Configuration.Attributes.Index(2)]
    public decimal Value2 { get; set; }
    [CsvHelper.Configuration.Attributes.Index(0)]
    public int Id { get; set; }
}

string destFile = @"res/Examples/OwnStream.csv";
if (File.Exists(destFile)) File.Delete(destFile);
string existingCsvContent = "Id,Value1,Value2" + Environment.NewLine
    + "1,TestA,X" + Environment.NewLine
    + "2,TestB,X" + Environment.NewLine;
File.WriteAllText(destFile, existingCsvContent);

var source = new MemorySource<MyRowWithConfig>();
source.Data = new List<MyRowWithConfig>() {
    new MyRowWithConfig() { Id = 3, Value1="Test3", Value2 = 5.5m },
    new MyRowWithConfig() { Id = 4, Value1="Test4"},
};

FileStream fileStream = new FileStream(destFile, FileMode.Append, FileAccess.Write);
CsvDestination<MyRowWithConfig> dest = new CsvDestination<MyRowWithConfig>();
dest.CreateStreamWriter = _ => {
    return new StreamWriter(fileStream, Encoding.UTF8);
};
dest.Configuration.HasHeaderRecord = false;

source.LinkTo(dest);
Network.Execute(source);

PrintOutputFile(destFile);

/*Output:
Content of file 'OwnStream.csv'
---
Id,Value1,Value2
1,TestA,X
2,TestB,X
3,Test3,5.5
4,Test4,0

---
*/

```