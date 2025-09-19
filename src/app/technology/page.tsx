import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Thermometer, Wind, Shield, Zap, Award, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { productLines } from '@/data/products';
import { thindownFeatures } from '@/data/features';

export const metadata = {
  title: 'Technology - Revolutionary Down Fabric Innovation',
  description: 'Discover the patented NIPI R40 technology behind THINDOWN® - the world\'s first real down fabric. Learn about our manufacturing process and technical specifications.',
};

/**
 * Technology Page Component
 * 
 * Design decisions:
 * - Technical focus with detailed specifications
 * - Video integration for technology demonstration
 * - Comparison charts and performance data
 * - Manufacturing process explanation
 */
export default function TechnologyPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium">
                  <Microscope className="w-4 h-4 mr-2" />
                  Patented NIPI R40 Technology
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance">
                  Revolutionary
                  <span className="text-secondary-400 block">Down Fabric Technology</span>
                </h1>
                
                <p className="text-xl text-neutral-300 leading-relaxed">
                  Discover the breakthrough innovation that transforms loose down into a 
                  high-performance fabric, delivering superior insulation with unprecedented 
                  versatility and reliability.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/technical-specs">
                    Technical Specifications
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button variant="ghost" size="lg" className="text-white hover:text-secondary-400">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Technology Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-strong">
                <Image
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80"
                  alt="THINDOWN fabric under microscope showing fiber structure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900">
                The Science Behind THINDOWN®
              </h2>
              
              <p className="text-lg text-neutral-600 leading-relaxed">
                Our patented NIPI R40 technology revolutionizes how down insulation works by 
                transforming loose down clusters into a continuous fabric structure. This 
                breakthrough eliminates the traditional limitations of down insulation while 
                preserving all its natural benefits.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Structural Integrity</h3>
                    <p className="text-neutral-600">Down clusters are held in a stable matrix, preventing migration and cold spots.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Thermometer className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Thermal Efficiency</h3>
                    <p className="text-neutral-600">Uniform distribution creates consistent thermal performance across the entire surface.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Wind className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Breathability</h3>
                    <p className="text-neutral-600">Maintains the natural moisture-wicking properties of down for superior comfort.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80"
                      alt="Natural down clusters"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80"
                      alt="THINDOWN fabric structure"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                      alt="Thermal imaging of THINDOWN"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="aspect-square relative rounded-lg overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                      alt="Manufacturing process"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Proven Superior Performance
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Independent laboratory testing confirms THINDOWN® delivers exceptional 
              thermal performance while maintaining minimal thickness and weight.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Thermometer className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">2x Warmer</h3>
                <p className="text-neutral-600 mb-4">Than loose down insulation</p>
                <div className="text-sm text-neutral-500">
                  Tested at -20°C ambient temperature
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">4x Warmer</h3>
                <p className="text-neutral-600 mb-4">Than synthetic polyester</p>
                <div className="text-sm text-neutral-500">
                  At equivalent thickness and weight
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wind className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">40% Lighter</h3>
                <p className="text-neutral-600 mb-4">Than traditional down jackets</p>
                <div className="text-sm text-neutral-500">
                  Same warmth rating comparison
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Chart */}
          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-xl font-display font-semibold text-neutral-900">
                Thermal Performance Comparison
              </h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-neutral-900">THINDOWN®</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-neutral-200 rounded-full h-3">
                      <div className="bg-primary-600 h-3 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <span className="text-sm text-neutral-600">100% efficiency</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium text-neutral-900">Loose Down</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-neutral-200 rounded-full h-3">
                      <div className="bg-secondary-400 h-3 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <span className="text-sm text-neutral-600">50% efficiency</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="font-medium text-neutral-900">Synthetic Fill</span>
                  <div className="flex-1 mx-4">
                    <div className="w-full bg-neutral-200 rounded-full h-3">
                      <div className="bg-neutral-400 h-3 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <span className="text-sm text-neutral-600">25% efficiency</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Lines */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Our Product Lines
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Each THINDOWN® product line is engineered for specific applications, 
              offering customized solutions for diverse industry needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productLines.map((product) => (
              <Card key={product.id} className="card-hover" variant="elevated">
                <div className="aspect-photo relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {product.isRecycled && (
                    <div className="absolute top-4 left-4 bg-accent-green text-white px-2 py-1 rounded text-xs font-medium">
                      Recycled
                    </div>
                  )}
                  {product.isStretch && (
                    <div className="absolute top-4 right-4 bg-secondary-400 text-neutral-900 px-2 py-1 rounded text-xs font-medium">
                      Stretch
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-neutral-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Weight:</span>
                      <span className="font-medium">{product.specifications.weight}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Thickness:</span>
                      <span className="font-medium">{product.specifications.thickness}</span>
                    </div>
                    {product.specifications.temperature && (
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-500">Temperature:</span>
                        <span className="font-medium">{product.specifications.temperature}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Experience the Technology Yourself
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Request technical specifications and samples to evaluate THINDOWN® 
            for your specific application requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/technical-specs">
                View Technical Specs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/request-sample" className="border-white text-white hover:bg-white hover:text-primary-600">
                Request Sample Kit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
