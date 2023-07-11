---
title: "ETLBoxException"
description: "Details for Class ETLBoxException (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10158
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ETLBoxException">
  <h1 id="ETLBox_ETLBoxException" data-uid="ETLBox.ETLBoxException" class="text-break">Class ETLBoxException
</h1>
  <div class="markdown level0 summary"><p>The generic ETLBox Exception. See inner exception for more details.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">System.Exception</span></div>
    <div class="level2"><span class="xref">ETLBoxException</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><span class="xref">System.Runtime.Serialization.ISerializable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Exception.GetBaseException()</span>
    </div>
    <div>
      <span class="xref">System.Exception.GetObjectData(System.Runtime.Serialization.SerializationInfo, System.Runtime.Serialization.StreamingContext)</span>
    </div>
    <div>
      <span class="xref">System.Exception.GetType()</span>
    </div>
    <div>
      <span class="xref">System.Exception.ToString()</span>
    </div>
    <div>
      <span class="xref">System.Exception.Data</span>
    </div>
    <div>
      <span class="xref">System.Exception.HelpLink</span>
    </div>
    <div>
      <span class="xref">System.Exception.HResult</span>
    </div>
    <div>
      <span class="xref">System.Exception.InnerException</span>
    </div>
    <div>
      <span class="xref">System.Exception.Message</span>
    </div>
    <div>
      <span class="xref">System.Exception.Source</span>
    </div>
    <div>
      <span class="xref">System.Exception.StackTrace</span>
    </div>
    <div>
      <span class="xref">System.Exception.TargetSite</span>
    </div>
    <div>
      <span class="xref">System.Exception.SerializeObjectState</span>
    </div>
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
      <span class="xref">object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">object.ReferenceEquals(object, object)</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ETLBoxException_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ETLBoxException : Exception, ISerializable
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ETLBoxException__ctor_" data-uid="ETLBox.ETLBoxException.#ctor*"></a>
  <h4 id="ETLBox_ETLBoxException__ctor" data-uid="ETLBox.ETLBoxException.#ctor">ETLBoxException()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ETLBoxException()
```

{{< rawhtml >}}
  <a id="ETLBox_ETLBoxException__ctor_" data-uid="ETLBox.ETLBoxException.#ctor*"></a>
  <h4 id="ETLBox_ETLBoxException__ctor_System_String_System_Exception_" data-uid="ETLBox.ETLBoxException.#ctor(System.String,System.Exception)">ETLBoxException(string, Exception)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ETLBoxException(string message, Exception innerException)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Exception</span></td>
        <td><span class="parametername">innerException</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ETLBoxException__ctor_" data-uid="ETLBox.ETLBoxException.#ctor*"></a>
  <h4 id="ETLBox_ETLBoxException__ctor_System_String_" data-uid="ETLBox.ETLBoxException.#ctor(System.String)">ETLBoxException(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ETLBoxException(string message)
```

{{< rawhtml >}}
  <h5 class="parameters">Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <span class="xref">System.Runtime.Serialization.ISerializable</span>
  </div>
  <h3 id="extensionmethods">Extension Methods</h3>
  <div>
      <a class="xref" href="/api/etlbox.helper/exceptionextensions#ETLBox_Helper_ExceptionExtensions_DataTryAdd_System_Exception_System_String_System_Object_">ExceptionExtensions.DataTryAdd(Exception, string, object)</a>
  </div>

{{< /rawhtml >}}
