import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { applicationCategories } from '@/data/applications';

export const metadata = {
  title: 'Applications - THINDOWN® Solutions for Every Industry',
  description: 'Discover how THINDOWN® revolutionary down fabric technology serves outdoor apparel, fashion, footwear, military, and home textile applications.',
};

/**
 * Applications Page Component
 * 
 * Design decisions:
 * - Comprehensive showcase of all target markets
 * - Industry-specific benefits and use cases
 * - Visual examples and success stories
 * - Clear CTAs for each application category
 */
export default function ApplicationsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 text-balance">
                Engineered for
                <span className="gradient-text block">Every Application</span>
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                From extreme outdoor conditions to luxury fashion, THINDOWN® adapts to meet 
                the specific performance requirements of diverse industries and applications. 
                Discover how our revolutionary down fabric technology can transform your products.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
              <div>
                <div className="text-2xl font-display font-bold text-primary-600">6</div>
                <div className="text-sm text-neutral-600">Industries Served</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary-600">500+</div>
                <div className="text-sm text-neutral-600">Global Brands</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary-600">50+</div>
                <div className="text-sm text-neutral-600">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary-600">15+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary-600">100%</div>
                <div className="text-sm text-neutral-600">Made in USA</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary-600">24/7</div>
                <div className="text-sm text-neutral-600">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-16">
            {applicationCategories.map((application, index) => (
              <div key={application.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      {/* Icon would be rendered based on application.icon */}
                      <CheckCircle className="w-6 h-6 text-primary-600" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-neutral-900">
                      {application.name}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    {application.description}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900">Key Benefits</h3>
                    <div className="space-y-2">
                      {application.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900">Common Applications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {application.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                          <span className="text-sm text-neutral-600">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" size="lg" asChild>
                      <Link href="/request-sample">
                        Request Sample
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/case-studies">View Case Studies</Link>
                    </Button>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-photo relative rounded-xl overflow-hidden shadow-strong">
                    <Image
                      src={application.image}
                      alt={`${application.name} applications showcase`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                  </div>
                  
                  {/* Floating stats or features */}
                  {index === 0 && (
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-medium p-4 max-w-48">
                      <div className="text-2xl font-display font-bold text-primary-600 mb-1">-40°F</div>
                      <p className="text-xs text-neutral-600">Tested performance in extreme conditions</p>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-medium p-4 max-w-48">
                      <div className="text-2xl font-display font-bold text-secondary-600 mb-1">2mm</div>
                      <p className="text-xs text-neutral-600">Ultra-thin profile maintains garment silhouette</p>
                    </div>
                  )}
                  
                  {index === 4 && (
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-medium p-4 max-w-48">
                      <div className="flex items-center space-x-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-accent-green" />
                        <span className="font-semibold text-sm">Berry Amendment</span>
                      </div>
                      <p className="text-xs text-neutral-600">Compliant for US military applications</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Comparison */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Why Industry Leaders Choose THINDOWN®
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Compare traditional insulation solutions with THINDOWN® technology 
              across key performance metrics that matter to your industry.
            </p>
          </div>

          <Card variant="elevated">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-4 px-4 font-semibold text-neutral-900">Performance Factor</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary-600">THINDOWN®</th>
                      <th className="text-center py-4 px-4 font-semibold text-neutral-600">Loose Down</th>
                      <th className="text-center py-4 px-4 font-semibold text-neutral-600">Synthetic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="py-4 px-4 font-medium text-neutral-900">Thermal Efficiency</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center px-2 py-1 bg-accent-green/10 text-accent-green rounded text-sm font-medium">
                          Excellent
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-sm font-medium">
                          Good
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center px-2 py-1 bg-neutral-200 text-neutral-600 rounded text-sm font-medium">
                          Fair
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium text-neutral-900">No Cold Spots</td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle className="w-5 h-5 text-accent-green mx-auto" />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="w-5 h-5 border-2 border-neutral-300 rounded mx-auto"></div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle className="w-5 h-5 text-accent-green mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium text-neutral-900">No Down Migration</td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle className="w-5 h-5 text-accent-green mx-auto" />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="w-5 h-5 border-2 border-neutral-300 rounded mx-auto"></div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle className="w-5 h-5 text-accent-green mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium text-neutral-900">Breathability</td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center px-2 py-1 bg-accent-green/10 text-accent-green rounded text-sm font-medium">
                          Excellent
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center px-2 py-1 bg-accent-green/10 text-accent-green rounded text-sm font-medium">
                          Excellent
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center px-2 py-1 bg-neutral-200 text-neutral-600 rounded text-sm font-medium">
                          Limited
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium text-neutral-900">Easy Care</td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle className="w-5 h-5 text-accent-green mx-auto" />
                      </td>
                      <td className="py-4 px-4 text-center">
                        <div className="inline-flex items-center px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-sm font-medium">
                          Special Care
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <CheckCircle className="w-5 h-5 text-accent-green mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Ready to Revolutionize Your Products?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join industry leaders who have already transformed their products with THINDOWN® technology. 
            Our technical team will help you find the perfect solution for your application.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/request-sample">
                Request Application Sample
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/contact" className="border-white text-white hover:bg-white hover:text-primary-600">
                Speak with Technical Expert
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
