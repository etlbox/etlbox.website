---
title: "SQLiteConnectionString"
description: "Details for Class SQLiteConnectionString (ETLBox.Connection)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.connection"
weight: 10032
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Connection.SQLiteConnectionString">
  <h1 id="ETLBox_Connection_SQLiteConnectionString" data-uid="ETLBox.Connection.SQLiteConnectionString" class="text-break">Class SQLiteConnectionString
</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the SQLiteConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox.connection/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="/api/etlbox.connection/sqliteconnectionstring">SQLiteConnectionString</a>, <span class="xref">System.Data.SQLite.SQLiteConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><span class="xref">SQLiteConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Builder">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Value">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ToString">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_DbName">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_MasterDbName">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_Clone">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.IDbConnectionString.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithNewDbName_System_String_">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.IDbConnectionString.CloneWithNewDbName(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_ETLBox_Connection_IDbConnectionString_CloneWithMasterDbName">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.IDbConnectionString.CloneWithMasterDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.CloneWithNewDbName(String)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_Clone">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.connection/dbconnectionstring-2#ETLBox_Connection_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;SQLiteConnectionString, SQLiteConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
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
  <h6><strong>Assembly</strong>: ETLBox.SQLite.dll</h6>
  <h5 id="ETLBox_Connection_SQLiteConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class SQLiteConnectionString : DbConnectionString<SQLiteConnectionString, SQLiteConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Connection_SQLiteConnectionString__ctor_" data-uid="ETLBox.Connection.SQLiteConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Connection_SQLiteConnectionString__ctor" data-uid="ETLBox.Connection.SQLiteConnectionString.#ctor">SQLiteConnectionString()</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the SQLiteConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SQLiteConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Connection_SQLiteConnectionString__ctor_" data-uid="ETLBox.Connection.SQLiteConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Connection_SQLiteConnectionString__ctor_System_String_" data-uid="ETLBox.Connection.SQLiteConnectionString.#ctor(System.String)">SQLiteConnectionString(String)</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the SQLiteConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SQLiteConnectionString(string value)
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
  <a id="ETLBox_Connection_SQLiteConnectionString_DbName_" data-uid="ETLBox.Connection.SQLiteConnectionString.DbName*"></a>
  <h4 id="ETLBox_Connection_SQLiteConnectionString_DbName" data-uid="ETLBox.Connection.SQLiteConnectionString.DbName">DbName</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the SQLiteConnectionStringBuilder is used to access the values of the given connection string.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.SQLiteConnectionString, System.Data.SQLite.SQLiteConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_Connection_SQLiteConnectionString_DbNameKeyword_" data-uid="ETLBox.Connection.SQLiteConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_Connection_SQLiteConnectionString_DbNameKeyword" data-uid="ETLBox.Connection.SQLiteConnectionString.DbNameKeyword">DbNameKeyword</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the SQLiteConnectionStringBuilder is used to access the values of the given connection string.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.SQLiteConnectionString, System.Data.SQLite.SQLiteConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_Connection_SQLiteConnectionString_MasterDbName_" data-uid="ETLBox.Connection.SQLiteConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_Connection_SQLiteConnectionString_MasterDbName" data-uid="ETLBox.Connection.SQLiteConnectionString.MasterDbName">MasterDbName</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the SQLiteConnectionStringBuilder is used to access the values of the given connection string.</p>
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
  <div><span class="xref">ETLBox.Connection.DbConnectionString&lt;ETLBox.Connection.SQLiteConnectionString, System.Data.SQLite.SQLiteConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_Connection_SQLiteConnectionString_op_Implicit_" data-uid="ETLBox.Connection.SQLiteConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_Connection_SQLiteConnectionString_op_Implicit_System_String__ETLBox_Connection_SQLiteConnectionString" data-uid="ETLBox.Connection.SQLiteConnectionString.op_Implicit(System.String)~ETLBox.Connection.SQLiteConnectionString">Implicit(String to SQLiteConnectionString)</h4>
  <div class="markdown level1 summary"><p>A helper class for encapsulating a conection string in an object.
Internally the SQLiteConnectionStringBuilder is used to access the values of the given connection string.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator SQLiteConnectionString(string value)
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
        <td><a class="xref" href="/api/etlbox.connection/sqliteconnectionstring">SQLiteConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.connection/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
