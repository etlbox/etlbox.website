---
title: "Row Transformation"
description: "Details about the RowTransformation"
lead: "The RowTransformation will apply a custom transformation function to each row of incoming data. This transformation is useful in many scenarios, as it allows you to apply any .NET code to your data."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 520
toc: true
---

## Overview

The `RowTransformation` is the simplest but most powerful transformation in ETLBox. The transformation has two types - the type of the input data and the type of the output data. When creating a `RowTransformation`, you pass a transformation functions describing how each record in the data flow is transformed. Here you can add any C# code that you like.

#### Buffer

The `RowTransformation` is a non blocking transformation, so it will only store the current row in memory (plus some additional rows in the input buffer to improve throughput). It has one input buffer.

### Code snippet

```C#
RowTransformation<InputType,OutputType> trans =
    new RowTransformation<InputType,OutputType> (
        row => {
            return new OutputType() { Value = row.Value + 1 };
        });
```

## Example

The basic idea is simply explain with this example. Two data rows are created - both have the property `InputValue`, which is multiplied with two in the row transformation and the result stored in the property `Result`.

```C#
 public class MyRow
{
    public int InputValue { get; set; }
    public int Result{ get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { InputValue = 1 });
    source.DataAsList.Add(new MyRow() { InputValue = 2 });

    var rowTrans = new RowTransformation<MyRow>(
        row => {
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

{{< alert text="If there is only one type defined for the <code>RowTransformation</code>, this type is used for input <b>and</b> output" >}}

### Converting data types

In the example above only one data type was used. In this case, the `RowTransformation<MyRow>` is the short definition for `RowTransformation<MyRow,MyRow>` - input and output types are the same. But you can also have different input and output types.

Here is an example that converts a string array into an object, using both type parameters of the `RowTransformation`:

```C#
public class MyArray
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

public static void Main()
{
    var source = new MemorySource<string[]>();
    source.DataAsList.Add( new string[] { "1", "A"});
    source.DataAsList.Add( new string[] { "2", "B"});

    var rowTrans = new RowTransformation<string[], MyArray>();
    rowTrans.TransformationFunc =
        row =>
        {
            return new MyArray()
            {
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

## Using dynamic objects

THe default implementation of the RowTransform works with an ExpandoObject: `RowTransformation` and `RowTransformation<ExpandoObject,ExpandoObject>` are both the same. Working with ExpandoObject allows the user to access properties in the object during runtime - no object type is needed before compilation.

Let's assume we have an example input csv file that looks like this:

Id|Value
--|---------------
1 |A
2 |B
3 |C

Normally, you would create an object the contains the properties Id and Value to store the data. But you could also work with ExpandoObject. The default implementation of all connectors and transformations is using the ExpandoObject as type. So by using CsvSource and `RowTransformation` we can access the data from the source directly, without the need of creating any data object.

```C#
 public static void Main()
{
    var source = new CsvSource("example_input.csv");

    var rowTrans = new RowTransformation();
    rowTrans.TransformationFunc =
        row =>
        {
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

As the `RowTransformation` is used to write the output already, we are not interested in storing the data somewhere. But a data flow can't complete if not all records arrived at a destination. As we just want to discard the data, we use the `VoidDestination` as target.

## InitAction

The `RowTransformation` allow to define custom code that is executed when the first data records arrives at the `RowTransformation`.
This can be very useful as you can be sure that everything is properly initialized in your flow and the components before when the first record arrives at the transformation.

```C#
var rowTrans = new RowTransformation();
row.TransformationFunc = row => {
    row.Col1 += IdOffset;
    return row;
};
row.InitAction = () => IdOffset = 100;
```


