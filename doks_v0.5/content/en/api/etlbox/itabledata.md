---
title: "ITableData"
description: "Details for Interface ITableData (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10204
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ITableData">
  <h1 id="ETLBox_ITableData" data-uid="ETLBox.ITableData" class="text-break">Interface ITableData
</h1>
  <div class="markdown level0 summary"><p>A list of rows and a column mapping ready for bulk insert</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Data.IDataReader.Close()</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataReader.GetSchemaTable()</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataReader.NextResult()</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataReader.Read()</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataReader.Depth</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataReader.IsClosed</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataReader.RecordsAffected</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetBoolean(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetByte(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetBytes(int, long, byte[], int, int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetChar(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetChars(int, long, char[], int, int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetData(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetDataTypeName(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetDateTime(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetDecimal(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetDouble(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetFieldType(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetFloat(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetGuid(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetInt16(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetInt32(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetInt64(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetName(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetOrdinal(string)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetString(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetValue(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.GetValues(object[])</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.IsDBNull(int)</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.FieldCount</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.this[int]</span>
    </div>
    <div>
      <span class="xref">System.Data.IDataRecord.this[string]</span>
    </div>
    <div>
      <span class="xref">System.IDisposable.Dispose()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ITableData_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public interface ITableData : IDataReader, IDataRecord, IDisposable
```

{{< rawhtml >}}
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ITableData_AllowIdentityInsert_" data-uid="ETLBox.ITableData.AllowIdentityInsert*"></a>
  <h4 id="ETLBox_ITableData_AllowIdentityInsert" data-uid="ETLBox.ITableData.AllowIdentityInsert">AllowIdentityInsert</h4>
  <div class="markdown level1 summary"><p>If set to true, the connection manager will try to enable identity inserts for the corresponding table (not supported by every database)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool AllowIdentityInsert { get; set; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_ColumnMapping_" data-uid="ETLBox.ITableData.ColumnMapping*"></a>
  <h4 id="ETLBox_ITableData_ColumnMapping" data-uid="ETLBox.ITableData.ColumnMapping">ColumnMapping</h4>
  <div class="markdown level1 summary"><p>The column mapping</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    IColumnMappingCollection ColumnMapping { get; }
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
        <td><span class="xref">System.Data.IColumnMappingCollection</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_CurrentRow_" data-uid="ETLBox.ITableData.CurrentRow*"></a>
  <h4 id="ETLBox_ITableData_CurrentRow" data-uid="ETLBox.ITableData.CurrentRow">CurrentRow</h4>
  <div class="markdown level1 summary"><p>The row that is currently processed when accessing the data reader</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    object[] CurrentRow { get; }
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
        <td><span class="xref">object</span>[]</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_DataIndexForColumn_" data-uid="ETLBox.ITableData.DataIndexForColumn*"></a>
  <h4 id="ETLBox_ITableData_DataIndexForColumn" data-uid="ETLBox.ITableData.DataIndexForColumn">DataIndexForColumn</h4>
  <div class="markdown level1 summary"><p>Resolves the index number for a column name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    Dictionary<string, int> DataIndexForColumn { get; }
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
        <td><span class="xref">System.Collections.Generic.Dictionary&lt;TKey, TValue&gt;</span>&lt;<span class="xref">string</span>, <span class="xref">int</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_Definition_" data-uid="ETLBox.ITableData.Definition*"></a>
  <h4 id="ETLBox_ITableData_Definition" data-uid="ETLBox.ITableData.Definition">Definition</h4>
  <div class="markdown level1 summary"><p>Definition of the destination table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    TableDefinition Definition { get; }
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_DestinationTableName_" data-uid="ETLBox.ITableData.DestinationTableName*"></a>
  <h4 id="ETLBox_ITableData_DestinationTableName" data-uid="ETLBox.ITableData.DestinationTableName">DestinationTableName</h4>
  <div class="markdown level1 summary"><p>The name of the destination table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string DestinationTableName { get; }
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
  <a id="ETLBox_ITableData_KeepIdentity_" data-uid="ETLBox.ITableData.KeepIdentity*"></a>
  <h4 id="ETLBox_ITableData_KeepIdentity" data-uid="ETLBox.ITableData.KeepIdentity">KeepIdentity</h4>
  <div class="markdown level1 summary"><p>By default, identity columns are included. If set to false, identity columns will be ignored</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    bool KeepIdentity { get; set; }
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_ReadIndex_" data-uid="ETLBox.ITableData.ReadIndex*"></a>
  <h4 id="ETLBox_ITableData_ReadIndex" data-uid="ETLBox.ITableData.ReadIndex">ReadIndex</h4>
  <div class="markdown level1 summary"><p>The row index of the current row</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    int ReadIndex { get; }
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_Rows_" data-uid="ETLBox.ITableData.Rows*"></a>
  <h4 id="ETLBox_ITableData_Rows" data-uid="ETLBox.ITableData.Rows">Rows</h4>
  <div class="markdown level1 summary"><p>Rows/Columns ready for bulk insert</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    List<object[]> Rows { get; set; }
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
        <td><span class="xref">System.Collections.Generic.List&lt;T&gt;</span>&lt;<span class="xref">object</span>[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_ValueGeneratedColumnData_" data-uid="ETLBox.ITableData.ValueGeneratedColumnData*"></a>
  <h4 id="ETLBox_ITableData_ValueGeneratedColumnData" data-uid="ETLBox.ITableData.ValueGeneratedColumnData">ValueGeneratedColumnData</h4>
  <div class="markdown level1 summary"><p>A sorted list which contains data for each value generated column (the order in the object array is
the same as defined in <a class="xref" href="/api/etlbox/itabledata#ETLBox_ITableData_ValueGeneratedColumnNames">ValueGeneratedColumnNames</a>).
The key of the list is a unique sequence number, and the order matches also to each entry in the <a class="xref" href="/api/etlbox/itabledata#ETLBox_ITableData_Rows">Rows</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    SortedList<int, object[]> ValueGeneratedColumnData { get; set; }
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
        <td><span class="xref">System.Collections.Generic.SortedList&lt;TKey, TValue&gt;</span>&lt;<span class="xref">int</span>, <span class="xref">object</span>[]&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_ValueGeneratedColumnNames_" data-uid="ETLBox.ITableData.ValueGeneratedColumnNames*"></a>
  <h4 id="ETLBox_ITableData_ValueGeneratedColumnNames" data-uid="ETLBox.ITableData.ValueGeneratedColumnNames">ValueGeneratedColumnNames</h4>
  <div class="markdown level1 summary"><p>A collection of all column names that are value generated columns (e.g. columns with a COMPUTED or DEFAULT value)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    ICollection<string> ValueGeneratedColumnNames { get; }
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
        <td><span class="xref">System.Collections.Generic.ICollection&lt;T&gt;</span>&lt;<span class="xref">string</span>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_ITableData_AddSequenceColumn_" data-uid="ETLBox.ITableData.AddSequenceColumn*"></a>
  <h4 id="ETLBox_ITableData_AddSequenceColumn_System_String_" data-uid="ETLBox.ITableData.AddSequenceColumn(System.String)">AddSequenceColumn(string)</h4>
  <div class="markdown level1 summary"><p>Allows to name a column that is specifically used as a sequence column. The column will then be treated differently.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void AddSequenceColumn(string columnName)
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
        <td><span class="parametername">columnName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_GetDataTypeName_" data-uid="ETLBox.ITableData.GetDataTypeName*"></a>
  <h4 id="ETLBox_ITableData_GetDataTypeName_System_String_" data-uid="ETLBox.ITableData.GetDataTypeName(System.String)">GetDataTypeName(string)</h4>
  <div class="markdown level1 summary"><p>Resolves the data type name for a column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    string GetDataTypeName(string columnName)
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
        <td><span class="parametername">columnName</span></td>
        <td><p>Column name</p>
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
        <td><span class="xref">string</span></td>
        <td><p>Data type name</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_GetTableColumn_" data-uid="ETLBox.ITableData.GetTableColumn*"></a>
  <h4 id="ETLBox_ITableData_GetTableColumn_System_String_" data-uid="ETLBox.ITableData.GetTableColumn(System.String)">GetTableColumn(string)</h4>
  <div class="markdown level1 summary"><p>Resolves the column in the table definition</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    TableColumn GetTableColumn(string columnName)
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
        <td><span class="parametername">columnName</span></td>
        <td><p>Column name</p>
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
        <td><a class="xref" href="/api/etlbox.controlflow/tablecolumn">TableColumn</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ITableData_RewindReadIndex_" data-uid="ETLBox.ITableData.RewindReadIndex*"></a>
  <h4 id="ETLBox_ITableData_RewindReadIndex" data-uid="ETLBox.ITableData.RewindReadIndex">RewindReadIndex()</h4>
  <div class="markdown level1 summary"><p>The IDataReader is iterated via the Read() method - once the last record was read,
the Read() will return false. If you want to iterate again, you can use
this method to &quot;rewind&quot; and start with the first record again.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    void RewindReadIndex()
```

{{< rawhtml >}}

{{< /rawhtml >}}
