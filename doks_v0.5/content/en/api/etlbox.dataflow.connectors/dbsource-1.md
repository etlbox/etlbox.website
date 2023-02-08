---
title: "DbSource<TOutput>"
description: "Details for Class DbSource<TOutput> (ETLBox.DataFlow.Connectors)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.connectors"
weight: 10112
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Connectors.DbSource`1">
  <h1 id="ETLBox_DataFlow_Connectors_DbSource_1" data-uid="ETLBox.DataFlow.Connectors.DbSource`1" class="text-break">Class DbSource&lt;TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1">DataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div class="level5"><span class="xref">DbSource&lt;TOutput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/dbsource">DbSource</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource">IDataFlowExecutableSource</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Limit">DataFlowExecutableSource&lt;TOutput&gt;.Limit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ProgressCountIsInLimit">DataFlowExecutableSource&lt;TOutput&gt;.ProgressCountIsInLimit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ProgressCountIsExceedingLimit">DataFlowExecutableSource&lt;TOutput&gt;.ProgressCountIsExceedingLimit</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_SourceBlock">DataFlowExecutableSource&lt;TOutput&gt;.SourceBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Buffer">DataFlowExecutableSource&lt;TOutput&gt;.Buffer</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_SourceTask">DataFlowExecutableSource&lt;TOutput&gt;.SourceTask</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_CompleteManually">DataFlowExecutableSource&lt;TOutput&gt;.CompleteManually</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_InitComponent">DataFlowExecutableSource&lt;TOutput&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Execute">DataFlowExecutableSource&lt;TOutput&gt;.Execute()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Execute_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;TOutput&gt;.Execute(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Post">DataFlowExecutableSource&lt;TOutput&gt;.Post()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_Post_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;TOutput&gt;.Post(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_InternalPost_System_Nullable_System_Threading_CancellationToken__">DataFlowExecutableSource&lt;TOutput&gt;.InternalPost(Nullable&lt;CancellationToken&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync">DataFlowExecutableSource&lt;TOutput&gt;.ExecuteAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;TOutput&gt;.ExecuteAsync(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowSource&lt;TOutput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_MaxBufferSize">DataFlowComponent.MaxBufferSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent__maxBufferSize">DataFlowComponent._maxBufferSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Predecessors">DataFlowComponent.Predecessors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Successors">DataFlowComponent.Successors</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Completion">DataFlowComponent.Completion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_WasComponentInitialized">DataFlowComponent.WasComponentInitialized</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ReadyForProcessing">DataFlowComponent.ReadyForProcessing</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_WasLinked">DataFlowComponent.WasLinked</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_SetParent_ETLBox_DataFlow_DataFlowComponent_">DataFlowComponent.SetParent(DataFlowComponent)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_DataFlow_IDataFlowDestination_System_Object_System_Object_">DataFlowComponent.InternalLinkTo&lt;T&gt;(IDataFlowDestination, Object, Object)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LinkBuffersRecursively">DataFlowComponent.LinkBuffersRecursively()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(Nullable&lt;CancellationToken&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_SetCompletionTask">DataFlowComponent.SetCompletionTask()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_RunErrorSourceInit">DataFlowComponent.RunErrorSourceInit()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnCompletion">DataFlowComponent.OnCompletion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CompleteOrFaultBufferOnPredecessorCompletion_System_Threading_Tasks_Task_">DataFlowComponent.CompleteOrFaultBufferOnPredecessorCompletion(Task)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Exception">DataFlowComponent.Exception</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ErrorSource">DataFlowComponent.ErrorSource</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CancelBufferAndThrowOperationCanceledException">DataFlowComponent.CancelBufferAndThrowOperationCanceledException()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowComponent.InternalLinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowOrRedirectError_System_Exception_System_String_System_String_">DataFlowComponent.ThrowOrRedirectError(Exception, String, String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowErrorAndFaultNetwork_System_Exception_System_String_">DataFlowComponent.ThrowErrorAndFaultNetwork(Exception, String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CancelComponent">DataFlowComponent.CancelComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent__loggingThresholdRows">DataFlowComponent._loggingThresholdRows</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogThreshold">DataFlowComponent.LogThreshold</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ProgressCount">DataFlowComponent.ProgressCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnProgress">DataFlowComponent.OnProgress</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThresholdCount">DataFlowComponent.ThresholdCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LoggingStartOnce">DataFlowComponent.LoggingStartOnce()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LoggingFinishOnce">DataFlowComponent.LoggingFinishOnce()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgressBatch_AfterThrowOrRedirectError_System_Int32_">DataFlowComponent.LogProgressBatch_AfterThrowOrRedirectError(Int32)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError_System_Boolean_">DataFlowComponent.LogProgress_AfterThrowOrRedirectError(Boolean)</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Connectors</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class DbSource<TOutput> : DataFlowExecutableSource<TOutput>, ILoggableTask, IDataFlowLogging, IDataFlowExecutableSource<TOutput>, IDataFlowSource<TOutput>, IDataFlowSource, IDataFlowComponent, IDataFlowExecutableSource
```

{{< rawhtml >}}
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">TOutput</span></td>
        <td><p>Type of outgoing data.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_examples"><strong>Examples</strong></h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1__ctor" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.#ctor">DbSource()</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbSource()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1__ctor_examples">Examples</h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1__ctor_ETLBox_Connection_IConnectionManager_System_String_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.#ctor(ETLBox.Connection.IConnectionManager,System.String)">DbSource(IConnectionManager, String)</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbSource(IConnectionManager connectionManager, string tableName)
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
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_ConnectionManager">ConnectionManager</a></p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">tableName</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_TableName">TableName</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1__ctor_ETLBox_Connection_IConnectionManager_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.#ctor(ETLBox.Connection.IConnectionManager)">DbSource(IConnectionManager)</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbSource(IConnectionManager connectionManager)
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
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_ConnectionManager">ConnectionManager</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1__ctor_System_String_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.#ctor(System.String)">DbSource(String)</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbSource(string tableName)
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
        <td><span class="parametername">tableName</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_TableName">TableName</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_BulkSelectBatchSize_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.BulkSelectBatchSize*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_BulkSelectBatchSize" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.BulkSelectBatchSize">BulkSelectBatchSize</h4>
  <div class="markdown level1 summary"><p>The batch size used when retrieving data via <a class="xref" href="/api/etlbox.dataflow.connectors/selectoperation#ETLBox_DataFlow_Connectors_SelectOperation_BulkSelect">BulkSelect</a> as <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_SelectMode">SelectMode</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int BulkSelectBatchSize { get; set; }
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
        <td><span class="xref">System.Int32</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_ColumnConverters_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.ColumnConverters*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_ColumnConverters" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.ColumnConverters">ColumnConverters</h4>
  <div class="markdown level1 summary"><p>Use a column converter to apply custom conversion function to the data of a column.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ColumnConverter> ColumnConverters { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow.connectors/columnconverter">ColumnConverter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_ColumnMapping_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.ColumnMapping*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_ColumnMapping" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.ColumnMapping">ColumnMapping</h4>
  <div class="markdown level1 summary"><p>Column mapping to map column names to properties.
E.g. if the value of column &quot;Key&quot; should be written into the property &quot;Id&quot;,
then you can simply add a column mapping: DbColumnName: &quot;Key&quot; -&gt; PropertyName: &quot;Id&quot;.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ColumnMap> ColumnMapping { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow/columnmap">ColumnMap</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_ConnectionManager_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.ConnectionManager*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_ConnectionManager" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.ConnectionManager">ConnectionManager</h4>
  <div class="markdown level1 summary"><p>The connection manager used to connect to the database - use the right connection manager for your database type.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_FilterRows_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.FilterRows*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_FilterRows" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.FilterRows">FilterRows</h4>
  <div class="markdown level1 summary"><p>Applies only when <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_SelectMode">SelectMode</a> is set to <a class="xref" href="/api/etlbox.dataflow.connectors/selectoperation#ETLBox_DataFlow_Connectors_SelectOperation_BulkSelect">BulkSelect</a>.
Rows that are used to identify records that you want to retrieve when using the <a class="xref" href="/api/etlbox.dataflow.connectors/selectoperation#ETLBox_DataFlow_Connectors_SelectOperation_BulkSelect">BulkSelect</a>
mode. This setting has no affect when <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_SelectMode">SelectMode</a> is set to <a class="xref" href="/api/etlbox.dataflow.connectors/selectoperation#ETLBox_DataFlow_Connectors_SelectOperation_Default">Default</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IEnumerable<TOutput> FilterRows { get; set; }
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
        <td><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;TOutput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_IdColumns_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.IdColumns*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_IdColumns" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.IdColumns">IdColumns</h4>
  <div class="markdown level1 summary"><p>Applies only when <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_SelectMode">SelectMode</a> is set to <a class="xref" href="/api/etlbox.dataflow.connectors/selectoperation#ETLBox_DataFlow_Connectors_SelectOperation_BulkSelect">BulkSelect</a>.
List of id columns that are used to select particular records from the source.
If the value of a id column matchs with the value in the corresponding property,
the record will be read from the source.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<IdColumn> IdColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow/idcolumn">IdColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_SelectColumns_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.SelectColumns*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_SelectColumns" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.SelectColumns">SelectColumns</h4>
  <div class="markdown level1 summary"><p>Applies only when <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_SelectMode">SelectMode</a> is set to <a class="xref" href="/api/etlbox.dataflow.connectors/selectoperation#ETLBox_DataFlow_Connectors_SelectOperation_BulkSelect">BulkSelect</a>.
List of all properties that you would like to have populated with data from the source - by default, all properties that
are matching with a database column are retrieved from the database (for dynamic objects and arrays all columns are loaded).
If a column has a different name than your properties, you can use the <a class="xref" href="/api/etlbox.dataflow/columnmap">ColumnMap</a> to add a mapping between
property and column names.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<SelectColumn> SelectColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow/selectcolumn">SelectColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_SelectMode_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.SelectMode*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_SelectMode" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.SelectMode">SelectMode</h4>
  <div class="markdown level1 summary"><p>The default select mode retrieves all data from either a table (determined by the <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_TableName">TableName</a> or from a <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_Sql">Sql</a> statement.
If you have a list of objects that you would like to use as a filter when retrieving data, set the <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_SelectMode">SelectMode</a> to <a class="xref" href="/api/etlbox.dataflow.connectors/selectoperation#ETLBox_DataFlow_Connectors_SelectOperation_BulkSelect">BulkSelect</a>.
Now you can define <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_IdColumns">IdColumns</a> and <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_FilterRows">FilterRows</a> to select only particular rows.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SelectOperation SelectMode { get; set; }
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
        <td><a class="xref" href="/api/etlbox.dataflow.connectors/selectoperation">SelectOperation</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_SourceTableDefinition_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.SourceTableDefinition*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_SourceTableDefinition" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.SourceTableDefinition">SourceTableDefinition</h4>
  <div class="markdown level1 summary"><p>Pass a table definition that describe the source data.
Only the column name needs to be provided - you can leave out other information.
If you provide the <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_TableName">TableName</a>, ETLBox will try to read the table definition directly from the database.
If you provide your own TableDefinition, this will always be used.
If you provide a <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_Sql">Sql</a> statement, ETLBox will try to automatically
read the column names from the sql query. Sometimes the automatic parsing from the query doesn't work.
Then you can provide a TableDefinition which contains the column names in the same order
as they appear in the sql statement.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableDefinition SourceTableDefinition { get; set; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_Sql_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.Sql*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_Sql" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>A custom sql query to extract the data from the source.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Sql { get; set; }
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
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_SqlParameter_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.SqlParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_SqlParameter" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.SqlParameter">SqlParameter</h4>
  <div class="markdown level1 summary"><p>List of query parameters that are used to replace values in <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource-1#ETLBox_DataFlow_Connectors_DbSource_1_Sql">Sql</a>
For every parameter provided, your sql statement should contain a placeholder.
E.g.: 'SELECT col1 FROM table WHERE col2 &gt; @parameter1&amp;apos;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IEnumerable<QueryParameter> SqlParameter { get; set; }
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
        <td><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;<a class="xref" href="/api/etlbox.controlflow/queryparameter">QueryParameter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_TableName_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.TableName*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_TableName" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.TableName">TableName</h4>
  <div class="markdown level1 summary"><p>The name of the database table to read data from.</p>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_TaskName_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_TaskName" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.controlflow/loggabletask#ETLBox_ControlFlow_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_CheckParameter_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_CheckParameter" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CheckParameter">DataFlowComponent.CheckParameter()</a></div>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_CheckParameter_examples">Examples</h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CleanUpOnFaulted(Exception e)
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
        <td><span class="xref">System.Exception</span></td>
        <td><span class="parametername">e</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnFaulted_System_Exception_">DataFlowComponent.CleanUpOnFaulted(Exception)</a></div>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_CleanUpOnFaulted_System_Exception__examples">Examples</h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CleanUpOnSuccess()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnSuccess">DataFlowComponent.CleanUpOnSuccess()</a></div>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_CleanUpOnSuccess_examples">Examples</h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_InitParameter_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.InitParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_InitParameter" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.InitParameter">InitParameter()</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitParameter">DataFlowComponent.InitParameter()</a></div>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_InitParameter_examples">Examples</h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_OnExecutionDoAsyncWork_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.OnExecutionDoAsyncWork*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_OnExecutionDoAsyncWork" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.OnExecutionDoAsyncWork">OnExecutionDoAsyncWork()</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void OnExecutionDoAsyncWork()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowExecutableSource&lt;TOutput&gt;.OnExecutionDoAsyncWork()</span></div>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_OnExecutionDoAsyncWork_examples">Examples</h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_OnExecutionDoSynchronousWork_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.OnExecutionDoSynchronousWork*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_OnExecutionDoSynchronousWork" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.OnExecutionDoSynchronousWork">OnExecutionDoSynchronousWork()</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void OnExecutionDoSynchronousWork()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowExecutableSource&lt;TOutput&gt;.OnExecutionDoSynchronousWork()</span></div>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_OnExecutionDoSynchronousWork_examples">Examples</h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <a id="ETLBox_DataFlow_Connectors_DbSource_1_PrepareParameter_" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_DbSource_1_PrepareParameter" data-uid="ETLBox.DataFlow.Connectors.DbSource`1.PrepareParameter">PrepareParameter()</h4>
  <div class="markdown level1 summary"><p>A database source defines either a table or sql query that returns data from a database.
Multiple database are supported. Use the corresponding connection manager that fits to your database.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameter">DataFlowComponent.PrepareParameter()</a></div>
  <h5 id="ETLBox_DataFlow_Connectors_DbSource_1_PrepareParameter_examples">Examples</h5>
  <pre><code>SqlConnectionManager connMan = new SqlConnectionManager(&quot;Data Source=localhost&quot;);
DbSource&lt;MyRow> source = new DbSource&lt;MyRow>(connMan, &quot;dbo.table&quot;);</code></pre>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource">IDataFlowExecutableSource</a>
  </div>

{{< /rawhtml >}}
