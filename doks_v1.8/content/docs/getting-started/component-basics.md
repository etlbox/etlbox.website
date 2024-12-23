---
title: "Component basics"
description: "Overview of shared properties and methods for all data flow components"
lead: "All components in ETLBox share some properties and methods. This chapter describes the details."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 260
toc: true
chatgpt-review: true
---

## Components

There are several connectors available in ETLBox that allow you to connect to various data sources and destinations, including databases, flat files, web services, and C# collections. Connectors typically involve a Source (for retrieving data) and a Destination (for writing or storing data). These components are positioned at the start or end of a data flow, with optional multiple sources and destinations. In between, you can apply **transformations** to modify the data.

Transformations represent the **transform** part of the ETL pipeline, allowing data cleaning, standardization, deduplication, and other manipulations. Transformations can be categorized as **non-blocking** and **blocking**:

### Non-blocking Transformations
These transformations require minimal memory, processing data as it passes through. For example, a `RowTransformation` only retains the current row in memory, plus a small input buffer for throughput optimization.

### Blocking Transformations
Blocking transformations require more memory as they process data in batches or load all rows into memory before performing their operations. A common example is a `Sort`, which needs all data in memory to perform sorting before sending sorted rows downstream. Be mindful of memory consumption when handling large datasets with blocking transformations.

## Input and Output Buffer

Each source component includes an **output buffer**, and each destination component has an **input buffer**, both of which cache rows for optimized data flow. Transformations also have input buffers. If a transformation component is slower than its predecessor, the input buffer holds excess data until processing can continue.

This buffering mechanism improves throughput, enabling faster data retrieval from sources while ensuring components downstream are always ready for the next row.

### Restricting Buffer Size
You can limit buffer size by setting `MaxBufferSize` to a value greater than 0 (the default is 100,000 rows). Some components, such as `Multicast`, have multiple input buffers, but the `MaxBufferSize` setting applies to all buffers of a component.

## Static Settings Class

You can configure global defaults via the `Settings` class:

- **`MaxBufferSize`**: Default maximum buffer size for all components.
- **`LoggingThresholdRows`**: Defines how often to log row processing (default is 1,000 rows).
- **`DefaultDbConnection`**: Stores the default database connection for all components and tasks.
- **`LogInstance`**: Allows setting a global `ILogger` instance for logging ETLBox output.

## Shared Properties

### Progress Count
Each data flow component maintains a `ProgressCount`, indicating the number of processed records. Components processing rows individually increment this value by one for each row, whereas batch-oriented components increment by the batch size.

### Linked Components
Each component tracks its **predecessors** and **successors** in the data flow network, accessible through the `Predecessors` and `Successors` properties.

### Exception Handling
In the event of a failure, the component responsible for the exception stores the error in the `Exception` property, making it easy to identify the fault's origin.

### Completion
The `Completion` property holds a task that completes when the component finishes processing all records. This task is faulted or canceled if an exception occurs or if the component is downstream from an error.

### Tag

Each data flow component includes a `Tag` property, which can hold arbitrary user-defined data or metadata relevant to the component. This allows you to associate additional context or information with each component during execution.

You can use this property to store any type of object that might help with identification, configuration, or other metadata-related needs during the data flow's operation.

### OnProgress Action

The `OnProgress` property allows you to define a custom action that executes whenever a component processes a record. This is useful for monitoring and tracking progress in real-time during execution.

Whenever a record is processed, the component will invoke this action, passing the current progress count as an argument. This is particularly beneficial when you want to log progress or trigger external actions based on the number of rows processed.

```csharp
public Action<int> OnProgress { get; set; }
```

### OnInit

The `OnInit` property is an action that executes when a component begins processing. It is invoked when the component is initialized, providing an opportunity to define any custom logic that needs to run at the start of the component's lifecycle.

```csharp
public Action OnInitialization { get; set; }
```

This action is ideal for setting up any initial states or logging before the main data processing begins.

### OnCompletion

The `OnCompletion` property enables you to define logic that runs when the component successfully finishes processing all records. You can use this to perform cleanup tasks or trigger downstream processes upon the component’s completion.

```csharp
public Action OnCompletion { get; set; }
```

This ensures that custom actions are executed at the end of processing, whether it’s logging, freeing resources, or triggering subsequent workflows.
