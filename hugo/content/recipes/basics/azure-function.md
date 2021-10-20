---
title: "Azure Function App"
description: "Example: how to use ETLBox with Azure Functions"
lead: "This example shows the basics deployment of an Azure Function App using ETLBox as dependency."
draft: false
images: []
menu:
  recipes:
    parent: "basics"
weight: 2020
toc: true
---

In this example we will deploy a simple azure function. The function will receive some json file that contains an array with data, and it will store this data locally as a csv file and return the csv file data as response.

{{< alert text="Starting with <code>Microsoft.NET.Sdk.Functions versions 3.0.4</code> and above, a new feature was introduced that cleans the compiled output from unnecessary dlls in order to trim down the assemblies. This feature cleans the output too aggressively and will result in exceptions when referencing and using ETLBox packages. You need to either downgrade to <code>Microsoft.NET.Sdk.Functions 3.0.3</code> or to add <code>&lt;_FunctionsSkipCleanOutput&gt;true&lt;/_FunctionsSkipCleanOutput&gt;</code> to your project file" >}}

This issue is already reported in different github issues ({{< link-ext text="e.g. here" url="https://github.com/Azure/Azure-Functions/issues/1525" >}} ). 

## Preqrequisites

This example was created using Visual Studio (latest version). Visual Studio offers emulators for Function Apps. If you are going to deploy this function to Azure, you will need a valid Azure subscription. 

### Create a azure function project

You can create the function app using a template project or manually. 
At then end, you should end up with a project file that looks similar to this:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>netcoreapp3.1</TargetFramework>
    <AzureFunctionsVersion>v3</AzureFunctionsVersion>
    <_FunctionsSkipCleanOutput>true</_FunctionsSkipCleanOutput>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="ETLBox" Version="2.4.1" />
    <PackageReference Include="ETLBox.Csv" Version="2.4.1" />
    <PackageReference Include="ETLBox.Json" Version="2.4.1" />
    <PackageReference Include="Microsoft.NET.Sdk.Functions" Version="3.0.13" />
  </ItemGroup>
  <ItemGroup>
    <None Update="host.json">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </None>
    <None Update="local.settings.json">
      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
      <CopyToPublishDirectory>Never</CopyToPublishDirectory>
    </None>
  </ItemGroup>
</Project>
```

This project file will already include the ETLBox, ETLBox.Csv and ETLBox.Json packages.

Please note that you need to manually add `<_FunctionsSkipCleanOutput>true</_FunctionsSkipCleanOutput>` to the project file.

Alernatively, you can downgrade the package for the Functiosn Sdk: `<PackageReference Include="Microsoft.NET.Sdk.Functions" Version="3.0.3" />`


### Creating the function

Add a class "DemoFunction.cs" to your project:

```C#
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using ETLBox.DataFlow.Connectors;
using ETLBox.DataFlow;
using System.Net;

namespace AzureFunctionApp
{
    public static class DemoFunction
    {
        [FunctionName("DemoFunction")]
        public static async Task<HttpResponseMessage> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("Received a json file to transform.");

            string filename = Guid.NewGuid().ToString() + ".csv";

            log.LogInformation("Temp file used to hold data: " + filename);

            var jsonSource = new JsonSource() {
                CreateStreamReader = _ => new StreamReader(req.Body)
            };
            var csvFileDest = new CsvDestination(filename);

            jsonSource.LinkTo(csvFileDest);
            await Network.ExecuteAsync(jsonSource);

            log.LogInformation("Successfully stored data in file - now returning the content as response.");

            return new HttpResponseMessage() {
                StatusCode = HttpStatusCode.OK,
                Content = new StreamContent(new FileStream(filename, FileMode.Open))
            };
        }
    }
}
```

### Testing the function

You can execute your function, either in your test environment or by deploying it to Azure. 
Now you can send a POST request to your newly created endpoint:

E.g. if you send the following POST body to your endpoint

```json
[
	{ 
		"Id" : 1,
		"Value" : "A"
	},
	{ 
		"Id" : 2,
		"Value" : "B"
	},
]
```

the function will receive this json, and create a file which is named like `217bef6f-a75e-4e98-b1cc-f05bd8a20f5d.csv` in the local function folder. Then it will return the content of the file as response:

```csv
Id,Value
1,A
2,B
```

## Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/AzureFunctionApp" >}}

