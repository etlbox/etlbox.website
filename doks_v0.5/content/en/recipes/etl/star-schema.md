---
title: "Star Schema"
description: "Building a Data Warehouse with ETLBox"
lead: "This article was also published as a blog article 'Building a Data Warehouse with ETLBox: A .NET Developer's Guide'"
draft: false
images: []
menu:
  recipes:
    parent: "etl"
weight: 2260
toc: true
---

## Introduction 

In the world of data, transformation is key. But not just any transformation—it's about transforming raw data into actionable insights. That's where ETL (Extract, Transform, Load) processes shine, and ETLBox is a .NET star in this domain. ETLBox offers a set of tools and components to build scalable and efficient ETL processes with minimal hassle. Whether you're a seasoned data engineer or a developer venturing into data warehousing, ETLBox could be your toolkit of choice.

## Understanding Data Warehousing Concepts

### Advantages of Using a DWH & Star Schema

A data warehouse serves as a pivotal element in the modern data ecosystem, acting as a centralized data repository where information from various sources is consolidated. This consolidation enables improved decision-making by providing access to historical data critical for thorough analysis and forecasting. One of the key features of a data warehouse is the enhancement of data quality and consistency, achieved through meticulous data cleansing and transformation processes. Data warehouses are particularly optimized for high-performance querying, handling complex queries efficiently and thus allowing for significant volumes of data to be processed. Moreover, they ensure the operational systems' performance is unaffected by offloading analytical queries.

The star schema plays a vital role within the data warehouse architecture. Its design is simple, centering around a fact table which is directly linked to a set of di mension tables. This simplicity translates to enhanced query performance due to fewer joins and predictable query patterns, which also simplifies the ETL process and facilitates easier data management.

### Understanding Surrogate IDs

In data warehousing, a Surrogate ID (SID) is a unique identifier for each row in a dimension table, which is unrelated to any natural key or business identifier. This concept is essential in ensuring that dimension records are uniquely identifiable, simplifying the handling of slowly changing dimensions (SCDs), and maintaining historical accuracy in your data warehouse. 

In our example, we employ the use of the `IDENTITY` keyword in SQL Server to automatically generate these surrogate IDs. This feature is equivalent to `AUTO_INCREMENT` in MySQL or `SERIAL` in PostgreSQL. When a new record is inserted into a dimension table, the database engine auto-generates a sequential numeric value for the SID. This automated process alleviates the need for manual ID management and ensures that each new record can be tracked with a unique identifier throughout the lifecycle of the data warehouse.

Here’s a snippet demonstrating the use of `IDENTITY` within the context of our dimension tables:

```C#
TableDefinition CustomerDimTableDef = new TableDefinition("DimCustomer",
    new List<TableColumn>() {
        new TableColumn("DimId", "INT", allowNulls: false, isPrimaryKey:true, isIdentity: true),
        // Other columns...
});
```

In the above table definition, `DimId` is the surrogate ID column. Its value is automatically incremented for each new record, starting with 1 and increasing by 1 for each new insert, thereby ensuring that each customer dimension record has a unique identifier. 

### Dimensions and Facts 

#### SCD Type 1

Slowly Changing Dimension (SCD) Type 1 strategy addresses the need to manage and reflect changes in dimension attributes by overwriting the existing records. This approach is best suited for situations where maintaining historical changes is not necessary, such as error corrections or updates that do not require tracking the attribute history. SCD Type 1 is relatively straightforward to implement and maintains the dimension table's size by avoiding redundancy.

#### SCD Type 2

In contrast to Type 1, SCD Type 2 is designed to preserve historical changes. Whenever a change occurs in a dimension attribute, a new record is added to the dimension table, with the original record remaining intact. This approach allows the history of dimension changes to be tracked over time, with each record typically including 'Valid From' and 'Valid To' dates to define the period of validity. SCD Type 2 is essential for businesses that require an audit trail or historical reporting.

#### Fact Tables

The fact table is the cornerstone of the star schema within a data warehouse. It links all dimension tables together and stores quantitative metrics that are the focus of analysis. Fact tables can contain various types of facts, such as additive (can be summed up), semi-additive (can be aggregated in some dimensions), and non-additive (cannot be aggregated). The granularity of the fact table is a crucial consideration; it defines the level of detail stored and determines the depth of analysis possible.

#### Special: Date Dimension

A unique aspect of data warehousing is the use of a date dimension, which is crucial for any time-based analysis. This dimension allows for a consistent time-based reference across all fact tables, supporting the analysis across various time hierarchies like days, weeks, and months. The date dimension often includes attributes beyond the standard calendar dates, such as fiscal periods, holidays, and special event flags, which greatly enhance the data warehouse's analytical capabilities.

## Implementing a DWH with ETLBox

By mastering these data warehousing concepts and understanding the structure and function of elements like the star schema, surrogate IDs, SCDs, and fact tables, organizations can extract substantial value from their data, paving the way for informed decision-making and effective strategic planning. As this knowledge forms the foundation, the next step is to bring these concepts to life within the data warehousing environment. That's where ETLBox comes into play—a powerful .NET library designed to simplify the extract, transform, and load processes. In subsequent sections, we will delve into how ETLBox can be used to streamline these operations, ensuring your data warehousing efforts are as efficient and effective as possible. 

### Preparing the Database


### Preparing the Database

The first step is to set up your OLTP (Online Transaction Processing) databases and the DWH database. ETLBox can assist with this by enabling you to programmatically create databases, tables, and other database objects. It simplifies the process of data preparation by executing SQL tasks that can create tables and insert demo data for initial testing.

In our example, we will be using SQL Server. To ensure a smooth and isolated development environment, we recommend setting up a local Docker container running SQL Server. This approach offers several benefits, including easy setup, consistency across environments, and the ability to replicate or destroy environments without affecting your local system. For detailed instructions on setting up SQL Server in a Docker container, refer to {{<link-ext text="Microsoft's comprehensive guide" url="https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash" >}}.

To kickstart the database setup, we create a helper method that efficiently recreates the databases whenever needed. This method is especially useful in development and testing environments where frequent resetting of the database state is common. Here’s how it’s implemented:

```csharp
public static void RecreateDatabase(string dbName, SqlConnectionString connectionString)
{
    var masterConnection = new SqlConnectionManager(connectionString.CloneWithMasterDbName());
    DropDatabaseTask.DropIfExists(masterConnection, dbName);
    CreateDatabaseTask.Create(masterConnection, dbName);
}
```

#### Prepare Connection Managers 

Before we proceed to execution, we need to create the ETLBox connection managers that wrap the underlying ADO.NET connection. 

```C#
static string OLTP_ConnectionString = @"Data Source=localhost;Initial Catalog=OLTP_DB;Integrated Security=false;User=sa;password=YourStrong@Passw0rd;TrustServerCertificate=true";
static string OLAP_ConnectionString = @"Data Source=localhost;Initial Catalog=OLAP_DB;Integrated Security=false;User=sa;password=YourStrong@Passw0rd;TrustServerCertificate=true";
static SqlConnectionManager OLTP_Connection => new SqlConnectionManager(OLTP_ConnectionString);
static SqlConnectionManager OLAP_Connection => new SqlConnectionManager(OLAP_ConnectionString);
```

**Security Note on Connection Strings:**

When implementing these examples in a production environment, it's crucial to secure your database credentials. Avoid hardcoding passwords in your codebase. Instead, use environment variables, Azure Key Vault, or other secure methods to manage your credentials.

Following this, we proceed to create the databases that will act as our OLTP system and our OLAP data warehouse:

```csharp
Console.WriteLine("(Re)Creating demo databases 'OLTP_DB' & 'OLAP_DB'");
PrepareDb.RecreateDatabase("OLTP_DB", OLTP_ConnectionString);
PrepareDb.RecreateDatabase("OLAP_DB", OLTP_ConnectionString);
```

#### OLTP Demo Tables

Next, we establish the OLTP database tables. The code snippet below lays out the table definitions and populates them with sample data.

```C#
public static void CreateOLTPTables(SqlConnectionString connectionString)
{
    var connMan = new SqlConnectionManager(connectionString);

    TableDefinition OrderDataTableDef = new TableDefinition("Orders",
        new List<TableColumn>() {
            new TableColumn("OrderId", "INT",allowNulls: false, isPrimaryKey:true),
            new TableColumn("OrderDate","DATETIME", allowNulls: false),
            new TableColumn("ProductNumber","CHAR(7)", allowNulls: false),
            new TableColumn("CustomerNumber","CHAR(6)", allowNulls: false),
            new TableColumn("ActualPrice","MONEY", allowNulls: false),
    });

    TableDefinition CustomerTableDef = new TableDefinition("Customer",
        new List<TableColumn>() {
            new TableColumn("CustomerNumber", "CHAR(6)",allowNulls: false, isPrimaryKey:true),
            new TableColumn("Name","NVARCHAR(200)", allowNulls: false),
    });

    TableDefinition ProductTableDef = new TableDefinition("Product",
    new List<TableColumn>() {
            new TableColumn("ProductNumber", "CHAR(7)",allowNulls: false, isPrimaryKey:true),
            new TableColumn("Name", "NVARCHAR(50)",allowNulls: false),
            new TableColumn("Description", "NVARCHAR(500)",allowNulls: true),
            new TableColumn("RecommendedPrice","MONEY", allowNulls: false),
            new TableColumn("LastUpdated","DATETIME", allowNulls: false)

    });
    //Create demo tables & fill with demo data
    OrderDataTableDef.CreateTable(connMan) ;
    CustomerTableDef.CreateTable(connMan);
    ProductTableDef.CreateTable(connMan);            
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Customer VALUES('C-1000', 'Kevin Doe')");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Customer VALUES('C-1001','Nick Newman')");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Customer VALUES('C-1002','Zoe Trunk')");

    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Product VALUES('P-00010','Smartphone', 'The newest phone',399, '2023-01-01')");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Product VALUES('P-00011','uPhone', 'Same as a smartphone, but double the price',799,'2023-01-01')");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Product VALUES('P-00012','Computer', 'A brand new desktop',899,'2023-01-01')");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Product VALUES('P-00013','Notebook', NULL,1599,'2023-01-01')");

    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10003,'2023-01-01', 'P-00010', 'C-1000', 379)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10007,'2023-01-02', 'P-00011', 'C-1000', 699)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10012,'2023-01-03', 'P-00012', 'C-1000', 849)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10016,'2023-01-01', 'P-00012', 'C-1001', 949)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10020,'2023-01-02', 'P-00011', 'C-1001', 849)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10033,'2023-01-03', 'P-00013', 'C-1001', 1699)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10053,'2023-01-01', 'P-00010', 'C-1002', 299)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10193,'2023-01-01', 'P-00011', 'C-1002', 699)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10253,'2023-01-03', 'P-00012', 'C-1002', 799)");
    SqlTask.ExecuteNonQuery(connMan, "INSERT INTO Orders VALUES(10323,'2023-01-03', 'P-00013', 'C-1002', 1299)");
    
}    
```

The tables are schematically outlined with sample data as follows:

| CustomerNumber | Name |
| :--- | :--- |
| C-1000 | Kevin Doe |
| C-1001 | Nick Newman |
| C-1002 | Zoe Trunk |

| ProductNumber | Name | Description | RecommendedPrice | LastUpdated |
| :--- | :--- | :--- | :--- | :--- |
| P-00010 | Smartphone | New phone | 399.0000 | 2023-01-01 |
| P-00011 | uPhone | Another phone | 799.0000 | 2023-01-01  |
| P-00012 | Computer | A computer | 899.0000 | 2023-01-01 |
| P-00013 | Notebook | | 1599.0000 | 2023-01-01 |

| OrderId | OrderDate | ProductNumber | CustomerNumber | ActualPrice |
| :--- | :--- | :--- | :--- | :--- |
| 10003 | 2023-01-01 | P-00010 | C-1000 | 379.0000 |
| 10007 | 2023-01-02 | P-00011 | C-1000 | 699.0000 |
| 10012 | 2023-01-03 | P-00012 | C-1000 | 849.0000 |
| 10016 | 2023-01-01 | P-00012 | C-1001 | 949.0000 |
| 10020 | 2023-01-02 | P-00011 | C-1001 | 849.0000 |
| 10033 | 2023-01-03 | P-00013 | C-1001 | 1699.0000 |
| 10053 | 2023-01-01 | P-00010 | C-1002 | 299.0000 |
| 10193 | 2023-01-01 | P-00011 | C-1002 | 699.0000 |
| 10253 | 2023-01-03 | P-00012 | C-1002 | 799.0000 |
| 10323 | 2023-01-03 | P-00013 | C-1002 | 1299.0000 |


We can now run the OLTP database preparation script:

```C#
Console.WriteLine("Create OLTP tables");
PrepareDb.CreateOLTPTables(OLTP_ConnectionString);
```

#### OLAP Demo Tables

To define our star schema for OLAP (Online Analytical Processing), we create the following tables:

```C#
public static void CreateStarSchema(SqlConnectionString connectionString) {
    var connMan = new SqlConnectionManager(connectionString);

    TableDefinition OrderFactTableDef = new TableDefinition("FactOrders",
        new List<TableColumn>() {
            new TableColumn("FactId", "INT",allowNulls: false, isPrimaryKey:true, isIdentity:true),
            new TableColumn("SourceOrderId", "INT",allowNulls: false),
            new TableColumn("DateDim","INT", allowNulls: false),
            new TableColumn("ProductDim","INT", allowNulls: false),
            new TableColumn("CustomerDim","INT", allowNulls: false),                    
            new TableColumn("ActualPriceFact","MONEY", allowNulls: false),
    });

    TableDefinition CustomerDimTableDef = new TableDefinition("DimCustomer",
        new List<TableColumn>() {
            new TableColumn("DimId", "INT",allowNulls: false, isPrimaryKey:true, isIdentity: true),
            new TableColumn("CustomerNumber", "NVARCHAR(10)",allowNulls: false),
            new TableColumn("Name","NVARCHAR(200)", allowNulls: true),
    });

    TableDefinition ProductDimTableDef = new TableDefinition("DimProduct",
       new List<TableColumn>() {
           new TableColumn("DimId", "INT",allowNulls: false, isPrimaryKey:true, isIdentity: true),
            new TableColumn("ProductNumber", "NVARCHAR(10)",allowNulls: false),
            new TableColumn("Name", "NVARCHAR(50)",allowNulls: true),
            new TableColumn("Description", "NVARCHAR(500)",allowNulls: true),
            new TableColumn("RecommendedPrice","MONEY", allowNulls: false),
            new TableColumn("ValidFrom","DATETIME", allowNulls: false, isPrimaryKey:true),
            new TableColumn("ValidTo","DATETIME", allowNulls: false),
    });

    //Create demo tables & fill with demo data
    OrderFactTableDef.CreateTable(connMan);
    CustomerDimTableDef.CreateTable(connMan);
    ProductDimTableDef.CreateTable(connMan);          
}
```

This is the schematic outline of the tables:

DimId|CustomerNumber|Name
-----|--------------|--

DimId|ProductNumber|Name|Description|RecommendedPrice|ValidFrom|Valid
-----|-------------|----|-----------|----------------|---------|---

FactId|SourceOrderId|DateDim|ProductDim|CustomerDim|ActualPriceFact
------|-------------|-------|----------|-----------|--------------

Let's also create the tables for our OLAP database:

```C#
Console.WriteLine("Create OLAP tables");
PrepareDb.CreateStarSchema(OLAP_ConnectionString);
```

### Loading SCD Type 1 Dimensions

When dealing with SCD (Slowly Changing Dimension) Type 1 in data warehousing scenarios, ETLBox streamlines the extract, transform, and load (ETL) process. The SCD Type 1 method involves updating existing records with new data as it comes in, without maintaining historical changes. This means that any updates in the dimension data will overwrite the previous entries, thus always reflecting the most current state of data.

ETLBox helps with these operations with its dataflow tasks. Generating surrogate keys is simplified using SQL Server's Identity column feature, which is a common practice to uniquely identify records in a DWH environment.

In the context of ETLBox, to decide whether a source row should be inserted as new or used to update an existing record, the `DbMerge` task is utilized. By setting the `MergeMode` to `InsertsAndUpdates`, ETLBox handles the decision-making process of the merge operation, which is particularly useful since deletions are generally not performed in a DWH in order to maintain historical data consistency.

Here's how we implement an SCD Type 1 load using ETLBox:

1. We define a strongly-typed object `Customer`, which helps map source data to the destination schema, including any necessary identifiers.
2. `DbSource` is used to load all data from the Customer table in the OLTP source system.
3. `DbMerge` is then configured to sync this incoming data with the destination table in the DWH by either inserting new records or updating existing ones based on the primary key.

Below is the C# code for loading SCD Type 1 dimensions:

```C#
public class Customer : MergeableRow
{            
    public string Name { get; set; }
    [IdColumn]
    [DbColumnMap("CustomerNumber")]
    public string Number { get; set; }
    public int? DimId { get; set; }
}

private static void LoadCustomer_SCD1() {
    var source = new DbSource<Customer>(OLTP_Connection, "Customer");

    var dest = new DbMerge<Customer>(OLAP_Connection, "DimCustomer");
    dest.MergeMode = MergeMode.InsertsAndUpdates;

    source.LinkTo(dest);
    Network.Execute(source);
}

private static void ChangeCustomer() {
    SqlTask.ExecuteNonQuery(OLTP_Connection, "INSERT INTO Customer VALUES('C-1003','Kevin Justin')");
    SqlTask.ExecuteNonQuery(OLTP_Connection, "UPDATE Customer SET Name='Jack Apples' WHERE CustomerNumber = 'C-1002'");
}
```

To demonstrate the SCD Type 1 process in action:

```C#
Console.WriteLine("Load customer as Slowly Changing Dimension Type 1");
LoadCustomer_SCD1();
Console.WriteLine("Changing customer data & reloading");
ChangeCustomer();
LoadCustomer_SCD1();
Console.WriteLine("Customer dimension successfully loaded!");
```

This script is designed to be run in sequence: first to load initial data into the DWH, then to simulate changes in source data, and finally to reload the data, illustrating how the SCD Type 1 dimension is kept up-to-date. 


### Loading SCD Type 2 Dimensions

For SCD Type 2, ETLBox must manage the complexity of maintaining historical changes. This typically involves:

- Identifying new and changed records in the source data.
- Inserting new records into the dimension table for new data.
- Ending the validity of the current records and inserting new records for changed data.

ETLBox help with these tasks by providing control flow tasks and data flow components that manage the data transformations and loads.

Here is the source code to load a SCD Type 2 with ETLBox: 

```C#
public class Product
{
    [RetrieveColumn("DimId")]
    public int? DimId { get; set; }
    public string Name { get; set; }
    [DbColumnMap("ProductNumber")]
    [MatchColumn("Number")]
    public string Number { get; set; }
    public string Description { get; set; }
    public decimal RecommendedPrice { get; set; }
    public DateTime LastUpdated { get; set; }
    [RetrieveColumn("ValidFrom")]
    public DateTime? ValidFrom { get; set; } = new DateTime(1900, 1, 1);
    public DateTime? ValidTo { get; set; } = new DateTime(9999, 12, 31);
}

private static void LoadProducts_SCD2(DateTime lastUpdateDate) {
    var source = new DbSource<Product>(OLTP_Connection);
    source.Sql = "SELECT ProductNumber, Name, Description, RecommendedPrice, LastUpdated FROM Product WHERE LastUpdated >= @par1";
    source.SqlParameter = new[] {
        new QueryParameter() {
            Name="par1", SqlType = "DATETIME", Value = lastUpdateDate
        }
    };

    var lookup = new LookupTransformation<Product, Product>();
    var lookupSource = new DbSource<Product>(OLAP_Connection, "DimProduct");
    lookupSource.Sql = @"
SELECT DISTINCT ProductNumber,
    LAST_VALUE(ValidFrom) OVER(
        PARTITION BY ProductNumber ORDER BY ValidFrom
        RANGE BETWEEN
        UNBOUNDED PRECEDING AND
        UNBOUNDED FOLLOWING
) ValidFrom,
LAST_VALUE(DimId) OVER(
        PARTITION BY ProductNumber ORDER BY DimId
        RANGE BETWEEN
        UNBOUNDED PRECEDING AND
        UNBOUNDED FOLLOWING
) DimId
FROM DimProduct";
    lookup.Source = lookupSource;

    var destNewRows = new DbDestination<Product>(OLAP_Connection, "DimProduct");
    var destChangedRows = new DbDestination<Product>(OLAP_Connection, "DimProduct");
    var destUpdateRows = new DbDestination<Product>(OLAP_Connection, "DimProduct");

    destUpdateRows.BulkOperation = BulkOperation.Update;
    destUpdateRows.IdColumns = new[] {
        new IdColumn() { IdPropertyName = "Number"},
        new IdColumn() { IdPropertyName = "ValidFrom"},
    };
    destUpdateRows.UpdateColumns = new[] {
        new UpdateColumn() { UpdatePropertyName ="ValidTo"}
    };

    var multicast = new Multicast<Product>();

    var updateValidFromTransformation = new RowTransformation<Product>(
        row => {
            row.ValidFrom = row.LastUpdated;
            return row;
        });

    var updateValidToTransformation = new RowTransformation<Product>(
        row => {
            row.ValidTo = row.LastUpdated.AddSeconds(-1);
            return row;
        });

    source.LinkTo(lookup);
    lookup.LinkTo(destNewRows, row => row.DimId == null);
    lookup.LinkTo(multicast, row => row.DimId != null);
    multicast.LinkTo(updateValidFromTransformation).LinkTo(destChangedRows);
    multicast.LinkTo(updateValidToTransformation).LinkTo(destUpdateRows);
    Network.Execute(source);

}
```

Our ETL process begins by defining a `Product` class to mirror the structure of our dimension table. Key to this process is the use of `LookupTransformation`, which differentiates between new records and those requiring updates due to changes. Here’s how the transformation is applied:

- **New Records**: The ETL flow inserts new entries with the `ValidFrom` and `ValidTo` dates set to the predefined start and end dates, respectively. This marks the beginning of their validity period within the dimension.

- **Changed Records**: For updated records, the ETL process involves two key steps:
  - Ending the current record's validity by updating the `ValidTo` field to a timestamp just before the new `LastUpdated` value.
  - Inserting a new record with updated information and a `ValidFrom` value equal to the `LastUpdated` timestamp of the incoming data.

The distinction and handling of new and updated records are efficiently managed by ETLBox's control and data flows, including the `LookupTransformation`. The process is then followed by the insertion of new records and the adjustment of historical records to reflect changes accurately.

Furthermore, we enhance the integrity of our historical data by employing an SQL window function post-load to adjust the `ValidFrom` column. This is necessary to ensure the seamless continuity of record validity, aligning `ValidFrom` dates with existing `ValidTo` values. The window function leverages the `LAST_VALUE()` function within a partitioned data set to provide the most recent `ValidFrom` date for each unique product number, ensuring that our validity periods are accurate and up to date.

To test this part of the ETL process, you can execute the following sequence to load initial data, apply changes, and then reload to see the updates in the SCD Type 2 dimension:

```C#
 Console.WriteLine("Load products as Slowy Changing Dimension Type 2");
 LoadProducts_SCD2(new DateTime(2023, 1, 1));
 Console.WriteLine("Changing product data & reloading");
 ChangeProduct();
 LoadProducts_SCD2(new DateTime(2023, 1, 4));
 Console.WriteLine("Changing product data again & reloading");
 ChangeProduct2();
 LoadProducts_SCD2(new DateTime(2023, 1, 5));
 Console.WriteLine("Product dimension successfully loaded!");
```

This script simulates the loading of data, applying changes, and reloading, showcasing how ETLBox can be leveraged to manage the complex requirements of SCD Type 2 in a data warehousing environment.

#### Creating a Date Dimension

Creating a date dimension is a fundamental step that enhances your time-based analysis capabilities. ETLBox can help generate this dimension with the necessary attributes for days, weeks, months, fiscal periods, and so on. This process might include generating a range of dates and the corresponding attributes and then loading them into your date dimension table in the DWH.

Here's the code provided to generate and load the date dimension:

```C#
public class DateDimension
{
    [DbColumnMap(IgnoreColumn =true)]
    public DateTime Date { get; set; }
    public int DateID => int.Parse(this.Date.ToString("yyyyMMdd"));
    public string DateString => this.Date.ToString("MM/dd/yyyy"); 
    public int Month => this.Date.Month; 
    public int Day => this.Date.Day; 
    public int Year => this.Date.Year; 
    public int DayofWeek => (int)this.Date.DayOfWeek; 
    public string DayofWeekName => this.Date.DayOfWeek.ToString(); 
    public int DayofYear => this.Date.DayOfYear; 
    public int WeekOfYear => this.GetWeekOfYear();
    public string MonthName => this.Date.ToString("MMMM");
    public int QuarterOfYear => this.GetQuarterOfYear();
            
    private int GetQuarterOfYear() {
        return (int)Math.Floor(((decimal)this.Date.Month + 2) / 3);
    }

    private int GetWeekOfYear() {
        System.Globalization.DateTimeFormatInfo dfi = System.Globalization.DateTimeFormatInfo.CurrentInfo;
        System.Globalization.Calendar cal = dfi.Calendar;
        return cal.GetWeekOfYear(this.Date, dfi.CalendarWeekRule, dfi.FirstDayOfWeek);
    }

    public static IEnumerable<DateDimension> Generate(DateTime StartDate, DateTime EndDate) {

        int TotalDays = (int)(EndDate.AddDays(1) - StartDate).TotalDays;
        return Enumerable.Range(0, TotalDays).Select(e =>
            new DateDimension() { Date = StartDate.AddDays(e) }
            ).OrderBy(e => e.DateID).ToList();
    }
}


private static void CreateDateDimension() {
    DropTableTask.DropIfExists(OLAP_Connection, "DimDate");
    CreateTableTask.CreateIfNotExists(OLAP_Connection, "DimDate",
        typeof(DateDimension).GetProperties()
        .Where(prop => prop.Name != nameof(DateDimension.Date))
        .Select(prop => 
            new TableColumn(
            name: prop.Name,
            dataType: prop.PropertyType == typeof(int) ? "INT" : "VARCHAR(30)",
            allowNulls: false,
            isPrimaryKey: prop.Name == nameof(DateDimension.DateID)
            )).ToList());

    var source = new MemorySource<DateDimension>();
    source.Data = DateDimension.Generate(new DateTime(2023, 1, 1), new DateTime(2023, 1, 5));
    var dest = new DbDestination<DateDimension>(OLAP_Connection, "DimDate");
    source.LinkTo(dest);
    Network.Execute(source);
}
```

The ETL process involves the following steps:

1. The `DateDimension` class is constructed to mirror the date dimension table in the DWH, encompassing all the necessary properties like `Month`, `Day`, `Year`, etc., and helper methods to compute `WeekOfYear` and `QuarterOfYear`.
2. The `Generate` method within the `DateDimension` class facilitates the creation of the date range needed. It calculates the total number of days between the start and end dates and generates a corresponding list of `DateDimension` objects.
3. To prepare for data loading, existing tables are dropped and new tables are created within the database using ETLBox's `DropTableTask` and `CreateTableTask` methods.
4. The `MemorySource` and `DbDestination` classes are used to create a data flow where the generated date dimension data is written from memory to the database dimension table.

To load the date dimension into the DWH, you would run:

```C#
 Console.WriteLine("Creating a generic date dimension");
 CreateDateDimension();
```

### Loading Fact Data

Loading data into a fact table is crucial when establishing a Data Warehouse (DWH). This operation typically involves the extraction of data from source systems, its transformation to fit the DWH schema, and finally, its insertion into the fact table.

#### Incremental Loads vs. Full Loads

ETLBox facilitates both incremental and full data loads, providing flexibility depending on your needs:

- Incremental Loads are more efficient for production environments because they only add new or updated data.
- Full Loads are more common during the initial setup of a DWH or when a complete data refresh is required.

Deciding between incremental loads and full loads depends on the specific needs of your organization and the nature of your data. 

#### Code example

The provided code snippet defines an ETL process for loading the orders fact data into our DWH:

```C#
public class Order
{
    [DbColumnMap("SourceOrderId")]
    public int OrderId { get; set; }
    public DateTime OrderDate { get; set; }
    public int? DateDim => int.Parse(OrderDate.ToString("yyyyMMdd"));
    public string ProductNumber { get; set; }
    public int? ProductDim { get; set; }
    public string CustomerNumber { get; set; }
    public int? CustomerDim { get; set; }
    [DbColumnMap("ActualPriceFact")]
    public decimal ActualPrice { get; set; }
}

private static DateTime GetMaxOrderDate() =>
    SqlTask.ExecuteScalar<DateTime>(OLTP_Connection, "SELECT MAX(OrderDate) FROM Orders");


private static void AddOrders() {
    SqlTask.ExecuteNonQuery(OLTP_Connection, "INSERT INTO Orders VALUES(20001,'2023-01-04', 'P-00013', 'C-1001', 1555)");
    SqlTask.ExecuteNonQuery(OLTP_Connection, "INSERT INTO Orders VALUES(20002,'2023-01-04', 'P-00010', 'C-1002', 288)");
    SqlTask.ExecuteNonQuery(OLTP_Connection, "INSERT INTO Orders VALUES(20003,'2023-01-04', 'P-00011', 'C-1003', 689)");
}

private static void AddOrderWithFlawedRecord() {
    SqlTask.ExecuteNonQuery(OLTP_Connection, "INSERT INTO Orders VALUES(30002,'2023-01-06', 'P-XXXXX', 'C-1002', 1999)");
}



private static void LoadOrders(DateTime lastLoadDate) {
    var source = new DbSource<Order>(OLTP_Connection);
    source.SqlParameter = new[] {
        new QueryParameter() { Name = "date", Value = lastLoadDate }
    };
    source.Sql = @"SELECT OrderId, OrderDate, ProductNumber, CustomerNumber, ActualPrice
                       FROM Orders
                       WHERE OrderDate > @date";

    var dest = new DbDestination<Order>(OLAP_Connection, "FactOrders");

    var customerLookup = new LookupTransformation<Order, Customer>();
    var customerLookupSource = new DbSource<Customer>(OLAP_Connection, "DimCustomer");
    customerLookup.MatchColumns = new[] {
        new MatchColumn() {
            InputPropertyName = nameof(Order.CustomerNumber),
            LookupSourcePropertyName = nameof(Customer.Number)
        }
    };
    customerLookup.RetrieveColumns= new[] {
        new RetrieveColumn() {
            InputPropertyName = nameof(Order.CustomerDim),
            LookupSourcePropertyName = nameof(Customer.DimId)
        }
    };
    customerLookup.Source = customerLookupSource;

    var productLookup = new LookupTransformation<Order, Product>();
    var productLookupSource = new DbSource<Product>(OLAP_Connection, "DimProduct");
    productLookup.MatchColumns = new[] {
        new MatchColumn() {
            InputPropertyName = nameof(Order.ProductNumber),
            LookupSourcePropertyName = nameof(Product.Number)
        }
    };
    productLookup.RetrieveColumns = new[] {
        new RetrieveColumn() {
            InputPropertyName = nameof(Order.ProductDim),
            LookupSourcePropertyName = nameof(Product.DimId)
        }
    };
    productLookup.Source = productLookupSource;

    var errorLog = new JsonDestination<ETLBoxError>("errros.log");

    source.LinkTo(customerLookup);
    customerLookup.LinkTo(productLookup);
    productLookup.LinkTo(dest);
                
    dest.LinkErrorTo(errorLog);

    Network.Execute(source);
}
```

This ETL process includes:

1. **Data Extraction:** The `DbSource` class is used to pull data from the source database that has been added since the last load date.
2. **Data Transformation:** The `LookupTransformation` class enriches the data by retrieving dimension keys from the `DimCustomer` and `DimProduct` tables based on the incoming order's customer and product numbers.
3. **Error Handling:** An `error.log` file is set up to capture any records that fail to load properly, outputting them in a JSON format for troubleshooting.
4. **Data Loading:** The `DbDestination` class handles the insertion of transformed data into the `FactOrders` table, using bulk insert sql statements for efficiency.
5. **Performance Tuning:** The `BatchSize` property of `DbDestination` could be adjusted to optimize performance. Larger batch sizes can increase throughput, though they may also increase resource consumption. The default batch size is 1000 rows per bulk insert. 

If the insert of fact data fails for any reason, the entire flawed batch is redirected into an error file ("errors.log"). It's important to note that this file will contain all records from the batch, not just the flawed ones. For more granular error checking, it's advisable to incorporate data validation or cleansing transformations into the data flow beforehand. This would help in filtering out erroneous data before the insertion into the database occurs.

To run the initial and subsequent incremental data loads, the following commands are executed:

```C#
Console.WriteLine("Adding fact data with one flawed record and loading again - flawed entry is redirected into 'error.json'");
lastLoadDate = GetMaxOrderDate();
AddOrderWithFlawedRecord();
LoadOrders(lastLoadDate);
Console.WriteLine("Fact table successfully loaded!");
```

This command sequence does the following:

- Gets the most recent OrderDate from the fact table to determine the starting point for the incremental load.
- Adds an additional order with a flawed record to simulate an error condition.
- Executes the LoadOrders method to perform the incremental load.



## Wrap-up

### Code on GitHub

The full code for this example is available on GitHub. You can access it through the following link: 
{{< link-ext text="ETLBox Example Code on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/StarSchema" >}}

### Conclusion

ETLBox offers a streamlined, flexible approach for building a Data Warehouse (DWH) that can greatly augment your organization's data analysis and reporting capabilities. Throughout our guide, we have demonstrated the use of POCOs (Plain Old CLR Objects) to methodically load data. 

However, ETLBox isn't limited to statically typed objects; it also supports dynamic data types through the use of the `ExpandoObject`. This dynamic object, especially when paired with the `dynamic` keyword in C#, empowers developers to create adaptable data flows without the need for predefined data structures.

Leveraging dynamic objects alongside a configuration-driven approach not only increases the reusability of your ETL code across various dimensions and fact tables but also introduces an impressive degree of flexibility to the data loading process.

Furthermore, the ability to craft your ETL code in C# opens the door to applying standard testing practices, such as Unit or Integration tests. This means your ETL processes can be fully integrated with existing test frameworks like xUnit or NUnit, ensuring reliability and stability. Additionally, ETLBox naturally fits into your existing Continuous Integration/Continuous Deployment (CI/CD) pipelines and version control systems, aligning your data processing workflows with modern development practices.

Ultimately, the strength and adaptability of ETLBox make it a standout ETL tool for any organization seeking to develop or expand their data warehousing solutions.
