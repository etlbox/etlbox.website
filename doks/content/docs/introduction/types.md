---
title: "Working with Types"
description: "Learn how to use strongly typed objects (POCOs) and dynamic ExpandoObject in ETLBox. This guide explains automatic property mapping, type conversions, and how to dynamically adapt ETL processes using configuration files."
lead: "ETLBox supports both strongly typed objects (POCOs) and dynamic objects (ExpandoObject). Components can operate on predefined data structures or adjust dynamically to different datasets. This chapter explains how to work with different data types in ETLBox."
draft: false
images: []
menu:
  docs:
    parent: "introduction"
weight: 30
toc: true
chatgpt-review: true
---

ETLBox allows you to work with data in two main ways:

- **Strongly typed objects (POCOs)** – Ideal when your data structure is known at design time.
- **Dynamic objects (`ExpandoObject`)** – Flexible for scenarios where data structures may change or be configured at runtime.

When defining ETLBox components, you can specify a type explicitly (e.g., `DbSource<MyRow>`) or leave it unspecified, in which case the component defaults to using `ExpandoObject`. Some transformations, such as `RowTransformation`, allow you to convert data between types during processing, while others, like `ColumnTransformation`, always output a dynamic object.

## Generic approach

A Plain Old C# Object (POCO) provides a structured way to represent data in ETLBox components. If your data has well-defined columns, you can map them to properties in a POCO, ensuring type safety and easy access.

### Automapping Column Names

When working with sources and destinations, ETLBox automatically maps column names to matching property names in your POCO. If a column name differs from the property name, you can use attributes like DbColumnMap to specify the mapping explicitly.

```csharp
SqlTask.ExecuteNonQuery(@"CREATE TABLE sourcetable (
  Value1 INT NULL,
  Value2 VARCHAR(100) NULL
 )");

public class MyRow {
    public int Value1 { get; set; }
    [DbColumnMap("Value2")]
    public string Col2 { get; set; }
}

DbSource<MyRow> source = new DbSource<MyRow>("sourcetable");
```

- `Value1` in the database is mapped to `Value1` in `MyRow` automatically.
- `Value2` in the database is mapped to `Col2` in `MyRow` using the `DbColumnMap` attribute.
- If a column exists in the database but not in the POCO, it is ignored.

{{< callout context="note" icon="outline/info-circle" >}}
The `DbColumnMap` attribute only applies to `DbSource`, `DbDestination`, and `DbMerge`.  Other sources use different mapping techniques.
{{< /callout >}}

### Ignoring Unmapped Properties

A POCO can contain more or fewer properties than the actual data. Any properties without a matching column in the source will remain unset.

```csharp
public class MyNewRow {
    public int Value1 { get; set; }
    public string AnotherValue { get; set; } // Ignored
}

DbSource<MyNewRow> source = new DbSource<MyNewRow>("sourcetable");
```

In this case, `AnotherValue` is simply ignored when reading from `sourcetable`.

## Dynamic Objects

Sometimes, you need to define object properties at runtime. In .NET, `ExpandoObject` allows dynamic property creation.

```csharp
dynamic sampleObject = new ExpandoObject();
sampleObject.Id = 3;
sampleObject.Test = "Dynamic Property";
IDictionary<string,object> sampleObjectAsDict = sampleObject as IDictionary<string,object>;
sampleObjectAsDict["Id"] = 9;
```

Every `ExpandoObject` implements `IDictionary<string, object>`, allowing properties to be accessed and modified dynamically like dictionary entries. For more details, see the {{< link-ext text="Microsoft documentation" url="https://docs.microsoft.com/en-us/dotnet/api/system.dynamic.expandoobject" >}}.

### Using ExpandoObject

If your data structure is dynamic or unknown at design time, you can use `ExpandoObject` instead of a POCO. When an ETLBox component is not given a specific type, it defaults to using `ExpandoObject`.

```csharp
DbSource<ExpandoObject> source = new DbSource<ExpandoObject>("sourcetable");
```

or simply:

```csharp
DbSource source = new DbSource("sourcetable"); // Defaults to ExpandoObject
```

When reading from a database, `DbSource` will automatically create properties in the `ExpandoObject` based on the column names and data types in sourceTable. This applies to all sources and destination components in ETLBox.

### Example: Applying transformations

The following example shows how the `ExpandoObject` can be used within a transformation.

```csharp
DbSource source = new DbSource("sourcetable");

RowTransformation trans = new RowTransformation(
    row => {
        dynamic c = row as ExpandoObject;
        c.DestColSum = c.SourceCol1 + c.SourceCol2;
        return c;
    });

DbDestination dest = new DbDestination("desttable");

source.LinkTo(trans).LinkTo(dest);
Network.Execute(source);
```

Here, `DbSource` loads columns dynamically into an `ExpandoObject`. The transformation adds `DestColSum`, which is stored in `desttable` if a column with the same name (or an additional mapping for this column) exists.

{{< callout context="tip" outline="outline/rocket" >}}
This allows the same ETL process to handle different datasets dynamically, making it easy to adapt by modifying configurations instead of changing code.
{{< /callout >}}

## Transformations that modify types

Some transformation can convert between different types. Let's have a look at an example where the `RowTransformation` allows you to convert between different data types as data moves through the pipeline.

```csharp
public class MyRow {
    public int SourceCol1 { get; set; }
    public int SourceCol2 { get; set; }
}

DbSource<MyRow> source = new DbSource<MyRow>("sourcetable");

RowTransformation<MyRow, ExpandoObject> trans =
    new RowTransformation<MyRow, ExpandoObject>(
        row => {
            dynamic result = new ExpandoObject();
            result.DestColSum = row.Value1 + row.Col2;
            return result;
        });

DbDestination dest = new DbDestination("desttable");

source.LinkTo(trans).LinkTo(dest);
Network.Execute(source);
```

Here, the transformation converts a POCO (`MyRow`) into an `ExpandoObject`, dynamically adding a new property. Of course the output of the `RowTransformation` could also have been another POCO.

### Transformations that Output Dynamic

Some transformations always output a dynamic `ExpandoObject`, even if the input is a POCO. One such transformation is `ColumnTransformation`.

```csharp
DbSource<MyRow> source = new DbSource<MyRow>("sourcetable");

ColumnTransformation<MyRow> trans = new ColumnTransformation<MyRow>();
trans.RemoveColumns = new[] {
    new RemoveColumn() { PropertyName = "Col2" }
};
trans.RenameColumns = new[] {
    new RenameColumn() { CurrentName = "Value1", NewName = "DestCol1" }
};

DbDestination dest = new DbDestination("destTable");

source.LinkTo(trans);
trans.LinkTo(dest);
Network.Execute(source);
```

The transformation removes `Col2` and renames `Value1` to `DestCol1`. The output is always a dynamic object.

## Advantages of ExpandoObject

`ExpandoObject` makes ETL processes more adaptable:

- **Handles schema changes** without modifying code
- **Works with different datasets** using a single pipeline
- **Can be configured dynamically** with external files

### Example using Configuration File

`ExpandoObject` allows ETL processes to handle different datasets dynamically. Instead of defining a fixed schema in code, a configuration file can control how data is mapped and transformed.

#### Configuration file

```json
{
    "sourceColumnProperties": [
        {
            "name": "Value1"
        },
        {
            "name": "Value2"
        }
    ],
    "destinationColumn": [
        {
            "name": "Dest1",
            "sourceName": "Value1",
            "convert": true,
            "trim": false
        },
        {
            "name": "Dest2",
            "sourceName": "Value2",
            "convert": false,
            "trim": true
        }
    ]
}
```

This configuration defines:
- **Source columns** (`Value1`, `Value2`) from a database table
- **Destination columns** (`Dest1`, `Dest2`) with optional transformations
  - `convert: true` converts `Value1` to a string
  - `trim: true` trims `Value2` and keeps only the first character

#### Data Pipeline

```csharp
using ETLBox;
using ETLBox.ControlFlow;
using ETLBox.DataFlow;
using ETLBox.Postgres;
using Newtonsoft.Json;
using System.Dynamic;

// Create database connection
PostgresConnectionManager dbConnection = new PostgresConnectionManager("Server=localhost;Database=demo;User Id=postgres;Password=etlboxpassword;");
Settings.DefaultDbConnection = dbConnection;

// Create and populate source table
SqlTask.ExecuteNonQuery(@"DROP TABLE IF EXISTS demotable");
SqlTask.ExecuteNonQuery(@"CREATE TABLE demotable (
  ""Value1"" INT NULL,
  ""Value2"" VARCHAR(100) NULL
 )");
SqlTask.ExecuteNonQuery(@"INSERT INTO demotable (""Value1"", ""Value2"") VALUES (1, 'FirstTest'), (2, 'SecondTest'), (3, 'ThirdTest')");

// Create destination table
SqlTask.ExecuteNonQuery(@"DROP TABLE IF EXISTS destinationtable");
SqlTask.ExecuteNonQuery(@"CREATE TABLE destinationtable (
  ""Dest1"" VARCHAR(100),
  ""Dest2"" VARCHAR(1) NULL
 )");

// Load configuration
string configJson = File.ReadAllText("config.json");
dynamic config = JsonConvert.DeserializeObject<ExpandoObject>(configJson);

// Read from source table
DbSource source = new DbSource("demotable");

RowTransformation trans = new RowTransformation(row => {
    IDictionary<string, object> c = row as IDictionary<string, object>;
    IDictionary<string, object> result = new ExpandoObject();

    foreach (var configEntry in config.destinationColumn) {
        string sourceName = configEntry.sourceName;
        string destName = configEntry.name;

        if (c.ContainsKey(sourceName)) {
            object value = c[sourceName];

            // Apply optional transformations
            if (configEntry.convert == true)
                value = value.ToString();
            if (configEntry.trim == true && value is string)
                value = (value as string).Trim().Substring(0, 1);

            result[destName] = value;
        }
    }
    return result as ExpandoObject;
});

// Write to destination table
DbDestination dest = new DbDestination("destinationtable");

source.LinkTo(trans).LinkTo(dest);
Network.Execute(source);
```

This data pipeline  reads data from `demotable`, applies transformations based on the configuration, and writes the results into `destinationtable`.

**Example output in `destinationtable` after execution:**

| Dest1 | Dest2 |
|-------|-------|
| 1     | F     |
| 2     | S     |
| 3     | T     |

The process dynamically adapts column mappings and transformations, making it reusable for different datasets.

{{< link-ext text="The code for this example is also available on GitHub, along with other example and demo codings." url="https://github.com/etlbox/etlbox.demo/tree/main/DynamicTypeConversion" >}}.
