---
title: "Control and data flow basics"
description: "Example: Control and data flow basics"
lead: "This purpose of this example is to give you a brief overview of the basic concepts of ETLBox. It demonstrates the basic idea of a very simple data flow and shows how to use the ControlFlow objects to manage your database metadata. "
draft: false
images: []
menu:
  recipes:
    parent: "basics"
weight: 2010
toc: true
---

{{< link-ext text="There is also a video demonstrating this example." url="https://www.youtube.com/watch?v=CsWZuRpl6PA" >}}

## Prerequisites

This example is written in C#, based on the current .NET Core. You can use your IDE of your choice -
most will probably go with Visual Studio or Visual Studio Code. 
The database used in this example is Sql Server. You can either you set up a standalone installation of Sql Server,
or use a docker image. Also, Azure Sql could be an alternative which is easy to setup. 
To access your database, Azure Data Studio or Sql Server Management Studio is recommended.

### Setting up a docker container

If you want to use docker to set up a sql server database, please install Docker for your OS first.
Then you can start a docker image running sql server on ubuntu. 
Simply run the following command line statement in a command line tool:

```bash
docker run -d --name sql_server_demo -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=reallyStrongPwd123' -p  1433:1433 microsoft/mssql-server-linux
```

With the command ```docker ps``` you can see the container is up and running. 

### Setting up your project

Now we need to create a new dotnet core console application. 
You can do this either with your IDE or just execute the following command:

```dotnet new console```

If this doesn't work, make sure you have the latest version of .NET Core installed. 

Now, add the current version of ETLBox as a package to your project. 

```bash
dotnet add package ETLBox
```

Now you will be able to use the full set of tools coming with ETLBox


## Start coding

Now open your project and go into the main method of your program.

First, define a connection manager for Sql Server that holds the connection string 

```C#
 var masterConnection = new SqlConnectionManager("Data Source=.;Integrated Security=false;User=sa;password=reallyStrongPwd123");
```

No you can use the `CreateDatabaseTask` to create a new Database. 

```C#
CreateDatabaseTask.Create(masterConnection, "demo");
```

Also we would like to change the connection to the database we just created and 
create a table in there using the `CreateTableTask`. 

```C#
var dbConnection = new SqlConnectionManager("Data Source=.;Initial Catalog=demo;Integrated Security=false;User=sa;password=reallyStrongPwd123");

CreateTableTask.Create(dbConnection, "Table1", new List<TableColumn>()
{
    new TableColumn("ID","INT",allowNulls:false, isPrimaryKey:true, isIdentity:true),
    new TableColumn("Col1","NVARCHAR(100)",allowNulls:true),
    new TableColumn("Col2","SMALLINT",allowNulls:true)
});
```

### Adding logging 

Before we test our demo project, we want to have some logging output displayed. ETLBox logging is build on nlog. 
First you need to add {{< link-ext url="https://www.nuget.org/packages/NLog.Extensions.Logging/" text="NLog.Extensions.Logging" >}} as a package reference to your project. 

Then Add the following lines as nlog.config to your project root. Make sure it is copied into the output directory.

```xml
<?xml version="1.0" encoding="utf-8"?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xsi:schemaLocation="NLog NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
  <rules>
    <logger name="*" minlevel="Debug" writeTo="console" />
  </rules>
  <targets>
    <target name="console" xsi:type="Console" />     
  </targets>
</nlog>
```

Now we need to create a logger instance, and then assign it to the static property `Settings.LogInstance`. Here is the code to create a NLog instance using the `LoggerFactory`:

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

### Running the project

Now build and run the project.

A terminal window will pop up and display the logging output. As the logging level is set to debug, 
you will see all SQL code which is executed against the database.
Check if the database and the table was created.

## A simple etl pipeline

Next we want to create a simple etl pipeline. 
First we create a demo csv file named ```input.csv```. 
The input file contains header information and some value. 
Also we need to copy it into the output directory.

```csv
Col1,Col2
Value,1
Value2,2
Value3,3
```

Now we create a CsvSource pointing to the newly created input file. 

```C#
CsvSource<string[]> source = new CsvSource<string[]>("input.csv");
```

Before we continue, we will need an object that can hold our data. Let's call it MyData.

```C#
public class MyData
{
    public string Col1 { get; set; }
    public string Col2 { get; set; }
}
```

Now we add a row transformation. The row transformation will receive a string array from the source and 
transform it in our Mydata object. 

```C#
RowTransformation<string[], MyData> row = new RowTransformation<string[], MyData>
(
    input => new MyData() 
    { Col1 = input[0], Col2 = input[1] }
);
```

Actually, this transformation wouldn't been necessary - the CsvSource could have automatically converted the
incoming data into the `MyData` object. But it shows how a transformation can be used to execute any 
C# code you like. 

Next we add a database destination pointing to our table.

```C#
DbDestination<MyData> dest = new DbDestination<MyData>(dbConnection, "Table1");
```

Now we need to link the components of our dataflow.

```C#
source.LinkTo(row);
row.LinkTo(dest);
```

After linking the components, we want to have the source reading the input data.
The destination should wait until it received all data.

```C#
Network.Execute(source);
```

Finally, we check if the data was successfully loaded into the table and write it into the console output. 
We use the SQLTask for this and write the result into the output. 

```C#
SqlTask.ExecuteReader("select Col1, Col2 from Table1",
    col1 => Console.WriteLine(col1.ToString() + ","),
    col2 => Console.WriteLine(col2.ToString())
);
```

### Run again 

Let's run the project again and see the output.

You'll see that the data was successfully copied into the database table.

## Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/ControlDataFlowBasics" >}}

