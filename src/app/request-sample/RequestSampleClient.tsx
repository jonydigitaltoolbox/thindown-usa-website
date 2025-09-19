'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Package, CheckCircle, AlertCircle, ArrowRight, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SampleRequestSchema, type SampleRequest } from '@/types';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

/**
 * Request Sample Client Component
 * 
 * Design decisions:
 * - Comprehensive sample request form with application-specific options
 * - Product line selection with detailed specifications
 * - Timeline and volume estimation for better service
 * - Success/error state management
 */
export function RequestSampleClient() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SampleRequest>({
    resolver: zodResolver(SampleRequestSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      applicationCategory: 'outdoor-apparel',
      productLines: [],
      projectDescription: '',
      timeline: 'immediate',
      volume: 'prototype',
      additionalRequirements: '',
      privacyAccepted: false,
    },
  });

  const handleFormSubmit = async (data: SampleRequest) => {
    setSubmitStatus('loading');
    
    try {
      // TODO: Implement actual form submission
      const response = await fetch('/api/sample-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit sample request');
      }

      setSubmitStatus('success');
      setSubmitMessage('Your sample request has been submitted! We\'ll prepare your custom sample kit and contact you within 24 hours.');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again or contact us directly.');
      console.error('Sample request submission error:', error);
    }
  };

  const applicationOptions = [
    { value: 'outdoor-apparel', label: 'Outdoor Apparel' },
    { value: 'fashion-lifestyle', label: 'Fashion & Lifestyle' },
    { value: 'footwear', label: 'Footwear' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'military', label: 'Military & Tactical' },
    { value: 'home-textiles', label: 'Home Textiles' },
    { value: 'other', label: 'Other' },
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (within 30 days)' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'over-1-year', label: 'Over 1 year' },
  ];

  const volumeOptions = [
    { value: 'prototype', label: 'Prototype/R&D' },
    { value: 'small-batch', label: 'Small batch (< 1,000 units)' },
    { value: 'medium-volume', label: 'Medium volume (1,000-10,000 units)' },
    { value: 'large-volume', label: 'Large volume (> 10,000 units)' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-50 via-white to-primary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium">
                  <Package className="w-4 h-4 mr-2" />
                  Free Sample Kit Available
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-900 text-balance">
                  Experience
                  <span className="gradient-text block">THINDOWN® Technology</span>
                </h1>
                
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Request a customized sample kit tailored to your specific application needs. 
                  Feel the revolutionary difference of the world's first real down fabric, 
                  manufactured right here in New York.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Free sample kit with multiple product options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Technical specifications and data sheets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Personal consultation with our technical team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-700">Custom samples for your specific application</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-primary-50 rounded-lg">
                <Clock className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-neutral-900">Fast Turnaround</div>
                  <div className="text-sm text-neutral-600">Sample kits typically ship within 2-3 business days</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center text-primary-600">
                  <Package className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-semibold">Sample Kit Preview</p>
                  <p className="text-sm opacity-75">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Request Form */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-accent-green/10 border border-accent-green/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-accent-green" />
                <div>
                  <h3 className="font-semibold text-accent-green mb-1">Sample Request Submitted!</h3>
                  <p className="text-accent-green">{submitMessage}</p>
                </div>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-accent-red/10 border border-accent-red/20 rounded-lg">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-accent-red" />
                <div>
                  <h3 className="font-semibold text-accent-red mb-1">Submission Error</h3>
                  <p className="text-accent-red">{submitMessage}</p>
                </div>
              </div>
            </div>
          )}

          <Card variant="elevated">
            <CardHeader>
              <h2 className="text-2xl font-display font-bold text-neutral-900">
                Sample Request Form
              </h2>
              <p className="text-neutral-600">
                Tell us about your project so we can prepare the most relevant samples for your needs.
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                    Contact Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      {...register('firstName')}
                      error={errors.firstName?.message}
                      placeholder="Enter your first name"
                    />
                    <Input
                      label="Last Name"
                      {...register('lastName')}
                      error={errors.lastName?.message}
                      placeholder="Enter your last name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Email Address"
                      type="email"
                      {...register('email')}
                      error={errors.email?.message}
                      placeholder="your@email.com"
                    />
                    <Input
                      label="Phone Number (Optional)"
                      type="tel"
                      {...register('phone')}
                      error={errors.phone?.message}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Company"
                      {...register('company')}
                      error={errors.company?.message}
                      placeholder="Your company name"
                    />
                    <Input
                      label="Job Title (Optional)"
                      {...register('jobTitle')}
                      error={errors.jobTitle?.message}
                      placeholder="Your role"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                    Project Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-neutral-700">
                        Application Category
                      </label>
                      <select
                        {...register('applicationCategory')}
                        className="block w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      >
                        {applicationOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.applicationCategory && (
                        <p className="text-sm text-accent-red font-medium">
                          {errors.applicationCategory.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-neutral-700">
                        Project Timeline
                      </label>
                      <select
                        {...register('timeline')}
                        className="block w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                      >
                        {timelineOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-neutral-700">
                      Expected Volume
                    </label>
                    <select
                      {...register('volume')}
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                    >
                      {volumeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-neutral-700">
                      Project Description
                    </label>
                    <textarea
                      {...register('projectDescription')}
                      rows={4}
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-base placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none resize-vertical"
                      placeholder="Describe your project, specific requirements, performance needs, or any other relevant details..."
                    />
                    {errors.projectDescription && (
                      <p className="text-sm text-accent-red font-medium">
                        {errors.projectDescription.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-neutral-700">
                      Additional Requirements (Optional)
                    </label>
                    <textarea
                      {...register('additionalRequirements')}
                      rows={3}
                      className="block w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-base placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none resize-vertical"
                      placeholder="Any specific certifications, performance standards, or special requirements..."
                    />
                  </div>
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacyAccepted"
                    {...register('privacyAccepted')}
                    className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <div className="text-sm">
                    <label htmlFor="privacyAccepted" className="text-neutral-700">
                      I agree to the{' '}
                      <a href="/privacy-policy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </a>{' '}
                      and consent to being contacted by THINDOWN USA regarding my sample request.
                    </label>
                    {errors.privacyAccepted && (
                      <p className="text-accent-red font-medium mt-1">
                        {errors.privacyAccepted.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="xl"
                  className="w-full"
                  isLoading={submitStatus === 'loading'}
                >
                  {submitStatus === 'loading' ? 'Submitting Request...' : 'Request Sample Kit'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-900 mb-4">
              What's Included in Your Sample Kit
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Every sample kit is customized based on your application needs and includes 
              comprehensive technical documentation to help you evaluate THINDOWN® technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                  Fabric Samples
                </h3>
                <ul className="text-sm text-neutral-600 space-y-2 text-left">
                  <li>• Multiple THINDOWN® product variants</li>
                  <li>• Various weights and thicknesses</li>
                  <li>• Application-specific recommendations</li>
                  <li>• Comparison samples when relevant</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                  Technical Documentation
                </h3>
                <ul className="text-sm text-neutral-600 space-y-2 text-left">
                  <li>• Complete technical specifications</li>
                  <li>• Performance test results</li>
                  <li>• Care and handling instructions</li>
                  <li>• Application guidelines</li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-900 mb-4">
                  Expert Consultation
                </h3>
                <ul className="text-sm text-neutral-600 space-y-2 text-left">
                  <li>• Personal technical consultation</li>
                  <li>• Application-specific recommendations</li>
                  <li>• Manufacturing guidance</li>
                  <li>• Ongoing project support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
