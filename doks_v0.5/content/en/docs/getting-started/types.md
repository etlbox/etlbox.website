---
title: "Working with types"
description: "Details how to execute, link and start/wait for a data flow."
lead: "ETLBox supports generic components that are typed to an object, but also works well with dynamic objects. Some components also allow to use an array as type. This chapter will give insight how to operate on your data with different types."
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 230
toc: true
---

## Generic approach

Almost all components in ETLBox can be defined with a strongly typed object, also known as *POCO* (Plain old component object). This object can be used to store and process rows of your data in your data flow. 

Most sources provide a column name for every data column. E.g., in a Csv file you normally have a header at the top row with names for each column. In a database table, there are always column names stored along with your data. 

The idea is that you define an object in C# where the name of the columns in the source match with the property names in your object. At best also the data type of the your source data would match with the data type in your object. 

When a source reads data, it will try to map the column names from the source to the property names in your data object. E.g. a column named `Value1` 
would be stored in the property with the same name. Optionally, you can add some mapping logic to your. For a database source, you could use the `ColumnMap` attribute, which defines which column is mapped to which property. If there is no matching property at, the column will be ignored.

### Example mapping

```C#
//Prepare table
SqlTask.ExecuteNonQuery(@"CREATE TABLE demotable (
  Value1 INT NULL,
  Value2 VARCHAR(100) NULL
 )");

public class MySimpleRow {
    public int Value1 { get; set; }
    [ColumnMap("Value2")]
    public string Col2 { get; set; }
}

DbSource<MySimpleRow> source = new DbSource<MySimpleRow>("demotable");
```
The DbSource is used as a generic class - it is created using the type `MySimpleRow`. In this example, `MySimpleRow` is our *POCO*.

The table `demotable` has 2 columns: `Value1` with an `INT` data type and `Value2` with a `VARCHAR` data type. The *POCO* `MySimpleRow` has two properties: `Value1` and `Value2`. `Value2` comes with a `ColumnMap("Value2")` attribute. When the data flow is executed and data is loaded from the source, the property `Value1` is automatically mapped to the table column `Value1` because of their matching names. The table column `Value2` is mapped to the property `Col2` because of the definition of the ColumnMap attribute. 

{{< alert text="The ColumMap attribute is only valid for the <code>DbSource</code>, <code>DbDestination</code> and <code>DbMerge</code>. Other sources can use different mapping methods." >}}

### Ignored columns 

If you use a POCO to describe you data type, this object can have a different amount of properties. In our example above, we could define a POCO that contains an additional property (Let's call it AnotherValue) and leave out Col2. Our object would look like this:

```C#
//Prepare table
SqlTask.ExecuteNonQuery(@"CREATE TABLE demotable (
  Value1 INT NULL,
  Value2 VARCHAR(100) NULL
 )");

public class MyNewRow {
    public int Value1 { get; set; }
    public string AnotherValue { get; set; }
}
DbSource<MyNewRow> source = new DbSource<MyNewRow>("demotable");
```

If we would use this object to map it with our source table, there would be only data read from `Value1`. Because the property
AnotherValue doesn't have a match in the source, no data will be read from this column.


### Automatic data type conversion

Whenever you read data from any source (database, csv, json, ...) or you write into any destination, sometimes the data types in your object will be different than the ones your database table or your object. ETLBox will always try to convert the data into the right type: E.g. when you read data from a CSV file, by default the data comes as a string. But if your object defines a numeric data type like int or double, it will be automatically converted. Or if you write into a database table, there could be a DECIMAL column in your table, and your object could hold a string value. As long as the string in your object can be converted into a decimal value, ETLBox will automatically try to cast your data into the right type.

## Dynamic object approach

Sometimes you don't want (or can) create an object during design-time for your data flow components. You want the properties (and perhaps methods etc.) created during run-time. Though .NET is a typed language, it does support dynamic objects. This basically means that you can define object where no type checks are executed when you compile you program. Defining a dynamic object is quite simple: when you create it, you use the `dynamic` keyword as type. 

### ExpandoObject

The easiest and most convenient approach to use dynamic objects in C# is to create an `ExpandoObject`. The `ExpandoObject` can be cast into
a `dynamic` type, which will tell the compiler to ignore type checks for instances of this class. 

Here is a simple example of using the `ExpandoObject`

```C#
dynamic sampleObject = new ExpandoObject();
sampleObject.Id = 3;
//Sample object now has a property "Id" of type int with the value 3
sampleObject.Test = "Dynamic Property";
//Adds a property "Test" of type string to sampleObject

```

The Microsoft documentation gives you a good explanation of the {{< link-ext text="possibilities of the ExpandoObject and the use of <code>dynamic</code>" url="https://docs.microsoft.com/en-us/dotnet/api/system.dynamic.expandoobject?view=netframework-4.8" >}}.

### ExpandoObject in ETLBox

In order to use the ExpandoObject and dynamic objects with ETLBox, you simple type your data flow with this object. 

```C#
DbSource<ExpandoObject> source = new DbSource<ExpandoObject>("sourceTable");
```

Alternatively, you just use the non generic object - which is a shortcut for using the ExpandoObject as type.

```C#
DbSource source = new DbSource("sourceTable");
```

Both code line are exactly the same. 

Let's walk through an example and assume we have two tables. The table `sourceTable` has two columns: `SourceCol1` and `SourceCol2`, both integer values.
The table `destTable` has one column: `DestColSum`, also an integer value.

This would be the Sql code to create this tables:

```sql
CREATE TABLE sourceTable (
    SourceCol1 INT NULL,
    SourceCol2 INT NULL
)
CREATE TABLE destTable (
    DestColSum INT NULL
)
```

We could now define the following data flow:

```C#
DbSource source = new DbSource("sourceTable");

//Act
RowTransformation trans = new RowTransformation(
    sourcedata =>
    {
        dynamic c = sourcedata as ExpandoObject;
        c.DestColSum = c.SourceCol1 + c.SourceCol2;
        return c;
    });
DbDestination dest = new DbDestination("destTable");

source.LinkTo(trans).LinkTo(dest);
Network.Execute(source);
```

In this example code, the data is read from a DbSource into an ExpandoObject. The properties `SourceCol1` and `SourceCol2` are created automatically by the `DbSource` - ETLBox will recognize that it is an ExpandoObject and create the dynamic object based on the column names and type in the source 

In the RowTransformation, we need to convert the ExpandoObject into a `dynamic` object first, so that you don't get any errors message when you compile your code. Now we can assign a new property to the (same) ExpandoObject - in this case, it's called `DestColSum` as a sum of the properties `SourceCol1` and `SourceCol2`.

When we write into the destination, ETLBox will see that there are the properties on the ExpandoObject: `DestColSum`, `SourceCol1` and `SourceCol2`. But only the name of one matches
with the destination column name: `DestColSum`. The other two properties will be ignored, and data stored in `DestColSum` will be written into the target.

### Mixing types

Of course you can combine both approaches in one data flow. Some transformations allow you define different types for input and output. Then you can define in your own code how to cast your data into the new type. We could rewrite our example above like this:

```C#
//Creating the POCO
public class MyRow {
    public int SourceCol1 { get; set; }
    public int SourceCol2 { get; set; }
}

DbSource<MyRow> source = new DbSource<MyRow>("sourceTable");

//Act
RowTransformation<MyRow,ExpandoObject> trans = 
    new RowTransformation<MyRow,ExpandoObject>(
    sourcedata =>
    {
        dynamic result = new ExpandoObject();
        result.DestColSum = sourceData.SourceCol1 + sourceData.SourceCol2;
        return result;
    });
DbDestination dest = new DbDestination("destTable");

source.LinkTo(trans);
trans.LinkTo(dest);
Network.Execute(source);
```

Now the sourceData variable in the RowTransformation would be of type `MyRow` - accessing the properties doesn't need any casting. For the output,we create a new dynamic ExpandObject and assign the sum of the source column to the (newly) created property `DestColSum`. The outcome of this example would be the exact same as in the previous example.

## Working with Arrays

Working with dynamic or strongly typed objects is the recommended way to use ETLBox components. But ETLBox offers a third way to create your data flow without
defining object types and the need to create a POCO for your data. You can simple use an array as data type - it should either be an array of type object or string. An string array could have advantages if you read data from json or csv, object could be the better choice when reading from databases. 

Here is an example code snipped for reading data from a file.

```C#
CsvSource<string[]> source = new CsvSource<string[]>("text.csv");
RowTransformation<string[]> row = new RowTransformation<string[]>( 
    row => {
        row[0] = row[0] + ".test";
        row[2] = row[2] * 7;
        }
);
DbDestination<string[]> dest = new DbDestination<string[]>("DestinationTable");

source.LinkTo(row).LinkTo(dest);
Network.Execute(source);
```

In this example, you would have all data from the first column in your csv file accessible at the first position of the string array, and so on. All your data will be automatically converted into a string data type. This will also work for a DbDestination - the string data will then automatically be converted into back into the 
right data type. Of course you will get an error if data types won't match (e.g. if you want to store the value "xyz" in an integer column). 

This approach is very useful when reading from a source where you get only string data, e.g. CSV or Json. 

### Converting arrays 

You could use the `RowTransformation` if you want to convert your string array into an object:

```C#
RowTransformation<string[], MySimpleRow> row = 
    new RowTransformation<string[], MySimpleRow>( 
    row => {
        new MySimpleRow() {
            Col1 = row[0];
            Value2 = int.Parse(row[1]);
        }
    );
```