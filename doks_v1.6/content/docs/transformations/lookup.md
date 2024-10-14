---
title: "Lookup Transformation"
description: "Details about the LookupTransformation"
lead: "Improve your data with the LookupTransformation. This guide shows you how to add more information to your data as it moves through the process, making sure your data is complete and useful."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 610
toc: true
chatgpt-review: true
---

## Overview

The `LookupTransformation` in ETLBox is a powerful component used to enhance your ETL processes by enriching input data with additional information from a secondary data source, referred to as the lookup source. This is essential when you need to combine data from different sources to ensure your dataset is complete and comprehensive.

The lookup is a partially blocking transformation. When a row arrives at the `LookupTransformation`, the component will start to load the lookup source data. It will block execution until either all lookup data has been loaded (Full cache mode) or the relevant lookup data has been loaded into memory (partial cache mode).

## Basic Lookup

The core functionality of the `LookupTransformation` is to merge data from the lookup source with your primary data flow. You start by defining your input and lookup data models. For example:

```csharp
public class InputRow {
    public int Id { get; set; }
    public string Value { get; set; }
}

public class LookupRow {
    public int LookupId { get; set; }
    public string LookupValue { get; set; }
}
```

You then create the sources for both input and lookup data:

```csharp
var inputSource = new MemorySource<InputRow>();
inputSource.DataAsList = new List<InputRow> {
    new InputRow { Id = 1 },
    new InputRow { Id = 2 },
    new InputRow { Id = 3 }
};

var lookupSource = new MemorySource<LookupRow>();
lookupSource.DataAsList = new List<LookupRow> {
    new LookupRow { LookupId = 1, LookupValue = "Value1" },
    new LookupRow { LookupId = 2, LookupValue = "Value2" }
};
```

Configure the `LookupTransformation` to specify how the input data should be enriched:

```csharp
var lookup = new LookupTransformation<InputRow, LookupRow>();
lookup.Source = lookupSource;
lookup.ApplyRetrievedCacheToInput = (input, cache) => {
    input.Value = cache.List.FirstOrDefault(l => l.LookupId == input.Id)?.LookupValue;
    return input;
};
```

Finally, execute the transformation by linking the sources and destination:

```csharp
var dest = new MemoryDestination<InputRow>();
inputSource.LinkTo(lookup);
lookup.LinkTo(dest);
Network.Execute(inputSource);
```

After executing the transformation, you can access the enriched data from the destination:

```csharp
foreach (var row in dest.Data) {
    Console.WriteLine($"Id: {row.Id}, Value: {row.Value}");
}
```

### Lookup source types

As a source for the lookup transformation, any ETLBox source component can be used. For example, you could use the `DbSource` to read the lookup data from a database table, or you could use the `CsvSource` or `JsonSource` to gather lookup data from a file. When you use the streaming connectors (like `JsonSource`, `CsvSource`, `XmlSource`, etc.), you are not limited to reading data from files. You could also change the `ResourceType` to `ResourceType.Http` or `ResourceType.AzureBlob` to read from a web endpoint or an Azure blob. If you need custom logic to retrieve your lookup data, you could use the `CustomSource` to define your logic for gathering your lookup source data.

## Caching Modes

The `LookupTransformation` offers two caching modes to optimize performance.

### Full Cache

Full caching loads all the lookup data into memory before processing starts, making it ideal for smaller datasets. To enable full caching, set the `CacheMode` property:

```csharp
lookup.CacheMode = CacheMode.Full;
```

This works for all source types.

### Partial Cache

{{< alert text="The partial cache is only applicable if the Lookup source is a database. For other source types, you can only use the Full Cache" >}}

Partial caching loads only the necessary lookup data as needed, which is suitable for larger datasets. This helps manage memory usage efficiently:

```csharp
lookup.CacheMode = CacheMode.Partial;
lookup.PartialCacheSettings.LoadBatchSize = 100; // Load data in batches of 100 records
```

The partial cache will only work in combination with the `DbSource` as the source for the Lookup.

#### MaxCacheSize

The `MaxCacheSize` property controls the maximum size of the cache used in the `LookupTransformation` when in **Partial Cache** mode. This property defines how many items can be stored in the cache at any given time. If the cache reaches the specified limit, the system applies the configured **eviction policy** to remove the least relevant items.

```csharp
lookup.PartialCacheSettings.MaxCacheSize = 1000;  // Set cache size to 1000 items
```

For example, if you set `MaxCacheSize = 1000`, the cache will store up to 1000 items. When this limit is reached, the **eviction policy** (e.g., Least Recently Used, Least Frequently Used) will decide which entries to remove from the cache to make space for new data.

This property is essential for managing memory usage when dealing with large datasets, ensuring that the cache remains efficient while optimizing the ETL process.

### Cache Eviction Policies

When using partial caching, it's important to manage the cache size. The `LookupTransformation` provides several eviction policies to control how data is removed from the cache when it reaches its maximum size:

- **Least Recently Used (LRU)**: Evicts the least recently accessed items from the cache.
- **Least Frequently Used (LFU)**: Evicts the least frequently accessed items from the cache.
- **First In First Out (FIFO)**: Evicts the oldest items in the cache first.
- **Last In First Out (LIFO)**: Evicts the most recently added items first.

Set the eviction policy using the `EvictionPolicy` property:

```csharp
lookup.PartialCacheSettings.EvictionPolicy = CacheEvictionPolicy.LeastRecentlyUsed;
```

### Partial Cache with custom SQL

By default, the lookup transformation doesn't know how to retrieve the data from the database source. You can define your own SQL code that describes how to retrieve the corresponding columns from that database to refill your partial lookup cache:

```csharp
lookup.CacheMode = CacheMode.Partial;
lookup.PartialCacheSettings.LoadBatchSize = 100;
lookup.PartialCacheSettings.LoadCacheSql = inputs =>
{
    var ids = string.Join(",", inputs.Select(i => i.Id));
    return $"SELECT Id, Value FROM LookupTable WHERE Id IN ({ids})";
};
```

This is only necessary if you want full control over how the lookup retrieves data from the database source. If you provide the `MatchColumns` and `RetrieveColumns`, the SQL for retrieving data from the lookup database source is generated automatically.

## Handling Multiple Matches

If your lookup key can match multiple records, you can enable handling multiple matches:

```csharp
lookup.PermitMultipleEntriesPerKey = true;
lookup.ApplyRetrievedCacheForMultipleOutputs = (input, cache) => {
    var results = cache.List.Where(l => l.LookupId == input.Id).Select(l => {
        var newRow = input.Clone(); // Assumes InputDataRow implements ICloneable
        newRow.Value = l.LookupValue;
        return newRow;
    }).ToArray();
    return results;
};
```

{{< alert text="The main difference between the <code>ApplyRetrievedCacheForMultipleOutputs</code> and <code>ApplyRetrievedCacheForInput</code> is that the first one can return an array of rows instead of a single row. This allows you to return multiple rows if necessary that can be processed by the next component. If you always want to return a single row, use the <code>ApplyRetrievedCacheForInput</code>" >}}

## Using the CachedData collections

You may have noticed that the `ApplyRetrievedCacheToInput` or `ApplyRetrievedCacheForMultipleOutputs` function gives you a `CachedData` object that holds multiple collections with data from the lookup source. One is called `List` and is an `IEnumerable`, which you can use to view your retrieved data. But accessing data in this collection can sometimes take a while, depending on the size of your lookup source data. Consider this enumerable a convenient view on your data.

Alternatively, you can use the `Items` or `ItemsCollection`. The first one will only contain data if you have set `PermitMultipleEntriesPerKey` to `false`. If this is set to `true`, you allow the lookup to have more than one match for a key. Then, you will find all the data that matches the key in the `ItemsCollection` dictionary. Both are dictionaries, and accessing data in them will be much faster than using the `List` property (which is only a wrapper for the values of the current applicable dictionary).

This only applies if you are using the `ApplyRetrievedCacheToInput` or `ApplyRetrievedCacheForMultipleOutputs` and accessing the `CachedData` object within this function. When you use the `LookupTransformation` via the `Match/Retrieve` attributes only, you don’t have to worry about performance. Internally, the lookup cache will be accessed via the dictionary keys, and everything should run fast.

## Defining your own keys for matching

The lookup expects that the incoming and the lookup object have a unique key that is used for matching. You can define your own custom logic for how the key is retrieved from both.

```csharp
var orderSource = new MemorySource<Order>();
orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
orderSource.DataAsList.Add(new Order

() { OrderNumber = 4711, CustomerName = "Jim" });

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

## Dynamic Object Support

The `LookupTransformation` can handle dynamic objects, allowing flexible data structures. This is particularly useful for handling data with varying schemas or for on-the-fly manipulation:

```csharp
var dynamicLookupSource = new MemorySource<dynamic>();
dynamicLookupSource.DataAsList = new List<dynamic> {
    new { Key = 1, Value = "DynamicValue1" },
    new { Key = 2, Value = "DynamicValue2" }
};

var dynamicLookup = new LookupTransformation<dynamic, dynamic>();
dynamicLookup.Source = dynamicLookupSource;
dynamicLookup.ApplyRetrievedCacheToInput = (input, cache) => {
    input.DynamicValue = cache.List.FirstOrDefault(l => l.Key == input.Key)?.Value;
    return input;
};

```

## Error Handling

Handling errors during the lookup process is crucial for maintaining data integrity and ensuring the ETL process completes successfully. The `LookupTransformation` allows you to define custom error handling logic:

```csharp
lookup.OnException = (ex, row) => {
    Console.WriteLine($"Error processing row {row.Id}: {ex.Message}");
};
```

This error handler will be called whenever an exception occurs, allowing you to log the error, skip the problematic row, or take other appropriate actions.

## Attribute-Based Configuration

Attributes can be used to define which columns should be used for matching and retrieving data, simplifying the setup of the `LookupTransformation`. Define your data models with custom attributes:

```csharp
public class InputData {
    public int Id { get; set; }
    public string Value { get; set; }
}

public class LookupData {
    [MatchColumn("Id")]
    public int LookupId { get; set; }
    [RetrieveColumn("Value")]
    public string LookupValue { get; set; }
}

var lookup = new LookupTransformation<InputData, LookupData>();
lookup.Source = lookupSource;
```

#### Matching by exact Types

The `UseExactNumericTypes` property determines whether exact numeric types should be used. E.g. the string "7" and the integer 7 have different data types, but will still be identified as a match from the Lookup. Settings this to true will take the data types into account.

```csharp
public bool UseExactNumericTypes { get; set; }
```


### Multiple Match and Retrieve Columns

You can define models with multiple match and retrieve columns, allowing for complex data transformations:

```csharp
public class InputRow {
    public int? Id1 { get; set; }
    public int? Id2 { get; set; }
    public string Value { get; set; }
}

public class LookupRow {
    [MatchColumn("Id1")]
    public int? LookupId1 { get; set; }
    [MatchColumn("Id2")]
    public int? LookupId2 { get; set; }
    [RetrieveColumn("Value")]
    public string LookupValue { get; set; }
}

var lookup = new LookupTransformation<InputRow, LookupRow>();
lookup.Source = lookupSource;
```

The `LookupTransformation` can handle nullable values in both input and lookup data models, ensuring that all relevant data is considered during the lookup process.

### Attributes with dynamic objects

Instead of using classic objects for the flow, the same can be achieved using the (dynamic) ExpandoObject. This object allows you to dynamically add properties to it, and there won't be any compile-time type checks for this object.

This is how the code looks like using the ExpandoObject:

```C#
 public static void Main()
{
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





