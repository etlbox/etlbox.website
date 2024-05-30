---
title: "Lookup transformation"
description: "Examples and code recipes for the LookupTransformation component."
lead: "This article contains example code that shows the usage of the LookupTransformation component."
draft: false
images: []
menu:
  recipes:
    parent: "transformations"
weight: 2087
toc: true
---


## Using lookup with custom retrieval function

This example shows how the lookup can be used with a `RetrievalFunc` 

```C#
public class Order
{
    public int OrderNumber { get; set; }
    public string CustomerName { get; set; }
    public int? CustomerId { get; set; }
}

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public void UsingLookup() {
    var orderSource = new MemorySource<Order>();
    orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
    orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });

    var lookupSource = new DbSource<Customer>(SqlConnection, "CustomerTable");

    var lookup = new LookupTransformation<Order, Customer>();
    lookup.Source = lookupSource;
    lookup.RetrievalFunc =
        (row, cache) => {
            row.CustomerId = cache.Where(cust => cust.Name == row.CustomerName)
                                    .Select(cust => cust.Id)
                                    .FirstOrDefault();
            return row;
        };

    var dest = new MemoryDestination<Order>();

    orderSource.LinkTo(lookup).LinkTo(dest);
    Network.Execute(orderSource);

    foreach (var row in dest.Data)
        Console.WriteLine($"Order:{row.OrderNumber} Name:{row.CustomerName} Id:{row.CustomerId}");

    //Output
    //Order:815 Name:John Id:1 
    //Order:4711 Name:Jim Id:2
}

```

## Lookup with attributes

This example shows how the lookup can be configured with the `RetrieveColumn` and `MatchColumn` attributes. 

```C#
public class Order
{
    public int OrderNumber { get; set; }
    public string CustomerName { get; set; }
    public int? CustomerId { get; set; }
}

public class CustomerWithAttr
{
    [RetrieveColumn(nameof(Order.CustomerId))]
    public int Id { get; set; }
    [MatchColumn(nameof(Order.CustomerName))]
    public string Name { get; set; }
}

public void UsingLookupWithAttributes() {
    var orderSource = new MemorySource<Order>();
    orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
    orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });

    var lookupSource = new DbSource<CustomerWithAttr>(SqlConnection, "CustomerTable");

    var lookup = new LookupTransformation<Order, CustomerWithAttr>();
    lookup.Source = lookupSource;

    var dest = new MemoryDestination<Order>();

    orderSource.LinkTo(lookup).LinkTo(dest);
    Network.Execute(orderSource);

    foreach (var row in dest.Data)
        Console.WriteLine($"Order:{row.OrderNumber} Name:{row.CustomerName} Id:{row.CustomerId}");

    //Output
    //Order:815 Name:John Id:1 
    //Order:4711 Name:Jim Id:2
}
```

## Lookup attributes with dynamic object

This example shows how the lookup can be configured when processing dynamic `ExpandoObject`. 

```C#
public void AttributesWithDynamic() {
    var orderSource = new MemorySource();
    dynamic sourceRow1 = new ExpandoObject();
    sourceRow1.OrderNumber = 815;
    sourceRow1.CustomerName = "John";
    orderSource.DataAsList.Add(sourceRow1);
    dynamic sourceRow2 = new ExpandoObject();
    sourceRow2.OrderNumber = 4711;
    sourceRow2.CustomerName = "Jim";
    orderSource.DataAsList.Add(sourceRow2);

    var lookupSource = new DbSource(SqlConnection, "CustomerTable");

    var lookup = new LookupTransformation();
    lookup.MatchColumns = new[] {
        new MatchColumn() { LookupSourcePropertyName = "Name"
        , InputPropertyName = "CustomerName"
        }
    };
    lookup.RetrieveColumns = new[] {
        new RetrieveColumn() {
            LookupSourcePropertyName = "Id",
            InputPropertyName = "CustomerId"
        }
    };
    lookup.Source = lookupSource;

    var dest = new MemoryDestination();

    orderSource.LinkTo(lookup).LinkTo(dest);
    Network.Execute(orderSource);

    foreach (dynamic row in dest.Data)
        Console.WriteLine($"Order:{row.OrderNumber} Name:{row.CustomerName} Id:{row.CustomerId}");

    //Output
    //Order:815 Name:John Id:1 
    //Order:4711 Name:Jim Id:2
}
```

## Custom retrieval by key

This example shows how to set up a custom `RetrievalByKeyFunc`. This function is much faster than the `RetrievalFunc` on the lookup, but you need to specify how keys are identified on your data with the `GetInputRecordKeyFunc` and `GetSourceRecordKeyFunc`. 

```C#
public class Order
{
    public int OrderNumber { get; set; }
    public string CustomerName { get; set; }
    public int? CustomerId { get; set; }
}

public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
}

public void UsingLookupWithRetrievalByKeyFunc() {
    var orderSource = new MemorySource<Order>();
    orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
    orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });

    var lookupSource = new DbSource<Customer>(SqlConnection, "CustomerTable");

    var lookup = new LookupTransformation<Order, Customer>();
    lookup.Source = lookupSource;
    lookup.GetInputRecordKeyFunc = inputrow => inputrow.CustomerName;
    lookup.GetSourceRecordKeyFunc = sourcerow => sourcerow.Name;
    lookup.RetrievalByKeyFunc = (inputrow, dict) => {
        if (dict.ContainsKey(inputrow.CustomerName))
            inputrow.CustomerId = dict[inputrow.CustomerName].Id;
        return inputrow;
    };

    var dest = new MemoryDestination<Order>();

    orderSource.LinkTo(lookup).LinkTo(dest);
    Network.Execute(orderSource);

    foreach (var row in dest.Data)
        Console.WriteLine($"Order:{row.OrderNumber} Name:{row.CustomerName} Id:{row.CustomerId}");

    //Output
    //Order:815 Name:John Id:1 
    //Order:4711 Name:Jim Id:2
}
```

## Partial DB cache

This example shows how to activate the partial lookup mode when using a database as source for the lookup. By default, the lookup will load all data from the source into memory before processing any records. When the partial load mode is activated, only the records needed for the currently processed batch are stored in memory. This will only work if your lookup source is a `DbSource`. It is recommended to have the proper indexes set up to improve processing speed of the lookup.  

```C#
public class Order
{
    public int OrderNumber { get; set; }
    public string CustomerName { get; set; }
    public int? CustomerId { get; set; }
}


public class CustomerWithAttr
{
    [RetrieveColumn(nameof(Order.CustomerId))]
    public int Id { get; set; }
    [MatchColumn(nameof(Order.CustomerName))]
    public string Name { get; set; }
}

public void PartialDbCacheWithAttributes() {
    var orderSource = new MemorySource<Order>();
    orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
    orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });

    var lookupSource = new DbSource<CustomerWithAttr>(SqlConnection, "CustomerTable");

    var lookup = new LookupTransformation<Order, CustomerWithAttr>();
    lookup.Source = lookupSource;
    lookup.CacheMode = CacheMode.Partial;
    lookup.PartialCacheSettings.LoadBatchSize = 1;

    var dest = new MemoryDestination<Order>();

    orderSource.LinkTo(lookup).LinkTo(dest);
    Network.Execute(orderSource);

    foreach (var row in dest.Data)
        Console.WriteLine($"Order:{row.OrderNumber} Name:{row.CustomerName} Id:{row.CustomerId}");

    //Output
    //Order:815 Name:John Id:1 
    //Order:4711 Name:Jim Id:2
}
```

## Partial DB cache with custom sql

This example shows how custom sql code can be added when looking up data in a database source. 

```C#
public class Order
{
    public int OrderNumber { get; set; }
    public string CustomerName { get; set; }
    public int? CustomerId { get; set; }
}

public class CustomerWithAttr
{
    [RetrieveColumn(nameof(Order.CustomerId))]
    public int Id { get; set; }
    [MatchColumn(nameof(Order.CustomerName))]
    public string Name { get; set; }
}

public void PartialDbCacheWithSql() {
    var orderSource = new MemorySource<Order>();
    orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
    orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });

    var lookupSource = new DbSource<CustomerWithAttr>(SqlConnection, "CustomerTable");

    var lookup = new LookupTransformation<Order, CustomerWithAttr>();
    lookup.Source = lookupSource;
    lookup.CacheMode = CacheMode.Partial;
    lookup.PartialCacheSettings.LoadBatchSize = 1;
    lookup.PartialCacheSettings.LoadCacheSql = batch =>
        $@"SELECT Id, Name
            FROM CustomerTable
            WHERE Name in ({string.Join(",", batch.Select(r => $"'{r.CustomerName}'"))})";

    var dest = new MemoryDestination<Order>();

    orderSource.LinkTo(lookup).LinkTo(dest);
    Network.Execute(orderSource);

    foreach (var row in dest.Data)
        Console.WriteLine($"Order:{row.OrderNumber} Name:{row.CustomerName} Id:{row.CustomerId}");

    //Output
    //Order:815 Name:John Id:1 
    //Order:4711 Name:Jim Id:2
}
```

## Finding and returning multiple rows

{{< alert text="The main difference between the <code>ApplyRetrievedCacheForMultipleOutputs</code> and <code>ApplyRetrievedCacheForInput</code> is that the first one can return an array of rows instead of a single row. This allows you to return multiple rows if necessary that can be processed by the next component. If you always want to return a single row, use the <code>ApplyRetrievedCacheForInput</code>" >}}

```C#
public class MyLookupRow {
    public int LookupKey { get; set; }
    public string LookupValue { get; set; }
}

public class MyDataRow {
    public int Key { get; set; }
    public string Value { get; set; }
}

var lookupSource = new MemorySource<MyLookupRow>();
lookupSource.DataAsList.Add(new MyLookupRow() { LookupKey = 1, LookupValue = "Val1_1" });
lookupSource.DataAsList.Add(new MyLookupRow() { LookupKey = 1, LookupValue = "Val1_2" });
lookupSource.DataAsList.Add(new MyLookupRow() { LookupKey = 1, LookupValue = "Val1_3" });
lookupSource.DataAsList.Add(new MyLookupRow() { LookupKey = 2, LookupValue = "Val2" });
lookupSource.DataAsList.Add(new MyLookupRow() { LookupKey = 3, LookupValue = "Val3_1" });
lookupSource.DataAsList.Add(new MyLookupRow() { LookupKey = 3, LookupValue = "Val3_2" });
var inputData = new MemorySource<MyDataRow>();
inputData.DataAsList.Add(new MyDataRow() { Key = 1 });
inputData.DataAsList.Add(new MyDataRow() { Key = 2 });
inputData.DataAsList.Add(new MyDataRow() { Key = 3 });
inputData.DataAsList.Add(new MyDataRow() { Key = 4 });
var dest = new MemoryDestination<MyDataRow>();

var lookup = new LookupTransformation<MyDataRow, MyLookupRow>();
lookup.ApplyRetrievedCacheForMultipleOutputs =
    (row, cache) => {
        var rows = cache.List.Where(r => r.LookupKey == row.Key).Select(r => new MyDataRow() {
            Key = r.LookupKey,
            Value = r.LookupValue
        }).ToArray();
        if (rows.Count() == 0)
            return new List<MyDataRow>() { row }.ToArray();
        else
            return rows;
    };
lookup.Source = lookupSource;

inputData.LinkTo(lookup);
lookup.LinkTo(dest);

Network.Execute(inputData);


foreach (var row in dest.Data)
    Console.WriteLine($"Key:{row.Key} Value:{row.Value}");

//Output
//Key: 1 Value: Val1_1
//Key:1 Value: Val1_2
//Key:1 Value: Val1_3
//Key:2 Value: Val2
//Key:3 Value: Val3_1
//Key:3 Value: Val3_2
//Key:4 Value:
```