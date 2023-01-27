---
title: "JsonPathConverter"
description: "Details for Class JsonPathConverter (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10268
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.JsonPathConverter">
  <h1 id="ETLBox_Helper_JsonPathConverter" data-uid="ETLBox.Helper.JsonPathConverter" class="text-break">Class JsonPathConverter
</h1>
  <div class="markdown level0 summary"><p>A JsonConverter that support json path expression in JsonProperty attributes.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><span class="xref">System.Object</span></div>
    <div class="level1"><span class="xref">Newtonsoft.Json.JsonConverter</span></div>
    <div class="level2"><span class="xref">JsonPathConverter</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">Newtonsoft.Json.JsonConverter.CanRead</span>
    </div>
    <div>
      <span class="xref">Newtonsoft.Json.JsonConverter.CanWrite</span>
    </div>
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
  <h6><strong>Assembly</strong>: ETLBox.Json.dll</h6>
  <h5 id="ETLBox_Helper_JsonPathConverter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class JsonPathConverter : JsonConverter
```

{{< rawhtml >}}
  <h5 id="ETLBox_Helper_JsonPathConverter_remarks"><strong>Remarks</strong></h5>
  <div class="markdown level0 remarks"><p><a href="https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr">https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr</a></p>
</div>
  <h5 id="ETLBox_Helper_JsonPathConverter_examples"><strong>Examples</strong></h5>
  <pre><code>[JsonConverter(typeof(JsonPathConverter))]
public class MySimpleRow
{
    [JsonProperty(&quot;Column1&quot;)]
    public int Col1 { get; set; }
    [JsonProperty(&quot;Column2.Value&quot;)]
    public string Col2 { get; set; }
}</code></pre>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_JsonPathConverter_CanConvert_" data-uid="ETLBox.Helper.JsonPathConverter.CanConvert*"></a>
  <h4 id="ETLBox_Helper_JsonPathConverter_CanConvert_System_Type_" data-uid="ETLBox.Helper.JsonPathConverter.CanConvert(System.Type)">CanConvert(Type)</h4>
  <div class="markdown level1 summary"><p>A JsonConverter that support json path expression in JsonProperty attributes.</p>
</div>
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
        <td><span class="xref">System.Boolean</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">Newtonsoft.Json.JsonConverter.CanConvert(System.Type)</span></div>
  <h5 id="ETLBox_Helper_JsonPathConverter_CanConvert_System_Type__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr">https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr</a></p>
</div>
  <a id="ETLBox_Helper_JsonPathConverter_ReadJson_" data-uid="ETLBox.Helper.JsonPathConverter.ReadJson*"></a>
  <h4 id="ETLBox_Helper_JsonPathConverter_ReadJson_Newtonsoft_Json_JsonReader_System_Type_System_Object_Newtonsoft_Json_JsonSerializer_" data-uid="ETLBox.Helper.JsonPathConverter.ReadJson(Newtonsoft.Json.JsonReader,System.Type,System.Object,Newtonsoft.Json.JsonSerializer)">ReadJson(JsonReader, Type, Object, JsonSerializer)</h4>
  <div class="markdown level1 summary"><p>A JsonConverter that support json path expression in JsonProperty attributes.</p>
</div>
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
        <td><span class="xref">System.Object</span></td>
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
        <td><span class="xref">System.Object</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><span class="xref">Newtonsoft.Json.JsonConverter.ReadJson(Newtonsoft.Json.JsonReader, System.Type, System.Object, Newtonsoft.Json.JsonSerializer)</span></div>
  <h5 id="ETLBox_Helper_JsonPathConverter_ReadJson_Newtonsoft_Json_JsonReader_System_Type_System_Object_Newtonsoft_Json_JsonSerializer__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr">https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr</a></p>
</div>
  <a id="ETLBox_Helper_JsonPathConverter_WriteJson_" data-uid="ETLBox.Helper.JsonPathConverter.WriteJson*"></a>
  <h4 id="ETLBox_Helper_JsonPathConverter_WriteJson_Newtonsoft_Json_JsonWriter_System_Object_Newtonsoft_Json_JsonSerializer_" data-uid="ETLBox.Helper.JsonPathConverter.WriteJson(Newtonsoft.Json.JsonWriter,System.Object,Newtonsoft.Json.JsonSerializer)">WriteJson(JsonWriter, Object, JsonSerializer)</h4>
  <div class="markdown level1 summary"><p>A JsonConverter that support json path expression in JsonProperty attributes.</p>
</div>
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
        <td><span class="xref">System.Object</span></td>
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
  <div><span class="xref">Newtonsoft.Json.JsonConverter.WriteJson(Newtonsoft.Json.JsonWriter, System.Object, Newtonsoft.Json.JsonSerializer)</span></div>
  <h5 id="ETLBox_Helper_JsonPathConverter_WriteJson_Newtonsoft_Json_JsonWriter_System_Object_Newtonsoft_Json_JsonSerializer__remarks">Remarks</h5>
  <div class="markdown level1 remarks"><p><a href="https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr">https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr</a></p>
</div>

{{< /rawhtml >}}
