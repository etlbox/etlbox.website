---
title : "DB Extensions"
description: "ETLBox.DbExtensions extends IDbConnection like Dapper does — with bulk insert, update, delete, and merge on the connection you already use."
lead: "Like Dapper, we extend your <code>IDbConnection</code>. Keep querying with Dapper. Write thousands of rows with one extra method — much faster than a loop."
draft: false
images: []
---

DbExtensions adds `BulkInsert`, `BulkUpdate`, `BulkDelete`, and `BulkMerge` to the same connection Dapper already uses. One extra `using`. No new client. That is why it fits Dapper so well — and any other ADO.NET code.

**Still writing this?**

```csharp
foreach (var customer in customers)
    connection.Execute(
        "INSERT INTO Customer (Id, Name, City) VALUES (@Id, @Name, @City)",
        customer);
```

**One call instead — and much faster**

```csharp
connection.BulkInsert(customers);
```

The second snippet is not just shorter. On SQL Server, 5,000 inserts took **8 seconds** with the loop and **70 ms** with `BulkInsert()` — about **110×** faster. Update, delete, and merge follow the same pattern.

| Operation | Dapper, row by row | DbExtensions | Faster |
| --- | ---: | ---: | ---: |
| Insert | 7.9 s | **0.07 s** | 110× |
| Update | 7.7 s | **0.42 s** | 18× |
| Delete | 7.5 s | **0.27 s** | 28× |
| Merge | 11.6 s | **0.28 s** | 41× |

5,000 rows, local SQL Server. [How we measured this](/docs/getting-started/performance/).

## Insert, update, delete, merge

Same connection as Dapper. One method each — not a new client.

{{< tabs "dbext-ops" >}}

{{< tab "Bulk Insert" >}}
```C#
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");
var customers = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i, Name = $"Name {i}", City = $"City {i % 50}" });
connection.BulkInsert(customers);

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```
{{< /tab >}}
{{< tab "Bulk Merge" >}}
```C#
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");
var customers = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i, Name = $"Customer {i}", City = "Merged City" });
connection.BulkMerge(customers, options => {
    options.MergeMode = MergeMode.Full;
});

public class Customer : MergeableRow {
    [IdColumn]
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```
{{< /tab >}}
{{< tab "Bulk Update" >}}
```C#
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");
var customers = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i, Name = $"Updated {i}" });
connection.BulkUpdate(customers);

public class Customer {
    [IdColumn]
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```
{{< /tab >}}
{{< tab "Bulk Delete" >}}
```C#
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");
var customers = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i });
connection.BulkDelete(customers);

public class Customer {
    [IdColumn]
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```
{{< /tab >}}
{{< /tabs >}}
