---
title: "Excel"
description: "Details about the ExcelSource"
lead: "The ExcelSource allows you to send data from an excel file into a data flow."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 430
toc: true
---

#### Excel connector package

If you need to read from excel files, make sure to add the latest nuget package {{< link-ext text="ETLBox.Excel" url="https://www.nuget.org/packages/ETLBox.Excel/" >}} to your project.

The Excel connector can read excel from a source pr create a new excel. The ExcelDestination has some limitations regarding performance and the max number of rows. If you need to generate Excel output, consider to create csv files instead (using the `CsvDestination`) which can also be opened with Excel. 

## ExcelSource

An Excel source reads data from a xls or xlsx file. By default the excel reader will try to read all data in the file. You can specify a sheet name and a range 
to restrict this behavior. 

By default, a header column is expected in the first row. The name of the header for each column is used to map the column values with the object - if the property is equal the header name, the value of subsequent rows are written into the property.

The excel connector package is based on the 3rd party library {{< link-ext text="ExcelDataReader" url="https://github.com/ExcelDataReader/ExcelDataReader" >}}. 

### Example 

Let's consider an example. If your excel file looks like this:

Col1|Col2
-|-----
1|Test1
2|Test2
3|Test3

You can easily load this data with an object like this:

```C#
public class ExcelData {
    public string Col1 { get; set; }
    public int Col2 { get; set; }
}

ExcelSource<ExcelData> source = 
    new ExcelSource<ExcelData> ("src/DataFlow/ExcelDataFile.xlsx");
```

You can change this behavior with the Attribute `ExcelColumn`. Here you can either define a different header name used for matching for a property. Or you can set the column index  or the property - the first column would be 0, the 2nd column 1, ... When you using the column index, you can read also from ExcelFile that have no header row. In this case, you need to set the property `HasNoHeader` to true when using the ExcelSource.

Usage example for an excel file that contains no header. This could like this:

 |
-|-----
1|Test1
2|Test2
3|Test3

This is the corresponding object creation:

```C#
public class ExcelData {
    [ExcelColumn(0)]
    public string Col1 { get; set; }
    [ExcelColumn(1)]
    public int Col2 { get; set; }
}

ExcelSource<ExcelData> source = 
    new ExcelSource<ExcelData>("src/DataFlow/ExcelDataFile.xlsx") {
        Range = new ExcelRange(2, 4, 5, 9),
        SheetName = "Sheet2",
        HasNoHeader = true
};
```

The ExcelRange does not need to define the full range. It is sufficient if you just set the starting coordinates. The end of the
data can be automatically determined from the underlying ExcelDataReader.

The ExcelSource has a property `IgnoreBlankRows`. This can be set to true, and all rows which cells are completely empty
are ignored when reading data from your source. 

### Using dynamic objects

The ExcelSource comes like all other components with the ability to work with dynamic object. 

Just define your ExcelSource like this:

```C#
ExcelSource source = new ExcelSource("src/DataFlow/ExcelDataFile.xlsx");
```

This will internally create an ExpandoObject for further processing. The property name will automatically be determined by the header column. If you don't have a header column, the property names would be `Column1` for the first, `Column2` for the second column and so on. 

### Read field headers

There are cases where you want to read the headers of a excel file before you actually start processing the data. This can be done by defining a `ExcelSource` and call the 
method `ReadFieldHeaders` - this will use the current properties of the `ExcelSource` and read the header data and the first row from the source. The header data is then returned by the method. 

```C#
var source = new ExcelSource<MySimpleRow>("excel.xlsx");
string[] headers = source.ReadFieldHeaders();
```

## ExcelDestination

You can use the ExcelDestination to create Excel files. Excel only allow to create files with a maximum of 1 million rows. The Excel destination does not support streaming of data directly into an excel file - all rows that need to be written into the destination are stored in memory first. When all data has arrived at the ExcelDestination, it will then be read from memory and saved in the destination file. 

### Example

A simple example to create an excel file that contains 3 rows. 

```C#
public class MySimpleRow
{            
    public int Col1 { get; set; }           
    public string Col2 { get; set; }
}

var source = new MemorySource<MySimpleRow>();
for (int i = 1; i <= 3; i++)
    source.DataAsList.Add(new MySimpleRow() { Col1 = i, Col2 = "Test"+i });

var dest = new ExcelDestination<MySimpleRow>("ExcelDest.xlsx");

source.LinkTo(dest);
Network.Execute(source);
```

Will result in an excel file that contains the following data:

Col1|Col2
-|-----
1|Test1
2|Test2
3|Test3

### Configuration 

#### Suppress headers

If you don't want to create a header in the output, you can set the property `SuppressHeader` to true.  

```C#
var dest = new ExcelDestination<MySimpleRow>("ExcelDest.xlsx");
dest.SuppressHeader = true;
```

#### Sheet names

The property `Sheetname` allows you to define the sheet name of your excel file. 

```C#
var dest = new ExcelDestination<MySimpleRow>("ExcelDest.xlsx");
dest.SheetName = "Test";
```

### Using dynamic objects

The ExcelDestination also works with the `ExpandoObject`. The example above can be rewritten to work with the dynamic object approach:

```C#
var source = new MemorySource();
for (int i = 1; i <= 3; i++) {
    dynamic r = new ExpandoObject();
    r.Col1 = i;
    r.Col2 = "Test" + i;
    source.DataAsList.Add(r);
}

var dest = new ExcelDestination("ExcelDest.xlsx");

source.LinkTo(dest);
Network.Execute(source);
```