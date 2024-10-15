---
title: "BulkSqlGenerator<T>"
description: "Details for Class BulkSqlGenerator<T> (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10222
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.BulkSqlGenerator`1">
  <h1 id="ETLBox_Helper_BulkSqlGenerator_1" data-uid="ETLBox.Helper.BulkSqlGenerator`1" class="text-break">Class BulkSqlGenerator&lt;T&gt;
</h1>
  <div class="markdown level0 summary"><p>This class creates the necessary sql statements that simulate the missing bulk insert function in various database or Odbc/OleDb connections.
Normally this will be a insert into with multiple values, but depending on the database type this can be different.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">BulkSqlGenerator&lt;T&gt;</span></div>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_BulkSqlGenerator_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class BulkSqlGenerator<T> where T : DbParameter, new()
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
        <td><p>ADO.NET database parameter type</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Helper_BulkSqlGenerator_1__ctor_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.#ctor*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1__ctor_ETLBox_ITableData_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.#ctor(ETLBox.ITableData)">BulkSqlGenerator(ITableData)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public BulkSqlGenerator(ITableData data)
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_AccessDummyTableName_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.AccessDummyTableName*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_AccessDummyTableName" data-uid="ETLBox.Helper.BulkSqlGenerator`1.AccessDummyTableName">AccessDummyTableName</h4>
  <div class="markdown level1 summary"><p>When creating a bulk insert sql statement for Access, a dummy table is needed.
The name of the dummy table is specified here.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AccessDummyTableName { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_AddDbTypesFromDefinition_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.AddDbTypesFromDefinition*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_AddDbTypesFromDefinition" data-uid="ETLBox.Helper.BulkSqlGenerator`1.AddDbTypesFromDefinition">AddDbTypesFromDefinition</h4>
  <div class="markdown level1 summary"><p>If set to true, the parameter list will contain not only the object value, but also
the DbType and Size of the parameter. Some ADO.NET connectors can derive the database
type by the value type, others prefer to have some eplicitly set.
Default is false.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool AddDbTypesFromDefinition { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_AddParameterCastInSql_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.AddParameterCastInSql*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_AddParameterCastInSql" data-uid="ETLBox.Helper.BulkSqlGenerator`1.AddParameterCastInSql">AddParameterCastInSql</h4>
  <div class="markdown level1 summary"><p>If set to true, the parameter name is encapsulated with a CAST expression.
The datatype is the same data types used in the table definition.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool AddParameterCastInSql { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_ConnectionType_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.ConnectionType*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_ConnectionType" data-uid="ETLBox.Helper.BulkSqlGenerator`1.ConnectionType">ConnectionType</h4>
  <div class="markdown level1 summary"><p>The type of the database that the bulk insert statement is designed for</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConnectionType ConnectionType { get; set; }
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
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_HasNextRecord_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.HasNextRecord*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_HasNextRecord" data-uid="ETLBox.Helper.BulkSqlGenerator`1.HasNextRecord">HasNextRecord</h4>
  <div class="markdown level1 summary"><p>Indicates if all data was read</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool HasNextRecord { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_JoinColumnNames_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.JoinColumnNames*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_JoinColumnNames" data-uid="ETLBox.Helper.BulkSqlGenerator`1.JoinColumnNames">JoinColumnNames</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<string> JoinColumnNames { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_Limit_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.Limit*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_Limit" data-uid="ETLBox.Helper.BulkSqlGenerator`1.Limit">Limit</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int Limit { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_NoParameterForNulls_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.NoParameterForNulls*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_NoParameterForNulls" data-uid="ETLBox.Helper.BulkSqlGenerator`1.NoParameterForNulls">NoParameterForNulls</h4>
  <div class="markdown level1 summary"><p>If <a class="xref" href="/api/etlbox.helper/bulksqlgenerator-1#ETLBox_Helper_BulkSqlGenerator_1_UseParameterQuery">UseParameterQuery</a> is set to true,
all values are written into parameter objects -including nulls.
To avoid having parameters for null values, set this flag to true.
Nulls will then be converted into &quot;null&quot; in the statement, and no parameter
is used.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool NoParameterForNulls { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_PP_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.PP*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_PP" data-uid="ETLBox.Helper.BulkSqlGenerator`1.PP">PP</h4>
  <div class="markdown level1 summary"><p>The escape character use for the parameter name (default is @ for most databases)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string PP { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_Parameters_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.Parameters*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_Parameters" data-uid="ETLBox.Helper.BulkSqlGenerator`1.Parameters">Parameters</h4>
  <div class="markdown level1 summary"><p>A list of parameters that contain the parameter objects for the generated sql query.
Only has values if <a class="xref" href="/api/etlbox.helper/bulksqlgenerator-1#ETLBox_Helper_BulkSqlGenerator_1_UseParameterQuery">UseParameterQuery</a> is true.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<T> Parameters { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;T&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_QB_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.QB*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_QB" data-uid="ETLBox.Helper.BulkSqlGenerator`1.QB">QB</h4>
  <div class="markdown level1 summary"><p>The quotatation begin character that the database uses. (E.g. '[' for SqlServer or '&quot;' for Postgres)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QB { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_QE_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.QE*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_QE" data-uid="ETLBox.Helper.BulkSqlGenerator`1.QE">QE</h4>
  <div class="markdown level1 summary"><p>The quotatation end character that the database uses. (E.g. ']' for SqlServer or '&quot;' for Postgres)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QE { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_SelectColumnNames_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.SelectColumnNames*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_SelectColumnNames" data-uid="ETLBox.Helper.BulkSqlGenerator`1.SelectColumnNames">SelectColumnNames</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<string> SelectColumnNames { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_SetColumnNames_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.SetColumnNames*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_SetColumnNames" data-uid="ETLBox.Helper.BulkSqlGenerator`1.SetColumnNames">SetColumnNames</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<string> SetColumnNames { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_TableData_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.TableData*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_TableData" data-uid="ETLBox.Helper.BulkSqlGenerator`1.TableData">TableData</h4>
  <div class="markdown level1 summary"><p>The data used for the bulk operation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ITableData TableData { get; set; }
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
        <td><a class="xref" href="/api/etlbox/itabledata">ITableData</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_TableName_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.TableName*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_TableName" data-uid="ETLBox.Helper.BulkSqlGenerator`1.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>The destination table name</p>
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_TryConvertParameterData_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.TryConvertParameterData*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_TryConvertParameterData" data-uid="ETLBox.Helper.BulkSqlGenerator`1.TryConvertParameterData">TryConvertParameterData</h4>
  <div class="markdown level1 summary"><p>If set to true, the values for the parameters are tried to convert into the corresponding .NET
data type that is suitable for the corresponding database column. If a database column is of type INTEGER,
but the input data is a string like &quot;7&quot;, then the parameter value is converted into an System.Int32.
The most ADO.NET connectors do this automatically, but this can be useful for Postgres.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool TryConvertParameterData { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_UseNamedParameters_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.UseNamedParameters*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_UseNamedParameters" data-uid="ETLBox.Helper.BulkSqlGenerator`1.UseNamedParameters">UseNamedParameters</h4>
  <div class="markdown level1 summary"><p>Indicates that the parameter variables in the sql have a name, otherwise a questionmark (?) is used</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool UseNamedParameters { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_UseParameterQuery_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.UseParameterQuery*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_UseParameterQuery" data-uid="ETLBox.Helper.BulkSqlGenerator`1.UseParameterQuery">UseParameterQuery</h4>
  <div class="markdown level1 summary"><p>Indicates that the values are stored in parameter objects.
Default is true.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool UseParameterQuery { get; set; }
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
  <a id="ETLBox_Helper_BulkSqlGenerator_1_ValueToSqlConversionFunc_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.ValueToSqlConversionFunc*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_ValueToSqlConversionFunc" data-uid="ETLBox.Helper.BulkSqlGenerator`1.ValueToSqlConversionFunc">ValueToSqlConversionFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<ConversionContext, string> ValueToSqlConversionFunc { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="/api/etlbox.helper/conversioncontext">ConversionContext</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_CreateBulkDeleteStatement_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.CreateBulkDeleteStatement*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_CreateBulkDeleteStatement" data-uid="ETLBox.Helper.BulkSqlGenerator`1.CreateBulkDeleteStatement">CreateBulkDeleteStatement()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string CreateBulkDeleteStatement()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_CreateBulkInsertStatement_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.CreateBulkInsertStatement*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_CreateBulkInsertStatement" data-uid="ETLBox.Helper.BulkSqlGenerator`1.CreateBulkInsertStatement">CreateBulkInsertStatement()</h4>
  <div class="markdown level1 summary"><p>Create the sql that can be used as a bulk insert.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string CreateBulkInsertStatement()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_CreateBulkSelectStatement_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.CreateBulkSelectStatement*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_CreateBulkSelectStatement" data-uid="ETLBox.Helper.BulkSqlGenerator`1.CreateBulkSelectStatement">CreateBulkSelectStatement()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string CreateBulkSelectStatement()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_BulkSqlGenerator_1_CreateBulkUpdateStatement_" data-uid="ETLBox.Helper.BulkSqlGenerator`1.CreateBulkUpdateStatement*"></a>
  <h4 id="ETLBox_Helper_BulkSqlGenerator_1_CreateBulkUpdateStatement" data-uid="ETLBox.Helper.BulkSqlGenerator`1.CreateBulkUpdateStatement">CreateBulkUpdateStatement()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string CreateBulkUpdateStatement()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
