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
    'Factory-direct customizable container homes, space capsules, and modular buildings with export-ready certification for North America, Australia, Europe, and worldwide.',
  email: 'sales@qianyanjinshu.com',
  phone: '+86 138 0000 0000',
  /** Replace with real sales WhatsApp number (country code, no +) */
  whatsapp: '8613800000000',
  logo: '/images/brand/logo-icon-white.png',
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  'Hello, I would like to request a factory quote for container housing.',
)}`;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Expandable Homes', href: '/expandable-homes' },
  { label: 'Space Capsule', href: '/space-capsule' },
  { label: 'Flat Pack', href: '/flat-pack' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const;

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Heavy-Duty Prefab Modular Housing Built for Global Markets.',
    subtitle:
      'Factory-direct customizable container homes, space capsules, and modular buildings with complete export-ready certification. Engineered to comply with international standards and delivered to North America, Australia, Europe, and worldwide.',
    image: '/images/hero/slide-1.jpg',
    primaryCta: { label: 'Get a Factory Quote', action: 'inquiry' },
    secondaryCta: { label: 'Chat on WhatsApp', action: 'whatsapp', href: whatsappUrl },
  },
  {
    id: 'slide-2',
    title: 'Expandable Container Homes Ready for Fast Deployment.',
    subtitle:
      '20ft and 40ft fold-out modular living spaces designed for developers and building contractors who need reliable onsite setup.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    primaryCta: { label: 'Get a Factory Quote', action: 'inquiry' },
    secondaryCta: { label: 'Chat on WhatsApp', action: 'whatsapp', href: whatsappUrl },
  },
  {
    id: 'slide-3',
    title: 'Export-Ready Modular Buildings with Certified Components.',
    subtitle:
      'UL, SAA, and CE-ready electrical and plumbing options, complete cargo documentation, and logistics support for customs clearance.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    primaryCta: { label: 'Get a Factory Quote', action: 'inquiry' },
    secondaryCta: { label: 'Chat on WhatsApp', action: 'whatsapp', href: whatsappUrl },
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: 'expandable',
    name: 'Expandable Container Homes',
    description:
      '20ft & 40ft fold-out modular living spaces designed for fast onsite setup. Best for developers and building contractors.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    href: '/expandable-homes',
  },
  {
    id: 'capsule',
    name: 'Space Capsule Houses',
    description:
      'Futuristic turnkey glamping accommodation with panoramic smart glass. Factory-finished and 100% plug-and-play for resort investors.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    href: '/space-capsule',
  },
  {
    id: 'flat-pack',
    name: 'Flat Pack Container Houses',
    description:
      'Cost-effective, stackable structural units for modular offices and worker accommodation camps.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    href: '/flat-pack',
  },
  {
    id: 'folding',
    name: 'Folding Houses',
    description:
      'Rapid-assembly collapsible shelters optimized for temporary housing and regional dealers.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cd00?w=800&q=80',
    href: '/contact',
  },
  {
    id: 'pools',
    name: 'Container Swimming Pools',
    description:
      'Above-ground customized cargo pool systems featuring premium filtration for hotels and modern landscape contractors.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    href: '/contact',
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
      'Tailored floor plans, custom glass facades, and localized plumbing/electrical components (UL, SAA, CE).',
  },
  {
    id: 'logistics',
    title: 'Export-Ready Logistics',
    description:
      'Full cargo securing, container freight optimization, and complete documentation support for customs clearance.',
  },
];

export const expandableBanner = {
  heading: 'Customizable Expandable Container Homes & Tiny Houses.',
  description:
    'Highly adaptable, expandable modular living spaces designed for fast deployment. Pre-fitted with turnkey kitchens and bathrooms to meet international building regulations.',
};

export const expandableSpecHeaders = ['Specifications', '20ft Expandable Tiny Home', '40ft Luxury Expandable House'];

export const expandableSpecs: SpecRow[] = [
  {
    label: 'Dimensions (Expanded)',
    values: ['5.9m x 6.3m x 2.5m', '11.8m x 6.3m x 2.5m'],
  },
  {
    label: 'Total Floor Area',
    values: ['~37 m² (398 sq ft)', '~74 m² (796 sq ft)'],
  },
  {
    label: 'Layout Options',
    values: ['1 or 2 Bedrooms, 1 Bathroom', '2 to 4 Bedrooms, 1 or 2 Bathrooms'],
  },
  {
    label: 'Setup Time',
    values: ['2 Hours (2-3 workers)', '4 Hours (3-4 workers + Crane)'],
  },
  {
    label: 'Shipping Method',
    values: ['2 units fit into 1x 40ft HQ', '1 unit fits into 1x 40ft HQ / Flat Rack'],
  },
];

export const expandableEngineering = [
  {
    title: 'Wall Panels',
    description:
      '50mm / 75mm Polyurethane (PU) or fireproof Rockwool sandwich panels for extreme thermal insulation.',
  },
  {
    title: 'Floor Frame',
    description:
      'Heavy galvanized steel sub-structure covered with marine-grade magnesium oxide board and luxury vinyl flooring.',
  },
  {
    title: 'Electrical / Plumbing',
    description:
      'Hidden pre-wired circuits matching US NEC, Canadian CEC, or Australian AS/NZS codes.',
  },
];

export const capsuleBanner = {
  heading: 'Space Capsule House: Futuristic Turnkey Glamping Accommodation.',
  description:
    'Aircraft-grade aluminum modular units with panoramic smart privacy glass. Factory-assembled and 100% plug-and-play for high-ROI hospitality setups.',
};

export const capsuleRoi = [
  {
    title: 'Zero Site Construction',
    description:
      'Arrives fully finished. Connect water and power to the pre-installed external utilities, and it is instantly ready for rental.',
  },
  {
    title: 'Premium Appeal',
    description:
      'High-end modern styling commands premium pricing on platforms like Airbnb, shortening the payback period for resort investors.',
  },
  {
    title: 'All-Weather Durability',
    description:
      'Built with structural anti-corrosion marine coatings, structural thermal barriers, and specialized aerodynamic wind resistance.',
  },
];

export const capsuleModels = [
  {
    name: 'Model S-20 (Compact Studio)',
    description:
      '6.0m Length x 3.3m Width. Includes integrated double bedroom, smart bathroom, centralized climate controls. Perfect for remote eco-resorts.',
  },
  {
    name: 'Model S-40 (Luxury Suite)',
    description:
      '11.5m Length x 3.3m Width. Features master bedroom, separate lounge/living zone, integrated projection system, and viewing balcony.',
  },
];

export const flatPackBanner = {
  heading: 'Heavy-Duty Flat Pack Container Houses for Project Sites.',
  description:
    'Cost-effective, robust, and highly scalable modular systems designed for temporary offices, commercial worker camps, and remote site headquarters.',
};

export const flatPackAdvantages = [
  {
    title: 'Freight Optimization',
    description:
      'Four individual flat-packed units bundle securely into the precise footprint of a single 20ft ISO shipping container, cutting ocean logistics fees by 75%.',
  },
  {
    title: 'Modular Scalability',
    description:
      'Built to stack vertically up to 3 floors and link endlessly horizontally to engineer extensive commercial compounds.',
  },
  {
    title: 'Rapid Assembly',
    description:
      'Corner columns bolt directly into heavy roof and floor sub-assemblies. A standard unit structure takes four crew members less than 30 minutes to lock.',
  },
];

export const flatPackMaterials = [
  {
    title: 'Main Frame',
    description:
      '3.0mm to 4.0mm Hot-dip galvanized and powder-coated steel profiles with structural drainage pathways inside corner columns.',
  },
  {
    title: 'Insulation Core',
    description: '50mm / 75mm high-density fire-retardant Rockwool sandwich panels.',
  },
  {
    title: 'Window / Door Systems',
    description:
      'Double-glazed sliding aluminum alloy windows with integral security shutters. Steel security external doors.',
  },
];

export const faqBanner = {
  heading: 'Technical Guidance & Export FAQ.',
  description:
    'Transparent and practical answers regarding international compliance, site installation, foundations, and custom modular engineering.',
};

export const faqItems: FaqItem[] = [
  {
    id: 'shipping',
    question: 'How are the container houses packed and shipped internationally?',
    answer:
      'We secure and pack our modular houses according to strict international maritime shipping standards. Expandable homes and capsule houses are loaded via 40ft HC (High Cube) containers or flat racks. Flat packs are bundled together. We provide comprehensive export-ready documentation to ensure smooth customs clearance in the US, Canada, Australia, and other regions.',
  },
  {
    id: 'codes',
    question: 'Do your prefab structures comply with our local country building codes?',
    answer:
      'Yes. We install internationally certified components (including UL-listed and SAA-certified electrical wiring, breakers, and plumbing valves). We adapt structural load points and insulation profiles (PU or Rockwool) based on your regional weather data and blueprint plans. We recommend validating local zoning laws with your local municipality before finalizing delivery schedules.',
  },
  {
    id: 'foundation',
    question: 'What foundation preparation must be completed before delivery?',
    answer:
      'Our modular structures can sit securely on basic concrete pads, structural concrete piers, or industrial screw piles placed under the structural corner points. We dispatch complete engineering foundation plans and weight distribution blueprints directly to your project team once an order contract is established.',
  },
  {
    id: 'custom',
    question: 'Can we order custom layouts for commercial or brand applications?',
    answer:
      'Absolutely. As a direct manufacturing facility, we offer comprehensive solution-oriented custom engineering. Clients can easily alter exterior cladding colors, specify distinct flooring grades, adjust door/window configurations, and append structural additions like customized container swimming pools to align directly with commercial compound identities.',
  },
];

export const footerLinks = {
  products: [
    { label: 'Expandable Homes', href: '/expandable-homes' },
    { label: 'Space Capsule', href: '/space-capsule' },
    { label: 'Flat Pack', href: '/flat-pack' },
    { label: 'Folding Houses', href: '/contact' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Get a Factory Quote', href: '/contact' },
    { label: 'WhatsApp Sales', href: whatsappUrl },
    { label: 'Catalog Request', href: '/contact' },
  ],
  contact: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Sales Inquiry', href: '/contact' },
    { label: 'Export Support', href: '/faq' },
    { label: 'Partnerships', href: '/contact' },
  ],
};
