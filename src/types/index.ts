import { z } from 'zod';

// Product Line Schema - based on Thindown product categories
export const ProductLineSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  features: z.array(z.string()),
  applications: z.array(z.string()),
  specifications: z.object({
    weight: z.string(),
    thickness: z.string(),
    fillPower: z.string().optional(),
    temperature: z.string().optional(),
    certifications: z.array(z.string()),
  }),
  image: z.string(),
  isRecycled: z.boolean(),
  isStretch: z.boolean().optional(),
});

export type ProductLine = z.infer<typeof ProductLineSchema>;

// Application Category Schema - for target markets
export const ApplicationCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  icon: z.string(),
  benefits: z.array(z.string()),
  useCases: z.array(z.string()),
  image: z.string(),
});

export type ApplicationCategory = z.infer<typeof ApplicationCategorySchema>;

// Contact Form Schema
export const ContactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  interestedArea: z.enum([
    'outdoor-apparel',
    'fashion-lifestyle',
    'footwear',
    'accessories',
    'military',
    'home-textiles',
    'other'
  ]),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy'
  }),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

// Sample Request Schema
export const SampleRequestSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().optional(),
  applicationCategory: z.enum([
    'outdoor-apparel',
    'fashion-lifestyle',
    'footwear',
    'accessories',
    'military',
    'home-textiles',
    'other'
  ]),
  productLines: z.array(z.string()).min(1, 'Please select at least one product line'),
  projectDescription: z.string().min(20, 'Please provide more details about your project'),
  timeline: z.enum(['immediate', '1-3-months', '3-6-months', '6-12-months', 'over-1-year']),
  volume: z.enum(['prototype', 'small-batch', 'medium-volume', 'large-volume']),
  additionalRequirements: z.string().optional(),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy'
  }),
});

export type SampleRequest = z.infer<typeof SampleRequestSchema>;

// Military Access Request Schema
export const MilitaryAccessSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number is required for military access'),
  organization: z.string().min(2, 'Organization name is required'),
  rank: z.string().optional(),
  securityClearance: z.enum(['none', 'confidential', 'secret', 'top-secret']),
  applicationArea: z.enum([
    'protective-gear',
    'cold-weather-clothing',
    'sleeping-systems',
    'tactical-equipment',
    'other'
  ]),
  specifications: z.string().min(20, 'Please provide detailed specifications'),
  complianceRequirements: z.array(z.string()),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the privacy policy'
  }),
});

export type MilitaryAccess = z.infer<typeof MilitaryAccessSchema>;

// Navigation Item Type
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Page Meta Type
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// Feature Type
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefit: string;
}

// Certification Type
export interface Certification {
  name: string;
  description: string;
  logo: string;
  link?: string;
}

// Case Study Type
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  productUsed: string;
}

// Press Release Type
export interface PressRelease {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image?: string;
  downloadUrl?: string;
}
