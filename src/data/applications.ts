import { ApplicationCategory } from '@/types';

export const applicationCategories: ApplicationCategory[] = [
  {
    id: 'outdoor-apparel',
    name: 'Outdoor Apparel',
    description: 'High-performance insulation for extreme weather conditions and outdoor adventures.',
    icon: 'Mountain',
    benefits: [
      'Superior warmth-to-weight ratio',
      'Excellent breathability for active use',
      'Packable and lightweight design',
      'Moisture management in varying conditions',
      'Durability for rugged outdoor use'
    ],
    useCases: [
      'Down jackets and parkas',
      'Insulated vests',
      'Sleeping bags and systems',
      'Base layer insulation',
      'Extreme weather gear'
    ],
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&q=80'
  },
  {
    id: 'fashion-lifestyle',
    name: 'Fashion & Lifestyle',
    description: 'Elegant insulation solutions that combine style with performance for urban and lifestyle applications.',
    icon: 'Shirt',
    benefits: [
      'Thin profile maintains garment silhouette',
      'No quilting lines - clean aesthetic',
      'Luxury feel and comfort',
      'Easy care and maintenance',
      'Versatile styling options'
    ],
    useCases: [
      'Designer outerwear',
      'Casual jackets and blazers',
      'Fashion-forward parkas',
      'Urban lifestyle wear',
      'Luxury accessories'
    ],
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80'
  },
  {
    id: 'footwear',
    name: 'Footwear',
    description: 'Revolutionary insulation technology for boots and cold-weather footwear applications.',
    icon: 'Footprints',
    benefits: [
      'Conformable to complex shoe shapes',
      'Maintains insulation under compression',
      'Moisture-wicking properties',
      'Thin profile preserves fit',
      'Long-lasting performance'
    ],
    useCases: [
      'Winter boots and snow boots',
      'Hiking and outdoor footwear',
      'Work boots for cold environments',
      'Fashion boots with insulation',
      'Specialty footwear applications'
    ],
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&q=80'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Innovative insulation for gloves, hats, and other cold-weather accessories.',
    icon: 'Hand',
    benefits: [
      'Flexible and conformable',
      'Maintains dexterity and movement',
      'Lightweight and packable',
      'Quick-drying properties',
      'Enhanced tactile sensitivity'
    ],
    useCases: [
      'Insulated gloves and mittens',
      'Winter hats and beanies',
      'Neck gaiters and scarves',
      'Hand and foot warmers',
      'Specialty protective gear'
    ],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80'
  },
  {
    id: 'military',
    name: 'Military & Tactical',
    description: 'Mission-critical insulation engineered to meet stringent military specifications and performance requirements.',
    icon: 'Shield',
    benefits: [
      'Berry Amendment compliant manufacturing',
      'Extreme temperature performance',
      'Enhanced durability and reliability',
      'Flame resistant options available',
      'NIR signature management'
    ],
    useCases: [
      'Military uniform systems',
      'Cold weather protection gear',
      'Tactical outerwear',
      'Sleeping systems and shelters',
      'Specialized protective equipment'
    ],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80'
  },
  {
    id: 'home-textiles',
    name: 'Home Textiles',
    description: 'Luxury comfort and performance for residential bedding and home textile applications.',
    icon: 'Home',
    benefits: [
      'Hypoallergenic and dust mite resistant',
      'Superior comfort and softness',
      'Temperature regulation',
      'Easy care and maintenance',
      'Long-lasting performance'
    ],
    useCases: [
      'Premium comforters and duvets',
      'Luxury pillows and cushions',
      'Mattress toppers',
      'Throw blankets',
      'Home decor applications'
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80'
  }
];
