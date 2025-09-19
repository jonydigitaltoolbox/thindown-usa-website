import React from 'react';
import { cn } from '@/lib/utils';

// Card component props - explicit interfaces for each part
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Card Component System
 * 
 * Design decisions:
 * - Composable card system with Header, Content, Footer
 * - Multiple variants for different use cases
 * - Consistent spacing and styling
 * 
 * Usage:
 * <Card variant="elevated">
 *   <CardHeader>Title</CardHeader>
 *   <CardContent>Content here</CardContent>
 *   <CardFooter>Actions</CardFooter>
 * </Card>
 */
export function Card({ 
  variant = 'default', 
  className, 
  children, 
  ...props 
}: CardProps) {
  const baseStyles = [
    'rounded-xl overflow-hidden',
    'transition-all duration-200 ease-in-out'
  ];

  const variants = {
    default: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-medium hover:shadow-strong',
    outlined: 'bg-white border-2 border-primary-200 hover:border-primary-300',
    filled: 'bg-neutral-50 border border-neutral-200'
  };

  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('px-6 py-4 border-b border-neutral-200', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div
      className={cn('px-6 py-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('px-6 py-4 border-t border-neutral-200 bg-neutral-50', className)}
      {...props}
    >
      {children}
    </div>
  );
}
