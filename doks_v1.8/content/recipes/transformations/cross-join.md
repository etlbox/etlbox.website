---
title: "Cross Join"
description: "Examples and code recipes for the CrossJoin component."
lead: "This article contains example code that shows the usage of the CrossJoin component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2084
toc: true
---

## Cross joining names

This example shows how to the cross join can be used to join names. The cross join basically create a Cartesian product of both inputs, means that every row of one input is joined with every row from the other input.


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

public void CrossJoiningNames() {
    var source1 = new MemorySource<MyLeftRow>();
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Elvis" });
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "James" });
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Marilyn" });
    var source2 = new MemorySource<MyRightRow>();
    source2.DataAsList.Add(new MyRightRow() { LastName = "Presley" });
    source2.DataAsList.Add(new MyRightRow() { LastName = "Monroe" });

    var join = new CrossJoin<MyLeftRow, MyRightRow, MyOutputRow>(
        (leftRow, rightRow) => {
            return new MyOutputRow() {
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

    //Output
    //Elvis Presley
    //James Presley
    //Marilyn Presley
    //Elvis Monroe
    //James Monroe
    //Marilyn Monroe
}
```
