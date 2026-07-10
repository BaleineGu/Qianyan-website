# NovaTech — Independent Website

English international marketing site powered by **Astro SSG** + **Halo Headless CMS**.

## Architecture

| Layer | Technology | Role |
|-------|------------|------|
| Frontend | Astro (`output: 'static'`) | Pure static HTML/CSS/JS |
| CMS | Halo v2.x | Content source (build-time API only) |
| Automation | GitHub Actions + Webhook | Rebuild on content change |

**Hard constraints** (see `.cursorrules`):

- No SSR / hybrid rendering
- No database connections from the frontend
- All Halo data fetched at build time
- Dynamic routes use `getStaticPaths()`

## Homepage Structure

1. **Header** — Home · Products · About Us · Blog · Contact Us
2. **Full-width hero carousel** — title, subtitle, CTAs (Products / Blog)
3. **Intro block** — theme (left) + explanation (right)
4. **Product story banner** — full-width image with product narrative
5. **Feature: text left / image right**
6. **Feature: image left / text right**
7. **Product carousel**
8. **Footer** — About · Support · Contact

## Quick Start

```bash
cp .env.example .env
npm install
npm run dev
```

```bash
npm run build    # → dist/ (pure static)
npm run preview  # preview the static build
```

## Webhook Automation

See [docs/webhook-setup.md](docs/webhook-setup.md) for Halo → GitHub Actions setup.
