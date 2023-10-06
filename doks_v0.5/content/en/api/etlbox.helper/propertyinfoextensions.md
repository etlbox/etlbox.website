---
title: "PropertyInfoExtensions"
description: "Details for Class PropertyInfoExtensions (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10193
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.PropertyInfoExtensions">
  <h1 id="ETLBox_Helper_PropertyInfoExtensions" data-uid="ETLBox.Helper.PropertyInfoExtensions" class="text-break">Class PropertyInfoExtensions
</h1>
  <div class="markdown level0 summary"><p>Reflection helper class that allows to directly set values in properties.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">PropertyInfoExtensions</span></div>
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
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_PropertyInfoExtensions_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class PropertyInfoExtensions
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_PropertyInfoExtensions_SetValueByType_" data-uid="ETLBox.Helper.PropertyInfoExtensions.SetValueByType*"></a>
  <h4 id="ETLBox_Helper_PropertyInfoExtensions_SetValueByType_System_Reflection_PropertyInfo_System_Object_System_Object_System_Type_" data-uid="ETLBox.Helper.PropertyInfoExtensions.SetValueByType(System.Reflection.PropertyInfo,System.Object,System.Object,System.Type)">SetValueByType(PropertyInfo, object, object, Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void SetValueByType(this PropertyInfo pi, object obj, object value, Type enumType)
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
        <td><span class="xref">System.Reflection.PropertyInfo</span></td>
        <td><span class="parametername">pi</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">obj</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Type</span></td>
        <td><span class="parametername">enumType</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
