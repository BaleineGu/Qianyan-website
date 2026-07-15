import type {
  FaqItem,
  HeroSlide,
  ProductCategory,
  SpecRow,
  TrustItem,
} from '@/types/halo';

export const siteConfig = {
  name: 'QIANYAN JINSHU',
  shortName: 'QIANYAN',
  tagline: 'Heavy-duty prefab modular housing for global B2B markets.',
  description:
    'Factory-direct expandable container homes, space capsule houses, flat pack buildings, folding houses, and container swimming pools with export-ready delivery support.',
  email: 'sales@qianyanjinshu.com',
  phone: '+86 138 0000 0000',
  whatsapp: '8613800000000',
  logo: '/images/brand/logo-icon-white.png',
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Hello, I would like to request a factory quote for modular container housing.',
)}`;

export const productNavLinks = [
  { label: 'Flat Pack Container House', href: '/flat-pack-container-house' },
  { label: 'Folding House', href: '/folding-house' },
  { label: 'Space capsule house', href: '/space-capsule-house' },
  { label: 'Container swimming pool', href: '/container-swimming-pool' },
  { label: 'Supporting container/prefab terms', href: '/expandable-container-homes' },
] as const;

export const navLinks = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  {
    label: 'PRODUCT',
    href: '/products',
    children: productNavLinks,
  },
  { label: 'BLOG', href: '/blog' },
  { label: 'TOUCH', href: '/contact' },
] as const;

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Container houses manufacturer from China',
    subtitle:
      'The company primarily deals in expandable container homes, space capsule houses, flat-pack container houses, folding houses, and container swimming pools.',
    image: '/images/hero/slide-1.png',
    primaryCta: { label: 'Get a Factory Quote', action: 'inquiry' },
    secondaryCta: { label: 'Chat on WhatsApp', action: 'whatsapp', href: whatsappUrl },
  },
  {
    id: 'slide-2',
    title: 'Container houses manufacturer from China',
    subtitle:
      'The company primarily deals in expandable container homes, space capsule houses, flat-pack container houses, folding houses, and container swimming pools.',
    image: '/images/hero/slide-2.png',
    primaryCta: { label: 'Get a Factory Quote', action: 'inquiry' },
    secondaryCta: { label: 'Chat on WhatsApp', action: 'whatsapp', href: whatsappUrl },
  },
  {
    id: 'slide-3',
    title: 'Container houses manufacturer from China',
    subtitle:
      'The company primarily deals in expandable container homes, space capsule houses, flat-pack container houses, folding houses, and container swimming pools.',
    image: '/images/hero/slide-3.png',
    primaryCta: { label: 'Get a Factory Quote', action: 'inquiry' },
    secondaryCta: { label: 'Chat on WhatsApp', action: 'whatsapp', href: whatsappUrl },
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: 'expandable',
    name: 'Expandable Container Homes',
    description:
      '20ft & 40ft fold-out modular living spaces for fast onsite setup. Best for developers and building contractors.',
    image: '/images/products/expandable-container-home.png',
    href: '/expandable-container-homes',
  },
  {
    id: 'capsule',
    name: 'Space Capsule Houses',
    description:
      'Turnkey glamping units with panoramic glass. Built for resort and hospitality investors.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    href: '/space-capsule-house',
  },
  {
    id: 'flat-pack',
    name: 'Flat Pack Container Houses',
    description:
      'Stackable modular offices and worker camps with freight-efficient packing.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    href: '/flat-pack-container-house',
  },
  {
    id: 'folding',
    name: 'Folding Houses',
    description:
      'Rapid-assembly shelters for temporary housing and regional dealers.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?w=800&q=80',
    href: '/folding-house',
  },
  {
    id: 'pools',
    name: 'Container Swimming Pools',
    description:
      'Above-ground cargo pool systems for hotels, resorts, and landscape contractors.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    href: '/container-swimming-pool',
  },
];

export const trustItems: TrustItem[] = [
  {
    id: 'engineering',
    title: 'Reliable Engineering',
    description:
      'Wind-resistant steel structures, waterproof interlocking joints, and certified thermal insulation.',
  },
  {
    id: 'customization',
    title: 'Flexible Customization',
    description:
      'Tailored floor plans, custom facades, and localized plumbing/electrical options (UL, SAA, CE).',
  },
  {
    id: 'logistics',
    title: 'Export-Ready Logistics',
    description:
      'Cargo securing, freight optimization, and documentation support for customs clearance.',
  },
];

export const targetMarkets = [
  'United States / Canada',
  'Australia / New Zealand',
  'Middle East',
  'Southeast Asia',
  'Europe',
];

export const expandableBanner = {
  heading: 'Expandable Container Homes & Tiny Houses for Global Projects',
  description:
    'Customizable expandable modular living spaces designed for fast deployment. Pre-fitted kitchen and bathroom options help meet international project requirements for developers and contractors.',
};

export const expandableSpecHeaders = [
  'Specifications',
  '20ft Expandable Tiny Home',
  '40ft Luxury Expandable House',
];

export const expandableSpecs: SpecRow[] = [
  { label: 'Dimensions (Expanded)', values: ['5.9m × 6.3m × 2.5m', '11.8m × 6.3m × 2.5m'] },
  { label: 'Total Floor Area', values: ['~37 m² (398 sq ft)', '~74 m² (796 sq ft)'] },
  { label: 'Layout Options', values: ['1–2 bedrooms, 1 bathroom', '2–4 bedrooms, 1–2 bathrooms'] },
  { label: 'Setup Time', values: ['About 2 hours (2–3 workers)', 'About 4 hours (3–4 workers + crane)'] },
  { label: 'Shipping Method', values: ['2 units / 1× 40ft HQ', '1 unit / 1× 40ft HQ or flat rack'] },
];

export const expandableEngineering = [
  {
    title: 'Wall Panels',
    description: '50mm / 75mm PU or fireproof Rockwool sandwich panels for thermal insulation.',
  },
  {
    title: 'Floor Frame',
    description:
      'Heavy galvanized steel sub-structure with marine-grade board and vinyl flooring options.',
  },
  {
    title: 'Electrical / Plumbing',
    description:
      'Pre-wired circuits configurable for US NEC, Canadian CEC, or AS/NZS requirements.',
  },
];

export const expandableFaqs = [
  {
    q: 'How long does installation take?',
    a: 'Most 20ft units set up in about two hours with a small crew; 40ft units typically need a crane and about four hours.',
  },
  {
    q: 'Can layouts be customized?',
    a: 'Yes. Bedroom count, bathroom count, facade, and finishes can be adapted to project plans.',
  },
  {
    q: 'Do you support US / Australia electrical standards?',
    a: 'Yes. Localized UL / SAA component options are available by market.',
  },
];

export const capsuleBanner = {
  heading: 'Space Capsule House: Turnkey Glamping Accommodation for Resort Projects',
  description:
    'Aircraft-grade aluminum modular units with panoramic privacy glass. Factory-assembled and plug-and-play for hospitality setups that need fast launch and premium guest appeal.',
};

export const capsuleRoi = [
  {
    title: 'Zero Site Construction Delay',
    description:
      'Connect water and power to pre-installed external utilities and open for rental.',
  },
  {
    title: 'Premium Guest Pricing Potential',
    description:
      'Modern design supports higher nightly rates on Airbnb and resort packages.',
  },
  {
    title: 'All-Weather Durability',
    description:
      'Anti-corrosion coatings, thermal barriers, and aerodynamic wind-resistant structure.',
  },
];

export const capsuleModels = [
  {
    name: 'Model S-20 (Compact Studio)',
    description:
      '6.0m × 3.3m. Integrated double bedroom, smart bathroom, climate control. Suited for eco-resorts and compact glamping sites.',
  },
  {
    name: 'Model S-40 (Luxury Suite)',
    description:
      '11.5m × 3.3m. Master bedroom, lounge zone, projection system, and viewing balcony options for premium suites.',
  },
];

export const flatPackBanner = {
  heading: 'Heavy-Duty Flat Pack Container Houses for Project Sites',
  description:
    'Cost-effective, robust, and scalable modular systems for temporary offices, worker camps, and remote site headquarters.',
};

export const flatPackAdvantages = [
  {
    title: 'Freight Optimization',
    description:
      'Multiple flat-packed units can share one ISO container footprint, reducing ocean logistics cost.',
  },
  {
    title: 'Modular Scalability',
    description: 'Stack up to 3 floors and link horizontally for larger compounds.',
  },
  {
    title: 'Rapid Assembly',
    description:
      'Corner columns bolt into roof and floor assemblies; a standard unit structure can lock in under 30 minutes with a four-person crew.',
  },
];

export const flatPackMaterials = [
  {
    title: 'Main Frame',
    description:
      '3.0–4.0mm hot-dip galvanized and powder-coated steel with drainage pathways in corner columns.',
  },
  {
    title: 'Insulation Core',
    description: '50mm / 75mm high-density fire-retardant Rockwool sandwich panels.',
  },
  {
    title: 'Windows / Doors',
    description:
      'Double-glazed aluminum sliding windows with security shutters; steel security external doors.',
  },
];

export const foldingBanner = {
  heading: 'Folding Houses for Fast Temporary and Commercial Housing',
  description:
    'Collapsible modular shelters designed for rapid assembly, compact transport, and dealer-ready inventory programs.',
};

export const foldingBenefits = [
  {
    title: 'Fast Deployment',
    description: 'Practical for temporary camps and short-term project housing.',
  },
  {
    title: 'Compact Freight',
    description: 'Folded size helps reduce transport volume versus fully assembled units.',
  },
  {
    title: 'Dealer Ready',
    description: 'Suitable for regional dealers building stock and rental fleets.',
  },
];

export const poolBanner = {
  heading: 'Container Swimming Pools for Hotels, Resorts, and Landscape Projects',
  description:
    'Above-ground customized cargo pool systems with filtration options for commercial leisure and modern outdoor spaces.',
};

export const poolFeatures = [
  {
    title: 'Commercial Use Cases',
    description:
      'Hotel decks, boutique homestays, glamping compounds, and landscape contractor projects.',
  },
  {
    title: 'System Features',
    description:
      'Container structural shell, filtration packages, custom finishes, lighting, and deck interfaces.',
  },
  {
    title: 'Export Delivery',
    description:
      'Packaging and documentation support for international project shipment.',
  },
];

export const faqBanner = {
  heading: 'Technical Guidance & Export FAQ',
  description:
    'Practical answers on international shipping, compliance, foundations, and custom modular engineering.',
};

export const faqItems: FaqItem[] = [
  {
    id: 'shipping',
    question: 'How are the container houses packed and shipped internationally?',
    answer:
      'We pack modular houses to maritime shipping standards. Expandable homes and capsule houses typically ship in 40ft HC containers or on flat racks. Flat packs are bundled for freight efficiency. Export documentation is prepared for customs clearance in the US, Canada, Australia, and other markets.',
  },
  {
    id: 'codes',
    question: 'Do your prefab structures comply with local building codes?',
    answer:
      'We install internationally certified components where required, including UL-listed and SAA-certified electrical options. Structural load and insulation profiles can be adapted to regional weather and project drawings. Local zoning should still be validated with your municipality before delivery.',
  },
  {
    id: 'foundation',
    question: 'What foundation is required before delivery?',
    answer:
      'Units can sit on concrete pads, structural piers, or screw piles under corner load points. Foundation drawings and weight distribution plans are provided after contract confirmation.',
  },
  {
    id: 'custom',
    question: 'Can we order custom layouts for commercial or brand applications?',
    answer:
      'Yes. As a manufacturing facility, we support cladding colors, flooring grades, door/window configurations, and add-ons such as container swimming pools for compound projects.',
  },
];

export const footerLinks = {
  products: [
    { label: 'Expandable Homes', href: '/expandable-container-homes' },
    { label: 'Space Capsule', href: '/space-capsule-house' },
    { label: 'Flat Pack', href: '/flat-pack-container-house' },
    { label: 'Folding House', href: '/folding-house' },
    { label: 'Container Pool', href: '/container-swimming-pool' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Get a Factory Quote', href: '/contact' },
    { label: 'WhatsApp Sales', href: whatsappUrl },
    { label: 'About Us', href: '/about' },
  ],
  contact: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Sales Inquiry', href: '/contact' },
    { label: 'Catalog Request', href: '/contact' },
  ],
};
