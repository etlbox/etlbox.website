---
title: "CreateTableTask"
description: "Details for Class CreateTableTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10042
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.CreateTableTask">
  <h1 id="ETLBox_ControlFlow_CreateTableTask" data-uid="ETLBox.ControlFlow.CreateTableTask" class="text-break">Class CreateTableTask
</h1>
  <div class="markdown level0 summary"><p>Creates a table. If the tables exists, this task won't change the table.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CreateTableTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/controlflowtask#ETLBox_ControlFlow_ControlFlowTask_ConnectionManager">ControlFlowTask.ConnectionManager</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/controlflowtask#ETLBox_ControlFlow_ControlFlowTask_ConnectionType">ControlFlowTask.ConnectionType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/controlflowtask#ETLBox_ControlFlow_ControlFlowTask_QB">ControlFlowTask.QB</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/controlflowtask#ETLBox_ControlFlow_ControlFlowTask_QE">ControlFlowTask.QE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskName">LoggableTask.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogThreshold">LoggableTask.LogThreshold</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInstance">LoggableTask.LogInstance</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_ParentTask">LoggableTask.ParentTask</a>
    </div>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_CreateTableTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CreateTableTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_CreateTableTask_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">CreateTableTask.Create("demo.table1", new List&lt;TableColumn&gt;() {
new TableColumn(name:"key", dataType:"int", allowNulls:false, isPrimaryKey:true, isIdentity:true),
    new TableColumn(name:"value", dataType:"nvarchar(100)", allowNulls:true)
});</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_CreateTableTask__ctor_" data-uid="ETLBox.ControlFlow.CreateTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask__ctor" data-uid="ETLBox.ControlFlow.CreateTableTask.#ctor">CreateTableTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateTableTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateTableTask__ctor_" data-uid="ETLBox.ControlFlow.CreateTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask__ctor_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.#ctor(ETLBox.ControlFlow.TableDefinition)">CreateTableTask(TableDefinition)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateTableTask(TableDefinition tableDefinition)
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
        <td><span class="parametername">tableDefinition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask__ctor_" data-uid="ETLBox.ControlFlow.CreateTableTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask__ctor_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.#ctor(System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">CreateTableTask(string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateTableTask(string tableName, List<TableColumn> columns)
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
        <td><span class="parametername">tableName</span></td>
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
  <a id="ETLBox_ControlFlow_CreateTableTask_Columns_" data-uid="ETLBox.ControlFlow.CreateTableTask.Columns*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Columns" data-uid="ETLBox.ControlFlow.CreateTableTask.Columns">Columns</h4>
  <div class="markdown level1 summary"><p>The list of columns to create. Either use the <a class="xref" href="/api/etlbox.controlflow/createtabletask#ETLBox_ControlFlow_CreateTableTask_TableDefinition">TableDefinition</a> or a combination of
<a class="xref" href="/api/etlbox.controlflow/createtabletask#ETLBox_ControlFlow_CreateTableTask_TableName">TableName</a> and <a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>.</p>
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
  <a id="ETLBox_ControlFlow_CreateTableTask_DataTypeConverter_" data-uid="ETLBox.ControlFlow.CreateTableTask.DataTypeConverter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_DataTypeConverter" data-uid="ETLBox.ControlFlow.CreateTableTask.DataTypeConverter">DataTypeConverter</h4>
  <div class="markdown level1 summary"><p>A data type converter that is used to remap the current data type names in the TableDefintion
to other, database specific type names. E.g. you can remap that the type VARCHAR(8000) is created as TEXT.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IDataTypeConverter DataTypeConverter { get; set; }
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
        <td><a class="xref" href="/api/etlbox/idatatypeconverter">IDataTypeConverter</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_IgnoreCollation_" data-uid="ETLBox.ControlFlow.CreateTableTask.IgnoreCollation*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_IgnoreCollation" data-uid="ETLBox.ControlFlow.CreateTableTask.IgnoreCollation">IgnoreCollation</h4>
  <div class="markdown level1 summary"><p>When creating the CREATE TABLE sql, ignore the Collation definition that a <a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a> potentially has.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IgnoreCollation { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateTableTask_IsTemporaryTable_" data-uid="ETLBox.ControlFlow.CreateTableTask.IsTemporaryTable*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_IsTemporaryTable" data-uid="ETLBox.ControlFlow.CreateTableTask.IsTemporaryTable">IsTemporaryTable</h4>
  <div class="markdown level1 summary"><p>If set to true, the table will be create as temp table on the database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsTemporaryTable { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateTableTask_Sql_" data-uid="ETLBox.ControlFlow.CreateTableTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Sql" data-uid="ETLBox.ControlFlow.CreateTableTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql code that is used to create the table.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Sql { get; }
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
  <a id="ETLBox_ControlFlow_CreateTableTask_TN_" data-uid="ETLBox.ControlFlow.CreateTableTask.TN*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_TN" data-uid="ETLBox.ControlFlow.CreateTableTask.TN">TN</h4>
  <div class="markdown level1 summary"><p>The formatted table name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor TN { get; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.TableDefinition*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_TableDefinition" data-uid="ETLBox.ControlFlow.CreateTableTask.TableDefinition">TableDefinition</h4>
  <div class="markdown level1 summary"><p>The table definition for the table that should be created. Either use the TableDefinition or a combination of
<a class="xref" href="/api/etlbox.controlflow/createtabletask#ETLBox_ControlFlow_CreateTableTask_TableName">TableName</a> and <a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableDefinition TableDefinition { get; set; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_TableName_" data-uid="ETLBox.ControlFlow.CreateTableTask.TableName*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_TableName" data-uid="ETLBox.ControlFlow.CreateTableTask.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>The name of the table to create.</p>
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_CreateTableTask_Alter_" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Alter" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter">Alter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Alter()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateTableTask_Alter_" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Alter_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter(ETLBox.ControlFlow.TableDefinition)">Alter(TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Alters a table using ALTER TABLE statements.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Alter(TableDefinition tableDefinition)
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
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_Alter_" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Alter_ETLBox_IConnectionManager_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter(ETLBox.IConnectionManager,ETLBox.ControlFlow.TableDefinition)">Alter(IConnectionManager, TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Alters a table using ALTER TABLE statements.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Alter(IConnectionManager connectionManager, TableDefinition tableDefinition)
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
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_Alter_" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Alter_ETLBox_IConnectionManager_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter(ETLBox.IConnectionManager,System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">Alter(IConnectionManager, string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Alters a table using ALTER TABLE statements.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Alter(IConnectionManager connectionManager, string tableName, List<TableColumn> columns)
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
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_Alter_" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Alter_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.Alter(System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">Alter(string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Alters a table using ALTER TABLE statements.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Alter(string tableName, List<TableColumn> columns)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_AlterIfDifferent_" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfDifferent*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_AlterIfDifferent" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfDifferent">AlterIfDifferent()</h4>
  <div class="markdown level1 summary"><p>Execute the alter statements to change the table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void AlterIfDifferent()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateTableTask_AlterIfNeeded_" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfNeeded*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_AlterIfNeeded_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfNeeded(ETLBox.ControlFlow.TableDefinition)">AlterIfNeeded(TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Alters a table using ALTER TABLE statements.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void AlterIfNeeded(TableDefinition tableDefinition)
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
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_AlterIfNeeded_" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfNeeded*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_AlterIfNeeded_ETLBox_IConnectionManager_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfNeeded(ETLBox.IConnectionManager,ETLBox.ControlFlow.TableDefinition)">AlterIfNeeded(IConnectionManager, TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Alters a table using ALTER TABLE statements.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void AlterIfNeeded(IConnectionManager connectionManager, TableDefinition tableDefinition)
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
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_AlterIfNeeded_" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfNeeded*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_AlterIfNeeded_ETLBox_IConnectionManager_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfNeeded(ETLBox.IConnectionManager,System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">AlterIfNeeded(IConnectionManager, string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Alters a table using ALTER TABLE statements.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void AlterIfNeeded(IConnectionManager connectionManager, string tableName, List<TableColumn> columns)
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
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_AlterIfNeeded_" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfNeeded*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_AlterIfNeeded_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.AlterIfNeeded(System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">AlterIfNeeded(string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Alters a table using ALTER TABLE statements.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void AlterIfNeeded(string tableName, List<TableColumn> columns)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CheckTableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.CheckTableDefinition*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CheckTableDefinition" data-uid="ETLBox.ControlFlow.CreateTableTask.CheckTableDefinition">CheckTableDefinition()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CheckTableDefinition()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateTableTask_Create_" data-uid="ETLBox.ControlFlow.CreateTableTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Create" data-uid="ETLBox.ControlFlow.CreateTableTask.Create">Create()</h4>
  <div class="markdown level1 summary"><p>Executes the table creation. Throws an exception if the table exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Create()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateTableTask_Create_" data-uid="ETLBox.ControlFlow.CreateTableTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Create_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.Create(ETLBox.ControlFlow.TableDefinition)">Create(TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates a table using a CREATE TABLE statement.
Throws an exception if the table already exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(TableDefinition tableDefinition)
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
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_Create_" data-uid="ETLBox.ControlFlow.CreateTableTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Create_ETLBox_IConnectionManager_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.Create(ETLBox.IConnectionManager,ETLBox.ControlFlow.TableDefinition)">Create(IConnectionManager, TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates a table using a CREATE TABLE statement.
Throws an exception if the table already exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(IConnectionManager connectionManager, TableDefinition tableDefinition)
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
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_Create_" data-uid="ETLBox.ControlFlow.CreateTableTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Create_ETLBox_IConnectionManager_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.Create(ETLBox.IConnectionManager,System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">Create(IConnectionManager, string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates a table  using a CREATE TABLE statement.
Throws an exception if the table already exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(IConnectionManager connectionManager, string tableName, List<TableColumn> columns)
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
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_Create_" data-uid="ETLBox.ControlFlow.CreateTableTask.Create*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_Create_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.Create(System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">Create(string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates a table using a CREATE TABLE statement.
Throws an exception if the table already exists.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Create(string tableName, List<TableColumn> columns)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists">CreateIfNotExists()</h4>
  <div class="markdown level1 summary"><p>Executes the table creation if the table doesn't exist.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateIfNotExists()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists(ETLBox.ControlFlow.TableDefinition)">CreateIfNotExists(TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates a table using a CREATE TABLE statement if the table doesn't exist.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(TableDefinition tableDefinition)
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
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_ETLBox_IConnectionManager_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists(ETLBox.IConnectionManager,ETLBox.ControlFlow.TableDefinition)">CreateIfNotExists(IConnectionManager, TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates a table using a CREATE TABLE statement if the table doesn't exist.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(IConnectionManager connectionManager, TableDefinition tableDefinition)
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
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_ETLBox_IConnectionManager_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists(ETLBox.IConnectionManager,System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">CreateIfNotExists(IConnectionManager, string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates a table using a CREATE TABLE statement if the table doesn't exist.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(IConnectionManager connectionManager, string tableName, List<TableColumn> columns)
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
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateIfNotExists_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateIfNotExists(System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">CreateIfNotExists(string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates a table using a CREATE TABLE statement if the table doesn't exist.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateIfNotExists(string tableName, List<TableColumn> columns)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter">CreateOrAlter()</h4>
  <div class="markdown level1 summary"><p>Executes the table creation or execute the corresponding alter statements to adjust the table.
If the table is empty, the new table is always dropped and recreated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateOrAlter()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter(ETLBox.ControlFlow.TableDefinition)">CreateOrAlter(TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates a table if the table doesn't exist or alters a table using ALTER TABLE statements.
If the table does not contain any rows, it will be dropped and created again.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(TableDefinition tableDefinition)
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
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_ETLBox_IConnectionManager_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter(ETLBox.IConnectionManager,ETLBox.ControlFlow.TableDefinition)">CreateOrAlter(IConnectionManager, TableDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates a table if the table doesn't exist or alters a table using ALTER TABLE statements.
If the table does not contain any rows, it will be dropped and created again.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, TableDefinition tableDefinition)
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
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">tableDefinition</span></td>
        <td><p>The definition of the table containing table name and columns.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_ETLBox_IConnectionManager_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter(ETLBox.IConnectionManager,System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">CreateOrAlter(IConnectionManager, string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates a table if the table doesn't exist or alters a table using ALTER TABLE statements.
If the table does not contain any rows, it will be dropped and created again.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, string tableName, List<TableColumn> columns)
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
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateTableTask_CreateOrAlter_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_TableColumn__" data-uid="ETLBox.ControlFlow.CreateTableTask.CreateOrAlter(System.String,System.Collections.Generic.List{ETLBox.ControlFlow.TableColumn})">CreateOrAlter(string, List&lt;TableColumn&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates a table if the table doesn't exist or alters a table using ALTER TABLE statements.
If the table does not contain any rows, it will be dropped and created again.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(string tableName, List<TableColumn> columns)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a>&gt;</td>
        <td><span class="parametername">columns</span></td>
        <td><p>The columns of the table</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
