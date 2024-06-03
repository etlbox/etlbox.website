---
title: "CreateProcedureTask"
description: "Details for Class CreateProcedureTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10051
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.CreateProcedureTask">
  <h1 id="ETLBox_ControlFlow_CreateProcedureTask" data-uid="ETLBox.ControlFlow.CreateProcedureTask" class="text-break">Class CreateProcedureTask
</h1>
  <div class="markdown level0 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.controlflow/controlflowtask">ControlFlowTask</a></div>
    <div class="level3"><span class="xref">CreateProcedureTask</span></div>
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
  <h5 id="ETLBox_ControlFlow_CreateProcedureTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class CreateProcedureTask : ControlFlowTask, ILoggableTask
```

{{< rawhtml >}}
  <h5 id="ETLBox_ControlFlow_CreateProcedureTask_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">CRUDProcedureTask.CreateOrAlter("demo.proc1", "select 1 as test");</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_CreateProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask__ctor" data-uid="ETLBox.ControlFlow.CreateProcedureTask.#ctor">CreateProcedureTask()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateProcedureTask()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_CreateProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask__ctor_ETLBox_ControlFlow_ProcedureDefinition_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.#ctor(ETLBox.ControlFlow.ProcedureDefinition)">CreateProcedureTask(ProcedureDefinition)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateProcedureTask(ProcedureDefinition definition)
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
        <td><a class="xref" href="/api/etlbox.controlflow/proceduredefinition">ProcedureDefinition</a></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.#ctor(System.String,System.String)">CreateProcedureTask(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateProcedureTask(string procedureName, string procedureDefinition)
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
        <td><span class="parametername">procedureName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateProcedureTask__ctor_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask__ctor_System_String_System_String_System_Collections_Generic_IList_ETLBox_ControlFlow_ProcedureParameter__" data-uid="ETLBox.ControlFlow.CreateProcedureTask.#ctor(System.String,System.String,System.Collections.Generic.IList{ETLBox.ControlFlow.ProcedureParameter})">CreateProcedureTask(string, string, IList&lt;ProcedureParameter&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CreateProcedureTask(string procedureName, string procedureDefinition, IList<ProcedureParameter> procedureParameter)
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
        <td><span class="parametername">procedureName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td><span class="parametername">procedureParameter</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_CreateProcedureTask_PN_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.PN*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_PN" data-uid="ETLBox.ControlFlow.CreateProcedureTask.PN">PN</h4>
  <div class="markdown level1 summary"><p>The formatted procedure name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor PN { get; }
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
  <a id="ETLBox_ControlFlow_CreateProcedureTask_ProcedureDefinition_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.ProcedureDefinition*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_ProcedureDefinition" data-uid="ETLBox.ControlFlow.CreateProcedureTask.ProcedureDefinition">ProcedureDefinition</h4>
  <div class="markdown level1 summary"><p>The sql code of the procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ProcedureDefinition { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateProcedureTask_ProcedureName_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.ProcedureName*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_ProcedureName" data-uid="ETLBox.ControlFlow.CreateProcedureTask.ProcedureName">ProcedureName</h4>
  <div class="markdown level1 summary"><p>The name of the procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ProcedureName { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateProcedureTask_ProcedureOptions_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.ProcedureOptions*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_ProcedureOptions" data-uid="ETLBox.ControlFlow.CreateProcedureTask.ProcedureOptions">ProcedureOptions</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ProcedureOptions { get; set; }
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
  <a id="ETLBox_ControlFlow_CreateProcedureTask_ProcedureParameters_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.ProcedureParameters*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_ProcedureParameters" data-uid="ETLBox.ControlFlow.CreateProcedureTask.ProcedureParameters">ProcedureParameters</h4>
  <div class="markdown level1 summary"><p>The parameters for the procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ProcedureParameter> ProcedureParameters { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateProcedureTask_Sql_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.Sql*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_Sql" data-uid="ETLBox.ControlFlow.CreateProcedureTask.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The sql code that is used to create/update the procedure.</p>
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_ETLBox_ControlFlow_ProcedureDefinition_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter(ETLBox.ControlFlow.ProcedureDefinition)">CreateOrAlter(ProcedureDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(ProcedureDefinition procedure)
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
        <td><a class="xref" href="/api/etlbox.controlflow/proceduredefinition">ProcedureDefinition</a></td>
        <td><span class="parametername">procedure</span></td>
        <td><p>The procedure definition object containing procedure name, code and potential parameters</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_ETLBox_IConnectionManager_ETLBox_ControlFlow_ProcedureDefinition_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter(ETLBox.IConnectionManager,ETLBox.ControlFlow.ProcedureDefinition)">CreateOrAlter(IConnectionManager, ProcedureDefinition)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, ProcedureDefinition procedure)
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
        <td><a class="xref" href="/api/etlbox.controlflow/proceduredefinition">ProcedureDefinition</a></td>
        <td><span class="parametername">procedure</span></td>
        <td><p>The procedure definition object containing procedure name, code and potential parameters</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_ETLBox_IConnectionManager_System_String_System_String_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter(ETLBox.IConnectionManager,System.String,System.String)">CreateOrAlter(IConnectionManager, string, string)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, string procedureName, string procedureDefinition)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>The name of the procedure</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td><p>The sql code of the procedure</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_ETLBox_IConnectionManager_System_String_System_String_System_Collections_Generic_IList_ETLBox_ControlFlow_ProcedureParameter__" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter(ETLBox.IConnectionManager,System.String,System.String,System.Collections.Generic.IList{ETLBox.ControlFlow.ProcedureParameter})">CreateOrAlter(IConnectionManager, string, string, IList&lt;ProcedureParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(IConnectionManager connectionManager, string procedureName, string procedureDefinition, IList<ProcedureParameter> procedureParameter)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>The name of the procedure</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td><p>The sql code of the procedure</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td><span class="parametername">procedureParameter</span></td>
        <td><p>A list of the parameters for the procedure</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_System_String_System_String_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter(System.String,System.String)">CreateOrAlter(string, string)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(string procedureName, string procedureDefinition)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>The name of the procedure</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td><p>The sql code of the procedure</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter*"></a>
  <h4 id="ETLBox_ControlFlow_CreateProcedureTask_CreateOrAlter_System_String_System_String_System_Collections_Generic_IList_ETLBox_ControlFlow_ProcedureParameter__" data-uid="ETLBox.ControlFlow.CreateProcedureTask.CreateOrAlter(System.String,System.String,System.Collections.Generic.IList{ETLBox.ControlFlow.ProcedureParameter})">CreateOrAlter(string, string, IList&lt;ProcedureParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Creates or updates a procedure.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void CreateOrAlter(string procedureName, string procedureDefinition, IList<ProcedureParameter> procedureParameter)
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
        <td><span class="parametername">procedureName</span></td>
        <td><p>The name of the procedure</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">procedureDefinition</span></td>
        <td><p>The sql code of the procedure</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ilist-1">IList</a>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td><span class="parametername">procedureParameter</span></td>
        <td><p>A list of the parameters for the procedure</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
