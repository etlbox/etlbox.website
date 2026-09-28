---
title: "Beyond SqlBulkCopy"
description: "SqlBulkCopy is fast for SQL Server inserts. It does not update, merge, or leave SQL Server. ETLBox uses it — and adds POCOs, other databases, and DbMerge."
lead: "SqlBulkCopy is the right insert path on SQL Server. It is not an ETL API. ETLBox uses it under the hood, then covers update, merge, and other databases."
kicker: "Keep the engine. Drop the DataTable."
layout: landing-funnel
draft: false
toc: false
hideAiButtons: true
---

SqlBulkCopy is not slow. On SQL Server it is the native bulk insert, and if you already maintain a `DataTable` plus column maps, it stays a valid choice. In the documented benchmark it was a few milliseconds faster than ETLBox `BulkInsert` because there is no object mapping.

Reach past it when the next job is an update, a merge, a POCO, or PostgreSQL.

**The class you already know**

```csharp
using var bulk = new SqlBulkCopy(connection) {
    DestinationTableName = "Customer"
};
bulk.ColumnMappings.Add("Id", "Id");
bulk.ColumnMappings.Add("Name", "Name");
bulk.WriteToServer(table);
```

**POCOs, same bulk path — and not only insert**

```csharp
var dest = new DbDestination<Customer>(conn, "Customer");
source.LinkTo(dest);
Network.Execute(source);
```

On SQL Server, `DbDestination` and `BulkInsert` use SqlBulkCopy. You keep your objects. Update, delete, and merge are the same family: `DbMerge`, or `BulkUpdate` / `BulkDelete` / `BulkMerge` on `IDbConnection` if you are not building a data flow.

<section class="mb-5">
  <h2 class="h3">What SqlBulkCopy does not do</h2>
  <p>The class is insert-only and SQL Server only. That is not a criticism. It is the surface Microsoft shipped. ETLBox does not pretend to beat raw SqlBulkCopy on a SQL Server insert. It wraps that path and covers the rest.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>ETLBox</span>
      </div>
      <h3>Bulk, then the rest of ETL</h3>
      <ul>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> SqlBulkCopy on SQL Server inserts</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> POCOs — no <code>DataTable</code></li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> <code>DbMerge</code> for upsert and sync</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Every database we ship a connector for — and files when you switch</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Same engine in a data flow or on <code>IDbConnection</code></li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "BC" "SqlBulkCopy" "#cc2927" >}}
      <h3>One operation, one database</h3>
      <ul>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Insert only</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> SQL Server only</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> <code>DataTable</code> or <code>IDataReader</code></li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Column maps you maintain by hand</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> No lookup, no error path, no merge</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  <h2 class="h3">Not only SQL Server</h2>
  <p>SqlBulkCopy stops at one engine. ETLBox bulk-loads every database we ship a connector for. When the next job is a file, not a table, the same flow reads CSV, Excel, JSON, XML, or Parquet.</p>
  <p class="experts-kicker mb-3">Databases</p>
  {{< connector-logos databases >}}
  <p class="experts-kicker mb-3 mt-4">Files and formats</p>
  {{< connector-logos files >}}
  <p class="mb-0 mt-3"><a href="/docs/relational-databases/overview/">Database connectors</a> · <a href="/docs/streaming-connectors/overview/">Streaming connectors</a></p>
</section>

<section class="mb-5">
  <h2 class="h3">SQL Server, 5,000 rows</h2>
  <p>From the open benchmark in <code>etlbox.demo</code>. Order of magnitude, not a guarantee. SqlBulkCopy wins the insert by a few milliseconds. Everything else is missing from the class.</p>
  <div class="table-responsive">
  <table class="table align-top text-center compare-matrix">
    <thead>
      <tr>
        <th scope="col" class="text-nowrap"></th>
        <th scope="col" class="text-nowrap">SqlBulkCopy</th>
        <th scope="col" class="text-nowrap bg-primary-subtle">ETLBox</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="text-start">Insert</th>
        <td class="py-3">{{< compare-cell yes "20 ms — DataTable, SQL Server" >}}</td>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "70 ms — POCOs, same bulk path" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Update / delete</th>
        <td class="py-3">{{< compare-cell no "Not included" >}}</td>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "DbMerge / BulkUpdate / BulkDelete" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Upsert / sync</th>
        <td class="py-3">{{< compare-cell no "Not included" >}}</td>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "DbMerge / BulkMerge" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Other databases</th>
        <td class="py-3">{{< compare-cell no "SQL Server only" >}}</td>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "Postgres COPY, MySQL, Oracle, …" >}}</td>
      </tr>
    </tbody>
  </table>
  </div>
  <p class="mb-0">Method and caveats: <a href="https://www.dbextensions.net/docs/getting-started/performance/">how we measured this</a>. We do not claim to beat raw SqlBulkCopy on a SQL Server insert.</p>
</section>

<section class="mb-4">
  <h2>Data flow or one method on the connection</h2>
  <p>Need source → transform → destination? That is ETLBox: <code>DbDestination</code> and <code>DbMerge</code> in a network. Already in Dapper or ADO.NET with a list of POCOs? <a href="/dapper/">DbExtensions</a> adds <code>BulkInsert</code> on the same <code>IDbConnection</code> — still SqlBulkCopy on SQL Server.</p>
</section>

<div class="experts-poc text-white mb-5">
  <p class="experts-kicker mb-2">Keep SqlBulkCopy. Add the rest.</p>
  <h2 class="h3 mb-3">Insert was never the whole job.</h2>
  <p class="mb-4">A trial key unlocks the full library. NuGet without a key is limited to 5,000 rows per data flow. If you only wanted bulk writes next to Dapper, that page is shorter.</p>
  <a class="btn btn-light rounded-pill me-2 mb-2" href="/product/getting-started/get-trial/">Get a free trial key</a>
  <a class="btn btn-outline-light rounded-pill me-2 mb-2" href="/dapper/">Dapper + bulk</a>
  <a class="btn btn-outline-light rounded-pill mb-2" href="/docs/relational-databases/dbdestination/">DbDestination docs</a>
</div>

<div class="mb-5 pb-5">
{{< reference-logos >}}
</div>
