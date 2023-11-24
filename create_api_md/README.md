# Running docfx

The API generation has been successfully tested with docfx version 2.74.0.
(For commits/version before Nov 24 2023: DocFx 2.61.0)
The ETLBox solution / all projects need to be build first with dotnet build. 
DocFx can't build the projects - some Warning appears (`Failure] Msbuild failed when processing the file 'C:\Users\andreaslennartz\Github\et
lbox\etlbox.source\ETLBox.Xml\ETLBox.Xml.csproj' with message: Project does not contain 'Compile' target.`), but the documentation is generated anyways.

## Known issues

After releasing, the Release folder will contain obfuscated .dll files. If docfx is run while these dll still exists, not all ///<inheritdoc /> tags are properly resolved. Before running docfx, make sure that the Release folder are empty:

`dotnet clean ../../etlbox.tests --configuration Release`

## Upgrading/Fresh installation

 The folder docfx_project can be completely removed.

To install docfx locally (or to update), run:

```cmd
dotnet tool update -g docfx
```

To create a new docfx folder, run:

```cmd
docfx init --quiet
```
This will install a fresh docfx installation (no configuration file here yet.)

No copy the docfx.json file (in this folder) into the newly created docfx_project folder.

## Add new packages

Go into the docfx.json file and adjust to new packages.

## Creating html files

To build the docset, run:

```bash
docfx docfx_project/docfx.json --build
```

This will create a lot of warning, and the api html pages under _site/api.

### Transforming html into hugo readable format (not really markdown, more html like)

Run the DocFxToHugoMD project. 
It will generate the whole folder, including necessary _index.md files.


### Copy the md/html files

Replace bin/Debug/.net5.0/Output/api folder with the content/en/api folder of the hugo website. 

Commit/Push changes, and all done!