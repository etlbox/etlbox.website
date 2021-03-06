---
title: "Custom code"
description: "Details about the CustomSource and CustomDestination"
lead: "ETLBox allows you to create your own implementation of a source or destinations. This gives you high flexibility if you need to integrate systems that are currently now included in the list of default connectors."
draft: false
images: []
menu:
  docs:
    parent: "other-connectors"
weight: 510
toc: true
---

#### Core package

The `CustomSource` and `CustomDestination` are part of the ETLBox core package - you don't need to reference any additional packages to use these connectors. 

## CustomSource

A custom source can generate any type of  output you need.  It will need two functions to work properly: A read function that generates one data row as output, and a reading completed predicate that returns true if you reached the end of your data. Bot functions get the current progress count as input parameters. It is optional to use the progress count - it is just an information how many rows have been processed so far from the custom source. 

#### Buffer

The CustomSource has an output buffer - this means that every data row can be cached before it is send to the next component in the flow. You can restrict the maximal buffer size by setting MaxBufferSize to a value greater than 0. The default value is 100000 rows. 

#### Example
Let's look at a simple example. Assuming we have a list of strings, and we want to return these string wrapped into an object data for our source. So for each string in our input array we create an object that we send into our flow. When all elements are processed, we set up an expression that returns true.

```C#
public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

public static void Main()
{
    List<string> Data = new List<string>()
    {
        "Test1", "Test2", "Test3"
    };
    var source = new CustomSource<MyRow>();
    source.ReadFunc = progressCount =>
    {
        return new MyRow()
        {
            Id = progressCount + 1,
            Value = Data[progressCount]
        };                                
    };
    source.ReadingCompleted = progressCount => progressCount >= Data.Count;

    var dest = new MemoryDestination<MyRow>();

    source.LinkTo(dest);

    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id: {row.Id} Value: {row.Value}");

    //Output
    /*
        Id: 1 Value: Test1
        Id: 2 Value: Test2
        Id: 3 Value: Test3
    */
}
```

### Using dynamic objects

Like all other components in ETLBox, CustomSource also has a default implementation which uses ExpandoObjects. The above example could be modified like this to create code without any object types:

```C#
public static void Main()
{
    List<string> Data = new List<string>()
    {
        "Test1", "Test2", "Test3"
    };           

    var source = new CustomSource();
    source.ReadFunc = progressCount =>
    {
        dynamic result = new ExpandoObject();
        result.Id = progressCount + 1;
        result.Value = Data[progressCount];                
        return result;
    };
    source.ReadingCompleted = progressCount => progressCount >= Data.Count;

    var dest = new MemoryDestination();

    source.LinkTo(dest);

    Network.Execute(source);

    foreach (dynamic row in dest.Data)
        Console.WriteLine($"Id: {row.Id} Value: {row.Value}");

    //Output
    /*
        Id: 1 Value: Test1
        Id: 2 Value: Test2
        Id: 3 Value: Test3
    */
}
```

### Using string array

Instead of parsing your input data into an object, of course you can also simply pass your array into the flow. If we modify our example again to work with arrays, we will get the following code:

```C#
public static void Main()
{
    List<string[]> Data = new List<string[]>()
    {
        new string[] {  "1", "Test1" },
        new string[] {  "2", "Test2" },
        new string[] {  "3", "Test3" },
    };           
    var source = new CustomSource<string[]>();
    source.ReadFunc = progressCount => Data[progressCount];
    source.ReadingCompleted = progressCount => progressCount >= Data.Count;

    var dest = new MemoryDestination<string[]>();

    source.LinkTo(dest);

    Network.Execute(source);

    foreach (var row in dest.Data)
        Console.WriteLine($"Id: {row[0]} Value: {row[1]}");

    //Output
    /*
        Id: 1 Value: Test1
        Id: 2 Value: Test2
        Id: 3 Value: Test3
    */
}
```

## Custom Destination

The use of a custom destination is even simpler - a custom destination  just calls an action for every received record. In this action you will the receive each incoming row as well as an progress count of already received data. It is in your responsibility to do the further processing of the record. E.g. you could execute some code which writes the line into the database, or you could add it to an internal list and the convert this list into a json. Though both things could be accomplished with either the DbDestination or the JsonDestination, here is an example for the latter one.

#### Buffer 

The CustomDestination has an input buffer - this means that every data row can be cached before it is actually processed from your destination. This is the case if your processing takes longer than new data arrive. You can restrict the maximal buffer size by setting MaxBufferSize to a value greater than 0. The default value is 100000 rows. 

### Example

```C#
 public class MyRow
{
    public int Id { get; set; }
    public string Value { get; set; }
}

public static void Main()
{
    var source = new MemorySource<MyRow>();
    source.DataAsList.Add(new MyRow() { Id = 1, Value = "Test1" });
    source.DataAsList.Add(new MyRow() { Id = 2, Value = "Test2" });

    List<MyRow> rows = new List<MyRow>();
    var dest = new CustomDestination<MyRow>();
    dest.WriteAction = (row, progressCount) => rows.Add(row);

    source.LinkTo(dest);
    Network.Execute(source);
            
    string json = JsonConvert.SerializeObject(rows, Formatting.Indented);

    Console.WriteLine(json);

    //Output
    /*
        [
        {
            "Id": 1,
            "Value": "Test1"
        },
        {
            "Id": 2,
            "Value": "Test2"
        }
    ]
    */
}
```

### Using dynamic object 

CustomDestination also works with dynamic ExpandoObject. Simple use the default implementation when you want to work with an ExpandoObject.  You can access each dynamic object in your WriteAction, together with the current progress count.

```C#
List<ExpandoObject> rows = new List<ExpandoObject>();
var dest = new CustomDestination();
dest.WriteAction = (row, progressCount) => rows.Add(row);
```

### Using arrays

Also you can use the Custom destination with arrays. Within the WriteAction you will have access to each incoming array row (along with the current progress count),

```C#
List<string[]> rows = new List<string[]>();
var dest = new CustomDestination<string[]>();
dest.WriteAction = (row, progressCount) => rows.Add(row);
```


