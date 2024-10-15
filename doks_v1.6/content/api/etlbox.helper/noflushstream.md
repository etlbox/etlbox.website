---
title: "NoFlushStream"
description: "Details for Class NoFlushStream (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10233
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.NoFlushStream">
  <h1 id="ETLBox_Helper_NoFlushStream" data-uid="ETLBox.Helper.NoFlushStream" class="text-break">Class NoFlushStream
</h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="inheritance">
    <h5>Inheritance</h5>
    <div class="level0"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></div>
    <div class="level1"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.marshalbyrefobject">MarshalByRefObject</a></div>
    <div class="level2"><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream">Stream</a></div>
    <div class="level3"><span class="xref">NoFlushStream</span></div>
  </div>
  <div class="implements">
    <h5>Implements</h5>
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable">IDisposable</a></div>
  </div>
  <div class="inheritedMembers">
    <h5>Inherited Members</h5>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.null">Stream.Null</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.copyto#system-io-stream-copyto(system-io-stream)">Stream.CopyTo(Stream)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.copyto#system-io-stream-copyto(system-io-stream-system-int32)">Stream.CopyTo(Stream, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.copytoasync#system-io-stream-copytoasync(system-io-stream)">Stream.CopyToAsync(Stream)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.copytoasync#system-io-stream-copytoasync(system-io-stream-system-int32)">Stream.CopyToAsync(Stream, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.createwaithandle">Stream.CreateWaitHandle()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.dispose#system-io-stream-dispose">Stream.Dispose()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.dispose#system-io-stream-dispose(system-boolean)">Stream.Dispose(bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.flushasync#system-io-stream-flushasync">Stream.FlushAsync()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.objectinvariant">Stream.ObjectInvariant()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readasync#system-io-stream-readasync(system-byte()-system-int32-system-int32)">Stream.ReadAsync(byte[], int, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.synchronized">Stream.Synchronized(Stream)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writeasync#system-io-stream-writeasync(system-byte()-system-int32-system-int32)">Stream.WriteAsync(byte[], int, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.marshalbyrefobject.getlifetimeservice">MarshalByRefObject.GetLifetimeService()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.marshalbyrefobject.initializelifetimeservice">MarshalByRefObject.InitializeLifetimeService()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.marshalbyrefobject.memberwiseclone">MarshalByRefObject.MemberwiseClone(bool)</a>
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
<h6><strong>Namespace</strong>: ETLBox.Helper</h6>
  <h6><strong>Assembly</strong>: ETLBox.dll</h6>
  <h5 id="ETLBox_Helper_NoFlushStream_syntax">Syntax</h5>
{{< /rawhtml >}}

```C#
    public class NoFlushStream : Stream, IDisposable
```

{{< rawhtml >}}
  <h3 id="constructors">Constructors
</h3>
  <a id="ETLBox_Helper_NoFlushStream__ctor_" data-uid="ETLBox.Helper.NoFlushStream.#ctor*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream__ctor_System_IO_Stream_" data-uid="ETLBox.Helper.NoFlushStream.#ctor(System.IO.Stream)">NoFlushStream(Stream)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public NoFlushStream(Stream inner)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream">Stream</a></td>
        <td><span class="parametername">inner</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h3 id="properties">Properties
</h3>
  <a id="ETLBox_Helper_NoFlushStream_CanRead_" data-uid="ETLBox.Helper.NoFlushStream.CanRead*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_CanRead" data-uid="ETLBox.Helper.NoFlushStream.CanRead">CanRead</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool CanRead { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.canread">Stream.CanRead</a></div>
  <a id="ETLBox_Helper_NoFlushStream_CanSeek_" data-uid="ETLBox.Helper.NoFlushStream.CanSeek*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_CanSeek" data-uid="ETLBox.Helper.NoFlushStream.CanSeek">CanSeek</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool CanSeek { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.canseek">Stream.CanSeek</a></div>
  <a id="ETLBox_Helper_NoFlushStream_CanTimeout_" data-uid="ETLBox.Helper.NoFlushStream.CanTimeout*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_CanTimeout" data-uid="ETLBox.Helper.NoFlushStream.CanTimeout">CanTimeout</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool CanTimeout { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.cantimeout">Stream.CanTimeout</a></div>
  <a id="ETLBox_Helper_NoFlushStream_CanWrite_" data-uid="ETLBox.Helper.NoFlushStream.CanWrite*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_CanWrite" data-uid="ETLBox.Helper.NoFlushStream.CanWrite">CanWrite</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override bool CanWrite { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.boolean">bool</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.canwrite">Stream.CanWrite</a></div>
  <a id="ETLBox_Helper_NoFlushStream_Length_" data-uid="ETLBox.Helper.NoFlushStream.Length*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Length" data-uid="ETLBox.Helper.NoFlushStream.Length">Length</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override long Length { get; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int64">long</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.length">Stream.Length</a></div>
  <a id="ETLBox_Helper_NoFlushStream_Position_" data-uid="ETLBox.Helper.NoFlushStream.Position*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Position" data-uid="ETLBox.Helper.NoFlushStream.Position">Position</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override long Position { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int64">long</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.position">Stream.Position</a></div>
  <a id="ETLBox_Helper_NoFlushStream_ReadTimeout_" data-uid="ETLBox.Helper.NoFlushStream.ReadTimeout*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_ReadTimeout" data-uid="ETLBox.Helper.NoFlushStream.ReadTimeout">ReadTimeout</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int ReadTimeout { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readtimeout">Stream.ReadTimeout</a></div>
  <a id="ETLBox_Helper_NoFlushStream_WriteTimeout_" data-uid="ETLBox.Helper.NoFlushStream.WriteTimeout*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_WriteTimeout" data-uid="ETLBox.Helper.NoFlushStream.WriteTimeout">WriteTimeout</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int WriteTimeout { get; set; }
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writetimeout">Stream.WriteTimeout</a></div>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_NoFlushStream_BeginRead_" data-uid="ETLBox.Helper.NoFlushStream.BeginRead*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_BeginRead_System_Byte___System_Int32_System_Int32_System_AsyncCallback_System_Object_" data-uid="ETLBox.Helper.NoFlushStream.BeginRead(System.Byte[],System.Int32,System.Int32,System.AsyncCallback,System.Object)">BeginRead(byte[], int, int, AsyncCallback, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IAsyncResult BeginRead(byte[] buffer, int offset, int count, AsyncCallback callback, object state)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a>[]</td>
        <td><span class="parametername">buffer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.asynccallback">AsyncCallback</a></td>
        <td><span class="parametername">callback</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">state</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncresult">IAsyncResult</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.beginread">Stream.BeginRead(byte[], int, int, AsyncCallback, object)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_BeginWrite_" data-uid="ETLBox.Helper.NoFlushStream.BeginWrite*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_BeginWrite_System_Byte___System_Int32_System_Int32_System_AsyncCallback_System_Object_" data-uid="ETLBox.Helper.NoFlushStream.BeginWrite(System.Byte[],System.Int32,System.Int32,System.AsyncCallback,System.Object)">BeginWrite(byte[], int, int, AsyncCallback, object)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override IAsyncResult BeginWrite(byte[] buffer, int offset, int count, AsyncCallback callback, object state)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a>[]</td>
        <td><span class="parametername">buffer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.asynccallback">AsyncCallback</a></td>
        <td><span class="parametername">callback</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">state</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncresult">IAsyncResult</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.beginwrite">Stream.BeginWrite(byte[], int, int, AsyncCallback, object)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_Close_" data-uid="ETLBox.Helper.NoFlushStream.Close*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Close" data-uid="ETLBox.Helper.NoFlushStream.Close">Close()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void Close()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.close">Stream.Close()</a></div>
  <a id="ETLBox_Helper_NoFlushStream_CopyToAsync_" data-uid="ETLBox.Helper.NoFlushStream.CopyToAsync*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_CopyToAsync_System_IO_Stream_System_Int32_System_Threading_CancellationToken_" data-uid="ETLBox.Helper.NoFlushStream.CopyToAsync(System.IO.Stream,System.Int32,System.Threading.CancellationToken)">CopyToAsync(Stream, int, CancellationToken)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override Task CopyToAsync(Stream destination, int bufferSize, CancellationToken cancellationToken)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream">Stream</a></td>
        <td><span class="parametername">destination</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">bufferSize</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.copytoasync#system-io-stream-copytoasync(system-io-stream-system-int32-system-threading-cancellationtoken)">Stream.CopyToAsync(Stream, int, CancellationToken)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_EndRead_" data-uid="ETLBox.Helper.NoFlushStream.EndRead*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_EndRead_System_IAsyncResult_" data-uid="ETLBox.Helper.NoFlushStream.EndRead(System.IAsyncResult)">EndRead(IAsyncResult)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int EndRead(IAsyncResult asyncResult)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncresult">IAsyncResult</a></td>
        <td><span class="parametername">asyncResult</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.endread">Stream.EndRead(IAsyncResult)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_EndWrite_" data-uid="ETLBox.Helper.NoFlushStream.EndWrite*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_EndWrite_System_IAsyncResult_" data-uid="ETLBox.Helper.NoFlushStream.EndWrite(System.IAsyncResult)">EndWrite(IAsyncResult)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void EndWrite(IAsyncResult asyncResult)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncresult">IAsyncResult</a></td>
        <td><span class="parametername">asyncResult</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.endwrite">Stream.EndWrite(IAsyncResult)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_Flush_" data-uid="ETLBox.Helper.NoFlushStream.Flush*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Flush" data-uid="ETLBox.Helper.NoFlushStream.Flush">Flush()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void Flush()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.flush">Stream.Flush()</a></div>
  <a id="ETLBox_Helper_NoFlushStream_FlushAsync_" data-uid="ETLBox.Helper.NoFlushStream.FlushAsync*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_FlushAsync_System_Threading_CancellationToken_" data-uid="ETLBox.Helper.NoFlushStream.FlushAsync(System.Threading.CancellationToken)">FlushAsync(CancellationToken)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override Task FlushAsync(CancellationToken cancellationToken)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.flushasync#system-io-stream-flushasync(system-threading-cancellationtoken)">Stream.FlushAsync(CancellationToken)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_Read_" data-uid="ETLBox.Helper.NoFlushStream.Read*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Read_System_Byte___System_Int32_System_Int32_" data-uid="ETLBox.Helper.NoFlushStream.Read(System.Byte[],System.Int32,System.Int32)">Read(byte[], int, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int Read(byte[] buffer, int offset, int count)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a>[]</td>
        <td><span class="parametername">buffer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.read">Stream.Read(byte[], int, int)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_ReadAsync_" data-uid="ETLBox.Helper.NoFlushStream.ReadAsync*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_ReadAsync_System_Byte___System_Int32_System_Int32_System_Threading_CancellationToken_" data-uid="ETLBox.Helper.NoFlushStream.ReadAsync(System.Byte[],System.Int32,System.Int32,System.Threading.CancellationToken)">ReadAsync(byte[], int, int, CancellationToken)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override Task<int> ReadAsync(byte[] buffer, int offset, int count, CancellationToken cancellationToken)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a>[]</td>
        <td><span class="parametername">buffer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1">Task</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>&gt;</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readasync#system-io-stream-readasync(system-byte()-system-int32-system-int32-system-threading-cancellationtoken)">Stream.ReadAsync(byte[], int, int, CancellationToken)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_ReadByte_" data-uid="ETLBox.Helper.NoFlushStream.ReadByte*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_ReadByte" data-uid="ETLBox.Helper.NoFlushStream.ReadByte">ReadByte()</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override int ReadByte()
```

{{< rawhtml >}}
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readbyte">Stream.ReadByte()</a></div>
  <a id="ETLBox_Helper_NoFlushStream_Seek_" data-uid="ETLBox.Helper.NoFlushStream.Seek*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Seek_System_Int64_System_IO_SeekOrigin_" data-uid="ETLBox.Helper.NoFlushStream.Seek(System.Int64,System.IO.SeekOrigin)">Seek(long, SeekOrigin)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override long Seek(long offset, SeekOrigin origin)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int64">long</a></td>
        <td><span class="parametername">offset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.seekorigin">SeekOrigin</a></td>
        <td><span class="parametername">origin</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int64">long</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.seek">Stream.Seek(long, SeekOrigin)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_SetLength_" data-uid="ETLBox.Helper.NoFlushStream.SetLength*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_SetLength_System_Int64_" data-uid="ETLBox.Helper.NoFlushStream.SetLength(System.Int64)">SetLength(long)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void SetLength(long value)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int64">long</a></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.setlength">Stream.SetLength(long)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_Write_" data-uid="ETLBox.Helper.NoFlushStream.Write*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Write_System_Byte___System_Int32_System_Int32_" data-uid="ETLBox.Helper.NoFlushStream.Write(System.Byte[],System.Int32,System.Int32)">Write(byte[], int, int)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void Write(byte[] buffer, int offset, int count)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a>[]</td>
        <td><span class="parametername">buffer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.write">Stream.Write(byte[], int, int)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_WriteAsync_" data-uid="ETLBox.Helper.NoFlushStream.WriteAsync*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_WriteAsync_System_Byte___System_Int32_System_Int32_System_Threading_CancellationToken_" data-uid="ETLBox.Helper.NoFlushStream.WriteAsync(System.Byte[],System.Int32,System.Int32,System.Threading.CancellationToken)">WriteAsync(byte[], int, int, CancellationToken)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override Task WriteAsync(byte[] buffer, int offset, int count, CancellationToken cancellationToken)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a>[]</td>
        <td><span class="parametername">buffer</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td></td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td></td>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writeasync#system-io-stream-writeasync(system-byte()-system-int32-system-int32-system-threading-cancellationtoken)">Stream.WriteAsync(byte[], int, int, CancellationToken)</a></div>
  <a id="ETLBox_Helper_NoFlushStream_WriteByte_" data-uid="ETLBox.Helper.NoFlushStream.WriteByte*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_WriteByte_System_Byte_" data-uid="ETLBox.Helper.NoFlushStream.WriteByte(System.Byte)">WriteByte(byte)</h4>
  <div class="markdown level1 summary"></div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void WriteByte(byte value)
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.byte">byte</a></td>
        <td><span class="parametername">value</span></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writebyte">Stream.WriteByte(byte)</a></div>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable">IDisposable</a>
  </div>

{{< /rawhtml >}}
