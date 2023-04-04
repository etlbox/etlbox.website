---
title: "DbContextExtensions"
description: "Details for Class DbContextExtensions (ETLBox.EntityFramework.MySql)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.entityframework.mysql"
weight: 10259
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions">
  <h1 id="ETLBox_EntityFramework_MySql_DbContextExtensions" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions" class="text-break">Class DbContextExtensions
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">DbContextExtensions</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.EntityFramework.MySql</h6>
  <h6><strong>Assembly</strong>: ETLBox.EntityFramework.MySql.dll</h6>
  <h5 id="ETLBox_EntityFramework_MySql_DbContextExtensions_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class DbContextExtensions
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkDelete_" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkDelete*"></a>
  <h4 id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkDelete__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_EntityFramework_BulkOptions___0___" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkDelete``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.EntityFramework.BulkOptions{``0}})">BulkDelete&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkDelete<T>(this DbContext dbContext, IEnumerable<T> entities, Action<BulkOptions<T>> options)
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
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkDelete_" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkDelete*"></a>
  <h4 id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkDelete__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkDelete``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0})">BulkDelete&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkDelete<T>(this DbContext dbContext, IEnumerable<T> entities)
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
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkInsert_" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkInsert*"></a>
  <h4 id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkInsert__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_EntityFramework_BulkOptions___0___" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkInsert``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.EntityFramework.BulkOptions{``0}})">BulkInsert&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkInsert<T>(this DbContext dbContext, IEnumerable<T> entities, Action<BulkOptions<T>> options)
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
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkInsert_" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkInsert*"></a>
  <h4 id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkInsert__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkInsert``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0})">BulkInsert&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkInsert<T>(this DbContext dbContext, IEnumerable<T> entities)
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
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkMerge_" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkMerge*"></a>
  <h4 id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkMerge__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_EntityFramework_BulkOptions___0___" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkMerge``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.EntityFramework.BulkOptions{``0}})">BulkMerge&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkMerge<T>(this DbContext dbContext, IEnumerable<T> entities, Action<BulkOptions<T>> options)
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
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkMerge_" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkMerge*"></a>
  <h4 id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkMerge__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkMerge``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0})">BulkMerge&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkMerge<T>(this DbContext dbContext, IEnumerable<T> entities)
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
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkUpdate_" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkUpdate*"></a>
  <h4 id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkUpdate__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_EntityFramework_BulkOptions___0___" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkUpdate``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.EntityFramework.BulkOptions{``0}})">BulkUpdate&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkUpdate<T>(this DbContext dbContext, IEnumerable<T> entities, Action<BulkOptions<T>> options)
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
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
  <a id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkUpdate_" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkUpdate*"></a>
  <h4 id="ETLBox_EntityFramework_MySql_DbContextExtensions_BulkUpdate__1_Microsoft_EntityFrameworkCore_DbContext_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.EntityFramework.MySql.DbContextExtensions.BulkUpdate``1(Microsoft.EntityFrameworkCore.DbContext,System.Collections.Generic.IEnumerable{``0})">BulkUpdate&lt;T&gt;(DbContext, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void BulkUpdate<T>(this DbContext dbContext, IEnumerable<T> entities)
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
        <td><span class="parametername">dbContext</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;T&gt;</td>
        <td><span class="parametername">entities</span></td>
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
