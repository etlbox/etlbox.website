---
title: "RowCountTask"
description: "Details for Class RowCountTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10077
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask">
  <h1 id="ETLBox_ControlFlow_Tasks_RowCountTask" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask" class="text-break">Class RowCountTask
</h1>
  <div class="markdown level0 summary"><p>Count the row in a table. This task normally uses the  COUNT(*) method (could take some time on big tables).
You can pass a a filter condition for the count.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">RowCountTask</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
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
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_CopyLogTaskProperties_ETLBox_ControlFlow_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
    </div>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow.Tasks</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class RowCountTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_examples"><strong>Examples</strong></h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor">RowCountTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RowCountTask()
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor(System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">RowCountTask(string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RowCountTask(string tableName, RowCountOptions options)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor(System.String,System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">RowCountTask(string, string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RowCountTask(string tableName, string condition, RowCountOptions options)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor(System.String,System.String)">RowCountTask(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RowCountTask(string tableName, string condition)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_System_String_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.#ctor(System.String)">RowCountTask(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RowCountTask(string tableName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask__ctor_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Condition_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Condition*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Condition" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Condition">Condition</h4>
  <div class="markdown level1 summary"><p>Part of the sql where condition which restrict which rows are counted</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Condition { get; set; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_DirtyRead_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.DirtyRead*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_DirtyRead" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.DirtyRead">DirtyRead</h4>
  <div class="markdown level1 summary"><p>Will do the row count also on uncommitted reads.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool DirtyRead { get; set; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasAnyRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasAnyRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasAnyRows" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasAnyRows">HasAnyRows</h4>
  <div class="markdown level1 summary"><p>Indicates if the table contains rows - only has a value after the execution</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool? HasAnyRows { get; }
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
        <td><span class="xref">bool</span>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_QuickQueryMode_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.QuickQueryMode*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_QuickQueryMode" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.QuickQueryMode">QuickQueryMode</h4>
  <div class="markdown level1 summary"><p>For Sql Server, you can set the QuickQueryMode to true. This will query the sys.partition table which can be much faster.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool QuickQueryMode { get; set; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Rows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Rows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Rows" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Rows">Rows</h4>
  <div class="markdown level1 summary"><p>Will hold the number of counted rows after execution</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int? Rows { get; }
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
        <td><span class="xref">int</span>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Sql_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Sql" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql that is executed to count the rows in the table - will change depending on your parameters.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Sql { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_TableName_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.TableName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_TableName" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>Name of the table on which the rows are counted</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TableName { get; set; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string TaskName { get; set; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_TN_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.TN*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_TN" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.TN">TN</h4>
  <div class="markdown level1 summary"><p>The formatted table table name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor TN { get; }
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
        <td><a class="xref" href="/api/etlbox.helper/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count">Count()</h4>
  <div class="markdown level1 summary"><p>Performs the row count</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RowCountTask Count()
```

{{< rawhtml >}}
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcounttask">RowCountTask</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_ETLBox_Connection_IConnectionManager_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count(ETLBox.Connection.IConnectionManager,System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">Count(IConnectionManager, string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int Count(IConnectionManager connectionManager, string tableName, RowCountOptions options)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_ETLBox_Connection_IConnectionManager_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_ETLBox_Connection_IConnectionManager_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count(ETLBox.Connection.IConnectionManager,System.String,System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">Count(IConnectionManager, string, string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int Count(IConnectionManager connectionManager, string tableName, string condition, RowCountOptions options)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_ETLBox_Connection_IConnectionManager_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count(ETLBox.Connection.IConnectionManager,System.String,System.String)">Count(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int Count(IConnectionManager connectionManager, string tableName, string condition)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_ETLBox_Connection_IConnectionManager_System_String_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count(ETLBox.Connection.IConnectionManager,System.String)">Count(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int Count(IConnectionManager connectionManager, string tableName)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count(System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">Count(string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int Count(string tableName, RowCountOptions options)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count(System.String,System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">Count(string, string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int Count(string tableName, string condition, RowCountOptions options)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count(System.String,System.String)">Count(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int Count(string tableName, string condition)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_System_String_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.Count(System.String)">Count(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int Count(string tableName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_Count_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows">HasRows()</h4>
  <div class="markdown level1 summary"><p>Checks if the table has at least one (matching) row.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RowCountTask HasRows()
```

{{< rawhtml >}}
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcounttask">RowCountTask</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_ETLBox_Connection_IConnectionManager_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows(ETLBox.Connection.IConnectionManager,System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">HasRows(IConnectionManager, string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool HasRows(IConnectionManager connectionManager, string tableName, RowCountOptions options)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_ETLBox_Connection_IConnectionManager_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_ETLBox_Connection_IConnectionManager_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows(ETLBox.Connection.IConnectionManager,System.String,System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">HasRows(IConnectionManager, string, string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool HasRows(IConnectionManager connectionManager, string tableName, string condition, RowCountOptions options)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_ETLBox_Connection_IConnectionManager_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows(ETLBox.Connection.IConnectionManager,System.String,System.String)">HasRows(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool HasRows(IConnectionManager connectionManager, string tableName, string condition)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_ETLBox_Connection_IConnectionManager_System_String_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows(ETLBox.Connection.IConnectionManager,System.String)">HasRows(IConnectionManager, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool HasRows(IConnectionManager connectionManager, string tableName)
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td><span class="parametername">connectionManager</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_ETLBox_Connection_IConnectionManager_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows(System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">HasRows(string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool HasRows(string tableName, RowCountOptions options)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows(System.String,System.String,ETLBox.ControlFlow.Tasks.RowCountOptions)">HasRows(string, string, RowCountOptions)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool HasRows(string tableName, string condition, RowCountOptions options)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></td>
        <td><span class="parametername">options</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_System_String_System_String_ETLBox_ControlFlow_Tasks_RowCountOptions__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows(System.String,System.String)">HasRows(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool HasRows(string tableName, string condition)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">condition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_System_String_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <a id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_System_String_" data-uid="ETLBox.ControlFlow.Tasks.RowCountTask.HasRows(System.String)">HasRows(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool HasRows(string tableName)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">tableName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_ControlFlow_Tasks_RowCountTask_HasRows_System_String__examples">Examples</h5>
  <pre><code>int count = RowCountTask.Count(&quot;tableName&quot;).Value;</code></pre>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
