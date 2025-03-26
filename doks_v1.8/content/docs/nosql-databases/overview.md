---
title: "Overview"
description: "ETLBox supports a variety of NoSQL databases, offering connectors that integrate document, key-value, and table-based storage systems into your data workflows. This overview provides a summary of the available connectors, their database types, and the corresponding ETLBox packages."
lead: "ETLBox provides native support for integrating with popular NoSQL databases. These connectors allow reading from and writing to NoSQL sources, enabling data exchange between document stores, key-value stores, and other structured or semi-structured formats."
draft: false
images: []
menu:
  docs:
    parent: "nosql-databases"
weight: 410
toc: true
chatgpt-review: true
---


NoSQL databases are designed for flexibility and performance, especially when handling large or unstructured datasets. With ETLBox, you can bring that data into your workflows—no complex setup required.

## Supported NoSQL Connectors

| Database            | Type              | NuGet Package           |
|---------------------|-------------------|--------------------------|
| [Azure Cosmos DB](../cosmos) | Document Store     | `ETLBox.Azure.CosmosDb`        |
| [Azure Table Storage](../tables) | Key-Value/Table Store | `ETLBox.Azure.Tables`       |
| [Couchbase](../couchbase) | Document Store     | `ETLBox.Couchbase`       |
| [MongoDB](../mongo)  | Document Store     | `ETLBox.MongoDb`         |
| [Redis](../redis) | Key-Value Store    | `ETLBox.Redis`           |

Each connector is built around the ETLBox data flow model, supporting efficient integration with NoSQL sources and destinations. See the individual pages for details on configuration, usage examples, and limitations.

### Installation

Each NoSQL connector is distributed as its own NuGet package. Install only the package you need for your target database.

For example, to use the MongoDB connector:

{{< tabs "nuget-options" >}}
{{< tab "dotnet CLI" >}}
```cmd
dotnet add package ETLBox.MongoDb
```
{{< /tab >}}
{{< tab "Package Manager" >}}
```ps1
PM> NuGet\Install-Package ETLBox.MongoDb
```
{{< smallnote >}}
This command is intended to be used within the Package Manager Console in Visual Studio, as it uses the NuGet module's version of {{< link-ext url="https://docs.microsoft.com/nuget/reference/ps-reference/ps-ref-install-package" text="Install-Package" >}}.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "PackageReference" >}}
```xml
<PackageReference Include="ETLBox.MongoDb" Version="latest" />
```
{{< smallnote >}}
For projects that support {{< link-ext url="https://docs.microsoft.com/nuget/consume-packages/package-references-in-project-files" text="PackageReference" >}}, copy this XML node into the project file to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "Script and Interactive" >}}
```cmd
> #r "nuget: ETLBox.MongoDb, latest"
```
{{< smallnote >}}
#r directive can be used in F# Interactive and Polyglot Notebooks. Copy this into the interactive tool or source code of the script to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< /tabs >}}
