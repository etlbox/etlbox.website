---
title: "Installation and Setup"
description: ""
lead: "ETLBox.DbExtensions makes it easy to add high-performance bulk operations to any ADO.NET or Dapper-based application. With just one NuGet package and a few lines of code, you can insert, update, delete, or merge thousands of rows—fast and reliably."
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

## Step 1: Install ETLBox.DbExtensions via NuGet

Add the following packages to your project:

- `ETLBox.DbExtensions`
- The matching ETLBox connection package (e.g. `ETLBox.SqlServer`, `ETLBox.Postgres`, etc.)

{{< tabs "nuget-options" >}}
{{< tab "dotnet CLI" >}}
```bash
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
Run this in the Package Manager Console inside Visual Studio.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "PackageReference" >}}
```xml
<PackageReference Include="ETLBox.DbExtensions" Version="3.7.0" />
<PackageReference Include="ETLBox.SqlServer" Version="3.7.0" />
```
{{< smallnote >}}
Add these to your project file if you’re using `PackageReference`.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "Script and Interactive" >}}
```csharp
#r "nuget: ETLBox.DbExtensions, 3.7.0"
#r "nuget: ETLBox.SqlServer, 3.7.0"
```
{{< smallnote >}}
Useful in notebooks or scripts using C# Interactive.
{{< /smallnote >}}
{{< /tab >}}
{{< /tabs >}}

## Step 2: Add ETLBox.DbExtensions to Your Code

Add the necessary `using` directives:

```csharp
using ETLBox.DbExtensions;
using System.Data.SqlClient;
```

## Step 3: Run a Simple Test

This snippet inserts 10,000 rows into a database using a standard `IDbConnection`:

```csharp
var connection = new SqlConnection("your-connection-string");

var customers = Enumerable.Range(1, 10_000)
    .Select(i => new Customer { Id = i, Name = $"Customer {i}", City = $"City {i % 50}" });

connection.BulkInsert(customers.ToList());

public class Customer {
    public int Id { get; set; }
    public string Name { get; set; }
    public string City { get; set; }
}
```

## Troubleshooting Installation

- **Missing Provider?**
  Make sure the correct ETLBox.* database provider package is referenced.
- **Clear NuGet Cache:**
  ```bash
  dotnet nuget locals all --clear
  ```
- **Need Help?**
  [Contact our support](/support/options)

---

### What’s Next?

You're ready to use bulk operations in your app. Head over to the [Quick Start Guide](/docs/bulkinsert) to see more examples.
```
