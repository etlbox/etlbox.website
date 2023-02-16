---
title: "Row transformation"
description: "Examples and code recipes for the RowTransformation component."
lead: "This article contains example code that shows the usage of the RowTransformation component."
draft: false
images: []
menu:
  recipes:
    parent: "components"
weight: 2089
toc: true
---

## Basic usage

The row transformation is the Swiss army knife for any type of data transformation that you would like to apply to every row of your data. The `TransformationFunc` allows you to execute any code C# for every row in your data pipeline. 

```C#
public class MyRow
{
    public int InputValue { get; set; }
    public int Result { get; set; }
}

public void BasicExample() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { InputValue = 1 });
    source.DataAsList.Add(new MyRow() { InputValue = 2 });

    var rowTrans = new RowTransformation<MyRow>(
        row => {
            //Any C# code here
            row.Result = row.InputValue * 2;
            return row;
        }
    );

    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(rowTrans).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"InputValue:{row.InputValue} Result:{row.Result}");

    //Outputs
    //InputValue:1 Result:2
    //InputValue:2 Result:4
}
```

## Converting data types 

The `RowTransformation` can not only used to apply custom C# code, it can also be used to convert the data type of your incoming data into a different output type. 

```C#
public class MyArray
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

public void ConvertingDataTypes() {
    var source = new MemorySource<string[]>();
    source.DataAsList.Add(new string[] { "1", "A" });
    source.DataAsList.Add(new string[] { "2", "B" });

    var rowTrans = new RowTransformation<string[], MyArray>();
    rowTrans.TransformationFunc =
        row => {
            return new MyArray() {
                Col1 = int.Parse(row[0]),
                Col2 = row[1]
            };
        };

    var dest = new MemoryDestination<MyArray>();

    source.LinkTo<MyArray>(rowTrans).LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Col1:{row.Col1} Col2:{row.Col2}");

    //Output
    //Col1:1 Col2:A
    //Col1:2 Col2:B
}
```

## Using dynamic ExpandoObject

The `RowTransformation` also works (like all other transformations in ETLBox) with the dynamic `ExpandoObject`:

```C#
public void UsingDynamicObject() {
    var source = new CsvSource("res/Examples/example_input.csv");

    var rowTrans = new RowTransformation();
    rowTrans.TransformationFunc =
        row => {
            dynamic dynrow = row as dynamic;
            Console.WriteLine($"Id:{dynrow.Id} Value:{dynrow.Value}");
            return row;
        };

    var dest = new VoidDestination();

    source.LinkTo(rowTrans).LinkTo(dest);
    Network.Execute(source);

    //Output
    //Id:1 Value:A
    //Id:2 Value:B
    //Id:3 Value:C
}
```
