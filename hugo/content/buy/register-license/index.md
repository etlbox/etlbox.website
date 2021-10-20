---
title: "Register ETLBox license key"
description: "How to register an ETLBox license key"
lead: "If you purchase a package without source code access, you can remove all ETLBox limitations from the nuget package by registering a license key."
draft: false
---

## License file

If you have received a license file (normally named `etlbox.lic`) from us, you need to make sure that ETLBox can read this license. The file itself can be opened with any text editor of your choice. It is encoded in UTF8 and human readable.

The content of the file will look like this:

```text
2010-01-01|ETLBoxOffice|Andreas Lennartz|andreas.lennartz@etlbox.net||oPuwE+8bnjgELq1bJCf3PG5VRW9iY81ICgRZoRddVwd9FuEFSYddrz6PmP1u4g2QSQ+0hqvC/VRTm4ZgUJsJYqEOvr0tfYcL9l9enH1DgdTG5bInSLc7+C+vTxRbpHYn5Pz05YUA3IWqtv6LRfiakQlTxl8NYwUhgL249Q9x3Co=
```

## Register the license

To register your license key with ETLBox, you have 3 options:

#### Option 1

Set up a user-wide, machine-wide or process-wide environment variable. The name of the Environment variable must be `etlbox`. Copy the content of your license file into an environment variable called `etlbox`. (Restart your system if necessary) 

##### Azure functions/web app or other azure services:

Go into the Configuration -&gt; App Settings of your function or web app. {{< link-ext text="See the Microsoft docs how to configure app settings in Azure" url="https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings" >}}

Add a new application setting. Enter `etlbox` as name and copy the content of your etlbox.lic file as value.

#### Option 2

Just copy the file in the same folder where the ETLBox.dll resides. This is normally the root folder of your project.
If you add it to the sources of your project, make sure that the option `Copy to output directory` is set to `Copy always` or `Copy if newer`.

##### Azure functions / Azure web app:

By default, output files are copied into an app data directory. It is recommended to use option 1 instead.
If you need to use the file, you can add a resource to your project. Add the license file into the resource file. The file is now embedded as a resource and the license check is able to read the license from the resource.

#### Option 3:

Before you execute a data flow, add the following line to your code:

```C#
LicenseCheck.LicenseKey = "content_of_license_file";
```

## FAQ

#### How long is my license valid?

The implemented license check in ETLBox will basically just verify if the date at the beginning of the license string is still in the future. For non trial licenses, there is an additional grace period where the license will still work for some days after this date (though a warning is written into the log file).

#### Why is there no online license check?

Security is a matter that we take seriously. We don't want to create any vulnerabilities by adding unnecessary web request to your code base.
The only web request that ETBox will make are the ones that you explicitly trigger, e.g. if you use the JsonSource with an URL to get data from a web service. Other than that, ETLBox won't try to connect anywhere else. That's why the whole license is implemented off line.

#### I have an annual license - why is my issued license key valid for more than 2 years?

We don't want to force you to change the key every year manually. To reduce your efforts here, the issued key is valid for a longer time period. Billing will be still be made annually.