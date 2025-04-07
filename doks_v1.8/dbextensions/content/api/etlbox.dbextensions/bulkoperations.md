---
title: "BulkOperations"
description: "Details for Class BulkOperations (ETLBox.DbExtensions)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dbextensions"
weight: 10204
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbExtensions.BulkOperations">
  <h1 id="ETLBox_DbExtensions_BulkOperations" data-uid="ETLBox.DbExtensions.BulkOperations" class="text-break">Class BulkOperations</h1>
  <div class="markdown level0 summary"><p>Base class that is used for creating ETLBox bulk operations.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">BulkOperations</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.DbExtensions</h6>
  <h6><strong>Assembly</strong>: ETLBox.DbExtensions.dll</h6>
  <h5 id="ETLBox_DbExtensions_BulkOperations_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class BulkOperations
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DbExtensions_BulkOperations__ctor_" data-uid="ETLBox.DbExtensions.BulkOperations.#ctor*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations__ctor" data-uid="ETLBox.DbExtensions.BulkOperations.#ctor">BulkOperations()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BulkOperations()
```

{{< rawhtml >}}
  <a id="ETLBox_DbExtensions_BulkOperations__ctor_" data-uid="ETLBox.DbExtensions.BulkOperations.#ctor*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations__ctor_ETLBox_IConnectionManager_" data-uid="ETLBox.DbExtensions.BulkOperations.#ctor(ETLBox.IConnectionManager)">BulkOperations(IConnectionManager)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BulkOperations(IConnectionManager connectionManager)
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DbExtensions_BulkOperations_ConnectionManager_" data-uid="ETLBox.DbExtensions.BulkOperations.ConnectionManager*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_ConnectionManager" data-uid="ETLBox.DbExtensions.BulkOperations.ConnectionManager">ConnectionManager</h4>
  <div class="markdown level1 summary"><p>An ETLBox <a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a> used to wrap the current ADO.NET
connection manager.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IConnectionManager ConnectionManager { get; set; }
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
        <td><a class="xref" href="/api/etlbox/iconnectionmanager">IConnectionManager</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DbExtensions_BulkOperations_BulkDelete_" data-uid="ETLBox.DbExtensions.BulkOperations.BulkDelete*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_BulkDelete__1_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.DbExtensions.BulkOperations.BulkDelete``1(System.Collections.Generic.IEnumerable{``0})">BulkDelete&lt;T&gt;(IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"><p>Let you delete a large number of records in your database by utilizing bulk delete sql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkDelete<T>(IEnumerable<T> newRecords)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td><p>List containing the records for deletion.</p>
</td>
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
        <td><p>Data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOperations_BulkDelete_" data-uid="ETLBox.DbExtensions.BulkOperations.BulkDelete*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_BulkDelete__1_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.DbExtensions.BulkOperations.BulkDelete``1(System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkDelete&lt;T&gt;(IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p>Let you delete a large number of records in your database by utilizing bulk delete sql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkDelete<T>(IEnumerable<T> newRecords, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td><p>List containing the records for deletion.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td><p>Configurable options for the bulk operation.</p>
</td>
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
        <td><p>Data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOperations_BulkInsert_" data-uid="ETLBox.DbExtensions.BulkOperations.BulkInsert*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_BulkInsert__1_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.DbExtensions.BulkOperations.BulkInsert``1(System.Collections.Generic.IEnumerable{``0})">BulkInsert&lt;T&gt;(IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"><p>Let you insert a large number of records in your database by utilizing bulk insert sql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkInsert<T>(IEnumerable<T> newRecords)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td><p>List containing the records for insertion.</p>
</td>
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
        <td><p>Data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOperations_BulkInsert_" data-uid="ETLBox.DbExtensions.BulkOperations.BulkInsert*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_BulkInsert__1_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.DbExtensions.BulkOperations.BulkInsert``1(System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkInsert&lt;T&gt;(IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p>Let you insert a large number of records in your database by utilizing bulk insert sql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkInsert<T>(IEnumerable<T> newRecords, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td><p>List containing the records for insertion.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td><p>Configurable options for the bulk operation.</p>
</td>
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
        <td><p>Data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOperations_BulkMerge_" data-uid="ETLBox.DbExtensions.BulkOperations.BulkMerge*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_BulkMerge__1_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.DbExtensions.BulkOperations.BulkMerge``1(System.Collections.Generic.IEnumerable{``0})">BulkMerge&lt;T&gt;(IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"><p>Let you merge a large number of records in your database by utilizing bulk sql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkMerge<T>(IEnumerable<T> newRecords)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td><p>List containing the records for syncing.</p>
</td>
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
        <td><p>Data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOperations_BulkMerge_" data-uid="ETLBox.DbExtensions.BulkOperations.BulkMerge*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_BulkMerge__1_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_MergeBulkOptions___0___" data-uid="ETLBox.DbExtensions.BulkOperations.BulkMerge``1(System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.MergeBulkOptions{``0}})">BulkMerge&lt;T&gt;(IEnumerable&lt;T&gt;, Action&lt;MergeBulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p>Let you merge a large number of records in your database by utilizing bulk sql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkMerge<T>(IEnumerable<T> newRecords, Action<MergeBulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td><p>List containing the records for syncing.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/mergebulkoptions-1">MergeBulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td><p>Configurable options for the bulk operation.</p>
</td>
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
        <td><p>Data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOperations_BulkUpdate_" data-uid="ETLBox.DbExtensions.BulkOperations.BulkUpdate*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_BulkUpdate__1_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.DbExtensions.BulkOperations.BulkUpdate``1(System.Collections.Generic.IEnumerable{``0})">BulkUpdate&lt;T&gt;(IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"><p>Let you update a large number of records in your database by utilizing bulk update sql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkUpdate<T>(IEnumerable<T> newRecords)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td><p>List containing the records for updating.</p>
</td>
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
        <td><p>Data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOperations_BulkUpdate_" data-uid="ETLBox.DbExtensions.BulkOperations.BulkUpdate*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOperations_BulkUpdate__1_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.DbExtensions.BulkOperations.BulkUpdate``1(System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkUpdate&lt;T&gt;(IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p>Let you update a large number of records in your database by utilizing bulk update sql.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkUpdate<T>(IEnumerable<T> newRecords, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td><p>List containing the records for updating.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td><p>Configurable options for the bulk operation.</p>
</td>
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
        <td><p>Data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
