import type {
  FaqItem,
  HeroSlide,
  ProductCategory,
  SpecRow,
  TrustItem,
} from '@/types/halo';

export const siteConfig = {
  name: 'QIANYAN Metal',
  shortName: 'QIANYAN',
  tagline: 'Connecting with the World\nMutual Benefit for All',
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
  { label: 'Expandable container homes', href: '/expandable-container-homes' },
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
    title: 'Global Provider of Premium Modular Container Solutions',
    subtitle:
      'We primarily deal in expandable container houses, space capsule houses, flat-pack container houses, foldable houses, and container swimming pools.',
    image: '/images/hero/slide-1.png',
    primaryCta: { label: 'Get a Factory Quote', action: 'inquiry' },
    secondaryCta: { label: 'Chat on WhatsApp', action: 'whatsapp', href: whatsappUrl },
  },
  {
    id: 'slide-2',
    title: 'Sustainable Structures, Endless Possibilities',
    subtitle:
      'Transform your commercial vision into reality. Our eco-friendly modular solutions minimize construction time and maximize ROI for forward-thinking developers',
    image: '/images/hero/slide-2.png',
    primaryCta: { label: 'Get a Factory Quote', action: 'inquiry' },
    secondaryCta: { label: 'Chat on WhatsApp', action: 'whatsapp', href: whatsappUrl },
  },
  {
    id: 'slide-3',
    title: 'Build Anywhere. Live Unbound. Custom Container Solutions',
    subtitle:
      'From eco-friendly modular homes to luxury backyard pools. We design, build, and ship globally to match your vision.',
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
      'Available in sizes ranging from 10ft to 40ft, these innovative integrated space-expanding houses offer high spatial expandability. The expandable structure increases usable area, and the foldable design allows for convenient and quick transport and relocation. Uniquely designed, aesthetically pleasing, and practical, these houses offer diverse customization options for size and internal layout. With their unique design and advanced technology, they deliver unparalleled space utilization efficiency. Exquisitely crafted and durable, made from high-strength, environmentally friendly materials, they adapt to various complex environmental conditions. The folding function allows for easy and rapid expansion and contraction of space, providing a more spacious and comfortable living environment.',
    image: '/images/products/expandable-container-home.png',
    href: '/expandable-container-homes',
  },
  {
    id: 'capsule',
    name: 'Space Capsule Houses',
    description:
      'Designed with large floor-to-ceiling windows and skylights, maximizing the connection with nature and significantly increasing the property\'s social media appeal. Adhering to sustainable building standards, the factory-prefabricated modular process generates zero construction waste on-site. The temporary installation footprint requires minimal ground prep. The assembly process is super simple and efficient, protecting the local ecology and making it ideal for environmentally sensitive destinations.',
    image: '/images/products/space-capsule-house.png',
    href: '/space-capsule-house',
  },
  {
    id: 'flat-pack',
    name: 'Flat Pack Container Houses',
    description:
      'As an efficient, flexible and economical temporary building solution. thanks to its modular design, rapid construction, flexible combination, environmental protection and energy conservation, excellent thermal insulation and heat preservation performance.in construction sites, temporary offices, commercial exhibitions, and disaster relief emergencies.This shows that the quick-assembly packing box house has great practical value and market potential.',
    image: '/images/products/flat-pack-container-house.png',
    href: '/flat-pack-container-house',
  },
  {
    id: 'folding',
    name: 'Folding Houses',
    description:
      'It does not require a floor for on-site installation and only takes 3 to 5 minutes. It is easy to disassemble and assemble, and the transportation cost is relatively low. Compared with traditional color steel houses, it can save two-thirds of the parts cost. It is quick and convenient to disassemble and assemble, does not require professional construction teams, generates no construction waste, shortens disassembly and assembly time, and can be reused without damage, saving transportation and disassembly and assembly costs. It can be used for medical disaster relief, military barracks, post-earthquake resettlement, highways railways, emergency response to dilapidated houses, etc.',
    image: '/images/products/folding-house.png',
    href: '/folding-house',
  },
  {
    id: 'pools',
    name: 'Container Swimming Pools',
    description:
      'Unlike permanent in-ground structures, container pools are fully relocatable. If a resort relocates, changes its site layout, or a tenant\'s lease expires, the entire pool can be easily lifted, transported, and re-installed at a new location. Engineered with a self-supporting structural steel frame, it can be installed fully above-ground, semi-inground, or on sloped and difficult terrains where traditional pool digging is impossible or restricted by permits. Ready to design your own custom swimming pool? Contact our engineering team today to receive layout specifications and an export shipping quote',
    image: '/images/products/container-swimming-pool.png',
    href: '/container-swimming-pool',
  },
];

export const containerLayoutSizes = [
  {
    id: '10ft',
    label: '10FT',
    length: '6058mm',
    width: '2438mm',
    height: '2591mm',
    area: '≈ 14.7m²',
    layout: '1 Bedroom + 1 Bathroom',
    floorPlan: '/images/layouts/10ft-floorplan.png',
    interiorPhotos: [
      '/images/layouts/10ft-interior-1.png',
      '/images/layouts/10ft-interior-2.png',
      '/images/layouts/10ft-interior-3.png',
    ],
  },
  {
    id: '20ft',
    label: '20FT',
    length: '6058mm',
    width: '2438mm',
    height: '2896mm',
    area: '≈ 14.7m²',
    layout: '2 Bedrooms + 1 Bathroom',
    floorPlan: '/images/layouts/20ft-floorplan.png',
    interiorPhotos: [
      '/images/layouts/20ft-interior-1.png',
      '/images/layouts/20ft-interior-2.png',
      '/images/layouts/20ft-interior-3.png',
    ],
  },
  {
    id: '30ft',
    label: '30FT',
    length: '9000mm',
    width: '2438mm',
    height: '2591mm',
    area: '≈ 21.9m²',
    layout: '1 Bedroom + Living Room + 1 Bathroom',
    floorPlan: '/images/layouts/30ft-floorplan.png',
    interiorPhotos: [
      '/images/layouts/30ft-interior-1.png',
      '/images/layouts/30ft-interior-2.png',
      '/images/layouts/30ft-interior-3.png',
    ],
  },
  {
    id: '40ft',
    label: '40FT',
    length: '12192mm',
    width: '2438mm',
    height: '2591mm',
    area: '≈ 29.7m²',
    layout: '2 Bedrooms + Living Room + 1 Bathroom',
    floorPlan: '/images/layouts/40ft-floorplan.png',
    interiorPhotos: [
      '/images/layouts/40ft-interior-1.png',
      '/images/layouts/40ft-interior-2.png',
      '/images/layouts/40ft-interior-3.png',
    ],
  },
] as const;

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
  '10ft Double-Wing',
  '20ft Double-Wing',
  '20ft 720 Twin Wings',
  '30ft Double-Wing',
  '40ft Double-Wing',
];

export const expandableSpecs: SpecRow[] = [
  {
    label: 'Product Model',
    values: ['10-foot double-wing', '20-foot double-wing', '720 Twin Wings', '30-foot double-wing', '40-foot double-wing'],
  },
  {
    label: 'Dimensions (Expanded)',
    values: [
      'L2900 × W6300 × H2480 mm',
      'L5900 × W6300 × H2480 mm',
      'L5900 × W4920 × H2480 mm',
      'L9000 × W6300 × H2480 mm',
      'L11800 × W6300 × H2480 mm',
    ],
  },
  {
    label: 'Internal Dimensions',
    values: [
      'L2640 × W6140 × H2240 mm',
      'L5640 × W6140 × H2240 mm',
      'L5460 × W4760 × H2240 mm',
      'L8740 × W6140 × H2200 mm',
      'L11540 × W6140 × H2200 mm',
    ],
  },
  {
    label: 'Folded Dimensions',
    values: [
      'L2900 × W2200 × H2480 mm',
      'L5900 × W2200 × H2480 mm',
      'L5900 × W720 × H2480 mm',
      'L9000 × W2200 × H2480 mm',
      'L11800 × W2200 × H2480 mm',
    ],
  },
  {
    label: 'Total Floor Area',
    values: ['18.5 m²', '37 m² (≈398 sq ft)', '27.5 m² (≈296 sq ft)', '56 m² (≈603 sq ft)', '73 m² (≈786 sq ft)'],
  },
  {
    label: 'Power Consumption',
    values: ['12 kW', '12 kW', '12 kW', '12 kW', '12 kW'],
  },
  {
    label: 'Windows (Standard)',
    values: [
      'PVC sliding 930×930 × 4 units',
      'PVC sliding 930×930 × 6 units',
      'PVC sliding 930×930 × 4 units',
      'PVC sliding 930×930 × 7 units',
      'PVC sliding 930×930 × 8 units',
    ],
  },
  {
    label: 'Main Frame (Upper Beam)',
    values: [
      '80×100×2.75 mm square tube',
      '80×100×2.75 mm square tube',
      '80×100×2.75 mm square tube',
      '80×140×3.0 mm square tube',
      '80×140×3.0 mm square tube',
    ],
  },
  {
    label: 'External Wall Panels',
    values: [
      '65 mm EPS sandwich / 0.35 mm color steel',
      '65 mm EPS sandwich / 0.35 mm color steel',
      '65 mm EPS sandwich / 0.35 mm color steel',
      '65 mm EPS sandwich / 0.35 mm color steel',
      '65 mm EPS sandwich / 0.35 mm color steel',
    ],
  },
  {
    label: 'Flooring',
    values: [
      '18 mm MgO + 2.0 mm PVC',
      '18 mm MgO + 2.0 mm PVC',
      '18 mm MgO + 2.0 mm PVC',
      '18 mm MgO + 2.0 mm PVC',
      '18 mm MgO + 2.0 mm PVC',
    ],
  },
];

export const expandableEngineering = [
  {
    title: 'Wall Panels',
    description: 'Upgradeable to 75mm-100mm polyurethane insulation (PU board)',
  },
  {
    title: 'Floor Frame',
    description: 'Upgradable to 4.0mm SPC flooring or graphene-based materials.',
  },
  {
    title: 'Electrical / Plumbing',
    description:
      'The pre-wired circuitry can be configured to comply with US NEC, Canadian CEC, European CE, and ACC certification standards.',
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
    image: '/images/products/flatpack-advantages/freight.png',
  },
  {
    title: 'Modular Scalability',
    description: 'It can be stacked in multiple layers, maximizing the saving of land area.',
    image: '/images/products/flatpack-advantages/stacking.png',
  },
  {
    title: 'Flexible customization',
    description:
      'The modular housing structure allows for the easy replacement of exterior wall panels, offering greater flexibility for your specific application.',
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
    description:
      'Installation is extremely simple, requiring just four steps to complete, which saves on labor costs.',
  },
];

export const foldingSpecHeaders = [
  'Category',
  'Item',
  'Material / Spec',
  'Model / Size',
  'Thickness (mm)',
  'Unit',
  'Qty',
] as const;

export type FoldingSpecRow = {
  category: string;
  item: string;
  material: string;
  model: string;
  thickness: string;
  unit: string;
  qty: string;
};

export const foldingSpecs: FoldingSpecRow[] = [
  {
    category: 'Basic Features',
    item: 'External Dimensions (mm)',
    material: '',
    model: '5800×2460×2400',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Internal Dimensions (mm)',
    material: '',
    model: '5680×2320×2380',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Folded Dimensions (mm)',
    material: '',
    model: '5800×2460×320',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Total Weight (kg)',
    material: '',
    model: '800',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: 'Frame Structure',
    item: 'Top Structure',
    material: 'Q235 galvanized square tube',
    model: '30×30×2320',
    thickness: '1.2',
    unit: 'pcs',
    qty: '5',
  },
  {
    category: '',
    item: '',
    material: 'Special-shaped part',
    model: '',
    thickness: '1.2',
    unit: 'pcs',
    qty: '2',
  },
  {
    category: '',
    item: '',
    material: 'Galvanized square tube',
    model: '60×60×5800',
    thickness: '1.2',
    unit: 'pcs',
    qty: '2',
  },
  {
    category: '',
    item: '',
    material: 'Angle iron',
    model: '',
    thickness: '2',
    unit: 'pcs',
    qty: '2',
  },
  {
    category: '',
    item: '',
    material: 'Color steel corrugated sheet',
    model: '#900×831',
    thickness: 'Outer 0.4 / Inner 0.2',
    unit: 'pcs',
    qty: '12',
  },
  {
    category: '',
    item: '5.8m Side',
    material: 'L-shaped steel plate',
    model: '1150',
    thickness: '1.5',
    unit: 'pcs',
    qty: '4',
  },
  {
    category: '',
    item: '',
    material: '',
    model: '1170',
    thickness: '1.5',
    unit: 'pcs',
    qty: '4',
  },
  {
    category: '',
    item: '',
    material: 'Galvanized P-tube',
    model: '30×55×5800',
    thickness: '1.2',
    unit: 'pcs',
    qty: '8',
  },
  {
    category: '',
    item: '',
    material: 'Galvanized P-tube',
    model: '1080mm',
    thickness: '1.2',
    unit: 'pcs',
    qty: '8',
  },
  {
    category: '',
    item: '',
    material: 'Galvanized hinge',
    model: 'High-strength',
    thickness: '',
    unit: 'pcs',
    qty: '34',
  },
  {
    category: '',
    item: '',
    material: 'Wall panel',
    model: '1060mm',
    thickness: '0.27',
    unit: 'pcs',
    qty: '8',
  },
  {
    category: '',
    item: '',
    material: 'Special-shaped part',
    model: '1080mm',
    thickness: '0.4',
    unit: 'pcs',
    qty: '8',
  },
  {
    category: '',
    item: '',
    material: 'Galvanized fastening channel',
    model: '1080mm',
    thickness: '1.2',
    unit: 'pcs',
    qty: '8',
  },
  {
    category: '',
    item: '',
    material: 'D-type rubber strip',
    model: '5800',
    thickness: '',
    unit: 'pcs',
    qty: '24',
  },
  {
    category: '',
    item: '2.46m Side',
    material: 'Galvanized P-tube',
    model: '2430',
    thickness: '1.2',
    unit: 'pcs',
    qty: '4',
  },
  {
    category: '',
    item: '',
    material: '',
    model: '2310',
    thickness: '1.2',
    unit: 'pcs',
    qty: '4',
  },
  {
    category: '',
    item: '',
    material: 'Galvanized fastening channel',
    model: '2450',
    thickness: '1.3',
    unit: 'pcs',
    qty: '1',
  },
  {
    category: '',
    item: '',
    material: '',
    model: '980',
    thickness: '1.3',
    unit: 'pcs',
    qty: '1',
  },
  {
    category: '',
    item: '',
    material: 'Wall panel',
    model: '950',
    thickness: '0.27',
    unit: 'm',
    qty: '9.66',
  },
  {
    category: '',
    item: '',
    material: 'Galvanized angle',
    model: '50#',
    thickness: '1.3',
    unit: 'm',
    qty: '20.41',
  },
  {
    category: '',
    item: '',
    material: 'Window',
    model: '925×930',
    thickness: '',
    unit: 'pcs',
    qty: '2',
  },
  {
    category: '',
    item: '',
    material: 'Door',
    model: '970×1970',
    thickness: 'Security door',
    unit: 'pcs',
    qty: '1',
  },
  {
    category: '',
    item: '',
    material: 'Rubber strip',
    model: 'Dust-proof seal',
    thickness: '',
    unit: 'm',
    qty: '21.32',
  },
  {
    category: '',
    item: 'Bottom Structure',
    material: 'Custom galvanized square tube',
    model: '60×120×5.8m',
    thickness: '1.5',
    unit: 'pcs',
    qty: '2',
  },
  {
    category: '',
    item: '',
    material: '',
    model: '60×60×2320',
    thickness: '1.5',
    unit: 'pcs',
    qty: '2',
  },
  {
    category: '',
    item: '',
    material: 'Hinge',
    model: 'High-strength',
    thickness: '',
    unit: 'pcs',
    qty: '4',
  },
  {
    category: '',
    item: '',
    material: 'Q235B galvanized square tube',
    model: '40×40×2320',
    thickness: '1.2',
    unit: 'pcs',
    qty: '9',
  },
  {
    category: '',
    item: '',
    material: 'Floor board',
    model: '1133×2338',
    thickness: '15',
    unit: 'pcs',
    qty: '5',
  },
  {
    category: 'Roof',
    item: 'Full-frame coating',
    material: 'Electrostatic powder / matte white',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: 'Wall Panels',
    item: '5.8m Side',
    material: '50mm sandwich panel 0.20mm + fire-retardant EPS (8kg) + 0.20mm',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: '2.46m Side',
    material: '50mm sandwich panel 0.20mm + fire-retardant EPS (8kg) + 0.20mm',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: 'Flooring',
    item: 'MgO floor (15mm)',
    material: '',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: 'Electrical System',
    item: 'Wiring & fittings',
    material:
      'Moisture-proof installation to code. Indoor: 4mm² copper inlet, 1×20A breaker, 1×3-hole AC outlet, 2.5mm² outlet wiring, 1×5-hole switched outlet, 1×5-hole outlet, 1×LED light.',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: 'Security Door',
    item: 'Premium security door (warm white)',
    material: '970×1970 mm',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: 'Windows',
    item: 'Single-glazed thickened UPVC sliding window (white)',
    material: '925×930',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: 'Performance',
    item: 'Roof load',
    material: '1.0 kN/m²',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Floor load',
    material: '4.2 kN/m²',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Side wall pressure',
    material: '0.5 kN/m²',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Fire rating',
    material: 'Class A',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Seismic rating',
    material: 'Grade 8',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Wind resistance',
    material: 'Grade 10',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
  },
  {
    category: '',
    item: 'Service life',
    material: '10 years',
    model: '',
    thickness: '',
    unit: '',
    qty: '',
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

export const poolConfigHeaders = ['Category', 'Component', 'Specification'] as const;

export const poolConfigRows: { category: string; component: string; specification: string }[] = [
  {
    category: 'Structure',
    component: 'Main Profiles',
    specification: 'Main beam 80*100*2.75mm galvanized square tube',
  },
  {
    category: '',
    component: '',
    specification: 'Side beam 50*70*2.75mm galvanized square tube',
  },
  {
    category: '',
    component: '',
    specification: 'Secondary beam 40*60*2.0mm galvanized square tube',
  },
  {
    category: '',
    component: '',
    specification: 'Column 80*100*2.75mm galvanized square tube',
  },
  {
    category: '',
    component: 'Hoisting',
    specification: 'D-ring welded connection',
  },
  {
    category: 'Inner Liner',
    component: 'Fiberglass',
    specification: 'Fiberglass thickness 8mm',
  },
  {
    category: '',
    component: '',
    specification: 'Resin gel coat + fiberglass cloth',
  },
  {
    category: '',
    component: '',
    specification: '12+12 thick tempered glass (optional)',
  },
  {
    category: 'Exterior Decoration',
    component: 'Exterior Finish',
    specification: '2nd generation co-extruded Great Wall panel 219*26',
  },
  {
    category: '',
    component: 'Insulation Layer',
    specification: 'Flame-retardant thermal insulation rubber foam / NBR',
  },
  {
    category: '',
    component: 'Corner Guards',
    specification: 'Rubber corner guard / WPC (Wood-Plastic Composite) corner guard',
  },
  {
    category: 'Water Circulation System',
    component: 'Water Pump',
    specification: 'CDLF20-10/WQ20-15-2.2',
  },
  {
    category: '',
    component: 'Skimmer',
    specification: 'B500Slim',
  },
  {
    category: '',
    component: 'Pipe Fittings',
    specification: 'PPR/PVC',
  },
  {
    category: '',
    component: 'Salt Chlorinator',
    specification: 'QSS-60 (≤40-120m³)',
  },
  {
    category: 'Other',
    component: 'Lighting',
    specification: 'Pool wall light / IP68 (optional)',
  },
  {
    category: '',
    component: 'Adhesive',
    specification: 'Polyurethane epoxy structural adhesive',
  },
  {
    category: '',
    component: 'Optional',
    specification: 'Great Wall panels, carved metal panels, heaters, window openings.',
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
