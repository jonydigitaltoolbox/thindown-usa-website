import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge Tailwind classes
 * Follows coding rule: Simple utility, single purpose
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Format phone number for display
 * Pure function - no side effects
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
}

/**
 * Validate email format
 * Pure function for client-side validation
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generate safe slugs for URLs
 * Pure function - transforms input to URL-safe string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Format weight specifications consistently
 */
export function formatWeight(weight: string): string {
  return weight.replace(/g\/m²/g, 'g/m²');
}

/**
 * Format temperature ranges consistently
 */
export function formatTemperature(temp: string): string {
  return temp;
}

/**
 * Debounce function for performance optimization
 * Higher-order function that returns debounced version
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
