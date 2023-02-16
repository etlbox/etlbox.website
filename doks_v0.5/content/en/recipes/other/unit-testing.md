---
title: "Unit testing"
description: "This example shows how unit tests could be constructed for data flow."
lead: "This recipe demonstrate how unit tests could be written to test data flows. The described approach here is very basic and should only be considered as a starting point - there are a lot of different possibilities to write unit tests for ETLBox - as the library is written in .NET, all test framework and other test packages are fully supported."
draft: false
menu:
  recipes:
    parent: "other"
weight: 2311
toc: true
---

## Simple unit tests with xunit

```C#
using ETLBox.DataFlow;
using ETLBox.DataFlow.Connectors;
using ETLBox.DataFlow.Transformations;
using ETLBox.DataFlowTests.Demo;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using Xunit;

namespace ETLBoxTests.DataFlowTests
{
    [Collection("DataFlow")]
    public class UnitTestsSimpleExample
    {

        [Fact]
        public void RowTransformerTest() {
            //Arrange
            RowTransformer transformer = new RowTransformer();
            DataTransferObject testInput = new DataTransferObject() {
                Id = 1,
                Value = "Test"
            };

            //Act
            var result = transformer.ChangeRow(testInput);

            //Assert
            Assert.Equal(1, result.Id);
            Assert.Equal("Adjusted Row (Test)", result.Value);
        }

        [Fact]
        public void NetworkRunnerTest() {
            //Arrange
            NetworkRunner runner = new NetworkRunner();
            var testData = new List<DataTransferObject>() {
                    new DataTransferObject { Id = 1, Value = "TestDataRow 1" },
                    new DataTransferObject { Id = 2, Value = "TestDataRow 2" }
                };

            //Act
            runner.ExecuteFlow(testData);

            //Assert
            Assert.Collection(runner.Result,
                row => { Assert.Equal(1, row.Id); Assert.Equal("Adjusted Row (TestDataRow 1)", row.Value); },
                row => { Assert.Equal(2, row.Id); Assert.Equal("Adjusted Row (TestDataRow 2)", row.Value); }
            );
            Assert.Equal(System.Threading.Tasks.TaskStatus.RanToCompletion, runner.Flow.Destinations.First().Completion.Status);
        }
    }
}

namespace ETLBox.DataFlowTests.Demo
{
    public class DataTransferObject
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }

    public class NetworkRunner
    {
        public ICollection<DataTransferObject> SourceData { get; private set; }
        public ICollection<DataTransferObject> Result => Destination?.Data;
        public Network Flow { get; set; }

        MemorySource<DataTransferObject> Source = new MemorySource<DataTransferObject>();
        MemoryDestination<DataTransferObject> Destination = new MemoryDestination<DataTransferObject>();
        RowTransformation<DataTransferObject> Transformation = new RowTransformation<DataTransferObject>();
        RowTransformer Transformer = new RowTransformer();

        private Network CreateDataflow() {
            Source.Data = SourceData;
            Transformation.TransformationFunc = Transformer.ChangeRow;
            Source.LinkTo(Transformation).LinkTo(Destination);

            return new Network(Source);
        }

        public void ExecuteFlow(ICollection<DataTransferObject> sourceData) {
            SourceData = sourceData;
            Flow = CreateDataflow();
            Flow.Execute();
        }
    }

    public class RowTransformer
    {
        public DataTransferObject ChangeRow(DataTransferObject dto) {
            dto.Value = "Adjusted Row (" + dto.Value + ")";
            return dto;
        }
    }

    public static class App
    {
        public static int Start(string[] args) {
            NetworkRunner runner = new NetworkRunner();
            var prodData = new List<DataTransferObject>() {
                    new DataTransferObject { Id = 1, Value = "ProductionDataRow 1" },
                    new DataTransferObject { Id = 2, Value = "ProductionDataRow 2" }
                };
            runner.ExecuteFlow(prodData);
            return runner.Result.Count > 0 ? 1 : 0;
        }
    }
}
```

## Recommended supporting libraries

- {{< link-ext url="https://github.com/moq/moq4" text="moq - The most popular and friendly mocking library for .NET" >}}. All dataflow compoments implement different interface which can be used for mocking objects. 
- {{< link-ext url="https://fluentassertions.com/" text="Fluent assertions" >}}. A very extensive set of extension methods that allow you to more naturally specify the expected outcome of a TDD or BDD-style unit tests.
- {{< link-ext url="https://github.com/WireMock-Net/WireMock.Net" text="Wiremock.NET" >}}. A C# .NET version based on mock4net which mimics the functionality from the Java based Wiremock.org
