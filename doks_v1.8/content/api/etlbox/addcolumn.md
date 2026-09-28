---
title: "AddColumn"
description: "Details for Class AddColumn (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10000
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.AddColumn">
  <h1 id="ETLBox_AddColumn" data-uid="ETLBox.AddColumn" class="text-break">Class AddColumn</h1>
  <div class="markdown level0 summary"><p>Adds a new property to the ExpandoObject produced by a column transformation.
Place it on a class to add a constant value, or assign a list of these objects to
<a class="xref" href="/api/etlbox.dataflow/columntransformation-1#ETLBox_DataFlow_ColumnTransformation_1_AddColumns">AddColumns</a>.
A non-empty list replaces the attributes. If <a class="xref" href="/api/etlbox/addcolumn#ETLBox_AddColumn_ValueFunc">ValueFunc</a> is set, it replaces <a class="xref" href="/api/etlbox/addcolumn#ETLBox_AddColumn_Value">Value</a>.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute">Attribute</a></div>
    <div class="level2"><span class="xref">AddColumn</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.equals">Attribute.Equals(object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type)">Attribute.GetCustomAttribute(Assembly, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-assembly-system-type-system-boolean)">Attribute.GetCustomAttribute(Assembly, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type)">Attribute.GetCustomAttribute(MemberInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-memberinfo-system-type-system-boolean)">Attribute.GetCustomAttribute(MemberInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type)">Attribute.GetCustomAttribute(Module, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-module-system-type-system-boolean)">Attribute.GetCustomAttribute(Module, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type)">Attribute.GetCustomAttribute(ParameterInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute#system-attribute-getcustomattribute(system-reflection-parameterinfo-system-type-system-boolean)">Attribute.GetCustomAttribute(ParameterInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly)">Attribute.GetCustomAttributes(Assembly)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-boolean)">Attribute.GetCustomAttributes(Assembly, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type)">Attribute.GetCustomAttributes(Assembly, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-assembly-system-type-system-boolean)">Attribute.GetCustomAttributes(Assembly, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo)">Attribute.GetCustomAttributes(MemberInfo)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-boolean)">Attribute.GetCustomAttributes(MemberInfo, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type)">Attribute.GetCustomAttributes(MemberInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-memberinfo-system-type-system-boolean)">Attribute.GetCustomAttributes(MemberInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module)">Attribute.GetCustomAttributes(Module)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-boolean)">Attribute.GetCustomAttributes(Module, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type)">Attribute.GetCustomAttributes(Module, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-module-system-type-system-boolean)">Attribute.GetCustomAttributes(Module, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo)">Attribute.GetCustomAttributes(ParameterInfo)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-boolean)">Attribute.GetCustomAttributes(ParameterInfo, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type)">Attribute.GetCustomAttributes(ParameterInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes#system-attribute-getcustomattributes(system-reflection-parameterinfo-system-type-system-boolean)">Attribute.GetCustomAttributes(ParameterInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode">Attribute.GetHashCode()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute">Attribute.IsDefaultAttribute()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type)">Attribute.IsDefined(Assembly, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-assembly-system-type-system-boolean)">Attribute.IsDefined(Assembly, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type)">Attribute.IsDefined(MemberInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-memberinfo-system-type-system-boolean)">Attribute.IsDefined(MemberInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type)">Attribute.IsDefined(Module, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-module-system-type-system-boolean)">Attribute.IsDefined(Module, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type)">Attribute.IsDefined(ParameterInfo, Type)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.isdefined#system-attribute-isdefined(system-reflection-parameterinfo-system-type-system-boolean)">Attribute.IsDefined(ParameterInfo, Type, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.match">Attribute.Match(object)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.attribute.typeid">Attribute.TypeId</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object-system-object)">object.Equals(object, object)</a>
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
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_AddColumn_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    [AttributeUsage(AttributeTargets.Class|AttributeTargets.Struct, AllowMultiple = true, Inherited = true)]
public sealed class AddColumn : Attribute
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor" data-uid="ETLBox.AddColumn.#ctor">AddColumn()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn()
```

{{< rawhtml >}}
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_" data-uid="ETLBox.AddColumn.#ctor(System.String)">AddColumn(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Boolean_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Boolean)">AddColumn(string, bool)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, bool value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Byte_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Byte)">AddColumn(string, byte)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, byte value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Char_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Char)">AddColumn(string, char)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, char value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.char">char</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Double_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Double)">AddColumn(string, double)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, double value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.double">double</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Int16_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Int16)">AddColumn(string, short)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, short value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int16">short</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Int32_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Int32)">AddColumn(string, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, int value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Int64_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Int64)">AddColumn(string, long)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, long value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int64">long</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Single_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Single)">AddColumn(string, float)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, float value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.single">float</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_String_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.String)">AddColumn(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, string value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn__ctor_" data-uid="ETLBox.AddColumn.#ctor*"></a>
  <h4 id="ETLBox_AddColumn__ctor_System_String_System_Type_" data-uid="ETLBox.AddColumn.#ctor(System.String,System.Type)">AddColumn(string, Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AddColumn(string propertyName, Type value)
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
        <td><span class="parametername">propertyName</span></td>
        <td><p>Name of the property that is added to the output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>Constant value of the added property.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_AddColumn_PropertyName_" data-uid="ETLBox.AddColumn.PropertyName*"></a>
  <h4 id="ETLBox_AddColumn_PropertyName" data-uid="ETLBox.AddColumn.PropertyName">PropertyName</h4>
  <div class="markdown level1 summary"><p>Name of the property that is added to the output.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string PropertyName { get; set; }
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
  <a id="ETLBox_AddColumn_Value_" data-uid="ETLBox.AddColumn.Value*"></a>
  <h4 id="ETLBox_AddColumn_Value" data-uid="ETLBox.AddColumn.Value">Value</h4>
  <div class="markdown level1 summary"><p>Constant value of the added property. Ignored when <a class="xref" href="/api/etlbox/addcolumn#ETLBox_AddColumn_ValueFunc">ValueFunc</a> is set.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object Value { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_AddColumn_ValueFunc_" data-uid="ETLBox.AddColumn.ValueFunc*"></a>
  <h4 id="ETLBox_AddColumn_ValueFunc" data-uid="ETLBox.AddColumn.ValueFunc">ValueFunc</h4>
  <div class="markdown level1 summary"><p>Optional function that receives the current input row and returns the new property value.
When set, this replaces <a class="xref" href="/api/etlbox/addcolumn#ETLBox_AddColumn_Value">Value</a>. Cannot be assigned through attribute syntax.
The row is dynamic. Convert value types before concatenating them with strings.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Func<dynamic, object> ValueFunc { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.func-2">Func</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">dynamic</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
