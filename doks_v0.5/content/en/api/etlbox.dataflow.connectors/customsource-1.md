---
title: "CustomSource<TOutput>"
description: "Details for Class CustomSource<TOutput> (ETLBox.DataFlow.Connectors)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.connectors"
weight: 10106
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1">
  <h1 id="ETLBox_DataFlow_Connectors_CustomSource_1" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1" class="text-break">Class CustomSource&lt;TOutput&gt;
</h1>
  <div class="markdown level0 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TOutput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowexecutablesource-1">DataFlowExecutableSource</a>&lt;TOutput&gt;</div>
    <div class="level5"><span class="xref">CustomSource&lt;TOutput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.connectors/customsource">CustomSource</a></div>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameter">DataFlowComponent.PrepareParameter()</a>
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
  <h5 id="ETLBox_DataFlow_Connectors_CustomSource_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class CustomSource<TOutput> : DataFlowExecutableSource<TOutput>, ILoggableTask, IDataFlowLogging, IDataFlowExecutableSource<TOutput>, IDataFlowSource<TOutput>, IDataFlowSource, IDataFlowComponent, IDataFlowExecutableSource
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
  <h5 id="ETLBox_DataFlow_Connectors_CustomSource_1_examples"><strong>Examples</strong></h5>
  <pre><code> List&lt;string> Data = new List&lt;string>()
 {
     &quot;Test1&quot;, &quot;Test2&quot;, &quot;Test3&quot;
 };
 var source = new CustomSource&lt;MyRow>();
 source.ReadFunc = progressCount =>
 {
     return new MyRow()
     {
         Id = progressCount + 1,
         Value = Data[progressCount]
     };    
    return result;
 };
source.ReadCompletedFunc =  progressCount => progressCount >= Data.Count;</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1__ctor" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.#ctor">CustomSource()</h4>
  <div class="markdown level1 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CustomSource()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_Connectors_CustomSource_1__ctor_examples">Examples</h5>
  <pre><code> List&lt;string> Data = new List&lt;string>()
 {
     &quot;Test1&quot;, &quot;Test2&quot;, &quot;Test3&quot;
 };
 var source = new CustomSource&lt;MyRow>();
 source.ReadFunc = progressCount =>
 {
     return new MyRow()
     {
         Id = progressCount + 1,
         Value = Data[progressCount]
     };    
    return result;
 };
source.ReadCompletedFunc =  progressCount => progressCount >= Data.Count;</code></pre>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1__ctor_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1__ctor_System_Func_System_Int32__0__System_Predicate_System_Int32__" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.#ctor(System.Func{System.Int32,`0},System.Predicate{System.Int32})">CustomSource(Func&lt;Int32, TOutput&gt;, Predicate&lt;Int32&gt;)</h4>
  <div class="markdown level1 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public CustomSource(Func<int, TOutput> readFunc, Predicate<int> readingCompleted)
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
        <td><span class="xref">System.Func</span>&lt;<span class="xref">System.Int32</span>, TOutput&gt;</td>
        <td><span class="parametername">readFunc</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.connectors/customsource-1#ETLBox_DataFlow_Connectors_CustomSource_1_ReadFunc">ReadFunc</a></p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Predicate</span>&lt;<span class="xref">System.Int32</span>&gt;</td>
        <td><span class="parametername">readingCompleted</span></td>
        <td><p>Sets the <a class="xref" href="/api/etlbox.dataflow.connectors/customsource-1#ETLBox_DataFlow_Connectors_CustomSource_1_ReadingCompleted">ReadingCompleted</a></p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1_ReadFunc_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.ReadFunc*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1_ReadFunc" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.ReadFunc">ReadFunc</h4>
  <div class="markdown level1 summary"><p>The function that returns a data row as output. An integer value with the
current progress count is the input of the function.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<int, TOutput> ReadFunc { get; set; }
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
        <td><span class="xref">System.Func</span>&lt;<span class="xref">System.Int32</span>, TOutput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1_ReadingCompleted_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.ReadingCompleted*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1_ReadingCompleted" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.ReadingCompleted">ReadingCompleted</h4>
  <div class="markdown level1 summary"><p>This predicate returns true when all rows for the flow are successfully returned from the <a class="xref" href="/api/etlbox.dataflow.connectors/customsource-1#ETLBox_DataFlow_Connectors_CustomSource_1_ReadFunc">ReadFunc</a>. An integer value with the
current progress count is the input of the predicate.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Predicate<int> ReadingCompleted { get; set; }
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
        <td><span class="xref">System.Predicate</span>&lt;<span class="xref">System.Int32</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1_TaskName_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1_TaskName" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
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
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1_CheckParameter_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1_CheckParameter" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
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
  <h5 id="ETLBox_DataFlow_Connectors_CustomSource_1_CheckParameter_examples">Examples</h5>
  <pre><code> List&lt;string> Data = new List&lt;string>()
 {
     &quot;Test1&quot;, &quot;Test2&quot;, &quot;Test3&quot;
 };
 var source = new CustomSource&lt;MyRow>();
 source.ReadFunc = progressCount =>
 {
     return new MyRow()
     {
         Id = progressCount + 1,
         Value = Data[progressCount]
     };    
    return result;
 };
source.ReadCompletedFunc =  progressCount => progressCount >= Data.Count;</code></pre>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
  <div class="markdown level1 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
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
  <h5 id="ETLBox_DataFlow_Connectors_CustomSource_1_CleanUpOnFaulted_System_Exception__examples">Examples</h5>
  <pre><code> List&lt;string> Data = new List&lt;string>()
 {
     &quot;Test1&quot;, &quot;Test2&quot;, &quot;Test3&quot;
 };
 var source = new CustomSource&lt;MyRow>();
 source.ReadFunc = progressCount =>
 {
     return new MyRow()
     {
         Id = progressCount + 1,
         Value = Data[progressCount]
     };    
    return result;
 };
source.ReadCompletedFunc =  progressCount => progressCount >= Data.Count;</code></pre>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
  <div class="markdown level1 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
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
  <h5 id="ETLBox_DataFlow_Connectors_CustomSource_1_CleanUpOnSuccess_examples">Examples</h5>
  <pre><code> List&lt;string> Data = new List&lt;string>()
 {
     &quot;Test1&quot;, &quot;Test2&quot;, &quot;Test3&quot;
 };
 var source = new CustomSource&lt;MyRow>();
 source.ReadFunc = progressCount =>
 {
     return new MyRow()
     {
         Id = progressCount + 1,
         Value = Data[progressCount]
     };    
    return result;
 };
source.ReadCompletedFunc =  progressCount => progressCount >= Data.Count;</code></pre>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1_OnExecutionDoAsyncWork_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.OnExecutionDoAsyncWork*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1_OnExecutionDoAsyncWork" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.OnExecutionDoAsyncWork">OnExecutionDoAsyncWork()</h4>
  <div class="markdown level1 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
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
  <h5 id="ETLBox_DataFlow_Connectors_CustomSource_1_OnExecutionDoAsyncWork_examples">Examples</h5>
  <pre><code> List&lt;string> Data = new List&lt;string>()
 {
     &quot;Test1&quot;, &quot;Test2&quot;, &quot;Test3&quot;
 };
 var source = new CustomSource&lt;MyRow>();
 source.ReadFunc = progressCount =>
 {
     return new MyRow()
     {
         Id = progressCount + 1,
         Value = Data[progressCount]
     };    
    return result;
 };
source.ReadCompletedFunc =  progressCount => progressCount >= Data.Count;</code></pre>
  <a id="ETLBox_DataFlow_Connectors_CustomSource_1_OnExecutionDoSynchronousWork_" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.OnExecutionDoSynchronousWork*"></a>
  <h4 id="ETLBox_DataFlow_Connectors_CustomSource_1_OnExecutionDoSynchronousWork" data-uid="ETLBox.DataFlow.Connectors.CustomSource`1.OnExecutionDoSynchronousWork">OnExecutionDoSynchronousWork()</h4>
  <div class="markdown level1 summary"><p>Define your own source block. This block generates data from a your own custom written functions.</p>
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
  <h5 id="ETLBox_DataFlow_Connectors_CustomSource_1_OnExecutionDoSynchronousWork_examples">Examples</h5>
  <pre><code> List&lt;string> Data = new List&lt;string>()
 {
     &quot;Test1&quot;, &quot;Test2&quot;, &quot;Test3&quot;
 };
 var source = new CustomSource&lt;MyRow>();
 source.ReadFunc = progressCount =>
 {
     return new MyRow()
     {
         Id = progressCount + 1,
         Value = Data[progressCount]
     };    
    return result;
 };
source.ReadCompletedFunc =  progressCount => progressCount >= Data.Count;</code></pre>
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
