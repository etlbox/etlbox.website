---
title: "Filter transformation"
description: "Examples and code recipes for the FilterTransformation component."
lead: "This article contains example code that shows the usage of the FilterTransformation component."
draft: false
images: []
menu:
  recipes:
    parent: "components"
weight: 2086
toc: true
---


{{< alert text="Instead of the FilterTransformation, you can also use Linking with different Predicates to achieve the same behaviour. <a href=\"/docs/getting-started/linking/#predicates\">Read more about linking with predicates</a>" >}}


## Filter with POCO

This example shows how to filter data in a data flow with a strongly typed objects


```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

public void ExampleFilterPoco() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
    source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });

    var filter = new FilterTransformation<MyRow>();
    filter.FilterPredicate = row => {
        return row.Id == 2;
    };

    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(filter).LinkTo(dest);

    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    //Outputs
    //Id:1 Value:Test1
    //Id:3 Value:Test3
}
```

### Filter with Predicate linking

This example has the same effect as the previous code, but now we are using predicates in the `LinkTo` methods.

```C#
public void ExampleFilterLinkingWithPredicate() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
    source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });

    var dest = new MemoryDestination<MyRow>();
    var voidDest = new VoidDestination<MyRow>();

    source.LinkTo(dest, row => row.Id != 2);
    source.LinkTo(voidDest, row => row.Id == 2);

    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    //Outputs
    //Id:1 Value:Test1
    //Id:3 Value:Test3

    /* Delete below here */
    Assert.Collection(dest.Data,
        r => Assert.True(r.Id == 1 && r.Value == "Test1"),
        r => Assert.True(r.Id == 3 && r.Value == "Test3")
        );
}
```

### Predicate linking with implicit void

This example shows how the third parameter of the `LinkTo` method can be used to discard unwanted records. 

```C#
public void ExampleFilterLinkingWithPredicateAndImplicitVoid() {
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });
    source.DataAsList.Add(new MyRow() { Id = 3, Value = "Test3" });

    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(dest, row => row.Id != 2, row => row.Id == 2);

    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    //Outputs
    //Id:1 Value:Test1
    //Id:3 Value:Test3
}
```

## Filter transformation with dynamic

This examples shows how the `FilterTransformation` can be used with dynamic `ExpandoObject`.

```C#
public void ExampleFilterDynamic() {
    var source = new MemorySource();
    dynamic r1 = new ExpandoObject();
    r1.Id = 1; r1.Value = "Test1";
    source.DataAsList.Add(r1);
    dynamic r2 = new ExpandoObject();
    r2.Id = 2; r2.Value = "Test2";
    source.DataAsList.Add(r2);
    dynamic r3 = new ExpandoObject();
    r3.Id = 3; r3.Value = "Test3";
    source.DataAsList.Add(r3);

    var filter = new FilterTransformation();
    filter.FilterPredicate = row => {
        dynamic r = row;
        return r.Id == 2;
    };

    var dest = new MemoryDestination();

    source.LinkTo(filter).LinkTo(dest);

    Network.Execute(source);

    foreach (dynamic row in dest.Data)
        Console.WriteLine($"Id:{row.Id} Value:{row.Value}");

    //Outputs
    //Id:1 Value:Test1
    //Id:3 Value:Test3

    /* Delete below here */
    Assert.Collection(dest.Data,
        row => { dynamic r = row; Assert.True(r.Id == 1 && r.Value == "Test1"); },
        row => { dynamic r = row; Assert.True(r.Id == 3 && r.Value == "Test3"); }
        );
}
```