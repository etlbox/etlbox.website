---
title: "Namespace ETLBox.ControlFlow.Tasks"
description: "Details for Namespace ETLBox.ControlFlow.Tasks (ETLBox.ControlFlow)"
draft: false
images: []
menu:
  api:
    parent: "etlbox.controlflow"
weight: 10067
toc: false
---

{{< rawhtml >}}

            <article class="content wrap" id="_content" data-uid="ETLBox.ControlFlow.Tasks">
  <h1 id="ETLBox_ControlFlow_Tasks" data-uid="ETLBox.ControlFlow.Tasks" class="text-break">Namespace ETLBox.ControlFlow.Tasks
  </h1>
  <div class="markdown level0 summary"></div>
  <div class="markdown level0 conceptual"></div>
  <div class="markdown level0 remarks"></div>
    <h3 id="classes">Classes
  </h3>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/cleanupschematask">CleanUpSchemaTask</a></h4>
      <section><p>Tries to remove all database objects from the given schema(s).
Currently only SqlServer and Oracle support this task.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/createdatabasetask">CreateDatabaseTask</a></h4>
      <section><p>Will create a database if the database doesn't exists. In MySql or MariaDb, this will create a schema.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/createindextask">CreateIndexTask</a></h4>
      <section><p>Creates an index if the index doesn't exists, otherwise the index is dropped and recreated.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/createproceduretask">CreateProcedureTask</a></h4>
      <section><p>Creates or updates a procedure.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/createschematask">CreateSchemaTask</a></h4>
      <section><p>Creates a schema. For MySql or MariaDb, use the CreateDatabaseTask instead.
The Create method will throw an exception if the schema already exists.
CreateIfNotExists will only create a schema if it doesn't exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/createtabletask">CreateTableTask</a></h4>
      <section><p>Creates a table. If the tables exists, this task won't change the table.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/createviewtask">CreateViewTask</a></h4>
      <section><p>Creates or alters a view.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/dropdatabasetask">DropDatabaseTask</a></h4>
      <section><p>Drops a database. Use DropIfExists to drop a database only if it exists. In MySql, this will drop a schema.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/dropindextask">DropIndexTask</a></h4>
      <section><p>Drops an index. Use DropIfExists to drop an index only if it exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/dropproceduretask">DropProcedureTask</a></h4>
      <section><p>Drops a procedure. Use DropIfExists to drop a procedure only if it exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/dropschematask">DropSchemaTask</a></h4>
      <section><p>Drops a schema. Use DropIfExists to drop a schema only if it exists. For MySql or MariaDb, use the DropDatabase task instead.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/droptabletask">DropTableTask</a></h4>
      <section><p>Drops a table. Use DropIfExists to drop a table only if it exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/dropviewtask">DropViewTask</a></h4>
      <section><p>Drops a view. Use DropIfExists to drop a view only if it exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/getdatabaselisttask">GetDatabaseListTask</a></h4>
      <section><p>Returns a list of all user databases on the server. Make sure to connect with the correct permissions!
In MySql, this will return a list of all schemas.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/getlisttask">GetListTask</a></h4>
      <section><p>Returns a list of all user databases on the server. Make sure to connect with the correct permissions!
In MySql, this will return a list of all schemas.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/gettablelisttask">GetTableListTask</a></h4>
      <section><p>Returns a list of all tables in the currently connected database.<br>
Make sure to connect with the correct permissions!</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/getviewlisttask">GetViewListTask</a></h4>
      <section><p>Returns a list of all tables in the currently connected database.<br>
Make sure to connect with the correct permissions!</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/ifdatabaseexiststask">IfDatabaseExistsTask</a></h4>
      <section><p>Checks if a database exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/ifindexexiststask">IfIndexExistsTask</a></h4>
      <section><p>Checks if an index exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/ifprocedureexiststask">IfProcedureExistsTask</a></h4>
      <section><p>Checks if a procedure exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/ifschemaexiststask">IfSchemaExistsTask</a></h4>
      <section><p>Checks if a schema exists. In MySql or MariaDb, use the IfDatabaseExistsTask instead.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/iftableorviewexiststask">IfTableOrViewExistsTask</a></h4>
      <section><p>Checks if a table exists.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/rowcounttask">RowCountTask</a></h4>
      <section><p>Count the row in a table. This task normally uses the  COUNT(*) method (could take some time on big tables).
You can pass a a filter condition for the count.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/sqltask">SqlTask</a></h4>
      <section><p>Executes any sql on the database. Use ExecuteNonQuery for SQL statements returning no data,
ExecuteScalar for statements that return only one row and one column or
ExecuteReader for SQL that returns multiple rows or columns</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/truncatetabletask">TruncateTableTask</a></h4>
      <section><p>Truncates a table.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/xmlatask">XmlaTask</a></h4>
      <section><p>This task can exeucte any XMLA.</p>
</section>
    <h3 id="enums">Enums
  </h3>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/recoverymodel">RecoveryModel</a></h4>
      <section><p>The sql server recovery models.</p>
</section>
      <h4><a class="xref" href="/api/etlbox.controlflow.tasks/rowcountoptions">RowCountOptions</a></h4>
      <section><p>Used in the RowCountTask. None forces the RowCountTask to do a normal COUNT(<em>) and works on all databases.
QuickQueryMode only works on SqlServer and uses the partition table which can be much faster on tables with a big amount of data.
DirtyRead does a normal COUNT(</em>) but also reading uncommitted reads.</p>
</section>

{{< /rawhtml >}}
