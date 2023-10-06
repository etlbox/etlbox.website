---
title: "LookupTransformation<TInput, TSource>"
description: "Details for Class LookupTransformation<TInput, TSource> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10134
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.LookupTransformation`2">
  <h1 id="ETLBox_DataFlow_LookupTransformation_2" data-uid="ETLBox.DataFlow.LookupTransformation`2" class="text-break">Class LookupTransformation&lt;TInput, TSource&gt;
</h1>
  <div class="markdown level0 summary"><p>The lookup transformation enriches the incoming data with data from the lookup source.
Data from the lookup source is read into memory when the first record arrives.
For each incoming row, the lookup tries to find a matching record in the
loaded source data and uses this record to enrich the ingoing data.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TInput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;TInput, TInput&gt;</div>
    <div class="level5"><span class="xref">LookupTransformation&lt;TInput, TSource&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow/lookuptransformation">LookupTransformation</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idataflowlogging">IDataFlowLogging</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowtransformation-2">IDataFlowTransformation</a>&lt;TInput, TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowsource">IDataFlowSource</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</div>
    <div><a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a></div>
    <div><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></div>
    <div><a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2#ETLBox_DataFlow_DataFlowTransformation_2_TargetBlock">DataFlowTransformation&lt;TInput, TInput&gt;.TargetBlock</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class LookupTransformation<TInput, TSource> : DataFlowTransformation<TInput, TInput>, IDataFlowLogging, IDataFlowTransformation<TInput, TInput>, IDataFlowSource<TInput>, IDataFlowSource, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent, ILoggableTask
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
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_examples"><strong>Examples</strong></h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2__ctor_" data-uid="ETLBox.DataFlow.LookupTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2__ctor" data-uid="ETLBox.DataFlow.LookupTransformation`2.#ctor">LookupTransformation()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_LookupTransformation_2__ctor_examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2__ctor_" data-uid="ETLBox.DataFlow.LookupTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2__ctor_ETLBox_IDataFlowExecutableSource__1__System_Func__0_System_Collections_Generic_IEnumerable__1___0__" data-uid="ETLBox.DataFlow.LookupTransformation`2.#ctor(ETLBox.IDataFlowExecutableSource{`1},System.Func{`0,System.Collections.Generic.IEnumerable{`1},`0})">LookupTransformation(IDataFlowExecutableSource&lt;TSource&gt;, Func&lt;TInput, IEnumerable&lt;TSource&gt;, TInput&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation(IDataFlowExecutableSource<TSource> source, Func<TInput, IEnumerable<TSource>, TInput> retrievalFunc)
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
        <td><a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TSource&gt;</td>
        <td><span class="parametername">source</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_Source">Source</a> of the lookup.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Func&lt;T1, T2, TResult&gt;</span>&lt;TInput, <span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;TSource&gt;, TInput&gt;</td>
        <td><span class="parametername">retrievalFunc</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_RetrievalFunc">RetrievalFunc</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2__ctor_" data-uid="ETLBox.DataFlow.LookupTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2__ctor_ETLBox_IDataFlowExecutableSource__1__" data-uid="ETLBox.DataFlow.LookupTransformation`2.#ctor(ETLBox.IDataFlowExecutableSource{`1})">LookupTransformation(IDataFlowExecutableSource&lt;TSource&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TSource&gt;</td>
        <td><span class="parametername">source</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_Source">Source</a> of the lookup.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_LookupTransformation_2_AllowMultipleRows_" data-uid="ETLBox.DataFlow.LookupTransformation`2.AllowMultipleRows*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_AllowMultipleRows" data-uid="ETLBox.DataFlow.LookupTransformation`2.AllowMultipleRows">AllowMultipleRows</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool AllowMultipleRows { get; set; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_AllowMultipleRows_examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_CacheMode_" data-uid="ETLBox.DataFlow.LookupTransformation`2.CacheMode*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_CacheMode" data-uid="ETLBox.DataFlow.LookupTransformation`2.CacheMode">CacheMode</h4>
  <div class="markdown level1 summary"><p>The cache mode used for loading data into the lookup cache.
By default, all data is loaded into memory from the lookup source when the first
records arrives at the lookup.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><a class="xref" href="/api/etlbox/cachemode">CacheMode</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_GetInputRecordKeyFunc_" data-uid="ETLBox.DataFlow.LookupTransformation`2.GetInputRecordKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_GetInputRecordKeyFunc" data-uid="ETLBox.DataFlow.LookupTransformation`2.GetInputRecordKeyFunc">GetInputRecordKeyFunc</h4>
  <div class="markdown level1 summary"><p>This function describe how the key is generated for an ingoing row.
If the result of this function match with <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_GetSourceRecordKeyFunc">GetSourceRecordKeyFunc</a>,
both records can be identified as a match.
This function is only need when <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_CacheMode">CacheMode</a> is set to <a class="xref" href="/api/etlbox/cachemode#ETLBox_CacheMode_Partial">Partial</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;TInput, <span class="xref">object</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_GetSourceRecordKeyFunc_" data-uid="ETLBox.DataFlow.LookupTransformation`2.GetSourceRecordKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_GetSourceRecordKeyFunc" data-uid="ETLBox.DataFlow.LookupTransformation`2.GetSourceRecordKeyFunc">GetSourceRecordKeyFunc</h4>
  <div class="markdown level1 summary"><p>This function describe how the key is generated for a row from the lookup source.
This key is used to store the data in the lookup dictionary.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;TSource, <span class="xref">object</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_MatchColumns_" data-uid="ETLBox.DataFlow.LookupTransformation`2.MatchColumns*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_MatchColumns" data-uid="ETLBox.DataFlow.LookupTransformation`2.MatchColumns">MatchColumns</h4>
  <div class="markdown level1 summary"><p>This collection will be used to define the matching columns - will also work with ExpandoObject.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox/matchcolumn">MatchColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_PartialCacheSettings_" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialCacheSettings*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_PartialCacheSettings" data-uid="ETLBox.DataFlow.LookupTransformation`2.PartialCacheSettings">PartialCacheSettings</h4>
  <div class="markdown level1 summary"><p>Only need if you set the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_CacheMode">CacheMode</a> to PartialDbCache.
This will only work if you use a <a class="xref" href="/api/etlbox.dataflow/dbsource">DbSource</a> as lookup source.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2">LookupTransformation</a>&lt;TInput, TSource&gt;.<a class="xref" href="/api/etlbox.dataflow.lookuptransformation-2/partialdbcachesettings">PartialDbCacheSettings</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_ProgressCount_" data-uid="ETLBox.DataFlow.LookupTransformation`2.ProgressCount*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_ProgressCount" data-uid="ETLBox.DataFlow.LookupTransformation`2.ProgressCount">ProgressCount</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_ProgressCount_examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_RetrievalByKeyFunc_" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrievalByKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_RetrievalByKeyFunc" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrievalByKeyFunc">RetrievalByKeyFunc</h4>
  <div class="markdown level1 summary"><p>The retrieval function that describes how the ingoing data can be enriched with the already pre-read data from</p>
<ul>
<li>this one returns not only a list, but a dictionary that provides faster access to the data. The dictionary
key is created with the GetSourceKeyFunc.
the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_Source">Source</a>.</li>
</ul>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">System.Func&lt;T1, T2, TResult&gt;</span>&lt;TInput, <span class="xref">System.Collections.Generic.IDictionary&lt;TKey, TValue&gt;</span>&lt;<span class="xref">object</span>, TSource&gt;, TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_RetrievalFunc_" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrievalFunc*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_RetrievalFunc" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrievalFunc">RetrievalFunc</h4>
  <div class="markdown level1 summary"><p>The retrieval function that describes how the ingoing data can be enriched with the already pre-read data from
the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_Source">Source</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, IEnumerable<TSource>, TInput> RetrievalFunc { get; set; }
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
        <td><span class="xref">System.Func&lt;T1, T2, TResult&gt;</span>&lt;TInput, <span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;TSource&gt;, TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_RetrieveColumns_" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrieveColumns*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_RetrieveColumns" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrieveColumns">RetrieveColumns</h4>
  <div class="markdown level1 summary"><p>This collection will be used to define the retrieve columns - will also work with ExpandoObject.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox/retrievecolumn">RetrieveColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_RetrieveMultipleRowsByKeyFunc_" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrieveMultipleRowsByKeyFunc*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_RetrieveMultipleRowsByKeyFunc" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrieveMultipleRowsByKeyFunc">RetrieveMultipleRowsByKeyFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, IDictionary<object, IList<TSource>>, TInput[]> RetrieveMultipleRowsByKeyFunc { get; set; }
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
        <td><span class="xref">System.Func&lt;T1, T2, TResult&gt;</span>&lt;TInput, <span class="xref">System.Collections.Generic.IDictionary&lt;TKey, TValue&gt;</span>&lt;<span class="xref">object</span>, <span class="xref">System.Collections.Generic.IList&lt;T&gt;</span>&lt;TSource&gt;&gt;, TInput[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_RetrieveMultipleRowsByKeyFunc_examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_RetrieveMultipleRowsFunc_" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrieveMultipleRowsFunc*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_RetrieveMultipleRowsFunc" data-uid="ETLBox.DataFlow.LookupTransformation`2.RetrieveMultipleRowsFunc">RetrieveMultipleRowsFunc</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, IEnumerable<TSource>, TInput[]> RetrieveMultipleRowsFunc { get; set; }
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
        <td><span class="xref">System.Func&lt;T1, T2, TResult&gt;</span>&lt;TInput, <span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;TSource&gt;, TInput[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_RetrieveMultipleRowsFunc_examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_Source_" data-uid="ETLBox.DataFlow.LookupTransformation`2.Source*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_Source" data-uid="ETLBox.DataFlow.LookupTransformation`2.Source">Source</h4>
  <div class="markdown level1 summary"><p>The source component from which the lookup data is retrieved. E.g. a <a class="xref" href="/api/etlbox.dataflow/dbsource">DbSource</a> or a <a class="xref" href="/api/etlbox.dataflow/memorysource">MemorySource</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TSource&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_SourceBlock_" data-uid="ETLBox.DataFlow.LookupTransformation`2.SourceBlock*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_SourceBlock" data-uid="ETLBox.DataFlow.LookupTransformation`2.SourceBlock">SourceBlock</h4>
  <div class="markdown level1 summary"><p>SourceBlock from the underlying TPL.Dataflow which is used as output buffer for the component.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">ISourceBlock&lt;&gt;</span>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowSource&lt;TInput&gt;.SourceBlock</span></div>
  <a id="ETLBox_DataFlow_LookupTransformation_2_SourceRecords_" data-uid="ETLBox.DataFlow.LookupTransformation`2.SourceRecords*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_SourceRecords" data-uid="ETLBox.DataFlow.LookupTransformation`2.SourceRecords">SourceRecords</h4>
  <div class="markdown level1 summary"><p>Holds the data read from the lookup source. This data is used to find data that is missing in the incoming rows.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IEnumerable<TSource> SourceRecords { get; }
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;TSource&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_SourceRecordsByKey_" data-uid="ETLBox.DataFlow.LookupTransformation`2.SourceRecordsByKey*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_SourceRecordsByKey" data-uid="ETLBox.DataFlow.LookupTransformation`2.SourceRecordsByKey">SourceRecordsByKey</h4>
  <div class="markdown level1 summary"><p>Holds a dictionary containing data from the lookup spurce.
The dictionary key is generated using the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_GetSourceRecordKeyFunc">GetSourceRecordKeyFunc</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><span class="xref">System.Collections.Generic.IDictionary&lt;TKey, TValue&gt;</span>&lt;<span class="xref">object</span>, TSource&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_TargetBlock_" data-uid="ETLBox.DataFlow.LookupTransformation`2.TargetBlock*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_TargetBlock" data-uid="ETLBox.DataFlow.LookupTransformation`2.TargetBlock">TargetBlock</h4>
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
  <div><span class="xref">ETLBox.DataFlow.DataFlowTransformation&lt;TInput, TInput&gt;.TargetBlock</span></div>
  <a id="ETLBox_DataFlow_LookupTransformation_2_TaskName_" data-uid="ETLBox.DataFlow.LookupTransformation`2.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_TaskName" data-uid="ETLBox.DataFlow.LookupTransformation`2.TaskName">TaskName</h4>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_UseExactNumericTypes_" data-uid="ETLBox.DataFlow.LookupTransformation`2.UseExactNumericTypes*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_UseExactNumericTypes" data-uid="ETLBox.DataFlow.LookupTransformation`2.UseExactNumericTypes">UseExactNumericTypes</h4>
  <div class="markdown level1 summary"><p>If set to true, data types are ignored when comparing data to identify matching records.
E.g. property that stores the integer value 7 would match with a string &quot;7&quot;.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool UseExactNumericTypes { get; set; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_LookupTransformation_2_CheckParameter_" data-uid="ETLBox.DataFlow.LookupTransformation`2.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_CheckParameter" data-uid="ETLBox.DataFlow.LookupTransformation`2.CheckParameter">CheckParameter()</h4>
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
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_CheckParameter_examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.LookupTransformation`2.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.LookupTransformation`2.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
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
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_CleanUpOnFaulted_System_Exception__examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.LookupTransformation`2.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.LookupTransformation`2.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
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
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_CleanUpOnSuccess_examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_InitComponent_" data-uid="ETLBox.DataFlow.LookupTransformation`2.InitComponent*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_InitComponent" data-uid="ETLBox.DataFlow.LookupTransformation`2.InitComponent">InitComponent()</h4>
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
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_InitComponent_examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_LinkErrorTo_" data-uid="ETLBox.DataFlow.LookupTransformation`2.LinkErrorTo*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__" data-uid="ETLBox.DataFlow.LookupTransformation`2.LinkErrorTo(ETLBox.IDataFlowDestination{ETLBox.ETLBoxError})">LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;</td>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowSource&lt;TInput&gt;.LinkErrorTo(ETLBox.IDataFlowDestination&lt;ETLBox.ETLBoxError&gt;)</span></div>
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError___examples">Examples</h5>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_PrepareParameter_" data-uid="ETLBox.DataFlow.LookupTransformation`2.PrepareParameter*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_PrepareParameter" data-uid="ETLBox.DataFlow.LookupTransformation`2.PrepareParameter">PrepareParameter()</h4>
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
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_PrepareParameter_examples">Examples</h5>
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
  <h3 id="implements">Implements</h3>
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
  <div>
      <a class="xref" href="/api/etlbox/iloggabletask">ILoggableTask</a>
  </div>

{{< /rawhtml >}}
