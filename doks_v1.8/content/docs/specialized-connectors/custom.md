---
title: "Custom Connector"
description: "ETLBox provides CustomSource and CustomDestination for row-by-row data processing, allowing you to generate records dynamically or handle incoming data with a custom action. For batch processing, CustomBatchSource and CustomBatchDestination enable reading and writing data in groups, improving efficiency when working with large datasets. These connectors are ideal when working with non-standard data sources or when built-in components don’t fit your specific requirements."
lead: "The Custom Connectors in ETLBox allow you to define your own sources and destinations, giving you full control over how data is generated, processed, and stored. Whether handling single records or processing data in batches, these connectors provide the flexibility to integrate custom workflows into your ETL pipeline."
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

These connectors support POCOs, `ExpandoObject`, and arrays and are part of the **ETLBox core package** — no additional dependencies required.

| Connector                  | Processing Type | Description |
|----------------------------|----------------|-------------|
| **CustomSource**           | Row-based      | Generates data dynamically, one record at a time. |
| **CustomBatchSource**      | Batch-based    | Generates data in batches for improved performance. |
| **CustomDestination**      | Row-based      | Processes each incoming record with a custom action. |
| **CustomBatchDestination** | Batch-based    | Handles data in batches, useful for bulk operations. |


### Features

- **Fully customizable** – Define how data is read or stored.
- **Support for row-based and batch-based processing** – Choose between `CustomSource` and `CustomBatchSource` for reading, and `CustomDestination` and `CustomBatchDestination` for writing.
- **Works with any data structure** – Use strongly typed objects (`POCOs`) or `ExpandoObject` for dynamic data.
- **Fits into any ETL pipeline** – Can be combined with transformations, filters, or other destinations like databases and files.

## Custom Source

The `CustomSource<T>` lets you generate data dynamically by defining how records are created and when reading should stop. Instead of relying on a predefined source like a database or file, you can pull data from an API, in-memory collection, or any other source that fits your needs.

A `CustomSource` requires two functions:

- **Read function (`ReadFunc`)** – Defines how each record is created. The function receives a progress count (number of records read so far) and returns the next record.
- **Completion condition (`ReadingCompleted`)** – A condition that determines when no more records should be read.

### Using a List as Source

This example reads values from a list and outputs them as objects (`POCOs`).

```csharp
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

List<string> data = new List<string> { "Test1", "Test2", "Test3" };

var source = new CustomSource<MyRow>();
source.ReadFunc = progressCount => new MyRow
{
    Id = progressCount + 1,
    Value = data[progressCount]
};
source.ReadingCompleted = progressCount => progressCount >= data.Count;

var dest = new MemoryDestination<MyRow>();
source.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id: {row.Id}, Value: {row.Value}");
```

This setup reads data one row at a time, stopping when all items in the list are processed.

### Using Dynamic Objects

If the structure of your data is not fixed, you can use `ExpandoObject` instead of a strongly typed class.

```csharp
var source = new CustomSource();
List<string> data = new List<string> { "Test1", "Test2", "Test3" };

source.ReadFunc = progressCount =>
{
    dynamic result = new ExpandoObject();
    result.Id = progressCount + 1;
    result.Value = data[progressCount];
    return result;
};
source.ReadingCompleted = progressCount => progressCount >= data.Count;

var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id: {row.Id}, Value: {row.Value}");
```

### Reading from a File

A `CustomSource` can also be used to stream data from a file line by line. This example reads a CSV file and processes each row dynamically.

**Input File (`InputData.csv`):**

```csv
Id,Value1,Value2
1,Test1,A
2,Test2,B
3,Test3,C
4,Test4,D
```

**Code:**

```csharp
var source = new CustomSource();
StreamReader stream = null;

source.OnInitialization = () =>
{
    stream = new StreamReader("InputData.csv");
};
source.ReadFunc = _ =>
{
    var line = stream.ReadLine();
    var data = line.Split(',');
    dynamic result = new ExpandoObject();
    result.Id = data[0];
    result.Value = data[1] + data[2];
    return result;
};
source.ReadingCompleted = _ => stream.EndOfStream;

var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Id: {row.Id}, Value: {row.Value}");
```

## Custom Batch Source

The `CustomBatchSource<T>` allows you to read data in batches instead of processing one row at a time. This is useful when working with large datasets where reading multiple records at once improves efficiency.

A `CustomBatchSource` requires two functions:

- **Batch read function (`ReadBatchFunc`)** – Returns a batch of records at a time. The function receives a progress count (number of batches read so far) and returns an `IEnumerable<T>`.
- **Completion condition (`ReadingCompleted`)** – Determines when no more records should be read.

### Reading Data in Batches

This example generates records in batches of three and stops after reading a total of nine records.

```csharp
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
    public int BatchCount { get; set; }
}

var dest = new MemoryDestination<MyRow>();

int batchCount = 1;
var batchSource = new CustomBatchSource<MyRow>();

batchSource.ReadBatchFunc = progressCount =>
{
    var sourceData = new List<MyRow>();
    for (int i = 1; i <= 3; i++)
        sourceData.Add(new MyRow
        {
            Id = i,
            Value = "Test" + i,
            BatchCount = batchCount
        });
    batchCount++;
    return sourceData;
};
batchSource.ReadingCompleted = progressCount => progressCount >= 3;

batchSource.LinkTo(dest);
Network.Execute(batchSource);

foreach (var row in dest.Data)
    Console.WriteLine($"Batch {row.BatchCount}: Id = {row.Id}, Value = {row.Value}");
```

### Using Dynamic Objects

If the structure of your data is dynamic, you can use `ExpandoObject` instead of a strongly typed class.

```csharp
var batchSource = new CustomBatchSource();
int batchCount = 1;

batchSource.ReadBatchFunc = progressCount =>
{
    var batch = new List<ExpandoObject>();
    for (int i = 1; i <= 3; i++)
    {
        dynamic row = new ExpandoObject();
        row.Id = i;
        row.Value = "Test" + i;
        row.BatchCount = batchCount;
        batch.Add(row);
    }
    batchCount++;
    return batch;
};
batchSource.ReadingCompleted = progressCount => progressCount >= 3;

var dest = new MemoryDestination();
batchSource.LinkTo(dest);
Network.Execute(batchSource);

foreach (dynamic row in dest.Data)
    Console.WriteLine($"Batch {row.BatchCount}: Id = {row.Id}, Value = {row.Value}");
```


## Custom Destination

The `CustomDestination<T>` allows you to define a custom action for each incoming record. Instead of storing data in a predefined destination like a database or file, you decide how each record is processed—whether it's writing to an API, logging to a file, or storing data in a custom collection.

A `CustomDestination` requires a **write action (`WriteAction`)**, which is called for each incoming record. This action receives:

- **The current record** (`T`) – The data being processed.
- **A progress count** (`int`) – The number of records processed so far.

### Writing Data to a List

This example collects incoming records in a list and converts them to JSON.

```csharp
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });

List<MyRow> rows = new List<MyRow>();
var dest = new CustomDestination<MyRow>();
dest.WriteAction = (row, progressCount) => rows.Add(row);

source.LinkTo(dest);
Network.Execute(source);

string json = JsonConvert.SerializeObject(rows, Formatting.Indented);
Console.WriteLine(json);
```

### Using Dynamic Objects

If the structure of your data is not fixed, you can use `ExpandoObject` to store records dynamically.

```csharp
var source = new MemorySource();
dynamic row = new ExpandoObject();
row.Id = 1;
row.Value = "Test1";
source.DataAsList.Add(row);

List<ExpandoObject> rows = new List<ExpandoObject>();
var dest = new CustomDestination();
dest.WriteAction = (record, progressCount) => rows.Add(record);

source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic r in rows)
    Console.WriteLine($"Id: {r.Id}, Value: {r.Value}");
```


## Custom Batch Destination

The `CustomBatchDestination<T>` processes incoming data in batches instead of handling one record at a time. This is useful when writing to a database, sending bulk API requests, or processing large amounts of data more efficiently.

A `CustomBatchDestination` requires a **batch write action (`WriteBatchAction`)**, which is called for each batch of records. This action receives:

- **An array of records** (`T[]`) – The batch of data being processed.
- **A progress count** (`int`) – The total number of records processed so far.

### Writing Data in Batches

This example collects records into batches of three and stores them in a dictionary based on their batch number.

```csharp
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

var source = new MemorySource<MyRow>();
for (int i = 0; i < 10; i++)
    source.DataAsList.Add(new MyRow() { Id = i, Value = "Test" + i });

int batchNumber = 1;
var dataByBatchNumber = new Dictionary<int, List<MyRow>>();
var batchDest = new CustomBatchDestination<MyRow>(3, (batch, progressCount) =>
{
    dataByBatchNumber.Add(batchNumber, batch.ToList());
    batchNumber++;
});

source.LinkTo(batchDest);
Network.Execute(source);

foreach (var batch in dataByBatchNumber)
    Console.WriteLine($"Batch {batch.Key} has {batch.Value.Count} records.");
```

### Using Dynamic Objects

If the data structure is dynamic, `ExpandoObject` can be used instead of a strongly typed class.

```csharp
var source = new MemorySource();
for (int i = 0; i < 10; i++)
{
    dynamic row = new ExpandoObject();
    row.Id = i;
    row.Value = "Test" + i;
    source.DataAsList.Add(row);
}

int batchNumber = 1;
var dataByBatchNumber = new Dictionary<int, List<ExpandoObject>>();
var batchDest = new CustomBatchDestination(3, (batch, progressCount) =>
{
    dataByBatchNumber.Add(batchNumber, batch.ToList());
    batchNumber++;
});

source.LinkTo(batchDest);
Network.Execute(source);

foreach (var batch in dataByBatchNumber)
    Console.WriteLine($"Batch {batch.Key} has {batch.Value.Count} records.");
```

