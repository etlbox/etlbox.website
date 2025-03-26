---
title: "Overview"
description: "This article provides an overview of ETLBox messaging connectors, which support integration with event-driven systems like Azure Service Bus and Apache Kafka."
lead: "Messaging systems play a key role in distributed architectures and event-driven data flows. With ETLBox, you can integrate queue- or stream-based communication into your pipelines using connectors for platforms like Azure Service Bus and Apache Kafka. These connectors support reading messages as input and writing structured output events, helping you build flexible and reactive data workflows."
draft: false
images: []
menu:
  docs:
    parent: "messaging"
weight: 470
toc: true
chatgpt-review: true
---

## Supported Messaging Systems

While each system has its own characteristics and API behavior, the ETLBox connectors abstract the complexity and provide a consistent way to incorporate message-based inputs and outputs into your ETL workflows.


| System             | Type               | Package                        |
|--------------------|--------------------|--------------------------------|
| [Apache Kafka](../kafka)       | Distributed Log    | `ETLBox.Apache.Kafka`            |
| [Azure Service Bus](../service-bus)  | Queue / Pub-Sub    | `ETLBox.Azure.ServiceBus`        |


Refer to the individual connector documentation for usage examples and configuration options.

### Installation

To use a messaging connector, install the corresponding NuGet package. For example, to use the Kafka integration:

{{< tabs "nuget-options" >}}
{{< tab "dotnet CLI" >}}
```cmd
dotnet add package ETLBox.Apache.Kafka
```
{{< /tab >}}
{{< tab "Package Manager" >}}
```ps1
PM> NuGet\Install-Package ETLBox.Apache.Kafka
```
{{< smallnote >}}
This command is intended to be used within the Package Manager Console in Visual Studio, as it uses the NuGet module's version of {{< link-ext url="https://docs.microsoft.com/nuget/reference/ps-reference/ps-ref-install-package" text="Install-Package" >}}.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "PackageReference" >}}
```xml
<PackageReference Include="ETLBox.Apache.Kafka" Version="latest" />
```
{{< smallnote >}}
For projects that support {{< link-ext url="https://docs.microsoft.com/nuget/consume-packages/package-references-in-project-files" text="PackageReference" >}}, copy this XML node into the project file to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< tab "Script and Interactive" >}}
```cmd
> #r "nuget: ETLBox.Apache.Kafka, latest"
```
{{< smallnote >}}
#r directive can be used in F# Interactive and Polyglot Notebooks. Copy this into the interactive tool or source code of the script to reference the package.
{{< /smallnote >}}
{{< /tab >}}
{{< /tabs >}}


