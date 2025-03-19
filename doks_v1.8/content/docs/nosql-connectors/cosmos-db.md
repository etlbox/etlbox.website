---
title: "Azure Cosmos DB"
description: "Details about the Azure Cosmos DB connector"
lead: "The Azure Cosmos DB is a multi-model database, which can also be used either as source or destination for an ETLBox data flow. This article will give you an overview how to use the connector."
draft: false
images: []
menu:
  docs:
    parent: "nosql-connectors"
weight: 420
toc: true
---

# ETLBox.Azure.CosmosDb package

In order to use the Azure Cosmos Db connector, you need to add the nuget package {{< link-ext url="https://www.nuget.org/packages/ETLBox.Azure.CosmosDb" text="ETLBox.Azure.CosmosDb" >}} to your project.

## Shared example code

In the following examples, we will use the the Pocos `Movie` and `Person`.

```C#
public class Person
{
    public DateTime? Born { get; set; }
    public int? Age => Born.HasValue ? DateTime.Now.Year - Born.Value.Year : null;
    public string Name { get; set; }
}

public class Movie
{
    public string Id { get; set; }
    public Person[] MainActors { get; set; }
    public string Name { get; set; }
    public Person Important { get; set; }
    public decimal? OpeningRevenue { get; set; }
    public string Block { get; set; } = "1";
}
```

Also we will need some methods to create demo data:

```C#
public static IEnumerable<Movie> GenerateDefaultMovies() {
    Movie[] movies = new Movie[] {
        new Movie() {
            Id = "1",
            Name = "Harry Potter and the Sorcerer's Stone",
            MainActors = new [] {
                new Person() { Name = "Daniel Radcliffe", Born = new DateTime(1989,7,23) },
                new Person() { Name = "Rupert Grint" }
            },
            OpeningRevenue = 90294621.23m,
            Important = new Person() { Name="Chris Columbus" }
        },
        new Movie() {
            Id = "2",
            Name = "Harry Potter and the Order of the Phoenix",
            MainActors = new [] {
                new Person() { Name = "Daniel Radcliffe", Born = new DateTime(1989, 7, 23)},
                new Person() { Name = "Emma Watson", Born = new DateTime(1990, 4, 15) }
            },
            Important = new Person() { Name="Slawomir Idziak"}
        },
            new Movie() {
            Id = "3",
            Name = "Harry Potter and the Goblet of fire",
            OpeningRevenue = 102685961
        },
    };
    return movies;
}

public static IEnumerable<Movie> GenerateMoreMovies() {
    Movie[] movies = new Movie[] {
        new Movie() {
            Id = "4",
            Name = "Harry Potter and the Chamber of Secrets",
            MainActors = new [] {
                new Person() { Name = "Daniel Radcliffe", Born = new DateTime(1989,7,23) },
                new Person() { Name = "Rupert Grint" }
            },
            Important = new Person() { Name="Chris Columbus" },
            OpeningRevenue = 88357488,
            Block = "2"

        },
        new Movie() {
            Id = "5",
            Name = "Harry Potter and the Half-Blood Prince",
            Important = new Person() { Name="David Yates"},
            OpeningRevenue = 77835727,
            Block = "2"
        },
        new Movie() {
            Id = "6",
            Name = "Happry Potter and the Prsioner of Azkaban",
            OpeningRevenue = 93687367,
            Block = "3"
        },
    };
    return movies;
}
```

Lastly, we need a helper method to (re)create a container and set up a container with existing data (though the latter is possible with an ETLBox dataflow, using this method improves the readability of the example codings):

```C#
public static void FillContainerWithMovies(string connectionString, string containerName, IEnumerable<Movie> data) {
    var source = new MemorySource<Movie>();
    source.Data = data;
    var dest = new CosmosDestination<Movie>() {
        ConnectionString = connectionString,
        DatabaseName = "etlbox",
        ContainerName = containerName
    };


    source.LinkTo(dest);
    Network.Execute(source);
}

public static void RecreateContainer(Database database, string containerName, string partitionKey = null) {
    try {
        var cont = database.GetContainer(containerName);
        cont.DeleteContainerAsync().GetAwaiter().GetResult();
    } catch { }
    database.CreateContainerIfNotExistsAsync(
                    id: containerName,
                    partitionKeyPath: "/" + partitionKey
                ).GetAwaiter().GetResult();
}
```

## Cosmos Db source examples

Now let's start with the examples for retrieving data from Cosmos Db.

### Read all data

Let's read all data from a table:

```C#
 string containerName = "Movies";
RecreateContainer(database, containerName, "block");
FillContainerWithMovies(connectionString, containerName, GenerateDefaultMovies());

var source = new CosmosSource<Movie>() {
    Sql = "SELECT * FROM Movies",
    ContainerName = containerName,
    ConnectionString = connectionString,
    DatabaseName = "etlbox"
};
var dest = new MemoryDestination<Movie>();

source.LinkTo(dest);
Network.Execute(source);
```

### Read parameterized data

Let's read all data using a parameterized query:

```C#
string containerName = "Movies";
RecreateContainer(database, containerName, "block");
FillContainerWithMovies(connectionString, containerName, GenerateDefaultMovies().Union(GenerateMoreMovies()));

//Act
var source = new CosmosSource<Movie>() {
    QueryDefinition = new QueryDefinition("SELECT * FROM Movies m WHERE m.id IN (@p1,@p2,@p3)")
                        .WithParameter("@p1", "1")
                        .WithParameter("@p2", "2")
                        .WithParameter("@p3", "3"),
    ContainerName = containerName,
    ConnectionString = connectionString,
    DatabaseName = "etlbox"
};
var dest = new MemoryDestination<Movie>();

source.LinkTo(dest);
Network.Execute(source);
```

## Cosmos destination examples

Next step is to insert data into a CosmosDb container.

### Bulk insert

By default, data is only inserted in batches - a classic bulk insert.

```C#
string containerName = "Movies";
RecreateContainer(database, containerName, "block");

var source = new MemorySource<Movie>();
source.Data = MovieGenerator.GenerateDefaultMovies();
var dest = new CosmosDestination<Movie>() {
    ConnectionString = connectionString,
    DatabaseName = "etlbox",
    ContainerName = containerName
};
```

### Other bulk operations

Azure Cosmos Db also offers different update modes, which can be adjusted for every record.

Supported bulk operations are:
- Create
- Upsert
- Replace
- Delete

```C#
string containerName = "Movies";
RecreateContainer(database, containerName, "block");

var source_prefill = new MemorySource<Movie>();
source_prefill.Data = MovieGenerator.GenerateDefaultMovies();
var dest_prefill = new CosmosDestination<Movie>() {
    ConnectionString = connectionString,
    DatabaseName = "etlbox",
    ContainerName = containerName
};
source_prefill.LinkTo(dest_prefill);
Network.Execute(source_prefill);

//Act
var source = new MemorySource<Movie>();
source.Data = GenerateBasicMovies().Union(GenerateMoreMovies());
var dest = new CosmosDestination<Movie>() {
    ConnectionString = connectionString,
    DatabaseName = "etlbox",
    ContainerName = containerName
};

dest.SetItemActionOptions = (options, item) => {
    if (item.Id == "1")
        options.ItemAction = ItemAction.Replace;
    else if (item.Id == "2")
        options.ItemAction = ItemAction.Delete;
    else if (item.Id == "4")
        options.ItemAction = ItemAction.Upsert;
    else
        options.ItemAction = ItemAction.Create;
    options.Id = item.Id;
    options.PartitionKey = new PartitionKey(item.Block);
};
source.LinkTo(dest);
Network.Execute(dest);
```


### Using transactional batches

By default, data is inserted as bulk without an enclosing transaction. If you prefer to insert data as part of a transactional batch, set the property `UseTransactionBatch` to true. The maximum allowed batch size is then 100 (due to the limitation of Cosmos Db).

This works best if all data has the same partition key. If the incoming data has different partition keys, the data is inserted in multiple batches, grouped by each partition key.

Make sure to add a partition key for each record using the <see cref="SetItemActionOptions"/> action.
If any of the records in the batch is flawed, the whole batch will not be inserted.
You can redirect erroneous batches using 'LinkErrorsTo()' when linking your components.

Setting this property to true  will decrease performance.

## Alternatives to connection string

Instead of passing a connection string, the `CosmosDbSource` and `CosmosDbDestination` also offer different properties to pass credentials:
- `AzureKeyCredential`:  Optional: An Azure Key Credential used when opening the connection (works only in combination with `ConnectionString`
- `AzureTokenCredential`: Optional: An Azure Token Credential used when opening the connection (works only in combination with `ConnectionString`)
- `AccountEndpoint`: Optional: An Azure Cosmos Db account endpoint used when opening the connection (works only in combination with `AuthKeyOrResourceToken`). `ConnectionString`, `AzureKeyCredential` and `AzureTokenCredential` have no effect then.
`AuthKeyOrResourceToken`: Optional: An Azure Authorization key or resource token which is used when opening the connection. (works only in combination with `AccountEndpoint`). `ConnectionString`, `AzureKeyCredential` and `AzureTokenCredential` have no effect then.


## Dynamic object support

Like all other data flow components, Cosmos DB source and destination support the dynamic `ExpandoObject`. Simple use either `CosmosDbSource` or `CosmosDbSource<ExpandoObject>` instead of `CosmosDbSource<T>`.

Example for the source:

```C#
string containerName = "Movies";
RecreateContainer(database, containerName, "block");
FillContainerWithMovies(connectionString, containerName, GenerateDefaultMovies());

//Act
var source = new CosmosSource() {
    Sql = "SELECT * FROM Movies",
    ContainerName = containerName,
    ConnectionString = connectionString,
    DatabaseName = "etlbox"
};
var dest = new MemoryDestination();

source.LinkTo(dest);
Network.Execute(source);
```

Example for the destination:

```C#
string containerName = "MoviesDynamic";
RecreateContainer(database, containerName, "block");

var source = new MemorySource();
source.Data = MovieGenerator.GenerateDefaultMoviesDynamic();
var dest = new CosmosDestination() {
    ConnectionString = connectionString,
    DatabaseName = "etlbox",
    ContainerName = containerName
};
source.LinkTo(dest);
Network.Execute(source);
```
