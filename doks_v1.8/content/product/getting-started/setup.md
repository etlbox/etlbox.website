---
title: "Installation and Setup"
description: "Installation and Setup of ETLBox."
lead: "Setting up ETLBox is quick and straightforward. In just a few steps, you can integrate ETLBox into your project and start building powerful, code-first ETL pipelines."
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

- ETLBox supports current .NET versions supported by Microsoft, including **.NET 8/9** or later and **.NET Framework 4.8.0** or later
- A compatible IDE, such as **Visual Studio 2022**, **Visual Studio Code** or **JetBrains Rider**
- Basic knowledge of **C#** programming and working with **NuGet packages**

## Step 1: Install ETLBox via NuGet

The easiest way to add ETLBox to your project is through NuGet. Follow these steps:

### Option 1: Using the NuGet Package Manager in Visual Studio

1. Open your project in **Visual Studio**.
2. Right-click on your project in the **Solution Explorer** and select **Manage NuGet Packages**.
3. Search for `ETLBox` in the **Browse** tab.
4. Select the package and click **Install**.

### Option 2: Using the .NET CLI

If you prefer the command line, run the following command in your terminal:

```bash
dotnet add package ETLBox
```

## Step 2: Add ETLBox to Your Project

Once installed, you can start using ETLBox by adding the necessary `using` directives to your code. For example:

```csharp
using ETLBox.DataFlow;
```

## Step 3: Test Your Installation

Here’s a quick example to verify everything is set up correctly. This example demonstrates using a `MemorySource` to provide data and writing that data to a CSV file using `CsvDestination`:

```csharp
using ETLBox.DataFlow;

// Define source data
var sourceData = new List<MyDataRow>
{
    new MyDataRow { Column1 = "Value1", Column2 = 123 },
    new MyDataRow { Column1 = "Value2", Column2 = 456 }
};

// Create a memory source
var memorySource = new MemorySource<MyDataRow> { Data = sourceData };

// Define a CSV destination
var csvDestination = new CsvDestination<MyDataRow>("output.csv");

// Link source to destination
memorySource.LinkTo(csvDestination);

// Execute the data flow
Network.Execute(source);

Console.WriteLine("Data written to output.csv");
Console.WriteLine(File.ReadAllText("output.csv"));

class MyDataRow
{
    public string Column1 { get; set; }
    public int Column2 { get; set; }
}
```

## Troubleshooting Installation

If you encounter any issues during installation, consider these tips:

1. **Verify Dependencies**: Ensure your project meets the required .NET version.
2. **Check NuGet Cache**: Clear your NuGet cache if installation fails:
   ```bash
   dotnet nuget locals all --clear
   ```
3. **Consult the Documentation**: Visit the [ETLBox Documentation](https://etlbox.net/docs) for additional help.

## What’s Next?

With ETLBox installed and configured, you’re ready to start building robust ETL pipelines! Explore the [Quick Start Guide](https://etlbox.net/quick-start) for a step-by-step walkthrough, or dive into specific features like [Data Flows](https://etlbox.net/docs/data-flow) and [Control Flows](https://etlbox.net/docs/control-flow).
```
