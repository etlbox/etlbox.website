---
title: "Merge Join"
description: "Explains how to use the MergeJoin transformation in ETLBox to combine rows from two input sources. Covers always-join and comparison-based join modes, buffering behavior, sorting requirements, support for typed and dynamic data, and how unmatched records are handled."
lead: "The <code>MergeJoin</code> transformation in ETLBox allows you to combine rows from two separate input streams into one output. It functions similarly to a merge or join operation in relational databases. Each side of the join — <b>left</b> and <b>right</b> — is linked to a source or upstream transformation. You then define a function that describes how to merge the records from each side."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 526
toc: true
chatgpt-review: true
---

The `MergeJoin` can operate in two modes:

- **Always Join**: Each left row is joined with the corresponding right row in order.
- **Conditional Join with Comparison**: Records are joined only if they meet a specified condition.

## Buffering Behavior

- The `MergeJoin` has one input buffer for each input (`LeftInput` and `RightInput`).
- It behaves as **non-blocking** when performing an always join.
- It behaves as **partially blocking** when using a comparison function, buffering rows until a matching pair is found.

## Always Join

This is the default mode when no comparison function is set. The component joins records from the left and right inputs in the order they arrive. This mode is best suited when both inputs have the **same number of rows** and are naturally aligned.

If one input has more rows than the other, extra rows are joined with `null`.

### Example: Always Join

```csharp
public class MyLeftRow {
    public string FirstName { get; set; }
}

public class MyRightRow {
    public string LastName { get; set; }
}

public class MyOutputRow {
    public string FullName { get; set; }
}

public static void Main() {
    var source1 = new MemorySource<MyLeftRow>();
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Elvis" });
    source1.DataAsList.Add(new MyLeftRow() { FirstName = "Marilyn" });

    var source2 = new MemorySource<MyRightRow>();
    source2.DataAsList.Add(new MyRightRow() { LastName = "Presley" });
    source2.DataAsList.Add(new MyRightRow() { LastName = "Monroe" });

    var join = new MergeJoin<MyLeftRow, MyRightRow, MyOutputRow>(
        (leftRow, rightRow) => {
            return new MyOutputRow() {
                FullName = leftRow.FirstName + " " + rightRow.LastName
            };
        });

    var dest = new MemoryDestination<MyOutputRow>();
    source1.LinkTo(join.LeftInput);
    source2.LinkTo(join.RightInput);
    join.LinkTo(dest);

    Network.Execute(source1, source2);

    foreach (var row in dest.Data)
        Console.WriteLine(row.FullName);

    //Outputs:
    //Elvis Presley
    //Marilyn Monroe
}
```

## Join with Comparison

The `MergeJoin` transformation allows you to specify a match and comparison function that determines which records should be joined. Only if both records match according to the comparison function will they be joined. Otherwise, one of the records will be passed through with a `null` as a placeholder for the unmatched side.

For optimal performance, the `MergeJoin` requires sorted input from both sources. The rows should be ordered based on the property used in the comparison. You can pass a `ComparisonFunc<TInput1, TInput2, int>` delegate to the `MergeJoin`, which returns an integer based on the comparison between the two input records. This function follows the standard comparison delegate pattern.

- If the `ComparisonFunc` returns `0`, both records are considered a match and are joined. The joined result is sent to the output.
- If the `ComparisonFunc` returns a value less than `0`, the record from the left input is considered to come before the right one. The left record is sent to the output along with a `null` as a placeholder for the right.
- If the `ComparisonFunc` returns a value greater than `0`, the record from the right input comes first. The right record is sent to the output with a `null` placeholder for the left.

To summarize: when the comparison result is `0`, both rows are joined and passed on. If not, the record from one side is passed along with a `null` for the unmatched side.

If either input source has unmatched trailing rows, those records will be sent to the output with a null value for the other side — even when using a comparison function.

### Example: Join with Comparison

```csharp
public class MyRow {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string FullName { get; set; }
}

public void JoinWithComparisonExample() {
    var source1 = new MemorySource<MyRow>();
    source1.DataAsList.Add(new MyRow() { Id = 1, FirstName = "Elvis" });
    source1.DataAsList.Add(new MyRow() { Id = 2, FirstName = "Psy" });
    source1.DataAsList.Add(new MyRow() { Id = 3, FirstName = "Marilyn" });

    var source2 = new MemorySource<MyRow>();
    source2.DataAsList.Add(new MyRow() { Id = 1, LastName = "Presley" });
    source2.DataAsList.Add(new MyRow() { Id = 3, LastName = "Monroe" });

    var join = new MergeJoin<MyRow>(
        (leftRow, rightRow) => {
            if (rightRow == null)
                leftRow.FullName = leftRow.FirstName + " " + "Unknown";
            else
                leftRow.FullName = leftRow.FirstName + " " + rightRow.LastName;
            return leftRow;
        });

    join.ComparisonFunc = (inputRow1, inputRow2) => {
        if (inputRow1.Id == inputRow2.Id)
            return 0;
        else if (inputRow1.Id < inputRow2.Id)
            return -1;
        else
            return 1;
    };

    var dest = new MemoryDestination<MyRow>();
    source1.LinkTo(join.LeftInput);
    source2.LinkTo(join.RightInput);
    join.LinkTo(dest);

    Network.Execute(source1, source2);

    foreach (var row in dest.Data)
        Console.WriteLine(row.FullName);

    //Outputs:
    //Elvis Presley
    //Psy Unknown
    //Marilyn Monroe
}
```

{{< callout context="tip" icon="outline/rocket" >}}
When handling join logic, always check for `null` in either the `leftRow` or `rightRow` inside the `MergeJoinFunc`, as one side may be unmatched (depending on the comparison result or unmatched trailing rows in one input source).
{{< /callout>}}

## Sorting Requirements

When using a `ComparisonFunc`, both inputs should be **sorted on the matching key**. This is critical to ensure correct and predictable behavior.

You can use the [Sort transformation](/docs/blocking-transformations/sort/) to sort the data explicitly if your source does not provide sorted output.

{{< callout context="caution" icon="outline/alert-triangle" >}}
The `MergeJoin` does not validate sort order; incorrect sorting can lead to incorrect joins or missing matches.
{{< /callout >}}

## Types and Constructors

The `MergeJoin` supports:

- Different types for left input (`TInput1`), right input (`TInput2`), and output (`TOutput`)
- A simplified version: `MergeJoin<T>` for same input/output types
- A dynamic version: `MergeJoin` (uses `ExpandoObject`)

You can create it using:

```csharp
var join = new MergeJoin<TInput1, TInput2, TOutput>();
join.MergeJoinFunc = (left, right) => { ... };
```

or using the constructor directly:

```csharp
var join = new MergeJoin<TInput, TInput, TInput>((left, right) => { ... });
```

Here is the additional section for **Dynamic Object Support** in `MergeJoin`, including a complete example. You can place this section before the **Summary** section in the documentation.

---

## Dynamic Object Support

The `MergeJoin` also works with dynamic objects (`ExpandoObject`). This is especially useful when the schema is not known at compile time or varies across datasets. The dynamic version of `MergeJoin` allows you to work with property names as strings at runtime.

### Example: Dynamic MergeJoin

```csharp
var source1 = new MemorySource();
dynamic left1 = new ExpandoObject();
left1.FirstName = "Elvis";
dynamic left2 = new ExpandoObject();
left2.FirstName = "Marilyn";
source1.DataAsList.Add(left1);
source1.DataAsList.Add(left2);

var source2 = new MemorySource();
dynamic right1 = new ExpandoObject();
right1.LastName = "Presley";
dynamic right2 = new ExpandoObject();
right2.LastName = "Monroe";
source2.DataAsList.Add(right1);
source2.DataAsList.Add(right2);

var join = new MergeJoin(
    (left, right) => {
        dynamic output = new ExpandoObject();
        output.FullName = $"{((dynamic)left).FirstName} {((dynamic)right).LastName}";
        return output;
    });

var dest = new MemoryDestination();
source1.LinkTo(join.LeftInput);
source2.LinkTo(join.RightInput);
join.LinkTo(dest);

Network.Execute(source1, source2);

foreach (dynamic row in dest.Data)
    Console.WriteLine(row.FullName);

// Output:
// Elvis Presley
// Marilyn Monroe
```

You can also use `ExpandoObject` with a `ComparisonFunc` if you want conditional joining, using similar runtime property access.
