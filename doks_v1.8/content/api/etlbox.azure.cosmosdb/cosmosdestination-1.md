---
title: "CosmosDestination<TInput>"
description: "Details for Class CosmosDestination<TInput> (ETLBox.Azure.CosmosDb)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.azure.cosmosdb"
weight: 10017
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1">
  <h1 id="ETLBox_Azure_CosmosDb_CosmosDestination_1" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1" class="text-break">Class CosmosDestination&lt;TInput&gt;</h1>
  <div class="markdown level0 summary"><p>A data flow destination for inserting data into a couchbase bucket.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1">DataFlowDestination</a>&lt;TInput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1">DataFlowBatchDestination</a>&lt;TInput&gt;</div>
    <div class="level5"><span class="xref">CosmosDestination&lt;TInput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination">CosmosDestination</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idataflowbatchdestination-1">IDataFlowBatchDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowbatchdestination">IDataFlowBatchDestination</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_BeforeBatchWrite">DataFlowBatchDestination&lt;TInput&gt;.BeforeBatchWrite</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_AfterBatchWrite">DataFlowBatchDestination&lt;TInput&gt;.AfterBatchWrite</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_BatchSize">DataFlowBatchDestination&lt;TInput&gt;.BatchSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_UseBufferBlock">DataFlowBatchDestination&lt;TInput&gt;.UseBufferBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_CleanUpOnSuccess">DataFlowBatchDestination&lt;TInput&gt;.CleanUpOnSuccess()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_CleanUpOnFaulted_System_Exception_">DataFlowBatchDestination&lt;TInput&gt;.CleanUpOnFaulted(Exception)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_InitComponent">DataFlowBatchDestination&lt;TInput&gt;.InitComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_WriteBatch__0___">DataFlowBatchDestination&lt;TInput&gt;.WriteBatch(TInput[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_TargetBlock">DataFlowDestination&lt;TInput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_TargetAction">DataFlowDestination&lt;TInput&gt;.TargetAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_Buffer">DataFlowDestination&lt;TInput&gt;.Buffer</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_BufferTargetAction">DataFlowDestination&lt;TInput&gt;.BufferTargetAction</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_InternalBatchSize">DataFlowDestination&lt;TInput&gt;.InternalBatchSize</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_DEFAULT_BATCH_SIZE">DataFlowDestination&lt;TInput&gt;.DEFAULT_BATCH_SIZE</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_MaxBufferSize">DataFlowComponent.MaxBufferSize</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_BufferCancellationSource">DataFlowComponent.BufferCancellationSource</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_BufferCancellationToken">DataFlowComponent.BufferCancellationToken</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_WasComponentInitialized">DataFlowComponent.WasComponentInitialized</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_IsReadyForProcessing">DataFlowComponent.IsReadyForProcessing</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_SetParentComponent_ETLBox_DataFlow_DataFlowComponent_">DataFlowComponent.SetParentComponent(DataFlowComponent)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DataFlowComponent.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_IDataFlowDestination_System_Object_System_Object_">DataFlowComponent.InternalLinkTo&lt;T&gt;(IDataFlowDestination, object, object)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_AddAutomaticVoidLinkToOtherTargets_ETLBox_DataFlow_DataFlowComponent_ETLBox_IDataFlowDestination_">DataFlowComponent.AddAutomaticVoidLinkToOtherTargets(DataFlowComponent, IDataFlowDestination)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ResetComponent">DataFlowComponent.ResetComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Reset">DataFlowComponent.Reset()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitCheckedParameter">DataFlowComponent.InitCheckedParameter()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnInitialization">DataFlowComponent.OnInitialization</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnCompletion">DataFlowComponent.OnCompletion</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnException">DataFlowComponent.OnException</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DataFlowComponent.InternalLinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowOrRedirectError_System_Exception_System_String_System_String_">DataFlowComponent.ThrowOrRedirectError(Exception, string, string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowErrorAndFaultNetwork_System_Exception_System_String_">DataFlowComponent.ThrowErrorAndFaultNetwork(Exception, string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CancelComponent">DataFlowComponent.CancelComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ErrorCount">DataFlowComponent.ErrorCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ProgressCount">DataFlowComponent.ProgressCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnProgress">DataFlowComponent.OnProgress</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ExecutionStartTime">DataFlowComponent.ExecutionStartTime</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ExecutionEndTime">DataFlowComponent.ExecutionEndTime</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Tag">DataFlowComponent.Tag</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LoggingStartOnce">DataFlowComponent.LoggingStartOnce()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LoggingFinishOnce">DataFlowComponent.LoggingFinishOnce()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgressBatch_AfterThrowOrRedirectError_System_Int32_">DataFlowComponent.LogProgressBatch_AfterThrowOrRedirectError(int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError">DataFlowComponent.LogProgress_AfterThrowOrRedirectError()</a>
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
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogTrace_System_String_System_Object___">LoggableTask.LogTrace(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogDebug_System_String_System_Object___">LoggableTask.LogDebug(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInfo_System_String_System_Object___">LoggableTask.LogInfo(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogInfoOrDebug_System_String_System_Object___">LoggableTask.LogInfoOrDebug(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogWarn_System_String_System_Object___">LoggableTask.LogWarn(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogError_System_String_System_Object___">LoggableTask.LogError(string, params object[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_LogFatal_System_String_System_Object___">LoggableTask.LogFatal(string, params object[])</a>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone">object.MemberwiseClone()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Azure.CosmosDb</h6>
  <h6><strong>Assembly</strong>: ETLBox.Azure.CosmosDb.dll</h6>
  <h5 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class CosmosDestination<TInput> : DataFlowBatchDestination<TInput>, IDataFlowBatchDestination<TInput>, IDataFlowDestination<TInput>, IDataFlowBatchDestination, IDataFlowDestination, IDataFlowComponent, ILoggableTask
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
        <td><span class="parametername">TInput</span></td>
        <td><p>Type of ingoing data.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1__ctor_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.#ctor*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1__ctor" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.#ctor">CosmosDestination()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CosmosDestination()
```

{{< rawhtml >}}
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1__ctor_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.#ctor*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1__ctor_System_Int32_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.#ctor(System.Int32)">CosmosDestination(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CosmosDestination(int batchSize)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">batchSize</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1__ctor_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.#ctor*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1__ctor_System_String_System_String_System_String_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.#ctor(System.String,System.String,System.String)">CosmosDestination(string, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CosmosDestination(string connectionString, string databaseName, string containerName)
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
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">databaseName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">containerName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_AccountEndpoint_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.AccountEndpoint*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_AccountEndpoint" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.AccountEndpoint">AccountEndpoint</h4>
  <div class="markdown level1 summary"><p>Optional: An Azure Cosmos Db account endpoint used when opening the connection
(works only in combination with <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AuthKeyOrResourceToken">AuthKeyOrResourceToken</a>)
<a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_ConnectionString">ConnectionString</a>, <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureKeyCredential">AzureKeyCredential</a> and <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureTokenCredential">AzureTokenCredential</a> have no effect then.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AccountEndpoint { get; set; }
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
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_AuthKeyOrResourceToken_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.AuthKeyOrResourceToken*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_AuthKeyOrResourceToken" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.AuthKeyOrResourceToken">AuthKeyOrResourceToken</h4>
  <div class="markdown level1 summary"><p>Optional: An Azure Authorization key or resource token which is used when opening the connection
(works only in combination with <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AccountEndpoint">AccountEndpoint</a>)
/// <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_ConnectionString">ConnectionString</a>, <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureKeyCredential">AzureKeyCredential</a> and <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureTokenCredential">AzureTokenCredential</a> have no effect then.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AuthKeyOrResourceToken { get; set; }
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
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureKeyCredential_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.AzureKeyCredential*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureKeyCredential" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.AzureKeyCredential">AzureKeyCredential</h4>
  <div class="markdown level1 summary"><p>Optional: An Azure Key Credential used when opening the connection
(works only in combination with <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_ConnectionString">ConnectionString</a>)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AzureKeyCredential AzureKeyCredential { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.azurekeycredential">AzureKeyCredential</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureTokenCredential_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.AzureTokenCredential*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureTokenCredential" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.AzureTokenCredential">AzureTokenCredential</h4>
  <div class="markdown level1 summary"><p>Optional: An Azure Token Credential used when opening the connection
(works only in combination with <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_ConnectionString">ConnectionString</a>)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TokenCredential AzureTokenCredential { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/azure.core.tokencredential">TokenCredential</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_ConnectionString_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.ConnectionString*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_ConnectionString" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.ConnectionString">ConnectionString</h4>
  <div class="markdown level1 summary"><p>The connection string which points to the Azure Cosmos Db. The connection string may contain all relevant connection information.
Please also specify the <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_DatabaseName">DatabaseName</a> and <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_ContainerName">ContainerName</a>.
Optional: You can also provide either an <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureKeyCredential">AzureKeyCredential</a> or <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AzureTokenCredential">AzureTokenCredential</a> along with the connection string.
Alternatively, you can use the <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AccountEndpoint">AccountEndpoint</a> and <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_AuthKeyOrResourceToken">AuthKeyOrResourceToken</a> to establish a connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ConnectionString { get; set; }
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
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_ContainerName_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.ContainerName*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_ContainerName" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.ContainerName">ContainerName</h4>
  <div class="markdown level1 summary"><p>The container name of the Azure Cosmos Db destination</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ContainerName { get; set; }
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
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_CosmosClient_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.CosmosClient*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_CosmosClient" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.CosmosClient">CosmosClient</h4>
  <div class="markdown level1 summary"><p>Optional: Instead of providing the <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_ConnectionString">ConnectionString</a> and/or other credentials, you can also create
the CosmosClient manually in your code and assign it to this property. This client will then be used,
and no new client won't be created.
Please make sure bulk insert is allowed in the client.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CosmosClient CosmosClient { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.azure.cosmos.cosmosclient">CosmosClient</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_DatabaseName_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.DatabaseName*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_DatabaseName" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.DatabaseName">DatabaseName</h4>
  <div class="markdown level1 summary"><p>The database name of the Azure Cosmos Db destination</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DatabaseName { get; set; }
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
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_SetItemActionOptions_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.SetItemActionOptions*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_SetItemActionOptions" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.SetItemActionOptions">SetItemActionOptions</h4>
  <div class="markdown level1 summary"><p>By default, all data is created/inserted into the destination.
For each record, you can influcene the item action (e.g. to change it to upsert, replace or delete).
Replace and Delete will need to set a partition key for each record via the <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_SetItemActionOptions">SetItemActionOptions</a>.
For Delete you will also need to set an id to identify the record to be deleted.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<ItemActionOption, TInput> SetItemActionOptions { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-2">Action</a>&lt;<a class="xref" href="/api/etlbox.azure.cosmosdb/itemactionoption">ItemActionOption</a>, TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_SetItemActionOptions_examples">Examples</h5>
  <pre><code class="lang-c#">dest.SetItemActionOptions = (options, item) =&gt; {
    options.ItemAction = ItemAction.Delete;  //or ItemAction.Replace or ItemAction.Upsert
    options.Id = item.Id; //only for Deletes                
    options.PartitionKey = new PartitionKey(item.PartitionKey);
};</code></pre>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_UseTransactionalBatch_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.UseTransactionalBatch*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_UseTransactionalBatch" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.UseTransactionalBatch">UseTransactionalBatch</h4>
  <div class="markdown level1 summary"><p>By default, data is inserted as bulk. If you prefer to insert data as part of a transactional batch, set this property to true.
The maximum allowed batch size is then 100 (due to the limitation of Cosmos Db).
This works best if all data has the same partition key. If the incoming data has different partition keys, the data is inserted
in multiple batches, grouped by each partition key.
Make sure to add a partition key for each record using the <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmosdestination-1#ETLBox_Azure_CosmosDb_CosmosDestination_1_SetItemActionOptions">SetItemActionOptions</a> action.
If any of the records in the batch is flawed, the whole batch will not be inserted.
You can redirect erroneous batches using 'LinkErrorsTo()' when linking your components.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool UseTransactionalBatch { get; set; }
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
  <h5 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_UseTransactionalBatch_examples">Examples</h5>
  <pre><code class="lang-c#">dest.UseTransactionalBatch = true;
 dest.SetItemActionOptions = (config, item) =&gt; config.PartitionKey = new PartitionKey(item.Block);</code></pre>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_BulkInsertData_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.BulkInsertData*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_BulkInsertData__0___" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.BulkInsertData(`0[])">BulkInsertData(TInput[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void BulkInsertData(TInput[] data)
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
        <td>TInput[]</td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_BulkInsertData__0___">DataFlowBatchDestination&lt;TInput&gt;.BulkInsertData(TInput[])</a></div>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_CheckParameter_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.CheckParameter*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_CheckParameter" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CheckParameter">DataFlowComponent.CheckParameter()</a></div>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_FinishWrite_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.FinishWrite*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_FinishWrite" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.FinishWrite">FinishWrite()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void FinishWrite()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_FinishWrite">DataFlowBatchDestination&lt;TInput&gt;.FinishWrite()</a></div>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_PrepareParameterForCheck_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.PrepareParameterForCheck*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_PrepareParameterForCheck" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.PrepareParameterForCheck">PrepareParameterForCheck()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareParameterForCheck()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameterForCheck">DataFlowComponent.PrepareParameterForCheck()</a></div>
  <a id="ETLBox_Azure_CosmosDb_CosmosDestination_1_PrepareWrite_" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.PrepareWrite*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosDestination_1_PrepareWrite" data-uid="ETLBox.Azure.CosmosDb.CosmosDestination`1.PrepareWrite">PrepareWrite()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareWrite()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_PrepareWrite">DataFlowBatchDestination&lt;TInput&gt;.PrepareWrite()</a></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idataflowbatchdestination-1">IDataFlowBatchDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowbatchdestination">IDataFlowBatchDestination</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
