import type { HaloListResponse, HaloPost } from '@/types/halo';

const HALO_API_URL = import.meta.env.HALO_API_URL || '';
const HALO_API_TOKEN = import.meta.env.HALO_API_TOKEN || '';
const POSTS_API_PATH = '/apis/api.content.halo.run/v1alpha1/posts';
const POSTS_PAGE_SIZE = 100;

interface FetchOptions {
  path: string;
  params?: Record<string, string>;
}

/**
 * Build-time fetch against Halo REST API.
 * Returns empty fallback when Halo is unreachable (local dev without CMS).
 */
async function haloFetch<T>({ path, params }: FetchOptions): Promise<T | null> {
  if (!HALO_API_URL) {
    return null;
  }

  const url = new URL(path, HALO_API_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  }

  const headers: Record<string, string> = { Accept: 'application/json' };
  if (HALO_API_TOKEN) {
    headers.Authorization = `Bearer ${HALO_API_TOKEN}`;
  }

  try {
    const response = await fetch(url.toString(), { headers });
    if (!response.ok) {
      console.warn(`[halo] ${response.status} ${path}`);
      return null;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.warn(`[halo] fetch failed: ${path}`, error);
    return null;
  }
}

/** Fetch all published posts for static blog pages */
export async function fetchPublishedPosts(): Promise<HaloPost[]> {
  const posts: HaloPost[] = [];
  let page = 1;

  while (true) {
    const result = await haloFetch<HaloListResponse<HaloPost>>({
      path: POSTS_API_PATH,
      params: {
        page: String(page),
        size: String(POSTS_PAGE_SIZE),
        sort: 'spec.publishTime,desc',
      },
    });

    if (!result) {
      return [];
    }

    posts.push(...result.items);
    if (!result.hasNext) {
      return posts;
    }

    page += 1;
  }
}

/** Fetch a single post by slug */
export async function fetchPostBySlug(slug: string): Promise<HaloPost | null> {
  const posts = await fetchPublishedPosts();
  const listedPost = posts.find((post) => post.spec.slug === slug);
  if (!listedPost) {
    return null;
  }

  return haloFetch<HaloPost>({
    // Halo's public detail endpoint is keyed by metadata.name, not the human-readable slug.
    path: `${POSTS_API_PATH}/${encodeURIComponent(listedPost.metadata.name)}`,
  });
}

/** Use Halo's resolved excerpt, falling back to the manual editor value when necessary. */
export function getHaloPostExcerpt(post: HaloPost): string {
  return post.status?.excerpt || post.spec.excerpt?.raw || '';
}

/** Resolve Halo-managed media URLs so they also work on the separately hosted static site. */
export function resolveHaloAssetUrl(value?: string): string {
  if (!value || !HALO_API_URL) {
    return value ?? '';
  }

  try {
    return new URL(value, HALO_API_URL).toString();
  } catch {
    return value;
  }
}

/**
 * Halo returns trusted, editor-rendered HTML for published posts. Convert root-relative media
 * references to absolute CMS URLs before Astro writes the HTML into the static page.
 */
export function resolveHaloContentUrls(content?: string): string {
  if (!content || !HALO_API_URL) {
    return content ?? '';
  }

  return content.replace(
    /\b(src|href)=(['"])(\/[^'"]*)\2/gi,
    (_match, attribute: string, quote: string, value: string) =>
      `${attribute}=${quote}${resolveHaloAssetUrl(value)}${quote}`,
  );
}
