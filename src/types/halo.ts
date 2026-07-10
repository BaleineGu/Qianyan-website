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

/** Site setting group from Halo */
export interface HaloSetting {
  metadata: HaloMetadata;
  spec: {
    forms: Array<{
      group: string;
      label: string;
      formSchema: Array<{
        name: string;
        label: string;
        value?: string;
      }>;
    }>;
  };
}

/** Homepage hero slide (static or CMS-driven) */
export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

/** Product showcase item */
export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
}

/** Feature block for alternating image/text sections */
export interface FeatureBlock {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}
