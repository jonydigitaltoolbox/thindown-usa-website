import React from 'react';
import { cn } from '@/lib/utils';

// Input component props - explicit interface
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Input Component
 * 
 * Design decisions:
 * - Supports label, error, and helper text for complete form UX
 * - Icon support for enhanced visual hierarchy
 * - Follows accessibility guidelines with proper labeling
 * 
 * Usage:
 * <Input
 *   label="Email Address"
 *   type="email"
 *   error={errors.email}
 *   placeholder="Enter your email"
 * />
 */
export function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const inputStyles = [
    'block w-full rounded-lg border px-3 py-2.5',
    'text-base placeholder-neutral-400',
    'transition-colors duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-1',
    'disabled:opacity-50 disabled:cursor-not-allowed'
  ];

  const stateStyles = error
    ? [
        'border-accent-red text-accent-red',
        'focus:border-accent-red focus:ring-accent-red'
      ]
    : [
        'border-neutral-300 text-neutral-900',
        'focus:border-primary-500 focus:ring-primary-500',
        'hover:border-neutral-400'
      ];

  const iconPadding = {
    left: leftIcon ? 'pl-10' : '',
    right: rightIcon ? 'pr-10' : ''
  };

  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-neutral-700"
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-neutral-400 sm:text-sm">{leftIcon}</span>
          </div>
        )}
        
        <input
          id={inputId}
          className={cn(
            inputStyles,
            stateStyles,
            iconPadding.left,
            iconPadding.right,
            className
          )}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-neutral-400 sm:text-sm">{rightIcon}</span>
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-accent-red font-medium">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-neutral-500">{helperText}</p>
      )}
    </div>
  );
}
