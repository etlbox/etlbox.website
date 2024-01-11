---
title: "ETLBoxException"
description: "Details for Class ETLBoxException (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10186
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
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception">Exception</a></div>
    <div class="level2"><span class="xref">ETLBoxException</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable">ISerializable</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception">Exception.GetBaseException()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.getobjectdata">Exception.GetObjectData(SerializationInfo, StreamingContext)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.gettype">Exception.GetType()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.tostring">Exception.ToString()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.data">Exception.Data</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.helplink">Exception.HelpLink</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.hresult">Exception.HResult</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.innerexception">Exception.InnerException</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.message">Exception.Message</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.source">Exception.Source</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.stacktrace">Exception.StackTrace</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.targetsite">Exception.TargetSite</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception.serializeobjectstate">Exception.SerializeObjectState</a>
    </div>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">message</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception">Exception</a></td>
        <td><span class="parametername">innerException</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable">ISerializable</a>
  </div>
  <h3 id="extensionmethods">Extension Methods</h3>
  <div>
      <a class="xref" href="/api/etlbox.helper/exceptionextensions#ETLBox_Helper_ExceptionExtensions_DataTryAdd_System_Exception_System_String_System_Object_">ExceptionExtensions.DataTryAdd(Exception, string, object)</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.helper/exceptionextensions#ETLBox_Helper_ExceptionExtensions_DataTryGet_System_Exception_System_String_">ExceptionExtensions.DataTryGet(Exception, string)</a>
  </div>

{{< /rawhtml >}}
