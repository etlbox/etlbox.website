---
title: "Csv"
description: "Details about the CsvSource and CsvDestination"
lead: "With the CsvSource you can send csv formatted data into a data flow, and the CsvDestination will produce csv formatted output."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 420
toc: true
---

#### Csv connector package

The {{< link-ext url="https://nuget.org/packages/ETLBox.Csv" text="ETLBox.Csv" >}} package include the CsvSource and CsvDestination classes. 

The csv connector package is based on the {{< link-ext text="CsvHelper library created by Josh Close" url="https://joshclose.github.io/CsvHelper/" >}}. Both classes expose the `CsvHelper.Configuration` property which can be used to directly configure the import/export settings of csv helper. You can find {{< link-ext url="https://joshclose.github.io/CsvHelper/examples/configuration/" text="examples how to configure in the CsvHelper documentation" >}}. E.g. you can change the delimiter or the separator values. 

{{< alert text="All streaming connectors share a set of common properties. For example, instead of reading or writing from/into a file you can set ResourceType to ResourceType.Http or ResourceType.AzureBlob in order to read or write into a webpoint or an Azure blob. See <a href=\"../streaming\">Shared Functionalites</a> for a list of all shared properties between all streaming connectors."  >}}

If you want to start with example code right away, you will find it in the recipes section for the [CsvSource](/recipes/sources/csvsource) and [CsvDestination](/recipes/destinations/csvdestination). The components could also be used in other examples.  

## CsvSource

A CsvSource simple reads data from a csv file or from a web service endpoint. 

Let's assume you have an input file like this: 

```csv
Row_Nr;Value
1;Test1
2;Test2
```

Here is the ETLBox code snippet how to setup the CsvSource: 

```C#
CsvSource source = new CsvSource("Demo.csv");
source.Configuration.Delimiter = ";";
source.Configuration.IgnoreBlankLines = true;
```

This will create a source component that reads the data from a "Demo.csv" file and send it into a data flow. 

There are several configuration options for the Reader that you can set in the Configuration property. Learn more
about these options [in the CsvHelper.Configuration api documentation](https://joshclose.github.io/CsvHelper/api/CsvHelper.Configuration/Configuration/).
The default output data type of the CsvSource is an ExpandoObject. This is a dynamic object which will contain a property 
for each column in your csv file. The first row of your file is supposed to be a header record (unless you use the SkipRows property to define how many
rows needs to be skipped before your header starts). The header will define the property names of the ExpandoObject.

You can now use a `RowTransformation` to transform it into the data type you need, or just stick with the ExpandoObject. (All other components
in ETLBox will also support this).

This is an example to transform the dynamic object into a regular .NET object:

```C#
CsvSource<ExpandoObject> source = new CsvSource<ExpandoObject>("Demo.csv");
RowTransformation<ExpandoObject,MyDataObject> trans = 
    new RowTransformation<ExpandoObject,MyDataObject> (
        csvdata =>
        {
            dynamic csvrow = csvdata as ExpandoObject;
            MyDataObject myData = new MyDataObject() {
                myData.Id = csvRow.Row_Nr;
                myData.Value = csvRow.Value;
            };
            return myData;
});
```

### Using object types

Of course you can  use your data object as type for the CsvSource. The following code would directly read the data from the csv file 
into the right object type.

```C#
public class MyCsvData {
    public int Row_Nr { get; set; }
    public string Value { get; set; }
}
CsvSource<MyCsvData> source = new CsvSource<MyCsvData>("Demo.csv");
```

ETLBox will find the right property by the equivalent header column in your file. Therefore, the order of the columns doesn't matter, as long
as the column has an equivalent header. If the header name is different, you can use attributes or a ClassMap to find the right column.
Here is an example for using the Name and index attribute:

```C#
public class MyCsvData {
    [Name("Row_nr")]
    public int Id { get; set; }
    [Index(1)]
    public string Text { get;set;}
}
CsvSource<MyCsvData> source = new CsvSource<MyCsvData>("Demo.csv");
```

See the full documentation {{< link-ext text="about CsvHelepr attributes here" url="https://joshclose.github.io/CsvHelper/examples/configuration/attributes" >}} or 
read more {{< link-ext text="about class maps" url="https://joshclose.github.io/CsvHelper/examples/configuration" >}}.

### Read field headers

There are cases where you want to read the headers of a csv file before you actually start processing the data. This can be done by defining a `CsvSource` and call the 
method `ReadFieldHeaders` - this will use the current properties of the `CsvSource` and read the header data and the first row from the source. The header data is then returned by the method. 

```C#
var source = new CsvSource<MySimpleRow>("file.csv", ResourceType.File);
string[] headers = source.ReadFieldHeaders();
```

### Using arrays

Sometimes it can be easier to use a string array (or object array) to read from a csv file, e.g. if your Csv file doesn't have a header.
ETLBox will support arrays as well - just define your CsvSource like this

```C#
CsvSource<string[]> source = new CsvSource<string[]>("Demo.csv");
source.Configuration.HasHeaderRecord = false;
```

## CsvDestination

A CSV destination will create a file containing the data in the desired CSV format. 

The CsvDestination will work with the dynamic (ExpandoObject) as well as with regular object or arrays. 
Here is an example how you can use a classic object to write data into a Csv file:

```C#
public class MySimpleRow
{    
    [Name("Header1")]
    [Index(1)]
    public int Col1 { get; set; }
    [Name("Header2")]
    [Index(2)]
    public string Col2 { get; set; }
}

CsvDestination<MySimpleRow> dest = new CsvDestination<MySimpleRow>("./SimpleWithObject.csv");
```

will create a .csv file like this

```
Header1,Header2
1,Test1
2,Test2
3,Test3
```

If you use the ExpandoObject, the header names will be derived from the property names. In most cases, this will work as expected. 
If you use an array, e.g. `CsvDestination<string[]>`, you won't get a header column.

