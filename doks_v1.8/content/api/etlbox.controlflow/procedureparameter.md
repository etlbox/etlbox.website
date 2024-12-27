---
title: "ProcedureParameter"
description: "Details for Class ProcedureParameter (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10070
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.ProcedureParameter">
  <h1 id="ETLBox_ControlFlow_ProcedureParameter" data-uid="ETLBox.ControlFlow.ProcedureParameter" class="text-break">Class ProcedureParameter</h1>
  <div class="markdown level0 summary"><p>A parameter used in a procedure</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">ProcedureParameter</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_ProcedureParameter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ProcedureParameter
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_ProcedureParameter__ctor_" data-uid="ETLBox.ControlFlow.ProcedureParameter.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureParameter__ctor" data-uid="ETLBox.ControlFlow.ProcedureParameter.#ctor">ProcedureParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ProcedureParameter()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_ProcedureParameter__ctor_" data-uid="ETLBox.ControlFlow.ProcedureParameter.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureParameter__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.ProcedureParameter.#ctor(System.String,System.String)">ProcedureParameter(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ProcedureParameter(string name, string dataType)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">dataType</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ProcedureParameter__ctor_" data-uid="ETLBox.ControlFlow.ProcedureParameter.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureParameter__ctor_System_String_System_String_System_String_" data-uid="ETLBox.ControlFlow.ProcedureParameter.#ctor(System.String,System.String,System.String)">ProcedureParameter(string, string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ProcedureParameter(string name, string dataType, string defaultValue)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">dataType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">defaultValue</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_ProcedureParameter_DataType_" data-uid="ETLBox.ControlFlow.ProcedureParameter.DataType*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureParameter_DataType" data-uid="ETLBox.ControlFlow.ProcedureParameter.DataType">DataType</h4>
  <div class="markdown level1 summary"><p>Sql data type of the procedure parameter</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DataType { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ProcedureParameter_DefaultValue_" data-uid="ETLBox.ControlFlow.ProcedureParameter.DefaultValue*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureParameter_DefaultValue" data-uid="ETLBox.ControlFlow.ProcedureParameter.DefaultValue">DefaultValue</h4>
  <div class="markdown level1 summary"><p>The default value of the parameter</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DefaultValue { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ProcedureParameter_Name_" data-uid="ETLBox.ControlFlow.ProcedureParameter.Name*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureParameter_Name" data-uid="ETLBox.ControlFlow.ProcedureParameter.Name">Name</h4>
  <div class="markdown level1 summary"><p>Name of the procedure parameter</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string Name { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ProcedureParameter_Out_" data-uid="ETLBox.ControlFlow.ProcedureParameter.Out*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureParameter_Out" data-uid="ETLBox.ControlFlow.ProcedureParameter.Out">Out</h4>
  <div class="markdown level1 summary"><p>Indicates that the parameter is used as output</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool Out { get; set; }
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
  <a id="ETLBox_ControlFlow_ProcedureParameter_ReadOnly_" data-uid="ETLBox.ControlFlow.ProcedureParameter.ReadOnly*"></a>
  <h4 id="ETLBox_ControlFlow_ProcedureParameter_ReadOnly" data-uid="ETLBox.ControlFlow.ProcedureParameter.ReadOnly">ReadOnly</h4>
  <div class="markdown level1 summary"><p>Indicates that the parameter is read only</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool ReadOnly { get; set; }
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

{{< /rawhtml >}}
