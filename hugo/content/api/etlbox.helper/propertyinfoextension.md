---
title: "PropertyInfoExtension"
description: "Details for Class PropertyInfoExtension (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10256
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.PropertyInfoExtension">
  <h1 id="ETLBox_Helper_PropertyInfoExtension" data-uid="ETLBox.Helper.PropertyInfoExtension" class="text-break">Class PropertyInfoExtension
  </h1>
  <div class="markdown level0 summary"><p>Reflection helper class that allows to directly set values in properties.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">PropertyInfoExtension</span></div>
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
  <h5 id="ETLBox_Helper_PropertyInfoExtension_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class PropertyInfoExtension
```

{{< rawhtml >}}
  <h3 id="methods">Methods
  </h3>
  <a id="ETLBox_Helper_PropertyInfoExtension_SetValueOrThrow_" data-uid="ETLBox.Helper.PropertyInfoExtension.SetValueOrThrow*"></a>
  <h4 id="ETLBox_Helper_PropertyInfoExtension_SetValueOrThrow_System_Reflection_PropertyInfo_System_Object_System_Object_" data-uid="ETLBox.Helper.PropertyInfoExtension.SetValueOrThrow(System.Reflection.PropertyInfo,System.Object,System.Object)">SetValueOrThrow(PropertyInfo, Object, Object)</h4>
  <div class="markdown level1 summary"><p>Sets a value in a property. If this is not possible, this method throws an exception.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void SetValueOrThrow(this PropertyInfo pi, object obj, object value)
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
        <td><p>The property info for the property</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span></td>
        <td><span class="parametername">obj</span></td>
        <td><p>The object that contains the property</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span></td>
        <td><span class="parametername">value</span></td>
        <td><p>The new value for the property</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_PropertyInfoExtension_TrySetValue_" data-uid="ETLBox.Helper.PropertyInfoExtension.TrySetValue*"></a>
  <h4 id="ETLBox_Helper_PropertyInfoExtension_TrySetValue_System_Reflection_PropertyInfo_System_Object_System_Object_System_Type_" data-uid="ETLBox.Helper.PropertyInfoExtension.TrySetValue(System.Reflection.PropertyInfo,System.Object,System.Object,System.Type)">TrySetValue(PropertyInfo, Object, Object, Type)</h4>
  <div class="markdown level1 summary"><p>Tries to set a value in a property. If not possible, it will do nothing.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="decalaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static void TrySetValue(this PropertyInfo pi, object obj, object value, Type enumType = null)
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
        <td><p>The property info for the property</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span></td>
        <td><span class="parametername">obj</span></td>
        <td><p>The object that contains the property</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Object</span></td>
        <td><span class="parametername">value</span></td>
        <td><p>The new value for the property</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">System.Type</span></td>
        <td><span class="parametername">enumType</span></td>
        <td><p>If the property is an enum type, this will need special handling - pass the enum type here. Default value is null.</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
