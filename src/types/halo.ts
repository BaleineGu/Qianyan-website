/** Halo API metadata block shared across extensions */
export interface HaloMetadata {
  name: string;
  generateName?: string;
  creationTimestamp?: string;
  labels?: Record<string, string>;
  annotations?: Record<string, string>;
}

/** Halo list response wrapper */
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

/** Published post from Halo content API */
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

/** Homepage hero slide */
export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  primaryCta: { label: string; action: 'inquiry' | 'link'; href?: string };
  secondaryCta: { label: string; action: 'whatsapp' | 'link'; href?: string };
}

/** Product category card */
export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

/** Trust / capability item */
export interface TrustItem {
  id: string;
  title: string;
  description: string;
}

/** Spec table row */
export interface SpecRow {
  label: string;
  values: string[];
}

/** FAQ item */
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
