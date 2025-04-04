---
title: "Web Scraping"
description: "Example: Web scraping"
lead: "This example demonstrates how content from a web site can be scraped and used to store, aggregate and display the retrieved data."
draft: false
menu:
  recipes:
    parent: "web-cloud"
weight: 30
toc: true
---


## Prerequisites

This demo will scrape data from a website and sent it into a data flow using a custom source.
The raw data will be stored in a SQLite database. Also, the raw data is loaded into a in-memory list object, and then some base information about the scraped data is displayed. We will also aggregate the data and store the result in a csv file.

## Website to scrape

We will use the {{< link-ext text="ASN Aviation Safety Database" url="https://aviation-safety.net/database/" >}} to retrieve data about tracked airline accidents. The database is a web site that contains information airline accidents that happened since 1919. We will query this database by querying the website for each year. For demonstration purposes, we will only query the years between 1920 and 1940.

## Preparation

### Creating the objects

We define a class that can hold all data for an accidents:

```C#
public class Accident
{
    public DateTime Date { get; set; }
    public int Year => Date.Year;
    public string Type { get; set; }
    public string Registration { get; set; }
    public string Operator { get; set; }
    public int Fatalities { get; set; } = 0;
    public string Location { get; set; }
    public string Country { get; set; }
    public string Category { get; set; }
}
```

We also want to aggregate this data. We are interest in the total of all Fatalaties per year.
As we are using the Aggregation, we can create a class where we define our aggregation actions via the `AggregateColumn`  and `GroupColumn` attributes.

```C#
public class AccidentsPerYear
{
    [GroupColumn("Year")]
    public int Year { get; set; }
    [AggregateColumn("Fatalities", AggregationMethod.Sum)]
    public int Fatalities { get; set; }
}
```

### Creating a destination table

The demo already comes with file named `SQLite.db` - this is an empty SQLite database file. We can now use the SQLite connection manager to create a table in this database:

```C#
 public static SQLiteConnectionManager SQLiteConnection { get; set; }

static void PrepareSqlLiteDestination() {
    SQLiteConnection = new SQLiteConnectionManager("Data Source=.\\SQLite.db;Version=3;");
    CreateTableTask.Create(SQLiteConnection, new TableDefinition() {
        Name = "Accidents",
        Columns = new List<TableColumn>() {
            new TableColumn() { Name = "Date", DataType = "INTEGER" },
            new TableColumn() { Name = "Type", DataType = "TEXT" },
            new TableColumn() { Name = "Registration", DataType = "TEXT" },
            new TableColumn() { Name = "Operator", DataType = "TEXT" },
            new TableColumn() { Name = "Fatalities", DataType = "TEXT" },
            new TableColumn() { Name = "Location", DataType = "TEXT" },
            new TableColumn() { Name = "Country", DataType = "TEXT" },
            new TableColumn() { Name = "Category", DataType = "TEXT" }
        }
    });
}
```

### Creating the scraping

Before we start, we need a function that returns us all accidents that we scraped from the website for a particular year. E.g. we want to get a list of all accidents for 1920 for the url `https://aviation-safety.net/database/dblist.php?Year=1920`

We will use the {{< link-ext text="Html Agilitiy Pack" url="https://html-agility-pack.net/" >}} to retrieve the data in very simple way.
Our scraping code for the url above would look like this:

```C#
static List<Accident> ParseAccidentsFromUrl(string url) {
    var web = new HtmlWeb();
    var doc = web.Load(url);
    var rows = doc.DocumentNode.SelectNodes("//tr").Skip(1);

    var result = new List<Accident>();
    foreach (var r in rows) {
        var data = r.ChildNodes.Where(cn => cn.Name == "td");
        var accident = new Accident();
        accident.Date = ConvertToDate(data.ElementAt(0).InnerText);
        accident.Type = data.ElementAt(1).InnerText;
        accident.Registration = data.ElementAt(2).InnerText;
        accident.Operator = data.ElementAt(3).InnerText;
        accident.Fatalities = ConvertToNumber(data.ElementAt(4).InnerText);
        accident.Location = data.ElementAt(5).InnerText;
        accident.Country = ParseCountryFromImgTag(data.ElementAt(6).InnerHtml);
        accident.Category = data.ElementAt(8).InnerText;
        result.Add(accident);
    }

    return result;
}

static string ParseCountryFromImgTag(string imgHtml) {
    //imgHtml: <img src="//cdn.aviation-safety.net/database/country/flags_15/I.gif" title="Italy">
    if (imgHtml.Length > 0)
        return imgHtml.Substring(imgHtml.LastIndexOf("title=\"") + 7).Replace("\">","");
    else
        return string.Empty;
}

static int ConvertToNumber(string number) {
    //number: 5+1
    if (number.Contains("+")) {
        var numbers = number.Split("+");
        return Convert.ToInt32(numbers[0]) + Convert.ToInt32(numbers[1]);
    }
    //number: 3
    else if (!string.IsNullOrWhiteSpace(number))
        return Convert.ToInt32(number);
    //number: ""
    else
        return 0;
}

static DateTime ConvertToDate(string dateString) {
    //dateString: ??-???-1921
    //dateString: ??-DEC-1925
    if (dateString.StartsWith("??"))
        return new DateTime(Convert.ToInt32(dateString.Substring(7)));
    //dateString: 29-FEB-1950, did not exist
    else if (dateString == "29-FEB-1950")
        return new DateTime(1950, 2, 28);
    //dateString: 18-JAN-1942
    else
        return DateTime.Parse(dateString);
}

```

### Sending data into the flow

Next we want to use the scraped accident data and sent it into a data flow. We can use the `CustomBatchSource` to sent a list of any size into a data flow.

```C#
int StartYear = 1920;
int EndYear = 1940;

var currentYear = StartYear;

var source = new CustomBatchSource<Accident>();
source.ReadBatchFunc = _ => {
    var accidents = ParseAccidentsFromUrl($"https://aviation-safety.net/database/dblist.php?Year={currentYear}");
    currentYear++;
    return accidents;
};
source.ReadingCompleted = _ => currentYear > EndYear;
```

### Filtering invalid data

The scraper that we created above has a flaw: Some records don't have a valid year, the year contains the number 1. We can filter them out using the `FilterTransformation`.

```C#
var filter = new FilterTransformation<Accident>();
filter.FilterPredicate = accident => accident.Year <= 1;
```

{{< alert text="There are other ways of handling flawed data. You can use Exceptions and the LinkErrorTo() to redirect exceptional data into different destinations." >}}

### Storing, Displaying and Aggregating

Now we are ready to "duplicate" our data.
We want to store the raw data in the SQLite table that we created. Also, we want to store the data in a in-memory list object, and then display some basic information about this data. Finally, we want to aggregate the data to Fatalities/Year and then store this information in a csv file.

```C#
var multicast = new Multicast<Accident>();

var memDest = new MemoryDestination<Accident>();

var sqlLiteDest = new DbDestination<Accident>(SQLiteConnection,"Accidents");

var aggregation = new Aggregation<Accident, AccidentsPerYear>();
var csvDest = new CsvDestination<AccidentsPerYear>("aggregated.csv");

source.LinkTo(filter);
filter.LinkTo(multicast);
multicast.LinkTo(memDest);
multicast.LinkTo(sqlLiteDest);

multicast.LinkTo(aggregation, row => row.Year > 1);
aggregation.LinkTo(csvDest);

Network.Execute(source);

Console.WriteLine($"Imported {memDest.Data.Count} rows from aviation-safety.net");
for (int year = StartYear;year<=EndYear;year++)
    Console.WriteLine($"There were {memDest.Data.Where(a => a.Year == year).Count()} accidents in {year}");
```

## Demo on Github

{{< link-ext text="The whole demo code is available on GitHub" url="https://github.com/etlbox/etlbox.demo/tree/main/WebScraping" >}}.




