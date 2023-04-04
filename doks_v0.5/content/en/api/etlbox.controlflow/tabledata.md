---
title: "TableData"
description: "Details for Class TableData (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10051
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.TableData">
  <h1 id="ETLBox_ControlFlow_TableData" data-uid="ETLBox.ControlFlow.TableData" class="text-break">Class TableData
</h1>
  <div class="markdown level0 summary"><p>Defines a list of rows that can be inserted into a table</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">TableData</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a></div>
    <div><span class="xref">System.Data.IDataReader</span></div>
    <div><span class="xref">System.Data.IDataRecord</span></div>
    <div><span class="xref">System.IDisposable</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">object.Equals(object)</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">object.GetType()</span>
    </div>
    <div>
      <span class="xref">object.MemberwiseClone()</span>
    </div>
    <div>
      <span class="xref">object.ReferenceEquals(object, object)</span>
    </div>
    <div>
      <span class="xref">object.ToString()</span>
    </div>
  </div>
<h6><strong>Namespace</strong>: ETLBox.ControlFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_ControlFlow_TableData_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class TableData : ITableData, IDataReader, IDataRecord, IDisposable
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_ControlFlow_TableData__ctor_" data-uid="ETLBox.ControlFlow.TableData.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableData__ctor_ETLBox_ControlFlow_TableDefinition_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.#ctor(ETLBox.ControlFlow.TableDefinition,System.Int32)">TableData(TableDefinition, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableData(TableDefinition definition, int estimatedBatchSize)
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">estimatedBatchSize</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData__ctor_" data-uid="ETLBox.ControlFlow.TableData.#ctor*"></a>
  <h4 id="ETLBox_ControlFlow_TableData__ctor_ETLBox_ControlFlow_TableDefinition_" data-uid="ETLBox.ControlFlow.TableData.#ctor(ETLBox.ControlFlow.TableDefinition)">TableData(TableDefinition)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableData(TableDefinition definition)
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
        <td><a class="xref" href="/api/etlbox.controlflow/tabledefinition">TableDefinition</a></td>
        <td><span class="parametername">definition</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_ControlFlow_TableData_AllowIdentityInsert_" data-uid="ETLBox.ControlFlow.TableData.AllowIdentityInsert*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_AllowIdentityInsert" data-uid="ETLBox.ControlFlow.TableData.AllowIdentityInsert">AllowIdentityInsert</h4>
  <div class="markdown level1 summary"><p>If set to true, the connection manager will try to enable identity inserts for the corresponding table (not supported by every database)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool AllowIdentityInsert { get; set; }
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
  <a id="ETLBox_ControlFlow_TableData_ColumnConverters_" data-uid="ETLBox.ControlFlow.TableData.ColumnConverters*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_ColumnConverters" data-uid="ETLBox.ControlFlow.TableData.ColumnConverters">ColumnConverters</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Dictionary<string, Func<object, object>> ColumnConverters { get; set; }
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
        <td><span class="xref">System.Collections.Generic.Dictionary&lt;TKey, TValue&gt;</span>&lt;<span class="xref">string</span>, <span class="xref">System.Func&lt;T, TResult&gt;</span>&lt;<span class="xref">object</span>, <span class="xref">object</span>&gt;&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_ColumnMapping_" data-uid="ETLBox.ControlFlow.TableData.ColumnMapping*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_ColumnMapping" data-uid="ETLBox.ControlFlow.TableData.ColumnMapping">ColumnMapping</h4>
  <div class="markdown level1 summary"><p>The column mapping</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IColumnMappingCollection ColumnMapping { get; }
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
  <a id="ETLBox_ControlFlow_TableData_CurrentRow_" data-uid="ETLBox.ControlFlow.TableData.CurrentRow*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_CurrentRow" data-uid="ETLBox.ControlFlow.TableData.CurrentRow">CurrentRow</h4>
  <div class="markdown level1 summary"><p>The row that is currently processed when accessing the data reader</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object[] CurrentRow { get; }
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
  <a id="ETLBox_ControlFlow_TableData_DataIndexForColumn_" data-uid="ETLBox.ControlFlow.TableData.DataIndexForColumn*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_DataIndexForColumn" data-uid="ETLBox.ControlFlow.TableData.DataIndexForColumn">DataIndexForColumn</h4>
  <div class="markdown level1 summary"><p>Resolves the index number for a column name</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Dictionary<string, int> DataIndexForColumn { get; set; }
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
  <a id="ETLBox_ControlFlow_TableData_Definition_" data-uid="ETLBox.ControlFlow.TableData.Definition*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Definition" data-uid="ETLBox.ControlFlow.TableData.Definition">Definition</h4>
  <div class="markdown level1 summary"><p>Definition of the destination table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableDefinition Definition { get; }
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
  <a id="ETLBox_ControlFlow_TableData_Depth_" data-uid="ETLBox.ControlFlow.TableData.Depth*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Depth" data-uid="ETLBox.ControlFlow.TableData.Depth">Depth</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int Depth { get; }
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
  <a id="ETLBox_ControlFlow_TableData_DestinationTableName_" data-uid="ETLBox.ControlFlow.TableData.DestinationTableName*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_DestinationTableName" data-uid="ETLBox.ControlFlow.TableData.DestinationTableName">DestinationTableName</h4>
  <div class="markdown level1 summary"><p>The name of the destination table</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DestinationTableName { get; }
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
  <a id="ETLBox_ControlFlow_TableData_FieldCount_" data-uid="ETLBox.ControlFlow.TableData.FieldCount*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_FieldCount" data-uid="ETLBox.ControlFlow.TableData.FieldCount">FieldCount</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int FieldCount { get; }
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
  <a id="ETLBox_ControlFlow_TableData_IsClosed_" data-uid="ETLBox.ControlFlow.TableData.IsClosed*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_IsClosed" data-uid="ETLBox.ControlFlow.TableData.IsClosed">IsClosed</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsClosed { get; }
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
  <a id="ETLBox_ControlFlow_TableData_Item_" data-uid="ETLBox.ControlFlow.TableData.Item*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Item_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.Item(System.Int32)">this[int]</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object this[int i] { get; }
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_Item_" data-uid="ETLBox.ControlFlow.TableData.Item*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Item_System_String_" data-uid="ETLBox.ControlFlow.TableData.Item(System.String)">this[string]</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object this[string name] { get; }
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
        <td><span class="parametername">name</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
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
        <td><span class="xref">object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_KeepIdentity_" data-uid="ETLBox.ControlFlow.TableData.KeepIdentity*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_KeepIdentity" data-uid="ETLBox.ControlFlow.TableData.KeepIdentity">KeepIdentity</h4>
  <div class="markdown level1 summary"><p>By default, identity columns are included. If set to false, identity columns will be ignored</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool KeepIdentity { get; set; }
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
  <a id="ETLBox_ControlFlow_TableData_ReadIndex_" data-uid="ETLBox.ControlFlow.TableData.ReadIndex*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_ReadIndex" data-uid="ETLBox.ControlFlow.TableData.ReadIndex">ReadIndex</h4>
  <div class="markdown level1 summary"><p>The row index of the current row</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int ReadIndex { get; }
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
  <a id="ETLBox_ControlFlow_TableData_RecordsAffected_" data-uid="ETLBox.ControlFlow.TableData.RecordsAffected*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_RecordsAffected" data-uid="ETLBox.ControlFlow.TableData.RecordsAffected">RecordsAffected</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int RecordsAffected { get; }
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
  <a id="ETLBox_ControlFlow_TableData_Rows_" data-uid="ETLBox.ControlFlow.TableData.Rows*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Rows" data-uid="ETLBox.ControlFlow.TableData.Rows">Rows</h4>
  <div class="markdown level1 summary"><p>Rows/Columns ready for bulk insert</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<object[]> Rows { get; set; }
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
  <a id="ETLBox_ControlFlow_TableData_ValueGeneratedColumnData_" data-uid="ETLBox.ControlFlow.TableData.ValueGeneratedColumnData*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_ValueGeneratedColumnData" data-uid="ETLBox.ControlFlow.TableData.ValueGeneratedColumnData">ValueGeneratedColumnData</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public SortedList<int, object[]> ValueGeneratedColumnData { get; set; }
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
  <a id="ETLBox_ControlFlow_TableData_ValueGeneratedColumnNames_" data-uid="ETLBox.ControlFlow.TableData.ValueGeneratedColumnNames*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_ValueGeneratedColumnNames" data-uid="ETLBox.ControlFlow.TableData.ValueGeneratedColumnNames">ValueGeneratedColumnNames</h4>
  <div class="markdown level1 summary"><p>A collection of all column names that are value generated columns (e.g. columns with a COMPUTED or DEFAULT value)</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ICollection<string> ValueGeneratedColumnNames { get; set; }
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
  <a id="ETLBox_ControlFlow_TableData_AddSequenceColumn_" data-uid="ETLBox.ControlFlow.TableData.AddSequenceColumn*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_AddSequenceColumn_System_String_" data-uid="ETLBox.ControlFlow.TableData.AddSequenceColumn(System.String)">AddSequenceColumn(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void AddSequenceColumn(string sequenceColumnName)
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
        <td><span class="parametername">sequenceColumnName</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_Close_" data-uid="ETLBox.ControlFlow.TableData.Close*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Close" data-uid="ETLBox.ControlFlow.TableData.Close">Close()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Close()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_TableData_Dispose_" data-uid="ETLBox.ControlFlow.TableData.Dispose*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Dispose" data-uid="ETLBox.ControlFlow.TableData.Dispose">Dispose()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void Dispose()
```

{{< rawhtml >}}
  <a id="ETLBox_ControlFlow_TableData_Dispose_" data-uid="ETLBox.ControlFlow.TableData.Dispose*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Dispose_System_Boolean_" data-uid="ETLBox.ControlFlow.TableData.Dispose(System.Boolean)">Dispose(bool)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    protected virtual void Dispose(bool disposing)
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
        <td><span class="xref">bool</span></td>
        <td><span class="parametername">disposing</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetBoolean_" data-uid="ETLBox.ControlFlow.TableData.GetBoolean*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetBoolean_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetBoolean(System.Int32)">GetBoolean(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool GetBoolean(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetByte_" data-uid="ETLBox.ControlFlow.TableData.GetByte*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetByte_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetByte(System.Int32)">GetByte(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public byte GetByte(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">byte</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetBytes_" data-uid="ETLBox.ControlFlow.TableData.GetBytes*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetBytes_System_Int32_System_Int64_System_Byte___System_Int32_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetBytes(System.Int32,System.Int64,System.Byte[],System.Int32,System.Int32)">GetBytes(int, long, byte[], int, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public long GetBytes(int i, long fieldOffset, byte[] buffer, int bufferoffset, int length)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">long</span></td>
        <td><span class="parametername">fieldOffset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">byte</span>[]</td>
        <td><span class="parametername">buffer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">bufferoffset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">length</span></td>
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
        <td><span class="xref">long</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetChar_" data-uid="ETLBox.ControlFlow.TableData.GetChar*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetChar_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetChar(System.Int32)">GetChar(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public char GetChar(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">char</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetChars_" data-uid="ETLBox.ControlFlow.TableData.GetChars*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetChars_System_Int32_System_Int64_System_Char___System_Int32_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetChars(System.Int32,System.Int64,System.Char[],System.Int32,System.Int32)">GetChars(int, long, char[], int, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public long GetChars(int i, long fieldoffset, char[] buffer, int bufferoffset, int length)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">long</span></td>
        <td><span class="parametername">fieldoffset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">char</span>[]</td>
        <td><span class="parametername">buffer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">bufferoffset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">int</span></td>
        <td><span class="parametername">length</span></td>
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
        <td><span class="xref">long</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetData_" data-uid="ETLBox.ControlFlow.TableData.GetData*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetData_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetData(System.Int32)">GetData(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IDataReader GetData(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">System.Data.IDataReader</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetDataTypeName_" data-uid="ETLBox.ControlFlow.TableData.GetDataTypeName*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetDataTypeName_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetDataTypeName(System.Int32)">GetDataTypeName(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string GetDataTypeName(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetDataTypeName_" data-uid="ETLBox.ControlFlow.TableData.GetDataTypeName*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetDataTypeName_System_String_" data-uid="ETLBox.ControlFlow.TableData.GetDataTypeName(System.String)">GetDataTypeName(string)</h4>
  <div class="markdown level1 summary"><p>Resolves the data type name for a column</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string GetDataTypeName(string columnName)
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
  <a id="ETLBox_ControlFlow_TableData_GetDateTime_" data-uid="ETLBox.ControlFlow.TableData.GetDateTime*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetDateTime_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetDateTime(System.Int32)">GetDateTime(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DateTime GetDateTime(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">System.DateTime</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetDecimal_" data-uid="ETLBox.ControlFlow.TableData.GetDecimal*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetDecimal_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetDecimal(System.Int32)">GetDecimal(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public decimal GetDecimal(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">decimal</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetDouble_" data-uid="ETLBox.ControlFlow.TableData.GetDouble*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetDouble_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetDouble(System.Int32)">GetDouble(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public double GetDouble(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">double</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetFieldType_" data-uid="ETLBox.ControlFlow.TableData.GetFieldType*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetFieldType_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetFieldType(System.Int32)">GetFieldType(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Type GetFieldType(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">System.Type</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetFloat_" data-uid="ETLBox.ControlFlow.TableData.GetFloat*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetFloat_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetFloat(System.Int32)">GetFloat(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public float GetFloat(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">float</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetGuid_" data-uid="ETLBox.ControlFlow.TableData.GetGuid*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetGuid_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetGuid(System.Int32)">GetGuid(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public Guid GetGuid(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">System.Guid</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetInt16_" data-uid="ETLBox.ControlFlow.TableData.GetInt16*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetInt16_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetInt16(System.Int32)">GetInt16(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public short GetInt16(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">short</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetInt32_" data-uid="ETLBox.ControlFlow.TableData.GetInt32*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetInt32_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetInt32(System.Int32)">GetInt32(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int GetInt32(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetInt64_" data-uid="ETLBox.ControlFlow.TableData.GetInt64*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetInt64_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetInt64(System.Int32)">GetInt64(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public long GetInt64(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">long</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetName_" data-uid="ETLBox.ControlFlow.TableData.GetName*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetName_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetName(System.Int32)">GetName(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string GetName(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetOrdinal_" data-uid="ETLBox.ControlFlow.TableData.GetOrdinal*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetOrdinal_System_String_" data-uid="ETLBox.ControlFlow.TableData.GetOrdinal(System.String)">GetOrdinal(string)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int GetOrdinal(string name)
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
        <td><span class="parametername">name</span></td>
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetSchemaTable_" data-uid="ETLBox.ControlFlow.TableData.GetSchemaTable*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetSchemaTable" data-uid="ETLBox.ControlFlow.TableData.GetSchemaTable">GetSchemaTable()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DataTable GetSchemaTable()
```

{{< rawhtml >}}
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
        <td><span class="xref">System.Data.DataTable</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetString_" data-uid="ETLBox.ControlFlow.TableData.GetString*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetString_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetString(System.Int32)">GetString(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string GetString(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">string</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetTableColumn_" data-uid="ETLBox.ControlFlow.TableData.GetTableColumn*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetTableColumn_System_String_" data-uid="ETLBox.ControlFlow.TableData.GetTableColumn(System.String)">GetTableColumn(string)</h4>
  <div class="markdown level1 summary"><p>Resolves the column in the table definition</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TableColumn GetTableColumn(string columnName)
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
  <a id="ETLBox_ControlFlow_TableData_GetValue_" data-uid="ETLBox.ControlFlow.TableData.GetValue*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetValue_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.GetValue(System.Int32)">GetValue(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object GetValue(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_GetValues_" data-uid="ETLBox.ControlFlow.TableData.GetValues*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_GetValues_System_Object___" data-uid="ETLBox.ControlFlow.TableData.GetValues(System.Object[])">GetValues(object[])</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public int GetValues(object[] values)
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
        <td><span class="xref">object</span>[]</td>
        <td><span class="parametername">values</span></td>
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
        <td><span class="xref">int</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_IsDBNull_" data-uid="ETLBox.ControlFlow.TableData.IsDBNull*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_IsDBNull_System_Int32_" data-uid="ETLBox.ControlFlow.TableData.IsDBNull(System.Int32)">IsDBNull(int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool IsDBNull(int i)
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
        <td><span class="xref">int</span></td>
        <td><span class="parametername">i</span></td>
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_NextResult_" data-uid="ETLBox.ControlFlow.TableData.NextResult*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_NextResult" data-uid="ETLBox.ControlFlow.TableData.NextResult">NextResult()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool NextResult()
```

{{< rawhtml >}}
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_Read_" data-uid="ETLBox.ControlFlow.TableData.Read*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_Read" data-uid="ETLBox.ControlFlow.TableData.Read">Read()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public bool Read()
```

{{< rawhtml >}}
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
        <td><span class="xref">bool</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_ControlFlow_TableData_RewindReadIndex_" data-uid="ETLBox.ControlFlow.TableData.RewindReadIndex*"></a>
  <h4 id="ETLBox_ControlFlow_TableData_RewindReadIndex" data-uid="ETLBox.ControlFlow.TableData.RewindReadIndex">RewindReadIndex()</h4>
  <div class="markdown level1 summary"><p>The IDataReader is iterated via the Read() method - once the last record was read,
the Read() will return false. If you want to iterate again, you can use
this method to &quot;rewind&quot; and start with the first record again.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public void RewindReadIndex()
```

{{< rawhtml >}}
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="/api/etlbox.controlflow/itabledata">ITableData</a>
  </div>
  <div>
      <span class="xref">System.Data.IDataReader</span>
  </div>
  <div>
      <span class="xref">System.Data.IDataRecord</span>
  </div>
  <div>
      <span class="xref">System.IDisposable</span>
  </div>

{{< /rawhtml >}}
