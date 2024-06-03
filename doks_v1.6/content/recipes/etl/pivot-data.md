---
title: "Pivot data"
description: "Example: pivot data from a csv file"
lead: "This example shows how to use the RowMultiplication to pivot data in a csv file."
draft: false
images: []
menu:
  recipes:
    parent: "etl"
weight: 2220
toc: true
---

## Preqrequisites

This example can work stand-alone - the only dependency is that you add the ETLBox and ETLBox.Csv packages as dependency. 

### Input file

Our csv input file contains account informations. We have an account number, and we have a value for each month of the first quarter. 

```csv
Account;JAN;FEB;MAR
4711;10;11;12
4712;20;21;22
4713;30;31;32
```

We can define a `CsvSource` to read the data from this csv file using a classic object. 
The parsing of the csv file is based on the `CsvHelper` by JoshClose. We can use attributes from the CsvHelper to control the parsing. In this case, we want to use better names for the months. 

```C#
public class InputData
{
    public int Account { get; set; }
    [Name("JAN")]
    public int January { get; set; }
    [Name("FEB")]
    public int February { get; set; }
    [Name("MAR")]
    public int March { get; set; }
}
```

Next we define our output type, which is a pivoted view of our input. So for each account number, we want to have the month name together with the monthly value. 

```C#
public class PivotedOutput
{
    public int Account { get; set; }
    public string Month { get; set; }
    public int MonthlyValue { get; set; }
}
```

### Pivoting the input 

Let`s create a source and destination componet for our data flow. In this example, we will sent the pivoted data into another csv file. 

```C#
var source = new CsvSource<InputData>("Accounts_Quartal1.csv");
source.Configuration.Delimiter = ";";

var dest = new CsvDestination<PivotedOutput>("AccountNumbers_Pivoted.csv");
dest.Configuration.HasHeaderRecord = false;
```

Now we introduce a `RowManipulation` that does the magic. 

```C#
var trans = new RowMultiplication<InputData, PivotedOutput>();
trans.MultiplicationFunc = row =>
{
    List<PivotedOutput> result = new List<PivotedOutput>();
    result.Add(new PivotedOutput()
    {
        Account = row.Account,
        Month = nameof(InputData.January),
        MonthlyValue = row.January
    });
    result.Add(new PivotedOutput()
    {
        Account = row.Account,
        Month = nameof(InputData.February),
        MonthlyValue = row.February
    });
    result.Add(new PivotedOutput()
    {
        Account = row.Account,
        Month = nameof(InputData.March),
        MonthlyValue = row.March
    });
    return result;
};
```

### Executing the flow

Finally, we can link and execute our data flow.

```C#
source.LinkTo(trans);
trans.LinkTo(dest);

Network.Execute(source);
```

This is the content of the newly created output file. As we set the property `HasHeaderReader` of the CsvConfiguration to false, the header row is omitted. 

```csv
4711,January,10
4711,February,11
4711,March,12
4712,January,20
4712,February,21
4712,March,22
4713,January,30
4713,February,31
4713,March,32
```

## Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/PivotData" >}}

