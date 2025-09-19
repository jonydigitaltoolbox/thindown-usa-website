import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

// Footer link structure - explicit data shape
interface FooterSection {
  title: string;
  links: Array<{
    name: string;
    href: string;
    external?: boolean;
  }>;
}

const footerSections: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { name: 'Technology', href: '/technology' },
      { name: 'Product Lines', href: '/technology#products' },
      { name: 'Technical Specs', href: '/technical-specs' },
      { name: 'Applications', href: '/applications' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Press Kit', href: '/press-kit' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Request Sample', href: '/request-sample' },
      { name: 'Military Access', href: '/military-access' },
      { name: 'Technical Support', href: '/contact?type=technical' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Compliance', href: '/compliance' }
    ]
  }
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/thindown-usa', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/thindown_usa', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/thindown.usa', icon: Facebook }
];

/**
 * Footer Component
 * 
 * Design decisions:
 * - Comprehensive footer with organized link sections
 * - Contact information prominently displayed
 * - Social media integration
 * - USA manufacturing emphasis
 * 
 * Usage: <Footer /> - Used in main layout
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl">THINDOWN</span>
                <span className="block text-primary-400 text-sm font-medium">USA</span>
              </div>
            </div>
            
            <p className="text-neutral-300 mb-6 max-w-md">
              The world's first real down fabric. Revolutionary insulation technology 
              manufactured in New York, delivering superior warmth with minimal thickness.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  Manufacturing Facility<br />
                  Syracuse, New York 13204
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">+1 (315) 555-THIN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">info@thindown.us</span>
              </div>
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      {...(link.external && { 
                        target: '_blank', 
                        rel: 'noopener noreferrer' 
                      })}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-neutral-400 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-neutral-400 text-sm">
                © {currentYear} THINDOWN USA. All rights reserved.
              </p>
              <p className="text-neutral-500 text-xs mt-1">
                Proudly manufactured in New York, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
