---
title: "LookupTransformation<TInput, TSource>"
description: "Details for Class LookupTransformation<TInput, TSource> (ETLBox.DataFlow.Transformations)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.transformations"
weight: 10222
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2">
  <h1 id="ETLBox_DataFlow_Transformations_LookupTransformation_2" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2" class="text-break">Class LookupTransformation&lt;TInput, TSource&gt;
  </h1>
  <div class="markdown level0 summary"><p>The lookup transformation enriches the incoming data with data from the lookup source.
Data from the lookup source is read into memory when the first record arrives.
For each incoming row, the lookup tries to find a matching record in the
loaded source data and uses this record to enrich the ingoing data.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TInput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;TInput, TInput&gt;</div>
    <div class="level5"><span class="xref">LookupTransformation&lt;TInput, TSource&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation">LookupTransformation</a></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowtransformation-2">IDataFlowTransformation</a>&lt;TInput, TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox.dataflow/idataflowcomponent">IDataFlowComponent</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2#ETLBox_DataFlow_DataFlowTransformation_2_TargetBlock">DataFlowTransformation&lt;TInput, TInput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_DataFlow_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects">DataFlowComponent.InitBufferObjects()</a>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InternalLinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__">DataFlowComponent.InternalLinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ThrowOrRedirectError_System_Exception_System_String_">DataFlowComponent.ThrowOrRedirectError(Exception, String)</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Transformations</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class LookupTransformation<TInput, TSource> : DataFlowTransformation<TInput, TInput>, ILoggableTask, IDataFlowLogging, IDataFlowTransformation<TInput, TInput>, IDataFlowSource<TInput>, IDataFlowSource, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent
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
        <td><p>Type of ingoing and outgoing data.</p>
</td>
      </tr>
      <tr>
        <td><span class="parametername">TSource</span></td>
        <td><p>Type of data used in the lookup source.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_examples"><strong>Examples</strong></h5>
  <pre><code>public class Order
{    
    public int OrderNumber { get; set; }
    public int CustomerId { get; set; }
    public string CustomerName { get; set; }
}
public class Customer
{
    [RetrieveColumn(nameof(Order.CustomerId))]
    public int Id { get; set; }
    [MatchColumn(nameof(Order.CustomerName))]
    public string Name { get; set; }
}
DbSource&lt;Order> orderSource = new DbSource&lt;Order>(&quot;OrderData&quot;);
CsvSource&lt;Customer> lookupSource = new CsvSource&lt;Customer>(&quot;CustomerData.csv&quot;);
var lookup = new LookupTransformation&lt;Order, Customer>();
lookup.Source = lookupSource;
DbDestination&lt;Order> dest = new DbDestination&lt;Order>(&quot;OrderWithCustomerTable&quot;);
source.LinkTo(lookup).LinkTo(dest);</code></pre>
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2__ctor_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2__ctor" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.#ctor">LookupTransformation()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2__ctor_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2__ctor_ETLBox_DataFlow_IDataFlowExecutableSource__1__" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.#ctor(ETLBox.DataFlow.IDataFlowExecutableSource{`1})">LookupTransformation(IDataFlowExecutableSource&lt;TSource&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation(IDataFlowExecutableSource<TSource> source)
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
        <td><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TSource&gt;</td>
        <td><span class="parametername">source</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_Source">Source</a> of the lookup.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2__ctor_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2__ctor_ETLBox_DataFlow_IDataFlowExecutableSource__1__System_Func__0_System_Collections_Generic_ICollection__1___0__" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.#ctor(ETLBox.DataFlow.IDataFlowExecutableSource{`1},System.Func{`0,System.Collections.Generic.ICollection{`1},`0})">LookupTransformation(IDataFlowExecutableSource&lt;TSource&gt;, Func&lt;TInput, ICollection&lt;TSource&gt;, TInput&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation(IDataFlowExecutableSource<TSource> source, Func<TInput, ICollection<TSource>, TInput> retrievalFunc)
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
        <td><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TSource&gt;</td>
        <td><span class="parametername">source</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_Source">Source</a> of the lookup.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Func</span>&lt;TInput, <span class="xref">System.Collections.Generic.ICollection</span>&lt;TSource&gt;, TInput&gt;</td>
        <td><span class="parametername">retrievalFunc</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrievalFunc">RetrievalFunc</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_CacheMode_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.CacheMode*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_CacheMode" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.CacheMode">CacheMode</h4>
  <div class="markdown level1 summary"><p>The cache mode used for loading data into the lookup cache.
By default, all data is loaded into memory from the lookup source when the first
records arrives at the lookup.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CacheMode CacheMode { get; set; }
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
        <td><a class="xref" href="/api/etlbox.dataflow.transformations/cachemode">CacheMode</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_GetInputRecordKeyFunc_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.GetInputRecordKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_GetInputRecordKeyFunc" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.GetInputRecordKeyFunc">GetInputRecordKeyFunc</h4>
  <div class="markdown level1 summary"><p>This function describe how the key is generated for an ingoing row.
If the result of this function match with <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_GetSourceRecordKeyFunc">GetSourceRecordKeyFunc</a>,
both records can be identified as a match.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, object> GetInputRecordKeyFunc { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;TInput, <span class="xref">System.Object</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_GetSourceRecordKeyFunc_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.GetSourceRecordKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_GetSourceRecordKeyFunc" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.GetSourceRecordKeyFunc">GetSourceRecordKeyFunc</h4>
  <div class="markdown level1 summary"><p>This function describe how the key is generated for a row from the lookup source.
This key is used to store the data in the lookup dictionary.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TSource, object> GetSourceRecordKeyFunc { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;TSource, <span class="xref">System.Object</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_IgnoreDataTypes_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.IgnoreDataTypes*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_IgnoreDataTypes" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.IgnoreDataTypes">IgnoreDataTypes</h4>
  <div class="markdown level1 summary"><p>If set to true, data types are ignored when comparing data to identify matching records.
E.g. property that stores the integer value 7 would match with a string &quot;7&quot;.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IgnoreDataTypes { get; set; }
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_MatchColumns_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.MatchColumns*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_MatchColumns" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.MatchColumns">MatchColumns</h4>
  <div class="markdown level1 summary"><p>This collection will be used to define the matching columns - will also work with ExpandoObject.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<MatchColumn> MatchColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow/matchcolumn">MatchColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_PartialCacheSettings_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.PartialCacheSettings*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_PartialCacheSettings" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.PartialCacheSettings">PartialCacheSettings</h4>
  <div class="markdown level1 summary"><p>Only need if you set the <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_CacheMode">CacheMode</a> to PartialDbCache.
This will only work if you use a <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource">DbSource</a> as lookup source.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation<TInput, TSource>.PartialDbCacheSettings PartialCacheSettings { get; set; }
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
        <td><a class="xref" href="ETLBox.DataFlow.Transformations.LookupTransformation-2.PartialDbCacheSettings.html">LookupTransformation.PartialDbCacheSettings</a>&lt;&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_ProgressCount_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.ProgressCount*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_ProgressCount" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.ProgressCount">ProgressCount</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ProgressCount { get; }
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
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrievalByKeyFunc_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.RetrievalByKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrievalByKeyFunc" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.RetrievalByKeyFunc">RetrievalByKeyFunc</h4>
  <div class="markdown level1 summary"><p>The retrieval function that describes how the ingoing data can be enriched with the already pre-read data from</p>
<ul>
<li>this one returns not only a list, but a dictionary that provides faster access to the data. The dictionary
key is created with the GetSourceKeyFunc.
the <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_Source">Source</a>.</li>
</ul>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, IDictionary<object, TSource>, TInput> RetrievalByKeyFunc { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;TInput, <span class="xref">System.Collections.Generic.IDictionary</span>&lt;<span class="xref">System.Object</span>, TSource&gt;, TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrievalFunc_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.RetrievalFunc*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrievalFunc" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.RetrievalFunc">RetrievalFunc</h4>
  <div class="markdown level1 summary"><p>The retrieval function that describes how the ingoing data can be enriched with the already pre-read data from
the <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_Source">Source</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, ICollection<TSource>, TInput> RetrievalFunc { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;TInput, <span class="xref">System.Collections.Generic.ICollection</span>&lt;TSource&gt;, TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrieveColumns_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.RetrieveColumns*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_RetrieveColumns" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.RetrieveColumns">RetrieveColumns</h4>
  <div class="markdown level1 summary"><p>This collection will be used to define the retrieve columns - will also work with ExpandoObject.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<RetrieveColumn> RetrieveColumns { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.dataflow/retrievecolumn">RetrieveColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_Source_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.Source*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_Source" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.Source">Source</h4>
  <div class="markdown level1 summary"><p>The source component from which the lookup data is retrieved. E.g. a <a class="xref" href="/api/etlbox.dataflow.connectors/dbsource">DbSource</a> or a <a class="xref" href="/api/etlbox.dataflow.connectors/memorysource">MemorySource</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IDataFlowExecutableSource<TSource> Source { get; set; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TSource&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceBlock_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.SourceBlock*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceBlock" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.SourceBlock">SourceBlock</h4>
  <div class="markdown level1 summary"><p>SourceBlock from the underlying TPL.Dataflow which is used as output buffer for the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override ISourceBlock<TInput> SourceBlock { get; }
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
        <td><span class="xref">System.Threading.Tasks.Dataflow.ISourceBlock</span>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowSource&lt;TInput&gt;.SourceBlock</span></div>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceRecords_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.SourceRecords*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceRecords" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.SourceRecords">SourceRecords</h4>
  <div class="markdown level1 summary"><p>Holds the data read from the lookup source. This data is used to find data that is missing in the incoming rows.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<TSource> SourceRecords { get; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;TSource&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceRecordsByKey_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.SourceRecordsByKey*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_SourceRecordsByKey" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.SourceRecordsByKey">SourceRecordsByKey</h4>
  <div class="markdown level1 summary"><p>Holds a dictionary containing data from the lookup spurce.
The dictionary key is generated using the <a class="xref" href="/api/etlbox.dataflow.transformations/lookuptransformation-2#ETLBox_DataFlow_Transformations_LookupTransformation_2_GetSourceRecordKeyFunc">GetSourceRecordKeyFunc</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IDictionary<object, TSource> SourceRecordsByKey { get; }
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
        <td><span class="xref">System.Collections.Generic.IDictionary</span>&lt;<span class="xref">System.Object</span>, TSource&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_TargetBlock_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.TargetBlock*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_TargetBlock" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.TargetBlock">TargetBlock</h4>
  <div class="markdown level1 summary"><p>TargetBlock from the underlying TPL.Dataflow which is used as input buffer for the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
        <td><span class="xref">System.Threading.Tasks.Dataflow.ITargetBlock</span>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowTransformation&lt;TInput, TInput&gt;.TargetBlock</span></div>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_TaskName_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_TaskName" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.TaskName">TaskName</h4>
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
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_CheckParameter_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_CheckParameter" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CheckParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CheckParameter">DataFlowComponent.CheckParameter()</a></div>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
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
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void CleanUpOnSuccess()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnSuccess">DataFlowComponent.CleanUpOnSuccess()</a></div>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_InitComponent_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.InitComponent*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_InitComponent" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.InitComponent">InitComponent()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitComponent()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitComponent">DataFlowComponent.InitComponent()</a></div>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_LinkErrorTo_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.LinkErrorTo*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.LinkErrorTo(ETLBox.DataFlow.IDataFlowDestination{ETLBox.DataFlow.ETLBoxError})">LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IDataFlowSource<ETLBoxError> LinkErrorTo(IDataFlowDestination<ETLBoxError> target)
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
        <td><a class="xref" href="/api/etlbox.dataflow/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="/api/etlbox.dataflow/etlboxerror">ETLBoxError</a>&gt;</td>
        <td><span class="parametername">target</span></td>
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
        <td><a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource</a>&lt;<a class="xref" href="/api/etlbox.dataflow/etlboxerror">ETLBoxError</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowSource&lt;TInput&gt;.LinkErrorTo(ETLBox.DataFlow.IDataFlowDestination&lt;ETLBox.DataFlow.ETLBoxError&gt;)</span></div>
  <a id="ETLBox_DataFlow_Transformations_LookupTransformation_2_PrepareParameter_" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_LookupTransformation_2_PrepareParameter" data-uid="ETLBox.DataFlow.Transformations.LookupTransformation`2.PrepareParameter">PrepareParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void PrepareParameter()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameter">DataFlowComponent.PrepareParameter()</a></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/iloggabletask">ILoggableTask</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowlogging">IDataFlowLogging</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowtransformation-2">IDataFlowTransformation&lt;TInput, TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource-1">IDataFlowSource&lt;TOutput&gt;</a>
  </div>
  <div>
      <a class="xref" href="/api/etlbox.dataflow/idataflowsource">IDataFlowSource</a>
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

{{< /rawhtml >}}
