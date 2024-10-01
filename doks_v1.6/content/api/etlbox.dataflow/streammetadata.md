---
title: "StreamMetaData"
description: "Details for Class StreamMetaData (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10188
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.StreamMetaData">
  <h1 id="ETLBox_DataFlow_StreamMetaData" data-uid="ETLBox.DataFlow.StreamMetaData" class="text-break">Class StreamMetaData
</h1>
  <div class="markdown level0 summary"><p>This class holds meta data about the current progress of the source.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">StreamMetaData</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)">object.Equals(object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)">object.Equals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode">object.GetHashCode()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.gettype">object.GetType()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_StreamMetaData_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class StreamMetaData
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_StreamMetaData_AdditonalData_" data-uid="ETLBox.DataFlow.StreamMetaData.AdditonalData*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_AdditonalData" data-uid="ETLBox.DataFlow.StreamMetaData.AdditonalData">AdditonalData</h4>
  <div class="markdown level1 summary"><p>A generic object that can hold additional request data</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object AdditonalData { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_HttpRequestMessage_" data-uid="ETLBox.DataFlow.StreamMetaData.HttpRequestMessage*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_HttpRequestMessage" data-uid="ETLBox.DataFlow.StreamMetaData.HttpRequestMessage">HttpRequestMessage</h4>
  <div class="markdown level1 summary"><p>The current http request message used for this request</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public HttpRequestMessage HttpRequestMessage { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.net.http.httprequestmessage">HttpRequestMessage</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_HttpResponseMessage_" data-uid="ETLBox.DataFlow.StreamMetaData.HttpResponseMessage*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_HttpResponseMessage" data-uid="ETLBox.DataFlow.StreamMetaData.HttpResponseMessage">HttpResponseMessage</h4>
  <div class="markdown level1 summary"><p>The current http response message received for this request</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public HttpResponseMessage HttpResponseMessage { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.net.http.httpresponsemessage">HttpResponseMessage</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_ProcessedRows_" data-uid="ETLBox.DataFlow.StreamMetaData.ProcessedRows*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_ProcessedRows" data-uid="ETLBox.DataFlow.StreamMetaData.ProcessedRows">ProcessedRows</h4>
  <div class="markdown level1 summary"><p>Amounts of rows processed in the last request</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ProcessedRows { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_ProgressCount_" data-uid="ETLBox.DataFlow.StreamMetaData.ProgressCount*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_ProgressCount" data-uid="ETLBox.DataFlow.StreamMetaData.ProgressCount">ProgressCount</h4>
  <div class="markdown level1 summary"><p>Number of currently processed items</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ProgressCount { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_RequestCount_" data-uid="ETLBox.DataFlow.StreamMetaData.RequestCount*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_RequestCount" data-uid="ETLBox.DataFlow.StreamMetaData.RequestCount">RequestCount</h4>
  <div class="markdown level1 summary"><p>The number of requests so far</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int RequestCount { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_RequestUri_" data-uid="ETLBox.DataFlow.StreamMetaData.RequestUri*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_RequestUri" data-uid="ETLBox.DataFlow.StreamMetaData.RequestUri">RequestUri</h4>
  <div class="markdown level1 summary"><p>The uri used for the current request</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string RequestUri { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_UnparsedData_" data-uid="ETLBox.DataFlow.StreamMetaData.UnparsedData*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_UnparsedData" data-uid="ETLBox.DataFlow.StreamMetaData.UnparsedData">UnparsedData</h4>
  <div class="markdown level1 summary"><p>Unparsed meta data from the response. E.g. this could be unparsed json that holds the links to the next page of the response.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string UnparsedData { get; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_StreamMetaData_ToString_" data-uid="ETLBox.DataFlow.StreamMetaData.ToString*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_ToString" data-uid="ETLBox.DataFlow.StreamMetaData.ToString">ToString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string ToString()
```

{{< rawhtml >}}
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a></div>

{{< /rawhtml >}}
