---
title: "Void destination"
description: "Details about the VoidDestination"
lead: "The Void destination can be used to discard records"
draft: false
images: []
menu:
  docs:
    parent: "other-connectors"
weight: 540
toc: true
---

#### Core package
The `VoidDestination` is part of the ETLBox core package - you don't need to reference any additional package to use this destination.

## Usage

The VoidDestination is best used when using predicate in your flow. All records in you flow need to be send to some kind of destination, otherwise your data flow will never finish. To discare records, simple send data into the VoidDestination.

```C#
public class MyRow {
    public int Value { get; set; }
}
var source = new CsvSource<MyRow>("test.txt");
var destKeep = new MemoryDestination<MyRow>();
var destVoid = new VoidDestination();

source.LinkTo(destKeep, v => v.Value > 10);
source.LinkTo(destVoid, v => v.Value <= 10);

Network.Execute(source);
``` 

### Implict use 

The example above can be simplified to use it without an explicit declaration of the VoidDestination.

You can omit the declaration of the `VoidDestination` and change the linking of the flows using the third method parameter of the `LinkTo()` method:

```C#
public class MyRow {
    public int Value { get; set; }
}
var source = new CsvSource<MyRow>("test.txt");
var destKeep = new MemoryDestination<MyRow>();

source.LinkTo(destKeep, v => v.Value > 10, v => v.Value <= 10>);

Network.Execute(source);
``` 

{{< alert text="Make sure that all records a are send to any kind of destination. If not all records arrive at a destination, you data flow may never complete as it will wait that all records are processed." >}}