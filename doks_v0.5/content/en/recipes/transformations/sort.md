---
title: "Sort"
description: "Examples and code recipes for the Sort component."
lead: "This article contains example code that shows the usage of the Sort component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2090
toc: true
---

## Basic usage

The sort is a simply transformation that sort your input data by a given comparison func. Please note that the sort is a blocking transformation - it will wait for all input data to arrive, before it starts sorting your data. 

```C#
public class MyRow
{
    public int Number { get; set; }
    public string Value { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Number = 2, Value = "A" });
source.DataAsList.Add(new MyRow() { Number = 5, Value = "B" });
source.DataAsList.Add(new MyRow() { Number = 1, Value = "Y" });
source.DataAsList.Add(new MyRow() { Number = 3, Value = "C" });
source.DataAsList.Add(new MyRow() { Number = 3, Value = "X" });
source.DataAsList.Add(new MyRow() { Number = 1, Value = "D" });
source.DataAsList.Add(new MyRow() { Number = 4, Value = "E" });

var dest = new MemoryDestination<MyRow>();

Comparison<MyRow> comp = new Comparison<MyRow>(
        (x, y) => {
            if (y.Number > x.Number) return 1;
            else if (y.Number < x.Number) return -1;
            else return 0;
        });

Sort<MyRow> sort = new Sort<MyRow>(comp);

source.LinkTo(sort);
sort.LinkTo(dest);

Network.Execute(source);

//Output:
//Number 5 - Value B
//Number 4 - Value E
//Number 3 - Value C
//Number 3 - Value X
//Number 2 - Value A
//Number 1 - Value Y
//Number 1 - Value D
foreach (var row in dest.Data)
    Console.WriteLine("Number " + row.Number + " - Value " + row.Value);

```

