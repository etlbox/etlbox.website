---
title: "ProcedureDefinition"
description: "Details for Class ProcedureDefinition (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10047
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.ProcedureDefinition">
  <h1 id="ETLBox_ControlFlow_ProcedureDefinition" data-uid="ETLBox.ControlFlow.ProcedureDefinition" class="text-break">Class ProcedureDefinition
</h1>
  <div class="markdown level0 summary"><p>Defines a procedure</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">ProcedureDefinition</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_ProcedureDefinition_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ProcedureDefinition
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_ProcedureDefinition__ctor_" data-uid="ETLBox.ControlFlow.ProcedureDefinition.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureDefinition__ctor" data-uid="ETLBox.ControlFlow.ProcedureDefinition.#ctor">ProcedureDefinition()</h4>
  <div class="markdown level1 summary"><p>Defines a procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ProcedureDefinition()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_ProcedureDefinition__ctor_" data-uid="ETLBox.ControlFlow.ProcedureDefinition.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureDefinition__ctor_System_String_System_String_System_Collections_Generic_List_ETLBox_ControlFlow_ProcedureParameter__" data-uid="ETLBox.ControlFlow.ProcedureDefinition.#ctor(System.String,System.String,System.Collections.Generic.List{ETLBox.ControlFlow.ProcedureParameter})">ProcedureDefinition(String, String, List&lt;ProcedureParameter&gt;)</h4>
  <div class="markdown level1 summary"><p>Defines a procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ProcedureDefinition(string name, string definition, List<ProcedureParameter> parameter)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Collections.Generic.List</span>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td><span class="parametername">parameter</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ProcedureDefinition__ctor_" data-uid="ETLBox.ControlFlow.ProcedureDefinition.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureDefinition__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.ProcedureDefinition.#ctor(System.String,System.String)">ProcedureDefinition(String, String)</h4>
  <div class="markdown level1 summary"><p>Defines a procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ProcedureDefinition(string name, string definition)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.String</span></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_ProcedureDefinition_Definition_" data-uid="ETLBox.ControlFlow.ProcedureDefinition.Definition*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureDefinition_Definition" data-uid="ETLBox.ControlFlow.ProcedureDefinition.Definition">Definition</h4>
  <div class="markdown level1 summary"><p>The sql code of the procudure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Definition { get; set; }
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
  <a id="ETLBox_ControlFlow_ProcedureDefinition_Name_" data-uid="ETLBox.ControlFlow.ProcedureDefinition.Name*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureDefinition_Name" data-uid="ETLBox.ControlFlow.ProcedureDefinition.Name">Name</h4>
  <div class="markdown level1 summary"><p>Name of the procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Name { get; set; }
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
  <a id="ETLBox_ControlFlow_ProcedureDefinition_Parameter_" data-uid="ETLBox.ControlFlow.ProcedureDefinition.Parameter*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureDefinition_Parameter" data-uid="ETLBox.ControlFlow.ProcedureDefinition.Parameter">Parameter</h4>
  <div class="markdown level1 summary"><p>List of parameters for the procedure</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<ProcedureParameter> Parameter { get; set; }
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
        <td><span class="xref">System.Collections.Generic.ICollection</span>&lt;<a class="xref" href="/api/etlbox.controlflow/procedureparameter">ProcedureParameter</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
