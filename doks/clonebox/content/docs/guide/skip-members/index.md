---
title: "Skip Members"
description: "Skip properties, fields, or whole classes when cloning with CloneBox. Use the DoNotClone attribute or predicates on CloneSettings."
lead: "Mark members with <code>[DoNotClone]</code>, or use predicates when you cannot change the type."
draft: false
images: []
menu:
  docs:
    parent: "guide"
weight: 40
toc: true
---

## Attribute

By default CloneBox copies every property and field it is allowed to see. Mark a member or a whole class with `[DoNotClone]` to leave it out:

- On `CloneX()` the member stays at its default on the clone.
- On `CloneXTo()` the destination keeps its current value.

```csharp
public class User {
    public string Name { get; set; }
    [DoNotClone] public string Password { get; set; }
}

var clone = user.CloneX();
// clone.Name == user.Name, clone.Password == null
```

You can also put `[DoNotClone]` on a class so instances of that type are not cloned as nested objects.

## Predicates

When you cannot change the type — a third-party class, or a rule that spans many members — use predicates on `CloneSettings`:

```csharp
var clone = source.CloneX(new CloneSettings {
    DoNotCloneProperty = p => p.Name == "Password" || p.Name == "Token",
    DoNotCloneField    = f => f.Name.StartsWith("_cache"),
    DoNotCloneClass    = t => t == typeof(Logger)
});
```

Attributes and predicates are combined: a member is skipped if either applies.
