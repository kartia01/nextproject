'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ToastVariant = 'default' | 'success' | 'error';

export interface ToastProps {
  title?: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  className?: string;
}

const variantStyles: Record<ToastVariant, string> = {
  default: 'bg-[var(--black90)] text-[var(--white100)]',
  success: 'bg-[var(--green)] text-[var(--white100)]',
  error: 'bg-[var(--red)] text-[var(--white100)]',
};

export function Toast({ title, description, variant = 'default', className }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        'rounded-[var(--radius-sm)] px-4 py-3 shadow-lg',
        variantStyles[variant],
        className
      )}
    >
      {title && <p className="font-semibold">{title}</p>}
      {description && <p className="mt-0.5 text-sm opacity-90">{description}</p>}
    </div>
  );
}
