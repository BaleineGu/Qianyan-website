# Halo Webhook → CI/CD Rebuild

When content changes in Halo CMS, a webhook triggers a static site rebuild.

## Architecture

```
Halo CMS (content change)
  → Webhook POST
  → GitHub repository_dispatch event
  → GitHub Actions build (astro build)
  → Deploy static HTML to CDN/Pages
```

## Setup

### 1. GitHub Secrets

Configure these in your repository settings:

| Secret | Description |
|--------|-------------|
| `HALO_API_URL` | Halo instance URL, e.g. `https://cms.example.com` |
| `HALO_API_TOKEN` | Personal Access Token with post read permissions |
| `SITE_URL` | Public site URL, e.g. `https://www.example.com` |
| `WEBHOOK_SECRET` | Shared secret for webhook validation |

### 2. Halo Webhook Configuration

In Halo Console, create a webhook that fires on content events (post published, updated, deleted):

**Endpoint:** Use a middleware service or GitHub API directly:

```bash
curl -X POST \
  -H "Authorization: token <GITHUB_PAT>" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/<owner>/<repo>/dispatches \
  -d '{"event_type":"halo-content-updated"}'
```

Alternatively, use a serverless function (Cloudflare Worker, Vercel Edge) to:
1. Validate the `WEBHOOK_SECRET` header from Halo
2. Forward the `repository_dispatch` event to GitHub

### 3. Local Development

```bash
cp .env.example .env
npm install
npm run dev
```

### 4. Production Build

```bash
npm run build
# Output: dist/ — pure static HTML/CSS/JS
```

## Constraints (from .cursorrules)

- `output: 'static'` only — no SSR, no hybrid
- All Halo data fetched at **build time** via `src/lib/halo.ts`
- Dynamic routes use `getStaticPaths()` to pre-render all pages
- No database connections from the frontend
