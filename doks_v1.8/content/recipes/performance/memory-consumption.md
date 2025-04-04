---
title: "Memory Consumption"
description: "This recipe show a small command line utility that loads test data and allows to observer the memory consumption while loading this data."
lead: "This sample application demonstrates the key database operations, including creating database tables, loading data, synchronizing data between tables, and prints out the current memory consumptions. The application listens for user commands to execute the specific ETL tasks. While the operations are performed, you can utilize the Resource Monitor to observer the current Memory Consumption of the process (and other metrics if needed.)"
draft: false
menu:
  recipes:
    parent: "other"
weight: 2310
toc: true
---

## Running the application

The application should be directly run as a console application. Once started, it will show the available options and waits for the user to enter a command.

### Setting up the environment

Before diving into the code, ensure that you have access to a database.
This example uses SQL Server, but you adjust the connection manager to work with your database of choice.
The database name called in the current example connection string is `demo` - so if you are using the example as-is with SqlServer, make sure that this database exists.

### User Commands

The user can enter one of the following commands:

- `create`: Initiates the creation of source and destination tables in the database.
- `load`: Loads 100 000 sample data records into the source table.
- `sync`: Synchronizes data from the source table to the destination table using a full merge operation.
- `read`: Reads data from the source table into an in-memory list to demonstrate memory usage.
- `gc`: Triggers garbage collection to manage memory consumption.
- `stop`: Exits the application.

### Creating and Loading Data

The `create` command sets up the database environment by creating the necessary tables. It will create two tables: `SourceTable` and `TargetTable`.
The `load` command showcases dynamic data generation and bulk insertion using MemorySource and DbDestination.
Use these two commands to setup your test data as required.
Feel free to modify your test data if needed.

The `sync` command performs a full load synchronization between the source and target tables. This process runs a full DbMerge, including potential insertions, updates, and deletions.

The `read` command loads data into a memory list. The list is cleared and directly dereferenced after data was loaded into the list. Its purpose it to show the memory overhead of such operation.

Coupled with the `gc` command, the application tries to give insight into the memory consumption of ETLBox within .NET applications.

{{< alert text="Please note that the printed out memory consumption only shows the memory consumption for the Heap, which is managed by the .NET garbage collection" >}}

## Full code example

```C#
public static class Program
{
    static string DatabaseName => "demo";
    public static async Task Main() {
        string input;
        do {
            Console.WriteLine("create | load (100k) | sync | read | gc | stop");
            input = Console.ReadLine();

            switch (input) {
                case ("create"):
                    CreateSourceDestinationTables();
                    Console.WriteLine($"Source and Target tables successfully (re)created.");
                    PrintDiagnostics();
                    break;
                case ("load"):
                    await InsertTestDataSource(1, 100_000);
                    Console.WriteLine($"Loading done.");
                    PrintDiagnostics();
                    break;
                case ("sync"):
                    await FullLoadAsync().ConfigureAwait(false);
                    Console.WriteLine($"Sync done.");
                    PrintDiagnostics();
                    break;
                case ("gc"):
                    GC.Collect();
                    Console.WriteLine("GC called.");
                    PrintDiagnostics();
                    break;
                case ("read"):
                    LoadSourceIntoList();
                    PrintDiagnostics();
                    break;
                default:
                    break;
            }
        } while (input != "stop");
    }

    private static void PrintDiagnostics() {
        Console.WriteLine($"Current row counts: SourceTable - {GetRowCount("SourceTable")}, TargetTable - {GetRowCount("TargetTable")}");
        Console.WriteLine($"Current memory consumption (managed Heap): {GC.GetTotalMemory(true) / 1024} kilobytes.");
    }

    private static int GetRowCount(string tableName) {
        using var connection = new SqlConnectionManager($"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog={DatabaseName};TrustServerCertificate=true;");
        return RowCountTask.Count(connection, tableName);
    }

    private static void CreateSourceDestinationTables() {
        using var connection = new SqlConnectionManager($"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog={DatabaseName};TrustServerCertificate=true;");
        DropTableTask.DropIfExists(connection, "SourceTable");
        CreateTableTask.Create(connection, "SourceTable", new List<TableColumn>() {
            new TableColumn("ID", "INT", allowNulls: false, isPrimaryKey: true, isIdentity: true),
            new TableColumn("FirstName", "NVARCHAR(100)", allowNulls: true),
            new TableColumn("LastName", "NVARCHAR(100)", allowNulls: true)
        });
        DropTableTask.DropIfExists(connection, "TargetTable");
        CreateTableTask.Create(connection, "TargetTable", new List<TableColumn>() {
            new TableColumn("ID", "INT", allowNulls: false, isPrimaryKey: true, isIdentity: false),
            new TableColumn("FirstName", "NVARCHAR(100)", allowNulls: true),
            new TableColumn("LastName", "NVARCHAR(100)", allowNulls: true)
        });

    }

    static int sourceStart;
    static int sourceEnd;
    public static async Task InsertTestDataSource(int start, int end) {
        using var connection = new SqlConnectionManager($"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog={DatabaseName};TrustServerCertificate=true;");
        sourceStart = start;
        sourceEnd = end;
        var source = new MemorySource();
        source.Data = ProduceSource();
        var dest = new DbDestination(connection, "SourceTable");

        source.LinkTo(dest);
        await Network.ExecuteAsync(source);

        static IEnumerable<ExpandoObject> ProduceSource() {
            while (sourceStart < sourceEnd) {
                dynamic row = new ExpandoObject();
                row.FirstName = "Vorname" + sourceStart % 5;
                row.LastName = "Nachname" + sourceStart % 5;
                yield return row;
                sourceStart++;
            }

        }
    }

    private static async Task FullLoadAsync()
    {
        using var source = new SqlConnectionManager($"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog={DatabaseName};TrustServerCertificate=true;");
        using var target = new SqlConnectionManager($"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog={DatabaseName};TrustServerCertificate=true;");
        await GetExpandoFullMergeNetwork(source, target)
            .ExecuteAsync(CancellationToken.None);

        Network GetExpandoFullMergeNetwork(SqlConnectionManager sourceConnectionManager, SqlConnectionManager targetConnectionManager) {
            var dbSource = new DbSource(sourceConnectionManager) {
                Sql = "SELECT [ID], [LastName], [FirstName] FROM [dbo].[SourceTable]",
            };
            var dbTarget = new DbMerge(targetConnectionManager, "TargetTable") {
                MergeMode = MergeMode.Full,
            };

            dbTarget.IdColumns = new List<IdColumn>();
            //foreach (var idColum in (List<string>)["ID"])
            dbTarget.IdColumns.Add(new() { IdPropertyName = "ID" });

            dbSource.LinkTo(dbTarget);
            return new Network(dbSource);
        }

    }

    private static void LoadSourceIntoList() {
        using var connection2 = new SqlConnectionManager($"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog={DatabaseName};TrustServerCertificate=true;");
        var source = new DbSource(connection2,"SourceTable");
        var dest = new CustomDestination();
        List<ExpandoObject> memTarget = new();
        dest.WriteAction = (row,_) => {
            memTarget.Add(row);
        };
        source.LinkTo(dest);
        Network.Execute(source,dest);
        Console.WriteLine($"Read {memTarget.Count} rows into memory list.");
        memTarget.Clear();
        memTarget = null;

    }
}
```

### Code on Github

The entire code for this example, along with additional resources and documentation, {{< link-ext text="is available on GitHub for further exploration and contribution" url="https://github.com/etlbox/etlbox.demo/tree/main/ETLBoxMemoryConsumption" >}}.

