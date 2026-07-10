import type { FeatureBlock, HeroSlide, ProductItem } from '@/types/halo';

export const siteConfig = {
  name: 'QIANYAN JINSHU',
  shortName: 'QIANYAN',
  tagline: 'Engineering excellence for the modern world',
  description:
    'QIANYAN JINSHU delivers precision-engineered products and solutions trusted by teams worldwide.',
  email: 'hello@qianyanjinshu.com',
  phone: '+1 (800) 555-0199',
  logo: '/images/brand/logo-icon-white.png',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
] as const;

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Build What Matters',
    subtitle: 'Industrial-grade solutions designed for scale, reliability, and lasting impact.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&q=80',
    primaryCta: { label: 'Explore Products', href: '/products' },
    secondaryCta: { label: 'Read Our Blog', href: '/blog' },
  },
  {
    id: 'slide-2',
    title: 'Innovation Without Compromise',
    subtitle: 'From concept to deployment — engineered for teams who refuse to settle.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80',
    primaryCta: { label: 'Explore Products', href: '/products' },
    secondaryCta: { label: 'Read Our Blog', href: '/blog' },
  },
  {
    id: 'slide-3',
    title: 'Trusted Worldwide',
    subtitle: 'Over 2,000 organizations rely on Telaosi to power their critical operations.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
    primaryCta: { label: 'Explore Products', href: '/products' },
    secondaryCta: { label: 'Read Our Blog', href: '/blog' },
  },
];

export const introSection = {
  theme: 'Precision Engineering',
  explanation:
    'We combine advanced materials science with rigorous quality control to deliver products that outperform expectations — every time, in every environment.',
};

export const productStory = {
  title: 'Products That Define Industries',
  subtitle: 'Engineered for performance. Built to last.',
  description:
    'Our flagship product line has redefined what teams expect from industrial equipment. With patented thermal management, modular architecture, and a 99.97% uptime record across 40 countries, Telaosi products don\'t just meet standards — they set them.',
  image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1920&q=80',
};

export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Modular by Design',
    description:
      'Swap components in minutes, not hours. Our plug-and-play architecture reduces downtime and lets your team adapt to any workflow without costly reconfiguration.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Built for Harsh Environments',
    description:
      'IP68-rated enclosures, -40°C to 85°C operating range, and MIL-STD-810G shock resistance. Telaosi products thrive where others fail.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    imagePosition: 'left',
  },
];

export const products: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'NovaCore X1',
    tagline: 'Flagship compute platform',
    description: 'High-performance edge computing with redundant failover and sub-millisecond latency.',
    image: '/images/products/novacore-x1.jpg',
    href: '/products',
  },
  {
    id: 'prod-2',
    name: 'NovaSense Pro',
    tagline: 'Industrial IoT sensor suite',
    description: 'Real-time environmental monitoring with wireless mesh networking built in.',
    image: '/images/products/novasense-pro.jpg',
    href: '/products',
  },
  {
    id: 'prod-3',
    name: 'NovaGrid',
    tagline: 'Power distribution system',
    description: 'Intelligent load balancing and energy recovery for mission-critical facilities.',
    image: '/images/products/novagrid.jpg',
    href: '/products',
  },
  {
    id: 'prod-4',
    name: 'NovaLink',
    tagline: 'Secure connectivity hub',
    description: 'End-to-end encrypted communication gateway for distributed teams.',
    image: '/images/products/novalink.jpg',
    href: '/products',
  },
];

export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/about' },
  ],
  support: [
    { label: 'Documentation', href: '/contact' },
    { label: 'FAQ', href: '/contact' },
    { label: 'Warranty', href: '/contact' },
    { label: 'Service Centers', href: '/contact' },
  ],
  contact: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Sales Inquiry', href: '/contact' },
    { label: 'Technical Support', href: '/contact' },
    { label: 'Partnerships', href: '/contact' },
  ],
};
