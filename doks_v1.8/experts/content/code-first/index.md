---
title: "Code first"
description: "We write ETL as testable C#. TDD on the pipeline, not a black-box tool — from the people who built ETLBox itself."
lead: "Integration you can compile, test, and own — because we write it as code."
draft: false
toc: false
---

Most integration tools hide the work behind a canvas. That is fine until a rule is awkward, a source lies, or someone has to change the job six months later.

We work **code-first**. The pipeline is C# on .NET. You can read it, diff it, and run it in the same CI you already trust. We bring [ETLBox](https://www.etlbox.net) — the library we built — so we do not start from an empty `HttpClient` and a pile of `SqlCommand`s.

## Why testable ETL is a better result

If the flow is code, it can have **tests**. We do not wait for a nightly run to learn that a null in column 14 broke the load.

We use **TDD**: write the test for the rule, watch it fail, then write the transform. A new discount, a late invoice, a renamed API field — they show up as a red test before they show up in finance.

That is not ceremony. It is how we keep incremental loads **idempotent**, how we prove a merge does not double-count, and how your team can change the flow later without a war room.

A typical example: “net amount is gross minus discount, unless the currency is not EUR, in which case convert first.” That is a unit test, not a workshop. The destination table is an integration test. Production should not be the first place the rule runs.

## We built the tools we use

ETLBox exists because we needed a .NET library that could pull from databases and APIs, transform in memory, and load hard — without becoming a product you have to rent. We still maintain it. Customer projects are where the library stays honest.

When we take a project, we do not learn your stack from a certification. We bring the same connectors, the same patterns, and the same bias for code you can own.

## A simple map of the work

Most “data projects” are the same four moves, named differently:

1. **Sources** — ERPs, CRMs, files, SaaS APIs, the database nobody wants to touch.
2. **Integration** — extract, clean, join, keep history, reject what is wrong.
3. **Store** — warehouse, lake, or vault, depending on how you query and how often the model changes.
4. **Consumers** — reports, other APIs, an ops UI, the next service in the chain.

We will tell you which of those you actually need. Not every integration deserves a warehouse. Not every warehouse needs a lake. The map keeps the conversation on data, not on product names.

## What “good” looks like

- **Incremental, not full reloads** — unless the source is tiny and the night is long.
- **Idempotent loads** — run it twice, get the same table.
- **Observable jobs** — you can see what ran, what failed, and which row caused it.
- **Ownership** — the repo is yours; we are not a runtime you cannot leave.

## Who you work with

We are a small team of **three** in Berlin — a real company (ETLBoxperts GmbH), not a freelance slide. We take the work ourselves. If the project needs more hands, we bring in additional developers we already know. You will not get a rotating bench of strangers, and you will not get a one-person bottleneck.

[Tell us what should move](/contact/).
