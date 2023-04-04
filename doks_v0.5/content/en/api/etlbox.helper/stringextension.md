---
title: "StringExtension"
description: "Details for Class StringExtension (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10277
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.StringExtension">
  <h1 id="ETLBox_Helper_StringExtension" data-uid="ETLBox.Helper.StringExtension" class="text-break">Class StringExtension
</h1>
  <div class="markdown level0 summary"><p>Extension methods for strings</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">StringExtension</span></div>
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
  <h5 id="ETLBox_Helper_StringExtension_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public static class StringExtension
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_StringExtension_ReplaceIgnoreCase_" data-uid="ETLBox.Helper.StringExtension.ReplaceIgnoreCase*"></a>
  <h4 id="ETLBox_Helper_StringExtension_ReplaceIgnoreCase_System_String_System_String_System_String_" data-uid="ETLBox.Helper.StringExtension.ReplaceIgnoreCase(System.String,System.String,System.String)">ReplaceIgnoreCase(string, string, string)</h4>
  <div class="markdown level1 summary"><p>This replicates the functionality of case-insensitive functionality built into Replace in .Net Core.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public static string ReplaceIgnoreCase(this string toSearch, string find, string replace)
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
        <td><span class="parametername">toSearch</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">find</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">string</span></td>
        <td><span class="parametername">replace</span></td>
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
        <td><p>The string with replaced values</p>
</td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
