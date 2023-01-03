---
title: "Merge join"
description: "Details about the MergeJoin"
lead: "The MergeJoin transformation joins the outcome of two sources or transformations into one data record. This allows you to merge the data of two inputs into one output. "
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 670
toc: true
---


## Overview

If you want to merge data in your data flow, you can use the `MergeJoin`. This basically joins the outcome of two sources or transformations into one data record. The MergeJoin accepts two inputs and has one output. A function describes how the two inputs are combined into one output. E.g. you can link two sources with the MergeJoin, define  a method how to combine these records and produce a new merged output. If needed, you can define a comparison function which describes if two records should be joined if a match condition is met. 

#### Buffer 

The `MergeJoin` has an input buffer for each input, and one output buffer. The `MergeJoin` will behave as a non blocking transformation if you use it to "always join" data. If you join with a comparison, then data from one input is stored in memory until the comparison condition is met. If the condition is never met, the `MergeJoin` will store all incoming data in memory before it can produce any output. 

### Code snippet 

```C#
MergeJoin<InputType1, InputType2, OutputType> join = new MergeJoin<InputType1, InputType2, OutputType>();
join.MergeJoinFunc =  (leftRow, rightRow) => {
    return new OutputType() {
        Result = leftRow.Value1 + rightRow.Value2
    };
});
source1.LinkTo(join.LeftInput);
source2.LinkTo(join.RightInput);
join.LinkTo(dest);
```

## Merging or joining data

The `MergeJoin` accepts two inputs and has one output. The first input is referred as left input and the second input as right input. A function describes how the two inputs are combined into one output. E.g.,  you can link two sources with the `MergeJoin`, define a method how to combine these records and produce a new merged output. The data type of the output and the inputs can be different, as long as you handle it in the join function. If you want to join only two records if they match, you can pass a comparison function the join. The `MergeJoin` then can simulate behavior like a classic "FULL OUTER JOIN".

### Always join  

By default, the `MergeJoin` will always join every row from the left in put with a row from the right input. This works best if data for both inputs has the exact same amount of rows. A row from the left will always be send together with a row from the right into the `MergeJoin` function. The `MergeJoin` function is a Func that defines how both records are combined. The result can be a new record of the same of a different type.

{{< alert text="If there are more rows coming from one input than there is in the other input, the rest of the rows will be joined with null values." >}} 

#### Always join example

An example for a simple merge join, where data is always joined:

```C#
public class MyLeftRow
{
    public string FirstName { get; set; }        
}

public class MyRightRow
{
    public string LastName { get; set; }
}

public class MyOutputRow
{
    public string FullName { get; set; }
}

public static void Main()
{
    var source1 = new MemorySource<MyLeftRow>();
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Elvis" });
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Marilyn" });
    var source2 = new MemorySource<MyRightRow>();
    source2.DataAsList.Add(new MyRightRow() { LastName = "Presley" });
    source2.DataAsList.Add(new MyRightRow() { LastName = "Monroe" });

    var join = new MergeJoin<MyLeftRow, MyRightRow, MyOutputRow>(
        (leftRow, rightRow) =>
        {
            return new MyOutputRow()
            {
                FullName = leftRow.FirstName + " " + rightRow.LastName
            };
        });

    var dest = new MemoryDestination<MyOutputRow>();
    source1.LinkTo(join.LeftInput);
    source2.LinkTo(join.RightInput);
    join.LinkTo(dest);

    Network.Execute(source1, source2);    

    foreach (var row in dest.Data)
        Console.WriteLine(row.FullName);

    //Outputs
    //Elvis Presley
    //Marilyn Monroe
}
```

### Join with comparison

A `MergeJoin` allows you to define a match and comparison function that describe which records are supposed to be joined. This behavior is similar to a LEFT/RIGHT/FULL JOIN. 
For performance reason, the `MergeJoin` will need sorted input on both sides. The order of the rows needs to be on the property you are using the comparison for. 
Then you can pass a ComparisonFunc<TInput1, TInput2, int> which returns an int value:
If the ComparisonFunc is defined, records are compared regarding their sort order and only joined if they match.

- It returns 0 if both records match and should be joined. 
- It returns a value little than 0 if the record of the left input is in the sort order before the record of the right input. 
- It returns a value greater than 0 if the record for the right input is in the order before the record from the left input.

The `MergeJoin` transformation allows you to specify a match and comparison function that determines which records should be joined. This result of this function behaves similarly to a LEFT/RIGHT/FULL JOIN in SQL.

For optimal performance, the `MergeJoin` requires sorted input from both sides. The rows should be ordered based on the property that is being used for comparison. 
You can pass a `ComparisonFunc<TInput1, TInput2, int>` to the MergeJoin, which returns an integer value based on the comparison of the two input records. This comparison function is based {{<link-ext text="on the default comparison delegate" url="https://learn.microsoft.com/en-us/dotnet/api/system.comparison-1?view=net-7.0" >}}.

- If the `ComparisonFunc` returns 0, both records match and should be joined.
- If the `ComparisonFunc` returns a value less than 0, the record from the left input is considered to be in the correct sort order before the record from the right input.
- If the `ComparisonFunc` returns a value greater than 0, the record from the right input is considered to be in the correct sort order before the record from the left input.

If the `ComparisonFunc` returns 0, both records are joined and send to the output. Otherwise, the MergeJoin will send the record from the right or left side to the ouput, together with NULL value for the non matching side. 

#### Join with comparison example 

Here an example how this would look like

```C#
public class MyRow
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string FullName { get; set; }
}

public void JoinWithComparisonExample()
{
    var source1 = new MemorySource<MyRow>();
    source1.DataAsList.Add(new MyRow() { Id = 1, FirstName = "Elvis" });
    source1.DataAsList.Add(new MyRow() { Id = 2, FirstName = "Psy" });
    source1.DataAsList.Add(new MyRow() { Id = 3, FirstName = "Marilyn" });
    var source2 = new MemorySource<MyRow>();
    source2.DataAsList.Add(new MyRow() { Id = 1, LastName = "Presley" });
    source2.DataAsList.Add(new MyRow() { Id = 3, LastName = "Monroe" });

    var join = new MergeJoin<MyRow>(
        (leftRow, rightRow) =>
        {
            if (rightRow == null)
                leftRow.FullName = leftRow.FirstName + " " + "Unknown";
            else 
                leftRow.FullName = leftRow.FirstName + " " + rightRow.LastName;
            return leftRow;
        });

    join.ComparisonFunc = (inputRow1, inputRow2) =>
    {
        if (inputRow1.Id == inputRow2.Id)
            return 0;
        else if (inputRow1.Id < inputRow2.Id)
            return -1;
        else 
            return 1;                
    };

    var dest = new MemoryDestination<MyRow>();
    source1.LinkTo(join.LeftInput);
    source2.LinkTo(join.RightInput);
    join.LinkTo(dest);

    Network.Execute(source1, source2);

    foreach (var row in dest.Data)
        Console.WriteLine(row.FullName);

    //Outputs
    //Elvis Presley
    //Psy Unknown
    //Marilyn Monroe
}
```

## Types 

The data type of the inputs and outputs can be different. The `MergeJoin` can accept three different type - two types for the inputs and one type for the output. There is a simplified `MergeJoin` that only accepts one type - then all inputs and output will be of the same type. If no type is given, the `MergeJoin` will use the ExpandoObject. 

### Sorted input

Input data for both inputs needs to be sorted if you use the comparison function. Either use the [Sort transformation](/docs/blocking-transformations/sort/) or try to get sorted output from the source. The order of the incoming rows has a direct effect on the join behavior. The `MergeJoin` does not check if the input is sorted - it will either always join both incoming rows (no comparison function defined) or it will call the comparison func to identify matches and order for the current incoming rows. The latter one will lead to unexpected results if both inputs are not sorted on the same property that the comparison function uses. 

