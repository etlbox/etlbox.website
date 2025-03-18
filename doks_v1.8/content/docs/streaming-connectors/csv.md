---
title: "CSV"
description: "This guide walks you through everything you need to know about using the ETLBox CSV Connector. You'll learn how to read CSV data with CsvSource, write it with CsvDestination, and customize how the data is processed."
lead: "The ETLBox CSV Connector makes it easy to read and write CSV files in your ETL pipelines. Whether you’re working with simple files, web-based data, or cloud storage, it gives you full control over delimiters, headers, and formatting using the powerful CsvHelper library."
draft: false
images: []
menu:
  docs:
    parent: "streaming-connectors"
weight: 330
toc: true
chatgpt-review: true
---

## Overview

The `ETLBox.Csv` package provides **CsvSource** and **CsvDestination**, enabling efficient reading and writing of CSV files.

ETLBox uses the {{< link-ext text="CsvHelper library by Josh Close" url="https://joshclose.github.io/CsvHelper/" >}}, which provides advanced CSV handling capabilities. The CsvHelper Configuration API allows customizing import/export settings such as delimiters, escape characters, and parsing behavior.

{{< callout context="note" icon="outline/info-circle" title="Shared Features" >}}
Common functionalities such as resource types (files, HTTP, Azure Blob), streaming, and row modifications are shared across all streaming connectors. See [Shared Features](/docs/streaming-connectors/shared) for details.
{{< /callout >}}

The official CsvHelper documentation provides more information on configuration:

- {{< link-ext text="CsvHelper Configuration API" url="https://joshclose.github.io/CsvHelper/examples/configuration/" >}}
- {{< link-ext text="CsvHelper Attribute-Based Mapping" url="https://joshclose.github.io/CsvHelper/examples/configuration/attributes/" >}}
- {{< link-ext text="CsvHelper Class Maps" url="https://joshclose.github.io/CsvHelper/examples/configuration/class-maps/" >}}

## CsvSource

CsvSource reads data from a CSV file, an HTTP web service, Azure Blob or another supported `ResourceType` and processes it in a streaming manner.

### Example: Basic CSV File Reading

Assume we have the following CSV file (`Demo.csv`):

```csv
Row_Nr;Value
1;Test1
2;Test2
```

The ETLBox code to read this file:

```csharp
CsvSource<MyRow> source = new CsvSource<MyRow>("Demo.csv");
source.Configuration.Delimiter = ";";
source.Configuration.IgnoreBlankLines = true;
```

This reads `Demo.csv`, interprets the delimiter `";"`, and ignores blank lines.

### Dynamic Schema Support

CsvSource can read data into an ExpandoObject, dynamically mapping CSV columns to properties.

```csharp
CsvSource source = new CsvSource("Demo.csv");
RowTransformation<ExpandoObject, MyDataObject> trans =
    new RowTransformation<ExpandoObject, MyDataObject>(
        csvrow =>
        {
            dynamic row = csvrow;
            return new MyDataObject() {
                Id = row.Row_Nr,
                Value = row.Value
            };
        });
```

### Reading into Strongly Typed Objects

You can directly map CSV data to a predefined class:

```csharp
public class MyCsvData {
    public int Row_Nr { get; set; }
    public string Value { get; set; }
}

CsvSource<MyCsvData> source = new CsvSource<MyCsvData>("Demo.csv");
```

If column names differ from property names, you can use attributes or class maps:

```csharp
public class MyCsvData {
    [CsvHelper.Configuration.Attributes.Name("Row_nr")]
    public int Id { get; set; }

    [CsvHelper.Configuration.Attributes.Index(1)]
    public string Text { get; set; }
}

CsvSource<MyCsvData> source = new CsvSource<MyCsvData>("Demo.csv");
```

### Reading CSV Headers

To retrieve column headers before reading data, use `ReadFieldHeaders()`:

```csharp
var source = new CsvSource<MySimpleRow>("file.csv", ResourceType.File);
string[] headers = source.ReadFieldHeaders();
```

This method reads the first row and returns header names as an array.

## CsvDestination

CsvDestination writes structured data into a CSV file.

### Example: Writing Objects to a CSV File

```csharp
public class MyRow {
    [CsvHelper.Configuration.Attributes.Name("Header1")]
    [CsvHelper.Configuration.Attributes.Index(1)]
    public int Col1 { get; set; }

    [CsvHelper.Configuration.Attributes.Name("Header2")]
    [CsvHelper.Configuration.Attributes.Index(2)]
    public string Col2 { get; set; }
}

var source = new MemorySource<MyRow>();
source.Data = new List<MyRow>() {
    new MyRow() { Col1 = 1, Col2="Test1"},
    new MyRow() { Col1 = 2, Col2="Test2"},
    new MyRow() { Col1 = 3, Col2="Test3"},
};
CsvDestination<MyRow> dest = new CsvDestination<MyRow>("./SimpleWithObject.csv");
source.LinkTo(dest);
Network.Execute(source);
```

This generates a CSV file:

```csv
Header1,Header2
1,Test1
2,Test2
3,Test3
```

### Writing ExpandoObjects (Dynamic Data)

If using ExpandoObjects, headers are derived from property names:

```csharp
var source = new MemorySource();
source.Data = new List<ExpandoObject();
dynamic r1 = new ExpandoObject();
r1.Col1 = 1;
r1.Col2 = "Test1";
source.Data.Add(r1);
CsvDestination dest = new CsvDestination("output.csv");
source.LinkTo(dest);
Network.Execute(source);
```

This generates a CSV file:

```csv
Col1,Col2
1,Test1
```

### Writing Data Without Headers

To omit column headers, set `HasHeaderRecord = false`:

```csharp
CsvDestination<MyRow> dest = new CsvDestination<MyRow>("output.csv");
dest.Configuration.HasHeaderRecord = false;
```

This produces a csv file like this:

```csv
1,Test1
2,Test2
3,Test3
```

## Additional Configuration Options

Both `CsvSource` and `CsvDestination` expose CsvHelper’s `CsvConfiguration`, which allows:

- Changing delimiters
- Ignoring blank lines
- Configuring escape characters
- Handling missing fields
- And many other configuration options...

Example:

```csharp
source.Configuration.Delimiter = "|";
source.Configuration.IgnoreQuotes = true;
source.Configuration.TrimOptions = TrimOptions.Trim;
```

For more configuration options, refer to the **CsvHelper API**:

{{< link-ext text="CsvHelper Configuration Documentation" url="https://joshclose.github.io/CsvHelper/examples/configuration/" >}}

