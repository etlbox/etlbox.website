---
title: "Merge join transformation"
description: "Examples and code recipes for the MergeJoin component."
lead: "This article contains example code that shows the usage of the MergeJoin component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2088
toc: true
---

## Always join 

This example shows how a MergeJoin can be used to always join records from both inputs. 

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

public void AlwaysJoinExample() {
    var source1 = new MemorySource<MyLeftRow>();
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Elvis" });
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Marilyn" });
    var source2 = new MemorySource<MyRightRow>();
    source2.DataAsList.Add(new MyRightRow() { LastName = "Presley" });
    source2.DataAsList.Add(new MyRightRow() { LastName = "Monroe" });

    var join = new MergeJoin<MyLeftRow, MyRightRow, MyOutputRow>(
        (leftRow, rightRow) => {
            return new MyOutputRow() {
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

## Join on condition

This example shows how the MergeJoin can be used to only join records if a particular condition is met. Otherwise, on of the input rows is joined with an empty (null) record.

```C#
public class MyRow
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string FullName { get; set; }
}

public void JoinWithComparisonExample() {
    var source1 = new MemorySource<MyRow>();
    source1.DataAsList.Add(new MyRow() { Id = 1, FirstName = "Elvis" });
    source1.DataAsList.Add(new MyRow() { Id = 2, FirstName = "Psy" });
    source1.DataAsList.Add(new MyRow() { Id = 3, FirstName = "Marilyn" });
    var source2 = new MemorySource<MyRow>();
    source2.DataAsList.Add(new MyRow() { Id = 1, LastName = "Presley" });
    source2.DataAsList.Add(new MyRow() { Id = 3, LastName = "Monroe" });

    var join = new MergeJoin<MyRow>(
        (leftRow, rightRow) => {
            if (rightRow == null)
                leftRow.FullName = leftRow.FirstName + " " + "Unknown";
            else
                leftRow.FullName = leftRow.FirstName + " " + rightRow.LastName;
            return leftRow;
        });

    join.ComparisonFunc = (inputRow1, inputRow2) => {
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