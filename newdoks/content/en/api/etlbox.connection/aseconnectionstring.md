---
title: "AseConnectionString"
description: "Details for Class AseConnectionString (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10003
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.AseConnectionString">
  <h1 id="ETLBox_Connection_AseConnectionString" data-uid="ETLBox.Connection.AseConnectionString" class="text-break">Class AseConnectionString
</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a connection string to a (Sybase) SAP ASE database in an object.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.connection/aseconnectionstring">AseConnectionString</a>, <span class="xref">System.Data.Common.DbConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><span class="xref">AseConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Builder">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Value">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ToString">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_DbName">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_MasterDbName">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_Clone">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.IDbConnectionString.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithNewDbName_System_String_">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.IDbConnectionString.CloneWithNewDbName(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithMasterDbName">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.IDbConnectionString.CloneWithMasterDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.CloneWithNewDbName(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Clone">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;AseConnectionString, DbConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
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
  <h6><strong>Assembly</strong>: ETLBox.SapAse.dll</h6>
  <h5 id="ETLBox_Connection_AseConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class AseConnectionString : DbConnectionString<AseConnectionString, DbConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_AseConnectionString__ctor_" data-uid="ETLBox.Connection.AseConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Connection_AseConnectionString__ctor" data-uid="ETLBox.Connection.AseConnectionString.#ctor">AseConnectionString()</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a connection string to a (Sybase) SAP ASE database in an object.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AseConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_AseConnectionString__ctor_" data-uid="ETLBox.Connection.AseConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Connection_AseConnectionString__ctor_System_String_" data-uid="ETLBox.Connection.AseConnectionString.#ctor(System.String)">AseConnectionString(String)</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a connection string to a (Sybase) SAP ASE database in an object.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public AseConnectionString(string value)
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
  <a id="ETLBox_Connection_AseConnectionString_DbName_" data-uid="ETLBox.Connection.AseConnectionString.DbName*"></a>
  <h4 id="ETLBox_Connection_AseConnectionString_DbName" data-uid="ETLBox.Connection.AseConnectionString.DbName">DbName</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a connection string to a (Sybase) SAP ASE database in an object.</p>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.AseConnectionString, System.Data.Common.DbConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_Connection_AseConnectionString_DbNameKeyword_" data-uid="ETLBox.Connection.AseConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_Connection_AseConnectionString_DbNameKeyword" data-uid="ETLBox.Connection.AseConnectionString.DbNameKeyword">DbNameKeyword</h4>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.AseConnectionString, System.Data.Common.DbConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_Connection_AseConnectionString_MasterDbName_" data-uid="ETLBox.Connection.AseConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_Connection_AseConnectionString_MasterDbName" data-uid="ETLBox.Connection.AseConnectionString.MasterDbName">MasterDbName</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a connection string to a (Sybase) SAP ASE database in an object.</p>
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
        <td><span class="xref">System.String</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.AseConnectionString, System.Data.Common.DbConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_Connection_AseConnectionString_op_Implicit_" data-uid="ETLBox.Connection.AseConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_Connection_AseConnectionString_op_Implicit_System_String__ETLBox_Connection_AseConnectionString" data-uid="ETLBox.Connection.AseConnectionString.op_Implicit(System.String)~ETLBox.Connection.AseConnectionString">Implicit(String to AseConnectionString)</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a connection string to a (Sybase) SAP ASE database in an object.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator AseConnectionString(string value)
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
        <td><a class="xref" href="/api/etlbox.connection/aseconnectionstring">AseConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
