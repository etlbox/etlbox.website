---
title: "LogHierarchyEntry"
description: "Details for Class LogHierarchyEntry (ETLBox.Logging)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.logging"
weight: 10241
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Logging.LogHierarchyEntry">
  <h1 id="ETLBox_Logging_LogHierarchyEntry" data-uid="ETLBox.Logging.LogHierarchyEntry" class="text-break">Class LogHierarchyEntry
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="/api/etlbox.logging/logentry">LogEntry</a></div>
    <div class="level2"><span class="xref">LogHierarchyEntry</span></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_Id">LogEntry.Id</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_LogDate">LogEntry.LogDate</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_StartDate">LogEntry.StartDate</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_EndDate">LogEntry.EndDate</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_Level">LogEntry.Level</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_Message">LogEntry.Message</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_TaskType">LogEntry.TaskType</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_TaskName">LogEntry.TaskName</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_Action">LogEntry.Action</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_TaskHash">LogEntry.TaskHash</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_Stage">LogEntry.Stage</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_Source">LogEntry.Source</a>
    </div>
    <div>
      <a class="xref" href="/api/etlbox.logging/logentry#ETLBox_Logging_LogEntry_LoadProcessId">LogEntry.LoadProcessId</a>
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
<h6><strong>Namespace</strong>: ETLBox.Logging</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Logging_LogHierarchyEntry_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class LogHierarchyEntry : LogEntry
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Logging_LogHierarchyEntry__ctor_" data-uid="ETLBox.Logging.LogHierarchyEntry.#ctor*"></a>
  <h4 id="ETLBox_Logging_LogHierarchyEntry__ctor" data-uid="ETLBox.Logging.LogHierarchyEntry.#ctor">LogHierarchyEntry()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LogHierarchyEntry()
```

{{< rawhtml >}}
  <a id="ETLBox_Logging_LogHierarchyEntry__ctor_" data-uid="ETLBox.Logging.LogHierarchyEntry.#ctor*"></a>
  <h4 id="ETLBox_Logging_LogHierarchyEntry__ctor_ETLBox_Logging_LogEntry_" data-uid="ETLBox.Logging.LogHierarchyEntry.#ctor(ETLBox.Logging.LogEntry)">LogHierarchyEntry(LogEntry)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public LogHierarchyEntry(LogEntry entry)
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
        <td><a class="xref" href="/api/etlbox.logging/logentry">LogEntry</a></td>
        <td><span class="parametername">entry</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Logging_LogHierarchyEntry_Children_" data-uid="ETLBox.Logging.LogHierarchyEntry.Children*"></a>
  <h4 id="ETLBox_Logging_LogHierarchyEntry_Children" data-uid="ETLBox.Logging.LogHierarchyEntry.Children">Children</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public List<LogHierarchyEntry> Children { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1">List</a>&lt;<a class="xref" href="/api/etlbox.logging/loghierarchyentry">LogHierarchyEntry</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Logging_LogHierarchyEntry_Parent_" data-uid="ETLBox.Logging.LogHierarchyEntry.Parent*"></a>
  <h4 id="ETLBox_Logging_LogHierarchyEntry_Parent" data-uid="ETLBox.Logging.LogHierarchyEntry.Parent">Parent</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    [JsonIgnore]
public LogHierarchyEntry Parent { get; set; }
```

{{< rawhtml >}}
  <h5 class="propertyValue">Property Value</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="/api/etlbox.logging/loghierarchyentry">LogHierarchyEntry</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>

{{< /rawhtml >}}
