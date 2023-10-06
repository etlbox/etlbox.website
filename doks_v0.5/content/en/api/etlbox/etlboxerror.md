---
title: "ETLBoxError"
description: "Details for Class ETLBoxError (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10175
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ETLBoxError">
  <h1 id="ETLBox_ETLBoxError" data-uid="ETLBox.ETLBoxError" class="text-break">Class ETLBoxError
</h1>
  <div class="markdown level0 summary"><p>The generic ETLBox Exception. Contains serialized information about the error.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">ETLBoxError</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">object.Equals(object)</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">object.GetType()</span>
    </div>
    <div>
      <span class="xref">object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">object.ReferenceEquals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ETLBoxError_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ETLBoxError
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ETLBoxError_Context_" data-uid="ETLBox.ETLBoxError.Context*"></a>
  <h4 id="ETLBox_ETLBoxError_Context" data-uid="ETLBox.ETLBoxError.Context">Context</h4>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ETLBoxError_ErrorText_" data-uid="ETLBox.ETLBoxError.ErrorText*"></a>
  <h4 id="ETLBox_ETLBoxError_ErrorText" data-uid="ETLBox.ETLBoxError.ErrorText">ErrorText</h4>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ETLBoxError_ExceptionType_" data-uid="ETLBox.ETLBoxError.ExceptionType*"></a>
  <h4 id="ETLBox_ETLBoxError_ExceptionType" data-uid="ETLBox.ETLBoxError.ExceptionType">ExceptionType</h4>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ETLBoxError_RecordAsJson_" data-uid="ETLBox.ETLBoxError.RecordAsJson*"></a>
  <h4 id="ETLBox_ETLBoxError_RecordAsJson" data-uid="ETLBox.ETLBoxError.RecordAsJson">RecordAsJson</h4>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ETLBoxError_ReportTime_" data-uid="ETLBox.ETLBoxError.ReportTime*"></a>
  <h4 id="ETLBox_ETLBoxError_ReportTime" data-uid="ETLBox.ETLBoxError.ReportTime">ReportTime</h4>
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
  <a id="ETLBox_ETLBoxError_Source_" data-uid="ETLBox.ETLBoxError.Source*"></a>
  <h4 id="ETLBox_ETLBoxError_Source" data-uid="ETLBox.ETLBoxError.Source">Source</h4>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ETLBoxError_GetException_" data-uid="ETLBox.ETLBoxError.GetException*"></a>
  <h4 id="ETLBox_ETLBoxError_GetException" data-uid="ETLBox.ETLBoxError.GetException">GetException()</h4>
  <div class="markdown level1 summary"><p>The exception thrown at the source</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Exception GetException()
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
