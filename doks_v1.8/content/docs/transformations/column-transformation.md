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

The `ColumnTransformation` component is designed to rename, remove, and reorder columns in your input data. It supports transformations for both **strongly typed objects (POCOs)** and **dynamic `ExpandoObject`** inputs.

You can define transformations through:
1. **Attributes** (`RenameColumn`, `ReorderColumn`, `RemoveColumn`) on POCOs.
2. **Mappings** assigned to properties (`RenameColumns`, `ReorderColumns`, `RemoveColumns`).
3. **Dynamic Functions** for custom logic (`RenameFunc`, `RemoveFunc`, `ReorderFunc`).

{{< alert text="The <code>ColumnTransformation</code> component will always output as result a dynamic <code>ExpandoObject</code>, regardless of your input type" >}}

#### Buffer

`ColumnTransformation` is a **non-blocking transformation** with a single input buffer.

## Renaming Columns

Columns can be renamed using:
1. **Attributes** applied to POCO properties.
2. **Mappings** provided via the `RenameColumns` property.
3. **Dynamic Functions** assigned to the `RenameFunc`.

#### Example - Using Attributes (POCO)

You can use the `RenameColumn` attribute directly on the property in your POCO.

```csharp
public class MyInputRow
{
    [RenameColumn("NewCol1")]
    public int Col1 { get; set; }
    [RenameColumn("NewCol2")]
    public string Col2 { get; set; }
}

var source = new DbSource<MyInputRow>("Table1");
var map = new ColumnTransformation<MyInputRow>();
var dest = new CsvDestination<MyInputRow>("output.csv");
source.LinkTo(map).LinkTo(dest);
```

#### Example - Using Mappings

This will work with POCOs and dynamic objects as well.

```csharp
var map = new ColumnTransformation();
map.RenameColumns = new []
{
    new RenameColumn() { CurrentName = "Col1", NewName = "NewCol1" },
    new RenameColumn() { CurrentName = "Col2", NewName="NewCol2" }
};
```

{{< alert text="When you specify your columns using the <code>RenameColumns</code> property, any potential attribute assignment will be ignored." >}}

#### Example - Using Dynamic Functions

```csharp
var map = new ColumnTransformation();
map.RenameFunc = colName => colName == "OldCol1" ? "NewCol1" : colName;
```

## Reordering Columns

Columns can be reordered based on:

1. **Attributes** specifying indexes (`ReorderColumn`).
2. **Mappings** provided via the `ReorderColumns` property.
3. **Dynamic Functions** using `ReorderFunc`.

#### Example - Using Attributes (POCO)

You can reorder columns using the `ReorderColumn` attribute. Specify the new position index for each column to be reordered.

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
var columnTrans = new ColumnTransformation<MyInputRow>();
var dest = new CsvDestination<MyInputRow>("output.csv");
source.LinkTo(map).LinkTo(dest);
```

#### Example - Using Mappings

This will work with POCOs and dynamic objects as well.

```csharp
columnTrans.ReorderColumns = new[] {
    new ReorderColumn() { PropertyName = "Col1", Index = 3 },
    new ReorderColumn() { PropertyName = "Col2", Index = 1 }
};
```

{{< alert text="When you specify your columns using the <code>ReorderColumns</code> property, any potential attribute assignment will be ignored." >}}

#### Example - Using Dynamic Functions

The output of the `ReorderFunc` can be anything that is sortable.

So returning an integer will work:

```csharp
columnTrans.ReorderFunc = colName => colName == "Col2" ? 1 : 2;
```

But you could return a string value also:
```C#
columnTrans.ReorderFunc = (colName) => {
    if (colName == "Region") return "";
    else if (colName == "GrandTotal") return "ZZZZZ";
    else return colName;
};
```

## Removing Columns

Columns can be removed via:
1. **Attributes** (`RemoveColumn`).
2. **Mappings** in the `RemoveColumns` property.
3. **Dynamic Functions** through `RemoveFunc`.

#### Example - Using Attributes (POCO)

```C#
public class MyInputRow
{
    [RemoveColumn]
    public int Col1 { get; set; }

    public string Col2 { get; set; }
}
```

#### Example - Using Mappings

This will work with POCOs and dynamic objects as well.

```csharp
columnTrans.RemoveColumns = new[] {
    new RemoveColumn() { PropertyName = "Col3" },
};
```

{{< alert text="When you specify your columns using the <code>RemoveColumns</code> property, any potential attribute assignment will be ignored." >}}

#### Example - Using Dynamic Functions

```csharp
columnTrans.RemoveFunc = colName => colName == "RemoveCol";
```

## Nested Object Handling

The `ColumnTransformation` supports **nested objects** within columns. Transformations are applied to the **top-level properties only**, and nested properties remain intact unless explicitly modified.

#### Example - Nested Objects

```csharp
dynamic input = new ExpandoObject();
input.Col1 = 1;
input.Col2 = new { Nested1 = "Value1", Nested2 = "Value2" };

var map = new ColumnTransformation();
map.RenameColumns = new List<RenameColumn>()
{
    new RenameColumn() { CurrentName = "Col2", NewName = "RenamedCol2" }
};

var dest = new MemoryDestination();
source.LinkTo(map).LinkTo(dest);
```

## Combined Examples

This example demonstrates how to use the attributes `RenameColumn`, `RemoveColumn`, and `ReorderColumn` to reorder and remove columns from an object.

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
```
