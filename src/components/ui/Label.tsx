'use client';

import { forwardRef, type LabelHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          'text-[var(--text-body-default)] font-medium text-[var(--color-text-primary)]',
          className
        )}
        {...props}
      >
        {children}
        {required && <span className="text-[var(--red)] ml-0.5" aria-hidden>*</span>}
      </label>
    );
  }
);
Label.displayName = 'Label';
