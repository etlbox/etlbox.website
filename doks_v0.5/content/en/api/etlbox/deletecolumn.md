---
title: "DeleteColumn"
description: "Details for Class DeleteColumn (ETLBox)"
draft: false
images: []
menu:
  api:
    parent: "etlbox"
weight: 10155
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DeleteColumn">
  <h1 id="ETLBox_DeleteColumn" data-uid="ETLBox.DeleteColumn" class="text-break">Class DeleteColumn
</h1>
  <div class="markdown level0 summary"><p>This attribute defines if the column is used to identify if the record is supposed to be deleted.
If this attribute is set and the given value matches the column of the assigned property,
the DbMerge will know that if the records matches (identifed by the IdColumn attribute)
it should be deleted.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">System.Attribute</span></div>
    <div class="level2"><span class="xref">DeleteColumn</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Attribute.Equals(object)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Assembly, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Module, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetHashCode()</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefaultAttribute()</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Assembly, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Module, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type, bool)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.Match(object)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.TypeId</span>
    </div>
    <div>
      <span class="xref">object.Equals(object, object)</span>
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
<h6><strong>Namespace</strong>: ETLBox</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DeleteColumn_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    [AttributeUsage(AttributeTargets.Property)]
public sealed class DeleteColumn : Attribute
```

{{< rawhtml >}}
  <h5 id="ETLBox_DeleteColumn_examples"><strong>Examples</strong></h5>
  <p>public class MyPoco : MergeableRow
{
[IdColumn]
public int Key { get; set; }
[UpdateColumn]
public string Value {get;set; }
[DeleteColumn(true)]
public bool IsDeletion {get;set; }
}</p>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DeleteColumn__ctor_" data-uid="ETLBox.DeleteColumn.#ctor*"></a>
  <h4 id="ETLBox_DeleteColumn__ctor" data-uid="ETLBox.DeleteColumn.#ctor">DeleteColumn()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DeleteColumn()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DeleteColumn__ctor_examples">Examples</h5>
  <p>public class MyPoco : MergeableRow
{
[IdColumn]
public int Key { get; set; }
[UpdateColumn]
public string Value {get;set; }
[DeleteColumn(true)]
public bool IsDeletion {get;set; }
}</p>
  <a id="ETLBox_DeleteColumn__ctor_" data-uid="ETLBox.DeleteColumn.#ctor*"></a>
  <h4 id="ETLBox_DeleteColumn__ctor_System_Object_" data-uid="ETLBox.DeleteColumn.#ctor(System.Object)">DeleteColumn(object)</h4>
  <div class="markdown level1 summary"><p>Marks this property as column that is deleted if is equal the  <a class="xref" href="/api/etlbox/deletecolumn#ETLBox_DeleteColumn_DeleteOnMatchValue">DeleteOnMatchValue</a>.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public DeleteColumn(object deleteOnMatchValue)
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
        <td><span class="xref">object</span></td>
        <td><span class="parametername">deleteOnMatchValue</span></td>
        <td><p>To be value for the property that identifes the row as deletion</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DeleteColumn_DeleteOnMatchValue_" data-uid="ETLBox.DeleteColumn.DeleteOnMatchValue*"></a>
  <h4 id="ETLBox_DeleteColumn_DeleteOnMatchValue" data-uid="ETLBox.DeleteColumn.DeleteOnMatchValue">DeleteOnMatchValue</h4>
  <div class="markdown level1 summary"><p>Marks this property as column used for a deletion check in a Merge operation</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public object DeleteOnMatchValue { get; set; }
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
        <td><span class="xref">object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_DeleteColumn_DeletePropertyName_" data-uid="ETLBox.DeleteColumn.DeletePropertyName*"></a>
  <h4 id="ETLBox_DeleteColumn_DeletePropertyName" data-uid="ETLBox.DeleteColumn.DeletePropertyName">DeletePropertyName</h4>
  <div class="markdown level1 summary"><p>Name of the property that is used to decide if a row is deleted</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string DeletePropertyName { get; set; }
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

{{< /rawhtml >}}