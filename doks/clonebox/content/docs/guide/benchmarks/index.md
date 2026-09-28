---
title: "Benchmarks"
description: "CloneBox vs DeepCloner, FastDeepCloner, and mappers: cycles, ExpandoObject, and clone-into — only CloneBox gets all four right."
lead: "CloneBox is the only library in the suite that gets every graph right — including cloning into an object you already have."
draft: false
images: []
menu:
  docs:
    parent: "guide"
weight: 60
toc: true
---

## How we measure

`CloneBox.Benchmark` compares CloneBox with widely used clone libraries (DeepCloner, FastDeepCloner, CloneExtensions, AnyClone) and, as contrast, Mapster, AutoMapper, and a Newtonsoft.Json round-trip. Each (library × scenario) runs in an **isolated process** so a stack overflow cannot take down the suite.

Four graphs:

| # | Scenario | What it checks |
|---|----------|----------------|
| 1 | **simple** | Typed POCO, primitives, list, nested child · 1,000,000 clones |
| 2 | **cyclic** | 301 children in List/Array/Dictionary (int keys), `byte[]`, `SelfReference` · 400 clones |
| 3 | **dynamic** | `ExpandoObject` as root: typed class, nested Expando, Parent/Self cycles · 300,000 clones |
| 4 | **into** | Expando → **existing** DTO: matching members, keep extra target fields, skip `[DoNotClone]` · 200,000 runs |

## Representative results

Release / net10.0 (times vary by machine):

| Library | simple | cyclic | dynamic | into | |
|---------|-------:|-------:|--------:|-----:|--:|
| **CloneBox** | 0.35 µs | 0.33 ms | 1.92 µs | **0.91 µs** | **4/4** |
| DeepCloner | 0.20 µs | 0.37 ms | 1.18 µs | — | 3/4 |
| FastDeepCloner | 2.76 µs | — | — | — | 1/4 |
| CloneExtensions | 0.17 µs | — | — | — | 1/4 |
| AnyClone | 3.40 µs | — | — | — | 1/4 |
| Mapster | 0.36 µs | — | — | — | 1/4 |
| AutoMapper | 0.16 µs | — | — | — | 1/4 |
| Newtonsoft.Json | 2.31 µs | — | — | — | 1/4 |

A time is only listed when the result passed the checks — `—` means the copy was wrong or the process crashed.

Reproduce with:

```bash
dotnet run --project CloneBox.Benchmark -c Release
```

## Takeaway

DeepCloner is a solid same-type cloner and wins on simple graphs. Mappers and serializers were never meant to be cloners. CloneBox is the one that is correct on cycles, on dynamic objects, **and** on clone-into.

Full write-up: [GitHub README](https://github.com/etlbox/clonebox#benchmarks).
