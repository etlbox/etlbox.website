---
title: "SnowflakeConnectionString"
description: "Details for Class SnowflakeConnectionString (ETLBox.Snowflake)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.snowflake"
weight: 10343
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Snowflake.SnowflakeConnectionString">
  <h1 id="ETLBox_Snowflake_SnowflakeConnectionString" data-uid="ETLBox.Snowflake.SnowflakeConnectionString" class="text-break">Class SnowflakeConnectionString
</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a connection string to a Snowflake server in an object.
Internally the SnowflakeDbConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.snowflake/snowflakeconnectionstring">SnowflakeConnectionString</a>, <span class="xref">SnowflakeDbConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><span class="xref">SnowflakeConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Builder">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Value">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ToString">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbName">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_MasterDbName">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Clone">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
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
<h6><strong>Namespace</strong>: ETLBox.Snowflake</h6>
  <h6><strong>Assembly</strong>: ETLBox.Snowflake.dll</h6>
  <h5 id="ETLBox_Snowflake_SnowflakeConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class SnowflakeConnectionString : DbConnectionString<SnowflakeConnectionString, SnowflakeDbConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Snowflake_SnowflakeConnectionString__ctor_" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionString__ctor" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.#ctor">SnowflakeConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SnowflakeConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Snowflake_SnowflakeConnectionString__ctor_" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionString__ctor_System_String_" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.#ctor(System.String)">SnowflakeConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SnowflakeConnectionString(string value)
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
  <a id="ETLBox_Snowflake_SnowflakeConnectionString_DbName_" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.DbName*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionString_DbName" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.DbName">DbName</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Snowflake.SnowflakeConnectionString, Snowflake.Data.Client.SnowflakeDbConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionString_DbNameKeyword_" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionString_DbNameKeyword" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.DbNameKeyword">DbNameKeyword</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Snowflake.SnowflakeConnectionString, Snowflake.Data.Client.SnowflakeDbConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_Snowflake_SnowflakeConnectionString_MasterDbName_" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionString_MasterDbName" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.MasterDbName">MasterDbName</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Snowflake.SnowflakeConnectionString, Snowflake.Data.Client.SnowflakeDbConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Snowflake_SnowflakeConnectionString_CloneWithMasterDbName_" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.CloneWithMasterDbName*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionString_CloneWithMasterDbName" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.CloneWithMasterDbName">CloneWithMasterDbName()</h4>
  <div class="markdown level1 summary"><p>Clones the current connection string with the master database name (if applicable)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override SnowflakeConnectionString CloneWithMasterDbName()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="/api/etlbox.snowflake/snowflakeconnectionstring">SnowflakeConnectionString</a></td>
        <td><p>The new connection string with master database name</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Snowflake.SnowflakeConnectionString, Snowflake.Data.Client.SnowflakeDbConnectionStringBuilder&gt;.CloneWithMasterDbName()</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_Snowflake_SnowflakeConnectionString_op_Implicit_" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_Snowflake_SnowflakeConnectionString_op_Implicit_System_String__ETLBox_Snowflake_SnowflakeConnectionString" data-uid="ETLBox.Snowflake.SnowflakeConnectionString.op_Implicit(System.String)~ETLBox.Snowflake.SnowflakeConnectionString">implicit operator SnowflakeConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator SnowflakeConnectionString(string value)
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
        <td><a class="xref" href="/api/etlbox.snowflake/snowflakeconnectionstring">SnowflakeConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
