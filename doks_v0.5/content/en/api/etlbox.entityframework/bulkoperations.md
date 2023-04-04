---
title: "BulkOperations"
description: "Details for Class BulkOperations (ETLBox.EntityFramework)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.entityframework"
weight: 10257
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.EntityFramework.BulkOperations">
  <h1 id="ETLBox_EntityFramework_BulkOperations" data-uid="ETLBox.EntityFramework.BulkOperations" class="text-break">Class BulkOperations
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">BulkOperations</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.EntityFramework</h6>
  <h6><strong>Assembly</strong>: ETLBox.EntityFramework.dll</h6>
  <h5 id="ETLBox_EntityFramework_BulkOperations_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class BulkOperations
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_EntityFramework_BulkOperations__ctor_" data-uid="ETLBox.EntityFramework.BulkOperations.#ctor*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations__ctor" data-uid="ETLBox.EntityFramework.BulkOperations.#ctor">BulkOperations()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BulkOperations()
```

{{< rawhtml >}}
  <a id="ETLBox_EntityFramework_BulkOperations__ctor_" data-uid="ETLBox.EntityFramework.BulkOperations.#ctor*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations__ctor_Microsoft_EntityFrameworkCore_DbContext_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.EntityFramework.BulkOperations.#ctor(Microsoft.EntityFrameworkCore.DbContext,ETLBox.Connection.IConnectionManager)">BulkOperations(DbContext, IConnectionManager)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BulkOperations(DbContext context, IConnectionManager connectionManager)
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
        <td><span class="xref">Microsoft.EntityFrameworkCore.DbContext</span></td>
        <td><span class="parametername">context</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOperations__ctor_" data-uid="ETLBox.EntityFramework.BulkOperations.#ctor*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations__ctor_Microsoft_EntityFrameworkCore_DbContext_" data-uid="ETLBox.EntityFramework.BulkOperations.#ctor(Microsoft.EntityFrameworkCore.DbContext)">BulkOperations(DbContext)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BulkOperations(DbContext context)
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
        <td><span class="xref">Microsoft.EntityFrameworkCore.DbContext</span></td>
        <td><span class="parametername">context</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_EntityFramework_BulkOperations_ConnectionManager_" data-uid="ETLBox.EntityFramework.BulkOperations.ConnectionManager*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_ConnectionManager" data-uid="ETLBox.EntityFramework.BulkOperations.ConnectionManager">ConnectionManager</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IConnectionManager ConnectionManager { get; set; }
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOperations_DbConnectionManager_" data-uid="ETLBox.EntityFramework.BulkOperations.DbConnectionManager*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_DbConnectionManager" data-uid="ETLBox.EntityFramework.BulkOperations.DbConnectionManager">DbConnectionManager</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual IConnectionManager DbConnectionManager { get; }
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_EntityFramework_BulkOperations_DbContext_" data-uid="ETLBox.EntityFramework.BulkOperations.DbContext*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_DbContext" data-uid="ETLBox.EntityFramework.BulkOperations.DbContext">DbContext</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbContext DbContext { get; set; }
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
        <td><span class="xref">Microsoft.EntityFrameworkCore.DbContext</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_EntityFramework_BulkOperations_BulkDelete_" data-uid="ETLBox.EntityFramework.BulkOperations.BulkDelete*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_BulkDelete__1_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_EntityFramework_BulkOptions___0___" data-uid="ETLBox.EntityFramework.BulkOperations.BulkDelete``1(System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.EntityFramework.BulkOptions{``0}})">BulkDelete&lt;T&gt;(IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkDelete<T>(IEnumerable<T> newRecords, Action<BulkOptions<T>> options)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.entityframework/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_EntityFramework_BulkOperations_BulkDelete_" data-uid="ETLBox.EntityFramework.BulkOperations.BulkDelete*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_BulkDelete__1_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.BulkOperations.BulkDelete``1(System.Collections.Generic.IEnumerable{``0})">BulkDelete&lt;T&gt;(IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkDelete<T>(IEnumerable<T> newRecords)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_EntityFramework_BulkOperations_BulkInsert_" data-uid="ETLBox.EntityFramework.BulkOperations.BulkInsert*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_BulkInsert__1_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_EntityFramework_BulkOptions___0___" data-uid="ETLBox.EntityFramework.BulkOperations.BulkInsert``1(System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.EntityFramework.BulkOptions{``0}})">BulkInsert&lt;T&gt;(IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkInsert<T>(IEnumerable<T> newRecords, Action<BulkOptions<T>> options)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.entityframework/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_EntityFramework_BulkOperations_BulkInsert_" data-uid="ETLBox.EntityFramework.BulkOperations.BulkInsert*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_BulkInsert__1_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.BulkOperations.BulkInsert``1(System.Collections.Generic.IEnumerable{``0})">BulkInsert&lt;T&gt;(IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkInsert<T>(IEnumerable<T> newRecords)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_EntityFramework_BulkOperations_BulkMerge_" data-uid="ETLBox.EntityFramework.BulkOperations.BulkMerge*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_BulkMerge__1_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_EntityFramework_BulkOptions___0___" data-uid="ETLBox.EntityFramework.BulkOperations.BulkMerge``1(System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.EntityFramework.BulkOptions{``0}})">BulkMerge&lt;T&gt;(IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkMerge<T>(IEnumerable<T> newRecords, Action<BulkOptions<T>> options)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.entityframework/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_EntityFramework_BulkOperations_BulkMerge_" data-uid="ETLBox.EntityFramework.BulkOperations.BulkMerge*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_BulkMerge__1_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.BulkOperations.BulkMerge``1(System.Collections.Generic.IEnumerable{``0})">BulkMerge&lt;T&gt;(IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkMerge<T>(IEnumerable<T> newRecords)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_EntityFramework_BulkOperations_BulkUpdate_" data-uid="ETLBox.EntityFramework.BulkOperations.BulkUpdate*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_BulkUpdate__1_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_EntityFramework_BulkOptions___0___" data-uid="ETLBox.EntityFramework.BulkOperations.BulkUpdate``1(System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.EntityFramework.BulkOptions{``0}})">BulkUpdate&lt;T&gt;(IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkUpdate<T>(IEnumerable<T> newRecords, Action<BulkOptions<T>> options)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.entityframework/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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
  <a id="ETLBox_EntityFramework_BulkOperations_BulkUpdate_" data-uid="ETLBox.EntityFramework.BulkOperations.BulkUpdate*"></a>
  <h4 id="ETLBox_EntityFramework_BulkOperations_BulkUpdate__1_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.BulkOperations.BulkUpdate``1(System.Collections.Generic.IEnumerable{``0})">BulkUpdate&lt;T&gt;(IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void BulkUpdate<T>(IEnumerable<T> newRecords)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">newRecords</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
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

{{< /rawhtml >}}
