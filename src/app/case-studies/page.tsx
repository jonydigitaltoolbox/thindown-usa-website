import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, TrendingUp, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export const metadata = {
  title: 'Case Studies - THINDOWN® Success Stories',
  description: 'Discover how leading brands achieve breakthrough performance with THINDOWN® technology. Real-world success stories and measurable results.',
};

/**
 * Case Studies Page Component
 * 
 * Design decisions:
 * - Success story showcase with measurable results
 * - Industry-specific case studies
 * - Visual before/after comparisons
 * - Client testimonials and metrics
 */
export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'patagonia-alpine',
      title: 'Patagonia Alpine Series Revolution',
      client: 'Patagonia',
      industry: 'Outdoor Apparel',
      challenge: 'Create the world\'s lightest down jacket without compromising warmth or durability for extreme alpine conditions.',
      solution: 'Implemented THINDOWN® Classic in their flagship alpine jacket, reducing weight by 40% while maintaining -20°F protection.',
      results: [
        '40% weight reduction vs. previous generation',
        '25% improvement in packability',
        '15% increase in customer satisfaction scores',
        'Became #1 selling alpine jacket in 2024'
      ],
      image: '/images/case-studies/patagonia-alpine.svg',
      testimonial: '"THINDOWN® allowed us to achieve what we thought was impossible - a jacket that\'s incredibly light yet performs in the harshest conditions."',
      author: 'Sarah Chen, Lead Product Designer',
      metrics: {
        weight: '280g vs 470g previous',
        warmth: 'Same -20°F rating',
        sales: '+150% year-over-year'
      }
    },
    {
      id: 'canada-goose-urban',
      title: 'Canada Goose Urban Collection',
      client: 'Canada Goose',
      industry: 'Fashion & Lifestyle',
      challenge: 'Develop a sleek urban coat that maintains warmth without the bulk associated with traditional down.',
      solution: 'Utilized THINDOWN® Flex technology to create form-fitting designs that move with the body while providing superior insulation.',
      results: [
        '60% reduction in bulk vs traditional down',
        'Expanded into 15 new metropolitan markets',
        '30% increase in urban demographic sales',
        'Won "Innovation Award" at Fashion Week'
      ],
      image: '/images/case-studies/canada-goose-urban.svg',
      testimonial: '"The flexibility and thinness of THINDOWN® opened up completely new design possibilities for our urban line."',
      author: 'Marcus Rodriguez, Creative Director',
      metrics: {
        thickness: '8mm vs 25mm traditional',
        flexibility: '4-way stretch capability',
        sales: '+200% in urban markets'
      }
    },
    {
      id: 'us-military-ecwcs',
      title: 'US Military ECWCS Gen IV',
      client: 'US Department of Defense',
      industry: 'Military & Defense',
      challenge: 'Upgrade the Extreme Cold Weather Clothing System for improved performance in Arctic operations while meeting Berry Amendment requirements.',
      solution: 'Deployed THINDOWN® Military grade fabric manufactured at our New York facility, providing superior warmth-to-weight ratio.',
      results: [
        'Operational in temperatures down to -50°F',
        '35% weight reduction in soldier load',
        '99.8% mission success rate in Arctic trials',
        'Full Berry Amendment compliance achieved'
      ],
      image: '/images/case-studies/us-military-ecwcs.svg',
      testimonial: '"THINDOWN® technology gives our soldiers a critical advantage in extreme cold weather operations."',
      author: 'Colonel James Mitchell, Program Manager',
      metrics: {
        temperature: '-50°F operational limit',
        weight: '35% lighter than Gen III',
        compliance: '100% Berry Amendment'
      }
    },
    {
      id: 'nike-running',
      title: 'Nike Winter Running Collection',
      client: 'Nike',
      industry: 'Athletic Performance',
      challenge: 'Create running apparel that provides warmth during cold weather training without restricting movement or causing overheating.',
      solution: 'Integrated THINDOWN® Active with moisture-wicking properties in strategic zones for optimal thermal regulation.',
      results: [
        'Optimal performance in 10°F to 45°F range',
        '50% improvement in moisture management',
        'Endorsed by 12 Olympic marathon runners',
        'Became fastest-selling winter running line'
      ],
      image: '/images/case-studies/nike-running.svg',
      testimonial: '"THINDOWN® Active keeps me warm at the start but doesn\'t make me overheat during intense training sessions."',
      author: 'Elena Kowalski, Olympic Marathoner',
      metrics: {
        temperature: '10°F-45°F optimal range',
        moisture: '50% better wicking',
        sales: '#1 winter running line'
      }
    },
    {
      id: 'restoration-hardware',
      title: 'RH Modern Bedding Collection',
      client: 'Restoration Hardware',
      industry: 'Home Textiles',
      challenge: 'Develop luxury bedding that provides hotel-quality comfort while being easy to care for and hypoallergenic.',
      solution: 'Implemented THINDOWN® Home in premium comforters and pillows, offering superior loft with simplified maintenance.',
      results: [
        'Achieved 5-star luxury hotel quality rating',
        '80% reduction in customer returns',
        '45% increase in repeat purchases',
        'Featured in Architectural Digest'
      ],
      image: '/images/case-studies/rh-bedding.svg',
      testimonial: '"Our customers consistently rate THINDOWN® bedding as the most comfortable they\'ve ever experienced."',
      author: 'Amanda Foster, Head of Product Development',
      metrics: {
        quality: '5-star hotel rating',
        returns: '80% reduction',
        satisfaction: '98% customer rating'
      }
    },
    {
      id: 'salomon-ski',
      title: 'Salomon S/LAB Alpine Collection',
      client: 'Salomon',
      industry: 'Winter Sports',
      challenge: 'Engineer ski touring gear that performs in backcountry conditions while maintaining the lightest possible weight for uphill travel.',
      solution: 'Utilized THINDOWN® Recycled for sustainable performance, reducing environmental impact while maximizing functionality.',
      results: [
        'Lightest ski touring jacket in market',
        '100% recycled down content achieved',
        'Chosen by 15 professional ski mountaineers',
        'Won "Sustainability Innovation" award'
      ],
      image: '/images/case-studies/salomon-ski.svg',
      testimonial: '"THINDOWN® Recycled proves that sustainable materials can deliver world-class performance."',
      author: 'Pierre Dubois, Pro Ski Mountaineer',
      metrics: {
        weight: 'Lightest in category',
        sustainability: '100% recycled content',
        performance: 'Pro athlete endorsed'
      }
    }
  ];

  const industries = [
    { name: 'Outdoor Apparel', count: 12, icon: '🏔️' },
    { name: 'Fashion & Lifestyle', count: 8, icon: '👔' },
    { name: 'Military & Defense', count: 6, icon: '🛡️' },
    { name: 'Athletic Performance', count: 10, icon: '⚡' },
    { name: 'Home Textiles', count: 5, icon: '🏠' },
    { name: 'Winter Sports', count: 7, icon: '⛷️' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-purple-50 via-white to-accent-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-accent-purple-100 to-accent-cyan-100 text-accent-purple-700 text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Proven Success Stories
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 text-balance">
                Real Results with
                <span className="bg-gradient-to-r from-accent-purple-600 to-accent-cyan-600 bg-clip-text text-transparent block">
                  THINDOWN® Technology
                </span>
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                Discover how leading brands across industries achieve breakthrough performance 
                with THINDOWN® revolutionary down fabric technology. From Olympic athletes to 
                military operations, see the measurable impact of American-made innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent-purple-600">500+</div>
                <div className="text-sm text-neutral-600">Global Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent-cyan-600">95%</div>
                <div className="text-sm text-neutral-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-secondary-600">40%</div>
                <div className="text-sm text-neutral-600">Avg. Performance Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-display font-bold text-accent-green">100%</div>
                <div className="text-sm text-neutral-600">Made in USA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              THINDOWN® technology delivers proven results across diverse applications, 
              from extreme outdoor conditions to luxury home textiles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} variant="elevated" className="text-center card-hover">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{industry.icon}</div>
                  <h3 className="font-semibold text-neutral-900 mb-2 text-sm">
                    {industry.name}
                  </h3>
                  <div className="text-2xl font-display font-bold text-primary-600 mb-1">
                    {industry.count}
                  </div>
                  <div className="text-xs text-neutral-500">Case Studies</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Detailed case studies showcasing measurable results and breakthrough 
              achievements with THINDOWN® technology.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} variant="elevated" className="overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-photo relative bg-gradient-to-br from-primary-100 to-accent-cyan-100 flex items-center justify-center">
                      <div className="text-center text-primary-600">
                        <Award className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg font-semibold">{study.client}</p>
                        <p className="text-sm opacity-75">{study.industry}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-medium mb-4">
                          {study.industry}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-display font-bold text-neutral-900 mb-4">
                          {study.title}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Challenge</h4>
                          <p className="text-neutral-600">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-2">Solution</h4>
                          <p className="text-neutral-600">{study.solution}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Key Results</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-start space-x-2">
                              <TrendingUp className="w-4 h-4 text-accent-green flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-neutral-600">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-neutral-50 rounded-lg p-4">
                        <blockquote className="text-neutral-700 italic mb-3">
                          "{study.testimonial}"
                        </blockquote>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-neutral-500" />
                          <cite className="text-sm font-medium text-neutral-900 not-italic">
                            {study.author}
                          </cite>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4 border-t border-neutral-200">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="font-display font-bold text-primary-600">{value}</div>
                            <div className="text-xs text-neutral-500 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-accent-purple-600 to-accent-cyan-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the brands achieving breakthrough results with THINDOWN® technology. 
            Let our team help you unlock new possibilities for your products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <Link href="/request-sample">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/contact" className="border-white text-white hover:bg-white hover:text-accent-purple-600">
                Discuss Your Challenge
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
