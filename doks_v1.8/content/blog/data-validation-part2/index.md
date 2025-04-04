---
title: "A Developer’s Guide to Building Robust ETL Data Flows in C# and .NET (Part II)"
description: "This part focuses on improving data quality and history tracking in ETLBox. We introduce row-level error messages for invalid or duplicate records and implement SCD Type 2 using ValidFrom/ValidTo columns to preserve change history. These enhancements make the ETL process more robust, auditable, and production-ready."
summary: "In Part 2, we enhance the ETLBox data flow by adding custom error messages and implementing Slowly Changing Dimension Type 2 (SCD-2) to track changes in supplier data over time."
date: 2025-04-01
draft: false
weight: 50
categories: []
tags: []
contributors: [Andreas Lennartz]
pinned: false
homepage: false
---

{{< discount_referral >}}

{{< series >}}
  {{< series_item index="1" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;I)" link="../data-validation-part1/" >}}
  {{< series_item index="2" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;II)" link="../data-validation-part2/" active="true" >}}
  {{< series_item index="3" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;III)" link="../data-validation-part3/" >}}
{{< /series >}}

![Article Banner](banner.png)

## Enhancing the Data Flow

In Part 1, we explored ETLBox, a .NET library designed for efficient data management. Without the need for a graphical interface, ETLBox simplifies data processes by providing an intuitive API, supporting various transformations and data sources, and ensuring optimal performance. It's specifically tailored for the .NET framework and emphasizes stable ETL processes. We also discussed how to use ETLBox packages from NuGet and demonstrated how to process a CSV file of supplier data, emphasizing steps like validation and error management.

In this part, we'll enhance this data flow. We'll not only boost error logging but also tackle the challenge of managing repeated or varied supplier data loads. Our goal is to create a Slowly Changing Dimension Type 2 (SCD Type 2) to capture changes in the CSV data.


### Enhanced Error Logging

Errors are inevitable in any data processing task. Our solution in this example is to add a custom error message to each faulty record and store it in our pre-existing error file. If you are interested in a more sophisticated way of redirecting error, you can also have a look at the `LinkErrorTo` methods provided on each data flow component. To keep this example simple, we will just focus on adding a simple error message to the data itself.

### Implementing SCD Type 2

SCD Type 2 (Slowly Changing Dimension Type 2) is a methodology used to track historical changes in data. We also want to improve our data flow to now work with a SCD Type 2. With Type 2, we get historical data tracking. This ensures that the data's history is preserved, and any changes can be tracked over time. To achieve this, each historical record in an SCD Type 2 gets a validity range, using a `ValidFrom` and `ValidTo` date column. When a new record is inserted, it gets a `ValidFrom` date which is in the past, before any of our transactional data starts. The `ValidTo` is a date in the far future. When a new record is created due to a change, the old record is given an "end date", which is also the start date of the new record.

## Adding custom error messages

In order to append an error message when a record becomes invalid, we integrate the `ErrorMessage` property into our `VendorMaster` class. Simultaneously, the `IsValid` method is modified to craft appropriate error messages for such records.

```C#
public class VendorMaster {
    ...
    public string ErrorMessage { get; set; }
    ...
    public bool IsValid() {
        if (string.IsNullOrEmpty(Name) || string.IsNullOrEmpty(Code) || string.IsNullOrEmpty(Custom)) {
            ErrorMessage = "Empty required column detected!";
            return false;
        }
        if (Name.Length < 5 || Name.Length > 50) {
            ErrorMessage = "Name has unsupported length!";
            return false;
        }
        if (Code.Length != 5) {
            ErrorMessage = "Code has unsupported length!";
            return false;
        }
        return true;
    }
}
```

### Changing predicates in links

Subsequently, we need to refine the links to our error destination.
Previously, when segregating valid from invalid records towards the error destination, our approach was:

```C#
normalize.LinkTo(lookupExisting, row => row.IsValid());
normalize.LinkTo(errorTarget, row => !row.IsValid());
```

Nevertheless, invoking the `IsValid` method twice could boost readability but might also cause unintended side effects. Importantly, when creating links between components using predicates, the sequence in which these links are established becomes crucial. Predicates undergo tests in the order they're appended. Once a predicate evaluates as true, subsequent ones aren't examined. Hence, all valid rows dispatched to the lookup using the first link implies we can enhance our code for identical behaviour as shown:

```C#
normalize.LinkTo(lookupExisting, row => row.IsValid());
normalize.LinkTo(errorTarget, row => true); //Valid rows are already send to the lookup!
```

Similarly, while linking the Lookup to the Distinct transformation, we want to embed an error message for records already present in our database. Here, for demonstration purposes, we will include the error message within our predicate method.

```C#
lookupExisting.LinkTo(duplicateCheck, row => !row.IsInDb);
lookupExisting.LinkTo(errorTarget, row => {
    row.ErrorMessage = "Record already exists in target database!";
    return true;
});
```

Lastly, our objective is to associate an error message with rows identified as redundant by the Distinct transformation. We employ an extra RowTransformation to achieve this:

```C#
var addNotDistinctErrorMessage = new RowTransformation<VendorMaster>(
    row => {
        row.ErrorMessage = "Duplicate in source data detected!";
        return row;
    });

duplicateCheck.LinkTo(dbTarget);
duplicateCheck.LinkDuplicatesTo(addNotDistinctErrorMessage);
addNotDistinctErrorMessage.LinkTo(errorTarget);
```

### Checking error file

Upon executing our refined code, the resultant error log file, `errors.json`, displays the following:

```json
[
  {
    "Name": "RAINBOW SOFTWARE",
    "Code": "",
    "Custom": "",
    "Country": "",
    "Contact": "",
    "Info": "",
    "IsInDb": false,
    "ErrorMessage": "Empty required column detected!"
  },
  {
    "Name": "DATA SOFT UNLIMTED",
    "Code": "D1000",
    "Custom": "DS",
    "Country": "US",
    "Contact": "Rucy",
    "Info": "B",
    "IsInDb": false,
    "ErrorMessage": "Duplicate in source data detected!"
  },
  {
    "Name": "DATA HARD",
    "Code": "D1000",
    "Custom": "DS",
    "Country": "IE",
    "Contact": "Lucy",
    "Info": "C",
    "IsInDb": false,
    "ErrorMessage": "Duplicate in source data detected!"
  },
  {
    "Name": "UNICORN 1",
    "Code": "UNI10",
    "Custom": "U",
    "Country": "IE",
    "Contact": "Trippi",
    "Info": "AS",
    "DbId": 2,
    "IsInDb": true,
    "ErrorMessage": "Record already exists in target database!"
  },
  {
    "Name": "UNICORN 2",
    "Code": "UNI20",
    "Custom": "U",
    "Country": "",
    "Contact": "X",
    "Info": "X",
    "DbId": 3,
    "IsInDb": true,
    "ErrorMessage": "Record already exists in target database!"
  }
]
```

## Incorporating SCD Type 2

### Introducing Validity Columns

To accommodate SCD-2, it's essential to introduce `ValidFrom` and `ValidTo` date attributes in both our class definition and our SQL table.

**In the class:**

```C#
public class VendorMaster {
    ...
    public DateTime ValidFrom { get; set; } = new DateTime(1900,1,1);
    public DateTime ValidTo { get; set; } = new DateTime(9999,12,31);
}
```

**In the database:**

```C#
CreateTableTask.CreateIfNotExists(connectionManager, "VendorMaster",
    new List<TableColumn>() {
        ...
        new TableColumn() { Name = "ValidFrom", DataType = "DATETIME", AllowNulls = false },
        new TableColumn() { Name = "ValidTo", DataType = "DATETIME", AllowNulls = false },
});
```

It's worth noting that we have set default values corresponding to the minimum and maximum ranges for `ValidTo` and `ValidFrom`, respectively.

Furthermore, it's crucial to include these columns in our pre-existing test data:

```C#
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

### Managing New Entries

Previously, our aim was to exclude records that were already present in the database. However, with SCD Type 2, instead of filtering these records, we should introduce them with a fresh `ValidFrom`/`ValidTo` range and adjust the existing record's validity period to conclude.

When we identify a pre-existing record, we will designate the `ValidFrom` attribute to the present timestamp. For this task, we'll utilize a row transformation:

```C#
//Adjust ValidFrom to current data if record exists
var adjustValidFrom = new RowTransformation<VendorMaster>(row => {
    if (row.IsInDb)
        row.ValidFrom = DateTime.Now;
    return row;
});
```

Let's incorporate this transformation into our data flow and eliminate the prior filtering mechanism for extant records:

```C#
lookupExisting.LinkTo(adjustValidFrom);
adjustValidFrom.LinkTo(duplicateCheck);
```

Executing our script now would result in the `ValidFrom` of already present records being set to the current timestamp. Nonetheless, we're yet to modify the prevailing database record such that its `ValidTo` corresponds to the new record's `ValidFrom`. The database destination permits the inclusion of custom logic post writing a data batch. Consequently, we can leverage SQL to align the `ValidFrom`/`ValidTo` columns, deploying window functions.

```C#
//Modify Merge to work with SCD-2
dbTarget.AfterBatchWrite = batch => {
    SqlTask.ExecuteNonQuery(connectionManager, @"
UPDATE VendorMaster
SET VendorMaster.ValidTo = DATEADD(ss, -1, calc.validto)
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
```
#### Batch-Specific Updates

It's important to acknowledge that the above SQL code updates all entries across the entire table. For brevity, the SQL script isn't restricted solely to the batch-specific entries. If you desire to limit the updates to the current batch's scope, the `batch` variable lets you interact with the objects unique to that batch, encompassing all incoming data. Thus, if such a specification is of interest, you might consider integrating the Id column to refine your SQL. Currently, the `DbId` property stores the Id values, but only for entries that match the lookup. For a comprehensive retrieval of all id values, consider reading back the auto-generated ids from your database:

```C#
[DbColumnMap("Id")]
[ValueGenerationColumn]
public int? DbId { get; set; }
```

With this setup, the `batch` variable grants access to all auto-generated Id values.

### Complete code overview

Here is an overview of the whole code of part 2 of the example. {{< link-ext text="It is also available on GitHub." url="https://github.com/etlbox/etlbox.demo/tree/main/DataValidationPart2" >}}

```C#
//Adjust connection string to your local database
string SqlConnectionString = @"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog=demo;TrustServerCertificate=true";

//Prepare the target database
SqlConnectionManager connectionManager = new SqlConnectionManager(SqlConnectionString);
DropTableTask.DropIfExists(connectionManager, "VendorMaster");
CreateTableTask.CreateIfNotExists(connectionManager, "VendorMaster",
    new List<TableColumn>() {
        new TableColumn() { Name = "Id", DataType = "INT", AllowNulls = false, IsPrimaryKey = true, IsIdentity = true },
        new TableColumn() { Name = "VendorName", DataType = "VARCHAR(100)", AllowNulls = false },
        new TableColumn() { Name = "Code", DataType = "CHAR(5)", AllowNulls = false },
        new TableColumn() { Name = "Custom", DataType = "VARCHAR(10)", AllowNulls = false },
        new TableColumn() { Name = "Country", DataType = "CHAR(2)", AllowNulls = true },
        new TableColumn() { Name = "Contact", DataType = "VARCHAR(50)", AllowNulls = true },
        new TableColumn() { Name = "Info", DataType = "VARCHAR(50)", AllowNulls = true },
        new TableColumn() { Name = "ValidFrom", DataType = "DATETIME", AllowNulls = false },
        new TableColumn() { Name = "ValidTo", DataType = "DATETIME", AllowNulls = false },
    });
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
var source = new CsvSource<VendorMaster>("sourceData.csv");
var normalize = new RowTransformation<VendorMaster>(row => row.Normalize());
var errorTarget = new JsonDestination<VendorMaster>("errors.json");
var dbTarget = new DbDestination<VendorMaster>(connectionManager, "VendorMaster");
var duplicateCheck = new Distinct<VendorMaster>();
var lookupExisting = new LookupTransformation<VendorMaster, VendorMasterDbEntry>();
var lookupSource = new DbSource<VendorMasterDbEntry>(connectionManager, "VendorMaster");
lookupExisting.Source = lookupSource;

//Adjust ValidFrom to current data if record exists
var adjustValidFrom = new RowTransformation<VendorMaster>(row => {
    if (row.IsInDb)
        row.ValidFrom = DateTime.Now;
    return row;
});

//Add custom error message to duplicates
var addNotDistinctErrorMessage = new RowTransformation<VendorMaster>(
    row => {
        row.ErrorMessage = "Duplicate in source data detected!";
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

normalize.LinkTo(lookupExisting, row => row.IsValid());
normalize.LinkTo(errorTarget, row => true); //Valid rows are already send to the lookup!

lookupExisting.LinkTo(adjustValidFrom);
adjustValidFrom.LinkTo(duplicateCheck);

duplicateCheck.LinkTo(dbTarget);
duplicateCheck.LinkDuplicatesTo(addNotDistinctErrorMessage);
addNotDistinctErrorMessage.LinkTo(errorTarget);

//Execute the network
await Network.ExecuteAsync(source);

Console.WriteLine("Done!");

public class VendorMaster
{

    [DbColumnMap("VendorName")]
    public string Name { get; set; }

    [DistinctColumn]
    public string Code { get; set; }

    [DistinctColumn]
    public string Custom { get; set; }

    public string Country { get; set; }

    public string Contact { get; set; }

    [CsvHelper.Configuration.Attributes.Name("TraceInfo")]
    public string Info { get; set; }

    [DbColumnMap("Id")]
    [ValueGenerationColumn]
    public int? DbId { get; set; }
    public bool IsInDb => DbId.HasValue && DbId > 0;

    public VendorMaster Normalize() {
        this.Name = Name.Trim().ToUpper();
        this.Contact = Contact.Trim();
        return this;
    }

    public bool IsValid() {

        if (string.IsNullOrEmpty(Name) || string.IsNullOrEmpty(Code) || string.IsNullOrEmpty(Custom)) {
            ErrorMessage = "Empty required column detected!";
            return false;
        }
        if (Name.Length < 5 || Name.Length > 50) {
            ErrorMessage = "Name has unsupported length!";
            return false;
        }
        if (Code.Length != 5) {
            ErrorMessage = "Code has unsupported length!";
            return false;
        }
        return true;
    }

    public string ErrorMessage { get; set; }

    public DateTime ValidFrom { get; set; } = new DateTime(1900,1,1);
    public DateTime ValidTo { get; set; } = new DateTime(9999,12,31);
}

public class VendorMasterDbEntry
{
    [RetrieveColumn(nameof(VendorMaster.DbId))]
    public int Id { get; set; }
    [MatchColumn(nameof(VendorMaster.Code))]
    public string Code { get; set; }
    [MatchColumn(nameof(VendorMaster.Custom))]
    public string Custom { get; set; }
}

```



## Conclusion

We've made big steps to improve our data process. First, we added error messages. This means if something goes wrong with the data, we'll know about it right away and can fix it. Then, we started using SCD Type 2. With this, we can see the history of our data, which is great. We can track any changes and understand why they happened. These changes don’t just make our data look good; they also make our whole process more reliable and easy to follow. We're now set up for success!

### Up Next: Configurable Data Flows

So far, we've enhanced error logging and integrated the SCD Type 2 methodology. [In **Part 3**, we're taking it up a notch](../data-validation-part3). Let's challenge the constraints of static types and aim for a dataflow that's entirely configurable. This means more flexibility, scalability, and adaptability without the rewrites. Stay tuned for a dynamic turn in our data management journey!

{{< series >}}
  {{< series_item index="1" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;I)" link="../data-validation-part1/" >}}
  {{< series_item index="2" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;II)" link="../data-validation-part2/" active="true" >}}
  {{< series_item index="3" title="Redefining ETL: Data Flows Powered by C# (Part&nbsp;III)" link="../data-validation-part3/" >}}
{{< /series >}}

{{< discount_mail_start >}}
{{< discount_mail_form >}}
{{< discount_mail_end >}}
