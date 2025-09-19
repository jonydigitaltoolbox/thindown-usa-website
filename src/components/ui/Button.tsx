import React from 'react';
import { cn } from '@/lib/utils';

// Button variant types - explicit interface
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  asChild?: boolean;
  children: React.ReactNode;
}

/**
 * Button Component
 * 
 * Design decisions:
 * - Uses Tailwind for consistent styling across variants
 * - Supports loading state with disabled interaction
 * - Follows accessibility best practices with proper focus states
 * 
 * Usage:
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Get Started
 * </Button>
 */
export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  asChild = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = [
    'inline-flex items-center justify-center rounded-lg font-medium',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
  ];

  const variants = {
    primary: [
      'bg-primary-600 hover:bg-primary-700 text-white',
      'focus:ring-primary-500 shadow-md hover:shadow-lg'
    ],
    secondary: [
      'bg-secondary-400 hover:bg-secondary-500 text-neutral-900',
      'focus:ring-secondary-400 shadow-md hover:shadow-lg'
    ],
    outline: [
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
      'focus:ring-primary-500 hover:border-primary-700 hover:text-primary-700'
    ],
    ghost: [
      'text-primary-600 hover:bg-primary-50 hover:text-primary-700',
      'focus:ring-primary-500'
    ],
    destructive: [
      'bg-accent-red hover:bg-red-700 text-white',
      'focus:ring-red-500 shadow-md hover:shadow-lg'
    ]
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  };

  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = isLoading ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Loading...
    </>
  ) : (
    children
  );

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      className: buttonClasses,
      ...props
    });
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
