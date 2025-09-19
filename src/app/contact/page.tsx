'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Card, CardContent } from '@/components/ui/Card';
import type { ContactForm as ContactFormType } from '@/types';

/**
 * Contact Page Component
 * 
 * Design decisions:
 * - Comprehensive contact information with multiple channels
 * - Interactive contact form with validation
 * - Success/error state management
 * - USA manufacturing facility emphasis
 */
export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleFormSubmit = async (data: ContactFormType) => {
    setSubmitStatus('loading');
    
    try {
      // TODO: Implement actual form submission
      // This would typically call an API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
      console.error('Form submission error:', error);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'USA Manufacturing Facility',
      details: [
        'THINDOWN USA',
        '1234 Innovation Drive',
        'Syracuse, NY 13204',
        'United States'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Main: +1 (315) 555-THIN',
        'Technical Support: +1 (315) 555-TECH',
        'Military Sales: +1 (315) 555-MIL',
        'International: +1 (315) 555-INTL'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'General: info@thindown.us',
        'Sales: sales@thindown.us',
        'Technical: technical@thindown.us',
        'Military: military@thindown.us'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM EST',
        'Saturday: 9:00 AM - 2:00 PM EST',
        'Sunday: Closed',
        'Emergency Support: 24/7 for military contracts'
      ]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 text-balance">
                Let's Work
                <span className="gradient-text block">Together</span>
              </h1>
              
              <p className="text-xl text-neutral-600 leading-relaxed">
                Ready to revolutionize your products with THINDOWN® technology? 
                Our team of experts is here to help you find the perfect solution 
                for your specific application needs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Free technical consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Custom sample development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Rapid prototyping support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Made in USA manufacturing</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-photo relative rounded-xl overflow-hidden shadow-strong">
                <Image
                  src="/images/contact/team-consultation.jpg"
                  alt="THINDOWN USA team providing technical consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-green" />
                    <p className="text-accent-green font-medium">{submitMessage}</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-accent-red/10 border border-accent-red/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-accent-red" />
                    <p className="text-accent-red font-medium">{submitMessage}</p>
                  </div>
                </div>
              )}
              
              <ContactForm 
                onSubmit={handleFormSubmit}
                isLoading={submitStatus === 'loading'}
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-neutral-900">
                Contact Information
              </h2>
              
              {contactInfo.map((info, index) => (
                <Card key={index} variant="outlined">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-sm text-neutral-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Links */}
              <Card variant="filled">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <a 
                      href="/request-sample" 
                      className="block text-sm text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      → Request Sample Kit
                    </a>
                    <a 
                      href="/military-access" 
                      className="block text-sm text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      → Military Access Portal
                    </a>
                    <a 
                      href="/technical-specs" 
                      className="block text-sm text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      → Technical Specifications
                    </a>
                    <a 
                      href="/case-studies" 
                      className="block text-sm text-primary-600 hover:text-primary-700 hover:underline"
                    >
                      → View Case Studies
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              Visit Our USA Manufacturing Facility
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Located in Syracuse, New York, our state-of-the-art manufacturing facility 
              combines Italian innovation with American craftsmanship to produce the 
              world's finest down fabric.
            </p>
          </div>

          <Card variant="elevated">
            <CardContent className="p-0">
              <div className="aspect-video relative rounded-xl overflow-hidden">
                {/* Map would be integrated here - using placeholder for now */}
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-xl font-display font-semibold text-neutral-900 mb-2">
                      THINDOWN USA Manufacturing
                    </h3>
                    <p className="text-neutral-600">
                      1234 Innovation Drive<br />
                      Syracuse, NY 13204
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Berry Amendment Compliant</h3>
              <p className="text-sm text-neutral-600">
                Full compliance with US military sourcing requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">ISO 9001 Certified</h3>
              <p className="text-sm text-neutral-600">
                Highest quality management standards and processes
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-neutral-600">
                Round-the-clock technical support for critical applications
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
