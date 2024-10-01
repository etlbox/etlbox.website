---
title: "ObjectCopy"
description: "Details for Class ObjectCopy (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10292
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ObjectCopy">
  <h1 id="ETLBox_ObjectCopy" data-uid="ETLBox.ObjectCopy" class="text-break">Class ObjectCopy
</h1>
  <div class="markdown level0 summary"><p>This class exposes cloning functionality for objects.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">ObjectCopy</span></div>
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
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ObjectCopy_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class ObjectCopy
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ObjectCopy_Clone_" data-uid="ETLBox.ObjectCopy.Clone*"></a>
  <h4 id="ETLBox_ObjectCopy_Clone__1___0_" data-uid="ETLBox.ObjectCopy.Clone``1(``0)">Clone&lt;T&gt;(T)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T Clone<T>(T row)
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
        <td><span class="xref">T</span></td>
        <td><span class="parametername">row</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ObjectCopy_TryCreateShallowCopyOfPublicProps_" data-uid="ETLBox.ObjectCopy.TryCreateShallowCopyOfPublicProps*"></a>
  <h4 id="ETLBox_ObjectCopy_TryCreateShallowCopyOfPublicProps__1___0_" data-uid="ETLBox.ObjectCopy.TryCreateShallowCopyOfPublicProps``1(``0)">TryCreateShallowCopyOfPublicProps&lt;T&gt;(T)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T TryCreateShallowCopyOfPublicProps<T>(T source) where T : class
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
        <td><span class="xref">T</span></td>
        <td><span class="parametername">source</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ObjectCopy_TryCreateShallowCopyOfPublicProps_" data-uid="ETLBox.ObjectCopy.TryCreateShallowCopyOfPublicProps*"></a>
  <h4 id="ETLBox_ObjectCopy_TryCreateShallowCopyOfPublicProps__2___0_" data-uid="ETLBox.ObjectCopy.TryCreateShallowCopyOfPublicProps``2(``0)">TryCreateShallowCopyOfPublicProps&lt;TIn, TOut&gt;(TIn)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TOut TryCreateShallowCopyOfPublicProps<TIn, TOut>(TIn source) where TOut : class
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
        <td><span class="xref">TIn</span></td>
        <td><span class="parametername">source</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">TOut</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">TIn</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="parametername">TOut</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
