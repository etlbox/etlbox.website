---
title: "StreamMetaData"
description: "Details for Class StreamMetaData (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10192
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
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">StreamMetaData</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Object.Equals(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">System.Object.GetType()</span>
    </div>
    <div>
      <span class="xref">System.Object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">System.Object.ReferenceEquals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.ToString()</span>
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
  <a id="ETLBox_DataFlow_StreamMetaData_HttpRequestMessage_" data-uid="ETLBox.DataFlow.StreamMetaData.HttpRequestMessage*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_HttpRequestMessage" data-uid="ETLBox.DataFlow.StreamMetaData.HttpRequestMessage">HttpRequestMessage</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public HttpRequestMessage HttpRequestMessage { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Net.Http.HttpRequestMessage</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_ProcessedRows_" data-uid="ETLBox.DataFlow.StreamMetaData.ProcessedRows*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_ProcessedRows" data-uid="ETLBox.DataFlow.StreamMetaData.ProcessedRows">ProcessedRows</h4>
  <div class="markdown level1 summary"><p>Amounts of rows processed in the last request</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ProcessedRows { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_ProgressCount_" data-uid="ETLBox.DataFlow.StreamMetaData.ProgressCount*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_ProgressCount" data-uid="ETLBox.DataFlow.StreamMetaData.ProgressCount">ProgressCount</h4>
  <div class="markdown level1 summary"><p>Number of currently processed items</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ProgressCount { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_StreamMetaData_UnparsedData_" data-uid="ETLBox.DataFlow.StreamMetaData.UnparsedData*"></a>
  <h4 id="ETLBox_DataFlow_StreamMetaData_UnparsedData" data-uid="ETLBox.DataFlow.StreamMetaData.UnparsedData">UnparsedData</h4>
  <div class="markdown level1 summary"><p>Unparsed meta data from the response. E.g. this could be unparsed json that holds the links to the next page of the response.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string UnparsedData { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
