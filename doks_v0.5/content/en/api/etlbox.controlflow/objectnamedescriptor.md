---
title: "ObjectNameDescriptor"
description: "Details for Class ObjectNameDescriptor (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10056
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor">
  <h1 id="ETLBox_ControlFlow_ObjectNameDescriptor" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor" class="text-break">Class ObjectNameDescriptor
</h1>
  <div class="markdown level0 summary"><p>Applies database specific formatting to an object names.
E.g. schema.ViewName would create [schema].[ViewName] for SqlServer and &quot;schema&quot;.&quot;ViewName&quot; for Postgres</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">ObjectNameDescriptor</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_ObjectNameDescriptor_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public sealed class ObjectNameDescriptor
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor__ctor_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor__ctor_System_String_System_String_System_String_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.#ctor(System.String,System.String,System.String)">ObjectNameDescriptor(string, string, string)</h4>
  <div class="markdown level1 summary"><p>Creates a new instance and already parses the values. Right after initialization you can access the values in the properties.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor(string objectName, string qb, string qe)
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
        <td><span class="xref">string</span></td>
        <td><span class="parametername">objectName</span></td>
        <td><p>The full object name (e.g. Schema.ViewName)</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">qb</span></td>
        <td><p>The database specific quotation start (e.g. '[' for Sql Server)</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">qe</span></td>
        <td><p>The database specific quotation start (e.g. ']' for Sql Server)</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_ObjectName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.ObjectName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_ObjectName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.ObjectName">ObjectName</h4>
  <div class="markdown level1 summary"><p>The name of the object that needs to have database spcific formatting applied</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string ObjectName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_QB_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QB*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_QB" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QB">QB</h4>
  <div class="markdown level1 summary"><p>The quotation begin character that is used in the database.
E.g. SqlServer uses: '[' and Postgres: '&quot;'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QB { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_QE_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QE*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_QE" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QE">QE</h4>
  <div class="markdown level1 summary"><p>The quotation end character that is used in the database.
E.g. SqlServer uses: ']' and Postgres: '&quot;'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QE { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_QuotatedFullName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QuotatedFullName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_QuotatedFullName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QuotatedFullName">QuotatedFullName</h4>
  <div class="markdown level1 summary"><p>The whole name with quotes.
E.g. schema.ViewName would create &quot;schema&quot;.&quot;ViewName&quot;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QuotatedFullName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_QuotatedObjectName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QuotatedObjectName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_QuotatedObjectName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QuotatedObjectName">QuotatedObjectName</h4>
  <div class="markdown level1 summary"><p>The object name with quotes.
E.g. schema.ViewName would create &quot;ViewName&quot;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QuotatedObjectName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_QuotatedSchemaName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QuotatedSchemaName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_QuotatedSchemaName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QuotatedSchemaName">QuotatedSchemaName</h4>
  <div class="markdown level1 summary"><p>The schema name with quotes.
E.g. &quot;schema&quot;.&quot;ViewName&quot; would create &quot;schema&quot;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QuotatedSchemaName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedFullName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedFullName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedFullName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedFullName">UnquotatedFullName</h4>
  <div class="markdown level1 summary"><p>The whole name without any  quotation
E.g. &quot;schema&quot;.&quot;ViewName&quot; would create schema.ViewName</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string UnquotatedFullName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedObjectName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedObjectName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedObjectName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedObjectName">UnquotatedObjectName</h4>
  <div class="markdown level1 summary"><p>The object name without any quoting.
E.g. &quot;schema&quot;.&quot;ViewName&quot; would create ViewName</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string UnquotatedObjectName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedSchemaName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedSchemaName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedSchemaName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedSchemaName">UnquotatedSchemaName</h4>
  <div class="markdown level1 summary"><p>The schema name without any quoting.
E.g. &quot;schema&quot;.&quot;ViewName&quot; would create schema</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string UnquotatedSchemaName { get; }
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
