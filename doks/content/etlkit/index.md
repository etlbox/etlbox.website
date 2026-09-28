---
title: "ETLKit vs ETLBox"
description: "ETLKit continues the last open-source 1.x line of ETLBox. Matching APIs do not mean the same product. Also compared: ETL.NET and actionETL."
lead: "This page compares ETLBox with three open-source .NET ETL libraries you may have found while searching: ETLKit, ETL.NET, and actionETL. ETLBox is the commercial product. The others are not."
kicker: "A comparison of .NET ETL libraries"
layout: landing-funnel
draft: false
toc: false
exclude_search: true
hideAiButtons: true
sitemap_exclude: true
---

<p class="mb-5">If you landed here from ETLKit, or from a list of C# ETL libraries, the question is the same: what is the difference, and which one can you run in production? Below, ETLBox is compared with each project on its own, then all four sit in one matrix.</p>

<section class="mb-5">
  {{< brand-mark "EK" "ETLKit" "#da541b" >}}
  <h2 class="h3 mt-2">The library that looks like ETLBox</h2>
  <p>ETLBox used to be MIT open source, around 2018–2020. ETLKit continues that <strong>1.x</strong> line — previously published as EtlBox.Classic, then renamed. ETLKit states the 2.0 rename is a package and namespace change, <strong>not a redesign</strong>: the public API stays the 1.x surface. Matching class names is the leftover of a shared starting point, not six years of product work.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>ETLBox</span>
      </div>
      <h3>The product since 1.x</h3>
      <ul>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Streaming engine hardened after the closed-source cut</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Thousands of automated tests</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Vendor support, trial, commercial licenses</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Named companies in production</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Paying customers fund the next year</li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "EK" "ETLKit" "#6538b2" >}}
      <h3>The 1.x continuation</h3>
      <ul>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Same generation as the old 1.x engine</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Community tests, not a product test suite</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Maintainer and GitHub, not a vendor</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> No comparable public enterprise references</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Stalls when the author stops</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  {{< brand-mark "EN" "ETL.NET" "#6538b2" >}}
  <h2 class="h3 mt-2">A different model, not a fork</h2>
  <p>ETL.NET never shared the ETLBox codebase. It is a Linq-style, reactive pipeline library. The maintainer has publicly asked for help with documentation and tests, and reported that unit tests were largely dropped in v2. Occasional releases do not make it a supported product.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>ETLBox</span>
      </div>
      <h3>A library you can buy support for</h3>
      <ul>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Component data-flow model teams already know</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Thousands of automated tests</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Docs, recipes, and a support channel</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Used in production at named companies</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> A vendor that answers when something breaks</li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "EN" "ETL.NET" "#da541b" >}}
      <h3>A community experiment</h3>
      <ul>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Different programming model (Linq / reactive)</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Author reports tests were dropped in v2</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Maintainer publicly asking for contributors</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Community scale, not enterprise references</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Stalls if the maintainer moves on</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  {{< brand-mark "aE" "actionETL" "#555c6d" >}}
  <h2 class="h3 mt-2">A stalled worker-style library</h2>
  <p>actionETL is another separate open-source .NET ETL experiment, built around workers rather than a data-flow network. The last NuGet package is from January 2024. There has been no meaningful product movement since then.</p>
  <div class="experts-compare">
    <div class="experts-compare-col compare-box">
      <div class="brand-mark d-inline-flex align-items-center gap-2 fw-bold lh-sm">
        <img src="/logos/svg/logo_etlbox_32x32.svg" alt="" width="32" height="32">
        <span>ETLBox</span>
      </div>
      <h3>Still shipping</h3>
      <ul>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Actively maintained commercial engine</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Thousands of automated tests</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Trial, licenses, and vendor support</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> Named production customers</li>
        <li><i class="bi bi-check-circle-fill compare-yes" aria-hidden="true"></i> A roadmap funded by customers</li>
      </ul>
    </div>
    <div class="experts-compare-vs" aria-hidden="true">vs</div>
    <div class="experts-compare-col compare-box">
      {{< brand-mark "aE" "actionETL" "#555c6d" >}}
      <h3>No longer moving</h3>
      <ul>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Different worker-style model</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> No commercial test story</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Last package: January 2024</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Community scale</li>
        <li><i class="bi bi-x-circle-fill compare-no" aria-hidden="true"></i> Already stalled</li>
      </ul>
    </div>
  </div>
</section>

<section class="mb-5">
  <h2 class="h3">All four at a glance</h2>
  <p>The same criteria, one table. Green means ETLBox covers it as a product. Red means the open-source project does not.</p>
  <div class="table-responsive">
  <table class="table align-top text-center compare-matrix">
    <thead>
      <tr>
        <th scope="col" class="text-nowrap"></th>
        <th scope="col" class="text-nowrap bg-primary-subtle">ETLBox</th>
        <th scope="col" class="text-nowrap">ETLKit</th>
        <th scope="col" class="text-nowrap">ETL.NET</th>
        <th scope="col" class="text-nowrap">actionETL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="text-start">Product engine</th>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "Hardened streaming data flow" >}}</td>
        <td class="py-3">{{< compare-cell no "Same generation as old 1.x" >}}</td>
        <td class="py-3">{{< compare-cell no "Linq model; tests dropped in v2" >}}</td>
        <td class="py-3">{{< compare-cell no "Last NuGet release in 2024" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Automated tests</th>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "Thousands of tests" >}}</td>
        <td class="py-3">{{< compare-cell no "Community tests" >}}</td>
        <td class="py-3">{{< compare-cell no "Author asked for help restoring them" >}}</td>
        <td class="py-3">{{< compare-cell no "No commercial test story" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Vendor support</th>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "Support, trial, licenses" >}}</td>
        <td class="py-3">{{< compare-cell no "Maintainer / community" >}}</td>
        <td class="py-3">{{< compare-cell no "Maintainer asking for contributors" >}}</td>
        <td class="py-3">{{< compare-cell no "Effectively stalled" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">Production proof</th>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "Banks, energy, healthcare, manufacturing" >}}</td>
        <td class="py-3">{{< compare-cell no "No comparable public references" >}}</td>
        <td class="py-3">{{< compare-cell no "Community scale" >}}</td>
        <td class="py-3">{{< compare-cell no "Community scale" >}}</td>
      </tr>
      <tr>
        <th scope="row" class="text-start">If the author stops</th>
        <td class="bg-primary-subtle py-3">{{< compare-cell yes "Customers fund ongoing development" >}}</td>
        <td class="py-3">{{< compare-cell no "The project stalls" >}}</td>
        <td class="py-3">{{< compare-cell no "The project stalls" >}}</td>
        <td class="py-3">{{< compare-cell no "Already stalled" >}}</td>
      </tr>
    </tbody>
  </table>
  </div>
</section>

<section class="mb-4">
  <h2>Used in production — not as a weekend project</h2>
  <p>Commonwealth Bank of Australia, Deloitte, Health Catalyst, SEW Eurodrive, Calpine, FASTEC: these are not GitHub stars. They run ETLBox because a nightly load cannot depend on a maintainer’s spare time. That is what a commercial license actually buys — a library that already survived production.</p>
</section>

<div class="experts-poc text-white mb-5">
  <p class="experts-kicker mb-2">Evaluate ETLBox</p>
  <h2 class="h3 mb-3">Try the commercial library, not the 1.x lookalike</h2>
  <p class="mb-4">If the API looks familiar, that is expected — ETLKit froze the old surface. A trial key unlocks the product that was built after that. NuGet without a key is limited to 5,000 rows per data flow.</p>
  <a class="btn btn-light rounded-pill me-2 mb-2" href="/product/getting-started/get-trial/">Get a free trial key</a>
  <a class="btn btn-outline-light rounded-pill me-2 mb-2" href="/pricing/">See pricing</a>
  <a class="btn btn-outline-light rounded-pill mb-2" href="/support/options/">Talk to us</a>
</div>

<div class="mb-5 pb-5">
{{< reference-logos >}}
</div>
