import React from 'react';
import Link from 'next/link';
import { Download, FileText, Image as ImageIcon, Video, Award, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export const metadata = {
  title: 'Press Kit - THINDOWN® Media Resources',
  description: 'Download high-resolution images, logos, press releases, and media resources for THINDOWN® USA. Complete press kit for journalists and media professionals.',
};

/**
 * Press Kit Page Component
 * 
 * Design decisions:
 * - Comprehensive media resource center
 * - Organized by content type and date
 * - High-resolution downloadable assets
 * - Press contact information
 */
export default function PressKitPage() {
  const pressReleases = [
    {
      id: 'ny-facility-opening',
      title: 'THINDOWN USA Opens State-of-the-Art Manufacturing Facility in New York',
      date: '2024-03-15',
      summary: 'Italian innovation meets American manufacturing as THINDOWN establishes its first US production facility, creating 75 jobs and achieving Berry Amendment compliance.',
      downloadUrl: '/downloads/press/thindown-usa-facility-opening.pdf',
      category: 'Company News'
    },
    {
      id: 'military-contract',
      title: 'THINDOWN USA Awarded Major Defense Contract for Next-Generation Cold Weather Gear',
      date: '2024-02-08',
      summary: 'US Department of Defense selects THINDOWN technology for ECWCS Gen IV program, representing $50M investment in American-made insulation innovation.',
      downloadUrl: '/downloads/press/thindown-military-contract.pdf',
      category: 'Defense'
    },
    {
      id: 'sustainability-award',
      title: 'THINDOWN Receives Sustainability Innovation Award for Recycled Down Technology',
      date: '2024-01-22',
      summary: 'Recognition for breakthrough recycled down fabric technology that diverts waste while maintaining superior performance standards.',
      downloadUrl: '/downloads/press/thindown-sustainability-award.pdf',
      category: 'Awards'
    },
    {
      id: 'olympic-partnership',
      title: 'Olympic Athletes Choose THINDOWN Technology for Winter Games Performance',
      date: '2024-01-10',
      summary: 'Multiple Olympic teams select THINDOWN insulation for official competition gear, citing superior warmth-to-weight ratio.',
      downloadUrl: '/downloads/press/thindown-olympic-partnership.pdf',
      category: 'Sports'
    },
    {
      id: 'patent-announcement',
      title: 'THINDOWN Expands Patent Portfolio with Revolutionary Stretch Down Technology',
      date: '2023-12-05',
      summary: 'New patent filing for THINDOWN Flex represents breakthrough in four-way stretch insulation technology.',
      downloadUrl: '/downloads/press/thindown-patent-announcement.pdf',
      category: 'Innovation'
    }
  ];

  const mediaAssets = [
    {
      category: 'Logos & Branding',
      description: 'Official THINDOWN USA logos, wordmarks, and brand guidelines',
      items: [
        { name: 'Primary Logo Package', type: 'ZIP', size: '15 MB', format: 'PNG, SVG, EPS' },
        { name: 'Brand Guidelines', type: 'PDF', size: '8 MB', format: 'PDF' },
        { name: 'USA Flag Variants', type: 'ZIP', size: '5 MB', format: 'PNG, SVG' }
      ]
    },
    {
      category: 'Product Images',
      description: 'High-resolution product photography and technical illustrations',
      items: [
        { name: 'Fabric Close-ups', type: 'ZIP', size: '120 MB', format: '4K JPG' },
        { name: 'Application Photos', type: 'ZIP', size: '200 MB', format: '4K JPG' },
        { name: 'Technical Diagrams', type: 'ZIP', size: '25 MB', format: 'PNG, SVG' }
      ]
    },
    {
      category: 'Facility & Manufacturing',
      description: 'New York manufacturing facility and production process imagery',
      items: [
        { name: 'Facility Exterior/Interior', type: 'ZIP', size: '180 MB', format: '4K JPG' },
        { name: 'Manufacturing Process', type: 'ZIP', size: '95 MB', format: '4K JPG' },
        { name: 'Team & Equipment', type: 'ZIP', size: '75 MB', format: '4K JPG' }
      ]
    },
    {
      category: 'Leadership Photos',
      description: 'Executive headshots and company leadership imagery',
      items: [
        { name: 'Executive Headshots', type: 'ZIP', size: '45 MB', format: '4K JPG' },
        { name: 'Team Photos', type: 'ZIP', size: '65 MB', format: '4K JPG' },
        { name: 'Event Photos', type: 'ZIP', size: '85 MB', format: '4K JPG' }
      ]
    }
  ];

  const videoAssets = [
    {
      title: 'THINDOWN Technology Overview',
      description: 'Comprehensive overview of revolutionary down fabric technology',
      duration: '3:45',
      format: '4K MP4',
      size: '250 MB'
    },
    {
      title: 'New York Facility Tour',
      description: 'Behind-the-scenes look at American manufacturing excellence',
      duration: '5:20',
      format: '4K MP4',
      size: '380 MB'
    },
    {
      title: 'Performance Testing',
      description: 'Laboratory testing demonstrating superior thermal performance',
      duration: '2:30',
      format: '4K MP4',
      size: '180 MB'
    },
    {
      title: 'Sustainability Story',
      description: 'Environmental benefits and recycled content innovation',
      duration: '4:10',
      format: '4K MP4',
      size: '290 MB'
    }
  ];

  const companyFacts = [
    { label: 'Founded', value: '2015 (USA Operations: 2024)' },
    { label: 'Headquarters', value: 'Syracuse, New York, USA' },
    { label: 'Employees', value: '75+ (USA), 200+ (Global)' },
    { label: 'Patents', value: '15+ Global Patents' },
    { label: 'Certifications', value: 'RDS, GRS, OEKO-TEX, Berry Amendment' },
    { label: 'Production Capacity', value: '2M meters annually (USA)' },
    { label: 'Global Reach', value: '50+ Countries' },
    { label: 'Brand Partners', value: '500+ Global Brands' }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-primary-900 to-accent-purple-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  Media Resources Center
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance">
                  THINDOWN® USA
                  <span className="text-secondary-400 block">Press Kit</span>
                </h1>
                
                <p className="text-xl text-neutral-300 leading-relaxed">
                  Comprehensive media resources for journalists, bloggers, and industry 
                  professionals covering THINDOWN® revolutionary down fabric technology 
                  and American manufacturing story.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Complete Kit
                </Button>
                
                <Button variant="ghost" size="lg" className="text-white hover:text-secondary-400" asChild>
                  <Link href="#contact">
                    Media Inquiries
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">Press Kit Assets</p>
                  <p className="text-sm opacity-75">High-resolution media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Company Quick Facts
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Essential information about THINDOWN USA for media coverage and reporting.
            </p>
          </div>

          <Card variant="elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyFacts.map((fact, index) => (
                  <div key={index} className="text-center">
                    <div className="font-semibold text-neutral-900 mb-2">{fact.label}</div>
                    <div className="text-primary-600 font-medium">{fact.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Press Releases */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Latest Press Releases
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Recent news and announcements from THINDOWN USA.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pressReleases.map((release) => (
              <Card key={release.id} variant="elevated" className="card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                      {release.category}
                    </span>
                    <div className="flex items-center text-neutral-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(release.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral-900">
                    {release.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600 mb-4">{release.summary}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Assets */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Media Assets
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              High-resolution images, logos, and brand assets for media use.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mediaAssets.map((category, index) => (
              <Card key={index} variant="elevated">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-neutral-900">
                        {category.category}
                      </h3>
                      <p className="text-neutral-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <div>
                          <div className="font-medium text-neutral-900">{item.name}</div>
                          <div className="text-sm text-neutral-500">
                            {item.format} • {item.size}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Assets */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Video Resources
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Professional video content for broadcast and digital media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoAssets.map((video, index) => (
              <Card key={index} variant="elevated" className="card-hover">
                <div className="aspect-video relative bg-gradient-to-br from-primary-100 to-accent-cyan-100 flex items-center justify-center">
                  <div className="text-center text-primary-600">
                    <Video className="w-16 h-16 mx-auto mb-2" />
                    <p className="font-semibold">{video.duration}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-display font-semibold text-neutral-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{video.description}</p>
                  <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                    <span>{video.format}</span>
                    <span>{video.size}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section id="contact" className="section-padding bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Media Inquiries
            </h2>
            <p className="text-xl text-primary-100">
              For interviews, additional information, or custom media requests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                  Press Contact
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-neutral-900">Sarah Martinez</div>
                    <div className="text-neutral-600">Director of Communications</div>
                  </div>
                  <div>
                    <div className="text-neutral-600">Phone: +1 (315) 555-PRESS</div>
                    <div className="text-neutral-600">Email: press@thindown.us</div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">
                      Available: Monday-Friday, 9 AM - 6 PM EST<br />
                      Emergency media line: +1 (315) 555-NEWS
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="p-8">
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                  Technical Inquiries
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-neutral-900">Dr. Michael Chen</div>
                    <div className="text-neutral-600">Chief Technology Officer</div>
                  </div>
                  <div>
                    <div className="text-neutral-600">Phone: +1 (315) 555-TECH</div>
                    <div className="text-neutral-600">Email: tech.media@thindown.us</div>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">
                      For technical specifications, testing data,<br />
                      and product development stories
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                General Contact Form
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
