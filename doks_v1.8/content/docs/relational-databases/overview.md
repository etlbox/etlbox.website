---
title: "Database Connectors"
description: "This article provides an overview of ETLBox's database connectors, explaining how to read, write, and merge data using DbSource, DbDestination, and DbMerge. It also covers supported databases and connection management."
lead: "ETLBox provides components for reading, writing, and merging data in relational databases. These components ensure efficient data processing by utilizing streaming reads and bulk operations where possible."
draft: false
images: []
menu:
  docs:
    parent: "relational-databases"
weight: 110
toc: true
chatgpt-review: true
---

## General Database Compatibility

ETLBox supports the following databases:

Database  | Native support | ODBC support | Remarks
----------|:--------------:|:------------:|:-------:
SQL Server | ✓ | ✓ | + OleDb support
PostgreSQL | ✓ | ✓ |
SQLite | ✓ | ✓ |
Oracle | ✓ | ✓ |
MySQL | ✓ | ✓ |
MariaDB | ✓ | ✓ |
Db2 | ✓ | X | LUW + z/OS + Cloud
SAP ASE (Sybase) | ✓ | ✓ |
SAP HANA | ✓ | ✓ |
Snowflake | ✓ | ✓ |
Microsoft Access | X | ✓ |
Apache Spark (SQL) | X | ✓ |
Other databases | X | * | Generic ODBC support
Custom connector | ** | ** | Using own implementation

\* *Limited support for other databases is available through the generic ODBC or OleDb connection managers. However, these connections come with some limitations.*

\*\* *A `CustomSource` or `CustomDestination` can be implemented to create a database connector with custom logic.*

## Managing Database Connections

To interact with a database, ETLBox uses connection managers, which handle communication and abstract database-specific differences. Each database type has its corresponding connection manager. Here is an example for `SqlConnectionManager`:

```csharp
var conn = new SqlConnectionManager("Data Source=myServer;Initial Catalog=myDB;User ID=myUser;Password=myPass;");
```

For PostgreSQL, the equivalent connection manager would be:

```csharp
var conn = new PostgresConnectionManager("Host=myServer;Database=myDB;Username=myUser;Password=myPass;");
```

This connection manager can then be used in any database component.

## Reading Data with DbSource

`DbSource` streams data from a database into the data flow. It does not load all data into memory but processes rows as they are read.

- Reads data as a continuous stream, reducing memory usage
- Supports full table reads and custom SQL queries
- Handles data type conversion automatically

####  Code Snippet: Reading from a Table

```csharp
var conn = new SqlConnectionManager("Data Source=myServer;Initial Catalog=myDB;User ID=myUser;Password=myPass;");
var source = new DbSource<MyData>(conn, "MyTable");
```

####  Code Snippet: Using a SQL Query

```csharp
var conn = new PostgresConnectionManager("Host=myServer;Database=myDB;Username=myUser;Password=myPass;");
var source = new DbSource<MyData>(conn, "SELECT Id, Name FROM MyTable WHERE Active = 1");
```

If column names are unknown at design time, `ExpandoObject` can be used instead:

```csharp
var conn = new MySqlConnectionManager("Server=myServer;Database=myDB;User=myUser;Password=myPass;");
var source = new DbSource(conn, "MyTable"); // Uses ExpandoObject by default
```

## Writing Data with DbDestination

`DbDestination` inserts data into a database using bulk insert statements that insert batches of data at once.

- Uses database-specific bulk operations for high performance
- Handles identity columns and column mappings automatically

####  Code Snippet: Writing to a Table

```csharp
var conn = new SQLiteConnectionManager("Data Source=mydatabase.db;");
var destination = new DbDestination<MyData>(conn, "TargetTable");
```

When possible, `DbDestination` uses native bulk operations (`BULK INSERT` for SQL Server, `COPY` for PostgreSQL). It also handles identity inserts and allows custom column mappings. The default batch size for bulk inserts is 1000 rows, but it can be adjusted. E.g. if set to `1`, each row is inserted individually, which will decrease performance due to increased database calls. Larger batch sizes can improve efficiency, but may require more memory.

## Merging Data with DbMerge

`DbMerge` combines insert, update, and delete operations into a single step. It checks whether a record already exists and updates it; otherwise, it inserts a new row. Additionally, it supports deleting records, making it useful for full and delta loads.

- Uses database-specific merge commands or bulk operations where available
- Can define custom merge keys to determine how records are matched
- Supports full and delta mode for synchronization scenarios
- Allows configuring lookup caching strategies for better performance

#### Code Snippet: Merging Data

```csharp
var conn = new Db2ConnectionManager("Server=myServer;Database=myDB;UID=myUser;PWD=myPass;");
var merge = new DbMerge<MyData>(conn, "TargetTable");
```

By default, `DbMerge` performs batched lookups, loading source data into memory in bulk for each incoming batch to check whether a record exists in the target. It also supports different caching modes, such as preloading the entire target table into memory for faster lookups when processing large datasets.


## Example: Reading, Writing, and Merging

This example demonstrates how to read data from a database using `DbSource`, insert it into an archive table using `DbDestination`, and merge it into another table using `DbMerge`. A `Multicast` component is used to duplicate the data stream, ensuring that the same records are processed independently by both destinations.

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source[DbSource: orders] --> multicast[Multicast]
  multicast --> archive[DbDestination: order_archive]
  multicast --> merge[DbMerge: merged_orders]
```

### Setting Up the Database

The source table `orders` contains customer transactions with an `OrderId`, `CustomerName`, and `OrderAmount`. The `order_archive` table stores a historical record of all processed orders, while `merged_orders` synchronizes data, ensuring that outdated records are removed, and existing ones are updated.

Before execution, `order_archive` contains one existing entry, and `merged_orders` holds one record that should be updated and another that should be deleted. This setup allows us to demonstrate the behavior of `DbDestination` and `DbMerge` in a single ETL process.

#### Table Contents Before Execution

**`orders` (source table)**

| OrderId | CustomerName | OrderAmount |
|---------|-------------|-------------|
| 1       | Alice       | 100.50      |
| 2       | Bob         | 200.75      |
| 3       | Charlie     | 150.00      |

**`order_archive` (insert destination)**

| OrderId | CustomerName | OrderAmount |
|---------|-------------|-------------|
| 0       | Archived    | 100.00      |

**`merged_orders` (merge destination)**

| OrderId | CustomerName | OrderAmount |
|---------|-------------|-------------|
| 0       | ToDelete    | 100.00      |
| 1       | ToUpdate    | 100.00      |

### Defining the Data Model

```csharp
public class OrderData : MergeableRow {
    [DbColumnMap("OrderId")]
    [IdColumn]
    public int Id { get; set; }

    [DbColumnMap("CustomerName")]
    [CompareColumn]
    public string Name { get; set; }

    [DbColumnMap("OrderAmount")]
    [CompareColumn]
    public decimal Amount { get; set; }
}
```

### ETL Process

```csharp
// Read data from source table
var source = new DbSource<OrderData>(conn, "orders");

// Create multicast component to duplicate data
var multicast = new Multicast<OrderData>();

// Define first destination: simple insert (archive orders)
var archiveDest = new DbDestination<OrderData>(conn, "order_archive");

// Define second destination: full merge (synchronize orders)
var mergeDest = new DbMerge<OrderData>(conn, "merged_orders") {
    MergeMode = MergeMode.Full,
    CacheMode = CacheMode.Partial
};

// Link components
source.LinkTo(multicast);
multicast.LinkTo(archiveDest);
multicast.LinkTo(mergeDest);

// Execute the network
Network.Execute(source);
```

#### Table Contents After Execution

**`order_archive` (insert destination)**

| OrderId | CustomerName | OrderAmount |
|---------|-------------|-------------|
| 0       | Archived    | 100.00      |
| 1       | Alice       | 100.50      |
| 2       | Bob         | 200.75      |
| 3       | Charlie     | 150.00      |

**`merged_orders` (merge destination)**

| OrderId | CustomerName | OrderAmount |
|---------|-------------|-------------|
| 1       | Alice       | 100.50      |
| 2       | Bob         | 200.75      |
| 3       | Charlie     | 150.00      |

### Explanation and Full Example

The `DbSource` component reads data from `orders` and sends it into the pipeline. The `Multicast` component duplicates the data, allowing two separate operations to take place. One copy is written directly to `order_archive` using `DbDestination`, ensuring all records are stored as a historical log. The other copy is processed by `DbMerge`, which updates existing records in `merged_orders`, removes obsolete ones, and inserts new data as needed.

#### Full Example on GitHub

The complete code for this example, including setup scripts and execution details, is available on GitHub. {{< link-ext text="You can find it along with other ETLBox examples and demos" url="https://github.com/etlbox/etlbox.demo/tree/main/DatabaseConnectors" >}}.

## Next Steps

The following sections provide more details on each component:

- **Connection Management** – How to set up and configure connection managers
- **DbSource** – How to extract data efficiently
- **DbDestination** – How bulk inserts improve performance
- **DbMerge** – How to synchronize datasets efficiently
