import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Award, Factory, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export const metadata = {
  title: 'About Us - THINDOWN USA Manufacturing Excellence',
  description: 'Learn about THINDOWN USA\'s journey from Italian innovation to American manufacturing excellence. Our New York facility combines tradition with cutting-edge technology.',
};

/**
 * About Page Component
 * 
 * Design decisions:
 * - Company story with emphasis on USA manufacturing
 * - Team and facility showcase
 * - Values and mission statement
 * - Timeline of company milestones
 */
export default function AboutPage() {
  const milestones = [
    {
      year: '2015',
      title: 'THINDOWN® Technology Born',
      description: 'NIPI develops the world\'s first real down fabric technology in Italy.'
    },
    {
      year: '2018',
      title: 'Global Patent Granted',
      description: 'Revolutionary NIPI R40 technology receives international patent protection.'
    },
    {
      year: '2020',
      title: 'International Expansion',
      description: 'THINDOWN® technology adopted by leading global brands across industries.'
    },
    {
      year: '2023',
      title: 'USA Manufacturing Decision',
      description: 'Strategic decision to establish manufacturing facility in the United States.'
    },
    {
      year: '2024',
      title: 'New York Facility Opens',
      description: 'State-of-the-art manufacturing facility begins production in Syracuse, NY.'
    },
    {
      year: '2024',
      title: 'Berry Amendment Compliance',
      description: 'Full compliance achieved for US military and defense applications.'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Innovation Excellence',
      description: 'Continuously pushing the boundaries of textile technology while maintaining the highest quality standards.'
    },
    {
      icon: Globe,
      title: 'Sustainability Focus',
      description: 'Committed to environmental responsibility through sustainable materials and manufacturing processes.'
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'Working closely with brands to develop customized solutions that exceed performance expectations.'
    },
    {
      icon: Factory,
      title: 'Manufacturing Pride',
      description: 'Supporting American manufacturing with advanced technology and skilled craftsmanship.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Global Brands Served' },
    { number: '50+', label: 'Countries Worldwide' },
    { number: '15+', label: 'Years of Innovation' },
    { number: '100%', label: 'Made in USA' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 text-balance">
                From Italian Innovation to
                <span className="gradient-text block">American Excellence</span>
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                The story of THINDOWN® is one of breakthrough innovation, global success, 
                and a commitment to bringing advanced manufacturing to the United States. 
                Discover how we're revolutionizing insulation technology right here in New York.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-display font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900">
                Our Story
              </h2>
              
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>
                  THINDOWN® began with a simple yet revolutionary idea: what if we could 
                  transform loose down into a continuous fabric while preserving all its 
                  natural benefits? This vision, born from Italian textile innovation, 
                  has evolved into the world's most advanced down fabric technology.
                </p>
                
                <p>
                  After years of success serving global brands from our Italian facilities, 
                  we recognized the growing demand for American-made solutions, particularly 
                  in defense and high-performance applications. This led to our strategic 
                  decision to establish manufacturing operations in the United States.
                </p>
                
                <p>
                  Today, our state-of-the-art facility in Syracuse, New York, represents 
                  the perfect fusion of Italian innovation and American manufacturing 
                  excellence. We're proud to support local communities while delivering 
                  the same breakthrough technology that has revolutionized insulation worldwide.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-photo relative rounded-xl overflow-hidden shadow-strong">
                <Image
                  src="/images/about/company-story.jpg"
                  alt="THINDOWN USA facility and team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USA Facility */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Our New York Manufacturing Facility
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Located in Syracuse, New York, our 50,000 square foot facility combines 
              advanced automation with skilled craftsmanship to produce the world's 
              finest down fabric technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                  Advanced Manufacturing
                </h3>
                <p className="text-neutral-600 mb-4">
                  State-of-the-art equipment and processes ensure consistent quality 
                  and efficiency in every meter of THINDOWN® fabric produced.
                </p>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• Automated production lines</li>
                  <li>• Quality control systems</li>
                  <li>• Environmental monitoring</li>
                  <li>• Continuous improvement</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                  Skilled Workforce
                </h3>
                <p className="text-neutral-600 mb-4">
                  Our team of experienced professionals brings together textile 
                  expertise with American manufacturing excellence.
                </p>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• 75+ skilled employees</li>
                  <li>• Continuous training programs</li>
                  <li>• Safety-first culture</li>
                  <li>• Local community investment</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                  Certifications
                </h3>
                <p className="text-neutral-600 mb-4">
                  Full compliance with all relevant standards and regulations 
                  for defense, commercial, and consumer applications.
                </p>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• ISO 9001:2015 certified</li>
                  <li>• Berry Amendment compliant</li>
                  <li>• OEKO-TEX Standard 100</li>
                  <li>• Environmental standards</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Schedule Facility Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From breakthrough innovation to global success and American manufacturing, 
              explore the key milestones that have shaped THINDOWN®'s evolution.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'order-2 text-left pl-8'}`}>
                    <Card variant="elevated" className="inline-block max-w-md">
                      <CardContent className="p-6">
                        <div className="text-2xl font-display font-bold text-primary-600 mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-neutral-600 text-sm">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-md"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              The principles that guide our innovation, manufacturing, and 
              relationships with customers and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-primary-100">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Partner with THINDOWN® USA
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Experience the difference of American-made THINDOWN® technology. 
            Let's work together to bring your innovative products to market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/request-sample">
                Request Sample Kit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/contact" className="border-white text-white hover:bg-white hover:text-primary-600">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
