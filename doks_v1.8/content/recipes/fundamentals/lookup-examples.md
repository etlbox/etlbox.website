---
title: "Data Lookup"
description: "Various examples how to use the lookup transformation"
lead: "This article contains examples which show how to use the lookup transformation and shows other techniques to lookup data.."
draft: false
images: []
menu:
  recipes:
    parent: "fundamentals"
weight: 3
toc: true
---

## Examples from the docs

The first of this section will contain example code that is also used in the [documentation for the lookup](/docs/transformations/lookup). It will show these examples in a very condensed format.

#### Customer table

The example from the docs use a SqlServer table to read additional customer data from a table.
The table `customer` has two columns (Id and Name) and contains the following data:

Id|Name
--|----
1|John
2|Jim

### Simple usage of lookup

The following code snipped will enrich the incoming data rows with a customer Id using the `ApplyRetrievedCacheToInput` of the lookup transformation.

``` C#
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

### Using attributes

Instead of defining a retrieval function, you can also use pre-defined attributes to configure the lookup.

```C#
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

### Attributes with dynamic objects

If you are using the dynamic `ExpandoObject` for you data flow, you can't decorate properties with attributes as dynamic objects don't offer this language feature. Instead you can use the `MatchColumns` and `RetrieveColumns` properties on the lookup to configure it.

To achieve the same setup like in the previous example, use the following code:

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

### Using a partial cache

By default, the lookup will always load the lookup source into memory once the first record arrives at the lookup transformation. For database tables, you can configure the lookup so that it will only load the records from the lookup source which are needed to process the current batch.

```C#
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
```

### Partial cache with custom sql

By default, the partical cache mode will use a simple `SELECT` query to retrieve data from the source table. You can define your own sql logic for reading data from the lookup table.

```C#
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

## Additional examples for LookupTransformation

the following example are additional examples to demonstrate the usage of the lookup.

### Case-insensitive comparison

This examples show if you want to compare two strings, but want to work the comparison case-insensitive and therefore ignoring upper/lower cases.

```C#
public class InputRow
{
    public string Id { get; set; }
    public string SomeValue { get; set; }
    public string ValueFromLookup { get; set; }
}

public class LookupRow
{
    [MatchColumn("Id")]
    public string LookupId { get; set; }
    [RetrieveColumn("ValueFromLookup")]
    public string LookupValue { get; set; }

}

public void UsingGetInputRecordKeyFunc()
{
    var source = new CsvSource<InputRow>("InputData.csv");
    source.Configuration.MissingFieldFound = null;

    var lookupSource = new MemorySource<LookupRow>();
    lookupSource.DataAsList = new List<LookupRow>() {
        new LookupRow() { LookupId = "idstringa", LookupValue = "A" },
        new LookupRow() { LookupId = "idstringb", LookupValue = "B" },
        new LookupRow() { LookupId = "idstringc", LookupValue = "C" }
    };

    var lookup = new LookupTransformation<InputRow, LookupRow>();
    lookup.Source = lookupSource;
    lookup.InputKeySelector = row => row.Id.ToLower();
    lookup.SourceKeySelector = row => row.LookupId;
    var dest = new CsvDestination<InputRow>("output1.csv");

    source.LinkTo(lookup).LinkTo(dest);

    Network.Execute(source);

    PrintFile("InputData.csv");
    PrintFile("output1.csv");
}

private static void PrintFile(string filename)
{
    Console.WriteLine(Environment.NewLine + $"{filename} content:");
    foreach (var line in File.ReadLines(filename))
        Console.WriteLine(line);
}
```

### Overwriting default compare methods

 Internally, the lookup stores an object as dictionary key. If the used object for the key overrides GetHashCode and Equals, you can overwrite the default implementation to define your own matching logic.

 {{< alert text="We recommend to overwrite the Key Function (GetInputRecordKeyFunc/GetSourceRecordKeyFunc) as described in the previous example instead!" >}}

```C#
public class MyInputRow
{
    public string Id { get; set; }
    [Ignore]
    public ComparableObject ConvertedId => new ComparableObject(Id);
    public string SomeValue { get; set; }
    public string ValueFromLookup { get; set; }
}

public class MyLookupRow
{
    [MatchColumn("ConvertedId")]
    public ComparableObject LookupId { get; set; }
    [RetrieveColumn("ValueFromLookup")]
    public string LookupValue { get; set; }

}

public class ComparableObject
{
    public string Id { get; set; }
    public ComparableObject(string id)
    {
        Id = id;
    }
    public override int GetHashCode()
    {
        return Id.ToLower().GetHashCode();
    }

    public override bool Equals(object obj)
    {
        var comp = obj as ComparableObject;
        if (comp == null) return false;
        return comp.Id.ToLower() == this.Id.ToLower();
    }
}

public void OverwritingComparisonInObject()
{
    var source = new CsvSource<MyInputRow>("InputData.csv");
    source.Configuration.MissingFieldFound = null;

    var lookupSource = new MemorySource<MyLookupRow>();
    lookupSource.DataAsList = new List<MyLookupRow>() {
        new MyLookupRow() { LookupId = new ComparableObject("idstringa"), LookupValue = "A" },
        new MyLookupRow() { LookupId = new ComparableObject("idstringb"), LookupValue = "B" },
        new MyLookupRow() { LookupId = new ComparableObject("idstringc"), LookupValue = "C" }
    };

    var lookup = new LookupTransformation<MyInputRow, MyLookupRow>();
    lookup.Source = lookupSource;

    var dest = new CsvDestination<MyInputRow>("output2.csv");

    source.LinkTo(lookup).LinkTo(dest);

    Network.Execute(source);

    PrintFile("InputData.csv");
    PrintFile("output1.csv");
}
```
## Alternatives to LookupTransformation

### BatchedRowTransformation

You can also utilize the RowTransformation or the BatchRowTransformation to enrich your data with custom code.
Below an example for the BatchRowTransformation.
We used the BatchTransformation so that we can execute one sql statement for a set of data - 100 in this example. If we would execute the statement for every row, the lookup could become very slow (depending on your database connection speed).

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

var batchTrans = new BatchTransformation<Order>()
{
    BatchSize = 100,
    BatchTransformationFunc =
    batch =>
    {
        var names = string.Join(",", batch.Select(cust => $"'{cust.CustomerName}'"));
        string curName =""; int curId =0;
        Dictionary<string, int> idByName = new Dictionary<string, int>();
        var sql = new SqlTask()
        {
            ConnectionManager = SqlConnection,
            Sql = $"SELECT DISTINCT Name, Id FROM CustomerTable WHERE Name IN ({names})",
            AfterRowReadAction = () => { idByName.Add(curName, curId); },
            Actions = new List<Action<object>>() {
                name => curName = (string)name,
                id => curId = (int)id
            }
        };
        sql.ExecuteReader();
        foreach (var row in batch)
            row.CustomerId = idByName[row.CustomerName];
        return batch;
    }
};
var dest = new MemoryDestination<Order>();
orderSource.LinkTo(batchTrans).LinkTo(dest);
Network.Execute(orderSource);

foreach (var result in dest.Data)
    Console.WriteLine($"Customer {result.CustomerName} has id {result.CustomerId}");
```

### MergeJoin

Instead of using the lookup, a MergeJoin could also be used to enrich data from two tables or other data sources.

{{< alert text="The MergeJoin works best when the input data from both sorted is already sorted by the joining key!" >}}

```C#
var orderSource = new MemorySource<Order>();
orderSource.DataAsList.Add(new Order() { OrderNumber = 815, CustomerName = "John" });
orderSource.DataAsList.Add(new Order() { OrderNumber = 4711, CustomerName = "Jim" });
var customerSource = new MemorySource<Customer>();
customerSource.DataAsList.Add(new Customer() { Id = 1, Name = "John" });
customerSource.DataAsList.Add(new Customer() { Id = 2, Name = "Jim"});

var join = new MergeJoin<Order, Customer, Order>(
    (leftRow, rightRow) =>
    {
        if (rightRow == null || leftRow == null) //NoMatch
    return null;
        else
            return new Order() { CustomerId = rightRow.Id, CustomerName = leftRow.CustomerName, OrderNumber = leftRow.OrderNumber };

    });

join.ComparisonFunc = (leftRow, rightRow) => string.Compare(leftRow.CustomerName, rightRow.Name);

var dest = new MemoryDestination<Order>();
orderSource.LinkTo(join.LeftInput);
customerSource.LinkTo(join.RightInput);
join.LinkTo(dest);

Network.Execute(orderSource, customerSource);

foreach (var result in dest.Data)
    Console.WriteLine($"Customer {result.CustomerName} has id {result.CustomerId}");
```


## Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/LookupExamples" >}}


