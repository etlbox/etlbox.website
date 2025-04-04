---
title: "Overview"
description: "Control Flow Tasks take the hassle out of routine database operations. They’re built to help you automate common actions—like creating tables or checking if a view exists—so you can focus on building your ETL logic, not writing SQL for every platform."
lead: "Control Flow Tasks are a lightweight way to work with your database using clean and simple C# code. Whether you're setting up tables, checking if something exists, or running SQL commands, these tasks help you get things done without writing repetitive code or worrying about database-specific syntax."
draft: false
images: []
menu:
  docs:
    parent: "control-flow"
weight: 710
toc: true
chatgpt-review: true
---

## Overview

Control Flow Tasks in ETLBox are a collection of utility components that simplify working with your database during ETL development and testing. With just a single line of C# code, you can create or drop tables, define views or procedures, check if a database object exists, or run SQL scripts—without needing to worry about the SQL dialect of your database system.

These tasks aren’t designed to replace a full-fledged ORM (Object Relational Mapper), nor do they cover every possible database operation. Instead, they focus on what’s essential for setting up and maintaining test environments or controlling schema and data during the runtime of your ETL processes.

Control Flow Tasks aim to reduce friction when working with databases across different platforms and to eliminate the repetitive code typically associated with ADO.NET.

### When to Use

Working directly with ADO.NET to execute SQL often requires a lot of setup: opening connections, preparing commands, executing queries, handling results—and repeating this every time. Control Flow Tasks abstract this boilerplate and make common database operations simple and consistent.

Here’s why developers choose Control Flow Tasks:

- **Cross-database compatibility**: They automatically adapt SQL to your database platform.
- **Concise, expressive syntax**: Most operations can be written in one line.
- **Ideal for testing and automation**: Quickly prepare your environment or clean up after tests.
- **Declarative and readable**: Code focuses on intent, not on plumbing.

For example, instead of manually counting rows using ADO.NET:

```csharp
using (SqlConnection con = new SqlConnection(connectionString))
{
    SqlCommand cmd = new SqlCommand("SELECT COUNT(*) FROM demotable", con);
    con.Open();
    int numRows = (int)cmd.ExecuteScalar();
}
```

You can do the same with:

```csharp
int count = RowCountTask.Count("demotable");
```

### How to Use

Control Flow Tasks are designed to be easy to use and configure. You can either use them through static methods for quick actions or instantiate them for more control.

#### Static Accessors

Most tasks offer static methods for convenience. These are useful when you just want to perform an action quickly:

```csharp
DropTableTask.DropIfExists("MyTable");
CreateSchemaTask.CreateOrAlter("myschema");
```

If you’ve set a default connection manager using `Settings.DefaultDbConnection`, you don’t need to specify a connection each time.

#### Task Instances

If you need more control—such as adding filters or enabling performance options—you can create an instance of a task and configure it before execution:

```csharp
var task = new RowCountTask("demotable") {
    Options = RowCountOptions.QuickQueryMode
};
int count = task.Count();
```

This makes it easy to tailor tasks to your environment or performance needs while still benefiting from the abstraction and safety that Control Flow Tasks provide.

#### Example: Quick Row Count on SQL Server

Want to speed up row counts on large SQL Server tables? You can switch to `QuickQueryMode`, which uses metadata instead of scanning the entire table:

```csharp
RowCountTask task = new RowCountTask("demotable") {
    Options = RowCountOptions.QuickQueryMode
};
int count = task.Count();
```

This internally generates:

```sql
SELECT SUM([rows])
FROM [sys].[partitions]
WHERE [object_id] = object_id(N'demotable') AND [index_id] IN (0,1)
```

> **Note:** `QuickQueryMode` is only supported on SQL Server.

Certainly. Here's a slightly shorter and more streamlined version of the explanation that still retains clarity:

## Comparison with ADO.NET

Control Flow Tasks reduce the amount of code needed for routine database operations. For example, counting rows in a table using ADO.NET involves setting up a connection, creating a command, opening the connection, and executing the query:

```csharp
string connectionString = "Data Source=.; Database=Sample; Integrated Security=SSPI";
using (SqlConnection con = new SqlConnection(connectionString))
{
    SqlCommand cmd = new SqlCommand("SELECT COUNT(*) FROM demotable", con);
    con.Open();
    int numRows = (int)cmd.ExecuteScalar();
}
```

With Control Flow Tasks, that same logic is simplified to:

```csharp
int count = RowCountTask.Count("demotable");
```

There’s no need to handle connections or write raw SQL. The task takes care of it, making your code cleaner and easier to maintain—especially when working across different database systems.
