---
title: "Quickstart"
description: "Quickstart: Basic usage of ETLBox."
lead: "Let's get started. This page gives you a brief overview of the basic concepts and usage."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 210
toc: true
---

## What is ETLBox

ETLBox is a lightweight ETL (extract, transform, load) library and data integration toolbox for .NET. You can use it to read any data from different sources and connect them with customizable transformations. Finally, you can export the data into different databases, web endpoints, file types or any other destinations. While data is processed in memory, you can choose between different transformation components to harmonize, filter, aggregate, validate and clean your data.

ETLBox is a fully functional alternative to other ETL tools like SQLServer Integrations Services (SSIS) or Azure Data Factory. The main difference to other toolsets is that it doesn't come with a User Interface. But no worries! Working with ETLBox, you will discover that creating data flows programmatically is the best approach for solving most of your ETL and data integration related problems. 

### How to get ETLBox

ETLBox is developed in C# and targets .NET Standard 2.0 and higher. It can be used by almost every {{< link-ext text=".NET version" url="https://docs.microsoft.com/en-us/dotnet/standard/net-standard#net-implementation-support" >}} out there supported by Microsoft, including .NET Framework 4.X, .NET Core 2.X, .NET Core 3.X, .NET 5.0 and .NET 6.0. If you are still using .NET Framework, we recommend to use a Framework version not less than 4.7.2.

All ETLBox {{< link-ext url="https://www.nuget.org/packages?q=etlbox" text="packages are hosted on nuget" >}}. You will need to install always the {{< link-ext="https://www.nuget.org/packages/ETLBox/" text="core pacakge" >}} when working with ETLBox. It  contains the default connectors and transformations. 

Simply add it to your project using your nuget package manager.

```
dotnet add package ETLBox
```

The connectors are in separate packages - depending on your needs, choose the right connector package from the list. Pick the {{< link-ext url="https://www.nuget.org/packages/ETLBox.SqlServer/" text="ETLBox.SqlServer" >}} package if you want to connect to a (Azure) SQLServer database, or choose {{< link-ext url="https://www.nuget.org/packages/ETLBox.Json/" text="ETLBox.Json" >}}  if you want to load data from a Json file or REST endpoint. 

### Data and Control Flow

ETLBox is split into two main components: Data Flow components and Control Flow tasks. The Data Flow part provides the core components to create data integrations or ETL jobs. This module is the heart of ETLBox: It enables you to construct complex data pipelines that can transform, clean, enrich or distribute your data however you like. 

The tasks available in the Control Flow module allow you to execute common database queries with a simple syntax. You can create tables or read table definitions using an easy-to-read C# syntax that works on every supported database. 

Both components support the {{< link-ext url="https://docs.microsoft.com/en-us/dotnet/core/extensions/logging" text="logging API" >}} that works with a variety of built-in and third party logging providers. 

## Creating a data flow

Let's dive directly into creating our first ETL code.

ETLBox provides a big set of Data Flow components to construct your own ETL pipeline. To create a Data Flow pipeline, you need to follow three steps:

1. Define the components
2. Link the components
3. Execute the network

After the last step is started, the source will start reading and post its data into the components connected to its output. As soon as a connected component retrieves any data in its input, the component will start with processing the data and then send it further down the line to its own connected components. The dataflow will finish when all data from the source(s) are read, processed by the transformation(s) and arrived in the destination(s).

Transformations are not always needed - you can directly connect a source to a destination. Normally, each source has one output, each destination one input and each transformation at least one input and one or more outputs. 

All data is processed asynchronously by the components. Each component has its own set of buffers, so while the source is still reading data, the transformations  can already process it and the destinations can start writing the processed information into their target. So in an optimal flow only the currently processed row is stored in memory. Depending on the processing speed of your components, the buffer of each component can store additional rows to optimize throughput. E.g., database destinations will always wait until their buffer contains enough data to perform a bulk insert which is much faster than insert each row one by one. 

### Data Flow example

This example data flow will read order data from an example web endpoint, extract a value for each data record, enrich the data with customer information stored in a local csv file and then store the modified data in a SQLServer table and create a log file for a particular customer. 

This setup requires: 

- Some local database (e.g. SqlServer)
- Internet access to retrieve order data from {{< link-ext url="https://www.etlbox.net/demo/api/orders" text="www.etlbox.net/demo/api/orders" >}}

#### Preparation

Let's start with creating the destination table on the databases. If you have Docker installed, it is quite easy to run a {{< link-ext url="https://hub.docker.com/_/microsoft-mssql-server" text="SQLServer" >}} in a container (you can also other any other supported database, e.g. {{< link-ext url="https://hub.docker.com/_/mysql" text="MySql" >}} ).

There are two ways to create the destination table - the simplest way is to use the corresponding Sql statement. 

```sql
CREATE TABLE  `orders` (
    Id INT NOT NULL PRIMARY KEY,
    Description VARCHAR(50) NULL,
    CustomerName VARCHAR(500) NULL,
    Quantity SMALLINT NOT NULL
)
```

Alternatively, you can already use the Control Flow tasks that are part of the core package of ETLBox. They are very handy if you want to use a simple syntax for basic database operation. 

```C#
SqlConnectionManager sqlConnMan =
    new SqlConnectionManager("Data Source=.;User Id=x;Password=x;");

CreateTableTask.Create(sqlConnMan, "orders", new List<TableColumn>()
{
    new TableColumn("Id", "INT", allowNulls:false, isPrimaryKey:true),
    new TableColumn("Description", "VARCHAR(50)"),
    new TableColumn("CustomerName", "VARCHAR(500)"),
    new TableColumn("Quantity", "SMALLINT")                
});
```


{{< alert text="If you have a different database already installed, simply replace the connection string and connection manager with the database type you are using. For example, if you have a MySql database, you can use the MySqlConnectionManager." >}}

Looking at the data that we will receive from our demo web endpoint, we see the following structure for one record

```json
{
  "customerData": [
    {
      "OrderNumber": 10100,
      "CustomerName": 1,
      "Description": "T-Shirts: 7"
    },
    (...)
  ]
}
```


Now let's create a strongly typed object, also known as POCO (Plain old component object) that we can later use in our data flow to hold this data.

```C#
public class OrderRow
  {
      [DbColumnMap("Id")]
      public long OrderNumber { get; set; }
      public int CustomerId { get; set; }
      public string Description { get; set; }
      public int Quantity { get; set; }
      public string CustomerName { get; set; }
  }
```

You may have noticed that the Destination table doesn't have a column `OrderNumber`, but instead the `Id` column. By default, ETLBox will try to match the column names with your property names. The DbColumnMap attribute will enable the right mapping between the property `OrderNumber` in our input data and the column `Id` in our destination table. 

Lastly, we will need a customer csv file that contains a mapping between a customer id and a customer name.
Our file `customer.csv` contains the following data:

```csv
Id,Name
1,"Clark Kent"
2,"Peter Parker"
3,"Kristin Wells"
```

### Step 1 - creating components

The first step consists of creating the components, including a json source, the proper transformations, and two destination components - one for our database table and the other one for our log file data. 

Here is the complete code for setting up the components:

```C#
var source = 
  new JsonSource<OrderRow>("https://www.etlbox.net/demo/api/orders", 
  ResourceType.Http);

var rowTransformation = new RowTransformation<OrderRow>();
rowTransformation.TransformationFunc = row => {
    row.Quantity = int.Parse(row.Description.Split(":").ElementAt(1));
    return row;
};

var lookup = new LookupTransformation<OrderRow, ExpandoObject>();
lookup.Source = new CsvSource("files/customer.csv");
lookup.MatchColumns = new[] {
    new MatchColumn() { LookupSourcePropertyName = "Id", 
                        InputPropertyName = "CustomerId" }
};
lookup.RetrieveColumns = new[] {
    new RetrieveColumn() { LookupSourcePropertyName = "Name", 
                           InputPropertyName = "CustomerName" }
};

var multicast = new Multicast<OrderRow>();

var dbDest = new DbDestination<OrderRow>(sqlConnMan, "orders");
var textDest = new TextDestination<OrderRow>("files/order_data.log");
textDest.WriteLineFunc = row => {
    return $"{row.OrderNumber}\t{row.CustomerName}\t{row.Quantity}";
};
```

In the code above, we establish a connection to our web service using a `JsonSource`. The `ResourceType.Http` tells the `JsonSource` to establish a web connection to the provided url. 

The `RowTransformation`will take every incoming row from the source and retrieve the Quantity from the Description in the json data. 

The `Lookup` will use the `customer.csv` file to load all customer information into memory and then enrich any incoming data row with the right customer name. 

The `Multicast` will duplicate the data and broadcast every incoming row into both destinations - into the database table defined by the `DbSource` and into the log file destination defined by the `TextDestination`.

The `DbDestination` will use the provided connection manager (which we already defined above) and bulk insert the data into the database table. The default batch is 1000 rows - so in our example there will be only one bulk insert performed to insert all data. 

The `TextDestination` can be used to generate any kind of output - in our example we decided for a tab delimited text format. 

### Step 2 - linking components

Now that we are done with the setup, let's continue with the second step and link the components together.

```C#
source.LinkTo(rowTransformation);
rowTransformation.LinkTo(lookup);
lookup.LinkTo(multicast);
multicast.LinkTo(dbDest);
multicast.LinkTo(textDest, 
    row => row.CustomerName == "Clark Kent", 
    row => row.CustomerName != "Clark Kent");
```

Our data flow network will be defined using the `LinkTo` method. The json endpoint will send the data to the `RowTransformation`. The `RowTransfomration` will then forward the transformed rows to the `Lookup`. The `Lookup` will enrich the data and sent it into the `Multicast`,  and the `Multicast` sends a copy of each row into the SQLServer table and some of the rows into the log file destination. 

When the `Multicast` is connected to the `TextDestination`, you will notice that there are two conditions added to the `LinkTo` method. The first condition tells the link to only accept records where the CustomerName is equal "Clark Kent". Unfortunately, our data flow will only finish until all records from the source have arrived at a destination - that's why we tell the link to discard all other records (and sent them into a `VoidDestination`).

### Step 3 - execution

Finally, the third step is to start the data flow. To simplify your programmer's life, this can be done with a synchronous call that blocks execution until the flow has finished and all data has arrived in the destination. 

```C#
Network.Execute(source);
```

`Network.Execute(source)` is a shortcut for `Network.ExecuteAsync(source).GetAwaiter().GetResult()` 

{{< alert text="Regardless if you start the execution of the network with a synchronous or asynchronous call, the data flow itself will always execute asynchronously in the background using multiple tasks. This guarantees that while data is read from the source, it can be processed from the transformation and asynchronously written into the destinations." >}} 


Now let's see our output. If we run `SELECT * FROM orders` on our SQLServer database, we should get the following result:

Id|Description|CustomerName|Quantity
--|-----------|------------|--------
10100|T-Shirts: 7|Clark Kent|7
10200|Jeans: 12|Peter Parker|12
10300|Shoes: 15|Kristin Wells|15
10400|Shoes: 15|Clark Kent|15
10500|Jeans: 3|Peter Parker|3
10600|T-Shirts: 4|Kristin Wells|4
10700|Shoes: 10|Clark Kent|10
10800|Jeans: 3|Peter Parker|3
10900|T-Shirts: 10|Kristin Wells|10
11000|T-Shirts: 10|Clark Kent|10


And our log file `order_data.log` contains this data:

```csv
10100	Clark Kent	7
10400	Clark Kent	15
10700	Clark Kent	10
11000	Clark Kent	10
```

#### Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/QuickStart" >}}.


## Using the Control Flow tasks

Control Flow tasks let you execute common queries with a unified syntax on your database: They allow you to create or delete tables, procedures, schemas or other objects with a few lines of code. There are also tasks that support in truncating tables, counting rows or executing arbitrary Sql code. The advantage of the tasks is that they work on every supported database. So instead of writing different Sql queries for MySql or SQLServer to retrieve information about existing tables, you can reuse the same code and simply switch the database connection managers. This improves the readability of your code a lot, encapsulates your logic and gives you more time to focus on your real work. Control Flow tasks also eliminate the need to write or wrap the "boilerplate" code which is needed for using the regular ADO.NET approach.

Here are some code examples:

```C#
//Create a connection manager 
var conn = new SqlConnectionManager
  ("Server=.;Trusted_Connection=true;Initial Catalog=ETLBox");

//Execute some Sql
SqlTask.ExecuteNonQuery(conn, $@"EXEC myProc");

//Count rows
int count = RowCountTask.Count(conn, "demo.table1").Value;

//Read definition of a table
TableDefinition def = TableDefinition.FromTableName(connectionManager, "demoTable");

//Drop a table if it exists
DropTableTask.DropIfExists(sqlConnMan, "demoTable");
```

## Logging

By default, ETLBox supports the Microsoft.Extensions.Logging API. You can freely choose if you prefer to use Serilog, NLog or any other log mechanism that implements the `ILogger` interface. 

The following example shows how to use NLog with ETLBox. Depending on your log framework that you choose, the steps may be different. 

First step is to add a dependency to the latest nuget package {{< link-ext text="NLog.Extensions.Logging" url="https://www.nuget.org/packages/NLog.Extensions.Logging" >}}.

To set up the nlog configuration, you can create a configuration called `nlog.config`, which contains at least a target and a logger rule. Please take care that the file is copied to your output directory when running your project. The config file could look like this:

```xml
<?xml version="1.0" encoding="utf-8"?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xsi:schemaLocation="NLog NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <rules>
    <logger name="*" minlevel="Info" writeTo="console" />
  </rules>
  <targets>
    <target name="console" xsi:type="Console" />     
  </targets>
</nlog>
```

Now you need to create an ILogger instance. This log instance needs to be assigned to the static property `Logging.Logger`. This example uses the `LoggerFactory` for creating the logger instance. You could also retrieve the instance using Dependency Injection - e.g. if you create an Azure Function you already get a valid logger instance that you can use. 

```C#
using var loggerFactory = LoggerFactory.Create(builder => {
    builder
        .AddFilter("Microsoft", Microsoft.Extensions.Logging.LogLevel.Warning)
        .AddFilter("System", Microsoft.Extensions.Logging.LogLevel.Warning)
        .SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace)
        .AddNLog("nlog.config");
});
ETLBox.Settings.LogInstance = loggerFactory.CreateLogger("Default");
```

With this configuration, you should now see log output printed on your console!

## Where to continue

Now you are ready to try out ETLBox. All {{< link-ext text="ETLBox packages are available on nuget" url="https://www.nuget.org/packages?q=etlbox" >}}. The free versions allows you to process up to 5.000 for a component - this should be enough to perform tests in your test environment. If you are ready to deploy ETLBox in your production environment, [please purchase the adequate license](/pricing/). If you want to try ETLBox without limitations, you can [request a free trial key](/product/get-trial/).

To learn more about ETLBox, just continue reading.




