---
title: "ObjectCopy<T>"
description: "Details for Class ObjectCopy<T> (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10291
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ObjectCopy`1">
  <h1 id="ETLBox_ObjectCopy_1" data-uid="ETLBox.ObjectCopy`1" class="text-break">Class ObjectCopy&lt;T&gt;
</h1>
  <div class="markdown level0 summary"><p>This class exposes cloning functionality for objects of a specific type.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/objectcopy">ObjectCopy</a></div>
    <div class="level2"><span class="xref">ObjectCopy&lt;T&gt;</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/objectcopy#ETLBox_ObjectCopy_TryCreateShallowCopyOfPublicProps__1___0_">ObjectCopy.TryCreateShallowCopyOfPublicProps&lt;T&gt;(T)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/objectcopy#ETLBox_ObjectCopy_TryCreateShallowCopyOfPublicProps__2___0_">ObjectCopy.TryCreateShallowCopyOfPublicProps&lt;TIn, TOut&gt;(TIn)</a>
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
  <h5 id="ETLBox_ObjectCopy_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ObjectCopy<T> : ObjectCopy
```

{{< rawhtml >}}
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
        <td><p>The type of the object that should be cloned.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ObjectCopy_1__ctor_" data-uid="ETLBox.ObjectCopy`1.#ctor*"></a>
  <h4 id="ETLBox_ObjectCopy_1__ctor" data-uid="ETLBox.ObjectCopy`1.#ctor">ObjectCopy()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectCopy()
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ObjectCopy_1_Clone_" data-uid="ETLBox.ObjectCopy`1.Clone*"></a>
  <h4 id="ETLBox_ObjectCopy_1_Clone__0_" data-uid="ETLBox.ObjectCopy`1.Clone(`0)">Clone(T)</h4>
  <div class="markdown level1 summary"><p>Creates a deep clone of the object.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public T Clone(T row)
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
        <td><p>The object that needs to be cloned.</p>
</td>
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
        <td><p>A deep clone of the provided object.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
