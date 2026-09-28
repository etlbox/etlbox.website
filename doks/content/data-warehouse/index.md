---
title: "A data warehouse in C#"
description: "Build a star schema in C# with ETLBox: dimensions, SCD Type 1 and 2, incremental facts. No designer — Git, tests, and CI."
lead: "Star schema, slowly changing dimensions, incremental facts — as code you can test. Not a second BI canvas."
kicker: "Data warehousing without a designer"
layout: landing-funnel
draft: false
toc: false
hideAiButtons: true
---

<p class="mb-5">A warehouse is dimensions around facts, history you can explain, and loads that run again without doubling the grain. SSIS and ADF will draw that on a canvas. ETLBox writes it in C#: <code>CreateTableTask</code> for the schema, lookups for the surrogate keys, <code>DbMerge</code> for Type 1, new rows for Type 2, incremental facts from the last loaded date.</p>

<section class="mb-5">
  <h2 class="h3">Same warehouse. Different medium.</h2>
  <p>The star schema does not care about the tool. The expensive part is changing a dimension six months later when the only artifact is a package nobody wants to reopen. In ETLBox the load is a network you can unit-test and put in CI.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>ETLBox</span>
      </div>
      <h3>The load is C#</h3>
      <ul>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Star schema as tables you create in code</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> SCD Type 1 (overwrite) and Type 2 (history)</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Incremental facts from the last load date</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Date dimension, surrogate keys, lookups</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Tests and CI like the rest of the repo</li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "UI" "Designer DWH" "#6c757d" >}}
      <h3>The load is a package</h3>
      <ul>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> SCD wizard, then a Script Component</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Incremental logic buried in expressions</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> A <code>.dtsx</code> or ADF canvas as the source of truth</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Hard to test before the nightly run</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Changing a grain means rearranging boxes</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  <h2 class="h3">What the walkthrough actually builds</h2>
  <p>Not a methodology slide. A SQL Server star schema — customers, dates, orders — loaded from OLTP with ETLBox. The full C# is in the article and on GitHub.</p>
  <article class="d-flex align-items-center gap-4 py-4 border-bottom">
    <div class="experts-service-mark" aria-hidden="true"><i class="bi bi-table"></i></div>
    <div>
      <h3 class="h5 mb-1">Star schema</h3>
      <p class="mb-0">Fact table in the middle, dimensions around it. Surrogate IDs via <code>IDENTITY</code> (or <code>SERIAL</code> / <code>AUTO_INCREMENT</code> on other databases).</p>
    </div>
  </article>
  <article class="d-flex align-items-center gap-4 py-4 border-bottom">
    <div class="experts-service-mark" aria-hidden="true"><i class="bi bi-arrow-repeat"></i></div>
    <div>
      <h3 class="h5 mb-1">SCD Type 1 and Type 2</h3>
      <p class="mb-0">Overwrite when history does not matter. Insert a new version with valid-from / valid-to when it does.</p>
    </div>
  </article>
  <article class="d-flex align-items-center gap-4 py-4 border-bottom">
    <div class="experts-service-mark" aria-hidden="true"><i class="bi bi-calendar3"></i></div>
    <div>
      <h3 class="h5 mb-1">Date dimension</h3>
      <p class="mb-0">A consistent time grain for every fact — days, weeks, fiscal periods — not a <code>GETDATE()</code> in the query.</p>
    </div>
  </article>
  <article class="d-flex align-items-center gap-4 py-4">
    <div class="experts-service-mark" aria-hidden="true"><i class="bi bi-plus-slash-minus"></i></div>
    <div>
      <h3 class="h5 mb-1">Incremental facts</h3>
      <p class="mb-0">Read the last loaded date, pull what changed, land it. A full reload is a last resort.</p>
    </div>
  </article>
  <p class="mt-4 mb-0">The complete load — including error handling — is <a href="/blog/building-dwh/">Building a Data Warehouse with ETLBox</a>. Demo repo: StarSchema in <code>etlbox.demo</code>.</p>
</section>

<section class="mb-4">
  <h2>Used in production</h2>
  <p>Commonwealth Bank of Australia, Deloitte, Health Catalyst, SEW Eurodrive, Calpine, FASTEC. Warehouses that have to survive the next dimension change, not the next designer.</p>
</section>

<div class="experts-poc text-white mb-5">
  <p class="experts-kicker mb-2">Build the star in C#</p>
  <h2 class="h3 mb-3">Dimensions, facts, tests.</h2>
  <p class="mb-4">A trial key unlocks the full library. NuGet without a key is limited to 5,000 rows per data flow. Coming off SSIS for the warehouse? That path is documented too.</p>
  <a class="btn btn-light rounded-pill me-2 mb-2" href="/product/getting-started/get-trial/">Get a free trial key</a>
  <a class="btn btn-outline-light rounded-pill me-2 mb-2" href="/blog/building-dwh/">Read the walkthrough</a>
  <a class="btn btn-outline-light rounded-pill mb-2" href="/ssis/">A C# replacement for SSIS</a>
</div>

<div class="mb-5 pb-5">
{{< reference-logos >}}
</div>
