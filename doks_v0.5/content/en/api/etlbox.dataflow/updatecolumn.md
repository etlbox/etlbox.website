---
title: "UpdateColumn"
description: "Details for Class UpdateColumn (ETLBox.DataFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.dataflow"
weight: 10253
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.DataFlow.UpdateColumn">
  <h1 id="ETLBox_DataFlow_UpdateColumn" data-uid="ETLBox.DataFlow.UpdateColumn" class="text-break">Class UpdateColumn
</h1>
  <div class="markdown level0 summary"><p>This attribute defines if a column in the destination is updated.
Use the IdColumn attribute to define if a row in the destination matches with your object.
If they match, you can use the UpdateColumn to describe which columns
are actually updated. This is optional - if you don't provide any update columns,
by default all non id columns are updated.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">System.Attribute</span></div>
    <div class="level2"><span class="xref">UpdateColumn</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">System.Attribute.Equals(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Assembly, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.MemberInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.Module, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttribute(System.Reflection.ParameterInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Assembly, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.MemberInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.Module, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.GetCustomAttributes(System.Reflection.ParameterInfo, System.Type, System.Boolean)</span>
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
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Assembly, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.MemberInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Module, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.Module, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.IsDefined(System.Reflection.ParameterInfo, System.Type, System.Boolean)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.Match(System.Object)</span>
    </div>
    <div>
      <span class="xref">System.Attribute.TypeId</span>
    </div>
    <div>
      <span class="xref">System.Object.Equals(System.Object, System.Object)</span>
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
<h6><strong>Namespace</strong>: ETLBox.DataFlow</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_DataFlow_UpdateColumn_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    [AttributeUsage(AttributeTargets.Property)]
public sealed class UpdateColumn : Attribute
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_UpdateColumn_examples"><strong>Examples</strong></h5>
  <p>public class MyPoco
{
[IdColumn]
public int Key { get; set; }
[UpdateColumn]
public string ValueToUpdate { get;set; }
public string IgnoredValue { get;set; }
}</p>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_DataFlow_UpdateColumn__ctor_" data-uid="ETLBox.DataFlow.UpdateColumn.#ctor*"></a>
  <h4 id="ETLBox_DataFlow_UpdateColumn__ctor" data-uid="ETLBox.DataFlow.UpdateColumn.#ctor">UpdateColumn()</h4>
  <div class="markdown level1 summary"><p>This attribute defines if a column in the destination is updated.
Use the IdColumn attribute to define if a row in the destination matches with your object.
If they match, you can use the UpdateColumn to describe which columns
are actually updated. This is optional - if you don't provide any update columns,
by default all non id columns are updated.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public UpdateColumn()
```

{{< rawhtml >}}
  <h5 id="ETLBox_DataFlow_UpdateColumn__ctor_examples">Examples</h5>
  <p>public class MyPoco
{
[IdColumn]
public int Key { get; set; }
[UpdateColumn]
public string ValueToUpdate { get;set; }
public string IgnoredValue { get;set; }
}</p>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_DataFlow_UpdateColumn_UpdatePropertyName_" data-uid="ETLBox.DataFlow.UpdateColumn.UpdatePropertyName*"></a>
  <h4 id="ETLBox_DataFlow_UpdateColumn_UpdatePropertyName" data-uid="ETLBox.DataFlow.UpdateColumn.UpdatePropertyName">UpdatePropertyName</h4>
  <div class="markdown level1 summary"><p>Name of the property that is used in the update</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public string UpdatePropertyName { get; set; }
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

{{< /rawhtml >}}
