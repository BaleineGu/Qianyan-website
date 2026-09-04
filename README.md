# HeBei Telaosi Integrated House Co. LTD — Independent Website

English international marketing site powered by **Astro SSG** and **Halo Headless CMS**.

## Architecture

| Layer | Technology | Role |
|-------|------------|------|
| Frontend | Astro (`output: 'static'`) | Generates static HTML/CSS/JS |
| CMS | Halo v2.x | Stores and publishes blog content |
| Hosting | Cloudflare Workers Static Assets | Serves the generated `dist/` directory |
| Automation | Cloudflare Workers Builds + Deploy Hook | Rebuilds after code or Halo content changes |

The frontend never connects to a database. It reads published Halo posts during `npm run build`,
and every blog route is pre-rendered with `getStaticPaths()`.

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

`HALO_API_URL` is empty by default, so local development uses the built-in fallback posts and does
not require a running Halo instance. Set it to your Halo URL only when you want to develop against
CMS content.

```bash
npm run build    # generates dist/
npm run preview  # previews the static build
```

## Production configuration

Configure these build variables in Cloudflare Workers Builds:

| Variable | Purpose |
|----------|---------|
| `HALO_API_URL` | Public HTTPS URL of the Halo server |
| `SITE_URL` | Public URL of this website |
| `HALO_API_TOKEN` | Optional; public posts do not need a token |

Cloudflare builds the `master` branch on every Git push. For content-only changes, Halo calls a
Cloudflare Deploy Hook so a newly published or updated post appears on the static frontend without
requiring a source-code commit. See [docs/webhook-setup.md](docs/webhook-setup.md).
