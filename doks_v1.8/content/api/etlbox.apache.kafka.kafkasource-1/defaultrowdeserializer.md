---
title: "KafkaSource<TOutput>.DefaultRowDeserializer"
description: "Details for Class KafkaSource<TOutput>.DefaultRowDeserializer (ETLBox.Apache.Kafka.KafkaSource`1)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.apache.kafka.kafkasource`1"
weight: 10011
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Apache.Kafka.KafkaSource`1.DefaultRowDeserializer">
  <h1 id="ETLBox_Apache_Kafka_KafkaSource_1_DefaultRowDeserializer" data-uid="ETLBox.Apache.Kafka.KafkaSource`1.DefaultRowDeserializer" class="text-break">Class KafkaSource&lt;TOutput&gt;.DefaultRowDeserializer</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">KafkaSource&lt;TOutput&gt;.DefaultRowDeserializer</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><span class="xref">IDeserializer</span>&lt;TOutput&gt;</div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
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
<h6><strong>Namespace</strong>: ETLBox.Apache.Kafka.KafkaSource`1</h6>
  <h6><strong>Assembly</strong>: ETLBox.Apache.Kafka.dll</h6>
  <h5 id="ETLBox_Apache_Kafka_KafkaSource_1_DefaultRowDeserializer_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class KafkaSource<TOutput>.DefaultRowDeserializer : IDeserializer<TOutput>
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Apache_Kafka_KafkaSource_1_DefaultRowDeserializer_Deserialize_" data-uid="ETLBox.Apache.Kafka.KafkaSource`1.DefaultRowDeserializer.Deserialize*"></a>
  <h4 id="ETLBox_Apache_Kafka_KafkaSource_1_DefaultRowDeserializer_Deserialize_System_ReadOnlySpan_System_Byte__System_Boolean_Confluent_Kafka_SerializationContext_" data-uid="ETLBox.Apache.Kafka.KafkaSource`1.DefaultRowDeserializer.Deserialize(System.ReadOnlySpan{System.Byte},System.Boolean,Confluent.Kafka.SerializationContext)">Deserialize(ReadOnlySpan&lt;byte&gt;, bool, SerializationContext)</h4>
  <div class="markdown level1 summary"><p>Deserialize a message key or value.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public TOutput Deserialize(ReadOnlySpan<byte> data, bool isNull, SerializationContext context)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.readonlyspan-1">ReadOnlySpan</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a>&gt;</td>
        <td><span class="parametername">data</span></td>
        <td><p>The data to deserialize.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td><span class="parametername">isNull</span></td>
        <td><p>Whether or not the value is null.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">SerializationContext</span></td>
        <td><span class="parametername">context</span></td>
        <td><p>Context relevant to the deserialize operation.</p>
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
        <td><span class="xref">TOutput</span></td>
        <td><p>The deserialized value.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <span class="xref">Confluent.Kafka.IDeserializer&lt;T&gt;</span>
  </div>

{{< /rawhtml >}}
