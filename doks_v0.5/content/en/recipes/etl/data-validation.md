---
title: "Data validation"
description: "Example: Reads and validates data from a csv file and writes it into the target table"
lead: "This example shows how data is read from a csv file. Each record is validated to meet some data quality criteria. Then a check is executed to determine if the record already exists in the target database, and if the data contains any duplicate records. Cleansed data is inserted into a database table"
draft: false
images: []
menu:
  recipes:
    parent: "etl"
weight: 2230
toc: true
---

## Preqrequisites

This example requires a SQLServer database. 

## Demo setup

#### Source data

Our source data looks like this:

CustomerName|Code1|Code2|Country
------------|-----|-----|-------
Charlie|CodeC|PAN_C|IE
Dina|CodeD|PAN_D|
Esther|CodeE|PAN_E|
Frieda||
DuplicateInDb|CodeA|PAN_A|IE
DuplicateInDb|CodeB|PAN_B|
DuplicateFile_OK|CodeX|PAN|X|XX
DuplicateFile_Error|CodeX|PAN|X|YY
DuplicateFile2_Error|CodeC|PAN_C|
Gustavo|CodeG|PAN_G|NO

#### Destination table

We create a destination table in SQL server which contains already two records:

Id|CustomerName|Code1|Code2|Country
--|------------|-----|-----|-------
1|Arthur|CodeA|PAN_A|IE
2|Bethanie|CodeB|PAN_B|NO

This can be done using control flow task:

```C#
//Adjust connection string to your local database
string SqlConnectionString = @"Data Source=localhost;User Id=sa;Password=YourStrong@Passw0rd;Initial Catalog=demo;TrustServerCertificate=true";

//Prepare the target database
Console.WriteLine("Preparing example database target table.");
SqlConnectionManager connectionManager = new SqlConnectionManager(SqlConnectionString);
DropTableTask.DropIfExists(connectionManager, "dbtable");
CreateTableTask.CreateIfNotExists(connectionManager, "dbTable",
    new List<TableColumn>() {
        new TableColumn() { Name = "Id", DataType = "INT", AllowNulls = false, IsIdentity=true },
        new TableColumn() { Name = "CustomerName", DataType = "VARCHAR(100)", AllowNulls = false },
        new TableColumn() { Name = "Code1", DataType = "VARCHAR(100)", AllowNulls = false },
        new TableColumn() { Name = "Code2", DataType = "VARCHAR(100)", AllowNulls = false },
        new TableColumn() { Name = "Country", DataType = "VARCHAR(100)", AllowNulls = true }        
    });
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO dbTable (CustomerName, Code1, Code2, Country) 
      VALUES('Arthur', 'CodeA', 'PAN_A', 'IE')");
SqlTask.ExecuteNonQuery(connectionManager,
    @"INSERT INTO dbTable (CustomerName, Code1, Code2, Country) 
      VALUES('Bethanie', 'CodeB', 'PAN_B', 'NO')");
```

## Data objects 

We have two data objects: One for the data rows from our source, and the other one when we check if data already exists in the target database.

The data row object already contains a validation function.

```C#
public class CustomerRow
{
    public string CustomerName { get; set; }

    [DistinctColumn]
    public string Code1 { get; set; }

    [DistinctColumn]
    public string Code2 { get; set; }

    public string Country { get; set; }


    public int? DbId { get; set; }
    public bool IsInDb => DbId.HasValue && DbId > 0;

    public string ErrorMessage { get; set; }    
    public bool IsValid() {
        if (string.IsNullOrEmpty(CustomerName) ||
            string.IsNullOrEmpty(Code1) ||
            string.IsNullOrEmpty(Code2))
            return false;
        if (CustomerName.Length < 5 || CustomerName.Length > 50)
            return false;
        if (Code1.Length != 5)
            return false;
        return true;
    }

}
```

```C#
public class CustomerDbEntry
{
    [RetrieveColumn(nameof(CustomerRow.DbId))]
    public int Id { get; set; }
    [MatchColumn(nameof(CustomerRow.Code1))]
    public string Code1 { get; set; }
    [MatchColumn(nameof(CustomerRow.Code2))]
    public string Code2 { get; set; }
}
```

## Execution

The following code will validate each row from the incoming csv file with the given Validation method `IsValid`.
The it will check if the target database table already contains a record that has the same values for `Code1` and `Code2`.
Finally, the Distinct will check for duplicates (a record is a duplicate if `Code1` and `Code2` are the same)
Valid records are written into the target table, invalid records are written into a file 'errors.json' in json format. An error code is added to these records in order to identify why there where sorted out. 

```C#

//Create the data flow components
var source = new CsvSource<CustomerRow>("source.csv");
var errorTarget = new JsonDestination<CustomerRow>("errors.json");
var dbTarget = new DbDestination<CustomerRow>(connectionManager, "dbtable");
var duplicateCheck = new Distinct<CustomerRow>();
var lookupExisting = new LookupTransformation<CustomerRow, CustomerDbEntry>();
var lookupSource = new DbSource<CustomerDbEntry>(connectionManager, "dbtable");
lookupExisting.Source = lookupSource;

/* Linking the components */
source.LinkTo(lookupExisting, row => row.IsValid());
source.LinkTo(errorTarget, row => {
    bool isInvalid = !row.IsValid();
    row.ErrorMessage = isInvalid ? "Validation for row failed!" : row.ErrorMessage;
    return isInvalid;
});

lookupExisting.LinkTo(duplicateCheck, row => !row.IsInDb);
lookupExisting.LinkTo(errorTarget, row => {
    if (row.IsInDb)
        row.ErrorMessage = "Row with same combination of Code1/Code2 already exists in database!";
    return row.IsInDb;
});

duplicateCheck.LinkTo(dbTarget);
duplicateCheck.LinkDuplicatesTo(errorTarget, row => {
    row.ErrorMessage = "Row is a duplicate!";
    return true;
});

//Execute the network
Console.WriteLine("Starting the data flow.");
Network.Execute(source);

Console.WriteLine("Done!");
```

## Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/DataValidation" >}}

