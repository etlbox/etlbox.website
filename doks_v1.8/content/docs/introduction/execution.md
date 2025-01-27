---
title: "Network execution"
description: "Details how to execute a data flow."
lead: "After you created and linked your components, you are ready to execute your data flow."
draft: false
images: []
menu:
  docs:
    parent: "introduction"
weight: 250
toc: true
---

## Synchronous Execution

The easiest way to execute a data flow is synchronous. That means that execution of your program is paused
until all data was read from all sources and written into all destinations. Using the synchronous execution also makes
debugging a lot easier, as you don't have to deal with async programming and the specialties of exception
handling with tasks.

{{< alert text="In the background, the data flow is always executed asynchronously.When using the synchronous <code>Execute</code> method, ETLBox will wrap up the asynchronous execution and wait for it's completion" >}}

### Example synchronous execution

Let's consider a simple data flow that we want to execute synchrounously.

```C#
//Prepare the flow
DbSource source1 = new DbSource1("SourceTable1");
DbSource source2 = new DbSource2("SourceTable2");
RowTransformation rowTrans = new RowTransformation( row => row );
DbDestination dest1 = new DbDestination("DestTable");
DbDestination dest2 = new DbDestination("DestTable");

//Link the flow
source1.LinkTo(row);
source2.LinkTo(row);
row.LinkTo(dest1, row => row.Value < 10);
row.LinkTo(dest2, row => row.Value >= 10);

//Execute the whole data flow
Network.Execute(source1, source2);
```

The last line: `Network.Execute(source1, source2)` will execute the whole data flow and block execution until all data has arrived at *all destinations*.

It is not necessary to pass all the source into the Network class. You only have to pass at least one *component* that is part of the network. The following statements also would execute the whole data flow and do the exact same as the execution above:

```C#
Network.Execute(source1);
Network.Execute(row);
Network.Execute(source1, source2, row, dest1, dest2);
Network.Execute(source1, row, dest2);
//...
```

### Using the shortcut on the sources

There is also shortcut for the Network.Execute(..) method.
Every data flow source does offer an Execute() method. This will trigger the corresponding Network.Execute() method, and will pass the source itself.
For the example above, you could also trigger the *whole* network like this:

```C#
source1.Execute();
```

or

```C#
source2.Execute();
```

Or you could run the execution on for both (not recommended)
```C#
source1.Execute();
source2.Execute();
```


{{< alert text="Running the execution on both is not recommended, as the second execution would simple do nothing. We recommend to start your network always using <code>Network.Execute(...)</code> or <code>Network.ExecuteAsync(...)</code>." >}}



{{< alert text="For versions prior to 2.3.0, using the <code>Execute()</code> on all sources (and calling <code>Wait()</code> on all destinations) was the only option to run your  network. This is still supported, but we recommend to use the <code>Network.Execute()</code> method instead." >}}

### Using Post()

If you want to get more control over the order your sources are sending data into the flow, you can the `Post()` call instead - it will *not* start your whole network, but only triggers one source to send data into the flow. `Post()` will block execution until the source component posted all data into connected components. If you choose this way of execution, you need to trigger all your sources manually and wait for the completion of all destination, using the Completion task of each component.

```C#
source2.Post();
source1.Post();
dest1.Completion.GetAwaiter().GetResult();
dest2.Completion.GetAwaiter().GetResult();
```

This will force `source2` to send all data from its source table into the data flow. Execution will block until `source2` is done, and then it's the turn of `source1` to post all data rows. When `source1` has finished, we can wait at the destinations for the data flow to finish processing the data.

{{< alert text="This approach is not recommended, as you would also need to observe all other Completion tasks in your dataflow, e.g. for cancellation events. We recommend to start your network always using <code>Network.Execute(...)</code> or <code>Network.ExecuteAsync(...)</code>." >}}

## Asynchronous execution

If you are familiar with async programming, you can also execute the data flow asynchronous. This means that execution of your program will continue while the data is read from the source and written into the destinations in separate task(s) in the background.

### Example async execution

```C#
//Prepare the flow
DbSource source1 = new DbSource1("SourceTable1");
DbSource source2 = new DbSource2("SourceTable2");
RowTransformation rowTrans = new RowTransformation( row => row );
DbDestination dest1 = new DbDestination("DestTable");
DbDestination dest2 = new DbDestination("DestTable");

//Link the flow
source1.LinkTo(row);
source2.LinkTo(row);
row.LinkTo(dest1, row => row.Value < 10);
row.LinkTo(dest2, row => row.Value >= 10);

//Execute the whole data flow
Task networkCompletion = Network.ExecuteAsync(source1, source2);

//Now you can wait for the whole network, e.g.
networkCompletion.Wait();
//or networkCompletion.GetAwaiter().GetResult();

```

Using the `Network.ExecuteAsync()` method will return a task that can be awaited. Of course the execution could also be started with the `await` keyword:

```C#
await Network.ExecuteAsync(source1, source2);
```

Like for the synchronous execution, it is only necessary to pass one component of the network to the `ExecuteAsync` method.

### Running networks in parallel

With the `ExecuteAsync` method, you will be able to execute multiple networks in parallel. You can use the returned task objects to await their completion.

```C#
Task t1 = Network.ExecuteAsync(source1);
Task t2 = Network.ExecuteAsync(source2);
await Task.WhenAll(t1,t2);
//or use the "classic" approach
Task.WhenAll(t1,t2).ContinueWith ( t => { ... all networks finished, run more code here ... } );
```

If you are not familiar with using the async/await pattern, {{< link-ext text="there is a good article on microsoft docs." url="https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/" >}}

### Completion tasks on the components

If you want more control over your network you can use the Completion property that exposes the current task of each data flow component.

E.g. you could trigger your flow like this:

```C#
Task sourceTask1 = source1.ExecuteAsync();
Task sourceTask2 = source2.ExecuteAsync();
Task rowTask = row.Completion;
Task destTask1 = dest1.Completion;
Task destTask1 = dest2.Completion;

Task.WaitAll(destTask1, destTask2, sourceTask1, sourceTask2, rowTask);
//or
await Task.WhenAll(destTask1, destTask2, sourceTask1, sourceTask2, rowTask);
```

The `Completion` property will return a Task which is completed when all data has be processed by the component.
The `ExecuteAsync()` method will also return the `Completion` task of the component.

You don't have to wait for the completion of *all* task. If a destination is completed, all its predecessors are also completed. So in this example it would be sufficient to wait only for the destinations:

```C#
Task.WaitAll(destTask1, destTask2);
```

## Canceling a network

Canceling a network is quite easy. You call the `Network.Cancel()` method and pass (like in the execution) one node of your network.

```C#
//Cancels the whole flow
Network.Cancel(source1, source2);
```

This will cancel all components in the whole network , indepently of the actual completion state of the component.

{{< alert text="It is also possible to cancel a single component using the <code>CancelComponent()</code>. This is not recommended, as you will likely end up with a network that never completes execution." >}}
