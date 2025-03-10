---
title: "Sort"
description: "Details about the Sort"
lead: "The sort is a simple transformation that sorts all you incoming data."
draft: false
images: []
menu:
  docs:
    parent: "blocking-transformations"
weight: 610
toc: true
---

## Overview

A sort will wait for all data to arrive and then sort the data based on the given sort method. This is a blocking transformation, because data can only be sorted when all records are available in memory.

You can specify the sorting method yourself by defining a Comparison function which is used for sorting. A comparison function defines if one object is either smaller, greate or equal than another object. Based on this information your whole data set will be sort.

#### Buffer

This is a blocking transformation, because data can only be sorted when all records are available in memory. Thus, it will always consume as much memory as needed to store all incoming rows. The Sort has an input and an output buffer. You can't restrict the number of rows stored in the input buffer, but you can restrict the amount of records in the output buffer by setting the `MaxBufferSize` property to a value greater than 0.

### Code snippet

```C#
Comparison<MySimpleRow> comp = new Comparison<MySimpleRow>(
        (x, y) => y.Col1 - x.Col1
    );
Sort<MySimpleRow> block = new Sort<MySimpleRow>(comp);
```


