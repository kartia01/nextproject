'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          'w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--white100)] px-3 py-2 text-[16px] text-[var(--color-text-primary)] transition-[border-color,box-shadow] duration-200',
          'placeholder:text-[var(--black55)]',
          'focus:border-[var(--color-focus-ring)] focus:outline-none focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-[var(--black10)]',
          error && 'border-[var(--red)] focus:ring-[var(--red)]',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
