---
title : "DB Extensions"
lead: "Adds the missing bulk operations to ADO.NET. Built on ETLBox, made for Dapper, ready for big data."
draft: false
images: []
---

**See yourself how easy it is to use. Each operation works with just one line of code.**

{{< tabs "create-new-site" >}}
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

