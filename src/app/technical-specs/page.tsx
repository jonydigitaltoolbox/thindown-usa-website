import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { productLines } from '@/data/products';

export const metadata = {
  title: 'Technical Specifications - THINDOWN® Performance Data',
  description: 'Comprehensive technical specifications for THINDOWN® revolutionary down fabric. Performance data, test results, and engineering specifications.',
};

/**
 * Technical Specifications Page Component
 * 
 * Design decisions:
 * - Comprehensive technical data presentation
 * - Downloadable specification sheets
 * - Performance comparison tables
 * - Engineering-focused content
 */
export default function TechnicalSpecsPage() {
  const performanceTests = [
    {
      property: 'Thermal Resistance (CLO)',
      standard: 'ASTM F1868',
      thindown: '2.5-4.0',
      looseDown: '1.2-2.0',
      synthetic: '0.6-1.0'
    },
    {
      property: 'Air Permeability (CFM)',
      standard: 'ASTM D737',
      thindown: '5-15',
      looseDown: '20-50',
      synthetic: '2-8'
    },
    {
      property: 'Moisture Vapor Transmission (g/m²/24hr)',
      standard: 'ASTM E96',
      thindown: '8000-12000',
      looseDown: '8500-13000',
      synthetic: '3000-6000'
    },
    {
      property: 'Compressibility (%)',
      standard: 'ASTM D1056',
      thindown: '85-95',
      looseDown: '75-85',
      synthetic: '60-75'
    },
    {
      property: 'Recovery Time (seconds)',
      standard: 'Internal Test',
      thindown: '15-30',
      looseDown: '60-120',
      synthetic: '30-60'
    }
  ];

  const certifications = [
    {
      name: 'RDS - Responsible Down Standard',
      scope: 'Animal welfare and supply chain',
      validity: 'Annual renewal',
      coverage: 'Virgin down products'
    },
    {
      name: 'GRS - Global Recycled Standard',
      scope: 'Recycled content verification',
      validity: '3-year certification',
      coverage: 'Recycled down products'
    },
    {
      name: 'OEKO-TEX Standard 100',
      scope: 'Harmful substances testing',
      validity: 'Annual renewal',
      coverage: 'All product lines'
    },
    {
      name: 'Berry Amendment Compliance',
      scope: 'US military sourcing requirements',
      validity: 'Continuous compliance',
      coverage: 'Military grade products'
    },
    {
      name: 'CPSIA Compliance',
      scope: 'Consumer product safety',
      validity: 'Continuous compliance',
      coverage: 'All consumer products'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
                <FileText className="w-4 h-4 mr-2" />
                Engineering Specifications
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance">
                Technical
                <span className="text-secondary-400 block">Specifications</span>
              </h1>
              
              <p className="text-xl text-neutral-300 leading-relaxed">
                Comprehensive performance data, test results, and engineering specifications 
                for THINDOWN® revolutionary down fabric technology. Independently tested 
                and verified by accredited laboratories.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Full Spec Sheet
              </Button>
              
              <Button variant="ghost" size="lg" className="text-white hover:text-secondary-400" asChild>
                <Link href="/request-sample">
                  Request Physical Samples
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Performance Test Results
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Independent laboratory testing confirms THINDOWN®'s superior performance 
              across all key metrics compared to traditional insulation materials.
            </p>
          </div>

          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-xl font-display font-semibold text-neutral-900">
                Comparative Performance Analysis
              </h3>
              <p className="text-neutral-600">
                All tests conducted by accredited third-party laboratories using standardized methods.
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-neutral-200">
                      <th className="text-left py-4 px-4 font-semibold text-neutral-900">Property</th>
                      <th className="text-left py-4 px-4 font-semibold text-neutral-900">Test Standard</th>
                      <th className="text-center py-4 px-4 font-semibold text-primary-600">THINDOWN®</th>
                      <th className="text-center py-4 px-4 font-semibold text-neutral-600">Loose Down</th>
                      <th className="text-center py-4 px-4 font-semibold text-neutral-600">Synthetic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {performanceTests.map((test, index) => (
                      <tr key={index} className="hover:bg-neutral-50">
                        <td className="py-4 px-4 font-medium text-neutral-900">{test.property}</td>
                        <td className="py-4 px-4 text-sm text-neutral-600">{test.standard}</td>
                        <td className="py-4 px-4 text-center font-semibold text-primary-600">{test.thindown}</td>
                        <td className="py-4 px-4 text-center text-neutral-600">{test.looseDown}</td>
                        <td className="py-4 px-4 text-center text-neutral-600">{test.synthetic}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Product Line Specifications
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Detailed technical specifications for each THINDOWN® product line, 
              engineered for specific applications and performance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productLines.map((product) => (
              <Card key={product.id} variant="elevated">
                <CardHeader>
                  <h3 className="text-xl font-display font-semibold text-neutral-900">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600">{product.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Physical Properties</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-neutral-600">Weight:</span>
                            <span className="font-medium">{product.specifications.weight}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-neutral-600">Thickness:</span>
                            <span className="font-medium">{product.specifications.thickness}</span>
                          </div>
                          {product.specifications.fillPower && (
                            <div className="flex justify-between">
                              <span className="text-neutral-600">Fill Power:</span>
                              <span className="font-medium">{product.specifications.fillPower}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Performance</h4>
                        <div className="space-y-2 text-sm">
                          {product.specifications.temperature && (
                            <div className="flex justify-between">
                              <span className="text-neutral-600">Temperature:</span>
                              <span className="font-medium">{product.specifications.temperature}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-neutral-600">Recycled:</span>
                            <span className="font-medium">{product.isRecycled ? 'Yes' : 'No'}</span>
                          </div>
                          {product.isStretch && (
                            <div className="flex justify-between">
                              <span className="text-neutral-600">Stretch:</span>
                              <span className="font-medium">4-way stretch</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Certifications</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.specifications.certifications.map((cert, certIndex) => (
                          <span 
                            key={certIndex}
                            className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Applications</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {product.applications.slice(0, 3).map((application, appIndex) => (
                          <div key={appIndex} className="flex items-center text-sm text-neutral-600">
                            <div className="w-2 h-2 bg-primary-400 rounded-full mr-2"></div>
                            {application}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              THINDOWN® maintains the highest standards of quality, safety, and 
              environmental responsibility through comprehensive certification programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} variant="outlined">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-accent-green" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{cert.name}</h3>
                      <p className="text-sm text-neutral-600 mb-2">{cert.scope}</p>
                      <div className="space-y-1 text-xs text-neutral-500">
                        <div><strong>Validity:</strong> {cert.validity}</div>
                        <div><strong>Coverage:</strong> {cert.coverage}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Download Technical Documentation
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Access comprehensive technical documentation, test reports, and 
            engineering specifications for your product development needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card variant="elevated">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">Complete Spec Sheet</h3>
                <p className="text-sm text-neutral-600 mb-4">All product specifications in one document</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">Test Reports</h3>
                <p className="text-sm text-neutral-600 mb-4">Independent laboratory test results</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900 mb-2">CAD Files</h3>
                <p className="text-sm text-neutral-600 mb-4">Technical drawings and dimensions</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download ZIP
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/request-sample">
                Request Physical Samples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact" className="border-white text-white hover:bg-white hover:text-primary-600">
                Contact Technical Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
