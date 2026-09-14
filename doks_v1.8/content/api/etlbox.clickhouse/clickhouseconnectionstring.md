---
title: "ClickHouseConnectionString"
description: "Details for Class ClickHouseConnectionString (ETLBox.ClickHouse)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.clickhouse"
weight: 10037
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString">
  <h1 id="ETLBox_ClickHouse_ClickHouseConnectionString" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString" class="text-break">Class ClickHouseConnectionString</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a conection string to a ClickHouse server in an object.
Internally the ClickHouseConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.clickhouse/clickhouseconnectionstring">ClickHouseConnectionString</a>, <span class="xref">ClickHouseConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><span class="xref">ClickHouseConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Builder">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Value">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ToString">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbName">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_MasterDbName">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Clone">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;ClickHouseConnectionString, ClickHouseConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
    </div>
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
<h6><strong>Namespace</strong>: ETLBox.ClickHouse</h6>
  <h6><strong>Assembly</strong>: ETLBox.ClickHouse.dll</h6>
  <h5 id="ETLBox_ClickHouse_ClickHouseConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ClickHouseConnectionString : DbConnectionString<ClickHouseConnectionString, ClickHouseConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionString__ctor_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.#ctor*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionString__ctor" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.#ctor">ClickHouseConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ClickHouseConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_ClickHouse_ClickHouseConnectionString__ctor_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.#ctor*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionString__ctor_System_String_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.#ctor(System.String)">ClickHouseConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ClickHouseConnectionString(string value)
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
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionString_DbName_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.DbName*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionString_DbName" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.DbName">DbName</h4>
  <div class="markdown level1 summary"><p>The database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string DbName { get; set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.ClickHouse.ClickHouseConnectionString, ClickHouse.Driver.ADO.ClickHouseConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionString_DbNameKeyword_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionString_DbNameKeyword" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.DbNameKeyword">DbNameKeyword</h4>
  <div class="markdown level1 summary"><p>The keyword used in the connection string to identify a database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override string DbNameKeyword { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.ClickHouse.ClickHouseConnectionString, ClickHouse.Driver.ADO.ClickHouseConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionString_MasterDbName_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionString_MasterDbName" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.MasterDbName">MasterDbName</h4>
  <div class="markdown level1 summary"><p>The name of the master database (if applicable)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string MasterDbName { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.ClickHouse.ClickHouseConnectionString, ClickHouse.Driver.ADO.ClickHouseConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_ClickHouse_ClickHouseConnectionString_op_Implicit_" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_ClickHouse_ClickHouseConnectionString_op_Implicit_System_String__ETLBox_ClickHouse_ClickHouseConnectionString" data-uid="ETLBox.ClickHouse.ClickHouseConnectionString.op_Implicit(System.String)~ETLBox.ClickHouse.ClickHouseConnectionString">implicit operator ClickHouseConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator ClickHouseConnectionString(string value)
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
        <td><span class="parametername">value</span></td>
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
        <td><a class="xref" href="/api/etlbox.clickhouse/clickhouseconnectionstring">ClickHouseConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
