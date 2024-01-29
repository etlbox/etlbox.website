---
title: "SFTP Example"
description: "ETLBox and SFTP: A Practical Guide"
lead: "In this article, we'll give you a practical example of combining ETLBox with the SSH.NET library in order to fetch data from an SFTP server. This scenario is particularly useful where files need to be securely transferred over a network before processing."
draft: false
images: []
menu:
  recipes:
    parent: "data-integration"
weight: 2160
toc: true
---

## Preqrequisites 

This example requires the [ETLBox core package](https://www.nuget.org/packages/etlbox), and the [SSH.NET](https://www.nuget.org/packages/SSH.NET) package added to your code. The example uses SSH.NET, but other libraries will offer similar functionalities. 

## Example Code Overview

Let's have a look at the whole example code first. After this, we'll dive into the details of the example. 

```C#
using ETLBox.DataFlow;
using Renci.SshNet;

//Initialization
SftpClient client = new SftpClient("test.rebex.net", "demo", "password");
client.Connect();

//We use a simple text file as source
TextSource<FileData> source = new TextSource<FileData>("readme.txt");
source.CreateStreamReader = (file) => {
    return new StreamReader(client.OpenRead(file));
};

//For each line we create a FileData object that contains the current line and the row number
source.ParseLineFunc = (line,progress) => {
    return new FileData() {
        Line = line,
        RowNumber = progress
    };
};

//We use a custom destination to print out the line and the row number on the console
CustomDestination<FileData> dest = new CustomDestination<FileData>();
dest.WriteAction = (data, pc) => {
    Console.WriteLine($"Line {data.RowNumber}: {data.Line}");
};

//Link source and destination together
source.LinkTo(dest);

//Execute the data flow
Network.Execute(source);

//Cleanup
client.Disconnect();

//Class Definition
public class FileData {
    public string? Line { get; set; }
    public int RowNumber { get; set; }
}
```

The example is very straightforward - it utilizes a TextSource to read data from a simple text file (in this case a `readme.txt`). But the same approach can be easily transferred to all other ETLBox streaming connectors (e.g. JsonSource, XmlSource, TextSource, CsvSource, ...) - they all [offer you to pass an existing stream](https://www.etlbox.net/docs/stream-connectors/streaming/#pass-existing-stream) as a parameter.

## Example Code Output

Once the above example is executed, the following output is printed on the Console:

```text
Line 0: Welcome to test.rebex.net!
Line 1:
Line 2: You are connected to an FTP or SFTP server used for testing purposes
Line 3: by Rebex FTP/SSL or Rebex SFTP sample code. Only read access is allowed.
Line 4:
Line 5: For information about Rebex FTP/SSL, Rebex SFTP and other Rebex libraries
Line 6: for .NET, please visit our website at https://www.rebex.net/
Line 7:
Line 8: For feedback and support, contact support@rebex.net
Line 9:
Line 10: Thanks!
```

## Example Code Details

### Required Model

The `FileData` class is defined to hold our line content and row number which we want to read from our server. 

```csharp
public class FileData {
    public string? Line { get; set; }
    public int RowNumber { get; set; }
}
```

### Setting Up the SFTP Connection

Now we can establish a connection to an SFTP server using the `Renci.SshNet` library. The `SftpClient` object is initialized with the server's address, and login credentials, and is immediately connected.

```csharp
SftpClient client = new SftpClient("test.rebex.net", "demo", "password");
client.Connect();
```

We will read a simple `readme.txt` text file from a SFTP server that allows public read access.

### Initializing the Text Source

Once the connection is established, we set up a `TextSource<FileData>` object, specifying the path to our target file on the server. The `CreateStreamReader` function is used to utilize the SFTP client's `OpenRead` method. `OpenRead` return an `SFTPStream`, which we wrap with a `StreamReader`, allowing us to stream the file's contents directly over the SFTP connection.

```csharp
TextSource<FileData> source = new TextSource<FileData>("readme.txt");
source.CreateStreamReader = (file) => new StreamReader(client.OpenRead(file));
```

This approach handles reading data from a remote source without the need for intermediate storage.

### Parsing Each Line

For every line read from the `readme.txt` file, we transform the data into a `FileData` object, capturing both the content of the line and its sequential number in the file. This is achieved through the `ParseLineFunc`, which acts as a mapper between the raw text input and our data model.

```csharp
source.ParseLineFunc = (line,progress) => new FileData { Line = line, RowNumber = progress };
```

This transformation step is where you can introduce more complex logic to cleanse or manipulate your data as needed.

### Defining the Destination

With our data transformed, we then define a `CustomDestination<FileData>` to determine how each `FileData` object should be handled. In this example, we simply print out each line with its row number to the console, showcasing a straightforward logging or debugging output.

```csharp
CustomDestination<FileData> dest = new CustomDestination<FileData>();
dest.WriteAction = (data, pc) => Console.WriteLine($"Line {data.RowNumber}: {data.Line}");
```

This destination can be swapped out for more complex scenarios, such as database inserts or file writes, depending on your ETL pipeline's requirements.

### Executing the Data Flow

The magic happens when we link our source to our destination using `source.LinkTo(dest)` and kick off the ETL process with `Network.Execute(source)`. This line orchestrates the flow of data from the SFTP server through our transformation logic and out to our defined destination.

```csharp
source.LinkTo(dest);
Network.Execute(source);
```

### Cleaning Up

Post-execution, it's essential to gracefully disconnect from the SFTP server to free up resources and maintain security.

```csharp
client.Disconnect();
```

## Conclusion

Through this example, we've seen how ETLBox facilitates the construction of concise and readable ETL pipelines in C#, enabling developers to focus more on business logic and less on boilerplate code. Integrating with the SSH.NET library further extends ETLBox's capabilities, allowing secure and efficient handling of data over SFTP.

### Code on Github

The entire code for this example, along with additional resources and documentation, {{< link-ext text="is available on GitHub for further exploration and contribution" url="https://github.com/etlbox/etlbox.demo/tree/main/SFTP" >}}.

