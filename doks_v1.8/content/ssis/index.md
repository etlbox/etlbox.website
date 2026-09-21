---
title: "A C# replacement for SSIS"
description: "Replace SSIS with code-first C# data flows. ETLBox keeps Control Flow, Data Flow, and streaming bulk loads — without a designer."
lead: "SSIS is still fast. It is no longer where Microsoft invests. ETLBox keeps the Control Flow / Data Flow split you already know — as C# you can diff, test, and ship in CI."
kicker: "A code-first path off SQL Server Integration Services"
layout: landing-funnel
draft: false
toc: false
hideAiButtons: true
---

<p class="mb-5">A lot of production ETL still lives in SSIS because the engine is fast and operators know how to restart a package. New product energy sits in Azure Data Factory, Synapse, and Fabric. The expensive moment is the one where a cloud move or a hiring constraint forces the question, and the only packages you have are designer canvases. ETLBox is the code-first way out — not another designer.</p>

<section class="mb-5">
  {{< brand-mark "SS" "SSIS" "#a12100" >}}
  <h2 class="h3 mt-2">Same mental model. Different medium.</h2>
  <p>Control Flow is everything around the stream: create tables, truncate staging, run SQL, write counts. Data Flow is source → transform → destination, with a second path for rows that should not land. In ETLBox that is <code>SqlTask</code> around a linked network of components, started with <code>Network.Execute</code>. The toolbox jobs stay. The package becomes C#.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>ETLBox</span>
      </div>
      <h3>The package is code</h3>
      <ul>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Git diffs you can review</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Unit tests and CI/CD</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Streaming engine and bulk loads</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Lookup, split, merge join, multicast</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Runs anywhere .NET runs</li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "SS" "SSIS" "#a12100" >}}
      <h3>The package is a canvas</h3>
      <ul>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> A <code>.dtsx</code> diff is XML, not a reviewable patch</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Script Components nobody runs in a test</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Fast engine, stalled product</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> One extra Lookup rearranges the canvas</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Tied to SQL Server / Integration Runtime</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  {{< brand-mark "AF" "ADF" "#0078d4" >}}
  <h2 class="h3 mt-2">ADF is the official successor. It is not the better designer.</h2>
  <p>For cloud-native, mostly linear pipelines, Azure Data Factory is a reasonable default. That is not the shape of most long-lived SSIS estates. Those packages are dense: Execute SQL around a Data Flow, lookups with no-match outputs, row redirection, Script Components because the toolbox cannot express the rule. Mapping Data Flows make that awkward. The SSIS Integration Runtime is a bridge so existing packages can keep running in Azure. It is not a destination.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>ETLBox</span>
      </div>
      <h3>Leave the designer</h3>
      <ul>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> C#, not a second expression language</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> The same Control Flow / Data Flow split</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Range lookups the SSIS toolbox cannot do</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> Debug in Visual Studio or Rider</li>
        <li><i class="bi-check-circle-fill compare-yes" aria-hidden="true"></i> On-prem, cloud, or a container — your call</li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "AF" "ADF" "#0078d4" >}}
      <h3>Swap one canvas for another</h3>
      <ul>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Heavier UI, slower debugging</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Still a canvas as the unit of reuse</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Awkward for lookup-heavy SSIS work</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Integration Runtime is a holding pattern</li>
        <li><i class="bi-x-circle-fill compare-no" aria-hidden="true"></i> Does not fix Git, tests, or maintainability</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  <h2 class="h3">Why AI actually helps here</h2>
  <p>A <code>.dtsx</code> package is a designer canvas serialized as XML. AI is weak at that. It is strong at C#. Once the flow is code, you can ask a model to draft a lookup, add a test, or review a PR — and you can still compile the result. That is the practical reason a code-first migration moves faster than redrawing the same package in ADF: the work is text a model can hold on to.</p>
  <p class="mb-0">This is not an automated <code>.dtsx</code> importer. You rewrite the package in C# with the same components. AI is useful because that rewrite is code, not because a wizard hides the designer.</p>
</section>

<section class="mb-5">
  <h2 class="h3">SSIS toolbox → ETLBox</h2>
  <p>The components production packages actually spend time in. Not every SSIS item (Fuzzy Lookup, DQS, the SCD wizard) has a one-click twin.</p>
  <div class="table-responsive">
  <table class="table align-top">
    <thead>
      <tr>
        <th scope="col">SSIS</th>
        <th scope="col">ETLBox</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="text-start">Execute SQL / Truncate Table</th>
        <td><code>SqlTask</code>, <code>TruncateTableTask</code></td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Flat File Source</th>
        <td><code>CsvSource</code></td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Derived Column / Script Component</th>
        <td><code>RowTransformation</code></td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Lookup</th>
        <td><code>LookupTransformation</code></td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Conditional Split</th>
        <td><code>LinkTo(..., predicate)</code> or <code>ConditionalSplit</code></td>
      </tr>
      <tr>
        <th scope="row" class="text-start">OLE DB Destination</th>
        <td><code>DbDestination</code></td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Error output</th>
        <td>a second <code>LinkTo</code> predicate, or <code>LinkErrorTo</code></td>
      </tr>
      <tr>
        <th scope="row" class="text-start">ForEach File</th>
        <td>a C# <code>foreach</code> over files, or <code>HasNextUri</code> on a source</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Aggregate / Sort / Pivot / Merge Join / Multicast</th>
        <td><code>Aggregation</code>, <code>Sort</code>, <code>Pivot</code>, <code>MergeJoin</code>, <code>Multicast</code></td>
      </tr>
    </tbody>
  </table>
  </div>
  <p class="mb-0">A full Control Flow and Data Flow — partner CSV, customer lookup, range lookup the SSIS Lookup transform cannot do, staging merge, error file — is in the walkthrough: <a href="/blog/leaving-ssis/">Replacing SSIS with a C# data flow</a>.</p>
</section>

<section class="mb-4">
  <h2>Used in production — not as a weekend project</h2>
  <p>Commonwealth Bank of Australia, Deloitte, Health Catalyst, SEW Eurodrive, Calpine, FASTEC. Teams run ETLBox because a nightly load has to survive the next decade of package changes, not the next designer.</p>
</section>

<div class="experts-poc text-white mb-5">
  <p class="experts-kicker mb-2">Evaluate the code-first path</p>
  <h2 class="h3 mb-3">Keep the engine. Drop the canvas.</h2>
  <p class="mb-4">A trial key unlocks the full library. NuGet without a key is limited to 5,000 rows per data flow. If you want the packages rewritten with you, the people who built ETLBox take that work.</p>
  <a class="btn btn-light rounded-pill me-2 mb-2" href="/product/getting-started/get-trial/">Get a free trial key</a>
  <a class="btn btn-outline-light rounded-pill me-2 mb-2" href="/blog/leaving-ssis/">Read the walkthrough</a>
  <a class="btn btn-outline-light rounded-pill mb-2" href="/consulting/">Need us to migrate it?</a>
</div>

<div class="mb-5 pb-5">
{{< reference-logos >}}
</div>
