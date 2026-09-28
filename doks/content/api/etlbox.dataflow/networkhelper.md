---
title: "NetworkHelper"
description: "Details for Class NetworkHelper (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10191
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.NetworkHelper">
  <h1 id="ETLBox_DataFlow_NetworkHelper" data-uid="ETLBox.DataFlow.NetworkHelper" class="text-break">Class NetworkHelper</h1>
  <div class="markdown level0 summary"><p>Replaces sources, destinations and error destinations in an already linked network
with real test components such as <a class="xref" href="/api/etlbox.dataflow/memorysource-1">MemorySource&lt;TOutput&gt;</a>, <a class="xref" href="/api/etlbox.dataflow/memorydestination-1">MemoryDestination&lt;TInput&gt;</a>,
<a class="xref" href="/api/etlbox.dataflow/customsource-1">CustomSource&lt;TOutput&gt;</a> or <a class="xref" href="/api/etlbox.dataflow/customdestination-1">CustomDestination&lt;TInput&gt;</a>.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">NetworkHelper</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  <h5 id="ETLBox_DataFlow_NetworkHelper_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class NetworkHelper
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_NetworkHelper_remarks"><strong>Remarks</strong></h5>
  <div class="markdown level0 remarks"><p>The caller selects the node.
A replacement must be a real <a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>.</p>
</div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_NetworkHelper_GetDestinations_" data-uid="ETLBox.DataFlow.NetworkHelper.GetDestinations*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_GetDestinations_ETLBox_IDataFlowComponent_" data-uid="ETLBox.DataFlow.NetworkHelper.GetDestinations(ETLBox.IDataFlowComponent)">GetDestinations(IDataFlowComponent)</h4>
  <div class="markdown level1 summary"><p>Destinations in the main flow. Auto-generated void destinations and error destinations are excluded.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IReadOnlyList<IDataFlowDestination> GetDestinations(IDataFlowComponent startNode)
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1">IReadOnlyList</a>&lt;<a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkHelper_GetErrorDestinations_" data-uid="ETLBox.DataFlow.NetworkHelper.GetErrorDestinations*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_GetErrorDestinations_ETLBox_IDataFlowComponent_" data-uid="ETLBox.DataFlow.NetworkHelper.GetErrorDestinations(ETLBox.IDataFlowComponent)">GetErrorDestinations(IDataFlowComponent)</h4>
  <div class="markdown level1 summary"><p>Destinations linked through <a class="xref" href="/api/etlbox/idataflowcomponent#ETLBox_IDataFlowComponent_LinkErrorTo_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__">LinkErrorTo(IDataFlowDestination&lt;ETLBoxError&gt;)</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IReadOnlyList<IDataFlowDestination<ETLBoxError>> GetErrorDestinations(IDataFlowComponent startNode)
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1">IReadOnlyList</a>&lt;<a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkHelper_GetSources_" data-uid="ETLBox.DataFlow.NetworkHelper.GetSources*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_GetSources_ETLBox_IDataFlowComponent_" data-uid="ETLBox.DataFlow.NetworkHelper.GetSources(ETLBox.IDataFlowComponent)">GetSources(IDataFlowComponent)</h4>
  <div class="markdown level1 summary"><p>Executable sources in the network. <a class="xref" href="/api/etlbox.dataflow/errorsource">ErrorSource</a> is excluded.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static IReadOnlyList<IDataFlowExecutableSource> GetSources(IDataFlowComponent startNode)
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1">IReadOnlyList</a>&lt;<a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkHelper_ReplaceDestination_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceDestination*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_ReplaceDestination__1_ETLBox_IDataFlowComponent_System_Func_ETLBox_IDataFlowDestination_System_Boolean____0_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceDestination``1(ETLBox.IDataFlowComponent,System.Func{ETLBox.IDataFlowDestination,System.Boolean},``0)">ReplaceDestination&lt;TReplacement&gt;(IDataFlowComponent, Func&lt;IDataFlowDestination, bool&gt;, TReplacement)</h4>
  <div class="markdown level1 summary"><p>Replaces the single main-flow destination for which <code class="paramref">match</code> returns true.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TReplacement ReplaceDestination<TReplacement>(IDataFlowComponent startNode, Func<IDataFlowDestination, bool> match, TReplacement replacement) where TReplacement : DataFlowComponent, IDataFlowDestination
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>&gt;</td>
        <td><span class="parametername">match</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">TReplacement</span></td>
        <td><span class="parametername">replacement</span></td>
        <td></td>
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
        <td><span class="xref">TReplacement</span></td>
        <td></td>
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
        <td><span class="parametername">TReplacement</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkHelper_ReplaceDestination_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceDestination*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_ReplaceDestination__1_ETLBox_IDataFlowComponent_System_Func_System_Collections_Generic_IReadOnlyList_ETLBox_IDataFlowDestination__ETLBox_IDataFlowDestination____0_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceDestination``1(ETLBox.IDataFlowComponent,System.Func{System.Collections.Generic.IReadOnlyList{ETLBox.IDataFlowDestination},ETLBox.IDataFlowDestination},``0)">ReplaceDestination&lt;TReplacement&gt;(IDataFlowComponent, Func&lt;IReadOnlyList&lt;IDataFlowDestination&gt;, IDataFlowDestination&gt;, TReplacement)</h4>
  <div class="markdown level1 summary"><p>Replaces one destination in the main flow. The selector must return one of the offered destinations.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TReplacement ReplaceDestination<TReplacement>(IDataFlowComponent startNode, Func<IReadOnlyList<IDataFlowDestination>, IDataFlowDestination> select, TReplacement replacement) where TReplacement : DataFlowComponent, IDataFlowDestination
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1">IReadOnlyList</a>&lt;<a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>&gt;, <a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>&gt;</td>
        <td><span class="parametername">select</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">TReplacement</span></td>
        <td><span class="parametername">replacement</span></td>
        <td></td>
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
        <td><span class="xref">TReplacement</span></td>
        <td></td>
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
        <td><span class="parametername">TReplacement</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkHelper_ReplaceErrorDestination_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceErrorDestination*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_ReplaceErrorDestination__1_ETLBox_IDataFlowComponent_System_Func_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError__System_Boolean____0_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceErrorDestination``1(ETLBox.IDataFlowComponent,System.Func{ETLBox.IDataFlowDestination{ETLBox.ETLBoxError},System.Boolean},``0)">ReplaceErrorDestination&lt;TReplacement&gt;(IDataFlowComponent, Func&lt;IDataFlowDestination&lt;ETLBoxError&gt;, bool&gt;, TReplacement)</h4>
  <div class="markdown level1 summary"><p>Replaces the single error destination for which <code class="paramref">match</code> returns true.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TReplacement ReplaceErrorDestination<TReplacement>(IDataFlowComponent startNode, Func<IDataFlowDestination<ETLBoxError>, bool> match, TReplacement replacement) where TReplacement : DataFlowComponent, IDataFlowDestination<ETLBoxError>
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>&gt;</td>
        <td><span class="parametername">match</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">TReplacement</span></td>
        <td><span class="parametername">replacement</span></td>
        <td></td>
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
        <td><span class="xref">TReplacement</span></td>
        <td></td>
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
        <td><span class="parametername">TReplacement</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkHelper_ReplaceErrorDestination_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceErrorDestination*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_ReplaceErrorDestination__1_ETLBox_IDataFlowComponent_System_Func_System_Collections_Generic_IReadOnlyList_ETLBox_IDataFlowDestination_ETLBox_ETLBoxError___ETLBox_IDataFlowDestination_ETLBox_ETLBoxError_____0_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceErrorDestination``1(ETLBox.IDataFlowComponent,System.Func{System.Collections.Generic.IReadOnlyList{ETLBox.IDataFlowDestination{ETLBox.ETLBoxError}},ETLBox.IDataFlowDestination{ETLBox.ETLBoxError}},``0)">ReplaceErrorDestination&lt;TReplacement&gt;(IDataFlowComponent, Func&lt;IReadOnlyList&lt;IDataFlowDestination&lt;ETLBoxError&gt;&gt;, IDataFlowDestination&lt;ETLBoxError&gt;&gt;, TReplacement)</h4>
  <div class="markdown level1 summary"><p>Replaces one error destination. The selector must return one of the offered error destinations.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TReplacement ReplaceErrorDestination<TReplacement>(IDataFlowComponent startNode, Func<IReadOnlyList<IDataFlowDestination<ETLBoxError>>, IDataFlowDestination<ETLBoxError>> select, TReplacement replacement) where TReplacement : DataFlowComponent, IDataFlowDestination<ETLBoxError>
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1">IReadOnlyList</a>&lt;<a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;&gt;, <a class="xref" href="/api/etlbox/idataflowdestination-1">IDataFlowDestination</a>&lt;<a class="xref" href="/api/etlbox/etlboxerror">ETLBoxError</a>&gt;&gt;</td>
        <td><span class="parametername">select</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">TReplacement</span></td>
        <td><span class="parametername">replacement</span></td>
        <td></td>
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
        <td><span class="xref">TReplacement</span></td>
        <td></td>
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
        <td><span class="parametername">TReplacement</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkHelper_ReplaceSource_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceSource*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_ReplaceSource__1_ETLBox_IDataFlowComponent_System_Func_ETLBox_IDataFlowExecutableSource_System_Boolean____0_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceSource``1(ETLBox.IDataFlowComponent,System.Func{ETLBox.IDataFlowExecutableSource,System.Boolean},``0)">ReplaceSource&lt;TReplacement&gt;(IDataFlowComponent, Func&lt;IDataFlowExecutableSource, bool&gt;, TReplacement)</h4>
  <div class="markdown level1 summary"><p>Replaces the single source for which <code class="paramref">match</code> returns true.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TReplacement ReplaceSource<TReplacement>(IDataFlowComponent startNode, Func<IDataFlowExecutableSource, bool> match, TReplacement replacement) where TReplacement : DataFlowComponent, IDataFlowSource
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>&gt;</td>
        <td><span class="parametername">match</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">TReplacement</span></td>
        <td><span class="parametername">replacement</span></td>
        <td></td>
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
        <td><span class="xref">TReplacement</span></td>
        <td></td>
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
        <td><span class="parametername">TReplacement</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_NetworkHelper_ReplaceSource_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceSource*"></a>
  <h4 id="ETLBox_DataFlow_NetworkHelper_ReplaceSource__1_ETLBox_IDataFlowComponent_System_Func_System_Collections_Generic_IReadOnlyList_ETLBox_IDataFlowExecutableSource__ETLBox_IDataFlowExecutableSource____0_" data-uid="ETLBox.DataFlow.NetworkHelper.ReplaceSource``1(ETLBox.IDataFlowComponent,System.Func{System.Collections.Generic.IReadOnlyList{ETLBox.IDataFlowExecutableSource},ETLBox.IDataFlowExecutableSource},``0)">ReplaceSource&lt;TReplacement&gt;(IDataFlowComponent, Func&lt;IReadOnlyList&lt;IDataFlowExecutableSource&gt;, IDataFlowExecutableSource&gt;, TReplacement)</h4>
  <div class="markdown level1 summary"><p>Replaces the source selected by <code class="paramref">select</code>.
The selector receives every source and must return exactly one of them.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static TReplacement ReplaceSource<TReplacement>(IDataFlowComponent startNode, Func<IReadOnlyList<IDataFlowExecutableSource>, IDataFlowExecutableSource> select, TReplacement replacement) where TReplacement : DataFlowComponent, IDataFlowSource
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a></td>
        <td><span class="parametername">startNode</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1">IReadOnlyList</a>&lt;<a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a>&gt;, <a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a>&gt;</td>
        <td><span class="parametername">select</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">TReplacement</span></td>
        <td><span class="parametername">replacement</span></td>
        <td></td>
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
        <td><span class="xref">TReplacement</span></td>
        <td></td>
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
        <td><span class="parametername">TReplacement</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
