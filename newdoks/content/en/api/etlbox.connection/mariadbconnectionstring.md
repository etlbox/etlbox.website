---
title: "MariaDbConnectionString"
description: "Details for Class MariaDbConnectionString (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10015
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.MariaDbConnectionString">
  <h1 id="ETLBox_Connection_MariaDbConnectionString" data-uid="ETLBox.Connection.MariaDbConnectionString" class="text-break">Class MariaDbConnectionString
</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a conection string to a Maria Db server in an object.
Internally the MySqlConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.connection/mysqlconnectionstring">MySqlConnectionString</a>, <span class="xref">MySql.Data.MySqlClient.MySqlConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><a class="xref" href="/api/etlbox.connection/mysqlconnectionstring">MySqlConnectionString</a></div>
    <div class="level3"><span class="xref">MariaDbConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionstring#ETLBox_Connection_MySqlConnectionString_DbName">MySqlConnectionString.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionstring#ETLBox_Connection_MySqlConnectionString_MasterDbName">MySqlConnectionString.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/mysqlconnectionstring#ETLBox_Connection_MySqlConnectionString_DbNameKeyword">MySqlConnectionString.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Builder">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Value">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ToString">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_DbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_MasterDbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_Clone">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.IDbConnectionString.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithNewDbName_System_String_">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.IDbConnectionString.CloneWithNewDbName(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithMasterDbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.IDbConnectionString.CloneWithMasterDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.CloneWithNewDbName(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Clone">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;MySqlConnectionString, MySqlConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
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
  <h6><strong>Assembly</strong>: ETLBox.MariaDb.dll</h6>
  <h5 id="ETLBox_Connection_MariaDbConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class MariaDbConnectionString : MySqlConnectionString, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_MariaDbConnectionString__ctor_" data-uid="ETLBox.Connection.MariaDbConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionString__ctor" data-uid="ETLBox.Connection.MariaDbConnectionString.#ctor">MariaDbConnectionString()</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a conection string to a Maria Db server in an object.
Internally the MySqlConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MariaDbConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_MariaDbConnectionString__ctor_" data-uid="ETLBox.Connection.MariaDbConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Connection_MariaDbConnectionString__ctor_System_String_" data-uid="ETLBox.Connection.MariaDbConnectionString.#ctor(System.String)">MariaDbConnectionString(String)</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a conection string to a Maria Db server in an object.
Internally the MySqlConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public MariaDbConnectionString(string value)
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
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
