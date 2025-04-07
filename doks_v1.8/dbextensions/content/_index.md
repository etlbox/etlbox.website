---
title : "DB Extensions"
lead: "Adds the missing bulk operations to ADO.NET. Built on ETLBox, made for Dapper, ready for big data."
draft: false
images: []
---

**See yourself how easy it is to use.**

{{< tabs "create-new-site" >}}
{{< tab "Bulk Insert" >}}

```C#
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");
var data = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i, Name = $"Name {i}", City = $"City {i % 50}" });
connection.BulkInsert(data.ToList());
```
{{< /tab >}}
{{< tab "Bulk Merge" >}}

```C#
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");
var mergeData = Enumerable.Range(5_000, 10_000)
    .Select(i => new Customer { Id = i, Name = $"Customer {i}", City = "Merged City" });
connection.BulkMerge(mergeData.ToList());

public class Customer {
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
var data = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i, Name = $"Updated {i}", City = $"NewCity {i % 50}" });
connection.BulkUpdate(data.ToList());
```

{{< /tab >}}
{{< tab "Bulk Delete" >}}

```C#
using ETLBox.DbExtensions;

var connection = new SqlConnection("your-connection-string");
var data = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i });
connection.BulkDelete(data.ToList());
```

{{< /tab >}}

{{< /tabs >}}

