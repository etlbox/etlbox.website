---
title: "Column Transformation"
description: "C# recipes for ColumnTransformation in ETLBox. Rename, reorder, remove, or add columns with examples for .NET data flow mappings."
lead: "This article contains example code that shows the usage of the ColumnTransformation component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2083
toc: true
---

## Renaming Properties to Upper Case

This example demonstrates how to rename properties by converting their names to uppercase.

```C#
DropTableTask.DropIfExists(SqlConnection, "RenameExampleDest");
CreateTableTask.CreateIfNotExists(SqlConnection,
    new TableDefinition("RenameExampleDest") {
        Columns = new List<TableColumn>() {
                new TableColumn("COL1", "VARCHAR(100)"),
                new TableColumn("COL2", "VARCHAR(100)")
            }
    });

var source = new DbSource(SqlConnection);
source.Sql = "SELECT 'A' as col1, 'Test' as col2";
var dest = new DbDestination(SqlConnection, "RenameExampleDest");
var upperCaseRename = new ColumnTransformation();
upperCaseRename.RenameFunc = name => name.ToUpper();
source.LinkTo(upperCaseRename).LinkTo(dest);
Network.Execute(source);
```

## Reorganizing with Attributes

This example shows how to use the attributes `RenameColumn`, `RemoveColumn` and `ReorderColumn`.

```C#
 public class MyInputRow {
     [RenameColumn("NewCol1")]
     [ReorderColumn(2)]
     public int Col1 { get; set; }
     [RenameColumn("NewCol2")]
     [ReorderColumn(1)]
     public string Col2 { get; set; }
     [RemoveColumn]
     public object Col3 { get; set; }
 }


var source = new MemorySource<MyInputRow>();
var input = new MyInputRow() {
    Col1 = 1,
    Col2 = "Test",
};
source.DataAsList.Add(input);

var map = new ColumnTransformation<MyInputRow>();
var dest = new MemoryDestination();

source.LinkTo<ExpandoObject>(map).LinkTo(dest);
Network.Execute(source);

dynamic output = dest.Data.First();
IDictionary<string, object> outputDict = dest.Data.First();

Console.WriteLine("Does property Col1 still exists?" + outputDict.ContainsKey("Col1"));
Console.WriteLine("Does property Col2 still exists?" + outputDict.ContainsKey("Col2"));
Console.WriteLine("Does property Col3 still exists?" + outputDict.ContainsKey("Col3"));
Console.WriteLine("Does property NewCol1 now exists?" + outputDict.ContainsKey("NewCol1"));
Console.WriteLine("Does property NewCol2 still exists?" + outputDict.ContainsKey("NewCol2"));
Console.WriteLine("NewCol1: " + output.NewCol1 + " NewCol2: " + output.NewCol2);
Console.WriteLine("Order of keys in output");
for (int i = 1; i <= outputDict.Keys.Count; i++)
    Console.WriteLine(i + ":" + outputDict.ElementAt(i - 1).Key);
//Output
/*
    Does property Col1 still exists?False
    Does property Col2 still exists?False
    Does property Col3 still exists?False
    Does property NewCol1 now exists?True
    Does property NewCol2 still exists?True
    NewCol1: 1 NewCol2: Test
    Order of keys in output
    1:NewCol2
    2:NewCol1
*/
```

## Adding Constant Columns with Attributes

`[AddColumn]` is placed on the class. Each attribute appends one property with a constant value after the existing columns.

```C#
[AddColumn("Source", "ETL")]
[AddColumn("Active", true)]
public class MyInputRow {
    public int Id { get; set; }
    public string Name { get; set; }
}

var source = new MemorySource<MyInputRow>();
source.DataAsList.Add(new MyInputRow { Id = 1, Name = "A" });

var map = new ColumnTransformation<MyInputRow>();
var dest = new MemoryDestination();

source.LinkTo<ExpandoObject>(map).LinkTo(dest);
Network.Execute(source);

dynamic output = dest.Data.First();

Console.WriteLine("Id: " + output.Id);
Console.WriteLine("Name: " + output.Name);
Console.WriteLine("Source: " + output.Source);
Console.WriteLine("Active: " + output.Active);
//Output
/*
    Id: 1
    Name: A
    Source: ETL
    Active: True
*/
```

## Adding Columns from a List

Pass `AddColumn` objects to `AddColumns` to append properties in that order. `ValueFunc` calculates the value from the current row. When `AddColumns` is set, `[AddColumn]` attributes on the class are ignored.

```C#
var source = new MemorySource();
dynamic input = new ExpandoObject();
input.Id = 3;
input.Name = "B";
source.DataAsList.Add(input);

var map = new ColumnTransformation();
map.AddColumns = new List<AddColumn> {
    new AddColumn("FullName") {
        ValueFunc = row => row.Id.ToString() + "-" + row.Name
    },
    new AddColumn("Source", "FILE")
};
var dest = new MemoryDestination();

source.LinkTo(map).LinkTo(dest);
Network.Execute(source);

dynamic output = dest.Data.First();
IDictionary<string, object> outputDict = dest.Data.First();

Console.WriteLine("FullName: " + output.FullName);
Console.WriteLine("Source: " + output.Source);
Console.WriteLine("Order of keys in output");
for (int i = 1; i <= outputDict.Keys.Count; i++)
    Console.WriteLine(i + ":" + outputDict.ElementAt(i - 1).Key);
//Output
/*
    FullName: 3-B
    Source: FILE
    Order of keys in output
    1:Id
    2:Name
    3:FullName
    4:Source
*/
```

## Adding a Column per Row with AddFunc

`AddFunc` is called with the original input row and returns the extra property. The name and the value can differ from row to row. Return `null` to leave a row unchanged.

```C#
public class MyInputRow {
    public int Id { get; set; }
    public string Name { get; set; }
}

var source = new MemorySource<MyInputRow>();
source.DataAsList.Add(new MyInputRow { Id = 1, Name = "A" });
source.DataAsList.Add(new MyInputRow { Id = 2, Name = "B" });
source.DataAsList.Add(new MyInputRow { Id = 3, Name = "C" });

var map = new ColumnTransformation<MyInputRow>();
map.AddFunc = row => {
    if (row.Id == 2)
        return new AddedColumn("Other", row.Id);
    if (row.Id == 3)
        return null;
    return new AddedColumn("Added", row.Name);
};

var dest = new MemoryDestination();
source.LinkTo<ExpandoObject>(map).LinkTo(dest);
Network.Execute(source);

foreach (dynamic output in dest.Data) {
    IDictionary<string, object> row = output;
    Console.WriteLine("Id " + output.Id
        + (row.ContainsKey("Added") ? ", Added=" + output.Added : "")
        + (row.ContainsKey("Other") ? ", Other=" + output.Other : ""));
}
//Output
/*
    Id 1, Added=A
    Id 2, Other=2
    Id 3
*/
```
