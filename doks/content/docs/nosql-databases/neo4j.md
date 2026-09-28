---
title: "Neo4j"
description: "The ETLBox Neo4j connector allows you to work with graph data stored in a Neo4j database. It supports reading structured results from Cypher queries and writing nodes and relationships using custom Cypher statements."
lead: "ETLBox supports integration with Neo4j, a graph database designed to store connected data using nodes and relationships."
draft: false
images: []
menu:
  docs:
    parent: "nosql-databases"
weight: 420
toc: true
chatgpt-review: true
---

The ETLBox connector allows you to:

- Read data from Neo4j using Cypher queries (`Neo4jSource`)
- Write nodes and relationships to Neo4j using custom Cypher commands (`Neo4jDestination`)

You can map Neo4j records to POCOs or use `ExpandoObject` for dynamic structures.

## Neo4jSource

`Neo4jSource<T>` reads records from a Neo4j database using a user-defined Cypher query and deserializes them into objects of type `T`.

### Basic Usage

To query all movies and read their names:

```csharp
public class MovieRow {
    public string Name { get; set; }
}

var source = new Neo4jSource<MovieRow> {
    ConnectionString = "bolt://localhost:7687",
    Cypher = "MATCH (m:Movie) RETURN m.name AS Name"
};

var dest = new MemoryDestination<MovieRow>();
source.LinkTo(dest);
Network.Execute(source);
```

In this case, each row returned by the query must have a field `name`, which maps to the `Name` property of the `MovieRow` class.

### Querying Relationships

If you want to extract relationship information:

```csharp
public class MovieActorRelation {
    public string Movie { get; set; }
    public string Actor { get; set; }
}

var source = new Neo4jSource<MovieActorRelation> {
    ConnectionString = "bolt://localhost:7687",
    Cypher = @"
        MATCH (m:Movie)-[:ACTED_IN]-(a:Actor)
        RETURN m.name AS Movie, a.name AS Actor"
};
```

This fetches actor names and the movies they acted in, and maps the result into the `MovieActorRelation` POCO.

### Dynamic Object Support

If the graph structure or output fields are not fixed, you can use dynamic objects (`ExpandoObject`) with `Neo4jSource`:

```csharp
var source = new Neo4jSource {
    ConnectionString = "bolt://localhost:7687",
    Cypher = "MATCH (n:Movie) RETURN n.name AS Title"
};

var dest = new MemoryDestination();
source.LinkTo(dest);
Network.Execute(source);

foreach (dynamic row in dest.Data) {
    Console.WriteLine(row.Title);
}
```


## Shared Configuration

Both source and destination components support the following shared configuration:

### Connection Properties

- `ConnectionString`: The Neo4j Bolt protocol URI (e.g., `bolt://localhost:7687`)
- `Driver`: Optional instance of `IDriver` from the Neo4j.Driver package. If provided, this driver will be reused instead of creating a new one.
- `Session`: Optional `IAsyncSession`. If supplied, the session is reused for query execution. Use this when integrating with transactions or managing sessions externally.

### Example: Using an Existing Session

```csharp
var driver = GraphDatabase.Driver("bolt://localhost:7687", AuthTokens.Basic("neo4j", "password"));
var session = driver.AsyncSession();

var source = new Neo4jSource<MovieRow> {
    Session = session,
    Cypher = "MATCH (m:Movie) RETURN m.name AS Name"
};
```

## Neo4jDestination

The `Neo4jDestination<T>` component allows you to persist object data into a Neo4j graph using Cypher commands. You define the Cypher statements via a delegate function.

{{< callout context="caution" icon="outline/alert-triangle" title="Limited Graph Mapping Support" >}}
The `Neo4jDestination` provides only basic write support. Due to the fundamental differences between row-based data and graph models, automatic mapping of rows to complex graph structures is not supported. You must write explicit Cypher queries to control how nodes and relationships are created.
{{< /callout >}}

### Basic Usage

```csharp
public class Movie {
    public string Name { get; set; }
    public string Genre { get; set; }
}

var source = new MemorySource<Movie>();
source.Data = new List<Movie> {
    new Movie { Name = "The Matrix", Genre = "Sci-Fi" },
    new Movie { Name = "Inception", Genre = "Thriller" }
};

var dest = new Neo4jDestination<Movie> {
    ConnectionString = "bolt://localhost:7687",
    CreateCypherFunc = (movie, suggestion) =>
        $@"CREATE (m:Movie {{name: '{movie.Name}', genre: '{movie.Genre}'}})"
};

source.LinkTo(dest);
Network.Execute(source);
```

This inserts two movie nodes into the database.

### Using CreateCypherFunc

The `CreateCypherFunc` has the following signature:

```csharp
Func<T, string, string>
```

- The first parameter is the current row.
- The second parameter (`cypherSuggestion`) is a pre-filled Cypher fragment generated based on object properties.

You can use this to conditionally build logic, define relationships, or modify node labels dynamically.

### Example: Writing Nodes and Relationships

```csharp
public class Movie {
    public string Title { get; set; }
    public Person[] Actors { get; set; }
}

public class Person {
    public string Name { get; set; }
}

var source = new MemorySource<Movie>();
source.Data = new List<Movie> {
    new Movie {
        Title = "Interstellar",
        Actors = new[] {
            new Person { Name = "Matthew McConaughey" },
            new Person { Name = "Anne Hathaway" }
        }
    }
};

var dest = new Neo4jDestination<Movie> {
    ConnectionString = "bolt://localhost:7687",
    CreateCypherFunc = (movie, _) => {
        var actorCreates = string.Join("\n", movie.Actors.Select((a, i) =>
            $"MERGE (a{i}:Person {{name: '{a.Name}'}})\n" +
            $"MERGE (m)-[:ACTED_IN]->(a{i})"));

        return
$@"MERGE (m:Movie {{title: '{movie.Title}'}})
{actorCreates}";
    }
};

source.LinkTo(dest);
Network.Execute(source);
```

This creates movie nodes and related actor nodes, connecting them with `ACTED_IN` relationships.

