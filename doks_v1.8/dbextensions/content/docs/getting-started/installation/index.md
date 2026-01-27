---
title: "Installation and Setup"
description: "Get up and running with ETLBox.DbExtensions in minutes. This overview covers installation via NuGet, configuring a database provider, and executing your first bulk operation."
lead: "Get started with <b>ETLBox.DbExtensions</b> in just a few minutes. This guide walks you through the installation via NuGet, setting up the required database provider, and running your first bulk operation."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 20
toc: true
---

## Prerequisites

Before you get started, make sure your environment meets the following requirements:

- ETLBox.DbExtensions supports all current .NET versions supported by Microsoft, including {{< link-ext url="https://dotnet.microsoft.com/" text=".NET 8/9" >}} or later and .NET Framework 4.8.0 or later
- Required: A supported ETLBox database provider package, e.g. `ETLBox.SqlServer` or `ETLBox.Postgres`
- Recommended IDEs: {{< link-ext url="https://visualstudio.microsoft.com/" text="Visual Studio 2022" >}}, {{< link-ext url="https://code.visualstudio.com/" text="Visual Studio Code" >}}, or {{< link-ext url="https://www.jetbrains.com/rider/" text="JetBrains Rider" >}}
- Basic knowledge of {{< link-ext url="https://dotnet.microsoft.com/en-us/learn/csharp" text="C#" >}} and working with NuGet packages

## Install via NuGet

Add the following packages to your project:

- `ETLBox.DbExtensions`
- The matching ETLBox connection package (e.g. `ETLBox.SqlServer`, `ETLBox.Postgres`, etc.)

{{< tabs "nuget-options" >}}
{{< tab "dotnet CLI" >}}
```cmd
dotnet add package ETLBox.DbExtensions
dotnet add package ETLBox.SqlServer
```
{{< /tab >}}
{{< tab "Package Manager" >}}
```ps1
PM> NuGet\Install-Package ETLBox.DbExtensions
PM> NuGet\Install-Package ETLBox.SqlServer
```
{{< smallnote >}}
This command is intended to be used within the Package Manager Console in Visual Studio, as it uses the NuGet module's version of {{< link-ext url="https://docs.microsoft.com/nuget/reference/ps-reference/ps-ref-install-package" text="Install-Package" >}}.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "PackageReference" >}}
```xml
<PackageReference Include="ETLBox.DbExtensions" Version="latest" />
<PackageReference Include="ETLBox.SqlServer" Version="latest" />
```
{{< smallnote >}}
For projects that support {{< link-ext url="https://docs.microsoft.com/nuget/consume-packages/package-references-in-project-files" text="PackageReference" >}}, copy this XML node into the project file to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "Script and Interactive" >}}
```cmd
> #r "nuget: ETLBox.DbExtensions, latest"
> #r "nuget: ETLBox.SqlServer, latest"
```
{{< smallnote >}}
#r directive can be used in F# Interactive and Polyglot Notebooks. Copy this into the interactive tool or source code of the script to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< /tabs >}}


## Add to Your Code

Add the necessary `using` directives:

```csharp
using ETLBox.DbExtensions;
using System.Data.SqlClient;
```

## Run a Simple Test

Run the following SQL first to prepare your database:

```sql
CREATE TABLE dbo.Customer (
    Id INT NOT NULL,
    Name VARCHAR(100) NULL,
    City VARCHAR(100) NULL
)
```
This snippet inserts 4,999 rows into the `Customer` table using a standard `IDbConnection`:

```csharp
var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(1, 4_999)
    .Select(i => new Customer { Id = i, Name = $"Customer {i}", City = $"City {i % 50}" });

connection.BulkInsert(customers);

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```

## Troubleshooting Installation

- **Missing Provider?**: Make sure the correct `ETLBox.*` database provider package is referenced (e.g. `ETLBox.SqlServer`).

- **Clear NuGet Cache:**:
  ```bash
  dotnet nuget locals all --clear
  ```

- **Need Help?**: [Contact our support](/support/options)

- **Example Project:**: See the {{< link-ext text="simple demo on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/DbExtensions.SimpleTest" >}} for a working example.
