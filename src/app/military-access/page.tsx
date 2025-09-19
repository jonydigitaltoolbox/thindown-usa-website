import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Award, CheckCircle, Lock, Flag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export const metadata = {
  title: 'Military Access - THINDOWN® Defense & Tactical Solutions',
  description: 'Berry Amendment compliant THINDOWN® solutions for military and defense applications. Made in USA with specialized performance requirements.',
};

/**
 * Military Access Page Component
 * 
 * Design decisions:
 * - Security-focused design with professional military aesthetic
 * - Berry Amendment compliance emphasis
 * - Specialized military specifications and requirements
 * - Restricted access form for qualified personnel
 */
export default function MilitaryAccessPage() {
  const militaryFeatures = [
    {
      icon: Flag,
      title: 'Berry Amendment Compliant',
      description: 'Fully compliant with US military sourcing requirements, manufactured exclusively in our New York facility.',
      benefit: 'Meets all DoD procurement standards'
    },
    {
      icon: Shield,
      title: 'Extreme Performance',
      description: 'Tested to military specifications for extreme temperature ranges and harsh environmental conditions.',
      benefit: 'Operational down to -40°F (-40°C)'
    },
    {
      icon: Award,
      title: 'MIL-SPEC Certified',
      description: 'Meets or exceeds military specifications for insulation materials in tactical applications.',
      benefit: 'NSN eligible for procurement'
    },
    {
      icon: Lock,
      title: 'ITAR Compliance',
      description: 'Full compliance with International Traffic in Arms Regulations for defense-related applications.',
      benefit: 'Secure supply chain management'
    }
  ];

  const militaryApplications = [
    {
      category: 'Cold Weather Systems',
      applications: [
        'Extreme Cold Weather Clothing System (ECWCS)',
        'Modular Sleep System components',
        'Cold weather gloves and accessories',
        'Sleeping bag insulation systems'
      ],
      image: '/images/military/cold-weather-gear.jpg'
    },
    {
      category: 'Tactical Equipment',
      applications: [
        'Tactical vests and body armor insulation',
        'Combat uniform insulation layers',
        'Equipment protection padding',
        'Vehicle crew protection systems'
      ],
      image: '/images/military/tactical-equipment.jpg'
    },
    {
      category: 'Specialized Gear',
      applications: [
        'Aviation crew protection',
        'Naval cold weather systems',
        'Special operations equipment',
        'Emergency survival gear'
      ],
      image: '/images/military/specialized-gear.jpg'
    }
  ];

  const specifications = [
    { property: 'Temperature Range', value: '-40°F to +120°F (-40°C to +49°C)' },
    { property: 'Weight Range', value: '150-300 g/m²' },
    { property: 'Thickness Range', value: '4-12 mm' },
    { property: 'Fill Power', value: '700-850 cuin' },
    { property: 'Flame Resistance', value: 'Available with FR treatment' },
    { property: 'NIR Signature', value: 'Compliant options available' },
    { property: 'Durability', value: 'Enhanced for tactical use' },
    { property: 'Manufacturing', value: '100% Made in USA' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-accent-red text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent-red/20 text-accent-red text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Restricted Access • Military Personnel Only
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance">
                  Defense Grade
                  <span className="text-accent-red block">THINDOWN® Solutions</span>
                </h1>
                
                <p className="text-xl text-neutral-300 leading-relaxed">
                  Berry Amendment compliant insulation technology engineered for 
                  the most demanding military and defense applications. Made in USA 
                  with uncompromising performance standards.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#access-form">
                    Request Military Access
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="ghost" size="lg" className="text-white hover:text-accent-red">
                  <Lock className="mr-2 h-5 w-5" />
                  Secure Portal Login
                </Button>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-700">
                <div>
                  <div className="text-3xl font-display font-bold text-accent-red">-40°F</div>
                  <div className="text-sm text-neutral-400">Operational limit</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-accent-red">100%</div>
                  <div className="text-sm text-neutral-400">Berry compliant</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-accent-red">24/7</div>
                  <div className="text-sm text-neutral-400">Mission support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-strong">
                <Image
                  src="/images/military/military-hero.jpg"
                  alt="Military personnel using THINDOWN insulated gear"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/40 to-transparent" />
              </div>
              
              {/* Classification notice */}
              <div className="absolute -bottom-4 -right-4 bg-accent-red rounded-lg shadow-medium p-4 max-w-48">
                <div className="flex items-center space-x-2 mb-2">
                  <Lock className="w-5 h-5 text-white" />
                  <span className="font-semibold text-sm text-white">Controlled Access</span>
                </div>
                <p className="text-xs text-red-100">Military and defense contractors only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Features */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Mission-Critical Performance
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              THINDOWN® military-grade solutions are engineered to meet the most stringent 
              defense requirements while maintaining the superior performance our technology is known for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {militaryFeatures.map((feature, index) => (
              <Card key={index} className="card-hover" variant="elevated">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-accent-red/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent-red" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-neutral-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <p className="text-sm text-accent-red font-medium">{feature.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Military Applications */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Defense Applications
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From extreme cold weather operations to specialized tactical equipment, 
              THINDOWN® provides critical insulation solutions across all defense sectors.
            </p>
          </div>

          <div className="space-y-12">
            {militaryApplications.map((category, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <h3 className="text-2xl font-display font-bold text-neutral-900">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.applications.map((application, appIndex) => (
                      <div key={appIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-600">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-photo relative rounded-xl overflow-hidden shadow-strong">
                    <Image
                      src={category.image}
                      alt={`${category.category} applications`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Military Specifications
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Detailed technical specifications for military-grade THINDOWN® products. 
              Additional classified specifications available to qualified personnel.
            </p>
          </div>

          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-xl font-display font-semibold text-neutral-900">
                THINDOWN® Military Grade Specifications
              </h3>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-neutral-100 last:border-b-0">
                    <span className="font-medium text-neutral-900">{spec.property}</span>
                    <span className="text-neutral-600">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-accent-red/5 rounded-lg border border-accent-red/20">
                <p className="text-sm text-accent-red">
                  <strong>Note:</strong> Additional specifications and performance data available 
                  to qualified military personnel and defense contractors through our secure portal.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Access Request Form */}
      <section id="access-form" className="section-padding bg-gradient-to-br from-neutral-900 to-accent-red text-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Request Military Access
            </h2>
            <p className="text-xl text-neutral-200">
              Access to detailed military specifications and procurement information 
              is restricted to qualified military personnel and defense contractors.
            </p>
          </div>

          <Card variant="elevated">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto">
                  <Lock className="w-8 h-8 text-accent-red" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                    Secure Access Required
                  </h3>
                  <p className="text-neutral-600">
                    To access military-specific information and specifications, please contact 
                    our defense sales team directly using the secure channels below.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-semibold text-neutral-900 mb-2">Military Sales Direct Line</h4>
                    <p className="text-neutral-600">Phone: +1 (315) 555-MIL (6455)</p>
                    <p className="text-neutral-600">Email: military@thindown.us</p>
                  </div>
                  
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <h4 className="font-semibold text-neutral-900 mb-2">Required Information</h4>
                    <ul className="text-sm text-neutral-600 space-y-1">
                      <li>• Military organization or defense contractor company</li>
                      <li>• Security clearance level (if applicable)</li>
                      <li>• Specific application requirements</li>
                      <li>• Project timeline and volume requirements</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg" asChild>
                    <Link href="/contact?type=military">
                      Contact Military Sales
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/technical-specs">
                      View General Specs
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
