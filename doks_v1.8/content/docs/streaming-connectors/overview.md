---
title: "Overview"
description: "This article provides an overview of ETLBox Streaming Connectors, which allow seamless data integration from flat files, REST APIs, and cloud storage (Azure Blob). It introduces the supported formats (CSV, JSON, XML, Excel, Text, Parquet) and highlights the key capabilities of streaming connectors, including real-time processing, resource type flexibility, and seamless data transformations."
lead: "ETLBox provides Streaming Connectors that enable efficient data movement between files, web services, and cloud storage. These connectors allow you to read, process, and write various data formats, supporting both <b>ocal file storage</b> and <b>remote HTTP or cloud-based endpoints</b>."
draft: false
images: []
menu:
  docs:
    parent: "streaming-connectors"
weight: 210
toc: true
chatgpt-review: true
---

## Supported Formats

ETLBox offers streaming connectors for the following formats:

- **CSV** – Structured text with delimiters
- **JSON** – Flexible structured data
- **XML** – Hierarchical structured data
- **Excel** – Spreadsheet-based tabular data
- **Text** – Unstructured or custom-formatted text
- **Parquet** – Optimized columnar storage

Each format has a corresponding source (for reading) and destination (for writing), allowing seamless integration into ETL workflows.

### Installation

Each format has a dedicated connector package that must be included alongside the core ETLBox package. For example, to work with JSON, install the following package:

{{< tabs "nuget-options" >}}
{{< tab "dotnet CLI" >}}
```cmd
dotnet add package ETLBox.Json
```
{{< /tab >}}
{{< tab "Package Manager" >}}
```ps1
PM> NuGet\Install-Package ETLBox.Json -Version 3.7.1
```
{{< smallnote >}}
This command is intended to be used within the Package Manager Console in Visual Studio, as it uses the NuGet module's version of {{< link-ext url="https://docs.microsoft.com/nuget/reference/ps-reference/ps-ref-install-package" text="Install-Package" >}}.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "PackageReference" >}}
```xml
<PackageReference Include="ETLBox.Json" Version="3.7.1" />
```
{{< smallnote >}}
For projects that support {{< link-ext url="https://docs.microsoft.com/nuget/consume-packages/package-references-in-project-files" text="PackageReference" >}}, copy this XML node into the project file to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "Script and Interactive" >}}
```cmd
> #r "nuget: ETLBox.Json, 3.7.1"
```
{{< smallnote >}}
#r directive can be used in F# Interactive and Polyglot Notebooks. Copy this into the interactive tool or source code of the script to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< /tabs >}}


### Connector-Specific Highlights

| Format  | Package | Special Features |
|---------|-------------|-------------------|------------------|
| **CSV**  | `ETLBox.Csv` | Uses CsvHelper, supports delimiter configuration |
| **JSON** | `ETLBox.Json` | Supports nested structures, JSONPath queries |
| **XML**  | `ETBox.Xml` | Handles attributes & elements, namespace support |
| **Excel** | `ETLBox.Excel` | Reads sheets, column mapping, limited row capacity |
| **Text**  | `ETLBox.Text` | Custom parsing via `ParseLineAction` |
| **Parquet** | `ETLBox.Parquet` | Optimized for big data, column-based storage |

{{< callout context="tip" icon="outline/rocket" >}}
If you need to read binary data, consider using [`CustomSource`](/docs/specialized-connectors/custom) and [`CustomDestination`](/docs/specialized-connectors/custom). These connectors allow you to implement custom parsing logic for non-standard data formats.
{{< /callout >}}

## Key Features

### Unified Streaming Model

All connectors share a **common architecture**, meaning you can use the same API structure to read or write different formats.

For example, switching from a local CSV file to a JSON-based web API requires minimal code changes:

```csharp
CsvSource source = new CsvSource("data.csv");
source.ResourceType = ResourceType.File;

// Switching to JSON API
JsonSource apiSource = new JsonSource("https://api.example.com/data");
apiSource.ResourceType = ResourceType.Http;
```

### Flexible Resource Types

Each connector can work with multiple resource types:

- **File-based**: Local storage or network shares (e.g., `"C:/data/file.csv"`)
- **HTTP-based**: REST APIs (GET/POST) (e.g., `"https://api.example.com/data"`)
- **Azure Blob Storage**: Cloud storage integration

#### Example: Reading from Azure Blob Storage

```csharp
CsvSource source = new CsvSource("dataset.csv");
source.ResourceType = ResourceType.AzureBlob;
source.AzureBlobStorage.ConnectionString = "<your_connection_string>";
source.AzureBlobStorage.ContainerName = "data-container";
```

### Streaming & Buffering

- Data is streamed **record-by-record** instead of loading the entire dataset into memory.
- Adjustable **buffer sizes** via `MaxBufferSize` ensures that the system can buffer processed rows for faster processing speed.

### Paging Support for API Requests

For web-based data sources, ETLBox supports pagination:

```csharp
JsonSource<MyRow> source = new JsonSource<MyRow>();
int page = 1;
source.GetNextUri = streamMetaData => $"https://api.example.com/data?page={page++}";
source.HasNextUri = streamMetaData => streamMetaData.ProcessedRows > 0;
```

### Schema Flexibility

ETLBox supports different ways to map data from streaming sources:

#### POCO Mapping (Plain Old C# Objects)**

When reading structured data, you can map it directly to a C# class:

```csharp
public class MyDataRow {
    public int Id { get; set; }
    public string Name { get; set; }
}

CsvSource<MyDataRow> source = new CsvSource<MyDataRow>("data.csv");
```

#### Dynamic Objects (ExpandoObject)**

For unknown schemas, use `ExpandoObject` to handle flexible structures:

```csharp
CsvSource<dynamic> source = new CsvSource<dynamic>("data.csv");
source.RowModificationAction = (row, meta) => {
    dynamic r = row;
    Console.WriteLine($"ID: {r.Id}, Name: {r.Name}");
};
```

#### Attribute-Based Mapping

This example demonstrates how CsvHelper's attribute-based mapping can be used to rename and reorder columns. Since ETLBox uses third-party libraries internally, attribute configurations vary by connector.

```csharp
public class MyDataRow {
    [CsvHelper.Configuration.Attributes.Name("Identifier")]
    public int Id { get; set; }

    [CsvHelper.Configuration.Attributes.Index(1)]
    public string FullName { get; set; }
}

CsvSource<MyDataRow> source = new CsvSource<MyDataRow>("data.csv");
```

