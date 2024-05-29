---
title: "Lookup"
description: "Details about the LookupTransformation"
lead: "If you want to lookup some data from existing tables or other sources, the lookup transformation is the right choice. It allows you to enrich the incoming rows with data from the lookup source. "
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 650
toc: true
---

## Overview

The lookup transformation enriches the incoming data with data from the lookup source. To achieve this, all or some data from the lookup source is read into memory when the first record arrives. For each incoming row, the lookup tries to find a matching record in the in-memory table. If found, it uses this pre-loaded record to add additional data to the ingoing row. 

E.g. you have an order record that contains a customer name. This is your ingoing record into the lookup. Also, the lookup gets a table containing customer names and their ids as lookup source. Then the lookup can retrieve the customer id and update the property value in your order record during.

#### Buffer

The lookup is a partially blocking transformation. When the row arrives at the `LookupTransformation`, the component will start to load the lookup source data. It will block execution until either all lookup data has been loaded (Full cache mode) or the relevant lookup data has been loaded into memory (partial cache mode). The `LookupTransformation` has one input buffer. 
 
### Code snippet

```C#
public class Order
{    
    public int OrderNumber { get; set; }    
    public int CustomerId { get; set; }    
    public string CustomerName { get; set; }    
}

public class Customer
{   
    [RetrieveColumn(nameof(Order.CustomerId))]
    public int Id { get; set; }
    
    [MatchColumn(nameof(Order.CustomerName))]
    public string Name { get; set; }
}

DbSource<Order> orderSource = new DbSource<Order>("OrderData");
CsvSource<Customer> lookupSource = new CsvSource<Customer>("CustomerData.csv");
var lookup = new LookupTransformation<Order, Customer>();
lookup.Source = lookupSource;
DbDestination<Order> dest = new DbDestination<Order>("OrderWithCustomerTable");
orderSource.LinkTo(lookup).LinkTo(dest);
```


## Lookup step-by-step

The `LookupTransformation` can be compared to a simple row transformation, with the addition that you can define a lookup source and a lookup function.The lookup source can be any kind of ETLBox source component, e.g. a `DbSource` or `CsvSource`. When the first record arrives at the `LookupTransformation`, it will automatically load all data from the lookup source into memory. This data is then available in the lookup.

When you use the a DbSource as source for the lookup, you can also choose to only load partial chunks of data into memory instead the whole table. This can be useful if you source tables are bigger. 

### Initial setup

Let's look at an example. Assuming you have an order record that contains a customer name. 

```C#
public class Order
{    
    public int OrderNumber { get; set; }
    public string CustomerName { get; set; }
    public int? CustomerId { get; set; }
}

var orderSource = new MemorySource<Order>();
orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John"});
orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim"});
```

Now we have a customer table in our database that holds two records.

Id|Name
--|---------------
1 |John
2 |Jim

Our goal is to have a transformation that reads the Id from the customer table, based on the customer name. So for John we expect to find the Id 1, and for Jim Id 2. 

### Manual lookup in RowTransformation

Before we start digging deeper into the lookup, we could use a RowTransformation to achieve something similar like lookup. 
The RowTransformation could look like this:

```C#
 var rowTrans = new RowTransformation<Order>(
    row =>
    {
        int? id = SqlTask.ExecuteScalar<int>(SqlConnection,
            sql: $"SELECT Id FROM CustomerTable WHERE Name='{row.CustomerName}'");
        row.CustomerId = id;
        return row;
    });
```

Beside the fact the we it would be better to use a parameterized query (which SqlTask also supports), this would work as expected. For every row, the row transformation would call a SELECT on the database and find the corresponding customer id. 
Though this would work with small amount of data, this can become a bottleneck the more data we trying to send through this transformation. Even with a very fast responding database this will won't give you the desired performance, as the time to connect and retrieve the data will sum up. 

### Loading the data into memory

If we would replace the SELECT statement in the example above with something that directly accesses a list in memory, this would be much faster. This is what the lookup does: it loads any kind of ETLBox source (e.g. a `DbSource`, `CsvSource`, `JsonSource`...) into a in-memory list. This is then accessible in the lookup transformation, which is the similar to the row transformation. 

Let's create a DbSource, so that we can pass our customer table to the Lookup. 

```C#
public class Customer
{
    public int Id { get; set; }
    public string Name { get; set; }
}

var lookupSource = new DbSource<Customer>(SqlConnection, "CustomerTable");
```

Now we feed this lookupSource into our LookupTransformation. Then within the lookup transformation function, we can access our in-memory table containing the customer data.

```C#
var lookup = new LookupTransformation<Order, Customer>();
lookup.Source = lookupSource;
lookup.RetrievalFunc =
    (row, cache) =>
    {
        row.CustomerId = cache.Where(cust => cust.Name == row.CustomerName)
                              .Select(cust => cust.Id)
                              .FirstOrDefault();
        return row;
    };
``` 

As you can see, the lookup function has two input parameters: the current row and a cache object. The cache object is a Collection of the Customer objects. You can query this collection e.g. with Linq to retrieve the data you need from the cache.

The cache collection is populated when the first row arrives at the lookup. 

### Whole example code

Here is the whole example code:

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

 public static void Main()
{
    var orderSource = new MemorySource<Order>();
    orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
    orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });

    var lookupSource = new DbSource<Customer>(SqlConnection, "CustomerTable");

    var lookup = new LookupTransformation<Order, Customer>();
    lookup.Source = lookupSource;
    lookup.ApplyRetrievedCacheToInput  =
        (row, cache) =>
        {
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

### Lookup source types

 As a source for the lookup transformation any ETLBox source component will. So instead of using the `DbSource` to read data from the a database table, you can use the `CsvSource` to read the lookup data from a csv file. Or you could use the `JsonSource` to read json data. When you use the streaming connectors (like `JsonSource`, `CsvSource` or `XmlSource`) you are not limited to read data from files - you could also change the ResourceType to e.g. `ResourceType.Http` or `ResourceType.AzureBlob` to read your lookup data either from some web endpoint or from an Azure blob. If you need to have your own logic to retrieve your lookup data, you could use the `CustomSource` to define your own logic how to gather your lookup source data. 

## Using Attributes

Of course defining your own lookup function can be cumbersome sometimes. The lookup also defines a default lookup implementation, which is based on attributes in your objects. This allows you to control the data lookup without the need to write your own data retrieval function. 

The attributes needed to control the lookup are `MatchColumn` and `RetrieveColumn`. The MatchColumn defines the property name in the target object that needs to match. Only if the records matches (and also only for the first one) it will continue to retrieve the value using the `RetrieveColumn`. The RetrieveColumn tells the lookup the property name of the lookup type class from which the data is retrieved. 

### Attributes with objects 

So modifying our example above, it would look like this:

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

public static void Main()
{
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

### Attributes with dynamic objects

Instead of using classic objects for the flow, the same can be achieved using the (dynamic) ExpanoObject. This object allows you to dynamically add properties to it, and there won't be any compile-time type checks for this object. 

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

Please note that you now have to manually set up the Match and Retrieve columns properties for the lookup. 

### Multiple attributes

The MatchColumn and RetrieveColumn can be applied to as many properties as needed. If there are multiple MatchColumns, all properties need to be equal the source data to be identified as a match. If there are multiple retrieve columns, all columns from the source which names match with the properties are retrieved.

## Partial cache

By default, all data is always loaded into memory. This is called "FullCache".

If you use a `DbSource` as lookup source, you might want to avoid to load all data into memory. This can be achieved by setting up a partial db cache. Let's stick to our example above. The easiest way to use the partial cache here to set the `CacheMode` to `CacheMode.PartialFromDb`. As we only have 2 records in the source, we can also set the LoadBatchSize to 1.

```C#
lookup.CacheMode = CacheMode.PartialFromDb;
lookup.PartialCacheSettings.LoadBatchSize = 1;
```

 So only source data from the database would be loaded for every ingoing row. The default batch size for the lookup is 1000. The batch size of 1 would be not a good choice in your production code, it is only used here for the sake of the example. 

### Sql for partial cache

Just setting the cache mode to `PartialFromDb` only works if you are using the Match/Retrieve columns. If you don't make use of these, the lookup cache won't know by which key columns data should be retrieve from the lookup source. 
But you can define your own sql code to describe how to load data into the lookup cache:

```C#
lookup.CacheMode = CacheMode.PartialFromDb;
lookup.PartialCacheSettings.LoadBatchSize = 1;
lookup.PartialCacheSettings.LoadCacheSql = batch =>
    $@"SELECT Id, Name
        FROM CustomerTable
        WHERE Name in ({string.Join(",", batch.Select(r => $"'{r.CustomerName}'"))})";
```

As input for the `LoadCacheSql` expression you will receive the current batch. This data can be used to read the proper data from the source into the cache. As we have choosen the batch size 1 in our example, we will retrieve only one id and one name from the source. But you should try to use the default batch size of 1000 when you use the partial cache in your code.  

## Using the underlying dictionary 

You may have notice that the `ApplyRetrievedCacheToInput` fucntion is giving you a `CachedData` object that holds two collection with data from the lookup source. One is called `List` and contains and IEnumerable, which you could use. But in order to find object in this collection can sometimes take a while, depending on the size of your lookup source data. 

Additionally, you can use the `Items` or `ItemCollections`. The first one will only contain data if you have set `PermitMultipleEntriesPerKey` to false. If this is set to true, you are allowing the Lookup to have more than one match for a key. Then you will find all data that matches with the key in the `ItemsCollection` dictionary. Both are dictionaries, and accessing data in here will be much faster than using the `List` property (which is only a wrapper for the values of the current applicable dictionary)

When you use the `LookupTransformation` via the Match/Retrieve attributes only, you don't have to mind about performance. Internally, the lookup cache will be access via the dictionary keys, and everything should run fast.  


### Defining your own keys

The lookup expects that the incoming and the lookup object have a unique key that then is used for matching. You can define your own custom logic how the key is retrieved from both.

```C#
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