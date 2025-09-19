import { ProductLine } from '@/types';

export const productLines: ProductLine[] = [
  {
    id: 'thindown-classic',
    name: 'THINDOWN® Classic',
    description: 'The world\'s first real down fabric. Available in goose or duck down.',
    features: [
      'Lightweight like down, but thinner',
      'No cold spots - uniform thermal distribution',
      'No seepage - compact structure prevents down leakage',
      'Machine washable and quick-drying',
      'RDS Certified - Responsible Down Standard',
      'Made in USA at our New York facility'
    ],
    applications: [
      'Premium outdoor jackets',
      'Luxury fashion outerwear',
      'High-performance sportswear',
      'Professional uniforms'
    ],
    specifications: {
      weight: '80-200 g/m²',
      thickness: '2-8 mm',
      fillPower: '650-850 cuin',
      temperature: 'Down to -20°F (-29°C)',
      certifications: ['RDS', 'OEKO-TEX Standard 100', 'CPSIA']
    },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    isRecycled: false
  },
  {
    id: 'thindown-recycled',
    name: 'THINDOWN® Recycled',
    description: '100% post-consumer recycled down fabric for sustainable applications.',
    features: [
      'Made from 100% recycled down',
      'Same performance as virgin down',
      'Reduced environmental impact',
      'GRS Certified - Global Recycled Standard',
      'Circular economy contribution',
      'Manufactured sustainably in New York'
    ],
    applications: [
      'Eco-conscious fashion brands',
      'Sustainable outdoor gear',
      'Corporate responsibility programs',
      'Green building textiles'
    ],
    specifications: {
      weight: '80-180 g/m²',
      thickness: '2-7 mm',
      fillPower: '600-750 cuin',
      temperature: 'Down to -10°F (-23°C)',
      certifications: ['GRS', 'OEKO-TEX Standard 100', 'CPSIA']
    },
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    isRecycled: true
  },
  {
    id: 'thindown-active',
    name: 'THINDOWN® Active',
    description: 'All the benefits of real down combined with polyester performance.',
    features: [
      'Hybrid down-synthetic construction',
      'Enhanced moisture management',
      'Improved durability',
      'Faster drying time',
      'Maintains loft when wet',
      'Athletic performance optimization'
    ],
    applications: [
      'Active sportswear',
      'Athletic base layers',
      'Performance outerwear',
      'Military applications'
    ],
    specifications: {
      weight: '100-220 g/m²',
      thickness: '3-9 mm',
      fillPower: '700-800 cuin equivalent',
      temperature: 'Down to -15°F (-26°C)',
      certifications: ['OEKO-TEX Standard 100', 'CPSIA']
    },
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80',
    isRecycled: false
  },
  {
    id: 'thindown-flex',
    name: 'THINDOWN® Flex',
    description: 'The world\'s first stretch down fabric for maximum mobility.',
    features: [
      'Four-way stretch capability',
      'Maintains insulation during movement',
      'Enhanced comfort and fit',
      'Durable stretch recovery',
      'Seamless integration with stretch fabrics',
      'Patented stretch technology'
    ],
    applications: [
      'Athletic wear',
      'Ski and snowboard gear',
      'Yoga and fitness apparel',
      'Tactical clothing'
    ],
    specifications: {
      weight: '120-200 g/m²',
      thickness: '3-7 mm',
      fillPower: '650-750 cuin',
      temperature: 'Down to -5°F (-21°C)',
      certifications: ['OEKO-TEX Standard 100', 'CPSIA']
    },
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80',
    isRecycled: false,
    isStretch: true
  },
  {
    id: 'thindown-military',
    name: 'THINDOWN® Military',
    description: 'Specialized down fabric engineered for military and tactical applications.',
    features: [
      'Berry Amendment compliant',
      'Flame resistant treatment available',
      'NIR compliant options',
      'Enhanced durability',
      'Extreme temperature performance',
      'Made in USA - New York facility'
    ],
    applications: [
      'Military uniforms',
      'Tactical gear',
      'Cold weather systems',
      'Protective equipment'
    ],
    specifications: {
      weight: '150-300 g/m²',
      thickness: '4-12 mm',
      fillPower: '700-850 cuin',
      temperature: 'Down to -40°F (-40°C)',
      certifications: ['Berry Amendment', 'MIL-SPEC', 'CPSIA']
    },
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    isRecycled: false
  },
  {
    id: 'thindown-home',
    name: 'THINDOWN® Home',
    description: 'Premium down fabric designed for home textile applications.',
    features: [
      'Luxury comfort and softness',
      'Hypoallergenic treatment',
      'Dust mite resistant',
      'Easy care and maintenance',
      'Long-lasting performance',
      'Residential-grade safety standards'
    ],
    applications: [
      'Premium bedding',
      'Luxury pillows',
      'Comforters and duvets',
      'Home decor textiles'
    ],
    specifications: {
      weight: '60-150 g/m²',
      thickness: '2-6 mm',
      fillPower: '600-800 cuin',
      temperature: 'Comfort range optimization',
      certifications: ['OEKO-TEX Standard 100', 'CPSIA', 'CertiPUR-US']
    },
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    isRecycled: false
  }
];
