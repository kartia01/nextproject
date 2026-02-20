'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, error, id: idProp, ...props }, ref) => {
    const id = idProp ?? `radio-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <label
        htmlFor={id}
        className={cn(
          'inline-flex cursor-pointer items-center gap-2 text-[var(--text-body-default)] text-[var(--color-text-primary)]',
          props.disabled && 'cursor-not-allowed opacity-60',
          className
        )}
      >
        <input
          ref={ref}
          id={id}
          type="radio"
          className={cn(
            'h-4 w-4 border border-[var(--color-border)] text-[var(--primary)] transition-colors duration-200',
            'focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-2 focus:ring-offset-[var(--white100)]',
            'disabled:cursor-not-allowed',
            error && 'border-[var(--red)]'
          )}
          {...props}
        />
        {label != null && <span>{label}</span>}
      </label>
    );
  }
);
Radio.displayName = 'Radio';
