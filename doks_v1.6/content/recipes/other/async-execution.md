---
title: "Async Execution"
description: "ETLBox components run on separate threads/tasks, ensuring that data processing is asynchronous. The provided recipe code demonstrates how even with blocking calls, ETLBox maintains parallel processing, keeping the main thread unblocked and efficient."
lead: "ETLBox inherently supports asynchronous execution, eliminating the need for explicit async/await within its transformations. This ensures non-blocking operations and prevents thread starvation or deadlocks."
draft: false
menu:
  recipes:
    parent: "other"
weight: 210
toc: true
---

## Async Support in Transformations

ETLBox does not need explicit support for async/await within its transformations because the entire data processing framework is inherently designed to execute tasks asynchronously. The framework ensures that each component in a data flow runs on a separate thread/task. This design allows the overall process to remain non-blocking, even if individual transformations involve blocking calls. As a result, the main thread is not blocked, and thread starvation or deadlocks are avoided.

### Asynchronous Execution in ETLBox

The `Network.ExecuteAsync(..)` method initiates the execution of the entire data flow asynchronously. This method returns a task that completes only when all tasks within the network are finished. This design ensures that the main thread remains unblocked while the data flow is processed. Each component, such as `MemorySource`, `RowTransformation`, and `CustomDestination`, in the network runs asynchronously. The code within each transformation runs on separate threads, ensuring parallel processing of data rows.

### Example Code

Consider the following example.

```csharp
namespace AsyncExecution;
internal class Program {
    static async Task Main(string[] args) {

        //Settings.MaxBufferSize = 5000;
        if (File.Exists("log.txt"))
            File.Delete("log.txt");
        var log = new LoggerConfiguration()
            .WriteTo.File("log.txt")
            .CreateLogger();
        var ilogInstance = new SerilogLoggerFactory(log).CreateLogger("ETLBox");
        Settings.LogInstance = ilogInstance;

        MemorySource<MyRow> source = new();
        for (int i = 0; i < 4000; i++)
            source.DataAsList.Add(new MyRow() { Id = i, Value = "Test" + i });

        Multicast<MyRow> multicast = new Multicast<MyRow>();
        RowTransformation<MyRow> trans1 = new RowTransformation<MyRow>();
        trans1.OnCompletion = () => Console.WriteLine("Transformation **1** completed");
        trans1.TransformationFunc = row => {
            row.Value = row.Value + " - transformed";
            Task.Delay(1).GetAwaiter().GetResult();
            log.Information("Transformation **1**: " + row.Id + ":" + row.Value);
            return row;
        };

        RowTransformation<MyRow> trans2 = new RowTransformation<MyRow>();
        trans2.OnCompletion = () => Console.WriteLine("Transformation **2** completed");
        trans2.TransformationFunc = row => {
            row.Value = row.Value + " - transformed again";
            log.Information("Transformation **2**: " + row.Id + ":" + row.Value);
            return row;
        };

        CustomDestination<MyRow> dest1 = new CustomDestination<MyRow>();
        dest1.OnCompletion = () => Console.WriteLine("Destination **1** completed");
        dest1.WriteAction = (row, _) => {
            Task.Delay(1).GetAwaiter().GetResult();
            log.Information("Destination **1**: " + row.Id + ":" + row.Value);
        };

        CustomDestination<MyRow> dest2 = new CustomDestination<MyRow>();
        dest2.OnCompletion = () => Console.WriteLine("Destination **2** completed");
        dest2.WriteAction = (row, _) => {
            log.Information("Destination **2**: " + row.Id + ":" + row.Value);
        };

        source.LinkTo(multicast);
        multicast.LinkTo(trans1);
        multicast.LinkTo(trans2);
        trans1.LinkTo(dest1);
        trans2.LinkTo(dest2);

        //await Network.ExecuteAsync(source);
        Task t = Network.ExecuteAsync(source);
        while (t.Status != TaskStatus.RanToCompletion) {
            Console.WriteLine("Network still running - Waiting for completion...");
            await Task.Delay(1000);
        }
        await t;
    }
}

internal class MyRow {
    public int Id { get; set; }
    public string Value { get; set; }
}

```

In this example, data is split into two separate processing lines. One line includes blocking `Delay()` methods, while the other does not. The code shows that while one line waits for the delay methods to return, the other line continues processing records. This demonstrates that ETLBox components can run asynchronously, ensuring that the main thread remains unblocked and preventing thread starvation or deadlock issues.

In the main method, a `while` loop periodically checks if the network has completed processing (`t.Status != TaskStatus.RanToCompletion`) and logs a message. This loop runs asynchronously alongside the data flow, showing that the main thread is free to perform other tasks while waiting for the data flow to complete.

The buffer size could be adjusted (`Settings.MaxBufferSize = 5000`) if you want to work with larger amounts of data - please also adjust the number of generated records in the `for` loop. 

### Code on Github

The entire code for this example, along with additional resources and documentation, {{< link-ext text="is available on GitHub for further exploration and contribution" url="https://github.com/etlbox/etlbox.demo/tree/main/AsyncExecution" >}}.



