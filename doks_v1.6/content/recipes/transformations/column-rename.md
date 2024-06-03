---
title: "Column rename"
description: "Examples and code recipes for the ColumnRename component."
lead: "This article contains example code that shows the usage of the ColumnRename component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2083
toc: true
---

## Upper case property names

This example shows how to set up a general renaming function that converts the property names from lower into uppercase. 

```C#
public void WritingRenamedIntoDatabase() {
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
    var upperCaseRename = new ColumnRename();
    upperCaseRename.RenameFunc = name => name.ToUpper();
    source.LinkTo(upperCaseRename).LinkTo(dest);
    Network.Execute(source);

    //Assert
    Assert.Equal(1, RowCountTask.Count(SqlConnection, "RenameExampleDest"));
}
```

## Renaming with attribute

This example show how to use the `RenameColumn` attribute. 
```C#
public class MyInputRow
{
    [RenameColumn("NewCol1")]
    public int Col1 { get; set; }
    [RenameColumn("NewCol2")]
    public string Col2 { get; set; }
}

public void RenamingWithAttributes() {
    var source = new MemorySource<MyInputRow>();
    var input = new MyInputRow() {
        Col1 = 1,
        Col2 = "Test",
    };
    source.DataAsList.Add(input);

    var map = new ColumnRename<MyInputRow>();
    var dest = new MemoryDestination();

    source.LinkTo<ExpandoObject>(map).LinkTo(dest);
    Network.Execute(source);

    dynamic output = dest.Data.First();
    IDictionary<string,object> outputDict = dest.Data.First();
    
    Console.WriteLine("Does property Col1 still exists?" + outputDict.ContainsKey("Col1"));
    Console.WriteLine("Does property Col2 still exists?" + outputDict.ContainsKey("Col2"));
    Console.WriteLine("Does property NewCol1 now exists?" + outputDict.ContainsKey("NewCol1"));
    Console.WriteLine("Does property NewCol2 still exists?" + outputDict.ContainsKey("NewCol2"));
    Console.WriteLine("NewCol1: " + output.NewCol1 + " NewCol2: " + output.NewCol2);

    //Output
    /*
        Does property Col1 still exists?False
        Does property Col2 still exists?False
        Does property NewCol1 now exists?True
        Does property NewCol2 still exists?True
        NewCol1: 1 NewCol2: Test
    */
}
```