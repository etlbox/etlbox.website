---
title: "Simple Flow"
description: "A simple data flow with ETLBox"
lead: "Data Flow is at the heart of ETLBox. These components form the foundation of an ETL pipeline, allowing you to extract, transform, and load data seamlessly. In this guide, we’ll walk through a simple data flow step-by-step."
draft: false
images: []
menu:
  docs:
    parent: "introduction"
weight: 10
toc: true
chatgpt-review: true
---

## What is a Data Flow?

A data flow is a pipeline that moves and transforms data from one place to another. Whether your data is stored in files, databases, or web services, ETLBox lets you build a process that **extracts** the data, **transforms** it on the fly, and **loads** it into a target system—this is the core of ETL (Extract, Transform, Load).

In ETLBox, a data flow is created by linking **components** together. These components define where the data comes from, how it should be processed, and where it should go.

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source[Extract using <b>Sources</b>] --> transformation(<b>Transformations</b>)
  transformation --> destination[Load into <b>Destinations</b>]
```

### Key Data Flow Components

#### Source Components

A data flow always starts with a **source**. Sources read data from files, databases, APIs, or other storage systems and feed it into the pipeline.

- ETLBox provides built-in sources like `CsvSource`, `DbSource`, and `ExcelSource`.
- If needed, you can create a **custom source** by extending `CustomSource`.

**How ETLBox Handles Data Efficiently:**
- Sources read data **asynchronously**, meaning data is read and processed at the same time.
- This minimizes memory usage—data is streamed instead of being fully loaded into memory.

### Transformations

Transformations modify, clean, or enrich the data as it moves through the pipeline.

- **Non-blocking transformations** process each row as soon as it arrives.
- **Blocking transformations** (like sorting) wait for all data to arrive before processing.
- Some transformations work in batches for improved efficiency.

Each transformation has an **input buffer** to optimize throughput. Once data arrives, transformations process it and send it to the next step.

### Destination Components

Destinations define where the processed data is stored—such as a database, file, or API.

- Common destinations include `DbDestination`, `CsvDestination`, and `MemoryDestination`.
- To create a custom destination, extend `CustomDestination`.

Destinations use **buffering** to improve performance:
- A CSV destination buffers data before writing to avoid slow file operations.
- A database destination waits until enough rows are collected, then performs a bulk insert for efficiency.


## Building a Simple Data Flow

Let’s walk through a simple ETL pipeline that reads data from a CSV file, transforms it, and stores it in a SQL Server database.

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source[CsvSource] --> transformation(RowTransformation)
  transformation --> destination[DbDestination]
```

### Source file

The input file `demodata.csv` contains order data:

rownr|name|quantity_m|quantity_l|price_in_cents
-----|----|----------|----------|--------------
1|"T-Shirt"|5|0|1200
2|"Shirt"|3|7|1500
3|"Jeans"|5|2|3000

All data is separated with a ",", and the first row is the header.

### Destination table

We want to store this data in a SQL Server table:

ColumnName|Data Type|Constraints
----------|---------|----------
Id|INT|PK,Identity (auto increment)
Item|NVARCHAR(50)|
Quantity|INT|
Price|DECIMAL(10,2)|

### Creating the components

#### Step1: Define the Source

We start with a CSV source component:

```C#
CsvSource<MyRow> source = new CsvSource<MyRow>("demodata.csv");
```

With MyRow defined as

```C#
public class MyRow {
    [CsvHelper.Configuration.Attributes.Name("rownr")]
    public string Id { get; set; }
    public string name { get; set; }
    public string quantity_m { get; set; }
    public string quantity_l { get; set; }
    public string price_in_cents { get; set; }
}
```

This reads the CSV file and outputs each row as a `MyRow` object.

We'll convert the CSV data into an Order object and calculate the total quantity:
The output format of the `CsvSource` is an instance of  `MyRow`.

#### Step 2: Apply a Transformation

We'll convert the CSV data into an Order object and calculate the total quantity:

```C#
RowTransformation<MyRow, Order> rowTrans = new RowTransformation<MyRow, Order>();
rowTrans.TransformationFunc =
  row => new Order() {
      Item = row.name,
      Quantity = int.Parse(row.quantity_m) + int.Parse(row.quantity_l),
      Price = int.Parse(row.price_in_cents) / 100
  };
```

The Order object is a POCO (Plain Old C# Object):

 ```C#
public class Order
{
    public string Item { get; set; }
    public int Quantity { get; set; }
    public double Price { get; set; }
}
```

#### Step 3: Define the Destination

To store data in SQL Server, we first set up a connection manager:

```C#
SqlConnectionManager connMan = new SqlConnectionManager("Data Source=.;Initial Catalog=demo;Integrated Security=false;User=sa;password=reallyStrongPwd123");
```

{{< callout context="caution" title="Attention" icon="outline/alert-triangle" >}}
Ensure you use the correct connection manager for your database. For example, `SqlConnectionManager` is designed for SQL Server and requires a corresponding connection string. Simply use the connection manager that matches your database, such as `SQLiteConnectionManager` for SQLite, `PostgresConnectionManager` for PostgreSQL, or `MySqlConnectionManager` for MySQL.
{{< /callout >}}


Then, we create the database destination:

```C#
DbDestination<Order> dest = new DbDestination<Order>(connMan, "OrderTable");
```

If you don't want to pass the connection manager object over and over again to your DataFlow or ControlFlow objects, you can store a default connection in the static property <code>Settings.DefaultDbConnection</code>"


### Linking the components

Now, we link the components together to define the data flow:

```C#
source.LinkTo(rowTrans);
rowTrans.LinkTo(dest);
```

This creates the following pipeline:

📄 CSV Source ➝ 🔄 Row Transformation ➝ 📊 Database Destination

You can link multiple sources, transformations, and destinations to build complex flows, including splitting, merging, and conditional routing.

### Executing the dataflow

To run the pipeline, simply execute the source:

```C#
await Network.ExecuteAsync(source);
```

- Need sync execution? Use `Network.Execute(source)`.

In both cases, this starts reading data asynchronously, so transformations and inserts happen in parallel. Each component different properties to track progress, including a `Completion` task and `ProgressCount`.

### Verifying the Output

After executing the data flow, the transformed data is written into the SQL Server table. Running a `SELECT * FROM OrderTable` will return:

| Id | Item    | Quantity | Price  |
|----|--------|---------|--------|
| 1  | T-Shirt | 5       | 12.00  |
| 2  | Shirt   | 10      | 15.00  |
| 3  | Jeans   | 7       | 30.00  |

This confirms that the CSV data was successfully transformed and stored in the database.

{{< callout context="note" title="Designed for Big Data" icon="outline/info-circle" >}}
This approach efficiently handles large datasets. For example, if the input would contain 100,000 rows, the process completes in just a few seconds, depending on system performance. Even with millions of rows, ETLBox maintains performance by streaming data and processing it in chunks, ensuring that only a limited amount is kept in memory at any time.
{{< /callout >}}

## Using ExpandoObject for a Flexible Data Structure

Instead of reading CSV data into a strongly typed object (`MyRow`), we can modify our example to use a dynamic `ExpandoObject`. This allows us to handle data more flexibly without defining a class.

### Modifying the Source

We configure `CsvSource` to output dynamic objects instead of a predefined class.

```csharp
CsvSource source = new CsvSource("demodata.csv");
```

which is a shortcut for

```csharp
CsvSource<ExpandoObject> source = new CsvSource<ExpandoObject>("demodata.csv");
```

Since `CsvSource` now returns `ExpandoObject`, each row is dynamically structured.

Whenever a non-generic version of a component is used (e.g., `CsvSource` instead of `CsvSource<ExpandoObject>`), it defaults to `ExpandoObject`. The same applies to other components like `DbSource`, which is a shortcut for `DbSource<ExpandoObject>`.


### Apply a Transformation

The transformation will still convert the data into an `Order` object, but now it processes an `ExpandoObject` instead of `MyRow`. In the example below, we demonstrate two ways of accessing properties: using the `dynamic` keyword for some fields and treating `ExpandoObject` as an `IDictionary<string, object>` for others.

```csharp
 RowTransformation<ExpandoObject, Order> rowTrans = new RowTransformation<ExpandoObject, Order>();
 rowTrans.TransformationFunc =
   row => {
       dynamic dynamicRow = row as ExpandoObject;
       IDictionary<string, object> dictRow = row as IDictionary<string, object>;
       Order order = new Order() {
           Item = dynamicRow.name,
           Quantity = int.Parse(dictRow["quantity_m"].ToString()) + int.Parse(dictRow["quantity_l"].ToString()),
           Price = int.Parse(dictRow["price_in_cents"].ToString()) / 100
       };
       return order;
   };
```

- Why `ToString()`? Since `ExpandoObject` stores values as `object` by default, we convert numeric fields to `string` before parsing them.


### Deep Dive: Working with ExpandoObject

In C#, `ExpandoObject` is both a `dynamic` object and an `IDictionary<string, object>`.

**Accessing properties dynamically**:

If you know the field names in advance, you can use the `dynamic` keyword:

```csharp
dynamic obj = new ExpandoObject();
obj.Name = "T-Shirt";
Console.WriteLine(obj.Name);  // Output: T-Shirt
```

**Using ExpandoObject as a dictionary**:

For a more generic approach, treat it as an `IDictionary<string, object>`:

```csharp
ExpandoObject expando = new ExpandoObject();
var dict = (IDictionary<string, object>)expando;
dict["Name"] = "Jeans";
dict["Price"] = 39.99;
Console.WriteLine(dict["Name"]); // Output: Jeans
```



{{< callout context="tip" title="ExpandoObject for flexibility" icon="outline/bulb" >}}
This approach is especially useful when dealing with column names that contain spaces or when dynamically processing property names retrieved from a configuration file.
{{< /callout >}}

## Summary

- Sources read data asynchronously and post it into the pipeline.
- Transformations modify data on the fly before passing it along, and have buffer to improve throughput
- Destinations store data in a database, file, or memory.
- ETLBox handles data efficiently, streaming it instead of loading everything into memory.
- Using `ExpandoObject` allows for greater flexibility when handling dynamic or unknown data structures.

Now that you've seen a simple data flow, you can explore more advanced scenarios in the next guides.

### View the full code

This demo code is available online - {{< link-ext text="view the full code on Github" url="https://github.com/etlbox/etlbox.demo/tree/main/SimpleFlow" >}}.




