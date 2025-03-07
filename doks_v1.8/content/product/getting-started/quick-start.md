---
title: "Quick Start"
description: "Learn how to create your first ETL pipeline with ETLBox. This guide covers the essentials."
lead: "Get started with ETLBox, the complete ETL library for .NET developers. This quick start guide walks you through building your first data pipeline — from connecting to data sources and applying transformations to loading data into databases — all with simple, code-first workflows."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 30
toc: true
---

## Creating a Data Flow

Let’s build your first ETL pipeline. A typical ETLBox data flow consists of three steps:

1. **Define Components:** Sources, transformations, and destinations.
2. **Link Components:** Establish data paths between them.
3. **Execute the Flow:** Start the data movement process.

{{< smallnote >}}
ETLBox processes data asynchronously. This means while data is still being read from the source, transformations and destinations can process it simultaneously.
 optimizing performance and memory usage. Each component uses buffers to store additional rows when needed, optimizing performance and memory usage. At any given time, only the data within these buffers is kept in memory, minimizing overall memory consumption.
{{< /smallnote >}}

## Example: Processing Order Data

In this example, we’ll:
- Read order data from a web API.
- Enrich it with customer information from a CSV file.
- Store the results in a SQL Server database.
- Log specific data to a file.

**Prerequisites:**

- A SQL Server database (can run via Docker).
- Internet access to fetch demo data from [ETLBox Demo API](https://www.etlbox.net/demo/api/orders).

If you have Docker installed, it is quite easy to run {{< link-ext url="https://hub.docker.com/_/microsoft-mssql-server" text="SQL Server" >}} in a container. You can also use any other supported database, e.g. {{< link-ext url="https://hub.docker.com/_/mysql" text="MySql" >}} or {{< link-ext url="https://hub.docker.com/_/postgres" text="Postgres" >}}.

### Setting Up the Database

You can create the destination table manually:

```sql
CREATE TABLE orders (
    Id INT NOT NULL PRIMARY KEY,
    Description VARCHAR(50),
    CustomerName VARCHAR(500),
    Quantity SMALLINT NOT NULL
);
```

Or, you can already use ETLBox’s Control Flow tasks:

```csharp
var sqlConnMan = new SqlConnectionManager("Data Source=.;User Id=x;Password=x;");
CreateTableTask.Create(sqlConnMan, "orders", new List<TableColumn> {
    new TableColumn("Id", "INT", allowNulls: false, isPrimaryKey: true),
    new TableColumn("Description", "VARCHAR(50)"),
    new TableColumn("CustomerName", "VARCHAR(500)"),
    new TableColumn("Quantity", "SMALLINT")
});
```

{{< callout context="tip" title="One Codebase, Any Database" icon="outline/rocket" >}}
With Control Flow tasks, you can use the same code for different databases—no need to rewrite anything when switching between systems.
{{< /callout >}}

### Preparing Data Models

Looking at the data that we receive from our demo web endpoint, we get the following JSON structure for one record:

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

Now let’s create a strongly typed object, also known as POCO (Plain old CLR object) that we can later use in our data flow to hold this data.

```csharp
public class OrderRow {
    [DbColumnMap("Id")]
    public long OrderNumber { get; set; }
    public int CustomerId { get; set; }
    public string Description { get; set; }
    public int Quantity { get; set; }
    public string CustomerName { get; set; }
}
```

You’ve probably noticed that the destination table has an `Id` column instead of `OrderNumber`. By default, ETLBox matches property names with column names, but the `DbColumnMap` attribute lets you map `OrderNumber` from the JSON data to the `Id` column in the table.

You’ll also need a CSV file (`customer.csv`) for customer info:

```csv
Id,Name
1,"Clark Kent"
2,"Peter Parker"
3,"Kristin Wells"
```

## Step 1: Defining Components

Here’s the full setup for sources, transformations, and destinations:

```csharp
var source = new JsonSource<OrderRow>();
source.ResourceType = ResourceType.Http;
source.Uri = "https://www.etlbox.net/demo/api/orders";

var rowTransformation = new RowTransformation<OrderRow>();
rowTransformation.TransformationFunc = row => {
    row.Quantity = int.Parse(row.Description.Split(":")[1]);
    return row;
};

var lookup = new LookupTransformation<OrderRow, ExpandoObject>();
lookup.Source = new CsvSource("files/customer.csv");
lookup.MatchColumns = new[] {
    new MatchColumn { LookupSourcePropertyName = "Id", InputPropertyName = "CustomerId" }
};
lookup.RetrieveColumns = new[] {
    new RetrieveColumn { LookupSourcePropertyName = "Name", InputPropertyName = "CustomerName" }
};

var multicast = new Multicast<OrderRow>();

var dbDest = new DbDestination<OrderRow>(sqlConnMan, "orders");

var textDest = new TextDestination<OrderRow>("files/order_data.log");
textDest.WriteLineFunc = row => $"{row.OrderNumber}\t{row.CustomerName}\t{row.Quantity}";
```

This code configures a `JsonSource` to connect to a web service and retrieve order data. The `ResourceType.Http` indicates that the data will be fetched over an HTTP connection.

The `RowTransformation` is set up to process each incoming row. It includes a function that extracts the `Quantity` value from the `Description` field by splitting the string and converting the relevant part to an integer.

The `LookupTransformation` is configured to enrich incoming data with customer information from the `customer.csv` file. It’s set to match the `CustomerId` from the incoming data with the `Id` in the CSV file and retrieve the corresponding `Name`.

The `Multicast` component is initialized to allow data duplication, enabling the same data to be sent to multiple destinations.

The `DbDestination` is set up to insert data into the `orders` table in the database using the provided connection manager (`sqlConnMan`). This operation will be performed as a bulk insert, allowing us to insert large amounts of data if necessary.

The `TextDestination` is configured to output data to a log file (`order_data.log`). The `WriteLineFunc` specifies the format for each log entry, using tab delimiters to separate `OrderNumber`, `CustomerName`, and `Quantity`.

## Step 2: Linking Components

Now, we’ll connect everything to form the data pipeline:

```csharp
source.LinkTo(rowTransformation);
rowTransformation.LinkTo(lookup);
lookup.LinkTo(multicast);
multicast.LinkTo(dbDest);
multicast.LinkTo(textDest,
    row => row.CustomerName == "Clark Kent",
    row => row.CustomerName != "Clark Kent");
```

This structure ensures that:
- All orders are saved to the database.
- Only orders from **Clark Kent** are logged.

If we visualize this data flow as a diagram, it would look like this:

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source[JsonSource] --> rowTransformation(RowTransformation)
  rowTransformation --> lookup(LookupTransformation)
  lookup --> multicast((Multicast))
  multicast --> dbDest[(DbDestination)]
  multicast --> textDest[[TextDestination]]
```

## Step 3: Executing the Data Flow

Start the pipeline with asynchronous execution:

```csharp
await Network.ExecuteAsync(source);
```

Or run it synchronously (blocking):

```csharp
Network.Execute(source);
```

This runs the network, and data flows from the source through each component to the destinations.

{{< callout context="note" title="Always Asynchronous" icon="outline/info-circle" >}}
Both methods trigger the execution of the network. Each component runs as a separate task, handling operations asynchronously and in parallel behind the scenes. Even with the blocking call, the pipeline processes data asynchronously at the component level.
{{< /callout >}}

### Viewing the Output

If we run the following query on our SQL Server database:

```sql
SELECT * FROM orders;
```

We should see the following result:

**Table `orders`:**

| Id    | Description   | CustomerName   | Quantity |
|-------|---------------|----------------|----------|
| 10100 | T-Shirts: 7   | Clark Kent     | 7        |
| 10200 | Jeans: 12     | Peter Parker   | 12       |
| 10300 |Shoes: 15      |Kristin Wells   |15        |
| 10400 |Shoes: 15      |Clark Kent      |15        |
| 10500 |Jeans: 3       |Peter Parker    |3         |
| 10600 |T-Shirts: 4    |Kristin Wells   |4         |
| 10700 |Shoes: 10      |Clark Kent      |10        |
| 10800 |Jeans: 3       |Peter Parker    |3         |
| 10900 |T-Shirts: 10   |Kristin Wells   |10        |
| 11000 |T-Shirts: 10   |Clark Kent      |10        |

**Log File `order_data.log`:**

```csv
10100	Clark Kent	7
10400	Clark Kent	15
10700	Clark Kent	10
11000	Clark Kent	10
```

### Code on Github

The whole {{< link-ext text=" example code is also available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/QuickStart" >}}.

#### What's Next?

- Try ETLBox for free with processing limits, or [request a trial key](/product/getting-started/get-trial/) for full access.
- When you’re ready for production, [purchase a license](/pricing/).
- Check out the {{< link-ext text="ETLBox Demo Repository on GitHub" url=https://github.com/etlbox/etlbox.demo/tree/main/QuickStart" >}}.

Learn more about the possiblities of ETLBox in the next article.
