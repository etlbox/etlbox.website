---
title: "Column rename"
description: "Details about the ColumnRename"
lead: "This transformation let you rename the properties names of your ingoing data. Also, you can remove columns from your flow."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 680
toc: true
---


## Overview

`ColumnRename` allows you to rename the column or properties names of your ingoing data.  You can provide a column mapping with the old and the new name for each column. The mapping can also be automatically retrieved from existing ColumnMap attributes. This transformation works with objects, ExpandoObjects and arrays as input data type. It will always output an ExpandoObject with the new mapped property names.  

If you have an array as input type, instead of providing the old name you need to enter the array index and the new name. 

#### Buffer

The `ColumnRename` is a non blocking transformation and has one input buffer. 

### Code snippet 

```C#
var source = new DbSource<MyInputRow>();
var map = new ColumnRename<MyInputRow>();
map.RenameColumns = new []
{
    new RenameColumn() { CurrentName = "OldCol1", NewName = "Col1"),
    new RenameColumn() { CurrentName = "OldCol2", RemoveColumn = true)
};
var dest = new DbDestination(SqlConnection, "ColumnRenameDest");

source.LinkTo<ExpandoObject>(map).LinkTo(dest);
```

{{< alert text="The <code>ColumnRename</code> component will always output an ExpandoObject, independently from your input type" >}}

### Rename columns

You should always provide a list of renaming columns, either by providing this list manually via the `RenameColumnns` properties or by having the `RenameColum` attribute on the corresponding properties in your strongly typed object. 

The RenameColumns contains information about the renaming - this should be the old and the new name for each column (except arrays, where you can define an ArrayIndex). If you want to remove a column, you need to provide the current name and set a flag for removing the column. If no mapping is provided, it will just convert your ingoing data type into an ExpandoObject. 

### Supported types 

This transformation works with objects, ExpandoObjects and arrays as input data type. It will always output an ExpandoObject with the new mapped property names.    
