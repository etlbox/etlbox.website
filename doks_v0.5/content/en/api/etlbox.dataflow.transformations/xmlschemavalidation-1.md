---
title: "XmlSchemaValidation<TInput>"
description: "Details for Class XmlSchemaValidation<TInput> (ETLBox.DataFlow.Transformations)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow.transformations"
weight: 10251
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1">
  <h1 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1" class="text-break">Class XmlSchemaValidation&lt;TInput&gt;
</h1>
  <div class="markdown level0 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.controlflow/loggabletask">LoggableTask</a></div>
    <div class="level2"><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a></div>
    <div class="level3"><a class="xref" href="/api/etlbox.dataflow/dataflowsource-1">DataFlowSource</a>&lt;TInput&gt;</div>
    <div class="level4"><a class="xref" href="/api/etlbox.dataflow/dataflowtransformation-2">DataFlowTransformation</a>&lt;TInput, TInput&gt;</div>
    <div class="level5"><span class="xref">XmlSchemaValidation&lt;TInput&gt;</span></div>
      <div class="level6"><a class="xref" href="/api/etlbox.dataflow.transformations/xmlschemavalidation">XmlSchemaValidation</a></div>
  </div>
  <div class="implements">
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow.Transformations</h6>
  <h6><strong>Assembly</strong>: ETLBox.Xml.dll</h6>
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class XmlSchemaValidation<TInput> : DataFlowTransformation<TInput, TInput>, ILoggableTask, IDataFlowLogging, IDataFlowTransformation<TInput, TInput>, IDataFlowSource<TInput>, IDataFlowSource, IDataFlowDestination<TInput>, IDataFlowDestination, IDataFlowComponent
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
        <td><p>Type of input data.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_examples"><strong>Examples</strong></h5>
  <pre><code>   XmlSchemaValidation&lt;MyXmlRow> schemaValidation = new XmlSchemaValidation&lt;MyXmlRow>();
   schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1__ctor_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1__ctor" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.#ctor">XmlSchemaValidation()</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public XmlSchemaValidation()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1__ctor_examples">Examples</h5>
  <pre><code>   XmlSchemaValidation&lt;MyXmlRow> schemaValidation = new XmlSchemaValidation&lt;MyXmlRow>();
   schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);</code></pre>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1__ctor_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1__ctor_System_String_System_Func__0_System_String__" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.#ctor(System.String,System.Func{`0,System.String})">XmlSchemaValidation(String, Func&lt;TInput, String&gt;)</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public XmlSchemaValidation(string xmlSchema, Func<TInput, string> xmlSelector)
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
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">xmlSchema</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Func</span>&lt;TInput, <span class="xref">System.String</span>&gt;</td>
        <td><span class="parametername">xmlSelector</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1__ctor_System_String_System_Func__0_System_String___examples">Examples</h5>
  <pre><code>   XmlSchemaValidation&lt;MyXmlRow> schemaValidation = new XmlSchemaValidation&lt;MyXmlRow>();
   schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_SourceBlock_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.SourceBlock*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_SourceBlock" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.SourceBlock">SourceBlock</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
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
        <td><span class="xref">System.Threading.Tasks.Dataflow.ISourceBlock</span>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowSource&lt;TInput&gt;.SourceBlock</span></div>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_TargetBlock_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.TargetBlock*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_TargetBlock" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.TargetBlock">TargetBlock</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
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
        <td><span class="xref">System.Threading.Tasks.Dataflow.ITargetBlock</span>&lt;TInput&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DataFlow.DataFlowTransformation&lt;TInput, TInput&gt;.TargetBlock</span></div>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_TaskName_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.TaskName*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_TaskName" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.TaskName">TaskName</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
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
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_XmlSchema_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.XmlSchema*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_XmlSchema" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.XmlSchema">XmlSchema</h4>
  <div class="markdown level1 summary"><p>The xml schema that is used for verfication</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string XmlSchema { get; set; }
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
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_XmlSelector_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.XmlSelector*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_XmlSelector" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.XmlSelector">XmlSelector</h4>
  <div class="markdown level1 summary"><p>The selector on the object that returns the xml that needs to be verified</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<TInput, string> XmlSelector { get; set; }
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CheckParameter_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.CheckParameter*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CheckParameter" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.CheckParameter">CheckParameter()</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
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
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CheckParameter_examples">Examples</h5>
  <pre><code>   XmlSchemaValidation&lt;MyXmlRow> schemaValidation = new XmlSchemaValidation&lt;MyXmlRow>();
   schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);</code></pre>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CleanUpOnFaulted_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.CleanUpOnFaulted*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CleanUpOnFaulted_System_Exception_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.CleanUpOnFaulted(System.Exception)">CleanUpOnFaulted(Exception)</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
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
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CleanUpOnFaulted_System_Exception__examples">Examples</h5>
  <pre><code>   XmlSchemaValidation&lt;MyXmlRow> schemaValidation = new XmlSchemaValidation&lt;MyXmlRow>();
   schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);</code></pre>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CleanUpOnSuccess_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.CleanUpOnSuccess*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CleanUpOnSuccess" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.CleanUpOnSuccess">CleanUpOnSuccess()</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
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
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_CleanUpOnSuccess_examples">Examples</h5>
  <pre><code>   XmlSchemaValidation&lt;MyXmlRow> schemaValidation = new XmlSchemaValidation&lt;MyXmlRow>();
   schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);</code></pre>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_InitComponent_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.InitComponent*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_InitComponent" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.InitComponent">InitComponent()</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override void InitComponent()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent#ETLBox_DataFlow_DataFlowComponent_InitComponent">DataFlowComponent.InitComponent()</a></div>
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_InitComponent_examples">Examples</h5>
  <pre><code>   XmlSchemaValidation&lt;MyXmlRow> schemaValidation = new XmlSchemaValidation&lt;MyXmlRow>();
   schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);</code></pre>
  <a id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_LinkErrorTo_" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.LinkErrorTo*"></a>
  <h4 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError__" data-uid="ETLBox.DataFlow.Transformations.XmlSchemaValidation`1.LinkErrorTo(ETLBox.DataFlow.IDataFlowDestination{ETLBox.DataFlow.ETLBoxError})">LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</h4>
  <div class="markdown level1 summary"><p>Validate XML code in your incoming data against a XML schema definition.
You need to define how the XML string can be read from your data row and the schema definition.
Rows with a schema that is not valid are send to the error output..</p>
</div>
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
  <h5 id="ETLBox_DataFlow_Transformations_XmlSchemaValidation_1_LinkErrorTo_ETLBox_DataFlow_IDataFlowDestination_ETLBox_DataFlow_ETLBoxError___examples">Examples</h5>
  <pre><code>   XmlSchemaValidation&lt;MyXmlRow> schemaValidation = new XmlSchemaValidation&lt;MyXmlRow>();
   schemaValidation.XmlSelector = row => row.Xml;
schemaValidation.XmlSchema = xsdMarkup;
source.LinkTo(schemaValidation);
schemaValidation.LinkTo(dest);
schemaValidation.LinkErrorTo(error);</code></pre>
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
