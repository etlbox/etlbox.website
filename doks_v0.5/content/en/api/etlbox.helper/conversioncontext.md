---
title: "ConversionContext"
description: "Details for Class ConversionContext (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10186
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.ConversionContext">
  <h1 id="ETLBox_Helper_ConversionContext" data-uid="ETLBox.Helper.ConversionContext" class="text-break">Class ConversionContext
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">ConversionContext</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_ConversionContext_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ConversionContext
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Helper_ConversionContext__ctor_" data-uid="ETLBox.Helper.ConversionContext.#ctor*"></a>
  <h4 id="ETLBox_Helper_ConversionContext__ctor_System_Object_System_Type_System_Boolean_ETLBox_ControlFlow_TableColumn_ETLBox_ControlFlow_TableDefinition_ETLBox_ConnectionType_" data-uid="ETLBox.Helper.ConversionContext.#ctor(System.Object,System.Type,System.Boolean,ETLBox.ControlFlow.TableColumn,ETLBox.ControlFlow.TableDefinition,ETLBox.ConnectionType)">ConversionContext(object, Type, bool, TableColumn, TableDefinition, ConnectionType)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConversionContext(object value, Type valueType, bool isNullValue, TableColumn column, TableDefinition definition, ConnectionType connectionType)
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
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Type</span></td>
        <td><span class="parametername">valueType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">bool</span></td>
        <td><span class="parametername">isNullValue</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a></td>
        <td><span class="parametername">column</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Helper_ConversionContext_Column_" data-uid="ETLBox.Helper.ConversionContext.Column*"></a>
  <h4 id="ETLBox_Helper_ConversionContext_Column" data-uid="ETLBox.Helper.ConversionContext.Column">Column</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableColumn Column { get; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_ConversionContext_ConnectionType_" data-uid="ETLBox.Helper.ConversionContext.ConnectionType*"></a>
  <h4 id="ETLBox_Helper_ConversionContext_ConnectionType" data-uid="ETLBox.Helper.ConversionContext.ConnectionType">ConnectionType</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ConnectionType ConnectionType { get; }
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
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_ConversionContext_Definition_" data-uid="ETLBox.Helper.ConversionContext.Definition*"></a>
  <h4 id="ETLBox_Helper_ConversionContext_Definition" data-uid="ETLBox.Helper.ConversionContext.Definition">Definition</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableDefinition Definition { get; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_ConversionContext_IsNullValue_" data-uid="ETLBox.Helper.ConversionContext.IsNullValue*"></a>
  <h4 id="ETLBox_Helper_ConversionContext_IsNullValue" data-uid="ETLBox.Helper.ConversionContext.IsNullValue">IsNullValue</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsNullValue { get; }
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
  <a id="ETLBox_Helper_ConversionContext_Value_" data-uid="ETLBox.Helper.ConversionContext.Value*"></a>
  <h4 id="ETLBox_Helper_ConversionContext_Value" data-uid="ETLBox.Helper.ConversionContext.Value">Value</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object Value { get; }
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
        <td><span class="xref">object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_ConversionContext_ValueType_" data-uid="ETLBox.Helper.ConversionContext.ValueType*"></a>
  <h4 id="ETLBox_Helper_ConversionContext_ValueType" data-uid="ETLBox.Helper.ConversionContext.ValueType">ValueType</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Type ValueType { get; }
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
        <td><span class="xref">System.Type</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
