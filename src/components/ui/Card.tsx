'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outline' | 'filled';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'filled', ...props }, ref) => {
    const variantStyles = {
      elevated: 'bg-[var(--white100)] shadow-md',
      outline: 'border border-[var(--color-border)] bg-[var(--white100)]',
      filled: 'bg-[var(--white100)]',
    };
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-[var(--radius-sm)]',
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4 pb-0', className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        'text-[20px] font-semibold leading-[28.8px] tracking-[-0.4px] text-[var(--color-text-primary)]',
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-4', className)} {...props} />;
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center p-4 pt-0', className)} {...props} />;
}
