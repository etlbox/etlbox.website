# etlbox.website

Source and tooling for the **[ETLBox.net](https://www.etlbox.net)** website: documentation, API reference, product info, and support content.

## Repository structure

| Path | Description |
|------|-------------|
| **`doks_v1.8/`** | Main Hugo site (Doks theme). Docs, recipes, API reference, blog, and product/support pages. |
| **`create_api_md/`** | API documentation pipeline: DocFX → transform → Hugo-compatible markdown for the site. |
| **`setup_kroki-vm.ps1`** | Azure PowerShell script to provision a Kroki diagram server VM (used for diagrams in the docs). |

## Tech stack

- **Site:** [Hugo](https://gohugo.io/) with [Doks](https://getdoks.org/) (Thulite)
- **Hosting:** [Netlify](https://www.netlify.com/) (builds from `doks_v1.8`)
- **API docs:** [DocFX](https://dotnet.github.io/docfx/) for .NET API → markdown used by Hugo

## Prerequisites

- **Node.js** ≥ 20.11.0 (see `doks_v1.8/package.json`)
- **Hugo** (version used on Netlify: 0.139.4; see `doks_v1.8/netlify.toml`)
- For API doc generation: **.NET SDK** and **DocFX** (see `create_api_md/README.md`)

## Local development

All commands below are run from **`doks_v1.8/`** (the Hugo site root).

```bash
cd doks_v1.8
npm install
npm run dev
```

The site is served at **http://localhost:1313** (or the port Hugo reports). Use `npm run dev:ext` for the “next” environment (e.g. extended/experimental content).

### Build for production

```bash
cd doks_v1.8
npm run build
```

Output is in `doks_v1.8/public/`.

## API documentation

The API reference in the site is generated from the ETLBox .NET solution via DocFX and a custom transform. For details, version requirements, and known issues, see:

- **[create_api_md/README.md](create_api_md/README.md)**

High-level flow:

1. Build the ETLBox solution with `dotnet build`.
2. Run DocFX: `docfx docfx_project/docfx.json --build`.
3. Run the DocFxToHugoMD transform to produce Hugo-compatible markdown.
4. Copy the generated API content into the Hugo site’s content (e.g. `content/en/api` or equivalent as described in that README).

## Deployment

- **Production:** Netlify builds from this repo using the config in `doks_v1.8/netlify.toml` (e.g. `npm run build` in `doks_v1.8`).
- Diagrams in the docs use a Kroki instance; the Netlify config points to `https://kroki.etlbox.dev/`. The `setup_kroki-vm.ps1` script can be used to provision the Azure VM for that service.

## License

See [LICENSE](LICENSE) in the repository root.
