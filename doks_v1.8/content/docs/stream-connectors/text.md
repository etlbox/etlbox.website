---
title: "Text"
description: "Details about the TextSource and TextDestination"
lead: "The TextSource and TextDestination allow you to read or write data from/into a text file. The text connectors are part of the ETLBox core package."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 320
toc: true
---

## Text source

The text source let you read data from any text file. It will read every line from the source which can be transformed with a ParseLineAction - this allows you to parse the line into your data object as you like. As you need to define how a line in your file is converted into an object yourself, this source is not as convenient as other sources, but offers the most flexibility when reading text files in a non common format.

{{< alert text="All streaming connectors share a set of common properties. For example, instead of reading or writing from/into a file you can set ResourceType to ResourceType.Http or ResourceType.AzureBlob in order to read or write into a webpoint or an Azure blob. See <a href=\"../streaming\">Shared Functionalites</a> for a list of all shared properties between all streaming connectors."  >}}

Let's go through an example. If your text file look like this:

```
1--A
2--B
3--C
```

You could read this file into a dataflow with:

```C#
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

### Using dynamic objects

Of course the TextSource also works with dynamic objects. The default implementation uses the ExpandoObject.

```C#
TextSource source = new TextSource();
source.Uri = "inputFile.txt";
source.ParseLineAction = (line, progressCount) =>
{
    dynamic row = new ExpandoObject();
    row.Id = int.Parse(line.Substring(0, 1));
    row.Text = line.Substring(3, 1);
    return row;
};
```

### Using arrays

Your input type could also be an array. If you define an array as input type, you can set the size of the array in the property `ArraySize`. Because the TextSource does the array initialization for you, this value will define the max number of elements accessible in the area. The default is 10.

```C#
TextSource<string[]> source = new TextSource<string[]>();
source.Uri = "inputFile.txt";
source.ParseLineAction = (line, progressCount) =>
{
    string[] row = new string[2];
    row[0] = line.Substring(0, 1);
    row[1] = line.Substring(3, 1);
    return row;
};
```

## Text destination

The text destination let you create a text file from your incoming data. It allows you to define how the incoming data object is translated into a row in your text file destination.
The text destination has a function that describe how the incoming row is converted into a string (similar to `ToString()`).

Assuming we have the same input data as above, the following code would convert this data back into a text file.

```C#
public class MyTextRow
{
    public int Id { get; set;}
    public string Text { get; set; }
}

TextDestination<MyTextRow> dest = new TextDestination<MyTextRow>("outputFile.txt");
dest.WriteLineFunc = (row,progressCount) => $"{row.Id}--{ro}.Text}";
```

### Write header information

If you want to add one or multiple header rows at the beginning of your destination file, you can use the `WriteHeaderFunc` function. This function must return a string that is written in the destination before the first row is processed. The header can span across multiple rows if needed.

```C#
TextDestination<MyTextRow> dest = new TextDestination<MyTextRow>("res/TextDestination/InitialWriteTest.txt");
dest.WriteHeaderFunc = () => "This is the first row"+Environment.NewLine+"Id  Value";
dest.WriteLineFunc = tr => $"{tr.Id}  {tr.Text}";
```

### Using dynamic objects

Instead of an object you can use the ExpandoObject with the default implementation.

```C#
TextDestination dest = new TextDestination("outputFile.txt");
    dest.WriteLineFunc =
    (row,progressCount) =>
    {
        dynamic r = row as ExpandoObject;
        return $"{r.Id}  {r.Text}";
    };
```

### Using arrays

This is the code for writing a string array input type into a file.

```C#
TextDestination<string[]> dest = new TextDestination<string[]>("outputFile.txt");
dest.WriteLineFunc = (row,progressCount) => $"{row[0]}--{row[1]}";
```
