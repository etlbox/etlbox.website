---
title: "Network"
description: "Details for Class Network (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10196
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
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">Network</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  <h5 id="ETLBox_DataFlow_Network_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class Network
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_Network_examples"><strong>Examples</strong></h5>
  <pre><code>Network.Execute(source1); 
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
  <h5 id="ETLBox_DataFlow_Network__ctor_examples">Examples</h5>
  <pre><code>Network.Execute(source1); 
Network.Execute(source1, source2); //If source1 and source2 are in the same network, providing source2 is superflous
Task t = Network.ExecuteAsync(dest1);
t.Wait();</code></pre>
  <a id="ETLBox_DataFlow_Network__ctor_" data-uid="ETLBox.DataFlow.Network.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_Network__ctor_ETLBox_DataFlow_DataFlowComponent___" data-uid="ETLBox.DataFlow.Network.#ctor(ETLBox.DataFlow.DataFlowComponent[])">Network(params DataFlowComponent[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Network(params DataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Network__ctor_ETLBox_DataFlow_DataFlowComponent____examples">Examples</h5>
  <pre><code>Network.Execute(source1); 
Network.Execute(source1, source2); //If source1 and source2 are in the same network, providing source2 is superflous
Task t = Network.ExecuteAsync(dest1);
t.Wait();</code></pre>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_Network_Destinations_" data-uid="ETLBox.DataFlow.Network.Destinations*"></a>
  <h4 id="ETLBox_DataFlow_Network_Destinations" data-uid="ETLBox.DataFlow.Network.Destinations">Destinations</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<IDataFlowDestination> Destinations { get; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/idataflowdestination">IDataFlowDestination</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Network_Destinations_examples">Examples</h5>
  <pre><code>Network.Execute(source1); 
Network.Execute(source1, source2); //If source1 and source2 are in the same network, providing source2 is superflous
Task t = Network.ExecuteAsync(dest1);
t.Wait();</code></pre>
  <a id="ETLBox_DataFlow_Network_Sources_" data-uid="ETLBox.DataFlow.Network.Sources*"></a>
  <h4 id="ETLBox_DataFlow_Network_Sources" data-uid="ETLBox.DataFlow.Network.Sources">Sources</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<IDataFlowExecutableSource> Sources { get; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/idataflowexecutablesource">IDataFlowExecutableSource</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Network_Sources_examples">Examples</h5>
  <pre><code>Network.Execute(source1); 
Network.Execute(source1, source2); //If source1 and source2 are in the same network, providing source2 is superflous
Task t = Network.ExecuteAsync(dest1);
t.Wait();</code></pre>
  <a id="ETLBox_DataFlow_Network_StartNodes_" data-uid="ETLBox.DataFlow.Network.StartNodes*"></a>
  <h4 id="ETLBox_DataFlow_Network_StartNodes" data-uid="ETLBox.DataFlow.Network.StartNodes">StartNodes</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<DataFlowComponent> StartNodes { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_DataFlow_Network_StartNodes_examples">Examples</h5>
  <pre><code>Network.Execute(source1); 
Network.Execute(source1, source2); //If source1 and source2 are in the same network, providing source2 is superflous
Task t = Network.ExecuteAsync(dest1);
t.Wait();</code></pre>
  <h3 id="methods">Methods
</h3>
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
  <h4 id="ETLBox_DataFlow_Network_Cancel_ETLBox_DataFlow_DataFlowComponent___" data-uid="ETLBox.DataFlow.Network.Cancel(ETLBox.DataFlow.DataFlowComponent[])">Cancel(params DataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Cancel the BufferCompletion(s) on all nodes in the network, will start cancelation from the sources.
This will result in all nodes canceled in the whole network.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Cancel(params DataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>[]</td>
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
  <h4 id="ETLBox_DataFlow_Network_Execute_ETLBox_DataFlow_DataFlowComponent___" data-uid="ETLBox.DataFlow.Network.Execute(ETLBox.DataFlow.DataFlowComponent[])">Execute(params DataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network synchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Execute(params DataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one node in the network that should be executed</p>
<ul>
<li>can by any node in the network</li>
</ul>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_Execute_" data-uid="ETLBox.DataFlow.Network.Execute*"></a>
  <h4 id="ETLBox_DataFlow_Network_Execute_System_Threading_CancellationToken_ETLBox_DataFlow_DataFlowComponent___" data-uid="ETLBox.DataFlow.Network.Execute(System.Threading.CancellationToken,ETLBox.DataFlow.DataFlowComponent[])">Execute(CancellationToken, params DataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network synchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void Execute(CancellationToken cancellationToken, params DataFlowComponent[] startNodes)
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
        <td><span class="xref">System.Threading.CancellationToken</span></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token which cancels
the whole network when still running</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one node in the network that should be executed</p>
<ul>
<li>can by any node in the network</li>
</ul>
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
        <td><span class="xref">System.Threading.CancellationToken</span></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>The cancellation token to cancel the whole network when still running</p>
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
  <table class="table table-bordered table-striped table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="xref">System.Threading.Tasks.Task</span></td>
        <td><p>A task that is ran to completion when the whole network is completed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_ExecuteAsync_" data-uid="ETLBox.DataFlow.Network.ExecuteAsync*"></a>
  <h4 id="ETLBox_DataFlow_Network_ExecuteAsync_ETLBox_DataFlow_DataFlowComponent___" data-uid="ETLBox.DataFlow.Network.ExecuteAsync(ETLBox.DataFlow.DataFlowComponent[])">ExecuteAsync(params DataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network asynchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Task ExecuteAsync(params DataFlowComponent[] startNodes)
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
        <td><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one node in the network that should be executed</p>
<ul>
<li>can by any node in the network</li>
</ul>
</td>
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
        <td><span class="xref">System.Threading.Tasks.Task</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DataFlow_Network_ExecuteAsync_" data-uid="ETLBox.DataFlow.Network.ExecuteAsync*"></a>
  <h4 id="ETLBox_DataFlow_Network_ExecuteAsync_System_Threading_CancellationToken_ETLBox_DataFlow_DataFlowComponent___" data-uid="ETLBox.DataFlow.Network.ExecuteAsync(System.Threading.CancellationToken,ETLBox.DataFlow.DataFlowComponent[])">ExecuteAsync(CancellationToken, params DataFlowComponent[])</h4>
  <div class="markdown level1 summary"><p>Will execute the data flow for the whole network asynchronously.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Task ExecuteAsync(CancellationToken cancellationToken, params DataFlowComponent[] startNodes)
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
        <td><span class="xref">System.Threading.CancellationToken</span></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token which cancels
the whole network when still running</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.dataflow/dataflowcomponent">DataFlowComponent</a>[]</td>
        <td><span class="parametername">startNodes</span></td>
        <td><p>At least one node in the network that should be executed</p>
<ul>
<li>can by any node in the network</li>
</ul>
</td>
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
        <td><span class="xref">System.Threading.Tasks.Task</span></td>
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
        <td><span class="xref">System.Threading.CancellationToken</span></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>A cancellation token to cancel the whole network when running</p>
</td>
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
        <td><span class="xref">System.Threading.Tasks.Task</span></td>
        <td><p>A task that is ran to completion when the whole network is completed.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
