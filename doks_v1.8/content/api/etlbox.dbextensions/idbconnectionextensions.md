---
title: "IDbConnectionExtensions"
description: "Details for Class IDbConnectionExtensions (ETLBox.DbExtensions)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dbextensions"
weight: 10207
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions">
  <h1 id="ETLBox_DbExtensions_IDbConnectionExtensions" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions" class="text-break">Class IDbConnectionExtensions</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">IDbConnectionExtensions</span></div>
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
  <h5 id="ETLBox_DbExtensions_IDbConnectionExtensions_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class IDbConnectionExtensions
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkDelete_" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkDelete*"></a>
  <h4 id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkDelete__1_System_Data_IDbConnection_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkDelete``1(System.Data.IDbConnection,System.Collections.Generic.IEnumerable{``0})">BulkDelete&lt;T&gt;(IDbConnection, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk delete operation on the specified database connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IDbConnection BulkDelete<T>(this IDbConnection connection, IEnumerable<T> data)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The database connection.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to be deleted.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><p>The database connection after execution.</p>
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
        <td><p>The data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkDelete_" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkDelete*"></a>
  <h4 id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkDelete__1_System_Data_IDbConnection_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkDelete``1(System.Data.IDbConnection,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkDelete&lt;T&gt;(IDbConnection, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk delete operation on the specified database connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IDbConnection BulkDelete<T>(this IDbConnection connection, IEnumerable<T> data, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The database connection.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to be deleted.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td><p>The configurable options for the bulk delete operation.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><p>The database connection after execution.</p>
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
        <td><p>The data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkInsert_" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkInsert*"></a>
  <h4 id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkInsert__1_System_Data_IDbConnection_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkInsert``1(System.Data.IDbConnection,System.Collections.Generic.IEnumerable{``0})">BulkInsert&lt;T&gt;(IDbConnection, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk insert operation on the specified database connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IDbConnection BulkInsert<T>(this IDbConnection connection, IEnumerable<T> data)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The database connection.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to be inserted.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><p>The database connection after execution.</p>
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
        <td><p>The data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkInsert_" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkInsert*"></a>
  <h4 id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkInsert__1_System_Data_IDbConnection_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkInsert``1(System.Data.IDbConnection,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkInsert&lt;T&gt;(IDbConnection, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk insert operation on the specified database connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IDbConnection BulkInsert<T>(this IDbConnection connection, IEnumerable<T> data, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The database connection.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to be inserted.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td><p>The configurable options for the bulk insert operation.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><p>The database connection after execution.</p>
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
        <td><p>The data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkMerge_" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkMerge*"></a>
  <h4 id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkMerge__1_System_Data_IDbConnection_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkMerge``1(System.Data.IDbConnection,System.Collections.Generic.IEnumerable{``0})">BulkMerge&lt;T&gt;(IDbConnection, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a merge operation on the specified database connection.
The merge operation is a combination of insert, update, and delete operations.
By default, the Merge will operation in full, which tries to delete rows in the target table
that don't exist in the source data.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IDbConnection BulkMerge<T>(this IDbConnection connection, IEnumerable<T> data)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The database connection.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to be deleted.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><p>The database connection after execution.</p>
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
        <td><p>The data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkMerge_" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkMerge*"></a>
  <h4 id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkMerge__1_System_Data_IDbConnection_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_MergeBulkOptions___0___" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkMerge``1(System.Data.IDbConnection,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.MergeBulkOptions{``0}})">BulkMerge&lt;T&gt;(IDbConnection, IEnumerable&lt;T&gt;, Action&lt;MergeBulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a merge operation on the specified database connection.
The merge operation is a combination of insert, update, and delete operations.
By default, the Merge will operation in full, which tries to delete rows in the target table
that don't exist in the source data.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IDbConnection BulkMerge<T>(this IDbConnection connection, IEnumerable<T> data, Action<MergeBulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The database connection.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to be deleted.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/mergebulkoptions-1">MergeBulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td><p>The configurable options for the bulk delete operation.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><p>The database connection after execution.</p>
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
        <td><p>The data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkUpdate_" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkUpdate*"></a>
  <h4 id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkUpdate__1_System_Data_IDbConnection_System_Collections_Generic_IEnumerable___0__" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkUpdate``1(System.Data.IDbConnection,System.Collections.Generic.IEnumerable{``0})">BulkUpdate&lt;T&gt;(IDbConnection, IEnumerable&lt;T&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk update operation on the specified database connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IDbConnection BulkUpdate<T>(this IDbConnection connection, IEnumerable<T> data)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The database connection.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to be updated.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><p>The database connection after execution.</p>
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
        <td><p>The data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkUpdate_" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkUpdate*"></a>
  <h4 id="ETLBox_DbExtensions_IDbConnectionExtensions_BulkUpdate__1_System_Data_IDbConnection_System_Collections_Generic_IEnumerable___0__System_Action_ETLBox_DbExtensions_BulkOptions___0___" data-uid="ETLBox.DbExtensions.IDbConnectionExtensions.BulkUpdate``1(System.Data.IDbConnection,System.Collections.Generic.IEnumerable{``0},System.Action{ETLBox.DbExtensions.BulkOptions{``0}})">BulkUpdate&lt;T&gt;(IDbConnection, IEnumerable&lt;T&gt;, Action&lt;BulkOptions&lt;T&gt;&gt;)</h4>
  <div class="markdown level1 summary"><p>Performs a bulk update operation on the specified database connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IDbConnection BulkUpdate<T>(this IDbConnection connection, IEnumerable<T> data, Action<BulkOptions<T>> options)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><span class="parametername">connection</span></td>
        <td><p>The database connection.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1">IEnumerable</a>&lt;T&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to be updated.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions</a>&lt;T&gt;&gt;</td>
        <td><span class="parametername">options</span></td>
        <td><p>The configurable options for the bulk update operation.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.idbconnection">IDbConnection</a></td>
        <td><p>The database connection after execution.</p>
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
        <td><p>The data type used for the bulk operation.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
