---
title: "Deep Clone"
description: "Deep-clone any .NET object with CloneX(). Nested objects, collections, arrays, dictionaries, and cycles — without shared identity."
lead: "<code>CloneX()</code> returns a full deep copy of the source. Nested references are cloned; cycles are tracked so you do not get a stack overflow."
draft: false
images: []
menu:
  docs:
    parent: "guide"
weight: 20
toc: true
---

## Basic usage

```csharp
using CloneBox;

var customer = new Customer {
    Id = 1,
    Name = "Ada",
    Address = new Address { City = "Berlin" }
};

var copy = customer.CloneX();
```

Or with explicit settings:

```csharp
var copy = customer.CloneX(new CloneSettings {
    IncludeNonPublicFields = false,
    IncludeNonPublicProperties = false
});
```

## What is copied

By default CloneBox copies public and non-public properties and fields, and will use non-public constructors when needed:

- Nested objects and inheritance hierarchies
- Lists and arrays (including multi-dimensional and non-zero-based)
- Dictionaries with their runtime key types
- Structs and built-in types
- Graphs with **self-references and cycles**

The result is a new graph. Mutating `copy` does not change `customer`, and nested objects are not shared.

## Cycles

CloneBox tracks objects it has already cloned. If `A` points to `B` and `B` points back to `A`, the clone preserves that shape instead of recursing forever.

```csharp
var root = new Node();
root.Self = root;

var clone = root.CloneX();
// clone is a new instance; clone.Self == clone
```

## Optional settings

Pass a [`CloneSettings`](/docs/guide/settings/) instance to control visibility, `ICloneable`, skip predicates, and logging. Defaults are intentionally broad so a typical deep clone “just works”.
