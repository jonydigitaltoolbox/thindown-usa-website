'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, type ContactForm as ContactFormType } from '@/types';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

/**
 * Contact Form Component
 * 
 * Design decisions:
 * - Uses react-hook-form with Zod validation for type safety
 * - Separates form logic from UI rendering
 * - Provides clear error messages and loading states
 * - Follows accessibility best practices
 * 
 * Usage: <ContactForm onSubmit={handleSubmit} />
 */

interface ContactFormProps {
  onSubmit: (data: ContactFormType) => Promise<void>;
  isLoading?: boolean;
}

export function ContactForm({ onSubmit, isLoading = false }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      interestedArea: 'outdoor-apparel',
      message: '',
      privacyAccepted: false,
    },
  });

  const handleFormSubmit = async (data: ContactFormType) => {
    try {
      await onSubmit(data);
      reset();
    } catch (error) {
      // Error handling is managed by parent component
      console.error('Form submission error:', error);
    }
  };

  const interestedAreaOptions = [
    { value: 'outdoor-apparel', label: 'Outdoor Apparel' },
    { value: 'fashion-lifestyle', label: 'Fashion & Lifestyle' },
    { value: 'footwear', label: 'Footwear' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'military', label: 'Military & Tactical' },
    { value: 'home-textiles', label: 'Home Textiles' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Card variant="elevated">
      <CardHeader>
        <h2 className="text-2xl font-display font-bold text-neutral-900">
          Get in Touch
        </h2>
        <p className="text-neutral-600">
          Ready to learn more about THINDOWN®? Our team is here to help you find 
          the perfect solution for your application.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Name Fields */}
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

          {/* Contact Fields */}
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

          {/* Company and Interest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Company (Optional)"
              {...register('company')}
              error={errors.company?.message}
              placeholder="Your company name"
            />
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-neutral-700">
                Area of Interest
              </label>
              <select
                {...register('interestedArea')}
                className="block w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-base focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
              >
                {interestedAreaOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.interestedArea && (
                <p className="text-sm text-accent-red font-medium">
                  {errors.interestedArea.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-neutral-700">
              Message
            </label>
            <textarea
              {...register('message')}
              rows={5}
              className="block w-full rounded-lg border border-neutral-300 px-3 py-2.5 text-base placeholder-neutral-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none resize-vertical"
              placeholder="Tell us about your project requirements, timeline, or any questions you have..."
            />
            {errors.message && (
              <p className="text-sm text-accent-red font-medium">
                {errors.message.message}
              </p>
            )}
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
                and consent to being contacted by THINDOWN USA regarding my inquiry.
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
            size="lg"
            className="w-full"
            isLoading={isLoading}
          >
            {isLoading ? 'Sending Message...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
