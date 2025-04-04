---
title: "Lookup Transformation"
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

This example shows how the lookup can be used with the `ApplyRetrievedCacheToInput` function.

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

var orderSource = new MemorySource<Order>();
orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });

var lookupSource = new DbSource<Customer>(SqlConnection, "CustomerTable");

var lookup = new LookupTransformation<Order, Customer>();
lookup.Source = lookupSource;
lookup.ApplyRetrievedCacheToInput =
    (row, cache) => {
        row.CustomerId = cache.List.Where(cust => cust.Name == row.CustomerName)
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
```

## Lookup attributes with dynamic object

This example shows how the lookup can be configured when processing dynamic `ExpandoObject`.

```C#
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
```

## Custom retrieval with own key

This example shows how to set up a custom `ApplyRetrievedCacheToInput`, where you define the used key that is stored in the underlying cache dictionary with the `InputKeySelector` and `SourceKeySelector` functions.

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

var orderSource = new MemorySource<Order>();
orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });

var lookupSource = new DbSource<Customer>(SqlConnection, "CustomerTable");

var lookup = new LookupTransformation<Order, Customer>();
lookup.Source = lookupSource;
lookup.InputKeySelector = inputrow => inputrow.CustomerName;
lookup.SourceKeySelector = sourcerow => sourcerow.Name;
lookup.ApplyRetrievedCacheToInput = (inputrow, cache) => {
    if (cache.Items.ContainsKey(inputrow.CustomerName))
        inputrow.CustomerId = cache.Items[inputrow.CustomerName].Id;
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
//Order:4711 Name:Jim Id:2>
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

## Dynamic objects with Dictionary Key

This example shows how the internal dictionary key can be used when using dynamic objects and overriding the `ApplyRetrievedCacheToInput` function.

```C#
var inputSource = new MemorySource();
inputSource.DataAsList = new List<ExpandoObject> {
    CreateDynamicInput(1,1),
    CreateDynamicInput(null,2),
    CreateDynamicInput(3,3),
};

var lookupSource = new MemorySource();
lookupSource.DataAsList = new List<ExpandoObject> {
    CreateDynamicSource(1,1, "Value1"),
    CreateDynamicSource(null,2, "X"),
    CreateDynamicSource(3,3, "Value3"),
};
var lookup = new LookupTransformation();
lookup.Source = lookupSource;
lookup.MatchColumns = new[] {
    new MatchColumn() { LookupSourcePropertyName = "LookupId", InputPropertyName = "Id" },
    new MatchColumn() { LookupSourcePropertyName = "LookupId2", InputPropertyName = "Id2" }
};
lookup.RetrieveColumns = new[] {
    new RetrieveColumn() { LookupSourcePropertyName = "LookupValue", InputPropertyName = "Value" }
};

lookup.ApplyRetrievedCacheToInput = FindInCacheItemsAndUpdate;
lookup.UseExactNumericTypes = true;

ExpandoObject FindInCacheItemsAndUpdate(ExpandoObject row, CachedData<ExpandoObject> cache) {
    var id1 = (row as IDictionary<string, object>)["Id"];
    var id2 = (row as IDictionary<string, object>)["Id2"];
    (row as IDictionary<string, object>).Add("Value", null);
    if (id1 == null) return row;
    var dictKey = new DictionaryKey();
    dictKey.Add("Id", id1, !lookup.UseExactNumericTypes);
    dictKey.Add("Id2", id2, !lookup.UseExactNumericTypes);
    if (cache.Items.ContainsKey(dictKey)) {
        var lookupHit = cache.Items[dictKey];
        (row as IDictionary<string, object>)["Value"] = (lookupHit as IDictionary<string, object>)["LookupValue"];
    }
    return row;
}


var dest = new MemoryDestination();
inputSource.LinkTo(lookup);
lookup.LinkTo(dest);
Network.Execute(inputSource);

foreach (dynamic row in dest.Data) {
    Console.WriteLine($"Id: \"{row.Id}\", Value: \"{row.Value}\"");
}

// Ouput
/*
Id: "1", Value: "Value1"
Id: "", Value: ""
Id: "3", Value: "Value3"
*/

ExpandoObject CreateDynamicInput(int? id, int id2) {
    dynamic result = new
        ExpandoObject();
    result.Id = id;
    result.Id2 = id2;
    return result;
}

ExpandoObject CreateDynamicSource(int? id, int id2, string value) {
    dynamic result = new
        ExpandoObject();
    result.LookupId = id;
    result.LookupId2 = id2;
    result.LookupValue = value;
    return result;
}
```


## Dynamic object with Own Key

This example shows how you can create your own key that is used in the underlying lookup dictionary when working with dynamic objects.

```C#
public class OwnKey {
    public int? Id1 { get; set; }
    public int? Id2 { get; set; }

    //Override Equals and GetHashCode to make the key comparable in the underlying cache dictionary
    public override bool Equals(object obj) {
        var other = obj as OwnKey;
        if (other == null) return false;
        return other.Id1 == Id1 && other.Id2 == Id2;
    }
    public override int GetHashCode() {
        return Id1.GetHashCode() ^ Id2.GetHashCode();
    }
}

var inputSource = new MemorySource();
inputSource.DataAsList = new List<ExpandoObject> {
    CreateDynamicInput(1,1),
    CreateDynamicInput(null,2),
    CreateDynamicInput(3,3),
};

var lookupSource = new MemorySource();
lookupSource.DataAsList = new List<ExpandoObject> {
    CreateDynamicSource(1,1, "Value1"),
    CreateDynamicSource(null,2, "X"),
    CreateDynamicSource(3,3, "Value3"),
};
var lookup = new LookupTransformation();
lookup.Source = lookupSource;

lookup.InputKeySelector = r => new OwnKey() {
    Id1 = (int?)(r as IDictionary<string, object>)["Id"],
    Id2 = (int?)(r as IDictionary<string, object>)["Id"]
};
lookup.SourceKeySelector = r => new OwnKey() {
    Id1 = (int?)(r as IDictionary<string, object>)["LookupId"],
    Id2 = (int?)(r as IDictionary<string, object>)["LookupId2"]
};
lookup.ApplyRetrievedCacheToInput = FindInCacheItemsAndUpdate;

ExpandoObject FindInCacheItemsAndUpdate(ExpandoObject row, CachedData<ExpandoObject> cache) {
    var id1 = (row as IDictionary<string, object>)["Id"];
    var id2 = (row as IDictionary<string, object>)["Id2"];
    (row as IDictionary<string, object>).Add("Value", null);
    if (id1 == null) return row;
    var dictKey = new OwnKey() {
        Id1 = id1 as int?,
        Id2 = id2 as int?
    };
    if (cache.Items.ContainsKey(dictKey)) {
        var lookupHit = cache.Items[dictKey];
        (row as IDictionary<string, object>)["Value"] = (lookupHit as IDictionary<string, object>)["LookupValue"];
    }
    return row;
}


var dest = new MemoryDestination();
inputSource.LinkTo(lookup);
lookup.LinkTo(dest);
Network.Execute(inputSource);

foreach (dynamic row in dest.Data) {
    Console.WriteLine($"Id: \"{row.Id}\", Value: \"{row.Value}\"");
}

// Ouput
/*
Id: "1", Value: "Value1"
Id: "", Value: ""
Id: "3", Value: "Value3"
*/
```
