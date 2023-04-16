---
title: "Csv source"
description: "Examples and code recipes for the CsvSource component."
lead: "This article contains example code that shows the usage of the CsvSource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
weight: 2101
toc: true
---

The Csv source is your best choice if you want to load data from a file that is {{< link-ext url="https://www.rfc-editor.org/rfc/rfc4180" text="RFC-4180 compliant" >}}. The CsvSource (as well as the CsvDestination) relies on the 3rd party library {{< link-ext url="https://joshclose.github.io/CsvHelper/" text="CsvHelper by Josh Close" >}}. Some of the Configuration properties from this library are directly exposed. 

## Shared code

The following method is used in the subsequent examples, and prints the content of a csv file on the console output.

```C#
private void PrintInputFile(string sourceFile) {
    Console.WriteLine($"Content of file '{Path.GetFileName(sourceFile)}'");
    Console.WriteLine("---");
    Console.WriteLine(File.ReadAllText(sourceFile));
    Console.WriteLine("---");
}
```

## Read csv file - simple start

### With POCO

Let's start with a simple example - we read a simple csv file into a memory destination using a POCO (Plain old component object).

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public decimal Value2 { get; set; }
    public int Id { get; set; }
}

string sourceFile = @"res/Examples/SameHeaderNames.csv";
PrintInputFile(sourceFile);
var source = new CsvSource<MyRow>(sourceFile);
source.ResourceType = ResourceType.File;
var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");

/* Output:
Content of file 'SameHeaderName.csv'
---
Id,Value1,Value2
1,"Test1",1.1
2,"Test2",1.2
3,"Test3",1.3
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: Test2, Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

### With dynamic ExpandoObject

Now we process the same file as in the previous example, but now using the dyamic ExpandoObject. Because the dynamic object does not know about the types in the source, everyting will be read as a string and we need to convert our data into the right data type manually. In this example we use the `RowModificationAction`, which runs synchronously directly after each source record is read (on the same task/thread).

```C#
string sourceFile = @"res/Examples/SameHeaderNames.csv";
PrintInputFile(sourceFile);
var source = new CsvSource(sourceFile);
source.RowModificationAction = (inputrow,_) => {
    dynamic r = inputrow as ExpandoObject;
    r.IdAsInt = Convert.ToInt32(r.Id);
    r.Value2AsDec = Convert.ToDecimal(r.Value2);
};
var dest = new MemoryDestination();

source.LinkTo(dest); 
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received Id: {row.IdAsInt}, Value1: {row.Value1}, Value2: {row.Value2AsDec}");

/* Output:
Content of file 'SameHeaderNames.csv'
---
Id,Value1,Value2
1,"Test1",1.1
2,"Test2",1.2
3,"Test3",1.3
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: Test2, Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

## Redirecting errors 

We can use the error linking if we want to ignore flawed data in the source.

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public decimal Value2 { get; set; }
    public int Id { get; set; }
}

string sourceFile = @"res/Examples/CsvWithErrors.csv";
PrintInputFile(sourceFile);
var source = new CsvSource<MyRow>(sourceFile);
var dest = new MemoryDestination<MyRow>();
var errorDest = new MemoryDestination<ETLBoxError>();

source.LinkTo(dest);
source.LinkErrorTo(errorDest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");

foreach (var err in errorDest.Data) 
    Console.WriteLine($"Error record: {err.ErrorText.Substring(0,err.ErrorText.IndexOf(Environment.NewLine))} " +
        Environment.NewLine +
        $"{err.RecordAsJson}");

/* Output:
Content of file 'CsvWithErrors.csv'
---
Id,Value1,Value2
1,"OK",1.1
X,"Err",1.2
3,"Err",NA
4,Err,
5,OK,0
---
Received Id: 1, Value1: OK, Value2: 1.1
Received Id: 5, Value1: OK, Value2: 0
Error record: The conversion cannot be performed. 
Row: 3 - Start Position: 43 -- RawRecord: X,"Err",1.2

Error record: The conversion cannot be performed. 
Row: 4 - Start Position: 55 -- RawRecord: 3,"Err",NA

Error record: The conversion cannot be performed. 
Row: 5 - Start Position: 63 -- RawRecord: 4,Err,
*/
```

## Configure underlying CsvReader

This example show how we can use the {{< link-ext url="https://joshclose.github.io/CsvHelper/" text="CsvHelper" >}} `Configuration` to map different header names to our object properties. Also, we can use this configuration to set up various other parameters, e.g. reading with a different delimiter. 

{{< alert text="To use a different encoding, you need to use the <code>Encoding</code> property on the <code>CsvSource</code> directly. Do not use the Encoding property on the CsvHelper Configuration object." >}}


```C#
public class MyRowHN
{
    [CsvHelper.Configuration.Attributes.Name("Col1")]
    public string Value1 { get; set; }
    [CsvHelper.Configuration.Attributes.Name("Col2")]
    public decimal Value2 { get; set; }
    [CsvHelper.Configuration.Attributes.Name("RowNr")]
    public int Id { get; set; }
}

string sourceFile = @"res/Examples/DifferentConfiguration.csv";
PrintInputFile(sourceFile);
var source = new CsvSource<MyRowHN>(sourceFile);
source.ResourceType = ResourceType.File;
source.Configuration =
    new CsvHelper.Configuration.CsvConfiguration(CultureInfo.InvariantCulture) {
        Delimiter = ";",
        AllowComments = true,
        MissingFieldFound = null,
        IgnoreBlankLines = true
        //See also https://joshclose.github.io/CsvHelper/
};
source.SkipRows = 1;
source.Encoding = Encoding.UTF8; 

var dest = new MemoryDestination<MyRowHN>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");

/* Output:
Content of file 'DifferentConfiguration.csv'
---
#Skip this line
Ignore;RowNr;Col1;Col2
X;1;"Test1";1.1

X;2;"Test2";1.2
#Comment here
X;3;"Test3";1.3
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: Test2, Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3

*/
```

### Map header names to properties with class maps

If you are not allowed to add attributes to your object, you can use the class mapping to match the header names in your csv file with the right property in your object. 

```C#
public class ModelClassMap : ClassMap<MyRow>
{
    public ModelClassMap() {
        Map(m => m.Id).Name("RowNr");
        Map(m => m.Value1).Name("Col1");
        Map(m => m.Value2).Name("Col2");
    }
}

string sourceFile = @"res/Examples/DifferentHeaderNames.csv";
PrintInputFile(sourceFile);
var source = new CsvSource<MyRow>(sourceFile);
source.ResourceType = ResourceType.File;
source.Encoding = Encoding.UTF8;
source.Configuration.Delimiter = ";";
source.CsvContext = context => context.RegisterClassMap<ModelClassMap>();

var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");

/* Output:
Content of file 'DifferentHeaderNames.csv'
---
RowNr;Col1;Col2
1;"Test1";1.1
2;"Test2";1.2
3;"Test3";1.3
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: Test2, Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

## Reading multiple files

You can use the `GetNextUri`/`HasNextUri` pattern (provided on all streaming connectors) to go through a set a files. 

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public decimal Value2 { get; set; }
    public int Id { get; set; }
}

string pattern = @"res/Examples/File";
PrintInputFile("res/Examples/File1.csv");
PrintInputFile("res/Examples/File2.csv");
PrintInputFile("res/Examples/File3.csv");

var source = new CsvSource<MyRow>();
source.ResourceType = ResourceType.File;
source.GetNextUri = meta => pattern + (meta.RequestCount+1) + ".csv";
source.HasNextUri = meta => meta.RequestCount < 3;
var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");

/* Output:
Content of file 'File1.csv'
---
Id,Value1,Value2
1,"Test1",1.1
2,"Test2",1.2
---
Content of file 'File2.csv'
---
Id,Value1,Value2
3,"Test3",1.3
4,"",1.4
---
Content of file 'File3.csv'
---
Id,Value1,Value2
5,"Test5",1.5
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: Test2, Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
Received Id: 4, Value1: , Value2: 1.4
Received Id: 5, Value1: Test5, Value2: 1.5
*/
```

## Csv files without header

You can also read data from csv files without header. Set the `HasHeaderRecord` property in the Configuration to `false`, and the CsvSource will not try to interpret the first row as header row. 

### With POCO

```C#
public class MyRowWithIndex
{
    [CsvHelper.Configuration.Attributes.Index(1)]
    public string Value1 { get; set; }
    [CsvHelper.Configuration.Attributes.Index(2)]
    public decimal Value2{ get; set; }
}

string sourceFile = @"res/Examples/NoHeaders.csv";
PrintInputFile(sourceFile);
var source = new CsvSource<MyRowWithIndex>(sourceFile);
source.Configuration.HasHeaderRecord = false;
var dest = new MemoryDestination<MyRowWithIndex>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Value1: {row.Value1}, Value2: {row.Value2}");

/* Output:
Content of file 'NoHeaders.csv'
---
1,"Test1",1.1
2,"Test2",1.2
3,"Test3",1.3
---
Received Value1: Test1, Value2: 1.1
Received Value1: Test2, Value2: 1.2
Received Value1: Test3, Value2: 1.3             
    */
```

### With dynamic ExpandoObject

```C#
string sourceFile = @"res/Examples/NoHeaders.csv";
PrintInputFile(sourceFile);
var source = new CsvSource(sourceFile);
source.Configuration.HasHeaderRecord = false;
source.Configuration.GetDynamicPropertyName =
    (args) => args.FieldIndex switch {
        0 => "Id",
        1 => "Value1",
        2 => "Value2"
    };
var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received Value1: {row.Value1}, Value2: {row.Value2}");

/* Output:
Content of file 'NoHeaders.csv'
---
1,"Test1",1.1
2,"Test2",1.2
3,"Test3",1.3
---
Received Value1: Test1, Value2: 1.1
Received Value1: Test2, Value2: 1.2
Received Value1: Test3, Value2: 1.3             
    */
```

## Reading from Azure blob storage

All streaming connectors support reading data from Azure blob storage instead of a file. 

```C#
public class MyRow
{
    public string Value1 { get; set; }
    public decimal Value2 { get; set; }
    public int Id { get; set; }
}

//Upload source file into Azure blob container
string sourceFile = @"res/Examples/SameHeaderNames.csv";
PrintInputFile(sourceFile);
string connectionString = AzureStorageHelper.RetrieveConnectionString();
AzureStorageHelper.DeleteAndCreateContainer(connectionString, "csv-test");
BlobContainerClient containerClient = new BlobContainerClient(connectionString, "csv-test");
using (var reader = new FileStream(sourceFile, FileMode.Open)) {
    var resp = containerClient.GetBlobClient("SameHeaderNames.csv").Upload(reader);
}

//Read uploaded file with CsvSource
var source = new CsvSource<MyRow>("SameHeaderNames.csv");
source.ResourceType = ResourceType.AzureBlob;
source.AzureBlobStorage.ConnectionString = connectionString;
source.AzureBlobStorage.ContainerName = "csv-test";
var dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Received Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");

/* Output:
    Content of file 'SameHeaderNames.csv'
---
Id,Value1,Value2
1,"Test1",1.1
2,"Test2",1.2
3,"Test3",1.3
---
Received Id: 1, Value1: Test1, Value2: 1.1
Received Id: 2, Value1: Test2, Value2: 1.2
Received Id: 3, Value1: Test3, Value2: 1.3
*/
```

## Utilizing your own stream

All streaming connector support that you provide your own stream. The following example shows how to use a memory stream to read csv data. 

```C#
 byte[] firstString = Encoding.UTF8.GetBytes("Col1,Col2\n");
byte[] secondString = Encoding.UTF8.GetBytes("1,Test1\n2,Test2\n3,Test3\n");
var source = new CsvSource();
source.CreateStreamReader = url => {
    MemoryStream memStream = new MemoryStream();
    memStream.Write(firstString, 0, firstString.Length);
    memStream.Write(secondString, 0, secondString.Length);
    memStream.Seek(0, SeekOrigin.Begin);
    return new StreamReader(memStream, Encoding.UTF8);

};

var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);


foreach (dynamic row in dest.Data)
    Console.WriteLine($"Received Col1: {row.Col1}, Col2: {row.Col2}");

/*Output:
Received Col1: 1, Col2: Test1
Received Col1: 2, Col2: Test2
Received Col1: 3, Col2: Test3
*/
```