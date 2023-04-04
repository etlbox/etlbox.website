---
title: "ExpandoJsonPathConverter"
description: "Details for Class ExpandoJsonPathConverter (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10266
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.ExpandoJsonPathConverter">
  <h1 id="ETLBox_Helper_ExpandoJsonPathConverter" data-uid="ETLBox.Helper.ExpandoJsonPathConverter" class="text-break">Class ExpandoJsonPathConverter
</h1>
  <div class="markdown level0 summary"><p>Allows to pass JsonPath string that are applied for particular property names - this will work one on the first level
of the</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">object</span></div>
    <div class="level1"><span class="xref">Newtonsoft.Json.JsonConverter</span></div>
    <div class="level2"><span class="xref">ExpandoJsonPathConverter</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">Newtonsoft.Json.JsonConverter.CanRead</span>
    </div>
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
  <h6><strong>Assembly</strong>: ETLBox.Json.dll</h6>
  <h5 id="ETLBox_Helper_ExpandoJsonPathConverter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class ExpandoJsonPathConverter : JsonConverter
```

{{< rawhtml >}}
  <h5 id="ETLBox_Helper_ExpandoJsonPathConverter_remarks"><strong>Remarks</strong></h5>
  <div class="markdown level0 remarks"><p><a href="https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs">https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs</a></p>
</div>
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Helper_ExpandoJsonPathConverter__ctor_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.#ctor*"></a>
  <h4 id="ETLBox_Helper_ExpandoJsonPathConverter__ctor_System_Collections_Generic_IEnumerable_ETLBox_Helper_JsonProperty2JsonPath__" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.#ctor(System.Collections.Generic.IEnumerable{ETLBox.Helper.JsonProperty2JsonPath})">ExpandoJsonPathConverter(IEnumerable&lt;JsonProperty2JsonPath&gt;)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public ExpandoJsonPathConverter(IEnumerable<JsonProperty2JsonPath> pathLookups)
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.helper/jsonproperty2jsonpath">JsonProperty2JsonPath</a>&gt;</td>
        <td><span class="parametername">pathLookups</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Helper_ExpandoJsonPathConverter__ctor_System_Collections_Generic_IEnumerable_ETLBox_Helper_JsonProperty2JsonPath___remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs">https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs</a></p>
</div>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Helper_ExpandoJsonPathConverter_CanWrite_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.CanWrite*"></a>
  <h4 id="ETLBox_Helper_ExpandoJsonPathConverter_CanWrite" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.CanWrite">CanWrite</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool CanWrite { get; }
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">Newtonsoft.Json.JsonConverter.CanWrite</span></div>
  <h5 id="ETLBox_Helper_ExpandoJsonPathConverter_CanWrite_remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs">https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs</a></p>
</div>
  <a id="ETLBox_Helper_ExpandoJsonPathConverter_PathLookups_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.PathLookups*"></a>
  <h4 id="ETLBox_Helper_ExpandoJsonPathConverter_PathLookups" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.PathLookups">PathLookups</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public IEnumerable<JsonProperty2JsonPath> PathLookups { get; set; }
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
        <td><span class="xref">System.Collections.Generic.IEnumerable&lt;T&gt;</span>&lt;<a class="xref" href="/api/etlbox.helper/jsonproperty2jsonpath">JsonProperty2JsonPath</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 id="ETLBox_Helper_ExpandoJsonPathConverter_PathLookups_remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs">https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs</a></p>
</div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_ExpandoJsonPathConverter_CanConvert_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.CanConvert*"></a>
  <h4 id="ETLBox_Helper_ExpandoJsonPathConverter_CanConvert_System_Type_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.CanConvert(System.Type)">CanConvert(Type)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool CanConvert(Type objectType)
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
        <td><span class="parametername">objectType</span></td>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">Newtonsoft.Json.JsonConverter.CanConvert(System.Type)</span></div>
  <h5 id="ETLBox_Helper_ExpandoJsonPathConverter_CanConvert_System_Type__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs">https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs</a></p>
</div>
  <a id="ETLBox_Helper_ExpandoJsonPathConverter_ReadJson_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.ReadJson*"></a>
  <h4 id="ETLBox_Helper_ExpandoJsonPathConverter_ReadJson_Newtonsoft_Json_JsonReader_System_Type_System_Object_Newtonsoft_Json_JsonSerializer_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.ReadJson(Newtonsoft.Json.JsonReader,System.Type,System.Object,Newtonsoft.Json.JsonSerializer)">ReadJson(JsonReader, Type, object, JsonSerializer)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
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
        <td><span class="xref">Newtonsoft.Json.JsonReader</span></td>
        <td><span class="parametername">reader</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">System.Type</span></td>
        <td><span class="parametername">objectType</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">existingValue</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">Newtonsoft.Json.JsonSerializer</span></td>
        <td><span class="parametername">serializer</span></td>
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
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">Newtonsoft.Json.JsonConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, object, Newtonsoft.Json.JsonSerializer)</span></div>
  <h5 id="ETLBox_Helper_ExpandoJsonPathConverter_ReadJson_Newtonsoft_Json_JsonReader_System_Type_System_Object_Newtonsoft_Json_JsonSerializer__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs">https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs</a></p>
</div>
  <a id="ETLBox_Helper_ExpandoJsonPathConverter_WriteJson_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.WriteJson*"></a>
  <h4 id="ETLBox_Helper_ExpandoJsonPathConverter_WriteJson_Newtonsoft_Json_JsonWriter_System_Object_Newtonsoft_Json_JsonSerializer_" data-uid="ETLBox.Helper.ExpandoJsonPathConverter.WriteJson(Newtonsoft.Json.JsonWriter,System.Object,Newtonsoft.Json.JsonSerializer)">WriteJson(JsonWriter, object, JsonSerializer)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
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
        <td><span class="xref">Newtonsoft.Json.JsonWriter</span></td>
        <td><span class="parametername">writer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">object</span></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
      <tr>
        <td><span class="xref">Newtonsoft.Json.JsonSerializer</span></td>
        <td><span class="parametername">serializer</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">Newtonsoft.Json.JsonConverter.WriteJson(Newtonsoft.Json.JsonWriter, object, Newtonsoft.Json.JsonSerializer)</span></div>
  <h5 id="ETLBox_Helper_ExpandoJsonPathConverter_WriteJson_Newtonsoft_Json_JsonWriter_System_Object_Newtonsoft_Json_JsonSerializer__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs">https://github.com/JamesNK/Newtonsoft.Json/blob/master/Src/Newtonsoft.Json/Converters/ExpandoObjectConverter.cs</a></p>
</div>

{{< /rawhtml >}}
