---
title: "Database Performance Tester"
description: "This recipe shows how to use the MemoryTester console app to benchmark database performance (DbDestination and DbMerge) and observe ETLBox memory consumption while processing large data volumes."
lead: "The MemoryTester sample application generates large test datasets, runs high-volume DbDestination loads and DbMerge operations, and continuously reports rows processed, elapsed time, and .NET heap usage so you can analyze both performance and memory behaviour of ETLBox in your environment."
draft: false
menu:
  recipes:
    parent: "other"
weight: 2310
toc: true
---

## Overview

The **MemoryTester** sample is a console application that combines **performance testing** (for `DbDestination` and `DbMerge`) and **memory-consumption monitoring** in a single tool.
It creates a simple target table, generates large volumes of synthetic data, and executes bulk loads and delta merges while continuously printing live diagnostics (rows, time, min/avg/max memory).

The full sample, including supporting types like `DbRow`, is available on GitHub:
{{< link-ext text="MemoryTester sample on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/MemoryTester" >}}.

## Running the MemoryTester

- **Database requirements**
  - Uses SQL Server by default with a connection string like:

```csharp
public static string DatabaseName => "demo";
public static string ConnectionString =
    $"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog={DatabaseName};TrustServerCertificate=true;";
```

  - Make sure the `demo` database exists (or adjust `DatabaseName` / `ConnectionString`).

- **Start the console app**
  - Build and run the `MemoryTester` project.
  - A menu is shown and the app waits for commands.

### Available commands

The main menu accepts the following commands:

- **create**: (Re)creates the `TargetTable` with a wide schema (10 BIGINT + 5 string columns, plus change tracking columns).
- **load100k / load1m / load10m / load100m**:
  Generate and insert the given number of rows into `TargetTable` using `CustomBatchSource<DbRow>` and `DbDestination<DbRow>`.
- **merge100k / merge1m / merge10m / merge100m**:
  Generate a delta of the given size and apply it with `DbMerge<DbRow>` in `MergeMode.Delta`, using partial caching for realistic memory usage.
- **gc**: Force .NET garbage collection, then print diagnostics again (useful to see the effect of Gen0/1/2 collections).
- **exit**: Stop the application.

You can also change runtime settings directly from the prompt:

- `batchsize=<value>` – sets `DbDestination.BatchSize` / `DbMerge.BatchSize`.
- `maxbuffersize=<value>` – sets `ETLBox.Settings.MaxBufferSize`.

Example:

```csharp
public static int BatchSize = 1000;
public static int MaxBufferSize = 20_000;

ETLBox.Settings.MaxBufferSize = MaxBufferSize;
```

Typing `batchsize=5000` or `maxbuffersize=100000` in the console updates these values without restarting the app.

## Core program structure

The entry point configures ETLBox, then runs a simple input loop:

```csharp
public static async Task Main(string[] args) {
    string input;

    ETLBox.Licensing.LicenseService.CurrentKey = "... trial key ...";
    ETLBox.Settings.MaxBufferSize = MaxBufferSize;

    do {
        Console.WriteLine("\n--- MemoryTester Menu ---");
        Console.WriteLine("create | load100k | load1m | load10m | load100m | " +
                          "merge100k | merge1m | merge10m | merge100m | gc | exit");
        Console.WriteLine($"Current Settings: BatchSize={BatchSize:N0}, MaxBufferSize={MaxBufferSize:N0}");
        Console.WriteLine("Settings: batchsize=<value> | maxbuffersize=<value>");
        Console.Write("> ");
        input = Console.ReadLine()?.Trim().ToLower() ?? "";

        Console.WriteLine();

        if (input.Contains("=")) {
            HandleSettingChange(input);
            continue;
        }

        switch (input) {
            case "create":
                CreateTargetTable();
                break;
            case "load100k":
                await LoadDataAsync(100_000);
                break;
            case "merge100k":
                await MergeDataAsync(100_000);
                break;
            // ... other load / merge sizes ...
            case "gc":
                GC.Collect();
                GC.WaitForPendingFinalizers();
                Console.WriteLine("Garbage Collection completed.");
                PrintDiagnostics();
                break;
        }
    } while (input != "exit");
}
```

The `LoadDataAsync` and `MergeDataAsync` methods both call a shared helper `ExecuteWithLiveDiagnostics(..)` that runs the ETL network while printing regular progress lines.

## Live diagnostics: performance and memory

The **live diagnostics** loop periodically queries the current row count and heap usage and keeps track of min/avg/max values for the whole operation:

```csharp
private static async Task ExecuteWithLiveDiagnostics(Network network, string operationName) {
    var cts = new CancellationTokenSource();

    var diagnosticsTask = Task.Run(() => {
        while (!cts.Token.IsCancellationRequested) {
            PrintProgressLine(operationName);
            Thread.Sleep(500); // update every 500 ms
        }
    });

    try {
        await network.ExecuteAsync(cts.Token);
    } finally {
        cts.Cancel();
        await diagnosticsTask;
        Console.WriteLine();
    }
}

private static void PrintProgressLine(string operationName) {
    long memory = GC.GetTotalMemory(false) / 1024 / 1024;
    int targetRowCount = GetRowCount("TargetTable");

    // track min / max / avg memory
    if (memory < _minMemoryConsumption) _minMemoryConsumption = memory;
    if (memory > _maxMemoryConsumption) _maxMemoryConsumption = memory;
    _totalMemoryConsumption += memory;
    _memoryMeasurementCount++;

    long avgMemory = _memoryMeasurementCount > 0
        ? _totalMemoryConsumption / _memoryMeasurementCount
        : 0;
    TimeSpan elapsed = DateTimeOffset.Now - _operationStartTime;

    string elapsedStr = elapsed.TotalSeconds < 60
        ? $"{elapsed.TotalSeconds:F0}s"
        : $"{elapsed.TotalMinutes:F0}m";

    Console.Write($"\r Mem: {memory}MB | Avg: {avgMemory}MB | " +
                  $"Rows: {targetRowCount:N0} | Time: {elapsedStr}   ");
}
```

At the end of each operation, `PrintDiagnostics()` summarizes:

- **Row count** and **max ID** in `TargetTable`.
- **Current, min, avg, max memory** in MB.
- **Elapsed time** for the operation.

This makes it easy to:

- Compare different **batch sizes** and **MaxBufferSize** values.
- Evaluate **CacheMode.Full vs. CacheMode.Partial** and eviction policies on the `DbMerge`.
- Observe how DbMerge behaves when scaling from 100k rows up to tens or hundreds of millions.

## Typical usage scenarios

- **Measure DbDestination and DbMerge throughput**
  - Run `create`, then `load10m` or `load100m` to prepare data and stress `DbDestination`.
  - Execute `merge10m` / `merge100m` and watch the live memory and time output for `DbMerge`.

- **Analyze memory consumption**
  - Vary `MaxBufferSize` and `BatchSize` using the console commands.
  - Repeat the same load/merge runs and compare min/avg/max memory between runs.

Combined, this gives you a repeatable way to validate that your environment (SQL Server, infrastructure, configuration) can handle the intended data volumes with acceptable **performance** and **memory usage** for both loading and merging.

## Code on GitHub

The full `MemoryTester` sample, including all helper classes and scripts,
{{< link-ext text="is available on GitHub for further exploration and contribution" url="https://github.com/etlbox/etlbox.demo/tree/main/MemoryTester" >}}.

