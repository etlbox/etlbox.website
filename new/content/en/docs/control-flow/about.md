---
title: "Overview"
description: "An overview of the control flow task concepts in ETLBox."
lead: "ControlFlow Tasks are an easy way to run database independent sql code or to avoid the boilerplate code when you just want to execute
a simple statement."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 910
toc: true
---


## Database and logging specific tasks

Control Flow task can be split in general tasks and logging tasks. General tasks allow you to create or drop objects 
or to run some particular predefined statements that will execute on any database. Logging tasks are useful helper when you need
to create some tables for logging or to retrieve the whole log as Json. 

Control Flow Tasks reside in the `ETLBox.ControlFlow.Tasks` namespace - tasks for logging in the `ETLBox.Logging` namespace.

## General Idea behind Control Flow Task

Control Flow Tasks are a set of tasks to manage, alter or query a database. With one single line of code you will be able to create 
a table or fire some sql on your database - you write your code in C#, and in the background database code for your specific 
database is generated. 

ControlFlow Tasks do *not* strive to be an replacement for an ORM (Object relation mapper), nor is it a complete set of tasks for all the operations
you actually can do on the database. They were created as useful helper to create Tests for ETL pipelines - they can help you to (re)create 
databases, drop tables (if they exists) or to create a test environment on your database without writing to much database specific sql code. 

#### Avoiding boilerplate code

If you have ever wrote some ADO.NET code to simply execute some Sql, you probably found that there is some boilerplate code 
you have to write over and over again. The idea behind some of the Control Flow Tasks is that you don't have to write the same 
code again and again, e.g. just for doing something trivial like opening up a connection 
and counting the rows in table. This should be doable with only one line of .NET/C# code, and it should work independently on every database.

#### RowCount with ADO.NET

For instance, the code for establishing a connection and doing a simple row count on a table with a classic ADO.NET connection 
would look like this:

```C#
string connectionString = "Data Source=.; Database=Sample; Integrated Security=SSPI";
using (SqlConnection con = new SqlConnection(connectionString))
{
   SqlCommand cmd = new SqlCommand("select count(*) from demotable", con);
   con.Open();
   int numrows = (int)cmd.ExecuteScalar();   
}
```

#### RowCount with Control Flow Tasks

Now let's have a look how to do a row count with the Control Flow Tasks library. 
First, we need to setup a connection manager in order to connect with database.
This is the same connection manager as used within the data flow part. 

```C#
SqlConnectionManager connectionManager = new SqlConnectionManager("Data Source=.; Database=Sample; Integrated Security=SSPI"");
```

Now you can use a `RowCountTask` to query the number of rows within a table with only one line.

```C#
int count = RowCountTask.Count(connectionManager, "demotable");
```

Optionally, you can set up a default connection that is used every time you don't provide a connection manager. 
Simple set the property `DefaultDbConnection` on the static `ControlFlow` class.

```C#
ControlFlow.DefaultDbConnection = new SqlConnectionManager(new SqlonnectionString("Data Source=.; Database=Sample; Integrated Security=SSPI""));
```

Now a RowCount is as simple as this:

```C#
int count = RowCountTask.Count("demotable");
```

Internally, an ADO.NET connection is opened up (the default ADO.NET connection pooling is used) 
and a `select count(*) from demotable` is executed on the database. The result is returned from the RowCountTask. 


## Using the instances

For every Control Flow Tasks, there are static accessors to simplify the use of the tasks. In order to have 
access to all functionalities of a task, sometime you have to create a new instance of the task object.

If you want to do a row count with an instance instead of the static accessors, it would look like this:
```C#
RowCountTask task = new RowCountTask("demotable");
int count = task.Count().Rows;
```

So whenever you don't find a static accessor satisfying your needs, try to create an instance and check the 
properties and methods of the object.

### Configure a task

But there is more. Let's assume you want to count the rows on a pretty big table, a "normal" row count perhaps would take some time. 
So RowCount has a property called `QuickQueryMode`. If set to true, a sql statement that queries the partition tables is then executed. 

```C#
RowCountTask task = new RowCountTask("demotable") 
	{ QuickQueryMode = true };
int count = task.Count().Rows;
```

This would give you the same result, but instead of doing a `select count(*) from dbo.tbl` the following sql is fired on the database
```sql
select cast(sum([rows]) as int) from sys.partitions where [object_id] = object_id(N'dbo.tbl') and index_id in (0,1)
```

{{< alert text="The QuickQueryMode will create sql code that only works on SqlServer. For other databases, this won't work.">}}


## ConnectionManager 

All examples for the ControlFlow that access databases have a `ConnectionManager` object passed - this is the actual connection manager for your database.
E.g. for Sql Server you would create it with 

```C#
SqlConnectionManager connectionManager = new SqlConnectionManager("Data Source=.; Database=Sample; Integrated Security=SSPI");
```

or for MySql with

```C#
MySqlConnectionManager connectionManager = new MySqlConnectionManager("Server=10.37.128.2;Database=ETLBox_DataFlow;User Id=postgres;Password=etlboxpassword;");
```


### Default ConnectionManager

Every component or task related to a database operation needs to have a connection managers set in order
to connect to the right database. Sometimes it can be cumbersome to pass the same connection manager over and over
again. To avoid this, there is a static `ControlFlow` class that contains the property `DefaultDbConnection`.
If you define a connection manager here, this will always be used as a fallback value if no other connection manager property was defined.

```
ControlFlow.DefaultDbConnection = new SqlConnectionManager("Data Source=.;Integrated Security=SSPI;Initial Catalog=ETLBox;");
//Now you can just create a DbSource like this
var source = new DbSource("SourceTable");
```