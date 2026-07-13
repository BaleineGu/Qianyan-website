/** Halo API metadata */
export interface HaloMetadata {
  name: string;
  generateName?: string;
  creationTimestamp?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

export interface HaloListResponse<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
  first: boolean;
  last: boolean;
  hasNext: boolean;
  hasPrevious: boolean;
  totalPages: number;
}

export interface HaloPost {
  metadata: HaloMetadata;
  spec: {
    title: string;
    slug: string;
    excerpt?: string;
    cover?: string;
    publishTime?: string;
    visible?: string;
  };
  status?: {
    permalink?: string;
  };
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  primaryCta: { label: string; action: 'inquiry' | 'link'; href?: string };
  secondaryCta: { label: string; action: 'whatsapp' | 'link'; href?: string };
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
}

export interface SpecRow {
  label: string;
  values: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
