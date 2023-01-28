# ETLBox website

## Algolia

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