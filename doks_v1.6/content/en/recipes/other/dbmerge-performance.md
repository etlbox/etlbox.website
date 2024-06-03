---
title: "DbMerge Performance Test"
description: "This recipe demonstrates how the performance of the DbMerge could be tested. "
lead: "This blog post provides a simplified example of how to conduct a performance test for the DbMerge component using the ETLBox library in a C# application."
draft: false
menu:
  recipes:
    parent: "other"
weight: 210
toc: true
---

## Simple Guide to DbMerge Performance

In this blog post, we will look at a simple example that shows how to test the performance of the `DbMerge` component using ETLBox in a C# application. The code includes three main parts: `MergeRow`, `Program`, and `DbHelper`. Let's break down what each part does.

### MergeRow Class

The `MergeRow` class defines the structure of the data we are working with. It includes several properties that will be used to compare and update data during the merge process.

```C#
public class MergeRow : MergeableRow
{
    [IdColumn]
    public long Id { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue1 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue2 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue3 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue4 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue5 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue6 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue7 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue8 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue9 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public long LongValue10 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string StringValue1 { get; set; }
    
    [CompareColumn]
    [UpdateColumn]
    public string StringValue2 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string StringValue3 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string StringValue4 { get; set; }

    [CompareColumn]
    [UpdateColumn]
    public string StringValue5 { get; set; }

}
```

### Program Class

The `Program` class is the main part of the application. It sets up the database connection, configures logging, and starts the ETL (Extract, Transform, Load) process.

```C#
internal class Program {
    //Connection string for local SQL Server
    //static string connectionString = "Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog=mergetest;TrustServerCertificate=true";
    //Connection string for azure SQL Server
    static string connectionString = "Server=tcp:azure.database.windows.net,1433;Initial Catalog=etlboxsupport;Persist Security Info=False;User ID=etlbox;Password=YourStrong@Passw0rd;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=True;";

    static void Main(string[] args) {

        ETLBoxOffice.LicenseManager.LicenseCheck.LicenseKey =
            @"2024-01-15|TRIAL|||Support|support@etlbox.net||Lhwz7nAQavV8oa/HHWvX2ukUehx0hIa5IkxoBGMjdPJ9p4tlnDt3iL0XHbj53gRDVqK5vST7Gi9WwM06kPZDLvYyrK8ymvdTFFX/KWkUhjpXZX8CUQ6C86BZzlwm6APLPjlFyXZjoo9OujRMtnyLI4YotO3s2ziPvkrKELhtDMk=";

        InitializeLoggingWithNlog();
        Settings.DisableAllLogging = true;
        var connMan = new SqlConnectionManager(connectionString);
        DbHelper.CleanSourceTable = true;
        DbHelper.CreateDatabaseIfNeeded("mergetest", connectionString);
        DbHelper.CreateTables(connMan);

        Console.WriteLine("Writing test data into source and destination tables ...");
        Console.WriteLine("This might take a while ...");

        //Test with small number of rows
        //DbHelper.InsertTestDataSource(connMan, 55, 107);
        //DbHelper.InsertTestDataDestination(connMan, 25, 70);
        //Test with medium number of rows
        //DbHelper.InsertTestDataSource(connMan, 550_123, 1_050_234);
        //DbHelper.InsertTestDataDestination(connMan, 250_345, 700_456);
        //Test with large number of rows
        DbHelper.InsertTestDataSource(connMan, 5_000_123, 10_000_789);
        DbHelper.InsertTestDataDestination(connMan, 2_500_345, 7_000_456);
        Settings.DisableAllLogging = false;

        DbSource<MergeRow> source = new() {
            ConnectionManager = connMan,
            TableName = "source",
            DisableLogging = true
        };
        DbMerge<MergeRow> merge = new() {
            ConnectionManager = connMan,
            TableName = "destination",
            MergeMode = MergeMode.Full,
            CacheMode = CacheMode.Full,
            DisableLogging = false
        };

        DbDestination<MergeRow> delta = new(connMan, "delta");
        delta.DisableLogging = true;
        source.LinkTo(merge);
        merge.LinkTo(delta);
        Network.Execute(source);


    }

    private static void InitializeLoggingWithNlog() {
        using var loggerFactory = LoggerFactory.Create(builder => {
            builder
                .AddFilter("Microsoft", Microsoft.Extensions.Logging.LogLevel.Warning)
                .AddFilter("System", Microsoft.Extensions.Logging.LogLevel.Warning)
                .SetMinimumLevel(Microsoft.Extensions.Logging.LogLevel.Trace)
                .AddNLog("nlog.config");
        });
        Settings.LogInstance = loggerFactory.CreateLogger("Default");
        Settings.LogThreshold = 10000;

    }
}
```

### DbHelper Class

The `DbHelper` class includes helper functions for setting up the database, creating tables, and inserting test data. This class makes sure everything is ready for the ETL process.

```C#
internal class DbHelper
{


    public static bool CleanSourceTable = true;
    public static void CreateDatabaseIfNeeded(string dbName, SqlConnectionString connectionString) {
        var masterConnection = new SqlConnectionManager(connectionString.CloneWithMasterDbName());
        if (!IfDatabaseExistsTask.IsExisting(masterConnection, dbName))
            CreateDatabaseTask.Create(masterConnection, dbName);
    }

    public static void CreateTables(SqlConnectionManager connection) {

        TableDefinition SourceTableDef = new TableDefinition("source",
            new List<TableColumn>() {
                new TableColumn("IdentityKey", "int",allowNulls: false, isPrimaryKey:true, isIdentity: true),
                new TableColumn("Id","BIGINT", allowNulls: false),
                new TableColumn("LongValue1","BIGINT", allowNulls: false),
                new TableColumn("LongValue2","BIGINT", allowNulls: false),
                new TableColumn("LongValue3","BIGINT", allowNulls: false),
                new TableColumn("LongValue4","BIGINT", allowNulls: false),
                new TableColumn("LongValue5","BIGINT", allowNulls: false),
                new TableColumn("LongValue6","BIGINT", allowNulls: false),
                new TableColumn("LongValue7","BIGINT", allowNulls: false),
                new TableColumn("LongValue8","BIGINT", allowNulls: false),
                new TableColumn("LongValue9","BIGINT", allowNulls: false),
                new TableColumn("LongValue10","BIGINT", allowNulls: false),
                new TableColumn("StringValue1","VARCHAR(5)", allowNulls: false),
                new TableColumn("StringValue2","VARCHAR(5)", allowNulls: false),
                new TableColumn("StringValue3","VARCHAR(5)", allowNulls: false),
                new TableColumn("StringValue4","VARCHAR(5)", allowNulls: false),
                new TableColumn("StringValue5","VARCHAR(5)", allowNulls: false),
        });

        TableDefinition DestinationTableDef = new TableDefinition("destination",
           new List<TableColumn>() {
                new TableColumn("IdentityKey", "int",allowNulls: false, isPrimaryKey:true, isIdentity: true),
                new TableColumn("Id","BIGINT", allowNulls: false),
                new TableColumn("LongValue1","BIGINT", allowNulls: false),
                new TableColumn("LongValue2","BIGINT", allowNulls: false),
                new TableColumn("LongValue3","BIGINT", allowNulls: false),
                new TableColumn("LongValue4","BIGINT", allowNulls: false),
                new TableColumn("LongValue5","BIGINT", allowNulls: false),
                new TableColumn("LongValue6","BIGINT", allowNulls: false),
                new TableColumn("LongValue7","BIGINT", allowNulls: false),
                new TableColumn("LongValue8","BIGINT", allowNulls: false),
                new TableColumn("LongValue9","BIGINT", allowNulls: false),
                new TableColumn("LongValue10","BIGINT", allowNulls: false),
                new TableColumn("StringValue1","VARCHAR(5)", allowNulls: false),
                new TableColumn("StringValue2","VARCHAR(5)", allowNulls: false),
                new TableColumn("StringValue3","VARCHAR(5)", allowNulls: false),
                new TableColumn("StringValue4","VARCHAR(5)", allowNulls: false),
                new TableColumn("StringValue5","VARCHAR(5)", allowNulls: false),
       });


        TableDefinition DeltaTableDef = new TableDefinition("delta",
            new List<TableColumn>() {
                new TableColumn("IdentityKey", "int",allowNulls: false, isPrimaryKey:true, isIdentity: true),
                new TableColumn("Id","BIGINT", allowNulls: false),
                new TableColumn("ChangeDate","DATETIME2(7)", allowNulls: false),
                new TableColumn("ChangeAction","VARCHAR(100)", allowNulls: false),
        });

        if (!IfTableOrViewExistsTask.IsExisting(connection, SourceTableDef.Name))
            CreateTableTask.Create(connection, SourceTableDef);
        else {
            if (CleanSourceTable) TruncateTableTask.Truncate(connection, SourceTableDef.Name);
        }
        if (!IfTableOrViewExistsTask.IsExisting(connection, DestinationTableDef.Name))
            CreateTableTask.Create(connection, DestinationTableDef);
        else
            TruncateTableTask.Truncate(connection, DestinationTableDef.Name);

        if (!IfTableOrViewExistsTask.IsExisting(connection, DeltaTableDef.Name))
            CreateTableTask.Create(connection, DeltaTableDef);
        else
            TruncateTableTask.Truncate(connection, DeltaTableDef.Name);
    }

    public static void InsertTestDataSource(SqlConnectionManager connection, int start, int end) {

        if (!CleanSourceTable && RowCountTask.Count(connection, "source") > 0) return;
        sourceStart = start;
        sourceEnd = end;
        var source = new MemorySource<MergeRow>();
        source.Data = ProduceSource();
        source.DisableLogging = true;
        var dest = new DbDestination<MergeRow>(connection, "source");
        dest.DisableLogging = true;

        source.LinkTo(dest);
        Network.Execute(source);

    }

    public static void InsertTestDataDestination(SqlConnectionManager connection, int start, int end) {

        destinationStart = start;
        destinationEnd = end;
        var source = new MemorySource<MergeRow>();
        source.Data = ProduceDest();
        source.DisableLogging = true;
        var dest = new DbDestination<MergeRow>(connection, "destination");
        dest.DisableLogging = true;

        source.LinkTo(dest);
        Network.Execute(source);

    }

    static int sourceStart = 50;
    static int sourceEnd = 100;
    static IEnumerable<MergeRow> ProduceSource() {
        while (sourceStart < sourceEnd) {
            yield return new MergeRow() {
                Id = sourceStart,
                LongValue1 = sourceStart % 5,
                LongValue2 = sourceStart % 5,
                LongValue3 = sourceStart % 5,
                LongValue4 = sourceStart % 5,
                LongValue5 = sourceStart % 5,
                LongValue6 = sourceStart % 5,
                LongValue7 = sourceStart % 5,
                LongValue8 = sourceStart % 5,
                LongValue9 = sourceStart % 5,
                LongValue10 = sourceStart % 5,
                StringValue1 = "ABCD" + (sourceStart % 5),
                StringValue2 = "ABCD" + (sourceStart % 5),
                StringValue3 = "ABCD" + (sourceStart % 5),
                StringValue4 = "ABCD" + (sourceStart % 5),
                StringValue5 = "ABCDE",
            };
            sourceStart++;
        }

    }

    static int destinationStart = 1;
    static int destinationEnd = 75;
    static IEnumerable<MergeRow> ProduceDest() {
        while (destinationStart < destinationEnd) {
            yield return new MergeRow() {
                Id = destinationStart,
                LongValue1 = destinationStart % 3,
                LongValue2 = destinationStart % 3,
                LongValue3 = destinationStart % 3,
                LongValue4 = destinationStart % 3,
                LongValue5 = destinationStart % 3,
                LongValue6 = destinationStart % 5,
                LongValue7 = destinationStart % 5,
                LongValue8 = destinationStart % 5,
                LongValue9 = destinationStart % 5,
                LongValue10 = destinationStart % 5,
                StringValue1 = "ABCD" + (destinationStart % 3),
                StringValue2 = "ABCD" + (destinationStart % 3),
                StringValue3 = "ABCD" + (destinationStart % 3),
                StringValue4 = "ABCD" + (destinationStart % 5),
                StringValue5 = "ABCDE",
            };
            destinationStart++;
        }

    }
}
```

### Conclusion

This example shows how to set up a simple performance test for the `DbMerge` component using ETLBox in C#. The `MergeRow` class defines the data structure, the `Program` class runs the ETL process, and the `DbHelper` class helps with setting up the database and inserting test data. This setup is useful for testing how well the `DbMerge` component handles large amounts of data.

### Code on Github

The entire code for this example, along with additional resources and documentation, {{< link-ext text="is available on GitHub for further exploration and contribution" url="https://github.com/etlbox/etlbox.demo/tree/main/DbMergePerformanceTests" >}}.

