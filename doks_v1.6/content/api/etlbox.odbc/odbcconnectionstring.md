---
title: "OdbcConnectionString"
description: "Details for Class OdbcConnectionString (ETLBox.Odbc)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.odbc"
weight: 10297
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Odbc.OdbcConnectionString">
  <h1 id="ETLBox_Odbc_OdbcConnectionString" data-uid="ETLBox.Odbc.OdbcConnectionString" class="text-break">Class OdbcConnectionString
</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the OdbcConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.odbc/odbcconnectionstring">OdbcConnectionString</a>, <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.odbc.odbcconnectionstringbuilder">OdbcConnectionStringBuilder</a>&gt;</div>
    <div class="level2"><span class="xref">OdbcConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Builder">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Value">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ToString">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_MasterDbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Clone">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
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
<h6><strong>Namespace</strong>: ETLBox.Odbc</h6>
  <h6><strong>Assembly</strong>: ETLBox.Odbc.dll</h6>
  <h5 id="ETLBox_Odbc_OdbcConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class OdbcConnectionString : DbConnectionString<OdbcConnectionString, OdbcConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Odbc_OdbcConnectionString__ctor_" data-uid="ETLBox.Odbc.OdbcConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Odbc_OdbcConnectionString__ctor" data-uid="ETLBox.Odbc.OdbcConnectionString.#ctor">OdbcConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OdbcConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Odbc_OdbcConnectionString__ctor_" data-uid="ETLBox.Odbc.OdbcConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Odbc_OdbcConnectionString__ctor_System_String_" data-uid="ETLBox.Odbc.OdbcConnectionString.#ctor(System.String)">OdbcConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OdbcConnectionString(string value)
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
  <a id="ETLBox_Odbc_OdbcConnectionString_DbName_" data-uid="ETLBox.Odbc.OdbcConnectionString.DbName*"></a>
  <h4 id="ETLBox_Odbc_OdbcConnectionString_DbName" data-uid="ETLBox.Odbc.OdbcConnectionString.DbName">DbName</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Odbc.OdbcConnectionString, System.Data.Odbc.OdbcConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_Odbc_OdbcConnectionString_DbNameKeyword_" data-uid="ETLBox.Odbc.OdbcConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_Odbc_OdbcConnectionString_DbNameKeyword" data-uid="ETLBox.Odbc.OdbcConnectionString.DbNameKeyword">DbNameKeyword</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Odbc.OdbcConnectionString, System.Data.Odbc.OdbcConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_Odbc_OdbcConnectionString_MasterDbName_" data-uid="ETLBox.Odbc.OdbcConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_Odbc_OdbcConnectionString_MasterDbName" data-uid="ETLBox.Odbc.OdbcConnectionString.MasterDbName">MasterDbName</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Odbc.OdbcConnectionString, System.Data.Odbc.OdbcConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_Odbc_OdbcConnectionString_op_Implicit_" data-uid="ETLBox.Odbc.OdbcConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_Odbc_OdbcConnectionString_op_Implicit_System_String__ETLBox_Odbc_OdbcConnectionString" data-uid="ETLBox.Odbc.OdbcConnectionString.op_Implicit(System.String)~ETLBox.Odbc.OdbcConnectionString">implicit operator OdbcConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator OdbcConnectionString(string value)
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
        <td><a class="xref" href="/api/etlbox.odbc/odbcconnectionstring">OdbcConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
