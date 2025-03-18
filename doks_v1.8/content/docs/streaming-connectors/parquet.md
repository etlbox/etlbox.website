---
title: "Parquet"
description: "The ETLBox Parquet Connector simplifies working with Parquet files by converting their columnar format into easily processed rows. It supports both structured POCOs and flexible dynamic objects, making it ideal for handling large datasets from files, web services, or cloud storage."
lead: "The ETLBox Parquet Connector makes it easy to read and write Parquet files in your ETL pipelines. It works with both strongly typed objects and dynamic data, so you can flexibly integrate columnar storage into your workflows. Whether you're handling data from local files, web services, or cloud storage, this connector helps you process large datasets efficiently."
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

The `ETLBox.Parquet` package provides the `ParquetSource` and `ParquetDestination` components for reading and writing Parquet files in ETL workflows. Parquet is a **columnar storage format** optimized for efficient data compression and retrieval, making it well-suited for handling large datasets.

ETLBox integrates with the {{< link-ext text="Parquet.NET library" url="https://aloneguid.github.io/parquet-dotnet/starter-topic.html" >}} to process Parquet files in a row-based manner, allowing easy interaction with ETL components.

{{< callout context="note" icon="outline/info-circle" title="Shared Features" >}}
Common functionalities such as resource types (files, HTTP, Azure Blob), streaming, and row modifications are shared across all streaming connectors. See [Shared Features](/docs/streaming-connectors/shared) for details.
{{< /callout >}}


## ParquetSource

`ParquetSource` reads data from Parquet files and converts it into structured rows. Internally, the columnar format is translated into rows to integrate with ETLBox’s row-based processing.

### Reading Parquet as POCOs

You can deserialize Parquet files into strongly typed objects (POCOs).

#### Example: Reading a Parquet File

If `Demo.parquet` contains two columns: `Col1` (integer) and `Col2` (string), the following code reads the file into an in-memory list:

```csharp
public class MyRow
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

ParquetSource<MyRow> source = new ParquetSource<MyRow>() {
    Uri = "demo.parquet"
};
MemoryDestination<MyRow> dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);
// All rows are available in dest.Data
```

### Mapping Columns with Attributes

If column names in the Parquet file differ from your POCO property names, use the `ParquetColumn` attribute:

```csharp
public class MyRow
{
    [ParquetColumn(ColumnName = "Col1")]
    public int Id { get; set; }

    [ParquetColumn(ColumnName = "Col2")]
    public string Value { get; set; }
}
```

This maps **`Col1` → `Id`** and **`Col2` → `Value`**, ensuring correct column-to-property mapping.

### Using Dynamic Objects

If you do not want to define a fixed object structure, `ParquetSource` supports `ExpandoObject` for dynamic processing.

```csharp
ParquetSource source = new ParquetSource() {
    Uri = "demo.parquet"
};
MemoryDestination dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);
// Data is stored as a list of ExpandoObjects
```

#### Custom Column Mapping for Dynamic Objects

You can manually specify column mappings when using dynamic objects:

```csharp
ParquetSource source = new ParquetSource("demo.parquet");
source.ParquetColumns = new[]
{
    new ParquetColumn { PropertyName = "Id", ColumnName = "Col1" },
    new ParquetColumn { PropertyName = "Value", ColumnName = "Col2" }
};

MemoryDestination dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);
```

This ensures that the `Id` and `Value` properties correctly correspond to the columns in the Parquet file.

## ParquetDestination

`ParquetDestination` writes structured data into Parquet files, converting rows into a columnar format. By default, row groups are created for every 1000 records, but this can be adjusted using the `BatchSize` property.

### Writing Data to a Parquet File

```csharp
public class MyRow
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow { Col1 = 1, Col2 = "Test1" });
source.DataAsList.Add(new MyRow { Col1 = 2, Col2 = null });
source.DataAsList.Add(new MyRow { Col1 = 3, Col2 = "Test3" });

var dest = new ParquetDestination<MyRow>("output.parquet");
source.LinkTo(dest);
Network.Execute(source);
```

### Mapping Columns for Writing

You can change column names and control the order of columns in the Parquet file using the `ParquetColumn` attribute:

```csharp
public class MyOrderedRow
{
    [ParquetColumn(ColumnName = "Col1", WriteOrder = 2)]
    public int Id { get; set; }

    public string Clutter { get; set; }

    [ParquetColumn(ColumnName = "Col2", WriteOrder = 1)]
    public string Value { get; set; }
}

var source = new MemorySource<MyOrderedRow>();
source.DataAsList.Add(new MyOrderedRow { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyOrderedRow { Id = 2, Value = null });
source.DataAsList.Add(new MyOrderedRow { Id = 3, Value = "Test3" });

var dest = new ParquetDestination<MyOrderedRow>("OrderedOutput.parquet");
source.LinkTo(dest);
Network.Execute(source);
```

This stores `Col2` _before_ `Col1` in the Parquet file.

### Writing Dynamic Objects

Instead of using a fixed object structure, you can store ExpandoObjects in Parquet:

```csharp
var source = new MemorySource();
dynamic r1 = new ExpandoObject();
r1.Col1 = 1;
r1.Col2 = "Test1";
source.DataAsList.Add(r1);

dynamic r2 = new ExpandoObject();
r2.Col1 = 2;
r2.Col2 = null;
source.DataAsList.Add(r2);

var dest = new ParquetDestination("dynamicOutput.parquet");
source.LinkTo(dest);
Network.Execute(source);
```

### Defining Column Attributes Manually

For dynamic objects, you can manually set column attributes:

```csharp
var source = new MemorySource();
dynamic r1 = new ExpandoObject();
r1.Id = 1;
r1.Value = "Test1";
source.DataAsList.Add(r1);

var dest = new ParquetDestination("CustomAttributes.parquet");
dest.ParquetColumns = new[]
{
    new ParquetColumn { PropertyName = "Id", ColumnName = "Col1", WriteOrder = 2 },
    new ParquetColumn { PropertyName = "Value", ColumnName = "Col2" }
};
source.LinkTo(dest);
Network.Execute(source);
```

This explicitly sets column names and write order for dynamic objects.


