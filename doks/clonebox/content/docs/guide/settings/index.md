---
title: "Settings"
description: "Configure CloneBox with CloneSettings: public and non-public members, constructors, ICloneable, skip predicates, and Microsoft.Extensions.Logging."
lead: "Defaults copy public and non-public properties and fields, and will use non-public constructors when needed. Override what you need via <code>CloneSettings</code>."
draft: false
images: []
menu:
  docs:
    parent: "guide"
weight: 50
toc: true
---

## Passing settings

```csharp
var clone = source.CloneX(new CloneSettings {
    IncludeNonPublicFields = false,
    IncludeNonPublicProperties = false,
    UseICloneableClone = true,
    Logger = logger   // Microsoft.Extensions.Logging
});
```

The same object works with `CloneXTo()`:

```csharp
source.CloneXTo(target, settings);
```

## Visibility

| Setting | Default | Meaning |
| --- | :---: | --- |
| `IncludePublicProperties` | `true` | Copy public properties |
| `IncludeNonPublicProperties` | `true` | Copy non-public properties |
| `IncludePublicFields` | `true` | Copy public fields |
| `IncludeNonPublicFields` | `true` | Copy non-public fields |
| `IncludePublicConstructors` | `true` | Allow public constructors when creating instances |
| `IncludeNonPublicConstructors` | `true` | Allow non-public constructors when needed |

## ICloneable

`ICloneable` is **ignored** unless you opt in:

```csharp
UseICloneableClone = true
```

When enabled, CloneBox may call `ICloneable.Clone()` for types that implement it.

## Skip predicates

See [Skip members](/docs/guide/skip-members/) for `DoNotCloneProperty`, `DoNotCloneField`, and `DoNotCloneClass`.

## Logging

Set `Logger` to an `ILogger` from Microsoft.Extensions.Logging if you want diagnostics while cloning.
