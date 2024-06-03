---
title: "KafkaDestination<TInput>.DefaultRowSerializer"
description: "Details for Class KafkaDestination<TInput>.DefaultRowSerializer (ETLBox.Apache.Kafka.KafkaDestination`1)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.apache.kafka.kafkadestination`1"
weight: 10016
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Apache.Kafka.KafkaDestination`1.DefaultRowSerializer">
  <h1 id="ETLBox_Apache_Kafka_KafkaDestination_1_DefaultRowSerializer" data-uid="ETLBox.Apache.Kafka.KafkaDestination`1.DefaultRowSerializer" class="text-break">Class KafkaDestination&lt;TInput&gt;.DefaultRowSerializer
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><span class="xref">KafkaDestination&lt;TInput&gt;.DefaultRowSerializer</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><span class="xref">ISerializer</span>&lt;TInput&gt;</div>
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
<h6><strong>Namespace</strong>: ETLBox.Apache.Kafka.KafkaDestination`1</h6>
  <h6><strong>Assembly</strong>: ETLBox.Apache.Kafka.dll</h6>
  <h5 id="ETLBox_Apache_Kafka_KafkaDestination_1_DefaultRowSerializer_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class KafkaDestination<TInput>.DefaultRowSerializer : ISerializer<TInput>
```

{{< rawhtml >}}
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Apache_Kafka_KafkaDestination_1_DefaultRowSerializer_Serialize_" data-uid="ETLBox.Apache.Kafka.KafkaDestination`1.DefaultRowSerializer.Serialize*"></a>
  <h4 id="ETLBox_Apache_Kafka_KafkaDestination_1_DefaultRowSerializer_Serialize__0_Confluent_Kafka_SerializationContext_" data-uid="ETLBox.Apache.Kafka.KafkaDestination`1.DefaultRowSerializer.Serialize(`0,Confluent.Kafka.SerializationContext)">Serialize(TInput, SerializationContext)</h4>
  <div class="markdown level1 summary"><p>Serialize the key or value of a <span class="xref">Confluent.Kafka.Message&lt;TKey, TValue&gt;</span>
instance.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public byte[] Serialize(TInput data, SerializationContext context)
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
        <td><span class="xref">TInput</span></td>
        <td><span class="parametername">data</span></td>
        <td><p>The value to serialize.</p>
</td>
      </tr>
      <tr>
        <td><span class="xref">SerializationContext</span></td>
        <td><span class="parametername">context</span></td>
        <td><p>Context relevant to the serialize operation.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a>[]</td>
        <td><p>The serialized value.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <span class="xref">Confluent.Kafka.ISerializer&lt;T&gt;</span>
  </div>

{{< /rawhtml >}}
