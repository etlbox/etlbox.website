---
title: "Network"
description: "Details for Class Network (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10157
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.Network">
  <h1 id="ETLBox_DataFlow_Network" data-uid="ETLBox.DataFlow.Network" class="text-break">Class Network
</h1>
  <div class="markdown level0 summary"><p>The network class allows you execute, monitor and cancel data flows.
You need to provide at least one start node to run the network. All other linked components
will be retrieved automatically. If you provide more nodes, the algorithm will determine if
a network has already started or not and ignore the other nodes.
It is recommend to pass only one node from the network.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">Network</span></div>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.referenceequals">object.ReferenceEquals(object, object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.tostring">object.ToString()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_Network_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class Network
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_Network_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">Network.Execute(source1); 
Network.Execute(source1, source2); //If source1 and source2 are in the same network, providing source2 is superflous
Task t = Network.ExecuteAsync(dest1);
t.Wait();</code></pre>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_Network__ctor_" data-uid="ETLBox.DataFlow.Network.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Network__ctor" data-uid="ETLBox.DataFlow.Network.#ctor">Network()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Network()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Network__ctor_" data-uid="ETLBox.DataFlow.Network.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Network__ctor_ETLBox_IDataFlowComponent___" data-uid="ETLBox.DataFlow.Network.#ctor(ETLBox.IDataFlowComponent[])">Network(params IDataFlowComponent[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Network(params IDataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Network_AllNodes_" data-uid="ETLBox.DataFlow.Network.AllNodes*"></a>
  <h4 id="ETLBox_DataFlow_Network_AllNodes" data-uid="ETLBox.DataFlow.Network.AllNodes">AllNodes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ReadOnlyCollection<IDataFlowComponent> AllNodes { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection-1">ReadOnlyCollection</a>&lt;<a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_AllowMultipleExecutions_" data-uid="ETLBox.DataFlow.Network.AllowMultipleExecutions*"></a>
  <h4 id="ETLBox_DataFlow_Network_AllowMultipleExecutions" data-uid="ETLBox.DataFlow.Network.AllowMultipleExecutions">AllowMultipleExecutions</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool? AllowMultipleExecutions { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_Destinations_" data-uid="ETLBox.DataFlow.Network.Destinations*"></a>
  <h4 id="ETLBox_DataFlow_Network_Destinations" data-uid="ETLBox.DataFlow.Network.Destinations">Destinations</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ReadOnlyCollection<IDataFlowDestination> Destinations { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection-1">ReadOnlyCollection</a>&lt;<a class="xref" href="/api/etlbox/idataflowdestination">IDataFlowDestination</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_Sources_" data-uid="ETLBox.DataFlow.Network.Sources*"></a>
  <h4 id="ETLBox_DataFlow_Network_Sources" data-uid="ETLBox.DataFlow.Network.Sources">Sources</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ReadOnlyCollection<IDataFlowExecutableSource> Sources { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.objectmodel.readonlycollection-1">ReadOnlyCollection</a>&lt;<a class="xref" href="/api/etlbox/idataflowexecutablesource">IDataFlowExecutableSource</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_StartNodes_" data-uid="ETLBox.DataFlow.Network.StartNodes*"></a>
  <h4 id="ETLBox_DataFlow_Network_StartNodes" data-uid="ETLBox.DataFlow.Network.StartNodes">StartNodes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<IDataFlowComponent> StartNodes { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.icollection-1">ICollection</a>&lt;<a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_DataFlow_Network_ApplyToAllNodes_" data-uid="ETLBox.DataFlow.Network.ApplyToAllNodes*"></a>
  <h4 id="ETLBox_DataFlow_Network_ApplyToAllNodes_System_Action_ETLBox_IDataFlowComponent__" data-uid="ETLBox.DataFlow.Network.ApplyToAllNodes(System.Action{ETLBox.IDataFlowComponent})">ApplyToAllNodes(Action&lt;IDataFlowComponent&gt;)</h4>
  <div class="markdown level1 summary"><p>Will apply the given action on all nodes in the network.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Network ApplyToAllNodes(Action<IDataFlowComponent> onNode)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.action-1">Action</a>&lt;<a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>&gt;</td>
        <td><span class="parametername">onNode</span></td>
        <td><p>An action that is performed on each node.</p>
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
        <td><a class="xref" href="/api/etlbox.dataflow/network">Network</a></td>
        <td><p>The current Network instance.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_Cancel_" data-uid="ETLBox.DataFlow.Network.Cancel*"></a>
  <h4 id="ETLBox_DataFlow_Network_Cancel" data-uid="ETLBox.DataFlow.Network.Cancel">Cancel()</h4>
  <div class="markdown level1 summary"><p>Cancel the BufferCompletion(s) on all nodes in the network, will start cancelation from the sources.
This will result in all nodes canceled in the whole network.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Cancel()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Network_Cancel_" data-uid="ETLBox.DataFlow.Network.Cancel*"></a>
  <h4 id="ETLBox_DataFlow_Network_Cancel_ETLBox_IDataFlowComponent___" data-uid="ETLBox.DataFlow.Network.Cancel(ETLBox.IDataFlowComponent[])">Cancel(params IDataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Cancel the BufferCompletion(s) on all nodes in the network, will start cancelation from the sources.
This will result in all nodes canceled in the whole network.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Cancel(params IDataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>The start nodes - only one node in the whole network is sufficient</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_Execute_" data-uid="ETLBox.DataFlow.Network.Execute*"></a>
  <h4 id="ETLBox_DataFlow_Network_Execute" data-uid="ETLBox.DataFlow.Network.Execute">Execute()</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network synchronously.
The network is derived from the given <a class="xref" href="/api/etlbox.dataflow/network#ETLBox_DataFlow_Network_StartNodes">StartNodes</a> (only one node of the network is needed)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Execute()
```

{{< rawhtml >}}
  <a id="ETLBox_DataFlow_Network_Execute_" data-uid="ETLBox.DataFlow.Network.Execute*"></a>
  <h4 id="ETLBox_DataFlow_Network_Execute_ETLBox_IDataFlowComponent___" data-uid="ETLBox.DataFlow.Network.Execute(ETLBox.IDataFlowComponent[])">Execute(params IDataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network synchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Execute(params IDataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one node in the network that should be executed
- can by any node in the network</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_Execute_" data-uid="ETLBox.DataFlow.Network.Execute*"></a>
  <h4 id="ETLBox_DataFlow_Network_Execute_System_Threading_CancellationToken_" data-uid="ETLBox.DataFlow.Network.Execute(System.Threading.CancellationToken)">Execute(CancellationToken)</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network synchronously.
The network is derived from the given <a class="xref" href="/api/etlbox.dataflow/network#ETLBox_DataFlow_Network_StartNodes">StartNodes</a> (only one node of the network is needed)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Execute(CancellationToken cancellationToken)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>The cancellation token to cancel the whole network when still running</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_Execute_" data-uid="ETLBox.DataFlow.Network.Execute*"></a>
  <h4 id="ETLBox_DataFlow_Network_Execute_System_Threading_CancellationToken_ETLBox_IDataFlowComponent___" data-uid="ETLBox.DataFlow.Network.Execute(System.Threading.CancellationToken,ETLBox.IDataFlowComponent[])">Execute(CancellationToken, params IDataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network synchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Execute(CancellationToken cancellationToken, params IDataFlowComponent[] startNodes)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token which cancels
the whole network when still running</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one node in the network that should be executed
- can by any node in the network</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_ExecuteAsync_" data-uid="ETLBox.DataFlow.Network.ExecuteAsync*"></a>
  <h4 id="ETLBox_DataFlow_Network_ExecuteAsync" data-uid="ETLBox.DataFlow.Network.ExecuteAsync">ExecuteAsync()</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network asynchronously.
The network is derived from the given <a class="xref" href="/api/etlbox.dataflow/network#ETLBox_DataFlow_Network_StartNodes">StartNodes</a> (only one node of the network is needed)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Task ExecuteAsync()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>A task that is ran to completion when the whole network is completed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_ExecuteAsync_" data-uid="ETLBox.DataFlow.Network.ExecuteAsync*"></a>
  <h4 id="ETLBox_DataFlow_Network_ExecuteAsync_ETLBox_IDataFlowComponent___" data-uid="ETLBox.DataFlow.Network.ExecuteAsync(ETLBox.IDataFlowComponent[])">ExecuteAsync(params IDataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network asynchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Task ExecuteAsync(params IDataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one node in the network that should be executed
- can by any node in the network</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_ExecuteAsync_" data-uid="ETLBox.DataFlow.Network.ExecuteAsync*"></a>
  <h4 id="ETLBox_DataFlow_Network_ExecuteAsync_System_Threading_CancellationToken_" data-uid="ETLBox.DataFlow.Network.ExecuteAsync(System.Threading.CancellationToken)">ExecuteAsync(CancellationToken)</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network asynchronously.
The network is derived from the given <a class="xref" href="/api/etlbox.dataflow/network#ETLBox_DataFlow_Network_StartNodes">StartNodes</a> (only one node of the network is needed)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Task ExecuteAsync(CancellationToken cancellationToken)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token to cancel the whole network when running</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>A task that is ran to completion when the whole network is completed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_ExecuteAsync_" data-uid="ETLBox.DataFlow.Network.ExecuteAsync*"></a>
  <h4 id="ETLBox_DataFlow_Network_ExecuteAsync_System_Threading_CancellationToken_ETLBox_IDataFlowComponent___" data-uid="ETLBox.DataFlow.Network.ExecuteAsync(System.Threading.CancellationToken,ETLBox.IDataFlowComponent[])">ExecuteAsync(CancellationToken, params IDataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network asynchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Task ExecuteAsync(CancellationToken cancellationToken, params IDataFlowComponent[] startNodes)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token which cancels
the whole network when still running</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one node in the network that should be executed
- can by any node in the network</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_Init_" data-uid="ETLBox.DataFlow.Network.Init*"></a>
  <h4 id="ETLBox_DataFlow_Network_Init_ETLBox_IDataFlowComponent___" data-uid="ETLBox.DataFlow.Network.Init(ETLBox.IDataFlowComponent[])">Init(params IDataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Creates a new network with the given start nodes.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Network Init(params IDataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox/idataflowcomponent">IDataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one or more nodes from the network.
Connected nodes will be automatically collected.</p>
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
        <td><a class="xref" href="/api/etlbox.dataflow/network">Network</a></td>
        <td><p>A new Network instance.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_SetLogInstance_" data-uid="ETLBox.DataFlow.Network.SetLogInstance*"></a>
  <h4 id="ETLBox_DataFlow_Network_SetLogInstance_Microsoft_Extensions_Logging_ILogger_" data-uid="ETLBox.DataFlow.Network.SetLogInstance(Microsoft.Extensions.Logging.ILogger)">SetLogInstance(ILogger)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Network SetLogInstance(ILogger logger)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger">ILogger</a></td>
        <td><span class="parametername">logger</span></td>
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
        <td><a class="xref" href="/api/etlbox.dataflow/network">Network</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
