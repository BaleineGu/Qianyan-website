# Halo content sync to Cloudflare Workers

The site is static. A Halo publish/update event therefore starts a new Cloudflare build, and Astro
fetches the latest public Halo posts while generating `dist/`.

## Data flow

```text
Publish or update a post in Halo
  -> Halo Webhook plugin sends an HTTP POST
  -> Cloudflare Workers Deploy Hook starts a production build
  -> Astro fetches the current Halo posts
  -> Cloudflare deploys the regenerated static site
```

## 1. Configure Cloudflare build variables

Open **Workers & Pages -> qianyan-website -> Settings -> Builds -> Variables and Secrets** and add:

| Name | Example | Required |
|------|---------|----------|
| `HALO_API_URL` | `https://cms.example.com` | Yes |
| `SITE_URL` | `https://qianyan-website.example.workers.dev` | Yes |
| `HALO_API_TOKEN` | — | No, not for public posts |

`HALO_API_URL` must be reachable from Cloudflare's build environment and should not end with `/`.

The existing Workers Builds settings remain:

- Production branch: `master`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

## 2. Create a Cloudflare Deploy Hook

In the same **Builds** settings page, add a deploy hook for the `master` branch. Suggested name:
`halo-content-updated`.

Cloudflare returns a unique POST URL. Treat this URL as a secret: anyone who has it can start a
deployment. Do not commit it to this repository or put it in a public environment variable.

## 3. Configure Halo

1. Install the official **Webhook** plugin from the Halo App Store.
2. Create a webhook target using the Cloudflare Deploy Hook URL.
3. Enable post publish/update/delete events that should rebuild the site.
4. Save the target and send a test event if the plugin provides that option.

No GitHub token, GitHub Actions dispatch, custom relay, or request header is required. Cloudflare's
deploy hook accepts the POST and starts the build directly.

## 4. Verify the complete flow

1. Publish a test post in Halo.
2. Confirm a new build appears in Cloudflare Workers Builds.
3. Wait for the deployment to succeed.
4. Open `/blog` and the generated post detail page on the public site.

## Local verification

```bash
cp .env.example .env
npm install
npm run build
npm run preview
```
