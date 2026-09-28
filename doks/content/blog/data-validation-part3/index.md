---
title: "A Developer’s Guide to Building Robust ETL Data Flows in C# and .NET (Part III)"
description: "This article shows how to build dynamic, type-agnostic ETL flows in ETLBox using ExpandoObject and configuration tables. By leveraging metadata and runtime mapping, we achieve a flexible, schema-independent data pipeline that adapts to evolving requirements."
summary: "In Part 3, we transform our ETLBox data flow from a statically typed setup to a fully dynamic, configuration-driven process using ExpandoObject. This enables flexible handling of changing data structures and metadata-driven transformations."
date: 2025-04-01
draft: false
weight: 50
categories: []
tags: []
contributors: [Andreas Lennartz]
pinned: false
homepage: false
---

{{< series >}}
  {{< series_item index="1" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;I)" link="../data-validation-part1/" >}}
  {{< series_item index="2" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;II)" link="../data-validation-part2/" >}}
  {{< series_item index="3" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;III)" link="../data-validation-part3/" active="true" >}}
{{< /series >}}

![Article Banner](banner.png)

## Creating Dynamic Dataflows

In Part 1, we delved into ETLBox, a robust .NET tool for data management. We explored its features, such as its straightforward API, versatility in handling transformations, and efficiency with large data volumes. Using ETLBox, we set up a data flow to process a CSV file of supplier data, emphasizing data validation and error management.

In Part 2, we enhanced the data flow, focusing on adding custom error messages. We also addressed the challenge of handling repeated or different supplier data loads. To capture these changes effectively, we implemented a Slowly Changing Dimension Type 2 (SCD Type 2).

Looking ahead to Part 3, we are going to convert the same data flow away from static types into a dynamic and configurable one

### From static to dynamic types

Traditionally, C# has been anchored to the realm of static typing. While this provides a robust structure and type safety, it can sometimes be a constraint, especially when dealing with flexible and ever-evolving data structures in the world of ETL.

Enter the realm of `ExpandoObject` and the `dynamic` keyword. These tools break free from the rigidity of static types, offering a more fluid data handling experience. Just because C# is statically typed doesn't mean we can't explore the versatility of dynamic data.

Thankfully, ETLBox is not just confined to static types. It fully embraces and supports the dynamic nature of `ExpandoObject`. In this part, we'll pivot our example, shedding the static and ushering in the dynamic, showing you how to achieve greater adaptability in your dataflow processes.

### Diving into Dynamic Types and ExpandoObject

In C#, the `dynamic` keyword introduces a paradigm shift from the traditionally statically-typed nature of the language. The `dynamic` type bypasses compile-time type checking. Instead, types are resolved at runtime. This opens the door to greater flexibility, especially when the exact structure of data isn't known until runtime.

#### The Dynamic Keyword

Using `dynamic`, you can declare variables without a clearly defined type:

```C#
dynamic value = "Hello, World!";
Console.WriteLine(value);  // Outputs: Hello, World!

value = 42;
Console.WriteLine(value);  // Outputs: 42
```

Here, the type of `value` is not fixed and can change as required.

#### ExpandoObject

`ExpandoObject` is an in-built .NET class that lets you add properties, methods, and events to an object dynamically at runtime. It's especially useful when working with data structures that might be fluid and not set in stone.

```C#
dynamic person = new ExpandoObject();
person.Name = "John";
person.Age = 30;

Console.WriteLine(person.Name);  // Outputs: John
Console.WriteLine(person.Age);   // Outputs: 30
```

But what makes `ExpandoObject` even more powerful is its ability to be treated as a dictionary where properties can be accessed with keys.

#### IDictionary<string, object> with ExpandoObject

Every `ExpandoObject` can be cast to `IDictionary<string, object>`, allowing properties to be accessed, added, or removed using dictionary-like syntax.

```C#
dynamic person = new ExpandoObject();
var personDict = (IDictionary<string, object>)person;
personDict.Add("Country", "USA");

Console.WriteLine(personDict["Country"]);  // Outputs: USA
Console.WriteLine(person.Country);  // Outputs: USA
```

This approach allows for extremely versatile and flexible data handling, especially when dynamically constructing or deconstructing objects based on changing requirements.

In the world of ETL, where data sources and structures can change frequently, the power of `dynamic` and `ExpandoObject` provides an invaluable toolset for adaptable and resilient data transformations.





## Adding Configuration Table

To facilitate more dynamic behaviour in our application, we'll establish a configuration table called `Meta`. This table will host essential metadata such as business keys, obligatory fields, and potential field length constraints, as well as the associated filename in the source and its corresponding database column. This configuration is aligned with our static table structure from the previous segment.

```C#
//Prepare the "meta" table that contains our table definition and rules
DropTableTask.DropIfExists(connectionManager, "Meta");
CreateTableTask.CreateIfNotExists(connectionManager, "Meta",
    new List<TableColumn>() {
        new TableColumn() { Name = "ColumnName", DataType = "VARCHAR(1024)", AllowNulls = false  },
        new TableColumn() { Name = "DataType", DataType = "VARCHAR(20)", AllowNulls = false  },
        new TableColumn() { Name = "IsMandatory", DataType = "INT", AllowNulls = false },
        new TableColumn() { Name = "IsBusinessKey", DataType = "INT", AllowNulls = false, DefaultValue = "0"  },
        new TableColumn() { Name = "FileColumnName", DataType = "VARCHAR(1024)", AllowNulls = false  },
        new TableColumn() { Name = "MinFieldLength", DataType = "INT", AllowNulls = true },
        new TableColumn() { Name = "MaxFieldLength", DataType = "INT", AllowNulls = true },
        new TableColumn() { Name = "Trim", DataType = "INT", AllowNulls = false, DefaultValue = "0" },
        new TableColumn() { Name = "Uppercase", DataType = "INT", AllowNulls = false, DefaultValue = "0" },
    });

SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('VendorName','VARCHAR(100)', 1, 0, 'Name', 5, 50, 1, 1)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Code','CHAR(5)', 1, 1, 'Code', 5, 5, 0, 0)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Custom','VARCHAR(10)', 1, 1, 'Custom', NULL, NULL, 0, 0)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Country','CHAR(2)', 0, 0, 'Country', NULL, NULL, 0, 0)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Contact','VARCHAR(50)', 0, 0, 'Contact', NULL, NULL, 0, 0)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Info','VARCHAR(50)', 0, 0, 'TraceInfo', NULL, NULL, 0, 0)");
```

### Loading configuration into Memory

While there are robust ORM mappers like Dapper or EntityFramework, for our purpose, we’ll employ a concise ETLBox data flow to load our configurations into an in-memory object.

```C#

//Load the configuration into memory - we are using ETLBox for this
var configSource = new DbSource<Meta>(connectionManager, "Meta");
var configDest = new MemoryDestination<Meta>();
configSource.LinkTo(configDest);
Network.Execute(configSource);
var config = configDest.Data;

public class Meta
{
    public string ColumnName { get; set; }
    public string DataType { get; set; }
    public bool IsMandatory { get; set; }
    public bool IsBusinessKey { get; set; }
    public string FileColumnName { get; set; }
    public int MinFieldLength { get; set; }
    public int MaxFieldLength { get; set; }
    public bool Trim { get; set; }
    public bool Uppercase { get; set; }
}
```

### Constructing Demo Table Using Configuration

Instead of a fixed setup, we'll now leverage our configuration data to create our demo table dynamically.

```C#
//Prepare the target database based on configuration
DropTableTask.DropIfExists(connectionManager, "VendorMaster");
var columns = new List<TableColumn>();
columns.Add(new TableColumn() { Name = "Id", DataType = "INT", AllowNulls = false, IsPrimaryKey = true, IsIdentity = true });
columns.AddRange(config.Select(c =>
    new TableColumn() { Name = c.ColumnName, DataType = c.DataType, AllowNulls = !c.IsMandatory })
);
columns.Add(new TableColumn() { Name = "ValidFrom", DataType = "DATETIME", AllowNulls = false });
columns.Add(new TableColumn() { Name = "ValidTo", DataType = "DATETIME", AllowNulls = false });
CreateTableTask.CreateIfNotExists(connectionManager, "VendorMaster", columns);

SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO VendorMaster (VendorName, Code, Custom, Country, Contact, Info, ValidFrom,ValidTo)
        VALUES('BIG HOLDING', 'H1234', 'HD', 'US', 'Hans', 'T0', '1900-1-1','9999-12-31')");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO VendorMaster (VendorName, Code, Custom,Country, ValidFrom,ValidTo)
        VALUES('UNICORN', 'UNI10', 'U', 'NO', '1900-1-1','9999-12-31')");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO VendorMaster (VendorName, Code, Custom,Country, ValidFrom,ValidTo)
        VALUES('UNICORN TWO', 'UNI20', 'U', 'SE', '1900-1-1','9999-12-31')");
```

It's important to note that we're still incorporating static columns, namely the id column, ValidFrom, and ValidTo. These columns aren't found in our dynamic configuration; therefore, our dynamic data flow will work under the assumption that they're present.

## Dynamically Crafting ETLBox Components

ETLBox components are flexibly designed with both generic and non-generic class definitions. Often, in the context of ETL processes, developers define strongly-typed objects, or POCOs (Plain Old CLR Objects), to represent the data flow, as demonstrated in earlier sections. However, for more dynamic operations, using the `ExpandoObject` can be advantageous.

For instance, rather than using `RowTransformation<VendorMaster>`, we can employ `RowTransformation<ExpandoObject>`, which is equivalent to the simple `RowTransformation`.

Let's look at the dynamic component creation and decode the details.

```C#
//Create the data flow components
var source = new CsvSource("sourceData.csv");
var normalize = new RowTransformation(row => Normalize(row));
var errorTarget = new JsonDestination("errors.json");
var dbTarget = new DbDestination(connectionManager, "VendorMaster");
dbTarget.ColumnMapping = config
    .Where(c => c.ColumnName != c.FileColumnName)
    .Select(c => new DbColumnMap() { DbColumnName = c.ColumnName, PropertyName = c.FileColumnName })
    .ToList();
var lookupExisting = new LookupTransformation();
var lookupSource = new DbSource(connectionManager, "VendorMaster");
lookupExisting.Source = lookupSource;
lookupExisting.MatchColumns = config
    .Where(c => c.IsBusinessKey)
    .Select(c => new MatchColumn() { InputPropertyName = c.FileColumnName, LookupSourcePropertyName = c.ColumnName })
    .ToList();
lookupExisting.RetrieveColumns = new[] {
    new RetrieveColumn() { InputPropertyName = "DbId", LookupSourcePropertyName ="Id"}
};
var duplicateCheck = new Distinct();
duplicateCheck.DistinctColumns = config
    .Where(c => c.IsBusinessKey)
    .Select(c => new DistinctColumn() { DistinctPropertyName = c.FileColumnName })
    .ToList();

//Adjust ValidFrom to current data if record exists
var adjustValidFrom = new RowTransformation(row => {
    dynamic r = row as dynamic;
    if ((row as IDictionary<string,object>).ContainsKey("DbId") && r.DbId > 0)
        r.ValidFrom = DateTime.Now;
    else
        r.ValidFrom = new DateTime(1900, 1, 1);
    r.ValidTo = new DateTime(9999, 12, 31);
    return row;
});

//Add custom error message to duplicates
var addNotDistinctErrorMessage = new RowTransformation(
    row => {
        (row as dynamic).ErrorMessage = "Duplicate in source data detected!";
        return row;
    });

//Modify Merge to work with SCD-2
dbTarget.AfterBatchWrite = batch => {
    SqlTask.ExecuteNonQuery(connectionManager, @"
UPDATE VendorMaster
SET VendorMaster.ValidTo = calc.validto
FROM (SELECT Id,
             Code,
             Custom,
             ValidFrom,
             LEAD(ValidFrom)
                  OVER (
                      PARTITION BY Code,Custom
                      ORDER BY ValidFrom
                      ) validto
      FROM VendorMaster) calc
WHERE VendorMaster.Id = calc.Id
  AND calc.validto IS NOT NULL
");
};


dynamic Normalize(IDictionary<string,object> row) {
    foreach (var configEntry in config) {
        if (configEntry.Uppercase == true)
            row[configEntry.FileColumnName] = (row[configEntry.FileColumnName] as string).ToUpper();
        if (configEntry.Trim == true)
            row[configEntry.FileColumnName] = (row[configEntry.FileColumnName] as string).Trim();
    }
    return row;
}
```

We've transitioned the `Normalize` method, previously part of the `VendorMaster` class, into a standalone function. This function has been revamped to utilize the configuration data retrieved from our `Meta` table.

Furthermore, previously defined attributes like `DbColumnMap`, used for property mappings, are now set dynamically via the `ColumnMapping` attribute on the `DbDestination` component. This method of dynamic assignment also extends to other attributes, such as those for `LookupTransformation` and the `Distinct` transformation. Importantly, these dynamically assigned properties will replace any existing attributes that may already exist on a class definition, offering a valuable tool for minor adjustments in data flow behaviour.

Other transformations, including `RowTransformation`, have been updated to support dynamic objects.

### Connecting Components Dynamically

Crafting a dynamic network flow now becomes straightforward:

```C#
/* Linking the components */
source.LinkTo(normalize);

normalize.LinkTo(lookupExisting, row => IsValid(row));
normalize.LinkTo(errorTarget, row => true); //Valid rows are already send to the lookup!

//var debug = new MemoryDestination()
lookupExisting.LinkTo(adjustValidFrom);
adjustValidFrom.LinkTo(duplicateCheck);

duplicateCheck.LinkTo(dbTarget);
duplicateCheck.LinkDuplicatesTo(addNotDistinctErrorMessage);
addNotDistinctErrorMessage.LinkTo(errorTarget);

//Execute the network
await Network.ExecuteAsync(source);

bool IsValid(IDictionary<string, object> row) {
    foreach (var configEntry in config) {
        if (configEntry.IsMandatory == true &&
            string.IsNullOrEmpty(row[configEntry.FileColumnName] as string)) {
            row.Add("ErrorMessage", "Empty required column detected!");
            return false;
        }
        if (configEntry.MinFieldLength > 0 &&
            (row[configEntry.FileColumnName] as string).Length < configEntry.MinFieldLength) {
            row.Add("ErrorMessage", "Unsupported length!");
            return false;
        }
        if (configEntry.MaxFieldLength > 0 &&
            (row[configEntry.FileColumnName] as string).Length > configEntry.MaxFieldLength) {
            row.Add("ErrorMessage", "Unsupported length!");
            return false;
        }
    }
    return true;
}
```

We've refined the `IsValid` method to cater to the `ExpandoObject`. Moreover, this method also leverages the loaded configuration data for row validation.


### Complete code overview

Here is an overview of the whole code the example. {{< link-ext text="It is also available on GitHub." url="https://github.com/etlbox/etlbox.demo/tree/main/DataValidationPart3" >}}

```C#
//Adjust connection string to your local database
string SqlConnectionString = @"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog=demo;TrustServerCertificate=true";
SqlConnectionManager connectionManager = new SqlConnectionManager(SqlConnectionString);

//Prepare the "meta" table that contains our table definition and rules
DropTableTask.DropIfExists(connectionManager, "Meta");
CreateTableTask.CreateIfNotExists(connectionManager, "Meta",
    new List<TableColumn>() {
        new TableColumn() { Name = "ColumnName", DataType = "VARCHAR(1024)", AllowNulls = false  },
        new TableColumn() { Name = "DataType", DataType = "VARCHAR(20)", AllowNulls = false  },
        new TableColumn() { Name = "IsMandatory", DataType = "INT", AllowNulls = false },
        new TableColumn() { Name = "IsBusinessKey", DataType = "INT", AllowNulls = false, DefaultValue = "0"  },
        new TableColumn() { Name = "FileColumnName", DataType = "VARCHAR(1024)", AllowNulls = false  },
        new TableColumn() { Name = "MinFieldLength", DataType = "INT", AllowNulls = true },
        new TableColumn() { Name = "MaxFieldLength", DataType = "INT", AllowNulls = true },
        new TableColumn() { Name = "Trim", DataType = "INT", AllowNulls = false, DefaultValue = "0" },
        new TableColumn() { Name = "Uppercase", DataType = "INT", AllowNulls = false, DefaultValue = "0" },
    });

SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('VendorName','VARCHAR(100)', 1, 0, 'Name', 5, 50, 1, 1)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Code','CHAR(5)', 1, 1, 'Code', 5, 5, 0, 0)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Custom','VARCHAR(10)', 1, 1, 'Custom', NULL, NULL, 0, 0)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Country','CHAR(2)', 0, 0, 'Country', NULL, NULL, 0, 0)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Contact','VARCHAR(50)', 0, 0, 'Contact', NULL, NULL, 0, 0)");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO Meta (ColumnName, DataType, IsMandatory, IsBusinessKey, FileColumnName, MinFieldLength, MaxFieldLength, Trim, Uppercase)
        VALUES('Info','VARCHAR(50)', 0, 0, 'TraceInfo', NULL, NULL, 0, 0)");

//Load the configuration into memory - we are using ETLBox for this
var configSource = new DbSource<Meta>(connectionManager, "Meta");
var configDest = new MemoryDestination<Meta>();
configSource.LinkTo(configDest);
Network.Execute(configSource);
var config = configDest.Data;

//Prepare the target database based on configuration
DropTableTask.DropIfExists(connectionManager, "VendorMaster");
var columns = new List<TableColumn>();
columns.Add(new TableColumn() { Name = "Id", DataType = "INT", AllowNulls = false, IsPrimaryKey = true, IsIdentity = true });
columns.AddRange(config.Select(c =>
    new TableColumn() { Name = c.ColumnName, DataType = c.DataType, AllowNulls = !c.IsMandatory })
);
columns.Add(new TableColumn() { Name = "ValidFrom", DataType = "DATETIME", AllowNulls = false });
columns.Add(new TableColumn() { Name = "ValidTo", DataType = "DATETIME", AllowNulls = false });
CreateTableTask.CreateIfNotExists(connectionManager, "VendorMaster", columns);

SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO VendorMaster (VendorName, Code, Custom, Country, Contact, Info, ValidFrom,ValidTo)
        VALUES('BIG HOLDING', 'H1234', 'HD', 'US', 'Hans', 'T0', '1900-1-1','9999-12-31')");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO VendorMaster (VendorName, Code, Custom,Country, ValidFrom,ValidTo)
        VALUES('UNICORN', 'UNI10', 'U', 'NO', '1900-1-1','9999-12-31')");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO VendorMaster (VendorName, Code, Custom,Country, ValidFrom,ValidTo)
        VALUES('UNICORN TWO', 'UNI20', 'U', 'SE', '1900-1-1','9999-12-31')");


//Create the data flow components
var source = new CsvSource("sourceData.csv");
var normalize = new RowTransformation(row => Normalize(row));
var errorTarget = new JsonDestination("errors.json");
var dbTarget = new DbDestination(connectionManager, "VendorMaster");
dbTarget.ColumnMapping = config
    .Where(c => c.ColumnName != c.FileColumnName)
    .Select(c => new DbColumnMap() { DbColumnName = c.ColumnName, PropertyName = c.FileColumnName })
    .ToList();
var lookupExisting = new LookupTransformation();
var lookupSource = new DbSource(connectionManager, "VendorMaster");
lookupExisting.Source = lookupSource;
lookupExisting.MatchColumns = config
    .Where(c => c.IsBusinessKey)
    .Select(c => new MatchColumn() { InputPropertyName = c.FileColumnName, LookupSourcePropertyName = c.ColumnName })
    .ToList();
lookupExisting.RetrieveColumns = new[] {
    new RetrieveColumn() { InputPropertyName = "DbId", LookupSourcePropertyName ="Id"}
};
var duplicateCheck = new Distinct();
duplicateCheck.DistinctColumns = config
    .Where(c => c.IsBusinessKey)
    .Select(c => new DistinctColumn() { DistinctPropertyName = c.FileColumnName })
    .ToList();

//Adjust ValidFrom to current data if record exists
var adjustValidFrom = new RowTransformation(row => {
    dynamic r = row as dynamic;
    if ((row as IDictionary<string,object>).ContainsKey("DbId") && r.DbId > 0)
        r.ValidFrom = DateTime.Now;
    else
        r.ValidFrom = new DateTime(1900, 1, 1);
    r.ValidTo = new DateTime(9999, 12, 31);
    return row;
});

//Add custom error message to duplicates
var addNotDistinctErrorMessage = new RowTransformation(
    row => {
        (row as dynamic).ErrorMessage = "Duplicate in source data detected!";
        return row;
    });

//Modify Merge to work with SCD-2
dbTarget.AfterBatchWrite = batch => {
    SqlTask.ExecuteNonQuery(connectionManager, @"
UPDATE VendorMaster
SET VendorMaster.ValidTo = calc.validto
FROM (SELECT Id,
             Code,
             Custom,
             ValidFrom,
             LEAD(ValidFrom)
                  OVER (
                      PARTITION BY Code,Custom
                      ORDER BY ValidFrom
                      ) validto
      FROM VendorMaster) calc
WHERE VendorMaster.Id = calc.Id
  AND calc.validto IS NOT NULL
");
};


/* Linking the components */
source.LinkTo(normalize);

normalize.LinkTo(lookupExisting, row => IsValid(row));
normalize.LinkTo(errorTarget, row => true); //Valid rows are already send to the lookup!

//var debug = new MemoryDestination()
lookupExisting.LinkTo(adjustValidFrom);
adjustValidFrom.LinkTo(duplicateCheck);

duplicateCheck.LinkTo(dbTarget);
duplicateCheck.LinkDuplicatesTo(addNotDistinctErrorMessage);
addNotDistinctErrorMessage.LinkTo(errorTarget);

//Execute the network
await Network.ExecuteAsync(source);

Console.WriteLine("Done!");

dynamic Normalize(IDictionary<string,object> row) {
    foreach (var configEntry in config) {
        if (configEntry.Uppercase == true)
            row[configEntry.FileColumnName] = (row[configEntry.FileColumnName] as string).ToUpper();
        if (configEntry.Trim == true)
            row[configEntry.FileColumnName] = (row[configEntry.FileColumnName] as string).Trim();
    }
    return row;
}
bool IsValid(IDictionary<string, object> row) {
    foreach (var configEntry in config) {
        if (configEntry.IsMandatory == true &&
            string.IsNullOrEmpty(row[configEntry.FileColumnName] as string)) {
            row.Add("ErrorMessage", "Empty required column detected!");
            return false;
        }
        if (configEntry.MinFieldLength > 0 &&
            (row[configEntry.FileColumnName] as string).Length < configEntry.MinFieldLength) {
            row.Add("ErrorMessage", "Unsupported length!");
            return false;
        }
        if (configEntry.MaxFieldLength > 0 &&
            (row[configEntry.FileColumnName] as string).Length > configEntry.MaxFieldLength) {
            row.Add("ErrorMessage", "Unsupported length!");
            return false;
        }
    }
    return true;
}

public class Meta
{
    public string ColumnName { get; set; }
    public string DataType { get; set; }
    public bool IsMandatory { get; set; }
    public bool IsBusinessKey { get; set; }
    public string FileColumnName { get; set; }
    public int MinFieldLength { get; set; }
    public int MaxFieldLength { get; set; }
    public bool Trim { get; set; }
    public bool Uppercase { get; set; }
}
```

By introducing these nuanced changes to the data flow, we've successfully transitioned from a static type-based approach to a dynamic, configuration-driven data loading process. This approach significantly boosts flexibility, making it more adaptable to evolving data requirements.

## Conclusion

Over the course of three articles, we've delved deep into ETLBox, a potent .NET library dedicated to data management. In the first installment, we discovered the essence of ETLBox: a tool primarily designed for ETL processes without the dependence on a GUI. Key takeaways about ETLBox include its user-friendly API and the capacity to support various transformations and data sources. A hands-on example showed us how to craft an ETL data flow with ETLBox, processing a CSV supplier dataset and emphasizing its capabilities in data validation, normalization, and error management.

The second article brought enhancements to the table. We enhanced error reporting and incorporated Slowly Changing Dimension (SCD) Type 2, using `ValidFrom` and `ValidTo` date columns, enabling us to chronicle data alterations over time.

In the third segment, we shifted gears, handling data flow using dynamic data objects. We ventured into the realms of the `dynamic` keyword and `ExpandoObject` within C#, illustrating the power of moving beyond fixed data types. A new configuration table emerged, housing pivotal metadata and fostering the app's dynamic nature.

To sum it all up, the series spotlighted ETLBox as a formidable ETL tool for the .NET community. Its range from foundational data flow setups to intricate enhancements like SCD Type 2 and dynamic data operations underscores its versatility, dependability, and adaptability. As ETLBox introduces dynamic data flows, it sets a new standard by addressing the ever-evolving challenges of data sourcing and structuring, offering an unparalleled level of flexibility. Although there's undeniable value in static typing, the embrace of a dynamic approach positions ETLBox prominently within the .NET ETL ecosystem.

{{< series >}}
  {{< series_item index="1" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;I)" link="../data-validation-part1/" >}}
  {{< series_item index="2" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;II)" link="../data-validation-part2/" >}}
  {{< series_item index="3" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;III)" link="../data-validation-part3/" active="true" >}}
{{< /series >}}

