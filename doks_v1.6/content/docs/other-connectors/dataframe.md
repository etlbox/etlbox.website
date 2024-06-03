---
title: "DataFrame"
description: "Details about the DateFrameSource and DataFrameDestination"
lead: "The DataFrameSource and DataFrameDestination allow you to read or write from a Microsoft.Data.Analysis.DataFrame."
draft: false
images: []
menu:
  docs:
    parent: "other-connectors"
weight: 500
toc: true
---

## Microsoft.Analysis.DataFrame

Microsoft.Data.Analysis.DataFrame is a .NET library designed for data manipulation and analysis, similar to the pandas library in Python. It allows users to work with tabular data, supporting various data types and providing functionalities for numerous data operations.

### The Microsoft DataFrame

Microsoft.Data.Analysis.DataFrame offers efficient columnar storage for data and supports multiple data types, including integers, strings, decimals, and dates. It provides a variety of data operations such as filtering, aggregation, and joining, enabling robust data analysis capabilities within the .NET ecosystem.

Here is a simple example demonstrating how to create and manipulate a DataFrame:

```C#
using System;
using Microsoft.Data.Analysis;

// Create columns for the DataFrame
var col1 = new Int32DataFrameColumn("Col1", new int[] { 1, 2, 3 });
var col2 = new StringDataFrameColumn("Col2", new string[] { "A", "B", "C" });
var col3 = new DoubleDataFrameColumn("Col3", new double?[] { 1.1, 2.2, 3.3 });

// Construct the DataFrame using the created columns
var df = new DataFrame(col1, col2, col3);

// Display the DataFrame
Console.WriteLine(df);

// Perform a filter operation to select rows where Col1 values are greater than 1
var filteredDf = df.Filter(df["Col1"].ElementwiseGreaterThan(1));
Console.WriteLine("Filtered DataFrame:");
Console.WriteLine(filteredDf);
```

In this example, three columns are created for integers, strings, and nullable doubles. These columns are then used to construct a DataFrame. The DataFrame is printed to the console to display its contents. A filter operation is performed to select rows where the values in the "Col1" column are greater than 1. The filtered DataFrame is then printed to the console, showing the rows that meet the filter criteria.

The output of the example code is as follows:

```
Col1      Col2      Col3
1         A         1.1
2         B         2.2
3         C         3.3

Filtered DataFrame:
Col1      Col2      Col3
2         B         2.2
3         C         3.3
```

This introduction and example provide a basic understanding of how to use Microsoft.Data.Analysis.DataFrame for fundamental data operations.

## Loading from DataFrames with ETLBox

The `DataFameSource` and `DataFrameDestination` are part of the ETLBox.Analysis nuget package. 

### Using POCOs

You can simply connect the `DataFrameSource` to an existing DataFrame. This allows you to use the underlying data frame as a source for a data flow pipeline. Here is an example how to load the data into a memory object. Please note that this will convert the columnar storage into a classic row-based storage. 

Here is an example using a strongly typed object:

```C#
public class MyRow {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
    public double? Col3 { get; set; }
}

 var col1 = new Int32DataFrameColumn("Col1", new int[] { 1, 2, 3 });
 var col2 = new StringDataFrameColumn("Col2", new string[] { "A", "B", "C" });
 var col3 = new DoubleDataFrameColumn("Col3", new double?[] { 1.1, 2.2, 3.3 });
 var df = new Microsoft.Data.Analysis.DataFrame(col1, col2, col3);
 var filteredDf = df.Filter(df["Col1"].ElementwiseGreaterThan(1));

 var source = new DataFrameSource<MyRow>(filteredDf);
 var dest = new MemoryDestination<MyRow>();
 source.LinkTo(dest);
 Network.Execute(source, dest);

 foreach (var row in dest.Data) {
     Console.WriteLine($"Col1: {row.Col1}, Col2: {row.Col2}, Col3: {row.Col3}");
 }

 /* Output */
 /*
 Col1: 2, Col2: B, Col3: 2.2
 Col1: 3, Col2: C, Col3: 3.3
 */
```

### Adding Column Mapping

When extracting from an existing data frame using a POCO to map your rows into, you can also describe how the column in the data frame should be mapped to the properties in your object. If needed, you can map column with different naming to your properties, or ignore columns that have the same name as the property. 

Here is an example:

```C#
public class MyRowWithCM {
    [DataFrameColumnMap("Key")]
    public int Col1 { get; set; }
    [DataFrameColumnMap("Value")]
    public string Col2 { get; set; }
    [DataFrameColumnMap(Ignore = true)]
    public double? Col3 { get; set; }
}

var col1 = new Int32DataFrameColumn("Key", new int[] { 1, 2, 3 });
var col2 = new StringDataFrameColumn("Value", new string[] { "A", "B", "C" });
var col3 = new DoubleDataFrameColumn("Col3", new double?[] { 1.1, 2.2, 3.3 });
var df = new Microsoft.Data.Analysis.DataFrame(col1, col2, col3);

var source = new DataFrameSource<MyRowWithCM>(df);
var dest = new MemoryDestination<MyRowWithCM>();
source.LinkTo(dest);
Network.Execute(source, dest);

foreach (var row in dest.Data) {
    Console.WriteLine($"Col1: {row.Col1}, Col2: {row.Col2}, Col3: {row.Col3}");
}

/* Output */
/*
Col1: 1, Col2: A, Col3: 
Col1: 2, Col2: B, Col3: 
Col1: 3, Col2: C, Col3: 
*/
```

### Extracting with Dynamic Object

Instead of extract the data from an existing DataFrame using a strongly typed object, we can also utilize a dynamic ExpandoObject for this. The following code demonstrates this. Please note that we now use a slight different approach to initially fill our data frame.

```C#
DataFrameColumn[] columns = {
    new Int32DataFrameColumn("Col1"),
    new StringDataFrameColumn("Col2"),
    new DecimalDataFrameColumn("Col3"),
    new DateTimeDataFrameColumn("Col4")
};
var df = new Microsoft.Data.Analysis.DataFrame(columns);

List<object> row1 = new List<object>() { 1, "Test1", 1.1m, new DateTime(2020, 1, 1) };
List<object> row2 = new List<object>() { 2, "Test2", null, null };
List<object> row3 = new List<object>() { 3, "Test3", 3.3m };
df.Append(row1, inPlace: true);
df.Append(row2, inPlace: true);
df.Append(row3, inPlace: true);

//Act
var source = new DataFrameSource(df);
var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source, dest);

foreach (IDictionary<string, object> row in dest.Data) {
    List<string> cols = new List<string>();
    foreach (var kvp in row)
        cols.Add(kvp.Key + ":" + kvp.Value);
    Console.WriteLine(string.Join(", ", cols));
}

/* Output */
/*
Col1:1, Col2:Test1, Col3:1.1, Col4:01/01/2020 00:00:00
Col1:2, Col2:Test2, Col3:, Col4:
Col1:3, Col2:Test3, Col3:3.3, Col4:
*/
```

## Loading into Data Frames

Instead of extracting data out of a data frame, you can also load data into a data frame using the `DataFrameDestination`. 

### Using POCOs

Here is an example of loading data into a data frame using a strongly typed object. 

```C#
public class MyRow {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
    public double? Col3 { get; set; }
}

var data = new MemorySource<MyRow>();
data.DataAsList.Add(new MyRow() {
    Col1 = 1,
    Col2 = "Test1",
    Col3 = 1.1,
});
data.DataAsList.Add(new MyRow() {
    Col1 = 2,
    Col2 = "Test2",
    Col3 = null,
});
data.DataAsList.Add(new MyRow() {
    Col1 = 3,
    Col2 = "Test3",
    Col3 = 3.3,
});
var dest = new DataFrameDestination<MyRow>();

data.LinkTo(dest);
Network.Execute(dest);

var filteredDf = dest.DataFrame.Filter(
    dest.DataFrame["Col1"].ElementwiseGreaterThan(1)
);
Console.WriteLine(filteredDf.ToString());

/* Output */
/*
Col1      Col2      Col3      
2         Test2     null       
3         Test3     3.3 
*/
```

### Adding Column Mapping

When loading data into a data frame, you can use the DataFrameColumnMap attribute to map the name of the column in the data frame with a property in your object. Alternatively, you can define if a property should not be part of the destination data frame. 

```C#
public class MyRowWithCM {
    [DataFrameColumnMap("Key")]
    public int Col1 { get; set; }
    [DataFrameColumnMap("Value")]
    public string Col2 { get; set; }
    [DataFrameColumnMap(Ignore = true)]
    public double? Col3 { get; set; }
}

var data = new MemorySource<MyRowWithCM>();
data.DataAsList.Add(new MyRowWithCM() {
    Col1 = 1,
    Col2 = "Test1",
    Col3 = 1.1,
});
data.DataAsList.Add(new MyRowWithCM() {
    Col1 = 2,
    Col2 = "Test2",
    Col3 = null,
});
data.DataAsList.Add(new MyRowWithCM() {
    Col1 = 3,
    Col2 = "Test3",
    Col3 = 3.3,
});
var dest = new DataFrameDestination<MyRowWithCM>();

data.LinkTo(dest);
Network.Execute(dest);

Console.WriteLine(dest.DataFrame.ToString());

/* Output */
/*
Key       Value     
1         Test1     
2         Test2     
3         Test3    
*/
```

### Loading using Dynamic Object

The following code will load data into a data frame using a dynamic ExpandoObject in the source component.

```C#
var data = new MemorySource();
dynamic r1 = new ExpandoObject();
r1.Col1 = 1;
r1.Col2 = "Test1";
r1.Col3 = 1.1;
data.DataAsList.Add(r1);
dynamic r2 = new ExpandoObject();
r2.Col1 = 2;
r2.Col2 = "Test2";
r2.Col3 = null;
data.DataAsList.Add(r2);
dynamic r3 = new ExpandoObject();
r3.Col1 = 3;
r3.Col2 = "Test3";
r3.Col3 = 3.3;
data.DataAsList.Add(r3);
         
var dest = new DataFrameDestination();

data.LinkTo(dest);
Network.Execute(dest);

Console.WriteLine(dest.DataFrame.ToString());

/* Output */
/*
Col1      Col2      Col3      
1         Test1     1.1       
2         Test2     null      
3         Test3     3.3   
*/
```