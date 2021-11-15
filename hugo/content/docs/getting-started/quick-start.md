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

## How to get ETLBox

ETLBox is developed in C# and targets .NET Standard 2.0 and higher. It can be used by almost every {{< link-ext text=".NET version" url="https://docs.microsoft.com/en-us/dotnet/standard/net-standard#net-implementation-support" >}} out there supported by Microsoft, including .NET Core 2.1 and higher and .NET 5.0. If you are still using .NET Framework, we recommend to use a Framework version not less than 4.7.2.

All ETLBox {{< link-ext url="https://www.nuget.org/packages?q=etlbox" text="packages are hosted on nuget" >}}. You will need to install always the {{< link-ext="https://www.nuget.org/packages/ETLBox/" text="core pacakge" >}} when working with ETLBox. It  contains the default connectors and transformations. 

Simply add it to your project using your nuget package manager.

```
dotnet add package ETLBox
```

The connectors are in separate packages - depending on your needs, choose the right connector package from the list. Pick the {{< link-ext url="https://www.nuget.org/packages/ETLBox.SqlServer/" text="ETLBox.SqlServer" >}} package if you want to connect to a (Azure) SQLServer database, or choose {{< link-ext url="https://www.nuget.org/packages/ETLBox.Json/" text="ETLBox.Json" >}}  if you want to load data from a Json file or REST endpoint. 

## Data and Control Flow

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

This example data flow will read data from a MySql database, modify a value and then store the modified data in a Sql Server table and a csv file, depending on a filter expression.

This setup requires: 

- Source table (MySql database)
- Destination table (SQLServer database)
- folder for the output Csv file

Let's start with creating the tables on the corresponding databases. If you have Docker installed, it is quite easy to run a {{< link-ext url="https://hub.docker.com/_/mysql" text="MySql database in a container" >}} - which is {{< link-ext url="https://hub.docker.com/_/microsoft-mssql-server" text="also true for SQLServer" >}}.


```sql
--Run on MySql:
CREATE TABLE  `SourceTable` (
    Id INT NOT NULL,
    Value INT NULL
)

INSERT INTO SourceTable (Id,Value) VALUES (1, 10)
INSERT INTO SourceTable (Id,Value) VALUES (1, 20)

--Run on SQLServer
CREATE TABLE  DestinationTable (
    Id INT NOT NULL,
    Result INT NULL
)
```

Now let's create a strongly typed object, also known as POCO (Plain old component object) that we can later use in our data flow. 

```C#
public class MyRow {

    public int Id { get;set; }
    
    [ColumnMap("Result")]
    public int Value { get;set; }
}
```

You may have noticed that the Destination table doesn't have a column `Value`, but instead the `Result` column. By default, ETLBox will try to match the column names with your property names. As we have a property called `Id` it will match with the column `Id` in the destination table. The ColumnMap attribute will enable the right mapping.

{{< alert icon="👉" text="Please note that if you don't define a Poco, you can also use the non generic classes (just leave out the type). This will internally use the dynamic ExpandoObject instead." >}}

### Step 1 - creating components

The first step consists of creating a source table, the proper transformations, and the destination table. 
In the following code snippet, we establish a connection to our desired database. The first lines of code will define the connection managers used for MySQL and SQLServer databases, which will help us build the components. MySQL will take the source database role, while SQLServer the destination database role. A `RowTransformation` is used to change the value of each row that has been read from the source. The `Multicast` is responsible for broadcasting the data to our SQLServer destination and the CSV file destination.

```C#
string mySqlConnString = 
  @"Server=localhost;Database=ETLBox;Uid=user;Pwd=pw;";
string sqlServerConnString = 
  @"Data Source=.;Trusted_Connection=true;Initial Catalog=ETLBox;";

var mySqlCon = new MySqlConnectionManager(mySqlConnString);
var sqlConn = new SqlConnectionManager(sqlServerConnString);

var mySqlSource = new DbSource<MyRow>(mySqlCon, "SourceTable");
var rowTrans = new RowTransformation<MyRow>(
    row => {  
        row.Value += 5;
        return row;
    });
var multicast = new Multicast<MyRow>();
var sqlDest = new DbDestination<MyRow>(sqlConn, "DestinationTable");
var csvDest = new CsvDestination<MyRow>("example.csv");
```

{{< alert text="If you have a different database already installed, simply replace the connection string and connection manager with the database type you are using. For example, if you have a Postgres database, you can use the PostgresConnectionManager." >}}

### Step 2 - linking components

Now that we are done with the setup, let's continue with the second step and link the components together.

```C#
mySqlSource.LinkTo(rowTrans);
rowTrans.LinkTo(multicast);
multicast.LinkTo(sqlDest, row => row.FilterValue > 0);
multicast.LinkTo(csvDest, row => row.FilterValue < 0);
```

Our data flow network will be defined using the `LinkTo` method. The MySQL database source will send the data to the `RowTransformation`. The transformed rows are sent to the `Multicast` which sends a copy of each row into either the SQLServer or the CSV destination, depending on the `FilterValue`.  

### Step 3 - execution

Finally, the third step is to start the data flow. To simplify your programmer's life, this can be done with a synchronous call that blocks execution until the flow has finished and all data has arrived in the destination. 

```C#
Network.Execute(source);
```

{{< alert text="The execution of the data flow itself will happen asynchronously in the background. Network.ExecuteAsync() will return a Task that can be awaited." >}} 


Now let's see our output. If we run `SELECT * FROM DestinationTable` on our SQLServer database, we should get the following result:

Id|Result
--|------
1 |15
2 |25

And our csv file `example.csv` contains this data:

```csv
Id,Result
1,15
2,25
```

## Using the Control Flow tasks

Control Flow tasks let you execute common queries with a unified syntax on your database: They allow you to create or delete tables, procedures, schemas or other objects with a few lines of code. There are also tasks that support in truncating tables, counting rows or executing arbitrary Sql code. The advantage of the tasks is that they work on every supported database. So instead of writing different Sql queries for MySql or SQLServer to retrieve information about existing tables, you can reuse the same code and simply switch the database connection managers. This improves the readability of your code a lot, encapsulates your logic and gives you more time to focus on your real work. Control Flow tasks also elimate the need to write or wrap the "boilerplate" code which is needed for using the regular ADO.NET approach.

Here are some code examples:

```C#
//Create a connection manager 
var conn = new SqlConnectionManager
  ("Server=.;Trusted_Connection=true;Initial Catalog=ETLBox");
```

```C#
//Execute some Sql
SqlTask.ExecuteNonQuery(conn, "Do some sql",$@"EXEC myProc");
```

```C#
//Count rows
int count = RowCountTask.Count(conn, "demo.table1").Value;
```

```C#
//Create a table (works on all supported databases)
var col1 = new TableColumn(name:"key", dataType:"INT", 
        allowNulls:false, isPrimaryKey:true, isIdentity:true);
var col2 = new TableColumn(name:"value",dataType:"NVARCHAR(100)",
        allowNulls:true);
CreateTableTask.Create(conn, "Table1", 
    new List<TableColumn>() { col1, col2 });
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
ETLBox.Logging.Logging.LogInstance = loggerFactory.CreateLogger("Default");
```

With this configuration, you should now see log output printed on your console!

### Where to continue

Now you are ready to try out ETLBox. All {{< link-ext text="ETLBox packages are available on nuget" url="https://www.nuget.org/packages?q=etlbox" >}}. The free versions allows you to process up to 5.000 for a component - this should be enough to perform tests in your test environment. If you are ready to deploy ETLBox in your production environment, please purchase the adequate license. If you want to do some performance test, you can request a trial key.

To learn more about ETLBox, just continue reading.




