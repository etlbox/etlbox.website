---
title: "Pivot data"
description: "Example: pivot data from a csv file"
lead: "This example shows how to pivot and unpivot data in a csv file."
draft: false
images: []
menu:
  recipes:
    parent: "etl"
weight: 2220
toc: true
---

## Preqrequisites

The following examples can work stand-alone - the only dependency is that you add the ETLBox and ETLBox.Csv packages as dependency.

## Pivoting data

The following example shows how data can be pivoted using an `Aggregation` and a `BlockTransformation`. In this example, we will use the dynamic ExpandoObject for our input data.

### Introduction to the Problem

When working with raw data in a flat structure (such as CSV files), it's common to encounter datasets where you want to aggregate values based on specific dimensions and pivot the data. For example, let's say you have sales data categorized by product and month:

| Category | Month | Sales |
|----------|-------|-------|
| A        | Jan   | 100   |
| A        | Feb   | 150   |
| B        | Jan   | 200   |
| A        | Jan   | 50    |

We want to pivot this data so that each category becomes a row, and each month becomes a column with the corresponding sales values.

### Code walkthrough

#### Reading the Input CSV

We start by reading the input CSV file using `CsvSource`. This CSV contains our raw sales data:

```csharp
CsvSource source = new CsvSource("input.csv");
```

#### Aggregation for Data Summarization

Next, we define an aggregation step. This will allow us to sum up the sales values based on the `Category` and `Month` columns. The `Aggregation` component lets us group and aggregate data on the fly.

```csharp
Aggregation aggregation = new Aggregation();
aggregation.AggregateColumns = new[] {
    new AggregateColumn() { InputValuePropName = "Sales", AggregationMethod = AggregationMethod.Sum, AggregatedValuePropName = "Sales" },
};
aggregation.GroupColumns = new[] {
    new GroupColumn() { GroupPropNameInInput= "Category", GroupPropNameInOutput = "Category" },
    new GroupColumn() { GroupPropNameInInput= "Month", GroupPropNameInOutput = "Month" }
};
```

- **AggregateColumn**: Specifies that we want to sum up the `Sales` values.
- **GroupColumns**: Indicates that data should be grouped by `Category` and `Month`.

#### Pivoting the Aggregated Data

Now comes the pivoting logic. We'll use a `BlockTransformation` to transform our data into the desired pivoted format. This is where the actual pivoting happens:

```csharp
BlockTransformation block = new BlockTransformation();
block.BlockTransformationFunc = allRows => {
    Dictionary<string, ExpandoObject> csvOutput = new Dictionary<string, ExpandoObject>();
    foreach (IDictionary<string,object> row in allRows) {
        string category = row["Category"] as string;
        IDictionary<string, object> outputRow;
        if (csvOutput.ContainsKey(category))
            outputRow = csvOutput[category];
        else {
            outputRow = new ExpandoObject();
            outputRow["Category"] = category;
            csvOutput.Add(category, outputRow as ExpandoObject);
        }

        outputRow.Add(row["Month"] as string, row["Sales"]);
    }

    return csvOutput.Values.ToArray();
};
```

- The `BlockTransformation` function processes each row of data and dynamically creates columns for each month based on the values in the dataset.
- A dictionary `csvOutput` is used to collect the output rows, where the keys represent the categories.
- For each category, the aggregated sales value is inserted into the correct month column.


#### Writing to the Output

Finally, the pivoted data is written to a new CSV file using `CsvDestination`:

```csharp
CsvDestination destination = new CsvDestination("output.csv");
```

#### Linking the Components and Executing

Once the components are set up, we link them together in a pipeline and execute the workflow:

```csharp
source.LinkTo(aggregation);
aggregation.LinkTo(block);
block.LinkTo(destination);

Network.Execute(source);
```

Here’s what the pivoted output looks like:

```csv
Category,Jan,Feb
A,150,150
B,200,
```

In the output:
- The `Category` column contains unique product categories.
- Each month appears as a separate column, with the corresponding sales data.

### Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/PivotData" >}}

## Unpivoting data

The following example code shows how data can be unpivoted from a csv source. Because unpivoting works a bit different than pivoting, instead of using a `BlockTransformatin` we can now use a `RowMultiplication` instead. This will significantly reduce the memory consumption of the pipeline.

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

Next we define our output type, which is a unpivoted view of our input. So for each account number, we want to have the month name together with the monthly value.

```C#
public class PivotedOutput
{
    public int Account { get; set; }
    public string Month { get; set; }
    public int MonthlyValue { get; set; }
}
```

### Unpivoting the input

Let`s create a source and destination component for our data flow. In this example, we will sent the unpivoted data into another csv file.

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

### Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/UnpivotData" >}}

