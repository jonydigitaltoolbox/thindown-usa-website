import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, CheckCircle, Award, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { productLines } from '@/data/products';
import { applicationCategories } from '@/data/applications';
import { thindownFeatures } from '@/data/features';

/**
 * Homepage Component
 * 
 * Design decisions:
 * - Hero section with video background and clear value proposition
 * - Feature highlights with icons and benefits
 * - Product showcase with applications
 * - USA manufacturing emphasis throughout
 * - Clear CTAs for sample requests and military access
 */
export default function HomePage() {
  // Select key features for homepage display
  const keyFeatures = thindownFeatures.slice(0, 6);
  
  // Select key applications for homepage
  const keyApplications = applicationCategories.slice(0, 3);
  
  // Select key products for showcase
  const featuredProducts = productLines.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-cyan-50 via-white to-accent-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Made in USA • New York Manufacturing
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 text-balance">
                  The World's First
                  <span className="bg-gradient-to-r from-accent-purple-600 to-accent-cyan-600 bg-clip-text text-transparent block">Real Down Fabric</span>
                </h1>
                
                <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                  Revolutionary insulation technology that delivers superior warmth with minimal thickness. 
                  Now manufactured in our state-of-the-art New York facility, supporting American innovation 
                  and craftsmanship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/request-sample">
                    Request Sample
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <Link href="/technology">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Technology Video
                  </Link>
                </Button>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
                <div>
                  <div className="text-3xl font-display font-bold text-primary-600">2x</div>
                  <div className="text-sm text-neutral-600">Warmer than loose down</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary-600">4x</div>
                  <div className="text-sm text-neutral-600">Warmer than polyester</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary-600">100%</div>
                  <div className="text-sm text-neutral-600">Made in USA</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-strong">
                <Image
                  src="/images/hero/thindown-hero.svg"
                  alt="THINDOWN fabric close-up showing revolutionary down technology"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent" />
              </div>
              
              {/* Floating feature cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-medium p-4 max-w-48">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="font-semibold text-sm">RDS Certified</span>
                </div>
                <p className="text-xs text-neutral-600">Responsibly sourced down with ethical standards</p>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-medium p-4 max-w-48">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-secondary-400" />
                  <span className="font-semibold text-sm">Patented Technology</span>
                </div>
                <p className="text-xs text-neutral-600">Globally patented NIPI R40 technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Why THINDOWN® is Revolutionary
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Independent laboratory tests prove our fabric delivers superior performance 
              while maintaining the natural benefits of real down insulation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={feature.id} className="card-hover" variant="elevated">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 text-primary-600">
                        {/* Icon would be rendered here based on feature.icon */}
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-neutral-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <p className="text-sm text-primary-600 font-medium">{feature.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Engineered for Every Application
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From extreme outdoor conditions to luxury fashion, THINDOWN® adapts to 
              meet the specific needs of diverse industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {keyApplications.map((application) => (
              <Card key={application.id} className="card-hover" variant="elevated">
                <div className="aspect-photo relative">
                  <Image
                    src={application.image}
                    alt={`${application.name} applications`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {application.name}
                    </h3>
                    <p className="text-sm opacity-90">{application.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/applications">
                View All Applications
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* USA Manufacturing Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 via-accent-purple-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Globe className="w-8 h-8 text-secondary-400" />
                <span className="text-secondary-400 font-semibold text-lg">Made in USA</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-display font-bold">
                Now Manufacturing in New York
              </h2>
              
              <p className="text-xl text-primary-100 leading-relaxed">
                We're proud to bring THINDOWN® production to the United States with our 
                new state-of-the-art manufacturing facility in Syracuse, New York. This 
                investment supports American workers while ensuring the highest quality 
                standards and faster delivery times.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span>Berry Amendment compliant for military applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span>Reduced lead times for North American customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span>Supporting American manufacturing jobs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span>Same patented Italian technology, American craftsmanship</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/about">Learn About Our Facility</Link>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="/military-access" className="text-white hover:text-secondary-400">
                    Military Applications
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-photo relative rounded-xl overflow-hidden">
                <Image
                  src="/images/facility/ny-manufacturing.svg"
                  alt="THINDOWN USA manufacturing facility in New York"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-purple-600 to-accent-cyan-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Ready to Experience THINDOWN®?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join leading brands worldwide who trust THINDOWN® for their most demanding applications. 
            Request a sample today and feel the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/request-sample">
                Request Sample Kit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/contact" className="border-white text-white hover:bg-white hover:text-accent-purple-600">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
