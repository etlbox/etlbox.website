# ETLBox website

## Algolia - First try

Used this configuration guide: https://www.mcmurray.co.nz/blog/hugo-search-with-algolia/create-the-index/

To create an index manually, run 
`npm run build`

In the `public` folder there is now an `algolia.json` file which contains the index data. 
To configure this, json, the following parts are relevant:

### config.toml

The following lines are used to tell Hugo that he should output json as well when building:

```toml
[outputs]
  home = [..., "Algolia"]

#Adding Algolia search
[outputFormats.Algolia]
  baseName = "algolia"
  isPlainText = true
  mediaType = "application/json"
  notAlternative = true

[params.algolia]
  vars =  ["title", "description", "permalink", "wordcount", "lang", "type","content"] #Hugo default frontmatter vars
  params = ["lead"] #Own vars added to frontmatter
```

#### Script 
Found at  `layouts/_default/list.algolia.json`
Here is the script that is used by hugo when `npm run build` is started. 

### Automatic sync

Installed the package `atomic-algolia`
Added a script named "algolia", which can be started with `npm run algolia`

This will use the .env file to connect with Alogilia and update the index (using the objectId for syncing, I guess).
The .env is not stored in github, as it contains private information. The file must be placed at root level (named `.env`) and contain the following:

```
ALGOLIA_APP_ID=<YOUR_APP_ID>
ALGOLIA_ADMIN_KEY=<YOUR_ADMIN_KEY>
ALGOLIA_INDEX_NAME=<YOUR_INDEX_NAME>
ALGOLIA_INDEX_FILE=public/algolia.json
```

### Frontend

The most complicated part with Algolia is setting up a search bar in hugo.

Here is an example that shows a basic search bar with an index created with the approach above:

```
<!-- Load Algolia scripts -->
<script src="https://cdn.jsdelivr.net/npm/algoliasearch@3/dist/algoliasearchLite.min.js"></script>
<script src="https://cdn.jsdelivr.net/autocomplete.js/0/autocomplete.js"></script>
<style>
       //debug into the search box to style! 
</style>
<!-- Initialise search -->
<script>
 
var client = algoliasearch("JCLW0GC290","5fe5189716b04e69368671dd944ef1b0");
var index = client.initIndex("etlbox");
//dropdownMenuContainer: "#suggestions"
autocomplete('#search-input', { hint: true, debug:true }, [
  {
    source: autocomplete.sources.hits(index, { hitsPerPage: 10 }),
      displayKey: 'title',
       templates: {
          suggestion: function(suggestion) {
            console.log(suggestion);
            return "<a href=\"xxx.html\"><span class=\"suggestion__title\">"+ suggestion._highlightResult.title.value + "</span><spanvclass=\"suggestion__description\">" + suggestion._highlightResult.description.value + "</span></a>";
          },
          empty: function(suggestion) {
            return 'No result';
          }
        }
    }
  ]).on("autocomplete:selected",function(event, suggestion, dataset, context) {
    console.log(event, suggestion, dataset, context);
    window.location.assign(suggestion.permalink);
  });
</script>
```

The whole thing could be styled like this:

```
.algolia-autocomplete a,
.suggestion__no-results {
  padding: 0.75rem;
  margin: 0 0.5rem;
}

.algolia-autocomplete div:not(:first-child) {
  border-top: 1px dashed $gray-200;
}

.algolia-autocomplete div:first-child {
  margin-top: 0.5rem;
}

.algolia-autocomplete a {
  display: block;
  text-decoration: none;
}

.algolia-autocomplete a:focus {
  background: $gray-100;
  outline: 0;
}

.algolia-autocomplete div:last-child {
  margin-bottom: 0.5rem;
}

.algolia-autocomplete a:hover {
  background: $gray-100;
}

.algolia-autocomplete span {
  display: flex;
  font-size: $font-size-base;
}

.suggestion__title {
  font-weight: $headings-font-weight;
  color: $black;
}

.suggestion__description,
.suggestion__no-results {
  color: $gray-700;
}

@include media-breakpoint-up(lg) {
  .algolia-autocomplete {
    width: 31.125rem;
    max-width: 31.125rem;
  }

  .algolia-autocomplete a {
    display: flex;
  }

  .suggestion__title {
    width: 9rem;
    padding-right: 1rem;
    border-right: 1px solid $gray-200;
    display: inline-block;
    text-align: right;
  }

  .suggestion__description {
    width: 19rem;
    padding-left: 1rem;
  }
}


.algolia-autocomplete .aa-input, 
.algolia-autocomplete .aa-hint {
  width: 100%;
}
.algolia-autocomplete .aa-hint {
  color: #999;
}
.algolia-autocomplete .aa-dropdown-menu {
  width: 100%;
  background-color: #fff;
  border: 1px solid #999;
  border-top: none;
}
.algolia-autocomplete .aa-dropdown-menu .aa-suggestion {
  cursor: pointer;
  padding: 5px 4px;
}
.algolia-autocomplete .aa-dropdown-menu .aa-suggestion.aa-cursor {
  background-color: #B2D7FF;
}
.algolia-autocomplete .aa-dropdown-menu .aa-suggestion em {
  font-weight: bold;
  font-style: normal;
}
```