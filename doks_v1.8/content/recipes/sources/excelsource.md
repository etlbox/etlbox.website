---
title: "Excel Source"
description: "Examples and code recipes for the ExcelSource component."
lead: "This article contains example code that shows the usage of the ExcelSource component."
draft: false
images: []
menu:
  recipes:
    parent: "Sources"
weight: 45
toc: true
---

The Excel source comes in handy when loading data from excel files.

## Read excel file with same column names

Consider the following data in the Excel file `Source.xlsx`:

ColumnA|ColumnB|ColumnB|ColumnC
-------|-------|-------|-------
1|A|X|Test
2|B|Y|Test
3|C|Z|Test

Please note that `ColumnB` exists twice as header name. So we need to configure the ExcelColumn in the ExcelSource to avoid getting an exception when reading the data.

### With POCO

```C#
public class MyRow {
    [ExcelColumn(ColumnName = "ColumnA")]
    public int FirstColumn { get; set; }
    [ExcelColumn(ColumnIndex = 1)]
    public string SecondColumn { get; set; }
    [ExcelColumn(ColumnIndex = 2)]
    public string ThirdColumn { get; set; }
    public string ColumnC { get; set; }
}

string sourceFile = @"res/Examples/Source.xlsx";

ExcelSource<MyRow> source = new ExcelSource<MyRow>();
source.Uri = sourceFile;

MemoryDestination<MyRow> dest = new MemoryDestination<MyRow>();

source.LinkTo(dest);
Network.Execute(source);

foreach (MyRow col in dest.Data) {
    string dump = string.Join(",", col.GetType().GetProperties().Select(prop => prop.Name + ":" + prop.GetValue(col)).ToList());
    Console.WriteLine(dump);
}

/* Output:
FirstColumn:1,SecondColumn:A,ThirdColumn:X,ColumnC:Test
FirstColumn:2,SecondColumn:B,ThirdColumn:Y,ColumnC:Test
FirstColumn:3,SecondColumn:C,ThirdColumn:Z,ColumnC:Test
*/
```

### With dynamic object

```C#
string sourceFile = @"res/Examples/Source.xlsx";

ExcelSource source = new ExcelSource();
source.Uri = sourceFile;
source.ExcelColumns = new ExcelColumn[] {
    new ExcelColumn() {ColumnName = "ColumnA", PropertyName = "FirstColumn" },
    new ExcelColumn() { ColumnIndex = 1, PropertyName = "SecondColumn" },
    new ExcelColumn() { ColumnIndex = 2, PropertyName = "ThirdColumn" },
};
MemoryDestination dest = new();

source.LinkTo(dest);

Network.Execute(source);

foreach (IDictionary<string, object> col in dest.Data) {
    string dump = string.Join(",", col.Select(col => col.Key + ":" + col.Value).ToList());
    Console.WriteLine(dump);
}

/* Output:
FirstColumn:1,SecondColumn:A,ThirdColumn:X,ColumnC:Test
FirstColumn:2,SecondColumn:B,ThirdColumn:Y,ColumnC:Test
FirstColumn:3,SecondColumn:C,ThirdColumn:Z,ColumnC:Test
*/
```
