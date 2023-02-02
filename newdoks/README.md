# ETLBox website

## Algolia configuration

Currently this website uses the netflix integration with Algolia, which is limited regarding configuration. 
See the [Algolia readme for first attemps with other configurations](readme/algolia.md).

## API Creation

There is an [extra csharp project](../create_api_md/README.md) that uses [docfx](https://dotnet.github.io/docfx/) to generate html pages first and then generate some hugo readable files (mixture of html and markdown) from this output. The implementation is very rough and "quick&dirty", but does it job. 