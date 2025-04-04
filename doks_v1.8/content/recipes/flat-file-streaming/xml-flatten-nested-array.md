---
title: "Flatten Nested Array in Xml"
description: "Example: flatten nested array in a xml file"
lead: "This example shows how to denormalize a nested data array within a xml structure."
draft: false
images: []
menu:
  recipes:
    parent: "flat-file-streaming"
weight: 20
toc: true
---

## Preqrequisites

This example can work stand-alone - the only dependency is that you add the ETLBox and ETLBox.Xml packages as dependency.

### Input file

Our xml input file contains the customer elements. A customer is identified by an id and a simple name. Each customer itself has one or more payments methods. A payment method consists of a type, a number and optionally a valid to element.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
  <customer id="1">
    <name>Peter</name>
    <payment_methods>
      <payment_method>
        <type>Credit Card</type>
        <number>1234-5678</number>
        <validto>01/24</validto>
      </payment_method>
      <payment_method>
        <type>Wire transfer</type>
        <number>AB12345435</number>
      </payment_method>
    </payment_methods>
  </customer>
  <customer id="2">
    <name>Mary</name>
    <payment_methods>
      <payment_method>
        <type>Credit Card</type>
        <number>4444-5555</number>
        <validto>12/26</validto>
      </payment_method>
      <payment_method>
        <type>Wire transfer</type>
        <number>DA1234356</number>
      </payment_method>
      <payment_method>
        <type>PayPal</type>
        <number>mary@paypal.to</number>
      </payment_method>
    </payment_methods>
  </customer>
</root>
```

We define a `XmlSource` to read the data from this file (`XmlInputData.xml`).
The parsing of an xml file is based on the `System.Xml.XmlSerializer`, and can be controlled by using various xml attributes. For parse the customer and payment methods into objects, we need to define our POCOs like this:

```C#
[XmlRoot("customer")]
public class Customer
{
    [XmlAttribute("id")]
    public int Id { get; set; }
    [XmlElement("name")]
    public string Name { get; set; }
    [XmlArray("payment_methods")]
    public List<PaymentMethod> PaymentMethods { get; set; }
}

[XmlType("payment_method")]
public class PaymentMethod
{
    [XmlElement("type")]
    public string Type { get; set; }
    [XmlElement("number")]
    public string Number { get; set; }
    [XmlElement("validto")]
    public string ValidTo { get; set; }
}
```

Now we can define the `XmlSource` using these objects and the input file name:

```C#
XmlSource<Customer> source = new XmlSource<Customer>("XmlInputData.xml", ResourceType.File);
source.XmlReaderSettings.DtdProcessing = System.Xml.DtdProcessing.Ignore;
```

{{< alert text="Ignoring the DtdProcessing can be useful if your xml has DTD definitions that don't want to be processed (which can create new issues if your xml file is big). Setting the XmlReaderSettings allows you to manage how the xml is parsed." >}}

### Flattening the array

The goal of this example is to flatten the payment method array so that it not only contains the payment data, but also the data of the containing customer element. So we can already define how our output POCO should look like.

```C#
public class PaymentMethodAndCustomer
{
    /* Elements from Customer */
    public int CustomerId { get; set; }
    public string CustomerName { get; set; }

    /* Elements from PaymentMethod */
    public string PaymentMethodType { get; set; }
    public string PaymentMethodNumber { get; set; }
    public string PaymentMethodValidTo { get; set; }
}
```

As you can see, we want to get an object that holds all payment details, along with the customer data from the parent customer element. In this example, we will load our data structure into memory.

```C#
MemoryDestination<PaymentMethodAndCustomer> dest = new MemoryDestination<PaymentMethodAndCustomer>();
```

Next we use a `RowMultiplication` to flatten the nested array. The row multiplication takes one input row and can return multiple output rows as an array. (The array can also be empty). This transformation accepts two type: The type of the ingoing data (`Customer`) and the type of the outgoing data `PaymentMethodAndCustomer`. The property `RowMultiplicationFunc` is a delegate that has the currently processed customer row as an input object and return an array of newly created payment and customer objects.


```C#
RowMultiplication<Customer, PaymentMethodAndCustomer> multi = new RowMultiplication<Customer, PaymentMethodAndCustomer>();
multi.MultiplicationFunc =
    customer =>
    {
        List<PaymentMethodAndCustomer> result = new List<PaymentMethodAndCustomer>();
        foreach (PaymentMethod method in customer.PaymentMethods)
        {
            var methodAndCustomer = new PaymentMethodAndCustomer();
            /* Repeating data from customer */
            methodAndCustomer.CustomerId = customer.Id;
            methodAndCustomer.CustomerName = customer.Name;

            /* Specific data from payment methods */
            methodAndCustomer.PaymentMethodType = method.Type;
            methodAndCustomer.PaymentMethodNumber = method.Number;
            methodAndCustomer.PaymentMethodValidTo = method.ValidTo;

            result.Add(methodAndCustomer);
        };
        return result;
    };
```

### Executing the flow

Last step is to link and execute the flow.

```C#
source.LinkTo(multi);
multi.LinkTo(dest);

Network.Execute(source);
```

Now we can display and examine the output of the data that we loaded into out `MemoryDestination`.

```C#
/* Display data */

int lastid = 0;
foreach (var methodAndCustomer in dest.Data)
{
    if (lastid != methodAndCustomer.CustomerId)
    {
        Console.WriteLine($"Customer Data: Id {methodAndCustomer.CustomerId}, Name '{methodAndCustomer.CustomerName}'");
        lastid = methodAndCustomer.CustomerId;
    }
    Console.WriteLine($"   Payment method data: Type '{methodAndCustomer.PaymentMethodType}'," +
        $" Number '{methodAndCustomer.PaymentMethodNumber}', ValidTo '{methodAndCustomer.PaymentMethodValidTo}'");
}

/* Output */
/* Customer Data: Id 1, Name 'Peter'
      Payment method data: Type 'Credit Card', Number '1234-5678', ValidTo '01/24'
      Payment method data: Type 'Wire transfer', Number 'AB12345435', ValidTo ''
    Customer Data: Id 2, Name 'Mary'
      Payment method data: Type 'Credit Card', Number '4444-5555', ValidTo '12/26'
      Payment method data: Type 'Wire transfer', Number 'DA1234356', ValidTo ''
      Payment method data: Type 'PayPal', Number 'mary@paypal.to', ValidTo ''
*/
```

## Code on Github

{{< link-ext text="The whole code for this example is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/XmlFlattenNestedArray" >}}
