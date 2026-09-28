---
title: "Clone Into"
description: "CloneXTo() copies matching members onto another type or an existing instance. Extra target fields stay unchanged; DoNotClone on the destination is honored."
lead: "<code>CloneXTo()</code> copies matching members onto a different type or onto an instance you already have — including ExpandoObject graphs."
draft: false
images: []
menu:
  docs:
    parent: "guide"
weight: 30
toc: true
---

## Same idea, different destination

`CloneX()` always creates a new instance of the same type. `CloneXTo()` fills a **target** you choose: another type, or an existing object.

```csharp
source.CloneXTo(target);
```

What happens:

1. **Matching members** are copied by name (deep for reference types).
2. **Extra fields on the destination** are left alone.
3. **`[DoNotClone]` on the destination** keeps the target’s current value.

## Example: POCO → DTO

```csharp
public class Address {
    public string City { get; set; }
}

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Password { get; set; }
    public Address Address { get; set; }
}

public class CustomerDto {
    public int Id { get; set; }
    public string Name { get; set; }
    [DoNotClone] public string Password { get; set; }
    public Address Address { get; set; }
    public string ExtraOnTarget { get; set; }
}

var source = new Customer {
    Id = 1,
    Name = "Ada",
    Password = "secret",
    Address = new Address { City = "Berlin" }
};

var target = new CustomerDto {
    Password = "already-set",
    ExtraOnTarget = "keep-me"
};

source.CloneXTo(target);
// target.Id == 1, target.Name == "Ada"
// target.Address is a deep copy (not the same instance)
// target.Password == "already-set"
// target.ExtraOnTarget == "keep-me"
```

## ExpandoObject → existing DTO

```csharp
dynamic expando = new ExpandoObject();
expando.Id = 1;
expando.Name = "Ada";
expando.Password = "secret";

var dto = new CustomerDto { Password = "already-set", ExtraOnTarget = "keep-me" };

((ExpandoObject)expando).CloneXTo(dto);
```

## POCO → ExpandoObject

```csharp
var customer = new Customer {
    Id = 1,
    Name = "Ada",
    Address = new Address { City = "Berlin" }
};

var expando = new ExpandoObject();
customer.CloneXTo(expando);
```

## Collections

Overlapping items are copied; the target keeps its own length and capacity:

```csharp
var sourceList = new List<int> { 1, 2, 3 };
var targetArray = new int[2];

sourceList.CloneXTo(targetArray);
// targetArray is { 1, 2 }
```

## Dynamic caveat

C# cannot dispatch extension methods on a `dynamic` variable. Keep the expando in an `ExpandoObject` variable (or cast it), or call `CloneXExtensions.CloneXTo(source, target)` directly.
