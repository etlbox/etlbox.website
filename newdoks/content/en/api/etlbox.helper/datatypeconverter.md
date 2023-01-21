---
title: "DataTypeConverter"
description: "Details for Class DataTypeConverter (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10247
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.DataTypeConverter">
  <h1 id="ETLBox_Helper_DataTypeConverter" data-uid="ETLBox.Helper.DataTypeConverter" class="text-break">Class DataTypeConverter
  </h1>
  <div class="markdown level0 summary"><p>This class provides static methods and an implementation of IDataTypeConverter that converts
various sql data types into the right database specific database or into a .NET data type.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">DataTypeConverter</span></div>
  </div>
  <div classs="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.helper/idatatypeconverter">IDataTypeConverter</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_DataTypeConverter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class DataTypeConverter : IDataTypeConverter
```

{{< rawhtml >}}
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_Helper_DataTypeConverter_GetClrType_" data-uid="ETLBox.Helper.DataTypeConverter.GetClrType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetClrType_System_Data_DbType_" data-uid="ETLBox.Helper.DataTypeConverter.GetClrType(System.Data.DbType)">GetClrType(DbType)</h4>
  <div class="markdown level1 summary"><p>Returns a .NET type for the provided DbType.
E.g. DbType.Binary will return byte[]</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Type GetClrType(DbType dbType)
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
        <td><span class="xref">System.Data.DbType</span></td>
        <td><span class="parametername">dbType</span></td>
        <td><p>The DbType</p>
</td>
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
        <td><span class="xref">System.Type</span></td>
        <td><p>A .NET type</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetDatabaseType_" data-uid="ETLBox.Helper.DataTypeConverter.GetDatabaseType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetDatabaseType_System_Type_ETLBox_Connection_ConnectionManagerType_" data-uid="ETLBox.Helper.DataTypeConverter.GetDatabaseType(System.Type,ETLBox.Connection.ConnectionManagerType)">GetDatabaseType(Type, ConnectionManagerType)</h4>
  <div class="markdown level1 summary"><p>Returns a database specific type for the provided .NET datat type, depending on the connection
manager. E.g. passing the .NET data type long for SqlServer will return the string BIGINT</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string GetDatabaseType(Type clrType, ConnectionManagerType connectionType)
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
        <td><span class="xref">System.Type</span></td>
        <td><span class="parametername">clrType</span></td>
        <td><p>The .NET data type</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.connection/connectionmanagertype">ConnectionManagerType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>Database connection type, e.g. SqlServer</p>
</td>
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
        <td><span class="xref">System.String</span></td>
        <td><p>A database specific type string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetDBType_" data-uid="ETLBox.Helper.DataTypeConverter.GetDBType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetDBType_System_String_" data-uid="ETLBox.Helper.DataTypeConverter.GetDBType(System.String)">GetDBType(String)</h4>
  <div class="markdown level1 summary"><p>Returns the ADO.NET System.Data.DbType object for a specific sql type.
E.g. the method would return the System.Data.DbType.String for the sql type 'CHAR(10)'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static DbType? GetDBType(string dbSpecificTypeName)
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
        <td><span class="parametername">dbSpecificTypeName</span></td>
        <td><p>The sql specific data type name</p>
</td>
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
        <td><span class="xref">System.Nullable</span>&lt;<span class="xref">System.Data.DbType</span>&gt;</td>
        <td><p>The corresponding ADO .NET database type</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetDBType_" data-uid="ETLBox.Helper.DataTypeConverter.GetDBType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetDBType_System_Type_" data-uid="ETLBox.Helper.DataTypeConverter.GetDBType(System.Type)">GetDBType(Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static DbType GetDBType(Type clrType)
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
        <td><span class="xref">System.Type</span></td>
        <td><span class="parametername">clrType</span></td>
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
        <td><span class="xref">System.Data.DbType</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetStringLengthFromCharString_" data-uid="ETLBox.Helper.DataTypeConverter.GetStringLengthFromCharString*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetStringLengthFromCharString_System_String_" data-uid="ETLBox.Helper.DataTypeConverter.GetStringLengthFromCharString(System.String)">GetStringLengthFromCharString(String)</h4>
  <div class="markdown level1 summary"><p>Returns the string length that a sql char datatype has in it's definition.
E.g. VARCHAR(40) would return 40, NVARCHAR2 ( 2 ) returns 2</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int GetStringLengthFromCharString(string value)
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
        <td><p>A sql character data type</p>
</td>
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
        <td><span class="xref">System.Int32</span></td>
        <td><p>The string length defined in the data type - 0 if nothing could be found</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetTypeObject_" data-uid="ETLBox.Helper.DataTypeConverter.GetTypeObject*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetTypeObject_System_String_" data-uid="ETLBox.Helper.DataTypeConverter.GetTypeObject(System.String)">GetTypeObject(String)</h4>
  <div class="markdown level1 summary"><p>Returns the .NET type object for a specific sql type.
E.g. the method would return the .NET type string for the sql type 'CHAR(10)'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Type GetTypeObject(string dbSpecificTypeName)
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
        <td><span class="parametername">dbSpecificTypeName</span></td>
        <td><p>The sql specific data type name</p>
</td>
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
        <td><span class="xref">System.Type</span></td>
        <td><p>The corresponding .NET data type</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_TryConvertAliasName_" data-uid="ETLBox.Helper.DataTypeConverter.TryConvertAliasName*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_TryConvertAliasName_System_String_ETLBox_Connection_ConnectionManagerType_" data-uid="ETLBox.Helper.DataTypeConverter.TryConvertAliasName(System.String,ETLBox.Connection.ConnectionManagerType)">TryConvertAliasName(String, ConnectionManagerType)</h4>
  <div class="markdown level1 summary"><p>Converts a data type alias name (e.g. an alias name
like &quot;varchar(10)&quot; ) to the original database type name (&quot;character varying&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string TryConvertAliasName(string dataTypeName, ConnectionManagerType connectionType)
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
        <td><span class="parametername">dataTypeName</span></td>
        <td><p>The database alias type name</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.connection/connectionmanagertype">ConnectionManagerType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>Which database (e.g. Postgres, MySql, ...)</p>
</td>
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
        <td><span class="xref">System.String</span></td>
        <td><p>The type name converted to an original database type name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_TryConvertDbDataType_" data-uid="ETLBox.Helper.DataTypeConverter.TryConvertDbDataType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_TryConvertDbDataType_System_String_ETLBox_Connection_ConnectionManagerType_" data-uid="ETLBox.Helper.DataTypeConverter.TryConvertDbDataType(System.String,ETLBox.Connection.ConnectionManagerType)">TryConvertDbDataType(String, ConnectionManagerType)</h4>
  <div class="markdown level1 summary"><p>Tries to convert the data type from the TableColumn into a database specific type.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TryConvertDbDataType(string dataTypeName, ConnectionManagerType connectionType)
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
        <td><span class="parametername">dataTypeName</span></td>
        <td><p>The specific type name from a table column</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.connection/connectionmanagertype">ConnectionManagerType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>The database connection type</p>
</td>
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
        <td><span class="xref">System.String</span></td>
        <td><p>The type used in the CREATE TABLE statement</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_TryGetDbSpecificType_" data-uid="ETLBox.Helper.DataTypeConverter.TryGetDbSpecificType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_TryGetDbSpecificType_System_String_ETLBox_Connection_ConnectionManagerType_" data-uid="ETLBox.Helper.DataTypeConverter.TryGetDbSpecificType(System.String,ETLBox.Connection.ConnectionManagerType)">TryGetDbSpecificType(String, ConnectionManagerType)</h4>
  <div class="markdown level1 summary"><p>Tries to convert the data type into a database specific type.
E.g. the data type 'INT' would be converted to 'INTEGER' for SQLite connections.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string TryGetDbSpecificType(string dataTypeName, ConnectionManagerType connectionType)
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
        <td><span class="parametername">dataTypeName</span></td>
        <td><p>A data type name</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.connection/connectionmanagertype">ConnectionManagerType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>The database connection type</p>
</td>
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
        <td><span class="xref">System.String</span></td>
        <td><p>The converted database specific type name</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.helper/idatatypeconverter">IDataTypeConverter</a>
  </div>

{{< /rawhtml >}}
