---
title: "Shared Features"
description: "This article explains the common properties, methods, and behaviors shared by all ETLBox components. Learn how sources, transformations, and destinations manage data flow, handle errors, track progress, and configure execution settings."
lead: "ETLBox provides various components to build ETL pipelines. Each component shares a common structure, behavior, and set of properties, ensuring consistency across sources, transformations, and destinations. This article explains the core properties, methods, and behaviors of all ETLBox components.  "
draft: false
images: []
menu:
  docs:
    parent: "introduction"
weight: 50
toc: true
chatgpt-review: true
---

## Component Types

### Sources and Destinations

**Sources** extract data from files, databases, APIs, or in-memory collections and push it into the data flow.
**Destinations** receive processed data and write it to files, databases, APIs, or memory.

### Transformations

Transformations modify data as it flows through the pipeline. They can be categorized as:

- **Non-blocking transformations** – Process rows as they arrive, requiring minimal memory.
- **Blocking transformations** – Load and process all data before producing an output (e.g., sorting operations).

## Input and Output Buffers

Each component has buffers to optimize data flow:

- **Sources** have an **output buffer**, temporarily storing extracted data.
- **Destinations** have an **input buffer**, holding records before writing.
- **Transformations** have both input and output buffers.

If a transformation is slower than its predecessor, its input buffer prevents data loss by temporarily holding excess records.

### Configuring Buffer Size

You can limit buffer sizes globally or per component using `MaxBufferSize`:

```csharp
var component = new RowTransformation<MyRow>(row => row);
component.MaxBufferSize = 50000; // Set buffer limit for this component
Settings.MaxBufferSize = 100000; // Set default for all components
```

### Backpressure in Data Flow

Backpressure occurs when a slower component in the pipeline causes data to accumulate in upstream buffers. Once all buffers reach their limit, the source stops reading new data until space becomes available. This prevents excessive memory usage and ensures controlled data processing.

**Example Scenario**:

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
graph LR
  Source["📄 Source (Reads Data)"] -->|Pushes Data| Buffer["🟢 Buffer (Temporary Storage)"]
  Buffer -->|Pushes Data| Processing["🔄 Processing (Transformation)"]
  Processing -->|Pushes Data| Destination["📥 Destination (Writes Data)"]

  Processing -- "⚠️ Slow Processing" --- Buffer
  Buffer -- "⚠️ Buffer Full: Source Pauses" --- Source

```

- A database source reads data and pushes it into a transformation component.
- The transformation performs a complex operation and is slower than the source.
- As the transformation processes data, its input buffer fills up.
- Once full, the source pauses reading until the transformation frees space in its buffer by processing rows.

If `MaxBufferSize` is set too high, memory usage may increase. Setting it too low can cause unnecessary pauses in data flow. Tuning buffer sizes based on processing speed helps maintain a balanced flow.

## Global Settings

The `Settings` class provides global configuration options that affect all ETLBox components. These settings allow fine-tuning of logging, buffering, and execution behavior.

**Logging Configuration**

- `LogThreshold` – Defines how often logging occurs during data processing (default: 1,000 rows). This prevents excessive log output.
- `LogInstance` – Sets a global `ILogger` instance for logging. If a component has no specific logger set, it will use this instance.
- `DisableAllLogging` – If `true`, disables logging for all components globally. Individual components can override this with their own logging settings.
- `AdditionalScope` – A dictionary for defining custom scope variables that are included in all log messages when using `ILogger`.

**Buffering and Performance**

- `MaxBufferSize` – Defines the default buffer size for all components (default: 100,000 rows). Each component can override this individually.

**Database Connection**

- `DefaultDbConnection` – Stores a default database connection. If a task or component does not specify a connection, it will use this default.

```csharp
Settings.DefaultDbConnection = new SqlConnectionManager("Server=myServer;Database=myDB;User=myUser;Password=myPass;");
```

**Execution Behavior**

- `AllowMultipleExecutions` – If `true`, components can be executed multiple times within the same or different networks. Setting this to `false` prevents potential side effects from reusing components.


**Resetting Settings**

You can reset all settings to their default values with:

```csharp
Settings.ClearSettings();
```

## Shared Component Properties

### Progress and Error Tracking

Each component tracks both the number of processed records and the number of encountered errors.

`ProgressCount` – Indicates how many records have been processed.
`ErrorCount` – Counts how many errors occurred during execution.

```csharp
var component = new RowTransformation<MyRow>(row => row);
Console.WriteLine($"Rows processed: {component.ProgressCount}");
Console.WriteLine($"Errors: {component.ErrorCount}");
```

### Execution Timing

Components track when they start and finish processing data:

- **`ExecutionStartTime`** – The timestamp when execution begins.
- **`ExecutionEndTime`** – The timestamp when execution completes.

```csharp
var component = new RowTransformation<MyRow>(row => row);
Console.WriteLine($"Started at: {component.ExecutionStartTime}");
Console.WriteLine($"Finished at: {component.ExecutionEndTime}");
```

### Exception Handling

If a component encounters an error, the `Exception` property captures the failure details.

```csharp
var component = new RowTransformation<MyRow>(row => row);
if (component.Exception != null)
    Console.WriteLine($"Error: {component.Exception.Message}");
```

### Completion Tracking

Each component has a `Completion` property, returning a task that completes when the component finishes processing.

```csharp
var component = new RowTransformation<MyRow>(row => row);
await component.Completion;
```

### Linked Components

Each component tracks its predecessors (input components) and successors (output components) through the `Predecessors` and `Successors` properties.

```csharp
var component = new RowTransformation<MyRow>(row => row);
Console.WriteLine($"Predecessors: {component.Predecessors.Count}");
Console.WriteLine($"Successors: {component.Successors.Count}");
```

## Customizable Execution Hooks

### Tag Property

The `Tag` property allows attaching metadata to a component, useful for tracking or debugging.

```csharp
var component = new RowTransformation<MyRow>(row => row);
component.Tag = "CustomIdentifier";
Console.WriteLine(component.Tag);
```

### OnProgress Action

Executes a function every time a row is processed:

```csharp
var component = new RowTransformation<MyRow>(row => row);
component.OnProgress = count => Console.WriteLine($"Processed {count} rows");
```

### OnInitialization Action

Executes a function when the component starts processing:

```csharp
var component = new RowTransformation<MyRow>(row => row);
component.OnInitialization = () => Console.WriteLine("Component initialized");
```

### OnCompletion Action

Executes a function when the component finishes processing:

```csharp
var component = new RowTransformation<MyRow>(row => row);
component.OnCompletion = () => Console.WriteLine("Processing complete");
```

### OnError

The `OnError` action is triggered when an error occurs in the component. This allows logging or handling errors without immediately stopping execution.

```csharp
var component = new RowTransformation<MyRow>(row => row);
component.OnError = (ex) => Console.WriteLine($"Error in {component.ComponentName}: {ex.Message}");
```
