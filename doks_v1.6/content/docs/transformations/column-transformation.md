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
```

The resulting ExpandoObject will have the input columns added in the order by the given index property.

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

