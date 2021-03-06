---
title: "CreateProcedureTask"
description: "Details for Class CreateProcedureTask (ETLBox.ControlFlow.Tasks)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow.tasks"
weight: 10053
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask">
  <h1 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask" class="text-break">Class CreateProcedureTask
  </h1>
  <div class="markdown level0 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CreateProcedureTask</span></div>
  </div>
  <div classs="implements">
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow.Tasks</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CreateProcedureTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_examples"><strong>Examples</strong></h5>
  <pre><code>CRUDProcedureTask.CreateOrAlter(&quot;demo.proc1&quot;, &quot;select 1 as test&quot;);</code></pre>
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask__ctor" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.#ctor">CreateProcedureTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateProcedureTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask__ctor_ETLBox_ControlFlow_ProcedureDefinition_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.#ctor(ETLBox.ControlFlow.ProcedureDefinition)">CreateProcedureTask(ProcedureDefinition)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateProcedureTask(ProcedureDefinition definition)
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
        <td><a class="xref" href="/api/etlbox.controlflow/proceduredefinition">ProcedureDefinition</a></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.#ctor(System.String,System.String)">CreateProcedureTask(String, String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateProcedureTask(string procedureName, string procedureDefinition)
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
        <td><span class="parametername">procedureName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask__ctor_System_String_System_String_System_Collections_Generic_IList_ETLBox_ControlFlow_ProcedureParameter__" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.#ctor(System.String,System.String,System.Collections.Generic.IList{ETLBox.ControlFlow.ProcedureParameter})">CreateProcedureTask(String, String, IList&lt;ProcedureParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateProcedureTask(string procedureName, string procedureDefinition, IList<ProcedureParameter> procedureParameter)
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
        <td><span class="parametername">procedureName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IList</span>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td><span class="parametername">procedureParameter</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_PN_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.PN*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_PN" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.PN">PN</h4>
  <div class="markdown level1 summary"><p>The formatted procedure name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor PN { get; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_ProcedureDefinition_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.ProcedureDefinition*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_ProcedureDefinition" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.ProcedureDefinition">ProcedureDefinition</h4>
  <div class="markdown level1 summary"><p>The sql code of the procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ProcedureDefinition { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_ProcedureName_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.ProcedureName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_ProcedureName" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.ProcedureName">ProcedureName</h4>
  <div class="markdown level1 summary"><p>The name of the procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ProcedureName { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_ProcedureOptions_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.ProcedureOptions*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_ProcedureOptions" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.ProcedureOptions">ProcedureOptions</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ProcedureOptions { get; set; }
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
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_ProcedureParameters_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.ProcedureParameters*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_ProcedureParameters" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.ProcedureParameters">ProcedureParameters</h4>
  <div class="markdown level1 summary"><p>The parameters for the procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ProcedureParameter> ProcedureParameters { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_Sql_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_Sql" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql code that is used to create/update the procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_TaskName_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.TaskName*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_TaskName" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A name to identify the task or component. Every component or task comes
with a default name that can be overwritten.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_ETLBox_Connection_IConnectionManager_ETLBox_ControlFlow_ProcedureDefinition_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter(ETLBox.Connection.IConnectionManager,ETLBox.ControlFlow.ProcedureDefinition)">CreateOrAlter(IConnectionManager, ProcedureDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, ProcedureDefinition procedure)
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
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow/proceduredefinition">ProcedureDefinition</a></td>
        <td><span class="parametername">procedure</span></td>
        <td><p>The procedure definition object containing procedure name, code and potential parameters</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_ETLBox_Connection_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter(ETLBox.Connection.IConnectionManager,System.String,System.String)">CreateOrAlter(IConnectionManager, String, String)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, string procedureName, string procedureDefinition)
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
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">procedureName</span></td>
        <td><p>The name of the procedure</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td><p>The sql code of the procedure</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_ETLBox_Connection_IConnectionManager_System_String_System_String_System_Collections_Generic_IList_ETLBox_ControlFlow_ProcedureParameter__" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter(ETLBox.Connection.IConnectionManager,System.String,System.String,System.Collections.Generic.IList{ETLBox.ControlFlow.ProcedureParameter})">CreateOrAlter(IConnectionManager, String, String, IList&lt;ProcedureParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, string procedureName, string procedureDefinition, IList<ProcedureParameter> procedureParameter)
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
        <td><p>The connection manager of the database you want to connect</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">procedureName</span></td>
        <td><p>The name of the procedure</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td><p>The sql code of the procedure</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IList</span>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td><span class="parametername">procedureParameter</span></td>
        <td><p>A list of the parameters for the procedure</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_ETLBox_ControlFlow_ProcedureDefinition_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter(ETLBox.ControlFlow.ProcedureDefinition)">CreateOrAlter(ProcedureDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(ProcedureDefinition procedure)
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
        <td><a class="xref" href="/api/etlbox.controlflow/proceduredefinition">ProcedureDefinition</a></td>
        <td><span class="parametername">procedure</span></td>
        <td><p>The procedure definition object containing procedure name, code and potential parameters</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_System_String_System_String_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter(System.String,System.String)">CreateOrAlter(String, String)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(string procedureName, string procedureDefinition)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>The name of the procedure</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td><p>The sql code of the procedure</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_Tasks_CreateProcedureTask_CreateOrAlter_System_String_System_String_System_Collections_Generic_IList_ETLBox_ControlFlow_ProcedureParameter__" data-uid="ETLBox.ControlFlow.Tasks.CreateProcedureTask.CreateOrAlter(System.String,System.String,System.Collections.Generic.IList{ETLBox.ControlFlow.ProcedureParameter})">CreateOrAlter(String, String, IList&lt;ProcedureParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(string procedureName, string procedureDefinition, IList<ProcedureParameter> procedureParameter)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>The name of the procedure</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td><p>The sql code of the procedure</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.IList</span>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td><span class="parametername">procedureParameter</span></td>
        <td><p>A list of the parameters for the procedure</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
