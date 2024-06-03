---
title: "Component basics" 
description: "Overview of shared properties and methods for all data flow components"
lead: "All components in ETLBox share some properties and methods. This chapter describes the details."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 260
toc: true
---

## Components 

There are several connectors available in ETLBox that allow you to connect to a database, a flat file, a web service, a C# collection or any other data source or destination that you like. The connector normally has a Source and a Destination component. The source is used to retrieve data, and the destination used to write or store your data. They are always used at the beginning or the end of data flow (though of course every flow can have multiple sources and destinations.) In between you have transformations that modify your data.

Transformations are the transform part of an ETL pipeline. They allow you to clean, standardize, de-duplicate or manipulate your data. There are two main differentiations of transformations: Non-blocking and blocking transformation. 

#### Non-blocking transformations

A non-blocking transformation will only need as much memory as needed to do the actual work. E.g. a RowTransformation normally keeps only the current row in memory (plus some rows in an extra input buffer to increase throughput). 

#### Blocking transformations

In contrast the blocking transformation: They will use much more memory because some part or the whole transformation needs to store much more data in memory before it can continue to work. A good example is the sort: Before any sorting can be done, all data needs to be loaded into memory. Then the actual sort operation is performed, and after this all rows are send to output of the sort. Not all components will be as greedy as the sort when it comes to memory consumption, but we recommend to take this into consideration when you start to load big amounts of data into a data flow that contains one or more blocking transformations. 

## Input and output buffer 

All sources have an output buffer - this means that every data row can be cached before it is send to the next component in the flow. All destinations have an input buffer - this means that every data row can be cached before it is written into the target. Every transformation also come with an input buffer. If the transformation receives more data in its input than it is able to process, the buffer will hold this data until the transformation can continue with the next row. 

This buffering mechanism improves general throughput. E.g. a data source can read all data as fast as possible, as there will always be an input buffer in the transformation that will accept and buffer the record in memory. Whenever the next component is ready for the more data, it can always grab the next row from the buffer.

### Restricting buffer size

You can restrict the maximal buffer size by setting `MaxBufferSize` to a value greater than 0 (the default value is 100000 rows).
Sometime components have more than buffer. E.g. the Multicast has one input buffer for each component connected to its output. Nevertheless, you will always restrict the maximal buffer for all buffers of a component by setting a value for  `MaxBufferSize`.

## Static configuration classes

The static class `Settings` allows to set default parameters valid for all components and tasks. The values set in this class will serve as the default value. Each value can be overwritten in a dataflow component or control flow task separately.

- `MaxBufferSize`:  The default maximum size for all buffers in the dataflow.
- `LoggingThresholdRows`: To avoid getting log message for every message, by default only log message are produced when 1000 rows are processed. Set this property to decrease or increase this value for a data flow components. 
- `DefaultDbConnection`:  Store your default database connection manager here. This connection will then be used by all tasks or all data flow components that need a connection manager. 
- `LogInstance`: An `ILogger` instance which can be used for all log output produced by ETLBox

## Shared properties

#### Progress Count

The `ProgressCount` property on each data flow components shows how many records the component has processed. This values is increased by 1 for every component that can process data row-by-row. Components that work batch-oriented (e.g. the DbDestination or the BatchTransformation) the progress count will only be increased by the batch size, whenever a batch was successfully processed. 

#### Linked components

If you are interested in the linked components of a class, each components holds a list of `Predecessors`and `Successors`. 

#### Exception

 If your data flow fails, one of the components in your flow will have a value in the  `Exception` property, namely the originator of exception. 
 
#### Completion 

 The `Completion` property holds a task that is run to completion when the components finishes processing all records. If an exception occured somewhere in the flow, this task is then either faulted (if the component was the origin of the exception of a successor) or canceled (all other components)

#### OnCompletion action

In the `OnCompletion` action you can define your own logic that is executed when the components successfully completed processing of all records. 

