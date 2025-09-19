import { Feature, Certification } from '@/types';

export const thindownFeatures: Feature[] = [
  {
    id: 'lightweight',
    title: 'Lightweight',
    description: 'Lighter than traditional down insulation while maintaining superior thermal performance.',
    icon: 'Feather',
    benefit: 'Reduces garment weight by up to 40% compared to loose down'
  },
  {
    id: 'made-in-usa',
    title: 'Made in USA',
    description: 'Manufactured at our state-of-the-art facility in New York with American craftsmanship.',
    icon: 'Flag',
    benefit: 'Supports American manufacturing and ensures quality control'
  },
  {
    id: 'no-cold-spots',
    title: 'No Cold Spots',
    description: 'Uniform thermal distribution eliminates cold spots for consistent warmth.',
    icon: 'Thermometer',
    benefit: 'Superior thermal performance starting from the thinnest profiles'
  },
  {
    id: 'certified',
    title: 'Certified',
    description: 'RDS, GRS, and OEKO-TEX certified for responsible sourcing and safety.',
    icon: 'Award',
    benefit: 'Guaranteed ethical sourcing and safety standards'
  },
  {
    id: 'warm',
    title: 'Superior Warmth',
    description: 'Independent lab tests prove 2x warmer than loose down, 4x warmer than polyester.',
    icon: 'Sun',
    benefit: 'Maximum thermal efficiency in minimal thickness'
  },
  {
    id: 'breathable',
    title: 'Breathable',
    description: 'Made with real down for superior breathability compared to synthetic alternatives.',
    icon: 'Wind',
    benefit: 'Prevents overheating and maintains comfort during activity'
  },
  {
    id: 'no-seepage',
    title: 'No Seepage',
    description: 'Compact fabric structure prevents annoying down leakage.',
    icon: 'Shield',
    benefit: 'Maintains insulation integrity and appearance over time'
  },
  {
    id: 'sterilized',
    title: 'Sterilized',
    description: 'Fabric is sterilized during production for hygienic safety.',
    icon: 'Zap',
    benefit: 'Ensures product safety and cleanliness'
  },
  {
    id: 'sustainable',
    title: 'Natural & Sustainable',
    description: 'Made with real down - natural and environmentally friendly alternative to synthetics.',
    icon: 'Leaf',
    benefit: 'Reduces environmental impact compared to petroleum-based insulation'
  },
  {
    id: 'thermoregulator',
    title: 'Thermoregulator',
    description: 'Active insulation that regulates and maintains natural body temperature.',
    icon: 'Activity',
    benefit: 'Adapts to changing conditions for optimal comfort'
  },
  {
    id: 'packable',
    title: 'Thin & Packable',
    description: 'Compressible for minimum storage space while maintaining loft recovery.',
    icon: 'Package',
    benefit: 'Easy to pack and transport without compromising performance'
  },
  {
    id: 'easy-care',
    title: 'Easy Care',
    description: 'Machine washable, dry cleanable, and quick-drying like regular fabric.',
    icon: 'RotateCcw',
    benefit: 'Simple maintenance extends product life and convenience'
  }
];

export const certifications: Certification[] = [
  {
    name: 'RDS - Responsible Down Standard',
    description: 'Ensures down is sourced from farms certified to animal welfare requirements.',
    logo: '/images/certifications/rds-logo.png',
    link: 'https://responsibledown.org/'
  },
  {
    name: 'GRS - Global Recycled Standard',
    description: 'Verifies recycled content and responsible supply chain practices.',
    logo: '/images/certifications/grs-logo.png',
    link: 'https://www.globalrecycledstandard.org/'
  },
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Tests for harmful substances and ensures human-ecological safety.',
    logo: '/images/certifications/oeko-tex-logo.png',
    link: 'https://www.oeko-tex.com/'
  },
  {
    name: 'Berry Amendment Compliant',
    description: 'Meets US military requirements for domestic sourcing and manufacturing.',
    logo: '/images/certifications/berry-amendment-logo.png'
  },
  {
    name: 'CPSIA Compliant',
    description: 'Meets Consumer Product Safety Improvement Act requirements.',
    logo: '/images/certifications/cpsia-logo.png'
  },
  {
    name: 'Made in USA',
    description: 'Manufactured in our New York facility supporting American workers.',
    logo: '/images/certifications/made-in-usa-logo.png'
  }
];
