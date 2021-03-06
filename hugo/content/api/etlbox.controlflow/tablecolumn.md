---
title: "TableColumn"
description: "Details for Class TableColumn (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10047
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.TableColumn">
  <h1 id="ETLBox_ControlFlow_TableColumn" data-uid="ETLBox.ControlFlow.TableColumn" class="text-break">Class TableColumn
  </h1>
  <div class="markdown level0 summary"><p>A column in table</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">TableColumn</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Object.Equals(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">System.Object.GetType()</span>
    </div>
    <div>
      <span class="xref">System.Object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">System.Object.ReferenceEquals(System.Object, System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_TableColumn_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class TableColumn
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_ControlFlow_TableColumn__ctor_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn__ctor" data-uid="ETLBox.ControlFlow.TableColumn.#ctor">TableColumn()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableColumn()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_TableColumn__ctor_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor(System.String,System.String)">TableColumn(String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableColumn(string name, string dataType)
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">dataType</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn__ctor_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn__ctor_System_String_System_String_System_Boolean_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor(System.String,System.String,System.Boolean)">TableColumn(String, String, Boolean)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableColumn(string name, string dataType, bool allowNulls)
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">dataType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">allowNulls</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn__ctor_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn__ctor_System_String_System_String_System_Boolean_System_Boolean_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor(System.String,System.String,System.Boolean,System.Boolean)">TableColumn(String, String, Boolean, Boolean)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableColumn(string name, string dataType, bool allowNulls, bool isPrimaryKey)
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">dataType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">allowNulls</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">isPrimaryKey</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn__ctor_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn__ctor_System_String_System_String_System_Boolean_System_Boolean_System_Boolean_" data-uid="ETLBox.ControlFlow.TableColumn.#ctor(System.String,System.String,System.Boolean,System.Boolean,System.Boolean)">TableColumn(String, String, Boolean, Boolean, Boolean)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableColumn(string name, string dataType, bool allowNulls, bool isPrimaryKey, bool isIdentity)
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">dataType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">allowNulls</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">isPrimaryKey</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Boolean</span></td>
        <td><span class="parametername">isIdentity</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_TableColumn_AllowNulls_" data-uid="ETLBox.ControlFlow.TableColumn.AllowNulls*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_AllowNulls" data-uid="ETLBox.ControlFlow.TableColumn.AllowNulls">AllowNulls</h4>
  <div class="markdown level1 summary"><p>True, if the column is nullable. By default a column is not nullable.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool AllowNulls { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_Collation_" data-uid="ETLBox.ControlFlow.TableColumn.Collation*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_Collation" data-uid="ETLBox.ControlFlow.TableColumn.Collation">Collation</h4>
  <div class="markdown level1 summary"><p>The collation used for the column. Leave empty if you want to use the default collation.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Collation { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_Comment_" data-uid="ETLBox.ControlFlow.TableColumn.Comment*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_Comment" data-uid="ETLBox.ControlFlow.TableColumn.Comment">Comment</h4>
  <div class="markdown level1 summary"><p>A comment for the column (not supported by every database)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Comment { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_ComputedColumn_" data-uid="ETLBox.ControlFlow.TableColumn.ComputedColumn*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_ComputedColumn" data-uid="ETLBox.ControlFlow.TableColumn.ComputedColumn">ComputedColumn</h4>
  <div class="markdown level1 summary"><p>The calculation if the column should be computed.
Not all databases may support this.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ComputedColumn { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_DataType_" data-uid="ETLBox.ControlFlow.TableColumn.DataType*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_DataType" data-uid="ETLBox.ControlFlow.TableColumn.DataType">DataType</h4>
  <div class="markdown level1 summary"><p>The sql data type of the column (e.g. &quot;INT&quot; or &quot;VARCHAR(30)&quot;)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DataType { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_DefaultValue_" data-uid="ETLBox.ControlFlow.TableColumn.DefaultValue*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_DefaultValue" data-uid="ETLBox.ControlFlow.TableColumn.DefaultValue">DefaultValue</h4>
  <div class="markdown level1 summary"><p>Define a default value for the column.
Not all databases may support this.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DefaultValue { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_IdentityIncrement_" data-uid="ETLBox.ControlFlow.TableColumn.IdentityIncrement*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_IdentityIncrement" data-uid="ETLBox.ControlFlow.TableColumn.IdentityIncrement">IdentityIncrement</h4>
  <div class="markdown level1 summary"><p>Only SqlServer: The increment value for an identity column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int? IdentityIncrement { get; set; }
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
        <td><span class="xref">System.Nullable</span>&lt;<span class="xref">System.Int32</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_IdentitySeed_" data-uid="ETLBox.ControlFlow.TableColumn.IdentitySeed*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_IdentitySeed" data-uid="ETLBox.ControlFlow.TableColumn.IdentitySeed">IdentitySeed</h4>
  <div class="markdown level1 summary"><p>Only SqlServer: The seed for and identity column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int? IdentitySeed { get; set; }
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
        <td><span class="xref">System.Nullable</span>&lt;<span class="xref">System.Int32</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_IsIdentity_" data-uid="ETLBox.ControlFlow.TableColumn.IsIdentity*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_IsIdentity" data-uid="ETLBox.ControlFlow.TableColumn.IsIdentity">IsIdentity</h4>
  <div class="markdown level1 summary"><p>True, if the column is used as an Identity column (auto increment in MySql or serial in Postgres)
Not every database supports this.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsIdentity { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_IsPrimaryKey_" data-uid="ETLBox.ControlFlow.TableColumn.IsPrimaryKey*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_IsPrimaryKey" data-uid="ETLBox.ControlFlow.TableColumn.IsPrimaryKey">IsPrimaryKey</h4>
  <div class="markdown level1 summary"><p>True if the column is part of the primary key</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsPrimaryKey { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_Name_" data-uid="ETLBox.ControlFlow.TableColumn.Name*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_Name" data-uid="ETLBox.ControlFlow.TableColumn.Name">Name</h4>
  <div class="markdown level1 summary"><p>Name of the column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Name { get; set; }
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableColumn_NETDataType_" data-uid="ETLBox.ControlFlow.TableColumn.NETDataType*"></a>
  <h4 id="ETLBox_ControlFlow_TableColumn_NETDataType" data-uid="ETLBox.ControlFlow.TableColumn.NETDataType">NETDataType</h4>
  <div class="markdown level1 summary"><p>The corresponding .NET data type retrieved from the sql <a class="xref" href="/api/etlbox.controlflow/tablecolumn#ETLBox_ControlFlow_TableColumn_DataType">DataType</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Type NETDataType { get; }
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
        <td><span class="xref">System.Type</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
