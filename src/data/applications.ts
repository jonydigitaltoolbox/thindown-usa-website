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
    image: '/images/applications/outdoor-apparel.jpg'
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
    image: '/images/applications/fashion-lifestyle.jpg'
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
    image: '/images/applications/footwear.jpg'
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
    image: '/images/applications/accessories.jpg'
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
    image: '/images/applications/military.jpg'
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
    image: '/images/applications/home-textiles.jpg'
  }
];
