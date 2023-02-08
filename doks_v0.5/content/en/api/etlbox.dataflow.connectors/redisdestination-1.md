---
title: "RedisDestination<TInput>"
description: "Details for Class RedisDestination<TInput> (ETLBox.DataFlow.Connectors)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.connectors"
weight: 10134
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1">
  <h1 id="ETLBox_DataFlow_Connectors_RedisDestination_1" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1" class="text-break">Class RedisDestination&lt;TInput&gt;
</h1>
  <div class="markdown level0 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1">DataFlowDestination</a>&lt;TInput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1">DataFlowBatchDestination</a>&lt;TInput&gt;</div>
    <div class="level5"><span class="xref">RedisDestination&lt;TInput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/redisdestination">RedisDestination</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowbatchdestination-1">IDataFlowBatchDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowbatchdestination">IDataFlowBatchDestination</a></div>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowbatchdestination-1#ETLBox_DataFlow_DataFlowBatchDestination_1_WriteBatch__0___">DataFlowBatchDestination&lt;TInput&gt;.WriteBatch(TInput[])</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_TargetBlock">DataFlowDestination&lt;TInput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_Wait">DataFlowDestination&lt;TInput&gt;.Wait()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowDestination&lt;TInput&gt;.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowdestination-1#ETLBox_DataFlow_DataFlowDestination_1_InitComponent">DataFlowDestination&lt;TInput&gt;.InitComponent()</a>
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
  <h6><strong>Assembly</strong>: ETLBox.Redis.dll</h6>
  <h5 id="ETLBox_DataFlow_Connectors_RedisDestination_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class RedisDestination<TInput> : DataFlowBatchDestination<TInput>, ILoggableTask, IDataFlowLogging, IDataFlowBatchDestination<TInput>, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent, IDataFlowBatchDestination
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
        <td><span class="parametername">TInput</span></td>
        <td><p>Type of ingoing data.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1__ctor" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.#ctor">RedisDestination()</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RedisDestination()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1__ctor_System_Int32_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.#ctor(System.Int32)">RedisDestination(Int32)</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RedisDestination(int batchSize)
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
        <td><span class="xref">System.Int32</span></td>
        <td><span class="parametername">batchSize</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_ConnectionString_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.ConnectionString*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_ConnectionString" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.ConnectionString">ConnectionString</h4>
  <div class="markdown level1 summary"><p>If you provide a connection  string, this component will create a new ConnectionMultiplexer object
to connect with redis. If you already have a connection object instantiated in your application,
use <a class="xref" href="/api/etlbox.dataflow.connectors/redisdestination-1#ETLBox_DataFlow_Connectors_RedisDestination_1_RedisConnection">RedisConnection</a> instead to pass it to the component.</p>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_DatabaseNumber_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.DatabaseNumber*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_DatabaseNumber" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.DatabaseNumber">DatabaseNumber</h4>
  <div class="markdown level1 summary"><p>Use the database number to store your data (redis databases are numbered from 0 to 15)
The default database is 0.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int DatabaseNumber { get; set; }
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
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_KeyColumn_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.KeyColumn*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_KeyColumn" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.KeyColumn">KeyColumn</h4>
  <div class="markdown level1 summary"><p>Define the property in your dynamic or strongly type object that is used for retrieving the key
value. The property must be either of type string or implement the ToString() method.
Only one property can be used as key.
You can also use the KeyColumn attribute instead.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public KeyColumn KeyColumn { get; set; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/keycolumn">KeyColumn</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_RedisConnection_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.RedisConnection*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_RedisConnection" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.RedisConnection">RedisConnection</h4>
  <div class="markdown level1 summary"><p>An existing ConnectionMultiplexer that holds a redis connection.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConnectionMultiplexer RedisConnection { get; set; }
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
        <td><span class="xref">StackExchange.Redis.ConnectionMultiplexer</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_SerializationFunc_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.SerializationFunc*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_SerializationFunc" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.SerializationFunc">SerializationFunc</h4>
  <div class="markdown level1 summary"><p>By default, your object is serialzed into json. Define your own serialization function
here.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, string> SerializationFunc { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;TInput, <span class="xref">System.String</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_SerializerSettings_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.SerializerSettings*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_SerializerSettings" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.SerializerSettings">SerializerSettings</h4>
  <div class="markdown level1 summary"><p>The JsonSerializerSettings used to serialize or deserialize your object into json.
By default, your object is serialized into json. Use <a class="xref" href="/api/etlbox.dataflow.connectors/redisdestination-1#ETLBox_DataFlow_Connectors_RedisDestination_1_SerializationFunc">SerializationFunc</a> if you want
to define your own serialization function.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public JsonSerializerSettings SerializerSettings { get; set; }
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
        <td><span class="xref">Newtonsoft.Json.JsonSerializerSettings</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_SetParameter_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.SetParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_SetParameter" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.SetParameter">SetParameter</h4>
  <div class="markdown level1 summary"><p>Provide additional redis parameter that are used when setting the key/value pairs in redis.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public RedisDestination<TInput>.RedisSetParameter SetParameter { get; set; }
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
        <td><a class="xref" href="ETLBox.DataFlow.Connectors.RedisDestination-1.RedisSetParameter.html">RedisDestination.RedisSetParameter</a>&lt;&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_TaskName_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_TaskName" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
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
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_BulkInsertData_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.BulkInsertData*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_BulkInsertData__0___" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.BulkInsertData(`0[])">BulkInsertData(TInput[])</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void BulkInsertData(TInput[] data)
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
        <td>TInput[]</td>
        <td><span class="parametername">data</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowBatchDestination&lt;TInput&gt;.BulkInsertData(TInput[])</span></div>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_CheckParameter_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_CheckParameter" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
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
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_FinishWrite_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.FinishWrite*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_FinishWrite" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.FinishWrite">FinishWrite()</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void FinishWrite()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowBatchDestination&lt;TInput&gt;.FinishWrite()</span></div>
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_InitParameter_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.InitParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_InitParameter" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.InitParameter">InitParameter()</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
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
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_PrepareParameter_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_PrepareParameter" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.PrepareParameter">PrepareParameter()</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
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
  <a id="ETLBox_DataFlow_Connectors_RedisDestination_1_PrepareWrite_" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.PrepareWrite*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_RedisDestination_1_PrepareWrite" data-uid="ETLBox.DataFlow.Connectors.RedisDestination`1.PrepareWrite">PrepareWrite()</h4>
  <div class="markdown level1 summary"><p>A data flow destination for Redis. Regis is a key/value store.
You can define a key column using either a KeyColumnAttribute on your object or assign a value
to the KeyColumn property. If no key column is provided, a Guid is created and used as key.
The stored value will contain your serialized object using Newtonsoft.Json and JsonConvert.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareWrite()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowBatchDestination&lt;TInput&gt;.PrepareWrite()</span></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowbatchdestination-1">IDataFlowBatchDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowbatchdestination">IDataFlowBatchDestination</a>
  </div>

{{< /rawhtml >}}
