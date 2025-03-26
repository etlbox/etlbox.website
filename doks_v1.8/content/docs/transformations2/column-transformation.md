---
title: "Column Transformation"
description: "ColumnTransformation is a transformation that renames, reorders, or removes columns. Column mappings can be provided manually or through attributes like RenameColumn, ReorderColumn, and RemoveColumn."
lead: "The ColumnTransformation allows you to rename, reorder, and remove column or property names from your ingoing data. You can provide mappings for renaming and reordering, or flag columns for removal."
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

The `ColumnTransformation` component modifies the structure of incoming data by allowing you to **rename**, **reorder**, or **remove** columns (or properties). It supports both **strongly typed objects (POCOs)** and **dynamic `ExpandoObject`** inputs, and it is designed to work seamlessly across both styles.

Transformations can be defined using:
1. **Attributes** on POCO properties
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

