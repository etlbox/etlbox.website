---
title: "Column Transformation"
description: "ColumnTransformation is a transformation that renames, reorders, removes, or adds columns. Column mappings can be provided manually or through attributes like RenameColumn, ReorderColumn, RemoveColumn, and AddColumn."
lead: "The ColumnTransformation allows you to rename, reorder, remove, and add columns or properties on your ingoing data. You can provide mappings, attributes, or functions for each change."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 522
toc: true
chatgpt-review: true
---

## Overview

The `ColumnTransformation` component modifies the structure of incoming data by allowing you to **rename**, **reorder**, **remove**, or **add** columns (or properties). It supports both **strongly typed objects (POCOs)** and **dynamic `ExpandoObject`** inputs, and it is designed to work seamlessly across both styles.

Transformations can be defined using:
1. **Attributes** on POCO properties, or on the class when adding columns
2. **Explicit mappings** assigned to the transformation
3. **Dynamic functions** for rule-based changes

{{< callout context="note" icon="outline/info-circle" >}}
The `ColumnTransformation` component will always output a dynamic `ExpandoObject`, regardless of the input type.
{{< /callout >}}

- **Type**: Non-blocking transformation
- **Buffering**: One input buffer

## Renaming Columns

Column renaming allows you to change the name of properties in your data. This can be especially useful when aligning source data with a target schema.

#### Supported Methods

- **Attributes**: Apply `[RenameColumn]` to POCOs.
- **Mappings**: Use the `RenameColumns` property to provide explicit name pairs.
- **Functions**: Use `RenameFunc` for conditional logic.

#### Example – Using Attributes (POCO)

```csharp
public class MyInputRow {
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

#### Example – Using Mappings

```csharp
var map = new ColumnTransformation();
map.RenameColumns = new[] {
    new RenameColumn() { CurrentName = "Col1", NewName = "NewCol1" },
    new RenameColumn() { CurrentName = "Col2", NewName = "NewCol2" }
};
```

{{< callout context="caution" icon="outline/alert-triangle" >}}
When `RenameColumns` is specified, any renaming attributes on the POCO are ignored.
{{< /callout >}}

#### Example – Using Dynamic Functions

```csharp
var map = new ColumnTransformation();
map.RenameFunc = colName => colName == "OldCol1" ? "NewCol1" : colName;
```

## Reordering Columns

Reordering changes the position of columns in the output. This can be necessary for downstream consumers that rely on column order (e.g., certain file exports).

#### Supported Methods

- **Attributes**: Use `[ReorderColumn(index)]`.
- **Mappings**: Assign new positions using `ReorderColumns`.
- **Functions**: Use `ReorderFunc` to define rules.

#### Example – Using Attributes (POCO)

```csharp
public class MyInputRow {
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
source.LinkTo(columnTrans).LinkTo(dest);
```

#### Example – Using Mappings

```csharp
columnTrans.ReorderColumns = new[] {
    new ReorderColumn() { PropertyName = "Col1", Index = 3 },
    new ReorderColumn() { PropertyName = "Col2", Index = 1 }
};
```

{{< callout context="caution" icon="outline/alert-triangle" >}}
When using `ReorderColumns`, attribute-based reordering is ignored.
{{< /callout >}}

#### Example – Using Dynamic Functions

```csharp
columnTrans.ReorderFunc = colName => colName == "Col2" ? 1 : 2;
```

```csharp
columnTrans.ReorderFunc = colName => {
    if (colName == "Region") return "";
    if (colName == "GrandTotal") return "ZZZZZ";
    return colName;
};
```

## Removing Columns

Column removal eliminates fields from the output entirely.

#### Supported Methods
- **Attributes**: Apply `[RemoveColumn]`.
- **Mappings**: Use `RemoveColumns`.
- **Functions**: Use `RemoveFunc` for rule-based logic.

#### Example – Using Attributes (POCO)

```csharp
public class MyInputRow {
    [RemoveColumn]
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}
```

#### Example – Using Mappings

```csharp
columnTrans.RemoveColumns = new[] {
    new RemoveColumn() { PropertyName = "Col3" }
};
```

{{< callout context="caution" icon="outline/alert-triangle" >}}
When using `RemoveColumns`, attribute-based removal is ignored.
{{< /callout >}}

#### Example – Using Dynamic Functions

```csharp
columnTrans.RemoveFunc = colName => colName == "RemoveCol";
```

## Adding Columns

You can append new properties to each output row. Added columns are written after the columns that remain from the input.

#### Supported Methods

- **Attributes**: Apply `[AddColumn]` to the class. Several attributes can be used together. Each one sets a constant value.
- **Mappings**: Assign `AddColumn` objects to `AddColumns`. Use `ValueFunc` when the value comes from the current row.
- **Functions**: Use `AddFunc` to append one more property for each row. Return `null` when that row should stay unchanged.

#### Example – Using Attributes (POCO)

`[AddColumn]` is placed on the class. The first argument is the new property name, the second is the constant value.

```csharp
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
```

The output keeps `Id` and `Name`, then appends `Source` (`"ETL"`) and `Active` (`true`).

#### Example – Using Mappings

The same `AddColumn` objects can be passed in a list. `ValueFunc` calculates the value from the current row and is used instead of a constant.

```csharp
var map = new ColumnTransformation<MyInputRow>();
map.AddColumns = new List<AddColumn> {
    new AddColumn("FullName") {
        ValueFunc = row => row.Id.ToString() + "-" + row.Name
    },
    new AddColumn("Source", "FILE")
};
```

{{< callout context="caution" icon="outline/alert-triangle" >}}
When `AddColumns` is set, `[AddColumn]` attributes on the class are ignored.
{{< /callout >}}

#### Example – Using AddFunc

`AddFunc` is called once for every input row, after the columns from `AddColumns`. It receives that input row, for example your POCO, and returns the extra property as an `AddedColumn`. The name and the value can differ from row to row. Return `null` to add nothing for that row.

```csharp
var map = new ColumnTransformation<MyInputRow>();
map.AddFunc = row => {
    if (row.Id == 2)
        return new AddedColumn("Other", row.Id);
    return new AddedColumn("Added", "row-" + row.Id);
};
```

## Nested Object Handling

Nested objects within columns are supported. However, transformations apply **only to the top-level properties**, and nested properties remain intact unless explicitly modified.

#### Example – Nested Objects

```csharp
dynamic input = new ExpandoObject();
input.Col1 = 1;
input.Col2 = new { Nested1 = "Value1", Nested2 = "Value2" };

var map = new ColumnTransformation();
map.RenameColumns = new List<RenameColumn>() {
    new RenameColumn() { CurrentName = "Col2", NewName = "RenamedCol2" }
};

var dest = new MemoryDestination();
source.LinkTo(map).LinkTo(dest);
```

## Combined Examples

These examples demonstrate how to apply multiple transformations together.

### Using POCO

```csharp
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
source.DataAsList.Add(new MyInputRow { Col1 = 1, Col2 = "Test" });

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
```

**Expected Output**

```
Does property Col1 still exist?False
Does property Col2 still exist?False
Does property Col3 still exist?False
Does property NewCol1 now exist?True
Does property NewCol2 still exist?True
NewCol1: 1 NewCol2: Test
Order of keys in output:
1: NewCol2
2: NewCol1
```

### Using Dynamic

This example demonstrates how to apply renaming, reordering, and removal of columns dynamically using an `ExpandoObject` as input.

```csharp
var source = new MemorySource();
dynamic input = new ExpandoObject();
input.Col1 = 1;
input.Col2 = "Test";
input.Col3 = new DateTime(2000, 1, 1);
source.DataAsList.Add(input);

var map = new ColumnTransformation();
map.RenameColumns = new List<RenameColumn>() {
    new RenameColumn() { CurrentName = "Col1", NewName = "RenamedCol1" }
};
map.ReorderColumns = new List<ReorderColumn>() {
    new ReorderColumn() { PropertyName = "Col1", Index = 2 },
    new ReorderColumn() { PropertyName = "Col2", Index = 1 }
};
map.RemoveColumns = new List<RemoveColumn>() {
    new RemoveColumn() { PropertyName = "Col3" }
};

var dest = new MemoryDestination();
source.LinkTo(map).LinkTo(dest);
Network.Execute(source);
```

