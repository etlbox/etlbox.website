---
title: "TableDefinition"
description: "Details for Class TableDefinition (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10074
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.TableDefinition">
  <h1 id="ETLBox_ControlFlow_TableDefinition" data-uid="ETLBox.ControlFlow.TableDefinition" class="text-break">Class TableDefinition
</h1>
  <div class="markdown level0 summary"><p>A definition for a table in a database</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">TableDefinition</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_TableDefinition_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class TableDefinition
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_TableDefinition__ctor_" data-uid="ETLBox.ControlFlow.TableDefinition.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition__ctor" data-uid="ETLBox.ControlFlow.TableDefinition.#ctor">TableDefinition()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableDefinition()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_TableDefinition__ctor_" data-uid="ETLBox.ControlFlow.TableDefinition.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition__ctor_System_String_" data-uid="ETLBox.ControlFlow.TableDefinition.#ctor(System.String)">TableDefinition(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableDefinition(string name)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition__ctor_" data-uid="ETLBox.ControlFlow.TableDefinition.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition__ctor_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.TableDefinition.#ctor(System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">TableDefinition(string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableDefinition(string name, List<TableColumn> columns)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_TableDefinition_Columns_" data-uid="ETLBox.ControlFlow.TableDefinition.Columns*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_Columns" data-uid="ETLBox.ControlFlow.TableDefinition.Columns">Columns</h4>
  <div class="markdown level1 summary"><p>The columns of the table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IList<TableColumn> Columns { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition_ForeignKeyConstraints_" data-uid="ETLBox.ControlFlow.TableDefinition.ForeignKeyConstraints*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_ForeignKeyConstraints" data-uid="ETLBox.ControlFlow.TableDefinition.ForeignKeyConstraints">ForeignKeyConstraints</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ForeignKeyConstraint> ForeignKeyConstraints { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox.controlflow/foreignkeyconstraint">ForeignKeyConstraint</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition_Name_" data-uid="ETLBox.ControlFlow.TableDefinition.Name*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_Name" data-uid="ETLBox.ControlFlow.TableDefinition.Name">Name</h4>
  <div class="markdown level1 summary"><p>The name of the table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Name { get; set; }
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
  <a id="ETLBox_ControlFlow_TableDefinition_PrimaryKeyConstraintName_" data-uid="ETLBox.ControlFlow.TableDefinition.PrimaryKeyConstraintName*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_PrimaryKeyConstraintName" data-uid="ETLBox.ControlFlow.TableDefinition.PrimaryKeyConstraintName">PrimaryKeyConstraintName</h4>
  <div class="markdown level1 summary"><p>The constraint name for the primary key</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string PrimaryKeyConstraintName { get; set; }
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
  <a id="ETLBox_ControlFlow_TableDefinition_UniqueKeyConstraints_" data-uid="ETLBox.ControlFlow.TableDefinition.UniqueKeyConstraints*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_UniqueKeyConstraints" data-uid="ETLBox.ControlFlow.TableDefinition.UniqueKeyConstraints">UniqueKeyConstraints</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<UniqueKeyConstraint> UniqueKeyConstraints { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox.controlflow/uniquekeyconstraint">UniqueKeyConstraint</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_TableDefinition_CreateTable_" data-uid="ETLBox.ControlFlow.TableDefinition.CreateTable*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_CreateTable" data-uid="ETLBox.ControlFlow.TableDefinition.CreateTable">CreateTable()</h4>
  <div class="markdown level1 summary"><p>Uses the CreateTableTask to create a table based on the current definition.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateTable()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_TableDefinition_CreateTable_" data-uid="ETLBox.ControlFlow.TableDefinition.CreateTable*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_CreateTable_ETLBox_IConnectionManager_" data-uid="ETLBox.ControlFlow.TableDefinition.CreateTable(ETLBox.IConnectionManager)">CreateTable(IConnectionManager)</h4>
  <div class="markdown level1 summary"><p>Uses the CreateTableTask to create a table based on the current definition.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateTable(IConnectionManager connectionManager)
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
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition_FindColumn_" data-uid="ETLBox.ControlFlow.TableDefinition.FindColumn*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_FindColumn_System_String_" data-uid="ETLBox.ControlFlow.TableDefinition.FindColumn(System.String)">FindColumn(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableColumn FindColumn(string name)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">name</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition_FromCLRType_" data-uid="ETLBox.ControlFlow.TableDefinition.FromCLRType*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_FromCLRType_ETLBox_ConnectionType_System_Type_" data-uid="ETLBox.ControlFlow.TableDefinition.FromCLRType(ETLBox.ConnectionType,System.Type)">FromCLRType(ConnectionType, Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TableDefinition FromCLRType(ConnectionType connectionType, Type clrType)
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
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">clrType</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition_FromCLRType_" data-uid="ETLBox.ControlFlow.TableDefinition.FromCLRType*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_FromCLRType_ETLBox_IConnectionManager_System_Type_" data-uid="ETLBox.ControlFlow.TableDefinition.FromCLRType(ETLBox.IConnectionManager,System.Type)">FromCLRType(IConnectionManager, Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TableDefinition FromCLRType(IConnectionManager connectionManager, Type clrType)
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
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">clrType</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition_FromCLRType_" data-uid="ETLBox.ControlFlow.TableDefinition.FromCLRType*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_FromCLRType__1_ETLBox_IConnectionManager_" data-uid="ETLBox.ControlFlow.TableDefinition.FromCLRType``1(ETLBox.IConnectionManager)">FromCLRType&lt;T&gt;(IConnectionManager)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TableDefinition FromCLRType<T>(IConnectionManager connectionManager)
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
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
  <a id="ETLBox_ControlFlow_TableDefinition_FromProcedureName_" data-uid="ETLBox.ControlFlow.TableDefinition.FromProcedureName*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_FromProcedureName_ETLBox_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.TableDefinition.FromProcedureName(ETLBox.IConnectionManager,System.String)">FromProcedureName(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TableDefinition FromProcedureName(IConnectionManager connection, string procedureName)
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
        <td><span class="parametername">connection</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">procedureName</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition_FromTableName_" data-uid="ETLBox.ControlFlow.TableDefinition.FromTableName*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_FromTableName_ETLBox_IConnectionManager_System_String_System_Boolean_" data-uid="ETLBox.ControlFlow.TableDefinition.FromTableName(ETLBox.IConnectionManager,System.String,System.Boolean)">FromTableName(IConnectionManager, string, bool)</h4>
  <div class="markdown level1 summary"><p>Gather a table definition from an existing table in the database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TableDefinition FromTableName(IConnectionManager connection, string tableName, bool readConstraints = true)
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
        <td><span class="parametername">connection</span></td>
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>A name of an existing table in the database</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">readConstraints</span></td>
        <td><p>If set to true, information about the Unique and Foreign Key constraints are also gathered.</p>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableDefinition_RemoveDuplicateColumns_" data-uid="ETLBox.ControlFlow.TableDefinition.RemoveDuplicateColumns*"></a>
  <h4 id="ETLBox_ControlFlow_TableDefinition_RemoveDuplicateColumns_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.TableDefinition.RemoveDuplicateColumns(ETLBox.ControlFlow.TableDefinition)">RemoveDuplicateColumns(TableDefinition)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TableDefinition RemoveDuplicateColumns(TableDefinition definition)
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
