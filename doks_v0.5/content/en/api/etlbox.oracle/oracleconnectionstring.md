---
title: "OracleConnectionString"
description: "Details for Class OracleConnectionString (ETLBox.Oracle)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.oracle"
weight: 10267
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Oracle.OracleConnectionString">
  <h1 id="ETLBox_Oracle_OracleConnectionString" data-uid="ETLBox.Oracle.OracleConnectionString" class="text-break">Class OracleConnectionString
</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a conection string to a Oracle server in an object.
Internally the OracleConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.oracle/oracleconnectionstring">OracleConnectionString</a>, <span class="xref">OracleConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><span class="xref">OracleConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Builder">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Value">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ToString">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbName">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_MasterDbName">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ETLBox_IDbConnectionString_Clone">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.IDbConnectionString.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ETLBox_IDbConnectionString_CloneWithNewDbName_System_String_">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.IDbConnectionString.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ETLBox_IDbConnectionString_CloneWithMasterDbName">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.IDbConnectionString.CloneWithMasterDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Clone">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;OracleConnectionString, OracleConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Oracle</h6>
  <h6><strong>Assembly</strong>: ETLBox.Oracle.dll</h6>
  <h5 id="ETLBox_Oracle_OracleConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class OracleConnectionString : DbConnectionString<OracleConnectionString, OracleConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Oracle_OracleConnectionString__ctor_" data-uid="ETLBox.Oracle.OracleConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Oracle_OracleConnectionString__ctor" data-uid="ETLBox.Oracle.OracleConnectionString.#ctor">OracleConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OracleConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Oracle_OracleConnectionString__ctor_" data-uid="ETLBox.Oracle.OracleConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Oracle_OracleConnectionString__ctor_System_String_" data-uid="ETLBox.Oracle.OracleConnectionString.#ctor(System.String)">OracleConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public OracleConnectionString(string value)
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
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Oracle_OracleConnectionString_DbName_" data-uid="ETLBox.Oracle.OracleConnectionString.DbName*"></a>
  <h4 id="ETLBox_Oracle_OracleConnectionString_DbName" data-uid="ETLBox.Oracle.OracleConnectionString.DbName">DbName</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Oracle.OracleConnectionString, OracleConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_Oracle_OracleConnectionString_DbNameKeyword_" data-uid="ETLBox.Oracle.OracleConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_Oracle_OracleConnectionString_DbNameKeyword" data-uid="ETLBox.Oracle.OracleConnectionString.DbNameKeyword">DbNameKeyword</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Oracle.OracleConnectionString, OracleConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_Oracle_OracleConnectionString_MasterDbName_" data-uid="ETLBox.Oracle.OracleConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_Oracle_OracleConnectionString_MasterDbName" data-uid="ETLBox.Oracle.OracleConnectionString.MasterDbName">MasterDbName</h4>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Oracle.OracleConnectionString, OracleConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_Oracle_OracleConnectionString_op_Implicit_" data-uid="ETLBox.Oracle.OracleConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_Oracle_OracleConnectionString_op_Implicit_System_String__ETLBox_Oracle_OracleConnectionString" data-uid="ETLBox.Oracle.OracleConnectionString.op_Implicit(System.String)~ETLBox.Oracle.OracleConnectionString">implicit operator OracleConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator OracleConnectionString(string value)
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
        <td><a class="xref" href="/api/etlbox.oracle/oracleconnectionstring">OracleConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
