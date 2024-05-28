---
title: "Unit testing"
description: "This example shows how unit tests could be constructed for data flow."
lead: "This recipe demonstrate how unit tests could be written to test data flows. The described approaches should only be considered as a starting point - there are a lot of different possibilities to write unit tests for ETLBox - as the library is written in .NET, all test framework and other test packages are fully supported."
draft: false
menu:
  recipes:
    parent: "other"
weight: 2311
toc: true
---

## Unit test injecting source data

```C#
namespace ETLBoxTests.DataFlow {
    public class UnitTestsInjectDifferentSourceData {

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

namespace ETLBox.DataFlowTests.Demo {
    public class DataTransferObject {
        public int Id { get; set; }
        public string Value { get; set; }
    }

    public class NetworkRunner {
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

    public class RowTransformer {
        public DataTransferObject ChangeRow(DataTransferObject dto) {
            dto.Value = "Adjusted Row (" + dto.Value + ")";
            return dto;
        }
    }

    public static class App {
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

## Unit tests replacing source and destination

```C#
namespace ETLBoxTests.DataFlow
{
    public class UnitTestsReplacingSourceAndDestinationExample {

        [Fact]
        public void RunTestReplacingSourceAndDestination() {
            //Arrange
            NetworkRunner runner = new NetworkRunner();
            var newSource = new MemorySource<DataTransferObject>();
            newSource.Data = new List<DataTransferObject>() {
                new DataTransferObject() { Id = 1, Value = "Test1" },
                new DataTransferObject() { Id = 2, Value = "Test2" },
                new DataTransferObject() { Id = 3, Value = "Test3" }
            };
            var newDestination = new MemoryDestination<DataTransferObject>();

            runner.SetupDataFlow();
            runner.Source = newSource;
            runner.Destination = newDestination;

            //Act
            runner.ExecuteFlow();

            //Assert
            Assert.Equal(3, newDestination.Data.Count);
        }
    }
}

namespace ETLBox.DataFlowTests.ReplacingSourceAndDestinationExample
{
    public class DataTransferObject
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }

    public class NetworkRunner
    {
        public IDataFlowExecutableSource<DataTransferObject> Source;
        public IDataFlowDestination<DataTransferObject> Destination;
        public IDataFlowTransformation<DataTransferObject, DataTransferObject> Transformation;

        public void SetupDataFlow() {
            var dbSource = new DbSource<DataTransferObject>();
                dbSource.TableName = "SourceTable";
            Source = dbSource;
            
            var dbDest = new DbDestination<DataTransferObject>();
            dbDest.TableName = "DestTable";
            Destination = dbDest;

            var trans = new RowTransformation<DataTransferObject>();
            trans.TransformationFunc = ChangeRow;
            Transformation = trans;           

            
        }

        private DataTransferObject ChangeRow(DataTransferObject dto) {
            dto.Value = "Adjusted Row (" + dto.Value + ")";
            return dto;
        }

        public void ExecuteFlow() {
            Source.LinkTo(Transformation).LinkTo(Destination);
            Network.Execute(Source);
        }
    }

    public static class App
    {
        public static int Start(string[] args) {
            NetworkRunner runner = new NetworkRunner();
            runner.SetupDataFlow();
            runner.ExecuteFlow();
            return 1;
        }
    }
}
```

## Unit tests using Moq for Source

```C#
namespace ETLBoxTests.DataFlow
{
    public class UnitTestsUsingMoqForSource {

        [Fact]
        public void RunTestUsingMoq() {
            //Arrange
            NetworkRunner runner = new NetworkRunner();
            var newSource = new MemorySource<DataTransferObject>();
            newSource.Data = new List<DataTransferObject>() {
                new DataTransferObject() { Id = 1, Value = "Test1" },
                new DataTransferObject() { Id = 2, Value = "Test2" },
                new DataTransferObject() { Id = 3, Value = "Test3" }
            };
            

            //Setting up moq source
            var moqSource = new Mock<IDataFlowExecutableSource<DataTransferObject>>();
            newSource.InitBufferObjects();
            moqSource
                .Setup(s => s.SourceBlock)
                .Returns(newSource.SourceBlock);
            moqSource
                .Setup(s => s.ExecuteAsync())
                .Callback(() => newSource.ExecuteAsync());
            moqSource
                .Setup(s => s.LinkTo(It.IsAny<IDataFlowDestination<DataTransferObject>>()))
                .Callback<IDataFlowDestination<DataTransferObject>>(d => newSource.LinkTo(d));

            //Use moq with transformation and destinations is currently not supported!
            //Use the interfaces instead
            runner.SetupDataFlow();

            var newDestination = new MemoryDestination<DataTransferObject>();

            //Injecting moq objects
            runner.Source = moqSource.Object;
            runner.Destination = newDestination;

            //Act
            runner.ExecuteFlow();

            //Assert
            Assert.Equal(3, newDestination.Data.Count);
        }
    }
}

namespace ETLBox.DataFlowTests.MoqDemo
{
    public class DataTransferObject
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }

    public class NetworkRunner
    {
        public IDataFlowExecutableSource<DataTransferObject> Source;
        public IDataFlowDestination<DataTransferObject> Destination;
        public IDataFlowTransformation<DataTransferObject, DataTransferObject> Transformation;

        public void SetupDataFlow() {
            var dbSource = new DbSource<DataTransferObject>();
                dbSource.TableName = "SourceTable";
            Source = dbSource;
            
            var dbDest = new DbDestination<DataTransferObject>();
            dbDest.TableName = "DestTable";
            Destination = dbDest;

            var trans = new RowTransformation<DataTransferObject>();
            trans.TransformationFunc = ChangeRow;
            Transformation = trans;           

            
        }

        private DataTransferObject ChangeRow(DataTransferObject dto) {
            dto.Value = "Adjusted Row (" + dto.Value + ")";
            return dto;
        }

        public void ExecuteFlow() {
            Source.LinkTo(Transformation);
            Transformation.LinkTo(Destination);
            //Do not use mocked components here, they won't be recognized by the network!
            Network.Execute(Transformation);
        }
    }

    public static class App
    {
        public static int Start(string[] args) {
            NetworkRunner runner = new NetworkRunner();
            runner.SetupDataFlow();
            runner.ExecuteFlow();
            return 1;
        }
    }
}

```

## Recommended supporting libraries

- {{< link-ext url="https://github.com/moq/moq4" text="moq - The most popular and friendly mocking library for .NET" >}}. All dataflow compoments implement different interface which can be used for mocking objects. 
- {{< link-ext url="https://fluentassertions.com/" text="Fluent assertions" >}}. A very extensive set of extension methods that allow you to more naturally specify the expected outcome of a TDD or BDD-style unit tests.
- {{< link-ext url="https://github.com/WireMock-Net/WireMock.Net" text="Wiremock.NET" >}}. A C# .NET version based on mock4net which mimics the functionality from the Java based Wiremock.org
