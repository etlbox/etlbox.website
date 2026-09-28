---
title: "CSV to SQL Server in C#"
description: "Stream a CSV into SQL Server, Postgres, MySQL, or Oracle in C#. The file does not have to fit in memory. Bulk insert on every database."
lead: "The file can be larger than memory. The load is still fast. One API for every database."
kicker: "When the file does not fit in RAM"
layout: landing-funnel
draft: false
toc: false
hideAiButtons: true
---

A partner drops a CSV. It might be bigger than the machine. You still need it in the table tonight — SQL Server, Postgres, MySQL, Oracle, or SQLite.

ETLBox streams the file and bulk-inserts as it reads. Nothing has to fit in memory. The same code hits every supported database.

```csharp
var conn = new SqlConnectionManager(connString);
var source = new CsvSource("orders.csv");
var dest = new DbDestination(conn, "Orders");

source.LinkTo(dest);
Network.Execute(source);
```

Swap the connection manager. The source stays.

<section class="mb-5">
  <h2 class="h3">Stream and bulk-load. Do not load the file first.</h2>
  <p>A script that reads the whole CSV into a list is simple until the file grows. Then memory is the limit, and row-by-row inserts are slow. ETLBox never holds the file. It bulk-inserts into every database we support — not a one-off for a single engine.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>ETLBox</span>
      </div>
      <h3>File in, table loaded</h3>
      <ul>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Streams — the file does not have to fit in memory</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Bulk insert on every supported database</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Fast enough for nightly partner files</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> SQL Server, Postgres, MySQL, Oracle, and the rest</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Excel, JSON, XML, Parquet — same pattern</li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "DI" "A custom script" "#6c757d" >}}
      <h3>Load it, then insert</h3>
      <ul>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> The whole file sits in RAM</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Row-by-row inserts get slow</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Each database wants its own bulk path</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> The next format is another script</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Fine for a sample, not for production volume</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  <h2 class="h3">Every database. The next file, too.</h2>
  <p>Bulk insert is not a SQL Server trick. Native bulk where the engine has it, ODBC and OLEDB when you need a generic path. When the partner sends Excel or JSON instead, the pattern stays.</p>
  <p class="experts-kicker mb-3">Databases</p>
  {{< connector-logos databases >}}
  <p class="experts-kicker mb-3 mt-4">Files and formats</p>
  {{< connector-logos files >}}
  <p class="mb-0 mt-3"><a href="/docs/relational-databases/overview/">Database connectors</a> · <a href="/docs/streaming-connectors/overview/">Streaming connectors</a></p>
</section>

<section class="mb-4">
  <h2>Used in production</h2>
  <p>Commonwealth Bank of Australia, Deloitte, Health Catalyst, SEW Eurodrive, Calpine, FASTEC. Nightly file loads that do not fit in memory are why the library exists.</p>
</section>

<div class="experts-poc text-white mb-5">
  <p class="experts-kicker mb-2">Try the load</p>
  <h2 class="h3 mb-3">CSV in. Table loaded.</h2>
  <p class="mb-4">A trial key unlocks the full library. NuGet without a key is limited to 5,000 rows per data flow.</p>
  <a class="btn btn-light rounded-pill me-2 mb-2" href="/product/getting-started/get-trial/">Get a free trial key</a>
  <a class="btn btn-outline-light rounded-pill mb-2" href="/recipes/etl/across-files-databases/">See the recipe</a>
</div>

<div class="mb-5 pb-5">
{{< reference-logos >}}
</div>
