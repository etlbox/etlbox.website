---
title: "ControlFlowTask"
description: "Details for Class ControlFlowTask (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10034
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.ControlFlowTask">
  <h1 id="ETLBox_ControlFlow_ControlFlowTask" data-uid="ETLBox.ControlFlow.ControlFlowTask" class="text-break">Class ControlFlowTask
  </h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><span class="xref">ControlFlowTask</span></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow/dbtask">DbTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow/droptask-1">DropTask&lt;T&gt;</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow/ifexiststask">IfExistsTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/cleanupschematask">CleanUpSchemaTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/createdatabasetask">CreateDatabaseTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/createindextask">CreateIndexTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/createproceduretask">CreateProcedureTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/createschematask">CreateSchemaTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/createtabletask">CreateTableTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/createviewtask">CreateViewTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/getlisttask">GetListTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/rowcounttask">RowCountTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.controlflow.tasks/truncatetabletask">TruncateTableTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.logging/createerrortabletask">CreateErrorTableTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.logging/loadprocesstask">LoadProcessTask</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.logging/logsection">LogSection</a></div>
      <div class="level3"><a class="xref" href="/api/etlbox.logging/logtask">LogTask</a></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_ControlFlowTask_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public abstract class ControlFlowTask : LoggableTask, ILoggableTask
```

{{< rawhtml >}}
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_ControlFlow_ControlFlowTask_ConnectionManager_" data-uid="ETLBox.ControlFlow.ControlFlowTask.ConnectionManager*"></a>
  <h4 id="ETLBox_ControlFlow_ControlFlowTask_ConnectionManager" data-uid="ETLBox.ControlFlow.ControlFlowTask.ConnectionManager">ConnectionManager</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public virtual IConnectionManager ConnectionManager { get; set; }
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
        <td><a class="xref" href="/api/etlbox.connection/iconnectionmanager">IConnectionManager</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ControlFlowTask_ConnectionType_" data-uid="ETLBox.ControlFlow.ControlFlowTask.ConnectionType*"></a>
  <h4 id="ETLBox_ControlFlow_ControlFlowTask_ConnectionType" data-uid="ETLBox.ControlFlow.ControlFlowTask.ConnectionType">ConnectionType</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConnectionManagerType ConnectionType { get; }
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
        <td><a class="xref" href="/api/etlbox.connection/connectionmanagertype">ConnectionManagerType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ControlFlowTask_QB_" data-uid="ETLBox.ControlFlow.ControlFlowTask.QB*"></a>
  <h4 id="ETLBox_ControlFlow_ControlFlowTask_QB" data-uid="ETLBox.ControlFlow.ControlFlowTask.QB">QB</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QB { get; }
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
  <a id="ETLBox_ControlFlow_ControlFlowTask_QE_" data-uid="ETLBox.ControlFlow.ControlFlowTask.QE*"></a>
  <h4 id="ETLBox_ControlFlow_ControlFlowTask_QE" data-uid="ETLBox.ControlFlow.ControlFlowTask.QE">QE</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QE { get; }
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
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
