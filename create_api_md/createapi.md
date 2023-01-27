# Running docfx

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
You may need to adjust some of the exludes if needed. 

### Copy the md/html files

Copy all folders in the bin/Debug/.net5.0/Output folder into the content/en/api folder of the hugo website. 

Commit/Push changes, and all done!