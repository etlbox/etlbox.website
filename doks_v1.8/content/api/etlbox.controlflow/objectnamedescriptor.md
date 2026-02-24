---
title: "ObjectNameDescriptor"
description: "Details for Class ObjectNameDescriptor (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10066
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor">
  <h1 id="ETLBox_ControlFlow_ObjectNameDescriptor" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor" class="text-break">Class ObjectNameDescriptor</h1>
  <div class="markdown level0 summary"><p>Applies database specific formatting to an object names.
E.g. schema.ViewName would create [schema].[ViewName] for SqlServer and &quot;schema&quot;.&quot;ViewName&quot; for Postgres</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">ObjectNameDescriptor</span></div>
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
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor__ctor_System_String_System_String_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.#ctor(System.String,System.String)">ObjectNameDescriptor(string, string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor(string qb, string qe)
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
        <td><span class="parametername">qb</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">qe</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="parametername">objectName</span></td>
        <td><p>The full object name (e.g. Schema.ViewName)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><span class="parametername">qb</span></td>
        <td><p>The database specific quotation start (e.g. '[' for Sql Server)</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
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
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_QuotatedDbName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QuotatedDbName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_QuotatedDbName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.QuotatedDbName">QuotatedDbName</h4>
  <div class="markdown level1 summary"><p>The database name with quotes.
E.g. &quot;db.&quot;schema&quot;.&quot;ViewName&quot; would create &quot;db&quot;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string QuotatedDbName { get; }
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
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedDbName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedDbName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedDbName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedDbName">UnquotatedDbName</h4>
  <div class="markdown level1 summary"><p>The database name without any quoting.
E.g. &quot;db&quot;.&quot;schema&quot;.&quot;table&quot; would create db</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string UnquotatedDbName { get; }
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
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedFullName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedFullName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_UnquotatedFullName" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.UnquotatedFullName">UnquotatedFullName</h4>
  <div class="markdown level1 summary"><p>The whole name without any quotation.
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
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_ParseFromObjectName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.ParseFromObjectName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_ParseFromObjectName_System_String_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.ParseFromObjectName(System.String)">ParseFromObjectName(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor ParseFromObjectName(string objectName)
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
        <td><span class="parametername">objectName</span></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_SetObjectName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.SetObjectName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_SetObjectName_System_String_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.SetObjectName(System.String)">SetObjectName(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor SetObjectName(string tableName)
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
        <td><span class="parametername">tableName</span></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_ObjectNameDescriptor_SetSchemaName_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.SetSchemaName*"></a>
  <h4 id="ETLBox_ControlFlow_ObjectNameDescriptor_SetSchemaName_System_String_" data-uid="ETLBox.ControlFlow.ObjectNameDescriptor.SetSchemaName(System.String)">SetSchemaName(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ObjectNameDescriptor SetSchemaName(string schemaName)
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
        <td><span class="parametername">schemaName</span></td>
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
        <td><a class="xref" href="/api/etlbox.controlflow/objectnamedescriptor">ObjectNameDescriptor</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
