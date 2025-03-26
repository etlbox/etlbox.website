---
title: "Overview"
description: "With ETLBox’s Memory, Custom, and DataFrame connectors, you can read and write data from lists, collections, custom sources, and Microsoft.Data.Analysis.DataFrame. "
lead: "ETLBox provides specialized connectors for working with in-memory data, custom sources, and DataFrames."
draft: false
images: []
menu:
  docs:
    parent: "specialized-connectors"
weight: 310
toc: true
chatgpt-review: true
---

These connectors allow flexible data processing by supporting lists, collections, custom sources, and columnar storage with **Microsoft.Data.Analysis.DataFrame**.

Some connectors are included in the **ETLBox core package**, while others require additional dependencies.

## Available Connectors

| Connector                     | Package              | Description |
|--------------------------------|----------------------|-------------|
| **MemorySource**               | `ETLBox` (Core)      | Reads from in-memory lists and collections. |
| **MemoryDestination**          | `ETLBox` (Core)      | Stores data in an in-memory list. |
| **ConcurrentMemoryDestination**| `ETLBox` (Core)      | Thread-safe version of `MemoryDestination` using `BlockingCollection<T>`. |
| **CustomSource**               | `ETLBox` (Core)      | Reads data from any custom source. |
| **CustomBatchSource**          | `ETLBox` (Core)      | Reads data in batches from a custom source. |
| **CustomDestination**          | `ETLBox` (Core)      | Processes each incoming record with a custom action. |
| **CustomBatchDestination**     | `ETLBox` (Core)      | Processes data in batches before storing it. |
| **DataFrameSource**            | `ETLBox.Analysis`    | Reads data from a `Microsoft.Data.Analysis.DataFrame`. |
| **DataFrameDestination**       | `ETLBox.Analysis`    | Writes processed data into a `Microsoft.Data.Analysis.DataFrame`. |
| **VoidDestination**            | `ETLBox` (Core)      | Discards records, useful for filtering operations. |

### Installation

All connectors except **DataFrameSource** and **DataFrameDestination** are included in the **ETLBox core package**.

To use the **DataFrame connectors**, install the `ETLBox.Analysis` package:

{{< tabs "nuget-options" >}}
{{< tab "dotnet CLI" >}}
```cmd
dotnet add package ETLBox.Analysis
```
{{< /tab >}}
{{< tab "Package Manager" >}}
```ps1
PM> NuGet\Install-Package ETLBox.Analysis
```
{{< smallnote >}}
This command is intended to be used within the Package Manager Console in Visual Studio, as it uses the NuGet module's version of {{< link-ext url="https://docs.microsoft.com/nuget/reference/ps-reference/ps-ref-install-package" text="Install-Package" >}}.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "PackageReference" >}}
```xml
<PackageReference Include="ETLBox.Analysis" Version="latest" />
```
{{< smallnote >}}
For projects that support {{< link-ext url="https://docs.microsoft.com/nuget/consume-packages/package-references-in-project-files" text="PackageReference" >}}, copy this XML node into the project file to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "Script and Interactive" >}}
```cmd
> #r "nuget: ETLBox.Analysis, latest"
```
{{< smallnote >}}
#r directive can be used in F# Interactive and Polyglot Notebooks. Copy this into the interactive tool or source code of the script to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< /tabs >}}


