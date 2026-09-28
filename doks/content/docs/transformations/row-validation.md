---
title: "Row Validation"
description: "RowValidation is a transformation that evaluates rows based on configurable validation rules. It supports both row-level and column-level validation using predicates or built-in validation methods. Invalid rows can be redirected, logged, or annotated with validation errors, making it suitable for comprehensive data quality checks in ETL workflows."
lead: "The <code>RowValidation</code> transformation in ETLBox allows you to validate rows in your data flow based on customizable rules. This ensures data quality by enforcing conditions such as non-null values, numeric ranges, or custom validation logic on individual columns or entire rows."
draft: false
images: []
menu:
  docs:
    parent: "transformations"
weight: 529
toc: true
chatgpt-review: true
---

## Overview

You can apply validation rules at both the row and column level, with invalid rows being routed separately from valid rows for distinct processing.

### Buffering Behavior

- Non-blocking transformation
- Single input buffer
- Invalid rows can be redirected to a separate flow using `LinkInvalidTo`

### Validation Methods

Validation in `RowValidation` can be done in two primary ways:

1. **Row-Level Validation**: Define a predicate that evaluates whether a row is valid or not.
2. **Column-Level Validation**: Apply validation rules on individual columns using the `ValidateColumns` property.

   Built-in validation methods include: `IsNotNull`, `IsNull`, `IsEmpty`, `IsNotEmpty`, `IsNumeric`, `IsPositive`, `IsNegative`, `IsZero`, `IsNotZero`, `IsEquals`, `IsNumberBetween`, `IsDate`, `IsDateBetween`, `IsInList`, `IsNotInList`, `IsInListIgnoreCase`, `IsNotInListIgnoreCase`, `IsBool`, and `Custom`.

   **Custom** allows you to write any .NET code as a validator, offering complete flexibility for custom validation logic.

## Row-Level Validation

The `ValidateRowFunc` property allows you to define a custom predicate that evaluates whether a row is valid. This is useful when row-level validation logic is required beyond individual column rules.

Example:

```csharp
public class MyRow {
    public int Id { get; set; }
    public string Name { get; set; }
    public decimal? Salary { get; set; }
}

var source = new MemorySource<MyRow>();
source.DataAsList.Add(new MyRow() { Id = 1, Name = "John", Salary = 5000m });
source.DataAsList.Add(new MyRow() { Id = 2, Name = "Jane", Salary = -10});
source.DataAsList.Add(new MyRow() { Id = 3, Name = "Alice", Salary = 0m });
source.DataAsList.Add(new MyRow() { Id = 4, Name = "Bob", Salary = 1000m });
source.DataAsList.Add(new MyRow() { Id = 3, Name = "TEST", Salary = null });

var trans = new RowValidation<MyRow>();
trans.ValidateRowFunc = row => row.Name == "TEST" || row.Salary > 0;

var validRows = new MemoryDestination<MyRow>();
var invalidRows = new MemoryDestination<MyRow>();

source.LinkTo(trans);
trans.LinkTo(validRows);       // Valid rows are sent to this destination
trans.LinkInvalidTo(invalidRows); // Invalid rows are sent to this destination
Network.Execute(source);

Console.WriteLine("Valid Rows:");
foreach (var row in validRows.Data) {
    Console.WriteLine($"Id: {row.Id}, Name: {row.Name}, Salary: {row.Salary}");
}

Console.WriteLine("Invalid Rows:");
foreach (var row in invalidRows.Data) {
    Console.WriteLine($"Id: {row.Id}, Name: {row.Name}, Salary: {row.Salary}");
}

/* Output
Valid Rows:
Id: 1, Name: John, Salary: 5000
Id: 4, Name: Bob, Salary: 1000
Id: 3, Name: TEST, Salary:
Invalid Rows:
Id: 2, Name: Jane, Salary: -10
Id: 3, Name: Alice, Salary: 0
*/
```

In this case, any row where the `Salary` is less than 0 will be considered invalid, but the TEST record is ignored.

## Column Validation

For a strongly-typed object, you can specify column validation attributes directly on the properties of the class. Here's an example:

```csharp
public class MyColumnRow {
    public int Id { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsNotNull)]
    [ValidateColumn(ValidationMethod = ValidationMethod.IsNumberBetween, Parameter1 = 1, Parameter2 = 10)]
    public int? Value1 { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsNotZero)]
    public string Value2 { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsPositive)]
    public decimal? Value3 { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsEquals, Parameter1 = 3.34)]
    public double? Value4 { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsNumeric)]
    public string ValueS { get; set; }
}

// Example usage
var source = new MemorySource<MyColumnRow>();
// All valid
source.DataAsList.Add(new MyColumnRow() { Id = 1, Value1 = 5, Value2 = "1", Value3 = 10.5m, Value4 = 3.34, ValueS = "123" });
// Multiple errors
source.DataAsList.Add(new MyColumnRow() { Id = 2, Value1 = 11, Value2 = "0", Value3 = -5.0m, Value4 = 2.5, ValueS = "abc" });
// Valid except Value3 is null
source.DataAsList.Add(new MyColumnRow() { Id = 3, Value1 = 7, Value2 = "10", Value3 = null, Value4 = 3.34, ValueS = "44" });
// Missing Value1 and Value4
source.DataAsList.Add(new MyColumnRow() { Id = 4, Value1 = null, Value2 = "5", Value3 = 15.5m, Value4 = null, ValueS = "100" });

var trans = new RowValidation<MyColumnRow>();
var valid = new MemoryDestination<MyColumnRow>();
var invalid = new MemoryDestination<MyColumnRow>();

source.LinkTo(trans);
trans.LinkTo(valid);
trans.LinkInvalidTo(invalid);
Network.Execute(trans);

Console.WriteLine("Valid Rows:");
foreach (var row in valid.Data) {
    Console.WriteLine($"Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}, Value3: {row.Value3}, Value4: {row.Value4}, ValueS: {row.ValueS}");
}

Console.WriteLine("Invalid Rows:");
foreach (var row in invalid.Data) {
    Console.WriteLine($"Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}, Value3: {row.Value3}, Value4: {row.Value4}, ValueS: {row.ValueS}");
}

/* Output:
Valid Rows:
Id: 1, Value1: 5, Value2: 1, Value3: 10.5, Value4: 3.34, ValueS: 123
Invalid Rows:
Id: 2, Value1: 11, Value2: 0, Value3: -5.0, Value4: 2.5, ValueS: abc
Id: 3, Value1: 7, Value2: 10, Value3: , Value4: 3.34, ValueS: 44
Id: 4, Value1: , Value2: 5, Value3: 15.5, Value4: , ValueS: 100
*/
```

### Dynamic Object Validation Example

For dynamic objects, validation rules can be added manually using the `ValidateColumns` property, as attributes cannot be directly applied to dynamic objects. Here's an example:

```csharp
var source = new MemorySource();
source.DataAsList.Add(CreateTestData(1, "5", -5.34m));  // Valid
source.DataAsList.Add(CreateTestData(2, "X", 34));      // Invalid (Value1 is not numeric)
source.DataAsList.Add(CreateTestData(3, "5", null));    // Valid
source.DataAsList.Add(CreateTestData(4, "A", null));    // Invalid (Value2 is null)
source.DataAsList.Add(CreateTestData(5, 6, "-7"));      // Invalid (Value2 is not negative)

var trans = new RowValidation();
trans.IgnoreMissingProperties = true;
trans.ValidateColumns = new []
{
    new ValidateColumn() { PropertyName = "Value1", ValidationMethod = ValidationMethod.IsNumberBetween, Parameter1 = 1, Parameter2 = 10 },
    new ValidateColumn() { PropertyName = "Value2", ValidationMethod = ValidationMethod.IsNotNull },
    new ValidateColumn() { PropertyName = "Value2", ValidationMethod = ValidationMethod.IsNegative }
};

var validRows = new MemoryDestination();
var invalidRows = new MemoryDestination();

source.LinkTo(trans);
trans.LinkTo(validRows);       // Valid rows are sent to this destination
trans.LinkInvalidTo(invalidRows); // Invalid rows are sent to this destination
Network.Execute(source);

Console.WriteLine("Valid Rows:");
foreach (dynamic row in validRows.Data) {
    Console.WriteLine($"Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");
}

Console.WriteLine("\nInvalid Rows:");
foreach (dynamic row in invalidRows.Data) {
    var validationResult = row.ValidationResult as ValidationResult;
    var value2 = (row as IDictionary<string,object>).ContainsKey("Value2") ? row.Value2 : "null";
    Console.WriteLine($"Id: {row.Id}, Value1: {row.Value1}, Value2: {value2}");
}

/* Output
 *     Valid Rows:
Id: 1, Value1: 5, Value2: -5.34
Id: 5, Value1: 6, Value2: -7

Invalid Rows:
Id: 2, Value1: X, Value2: 34
Id: 3, Value1: 5, Value2: null
Id: 4, Value1: A, Value2: null
*/

ExpandoObject CreateTestData(int id, object value1, object value2) {
    dynamic obj = new ExpandoObject();
    obj.Id = id;
    obj.Value1 = value1;
    if (value2 != null)
        obj.Value2 = value2;
    return obj;
}
```

### IgnoreMissingProperties

When working with dynamic objects, the `IgnoreMissingProperties` property can be set to `true` to prevent errors when a specified property in `ValidateColumns` is missing from a row.

Example:

```csharp
var trans = new RowValidation();
trans.IgnoreMissingProperties = true;
```

## SkipValidationOfRowAfterFirstError

The `SkipValidationOfRowAfterFirstError` property allows you to stop further validation on a row as soon as the first error is encountered. This can improve performance in scenarios where full validation is not necessary after the first failure.

Example:

```csharp
var trans = new RowValidation();
trans.SkipValidationOfRowAfterFirstError = true; // Stop validating a row after the first validation error
```

## AddValidationErrorToRow

The `AddValidationErrorToRow` property determines whether validation errors should be attached to the row object. This is useful for logging or debugging invalid data.

- **For POCOs (Plain Old CLR Objects)**, validation errors are stored in any property that is of type `ValidationResult` (with any property name).
- **For dynamic objects**, the errors are added as a dynamic property called `ValidationResult`.

### Example (POCO):

```csharp
public class MyColumnRow {
    public int Id { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsNotNull)]
    [ValidateColumn(ValidationMethod = ValidationMethod.IsNumberBetween, Parameter1 = 1, Parameter2 = 10)]
    public int? Value1 { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsNotZero)]
    public string Value2 { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsPositive)]
    public decimal? Value3 { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsEquals, Parameter1 = 3.34)]
    public double? Value4 { get; set; }

    [ValidateColumn(ValidationMethod = ValidationMethod.IsNumeric)]
    public string ValueS { get; set; }

    public ValidationResult ConversionResult { get; set; }
}

var source = new MemorySource<MyColumnRow>();
// All valid
source.DataAsList.Add(new MyColumnRow() { Id = 1, Value1 = 5, Value2 = "1", Value3 = 10.5m, Value4 = 3.34, ValueS = "123" });
// Multiple errors
source.DataAsList.Add(new MyColumnRow() { Id = 2, Value1 = 11, Value2 = "0", Value3 = -5.0m, Value4 = 2.5, ValueS = "abc" });
// Valid except Value3 is null
source.DataAsList.Add(new MyColumnRow() { Id = 3, Value1 = 7, Value2 = "10", Value3 = null, Value4 = 3.34, ValueS = "44" });
// Missing Value1 and Value4
source.DataAsList.Add(new MyColumnRow() { Id = 4, Value1 = null, Value2 = "5", Value3 = 15.5m, Value4 = null, ValueS = "100" });

var trans = new RowValidation<MyColumnRow>();
var valid = new MemoryDestination<MyColumnRow>();
var invalid = new MemoryDestination<MyColumnRow>();

source.LinkTo(trans);
trans.LinkTo(valid);
trans.LinkInvalidTo(invalid);
Network.Execute(trans);

Console.WriteLine("Valid Rows:");
foreach (var row in valid.Data) {
    Console.WriteLine($"Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}, Value3: {row.Value3}, Value4: {row.Value4}, ValueS: {row.ValueS}");
}

Console.WriteLine("Invalid Rows:");
foreach (var row in invalid.Data) {
    Console.WriteLine($"Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}, Value3: {row.Value3}, Value4: {row.Value4}, ValueS: {row.ValueS}");
    if (row.ConversionResult != null && row.ConversionResult.Errors != null) {
        Console.WriteLine("Errors:");
        foreach (var error in row.ConversionResult.Errors) {
            Console.WriteLine($" - {error.Reason} (Value: {error.Value})");
        }
    }
}

/* Output:
Valid Rows:
Id: 1, Value1: 5, Value2: 1, Value3: 10.5, Value4: 3.34, ValueS: 123
Invalid Rows:
Id: 2, Value1: 11, Value2: 0, Value3: -5.0, Value4: 2.5, ValueS: abc
Errors:
 - Number is not between '1' and '10', but expected it to be. (Value: 11)
 - Value is zero, but expected value to be not zero. (Value: 0)
 - Value is not positive, but expected value to be positive. (Value: -5.0)
 - Value is not equal '3.34', but expected value to be equal. (Value: 2.5)
 - Value is not numeric, but expected value to be numeric. (Value: abc)
Id: 3, Value1: 7, Value2: 10, Value3: , Value4: 3.34, ValueS: 44
Errors:
 - Value is not positive, but expected value to be positive. (Value: )
Id: 4, Value1: , Value2: 5, Value3: 15.5, Value4: , ValueS: 100
Errors:
 - Value is null, but expected value to be not null. (Value: )
 - Number is not between '1' and '10', but expected it to be. (Value: )
 - Value is not equal '3.34', but expected value to be equal. (Value: )
*/
```

### Example (Dynamic):

```csharp
var source = new MemorySource();
source.DataAsList.Add(CreateTestData(1, "5", -5.34m));  // Valid
source.DataAsList.Add(CreateTestData(2, "X", 34));      // Invalid (Value1 is not numeric)
source.DataAsList.Add(CreateTestData(3, "5", null));    // Valid
source.DataAsList.Add(CreateTestData(4, "A", null));    // Invalid (Value2 is null)
source.DataAsList.Add(CreateTestData(5, 6, "-7"));      // Invalid (Value2 is not negative)

var trans = new RowValidation();
trans.IgnoreMissingProperties = true;
trans.ValidateColumns = new []
{
    new ValidateColumn() { PropertyName = "Value1", ValidationMethod = ValidationMethod.IsNumberBetween, Parameter1 = 1, Parameter2 = 10 },
    new ValidateColumn() { PropertyName = "Value2", ValidationMethod = ValidationMethod.IsNotNull },
    new ValidateColumn() { PropertyName = "Value2", ValidationMethod = ValidationMethod.IsNegative }
};

var validRows = new MemoryDestination();
var invalidRows = new MemoryDestination();

source.LinkTo(trans);
trans.LinkTo(validRows);       // Valid rows are sent to this destination
trans.LinkInvalidTo(invalidRows); // Invalid rows are sent to this destination
Network.Execute(source);

Console.WriteLine("Valid Rows:");
foreach (dynamic row in validRows.Data) {
    Console.WriteLine($"Id: {row.Id}, Value1: {row.Value1}, Value2: {row.Value2}");
}

Console.WriteLine("\nInvalid Rows:");
foreach (dynamic row in invalidRows.Data) {
    var validationResult = row.ValidationResult as ValidationResult;
    var value2 = (row as IDictionary<string,object>).ContainsKey("Value2") ? row.Value2 : "null";
    Console.WriteLine($"Id: {row.Id}, Value1: {row.Value1}, Value2: {value2}");
    Console.WriteLine("Errors:");
    foreach (var error in validationResult.Errors) {
        Console.WriteLine($" - {error.Reason} (Value: {error.Value})");
    }
}

/* Output
 *     Valid Rows:
Id: 1, Value1: 5, Value2: -5.34
Id: 5, Value1: 6, Value2: -7

Invalid Rows:
Id: 2, Value1: X, Value2: 34
Errors:
 - Number is not between '1' and '10', but expected it to be. (Value: X)
 - Value is not negative, but expected value to be negative. (Value: 34)
Id: 3, Value1: 5, Value2: null
Errors:
 - Value is null, but expected value to be not null. (Value: )
 - Value is not negative, but expected value to be negative. (Value: )
Id: 4, Value1: A, Value2: null
Errors:
 - Number is not between '1' and '10', but expected it to be. (Value: A)
 - Value is null, but expected value to be not null. (Value: )
 - Value is not negative, but expected value to be negative. (Value: )
*/

ExpandoObject CreateTestData(int id, object value1, object value2) {
    dynamic obj = new ExpandoObject();
    obj.Id = id;
    obj.Value1 = value1;
    if (value2 != null)
        obj.Value2 = value2;
    return obj;
}
```
