'use client';

import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          'w-full min-h-[80px] rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--white100)] px-3 py-2 text-[16px] text-[var(--color-text-primary)] transition-[border-color,box-shadow] duration-200 resize-y',
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
Textarea.displayName = 'Textarea';
