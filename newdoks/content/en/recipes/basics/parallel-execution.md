---
title: "Parallel Execution"
description: "Example: how to run multiple data flows in parallel"
lead: "This purpose of this example is to show how multiple data flows can be executed in parallel."
draft: false
images: []
menu:
  recipes:
    parent: "basics"
weight: 2030
toc: true
---

## Preqrequisites

This example requires basic knowledge of the TPL (Task parallel library). {{< link-ext text="Microsoft documentation" url="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/" >}} provide good introductional articles about asynchronous programming. We recommend to use the async/await pattern wherever possible. 

## Demo network

In order to demonstrate parallel execution, we need a network to run. In this example, we will create 5 simple object in memory. Then we will sent it into a `RowTransformation`, where we write the record details to the console output, delay execution by 10 ms and then write the record into a xml file. This is the code to create our demo network:

``` C#  
public class MyLinkingRow
{
    public int Col1 { get; set; }
    public string Col2 { get; set; }
}

static Network CreateNetwork(string targetFileName) {
    var source = new MemorySource<MyLinkingRow>();
    for (int i = 0; i <= 5; i++)
        source.DataAsList.Add(new MyLinkingRow() { Col1 = i, Col2 = $"Test{i}" });

    var row = new RowTransformation<MyLinkingRow>();
    row.TransformationFunc = row => { 
        Console.WriteLine($"Sending row {row.Col1}|{row.Col2} into {targetFileName}");
        Task.Delay(10).Wait();
        return row; };

    var dest = new XmlDestination<MyLinkingRow>(targetFileName, ResourceType.File);
    source.LinkTo(row).LinkTo(dest);

    return new Network(source);
}
```

## Parallel execution 

Now we have basically two options to execute a network: `Execute` or `ExecuteAsync`. 

The `Execute` method is a shortcut for calling wait on the returned Task from the ExecuteAsync method: `ExecuteAsync().Wait()` would be the equivalent of `Execute()`. 

So we will only show examples here that use the `ExecuteAsync()` method. The `ExecuteAsync` method return a task object - this task will complete when all components in the network have finished. 

### Awaiting both networks

Our first example shows what happens if you use the await keyword to wait for the completion of each network. The output of this example is very similar to a synchronous execution, but it won't block execution if there are other tasks running in your program code.

```C#
static async Task AwaitingTwoNetworks() {
    Console.WriteLine("Creating Network 1 & 2");
    var network1 = CreateNetwork("output1.xml");
    var network2 = CreateNetwork("output2.xml");

    Console.WriteLine("Awaiting Network 1");
    await network1.ExecuteAsync();
    Console.WriteLine("Network 1 complete - now awaiting network 2");
    await network2.ExecuteAsync();
    Console.WriteLine("Network 2 complete");
}
```

This is our log output: 

```
Example Part 1 -  async network execution using await
Creating Network 1 & 2
Awaiting Network 1
Sending row 0|Test0 into output1.xml
Sending row 1|Test1 into output1.xml
Sending row 2|Test2 into output1.xml
Sending row 3|Test3 into output1.xml
Sending row 4|Test4 into output1.xml
Sending row 5|Test5 into output1.xml
Network 1 complete - now awaiting network 2
Sending row 0|Test0 into output2.xml
Sending row 1|Test1 into output2.xml
Sending row 2|Test2 into output2.xml
Sending row 3|Test3 into output2.xml
Sending row 4|Test4 into output2.xml
Sending row 5|Test5 into output2.xml
Network 2 complete
```

### Awaiting in parallel

The next example shows if we use the task objects returned from each `ExecuteAsync` method and wait for all of them simultanously. This will execute the networks in parallel. 

```C#
public static async Task AwaitingTwoNetworksInParallel() {
    Console.WriteLine("Creating Network 1 & 2");
    var network1 = CreateNetwork("output1.xml");
    var network2 = CreateNetwork("output2.xml");

    Console.WriteLine("Starting Network 1");
    Task t1 = network1.ExecuteAsync();
    Console.WriteLine("Starting Network 2");
    Task t2 = network2.ExecuteAsync();

    Console.WriteLine("Awaiting both networks");
    await Task.WhenAll(t1, t2);
    Console.WriteLine("Network 1 & 2 complete");
}
```

Console output: 

```
Example Part 2 -  parallel execution
Creating Network 1 & 2
Starting Network 1
Starting Network 2
Awaiting both networks
Sending row 0|Test0 into output1.xml
Sending row 0|Test0 into output2.xml
Sending row 1|Test1 into output2.xml
Sending row 1|Test1 into output1.xml
Sending row 2|Test2 into output2.xml
Sending row 2|Test2 into output1.xml
Sending row 3|Test3 into output1.xml
Sending row 3|Test3 into output2.xml
Sending row 4|Test4 into output1.xml
Sending row 4|Test4 into output2.xml
Sending row 5|Test5 into output1.xml
Sending row 5|Test5 into output2.xml
Network 1 & 2 complete
```

### Parallel execution without await

The last example shows how to wait for two networks without using await. We can use the `Task.WaitAll()` method to wait for completion of both networks. `WaitAll` will block execution until both networks are complete, but the networks themselves will both run in parallel. 

```C#
public static void WaitAllForTwoNetworks() {
    Console.WriteLine("Creating Network 1 & 2");
    var network1 = CreateNetwork("output1.xml");
    var network2 = CreateNetwork("output2.xml");

    //Act
    Task t1 = network1.ExecuteAsync();
    Task t2 = network2.ExecuteAsync();
            
    Console.WriteLine("Waiting for both networks");
    Task.WaitAll(t1, t2);
    Console.WriteLine("Network 1 & 2 complete");
}
```

Console output: 

```
Example Part 3 -  WaitAll for 2 networks
Creating Network 1 & 2
Sending row 0|Test0 into output1.xml
Waiting for both networks
Sending row 0|Test0 into output2.xml
Sending row 1|Test1 into output2.xml
Sending row 1|Test1 into output1.xml
Sending row 2|Test2 into output1.xml
Sending row 2|Test2 into output2.xml
Sending row 3|Test3 into output1.xml
Sending row 3|Test3 into output2.xml
Sending row 4|Test4 into output1.xml
Sending row 4|Test4 into output2.xml
Sending row 5|Test5 into output1.xml
Sending row 5|Test5 into output2.xml
Network 1 & 2 complete
```

## Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/ParallelExecution" >}}

