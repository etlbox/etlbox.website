---
title: "DataTypeConverter"
description: "Details for Class DataTypeConverter (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10218
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
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">DataTypeConverter</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox/idatatypeconverter">IDataTypeConverter</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
  <a id="ETLBox_Helper_DataTypeConverter_ChangeType_" data-uid="ETLBox.Helper.DataTypeConverter.ChangeType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_ChangeType_System_Object_System_Type_ETLBox_Helper_DataTypeConverterConfiguration_" data-uid="ETLBox.Helper.DataTypeConverter.ChangeType(System.Object,System.Type,ETLBox.Helper.DataTypeConverterConfiguration)">ChangeType(object, Type, DataTypeConverterConfiguration)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static object ChangeType(object value, Type destinationType, DataTypeConverterConfiguration configuration = null)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">destinationType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox.helper/datatypeconverterconfiguration">DataTypeConverterConfiguration</a></td>
        <td><span class="parametername">configuration</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_ChangeType_" data-uid="ETLBox.Helper.DataTypeConverter.ChangeType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_ChangeType__1_System_Object_" data-uid="ETLBox.Helper.DataTypeConverter.ChangeType``1(System.Object)">ChangeType&lt;T&gt;(object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static T ChangeType<T>(object value)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
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
        <td><span class="xref">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="typeParameters">Type Parameters</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="parametername">T</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_ConvertToDynamic_" data-uid="ETLBox.Helper.DataTypeConverter.ConvertToDynamic*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_ConvertToDynamic_System_Object_" data-uid="ETLBox.Helper.DataTypeConverter.ConvertToDynamic(System.Object)">ConvertToDynamic(object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static ExpandoObject ConvertToDynamic(object POCO)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">POCO</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.dynamic.expandoobject">ExpandoObject</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_DefaultValueToSqlConversionFunc_" data-uid="ETLBox.Helper.DataTypeConverter.DefaultValueToSqlConversionFunc*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_DefaultValueToSqlConversionFunc_ETLBox_Helper_ConversionContext_" data-uid="ETLBox.Helper.DataTypeConverter.DefaultValueToSqlConversionFunc(ETLBox.Helper.ConversionContext)">DefaultValueToSqlConversionFunc(ConversionContext)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string DefaultValueToSqlConversionFunc(ConversionContext conversionContext)
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
        <td><a class="xref" href="/api/etlbox.helper/conversioncontext">ConversionContext</a></td>
        <td><span class="parametername">conversionContext</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetClrType_" data-uid="ETLBox.Helper.DataTypeConverter.GetClrType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetClrType_System_Data_DbType_" data-uid="ETLBox.Helper.DataTypeConverter.GetClrType(System.Data.DbType)">GetClrType(DbType)</h4>
  <div class="markdown level1 summary"><p>Returns a .NET type for the provided DbType.
E.g. DbType.Binary will return byte[]</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Type GetClrType(DbType dbType)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.dbtype">DbType</a></td>
        <td><span class="parametername">dbType</span></td>
        <td><p>The DbType</p>
</td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><p>A .NET type</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetDatabaseType_" data-uid="ETLBox.Helper.DataTypeConverter.GetDatabaseType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetDatabaseType_ETLBox_ConnectionType_System_Type_" data-uid="ETLBox.Helper.DataTypeConverter.GetDatabaseType(ETLBox.ConnectionType,System.Type)">GetDatabaseType(ConnectionType, Type)</h4>
  <div class="markdown level1 summary"><p>Returns a database specific type for the provided .NET database type, depending on the connection
manager. E.g. passing the .NET data type long for SqlServer will return the string BIGINT .</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string GetDatabaseType(ConnectionType connectionType, Type clrType)
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
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>Database connection type, e.g. SqlServer</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">clrType</span></td>
        <td><p>The .NET data type</p>
</td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><p>A database specific type string</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetDbType_" data-uid="ETLBox.Helper.DataTypeConverter.GetDbType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetDbType_System_String_System_Boolean_" data-uid="ETLBox.Helper.DataTypeConverter.GetDbType(System.String,System.Boolean)">GetDbType(string, bool)</h4>
  <div class="markdown level1 summary"><p>Returns the ADO.NET System.Data.DbType object for a specific sql type.
E.g. the method would return the System.Data.DbType.String for the sql type 'CHAR(10)'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static DbType? GetDbType(string dbSpecificTypeName, bool isOdbcOrOleDb = false)
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
        <td><span class="parametername">dbSpecificTypeName</span></td>
        <td><p>The sql specific data type name</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">isOdbcOrOleDb</span></td>
        <td><p>Indicates if the target connection is either an Odbc or OleDb connection</p>
</td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.dbtype">DbType</a>?</td>
        <td><p>The corresponding ADO .NET database type</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetDbType_" data-uid="ETLBox.Helper.DataTypeConverter.GetDbType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetDbType_System_Type_" data-uid="ETLBox.Helper.DataTypeConverter.GetDbType(System.Type)">GetDbType(Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static DbType GetDbType(Type clrType)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">clrType</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.data.dbtype">DbType</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetStringLengthFromBinaryString_" data-uid="ETLBox.Helper.DataTypeConverter.GetStringLengthFromBinaryString*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetStringLengthFromBinaryString_System_String_" data-uid="ETLBox.Helper.DataTypeConverter.GetStringLengthFromBinaryString(System.String)">GetStringLengthFromBinaryString(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int GetStringLengthFromBinaryString(string value)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetStringLengthFromCharString_" data-uid="ETLBox.Helper.DataTypeConverter.GetStringLengthFromCharString*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetStringLengthFromCharString_System_String_" data-uid="ETLBox.Helper.DataTypeConverter.GetStringLengthFromCharString(System.String)">GetStringLengthFromCharString(string)</h4>
  <div class="markdown level1 summary"><p>Returns the string length that a sql char datatype has in it's definition.
E.g. VARCHAR(40) would return 40, NVARCHAR2 ( 2 ) returns 2</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static int GetStringLengthFromCharString(string value)
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
        <td><p>A sql character data type</p>
</td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><p>The string length defined in the data type - 0 if nothing could be found</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetTypeObject_" data-uid="ETLBox.Helper.DataTypeConverter.GetTypeObject*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetTypeObject_System_String_" data-uid="ETLBox.Helper.DataTypeConverter.GetTypeObject(System.String)">GetTypeObject(string)</h4>
  <div class="markdown level1 summary"><p>Returns the .NET type object for a specific sql type.
E.g. the method would return the .NET type string for the sql type 'CHAR(10)'</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Type GetTypeObject(string dbSpecificTypeName)
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
        <td><span class="parametername">dbSpecificTypeName</span></td>
        <td><p>The sql specific data type name</p>
</td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><p>The corresponding .NET data type</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_GetUnderlyingType_" data-uid="ETLBox.Helper.DataTypeConverter.GetUnderlyingType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_GetUnderlyingType_System_Type_" data-uid="ETLBox.Helper.DataTypeConverter.GetUnderlyingType(System.Type)">GetUnderlyingType(Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static Type GetUnderlyingType(Type type)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">type</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_IsNumericType_" data-uid="ETLBox.Helper.DataTypeConverter.IsNumericType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_IsNumericType_System_Type_" data-uid="ETLBox.Helper.DataTypeConverter.IsNumericType(System.Type)">IsNumericType(Type)</h4>
  <div class="markdown level1 summary"><p>Determines if a type is numeric.  Nullable numeric types are considered numeric.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static bool IsNumericType(Type type)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">type</span></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Helper_DataTypeConverter_IsNumericType_System_Type__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p>Boolean is not considered numeric.
<a href="http://stackoverflow.com/a/5182747/172132">http://stackoverflow.com/a/5182747/172132</a></p>
</div>
  <a id="ETLBox_Helper_DataTypeConverter_TryConvertAliasName_" data-uid="ETLBox.Helper.DataTypeConverter.TryConvertAliasName*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_TryConvertAliasName_System_String_ETLBox_ConnectionType_" data-uid="ETLBox.Helper.DataTypeConverter.TryConvertAliasName(System.String,ETLBox.ConnectionType)">TryConvertAliasName(string, ConnectionType)</h4>
  <div class="markdown level1 summary"><p>Converts a data type alias name (e.g. an alias name
like &quot;varchar(10)&quot; ) to the original database type name (&quot;character varying&quot;).</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string TryConvertAliasName(string dataTypeName, ConnectionType connectionType)
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
        <td><span class="parametername">dataTypeName</span></td>
        <td><p>The database alias type name</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>Which database (e.g. Postgres, MySql, ...)</p>
</td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><p>The type name converted to an original database type name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_TryConvertDbDataType_" data-uid="ETLBox.Helper.DataTypeConverter.TryConvertDbDataType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_TryConvertDbDataType_System_String_ETLBox_ConnectionType_" data-uid="ETLBox.Helper.DataTypeConverter.TryConvertDbDataType(System.String,ETLBox.ConnectionType)">TryConvertDbDataType(string, ConnectionType)</h4>
  <div class="markdown level1 summary"><p>Tries to convert the data type from the TableColumn into a database specific type.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string TryConvertDbDataType(string dataTypeName, ConnectionType connectionType)
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
        <td><span class="parametername">dataTypeName</span></td>
        <td><p>The specific type name from a table column</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>The database connection type</p>
</td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><p>The type used in the CREATE TABLE statement</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_DataTypeConverter_TryGetDbSpecificType_" data-uid="ETLBox.Helper.DataTypeConverter.TryGetDbSpecificType*"></a>
  <h4 id="ETLBox_Helper_DataTypeConverter_TryGetDbSpecificType_System_String_ETLBox_ConnectionType_" data-uid="ETLBox.Helper.DataTypeConverter.TryGetDbSpecificType(System.String,ETLBox.ConnectionType)">TryGetDbSpecificType(string, ConnectionType)</h4>
  <div class="markdown level1 summary"><p>Tries to convert the data type into a database specific type.
E.g. the data type 'INT' would be converted to 'INTEGER' for SQLite connections.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string TryGetDbSpecificType(string dataTypeName, ConnectionType connectionType)
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
        <td><span class="parametername">dataTypeName</span></td>
        <td><p>A data type name</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="/api/etlbox/connectiontype">ConnectionType</a></td>
        <td><span class="parametername">connectionType</span></td>
        <td><p>The database connection type</p>
</td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.string">string</a></td>
        <td><p>The converted database specific type name</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox/idatatypeconverter">IDataTypeConverter</a>
  </div>

{{< /rawhtml >}}
