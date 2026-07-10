import type { HaloListResponse, HaloPost } from '@/types/halo';

const HALO_API_URL = import.meta.env.HALO_API_URL || process.env.HALO_API_URL || '';
const HALO_API_TOKEN = import.meta.env.HALO_API_TOKEN || process.env.HALO_API_TOKEN || '';

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
  const result = await haloFetch<HaloListResponse<HaloPost>>({
    path: '/apis/api.content.halo.run/v1alpha1/posts',
    params: {
      page: '1',
      size: '100',
      sort: 'spec.publishTime,desc',
      'labelSelector': 'content.halo.run/visible=PUBLIC',
    },
  });

  return result?.items ?? [];
}

/** Fetch a single post by slug */
export async function fetchPostBySlug(slug: string): Promise<HaloPost | null> {
  const posts = await fetchPublishedPosts();
  return posts.find((post) => post.spec.slug === slug) ?? null;
}
