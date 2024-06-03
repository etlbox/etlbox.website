---
title: "Access"
description: "Instruction how to read or write from access databases."
lead: "Access is partially supported in ETLBox. Most of the components may work, but there are some limitations when connecting with Access. Below are these limitation described in detail. The good news is: You can make it work to integrate access either as source or as destination. "
draft: false
images: []
menu:
  docs:
    parent: "db-connectors"
weight: 370
toc: true
---


## Odbc drivers

You can connect to access only via Odbc. 

The ODBC connection to Microsoft Access databases has some restrictions. ETLBox is based on .NET Standard and will run in your application as dependency.
It now depends if you compile your application with 32bit or 64bit (some version of .NET Core only support 64bit). You will need to get the right Microsoft Access driver installed - either 32bit or 64bit. You can only install the 32bit driver if you have a 32bit Access installed, and vice versa. Also, make sure to set up the correct ODBC connection (there is 
a 64bit ODBC connection manager tool in windows and another one looking the same for 32bit). 

Here some hints where to get the latest Odbc driver for access (please c)
- {{< link-ext text="Driver Access >2016" url="https://www.microsoft.com/en-us/download/details.aspx?id=54920" >}}
- {{< link-ext text="Driver Access >2010" url="https://www.microsoft.com/en-us/download/details.aspx?id=13255" >}}

#### Leave connection open

It is recommended that you leave the `LeaveOpen` connection property set to true. If you manually override this, you may end up with some {{< link-ext text="strange error messages" url="https://stackoverflow.com/questions/37432816/microsoft-ace-oledb-12-0-bug-in-multithread-scenario" >}}.        


## Creating the connection

To create a connection to an Access Database, use the `AccessOdbcConnectionManager` and an `OdbcConnectionString`.

Please note that the AccessOdbcConnectionManager will create a temporary dummy table containing one record in your database when doing the bulk insert. After completion it will delete the table again. This is necessary to simulate a bulk insert with Access-like Sql.

```C#
DbDestination dest = DbDestination (
    new AccessOdbcConnectionManager(        
          "Driver={Microsoft Access Driver (*.mdb, *.accdb)}DBQ=C:\DB\Test.mdb"
    ), "DestinationTable"
);
dest.BatchSize = 1000; 
```

{{< alert text="The <code>DbDestination</code> will do a bulk insert by creating a sql statement using a sql query that Access understands. The number of rows per batch is very limited - if it too high, you will the error message 'Query to complex'. Try to reduce the batch size to solve this." >}}





