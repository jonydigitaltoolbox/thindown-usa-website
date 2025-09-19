import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Recycle, Award, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { certifications } from '@/data/features';

export const metadata = {
  title: 'Sustainability - THINDOWN® Environmental Commitment',
  description: 'Discover THINDOWN® USA\'s commitment to environmental sustainability through responsible sourcing, recycled materials, and eco-friendly manufacturing.',
};

/**
 * Sustainability Page Component
 * 
 * Design decisions:
 * - Environmental focus with green color scheme
 * - Certifications and standards showcase
 * - Circular economy messaging
 * - USA manufacturing environmental benefits
 */
export default function SustainabilityPage() {
  const sustainabilityFeatures = [
    {
      icon: Leaf,
      title: 'Natural Materials',
      description: 'THINDOWN® is made from real down, a naturally occurring, biodegradable material that outperforms synthetic alternatives.',
      benefit: 'Reduces reliance on petroleum-based synthetic materials'
    },
    {
      icon: Recycle,
      title: 'Recycled Content',
      description: 'Our recycled product lines use 100% post-consumer recycled down, giving new life to materials that would otherwise go to waste.',
      benefit: 'Diverts waste from landfills and reduces virgin material demand'
    },
    {
      icon: Award,
      title: 'Ethical Sourcing',
      description: 'All virgin down is RDS certified, ensuring responsible sourcing practices and animal welfare standards.',
      benefit: 'Supports ethical treatment of animals and transparent supply chains'
    },
    {
      icon: Globe,
      title: 'Local Manufacturing',
      description: 'Our New York facility reduces transportation emissions and supports local communities and workers.',
      benefit: 'Lower carbon footprint and stronger local economy'
    }
  ];

  const environmentalStats = [
    { metric: '75%', description: 'Reduction in carbon footprint vs synthetic insulation' },
    { metric: '100%', description: 'Renewable energy at our New York facility' },
    { metric: '90%', description: 'Waste reduction through recycling programs' },
    { metric: '50%', description: 'Water usage reduction vs traditional manufacturing' }
  ];

  const circularEconomySteps = [
    {
      step: '1',
      title: 'Responsible Sourcing',
      description: 'Virgin down sourced as by-product of food industry with RDS certification'
    },
    {
      step: '2',
      title: 'Efficient Manufacturing',
      description: 'Advanced production processes minimize waste and energy consumption'
    },
    {
      step: '3',
      title: 'Long Product Life',
      description: 'Durable THINDOWN® fabric maintains performance for extended periods'
    },
    {
      step: '4',
      title: 'End-of-Life Recovery',
      description: 'Down can be recovered and recycled into new THINDOWN® products'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-green/10 via-white to-primary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-green/10 text-accent-green text-sm font-medium">
                  <Leaf className="w-4 h-4 mr-2" />
                  Environmental Leadership
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 text-balance">
                  Sustainable by
                  <span className="text-accent-green block">Nature & Design</span>
                </h1>
                
                <p className="text-xl text-neutral-600 leading-relaxed">
                  THINDOWN® represents a fundamental shift toward sustainable insulation technology. 
                  From responsible sourcing to circular economy principles, we're committed to 
                  environmental stewardship at every step of our manufacturing process.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">RDS & GRS certified sustainable materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">100% renewable energy manufacturing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Circular economy design principles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Local manufacturing reduces transportation impact</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="bg-accent-green hover:bg-green-700" asChild>
                  <Link href="/request-sample">
                    Request Sustainable Samples
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="outline" size="lg" asChild>
                  <Link href="#certifications">View Certifications</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-accent-green/10 to-primary-100 flex items-center justify-center">
                <div className="text-center text-accent-green">
                  <Leaf className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Sustainability Image</p>
                  <p className="text-sm opacity-75">Placeholder</p>
                </div>
              </div>
              
              {/* Floating sustainability badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-medium p-4 max-w-48">
                <div className="flex items-center space-x-2 mb-2">
                  <Recycle className="w-5 h-5 text-accent-green" />
                  <span className="font-semibold text-sm">100% Recyclable</span>
                </div>
                <p className="text-xs text-neutral-600">Circular economy certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Environmental Impact
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Measurable environmental benefits through innovative technology and 
              responsible manufacturing practices at our New York facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {environmentalStats.map((stat, index) => (
              <Card key={index} variant="elevated" className="text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-display font-bold text-accent-green mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-neutral-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sustainabilityFeatures.map((feature, index) => (
              <Card key={index} className="card-hover" variant="elevated">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent-green/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent-green" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-neutral-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <p className="text-sm text-accent-green font-medium">{feature.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Economy */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Circular Economy Approach
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              THINDOWN® is designed with circular economy principles in mind, 
              maximizing resource efficiency and minimizing waste throughout the product lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {circularEconomySteps.map((step, index) => (
              <div key={index} className="relative">
                <Card variant="elevated" className="text-center">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-neutral-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < circularEconomySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-accent-green">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Sustainability Certifications
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our commitment to sustainability is verified through rigorous third-party 
              certifications and continuous monitoring of our environmental impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.slice(0, 3).map((cert, index) => (
              <Card key={index} variant="outlined" className="card-hover">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral-900 mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{cert.description}</p>
                  {cert.link && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* USA Manufacturing Benefits */}
      <section className="section-padding bg-accent-green text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-display font-bold">
                USA Manufacturing: Environmental & Economic Benefits
              </h2>
              
              <p className="text-xl text-green-100 leading-relaxed">
                By manufacturing THINDOWN® in New York, we significantly reduce our carbon footprint 
                while supporting American workers and communities. Local production means shorter 
                supply chains, reduced transportation emissions, and greater control over our 
                environmental standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-100">80% reduction in shipping emissions for North American customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-100">100% renewable energy powered facility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-100">Zero waste to landfill manufacturing process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-200" />
                  <span className="text-green-100">Supporting 75+ local manufacturing jobs</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-photo relative rounded-xl overflow-hidden bg-green-800/20 flex items-center justify-center">
                <div className="text-center text-green-200">
                  <Globe className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-semibold">USA Facility</p>
                  <p className="text-sm opacity-75">Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-green to-green-700 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Join the Sustainable Revolution
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Partner with THINDOWN® USA to reduce your environmental impact while 
            delivering superior performance. Request samples of our sustainable 
            product lines today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/request-sample">
                Request Sustainable Samples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/contact" className="border-white text-white hover:bg-white hover:text-accent-green">
                Discuss Sustainability Goals
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
