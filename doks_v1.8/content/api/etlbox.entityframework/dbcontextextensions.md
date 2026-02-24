---
title: "DbContextExtensions"
description: "Details for Class DbContextExtensions (ETLBox.EntityFramework)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.entityframework"
weight: 10211
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.EntityFramework.DbContextExtensions">
  <h1 id="ETLBox_EntityFramework_DbContextExtensions" data-uid="ETLBox.EntityFramework.DbContextExtensions" class="text-break">Class DbContextExtensions</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">DbContextExtensions</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.EntityFramework</h6>
  <h6><strong>Assembly</strong>: ETLBox.EntityFramework.dll</h6>
  <h5 id="ETLBox_EntityFramework_DbContextExtensions_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class DbContextExtensions
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_EntityFramework_DbContextExtensions_BulkDelete_" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkDelete*"></a>
  <h4 id="ETLBox_EntityFramework_DbContextExtensions_BulkDelete__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkDelete``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0})">BulkDelete&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkDelete<T>(this DbContext dbContext, IEnumerable<T> entities)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontext">DbContext</a></td>
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_DbContextExtensions_BulkDelete_" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkDelete*"></a>
  <h4 id="ETLBox_EntityFramework_DbContextExtensions_BulkDelete__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkDelete``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkDelete&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkDelete<T>(this DbContext dbContext, IEnumerable<T> entities, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontext">DbContext</a></td>
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
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
  <a id="ETLBox_EntityFramework_DbContextExtensions_BulkInsert_" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkInsert*"></a>
  <h4 id="ETLBox_EntityFramework_DbContextExtensions_BulkInsert__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkInsert``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0})">BulkInsert&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkInsert<T>(this DbContext dbContext, IEnumerable<T> entities)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontext">DbContext</a></td>
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_DbContextExtensions_BulkInsert_" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkInsert*"></a>
  <h4 id="ETLBox_EntityFramework_DbContextExtensions_BulkInsert__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkInsert``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkInsert&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkInsert<T>(this DbContext dbContext, IEnumerable<T> entities, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontext">DbContext</a></td>
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
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
  <a id="ETLBox_EntityFramework_DbContextExtensions_BulkMerge_" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkMerge*"></a>
  <h4 id="ETLBox_EntityFramework_DbContextExtensions_BulkMerge__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkMerge``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0})">BulkMerge&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkMerge<T>(this DbContext dbContext, IEnumerable<T> entities)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontext">DbContext</a></td>
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_DbContextExtensions_BulkMerge_" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkMerge*"></a>
  <h4 id="ETLBox_EntityFramework_DbContextExtensions_BulkMerge__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_MergeBulkOptions___0___" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkMerge``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.MergeBulkOptions{``0}})">BulkMerge&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;, Action&lt;MergeBulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkMerge<T>(this DbContext dbContext, IEnumerable<T> entities, Action<MergeBulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontext">DbContext</a></td>
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/mergebulkoptions-1">MergeBulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
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
  <a id="ETLBox_EntityFramework_DbContextExtensions_BulkUpdate_" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkUpdate*"></a>
  <h4 id="ETLBox_EntityFramework_DbContextExtensions_BulkUpdate__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkUpdate``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0})">BulkUpdate&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkUpdate<T>(this DbContext dbContext, IEnumerable<T> entities)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontext">DbContext</a></td>
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_DbContextExtensions_BulkUpdate_" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkUpdate*"></a>
  <h4 id="ETLBox_EntityFramework_DbContextExtensions_BulkUpdate__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.EntityFramework.DbContextExtensions.BulkUpdate``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkUpdate&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkUpdate<T>(this DbContext dbContext, IEnumerable<T> entities, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.entityframeworkcore.dbcontext">DbContext</a></td>
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
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

{{< /rawhtml >}}
