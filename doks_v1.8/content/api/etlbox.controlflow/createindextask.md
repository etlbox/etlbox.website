---
title: "CreateIndexTask"
description: "Details for Class CreateIndexTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10043
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.CreateIndexTask">
  <h1 id="ETLBox_ControlFlow_CreateIndexTask" data-uid="ETLBox.ControlFlow.CreateIndexTask" class="text-break">Class CreateIndexTask</h1>
  <div class="markdown level0 summary"><p>Creates an index if the index doesn't exists, otherwise the index is dropped and recreated.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CreateIndexTask</span></div>
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
  <h5 id="ETLBox_ControlFlow_CreateIndexTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CreateIndexTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_CreateIndexTask_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">CreateIndexTask.Create("indexname","tablename", indexColumns)</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_CreateIndexTask__ctor_" data-uid="ETLBox.ControlFlow.CreateIndexTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask__ctor" data-uid="ETLBox.ControlFlow.CreateIndexTask.#ctor">CreateIndexTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateIndexTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateIndexTask__ctor_" data-uid="ETLBox.ControlFlow.CreateIndexTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask__ctor_System_String_System_String_System_Collections_Generic_IList_System_String__" data-uid="ETLBox.ControlFlow.CreateIndexTask.#ctor(System.String,System.String,System.Collections.Generic.IList{System.String})">CreateIndexTask(string, string, IList&lt;string&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateIndexTask(string indexName, string tableName, IList<string> indexColumns)
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
        <td><span class="parametername">indexName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">indexColumns</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateIndexTask__ctor_" data-uid="ETLBox.ControlFlow.CreateIndexTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask__ctor_System_String_System_String_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_String__" data-uid="ETLBox.ControlFlow.CreateIndexTask.#ctor(System.String,System.String,System.Collections.Generic.IList{System.String},System.Collections.Generic.IList{System.String})">CreateIndexTask(string, string, IList&lt;string&gt;, IList&lt;string&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateIndexTask(string indexName, string tableName, IList<string> indexColumns, IList<string> includeColumns)
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
        <td><span class="parametername">indexName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">indexColumns</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">includeColumns</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_CreateIndexTask_IN_" data-uid="ETLBox.ControlFlow.CreateIndexTask.IN*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_IN" data-uid="ETLBox.ControlFlow.CreateIndexTask.IN">IN</h4>
  <div class="markdown level1 summary"><p>The formatted name of the index</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor IN { get; }
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
  <a id="ETLBox_ControlFlow_CreateIndexTask_IncludeColumns_" data-uid="ETLBox.ControlFlow.CreateIndexTask.IncludeColumns*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_IncludeColumns" data-uid="ETLBox.ControlFlow.CreateIndexTask.IncludeColumns">IncludeColumns</h4>
  <div class="markdown level1 summary"><p>A list of included column names for the index.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IList<string> IncludeColumns { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateIndexTask_IndexColumns_" data-uid="ETLBox.ControlFlow.CreateIndexTask.IndexColumns*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_IndexColumns" data-uid="ETLBox.ControlFlow.CreateIndexTask.IndexColumns">IndexColumns</h4>
  <div class="markdown level1 summary"><p>A list of column names for the index</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IList<string> IndexColumns { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateIndexTask_IndexName_" data-uid="ETLBox.ControlFlow.CreateIndexTask.IndexName*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_IndexName" data-uid="ETLBox.ControlFlow.CreateIndexTask.IndexName">IndexName</h4>
  <div class="markdown level1 summary"><p>The name of the index</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string IndexName { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateIndexTask_IsClustered_" data-uid="ETLBox.ControlFlow.CreateIndexTask.IsClustered*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_IsClustered" data-uid="ETLBox.ControlFlow.CreateIndexTask.IsClustered">IsClustered</h4>
  <div class="markdown level1 summary"><p>Set the index as a clustered index</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsClustered { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateIndexTask_IsUnique_" data-uid="ETLBox.ControlFlow.CreateIndexTask.IsUnique*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_IsUnique" data-uid="ETLBox.ControlFlow.CreateIndexTask.IsUnique">IsUnique</h4>
  <div class="markdown level1 summary"><p>Set the index as Unique.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsUnique { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateIndexTask_Sql_" data-uid="ETLBox.ControlFlow.CreateIndexTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_Sql" data-uid="ETLBox.ControlFlow.CreateIndexTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql code used to generate the index</p>
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
  <a id="ETLBox_ControlFlow_CreateIndexTask_TN_" data-uid="ETLBox.ControlFlow.CreateIndexTask.TN*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_TN" data-uid="ETLBox.ControlFlow.CreateIndexTask.TN">TN</h4>
  <div class="markdown level1 summary"><p>The formatted name of the table.</p>
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
  <a id="ETLBox_ControlFlow_CreateIndexTask_TableName_" data-uid="ETLBox.ControlFlow.CreateIndexTask.TableName*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_TableName" data-uid="ETLBox.ControlFlow.CreateIndexTask.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>The name of the table the index is based on.</p>
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
  <a id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate">CreateOrRecreate()</h4>
  <div class="markdown level1 summary"><p>Runs the sql to (re)create the index on a table.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void CreateOrRecreate()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_ETLBox_IConnectionManager_System_String_System_String_System_Collections_Generic_IList_System_String__" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate(ETLBox.IConnectionManager,System.String,System.String,System.Collections.Generic.IList{System.String})">CreateOrRecreate(IConnectionManager, string, string, IList&lt;string&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates an index. If the index exists, it is dropped and recreated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrRecreate(IConnectionManager connectionManager, string indexName, string tableName, IList<string> indexColumns)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The name of the index</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table the index is based on</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">indexColumns</span></td>
        <td><p>The name of the columns for the index</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_ETLBox_IConnectionManager_System_String_System_String_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_String__" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate(ETLBox.IConnectionManager,System.String,System.String,System.Collections.Generic.IList{System.String},System.Collections.Generic.IList{System.String})">CreateOrRecreate(IConnectionManager, string, string, IList&lt;string&gt;, IList&lt;string&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates an index. If the index exists, it is dropped and recreated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrRecreate(IConnectionManager connectionManager, string indexName, string tableName, IList<string> indexColumns, IList<string> includeColumns)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The name of the index</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table the index is based on</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">indexColumns</span></td>
        <td><p>The name of the columns for the index</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">includeColumns</span></td>
        <td><p>The name of the columns that are included in the index.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_System_String_System_String_System_Collections_Generic_IList_System_String__" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate(System.String,System.String,System.Collections.Generic.IList{System.String})">CreateOrRecreate(string, string, IList&lt;string&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates an index. If the index exists, it is dropped and recreated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrRecreate(string indexName, string tableName, IList<string> indexColumns)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The name of the index</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table the index is based on</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">indexColumns</span></td>
        <td><p>The name of the columns for the index</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate*"></a>
  <h4 id="ETLBox_ControlFlow_CreateIndexTask_CreateOrRecreate_System_String_System_String_System_Collections_Generic_IList_System_String__System_Collections_Generic_IList_System_String__" data-uid="ETLBox.ControlFlow.CreateIndexTask.CreateOrRecreate(System.String,System.String,System.Collections.Generic.IList{System.String},System.Collections.Generic.IList{System.String})">CreateOrRecreate(string, string, IList&lt;string&gt;, IList&lt;string&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates an index. If the index exists, it is dropped and recreated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrRecreate(string indexName, string tableName, IList<string> indexColumns, IList<string> includeColumns)
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
        <td><span class="parametername">indexName</span></td>
        <td><p>The name of the index</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>The name of the table the index is based on</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">indexColumns</span></td>
        <td><p>The name of the columns for the index</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a>&gt;</td>
        <td><span class="parametername">includeColumns</span></td>
        <td><p>The name of the columns that are included in the index</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
