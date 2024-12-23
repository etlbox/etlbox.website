---
title: "Cross join"
description: "Details about the CrossJoin"
lead: "The CrossJoin allows you to combine every record from one input with every record from the other input. This allows you to simulate a cross join like behavior as in sql (also known as Cartesian product)."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 810
toc: true
---

## Overview

The CrossJoin allows you to combine every record from input with every records from the other input. E.g. if your left input has the input records 1 and 2, and your right input the records A, B and C, the CrossJoin will combine 1 with A, B and C and 2 with A, B and C.

#### Buffer

The CrossJoin is a partial blocking transformation. The input for the first table will be loaded into memory before the actual join can start. After this, every incoming row will be joined with every row of the InMemory-Table using the cross join function. The InMemory target should always be the target with the smaller amount of data to reduce memory consumption and processing time. The passing target of the CrossJoin func does not store any rows in memory.

The `CrossJoin` has an input buffer for each input target.

### Code snippet

```C#
CrossJoin<InputType1, InputType2, OutputType> crossJoin = new CrossJoin<InputType1, InputType2, OutputType>();
crossJoin.CrossJoinFunc = (inmemoryRow, passingRow) => {
    return new OutputType() {
        Result = leftRow.Value1 + rightRow.Value2
    };
});
source1.LinkTo(join.InMemoryTarget);
source2.LinkTo(join.PassingTarget);
join.LinkTo(dest);
```

## Example

Let's assume you have two input sets.
Set one is a list of first names: "Elvis", "James" and "Marilyn". Set two is a list of last names: "Presley" and "Monroe". Our cross join should produce a list of all possible combinations of first and last name: "Elvis Presley", "Elvis Monroe", "James Presley", "James Monroe", "Marilyn Presley", "Marilyn Monroe".

This is our code:

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
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "James" });
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Marilyn" });
    var source2 = new MemorySource<MyRightRow>();
    source2.DataAsList.Add(new MyRightRow() { LastName = "Presley" });
    source2.DataAsList.Add(new MyRightRow() { LastName = "Monroe" });

    var join = new CrossJoin<MyLeftRow, MyRightRow, MyOutputRow>(
        (leftRow, rightRow) =>
        {
            return new MyOutputRow()
            {
                FullName = leftRow.FirstName + " " + rightRow.LastName
            };
        });

    var dest = new MemoryDestination<MyOutputRow>();
    source1.LinkTo(join.InMemoryTarget);
    source2.LinkTo(join.PassingTarget);
    join.LinkTo(dest);

    Network.Execute(source1, source2);

    foreach (var row in dest.Data)
        Console.WriteLine(row.FullName);

    //Outputs
    //Elvis Presley
    //James Presley
    //Marilyn Presley
    //Elvis Monroe
    //James Monroe
    //Marilyn Monroe
}
```

{{< alert text="The source where you expect the smaller amount of incoming data should always go into the InMemory target of the CrossJoin. This is because the CrossJoin is a partial blocking transformation where all rows from the InMemoryTarget are stored in memory before the actual join can be performed." >}}

