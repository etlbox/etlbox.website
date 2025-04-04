---
title: "Logging Extensions"
description: "Provides helpers for log output, load process tracking, and database-based logging in ETLBox."
lead: "The ETLBox.Logging package adds helper tasks for managing log data and tracking ETL execution. It includes support for load process management, custom log entries, error tables, and database log storage—extending the built-in logging with practical tooling."
draft: false
images: []
menu:
  docs:
    parent: "logging"
weight: 651
toc: true
---

## Logging Extensions

The `ETLBox.Logging` NuGet package provides additional logging capabilities for ETLBox, including support for load process tracking, custom log entries, error tables, and database log output.

> **Note:** You must install the `ETLBox.Logging` package to use the features described in this section.

## Error Table

You can use `CreateErrorTableTask` to create a standardized error logging table in your database. This table is designed to store structured error output from components that support error redirection via `LinkErrorTo()`.

### Table Structure

| Column         | Data Type      | Nullable |
|----------------|----------------|----------|
| ErrorText      | TEXT           | No       |
| ExceptionType  | VARCHAR(1000)  | No       |
| RecordAsJson   | TEXT           | Yes      |
| ReportTime     | DATETIME       | No       |
| Source         | VARCHAR(1000)  | Yes      |
| Context        | VARCHAR(1000)  | Yes      |

### Usage

```csharp
CreateErrorTableTask.Create(connectionManager, "etlbox_error");
```

This prepares your system for structured error handling in ETL pipelines.

---

## Custom Log Output

### LogSection

`LogSection` lets you wrap a block of code to generate structured START and END log messages. This gives you visibility into the timing and result of arbitrary code sections.

```csharp
LogSection.Execute("Custom step", () => {
    SqlTask.ExecuteNonQuery("Inner task", "SELECT 1");
});
```

This creates log entries with:
- `action: START` at the beginning
- `action: END` after completion

### LogTask

Use `LogTask` to emit standalone log entries at specific levels. These entries are structured and support metadata just like task-based logs.

```csharp
LogTask.Info("Start of custom logic");
LogTask.Warn("{action}: Something to watch!", "LOG");
```

Supported levels:
- `Trace`, `Debug`, `Info`, `Warn`, `Error`, `Fatal`

You can also define your own `action` by setting it as a placeholder value in the message template.

## Load Process Logging

The `LoadProcessTask` and `LoadProcess` classes help track the lifecycle of your ETL processes. This creates an auditable record of job runs, start/end status, errors, and metadata.

### Creating the Load Process Table

```csharp
LoadProcessTask.CreateTable(connectionManager, "etlbox_loadprocess");
```

### Table Structure

| Column         | Data Type   | Description                     |
|----------------|-------------|---------------------------------|
| id             | INT64       | Identity/Primary Key            |
| start_date     | DATETIME    | When the process started        |
| end_date       | DATETIME    | When the process ended          |
| source         | STRING      | Optional source name            |
| source_id      | INT         | Optional source identifier      |
| process_name   | STRING      | User-defined name               |
| start_message  | STRING      | Description of process start    |
| is_running     | SMALLINT    | 1 while active, 0 when ended    |
| end_message    | STRING      | Optional message at completion  |
| was_successful | SMALLINT    | 1 if completed without errors   |
| abort_message  | STRING      | Error message if aborted        |
| was_aborted    | SMALLINT    | 1 if aborted                    |

### Example Usage

```csharp
var process = LoadProcessTask.Start("ETL Run", "Start ETL");

try {
    // Run your pipeline
    process.End("ETL completed");
} catch (Exception ex) {
    process.Abort(ex.ToString());
}
```

The `LoadProcess` object contains the current process state, including the ID and timestamps, and is accessible via `LogSettings.CurrentLoadProcess`.

## Logging to a Database

You can configure ETLBox to write structured logs into a database table by using `LogTask.CreateLogTable` and a compatible NLog configuration.

### Creating the Log Table

```csharp
LogTask.CreateLogTable(connectionManager, "etlbox_log");
```

### Table Structure

| Column         | Data Type       | Description                     |
|----------------|------------------|---------------------------------|
| id             | INT64            | Identity                        |
| log_date       | DATETIME         | Timestamp                       |
| level          | VARCHAR(10)      | Log level (e.g., INFO)          |
| message        | VARCHAR(4000)    | Log message                     |
| task_name      | VARCHAR(1000)    | Component name                  |
| task_type      | VARCHAR(200)     | Component class name            |
| action         | VARCHAR(5)       | START, END, LOG, etc.           |
| task_hash      | CHAR(40)         | Unique ID per component         |
| source         | VARCHAR(20)      | Custom source identifier        |
| load_process_id| INT64            | Link to the load process entry  |

### Logging with NLog

Configure NLog to write log entries into the `etlbox_log` table:

```xml
<target xsi:type="Database" name="database">
  <commandText>
    INSERT INTO etlbox_log (log_date, level, message, task_name, task_type, action, task_hash, source, load_process_id)
    VALUES (@log_date, @level, @message, @task_name, @task_type, @action, @task_hash, 'ETL', @load_process_id)
  </commandText>
  <parameter name="@log_date" layout="${date:format=yyyy-MM-ddTHH\\:mm\\:ss.fff}" />
  <parameter name="@level" layout="${level}" />
  <parameter name="@message" layout="${message}" />
  <parameter name="@task_name" layout="${mdlc:item=taskName}" />
  <parameter name="@task_type" layout="${mdlc:item=taskType}" />
  <parameter name="@action" layout="${event-properties:item=action}" />
  <parameter name="@task_hash" layout="${mdlc:item=taskHash}" />
  <parameter name="@load_process_id" layout="${mdlc:item=loadProcessId}" />
</target>
```

Ensure your ETLBox log instance is connected via `Settings.LogInstance` and that NLog is set up properly.

## LogSettings

The static class `LogSettings` provides access to current logging configuration and runtime state:

- `LogTable`: Name of the log table (default: `etlbox_log`)
- `LoadProcessTable`: Name of the load process table (default: `etlbox_loadprocess`)
- `CurrentLoadProcess`: Reference to the currently active `LoadProcess` object

These settings are especially useful for custom reporting or diagnostics tools.

