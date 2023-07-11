---
title: "Extending DbContext"
description: "How to extend your DbContext with bulk inserts"
lead: "ETLBox offers support for Entity Framework. This article give you a brief overview how to use bulk operations with Entity Framework's DbContext."
draft: false
images: []
menu:
  docs:
    parent: "entity-framework"
weight: 1010
toc: true
---

## Package information

All currently available EntitiyFramework packages can be found on  {{< link-ext url="https://www.nuget.org/packages?q=entity+framework+etlbox" text="nuget.org" >}}. 
As of today, there is only support for SqlServer currently implemented. Other databases will follow with the next versions. 

For SqlServer, you will need to reference the {{< link-ext url="https://www.nuget.org/packages/ETLBox.EntityFramework.SqlServer" text="SqlServer extension package" >}}. 

## Bulk operations

### Bulk insert 

Inserting all your data using high performant bulk operations is as simple as this:
 
```C#
using (var db = new BloggingContext()) {
    var data = CreateNewDataRows();
    db.BulkInsert(data);
}
```

### Bulk update

Speed of updating big amounts of data can be massively improved using the bulk update operation. 
Bulk updates are as simple. 

```C#
using (var db = new BloggingContext()) {
    var data = GetUpdatedDataRows();
    db.BulkUpdate(data);
}
```

### Bulk deletes

Sometimes, deleting data can become with very slow with EntityFramework. Bulk delete can help:

```C#
using (var db = new BloggingContext()) {
    var data = GetRowsToDelete();
    db.BulkDelete(data);
}
```

### Bulk merge

If you don't want to decide if you need to insert, update or delete your data, you can also use the BulkMerge:

```C#
using (var db = new BloggingContext()) {
    var data = GetSetOfRows();
    db.BulkMerge(data);
}
```

The merge operation will automatically insert new data row, update existing or delete missing rows. 
(Changing the MergeMode can also ignore deletions) 

```db.BulkMerge(allBlogs, options => options.MergeMode = ETLBox.MergeMode.Delta);```

#### Options

There are different options available when using bulk operations.

For example, you can prevent to reread auto generated values from the database, which can also improve the performance:

```C#
db.BulkInsert(data, options => options.ReadGeneratedValues = false);
```

Other options are: 

- BatchSize: Sets the batch size for the bulk operations - default is 10000. Try to increase this value if you have only very few rows. 
- ReadGeneratedValues: Reads auto generated values (e.g. default or computed columns) from the database after performing the bulk operation
- BeforeBatchWrite: An action to execute before every batch 
- AfterBatchWrite: An action to execute after every batch
- ColumnConverters: Can be used to convert the column name 
- AllowIdentityInsert: Allows overriding identity values 
- OnProgress: Callback which is called after a batch was processed
- RedirectErroneousBatches: Batches which contain flawed or Erroneous rows are redirected 
- ErrorData: Flawed/Erroneous rows will be forwarded into this List 
- MergeMode: Setting the merge mode when using BulkMerge. 




