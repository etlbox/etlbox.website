---
title: "ETLBoxError"
description: "Details for Class ETLBoxError (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10163
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.ETLBoxError">
  <h1 id="ETLBox_DataFlow_ETLBoxError" data-uid="ETLBox.DataFlow.ETLBoxError" class="text-break">Class ETLBoxError
</h1>
  <div class="markdown level0 summary"><p>The generic ETLBox Exception. Contains serialized information about the error.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">ETLBoxError</span></div>
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
  <h5 id="ETLBox_DataFlow_ETLBoxError_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ETLBoxError
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_ETLBoxError_Context_" data-uid="ETLBox.DataFlow.ETLBoxError.Context*"></a>
  <h4 id="ETLBox_DataFlow_ETLBoxError_Context" data-uid="ETLBox.DataFlow.ETLBoxError.Context">Context</h4>
  <div class="markdown level1 summary"><p>Additional information about parameters used in the current processing state</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Context { get; set; }
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
  <a id="ETLBox_DataFlow_ETLBoxError_ErrorText_" data-uid="ETLBox.DataFlow.ETLBoxError.ErrorText*"></a>
  <h4 id="ETLBox_DataFlow_ETLBoxError_ErrorText" data-uid="ETLBox.DataFlow.ETLBoxError.ErrorText">ErrorText</h4>
  <div class="markdown level1 summary"><p>The exception message as a string</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ErrorText { get; set; }
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
  <a id="ETLBox_DataFlow_ETLBoxError_ExceptionType_" data-uid="ETLBox.DataFlow.ETLBoxError.ExceptionType*"></a>
  <h4 id="ETLBox_DataFlow_ETLBoxError_ExceptionType" data-uid="ETLBox.DataFlow.ETLBoxError.ExceptionType">ExceptionType</h4>
  <div class="markdown level1 summary"><p>The exception type as string</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ExceptionType { get; set; }
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
  <a id="ETLBox_DataFlow_ETLBoxError_RecordAsJson_" data-uid="ETLBox.DataFlow.ETLBoxError.RecordAsJson*"></a>
  <h4 id="ETLBox_DataFlow_ETLBoxError_RecordAsJson" data-uid="ETLBox.DataFlow.ETLBoxError.RecordAsJson">RecordAsJson</h4>
  <div class="markdown level1 summary"><p>The erroneous record(s) serialized as json</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string RecordAsJson { get; set; }
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
  <a id="ETLBox_DataFlow_ETLBoxError_ReportTime_" data-uid="ETLBox.DataFlow.ETLBoxError.ReportTime*"></a>
  <h4 id="ETLBox_DataFlow_ETLBoxError_ReportTime" data-uid="ETLBox.DataFlow.ETLBoxError.ReportTime">ReportTime</h4>
  <div class="markdown level1 summary"><p>The point in time when the error occured</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTime ReportTime { get; set; }
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
        <td><span class="xref">System.DateTime</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_ETLBoxError_Source_" data-uid="ETLBox.DataFlow.ETLBoxError.Source*"></a>
  <h4 id="ETLBox_DataFlow_ETLBoxError_Source" data-uid="ETLBox.DataFlow.ETLBoxError.Source">Source</h4>
  <div class="markdown level1 summary"><p>Additional information about the current state of the source during the exception</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Source { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_ETLBoxError_GetExcpetion_" data-uid="ETLBox.DataFlow.ETLBoxError.GetExcpetion*"></a>
  <h4 id="ETLBox_DataFlow_ETLBoxError_GetExcpetion" data-uid="ETLBox.DataFlow.ETLBoxError.GetExcpetion">GetExcpetion()</h4>
  <div class="markdown level1 summary"><p>The exception thrown at the source</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Exception GetExcpetion()
```

{{< rawhtml >}}
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Exception</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
