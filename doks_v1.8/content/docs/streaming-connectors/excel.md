---
title: "Excel"
description: ""
lead: ""
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 330
toc: true
chatgpt-review: true
---

## Overview

The `ETLBox.Excel` package allows reading from and writing to Excel files within an ETL pipeline. It provides two key components:

- **ExcelSource** – Reads data from `.xls` or `.xlsx` files.
- **ExcelDestination** – Writes data to `.xlsx` files.

This connector is useful for integrating Excel data into workflows but has inherent limitations due to Excel's row and memory constraints. For handling large datasets, consider using CSV files as an alternative.

{{< callout context="note" icon="outline/info-circle" title="Shared Features" >}}
Common functionalities such as resource types (files, HTTP, Azure Blob), streaming, and row modifications are shared across all streaming connectors. See [Shared Features](/docs/streaming-connectors/shared) for details.
{{< /callout >}}

## ExcelSource

`ExcelSource` reads data from Excel sheets and maps it to objects. It supports:

- **POCO-based mapping** – Columns are mapped to object properties.
- **Dynamic objects** – Useful for working with unknown structures.
- **Custom column mapping** – Define how columns are mapped.
- **Reading without headers** – Explicitly define column indexes.

### Basic Usage

If your Excel file contains:

| Col1 | Col2  |
|------|-------|
| 1    | Test1 |
| 2    | Test2 |
| 3    | Test3 |

You can define a corresponding C# class:

```csharp
public class ExcelData {
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

var source = new ExcelSource<ExcelData>("ExcelData.xlsx");
```

### Column Mapping with `ExcelColumn` Attribute

To map Excel columns explicitly, use the `ExcelColumn` attribute:

```csharp
public class ExcelData {
    [ExcelColumn(1)]  // Maps to the second column in Excel
    public int SecondColumn { get; set; }

    [ExcelColumn("Col1")]  // Maps by header name
    public string FirstColumn { get; set; }
}
```

Alternatively, define mappings at runtime:

```csharp
var source = new ExcelSource<ExcelData>("ExcelData.xlsx");
source.ExcelColumns = new[] {
    new ExcelColumn { ColumnIndex = 1, PropertyName = "SecondColumn" },
    new ExcelColumn { ColumnName = "Col1", PropertyName = "FirstColumn" }
};
```

### Reading an Excel File Without Headers

For files without headers:

|       |       |
|-------|-------|
| 1     | Test1 |
| 2     | Test2 |
| 3     | Test3 |

Set `HasNoHeader = true` and explicitly define column indexes:

```csharp
public class ExcelData {
    [ExcelColumn(0)]
    public int Col1 { get; set; }

    [ExcelColumn(1)]
    public string Col2 { get; set; }
}

var source = new ExcelSource<ExcelData>("ExcelData.xlsx") {
    HasNoHeader = true,
    Range = new ExcelRange(1, 1)
};
```

### Ignoring Blank Rows

By default, blank rows are read as empty objects. To skip them:

```csharp
var source = new ExcelSource<ExcelData>("ExcelData.xlsx") {
    IgnoreBlankRows = true
};
```

### Using Dynamic Objects

For situations where the structure is unknown or may change dynamically:

```csharp
var source = new ExcelSource("ExcelData.xlsx");
```

This automatically creates `ExpandoObject` instances.

### Reading Field Headers

To retrieve column headers without processing rows:

```csharp
var source = new ExcelSource<ExcelData>("ExcelData.xlsx");
string[] headers = source.ReadFieldHeaders();
```

### Reading Password-Protected Files
If the Excel file is password-protected, you can provide the password using the `ExcelFilePassword` property:

```csharp
ExcelSource<MyData> source = new ExcelSource<MyData>("ProtectedFile.xlsx");
source.ExcelFilePassword = "yourpassword";
```

This allows `ExcelSource` to open and read encrypted Excel files.

### Case-Sensitive Sheet Names

By default, sheet name matching is **case-insensitive**. To enforce case sensitivity, set `IsCaseSensitiveSheetName` to `true`:

```csharp
ExcelSource<MyData> source = new ExcelSource<MyData>("ExcelData.xlsx");
source.SheetName = "DataSheet";
source.IsCaseSensitiveSheetName = true;
```

If set to `true`, `"datasheet"` and `"DataSheet"` would be treated as different sheet names.

### Selecting Sheets by Index

Instead of specifying the sheet by name, you can use `SheetNumber` to select it by index (starting at **1**):

```csharp
ExcelSource<MyData> source = new ExcelSource<MyData>("ExcelData.xlsx");
source.SheetNumber = 2; // Reads from the second sheet
```

If `SheetName` is set, `SheetNumber` is ignored.

### Ignoring Hidden Sheets

To prevent processing hidden sheets, enable `IgnoreHiddenSheets`:

```csharp
ExcelSource<MyData> source = new ExcelSource<MyData>("ExcelData.xlsx");
source.IgnoreHiddenSheets = true;
```

This ensures that only visible sheets are processed.

## ExcelDestination

`ExcelDestination` writes structured data into Excel files and supports:

- **POCO and dynamic objects** – Define mappings explicitly or infer from data.
- **Header configuration** – Control header behavior.
- **Appending to existing sheets** – Add data instead of overwriting.
- **Custom column mapping** – Define specific mappings.

### Writing Simple Data

To write an Excel file with structured data:

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

### Custom Column Mapping

You can specify column mappings manually:

```csharp
var dest = new ExcelDestination<MySimpleRow>("ExcelDest_Manual.xlsx");
dest.ExcelColumns = new[] {
    new ExcelColumn { ColumnIndex = 0, PropertyName = "Col2" },
    new ExcelColumn { ColumnIndex = 1, ColumnName = "Column1", PropertyName = "Col1" }
};
```

For dynamic objects:

```csharp
var source = new MemorySource();
for (int i = 1; i <= 3; i++) {
    dynamic r = new ExpandoObject();
    r.Col1 = i;
    r.Col2 = "Test" + i;
    r.Clutter = "A"; // Extra property not written to Excel
    source.DataAsList.Add(r);
}

var dest = new ExcelDestination("ExcelDest_Dynamic.xlsx");
dest.ExcelColumns = new[] {
    new ExcelColumn { ColumnIndex = 0, PropertyName = "Col2" },
    new ExcelColumn { ColumnIndex = 1, ColumnName = "Column1", PropertyName = "Col1" }
};

source.LinkTo(dest);
Network.Execute(source);
```

### Suppressing Headers

To write data without column headers:

```csharp
var dest = new ExcelDestination<MySimpleRow>("ExcelDest_NoHeaders.xlsx");
dest.SuppressHeader = true;
```

### Specifying Sheet Names

To write to a specific sheet:

```csharp
var dest = new ExcelDestination<MySimpleRow>("ExcelDest_SheetName.xlsx");
dest.SheetName = "CustomSheet";
```

### Appending Data to Existing Sheets

To add data to an existing sheet without overwriting:

```csharp
var dest = new ExcelDestination<MySimpleRow>("ExcelDest_Append.xlsx");
dest.AppendToFile = true;
dest.SheetName = "ExistingSheet";
```

### Writing Dynamic Objects

To write data without a predefined structure:

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

