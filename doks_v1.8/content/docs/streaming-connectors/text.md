---
title: "Text"
description: "The ETLBox Text Connector provides full flexibility for reading and writing custom text formats. Whether you're working with log files, reports, or non-standard text structures, it allows you to define exactly how data is parsed and formatted in your ETL pipeline."
lead: "The Text Connector consists of TextSource for reading text line by line and TextDestination for writing structured data as text. Unlike structured formats like CSV or XML, this connector does not impose a predefined schema. Instead, it allows you to fully control how each line is interpreted or written."
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

The ETLBox Core package already provides build-in the `TextSource` and `TextDestination` components for reading and writing unstructured text data. Unlike other structured connectors (such as CSV or JSON), these components offer full flexibility in how text lines are parsed and formatted.

{{< callout context="note" icon="outline/info-circle" title="Shared Features" >}}
Common functionalities such as resource types (files, HTTP, Azure Blob), streaming, and row modifications are shared across all streaming connectors. See [Shared Features](/docs/streaming-connectors/shared) for details.
{{< /callout >}}


## TextSource

`TextSource` reads text line by line and allows you to define how each line is parsed into an object, dynamic data, or an array. It is ideal for working with custom-formatted text files that do not fit standard formats like CSV.

### Reading Text into Objects

Each line is passed to a function that extracts and maps values to properties in a POCO (Plain Old C# Object).

#### Example: Parsing Text into an Object

Given the input file `inputFile.txt`:

```
1--A
2--B
3--C
```

You can parse it into an object as follows:

```csharp
public class MyTextRow
{
    public int Id {get;set;}
    public string Text { get; set; }
}

TextSource<MyTextRow> source = new TextSource<MyTextRow>();
source.Uri = "inputFile.txt";
source.ParseLineAction = (line, progressCount) => {
    return new MyTextRow() {
        Id = int.Parse(line.Substring(0,1)),
        Text = line.Substring(3,1)
    };
};
```

### Reading into Dynamic Objects

Instead of mapping data to a predefined object, you can use `ExpandoObject` for dynamic key-value mapping.

```csharp
TextSource source = new TextSource("inputFile.txt");
source.ParseLineFunc = (line, progressCount) =>
{
    dynamic row = new ExpandoObject();
    row.Id = int.Parse(line.Substring(0, 1));
    row.Text = line.Substring(3, 1);
    return row;
};
```

## TextDestination

`TextDestination` writes structured data to a text file, allowing complete control over how objects are formatted.

### Writing Objects to a Text File

```csharp
public class MyTextRow
{
    public int Id { get; set; }
    public string Text { get; set; }
}

TextDestination<MyTextRow> dest = new TextDestination<MyTextRow>("outputFile.txt");
dest.WriteLineFunc = (row, progressCount) => $"{row.Id}--{row.Text}";
```

This will produce:

```
1--A
2--B
3--C
```

### Writing Dynamic Objects

```csharp
TextDestination dest = new TextDestination("outputFile.txt");
dest.WriteLineFunc = (row, progressCount) =>
{
    dynamic r = row as ExpandoObject;
    return $"{r.Id}  {r.Text}";
};
```

### Adding a Header Row

You can add one or more header lines before writing data:

```csharp
TextDestination<MyTextRow> dest = new TextDestination<MyTextRow>("outputFile.txt");
dest.WriteHeaderFunc = () => "This is the first row" + Environment.NewLine + "Id  Value";
dest.WriteLineFunc = tr => $"{tr.Id}  {tr.Text}";
```

This results in:

```
This is the first row
Id  Value
1  A
2  B
3  C
```

