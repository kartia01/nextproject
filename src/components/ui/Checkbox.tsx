'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id: idProp, ...props }, ref) => {
    const id = idProp ?? `checkbox-${Math.random().toString(36).slice(2, 9)}`;
    return (
      <label
        htmlFor={id}
        className={cn(
          'inline-flex cursor-pointer items-center gap-2 text-base text-foreground',
          props.disabled && 'cursor-not-allowed opacity-60',
          className
        )}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded border border-(--color-border) text-primary transition-colors duration-200',
            'focus:ring-2 focus:ring-(--color-focus-ring) focus:ring-offset-2 focus:ring-offset-background',
            'disabled:cursor-not-allowed',
            error && 'border-red'
          )}
          {...props}
        />
        {label != null && <span>{label}</span>}
      </label>
    );
  }
);
Checkbox.displayName = 'Checkbox';
