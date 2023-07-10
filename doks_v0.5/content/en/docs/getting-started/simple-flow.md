---
title: "Simple flow"
description: "A simple data flow with ETLBox"
lead: "The main part of ETLBox are the data flow components. They are the building blocks for the ETL part, and contain classes that help you to to extracting, transform and load data.  This example will lead you through a simple data flow step-by-step."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 220
toc: true
---

## What is a data flow?

You have some data somewhere - stored in some files, a database table or a web service. Now you want to define a pipeline which takes this data, transforms it "on the fly" and writes it into a target (this could be again a database, a file or anywhere else). This is the pure essence of an ETL process: extracting, transforming, loading. 
The foundation to define such a data flow in ETLBox are called components. When these components are linked together, you will get some sort of pipeline where you data will run through. We will call this as a data flow. 

### Source components

All data flow pipelines will need at least one or more sources. Sources are basically everything that can read data from someplace 
(e.g. Csv file or database table) and then post this data into the pipeline. All sources are able to read data asynchronously. 
That means, while the component reads data from the source, it simultaneously sends the already processed data to components that are connected to source.
This is crucial when you operate with big amounts of data - you want be able to process chunks of data from the source and you want to avoid to load your source data into memory as a whole.  

There are different build-in data sources in ETLBox, e.g.: `CsvSource`, `DbSource` or `ExelSource` that can be easily used to connect to your data. If the predefined connectors are not able to satisfiy your needs, you can write your own source by extending the `CustomSource`. 

Once a source starts reading data, it will start sending data to its connected components. These could be either a Transformation or Destination.
Posting data into the flow always happens asynchronously in separate threads (even if you use the blocking Execute() method to start the flow). 

### Transformations

Transformations always have at least one input and one output. A transformation can receive data from one or multiple sources (or other transformations), and the transformation output can link to one or more destinations or other transformations. The purpose of a transformation component is to take the data from its input(s) and post the transformed data to its output(s). This is normally done on a row-by-row basis for non-blocking transformation. There are some transformation that operation on batches of data, and some transformation will block processing until some or all data arrived in one of the input buffer of the component - these are called blocking or partially blocking transformations. Additionally, every transformation has a limited input buffer in order to improve throughput. As soon as there is any data in the input, non-blocking transformation will start processing and post the result to the output. 

### Destination components 

Destination components normally have only one input. They define a target for your data, e.g. a database table, a file or a .NET collection.
If you are in need of your own written destination component, you can extend the `CustomDestination`.

Every Destination comes with a limited input buffer. So for a csv destination, data can be stored in this input buffer because writing into file could be slower than processing the data rows. A database destination will even wait until enough data was buffered, so that a whole batch of data can be written into the database using a bulk insert operation. 

## A simple dataflow

Let's look at a simple data flow like this:

Csv File (Source) --> Row transformation --> Database destination.

### Source file

The input file "demodata.csv"  has the following content:

rownr|name|quantity_m|quantity_l|price_in_cents
-----|----|----------|----------|--------------
1|"T-Shirt"|5|0|1200
2|"Shirt"|3|7|1500
3|"Jeans"|5|2|3000

It should simulate orders for clothing. All data is separated with a ",", and the first row is the header. 

### Destination table

We want to store the data from the file in a destination table in Sql Server. 
The destination table will look like this:

ColumnName|Data Type|Constraints
----------|---------|----------
Id|INT|PK,Identity (auto increment)
Item|NVARCHAR(50)|
Quantity|INT|
Price|DECIMAL(10,2)|

### Creating the components 

First we need to create a source, in this example it contain the order data. This will look like this:

```C#
CsvSource<string[]> source = new CsvSource<string[]>("demodata.csv");
```

We now add a row transformation. The output format of the `CsvSource` is a string array. In this example, 
we will convert the csv string array into an `Order` object and add some logic in the transformation.

```C#
RowTransformation<string[], Order> rowTrans = new RowTransformation<string[], Order>(
    row => new Order()
    {
        Item = row[1],
        Quantity = int.Parse(row[2]) + int.Parse(row[3]),
        Price = int.Parse(row[4]) / 100
    });
```

*Please note that you don't have to necessarily use a string array for reading csv file. You can use the CsvSource
already with the right data object.*

Now we need to create a destination. For the database destination we need a connection manager that stores
the connection string and provides support for a native ADO.NET connection to the database.

```C#
SqlConnectionManager connMan = new SqlConnectionManager("Data Source=.;Initial Catalog=demo;Integrated Security=false;User=sa;password=reallyStrongPwd123");
```

Always use the right connection manager for you database - e.g., the SqlConnectionManager will connect with 
a Sql Server (and expects a sql server connection string). There are also other connection managers
(e.g. `SQLiteConnectionManager` for SQLite, `PostgresConnectionManager` for Postgres or `MySqlConnectionManager`
for MySql).

{{< alert text="If you don't want to pass the connection manager object over and over again to your DataFlow or ControlFlow objects, you can store a default connection in the static property <code>Settings.DefaultDbConnection</code>" >}}

No we need a database destination.

```C#
DbDestination<Order> dest = new DbDestination<Order>(connMan, "OrderTable");
```

Notice that the destination is typed with the `Order` object. 
We also need to pass the connection manager to the DbDestination so that connection to our Sql Server can be used, 
and we provide the table name for the destination table. 

The Order object is a POCO (Plain Old Component Object) and looks like this:

 ```C#
public class Order
{
    public string Item { get; set; }
    public int Quantity { get; set; }
    public double Price { get; set; }
}
```

### Linking the components

Until now we have only created the components, but we didn't define the Data Flow pipe. Let's do this now:

```C#
source.LinkTo(rowTrans);
rowTrans.LinkTo(dest);
```

This will create a data  flow pipe CsvSource -> RowTransformation -> DbDestination. If your data flow becomes more complex, linking will 
become an essential part of your creation. There are transformations that have more than one input or output, and destinations accepts data from 
several sources. Even sources can split data across their destinations - you can defines rules how to split data as so called predicates. 

### Executing the dataflow

Now we will give the source the command to start reading data. 

```C#
Network.Execute(source);
``` 

This code will execute as an synchronous task - though the data flow itself will run in it's own thread.
To operate totally asynchronously, you could use the `Network.ExecuteAsync(source)` method. Each component does expose a `public Task Completion` property, which gives you information if the component is still running or already completed. 

## View the full code

This demo code is available online - {{< link-ext text="view the full code on Github" url="https://github.com/etlbox/etlbox.demo/tree/main/SimpleFlow" >}}.
