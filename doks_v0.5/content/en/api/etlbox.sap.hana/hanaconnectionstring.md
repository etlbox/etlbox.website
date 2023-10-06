---
title: "HanaConnectionString"
description: "Details for Class HanaConnectionString (ETLBox.Sap.Hana)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.sap.hana"
weight: 10285
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Sap.Hana.HanaConnectionString">
  <h1 id="ETLBox_Sap_Hana_HanaConnectionString" data-uid="ETLBox.Sap.Hana.HanaConnectionString" class="text-break">Class HanaConnectionString
</h1>
  <div class="markdown level0 summary"><p>A helper class for encapsulating a connection string to a SAP HANA database in an object.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><a class="xref" href="/api/etlbox/dbconnectionstring-2">DbConnectionString</a>&lt;<a class="xref" href="ETLBox.Sap.Hana.HanaConnectionString.html">HanaConnectionString</a>, <span class="xref">DbConnectionStringBuilder</span>&gt;</div>
    <div class="level2"><span class="xref">HanaConnectionString</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Builder">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.Builder</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Value">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.Value</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ToString">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.ToString()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbName">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.DbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_DbNameKeyword">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.DbNameKeyword</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_MasterDbName">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.MasterDbName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ETLBox_IDbConnectionString_Clone">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.IDbConnectionString.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ETLBox_IDbConnectionString_CloneWithNewDbName_System_String_">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.IDbConnectionString.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_ETLBox_IDbConnectionString_CloneWithMasterDbName">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.IDbConnectionString.CloneWithMasterDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithNewDbName_System_String_">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.CloneWithNewDbName(string)</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_Clone">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.Clone()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithoutDbName">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.CloneWithoutDbName()</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox/dbconnectionstring-2#ETLBox_DbConnectionString_2_CloneWithMasterDbName">DbConnectionString&lt;HanaConnectionString, DbConnectionStringBuilder&gt;.CloneWithMasterDbName()</a>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.Sap.Hana</h6>
  <h6><strong>Assembly</strong>: ETLBox.Sap.Hana.dll</h6>
  <h5 id="ETLBox_Sap_Hana_HanaConnectionString_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class HanaConnectionString : DbConnectionString<HanaConnectionString, DbConnectionStringBuilder>, IDbConnectionString
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Sap_Hana_HanaConnectionString__ctor_" data-uid="ETLBox.Sap.Hana.HanaConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Sap_Hana_HanaConnectionString__ctor" data-uid="ETLBox.Sap.Hana.HanaConnectionString.#ctor">HanaConnectionString()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public HanaConnectionString()
```

{{< rawhtml >}}
  <a id="ETLBox_Sap_Hana_HanaConnectionString__ctor_" data-uid="ETLBox.Sap.Hana.HanaConnectionString.#ctor*"></a>
  <h4 id="ETLBox_Sap_Hana_HanaConnectionString__ctor_System_String_" data-uid="ETLBox.Sap.Hana.HanaConnectionString.#ctor(System.String)">HanaConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public HanaConnectionString(string value)
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
  <a id="ETLBox_Sap_Hana_HanaConnectionString_DbName_" data-uid="ETLBox.Sap.Hana.HanaConnectionString.DbName*"></a>
  <h4 id="ETLBox_Sap_Hana_HanaConnectionString_DbName" data-uid="ETLBox.Sap.Hana.HanaConnectionString.DbName">DbName</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Sap.Hana.HanaConnectionString, DbConnectionStringBuilder&gt;.DbName</span></div>
  <a id="ETLBox_Sap_Hana_HanaConnectionString_DbNameKeyword_" data-uid="ETLBox.Sap.Hana.HanaConnectionString.DbNameKeyword*"></a>
  <h4 id="ETLBox_Sap_Hana_HanaConnectionString_DbNameKeyword" data-uid="ETLBox.Sap.Hana.HanaConnectionString.DbNameKeyword">DbNameKeyword</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Sap.Hana.HanaConnectionString, DbConnectionStringBuilder&gt;.DbNameKeyword</span></div>
  <a id="ETLBox_Sap_Hana_HanaConnectionString_MasterDbName_" data-uid="ETLBox.Sap.Hana.HanaConnectionString.MasterDbName*"></a>
  <h4 id="ETLBox_Sap_Hana_HanaConnectionString_MasterDbName" data-uid="ETLBox.Sap.Hana.HanaConnectionString.MasterDbName">MasterDbName</h4>
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
  <div><span class="xref">ETLBox.DbConnectionString&lt;ETLBox.Sap.Hana.HanaConnectionString, DbConnectionStringBuilder&gt;.MasterDbName</span></div>
  <h3 id="operators">Operators
</h3>
  <a id="ETLBox_Sap_Hana_HanaConnectionString_op_Implicit_" data-uid="ETLBox.Sap.Hana.HanaConnectionString.op_Implicit*"></a>
  <h4 id="ETLBox_Sap_Hana_HanaConnectionString_op_Implicit_System_String__ETLBox_Sap_Hana_HanaConnectionString" data-uid="ETLBox.Sap.Hana.HanaConnectionString.op_Implicit(System.String)~ETLBox.Sap.Hana.HanaConnectionString">implicit operator HanaConnectionString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static implicit operator HanaConnectionString(string value)
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
        <td><a class="xref" href="/api/etlbox.sap.hana/hanaconnectionstring">HanaConnectionString</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idbconnectionstring">IDbConnectionString</a>
  </div>

{{< /rawhtml >}}
