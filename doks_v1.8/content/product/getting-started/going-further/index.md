---
title: "Going Further"
description: "Going Further with ETLBox: Unlocking Advanced Capabilities"
lead: "By now, you’ve seen how ETLBox simplifies building ETL pipelines and enables you to manage data flows with ease. But the real power of ETLBox lies in its ability to handle complex pipelines, its efficiency, and the possibilities of a fully code-first approach. Let’s explore how you can unlock ETLBox’s advanced capabilities and take your data pipelines to the next level."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 40
toc: true
---

## Building Complex Data Pipelines

ETLBox isn’t just for simple data workflows. It’s flexible enough to help you build **modular, scalable, and reusable pipelines** that can handle a wide range of data integration tasks. Whether you’re working with large datasets or managing multi-step transformations, ETLBox gives you the tools to get the job done efficiently.

In this article, we’ll explore some of ETLBox’s more advanced features—like optimizing performance with streaming data, handling complex transformations, and integrating with different .NET technologies.

### Parallel Processing and Buffering

A key concept in ETLBox is its ability to read from various sources, transform, and write data asynchronously. In a simple pipeline like this:

```kroki {type=mermaid}
%%{init: {'theme':'neutral'}}%%
flowchart LR
  source[↻ Source ] --> transformation(↻ Transformation)
  transformation --> destination[↻ Destination ]
```

- The source starts reading data.
- The transformation processes each record in real-time.
- The destination writes the data concurrently.

Each transformation and destination component uses a buffer, defined by the `MaxBufferSize` property, to temporarily store incoming rows before processing. This improves throughput and reduces latency. Wherever possible, ETLBox reads data from cursors or streams and writes it in the same way.

Some destinations, like `DbDestination`, support batch inserts, which significantly improve performance by writing multiple records at once instead of one by one.

You can control buffer behavior globally using the `Settings.MaxBufferSize` property.

### Blocking and Non-Blocking Transformations

ETLBox gives you control over how data is processed through two transformation types:

- **Blocking Transformations**: These require some or all of the data to be processed before producing output. Sort operations for example will need the entire dataset in memory to return sorted results. On the other hand, BatchTransformations are only partially blocking. They are waiting for a set number of records (defined by BatchSize) before processing and outputting them.
- **Non-Blocking Transformations**: These process data row by row, allowing real-time streaming. A typical example is a filter transformation, where each row is processed (or filtered) as soon as it’s read.

This difference is important if you’re working with large datasets that don’t fit into memory. Here you need to be cautious with blocking transformations. They may cause performance issues or memory bottlenecks. Non-blocking transformations are more memory-efficient and ideal for streaming data scenarios.


## Code-First Approach for Testable Pipelines

![Code-First 100% .NET](code-first.png)

One of ETLBox’s biggest strengths is its code-first design, making pipelines both powerful and easily testable. You can:

- Use your favourite version control to track changes
- Write unit tests for individual components or entire pipelines.
- Integrate data workflows into CI/CD pipelines.

This approach ensures your data pipelines are as reliable and maintainable as the rest of your codebase.

### Use the full .NET Ecosystem
ETLBox is built 100% in .NET, which means it integrates fully with other .NET technologies. For example, you can use ETLBox in Polyglot Notebooks for interactive data exploration.

Read the full blog article here: "[Unlock the Power of C# in Polyglot Notebooks](/blog/polyglot/)".

### Dynamic object support

ETLBox supports both:

- Strongly Typed Classes (a.k.a POCOs / Plain old CLR objects): For structured, type-safe data pipelines.
- Dynamic Objects (ExpandoObject and `dynamic` keyword): For flexible, schema-less data processing.

If you’re interested in dynamic data imports with built-in data validation, check out this example:
"[Redefining ETL: Data Flows Powered by C# ](/blog/data-validation-part1/)"

{{< callout context="note" icon="outline/info-circle" >}}
The `dynamic` keyword in .NET allows you to create objects whose members (properties and methods) are resolved at runtime instead of compile-time. This provides flexibility when working with data structures that don’t have a fixed schema.

`ExpandoObject` is a dynamic object provided by .NET that lets you add, remove, and modify properties at runtime. It’s commonly used when dealing with flexible data formats like JSON or when you need to work with objects without predefined classes.

Together, `dynamic` and `ExpandoObject` enable flexible, schema-less data handling, making them ideal for scenarios where data structures can change frequently.
{{< /callout >}}

## Enhanced Database support

![Star-Schema](star-schema.png)

While DbDestination allows for fast bulk inserts into supported databases, ETLBox also offers advanced features like DbMerge, which goes beyond simple inserts. With DbMerge, you can:

- Insert, Update, Upsert, Delete, or Merge data.
- Operate in either full or delta mode for optimized performance.

Learn more about merging into a database in this article: "[Mastering Database Merging: Comparing Different Approaches](/blog/merging/)"

### Loading Data into Star Schemas

ETLBox is well-suited for data warehousing tasks. It is a full alternative to technologies like SSIS or Azure Data Factory.

Read more in this article that shows how to use ETLBox to load data into a star schema or DWH: "[Building a Data Warehouse with ETLBox: A .NET Developer's Guide](/blog/building-dwh/)"


## Learn More

To deepen your knowledge of ETLBox:

- Start with the [Introduction section](/docs/introduction/simple-flow/) in the docs for a comprehensive overview.
- Check out real-world examples in the [Recipes section](/recipes/fundamentals/rating-orders/).
- Refer to the [API Documentation](/api) for detailed reference on properties and methods.

#### What's next

You can evaluate ETLBox for free. Details are provided in the next article.
