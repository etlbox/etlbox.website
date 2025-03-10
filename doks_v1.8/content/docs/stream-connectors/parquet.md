---
title: "Parquet"
description: "Details about the ParquetSource and ParquetDestination"
lead: "The parquet connector pack allow you to read or write data from or into parquet files."
draft: false
images: []
menu:
  docs:
    parent: "stream-connectors"
weight: 320
toc: true
---

## Parquet source

The {{< link-ext url="https://nuget.org/packages/ETLBox.Parquet" text="ETLBox.Parquet" >}} package include the `ParquetSource` and `ParquetDestination` classes.

The csv connector package is based on the {{< link-ext text="Parquet .NET library created by Elastacloud" url="https://github.com/elastacloud/parquet-dotnet" >}}.
The parquet source let you read data from a parquet file.

Parquet is an open source file format, which stores data in a columnar storage format (in opposite to e.g. csv files, where data is stored row based.) While storing data in a column based manner has many advantages regarding efficiency and storage size, parquet data needs to be read as rows from the files in order to work with ETLBox.
The `ParquetSource` will read all data from the parquet file as rows - starting with the first row until the end of the file (or a defined limit). Internally, the columnar format is translated into rows while reading data.

{{< alert text="All streaming connectors share a set of common properties. For example, instead of reading or writing from/into a file you can set ResourceType to ResourceType.Http or ResourceType.AzureBlob in order to read or write into a web endpoint or an Azure blob. See <a href=\"../streaming\">shared functionalities</a> for a list of all shared properties between all streaming connectors."  >}}

### Example

Let's assume we have a parquet file "Demo.parquet" that has 2 columns, named `Col1` and `Col2`. Here is a simple example to read data all data from this parquet file and write it into an in-memory list.

```C#
public class MyRow
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

ParquetSource<MyRow> source = new ParquetSource<MyRow>();
source.Uri = "Demo.parquet";
MemoryDestination<MyRow> dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);
//All rows available in dest.Data
```

#### Mapping different column names

If you want to map the defined column names in the parquet file to a property with a different name, you can use the `ParquetColumn` attribute.
The following object definition would work with the same file as in the previous example, but would map `Col1` from the file with the property `Id` and `Col2` with the property `Value`.

```C#
public class MyRow
{
    [ParquetColumn(ColumnName ="Col1")]
    public int Id { get; set; }

    [ParquetColumn(ColumnName = "Col2")]
    public string Value { get; set; }
}
```

### Using dynamic objects

If you don't want to use a strongly typed object, you can also use the dynamic version which uses the ExpandoObject to create objects on the fly.

```C#
ParquetSource source = new ParquetSource();
source.Uri = "Demo.parquet";
MemoryDestination dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);
//All rows available in dest.Data, stored in a list of ExpandoObjects
```

#### Attributes and dynamic objects

You can also use the `ParquetColumn` attribute when working with dynamic objects. This code would give you the same mapping as in the example before with the strongly typed object:

```C#
ParquetSource<MyRow> source = new ParquetSource<MyRow>();
source.Uri = "Demo.parquet";
source.ParquetColumns = new[] {
    new ParquetColumn() { PropertyName = "Id", ColumnName = "Col1"},
    new ParquetColumn() { PropertyName = "Value", ColumnName = "Col2"},
};
MemoryDestination dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);
```

## Parquet Destination

ETLBox makes writing into a parquet file very simple. The `ParquetDestinatinon` will convert the incoming rows from your source into a columnar format and then store the data into the file. Internally, the parquet file specifies row groups for a set of column - by default, ETLBox will create a new RowGroup foreach batch of 1000 records. This value can be changed by setting the `BatchSize` property.

### Example

```C#
public class MyRow
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Col1 = 1, Col2 = "Test1" });
source.DataAsList.Add(new MyRow() { Col1 = 2, Col2 = null });
source.DataAsList.Add(new MyRow() { Col1 = 3, Col2 = "Test3"});

var dest = new ParquetDestination<MyRow>("./SimpleWithObject.parquet");
source.LinkTo(dest);

Network.Execute(source);
```

#### Mapping different column names

Like in the ParquetSource, the `ParquetColumn` attribute can be used to store the columns with a different name in the file. For example, the following code snipped would store the data from the properties `Id` and `Value` in the file with the column names `Col1` and `Col2`. You can set a `WriteOrder` in the attribute if you want to specify a particular order when storing the columns. In this example the column `Col2` would be the first column in the parquet file.

```C#
public class MyOrderedRow
{
    [ParquetColumn(ColumnName = "Col1", WriteOrder =2)]
    public int Id { get; set; }
    public string Clutter { get; set; }
    [ParquetColumn(ColumnName = "Col2", WriteOrder = 1)]
    public string Value { get; set; }
}

var source = new MemorySource<MyOrderedRow>();
source.DataAsList.Add(new MyOrderedRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyOrderedRow() { Id = 2, Value = null });
source.DataAsList.Add(new MyOrderedRow() { Id = 3, Value = "Test3" });

var dest = new ParquetDestination<MyOrderedRow>("./AttributesWithOrder.parquet");
source.LinkTo(dest);

Network.Execute(source);
```

### Using dynamic objects

Of course you can also make use of the dynamic ExpandoObject when storing data with the ParquetDestination.

```C#
var source = new MemorySource();
dynamic r1 = new ExpandoObject();
r1.Col1 = 1; r1.Col2 = "Test1";
source.DataAsList.Add(r1);
dynamic r2 = new ExpandoObject();
r2.Col1 = 2; r2.Col2 = null;
source.DataAsList.Add(r2);

var dest = new ParquetDestination("./SimpleWithDynamic.parquet");
source.LinkTo(dest);

Network.Execute(source);
```

#### Manual attributes for dynamic objects

The attribute columns can also be assigned manually (either for dynamic or strongly typed objects)

```C#
var source = new MemorySource();
dynamic r1 = new ExpandoObject();
r1.Id = 1; r1.Value= "Test1";
source.DataAsList.Add(r1);

var dest = new ParquetDestination("./ManualAttributesOnDynamicWithOrder.parquet");
dest.ParquetColumns = new[] {
    new ParquetColumn() { PropertyName = "Id", ColumnName = "Col1", WriteOrder = 2},
    new ParquetColumn() { PropertyName = "Value", ColumnName = "Col2"}
};
source.LinkTo(dest);
Network.Execute(source);
```
