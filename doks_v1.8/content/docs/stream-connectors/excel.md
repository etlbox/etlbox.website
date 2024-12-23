---
title: "Excel"
description: "Details about the ExcelSource"
lead: "The Excel connector in ETLBox makes it easy to read from or write to Excel files. Use ExcelSource to pull data into your workflows or ExcelDestination to create and update Excel files. With flexible options for headers, column mapping, and dynamic objects, it simplifies working with Excel in ETL processes."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 430
toc: true
---


## Overview

The `ETLBox.Excel` library enables reading data from Excel files into a data flow (`ExcelSource`) or writing data to Excel files (`ExcelDestination`). It is ideal for workflows that require Excel integration but is limited in performance and maximum row count due to Excel's constraints. For large datasets, consider using the `CsvDestination` to create CSV files, which Excel can also open.

{{< alert text="All streaming connectors share a set of common properties. For example, you can set <code>ResourceType</code> to <code>ResourceType.Http</code> or <code>ResourceType.AzureBlob</code> to read from or write to a web endpoint or Azure Blob Storage. See <a href=\"../streaming\">Shared Functionalites</a> for details." >}}

The Excel connector provides the following components:

#### ExcelSource

`ExcelSource` reads data from `.xls` or `.xlsx` files. It allows specifying sheet names and ranges to restrict the scope of data processing. By default, it assumes the first row contains headers, which are matched with the property names of the target object. However, you can override this behavior using attributes or runtime configurations. It also supports dynamic objects for scenarios where the structure of data is not predefined. Blank rows can be ignored, and you can even process files without headers by explicitly specifying column mappings.

#### ExcelDestination

`ExcelDestination` writes data into `.xlsx` files, providing flexibility to configure headers, specify target sheet names, and append data to existing files. You can customize how object properties map to Excel columns and use dynamic objects for flexibility. It is important to note that ExcelDestination stores all data in memory before writing it to the file, which can impact performance for large datasets.

## ExcelSource

`ExcelSource` reads data from an Excel file and maps it to objects. By default, it reads from the first sheet, includes a header row, and maps headers to object property names. However, you can adjust this behavior to suit your requirements, including custom column mappings, dynamic object processing, and reading files without headers.

### Basic Usage

For an Excel file like this:

| Col1 | Col2  |
|------|-------|
| 1    | Test1 |
| 2    | Test2 |
| 3    | Test3 |

Define a POCO and use `ExcelSource` to load the data:

```csharp
public class ExcelData {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

ExcelSource<ExcelData> source =
    new ExcelSource<ExcelData>("ExcelDataFile.xlsx");
```

### Using the `ExcelColumn` Attribute

You can define mappings explicitly using the `ExcelColumn` attribute:

```csharp
public class ExcelData {
    [ExcelColumn(1)] // Second column in Excel
    public int SecondColumn { get; set; }
    [ExcelColumn("Col1")] // Header name in Excel
    public string FirstColumn { get; set; }
}
```

Alternatively, use the `ExcelColumns` property for runtime configuration:

```csharp
ExcelSource<ExcelData> source = new ExcelSource<ExcelData>("ExcelDataFile.xlsx");
source.ExcelColumns = new[] {
    new ExcelColumn { ColumnIndex = 1, PropertyName = "SecondColumn" },
    new ExcelColumn { ColumnName = "Col1", PropertyName = "FirstColumn" }
};
```

### Reading Excel Without Headers

For files without headers:

|       |       |
|-------|-------|
| 1     | Test1 |
| 2     | Test2 |
| 3     | Test3 |

Set `HasNoHeader` to `true` and define column mappings explicitly:

```csharp
public class ExcelData {
    [ExcelColumn(0)]
    public int Col1 { get; set; }
    [ExcelColumn(1)]
    public string Col2 { get; set; }
}

ExcelSource<ExcelData> source =
    new ExcelSource<ExcelData>("ExcelDataFile.xlsx") {
        HasNoHeader = true,
        Range = new ExcelRange(1, 1)
};
```

### Ignoring Empty Rows

To skip blank rows when reading from an Excel file, set the `IgnoreBlankRows` property to true. For example:

```csharp
Copy code
ExcelSource<ExcelData> source =
    new ExcelSource<ExcelData>("ExcelDataFile.xlsx") {
        IgnoreBlankRows = true
    };
```

This ensures that rows with completely empty cells are excluded from processing.

### Using Dynamic Objects

For scenarios where data structure is unknown or dynamic:

```csharp
ExcelSource source = new ExcelSource("ExcelDataFile.xlsx");
```

This creates `ExpandoObject` instances, with properties inferred from headers or set dynamically.

### Reading Field Headers

To read headers without processing rows:

```csharp
ExcelSource<MySimpleRow> source = new ExcelSource<MySimpleRow>("ExcelDataFile.xlsx");
string[] headers = source.ReadFieldHeaders();
```

## ExcelDestination

`ExcelDestination` writes data to `.xlsx` files and supports a range of configuration options. Headers can be suppressed, specific sheet names can be defined, and data can be appended to existing files. By default, it writes headers based on the property names of the input object.

### Writing Simple Data

Create an Excel file with 3 rows:

```csharp
public class MySimpleRow {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

var source = new MemorySource<MySimpleRow>();
for (int i = 1; i <= 3; i++)
    source.DataAsList.Add(new MySimpleRow { Col1 = i, Col2 = "Test" + i });

var dest = new ExcelDestination<MySimpleRow>("ExcelDest.xlsx");
source.LinkTo(dest);
Network.Execute(source);
```

This generates:

| Col1 | Col2  |
|------|-------|
| 1    | Test1 |
| 2    | Test2 |
| 3    | Test3 |

### Using the ExcelColumn Attribute

The `ExcelDestination` can utilize the `ExcelColumn` attribute to map object properties to specific columns in the Excel file. For dynamic objects, you can use the `ExcelColumns` property. For example:

```csharp
public class MySimpleRow {
    [ExcelColumn(1, "Header2")]
    public string Col2 { get; set; }
    [ExcelColumn(2, "Header1")]
    public int Col1 { get; set; }
    public string Clutter { get; set; }
}

var source = new MemorySource<MySimpleRow>();
for (int i = 1; i <= 3; i++)
    source.DataAsList.Add(new MySimpleRow { Col1 = i, Col2 = "Test" + i, Clutter = "XXX" });

var dest = new ExcelDestination<MySimpleRow>("ExcelDest_WithAttributes.xlsx");
source.LinkTo(dest);
Network.Execute(source);
```

This generates:

| Header2 | Header1|
|---------|-------|
| Test1   | 1     |
| Test2   | 2     |
| Test3   | 3     |

{{< alert text="Note that when using the <code>ExcelColumn</code> attribute for the <code>ExcelDestination</code>, all <code>ColumnIndex</code> values must be set. If any <code>ExcelColumn</code> lacks a <code>ColumnIndex</code>, an exception will be thrown. If you want partial column index definitions or need to reorder columns dynamically, use the <a href=\"../../transformations/column-transformation\">ColumnTransformation</a> for more flexibility." >}}


For dynamic objects, configure the `ExcelColumns` property directly:

```csharp
var source = new MemorySource();
for (int i = 1; i <= 3; i++) {
    dynamic r = new ExpandoObject();
    r.Col1 = i;
    r.Col2 = "Test" + i;
    r.Clutter = "XXX"
    source.DataAsList.Add(r);
}

var dest = new ExcelDestination("ExcelDest_Dynamic.xlsx") {
    ExcelColumns = new[] {
        new ExcelColumn { ColumnIndex = 2, ColumnName = "Header1", PropertyName = "Col1" },
        new ExcelColumn { ColumnIndex = 1, ColumnName = "Header2", PropertyName = "Col2" }
    }
};
source.LinkTo(dest);
Network.Execute(source);
```

#### Using ColumnTransformation for Partial Index Definitions

If you need to define only some `ColumnIndex` values or reorder columns, use the [`ColumnTransformation`](../../transformations/column-transformation/) for added flexibility. This allows partial definitions without triggering exceptions, as ColumnTransformation handles the remaining logic. For example:

```csharp
var source = new MemorySource<MySimpleRow>();

var transformation = new ColumnTransformation<MySimpleRow>();
transformation.ReorderColumns(new[] {
    new ReorderColumn() { PropertyName = "Col1", Index = 2 },
    new ReorderColumn() { PropertyName = "Col2", Index = 1 }
});
transformation.RenameColumns(new[] {
    new RenameColumn() { CurrentName = "Col1", NewName = "Header1" },
    new RenameColumn() { CurrentName = "Col2", NewName = "Header2" }
});

var dest = new ExcelDestination("ExcelDest_WithTransformation.xlsx") {
    ColumnTransformation = transformation
};

source.LinkTo(transformation);
transformation.LinkTo(dest);
Network.Execute(source);
```

Please note that the `ColumnTransformation` converts the incoming POCO into a dynamic object.

### Configuration Options

#### Suppress Headers

To suppress headers:

```csharp
var dest = new ExcelDestination<MySimpleRow>("ExcelDest_NoHeaders.xlsx");
dest.SuppressHeader = true;
```

#### Specify Sheet Names

Define the sheet name:

```csharp
var dest = new ExcelDestination<MySimpleRow>("ExcelDest_SheetName.xlsx");
dest.SheetName = "CustomSheet";
```

#### Append Data to Existing Files

Append data to a specified sheet:

```csharp
var dest = new ExcelDestination<MySimpleRow>("ExcelDest_Append.xlsx");
dest.AppendToFile = true;
dest.SheetName = "ExistingSheet";
```

### Using Dynamic Objects

Dynamic object usage mirrors `ExcelSource`:

```csharp
var source = new MemorySource();
for (int i = 1; i <= 3; i++) {
    dynamic r = new ExpandoObject();
    r.Col1 = i;
    r.Col2 = "Test" + i;
    source.DataAsList.Add(r);
}

var dest = new ExcelDestination("ExcelDest_Dynamic.xlsx");
source.LinkTo(dest);
Network.Execute(source);
```
