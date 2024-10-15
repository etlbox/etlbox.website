---
title: "Column Transformation"
description: "ColumnTransformation is a transformation that renames, reorders, or removes columns. Column mappings can be provided manually or through attributes like RenameColumn, ReorderColumn, and RemoveColumn."
lead: "The ColumnTransformation allows you to rename, reorder, and remove column or property names from your ingoing data. You can provide mappings for renaming and reordering, or flag columns for removal."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 610
toc: true
---

## Overview

This `ColumnTransfomration` works with strongly typed objects (POCOs) and the dynamic `ExpandoObject` as input data types. You can specify the columns that need to be removed, reordered or renamed by either using the attributes `RenameColumn`, `ReorderColumn`, and `RemoveColumn`, or assigning instances of the to the corresponding `RenameColumns`, `ReorderColumns` or `RemoveColumns` property.

If no attribute/mapping is provided, the transformation will convert your ingoing data type into an `ExpandoObject` without any changes. So this transformation can also be used to convert your incoming POCO into a dynamic `ExpandoObject`.

{{< alert text="The <code>ColumnTransformation</code> component will always output as result an dynamic <code>ExpandoObject</code>, regardless of your input type" >}}

#### Buffer

The `ColumnTransformation` is a non-blocking transformation and has one input buffer.

### Renaming Columns

To rename columns, provide a list via the `RenameColumns` property. You can also apply the `RenameColumn` attribute directly to strongly typed object properties. Each rename entry must include the old name and new name. To remove a column, set the `RemoveColumn` flag to true.

Example using Attributes, using a POCO for the input data:

```C#
public class MyInputRow
{
    [RenameColumn("NewCol1")]
    public int Col1 { get; set; }
    [RenameColumn("NewCol2")]
    public string Col2 { get; set; }
}

var source = new DbSource<MyInputRow>("Table1");
var map = new ColumnRename<MyInputRow>();
var dest = new CsvDestination("output.csv");
source.LinkTo<ExpandoObject>(map).LinkTo(dest);
```

Example using the `RenameColumns` property using the `ExpandoObject` for the whole flow:

```C#
var source = new DbSource<ExpandoObject>("Table1");
var map = new ColumnRename<MyInputRow>();
map.RenameColumns = new []
{
    new RenameColumn() { CurrentName = "Col1", NewName = "NewCol1" },
    new RenameColumn() { CurrentName = "Col2", NewName="NewCol2" }
};
var dest = new CsvDestination("output.csv");

source.LinkTo(map).LinkTo(dest);
```

{{< alert text="When you specify your columns using the `RenameColumns` property, any potential attribute assignment will be ignored." >}}


### Reordering Columns

You can reorder columns using the `ReorderColumns` property or the `ReorderColumn` attribute. Specify the new position index for each column to be reordered.

Example:
```C#
public class MyInputRow
{
    [RenameColumn("NewCol1")]
    [ReorderColumn(2)]
    public int Col1 { get; set; }

    [RenameColumn("NewCol2")]
    [ReorderColumn(1)]
    public string Col2 { get; set; }
}
var source = new DbSource<MyInputRow>("Table1");
var map = new ColumnRename<MyInputRow>();
var dest = new CsvDestination("output.csv");
source.LinkTo<ExpandoObject>(map).LinkTo(dest);
```

The resulting `ExpandoObject` will have the input columns added in the order by the given index property.

### Removing Columns

Columns can be removed by providing the current name and setting the `RemoveColumn` flag to true, or by applying the `RemoveColumn` attribute to the property.

Example:
```C#
public class MyInputRow
{
    public int Col1 { get; set; }

    [RemoveColumn]
    public string Col2 { get; set; }
}
```

## Combined Example

This example demonstrates how to use the attributes RenameColumn, RemoveColumn, and ReorderColumn to reorder and remove columns from an object.

### Using POCO

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
Console.WriteLine("Does property Col1 still exist?" + outputDict.ContainsKey("Col1"));
Console.WriteLine("Does property Col2 still exist?" + outputDict.ContainsKey("Col2"));
Console.WriteLine("Does property Col3 still exist?" + outputDict.ContainsKey("Col3"));
Console.WriteLine("Does property NewCol1 now exist?" + outputDict.ContainsKey("NewCol1"));
Console.WriteLine("Does property NewCol2 still exist?" + outputDict.ContainsKey("NewCol2"));
Console.WriteLine("NewCol1: " + output.NewCol1 + " NewCol2: " + output.NewCol2);
Console.WriteLine("Order of keys in output");
for (int i = 1; i <= outputDict.Keys.Count; i++)
    Console.WriteLine(i + ":" + outputDict.ElementAt(i - 1).Key);
//Output
/*
    Does property Col1 still exist?False
    Does property Col2 still exist?False
    Does property Col3 still exist?False
    Does property NewCol1 now exist?True
    Does property NewCol2 still exist?True
    NewCol1: 1 NewCol2: Test
    Order of keys in output:
    1: NewCol2
    2: NewCol1
*/
```

### Using Dynamic

```C#
var source = new MemorySource();
dynamic input = new ExpandoObject();
input.Col1 = 1;
input.Col2 = "Test";
input.Col3 = new DateTime(2000, 1, 1);
source.DataAsList.Add(input);

var map = new ColumnTransformation();
map.RenameColumns = new List<RenameColumn>()
{
    new RenameColumn() { CurrentName = "Col1", NewName = "RenamedCol1" }
};
map.ReorderColumns = new List<ReorderColumn>()
{
    new ReorderColumn() { PropertyName = "Col1", Index = 2 },
    new ReorderColumn() { PropertyName = "Col2", Index = 1 }
};
map.RemoveColumns = new List<RemoveColumn>()
{
    new RemoveColumn() { PropertyName = "Col3" }
};

var dest = new MemoryDestination();
source.LinkTo(map).LinkTo(dest);
Network.Execute(source);

dynamic output = dest.Data.First();
IDictionary<string, object> outputDict = dest.Data.First();

Console.WriteLine("Order of keys in output");
for (int i = 1; i <= outputDict.Keys.Count; i++)
    Console.WriteLine(i + ":" + outputDict.ElementAt(i - 1).Key);
// Output
/*
   Order of keys in output:
   1: Col2
   2: RenamedCol1
   Col3 is removed, and the column Col1 has been renamed to RenamedCol1.
*/
```
