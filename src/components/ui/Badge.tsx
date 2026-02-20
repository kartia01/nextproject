'use client';

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'error' | 'outline';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--black20)] text-[var(--color-text-primary)]',
  primary: 'bg-[var(--primary)] text-[var(--black100)]',
  success: 'bg-[var(--green)] text-[var(--white100)]',
  error: 'bg-[var(--red)] text-[var(--white100)]',
  outline: 'border border-[var(--black35)] bg-transparent text-[var(--color-text-primary)]',
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-sm)] px-2 py-0.5 text-[var(--text-caption)] font-medium',
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
