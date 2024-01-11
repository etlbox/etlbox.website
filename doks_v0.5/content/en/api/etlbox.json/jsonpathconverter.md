---
title: "JsonPathConverter"
description: "Details for Class JsonPathConverter (ETLBox.Json)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.json"
weight: 10237
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Json.JsonPathConverter">
  <h1 id="ETLBox_Json_JsonPathConverter" data-uid="ETLBox.Json.JsonPathConverter" class="text-break">Class JsonPathConverter
</h1>
  <div class="markdown level0 summary"><p>A JsonConverter that support json path expression in JsonProperty attributes.</p>
</div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">JsonConverter</span></div>
    <div class="level2"><span class="xref">JsonPathConverter</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <span class="xref">JsonConverter.CanRead</span>
    </div>
    <div>
      <span class="xref">JsonConverter.CanWrite</span>
    </div>
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
<h6><strong>Namespace</strong>: ETLBox.Json</h6>
  <h6><strong>Assembly</strong>: ETLBox.Json.dll</h6>
  <h5 id="ETLBox_Json_JsonPathConverter_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class JsonPathConverter : JsonConverter
```

{{< rawhtml >}}
  <h5 id="ETLBox_Json_JsonPathConverter_remarks"><strong>Remarks</strong></h5>
  <div class="markdown level0 remarks"><p><a href="https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr">https://stackoverflow.com/questions/33088462/can-i-specify-a-path-in-an-attribute-to-map-a-property-in-my-class-to-a-child-pr</a></p>
</div>
  <h5 id="ETLBox_Json_JsonPathConverter_examples"><strong>Examples</strong></h5>
  <pre><code class="lang-csharp">[JsonConverter(typeof(JsonPathConverter))]
public class MySimpleRow
{
    [JsonProperty("Column1")]
    public int Col1 { get; set; }
    [JsonProperty("Column2.Value")]
    public string Col2 { get; set; }
}</code></pre>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Json_JsonPathConverter_CanConvert_" data-uid="ETLBox.Json.JsonPathConverter.CanConvert*"></a>
  <h4 id="ETLBox_Json_JsonPathConverter_CanConvert_System_Type_" data-uid="ETLBox.Json.JsonPathConverter.CanConvert(System.Type)">CanConvert(Type)</h4>
  <div class="markdown level1 summary"><p>Determines whether this instance can convert the specified object type.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool CanConvert(Type objectType)
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
        <td><span class="parametername">objectType</span></td>
        <td><p>Type of the object.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><p><code>true</code> if this instance can convert the specified object type; otherwise, <code>false</code>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">JsonConverter.CanConvert(Type)</a></div>
  <a id="ETLBox_Json_JsonPathConverter_ReadJson_" data-uid="ETLBox.Json.JsonPathConverter.ReadJson*"></a>
  <h4 id="ETLBox_Json_JsonPathConverter_ReadJson_Newtonsoft_Json_JsonReader_System_Type_System_Object_Newtonsoft_Json_JsonSerializer_" data-uid="ETLBox.Json.JsonPathConverter.ReadJson(Newtonsoft.Json.JsonReader,System.Type,System.Object,Newtonsoft.Json.JsonSerializer)">ReadJson(JsonReader, Type, object, JsonSerializer)</h4>
  <div class="markdown level1 summary"><p>Reads the JSON representation of the object.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
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
        <td><span class="xref">JsonReader</span></td>
        <td><span class="parametername">reader</span></td>
        <td><p>The <span class="xref">Newtonsoft.Json.JsonReader</span> to read from.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">Type</a></td>
        <td><span class="parametername">objectType</span></td>
        <td><p>Type of the object.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">existingValue</span></td>
        <td><p>The existing value of object being read.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">JsonSerializer</span></td>
        <td><span class="parametername">serializer</span></td>
        <td><p>The calling serializer.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><p>The object value.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.type">JsonConverter.ReadJson(JsonReader, Type, object, JsonSerializer)</a></div>
  <a id="ETLBox_Json_JsonPathConverter_WriteJson_" data-uid="ETLBox.Json.JsonPathConverter.WriteJson*"></a>
  <h4 id="ETLBox_Json_JsonPathConverter_WriteJson_Newtonsoft_Json_JsonWriter_System_Object_Newtonsoft_Json_JsonSerializer_" data-uid="ETLBox.Json.JsonPathConverter.WriteJson(Newtonsoft.Json.JsonWriter,System.Object,Newtonsoft.Json.JsonSerializer)">WriteJson(JsonWriter, object, JsonSerializer)</h4>
  <div class="markdown level1 summary"><p>Writes the JSON representation of the object.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
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
        <td><span class="xref">JsonWriter</span></td>
        <td><span class="parametername">writer</span></td>
        <td><p>The <span class="xref">Newtonsoft.Json.JsonWriter</span> to write to.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">value</span></td>
        <td><p>The value.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">JsonSerializer</span></td>
        <td><span class="parametername">serializer</span></td>
        <td><p>The calling serializer.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">JsonConverter.WriteJson(JsonWriter, object, JsonSerializer)</a></div>

{{< /rawhtml >}}
