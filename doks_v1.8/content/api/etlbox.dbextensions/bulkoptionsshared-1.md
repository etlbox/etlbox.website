---
title: "BulkOptionsShared<T>"
description: "Details for Class BulkOptionsShared<T> (ETLBox.DbExtensions)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dbextensions"
weight: 10205
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1">
  <h1 id="ETLBox_DbExtensions_BulkOptionsShared_1" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1" class="text-break">Class BulkOptionsShared&lt;T&gt;</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">BulkOptionsShared&lt;T&gt;</span></div>
      <div class="level2"><a class="xref" href="/api/etlbox.dbextensions/bulkoptions-1">BulkOptions&lt;T&gt;</a></div>
      <div class="level2"><a class="xref" href="/api/etlbox.dbextensions/mergebulkoptions-1">MergeBulkOptions&lt;T&gt;</a></div>
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
  <h5 id="ETLBox_DbExtensions_BulkOptionsShared_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class BulkOptionsShared<T>
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
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_AllowIdentityInsert_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.AllowIdentityInsert*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_AllowIdentityInsert" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.AllowIdentityInsert">AllowIdentityInsert</h4>
  <div class="markdown level1 summary"><p>Enables identity insert for the operation - this will override
existing values in identity / auto-increment / serial columns.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool AllowIdentityInsert { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_BatchSize_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.BatchSize*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_BatchSize" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.BatchSize">BatchSize</h4>
  <div class="markdown level1 summary"><p>The number of records to be processed in a single batch.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int BatchSize { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_ColumnConverters_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.ColumnConverters*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_ColumnConverters" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.ColumnConverters">ColumnConverters</h4>
  <div class="markdown level1 summary"><p>Allows custom conversions for specific columns.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ColumnConverter> ColumnConverters { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox.dataflow/columnconverter">ColumnConverter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_ColumnMapping_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.ColumnMapping*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_ColumnMapping" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.ColumnMapping">ColumnMapping</h4>
  <div class="markdown level1 summary"><p>You can specify mapping between the property names of your input data and the database columns.
You can also specifiy here if you want to ignore particular properties/columns during the operation.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<DbColumnMap> ColumnMapping { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/dbcolumnmap">DbColumnMap</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_ErrorData_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.ErrorData*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_ErrorData" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.ErrorData">ErrorData</h4>
  <div class="markdown level1 summary"><p>Contains erroneous data.
<a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_RedirectErroneousBatches">RedirectErroneousBatches</a> must be set to true.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ETLBoxError> ErrorData { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_IdColumns_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.IdColumns*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_IdColumns" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.IdColumns">IdColumns</h4>
  <div class="markdown level1 summary"><p>You can specify the columns that are used to identify a row in the database.
This is only relevant for update/delete/merge operations.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<IdColumn> IdColumns { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/idcolumn">IdColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_IgnoreDefaultColumnsOnInsert_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.IgnoreDefaultColumnsOnInsert*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_IgnoreDefaultColumnsOnInsert" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.IgnoreDefaultColumnsOnInsert">IgnoreDefaultColumnsOnInsert</h4>
  <div class="markdown level1 summary"><p>When inserting data, columns that have a DEFAULT constraint are ignored.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IgnoreDefaultColumnsOnInsert { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_OnProgress_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.OnProgress*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_OnProgress" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.OnProgress">OnProgress</h4>
  <div class="markdown level1 summary"><p>Action is invoked for every processed batch.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<int> OnProgress { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_ReadGeneratedValues_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.ReadGeneratedValues*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_ReadGeneratedValues" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.ReadGeneratedValues">ReadGeneratedValues</h4>
  <div class="markdown level1 summary"><p>Indicates whether to read back generated values like auto-incremented IDs.
This will only work for databases that support this feature.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool ReadGeneratedValues { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_RedirectErroneousBatches_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.RedirectErroneousBatches*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_RedirectErroneousBatches" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.RedirectErroneousBatches">RedirectErroneousBatches</h4>
  <div class="markdown level1 summary"><p>Indicates whether to redirect erroneous batches.<br>
By default an exception is thrown when a batch can't be inserted into a database,
and the bulk operation is stopped.
Setting this to true won't stop execution when a batch can't be processed.
<a class="xref" href="/api/etlbox.dbextensions/bulkoptionsshared-1#ETLBox_DbExtensions_BulkOptionsShared_1_ErrorData">ErrorData</a> will hold details about flawed batch.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool RedirectErroneousBatches { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_TableName_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.TableName*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_TableName" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>By default, the table name is the type/class name of the data (or the type/class name + 's').
Assign a value if you want to specify a specific table name.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TableName { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_TablePrefix_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.TablePrefix*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_TablePrefix" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.TablePrefix">TablePrefix</h4>
  <div class="markdown level1 summary"><p>By default, the table name is either the type/class name of the data (or the type/class name + 's').
Set this value if you want to have a prefix added to this default.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TablePrefix { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DbExtensions_BulkOptionsShared_1_TableSuffix_" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.TableSuffix*"></a>
  <h4 id="ETLBox_DbExtensions_BulkOptionsShared_1_TableSuffix" data-uid="ETLBox.DbExtensions.BulkOptionsShared`1.TableSuffix">TableSuffix</h4>
  <div class="markdown level1 summary"><p>By default, the table name is either the type/class name of the data (or the type/class name + 's').
Set this value if you want to have a suffix added to this default.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TableSuffix { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
