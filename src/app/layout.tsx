import type { Metadata } from 'next';
import { Inter, Orbitron, Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

// Font configuration - follows coding rule for explicit configuration
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

// Metadata configuration - explicit SEO setup
export const metadata: Metadata = {
  title: {
    default: 'THINDOWN USA - Revolutionary Down Fabric Technology',
    template: '%s | THINDOWN USA'
  },
  description: 'The world\'s first real down fabric. Revolutionary insulation technology manufactured in New York, delivering superior warmth with minimal thickness for outdoor apparel, fashion, military, and home textiles.',
  keywords: [
    'down fabric',
    'insulation technology',
    'outdoor apparel',
    'fashion insulation',
    'military textiles',
    'sustainable down',
    'made in USA',
    'New York manufacturing',
    'thermal insulation',
    'lightweight insulation'
  ],
  authors: [{ name: 'THINDOWN USA' }],
  creator: 'THINDOWN USA',
  publisher: 'THINDOWN USA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thindown.us'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thindown.us',
    title: 'THINDOWN USA - Revolutionary Down Fabric Technology',
    description: 'The world\'s first real down fabric manufactured in New York. Superior warmth with minimal thickness.',
    siteName: 'THINDOWN USA',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'THINDOWN USA - Revolutionary Down Fabric Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THINDOWN USA - Revolutionary Down Fabric Technology',
    description: 'The world\'s first real down fabric manufactured in New York.',
    images: ['/images/twitter-image.jpg'],
    creator: '@thindown_usa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

/**
 * Root Layout Component
 * 
 * Design decisions:
 * - Global font configuration with CSS variables
 * - Comprehensive SEO metadata setup
 * - Consistent layout structure with Header/Footer
 * - Performance optimizations with font display swap
 * 
 * Usage: Wraps all pages in the application
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
