---
title: "CouchbaseDestination<TInput>"
description: "Details for Class CouchbaseDestination<TInput> (ETLBox.Couchbase)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.couchbase"
weight: 10082
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Couchbase.CouchbaseDestination`1">
  <h1 id="ETLBox_Couchbase_CouchbaseDestination_1" data-uid="ETLBox.Couchbase.CouchbaseDestination`1" class="text-break">Class CouchbaseDestination&lt;TInput&gt;
</h1>
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
    <div class="level5"><span class="xref">CouchbaseDestination&lt;TInput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.couchbase/couchbasedestination">CouchbaseDestination</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a></div>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DataFlowDestination&lt;TInput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkTo__1_ETLBox_IDataFlowDestination_System_Object_System_Object_">DataFlowComponent.InternalLinkTo&lt;T&gt;(IDataFlowDestination, object, object)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ResetComponent">DataFlowComponent.ResetComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitCheckedParameter">DataFlowComponent.InitCheckedParameter()</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ProgressCount">DataFlowComponent.ProgressCount</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_OnProgress">DataFlowComponent.OnProgress</a>
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
<h6><strong>Namespace</strong>: ETLBox.Couchbase</h6>
  <h6><strong>Assembly</strong>: ETLBox.Couchbase.dll</h6>
  <h5 id="ETLBox_Couchbase_CouchbaseDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class CouchbaseDestination<TInput> : DataFlowBatchDestination<TInput>, IDataFlowLogging, IDataFlowBatchDestination<TInput>, IDataFlowDestination<TInput>, IDataFlowBatchDestination, IDataFlowDestination, IDataFlowComponent, ILoggableTask
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
  <a id="ETLBox_Couchbase_CouchbaseDestination_1__ctor_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.#ctor*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1__ctor" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.#ctor">CouchbaseDestination()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CouchbaseDestination()
```

{{< rawhtml >}}
  <a id="ETLBox_Couchbase_CouchbaseDestination_1__ctor_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.#ctor*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1__ctor_System_Int32_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.#ctor(System.Int32)">CouchbaseDestination(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CouchbaseDestination(int batchSize)
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
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_BucketName_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.BucketName*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_BucketName" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.BucketName">BucketName</h4>
  <div class="markdown level1 summary"><p>The bucket name to insert the data into. Object will be serialized into Json.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string BucketName { get; set; }
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
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_ClusterOptions_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.ClusterOptions*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_ClusterOptions" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.ClusterOptions">ClusterOptions</h4>
  <div class="markdown level1 summary"><p>If you provide ClusterOptions (or a connection string), this component will create a new Cluster object
to connect with Couchbase. If you already have a cluster object instantiated in your application,
use <a class="xref" href="/api/etlbox.couchbase/couchbasedestination-1#ETLBox_Couchbase_CouchbaseDestination_1_CouchbaseCluster">CouchbaseCluster</a> instead to pass it directly to the component.
Instead or additional to a ClustOptions you can also set the <a class="xref" href="/api/etlbox.couchbase/couchbasedestination-1#ETLBox_Couchbase_CouchbaseDestination_1_ConnectionString">ConnectionString</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ClusterOptions ClusterOptions { get; set; }
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
        <td><span class="xref">ClusterOptions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_ConnectionString_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.ConnectionString*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_ConnectionString" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.ConnectionString">ConnectionString</h4>
  <div class="markdown level1 summary"><p>If you provide a connection string (or cluster options), this component will create a new Cluster object
to connect with Couchbase. If you already have a cluster object instantiated in your application,
use <a class="xref" href="/api/etlbox.couchbase/couchbasedestination-1#ETLBox_Couchbase_CouchbaseDestination_1_CouchbaseCluster">CouchbaseCluster</a> instead to pass it directly to the component.
Instead or additional to a connection string you can also set the <a class="xref" href="/api/etlbox.couchbase/couchbasedestination-1#ETLBox_Couchbase_CouchbaseDestination_1_ClusterOptions">ClusterOptions</a>.</p>
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
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_CouchbaseCluster_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.CouchbaseCluster*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_CouchbaseCluster" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.CouchbaseCluster">CouchbaseCluster</h4>
  <div class="markdown level1 summary"><p>An existing couchbase Cluster that holds a couchbase connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICluster CouchbaseCluster { get; set; }
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
        <td><span class="xref">ICluster</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_KeyColumn_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.KeyColumn*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_KeyColumn" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.KeyColumn">KeyColumn</h4>
  <div class="markdown level1 summary"><p>The property that is used to retrieve the key. Only one key column is accepted.
If no key column is provided, a Guid is generated and used as key.
The property that hold the key must either be a string or implement ToString().</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public KeyColumn KeyColumn { get; set; }
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
        <td><a class="xref" href="/api/etlbox/keycolumn">KeyColumn</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_Options_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.Options*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_Options" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.Options">Options</h4>
  <div class="markdown level1 summary"><p>Additional insert options to use when inserted data into the bucket.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public InsertOptions Options { get; set; }
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
        <td><span class="xref">InsertOptions</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_BulkInsertData_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.BulkInsertData*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_BulkInsertData__0___" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.BulkInsertData(`0[])">BulkInsertData(TInput[])</h4>
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
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_CheckParameter_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.CheckParameter*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_CheckParameter" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.CheckParameter">CheckParameter()</h4>
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
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_FinishWrite_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.FinishWrite*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_FinishWrite" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.FinishWrite">FinishWrite()</h4>
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
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_PrepareParameterForCheck_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.PrepareParameterForCheck*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_PrepareParameterForCheck" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.PrepareParameterForCheck">PrepareParameterForCheck()</h4>
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
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_PrepareWrite_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.PrepareWrite*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_PrepareWrite" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.PrepareWrite">PrepareWrite()</h4>
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
  <a id="ETLBox_Couchbase_CouchbaseDestination_1_Reset_" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.Reset*"></a>
  <h4 id="ETLBox_Couchbase_CouchbaseDestination_1_Reset" data-uid="ETLBox.Couchbase.CouchbaseDestination`1.Reset">Reset()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void Reset()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Reset">DataFlowComponent.Reset()</a></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a>
  </div>
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
