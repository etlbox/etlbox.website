---
title: "OdbcConnectionString"
description: "Details for Class OdbcConnectionString (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10017
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.OdbcConnectionString">
  <h1 id="ETLBox_Connection_OdbcConnectionString" data-uid="ETLBox.Connection.OdbcConnectionString" class="text-break">Class OdbcConnectionString
  </h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the OdbcConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.connection/odbcconnectionstring">OdbcConnectionString</a>, <span class="xref">System.Data.Odbc.OdbcConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><span class="xref">OdbcConnectionString</span></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Builder">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Value">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ToString">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_DbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_MasterDbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_Clone">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.IDbConnectionString.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithNewDbName_System_String_">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.IDbConnectionString.CloneWithNewDbName(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithMasterDbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.IDbConnectionString.CloneWithMasterDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.CloneWithNewDbName(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Clone">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;OdbcConnectionString, OdbcConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
    </div>
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
<h6><strong>Namespace</strong>: ETLBox.Connection</h6>
  <h6><strong>Assembly</strong>: ETLBox.Odbc.dll</h6>
  <h5 id="ETLBox_Connection_OdbcConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class OdbcConnectionString : DbConnectionString<OdbcConnectionString, OdbcConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
  </h3>
  <a id="ETLBox_Connection_OdbcConnectionString__ctor_" data-uid="ETLBox.Connection.OdbcConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Connection_OdbcConnectionString__ctor" data-uid="ETLBox.Connection.OdbcConnectionString.#ctor">OdbcConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OdbcConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_OdbcConnectionString__ctor_" data-uid="ETLBox.Connection.OdbcConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Connection_OdbcConnectionString__ctor_System_String_" data-uid="ETLBox.Connection.OdbcConnectionString.#ctor(System.String)">OdbcConnectionString(String)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OdbcConnectionString(string value)
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
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
  </h3>
  <a id="ETLBox_Connection_OdbcConnectionString_DbName_" data-uid="ETLBox.Connection.OdbcConnectionString.DbName*"></a>
  <h4 id="ETLBox_Connection_OdbcConnectionString_DbName" data-uid="ETLBox.Connection.OdbcConnectionString.DbName">DbName</h4>
  <div class="markdown level1 summary"><p>The database name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string DbName { get; set; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.OdbcConnectionString, System.Data.Odbc.OdbcConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_Connection_OdbcConnectionString_DbNameKeyword_" data-uid="ETLBox.Connection.OdbcConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_Connection_OdbcConnectionString_DbNameKeyword" data-uid="ETLBox.Connection.OdbcConnectionString.DbNameKeyword">DbNameKeyword</h4>
  <div class="markdown level1 summary"><p>The keyword used in the connection string to identify a database</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected override string DbNameKeyword { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.OdbcConnectionString, System.Data.Odbc.OdbcConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_Connection_OdbcConnectionString_MasterDbName_" data-uid="ETLBox.Connection.OdbcConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_Connection_OdbcConnectionString_MasterDbName" data-uid="ETLBox.Connection.OdbcConnectionString.MasterDbName">MasterDbName</h4>
  <div class="markdown level1 summary"><p>The name of the master database (if applicable)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override string MasterDbName { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.OdbcConnectionString, System.Data.Odbc.OdbcConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="operators">Operators
  </h3>
  <a id="ETLBox_Connection_OdbcConnectionString_op_Implicit_" data-uid="ETLBox.Connection.OdbcConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_Connection_OdbcConnectionString_op_Implicit_System_String__ETLBox_Connection_OdbcConnectionString" data-uid="ETLBox.Connection.OdbcConnectionString.op_Implicit(System.String)~ETLBox.Connection.OdbcConnectionString">Implicit(String to OdbcConnectionString)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator OdbcConnectionString(string value)
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
        <td><span class="parametername">value</span></td>
        <td></td>
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
        <td><a class="xref" href="/api/etlbox.connection/odbcconnectionstring">OdbcConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
