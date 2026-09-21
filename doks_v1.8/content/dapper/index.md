---
title: "Dapper for reads. Bulk for writes."
description: "Add BulkInsert, BulkUpdate, BulkDelete, and BulkMerge to the same IDbConnection Dapper already uses. One extra using."
lead: "Like Dapper, we extend your <code>IDbConnection</code>. Keep querying with Dapper. Write thousands of rows with one extra method — much faster than a loop."
kicker: "Bulk operations for the connection you already use"
layout: landing-funnel
draft: false
toc: false
hideAiButtons: true
---

Dapper is excellent at reading data. It is not a bulk writer. The usual workaround — a loop of `INSERT` / `UPDATE` / `DELETE` — costs one round-trip per row and gets slow as soon as the set grows. **ETLBox.DbExtensions** adds `BulkInsert`, `BulkUpdate`, `BulkDelete`, and `BulkMerge` to the same connection. One extra `using`. No new client.

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

<section class="mb-5">
  <h2 class="h3">Dapper loop vs SqlBulkCopy vs DbExtensions</h2>
  <p>DbExtensions does not replace Dapper, and it does not pretend SqlBulkCopy is slow. It covers the write operations Dapper never added — on more than SQL Server.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>DbExtensions</span>
      </div>
      <h3>One line, many databases</h3>
      <ul>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Same <code>IDbConnection</code> as Dapper</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Insert, update, delete, merge</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Your POCOs — no <code>DataTable</code></li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> SQL Server, Postgres, MySQL, Oracle, SQLite, …</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Same bulk engine as ETLBox data flows</li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "Dp" "Dapper loop" "#b8352c" >}}
      <h3>One round-trip per row</h3>
      <ul>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Great for queries, not for bulk writes</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> <code>foreach</code> + <code>Execute</code> does not scale</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Merge becomes select-then-insert-or-update</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> SqlBulkCopy is insert-only, SQL Server only</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> A second client is more than you asked for</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  <h2 class="h3">SQL Server, 5,000 rows</h2>
  <p>Measured with the open benchmark in <code>etlbox.demo</code>. Read the table as order of magnitude, not a guarantee.</p>
  <div class="table-responsive">
  <table class="table align-top text-center compare-matrix">
    <thead>
      <tr>
        <th scope="col" class="text-nowrap"></th>
        <th scope="col" class="text-nowrap">Dapper loop</th>
        <th scope="col" class="text-nowrap">SqlBulkCopy</th>
        <th scope="col" class="text-nowrap bg-primary-subtle">DbExtensions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="text-start">Insert</th>
        <td class="py-3">{{< compare-cell no "7.9 s — one round-trip per row" >}}</td>
        <td class="py-3">{{< compare-cell yes "20 ms — SQL Server only" >}}</td>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "70 ms — POCOs, many databases" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Update / delete</th>
        <td class="py-3">{{< compare-cell no "Same loop, ~7.5 s" >}}</td>
        <td class="py-3">{{< compare-cell no "Not included" >}}</td>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "BulkUpdate / BulkDelete" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Upsert / sync</th>
        <td class="py-3">{{< compare-cell no "Select + insert or update, 11.6 s" >}}</td>
        <td class="py-3">{{< compare-cell no "Not included" >}}</td>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "BulkMerge — 0.28 s" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">API</th>
        <td class="py-3">{{< compare-cell no "SQL you already write, row by row" >}}</td>
        <td class="py-3">{{< compare-cell no "DataTable + column maps" >}}</td>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "Your POCOs on IDbConnection" >}}</td>
      </tr>
    </tbody>
  </table>
  </div>
  <p class="mb-0">Method, script, and caveats: <a href="https://www.dbextensions.net/docs/getting-started/performance/">how we measured this</a>.</p>
</section>

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
}
```
{{< /tab >}}
{{< /tabs >}}

<div class="experts-poc text-white mb-5">
  <p class="experts-kicker mb-2">Try DbExtensions</p>
  <h2 class="h3 mb-3">Keep Dapper. Add bulk writes.</h2>
  <p class="mb-4">The product site has the docs, the trial, and pricing. NuGet without a key is limited to 5,000 rows. A trial key removes the limit for 45 days.</p>
  <a class="btn btn-light rounded-pill me-2 mb-2" href="https://www.dbextensions.net">Get started</a>
  <a class="btn btn-outline-light rounded-pill me-2 mb-2" href="https://www.dbextensions.net/docs/details/get-trial/">Get a free trial key</a>
  <a class="btn btn-outline-light rounded-pill mb-2" href="https://www.dbextensions.net/pricing/">See pricing</a>
</div>
