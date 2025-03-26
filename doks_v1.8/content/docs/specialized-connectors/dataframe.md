---
title: "DataFrame Connector"
description: "ETLBox’s DataFrameSource and DataFrameDestination let you easily connect DataFrames to your ETL pipelines. You can pull data from a DataFrame and process it like any other source, or take transformed data and store it back into a DataFrame. "
lead: "ETLBox’s DataFrameSource and DataFrameDestination let you easily connect DataFrames to your ETL pipelines. You can pull data from a DataFrame and process it like any other source, or take transformed data and store it back into a DataFrame."
draft: false
images: []
menu:
  docs:
    parent: "specialized-connectors"
weight: 320
toc: true
chatgpt-review: true
---

## Overview

The **DataFrame Connectors** in ETLBox allow you to use {{< link-ext text="Microsoft.Data.Analysis.DataFrame" url="https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.analysis.dataframe" >}} as a source or destination in your ETL workflows. This makes it easy to work with in-memory, column-based data while benefiting from ETLBox’s structured processing capabilities.

These connectors are part of the **ETLBox.Analysis** package and support different ways of handling data, whether you're working with **POCOs or dynamic objects (`ExpandoObject`)**.

### Features

- **Use DataFrames as sources or destinations** in an ETL pipeline.
- **Convert between row-based and columnar data** for flexible processing.
- **Work with POCOs and dynamic objects** for structured and unstructured data.
- **Efficiently process large datasets** with filtering, transformations, and analytics.

### Microsoft DataFrame

{{< link-ext text="Microsoft.Data.Analysis.DataFrame" url="https://learn.microsoft.com/en-us/dotnet/api/microsoft.data.analysis.dataframe" >}} provides efficient columnar storage for working with structured data in .NET. It supports multiple data types, including integers, strings, decimals, and dates, and includes built-in operations for filtering, aggregation, and joining, making it useful for data analysis and transformation.

#### Example: Creating and Manipulating a DataFrame

```csharp
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

// Filter rows where Col1 values are greater than 1
var filteredDf = df.Filter(df["Col1"].ElementwiseGreaterThan(1));
Console.WriteLine("Filtered DataFrame:");
Console.WriteLine(filteredDf);
```

#### Output

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

This example shows how to create a DataFrame with integer, string, and nullable double columns, display its contents, and apply a filter operation to extract specific rows. This provides a basic understanding of how `DataFrame` can be used for in-memory data manipulation in .NET.

## DataFrame Source

The `DataFrameSource<T>` allows you to use a **Microsoft.Data.Analysis.DataFrame** as a source in your ETL pipeline. It reads data from a **DataFrame** and converts it into a stream of records that can be processed, transformed, or written to another destination.

### Configurable Properties

- **`DataFrame`** – The source DataFrame containing the data to be processed. *(Required)*
- **`DataFrameColumnMapping`** – Allows mapping between DataFrame column names and object properties.

### Using POCOs

This example extracts data from a DataFrame into **strongly typed objects (POCOs)**, mapping each column to a property.

```csharp
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

### Mapping Column Names

If DataFrame column names differ from your class properties, use `DataFrameColumnMap` to define mappings.

```csharp
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

### Using Dynamic Objects

Instead of using a predefined class, you can extract data from a DataFrame into `ExpandoObject`, making it flexible for schemas that may change.

```csharp
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


## DataFrame Destination

The `DataFrameDestination<T>` allows you to write data from an ETL pipeline into a `Microsoft.Data.Analysis.DataFrame`. It converts incoming records into columns stored in a DataFrame, making it useful for in-memory data processing and analytics.

### Configurable Properties

- **`DataFrame`** – The destination DataFrame where incoming data is stored. *(Read-only, populated during execution)*
- **`Culture`** – Defines the culture settings used for parsing and formatting values. *(Defaults to `CultureInfo.CurrentCulture`)*
- **`IgnoreUnsupportedTypes`** – If `true`, unsupported data types will be ignored instead of throwing an error. *(Defaults to `false`)*
- **`DataFrameColumnMapping`** – Allows mapping between object properties and DataFrame column names.

### Writing POCOs to a DataFrame

This example loads **strongly typed objects (POCOs)** into a DataFrame.

```csharp
public class MyRow {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
    public double? Col3 { get; set; }
}

var data = new MemorySource<MyRow>();
data.DataAsList.Add(new MyRow() { Col1 = 1, Col2 = "Test1", Col3 = 1.1 });
data.DataAsList.Add(new MyRow() { Col1 = 2, Col2 = "Test2", Col3 = null });
data.DataAsList.Add(new MyRow() { Col1 = 3, Col2 = "Test3", Col3 = 3.3 });
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

### Mapping Column Names

If the class property names differ from the desired DataFrame column names, you can define **custom column mappings**.

```csharp
public class MyRowWithCM {
    [DataFrameColumnMap("Key")]
    public int Col1 { get; set; }
    [DataFrameColumnMap("Value")]
    public string Col2 { get; set; }
    [DataFrameColumnMap(Ignore = true)]
    public double? Col3 { get; set; }
}

var data = new MemorySource<MyRowWithCM>();
data.DataAsList.Add(new MyRowWithCM() { Col1 = 1, Col2 = "Test1", Col3 = 1.1 });
data.DataAsList.Add(new MyRowWithCM() { Col1 = 2, Col2 = "Test2", Col3 = null });
data.DataAsList.Add(new MyRowWithCM() { Col1 = 3, Col2 = "Test3", Col3 = 3.3 });
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

### Writing Dynamic Objects

Instead of a predefined class, you can send **dynamic objects (`ExpandoObject`)** to a DataFrame for maximum flexibility.

```csharp
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

var dest = new DataFrameDestination();

data.LinkTo(dest);
Network.Execute(dest);

Console.WriteLine(dest.DataFrame.ToString());

/* Output */
/*
Col1      Col2      Col3
1         Test1     1.1
2         Test2     null
*/
```
