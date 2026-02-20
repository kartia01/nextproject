'use client';

import { type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: AlertVariant;
  title?: React.ReactNode;
}

const variantStyles: Record<AlertVariant, string> = {
  info: 'border-[var(--blue)] bg-[var(--blue)]/10 text-[var(--color-text-primary)]',
  success: 'border-[var(--green)] bg-[var(--green)]/10 text-[var(--color-text-primary)]',
  warning: 'border-[var(--primary)] bg-[var(--primary)]/20 text-[var(--black100)]',
  error: 'border-[var(--red)] bg-[var(--red)]/10 text-[var(--color-text-primary)]',
};

export function Alert({ variant = 'info', title, className, children, ...props }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        'rounded-[var(--radius-sm)] border px-4 py-3',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {title && <p className="font-semibold">{title}</p>}
      {children && <div className={title ? 'mt-1' : ''}>{children}</div>}
    </div>
  );
}
