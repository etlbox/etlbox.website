---
title: "Aggregation<TInput, TOutput>"
description: "Details for Class Aggregation<TInput, TOutput> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10060
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Aggregation`2">
  <h1 id="ETLBox_DataFlow_Aggregation_2" data-uid="ETLBox.DataFlow.Aggregation`2" class="text-break">Class Aggregation&lt;TInput, TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>Aggregates data by the given aggregation methods.
The aggregate is a partial-blocking transformation - only the aggregation values are stored in separate memory objects.
When all rows have been processed by the aggregation, the aggregated values are written into the output.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;TInput, TOutput&gt;</div>
    <div class="level5"><span class="xref">Aggregation&lt;TInput, TOutput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow/aggregation">Aggregation</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowtransformation-2">IDataFlowTransformation</a>&lt;TInput, TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TOutput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2#ETLBox_DataFlow_DataFlowTransformation_2_TargetBlock">DataFlowTransformation&lt;TInput, TOutput&gt;.TargetBlock</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitParameter">DataFlowComponent.InitParameter()</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LogProgress_AfterThrowOrRedirectError_System_Boolean_">DataFlowComponent.LogProgress_AfterThrowOrRedirectError(bool)</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Aggregation_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class Aggregation<TInput, TOutput> : DataFlowTransformation<TInput, TOutput>, ILoggableTask, IDataFlowLogging, IDataFlowTransformation<TInput, TOutput>, IDataFlowSource<TOutput>, IDataFlowSource, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent
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
      <tr>
        <td><span class="parametername">TOutput</span></td>
        <td><p>Type of outgoing data.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Aggregation_2_examples"><strong>Examples</strong></h5>
  <pre><code>public class MyDetailValue
{
    public int DetailValue { get; set; }
}
public class MyAggRow
{
    [AggregateColumn(nameof(MyDetailValue.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }
}
var source = new DbSource&lt;MyDetailValue>(&quot;DetailValues&quot;);
var agg = new Aggregation&lt;MyDetailValue, MyAggRow>();
var dest = new MemoryDestination&lt;MyAggRow>();
source.LinkTo&lt;MyAggRow>(agg).LinkTo(dest);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Aggregation_2__ctor_" data-uid="ETLBox.DataFlow.Aggregation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2__ctor" data-uid="ETLBox.DataFlow.Aggregation`2.#ctor">Aggregation()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Aggregation()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_Aggregation_2__ctor_examples">Examples</h5>
  <pre><code>public class MyDetailValue
{
    public int DetailValue { get; set; }
}
public class MyAggRow
{
    [AggregateColumn(nameof(MyDetailValue.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }
}
var source = new DbSource&lt;MyDetailValue>(&quot;DetailValues&quot;);
var agg = new Aggregation&lt;MyDetailValue, MyAggRow>();
var dest = new MemoryDestination&lt;MyAggRow>();
source.LinkTo&lt;MyAggRow>(agg).LinkTo(dest);</code></pre>
  <a id="ETLBox_DataFlow_Aggregation_2__ctor_" data-uid="ETLBox.DataFlow.Aggregation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2__ctor_System_Action__0__1__System_Func__0_System_Object__System_Action_System_Object__1__" data-uid="ETLBox.DataFlow.Aggregation`2.#ctor(System.Action{`0,`1},System.Func{`0,System.Object},System.Action{System.Object,`1})">Aggregation(Action&lt;TInput, TOutput&gt;, Func&lt;TInput, object&gt;, Action&lt;object, TOutput&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Aggregation(Action<TInput, TOutput> aggregationAction, Func<TInput, object> groupingFunc, Action<object, TOutput> storeKeyAction)
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
        <td><span class="xref">System.Action&lt;T1, T2&gt;</span>&lt;TInput, TOutput&gt;</td>
        <td><span class="parametername">aggregationAction</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_AggregationAction">AggregationAction</a></p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;TInput, <span class="xref">object</span>&gt;</td>
        <td><span class="parametername">groupingFunc</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_GroupingFunc">GroupingFunc</a></p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Action&lt;T1, T2&gt;</span>&lt;<span class="xref">object</span>, TOutput&gt;</td>
        <td><span class="parametername">storeKeyAction</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_StoreKeyAction">StoreKeyAction</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Aggregation_2__ctor_" data-uid="ETLBox.DataFlow.Aggregation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2__ctor_System_Action__0__1__System_Func__0_System_Object__" data-uid="ETLBox.DataFlow.Aggregation`2.#ctor(System.Action{`0,`1},System.Func{`0,System.Object})">Aggregation(Action&lt;TInput, TOutput&gt;, Func&lt;TInput, object&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Aggregation(Action<TInput, TOutput> aggregationAction, Func<TInput, object> groupingFunc)
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
        <td><span class="xref">System.Action&lt;T1, T2&gt;</span>&lt;TInput, TOutput&gt;</td>
        <td><span class="parametername">aggregationAction</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_AggregationAction">AggregationAction</a></p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;TInput, <span class="xref">object</span>&gt;</td>
        <td><span class="parametername">groupingFunc</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_GroupingFunc">GroupingFunc</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Aggregation_2__ctor_" data-uid="ETLBox.DataFlow.Aggregation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2__ctor_System_Action__0__1__" data-uid="ETLBox.DataFlow.Aggregation`2.#ctor(System.Action{`0,`1})">Aggregation(Action&lt;TInput, TOutput&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Aggregation(Action<TInput, TOutput> aggregationAction)
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
        <td><span class="xref">System.Action&lt;T1, T2&gt;</span>&lt;TInput, TOutput&gt;</td>
        <td><span class="parametername">aggregationAction</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_AggregationAction">AggregationAction</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Aggregation_2_AggregateColumns_" data-uid="ETLBox.DataFlow.Aggregation`2.AggregateColumns*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_AggregateColumns" data-uid="ETLBox.DataFlow.Aggregation`2.AggregateColumns">AggregateColumns</h4>
  <div class="markdown level1 summary"><p>This list will be used to set the AggregationAction.
This also works with ExpandoObjects.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<AggregateColumn> AggregateColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox/aggregatecolumn">AggregateColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Aggregation_2_AggregationAction_" data-uid="ETLBox.DataFlow.Aggregation`2.AggregationAction*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_AggregationAction" data-uid="ETLBox.DataFlow.Aggregation`2.AggregationAction">AggregationAction</h4>
  <div class="markdown level1 summary"><p>This action describes how the input data is aggregated.
Not needed if you use the <a class="xref" href="/api/etlbox/aggregatecolumn">AggregateColumn</a> in your object
or pass a list to the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_AggregateColumns">AggregateColumns</a> property.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<TInput, TOutput> AggregationAction { get; set; }
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
        <td><span class="xref">System.Action&lt;T1, T2&gt;</span>&lt;TInput, TOutput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Aggregation_2_AggregationCondition_" data-uid="ETLBox.DataFlow.Aggregation`2.AggregationCondition*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_AggregationCondition" data-uid="ETLBox.DataFlow.Aggregation`2.AggregationCondition">AggregationCondition</h4>
  <div class="markdown level1 summary"><p>When the aggregation condition is set, the pre-defined aggregation methods are only executed if this
condition evaluates to true. Only applicable if you set <a class="xref" href="/api/etlbox/aggregatecolumn">AggregateColumn</a> attributes on your object or
if you defined your columns via the<br>
<a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_AggregateColumns">AggregateColumns</a> property.
This func will be invoked before every aggregation (e.g. every count is <a class="xref" href="/api/etlbox/aggregationmethod#ETLBox_AggregationMethod_Count">Count</a> is set
for a property, and contains the currently processed row along with the current property name and aggregation method.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, AggregationMethodInfo, bool> AggregationCondition { get; set; }
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
        <td><span class="xref">System.Func&lt;T1, T2, TResult&gt;</span>&lt;TInput, <a class="xref" href="/api/etlbox.dataflow/aggregationmethodinfo">AggregationMethodInfo</a>, <span class="xref">bool</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Aggregation_2_GroupColumns_" data-uid="ETLBox.DataFlow.Aggregation`2.GroupColumns*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_GroupColumns" data-uid="ETLBox.DataFlow.Aggregation`2.GroupColumns">GroupColumns</h4>
  <div class="markdown level1 summary"><p>This list will be used to set the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_GroupingFunc">GroupingFunc</a> and the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_StoreKeyAction">StoreKeyAction</a>.
This also works with ExpandoObjects.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<GroupColumn> GroupColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox/groupcolumn">GroupColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Aggregation_2_GroupingFunc_" data-uid="ETLBox.DataFlow.Aggregation`2.GroupingFunc*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_GroupingFunc" data-uid="ETLBox.DataFlow.Aggregation`2.GroupingFunc">GroupingFunc</h4>
  <div class="markdown level1 summary"><p>This Func defines how the object for grouping data is retrieved.
Not needed if you use the <a class="xref" href="/api/etlbox/groupcolumn">GroupColumn</a> in your object
or pass a list to the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_GroupColumns">GroupColumns</a> property.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, object> GroupingFunc { get; set; }
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
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;TInput, <span class="xref">object</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Aggregation_2_SourceBlock_" data-uid="ETLBox.DataFlow.Aggregation`2.SourceBlock*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_SourceBlock" data-uid="ETLBox.DataFlow.Aggregation`2.SourceBlock">SourceBlock</h4>
  <div class="markdown level1 summary"><p>SourceBlock from the underlying TPL.Dataflow which is used as output buffer for the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override ISourceBlock<TOutput> SourceBlock { get; }
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
        <td><span class="xref">ISourceBlock&lt;&gt;</span>&lt;TOutput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowSource&lt;TOutput&gt;.SourceBlock</span></div>
  <a id="ETLBox_DataFlow_Aggregation_2_StoreKeyAction_" data-uid="ETLBox.DataFlow.Aggregation`2.StoreKeyAction*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_StoreKeyAction" data-uid="ETLBox.DataFlow.Aggregation`2.StoreKeyAction">StoreKeyAction</h4>
  <div class="markdown level1 summary"><p>This action defines how the grouping object is written back into the aggregated object.
Not needed if you use the <a class="xref" href="/api/etlbox/groupcolumn">GroupColumn</a> in your object
or pass a list to the <a class="xref" href="/api/etlbox.dataflow/aggregation-2#ETLBox_DataFlow_Aggregation_2_GroupColumns">GroupColumns</a> property.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<object, TOutput> StoreKeyAction { get; set; }
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
        <td><span class="xref">System.Action&lt;T1, T2&gt;</span>&lt;<span class="xref">object</span>, TOutput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Aggregation_2_TargetBlock_" data-uid="ETLBox.DataFlow.Aggregation`2.TargetBlock*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_TargetBlock" data-uid="ETLBox.DataFlow.Aggregation`2.TargetBlock">TargetBlock</h4>
  <div class="markdown level1 summary"><p>TargetBlock from the underlying TPL.Dataflow which is used as input buffer for the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override ITargetBlock<TInput> TargetBlock { get; }
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
        <td><span class="xref">ITargetBlock&lt;&gt;</span>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowTransformation&lt;TInput, TOutput&gt;.TargetBlock</span></div>
  <a id="ETLBox_DataFlow_Aggregation_2_TaskName_" data-uid="ETLBox.DataFlow.Aggregation`2.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_TaskName" data-uid="ETLBox.DataFlow.Aggregation`2.TaskName">TaskName</h4>
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
  <a id="ETLBox_DataFlow_Aggregation_2_CheckParameter_" data-uid="ETLBox.DataFlow.Aggregation`2.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_CheckParameter" data-uid="ETLBox.DataFlow.Aggregation`2.CheckParameter">CheckParameter()</h4>
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
  <h5 id="ETLBox_DataFlow_Aggregation_2_CheckParameter_examples">Examples</h5>
  <pre><code>public class MyDetailValue
{
    public int DetailValue { get; set; }
}
public class MyAggRow
{
    [AggregateColumn(nameof(MyDetailValue.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }
}
var source = new DbSource&lt;MyDetailValue>(&quot;DetailValues&quot;);
var agg = new Aggregation&lt;MyDetailValue, MyAggRow>();
var dest = new MemoryDestination&lt;MyAggRow>();
source.LinkTo&lt;MyAggRow>(agg).LinkTo(dest);</code></pre>
  <a id="ETLBox_DataFlow_Aggregation_2_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.Aggregation`2.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.Aggregation`2.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
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
  <h5 id="ETLBox_DataFlow_Aggregation_2_CleanUpOnFaulted_System_Exception__examples">Examples</h5>
  <pre><code>public class MyDetailValue
{
    public int DetailValue { get; set; }
}
public class MyAggRow
{
    [AggregateColumn(nameof(MyDetailValue.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }
}
var source = new DbSource&lt;MyDetailValue>(&quot;DetailValues&quot;);
var agg = new Aggregation&lt;MyDetailValue, MyAggRow>();
var dest = new MemoryDestination&lt;MyAggRow>();
source.LinkTo&lt;MyAggRow>(agg).LinkTo(dest);</code></pre>
  <a id="ETLBox_DataFlow_Aggregation_2_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.Aggregation`2.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.Aggregation`2.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
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
  <h5 id="ETLBox_DataFlow_Aggregation_2_CleanUpOnSuccess_examples">Examples</h5>
  <pre><code>public class MyDetailValue
{
    public int DetailValue { get; set; }
}
public class MyAggRow
{
    [AggregateColumn(nameof(MyDetailValue.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }
}
var source = new DbSource&lt;MyDetailValue>(&quot;DetailValues&quot;);
var agg = new Aggregation&lt;MyDetailValue, MyAggRow>();
var dest = new MemoryDestination&lt;MyAggRow>();
source.LinkTo&lt;MyAggRow>(agg).LinkTo(dest);</code></pre>
  <a id="ETLBox_DataFlow_Aggregation_2_InitComponent_" data-uid="ETLBox.DataFlow.Aggregation`2.InitComponent*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_InitComponent" data-uid="ETLBox.DataFlow.Aggregation`2.InitComponent">InitComponent()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitComponent()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitComponent">DataFlowComponent.InitComponent()</a></div>
  <h5 id="ETLBox_DataFlow_Aggregation_2_InitComponent_examples">Examples</h5>
  <pre><code>public class MyDetailValue
{
    public int DetailValue { get; set; }
}
public class MyAggRow
{
    [AggregateColumn(nameof(MyDetailValue.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }
}
var source = new DbSource&lt;MyDetailValue>(&quot;DetailValues&quot;);
var agg = new Aggregation&lt;MyDetailValue, MyAggRow>();
var dest = new MemoryDestination&lt;MyAggRow>();
source.LinkTo&lt;MyAggRow>(agg).LinkTo(dest);</code></pre>
  <a id="ETLBox_DataFlow_Aggregation_2_PrepareParameter_" data-uid="ETLBox.DataFlow.Aggregation`2.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_Aggregation_2_PrepareParameter" data-uid="ETLBox.DataFlow.Aggregation`2.PrepareParameter">PrepareParameter()</h4>
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
  <h5 id="ETLBox_DataFlow_Aggregation_2_PrepareParameter_examples">Examples</h5>
  <pre><code>public class MyDetailValue
{
    public int DetailValue { get; set; }
}
public class MyAggRow
{
    [AggregateColumn(nameof(MyDetailValue.DetailValue), AggregationMethod.Sum)]
    public int AggValue { get; set; }
}
var source = new DbSource&lt;MyDetailValue>(&quot;DetailValues&quot;);
var agg = new Aggregation&lt;MyDetailValue, MyAggRow>();
var dest = new MemoryDestination&lt;MyAggRow>();
source.LinkTo&lt;MyAggRow>(agg).LinkTo(dest);</code></pre>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowtransformation-2">IDataFlowTransformation&lt;TInput, TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination&lt;TInput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>
  </div>

{{< /rawhtml >}}
