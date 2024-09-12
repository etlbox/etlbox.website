---
title: "FilterTransformation<TInput>"
description: "Details for Class FilterTransformation<TInput> (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10155
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.FilterTransformation`1">
  <h1 id="ETLBox_DataFlow_FilterTransformation_1" data-uid="ETLBox.DataFlow.FilterTransformation`1" class="text-break">Class FilterTransformation&lt;TInput&gt;
</h1>
  <div class="markdown level0 summary"><p>The FilterTransformation allows you to filter out rows that evaluate to a given predicate.
By default the filter transformation will filter out null values.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TInput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;TInput, TInput&gt;</div>
    <div class="level5"><span class="xref">FilterTransformation&lt;TInput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow/filtertransformation">FilterTransformation</a></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
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
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_ResetComponent">DataFlowComponent.ResetComponent()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitBufferObjects_System_Nullable_System_Threading_CancellationToken__">DataFlowComponent.InitBufferObjects(CancellationToken?)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_Reset">DataFlowComponent.Reset()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_PrepareParameterForCheck">DataFlowComponent.PrepareParameterForCheck()</a>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_FilterTransformation_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class FilterTransformation<TInput> : DataFlowTransformation<TInput, TInput>, IDataFlowTransformation<TInput, TInput>, IDataFlowSource<TInput>, IDataFlowSource, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent, ILoggableTask
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
        <td><p>The type of ingoing data.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_FilterTransformation_1__ctor_" data-uid="ETLBox.DataFlow.FilterTransformation`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1__ctor" data-uid="ETLBox.DataFlow.FilterTransformation`1.#ctor">FilterTransformation()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public FilterTransformation()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_FilterTransformation_1__ctor_" data-uid="ETLBox.DataFlow.FilterTransformation`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1__ctor_System_Predicate__0__" data-uid="ETLBox.DataFlow.FilterTransformation`1.#ctor(System.Predicate{`0})">FilterTransformation(Predicate&lt;TInput&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public FilterTransformation(Predicate<TInput> filterPredicate)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TInput&gt;</td>
        <td><span class="parametername">filterPredicate</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_FilterTransformation_1_FilterPredicate_" data-uid="ETLBox.DataFlow.FilterTransformation`1.FilterPredicate*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_FilterPredicate" data-uid="ETLBox.DataFlow.FilterTransformation`1.FilterPredicate">FilterPredicate</h4>
  <div class="markdown level1 summary"><p>The filter predicates is true for all rows that should be filtered out. The default value will filter out null values.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Predicate<TInput> FilterPredicate { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_FilterTransformation_1_SourceBlock_" data-uid="ETLBox.DataFlow.FilterTransformation`1.SourceBlock*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_SourceBlock" data-uid="ETLBox.DataFlow.FilterTransformation`1.SourceBlock">SourceBlock</h4>
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
  <a id="ETLBox_DataFlow_FilterTransformation_1_TargetBlock_" data-uid="ETLBox.DataFlow.FilterTransformation`1.TargetBlock*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_TargetBlock" data-uid="ETLBox.DataFlow.FilterTransformation`1.TargetBlock">TargetBlock</h4>
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_FilterTransformation_1_CheckParameter_" data-uid="ETLBox.DataFlow.FilterTransformation`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_CheckParameter" data-uid="ETLBox.DataFlow.FilterTransformation`1.CheckParameter">CheckParameter()</h4>
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
  <a id="ETLBox_DataFlow_FilterTransformation_1_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.FilterTransformation`1.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.FilterTransformation`1.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
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
  <a id="ETLBox_DataFlow_FilterTransformation_1_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.FilterTransformation`1.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.FilterTransformation`1.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
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
  <a id="ETLBox_DataFlow_FilterTransformation_1_InitComponent_" data-uid="ETLBox.DataFlow.FilterTransformation`1.InitComponent*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_InitComponent" data-uid="ETLBox.DataFlow.FilterTransformation`1.InitComponent">InitComponent()</h4>
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
  <a id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_ETLBox_IDataFlowDestination__0__" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo(ETLBox.IDataFlowDestination{`0})">LinkTo(IDataFlowDestination&lt;TInput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination.
Every component should be linked to only one component without predicates
If you want to link multiple targets, either use predicates or a <a class="xref" href="/api/etlbox.dataflow/multicast">Multicast</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IDataFlowSource<TInput> LinkTo(IDataFlowDestination<TInput> target)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TInput&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;)</a></div>
  <a id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo(ETLBox.IDataFlowDestination{`0},System.Predicate{`0})">LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination with a predicate.
Every component can be linked to one or more component. If you link multiple components,
provide a <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate&lt;T&gt;</a> that describe which row is send to which target.
Make sure that all rows will be send to a target - use the <a class="xref" href="/api/etlbox.dataflow/voiddestination">VoidDestination</a>
if you want to discarded rows.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IDataFlowSource<TInput> LinkTo(IDataFlowDestination<TInput> target, Predicate<TInput> rowsToKeep)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TInput&gt;</td>
        <td><span class="parametername">rowsToKeep</span></td>
        <td><p>Only rows that evaluate to true are send to the connected target</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TInput&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a></div>
  <a id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo(ETLBox.IDataFlowDestination{`0},System.Predicate{`0},System.Predicate{`0})">LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination with a predicate for rows that you want to keep
and a second predicate for rows you want to discard.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IDataFlowSource<TInput> LinkTo(IDataFlowDestination<TInput> target, Predicate<TInput> rowsToKeep, Predicate<TInput> rowsIntoVoid)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TInput&gt;</td>
        <td><span class="parametername">rowsToKeep</span></td>
        <td><p>Only rows that evaluate to true are send to the connected target</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TInput&gt;</td>
        <td><span class="parametername">rowsIntoVoid</span></td>
        <td><p>Rows that are evaluate to true will be discarded</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TInput&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a></div>
  <a id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_LinkTo__1_ETLBox_IDataFlowDestination__0__" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo``1(ETLBox.IDataFlowDestination{`0})">LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination.
Every component should be linked to only one component without predicates
If you want to link multiple targets, either use predicates or a <a class="xref" href="/api/etlbox.dataflow/multicast">Multicast</a></p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IDataFlowSource<TConvert> LinkTo<TConvert>(IDataFlowDestination<TInput> target)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TConvert&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="parametername">TConvert</span></td>
        <td><p>Will convert the output type of the linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;)</a></div>
  <a id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo``1(ETLBox.IDataFlowDestination{`0},System.Predicate{`0})">LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination with a predicate.
Every component can be linked to one or more component. If you link multiple components,
provide a <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate&lt;T&gt;</a> that describe which row is send to which target.
Make sure that all rows will be send to a target - use the <a class="xref" href="/api/etlbox.dataflow/voiddestination">VoidDestination</a>
if you want to discarded rows.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IDataFlowSource<TConvert> LinkTo<TConvert>(IDataFlowDestination<TInput> target, Predicate<TInput> rowsToKeep)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TInput&gt;</td>
        <td><span class="parametername">rowsToKeep</span></td>
        <td><p>Predicate - only rows that evaluate to true are send to the connected target</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TConvert&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="parametername">TConvert</span></td>
        <td><p>Will convert the output type of the linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a></div>
  <a id="ETLBox_DataFlow_FilterTransformation_1_LinkTo_" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo*"></a>
  <h4 id="ETLBox_DataFlow_FilterTransformation_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__" data-uid="ETLBox.DataFlow.FilterTransformation`1.LinkTo``1(ETLBox.IDataFlowDestination{`0},System.Predicate{`0},System.Predicate{`0})">LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</h4>
  <div class="markdown level1 summary"><p>Links the current block to another transformation or destination with a predicate for rows that you want to keep
and a second predicate for rows you want to discard.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IDataFlowSource<TConvert> LinkTo<TConvert>(IDataFlowDestination<TInput> target, Predicate<TInput> rowsToKeep, Predicate<TInput> rowsIntoVoid)
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
        <td><a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;TInput&gt;</td>
        <td><span class="parametername">target</span></td>
        <td><p>Transformation or destination that the block is linked to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TInput&gt;</td>
        <td><span class="parametername">rowsToKeep</span></td>
        <td><p>Only rows that evaluate to true are send to the connected target</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.predicate-1">Predicate</a>&lt;TInput&gt;</td>
        <td><span class="parametername">rowsIntoVoid</span></td>
        <td><p>Rows that are evaluate to true will be discarded</p>
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
        <td><a class="xref" href="/api/etlbox/idataflowsource-1">IDataFlowSource</a>&lt;TConvert&gt;</td>
        <td><p>The linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="parametername">TConvert</span></td>
        <td><p>Will convert the output type of the linked component.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1#ETLBox_DataFlow_DataFlowSource_1_LinkTo__1_ETLBox_IDataFlowDestination__0__System_Predicate__0__System_Predicate__0__">DataFlowSource&lt;TInput&gt;.LinkTo&lt;TConvert&gt;(IDataFlowDestination&lt;TInput&gt;, Predicate&lt;TInput&gt;, Predicate&lt;TInput&gt;)</a></div>
  <h3 id="implements">Implements</h3>
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
