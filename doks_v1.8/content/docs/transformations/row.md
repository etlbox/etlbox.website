---
title: "Row Transformation"
description: "Explains the usage of RowTransformation, a non-blocking transformation in ETLBox that processes each row individually using user-defined C# logic. Covers type conversion, dynamic object handling, and initialization behavior."
lead: "The <code>RowTransformation</code> is one of the most flexible and commonly used transformations in ETLBox. It processes each row of input data individually and applies a user-defined transformation function to produce the output row. You can use this component to perform type conversion, data calculations, or enrich rows with additional logic using plain C#."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 520
toc: true
chatgpt-review: true
---

## Overview

- **Transformation Type**: Non-blocking
- **Execution Mode**: Row-by-row processing
- **Buffers**: One input buffer

Each row is read from the input buffer, processed immediately using the transformation logic, and then passed on to the next component.

{{< callout context="note" icon="outline/info-circle" >}}
If only one type parameter is specified, the same type is used for input and output:
`RowTransformation<T,T>` is equivalent to `RowTransformation<T>`
{{< /callout >}}

### Code Snippet

```csharp
RowTransformation<InputType, OutputType> trans =
    new RowTransformation<InputType, OutputType>(
        row => {
            return new OutputType() { Value = row.Value + 1 };
        });
```

## Example

The basic idea is simply explained with this example. Two data rows are created—both have the property `InputValue`, which is multiplied by two in the row transformation. The result is stored in the property `Result`.

```csharp
public class MyRow {
    public int InputValue { get; set; }
    public int Result { get; set; }
}

public static void Main() {
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

## Converting Data Types

In the example above, the input and output types were the same. This is a short form of `RowTransformation<MyRow, MyRow>`. You can also use different input and output types.

Here is an example that converts the incoming data into a different object type:

```csharp
public class InputType {
    public string Col1 { get; set; }
    public string Col2 { get; set; }
}

public class OutputType {
    public int Id { get; set; }
    public string Value { get; set; }
}

public static void Main() {
    var source = new MemorySource<InputType>();
    source.DataAsList.Add(new InputType() { Col1 = "1", Col2 = "A" });
    source.DataAsList.Add(new InputType() { Col1 = "2", Col2 = "B" });

    var rowTrans = new RowTransformation<InputType, OutputType>();
    rowTrans.TransformationFunc =
        row => {
            return new OutputType() {
                Id = int.Parse(row.Col1),
                Value = row.Col2
            };
        };

    var dest = new MemoryDestination<OutputType>();

    source.LinkTo(rowTrans);
    rowTrans.LinkTo(dest);
    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    //Output
    //Id:1 Value:A
    //Id:2 Value:B
}
```

## Using Dynamic Objects

The default implementation of the `RowTransformation` works with an `ExpandoObject`, which allows for dynamic property access during runtime. This is useful when you don’t want to define a class for your data.

Assume a CSV input file `example_input.csv` with the following content:

```
Col1,Col2
1,A
2,B
3,C
```

Normally, you would create a class to store this data. But by using `ExpandoObject`, you can access and process the data directly, converting them on-the-fly in your desired object type:

```csharp
public class CsvData {
    public int Id { get; set; }
    public string Value { get;set; }
}

var source = new CsvSource("example_input.csv");

var rowTrans = new RowTransformation<ExpandoObject, CsvData>();
rowTrans.TransformationFunc =
    row => {
        dynamic dynrow = row as dynamic;
        Console.WriteLine($"Col1:{dynrow.Col1} Col2:{dynrow.Value}");
        return new CsvData() {
            Id = int.Parse(dynrow.Col1),
            Value = dynrow.Col2
        };
    };

var dest = new MemoryDestination<CsvData>();

source.LinkTo(rowTrans);
rowTrans.LinkTo(dest);
Network.Execute(source);

foreach (var row in dest.Data)
    Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

//Output
//Col1:1 Col2:A
//Col1:2 Col2:B
//Col1:3 Col2:C
//Id:1 Value:A
//Id:2 Value:B
//Id:3 Value:C
```


## InitAction

The `RowTransformation` allows defining an `InitAction` that is executed once, just before the first data row is processed. This is useful when the transformation needs to execute code that should only run when the first data row enters the transformation.

```csharp
var rowTrans = new RowTransformation<MyRow>();
rowTrans.TransformationFunc = row => {
    row.Col1 += IdOffset;
    return row;
};
rowTrans.InitAction = () => IdOffset = 100;
```

