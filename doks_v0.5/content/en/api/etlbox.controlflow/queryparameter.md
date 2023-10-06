---
title: "QueryParameter"
description: "Details for Class QueryParameter (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10060
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.QueryParameter">
  <h1 id="ETLBox_ControlFlow_QueryParameter" data-uid="ETLBox.ControlFlow.QueryParameter" class="text-break">Class QueryParameter
</h1>
  <div class="markdown level0 summary"><p>A parameter used in a sql query</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">QueryParameter</span></div>
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
  <h5 id="ETLBox_ControlFlow_QueryParameter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class QueryParameter
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_QueryParameter__ctor_" data-uid="ETLBox.ControlFlow.QueryParameter.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter__ctor" data-uid="ETLBox.ControlFlow.QueryParameter.#ctor">QueryParameter()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public QueryParameter()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_QueryParameter__ctor_" data-uid="ETLBox.ControlFlow.QueryParameter.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter__ctor_System_Object_" data-uid="ETLBox.ControlFlow.QueryParameter.#ctor(System.Object)">QueryParameter(object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public QueryParameter(object value)
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
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_QueryParameter__ctor_" data-uid="ETLBox.ControlFlow.QueryParameter.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter__ctor_System_String_System_Object_" data-uid="ETLBox.ControlFlow.QueryParameter.#ctor(System.String,System.Object)">QueryParameter(string, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public QueryParameter(string name, object value)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_QueryParameter__ctor_" data-uid="ETLBox.ControlFlow.QueryParameter.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter__ctor_System_String_System_String_System_Object_" data-uid="ETLBox.ControlFlow.QueryParameter.#ctor(System.String,System.String,System.Object)">QueryParameter(string, string, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public QueryParameter(string name, string sqlType, object value)
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">sqlType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_QueryParameter_DbSize_" data-uid="ETLBox.ControlFlow.QueryParameter.DbSize*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter_DbSize" data-uid="ETLBox.ControlFlow.QueryParameter.DbSize">DbSize</h4>
  <div class="markdown level1 summary"><p>The database column size parsed from the sql column type (e.g. &quot;VARCHAR(100)&quot; return 100)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int DbSize { get; }
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_QueryParameter_DbType_" data-uid="ETLBox.ControlFlow.QueryParameter.DbType*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter_DbType" data-uid="ETLBox.ControlFlow.QueryParameter.DbType">DbType</h4>
  <div class="markdown level1 summary"><p>The database column type parsed from the sql column type (e.g. &quot;VARCHAR(100)&quot; return DbType.String</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DbType? DbType { get; }
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
        <td><span class="xref">System.Data.DbType</span>?</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_QueryParameter_Name_" data-uid="ETLBox.ControlFlow.QueryParameter.Name*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter_Name" data-uid="ETLBox.ControlFlow.QueryParameter.Name">Name</h4>
  <div class="markdown level1 summary"><p>Name of the parameter in the query (e.g. &quot;Par1&quot;)</p>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_QueryParameter_SqlType_" data-uid="ETLBox.ControlFlow.QueryParameter.SqlType*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter_SqlType" data-uid="ETLBox.ControlFlow.QueryParameter.SqlType">SqlType</h4>
  <div class="markdown level1 summary"><p>The database specific sql column type string (e.g. &quot;INT&quot; or &quot;VARCHAR(100)&quot;</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string SqlType { get; set; }
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
  <a id="ETLBox_ControlFlow_QueryParameter_Value_" data-uid="ETLBox.ControlFlow.QueryParameter.Value*"></a>
  <h4 id="ETLBox_ControlFlow_QueryParameter_Value" data-uid="ETLBox.ControlFlow.QueryParameter.Value">Value</h4>
  <div class="markdown level1 summary"><p>The value of the parameter - null will be converted into a DBNull.Value</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object Value { get; set; }
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

{{< /rawhtml >}}
