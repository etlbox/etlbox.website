---
title: "LookupTransformation<TInput, TSource>"
description: "Details for Class LookupTransformation<TInput, TSource> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10160
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
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_LookupTransformation_2_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class LookupTransformation<TInput, TSource> : DataFlowTransformation<TInput, TInput>, IDataFlowLogging, IDataFlowTransformation<TInput, TInput>, IDataFlowSource<TInput>, IDataFlowSource, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent, ILoggableTask
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
        <td><a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TSource&gt;</td>
        <td><span class="parametername">source</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_Source">Source</a> of the lookup.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2__ctor_" data-uid="ETLBox.DataFlow.LookupTransformation`2.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2__ctor_ETLBox_IDataFlowExecutableSource__1__System_Func__0_ETLBox_DataFlow_CachedData__1___0__" data-uid="ETLBox.DataFlow.LookupTransformation`2.#ctor(ETLBox.IDataFlowExecutableSource{`1},System.Func{`0,ETLBox.DataFlow.CachedData{`1},`0})">LookupTransformation(IDataFlowExecutableSource&lt;TSource&gt;, Func&lt;TInput, CachedData&lt;TSource&gt;, TInput&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LookupTransformation(IDataFlowExecutableSource<TSource> source, Func<TInput, CachedData<TSource>, TInput> applyRetrievedCacheToInput)
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
        <td><a class="xref" href="/api/etlbox/idataflowexecutablesource-1">IDataFlowExecutableSource</a>&lt;TSource&gt;</td>
        <td><span class="parametername">source</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_Source">Source</a> of the lookup.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-3">Func</a>&lt;TInput, <a class="xref" href="/api/etlbox.dataflow/cacheddata-1">CachedData</a>&lt;TSource&gt;, TInput&gt;</td>
        <td><span class="parametername">applyRetrievedCacheToInput</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_ApplyRetrievedCacheToInput">ApplyRetrievedCacheToInput</a> function.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_LookupTransformation_2_ApplyRetrievedCacheForMultipleOutputs_" data-uid="ETLBox.DataFlow.LookupTransformation`2.ApplyRetrievedCacheForMultipleOutputs*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_ApplyRetrievedCacheForMultipleOutputs" data-uid="ETLBox.DataFlow.LookupTransformation`2.ApplyRetrievedCacheForMultipleOutputs">ApplyRetrievedCacheForMultipleOutputs</h4>
  <div class="markdown level1 summary"><p>This function describes how the ingoing data can be enriched with the already pre-read data from
the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_Source">Source</a>, but can return multiple rows for every input row. This is necessary
if <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_PermitMultipleEntriesPerKey">PermitMultipleEntriesPerKey</a> is set to true, which allows the cache lookup to load
multiple rows for every key.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, CachedData<TSource>, TInput[]> ApplyRetrievedCacheForMultipleOutputs { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-3">Func</a>&lt;TInput, <a class="xref" href="/api/etlbox.dataflow/cacheddata-1">CachedData</a>&lt;TSource&gt;, TInput[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_ApplyRetrievedCacheToInput_" data-uid="ETLBox.DataFlow.LookupTransformation`2.ApplyRetrievedCacheToInput*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_ApplyRetrievedCacheToInput" data-uid="ETLBox.DataFlow.LookupTransformation`2.ApplyRetrievedCacheToInput">ApplyRetrievedCacheToInput</h4>
  <div class="markdown level1 summary"><p>This function describes how the ingoing data can be enriched with the already pre-read data from
the <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_Source">Source</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, CachedData<TSource>, TInput> ApplyRetrievedCacheToInput { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-3">Func</a>&lt;TInput, <a class="xref" href="/api/etlbox.dataflow/cacheddata-1">CachedData</a>&lt;TSource&gt;, TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
  <table class="table table-bordered table-condensed">
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_CachedBatchTransformation_" data-uid="ETLBox.DataFlow.LookupTransformation`2.CachedBatchTransformation*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_CachedBatchTransformation" data-uid="ETLBox.DataFlow.LookupTransformation`2.CachedBatchTransformation">CachedBatchTransformation</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CachedBatchTransformation<TInput, TInput, TSource> CachedBatchTransformation { get; }
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
        <td><a class="xref" href="/api/etlbox.dataflow/cachedbatchtransformation-3">CachedBatchTransformation</a>&lt;TInput, TInput, TSource&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_InputKeySelector_" data-uid="ETLBox.DataFlow.LookupTransformation`2.InputKeySelector*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_InputKeySelector" data-uid="ETLBox.DataFlow.LookupTransformation`2.InputKeySelector">InputKeySelector</h4>
  <div class="markdown level1 summary"><p>This function describe how the key is generated for an ingoing row.
If the result of this function match with <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_SourceKeySelector">SourceKeySelector</a>,
both records can be identified as a match.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, object> InputKeySelector { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;TInput, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/matchcolumn">MatchColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_LookupTransformation_2_OnNoMatchFound_" data-uid="ETLBox.DataFlow.LookupTransformation`2.OnNoMatchFound*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_OnNoMatchFound" data-uid="ETLBox.DataFlow.LookupTransformation`2.OnNoMatchFound">OnNoMatchFound</h4>
  <div class="markdown level1 summary"><p>Specifies the function to be invoked when a lookup operation fails to find a matching key in the source.
Will only be invoked if <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_ApplyRetrievedCacheToInput">ApplyRetrievedCacheToInput</a> or <a class="xref" href="/api/etlbox.dataflow/lookuptransformation-2#ETLBox_DataFlow_LookupTransformation_2_ApplyRetrievedCacheForMultipleOutputs">ApplyRetrievedCacheForMultipleOutputs</a> is not set!
This action contains the current input row and the lookup key for which no match was found.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Action<TInput, object> OnNoMatchFound { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-2">Action</a>&lt;TInput, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
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
  <table class="table table-bordered table-condensed">
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_PermitMultipleEntriesPerKey_" data-uid="ETLBox.DataFlow.LookupTransformation`2.PermitMultipleEntriesPerKey*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_PermitMultipleEntriesPerKey" data-uid="ETLBox.DataFlow.LookupTransformation`2.PermitMultipleEntriesPerKey">PermitMultipleEntriesPerKey</h4>
  <div class="markdown level1 summary"><p>If set to true, multiple entries can be loaded into the cache for every key.
Otherwise, only the first occurence will be loaded into the cache.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool PermitMultipleEntriesPerKey { get; set; }
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/retrievecolumn">RetrieveColumn</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
  <table class="table table-bordered table-condensed">
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.dataflow.isourceblock-1">ISourceBlock</a>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_SourceBlock">DataFlowSource&lt;TInput&gt;.SourceBlock</a></div>
  <a id="ETLBox_DataFlow_LookupTransformation_2_SourceKeySelector_" data-uid="ETLBox.DataFlow.LookupTransformation`2.SourceKeySelector*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_SourceKeySelector" data-uid="ETLBox.DataFlow.LookupTransformation`2.SourceKeySelector">SourceKeySelector</h4>
  <div class="markdown level1 summary"><p>This function describe how the key is generated for a row from the lookup source.
This key is used to store the data in the lookup dictionary.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TSource, object> SourceKeySelector { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;TSource, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
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
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.dataflow.itargetblock-1">ITargetBlock</a>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2#ETLBox_DataFlow_DataFlowTransformation_2_TargetBlock">DataFlowTransformation&lt;TInput, TInput&gt;.TargetBlock</a></div>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.exception">Exception</a></td>
        <td><span class="parametername">e</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_CleanUpOnFaulted_System_Exception_">DataFlowComponent.CleanUpOnFaulted(Exception)</a></div>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_LinkErrorTo_" data-uid="ETLBox.DataFlow.LookupTransformation`2.LinkErrorTo*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__" data-uid="ETLBox.DataFlow.LookupTransformation`2.LinkErrorTo(ETLBox.IDataFlowDestination{ETLBox.ETLBoxError})">LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</h4>
  <div class="markdown level1 summary"><p>If an error occurs in the component, by default the component will throw an exception and stop execution.
If you use the error linking, any erroneous records will be caught and redirected.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IDataFlowSource<ETLBoxError> LinkErrorTo(IDataFlowDestination<ETLBoxError> target)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>The target for erroneous rows.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="returns">Returns</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">DataFlowComponent.LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a></div>
  <a id="ETLBox_DataFlow_LookupTransformation_2_PrepareParameterForCheck_" data-uid="ETLBox.DataFlow.LookupTransformation`2.PrepareParameterForCheck*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_PrepareParameterForCheck" data-uid="ETLBox.DataFlow.LookupTransformation`2.PrepareParameterForCheck">PrepareParameterForCheck()</h4>
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
  <a id="ETLBox_DataFlow_LookupTransformation_2_Reset_" data-uid="ETLBox.DataFlow.LookupTransformation`2.Reset*"></a>
  <h4 id="ETLBox_DataFlow_LookupTransformation_2_Reset" data-uid="ETLBox.DataFlow.LookupTransformation`2.Reset">Reset()</h4>
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
