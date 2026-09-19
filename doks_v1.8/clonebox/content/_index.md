---
title: "CloneBox"
description: "CloneBox deep-clones any .NET object graph. Clone into another type or an existing instance. Free MIT library from ETLBox."
lead: "Deep-clone any .NET object — or copy into another. Super easy, very fast, and it just works across the graphs you actually use. Free and open source from the makers of <a href=\"https://www.etlbox.net\">ETLBox</a>."
draft: false
images: []
---

## Why another cloner?

Flat POCOs are easy. Real graphs are not.

Cycles blow the stack. `ExpandoObject` comes back sharing nested instances. Dictionaries lose their key types. Mappers and JSON round-trips were never cloners — they just look like one until you check the result.

**CloneBox is built for the hard cases**, with an API that stays tiny: `CloneX()` for a deep copy, `CloneXTo()` for copying into a target.

```csharp
using CloneBox;

var customer = new Customer {
    Id = 1,
    Name = "Ada",
    Address = new Address { City = "Berlin" }
};

var copy = customer.CloneX();
// copy is a new Customer; Address is a new instance too
```

## Or clone into another object

`CloneXTo()` copies matching members onto a **different type** or onto an **instance you already have**. Extra fields on the target stay unchanged.

```csharp
var source = new Customer {
    Id = 1,
    Name = "Ada",
    Address = new Address { City = "Berlin" }
};

var dto = new CustomerDto { ExtraOnTarget = "keep-me" };

source.CloneXTo(dto);
// dto.Id / Name / Address filled; ExtraOnTarget still "keep-me"
```

Install from NuGet and you are done — no license key, no trial, no setup beyond the package reference.
