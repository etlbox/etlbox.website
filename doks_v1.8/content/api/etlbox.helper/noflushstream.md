---
title: "NoFlushStream"
description: "Details for Class NoFlushStream (ETLBox.Helper)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.helper"
weight: 10237
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.Helper.NoFlushStream">
  <h1 id="ETLBox_Helper_NoFlushStream" data-uid="ETLBox.Helper.NoFlushStream" class="text-break">Class NoFlushStream</h1>
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
    <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncdisposable">IAsyncDisposable</a></div>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.copytoasync#system-io-stream-copytoasync(system-io-stream-system-threading-cancellationtoken)">Stream.CopyToAsync(Stream, CancellationToken)</a>
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
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.disposeasync">Stream.DisposeAsync()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.flushasync#system-io-stream-flushasync">Stream.FlushAsync()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.objectinvariant">Stream.ObjectInvariant()</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.read#system-io-stream-read(system-span((system-byte)))">Stream.Read(Span&lt;byte&gt;)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readasync#system-io-stream-readasync(system-byte()-system-int32-system-int32)">Stream.ReadAsync(byte[], int, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readasync#system-io-stream-readasync(system-memory((system-byte))-system-threading-cancellationtoken)">Stream.ReadAsync(Memory&lt;byte&gt;, CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readatleast">Stream.ReadAtLeast(Span&lt;byte&gt;, int, bool)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readatleastasync">Stream.ReadAtLeastAsync(Memory&lt;byte&gt;, int, bool, CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readexactly#system-io-stream-readexactly(system-byte()-system-int32-system-int32)">Stream.ReadExactly(byte[], int, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readexactly#system-io-stream-readexactly(system-span((system-byte)))">Stream.ReadExactly(Span&lt;byte&gt;)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readexactlyasync#system-io-stream-readexactlyasync(system-byte()-system-int32-system-int32-system-threading-cancellationtoken)">Stream.ReadExactlyAsync(byte[], int, int, CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readexactlyasync#system-io-stream-readexactlyasync(system-memory((system-byte))-system-threading-cancellationtoken)">Stream.ReadExactlyAsync(Memory&lt;byte&gt;, CancellationToken)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.synchronized">Stream.Synchronized(Stream)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.validatebufferarguments">Stream.ValidateBufferArguments(byte[], int, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.validatecopytoarguments">Stream.ValidateCopyToArguments(Stream, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.write#system-io-stream-write(system-readonlyspan((system-byte)))">Stream.Write(ReadOnlySpan&lt;byte&gt;)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writeasync#system-io-stream-writeasync(system-byte()-system-int32-system-int32)">Stream.WriteAsync(byte[], int, int)</a>
    </div>
    <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writeasync#system-io-stream-writeasync(system-readonlymemory((system-byte))-system-threading-cancellationtoken)">Stream.WriteAsync(ReadOnlyMemory&lt;byte&gt;, CancellationToken)</a>
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
    public class NoFlushStream : Stream, IAsyncDisposable, IDisposable
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
  <div class="markdown level1 summary"><p>When overridden in a derived class, gets a value indicating whether the current stream supports reading.</p>
</div>
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
        <td><p><a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the stream supports reading; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.canread">Stream.CanRead</a></div>
  <a id="ETLBox_Helper_NoFlushStream_CanSeek_" data-uid="ETLBox.Helper.NoFlushStream.CanSeek*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_CanSeek" data-uid="ETLBox.Helper.NoFlushStream.CanSeek">CanSeek</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, gets a value indicating whether the current stream supports seeking.</p>
</div>
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
        <td><p><a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the stream supports seeking; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.canseek">Stream.CanSeek</a></div>
  <a id="ETLBox_Helper_NoFlushStream_CanTimeout_" data-uid="ETLBox.Helper.NoFlushStream.CanTimeout*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_CanTimeout" data-uid="ETLBox.Helper.NoFlushStream.CanTimeout">CanTimeout</h4>
  <div class="markdown level1 summary"><p>Gets a value that determines whether the current stream can time out.</p>
</div>
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
        <td><p>A value that determines whether the current stream can time out.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.cantimeout">Stream.CanTimeout</a></div>
  <a id="ETLBox_Helper_NoFlushStream_CanWrite_" data-uid="ETLBox.Helper.NoFlushStream.CanWrite*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_CanWrite" data-uid="ETLBox.Helper.NoFlushStream.CanWrite">CanWrite</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, gets a value indicating whether the current stream supports writing.</p>
</div>
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
        <td><p><a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the stream supports writing; otherwise, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.canwrite">Stream.CanWrite</a></div>
  <a id="ETLBox_Helper_NoFlushStream_Length_" data-uid="ETLBox.Helper.NoFlushStream.Length*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Length" data-uid="ETLBox.Helper.NoFlushStream.Length">Length</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, gets the length in bytes of the stream.</p>
</div>
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
        <td><p>A long value representing the length of the stream in bytes.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.length">Stream.Length</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>A class derived from <code>Stream</code> does not support seeking and the length is unknown.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_Position_" data-uid="ETLBox.Helper.NoFlushStream.Position*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Position" data-uid="ETLBox.Helper.NoFlushStream.Position">Position</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, gets or sets the position within the current stream.</p>
</div>
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
        <td><p>The current position within the stream.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.position">Stream.Position</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>An I/O error occurs.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support seeking.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_ReadTimeout_" data-uid="ETLBox.Helper.NoFlushStream.ReadTimeout*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_ReadTimeout" data-uid="ETLBox.Helper.NoFlushStream.ReadTimeout">ReadTimeout</h4>
  <div class="markdown level1 summary"><p>Gets or sets a value, in milliseconds, that determines how long the stream will attempt to read before timing out.</p>
</div>
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
        <td><p>A value, in milliseconds, that determines how long the stream will attempt to read before timing out.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readtimeout">Stream.ReadTimeout</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception">InvalidOperationException</a></td>
        <td><p>The <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readtimeout">ReadTimeout</a> method always throws an <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception">InvalidOperationException</a>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_WriteTimeout_" data-uid="ETLBox.Helper.NoFlushStream.WriteTimeout*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_WriteTimeout" data-uid="ETLBox.Helper.NoFlushStream.WriteTimeout">WriteTimeout</h4>
  <div class="markdown level1 summary"><p>Gets or sets a value, in milliseconds, that determines how long the stream will attempt to write before timing out.</p>
</div>
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
        <td><p>A value, in milliseconds, that determines how long the stream will attempt to write before timing out.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writetimeout">Stream.WriteTimeout</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception">InvalidOperationException</a></td>
        <td><p>The <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writetimeout">WriteTimeout</a> method always throws an <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception">InvalidOperationException</a>.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="methods">Methods
</h3>
  <a id="ETLBox_Helper_NoFlushStream_BeginRead_" data-uid="ETLBox.Helper.NoFlushStream.BeginRead*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_BeginRead_System_Byte___System_Int32_System_Int32_System_AsyncCallback_System_Object_" data-uid="ETLBox.Helper.NoFlushStream.BeginRead(System.Byte[],System.Int32,System.Int32,System.AsyncCallback,System.Object)">BeginRead(byte[], int, int, AsyncCallback, object)</h4>
  <div class="markdown level1 summary"><p>Begins an asynchronous read operation. (Consider using <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readasync#system-io-stream-readasync(system-byte()-system-int32-system-int32)">ReadAsync(byte[], int, int)</a> instead.)</p>
</div>
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
        <td><p>The buffer to read the data into.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td><p>The byte offset in <code class="paramref">buffer</code> at which to begin writing data read from the stream.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td><p>The maximum number of bytes to read.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.asynccallback">AsyncCallback</a></td>
        <td><span class="parametername">callback</span></td>
        <td><p>An optional asynchronous callback, to be called when the read is complete.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">state</span></td>
        <td><p>A user-provided object that distinguishes this particular asynchronous read request from other requests.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncresult">IAsyncResult</a></td>
        <td><p>An <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncresult">IAsyncResult</a> that represents the asynchronous read, which could still be pending.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.beginread">Stream.BeginRead(byte[], int, int, AsyncCallback, object)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>Attempted an asynchronous read past the end of the stream, or a disk error occurs.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentexception">ArgumentException</a></td>
        <td><p>One or more of the arguments is invalid.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The current <code>Stream</code> implementation does not support the read operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_BeginWrite_" data-uid="ETLBox.Helper.NoFlushStream.BeginWrite*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_BeginWrite_System_Byte___System_Int32_System_Int32_System_AsyncCallback_System_Object_" data-uid="ETLBox.Helper.NoFlushStream.BeginWrite(System.Byte[],System.Int32,System.Int32,System.AsyncCallback,System.Object)">BeginWrite(byte[], int, int, AsyncCallback, object)</h4>
  <div class="markdown level1 summary"><p>Begins an asynchronous write operation. (Consider using <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writeasync#system-io-stream-writeasync(system-byte()-system-int32-system-int32)">WriteAsync(byte[], int, int)</a> instead.)</p>
</div>
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
        <td><p>The buffer to write data from.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td><p>The byte offset in <code class="paramref">buffer</code> from which to begin writing.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td><p>The maximum number of bytes to write.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.asynccallback">AsyncCallback</a></td>
        <td><span class="parametername">callback</span></td>
        <td><p>An optional asynchronous callback, to be called when the write is complete.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.object">object</a></td>
        <td><span class="parametername">state</span></td>
        <td><p>A user-provided object that distinguishes this particular asynchronous write request from other requests.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncresult">IAsyncResult</a></td>
        <td><p>An <code>IAsyncResult</code> that represents the asynchronous write, which could still be pending.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.beginwrite">Stream.BeginWrite(byte[], int, int, AsyncCallback, object)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>Attempted an asynchronous write past the end of the stream, or a disk error occurs.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentexception">ArgumentException</a></td>
        <td><p>One or more of the arguments is invalid.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The current <code>Stream</code> implementation does not support the write operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_Close_" data-uid="ETLBox.Helper.NoFlushStream.Close*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Close" data-uid="ETLBox.Helper.NoFlushStream.Close">Close()</h4>
  <div class="markdown level1 summary"><p>Closes the current stream and releases any resources (such as sockets and file handles) associated with the current stream. Instead of calling this method, ensure that the stream is properly disposed.</p>
</div>
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
  <div class="markdown level1 summary"><p>Asynchronously reads the bytes from the current stream and writes them to another stream, using a specified buffer size and cancellation token. Both streams positions are advanced by the number of bytes copied.</p>
</div>
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
        <td><p>The stream to which the contents of the current stream will be copied.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">bufferSize</span></td>
        <td><p>The size, in bytes, of the buffer. This value must be greater than zero. The default size is 81920.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>The token to monitor for cancellation requests. The default value is <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken.none">None</a>.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>A task that represents the asynchronous copy operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.copytoasync#system-io-stream-copytoasync(system-io-stream-system-int32-system-threading-cancellationtoken)">Stream.CopyToAsync(Stream, int, CancellationToken)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception">ArgumentNullException</a></td>
        <td><p><code class="paramref">destination</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception">ArgumentOutOfRangeException</a></td>
        <td><p><code class="paramref">bufferSize</code> is negative or zero.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Either the current stream or the destination stream is disposed.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The current stream does not support reading, or the destination stream does not support writing.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.operationcanceledexception">OperationCanceledException</a></td>
        <td><p>The cancellation token was canceled. This exception is stored into the returned task.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_EndRead_" data-uid="ETLBox.Helper.NoFlushStream.EndRead*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_EndRead_System_IAsyncResult_" data-uid="ETLBox.Helper.NoFlushStream.EndRead(System.IAsyncResult)">EndRead(IAsyncResult)</h4>
  <div class="markdown level1 summary"><p>Waits for the pending asynchronous read to complete. (Consider using <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readasync#system-io-stream-readasync(system-byte()-system-int32-system-int32)">ReadAsync(byte[], int, int)</a> instead.)</p>
</div>
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
        <td><p>The reference to the pending asynchronous request to finish.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><p>The number of bytes read from the stream, between zero (0) and the number of bytes requested. ReadAsync returns zero (0) only if zero bytes were requested or if no more bytes will be available because it's at the end of the stream; otherwise, read operations do not complete until at least one byte is available. If zero bytes are requested, read operations may complete immediately or may not complete until at least one byte is available (but without consuming any data).</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.endread">Stream.EndRead(IAsyncResult)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception">ArgumentNullException</a></td>
        <td><p><code class="paramref">asyncResult</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentexception">ArgumentException</a></td>
        <td><p>A handle to the pending read operation is not available.</p>
<p>-or-</p>
<p>The pending operation does not support reading.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception">InvalidOperationException</a></td>
        <td><p><code class="paramref">asyncResult</code> did not originate from a <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.beginread">BeginRead(byte[], int, int, AsyncCallback, object)</a> method on the current stream.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>The stream is closed or an internal error has occurred.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_EndWrite_" data-uid="ETLBox.Helper.NoFlushStream.EndWrite*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_EndWrite_System_IAsyncResult_" data-uid="ETLBox.Helper.NoFlushStream.EndWrite(System.IAsyncResult)">EndWrite(IAsyncResult)</h4>
  <div class="markdown level1 summary"><p>Ends an asynchronous write operation. (Consider using <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writeasync#system-io-stream-writeasync(system-byte()-system-int32-system-int32)">WriteAsync(byte[], int, int)</a> instead.)</p>
</div>
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
        <td><p>A reference to the outstanding asynchronous I/O request.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.endwrite">Stream.EndWrite(IAsyncResult)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception">ArgumentNullException</a></td>
        <td><p><code class="paramref">asyncResult</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentexception">ArgumentException</a></td>
        <td><p>A handle to the pending write operation is not available.</p>
<p>-or-</p>
<p>The pending operation does not support writing.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception">InvalidOperationException</a></td>
        <td><p><code class="paramref">asyncResult</code> did not originate from a <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.beginwrite">BeginWrite(byte[], int, int, AsyncCallback, object)</a> method on the current stream.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>The stream is closed or an internal error has occurred.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_Flush_" data-uid="ETLBox.Helper.NoFlushStream.Flush*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Flush" data-uid="ETLBox.Helper.NoFlushStream.Flush">Flush()</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, clears all buffers for this stream and causes any buffered data to be written to the underlying device.</p>
</div>
  <div class="markdown level1 conceptual"></div>
  <h5 class="declaration">Declaration</h5>
{{< /rawhtml >}}

```C#
    public override void Flush()
```

{{< rawhtml >}}
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.flush">Stream.Flush()</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>An I/O error occurs.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_FlushAsync_" data-uid="ETLBox.Helper.NoFlushStream.FlushAsync*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_FlushAsync_System_Threading_CancellationToken_" data-uid="ETLBox.Helper.NoFlushStream.FlushAsync(System.Threading.CancellationToken)">FlushAsync(CancellationToken)</h4>
  <div class="markdown level1 summary"><p>Asynchronously clears all buffers for this stream, causes any buffered data to be written to the underlying device, and monitors cancellation requests.</p>
</div>
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
        <td><p>The token to monitor for cancellation requests. The default value is <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken.none">None</a>.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>A task that represents the asynchronous flush operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.flushasync#system-io-stream-flushasync(system-threading-cancellationtoken)">Stream.FlushAsync(CancellationToken)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>The stream has been disposed.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.operationcanceledexception">OperationCanceledException</a></td>
        <td><p>The cancellation token was canceled. This exception is stored into the returned task.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_Read_" data-uid="ETLBox.Helper.NoFlushStream.Read*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Read_System_Byte___System_Int32_System_Int32_" data-uid="ETLBox.Helper.NoFlushStream.Read(System.Byte[],System.Int32,System.Int32)">Read(byte[], int, int)</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, reads a sequence of bytes from the current stream and advances the position within the stream by the number of bytes read.</p>
</div>
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
        <td><p>An array of bytes. When this method returns, the buffer contains the specified byte array with the values between <code class="paramref">offset</code> and (<code class="paramref">offset</code> + <code class="paramref">count</code> - 1) replaced by the bytes read from the current source.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td><p>The zero-based byte offset in <code class="paramref">buffer</code> at which to begin storing the data read from the current stream.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td><p>The maximum number of bytes to be read from the current stream.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><p>The total number of bytes read into the buffer. This can be less than the number of bytes requested if that many bytes are not currently available, or zero (0) if <code class="paramref">count</code> is 0 or the end of the stream has been reached.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.read#system-io-stream-read(system-byte()-system-int32-system-int32)">Stream.Read(byte[], int, int)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentexception">ArgumentException</a></td>
        <td><p>The sum of <code class="paramref">offset</code> and <code class="paramref">count</code> is larger than the buffer length.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception">ArgumentNullException</a></td>
        <td><p><code class="paramref">buffer</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception">ArgumentOutOfRangeException</a></td>
        <td><p><code class="paramref">offset</code> or <code class="paramref">count</code> is negative.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>An I/O error occurs.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support reading.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_ReadAsync_" data-uid="ETLBox.Helper.NoFlushStream.ReadAsync*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_ReadAsync_System_Byte___System_Int32_System_Int32_System_Threading_CancellationToken_" data-uid="ETLBox.Helper.NoFlushStream.ReadAsync(System.Byte[],System.Int32,System.Int32,System.Threading.CancellationToken)">ReadAsync(byte[], int, int, CancellationToken)</h4>
  <div class="markdown level1 summary"><p>Asynchronously reads a sequence of bytes from the current stream, advances the position within the stream by the number of bytes read, and monitors cancellation requests.</p>
</div>
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
        <td><p>The buffer to write the data into.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td><p>The byte offset in <code class="paramref">buffer</code> at which to begin writing data from the stream.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td><p>The maximum number of bytes to read.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>The token to monitor for cancellation requests. The default value is <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken.none">None</a>.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1">Task</a>&lt;<a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>&gt;</td>
        <td><p>A task that represents the asynchronous read operation. The value of the <code class="paramref">TResult</code> parameter contains the total number of bytes read into the buffer. The result value can be less than the number of bytes requested if the number of bytes currently available is less than the requested number, or it can be 0 (zero) if <code class="paramref">count</code> is 0 or if the end of the stream has been reached.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readasync#system-io-stream-readasync(system-byte()-system-int32-system-int32-system-threading-cancellationtoken)">Stream.ReadAsync(byte[], int, int, CancellationToken)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception">ArgumentNullException</a></td>
        <td><p><code class="paramref">buffer</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception">ArgumentOutOfRangeException</a></td>
        <td><p><code class="paramref">offset</code> or <code class="paramref">count</code> is negative.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentexception">ArgumentException</a></td>
        <td><p>The sum of <code class="paramref">offset</code> and <code class="paramref">count</code> is larger than the buffer length.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support reading.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>The stream has been disposed.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception">InvalidOperationException</a></td>
        <td><p>The stream is currently in use by a previous read operation.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.operationcanceledexception">OperationCanceledException</a></td>
        <td><p>The cancellation token was canceled. This exception is stored into the returned task.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_ReadByte_" data-uid="ETLBox.Helper.NoFlushStream.ReadByte*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_ReadByte" data-uid="ETLBox.Helper.NoFlushStream.ReadByte">ReadByte()</h4>
  <div class="markdown level1 summary"><p>Reads a byte from the stream and advances the position within the stream by one byte, or returns -1 if at the end of the stream.</p>
</div>
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
        <td><p>The unsigned byte cast to an <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a>, or -1 if at the end of the stream.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.readbyte">Stream.ReadByte()</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support reading.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_Seek_" data-uid="ETLBox.Helper.NoFlushStream.Seek*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Seek_System_Int64_System_IO_SeekOrigin_" data-uid="ETLBox.Helper.NoFlushStream.Seek(System.Int64,System.IO.SeekOrigin)">Seek(long, SeekOrigin)</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, sets the position within the current stream.</p>
</div>
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
        <td><p>A byte offset relative to the <code class="paramref">origin</code> parameter.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.seekorigin">SeekOrigin</a></td>
        <td><span class="parametername">origin</span></td>
        <td><p>A value of type <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.seekorigin">SeekOrigin</a> indicating the reference point used to obtain the new position.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int64">long</a></td>
        <td><p>The new position within the current stream.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.seek">Stream.Seek(long, SeekOrigin)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>An I/O error occurs.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support seeking, such as if the stream is constructed from a pipe or console output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_SetLength_" data-uid="ETLBox.Helper.NoFlushStream.SetLength*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_SetLength_System_Int64_" data-uid="ETLBox.Helper.NoFlushStream.SetLength(System.Int64)">SetLength(long)</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, sets the length of the current stream.</p>
</div>
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
        <td><p>The desired length of the current stream in bytes.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.setlength">Stream.SetLength(long)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>An I/O error occurs.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support both writing and seeking, such as if the stream is constructed from a pipe or console output.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_Write_" data-uid="ETLBox.Helper.NoFlushStream.Write*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_Write_System_Byte___System_Int32_System_Int32_" data-uid="ETLBox.Helper.NoFlushStream.Write(System.Byte[],System.Int32,System.Int32)">Write(byte[], int, int)</h4>
  <div class="markdown level1 summary"><p>When overridden in a derived class, writes a sequence of bytes to the current stream and advances the current position within this stream by the number of bytes written.</p>
</div>
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
        <td><p>An array of bytes. This method copies <code class="paramref">count</code> bytes from <code class="paramref">buffer</code> to the current stream.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td><p>The zero-based byte offset in <code class="paramref">buffer</code> at which to begin copying bytes to the current stream.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td><p>The number of bytes to be written to the current stream.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.write#system-io-stream-write(system-byte()-system-int32-system-int32)">Stream.Write(byte[], int, int)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentexception">ArgumentException</a></td>
        <td><p>The sum of <code class="paramref">offset</code> and <code class="paramref">count</code> is greater than the buffer length.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception">ArgumentNullException</a></td>
        <td><p><code class="paramref">buffer</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception">ArgumentOutOfRangeException</a></td>
        <td><p><code class="paramref">offset</code> or <code class="paramref">count</code> is negative.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>An I/O error occurred, such as the specified file cannot be found.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support writing.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.write#system-io-stream-write(system-byte()-system-int32-system-int32)">Write(byte[], int, int)</a> was called after the stream was closed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_WriteAsync_" data-uid="ETLBox.Helper.NoFlushStream.WriteAsync*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_WriteAsync_System_Byte___System_Int32_System_Int32_System_Threading_CancellationToken_" data-uid="ETLBox.Helper.NoFlushStream.WriteAsync(System.Byte[],System.Int32,System.Int32,System.Threading.CancellationToken)">WriteAsync(byte[], int, int, CancellationToken)</h4>
  <div class="markdown level1 summary"><p>Asynchronously writes a sequence of bytes to the current stream, advances the current position within this stream by the number of bytes written, and monitors cancellation requests.</p>
</div>
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
        <td><p>The buffer to write data from.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">offset</span></td>
        <td><p>The zero-based byte offset in <code class="paramref">buffer</code> from which to begin copying bytes to the stream.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.int32">int</a></td>
        <td><span class="parametername">count</span></td>
        <td><p>The maximum number of bytes to write.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken">CancellationToken</a></td>
        <td><span class="parametername">cancellationToken</span></td>
        <td><p>The token to monitor for cancellation requests. The default value is <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken.none">None</a>.</p>
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
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task">Task</a></td>
        <td><p>A task that represents the asynchronous write operation.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writeasync#system-io-stream-writeasync(system-byte()-system-int32-system-int32-system-threading-cancellationtoken)">Stream.WriteAsync(byte[], int, int, CancellationToken)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentnullexception">ArgumentNullException</a></td>
        <td><p><code class="paramref">buffer</code> is <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a>.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception">ArgumentOutOfRangeException</a></td>
        <td><p><code class="paramref">offset</code> or <code class="paramref">count</code> is negative.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.argumentexception">ArgumentException</a></td>
        <td><p>The sum of <code class="paramref">offset</code> and <code class="paramref">count</code> is larger than the buffer length.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support writing.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>The stream has been disposed.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.invalidoperationexception">InvalidOperationException</a></td>
        <td><p>The stream is currently in use by a previous write operation.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.operationcanceledexception">OperationCanceledException</a></td>
        <td><p>The cancellation token was canceled. This exception is stored into the returned task.</p>
</td>
      </tr>
    </tbody>
  </table>
  <a id="ETLBox_Helper_NoFlushStream_WriteByte_" data-uid="ETLBox.Helper.NoFlushStream.WriteByte*"></a>
  <h4 id="ETLBox_Helper_NoFlushStream_WriteByte_System_Byte_" data-uid="ETLBox.Helper.NoFlushStream.WriteByte(System.Byte)">WriteByte(byte)</h4>
  <div class="markdown level1 summary"><p>Writes a byte to the current position in the stream and advances the position within the stream by one byte.</p>
</div>
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
        <td><p>The byte to write to the stream.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h5 class="overrides">Overrides</h5>
  <div><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.stream.writebyte">Stream.WriteByte(byte)</a></div>
  <h5 class="exceptions">Exceptions</h5>
  <table class="table table-bordered table-condensed">
    <thead>
      <tr>
        <th>Type</th>
        <th>Condition</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.io.ioexception">IOException</a></td>
        <td><p>An I/O error occurs.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.notsupportedexception">NotSupportedException</a></td>
        <td><p>The stream does not support writing, or the stream is already closed.</p>
</td>
      </tr>
      <tr>
        <td><a class="xref" href="https://learn.microsoft.com/dotnet/api/system.objectdisposedexception">ObjectDisposedException</a></td>
        <td><p>Methods were called after the stream was closed.</p>
</td>
      </tr>
    </tbody>
  </table>
  <h3 id="implements">Implements</h3>
  <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.iasyncdisposable">IAsyncDisposable</a>
  </div>
  <div>
      <a class="xref" href="https://learn.microsoft.com/dotnet/api/system.idisposable">IDisposable</a>
  </div>

{{< /rawhtml >}}
