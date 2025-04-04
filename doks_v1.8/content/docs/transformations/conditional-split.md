---
title: "Conditional Split"
description: "Split your data flow based on conditions, routing matching and non-matching rows to separate outputs."
lead: "The ConditionalSplit transformation evaluates each incoming row against a predicate. If the condition is met, the row is routed to the main output; otherwise, it can be sent to a secondary path. This component is useful for branching logic in data flows, allowing clean separation of matching and non-matching records."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 524
toc: true
chatgpt-review: true
---

## Overview

The `ConditionalSplit` transformation allows you to route rows into different outputs based on a condition. If a row matches the provided predicate, it is sent to the primary output; otherwise, it can be routed to an alternate output. This is useful for separating data into different processing paths.

### Buffering
- **Input Buffer**: Buffers incoming rows before evaluation.
- **Primary Output Buffer**: Stores rows matching the predicate.
- **Secondary Output Buffer**: (optional) Stores rows that do not match.
- The transformation is non-blocking and processes each row as it arrives.

## Example: Conditional Routing

```csharp
var split = new ConditionalSplit<MyRow>();
split.MatchPredicate = row => row.Col1 >= 3;
source.LinkTo(split);
split.LinkTo(dest);                   // Rows with Col1 >= 3
split.LinkUnmatchedTo(unmatched);    // Rows with Col1 < 3
```

You can track how many rows were routed to each output using the following properties:

- `MatchCount`: The number of rows that satisfied the predicate and were sent to the main output via `LinkTo`.
- `UnmatchedCount`: The number of rows that did **not** satisfy the predicate and were sent to the alternate output via `LinkUnmatchedTo`.

These counters are updated automatically during execution and can be used for monitoring or validation purposes after the data flow completes.

## Working with Dynamic Objects

Use the non-generic version with dynamic data:

```csharp
var split = new ConditionalSplit();
split.MatchPredicate = row => ((dynamic)row).Col1 >= 3;

source.LinkTo(split);
split.LinkTo(dest);
split.LinkUnmatchedTo(unmatchedDest);
```

