---
title: "HashHelper"
description: "Details for Class HashHelper (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10267
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.HashHelper">
  <h1 id="ETLBox_Helper_HashHelper" data-uid="ETLBox.Helper.HashHelper" class="text-break">Class HashHelper
</h1>
  <div class="markdown level0 summary"><p>This class creates unique strings containing hash values.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">HashHelper</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_HashHelper_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class HashHelper
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_HashHelper_CreateChar40Hash_" data-uid="ETLBox.Helper.HashHelper.CreateChar40Hash*"></a>
  <h4 id="ETLBox_Helper_HashHelper_CreateChar40Hash_ETLBox_ControlFlow_ILoggableTask_" data-uid="ETLBox.Helper.HashHelper.CreateChar40Hash(ETLBox.ControlFlow.ILoggableTask)">CreateChar40Hash(ILoggableTask)</h4>
  <div class="markdown level1 summary"><p>Creates a unique hash string from a loggable task</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string CreateChar40Hash(ILoggableTask task)
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
        <td><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></td>
        <td><span class="parametername">task</span></td>
        <td><p>The ETLBox loggable task</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">string</span></td>
        <td><p>A unique readable hash string with 40 character</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_HashHelper_CreateChar40Hash_" data-uid="ETLBox.Helper.HashHelper.CreateChar40Hash*"></a>
  <h4 id="ETLBox_Helper_HashHelper_CreateChar40Hash_System_String_" data-uid="ETLBox.Helper.HashHelper.CreateChar40Hash(System.String)">CreateChar40Hash(string)</h4>
  <div class="markdown level1 summary"><p>Creates a 40 character unique hash string</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string CreateChar40Hash(string text)
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
        <td><span class="parametername">text</span></td>
        <td><p>Text that needs to be hashed</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">string</span></td>
        <td><p>A unique readable hash string with 40 characters</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_HashHelper_HashSum_" data-uid="ETLBox.Helper.HashHelper.HashSum*"></a>
  <h4 id="ETLBox_Helper_HashHelper_HashSum_System_Collections_Generic_IEnumerable_System_Object__" data-uid="ETLBox.Helper.HashHelper.HashSum(System.Collections.Generic.IEnumerable{System.Object})">HashSum(IEnumerable&lt;object&gt;)</h4>
  <div class="markdown level1 summary"><p>Addition of the hash values for a list of object</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int HashSum(IEnumerable<object> objectList)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<span class="xref">object</span>&gt;</td>
        <td><span class="parametername">objectList</span></td>
        <td><p>A list of objects</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">int</span></td>
        <td><p>A unique hash value</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
