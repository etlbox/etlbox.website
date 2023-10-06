---
title: "CosmosSource<TOutput>"
description: "Details for Class CosmosSource<TOutput> (ETLBox.Azure.CosmosDb)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.azure.cosmosdb"
weight: 10008
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1">
  <h1 id="ETLBox_Azure_CosmosDb_CosmosSource_1" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1" class="text-break">Class CosmosSource&lt;TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>A data flow source for Couchbase</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1">DataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div class="level5"><span class="xref">CosmosSource&lt;TOutput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource">CosmosSource</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_InternalPost_System_Nullable_System_Threading_CancellationToken__">DataFlowExecutableSource&lt;TOutput&gt;.InternalPost(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync">DataFlowExecutableSource&lt;TOutput&gt;.ExecuteAsync()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1#ETLBox_DataFlow_DataFlowExecutableSource_1_ExecuteAsync_System_Threading_CancellationToken_">DataFlowExecutableSource&lt;TOutput&gt;.ExecuteAsync(CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TOutput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TOutput&gt;, Predicate&lt;TOutput&gt;, Predicate&lt;TOutput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DataFlowSource&lt;TOutput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_BufferCancellationToken">DataFlowComponent.BufferCancellationToken</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_IsReadyForProcessing">DataFlowComponent.IsReadyForProcessing</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_SetParent_ETLBox_DataFlow_DataFlowComponent_">DataFlowComponent.SetParent(DataFlowComponent)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_IDataFlowDestination_System_Object_System_Object_">DataFlowComponent.InternalLinkTo&lt;T&gt;(IDataFlowDestination, object, object)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LinkBuffersRecursively">DataFlowComponent.LinkBuffersRecursively()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(CancellationToken?)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgressBatch_AfterThrowOrRedirectError_System_Int32_">DataFlowComponent.LogProgressBatch_AfterThrowOrRedirectError(int)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError">DataFlowComponent.LogProgress_AfterThrowOrRedirectError()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskType">LoggableTask.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_DisableLogging">LoggableTask.DisableLogging</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskHash">LoggableTask.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_CopyLogTaskProperties_ETLBox_ILoggableTask_">LoggableTask.CopyLogTaskProperties(ILoggableTask)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Azure.CosmosDb</h6>
  <h6><strong>Assembly</strong>: ETLBox.Azure.CosmosDb.dll</h6>
  <h5 id="ETLBox_Azure_CosmosDb_CosmosSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class CosmosSource<TOutput> : DataFlowExecutableSource<TOutput>, IDataFlowLogging, IDataFlowExecutableSource<TOutput>, IDataFlowSource<TOutput>, IDataFlowExecutableSource, IDataFlowSource, IDataFlowComponent, ILoggableTask
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
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1__ctor_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.#ctor*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1__ctor" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.#ctor">CosmosSource()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CosmosSource()
```

{{< rawhtml >}}
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1__ctor_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.#ctor*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1__ctor_System_String_System_String_System_String_System_String_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.#ctor(System.String,System.String,System.String,System.String)">CosmosSource(string, string, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CosmosSource(string connectionString, string databaseName, string containerName, string sql)
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
        <td><span class="parametername">connectionString</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">databaseName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">containerName</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sql</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_AccountEndpoint_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.AccountEndpoint*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_AccountEndpoint" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.AccountEndpoint">AccountEndpoint</h4>
  <div class="markdown level1 summary"><p>Optional: An Azure Cosmos Db account endpoint used when opening the connection
(works only in combination with <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AuthKeyOrResourceToken">AuthKeyOrResourceToken</a>)
<a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_ConnectionString">ConnectionString</a>, <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AzureKeyCredential">AzureKeyCredential</a> and <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AzureTokenCredential">AzureTokenCredential</a> have no effect then.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AccountEndpoint { get; set; }
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
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_AuthKeyOrResourceToken_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.AuthKeyOrResourceToken*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_AuthKeyOrResourceToken" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.AuthKeyOrResourceToken">AuthKeyOrResourceToken</h4>
  <div class="markdown level1 summary"><p>Optional: An Azure Authorization key or resource token which is used when opening the connection
(works only in combination with <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AccountEndpoint">AccountEndpoint</a>)
/// <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_ConnectionString">ConnectionString</a>, <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AzureKeyCredential">AzureKeyCredential</a> and <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AzureTokenCredential">AzureTokenCredential</a> have no effect then.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string AuthKeyOrResourceToken { get; set; }
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
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_AzureKeyCredential_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.AzureKeyCredential*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_AzureKeyCredential" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.AzureKeyCredential">AzureKeyCredential</h4>
  <div class="markdown level1 summary"><p>Optional: An Azure Key Credential used when opening the connection
(works only in combination with <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_ConnectionString">ConnectionString</a>)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AzureKeyCredential AzureKeyCredential { get; set; }
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
        <td><span class="xref">AzureKeyCredential</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_AzureTokenCredential_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.AzureTokenCredential*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_AzureTokenCredential" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.AzureTokenCredential">AzureTokenCredential</h4>
  <div class="markdown level1 summary"><p>Optional: An Azure Token Credential used when opening the connection
(works only in combination with <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_ConnectionString">ConnectionString</a>)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TokenCredential AzureTokenCredential { get; set; }
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
        <td><span class="xref">TokenCredential</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_ConnectionString_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.ConnectionString*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_ConnectionString" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.ConnectionString">ConnectionString</h4>
  <div class="markdown level1 summary"><p>The connection string which points to the Azure Cosmos Db. The connection string may contain all relevant connection information.
Please also specify the <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_DatabaseName">DatabaseName</a> and <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_ContainerName">ContainerName</a>.
Optional: You can also provide either an <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AzureKeyCredential">AzureKeyCredential</a> or <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AzureTokenCredential">AzureTokenCredential</a> along with the connection string.
Alternatively, you can use the <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AccountEndpoint">AccountEndpoint</a> and <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_AuthKeyOrResourceToken">AuthKeyOrResourceToken</a> to establish a connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ConnectionString { get; set; }
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
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_ContainerName_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.ContainerName*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_ContainerName" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.ContainerName">ContainerName</h4>
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
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_CosmosClient_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.CosmosClient*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_CosmosClient" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.CosmosClient">CosmosClient</h4>
  <div class="markdown level1 summary"><p>Optional: Instead of providing the <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_ConnectionString">ConnectionString</a> and/or other credentials, you can also create
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">CosmosClient</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_DatabaseName_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.DatabaseName*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_DatabaseName" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.DatabaseName">DatabaseName</h4>
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
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_QueryDefinition_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.QueryDefinition*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_QueryDefinition" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.QueryDefinition">QueryDefinition</h4>
  <div class="markdown level1 summary"><p>The query definition to retrieve the data. If no query definition is provided, <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_Sql">Sql</a>, the definition will be automatically generated from the
provided <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_Sql">Sql</a> statement.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public QueryDefinition QueryDefinition { get; set; }
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
        <td><span class="xref">QueryDefinition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_QueryRequestOptions_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.QueryRequestOptions*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_QueryRequestOptions" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.QueryRequestOptions">QueryRequestOptions</h4>
  <div class="markdown level1 summary"><p>Optional: Request options for the query.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public QueryRequestOptions QueryRequestOptions { get; set; }
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
        <td><span class="xref">QueryRequestOptions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_Sql_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.Sql*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_Sql" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.Sql">Sql</h4>
  <div class="markdown level1 summary"><p>The Sql used to retrieve the data. Alternatively, you can also provide a <a class="xref" href="/api/etlbox.azure.cosmosdb/cosmossource-1#ETLBox_Azure_CosmosDb_CosmosSource_1_QueryDefinition">QueryDefinition</a>.</p>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_TaskName_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.TaskName*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_TaskName" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.TaskName">TaskName</h4>
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
  <div><a class="xref" href="/api/etlbox/loggabletask#ETLBox_LoggableTask_TaskName">LoggableTask.TaskName</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_CheckParameter_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.CheckParameter*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_CheckParameter" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.CheckParameter">CheckParameter()</h4>
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
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_CleanUpOnFaulted_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
  <div class="markdown level1 summary"></div>
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
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_CleanUpOnSuccess_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_CleanUpOnSuccess" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CleanUpOnSuccess()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnSuccess">DataFlowComponent.CleanUpOnSuccess()</a></div>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_InitParameter_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.InitParameter*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_InitParameter" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.InitParameter">InitParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitParameter">DataFlowComponent.InitParameter()</a></div>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_OnExecutionDoAsyncWork_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.OnExecutionDoAsyncWork*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_OnExecutionDoAsyncWork" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.OnExecutionDoAsyncWork">OnExecutionDoAsyncWork()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void OnExecutionDoAsyncWork()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowExecutableSource&lt;TOutput&gt;.OnExecutionDoAsyncWork()</span></div>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_OnExecutionDoSynchronousWork_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.OnExecutionDoSynchronousWork*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_OnExecutionDoSynchronousWork" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.OnExecutionDoSynchronousWork">OnExecutionDoSynchronousWork()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void OnExecutionDoSynchronousWork()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowExecutableSource&lt;TOutput&gt;.OnExecutionDoSynchronousWork()</span></div>
  <a id="ETLBox_Azure_CosmosDb_CosmosSource_1_PrepareParameter_" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.PrepareParameter*"></a>
  <h4 id="ETLBox_Azure_CosmosDb_CosmosSource_1_PrepareParameter" data-uid="ETLBox.Azure.CosmosDb.CosmosSource`1.PrepareParameter">PrepareParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameter">DataFlowComponent.PrepareParameter()</a></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
