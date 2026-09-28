---
title: "Getting Started"
description: "Install CloneBox from NuGet and start deep-cloning .NET object graphs with CloneX() and CloneXTo(). Free MIT license from the makers of ETLBox."
lead: "<b>CloneBox</b> deep-clones any .NET object graph. Add the NuGet package, call <code>CloneX()</code> or <code>CloneXTo()</code> — no license key, no setup beyond that."
draft: false
images: []
menu:
  docs:
    parent: "guide"
weight: 10
toc: true
---

## Install

```bash
dotnet add package CloneBox
```

```xml
<PackageReference Include="CloneBox" Version="*" />
```

Targets: **netstandard2.0**, **net47**, **net48**, **net10.0**.

## Your first clone

```csharp
using CloneBox;

public class Address {
    public string City { get; set; }
}

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public Address Address { get; set; }
}

var customer = new Customer {
    Id = 1,
    Name = "Ada",
    Address = new Address { City = "Berlin" }
};

var copy = customer.CloneX();
// copy is a new Customer; copy.Address is a new Address too
```

That is a real deep clone: nested objects, collections, arrays, dictionaries, and cycles. The copy does not share identity with the source.

## Or clone into another object

```csharp
public class CustomerDto {
    public int Id { get; set; }
    public string Name { get; set; }
    public Address Address { get; set; }
    public string ExtraOnTarget { get; set; }
}

var dto = new CustomerDto { ExtraOnTarget = "keep-me" };
customer.CloneXTo(dto);
// dto.Id / Name / Address filled; ExtraOnTarget still "keep-me"
```

Matching members are copied. Members that exist only on the target stay unchanged. `[DoNotClone]` on the destination is honored.

## What CloneBox handles

- Object graphs with **self-references and cycles** — no stack overflow
- **Lists, arrays** (multi-dimensional and non-zero-based) and **dictionaries** with their runtime key types
- **`ExpandoObject` / `DynamicObject`**, including graphs that mix expandos and real classes
- Inheritance, structs, built-in types, nested collections

Covered by **280+ xUnit tests** on **net10.0, net48, and net47**.

## From the makers of ETLBox

CloneBox is built and maintained by **[ETLBoxperts GmbH](https://www.etlbox.net)**, the company behind **ETLBox**. We needed a cloner our own data flows could rely on — so we built one and released it under the **MIT license**.

## What’s next?

- [Deep clone](/docs/guide/deep-clone/) — `CloneX()` in detail
- [Clone into](/docs/guide/clone-into/) — `CloneXTo()` for DTOs, Expando, and existing instances
- [Skip members](/docs/guide/skip-members/) — `[DoNotClone]` and predicates
- [Settings](/docs/guide/settings/) — visibility, `ICloneable`, logging
- [Benchmarks](/docs/guide/benchmarks/) — how CloneBox compares
