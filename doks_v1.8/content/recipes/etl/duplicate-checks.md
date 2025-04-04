---
title: "Duplicate Checks"
description: "Different methods to filter duplicates in your source"
lead: "This example shows how different methods to filter out duplicates in your input data."
draft: false
images: []
menu:
  recipes:
    parent: "etl"
weight: 10
toc: true
---

{{< alert text="Please note that the best solution for duplicate detection is probably using the <a href=\"/docs/transformations/distinct/\">Distinct</a> transformation. But to give you some ideas how ETLBox can be used differently (and to showcase some other components), we demonstrate other ways to implement a duplicate detection." >}}

## Source data

We have the following source data in a csv file:

```csv
"ID";"Name"  ;"Text"
"1" ;"ROOT"  ;"Lorem ipsum"
"2" ;"TEST 2";"Lalandia"
"3" ;"TEST 3";"XX"
"3" ;"TEST 5";"XXX"
"1" ;"ROOT"  ;"Lorem ipsum ipsum"
```

We want to write this data into a database table, but we would like to have the ID unique. So we end up with two duplicate records (the last two in the csv file with the ID "3" and "1").

## General setup

The following code example will all share the same data objects and helper methods:

```C#
public SqlConnectionManager Connection => Config.SqlConnection.ConnectionManager("Demo");

public class Poco
{
    public int ID { get; set; }
    public string Name { get; set; }
    [CsvHelper.Configuration.Attributes.Name("Text")]
    public string Value { get; set; }
    public bool IsDuplicate { get; set; }
}

private CsvSource<Poco> CreateDuplicateCsvSource(string fileName) {
    CsvSource<Poco> source = new CsvSource<Poco>(fileName);
    source.Configuration.Delimiter = ";";
    source.Configuration.TrimOptions = CsvHelper.Configuration.TrimOptions.Trim;
    source.Configuration.MissingFieldFound = null;
    return source;
}

private DbDestination<Poco> CreateDestinationTable(string tableName) {
    DropTableTask.DropIfExists(Connection, tableName);
    var dest = new DbDestination<Poco>(Connection, tableName);
    TableDefinition stagingTable = new TableDefinition(tableName, new List<TableColumn>() {
        new TableColumn("PKey", "INT", allowNulls: false, isPrimaryKey:true, isIdentity:true),
        new TableColumn("ID", "INT", allowNulls: false),
        new TableColumn("Value", "NVARCHAR(100)", allowNulls: false),
        new TableColumn("Name", "NVARCHAR(100)", allowNulls: false)
    });
    stagingTable.CreateTable(Connection);
    return dest;
}
```

## Solutions

### Using the Distinct

The easiest and fastest way to detect duplicates is using the Distinct transformation.
```C#
 public void UsingDistinct() {
    CsvSource<Poco> source = CreateDuplicateCsvSource("res/UseCases/DuplicateCheck.csv");

    Distinct<Poco> distinct = new Distinct<Poco>();
    distinct.DistinctColumns = new[] {
        new DistinctColumn() { DistinctPropertyName = "ID" }
    };
    DbDestination<Poco> dest = CreateDestinationTable("dbo.DuplicateCheck");

    source.LinkTo(distinct);
    distinct.LinkTo(dest);
    //distinct.LinkDuplicatesTo(..) allows you to process the duplicates
    Network.Execute(source);
}
```

### Using the RowTransformation

The [RowTransformation](/docs/transformations/row/) is the Swiss army knife for most data flow tasks. So we could use it to implement our own duplicate detection.

```C#
public void DuplicateCheckInRowTrans() {
    CsvSource<Poco> source = CreateDuplicateCsvSource("res/UseCases/DuplicateCheck.csv");
    List<int> IDs = new List<int>(); //at the end of the flow, this list will contain all IDs of your source

    RowTransformation<Poco, Poco> rowTrans = new RowTransformation<Poco, Poco>(input => {
        if (IDs.Contains(input.ID))
            input.IsDuplicate = true;
        else
            IDs.Add(input.ID);
        return input;
    });

    Multicast<Poco> multicast = new Multicast<Poco>();
    DbDestination<Poco> dest = CreateDestinationTable("dbo.DuplicateCheck");
    VoidDestination<Poco> trash = new VoidDestination<Poco>();

    source.LinkTo(rowTrans);
    rowTrans.LinkTo(multicast);
    multicast.LinkTo(dest, input => input.IsDuplicate == false);
    multicast.LinkTo(trash, input => input.IsDuplicate == true);

    Network.Execute(source);
}
```

### Using the BlockTransformation

You can also use the BlockTransformation to wait for all records in the transformation to arrive, and the filter the duplicates out using a simple linq statement.
Please note that this will perform bad with big amounts of data, as the BlockTransformation will store all data in memory first before executing any code.

```C#
public void DuplicateCheckWithBlockTrans() {
    CsvSource<Poco> source = CreateDuplicateCsvSource("res/UseCases/DuplicateCheck.csv");
    List<int> IDs = new List<int>(); //at the end of the flow, this list will contain all IDs of your source

    BlockTransformation<Poco> blockTrans = new BlockTransformation<Poco>(inputList => {
        return inputList.GroupBy(item => item.ID).Select(y => y.First()).ToArray();
    });
    DbDestination<Poco> dest = CreateDestinationTable("dbo.DuplicateCheck");

    source.LinkTo(blockTrans);
    blockTrans.LinkTo(dest);
    Network.Execute(source);
}
```
