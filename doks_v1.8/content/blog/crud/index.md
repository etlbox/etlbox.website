---
title: "Why CRUD Doesn’t Work for ETL (And What to Do Instead)"
description: "Many developers struggle with applying traditional CRUD (Create, Read, Update, Delete) concepts in ETL workflows, leading to performance bottlenecks. This article explains why CRUD operations are inefficient in ETL and how ETLBox provides optimized alternatives like DbSource, DbDestination, DbMerge, and LookupTransformation."
summary: "Traditional CRUD operations don’t scale well in ETL workflows. Handling data row by row creates unnecessary overhead, slowing down performance. This article explores how to transition from CRUD-based processing to a more efficient dataflow approach using ETLBox."
date: 2024-03-14
draft: false
weight: 50
categories: []
tags: []
contributors: [Andreas Lennartz]
pinned: false
homepage: false
---

![Article Banner](banner.png)

## From CRUD to Dataflow: Optimizing ETL Performance with ETLBox

When working with ETL (Extract, Transform, Load) processes, many developers instinctively apply traditional CRUD (Create, Read, Update, Delete) operations to manipulate data. However, this approach often leads to severe performance bottlenecks when dealing with large datasets.

The fundamental problem? CRUD operations are designed for transactional systems, not for ETL workflows. While CRUD works well for handling small sets of records in OLTP (Online Transaction Processing) systems, it quickly becomes inefficient when applied to ETL processes, where performance and scalability are critical.

Instead of treating ETL like a series of individual transactions, a dataflow approach enables processing data in bulk, streaming large datasets efficiently, and optimizing database interactions. This shift eliminates performance killers such as single-row reads, updates, and inserts, replacing them with batch operations, transformations, and streaming techniques.

In this article, we’ll explore:
- Why **CRUD operations** are inefficient in ETL workflows
- How to **replace CRUD patterns** with optimized **dataflow-based transformations**
- How **ETLBox** enables efficient ETL processing through **bulk inserts, lookups, and merging strategies**

By the end, you’ll have a clear understanding of how to convert CRUD operations into a performant ETL dataflow and ensure your data pipelines scale effectively.

### About ETLBox

ETLBox is a flexible and high-performance ETL framework for .NET, designed to simplify data integration and processing. It supports control flow tasks, data transformations, bulk operations, and streaming dataflows, making it an efficient alternative to traditional row-by-row CRUD operations. With built-in support for multiple databases, ETLBox enables scalable and maintainable ETL workflows. You can learn more at [ETLBox.net](https://www.etlbox.net).

## Handling "Create" Operations

Create operations are not part of a dataflow. They typically happen **before** or **after** the main ETL process.

Before loading data, tables must exist in the destination. Instead of manually defining schemas, ETLBox provides **ControlFlow Tasks** to automate this step. `CreateTableTask` is one example of how schema creation can be handled dynamically across different database systems.

### Preprocessing with CreateTableTask

`CreateTableTask` generates the correct SQL syntax based on the chosen database provider. To use it, you need a connection manager for the target database. For SQL Server, reference `ETLBox.SqlServer` and use `SqlConnectionManager`:

```csharp
var connMan = new SqlConnectionManager("Data Source=server;Initial Catalog=db;Integrated Security=True");
List<TableColumn> columns = new List<TableColumn>() {
    new TableColumn("Id", "INT",allowNulls:false, isPrimaryKey:true),
    new TableColumn("Value", "VARCHAR(100)", allowNulls:true)
};
CreateTableTask.Create(connMan, "mytable", columns);
```

For PostgreSQL, `PostgresConnectionManager` from `ETLBox.Postgres` is required, and for MySQL, `MySqlConnectionManager` from `ETLBox.MySql`. The generated SQL is always tailored to the specific database. ETLBox supports are wide range of databases, including Oracle, MariaDb, Db2, and many more.

`CreateTableTask` is just one example of how the **C (Create) in CRUD** is handled outside the dataflow. Other tasks, such as `CreateViewTask`, `CreateDatabaseTask`, or `CreateSchemaTask`, allow creating views, databases, and schemas in a similar way. These tasks help automate the setup process so that the ETL flow can focus solely on data movement and transformation.

#### Postprocessing: Index Rebuilding

For large inserts, indexes are often dropped beforehand and recreated afterward to improve performance. This should also be done before the actual data flow:

```csharp
var connMan = new SqlConnectionManager("Data Source=server;Initial Catalog=db;Integrated Security=True");
DropIndexTask.DropIfExists(connMan, "indexname", "mytable");
// Execute the data flow here
CreateIndexTask.CreateOrRecreate(connMan, "indexname", "mytable",
    new List<string>() { "index_column_1", "index_column_1" });
```

This ensures fast inserts while maintaining query performance after loading.

## Avoiding Single-Row "Read" Operations

Traditional **CRUD-based reads** often involve executing a separate `SELECT` statement for each row that needs additional data. This approach works in transactional systems but is highly inefficient in ETL processes, where performance is key.

### The Problem with Row-by-Row Reads

When processing large datasets, querying additional data for each row can quickly become a performance bottleneck.

#### Example of an Inefficient Approach

```csharp
foreach (var row in data)
{
    var lookupValue = conn.ExecuteScalar<string>($"SELECT Name FROM ReferenceTable WHERE Id = {row.ReferenceId}");
    row.Name = lookupValue;
}
```

This results in one query per row, causing significant performance degradation due to repeated database round trips.

### LookupTransformation: A Better Approach

Instead of executing multiple small queries, the `LookupTransformation` allows enriching data within the dataflow while minimizing database interactions. It fetches required reference data in bulk and caches it efficiently.

#### Using LookupTransformation

```csharp
var connMan = new SqlConnectionManager("Data Source=server;Initial Catalog=db;Integrated Security=True");
var lookup = new LookupTransformation<InputRow, LookupRow>();
lookup.CacheMode = CacheMode.Full;
lookup.Source = new DbSource<LookupRow>(conn, "LookupTable");
lookup.ApplyRetrievedCacheToInput = (input, cache) => {
    input.Value = cache.List.FirstOrDefault(l => l.LookupId == input.Id)?.LookupValue;
    return input;
};
```

This transformation:
- Loads all required reference data once the data flow starts
- Uses cached lookup data to prevent single-row reads
- Supports different cache modes (full cache, partial cache) depending on memory constraints

#### Choosing the Right Caching Strategy

- **Full Cache**: Loads all lookup data into memory at once, ensuring the fastest lookups but requiring sufficient memory.
- **Partial Cache**: Caches only the most frequently used values, reducing memory usage while still improving performance.

There are different eviction policies available which allow you to control how the cache is managed.

By replacing row-by-row reads with `LookupTransformation`, ETL workflows avoid the performance pitfalls of single-row queries while maintaining flexibility and scalability.


## Using Dataflow Sources

Instead of querying additional data row by row, a better approach is to integrate database sources directly into the ETL dataflow. This avoids excessive queries and leverages efficient streaming and batch processing.

### DbSource: Streaming Data Efficiently

`DbSource` allows you to load data from a database into a dataflow in a single operation. Instead of executing a separate `SELECT` for each row, it opens a stream on the query result, continuously passing retrieved data to subsequent transformations as it becomes available.

#### Example: Using DbSource to Read from a Database

```csharp
var connMan = new SqlConnectionManager("Data Source=server;Initial Catalog=db;Integrated Security=True");
var source = new DbSource<MyDataRow>()
{
    ConnectionManager = connMan,
    TableName = "SourceTable"
};
```

This streams the entire table into the ETL pipeline, avoiding repeated queries.

### Using Custom SQL for More Control

Instead of reading entire tables, `DbSource` can execute custom SQL queries to filter, join, or aggregate data before loading.

```csharp
var connMan = new SqlConnectionManager("Data Source=server;Initial Catalog=db;Integrated Security=True");
var source = new DbSource<MyDataRow>(conn)
{
    ConnectionManager = connMan,
    Sql = "SELECT Id, Value FROM MyTable WHERE Active = 1 ORDER BY ChangeDate"
};
```

#### Integrating Stored Procedure Results

For more complex logic, `DbSource` can also use the result of a stored procedure as input.

```csharp
var connMan = new SqlConnectionManager("Data Source=server;Initial Catalog=db;Integrated Security=True");
var source = new DbSource<MyDataRow>(conn)
{
    ConnectionManager = connMan,
    Sql = "EXEC GetFilteredData @Param1, @Param2"
};
```

This allows the pre-processing of data within the database, reducing unnecessary transformations inside the ETL process.

### Combining Dataflows with DbSource

When working with multiple sources, you can integrate them into the same dataflow:

```csharp
var source1 = new DbSource<MyDataRow>(conn1) { TableName = "TableA" };
var source2 = new DbSource<MyDataRow>(conn2) { TableName = "TableB" };

// Merge, filter, or join data from both sources within the dataflow
var join = new MergeJoin<MyLeftRow, MyRightRow, MyOutputRow>(
    (leftRow, rightRow) => {
        return new MyOutputRow() {
            TotalValue = leftRow.Value1 + " " + rightRow.Value2
        };
    });

source1.LinkTo(join.LeftInput);
source2.LinkTo(join.RightInput);
```

Using `DbSource` instead of single-row lookups ensures that data is retrieved in the most efficient way possible, reducing database load and improving ETL performance.

## Efficient "Write" Operations: Bulk Inserts

Writing data efficiently is crucial for ETL performance. **Row-by-row inserts or updates are extremely slow**, as each operation requires a separate database transaction. Instead, ETLBox provides optimized dataflow components for high-performance inserts and merges.

### Bulk Inserts with DbDestination

For large data loads, **bulk inserts** are the fastest way to write data. `DbDestination` enables batch processing, reducing database overhead.

#### Example: Using DbDestination for Bulk Inserts

```csharp
var connMan = new SqlConnectionManager("Data Source=server;Initial Catalog=db;Integrated Security=True");
var destination = new DbDestination<MyDataRow>()
{
    ConnectionManager = connMan,
    TableName = "TargetTable"
};
destination.BatchSize = 1000;
```

The dataflow processes all incoming records in batches (using the given batch size), significantly improving performance compared to row-by-row inserts.

### Merging or Upserts with DbMerge

When dealing with delta data (inserts, updates, and deletes), `DbMerge` provides an efficient alternative to manual `INSERT`, `UPDATE`, and `DELETE` statements. It behaves similarly to `MERGE INTO` or `UPSERT`, ensuring that new records are inserted, existing ones are updated, and obsolete records can be removed.

#### Example: Using DbMerge to Sync Delta Data

```csharp
var connMan = new SqlConnectionManager("Data Source=server;Initial Catalog=db;Integrated Security=True");
var merge = new DbMerge<MyMergeRow>(conn, "DestinationTable") {
    ConnectionManager = conn,
    TableName = "DestinationTable",
    MergeMode = MergeMode.Full
};
merge.IdColumns = new[] {
    new IdColumn() { IdPropertyName = "Id" }
};
```

- If a record exists, it is updated.
- If a record does not exist, it is inserted.
- If deletions need to be handled, `DbMerge` supports two modes:
  - **Full Mode**: Detects and removes missing records automatically.
  - **Delta Mode**: Deletes records based on an explicit delete flag in the incoming data.

The `DbMerge` also supports the merge modes `InsertsAndUpdatesOnly` and `UpdatesOnly`.

### Choosing Between Bulk Insert and Merge

| **Scenario**                      | **Recommended Approach** |
|----------------------------------|-------------------------|
| Loading large datasets           | `DbDestination` (bulk insert) |
| Synchronizing changes (upsert)   | `DbMerge` |
| Handling deletions               | `DbMerge` (full or delta mode) |
| Staging before final processing  | `DbDestination`, followed by processing |

For more details on the Merge operation, see [Merge Overview](/recipes/data-integration/merge-overview/). Or refer to this example of [loading data into Star Schema](/recipes/etl/star-schema/).

By using `DbDestination` and `DbMerge`, ETL workflows remain scalable, avoiding slow row-by-row operations while maximizing performance.

## Rethinking CRUD in ETL

Traditional **CRUD operations** are designed for transactional systems, while **ETL processes** handle large datasets more efficiently using a dataflow-based approach.

Row-by-row operations create high overhead and slow down performance. Each database interaction adds latency, making single-record transactions inefficient.

ETL processes work best when **processing data in bulk**. Bulk inserts replace individual `INSERT` statements, and `DbMerge` synchronizes changes more efficiently than repeated `UPDATE` or `DELETE` operations.

| **Operation**  | **CRUD Approach** | **Dataflow Approach** |
|---------------|------------------|----------------------|
| **Create**        | `CREATE TABLE` per request | **Pre-processing with `CreateTableTask`** |
| **Read**          | Single `SELECT` per row | **LookupTransformation or DbSource** |
| **Update**        | Single `UPDATE` per row | **DbMerge for bulk updates** |
| **Delete**        | Single `DELETE` per row | **DbMerge (Full or Delta Mode)** |

ETLBox provides efficient alternatives:
- **Schema preparation** with `CreateTableTask`
- **Optimized reads** using `DbSource` and `LookupTransformation`
- **Fast writes** with `DbDestination` for bulk inserts and `DbMerge` for upserts and deletes

Moving from CRUD to dataflow enables scalable, high-performance ETL processes.
